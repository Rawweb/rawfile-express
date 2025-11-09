import React from 'react';
import { LuCalendarDays } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import blog1 from '@assets/blog-1.jpg';
import blog2 from '@assets/blog-2.jpg';
import blog3 from '@assets/blog-3.jpg';
import blog4 from '@assets/blog-4.jpg';
import blog5 from '@assets/blog-5.jpg';

const blogPosts = [
  {
    id: 1,
    image: blog1,
    day: '08',
    month: 'September',
    icon: <LuCalendarDays className="size-9 mb-1" />,
    title: 'Inland freight a worthy solution for your business',
    description:
      'Our inland freight service ensures safe, fast, and reliable delivery across cities with modern tracking and professional handling.',
    list: ['Flexible routes', 'Quick delivery', 'Real-time tracking', 'Safe handling'],
  },
  {
    id: 2,
    image: blog2,
    day: '12',
    month: 'September',
    icon: <LuCalendarDays className="size-9 mb-1" />,
    title: 'How technology can help redraw the supply chain map',
    description:
      'We use advanced technology to optimize logistics, improving visibility, accuracy, and communication across the supply network.',
    list: ['Smart analytics', 'Cloud systems', 'Faster updates', 'Better control'],
  },
  {
    id: 3,
    image: blog3,
    day: '25',
    month: 'September',
    icon: <LuCalendarDays className="size-9 mb-1" />,
    title: 'Five things you should have ready for your broker',
    description:
      'Proper preparation speeds up customs clearance, lowers costs, and keeps your shipments organized throughout the delivery process.',
    list: ['Clear documents', 'Proper labels', 'Right permits', 'Good communication'],
  },
  {
    id: 4,
    image: blog4,
    day: '25',
    month: 'September',
    icon: <LuCalendarDays className="size-9 mb-1" />,
    title: 'Four simple tips for becoming a healthier truck driver',
    description:
      'Long hours on the road can take a toll; maintaining balance, rest, and fitness ensures safer, more productive driving.',
    list: ['Healthy meals', 'Adequate rest', 'Regular exercise', 'Mental focus'],
  },
  {
    id: 5,
    image: blog5,
    day: '25',
    month: 'September',
    icon: <LuCalendarDays className="size-9 mb-1" />,
    title: 'What Is The Role Of A Logistics Operations Manager',
    description:
      'A logistics operations manager oversees transportation, warehousing, and coordination, ensuring smooth, cost-efficient delivery from origin to destination.',
    list: ['Route planning', 'Team coordination', 'Process optimization', 'Cost control'],
  },
];

const OurBlogSection = ({ limit = null, showButton = false }) => {
  // Slice posts if limit is given
  const displayedPosts = limit ? blogPosts.slice(0, limit) : blogPosts;

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

          {displayedPosts.map((post) => (
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
                {post.icon}
                <h1 className="flex md:flex-col gap-1 md:gap-0 items-center font-semibold text-2xl">
                  {post.day}{' '}
                  <span className="text-sm font-normal text-secondary-muted">
                    {post.month}
                  </span>
                </h1>
              </div>

              {/* right */}
              <div className="space-y-3 md:border-l md:border-t-0 border-l-0 border-t pt-8 border-secondary-muted/30 pl-5">
                <h1 className="font-semibold text-lg md:text-xl text-primary-dark group-hover:text-primary-yellow transition-colors">
                  {post.title}
                </h1>
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
          ))}

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
