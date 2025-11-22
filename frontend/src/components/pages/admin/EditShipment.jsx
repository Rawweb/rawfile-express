import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import api from '@lib/api';
import { useParams, useNavigate } from 'react-router-dom';
import ConfirmModal from '@components/common/ConfirmModal';

const EditShipment = () => {
  const { id } = useParams(); // trackingId
  const navigate = useNavigate();
  const token = localStorage.getItem('admin_token');

  const [loading, setLoading] = useState(true);
  const [shipment, setShipment] = useState(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [deletingShipment, setDeletingShipment] = useState(false);

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
      <div className="bg-primary-dark text-secondary-light p-8 rounded-md">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold">{shipment.trackingId}</h2>
            <p className="text-sm text-secondary-muted">
              Edit shipment details
            </p>
          </div>
          <div>
            <button
              onClick={promptDeleteShipment}
              className="px-3 py-2 bg-red-600 rounded text-white"
            >
              Delete Shipment
            </button>
          </div>
        </div>

        <form onSubmit={saveChanges} className="grid gap-4 max-w-2xl">
          <input
            name="sender"
            value={shipment.sender || ''}
            onChange={updateField}
            className="input"
          />
          <input
            name="receiver"
            value={shipment.receiver || ''}
            onChange={updateField}
            className="input"
          />
          <input
            name="location"
            value={shipment.location || ''}
            onChange={updateField}
            className="input"
          />
          <input
            name="eta"
            type="datetime-local"
            value={shipment.eta ? shipment.eta.slice(0, 16) : ''}
            onChange={updateField}
            className="input"
          />

          <select
            name="status"
            value={shipment.status || 'Pending'}
            onChange={updateField}
            className="input"
          >
            <option>Pending</option>
            <option>In Transit</option>
            <option>Delivered</option>
            <option>Cancelled</option>
          </select>

          {/* HISTORY EDIT */}
          <div className="pt-4 border-t border-secondary-light/20">
            <h3 className="mb-3 font-semibold">History</h3>

            {shipment.history?.length ? (
              <div className="space-y-3">
                {shipment.history.map((h, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <input
                      type="date"
                      value={h.date}
                      onChange={e =>
                        updateHistoryItem(i, 'date', e.target.value)
                      }
                      className="input w-40"
                    />
                    <input
                      type="text"
                      value={h.details}
                      onChange={e =>
                        updateHistoryItem(i, 'details', e.target.value)
                      }
                      className="input flex-1"
                    />
                    <button
                      type="button"
                      onClick={() => deleteHistoryItem(i)}
                      className="px-3 py-2 bg-red-600 text-white rounded"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-secondary-muted">No history yet</p>
            )}

            {/* add new */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="date"
                value={shipment.newHistoryDate || ''}
                onChange={e =>
                  setShipment({ ...shipment, newHistoryDate: e.target.value })
                }
                className="input"
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
                className="input sm:col-span-1"
                placeholder="Details"
              />
              <button
                type="button"
                onClick={addHistory}
                className="px-4 py-2 bg-primary-yellow text-primary-dark rounded"
              >
                Add
              </button>
            </div>
          </div>

          <div className="mt-4 flex gap-3">
            <button type="submit" className="primary-btn-2">
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => navigate('/admin/all-shipments')}
              className="px-4 py-2 rounded bg-secondary-light/5"
            >
              Cancel
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
