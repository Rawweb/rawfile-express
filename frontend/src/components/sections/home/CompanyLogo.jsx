import React from "react";
import slack from "@assets/slack.png";
import amazon from "@assets/amazon.png";
import wooCommerce from "@assets/woocommerce.png";
import meundies from "@assets/meundies.png";
import sitePoint from "@assets/sitepoint.png";

const CompanyLogo = () => {
  // Logo array
  const logo = [slack, amazon, wooCommerce, meundies, sitePoint];

  return (
    <section className="w-full overflow-hidden container py-20 flex gap-8 sm:flex-row flex-col sm:items-center items-start px-4 sm:px-0">
      <div className="w-[300px] shrink-0 px-6 text-gray-600 border-l-4 border-primary-yellow bg-white py-2 z-10 sm:text-base text-xl font-semibold text-left">
        Proud partner at <br /> Hubspot & Segment
      </div>

      {/* Logos */}
      <div className="flex animate-marquee whitespace-nowrap items-center">
        {logo.map((logo, index) => (
            <img key={index} src={logo} alt="Company logo" className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"/>
        ))}

        {/* Duplicate logos */}
         {logo.map((logo, index) => (
            <img key={`duplicate-${index}`} src={logo} alt="Company logo" className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"/>
        ))}
      </div>
      
    </section>
  );
};

export default CompanyLogo;
