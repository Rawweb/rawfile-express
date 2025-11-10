import React from 'react';

const QuoteForm = () => {
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
          <form className="bg-primary-light/10 border border-secondary-light/10  p-8 space-y-8 shadow-md">
            {/* Personal Data */}
            <div>
              <h2 className="text-primary-yellow font-medium mb-4">
                Personal Data
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col">
                  <label className="text-sm mb-2 font-medium">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    className="bg-transparent border-b border-secondary-light/50 p-2 focus:border-primary-yellow focus:outline-none text-secondary-light placeholder-gray-400"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="bg-transparent border-b border-secondary-light/50 p-2 focus:border-primary-yellow focus:outline-none text-secondary-light placeholder-gray-400"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm mb-2 font-medium">
                    Phone Number
                  </label>
                  <input
                    type="text"
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
                  placeholder="Please provide dimensions, weight, instructions, etc."
                  className="bg-transparent border-b border-secondary-light/50 p-2 focus:border-primary-yellow focus:outline-none text-secondary-light placeholder-gray-400"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-5">
              <button type="submit" className="primary-btn-2 group mt-5">
                <span className="relative z-10 text-primary-dark">
                  Request Quote
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
