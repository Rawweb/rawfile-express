// utils/sendEmail.js
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({ to, subject, html }) => {
  try {
    await resend.emails.send({
      from: process.env.FROM_EMAIL, 
      subject: 'New Quote Request',
      html: `...`,
    }); 

    return { success: true };
  } catch (err) {
    console.error('Email sending error:', err);
    throw new Error('Email failed');
  }
};

module.exports = sendEmail;
