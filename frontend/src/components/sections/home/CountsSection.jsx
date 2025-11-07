import React from 'react';

const CountsSection = () => {
  return (
    <section className="md:mt-82 py-20 container">
      <div className="flex flex-col md:flex-row items-center justify-center  p-6 sm:p-10 md:p-16 gap-y-4">
        <div className="flex items-center gap-4 text-primary-dark border md:border-l-0 py-8 px-10 border-primary-yellow w-full md:w-1/2">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            1294
          </h1>
          <div className="size-4 bg-linear-to-r from-primary-yellow to-yellow-300"></div>
          <p>Delivered Packages</p>
        </div>

        <div className="flex items-center gap-4 text-primary-dark border md:border-r-0 md:border-l-0 py-8 px-10 border-primary-yellow w-full md:w-1/2">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            3594+
          </h1>
          <div className="size-4 bg-linear-to-r from-primary-yellow to-yellow-300"></div>
          <p>Satisfied Clients</p>
        </div>
      </div>
    </section>
  );
};

export default CountsSection;
