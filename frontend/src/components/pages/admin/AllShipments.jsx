import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import api from '@lib/api';
import ConfirmModal from '@components/common/ConfirmModal';
import { Link } from 'react-router-dom';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

const AllShipments = () => {
  const token = localStorage.getItem('admin_token');

  const [shipments, setShipments] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const [deleteTarget, setDeleteTarget] = useState(null);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const loadShipments = async () => {
    try {
      setLoading(true);
      const res = await api.track.getAll(page);
      setShipments(res.shipments);
      setPages(res.pages);
    } catch (err) {
      toast.error('Unable to load shipments');
    }
    setLoading(false);
  };

  useEffect(() => {
    loadShipments();
  }, [page]);


  const badgeColor = status => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-500/20 text-green-400';
      case 'In Transit':
        return 'bg-blue-500/20 text-blue-300';
      case 'Pending':
        return 'bg-yellow-500/20 text-yellow-300';
      default:
        return 'bg-gray-500/20 text-gray-300';
    }
  };

  // handle delete flow
  const promptDelete = trackingId => {
    setDeleteTarget(trackingId);
    setConfirmOpen(true);
  };

  const confirmDelete = async () => {
    if (!deleteTarget) return;
    try {
      await api.admin.deleteShipment(deleteTarget, token);
      toast.success('Shipment deleted');
      setConfirmOpen(false);
      setDeleteTarget(null);
      loadShipments();
    } catch {
      toast.error('Failed to delete');
    }
  };

  return (
    <section className="container py-20">
      <div className="bg-primary-dark text-secondary-light p-10 sm:p-12 lg:p-16 border-2 border-secondary-light/20">
        {/* HEADER */}
        <div className="text-center mb-10 space-y-3">
          <p className="text-xs sm:text-sm bg-secondary-light/20 px-2 py-1 border-l-4 border-primary-yellow w-fit mx-auto">
            Admin • Shipments
          </p>
          <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl">
            All Shipments
          </h1>
          <p className="text-gray-400 text-sm md:text-base md:max-w-2xl mx-auto">
            View and manage every shipment in the system.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-center text-gray-300 py-10 animate-pulse">
            Loading shipments...
          </p>
        )}

        {/* Shipment Cards */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {!loading && shipments.length === 0 && (
            <p className="text-center text-gray-400 col-span-full">
              No shipments found.
            </p>
          )}

          {!loading &&
            shipments.map(item => (
              <div
                key={item._id}
                className="bg-primary-light/50 border border-secondary-light/20 p-6 flex flex-col gap-4"
              >
                {/* Tracking */}
                <div>
                  <p className="text-xs text-secondary-muted">Tracking ID</p>
                  <p className="text-sm md:text-base font-semibold">{item.trackingId}</p>
                </div>

                {/* Sender / Receiver */}
                <div>
                  <p className="text-xs text-secondary-muted">
                    Sender → Receiver
                  </p>
                  <p className="text-sm md:text-base font-medium">
                    {item.sender} → {item.receiver}
                  </p>
                </div>

                {/* Location */}
                <div>
                  <p className="text-xs text-secondary-muted">
                    Current Location
                  </p>
                  <p className="font-medium text-sm md:text-base">{item.location}</p>
                </div>

                {/* ETA */}
                <div>
                  <p className="text-xs text-secondary-muted">
                    Estimated Delivery
                  </p>
                  <p className="font-medium text-sm md:text-base">
                    {item.eta ? new Date(item.eta).toLocaleString() : '—'}
                  </p>
                </div>

                {/* Status */}
                <span
                  className={`px-3 py-1 rounded-md text-xs font-medium w-fit ${badgeColor(
                    item.status
                  )}`}
                >
                  {item.status}
                </span>

                {/* Actions */}
                {/* edit button */}
                <div className="flex justify-between mt-4">
                  <Link
                    to={`/admin/edit-shipment/${item.trackingId}`}
                    className="text-sm md:text-base flex items-center gap-1 md:gap-2 text-blue-300 hover:underline"
                  >
                    <FiEdit /> Edit
                  </Link>

                  {/* delete button */}
                  <button
                    onClick={() => promptDelete(item.trackingId)}
                    className="text-sm md:text-base flex items-center gap-1 md:gap-2 text-red-400 hover:underline"
                  >
                    <FiTrash2 /> Delete
                  </button>
                </div>
              </div>
            ))}
        </div>

        {/* confirmation modal */}
        <ConfirmModal
          open={confirmOpen}
          title="Delete shipment?"
          message={`Are you sure you want to permanently delete ${deleteTarget}? This cannot be undone.`}
          onConfirm={confirmDelete}
          onCancel={() => {
            setConfirmOpen(false);
            setDeleteTarget(null);
          }}
          confirmLabel="Delete"
        />

        {/* Pagination */}
        {pages > 1 && (
          <div className="flex justify-center gap-4 mt-10">
            <button
              disabled={page === 1}
              onClick={() => setPage(p => p - 1)}
              className="px-4 py-2 bg-secondary-light/10 text-secondary-light rounded hover:bg-secondary-light/20 disabled:opacity-40"
            >
              Prev
            </button>

            <button
              disabled={page === pages}
              onClick={() => setPage(p => p + 1)}
              className="px-4 py-2 bg-secondary-light/10 text-secondary-light rounded hover:bg-secondary-light/20 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllShipments;
