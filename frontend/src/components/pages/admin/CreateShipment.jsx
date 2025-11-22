import React, { useState } from 'react';
import { toast } from 'sonner';
import api from '@lib/api';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { FiRefreshCw } from 'react-icons/fi';

const CreateShipment = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('admin_token');

  const [form, setForm] = useState({
    trackingId: '',
    sender: '',
    receiver: '',
    status: 'Pending',
    location: '',
    eta: null,
  });

  const updateField = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // GENERATE TRACKING ID
  const handleGenerateId = async () => {
    try {
      const res = await fetch('/api/track/generate-id');
      const data = await res.json();
      setForm({ ...form, trackingId: data.trackingId });
      toast.success('Tracking ID generated!');
    } catch (err) {
      toast.error('Failed to generate ID');
    }
  };

  const handleCreate = async e => {
    e.preventDefault();

    try {
      const payload = {
        ...form,
        eta: form.eta ? form.eta.toISOString() : null,
      };

      await api.admin.createShipment(payload, token);
      toast.success('Shipment created!');
      navigate('/admin');
    } catch (err) {
      toast.error('Failed to create shipment');
    }
  };

  return (
    <section className="container py-20">
      <div className="bg-primary-dark text-secondary-light p-10 sm:p-12 lg:p-20 rounded-md border-2 border-secondary-light/20">
        {/* HEADER */}
        <div className="text-center mb-10 space-y-3">
          <p className="text-xs sm:text-sm bg-secondary-light/20 px-2 py-1 border-l-4 border-primary-yellow w-fit mx-auto">
            Admin • Shipments
          </p>
          <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl">
            Create Shipment
          </h1>
          <p className="text-gray-400 text-sm md:text-base md:max-w-2xl mx-auto">
            Fill in the details below to create a new shipment entry.
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleCreate}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {/* TRACKING ID + BUTTON */}
          <div className="sm:col-span-2 flex flex-col md:flex-row items-center gap-4">
            <input
              type="text"
              name="trackingId"
              placeholder="Tracking ID"
              value={form.trackingId}
              onChange={updateField}
              className="w-full p-3 bg-transparent border border-secondary-light/40 
                text-secondary-light placeholder-gray-400 
                focus:border-primary-yellow focus:outline-none"
            />
            <button
              type="button"
              onClick={handleGenerateId}
              className="px-6 py-3 w-full md:w-1/4  bg-primary-yellow text-primary-dark font-medium  hover:opacity-90 flex items-center justify-center gap-2"
            >
              <FiRefreshCw /> Generate
            </button>
          </div>

          <input
            type="text"
            name="sender"
            placeholder="Sender*"
            onChange={updateField}
            className="w-full p-3 bg-transparent border border-secondary-light/40 
              text-secondary-light placeholder-gray-400 
              focus:border-primary-yellow focus:outline-none"
          />
          <input
            type="text"
            name="receiver"
            placeholder="Receiver*"
            onChange={updateField}
            className="w-full p-3 bg-transparent border border-secondary-light/40 
              text-secondary-light placeholder-gray-400 
              focus:border-primary-yellow focus:outline-none"
          />

          <input
            type="text"
            name="location"
            placeholder="Current Location*"
            onChange={updateField}
            className="w-full p-3 bg-transparent border border-secondary-light/40 
              text-secondary-light placeholder-gray-400 
              focus:border-primary-yellow focus:outline-none"
          />

          {/* STATUS SELECT */}
          <select
            name="status"
            onChange={updateField}
            className="w-full p-3 bg-transparent border border-secondary-light/40 text-secondary-light focus:border-primary-yellow"
          >
            <option>Pending</option>
            <option>In Transit</option>
            <option>Delivered</option>
            <option>Cancelled</option>
          </select>

          {/* DATE PICKER */}
          <div className="sm:col-span-2">
            <label className="text-sm block mb-2 text-secondary-light">
              Estimated Delivery
            </label>

            <DatePicker
              selected={form.eta}
              onChange={date => setForm({ ...form, eta: date })}
              showTimeSelect
              dateFormat="yyyy-MM-dd h:mm aa"
              placeholderText="Select date and time"
              className="w-full p-3 bg-transparent border border-secondary-light/40
                text-secondary-light placeholder-gray-400 
                focus:border-primary-yellow focus:outline-none"
              calendarClassName="bg-primary-dark text-secondary-light border border-secondary-light/20 "
            />
          </div>

          {/* SUBMIT BUTTON */}
          <div className="sm:col-span-2 flex justify-center pt-5">
            <button type="submit"  className="px-6 py-3 w-full md:w-1/3  bg-primary-yellow text-primary-dark font-medium  hover:opacity-90 flex items-center justify-center gap-2"
            >
                Create Shipment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateShipment;
