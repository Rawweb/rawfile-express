import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import api from '@lib/api';
import { useParams, useNavigate } from 'react-router-dom';
import ConfirmModal from '@components/common/ConfirmModal';
import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EditShipment = () => {
  const { id } = useParams(); // trackingId
  const navigate = useNavigate();
  const token = localStorage.getItem('admin_token');

  const [loading, setLoading] = useState(true);
  const [shipment, setShipment] = useState(null);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const statuses = ['Pending', 'In Transit', 'Delivered', 'Cancelled'];

  useEffect(() => {
    (async () => {
      try {
        const res = await api.track.getOne(id);
        setShipment(res);
      } catch {
        toast.error('Shipment not found');
        navigate('/admin/all-shipments');
      }
      setLoading(false);
    })();
  }, [id]);

  const updateField = e =>
    setShipment({ ...shipment, [e.target.name]: e.target.value });

  /* History helpers */
  const updateHistoryItem = (index, key, value) => {
    const newHistory = [...(shipment.history || [])];
    newHistory[index] = { ...newHistory[index], [key]: value };
    setShipment({ ...shipment, history: newHistory });
  };

  const deleteHistoryItem = index => {
    const newHistory = [...(shipment.history || [])];
    newHistory.splice(index, 1);
    setShipment({ ...shipment, history: newHistory });
    toast.success('History removed (save to persist)');
  };

  const addHistory = () => {
    const details = shipment.newHistoryDetails?.trim();
    const date = shipment.newHistoryDate;
    if (!details || !date) return toast.error('Enter both date and details');
    const newHistory = [...(shipment.history || []), { date, details }];
    setShipment({
      ...shipment,
      history: newHistory,
      newHistoryDetails: '',
      newHistoryDate: '',
    });
    toast.success('History added (save changes)');
  };

  const saveChanges = async e => {
    e.preventDefault();
    try {
      // send only fields you want - here we send full shipment object as update
      const payload = {
        sender: shipment.sender,
        receiver: shipment.receiver,
        location: shipment.location,
        status: shipment.status,
        eta: shipment.eta,
        history: shipment.history,
      };
      await api.admin.updateShipment(id, payload, token);
      toast.success('Shipment updated');
      navigate('/admin/all-shipments');
    } catch {
      toast.error('Failed to update shipment');
    }
  };

  const promptDeleteShipment = () => setConfirmOpen(true);

  const confirmDeleteShipment = async () => {
    try {
      await api.admin.deleteShipment(id, token);
      toast.success('Shipment deleted');
      navigate('/admin/all-shipments');
    } catch {
      toast.error('Failed to delete shipment');
    }
  };

  if (loading || !shipment)
    return <p className="text-center py-16">Loading...</p>;

  return (
    <section className="container py-20">
      <div className="bg-primary-dark text-secondary-light p-10 sm:p-12 lg:p-20 rounded-md border-2 border-secondary-light/20">
        {/* HEADER */}
        <div className="text-center mb-10 space-y-3">
          <p className="text-xs sm:text-sm bg-secondary-light/20 px-2 py-1 border-l-4 border-primary-yellow w-fit mx-auto">
            Admin • Shipments
          </p>

          <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl">
            Edit Shipment
          </h1>

          <p className="text-gray-400 text-sm md:text-base md:max-w-2xl mx-auto">
            Update details for{' '}
            <span className="text-primary-yellow">{shipment.trackingId}</span>
          </p>
        </div>

        <form
          onSubmit={saveChanges}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {/* SENDER */}
          <div className="sm:col-span-2">
            <h2 className="text-primary-yellow font-medium mb-2">
              Sender & Receiver
            </h2>
          </div>

          <input
            name="sender"
            value={shipment.sender}
            onChange={updateField}
            placeholder="Sender"
            className="w-full p-3 bg-transparent border border-secondary-light/40 text-secondary-light focus:border-primary-yellow focus:outline-none placeholder-gray-400"
          />

          <input
            name="receiver"
            value={shipment.receiver}
            onChange={updateField}
            placeholder="Receiver"
            className="w-full p-3 bg-transparent border border-secondary-light/40 text-secondary-light focus:border-primary-yellow focus:outline-none placeholder-gray-400"
          />

          {/* LOCATION */}
          <div className="sm:col-span-2 mt-2">
            <h2 className="text-primary-yellow font-medium mb-2">
              Current Status
            </h2>
          </div>

          <input
            name="location"
            value={shipment.location}
            onChange={updateField}
            placeholder="Current Location"
            className="w-full p-3 bg-transparent border border-secondary-light/40 text-secondary-light focus:border-primary-yellow focus:outline-none placeholder-gray-400"
          />

          {/* STATUS */}
          <div className="w-full">
            <Listbox
              value={shipment.status}
              onChange={value => setShipment({ ...shipment, status: value })}
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
                  <span className="block truncate">{shipment.status}</span>

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

          {/* ETA */}
          <div className="sm:col-span-2">
            <label className="text-sm block mb-2 text-secondary-light">
              Estimated Delivery
            </label>
            <input
              name="eta"
              type="datetime-local"
              value={shipment.eta?.slice(0, 16)}
              onChange={updateField}
              className="w-full p-3 bg-transparent border border-secondary-light/40 text-secondary-light focus:border-primary-yellow focus:outline-none "
            />
          </div>

          {/* HISTORY SECTION */}
          <div className="sm:col-span-2 pt-6 border-t border-secondary-light/20">
            <h2 className="text-primary-yellow font-medium mb-4">
              Shipment History
            </h2>

            {shipment.history?.length ? (
              <div className="space-y-4">
                {shipment.history.map((h, i) => (
                  <div
                    key={i}
                    className="flex flex-col md:flex-row items-start gap-4 bg-primary-light/10 p-4 rounded-md border border-secondary-light/20"
                  >
                    <DatePicker
                      selected={h.date ? new Date(h.date) : null}
                      onChange={date =>
                        updateHistoryItem(
                          i,
                          'date',
                          date.toISOString().slice(0, 10)
                        )
                      }
                      dateFormat="yyyy-MM-dd"
                      placeholderText="Select date"
                      className="p-3 bg-transparent border border-secondary-light/40 text-secondary-light focus:border-primary-yellow focus:outline-none w-full md:w-40"
                      calendarClassName="bg-primary-dark text-secondary-light border border-secondary-light/20"
                    />

                    <input
                      type="text"
                      value={h.details}
                      onChange={e =>
                        updateHistoryItem(i, 'details', e.target.value)
                      }
                      placeholder="Details"
                      className="p-3 bg-transparent border border-secondary-light/40 text-secondary-light focus:border-primary-yellow focus:outline-none w-full"
                    />

                    <button
                      type="button"
                      onClick={() => deleteHistoryItem(i)}
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-secondary-muted">No history yet</p>
            )}

            {/* ADD HISTORY */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <input
                type="date"
                value={shipment.newHistoryDate || ''}
                onChange={e =>
                  setShipment({ ...shipment, newHistoryDate: e.target.value })
                }
                className="p-3 bg-transparent border border-secondary-light/40 text-secondary-light focus:border-primary-yellow focus:outline-none"
              />

              <input
                type="text"
                value={shipment.newHistoryDetails || ''}
                onChange={e =>
                  setShipment({
                    ...shipment,
                    newHistoryDetails: e.target.value,
                  })
                }
                placeholder="Details"
                className="p-3 bg-transparent border border-secondary-light/40 text-secondary-light focus:border-primary-yellow focus:outline-none"
              />

              <button
                type="button"
                onClick={addHistory}
                className="px-4 py-3 bg-primary-yellow text-primary-dark hover:opacity-90"
              >
                Add
              </button>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="sm:col-span-2 flex flex-col md:flex-row gap-4 justify-center pt-6">
            <button
              type="submit"
              className="px-8 py-3 bg-primary-yellow text-primary-dark font-medium hover:opacity-90"
            >
              Save Changes
            </button>

            <button
              type="button"
              onClick={() => navigate('/admin/all-shipments')}
              className="px-8 py-3 bg-secondary-light/5 border border-secondary-light/20 text-secondary-light"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={() => setConfirmOpen(true)}
              className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white"
            >
              Delete Shipment
            </button>
          </div>
        </form>
      </div>

      <ConfirmModal
        open={confirmOpen}
        title="Delete shipment?"
        message={`Are you sure you want to delete ${shipment.trackingId}? This cannot be undone.`}
        onConfirm={confirmDeleteShipment}
        onCancel={() => setConfirmOpen(false)}
        confirmLabel="Delete"
      />
    </section>
  );
};

export default EditShipment;
