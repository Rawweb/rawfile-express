import AboutHero from '@components/sections/about/AboutHero';
import AboutUsSection from '@components/sections/about/AboutUsSection';
import BrandSection from '@components/sections/about/BrandSection';
import ExpertTeamSection from '@components/sections/about/ExpertTeamSection';
import FAQSection from '@components/sections/about/FAQSection';
import WhatWeDoSection from '@components/sections/about/WhatWeDoSection';
import TestimonialSection from '@components/sections/home/TestimonialSection';
import aboutUsImage from '@assets/about-us.png';

const About = () => {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AboutUsSection image={aboutUsImage} />
      <div className='bg-secondary-light'>
        <WhatWeDoSection />
      </div>
      
      <ExpertTeamSection />
      <div className="bg-secondary-light">
        <TestimonialSection />
      </div>
      <BrandSection />
      <div className="bg-secondary-light">
        <FAQSection />
      </div>
    </div>
  );
};

export default About;
