const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const trackingRoutes = require('./routes/trackingRoutes');
const quoteRoutes = require('./routes/quoteRoutes');
const adminAuthRoutes = require('./routes/adminAuthRoutes');

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 6000;

// Test
app.get('/', (req, res) => {
  res.send('Shipping Website API Is Running');
});

// Public Routes
app.use('/api/quote', quoteRoutes);
app.use('/api/admin', adminAuthRoutes);

// Tracking Routes (public GET, protected POST/PATCH/DELETE inside file)
app.use('/api/track', trackingRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
