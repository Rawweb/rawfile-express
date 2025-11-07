import React from 'react';
import { TfiEmail } from 'react-icons/tfi';
import { SlCallOut } from 'react-icons/sl';
import { BsClockHistory } from 'react-icons/bs';
import contact1 from '@assets/contact-5.jpg';
import contact2 from '@assets/contact-6.jpg';
import contact3 from '@assets/contact-7.jpg';
import contact4 from '@assets/contact-8.jpg';

const ContactSection = () => {
  return (
    <section className="py-20 bg-primary-dark text-secondary-light">
      <div className="container">
        {/* Header */}
        <div className="mb-10 space-y-3">
          <p className="text-sm sm:text-base bg-secondary-light/20  px-3 py-2 border-l-4 border-primary-yellow w-fit">
            Contact
          </p>
          <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl">
            Get in touch with us
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-xl">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Left Info */}
          <div className="w-full md:w-1/3 space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center size-12 rounded-full bg-primary-light border border-secondary-muted text-primary-yellow">
                <TfiEmail className="size-4" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-400 text-sm">contact@logistics.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center size-12 rounded-full bg-primary-light border border-secondary-muted text-primary-yellow">
                <SlCallOut className="size-4" />
              </div>
              <div>
                <p className="font-medium">Call Us</p>
                <p className="text-gray-400 text-sm">(800) 123 - 325 469</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center size-12 rounded-full bg-primary-light border border-secondary-muted text-primary-yellow">
                <BsClockHistory className="size-4" />
              </div>
              <div>
                <p className="font-medium">Working Hours</p>
                <p className="text-gray-400 text-sm">
                  Mon – Sat: 9.00 – 18.00 <br /> Sunday Closed
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full md:w-2/3">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
              <button
                type="submit"
                className="sm:col-span-2 bg-primary-yellow text-primary-dark font-medium px-8 py-3 hover:bg-yellow-400 transition-colors md:w-fit"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Brand Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 mt-16">
          <img
            src={contact1}
            alt="contact partner"
            className="w-full h-full object-cover"
          />
          <img
            src={contact2}
            alt="contact partner"
            className="w-full h-full object-cover"
          />
          <img
            src={contact3}
            alt="contact partner"
            className="w-full h-full object-cover"
          />
          <img
            src={contact4}
            alt="contact partner"
            className="w-full h-full object-cover"
          />
         
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
