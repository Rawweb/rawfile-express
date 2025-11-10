import React from 'react';
import { TfiEmail } from 'react-icons/tfi';
import { SlCallOut } from 'react-icons/sl';
import { BsClockHistory } from 'react-icons/bs';

const ContactSectionContact = () => {
  return (
    <section className=" container py-20">
      <div className=" bg-primary-dark text-secondary-light p-10 sm:p-12 lg:p-20">
        {/* Header */}
        <div className="text-center mb-10 space-y-3">
          <p className="text-xs sm:text-sm bg-secondary-light/20 px-2 py-1 border-l-4 border-primary-yellow w-fit mx-auto">
            Contact
          </p>
          <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl">
            Get in touch with us
          </h1>
          <p className="text-gray-400 text-sm md:text-base md:max-w-2xl mx-auto">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value.
          </p>
        </div>

        {/* Contact Info (Centered Icons) */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-10 mb-12">
          {/* Email */}
          <div className="flex md:flex-col flex-row items-center  text-center gap-3">
            <div className="flex items-center justify-center size-14 rounded-full bg-primary-light border border-secondary-muted text-primary-yellow">
              <TfiEmail className="size-5" />
            </div>
            <p className="text-sm text-secondary-light font-medium">
              Contact@logistics.com
            </p>
          </div>

          {/* Call */}
          <div className="flex md:flex-col flex-row items-center text-center gap-3">
            <div className="flex items-center justify-center size-14 rounded-full bg-primary-light border border-secondary-muted text-primary-yellow">
              <SlCallOut className="size-5" />
            </div>
            <p className="text-sm text-secondary-light font-medium">
              (00) 112 365 489
            </p>
          </div>

          {/* Working Hours */}
          <div className="flex md:flex-col flex-row items-center text-center gap-3">
            <div className="flex items-center justify-center size-14 rounded-full bg-primary-light border border-secondary-muted text-primary-yellow">
              <BsClockHistory className="size-5" />
            </div>
            <div className="text-sm text-secondary-light font-medium">
              <p>Mon – Sat 9.00 – 18.00</p>
              <p className="text-secondary-muted">Sunday Closed</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <input
            type="text"
            placeholder="Your name*"
            className="w-full p-3 bg-transparent border border-secondary-light/40 text-secondary-light placeholder-gray-400 focus:border-primary-yellow focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email*"
            className="w-full p-3 bg-transparent border border-secondary-light/40 text-secondary-light placeholder-gray-400 focus:border-primary-yellow focus:outline-none"
          />
          <input
            type="text"
            placeholder="Phone Number*"
            className="w-full p-3 bg-transparent border border-secondary-light/40 text-secondary-light placeholder-gray-400 focus:border-primary-yellow focus:outline-none"
          />
          <input
            type="text"
            placeholder="City*"
            className="w-full p-3 bg-transparent border border-secondary-light/40 text-secondary-light placeholder-gray-400 focus:border-primary-yellow focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="sm:col-span-2 w-full p-3 bg-transparent border border-secondary-light/40 text-secondary-light placeholder-gray-400 focus:border-primary-yellow focus:outline-none"
          ></textarea>

          {/* button — spans across both columns */}
          <div className="sm:col-span-2 flex justify-center pt-5">
            <button type="submit" className="primary-btn-2 group mt-5">
              <span className="relative z-10 text-primary-dark">
                Submit Message
              </span>
              <span className="primary-btn-overlay-2"></span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSectionContact;
