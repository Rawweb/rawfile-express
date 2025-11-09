import BrandSection from '@components/sections/about/BrandSection';
import FAQSection from '@components/sections/about/FAQSection';
import ContactHero from '@components/sections/contact/ContactHero';
import ContatcSectionContact from '@components/sections/contact/ContactSectionContact';
import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <ContatcSectionContact/>
      <BrandSection/>
      <div className='bg-secondary-light'>
        <FAQSection/>
      </div>
    </div>
  );
};

export default Contact;
