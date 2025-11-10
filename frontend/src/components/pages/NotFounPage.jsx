import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-secondary-light">
      {/* 404 Heading */}
      <h1 className="text-[100px] sm:text-[200px] font-bold text-primary-dark leading-none">
        <span className="text-primary-dark">
          4<span className="text-primary-yellow">0</span>4
        </span>
      </h1>

      {/* Message */}
      <div className="space-y-3 mt-5">
        <h2 className="text-xl sm:text-2xl font-semibold text-primary-dark">
          Oops! Page not found.
        </h2>
        <p className="text-sm sm:text-base text-secondary-muted">
          Let’s get you to where you need to be.
        </p>
      </div>

      {/* Back Button */}
      <div className="mt-8">
        <Link to="/" className="inline-block ">
          <button className="primary-btn-2 ">
            <span className="relative z-10 text-primary-dark hover:text-primary-dark/50  ">
              Back to Home
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
