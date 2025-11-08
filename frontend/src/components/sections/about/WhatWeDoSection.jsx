import React from 'react';
import { LuShip } from 'react-icons/lu';
import { PiWarehouseDuotone } from 'react-icons/pi';
import { MdFlightTakeoff } from 'react-icons/md';
import { FaCaravan, FaClipboardList, FaPeopleCarry } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const WhatWeDoSection = () => {
  const services = [
    {
      icon: <LuShip className="size-10 text-primary-yellow" />,
      title: 'Sea Transport Services',
      description:
        'Providing dependable sea freight solutions that guarantee timely and secure international cargo delivery worldwide.',
    },
    {
      icon: <PiWarehouseDuotone className="size-10 text-primary-yellow" />,
      title: 'Warehousing Services',
      description:
        'Organized and secure storage facilities designed to optimize logistics, inventory management, and distribution efficiency.',
    },
    {
      icon: <MdFlightTakeoff className="size-10 text-primary-yellow" />,
      title: 'Air Freight Services',
      description:
        'Fast and efficient air transport services for time-sensitive cargo, ensuring speed, reliability, and safety.',
    },
    {
      icon: <FaClipboardList className="size-10 text-primary-yellow" />,
      title: 'Project & Exhibition',
      description:
        'Specialized logistics support for exhibitions, events, and heavy project cargo with precision handling.',
    },
    {
      icon: <FaCaravan className="size-10 text-primary-yellow" />,
      title: 'Local Shipping Services',
      description:
        'Trusted door-to-door logistics across local destinations with flexible transport scheduling and quick response.',
    },
    {
      icon: <FaPeopleCarry className="size-10 text-primary-yellow" />,
      title: 'Customer Clearance',
      description:
        'Simplified customs clearance ensuring compliance, speed, and hassle-free cargo movement through every checkpoint.',
    },
  ];

  return (
    <section className="py-20 bg-secondary-light">
      <div className="container">
        <div className="text-center space-y-3 mb-10">
          <p className="text-xs sm:text-sm bg-secondary-light px-3 py-1 border-l-4 border-primary-yellow w-fit mx-auto">
            What We Do
          </p>
          <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl text-primary-dark">
            Our Logistics Services
          </h1>
        </div>

        {/* services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
          {services.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start gap-4 group"
            >
              <div className="flex-1 space-y-3">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-secondary-light border border-primary-dark/10 group-hover:bg-primary-yellow/20 group-hover:scale-105 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>

                <h1 className="font-semibold text-lg text-primary-dark group-hover:text-primary-yellow transition-colors">
                  {item.title}
                </h1>
                <p className="text-sm text-secondary-muted mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* button */}
        <Link to="/quote" className="flex justify-center">
          <button className="secondary-btn group mt-5">
            <span className="relative z-10">Request Quote</span>

            {/* White overlay slides in diagonally (bottom-right → top-left) */}
            <span className="secondary-btn-overlay"></span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
