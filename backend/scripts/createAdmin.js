// scripts/createAdmin.js
const mongoose = require('mongoose');
const Admin = require('../models/adminModel');
const bcrypt = require('bcrypt');
require('dotenv').config();
const connectDB = require('../config/db');

(async () => {
  await connectDB();
  const pw = 'Chibuikem98+';
  const hash = await bcrypt.hash(pw, 12);

  const admin = new Admin({
    username: 'admin',
    passwordHash: hash,
  });
  
  await admin.save();
  console.log('admin created');
  process.exit(0);
})();
