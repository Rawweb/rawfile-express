import React, { useState } from 'react';
import { toast } from 'sonner';

const QuoteForm = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    pickup: '',
    delivery: '',
    dateTime: '',
    details: '',
  });

  const [loading, setLoading] = useState(false);

  // handle input change
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // simple validation
  const validateForm = () => {
    if (!form.fullName.trim()) return 'Full name is required';
    if (!form.email.trim() || !form.email.includes('@'))
      return 'Valid email is required';
    if (!form.phone.trim()) return 'Phone number is required';
    if (!form.pickup.trim()) return 'Pickup location is required';
    if (!form.delivery.trim()) return 'Delivery location is required';
    if (!form.dateTime.trim()) return 'Date and time is required';
    // if (!form.details.trim()) return 'Details are required';

    return null;
  };

  // submit handler
  const handleSubmit = async e => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      toast.error(validationError);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/quote/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || 'Failed to submit quote');
        setLoading(false);
        return;
      }

      toast.success('Your quote request has been submitted!');

      // reset form
      setForm({
        fullName: '',
        email: '',
        phone: '',
        pickup: '',
        delivery: '',
        dateTime: '',
        details: '',
      });
    } catch (error) {
      toast.error('Something went wrong, please try again.');
    }

    setLoading(false);
  };

  return (
    <section className="container py-20">
      <div className="bg-primary-dark text-secondary-light px-6 sm:px-10 md:px-20 py-16">
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <p className="text-xs sm:text-sm bg-secondary-light/20 px-2 py-1 border-l-4 border-primary-yellow w-fit mx-auto">
            Quote
          </p>
          <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl">
            Request a Free Quote
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Fill out the form below to receive a quick estimate for your
            shipment. Our team will get back to you promptly.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-primary-light/10 border border-secondary-light/10  p-8 space-y-8 shadow-md"
        >
          {/* Personal Data */}
          <div>
            <h2 className="text-primary-yellow font-medium mb-4">
              Personal Data
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* full name */}
              <div className="flex flex-col">
                <label className="text-sm mb-2 font-medium">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  className="bg-transparent border-b border-secondary-light/50 p-2 focus:border-primary-yellow focus:outline-none text-secondary-light placeholder-gray-400"
                />
              </div>

              {/* email */}
              <div className="flex flex-col">
                <label className="text-sm mb-2 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  className="bg-transparent border-b border-secondary-light/50 p-2 focus:border-primary-yellow focus:outline-none text-secondary-light placeholder-gray-400"
                />
              </div>

              {/* phone */}
              <div className="flex flex-col">
                <label className="text-sm mb-2 font-medium">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="bg-transparent border-b border-secondary-light/50 p-2 focus:border-primary-yellow focus:outline-none text-secondary-light placeholder-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Package Information */}
          <div>
            <h2 className="text-primary-yellow font-medium mb-4">
              Package Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <label className="text-sm mb-2 font-medium">
                  Pickup Location
                </label>
                <input
                  type="text"
                  name="pickup"
                  value={form.pickup}
                  onChange={handleChange}
                  placeholder="Enter pickup location"
                  className="bg-transparent border-b border-secondary-light/50 p-2 focus:border-primary-yellow focus:outline-none text-secondary-light placeholder-gray-400"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm mb-2 font-medium">
                  Delivery Location
                </label>
                <input
                  type="text"
                  name="delivery"
                  value={form.delivery}
                  onChange={handleChange}
                  placeholder="Enter delivery location"
                  className="bg-transparent border-b border-secondary-light/50 p-2 focus:border-primary-yellow focus:outline-none text-secondary-light placeholder-gray-400"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm mb-2 font-medium">
                  Date and Time
                </label>
                <input
                  type="datetime-local"
                  name="dateTime"
                  value={form.dateTime}
                  onChange={handleChange}
                  className="bg-transparent border-b border-secondary-light/50 p-2 focus:border-primary-yellow focus:outline-none text-secondary-light"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col">
              <label className="text-sm mb-2 font-medium">
                Important Details
              </label>
              <textarea
                rows="4"
                name="details"
                value={form.details}
                onChange={handleChange}
                placeholder="Please provide dimensions, weight, instructions, etc."
                className="bg-transparent border-b border-secondary-light/50 p-2 focus:border-primary-yellow focus:outline-none text-secondary-light placeholder-gray-400"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-5">
            <button
              type="submit"
              disabled={loading}
              className={`primary-btn-2 group mt-5 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <span className="relative z-10 text-primary-dark">
                {loading ? 'Submitting...' : 'Request Quote'}
              </span>

              {/* White overlay slides in diagonally (bottom-right → top-left) */}
              <span className="primary-btn-overlay-2"></span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default QuoteForm;
