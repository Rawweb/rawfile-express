import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { servicesData } from '@data/serviceData.js';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';
import * as LuIcons from 'react-icons/lu';
import * as PiIcons from 'react-icons/pi';
import * as MdIcons from 'react-icons/md';
import * as FaIcons from 'react-icons/fa';

const getIconComponent = iconName => {
  return (
    LuIcons[iconName] ||
    PiIcons[iconName] ||
    MdIcons[iconName] ||
    FaIcons[iconName] ||
    null
  );
};

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-semibold text-primary-dark">
          Service Not Found
        </h1>
        <p className="text-secondary-muted mt-3">
          The service you’re looking for doesn’t exist.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="primary-btn-2 group mt-6"
        >
          <span className="relative z-10 text-primary-dark flex items-center gap-2">
            <FaArrowLeft className="size-4" /> Go Back
          </span>
          <span className="primary-btn-overlay-2"></span>
        </button>
      </div>
    );
  }

  const Icon = getIconComponent(service.icon);

  return (
    <div>
      {/* header */}
      <header className="relative">
        <img
          src={service.mainImage}
          alt={service.title}
          className="w-full h-[300px] sm:h-[400px] lg:h-[550px] object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-r from-primary-dark to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-start container text-secondary-light space-y-3">
          <p className="text-xs sm:text-sm bg-primary-dark/60 px-2 py-1 border-l-4 border-primary-yellow w-fit">
            Service Single
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            {service.title}
          </h1>
        </div>
      </header>

      {/* section */}
      <section className="container py-20">
        <div className="flex flex-col gap-10">
          {/* top */}
          <div className="space-y-4">
            <img
              src={service.mainImage}
              alt={service.title}
              className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover mb-7"
            />

            <div className="flex items-center gap-3">
              {Icon && <Icon className="size-10 text-primary-yellow" />}
              <h1 className="font-semibold text-2xl lg:text-3xl text-primary-dark">
                {service.title}
              </h1>
            </div>

            <div className="space-y-4 text-secondary-muted">
              {service.description.map((para, index) => (
                <p key={index} className="text-justify">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* bottom */}
          <div className="lg:py-16 flex flex-col md:flex-row items-center gap-6">
            {/* left */}
            <div className="w-full md:w-1/2 space-y-3 text-center md:text-left">
              <h1 className="font-semibold text-2xl lg:text-3xl text-primary-dark">
                Benefits of Service
              </h1>
              <p className="text-sm lg:text-base text-secondary-muted">
                {service.benefitText}
              </p>
              <div className="mt-6">
                <ul className="space-y-3 text-primary-dark">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <FaArrowRight className="size-4" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* right */}
            <div className="w-full md:w-1/2">
              <img
                src={service.benefitImage}
                alt="Benefit of Service"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* back button */}
          <div className="flex justify-center mt-10">
            <button
              onClick={() => navigate(-1)}
              className="primary-btn-2 group"
            >
              <span className="relative z-10 text-primary-dark flex items-center gap-2">
                <FaArrowLeft className="size-4" /> Back to Services
              </span>
              <span className="primary-btn-overlay-2"></span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
