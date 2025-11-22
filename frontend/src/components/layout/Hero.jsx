import React from 'react';
import heroImg from '@assets/hero.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative">
      {/* Background image */}
      <img
        src={heroImg}
        alt="hero background"
        className="w-full h-[500px] sm:h-[600px] lg:h-[750px] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-dark/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start container text-secondary-light">
        <div className="space-y-3 max-w-2xl sm:max-w-3xl">
          <p className="text-xs sm:text-base md:text-lg bg-primary-dark/60 px-3 py-2 border-l-4 border-primary-yellow w-fit">
            Logistics & Supply Chain Solutions
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Your Gateway to Any Destination in the World
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-secondary-light max-w-xl">
            From local deliveries to global shipping, we handle your logistics
            needs with care, precision, and on-time delivery every step of the
            way.
          </p>

          <Link to="/quote">
            <button className="primary-btn group mt-2">
              <span className="relative z-10">Request Quote</span>

              {/* White overlay slides in diagonally (bottom-right → top-left) */}
              <span className="primary-btn-overlay"></span>
            </button>
          </Link>
        </div> 
      </div>
    </section>
  );
};

export default Hero;
