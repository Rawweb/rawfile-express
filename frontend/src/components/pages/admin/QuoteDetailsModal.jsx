import React from "react";

const QuoteDetailsModal = ({ open, quote, onClose }) => {
  if (!open || !quote) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50">
      <div className="bg-primary-dark text-secondary-light p-8 w-full max-w-lg rounded-lg shadow-lg border border-secondary-light/20">
        
        <h2 className="text-xl font-semibold mb-4">Quote Details</h2>

        <div className="space-y-3 text-sm">
          <p><strong>Name:</strong> {quote.fullName}</p>
          <p><strong>Email:</strong> {quote.email}</p>
          <p><strong>Phone:</strong> {quote.phone}</p>
          <p><strong>Pickup:</strong> {quote.pickup}</p>
          <p><strong>Delivery:</strong> {quote.delivery}</p>
          <p><strong>Date/Time:</strong> {quote.dateTime}</p>
          <p><strong>Details:</strong> {quote.details || "None"}</p>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full py-2 bg-secondary-light/10 rounded hover:bg-secondary-light/20"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default QuoteDetailsModal;
