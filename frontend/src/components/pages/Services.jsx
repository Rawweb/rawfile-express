import WhatWeDoSection from '@components/sections/about/WhatWeDoSection';
import TestimonialSection from '@components/sections/home/TestimonialSection';
import MoreCountsSection from '@components/sections/services/MoreCountsSection';
import HowItWorksSection from '@components/sections/services/HowItWorksSection';
import ServiceHero from '@components/sections/services/ServiceHero';
import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen">
      <ServiceHero />
      <WhatWeDoSection />
      <HowItWorksSection />
      <TestimonialSection />
      <MoreCountsSection />
    </div>
  );
};

export default Services;
