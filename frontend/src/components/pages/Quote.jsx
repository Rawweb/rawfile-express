import TestimonialSection from '@components/sections/home/TestimonialSection';
import MoreCountsSection from '@components/sections/services/MoreCountsSection';
import QuoteForm from '@components/sections/quote/QuoteForm';
import QuoteHero from '@components/sections/quote/QuoteHero';
import React from 'react';

const RequestQuote = () => {
  return (
    <div className="min-h-screen">
      <QuoteHero />
      <QuoteForm />
      <MoreCountsSection />
      <div className="bg-secondary-light">
        <TestimonialSection />
      </div>
    </div>
  );
};

export default RequestQuote;
