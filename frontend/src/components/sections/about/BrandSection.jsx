import React from 'react';
import contact1 from '@assets/contact-5.jpg';
import contact2 from '@assets/contact-6.jpg';
import contact3 from '@assets/contact-7.jpg';
import contact4 from '@assets/contact-8.jpg';   

const BrandSection = () => {
  return <section className="container py-20">
    <div className="grid grid-cols-2 md:grid-cols-4 mt-16">
              <img
                src={contact1}
                alt="contact partner"
                className="w-full h-full object-cover"
              />
              <img
                src={contact2}
                alt="contact partner"
                className="w-full h-full object-cover"
              />
              <img
                src={contact3}
                alt="contact partner"
                className="w-full h-full object-cover"
              />
              <img
                src={contact4}
                alt="contact partner"
                className="w-full h-full object-cover"
              />
            </div>
  </section>;
};

export default BrandSection;
