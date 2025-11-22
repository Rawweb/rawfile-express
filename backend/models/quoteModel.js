const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },

    pickup: {
      type: String,
      required: true,
    },
    delivery: {
      type: String,
      required: true,
    },

    dateTime: {
      type: String,
      required: true,
    },

    details: {
      type: String,
    },
    
    contacted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Quote', quoteSchema);
