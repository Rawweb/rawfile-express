import React from 'react';
import policyHeroImage from '@assets/warehouse.jpg';

const Policy = () => {
  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <header className="relative">
        <img
          src={policyHeroImage}
          alt="Privacy Policy"
          className="w-full h-[300px] sm:h-[400px] lg:h-[550px] object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-r from-primary-dark to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-start container text-secondary-light space-y-3">
          <p className="text-xs sm:text-sm bg-primary-dark/60 px-2 py-1 border-l-4 border-primary-yellow w-fit">
            Legal Information
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Privacy Policy
          </h1>
        </div>
      </header>

      {/* CONTENT */}
      <section className="container py-20">
        <div className="flex flex-col gap-8 text-secondary-muted leading-relaxed">
          <p>
            At{' '}
            <span className="text-primary-dark font-semibold">
              Our Logistics Company
            </span>
            , we prioritize the privacy and protection of all personal
            information shared with us. This Privacy Policy explains how we
            collect, use, store, and secure your data when you interact with our
            website, tracking system, or logistics services.
          </p>

          <div>
            <h2 className="text-primary-dark font-semibold text-xl">
              1. Information We Collect
            </h2>
            <p>
              We collect personal and non-personal data to provide efficient
              shipping and customer support. This may include:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Full name, email, phone number, and shipping details</li>
              <li>Tracking codes and parcel information</li>
              <li>
                Payment details (processed through secure third-party gateways)
              </li>
              <li>Browser data, device type, and interaction logs</li>
            </ul>
          </div>

          <div>
            <h2 className="text-primary-dark font-semibold text-xl">
              2. How We Use Your Information
            </h2>
            <p>
              We use collected data only for legitimate logistics purposes, such
              as:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Processing and delivering shipments</li>
              <li>Providing tracking updates and notifications</li>
              <li>Customer communication and support</li>
              <li>Improving our website, services, and security</li>
            </ul>
          </div>

          <div>
            <h2 className="text-primary-dark font-semibold text-xl">
              3. Data Protection & Security
            </h2>
            <p>
              We implement modern security measures to prevent unauthorized
              access, alteration, or disclosure of your information. Payment
              details are encrypted and handled by trusted payment processors.
            </p>
          </div>

          <div>
            <h2 className="text-primary-dark font-semibold text-xl">
              4. Sharing of Information
            </h2>
            <p>Your data is never sold. We only share information with:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Courier partners involved in delivering your shipment</li>
              <li>Customs authorities when legally required</li>
              <li>Third-party service providers (email, payment processing)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-primary-dark font-semibold text-xl">
              5. Cookies
            </h2>
            <p>
              We use cookies to enhance your browsing experience, remember
              preferences, and analyze website traffic. You may disable cookies
              in your browser at any time.
            </p>
          </div>

          <div>
            <h2 className="text-primary-dark font-semibold text-xl">
              6. Your Rights
            </h2>
            <p>You may request at any time to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Access your stored data</li>
              <li>Update or correct personal information</li>
              <li>Request deletion of your data where applicable</li>
            </ul>
          </div>

          <p>
            If you have any questions regarding this policy, please contact us
            at
            <span className="text-primary-dark font-medium">
              {' '}
              support@logistics.com
            </span>
            .
          </p>
        </div>
      </section>
    </div>
  );
};

export default Policy;
