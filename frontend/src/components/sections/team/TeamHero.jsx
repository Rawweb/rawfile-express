import React from 'react';
import teamHeroImage from '@assets/expert-hero.jpg';

const TeamHero = () => {
  return (
    <header className="relative">
      {/* background image */}
      <img
        src={teamHeroImage}
        alt=""
        className="w-full h-[300px] sm:h-[400px] lg:h-[550px] object-cover"
      />

      {/* gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-primary-dark to-transparent"></div>

      {/* text */}
      <div className="absolute inset-0 flex flex-col justify-center items-start container text-secondary-light space-y-3">
        <p className="text-xs sm:text-sm bg-primary-dark/60 px-2 py-1 border-l-4 border-primary-yellow w-fit">
          Team
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tightk">
          Our Team
        </h1>
      </div>
    </header>
  );
};

export default TeamHero;
