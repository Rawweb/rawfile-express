import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '@data/serviceData.js';
import * as LuIcons from 'react-icons/lu';
import * as PiIcons from 'react-icons/pi';
import * as MdIcons from 'react-icons/md';
import * as FaIcons from 'react-icons/fa';

const getIconComponent = iconName => {
  // Search through all imported icon sets
  return (
    LuIcons[iconName] ||
    PiIcons[iconName] ||
    MdIcons[iconName] ||
    FaIcons[iconName] ||
    null
  );
};

const WhatWeDoSection = () => {
  return (
    <section className="py-20">
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
          {servicesData.map(item => {
            const Icon = getIconComponent(item.icon);
            return (
              <Link
                to={`/services/${item.id}`}
                key={item.id}
                className="flex flex-col sm:flex-row items-start gap-4 group"
              >
                <div className="flex-1 space-y-3">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-secondary-light border border-primary-dark/10 group-hover:bg-primary-yellow/20 group-hover:scale-105 transition-transform duration-300">
                      {Icon ? (
                        <Icon className="size-10 text-primary-yellow" />
                      ) : null}
                    </div>
                  </div>

                  <h1 className="font-semibold text-lg text-primary-dark group-hover:text-primary-yellow transition-colors">
                    {item.title}
                  </h1>
                  <p className="text-sm text-secondary-muted mt-1 leading-relaxed">
                    {item.description1}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* button */}
        <Link to="/quote" className="flex justify-center">
          <button className="secondary-btn group mt-5">
            <span className="relative z-10">Request Quote</span>
            <span className="secondary-btn-overlay"></span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
