import React, { useState } from 'react';
import { toast } from 'sonner';
import api from '@lib/api';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { FiRefreshCw } from 'react-icons/fi';
import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const CreateShipment = () => {
  const statuses = ['Pending', 'In Transit', 'Delivered', 'Cancelled'];
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
          <div className="w-full">
            <Listbox
              value={form.status}
              onChange={value => setForm({ ...form, status: value })}
            >
              <div className="relative mt-1">
                <Listbox.Button
                  className="
          relative w-full cursor-pointer
          bg-primary-dark border border-secondary-light/40 
          py-3 pl-4 pr-10 text-left 
          text-secondary-light focus:outline-none
          focus:border-primary-yellow
        "
                >
                  <span className="block truncate">{form.status}</span>

                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                    <FiChevronDown className="text-secondary-light" />
                  </span>
                </Listbox.Button>

                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options
                    className="
            absolute mt-2 w-full bg-primary-dark 
            shadow-lg border border-secondary-light/30 
            py-2 focus:outline-none z-50
          "
                  >
                    {statuses.map((status, index) => (
                      <Listbox.Option
                        key={index}
                        className={({ active }) =>
                          `cursor-pointer select-none py-2 px-4 text-sm ${
                            active
                              ? 'bg-primary-yellow text-primary-dark'
                              : 'text-secondary-light'
                          }`
                        }
                        value={status}
                      >
                        {status}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>

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
            <button
              type="submit"
              className="px-6 py-3 w-full md:w-1/3  bg-primary-yellow text-primary-dark font-medium  hover:opacity-90 flex items-center justify-center gap-2"
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
