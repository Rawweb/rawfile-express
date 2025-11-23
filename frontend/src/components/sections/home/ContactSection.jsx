import React, { useState } from 'react';
import { TfiEmail } from 'react-icons/tfi';
import { SlCallOut } from 'react-icons/sl';
import { BsClockHistory } from 'react-icons/bs';
import contact1 from '@assets/contact-5.jpg';
import contact2 from '@assets/contact-6.jpg';
import contact3 from '@assets/contact-7.jpg';
import contact4 from '@assets/contact-8.jpg';
import ContactForm from '@components/common/ContactForm';

const ContactSection = () => {
const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  city: "",
  message: "",
});

const handleChange = (e) =>
  setFormData({ ...formData, [e.target.name]: e.target.value });

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://YOUR_SERVER_URL/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message");
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong");
  }
};


  
  return (
    <section className="py-20 bg-primary-dark text-secondary-light">
      <div className="container">
        {/* Header */}
        <div className="mb-10 space-y-3 text-center md:text-left">
          <p className="text-xs sm:text-sm bg-secondary-light/20  px-2 py-1 border-l-4 border-primary-yellow w-fit text-center md:text-left  mx-auto md:mx-0">
            Contact
          </p>
          <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl">
            Get in touch with us
          </h1>
          <p className="text-gray-400 text-sm md:text-base md:max-w-xl">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Left Info */}
          <div className="w-full md:w-1/3 space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center p-3 bg-primary-light border border-secondary-muted text-primary-yellow rounded-full">
                <TfiEmail className="size-5" />
              </div>
              <div>
                <p className="text-secondary-light font-medium">
                  Email
                </p>
                <p className="font-medium text-secondary-muted">
                  contatc@logistics.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center p-3 bg-primary-light border border-secondary-muted text-primary-yellow rounded-full">
                <SlCallOut className="size-5" />
              </div>
              <div>
                <p className="text-secondary-light font-medium">
                  Call Us
                </p>
                <p className="font-medium text-secondary-muted">
                  (00) 112 365 489
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center p-3 bg-primary-light border border-secondary-muted text-primary-yellow rounded-full">
                <BsClockHistory className="size-5" />
              </div>
              <div>
                <p className="text-secondary-light font-medium">
                  Mon - Sat 9.00-18.00
                </p>
                <p className="font-medium text-secondary-muted">
                  Sunday Closed
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full md:w-2/3">
            <ContactForm/>
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
