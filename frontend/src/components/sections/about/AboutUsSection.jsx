import React, { useState } from 'react';
import aboutUsImage from '@assets/about-us.png';
import { Link } from 'react-router-dom';

const AboutUsSection = () => {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <section className="container py-20">
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 ">
        {/* left */}
        <div className="w-full md:w-1/2 space-y-3">
          <p className="text-xs sm:text-sm bg-secondary-light px-2 py-1 border-l-4 border-primary-yellow w-fit">
            About Us
          </p>
          <h1 className="font-semibold text-l md:text-xl lg:text-3xl text-primary-dark">
            Our Company Overview
          </h1>
          <p className="text-sm lg:text-base text-secondary-muted">
            Leverage agile frameworks to provide a robust synopsis for strategy
            and foster collaborative thinking to enhance the overall value
            proposition.
          </p>

          {/* Mission / Vision Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveTab('mission')}
              className={`py-3 px-4 text-sm font-medium transition-all duration-300 ${
                activeTab === 'mission'
                  ? 'bg-primary-yellow text-primary-dar'
                  : 'bg-secondary-light text-primary-dark hover:bg-primary-yellow'
              }`}
            >
              Our Mission
            </button>
            <button
              onClick={() => setActiveTab('vision')}
              className={`py-3 px-4 text-sm font-medium transition-all duration-300 ${
                activeTab === 'vision'
                  ? 'bg-primary-yellow text-secondary-dark'
                  : 'bg-secondary-light text-primary-dark hover:bg-primary-yellow '
              }`}
            >
              Our Vision
            </button>
          </div>

          {/* Mission / Vision Text */}
          {activeTab === 'mission' ? (
            <p className="text-sm lg:text-base text-secondary-muted">
              Mission – Organically grow the holistic world view of disruptive
              innovation via workplace diversity and empowerment.
            </p>
          ) : (
            <p className="text-sm lg:text-base text-secondary-muted">
              Vision – To lead the logistics industry with innovation,
              efficiency, and a commitment to sustainable global transportation
              solutions.
            </p>
          )}

          {/* button */}
          <Link to="/quote">
            <button className="secondary-btn group mt-2">
              <span className="relative z-10">Request Quote</span>

              {/* White overlay slides in diagonally (bottom-right → top-left) */}
              <span className="secondary-btn-overlay"></span>
            </button>
          </Link>
        </div>

        {/* right */}
        <div className="w-full md:w-1/2">
          <img
            src={aboutUsImage}
            alt="About Us"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
