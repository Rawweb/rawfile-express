import React from 'react';
import howItWorks from '@assets/how-it-works.png';
import { BsBox, BsHandIndexThumb, BsShieldCheck } from 'react-icons/bs';
import { PiMoney } from 'react-icons/pi';
import { PiTreeFill } from 'react-icons/pi';

const ourGoodness = [
  {
    icon: (
      <BsBox className="size-5 text-primary-yellow group-hover:text-primary-dark transition-colors" />
    ),
    title: 'Warehousing Services',
    description:
      'Secure, efficient storage solutions ensuring organized inventory management and timely distribution across regions.',
  },
  {
    icon: (
      <BsShieldCheck className="size-5 text-primary-yellow group-hover:text-primary-dark transition-colors" />
    ),
    title: 'Safety & Quality',
    description:
      'We prioritize strict safety standards and premium service quality for reliable, damage-free cargo handling.',
  },
  {
    icon: (
      <PiTreeFill className="size-5 text-primary-yellow group-hover:text-primary-dark transition-colors" />
    ),
    title: 'Care for Environment',
    description:
      'Committed to sustainable logistics practices that reduce emissions and protect our planet’s natural resources.',
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-secondary-light">
      <div className="container">
        <div className="text-center space-y-3 mb-10">
          <p className="text-xs sm:text-sm bg-secondary-light px-3 py-1 border-l-4 border-primary-yellow w-fit mx-auto">
            Our Goodness
          </p>
          <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl text-primary-dark">
            How It Works
          </h1>
        </div>

        {/* bottom */}
        <div className="  flex flex-col md:flex-row-reverse items-center gap-5 md:gap-8 lg:gap-12">
          {/* left */}
          <div className="w-full md:w-1/2 space-y-3 lg:space-y-6">
            {ourGoodness.map((item, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-secondary-lighter border border-primary-dark/20 group-hover:bg-primary-yellow/70 hover:scale-105 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>
                <div className="space-y-2">
                  <h2 className="tracking-tight text-primary-dark font-medium sm:text-lg lg:text-xl group-hover:text-primary-yellow transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-secondary-muted text-sm lg:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* right */}
          <div className="w-full md:w-1/2">
            <img
              src={howItWorks}
              alt="Why Us"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
