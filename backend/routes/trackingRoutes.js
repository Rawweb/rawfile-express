const express = require('express');
const Tracking = require('../models/trackingModel');
const authAdmin = require('../middleware/authAdmin');


const router = express.Router();

// GET /api/track/all?page=1&limit=10
router.get('/all', async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, parseInt(req.query.limit) || 4);
    const skip = (page - 1) * limit;

    const [total, shipments] = await Promise.all([
      Tracking.countDocuments({}),
      Tracking.find({}).sort({ createdAt: -1 }).skip(skip).limit(limit),
    ]);

    res.json({
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
      shipments,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching shipments' });
  }
});

// GENERATE AND CREATE NEW TRACKING ID
router.get('/generate-id', (req, res) => {
  const random = Math.floor(10000000 + Math.random() * 90000000);
  const id = `RXP-${random}`;
  res.json({ trackingId: id });
});

//  POST create shipment
router.post('/create', authAdmin, async (req, res) => {
  try {
    const { trackingId, sender, receiver, status, location, eta, history } =
      req.body;

    if (!trackingId) {
      return res.status(400).json({
        message: 'trackingId is required',
      });
    }

    const exists = await Tracking.findOne({ trackingId });
    if (exists) {
      return res.status(400).json({
        message: 'Tracking ID already exists',
      });
    }

    const shipment = new Tracking({
      trackingId,
      sender,
      receiver,
      status,
      location,
      eta,
      history,
    });

    await shipment.save();

    res.status(201).json({
      message: 'Shipment created successfully',
      shipment,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error creating shipment',
    });
  }
});

// HISTORY - add history entry
router.post('/history/:trackingId',  async (req, res) => {
  try {
    const { date, details } = req.body;

    const shipment = await Tracking.findOne({
      trackingId: req.params.trackingId,
    });

    if (!shipment) {
      return res.status(404).json({ message: 'Tracking ID not found' });
    }

    shipment.history.push({ date, details });
    await shipment.save();

    res.json({ message: 'History updated', shipment });
  } catch (error) {
    res.status(500).json({ message: 'Error adding tracking history' });
  }
});

const sendEmail = require('../utils/sendEmail');

// PATCH update shipment by tracking ID
router.patch('/update/:trackingId', authAdmin, async (req, res) => {
  try {
    const updateData = req.body;

    // find current
    const existing = await Tracking.findOne({
      trackingId: req.params.trackingId,
    });
    if (!existing)
      return res.status(404).json({ message: 'Tracking ID not found' });

    const oldStatus = existing.status;

    // apply updates
    Object.assign(existing, updateData);
    await existing.save();

    // detect status change
    if (updateData.status && updateData.status !== oldStatus) {
      // send email to receiver (if receiver property is an email, or you can store receiverEmail)
      // assuming 'receiver' is a name; if you have receiverEmail, use that. If not, send to admin or store customer email on creation.
      // Example assumes you stored a 'customerEmail' on the tracking model. If not, send to ADMIN.

      const toEmail = existing.customerEmail || process.env.ADMIN_EMAIL;
      const subject = `Shipment ${existing.trackingId} status updated to ${existing.status}`;
      const html = `
        <h2>Shipment Status Update</h2>
        <p>Your shipment <strong>${
          existing.trackingId
        }</strong> status changed from <strong>${oldStatus}</strong> to <strong>${
        existing.status
      }</strong>.</p>
        <p>Current location: ${existing.location || 'Unknown'}</p>
        <p>ETA: ${existing.eta || 'Unavailable'}</p>
        <p>Thank you for using Raw Express.</p>
      `;
      try {
        await sendEmail({ to: toEmail, subject, html });
      } catch (err) {
        console.error('Failed to send status email', err);
      }
    }

    res.json({ message: 'Shipment updated', shipment: existing });
  } catch (error) {
    res.status(500).json({ message: 'Error updating shipment' });
  }
});

// DELETE shipment by tracking ID
router.delete('/:trackingId', authAdmin, async (req, res) => {
  try {
    const deleted = await Tracking.findOneAndDelete({
      trackingId: req.params.trackingId,
    });

    if (!deleted) {
      return res.status(404).json({ message: 'Tracking ID not found' });
    }

    res.json({ message: 'Shipment deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting shipment' });
  }
});

//  GET shipment by tracking ID
router.get('/:trackingId', async (req, res) => {
  try {
    const shipment = await Tracking.findOne({
      trackingId: req.params.trackingId,
    });

    if (!shipment) {
      return res.status(404).json({ message: 'Tracking ID not found' });
    }

    res.json(shipment);
  } catch (error) {
    res.status(500).json({ message: 'Server error fetching shipment' });
  }
});

module.exports = router;
