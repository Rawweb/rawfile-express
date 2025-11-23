const express = require('express');
const Quote = require('../models/quoteModel');
const sendEmail = require('../utils/sendEmail');
const quoteSchema = require('../validators/quoteValidator');

const router = express.Router();

// POST create a quote request
router.post('/create', async (req, res) => {
  try {
    // validate input using Joi
    const { error, value } = quoteSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    // value contains VALIDATED data
    const { fullName, email, phone, pickup, delivery, dateTime, details } =
      value;

    // format date and time
    const formattedDate = new Date(dateTime).toLocaleString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

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
    await sendEmail(
      process.env.ADMIN_EMAIL,
      'New Quote Request',
      `
  <div style="max-width: 600px; margin: auto; background: #ffffff;
      border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;
      font-family: Arial, sans-serif;">

    <!-- Header -->
    <div style="padding: 16px; display: flex; align-items: center;
        border-bottom: 3px solid #FACC15; background:#091242;">
      <img src="cid:logo" alt="RawExpress" style="height: 28px; margin-right: 10px;" />
      <h2 style="color: #f4f4f4; font-size: 20px; margin: 0;">RawExpress</h2>
    </div>

    <!-- Body -->
    <div style="padding: 20px;">
      <h3 style="color:#091242; margin-bottom: 18px; font-size: 20px;">
        New Quote Request
      </h3>

      <p style="margin: 8px 0;"><strong>Name:</strong> ${fullName}</p>
      <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
      <p style="margin: 8px 0;"><strong>Phone:</strong> ${phone}</p>
      <p style="margin: 8px 0;"><strong>Pickup:</strong> ${pickup}</p>
      <p style="margin: 8px 0;"><strong>Delivery:</strong> ${delivery}</p>
      <p><strong>Date/Time:</strong> ${formattedDate}</p>
      <p style="margin: 8px 0;"><strong>Details:</strong> ${
        details || 'None'
      }</p>
    </div>

     <!-- Footer -->
      <div style="text-align:center; margin-top:35px; padding-top:20px; border-top:1px solid #eee;">

        <p style="font-size:13px; color:#091242; font-weight:bold; margin:0;">
          RawExpress 
          <span style="color:#6c7280; font-weight:normal;">— Delivering with Speed & Safety</span>
        </p>

        <p style="font-size:13px; color:#6c7280; margin:6px 0 0;">
          Need help? Reach us at 
          <a href="mailto:${process.env.ADMIN_EMAIL}" 
             style="color:#091242; text-decoration:none; font-weight:bold;">
             ${process.env.ADMIN_EMAIL}
          </a>
        </p>

        <p style="font-size:13px; color:#6c7280; margin:6px 0;">
          Follow us on 
          <span style="color:#091242; font-weight:bold;">Instagram</span>, 
          <span style="color:#091242; font-weight:bold;">Facebook</span>, 
          <span style="color:#091242; font-weight:bold;">LinkedIn</span>
        </p>

        <p style="font-size:13px; color:#6c7280; margin:6px 0;">
          Don’t want more emails from us? 
          <a href="https://rawexpress.com/unsubscribe" style="color:#dc2626; font-weight:bold;">
            Unsubscribe
          </a>
        </p>

        <p style="font-size:12px; color:#aaa; margin-top:18px;">
          © ${new Date().getFullYear()} RawExpress. All rights reserved.
        </p>

      </div>
  </div>
`
    );

    // Send confirmation to user
    await sendEmail(
      email,
      'Your Quote Request Has Been Received',
      `
  <div style="max-width: 600px; margin: auto; background: #ffffff;
      border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;
      font-family: Arial, sans-serif;">

    <!-- Header -->
    <div style="padding: 16px; display: flex; align-items: center;
        border-bottom: 3px solid #FACC15; background:#091242;">
      <img src="cid:logo" alt="RawExpress" style="height: 28px; margin-right: 10px;" />
      <h2 style="color: #f4f4f4; font-size: 20px; margin: 0;">RawExpress</h2>
    </div>

    <!-- Body -->
    <div style="padding: 20px;">
      <h3 style="color:#091242; margin-bottom: 10px; font-size: 20px;">
        Thank You, ${fullName}
      </h3>

      <p style="margin: 8px 0; font-size: 15px;">
        We’ve received your quote request. Our team will get back to you shortly.
      </p>

      <h4 style="margin-top: 18px; color:#091242; font-size: 18px;">Request Summary:</h4>

      <p style="margin: 8px 0;"><strong>Pickup:</strong> ${pickup}</p>
      <p style="margin: 8px 0;"><strong>Delivery:</strong> ${delivery}</p>
      <p style="margin: 8px 0;"><strong>Date/Time:</strong> ${dateTime}</p>
    </div>

     <!-- Footer -->
      <div style="text-align:center; margin-top:35px; padding-top:20px; border-top:1px solid #eee;">

        <p style="font-size:13px; color:#091242; font-weight:bold; margin:0;">
          RawExpress 
          <span style="color:#6c7280; font-weight:normal;">— Delivering with Speed & Safety</span>
        </p>

        <p style="font-size:13px; color:#6c7280; margin:6px 0 0;">
          Need help? Reach us at 
          <a href="mailto:${process.env.ADMIN_EMAIL}" 
             style="color:#091242; text-decoration:none; font-weight:bold;">
             ${process.env.ADMIN_EMAIL}
          </a>
        </p>

        <p style="font-size:13px; color:#6c7280; margin:6px 0;">
          Follow us on 
          <span style="color:#091242; font-weight:bold;">Instagram</span>, 
          <span style="color:#091242; font-weight:bold;">Facebook</span>, 
          <span style="color:#091242; font-weight:bold;">LinkedIn</span>
        </p>

        <p style="font-size:13px; color:#6c7280; margin:6px 0;">
          Don’t want more emails from us? 
          <a href="https://rawexpress.com/unsubscribe" style="color:#dc2626; font-weight:bold;">
            Unsubscribe
          </a>
        </p>

        <p style="font-size:12px; color:#aaa; margin-top:18px;">
          © ${new Date().getFullYear()} RawExpress. All rights reserved.
        </p>

      </div>
  </div>
`
    );

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
