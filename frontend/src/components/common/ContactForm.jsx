import React from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: '',
  });

  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';

    return newErrors;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error('Fix the highlighted errors');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Message sent!');

        setFormData({
          name: '',
          email: '',
          phone: '',
          city: '',
          message: '',
        });

      } else {
        toast.error('Failed to send message');
      }
    } catch (err) {
      toast.error('Server error');
    }

    setLoading(false);
  };

  return (
    <form
      className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      onSubmit={handleSubmit}
    >
      {/* NAME */}
      <div>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          placeholder="Your name*"
          className="w-full p-3 bg-transparent border border-secondary-light/40"
        />
        {errors.name && (
          <p className="text-red-400 text-xs mt-1">{errors.name}</p>
        )}
      </div>

      {/* EMAIL */}
      <div>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="Email*"
          className="w-full p-3 bg-transparent border border-secondary-light/40"
        />
        {errors.email && (
          <p className="text-red-400 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      {/* PHONE */}
      <div>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          type="text"
          placeholder="Phone Number*"
          className="w-full p-3 bg-transparent border border-secondary-light/40"
        />
        {errors.phone && (
          <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
        )}
      </div>

      {/* CITY */}
      <div>
        <input
          name="city"
          value={formData.city}
          onChange={handleChange}
          type="text"
          placeholder="City*"
          className="w-full p-3 bg-transparent border border-secondary-light/40"
        />
        {errors.city && (
          <p className="text-red-400 text-xs mt-1">{errors.city}</p>
        )}
      </div>

      {/* MESSAGE */}
      <div className="sm:col-span-2">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          placeholder="Your Message"
          className="w-full p-3 bg-transparent border border-secondary-light/40"
        ></textarea>
        {errors.message && (
          <p className="text-red-400 text-xs mt-1">{errors.message}</p>
        )}
      </div>

      {/* BUTTON */}
      <div className="sm:col-span-2 flex justify-center pt-2">
        <button
          type="submit"
          disabled={loading}
          className="primary-btn-2 group mt-5 flex items-center gap-2"
        >
          {loading && (
            <span className="loader-small border-primary-dark"></span>
          )}

          <span className="relative z-10 text-primary-dark">
            {loading ? 'Sending...' : 'Submit Message'}
          </span>

          <span className="primary-btn-overlay-2"></span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
