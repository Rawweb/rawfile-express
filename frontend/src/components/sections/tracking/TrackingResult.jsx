import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import { AiOutlineClockCircle } from 'react-icons/ai';

const TrackingResult = ({ data }) => {
  return (
    <div className="mt-16 bg-primary-light border border-secondary-light/20 rounded-lg p-6 md:p-10 text-secondary-light">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Tracking ID */}
        <div>
          <p className="text-xs uppercase tracking-wide text-primary-yellow mb-1">
            Tracking Number
          </p>
          <p className="font-semibold text-lg">{data.trackingId}</p>
        </div>

        {/* Status Badge */}
        <div
          className={`px-4 py-2 rounded-md text-sm font-medium 
          ${
            data.status === 'Delivered'
              ? 'bg-green-500/20 text-green-400'
              : data.status === 'In Transit'
              ? 'bg-blue-500/20 text-blue-300'
              : data.status === 'Pending'
              ? 'bg-yellow-500/20 text-yellow-300'
              : 'bg-gray-500/20 text-gray-300'
          }`}
        >
          {data.status}
        </div>
      </div>

      {/* Info Blocks */}
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {/* Current Location */}
        <div className="flex items-start gap-3">
          <MdLocalShipping className="size-7 text-primary-yellow" />
          <div>
            <p className="text-xs text-secondary-muted">Current Location</p>
            <p className="font-medium">{data.location}</p>
          </div>
        </div>

        {/* Estimated Delivery */}
        <div className="flex items-start gap-3">
          <AiOutlineClockCircle className="size-7 text-primary-yellow" />
          <div>
            <p className="text-xs text-secondary-muted">Estimated Delivery</p>
            <p className="font-medium">
              {new Date(data.eta).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>

        {/* Receiver */}
        <div className="flex items-start gap-3">
          <FaCheckCircle className="size-7 text-primary-yellow" />
          <div>
            <p className="text-xs text-secondary-muted">Receiver</p>
            <p className="font-medium">{data.receiver}</p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-10">
        <p className="text-sm text-secondary-muted mb-4">Shipment History</p>

        <div className="space-y-6 border-l border-secondary-light/20 pl-6">
          {data.history?.length > 0 ? (
            data.history.map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-3 top-1 w-2 h-2 rounded-full bg-primary-yellow"></div>
                <p className="text-sm font-medium">{item.details}</p>
                <p className="text-xs text-secondary-muted">{item.date}</p>
              </div>
            ))
          ) : (
            <p className="text-secondary-muted text-sm">No history available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrackingResult;
