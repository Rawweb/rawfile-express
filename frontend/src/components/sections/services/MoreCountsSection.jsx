import React from 'react';

const MoreCountsSection = () => {
  const stats = [
    { number: '24', label: 'Our Location' },
    { number: '1294', label: 'Delivered Packages' },
    { number: '3594', label: 'Satisfied Clients' },
    { number: '247+', label: 'Owned Vehicles' },
  ];

  return (
    <section className="container py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-secondary-muted/40">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`flex flex-row md:flex-col items-center justify-around md:justify-center text-primary-dark py-10 gap-2 border-b sm:border-b-0 sm:border-r border-secondary-muted/40 last:border-r-0`}
          >
            <h1 className="text-3xl sm:text-4xl font-bold">{item.number}</h1>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-yellow"></div>
              <p className="text-xs sm:text-sm text-primary-dark font-medium">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreCountsSection;
