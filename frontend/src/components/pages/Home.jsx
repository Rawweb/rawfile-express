import Hero from '@components/layout/Hero';
import CompanyLogo from '@components/sections/home/CompanyLogo';
import ContactSection from '@components/sections/home/ContactSection';
import CountsSection from '@components/sections/home/CountsSection';
import TestimonialSection from '@components/sections/home/TestimonialSection';
import WhatWeDoSection from '@components/sections/home/WhatWeDoSection';
import WhyUsSection from '@components/sections/home/WhyUsSection';
import React from 'react';

const Home = () => {
  return <div>
    <Hero/>
    <WhatWeDoSection/>
    <CompanyLogo/>
    <WhyUsSection/>
    <CountsSection/>
    <TestimonialSection/>
    <ContactSection/>
  </div>;
};

export default Home;
