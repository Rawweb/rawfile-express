import React from 'react';
import { blogData } from '@data/blogData.js';
import {
  FaArrowLeft,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { TfiEmail } from 'react-icons/tfi';
import * as LuIcons from 'react-icons/lu';

const getIconComponent = iconName => {
  return LuIcons[iconName] || null;
};

const BlogDetails = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const blog = blogData.find(blog => blog.id === Number(blogId));

  const Icon = getIconComponent(blog.icon);

  if (!blog) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-semibold text-primary-dark">
          Blog Not Found
        </h1>
        <p className="text-secondary-muted mt-3">
          The blog you’re looking for doesn’t exist.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="primary-btn-2 group mt-6"
        >
          <span className="relative z-10 text-primary-dark flex items-center gap-2">
            <FaArrowLeft className="size-4" /> Go Back
          </span>
          <span className="primary-btn-overlay-2"></span>
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <header className="relative">
        {/* background image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[300px] sm:h-[400px] lg:h-[550px] object-cover"
        />

        {/* gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-primary-dark to-transparent"></div>

        {/* text */}
        <div className="absolute inset-0 flex flex-col justify-center items-start container text-secondary-light space-y-4 mt-16">
          <div className="flex gap-2 items-center">
            <div>
              {Icon ? (
                <Icon className="size-12 md:size-14 text-primary-yellow" />
              ) : null}
            </div>

            <h1 className="text-2xl md:text-4xl font-semibold inline-flex flex-col items-center">
              {blog.day} <span className="text-sm font-normal">{blog.month}</span>
            </h1>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tightk">
            {blog.title}
          </h1>
        </div>
      </header>
      <section className="container py-20">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          {/* left */}
          <div className="w-full md:w-3/4 flex flex-col gap-6 text-secondary-muted">
            {/* title */}
            <h1 className="text-primary-dark font-medium text-lg md:text-2xl lg:text-3xl">
              {blog.subtitle}
            </h1>
            {/* description */}
            <p className="">{blog.description1}</p>
            {/* quote */}
            <p className="bg-primary-dark p-6 md:p-8 text-secondary-light italic">
              {blog.quote}
            </p>
            {/* subtitle */}
            <h1 className="text-primary-dark font-medium text-lg md:text-2xl lg:text-3xl">
              {blog.minititle}
            </h1>
            {/* description1 */}
            <p>{blog.description2}</p>
            {/* image */}
            <div className="flex flex-col items-center gap-3">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover"
              />
              {/* image name */}
              <p>{blog.title}</p>
            </div>
            {/* description3 */}
            <p>{blog.description3}</p>
            {/* benefits */}
            <ul className="list-disc pl-6 space-y-2">
              {blog.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>

            {/* social icons */}
            <div className="flex gap-4 border border-l-0 border-r-0 border-secondary-muted/40 py-4">
              <FaInstagram className="text-primary-dark opacity-70 hover:opacity-100" />
              <FaFacebook className="text-primary-dark opacity-70 hover:opacity-100" />
              <FaTwitter className="text-primary-dark opacity-70 hover:opacity-100" />
              <FaLinkedin className="text-primary-dark opacity-70 hover:opacity-100" />
            </div>
          </div>

          {/* right */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-10">
            {/* top */}
            <div className="w-full bg-secondary-light p-8 sm:p-10 text-primary-dark space-y-4">
              <h1 className="font-semibold text-lg md:text-2xl">
                How can we help you?
              </h1>
              <p className="text-secondary-muted">
                Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
                Etiam lobortis dapib libero vel porttitor. Nulla tempor elit nec
                feugiat tempus Phasellus atquam.
              </p>
              {/* button */}
              <Link to="/contact">
                <button className="primary-btn-2 group mt-5">
                  <span className="relative z-10 text-primary-dark">
                    Contact Us
                  </span>

                  {/* White overlay slides in diagonally (bottom-right → top-left) */}
                  <span className="primary-btn-overlay-2"></span>
                </button>
              </Link>
            </div>

            {/* bottom */}
            <div className="w-full bg-primary-dark/95 p-8 sm:p-10 text-secondary-light space-y-4 ">
              <p className="text-xs bg-secondary-light/20 px-2 py-1 border-l-4 border-primary-yellow w-fit ">
                Get In Touch
              </p>
              <h2 className=" leading-snug ">
                Need Help? <br />
                (00) 112 365 489
              </h2>

              {/* Contact info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center p-3 bg-primary-light border border-secondary-muted text-primary-yellow rounded-full">
                  <TfiEmail className="size-5" />
                </div>
                <div>
                  <p className="text-secondary-light">Email</p>
                  <p className="text-secondary-muted">contact@logistics.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* back button */}
        <div className="flex mt-10">
          <button onClick={() => navigate(-1)} className="primary-btn-2 group">
            <span className="relative z-10 text-primary-dark flex items-center gap-2">
              <FaArrowLeft className="size-4" /> Back to Blogs
            </span>
            <span className="primary-btn-overlay-2"></span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
