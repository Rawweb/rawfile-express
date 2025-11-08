import React from 'react';
import { LuShip } from 'react-icons/lu';
import { PiWarehouseDuotone } from "react-icons/pi";
import { MdFlightTakeoff } from "react-icons/md";
import { FaCaravan } from "react-icons/fa";

const WhatWeDoSection = () => {
  const whatWeDo = [
    {
      icon: <LuShip className="size-16 text-primary-dark" />,
      title: 'Sea Transport Services',
      description:
        'Reliable and affordable ocean freight ensuring secure, timely cargo delivery across global trade routes.',
    },
    {
      icon: <PiWarehouseDuotone className="size-16 text-primary-dark" />,
      title: 'Warehousing Services',
      description:
        'Secure, organized, and efficient storage facilities supporting smooth inventory control and timely distribution.',
    },
    {
      icon: <MdFlightTakeoff className="size-16 text-primary-dark" />,
      title: 'Air Freight Services',
      description:
        'Fast, flexible air cargo solutions designed for urgent deliveries with global coverage and reliability.',
    },
    {
      icon: <FaCaravan className="size-16 text-primary-dark" />,
      title: 'Local Shipping Services',
      description:
        'Trusted door-to-door delivery providing quick, dependable transportation across all local destinations efficiently.',
    },
  ];

  return (
    <section className="container py-20">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-4">
        {/* left */}
        <div className="w-full md:w-1/3 space-y-3 text-center md:text-left">
          <p className="text-xs sm:text-sm bg-secondary-light px-2 py-1 border-l-4 border-primary-yellow w-fit text-center md:text-left  mx-auto md:mx-0">
            What We Do
          </p>
          <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl text-primary-dark">
            Safe & Reliable Cargo Solutions
          </h1>
        </div>

        {/* right */}
        <div className="w-full md:w-3/4 flex flex-col gap-10">
          {/* split the array into two rows (top and bottom) */}
          {/* top */}
          <div className="flex flex-col sm:flex-row gap-6 w-full">
            {whatWeDo.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 md:gap-6 lg:gap-8 flex-1"
              >
                {item.icon}
                <div className="border-l border-primary-dark/20 pl-4 space-y-3">
                  <h1 className="font-medium text-lg lg:text-xl text-primary-dark">
                    {item.title}
                  </h1>
                  <p className="text-sm md:text-base text-secondary-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* bottom */}
          <div className="flex flex-col sm:flex-row gap-6 w-full">
            {whatWeDo.slice(2, 4).map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 md:gap-6 lg:gap-8 flex-1"
              >
                {item.icon}
                <div className="border-l border-primary-dark/20 pl-4 space-y-3">
                  <h1 className="font-medium text-lg lg:text-xl text-primary-dark">
                    {item.title}
                  </h1>
                  <p className="text-sm md:text-base text-secondary-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
