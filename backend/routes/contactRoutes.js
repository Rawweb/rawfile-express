const express = require('express');
const router = express.Router();
const sendEmail = require('../utils/sendEmail');
const contactSchema = require('../validators/contactValidator');

router.post('/', async (req, res) => {
  try {
    // Validate request
    const { error, value } = contactSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    const { name, email, phone, city, message } = value;

    await sendEmail(
      process.env.ADMIN_EMAIL,
      'New Contact Form Message',
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
        New Contact Message
      </h3>

      <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
      <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
      <p style="margin: 8px 0;"><strong>Phone:</strong> ${phone}</p>
      <p style="margin: 8px 0;"><strong>City:</strong> ${city}</p>
      <p style="margin: 8px 0;"><strong>Message:</strong> ${message}</p>
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

    res.status(200).json({
      success: true,
      message: 'Message sent successfully',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message',
    });
  }
});

module.exports = router;
