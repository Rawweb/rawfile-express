import React, { useState } from 'react';
import logo from '@assets/logo.png';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { HiX, HiMenu } from 'react-icons/hi';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('#home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#project', label: 'Project' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary-dark/30 z-50 border-b border-secondary-light/70 shadow-md">
      <div className="container flex items-center justify-between h-18 text-secondary-light">
        {/* Logo */}
        <Link to="/" className="flex gap-2 items-center cursor-pointer group">
          <img
            src={logo}
            alt="logo"
            className="h-5 w-5 group-hover:scale-110 transition-transform"
          />
          <h1 className="font-bold tracking-tighter text-xl">RawExpress</h1>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`relative text-sm font-medium transition-colors ${
                activeLink === link.href
                  ? 'text-primary-yellow after:absolute after:-bottom-6 after:left-0 after:h-0.5 after:w-full after:bg-primary-yellow after:transition-all'
                  : 'text-secondary-light hover:text-primary-yellow'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* buttons */}
        <div className="hidden md:flex items-center gap-8 h-full">
          {/* social icons */}
          <div className="flex items-center gap-2">
            <FaFacebookF className="size-4 hover:text-primary-yellow transition-colors" />
            <FaInstagram className="size-4 hover:text-primary-yellow transition-colors" />
            <FaLinkedinIn className="size-4 hover:text-primary-yellow transition-colors" />
          </div>

          {/* button */}
          <button className="bg-secondary-light text-black h-full  px-6 py-3 hover:bg-transparent hover:text-primary-yellow hover:border hover:border-secondary-light transition-all duration-300">
            <Link to="/quote" className="font-medium tracking-tight">
              Request Quote
            </Link>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-secondary-light hover:text-primary-yellow transition"
        >
          {isMenuOpen ? (
            <HiX className="size-6" />
          ) : (
            <HiMenu className="size-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav Items */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary-dark/70 border-t border-secondary-muted py-4">
          <div className="container mx-auto px-4 space-y-3 animate-slide-down">
            {/* Nav links */}
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`block text-sm font-medium py-2 ${
                  activeLink === link.href
                    ? 'text-primary-yellow'
                    : 'text-secondary-light hover:text-primary-yellow'
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Social Icons */}
            <div className="flex items-center gap-4 border-t pt-4 border-secondary-muted">
              <FaFacebookF className="size-5 text-secondary-light hover:text-primary-yellow transition-colors cursor-pointer" />
              <FaInstagram className="size-5 text-secondary-light hover:text-primary-yellow transition-colors cursor-pointer" />
              <FaLinkedinIn className="size-5 text-secondary-light hover:text-primary-yellow transition-colors cursor-pointer" />
            </div>

            {/* Quote Button */}
            <Link
              to="/quote"
              onClick={() => setIsMenuOpen(false)}
              className="block text-center mt-4 bg-secondary-light text-black px-6 py-3 font-medium tracking-tight hover:bg-transparent hover:text-primary-yellow hover:border hover:border-secondary-light transition-all duration-300"
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
