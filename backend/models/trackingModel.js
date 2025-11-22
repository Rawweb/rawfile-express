const mongoose = require('mongoose');

const trackingSchema = new mongoose.Schema(
  {
    trackingId: {
      type: String,
      required: true,
      unique: true,
    },

    sender: {
      type: String,
      required: true,
    },

    receiver: {
      type: String,
      required: true,
    },

    customerEmail: {
      type: String,
    },

    status: {
      type: String,
      required: true,
      enum: ['Pending', 'In Transit', 'Delivered', 'Cancelled'],
      default: 'Pending',
    },

    location: {
      type: String,
      required: true,
    },
    eta: {
      type: Date,
    },
    history: [
      {
        date: { type: String },
        details: { type: String },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Tracking', trackingSchema);