const express = require('express');
const Quote = require('../models/quoteModel');
const sendEmail = require('../utils/sendEmail');

const router = express.Router();

// POST create a quote request
router.post('/create', async (req, res) => {
  try {
    const { fullName, email, phone, pickup, delivery, dateTime, details } =
      req.body;

    if (!fullName || !email || !phone || !pickup || !delivery || !dateTime) {
      return res
        .status(400)
        .json({ message: 'Please fill all required fields' });
    }

    const newQuote = new Quote({
      fullName,
      email,
      phone,
      pickup,
      delivery,
      dateTime,
      details,
    });

    await newQuote.save();

    // Send email to admin
    await sendEmail({
      to: process.env.ADMIN_EMAIL,
      subject: 'New Quote Request',
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Pickup:</strong> ${pickup}</p>
        <p><strong>Delivery:</strong> ${delivery}</p>
        <p><strong>Date/Time:</strong> ${dateTime}</p>
        <p><strong>Details:</strong> ${details || 'None'}</p>
      `,
    });

    // Send confirmation to user
    await sendEmail({
      to: email,
      subject: 'Your Quote Request Has Been Received',
      html: `
        <h2>Thank you, ${fullName}!</h2>
        <p>Your quote request has been received. Our team will reach out shortly.</p>

        <h3>Request Summary:</h3>
        <p><strong>Pickup:</strong> ${pickup}</p>
        <p><strong>Delivery:</strong> ${delivery}</p>
        <p><strong>Date/Time:</strong> ${dateTime}</p>
      `,
    });

    res.status(201).json({
      message: 'Quote request submitted',
      quote: newQuote,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error submitting quote' });
  }
});

// GET all quotes (Admin)
router.get('/all', async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, parseInt(req.query.limit) || 6);
    const skip = (page - 1) * limit;

    const [total, quotes] = await Promise.all([
      Quote.countDocuments({}),
      Quote.find({}).sort({ createdAt: -1 }).skip(skip).limit(limit),
    ]);

    res.json({
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
      quotes,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching quotes' });
  }
});

// PATCH mark quote as contacted (Admin)
router.patch('/contacted/:id', async (req, res) => {
  try {
    const updated = await Quote.findByIdAndUpdate(
      req.params.id,
      { contacted: req.body.contacted },
      { new: true }
    );

    res.json({ message: 'Updated', quote: updated });
  } catch (err) {
    res.status(500).json({ message: 'Error updating contacted status' });
  }
});

// DELETE a quote
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Quote.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: 'Quote not found' });
    }

    res.json({ message: 'Quote deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting quote' });
  }
});

module.exports = router;
