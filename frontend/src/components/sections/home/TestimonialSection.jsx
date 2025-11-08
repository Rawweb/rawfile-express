import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { FaStar, FaQuoteRight } from 'react-icons/fa';
import customer1 from '@assets/customer-1.jpg';
import customer2 from '@assets/customer-2.jpg';
import customer3 from '@assets/customer-3.jpg';
import customer4 from '@assets/customer-4.jpg';
import customer5 from '@assets/customer-5.jpg';
import customer6 from '@assets/customer-6.jpg';

const testimonials = [
  {
    name: 'Kathleen Smith',
    company: 'Fuel Company',
    image: customer1,
    text: 'Leverage agile frameworks to provide a robust synopsis for strategy and foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
    rating: 4,
  },
  {
    name: 'John Martin',
    company: 'Restoration Company',
    image: customer2,
    text: 'Leverage agile frameworks to provide a robust synopsis for strategy and foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
    rating: 5,
  },
  {
    name: 'Sarah Lee',
    company: 'Oceanic Logistics',
    image: customer3,
    text: 'The team was incredibly professional and delivered our shipments ahead of schedule without any issues. Highly reliable and efficient service!',
    rating: 5,
  },
  {
    name: 'David Kim',
    company: 'Global Freight',
    image: customer4,
    text: 'Their communication was top-notch and every step of the process was transparent. I felt confident my goods were in safe hands.',
    rating: 5,
  },
  {
    name: 'Emily Turner',
    company: 'Express Cargo',
    image: customer5,
    text: 'Affordable rates, quick response, and reliable delivery. They’ve become our go-to logistics partner for all shipments.',
    rating: 4,
  },
  {
    name: 'Michael Brooks',
    company: 'TradeLink Inc.',
    image: customer6,
    text: 'Consistent quality and professionalism. The service exceeded expectations with smooth coordination and timely updates.',
    rating: 5,
  },
];

const TestimonialSection = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="py-20 container">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-10">
        <div className="space-y-3">
          <p className="text-xs sm:text-sm bg-secondary-light px-2 py-1 border-l-4 border-primary-yellow w-fit">
            Testimonial
          </p>
          <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl text-primary-dark">
            What Our Customer Say
          </h1>
        </div>

        {/* Swiper navigation buttons */}
        <div className="flex items-center gap-3">
          <button
            className={`testimonial-prev w-10 h-10 rounded-full bg-primary-yellow flex items-center justify-center hover:scale-105  transition-all shadow-md ${
              isBeginning ? 'opacity-40 cursor-not-allowed' : 'hover:opacity-90'
            }`}
          >
            <IoChevronBack className="text-primary-dark text-xl" />
          </button>

          <button
            className={`testimonial-next w-10 h-10 rounded-full bg-primary-dark flex items-center justify-center hover:scale-105  transition-all shadow-md ${
              isEnd ? 'opacity-40 cursor-not-allowed' : 'hover:opacity-90'
            }`}
          >
            <IoChevronForward className="text-secondary-light text-xl" />
          </button>
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.testimonial-next',
          prevEl: '.testimonial-prev',
        }}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
        }}
        loop={false}
        onSlideChange={swiper => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onAfterInit={swiper => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        className="overflow-hidden!"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div
              className={`p-8 h-full min-h-[350px] flex flex-col justify-between transition-all duration-300 ${
                index % 2 === 1
                  ? 'bg-primary-dark text-secondary-light'
                  : 'bg-secondary-light text-primary-dark'
              }`}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.company}</p>
                </div>
                <FaQuoteRight
                  className={`ml-auto text-3xl ${
                    index % 2 === 1
                      ? 'text-primary-yellow'
                      : 'text-primary-dark'
                  }`}
                />
              </div>

              {/* Text */}
              <p
                className={`text-sm md:text-base mb-4 leading-relaxed ${
                  index % 2 === 1 ? 'text-gray-200' : 'text-gray-600'
                }`}
              >
                {t.text}
              </p>

              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < t.rating
                        ? 'text-primary-yellow'
                        : index % 2 === 1
                        ? 'text-gray-500'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSection;
