import React, { useState } from 'react';
import {
  IoChevronBack,
  IoChevronDown,
  IoChevronForward,
  IoChevronUp,
} from 'react-icons/io5';
import { SlCallOut } from 'react-icons/sl';
import faqImg from '@assets/faq.jpg';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'How can I pay for your logistics services?',
    answer:
      'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation.',
  },
  {
    question: 'What payment methods are supported?',
    answer:
      'We accept major credit cards, bank transfers, and flexible payment options depending on client needs and regions served.',
  },
  {
    question: 'What options for logistics plans are available?',
    answer:
      'Our logistics plans range from full-service freight forwarding to warehousing, local transport, and custom shipment tracking.',
  },
  {
    question: 'Can I specify a delivery date when ordering?',
    answer:
      'Yes, clients can set preferred delivery timelines based on destination, cargo type, and chosen service plan.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container mt-20">
      <div className='flex flex-col md:flex-row items-start gap-10 md:gap-20 py-20'> 
       {/* Left - FAQ */}
      <div className="w-full md:w-2/3">
        <p className="text-xs sm:text-sm bg-secondary-light px-2 py-1 border-l-4 border-primary-yellow w-fit mb-3">
          FAQ
        </p>
        <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl text-primary-dark mb-8">
          Frequently Asked Questions
        </h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className=" pb-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between">
                <h2
                  className={`text-sm md:text-base font-medium transition-colors duration-300 ${
                    openIndex === index
                      ? 'text-primary-yellow'
                      : 'text-primary-dark hover:text-primary-yellow'
                  }`}
                >
                  {faq.question}
                </h2>
                {openIndex === index ? (
                  <IoChevronUp className="text-primary-yellow text-lg " />
                ) : (
                  <IoChevronDown className="text-primary-dark text-lg" />
                )}
              </div>

              {/* Answer */}
              {openIndex === index && (
                <p className="mt-3 text-sm md:text-base text-secondary-muted leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right - Consultation Box */}
      <div className="w-full md:w-3/4 relative">
        <img
          src={faqImg}
          alt="FAQ background"
          className="w-full h-[400px] object-cover"
        />

        {/* Overlay Box */}
        <div className="absolute top-1/2 -left-10 -translate-y-1/2 bg-primary-dark/95 p-8 sm:p-10 w-[90%] md:w-[60%] text-secondary-light shadow-lg">
          <p className="text-xs bg-secondary-light/20 px-2 py-1 border-l-4 border-primary-yellow w-fit mb-3">
            Let’s Talk
          </p>
          <h2 className=" leading-snug mb-5">
            You Need Any Help? Get Free Consultation
          </h2>

          {/* Contact info */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center p-3 bg-primary-light border border-secondary-muted text-primary-yellow rounded-full">
              <SlCallOut className="size-5" />
            </div>
            <div>
              <p className="text-secondary-light">Have Any Questions</p>
              <p className="text-secondary-muted">(00) 112 365 489</p>
            </div>
          </div>

          {/* button */}
          <Link to="/contact">
            <button className="primary-btn-2 group mt-5">
              <span className="relative z-10 text-primary-dark">
                Contact Us
              </span>

              {/* White overlay slides in diagonally (bottom-right → top-left) */}
              <span className="primary-btn-overlay-2"></span>
            </button>
          </Link>
        </div>
      </div>  
      </div>
     
    </section>
  );
};

export default FAQSection;
