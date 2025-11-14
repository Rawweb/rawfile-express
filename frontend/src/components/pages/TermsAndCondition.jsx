import React from 'react';
import termsHeroImage from '@assets/terms.jpg'

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <header className="relative">
        <img
          src={termsHeroImage}
          alt="Terms & Conditions"
          className="w-full h-[300px] sm:h-[400px] lg:h-[550px] object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-r from-primary-dark to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-start container text-secondary-light space-y-3">
          <p className="text-xs sm:text-sm bg-primary-dark/60 px-2 py-1 border-l-4 border-primary-yellow w-fit">
            Legal Information
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Terms & Conditions
          </h1>
        </div>
      </header>

      {/* CONTENT */}
      <section className="container py-20">
        <div className="flex flex-col gap-8 text-secondary-muted leading-relaxed">
          <p>
            These Terms & Conditions govern the use of our website, shipment
            services, and tracking tools. By accessing or using our logistics
            platform, you agree to comply with all terms outlined below.
          </p>

          <div>
            <h2 className="text-primary-dark font-semibold text-xl">
              1. Use of Services
            </h2>
            <p>
              Our shipping and logistics services may only be used for lawful
              purposes. You agree not to send prohibited items, falsify shipment
              information, or engage in fraudulent activity.
            </p>
          </div>

          <div>
            <h2 className="text-primary-dark font-semibold text-xl">
              2. Shipment Responsibility
            </h2>
            <p>
              We ensure safe handling and transportation of goods, but we are
              not responsible for damages caused by:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Poor packaging by the sender</li>
              <li>Customs delays or seizures</li>
              <li>Events beyond our control (weather, accidents, strikes)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-primary-dark font-semibold text-xl">
              3. Tracking & Delivery
            </h2>
            <p>
              Delivery dates are estimates. Tracking information may update
              periodically depending on network availability and carrier
              systems.
            </p>
          </div>

          <div>
            <h2 className="text-primary-dark font-semibold text-xl">
              4. Fees & Payments
            </h2>
            <p>
              Rates depend on weight, destination, and service type. All
              payments must be completed before shipment dispatch unless
              otherwise agreed.
            </p>
          </div>

          <div>
            <h2 className="text-primary-dark font-semibold text-xl">
              5. Prohibited Items
            </h2>
            <p>The following items are not allowed for shipment:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Explosives or hazardous materials</li>
              <li>Illegal drugs or restricted substances</li>
              <li>Weapons without proper authorization</li>
              <li>Perishable items without approved packaging</li>
            </ul>
          </div>

          <div>
            <h2 className="text-primary-dark font-semibold text-xl">
              6. Limitation of Liability
            </h2>
            <p>
              Our liability for lost or damaged goods is limited to the declared
              value of the shipment unless insurance coverage has been
              purchased.
            </p>
          </div>

          <div>
            <h2 className="text-primary-dark font-semibold text-xl">
              7. Dispute Resolution
            </h2>
            <p>
              Any dispute arising from our services will be resolved through
              negotiation. If unresolved, cases may be handled under applicable
              national or regional laws.
            </p>
          </div>

          <p>
            By using our platform, you acknowledge that you have read and agreed
            to these Terms & Conditions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
              