import React, { useState } from 'react';
import { SlCallOut } from 'react-icons/sl';
import { TfiEmail } from 'react-icons/tfi';
import { BsClockHistory } from 'react-icons/bs';
import { toast } from 'sonner';
import TrackingResult from '@components/sections/tracking/TrackingResult';

const TrackingSection = () => {
  const [trackingId, setTrackingId] = useState('');
  const [trackingData, setTrackingData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = async e => {
    e.preventDefault();
    setTrackingData(null);

    if (!trackingId.trim()) {
      toast.error('Please enter a tracking ID');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`/api/track/${trackingId}`);

      if (!res.ok) {
        toast.error('Tracking ID not found');
        setLoading(false);
        return;
      }

      const data = await res.json();
      setTrackingData(data);

      toast.success('Tracking details loaded!');
    } catch (err) {
      toast.error('Unable to fetch tracking details');
    }

    setLoading(false);
  };

  return (
    <section className="container py-20">
      <div className="bg-primary-dark text-secondary-light p-10 sm:p-16 lg:p-20 rounded-md">
        {/* Header */}
        <div className="text-center mb-10 space-y-3">
          <p className="text-xs sm:text-sm bg-secondary-light/20 px-2 py-1 border-l-4 border-primary-yellow w-fit mx-auto">
            Tracking
          </p>
          <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl">
            Enter Your Tracking Number
          </h1>
          <p className="text-gray-400 text-sm md:text-base md:max-w-2xl mx-auto">
            Check your shipment’s current location and estimated delivery time
            in real time.
          </p>
        </div>

        {/* Tracking Form */}
        <form
          onSubmit={handleTrack}
          className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4"
        >
          <input
            type="text"
            value={trackingId}
            onChange={e => setTrackingId(e.target.value)}
            placeholder="Enter Tracking ID*"
            className="flex-1 w-full p-3 bg-transparent border border-secondary-light/40 
              text-secondary-light placeholder-gray-400 
              focus:border-primary-yellow focus:outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className={`primary-btn-2 group w-full sm:w-auto ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <span className="relative z-10 text-primary-dark">
              {loading ? 'Loading…' : 'Track'}
            </span>
            <span className="primary-btn-overlay-2"></span>
          </button>
        </form>

        {/* Loading */}
        {loading && (
          <p className="text-center text-gray-300 mt-6 animate-pulse">
            Loading…
          </p>
        )}

        {/* Tracking Result */}
        {trackingData && <TrackingResult data={trackingData} />}

        {/* Divider */}
        <div className="border-t border-secondary-light/30 my-16"></div>

        {/* Help Section */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-10 text-center">
          {/* Email */}
          <div className="flex md:flex-col flex-row items-center gap-3 justify-center">
            <div className="flex items-center justify-center size-14 rounded-full bg-primary-light border border-secondary-muted text-primary-yellow">
              <TfiEmail className="size-5" />
            </div>
            <p className="text-sm text-secondary-light font-medium">
              contact@logistics.com
            </p>
          </div>

          {/* Call */}
          <div className="flex md:flex-col flex-row items-center gap-3 justify-center">
            <div className="flex items-center justify-center size-14 rounded-full bg-primary-light border border-secondary-muted text-primary-yellow">
              <SlCallOut className="size-5" />
            </div>
            <p className="text-sm text-secondary-light font-medium">
              (00) 112 365 489
            </p>
          </div>

          {/* Working Hours */}
          <div className="flex md:flex-col flex-row items-center gap-3 justify-center">
            <div className="flex items-center justify-center size-14 rounded-full bg-primary-light border border-secondary-muted text-primary-yellow">
              <BsClockHistory className="size-5" />
            </div>
            <div className="text-sm text-secondary-light font-medium">
              <p>Mon – Sat 9.00 – 18.00</p>
              <p className="text-secondary-muted">Sunday Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;
