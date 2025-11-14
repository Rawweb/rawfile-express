import React from 'react';
import legalHeroImage from '@assets/legal.jpg';

const Legal = () => {
  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <header className="relative">
        <img
          src={legalHeroImage}
          alt="Legal Hero Image"
          className="w-full h-[300px] sm:h-[400px] lg:h-[550px] object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-r from-primary-dark to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-start container text-secondary-light space-y-3">
          <p className="text-xs sm:text-sm bg-primary-dark/60 px-2 py-1 border-l-4 border-primary-yellow w-fit">
            Legal
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Legal Statement
          </h1>
        </div>
      </header>

      {/* CONTENT */}
      <section className="container py-20">
        <div className="flex flex-col gap-8 text-secondary-muted leading-relaxed">
          <p>
            This Legal Statement outlines the conditions under which you access
            and use our website, digital tools, and logistics services. By
            navigating this platform or engaging in any of our shipping
            solutions, you acknowledge and accept the policies and obligations
            described here, including our Terms & Conditions and Privacy Policy.
          </p>

          <div>
            <h2 className="text-primary-dark font-semibold text-xl">
              1. Ownership & Intellectual Property
            </h2>
            <p>
              All content on this website — including text, images, graphics,
              logos, icons, and digital tools — is the property of our company
              or licensed partners. Unauthorized copying, redistribution, or
              modification is strictly prohibited without written permission.
            </p>
          </div>

          <div>
            <h2 className="text-primary-dark font-semibold text-xl">
              2. Accuracy of Information
            </h2>
            <p>
              We aim to provide accurate and updated information regarding our
              services, pricing, transit timelines, and tracking results.
              However, certain details may change due to logistics conditions,
              third-party carriers, customs regulations, or uncontrollable
              external factors. We do not guarantee uninterrupted access to all
              services at all times.
            </p>
          </div>

          <div>
            <h2 className="text-primary-dark font-semibold text-xl">
              3. Limitation of Liability
            </h2>
            <p>
              While we take every reasonable step to ensure safe handling and
              timely delivery of shipments, our liability is limited to the
              declared value of the cargo unless additional insurance coverage
              is purchased. We are not responsible for delays, losses, or
              damages caused by natural events, customs decisions, strikes,
              accidents, or incorrect information provided by the sender.
            </p>
          </div>

          <div>
            <h2 className="text-primary-dark font-semibold text-xl">
              4. External Links
            </h2>
            <p>
              Our website may contain links to external partners or logistic
              service providers. These websites operate independently, and we
              are not responsible for their content, policies, or security
              practices. Users are advised to review third-party terms before
              sharing any personal information outside our platform.
            </p>
          </div>

          <div>
            <h2 className="text-primary-dark font-semibold text-xl">
              5. User Responsibilities
            </h2>
            <p>
              By using our services, users agree to provide accurate shipping
              information, avoid sending prohibited goods, and comply with all
              regional and international regulations. Any misuse of this
              platform or attempt to bypass legal requirements may result in
              service suspension or legal action.
            </p>
          </div>

          <div>
            <h2 className="text-primary-dark font-semibold text-xl">
              6. Policy Updates
            </h2>
            <p>
              This legal statement may be updated periodically to reflect
              changes in regulations, security practices, or business
              operations. Continued use of the website indicates acceptance of
              the latest version.
            </p>
          </div>

          <p>
            For questions or clarifications regarding our legal policies, please
            contact our support team at
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

export default Legal;
