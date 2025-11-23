const nodemailer = require('nodemailer');
const path = require('path');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendEmail(to, subject, html) {
  try {
    const info = await transporter.sendMail({
      from: `"RawExpress" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,

      // logo here
      attachments: [
        {
          filename: 'logo.png',
          path: path.join(__dirname, '../assets/logo.png'),
          cid: 'logo' 
        }
      ]
    });

    console.log('Email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Email error:', error);
    throw error;
  }
}

module.exports = sendEmail;
