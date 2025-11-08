import React from 'react';
import { Link } from 'react-router-dom';
import footerImage from '@assets/footer.jpg';
import logo from '@assets/logo.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';
import { SlCallOut } from 'react-icons/sl';

const footerLinks = {
  pages: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Project', href: '/project' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ],
  utility: [
    { label: 'Style Guide', href: '/style-guide' },
    { label: 'Changelog', href: '/changelog' },
    { label: 'Licenses', href: '/licenses' },
    { label: 'Protected', href: '/protected' },
  ],
};

const FooterSection = () => {
  return (
    <footer className="relative bg-primary-dark text-secondary-light">
      {/* Top Image */}
      <div className="relative">
        <img
          src={footerImage}
          alt="Footer Image"
          className="w-full h-[300px] hidden md:block object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary-dark/70 to-transparent"></div>
      </div>

      {/* Footer Content */}
      <div className="container py-20 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div className="space-y-4 pt-4">
          <Link to="/" className="flex gap-2 items-center cursor-pointer group ">
            <img
              src={logo}
              alt="RawExpress logo"
              className="h-5 w-5 group-hover:scale-110 transition-transform"
            />
            <h1 className="font-bold tracking-tighter text-xl text-secondary-light">
              RawExpress
            </h1>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Leverage agile frameworks to provide a robust synopsis for strategy
            and collaborative thinking to further the overall value proposition.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center p-2 bg-primary-light border border-secondary-muted text-primary-yellow rounded-full">
                <TfiEmail className="size-5" />
              </div>
              <div>
                <p className="text-sm text-secondary-light font-medium">Email</p>
                <p className="font-medium text-secondary-muted text-sm">
                  contatc@logistics.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center p-2 bg-primary-light border border-secondary-muted text-primary-yellow rounded-full">
                <TfiEmail className="size-5" />
              </div>
              <div>
                <p className="text-sm text-secondary-light font-medium">Call Us</p>
                <p className="font-medium text-secondary-muted text-sm">
                  (800) 123 - 325 469
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pages */}
        <div>
          <h2 className="font-semibold text-lg mb-4 bg-secondary-muted/50 p-4">Pages</h2>
          <ul className="space-y-2">
            {footerLinks.pages.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.href}
                  className="text-gray-400 text-sm hover:text-primary-yellow transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Utility */}
        <div>
          <h2 className="font-semibold text-lg mb-4 bg-secondary-muted/50 p-4">Utility</h2>
          <ul className="space-y-2">
            {footerLinks.utility.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.href}
                  className="text-gray-400 text-sm hover:text-primary-yellow transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h2 className="font-semibold text-lg mb-4 bg-secondary-muted/50 p-4">Subscribe</h2>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Email here*"
              className="w-full p-3 bg-transparent border border-secondary-light/40 text-secondary-light placeholder-gray-400 focus:border-primary-yellow focus:outline-none"
            />
            <button
              type="submit"
              className="bg-primary-yellow text-primary-dark font-medium px-6 py-3 hover:bg-yellow-400 transition-colors w-full md:w-fit"
            >
              Send Now
            </button>
          </form>

          <div className="flex items-center gap-3 mt-5">
            <FaLinkedinIn className="size-4 hover:text-primary-yellow transition-colors cursor-pointer" />
            <FaFacebookF className="size-4 hover:text-primary-yellow transition-colors cursor-pointer" />
            <FaInstagram className="size-4 hover:text-primary-yellow transition-colors cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-muted/30 py-6 text-center text-xs text-gray-500">
        Copyright &copy; {new Date().getFullYear()} RawExpress 
      </div>
    </footer>
  );
};

export default FooterSection;
