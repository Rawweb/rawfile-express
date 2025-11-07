import React from 'react';
import whyUsBg from '@assets/why-us-bg.jpg';
import { BsBox } from 'react-icons/bs';
import { PiMoney } from 'react-icons/pi';
import whyUsImg from '@assets/why-us.png';

const WhyUs = () => {
  return (
    <section className="py-20 relative">
      {/* background image with gradient */}
      <div className="relative">
        <img
          src={whyUsBg}
          alt="Why us image"
          className="w-full h-[500px] object-cover hidden md:block"
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary-dark to-transparent"></div>
      </div>

      {/* floating white content box */}
      <div className="container bg-white md:absolute md:bottom-[-50%] md:left-1/2 md:-translate-x-1/2 md:w-[90%]">
        <div className="p-6 sm:p-10 lg:p-16 flex flex-col md:flex-row items-center gap-6">
          {/* left */}
          <div className="w-full md:w-1/2 space-y-3">
            <p className="text-sm sm:text-base bg-secondary-light px-3 py-2 border-l-4 border-primary-yellow w-fit">
              Why Us
            </p>
            <h1 className="font-semibold text-l md:text-xl lg:text-3xl text-primary-dark">
              We provide full range global logistics solution
            </h1>
            <p className="text-sm lg:text-base text-secondary-muted">
              Leverage agile frameworks to provide a robust synopsis for
              strategy and foster collaborative thinking to enhance the overall
              value proposition.
            </p>

            <p className="text-sm lg:text-base text-secondary-muted">
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment.
            </p>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center p-3 bg-linear-to-r from-primary-yellow to-yellow-300 rounded-full">
                <BsBox className="size-5" />
              </div>
              <h2 className="tracking-tight text-primary-dark">
                Delivery on Time
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center p-3 bg-linear-to-r from-primary-yellow to-yellow-300 rounded-full">
                <PiMoney className="size-5" />
              </div>
              <h2 className="tracking-tight text-primary-dark">
                Transparent Pricing
              </h2>
            </div>
          </div>

          {/* right */}
          <div className="w-full md:w-1/2">
            <img
              src={whyUsImg}
              alt="Why Us"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
