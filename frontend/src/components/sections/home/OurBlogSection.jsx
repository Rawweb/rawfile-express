import React from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '@data/blogData.js';
import * as LuIcons from 'react-icons/lu';

const getIconComponent = iconName => {
  return LuIcons[iconName] || null;
};

const OurBlogSection = ({ limit = null, showButton = false }) => {
  // Slice posts if limit is given
  const blogPosts = limit ? blogData.slice(0, limit) : blogData;

  return (
    <section className="py-20 container">
      <div className="flex items-center flex-col justify-center gap-y-10">
        {/* top */}
        <div className="space-y-3 text-center">
          <p className="text-xs sm:text-sm bg-secondary-light px-2 py-1 border-l-4 border-primary-yellow mx-auto w-fit">
            Our Blog
          </p>
          <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl text-primary-dark">
            Our Latest News
          </h1>
        </div>

        {/* bottom */}
        <div className="w-full sm:w-3/4 md:w-full lg:w-3/4">
          <div className="border-b mb-10 border-secondary-muted/30"></div>

          {blogPosts.map(post => {
            const Icon = getIconComponent(post.icon);
            return (
              <div
                key={post.id}
                className="group cursor-pointer flex flex-col md:flex-row gap-5 items-start border-b border-secondary-muted/30 pb-10 mb-10"
              >
                {/* left - image */}
                <Link
                  to={`/blog/${post.id}`}
                  className="relative w-full overflow-hidden"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* overlay */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-dark/70 w-[80%] h-[80%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-secondary-light">Read More</span>
                  </div>
                </Link>

                {/* middle */}
                <div className="flex md:flex-col gap-2 md:gap-0 items-center">
                  {Icon ? (
                    <Icon className="size-10 text-primary-yellow" />
                  ) : null}
                  <h1 className="flex md:flex-col text-primary-dark gap-1 md:gap-0 items-center font-semibold text-2xl">
                    {post.day}{' '}
                    <span className="text-sm font-normal text-secondary-muted">
                      {post.month}
                    </span>
                  </h1>
                </div>

                {/* right */}
                <div className="space-y-3 md:border-l md:border-t-0 border-l-0 border-t pt-8 border-secondary-muted/30 pl-5 w-full">
                  <Link
                    to={`/blog/${post.id}`}
                    className="font-semibold text-lg md:text-xl text-primary-dark group-hover:text-primary-yellow transition-colors"
                  >
                    {post.title}
                  </Link>
                  <p className="text-secondary-muted text-sm md:text-base">
                    {post.description}
                  </p>

                  <ul className="list-disc ml-6 text-sm text-primary-dark/80">
                    {post.list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}

          {/* {displayedPosts.map(post => (
            <div
              key={post.id}
              className="group cursor-pointer flex flex-col md:flex-row gap-5 items-start border-b border-secondary-muted/30 pb-10 mb-10"
            >
              
            </div>
          ))} */}

          {/* button */}
          {showButton && (
            <Link to="/blog" className="flex justify-center">
              <button className="secondary-btn group mt-2">
                <span className="relative z-10">Read More</span>
                <span className="secondary-btn-overlay"></span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurBlogSection;
