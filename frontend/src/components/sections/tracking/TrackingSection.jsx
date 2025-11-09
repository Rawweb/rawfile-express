import React from 'react';
import { SlCallOut } from 'react-icons/sl';
import { TfiEmail } from 'react-icons/tfi';
import { BsClockHistory } from 'react-icons/bs';

const TrackingSection = () => {
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
        <form className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4">
          {/* Input Field */}
          <input
            type="text"
            placeholder="Enter Tracking ID*"
            className="flex-1 w-full p-3 bg-transparent border border-secondary-light/40 
               text-secondary-light placeholder-gray-400 
               focus:border-primary-yellow focus:outline-none"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="primary-btn-2 group w-full sm:w-auto"
          >
            <span className="relative z-10 text-primary-dark">Track</span>
            {/* White overlay slides in diagonally (bottom-right → top-left) */}
            <span className="primary-btn-overlay-2"></span>
          </button>
        </form>

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
