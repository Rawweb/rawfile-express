import React from 'react';
import { TfiEmail } from 'react-icons/tfi';
import { SlCallOut } from 'react-icons/sl';
import { BsClockHistory } from 'react-icons/bs';
import ContactForm from '@components/common/ContactForm';

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
        <ContactForm/>
      </div>
    </section>
  );
};

export default ContactSectionContact;
