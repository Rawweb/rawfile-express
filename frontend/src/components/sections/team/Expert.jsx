import React from 'react';
import expert from '@assets/customer-1.jpg';
import expert2 from '@assets/customer-2.jpg';
import expert3 from '@assets/customer-3.jpg';
import expert4 from '@assets/customer-4.jpg';
import expert5 from '@assets/customer-5.jpg';
import expert6 from '@assets/customer-6.jpg';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const experts = [
  {
    id: 1,
    image: expert,
    name: 'Jessca Arow',
    role: 'Designer',
    socials: [
      <FaTwitter className="size-5" />,
      <FaFacebook className="size-5" />,
      <FaInstagram className="size-5" />,
    ],
  },
  {
    id: 2,
    image: expert2,
    name: 'Kathleen Smith',
    role: 'Transport Manager',
    socials: [
      <FaTwitter className="size-5" />,
      <FaFacebook className="size-5" />,
      <FaInstagram className="size-5" />,
      <FaLinkedin className="size-5" />,
    ],
  },
  {
    id: 3,
    image: expert3,
    name: 'Rebecca Taylor',
    role: 'Cargo Head',
    socials: [
      <FaFacebook className="size-5" />,
      <FaInstagram className="size-5" />,
    ],
  },
  {
    id: 4,
    image: expert4,
    name: 'Ria Jackson',
    role: 'Operational Head',
    socials: [
      <FaTwitter className="size-5" />,
      <FaFacebook className="size-5" />,
      <FaInstagram className="size-5" />,
    ],
  },
  {
    id: 5,
    image: expert5,
    name: 'Kane Williama',
    role: 'Country Head',
    socials: [
      <FaTwitter className="size-5" />,
      <FaFacebook className="size-5" />,
      <FaInstagram className="size-5" />,
    ],
  },
  {
    id: 6,
    image: expert6,
    name: 'Lisara Tylor',
    role: 'Financial Manager',
    socials: [
      <FaFacebook className="size-5" />,
      <FaTwitter className="size-5" />,
    ],
  },
];

const Expert = () => {
  return (
    <section className="container py-20">
      {/* Header */}
      <div className="text-center space-y-3 mb-10">
        <p className="text-xs sm:text-sm bg-secondary-light px-3 py-1 border-l-4 border-primary-yellow w-fit mx-auto">
          The Transporters
        </p>
        <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl text-primary-dark">
          Meet Expert Team
        </h1>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experts.map(member => (
          <div
            key={member.id}
            className="flex flex-col group overflow-hidden shadow-md"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Social Icons */}
              <div className="absolute flex gap-3 text-primary-dark bg-primary-yellow p-3 -bottom-[5%] right-0">
                {member.socials.map((icon, i) => (
                  <span
                    key={i}
                    className="cursor-pointer hover:opacity-80 transition"
                  >
                    {icon}
                  </span>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="bg-primary-dark p-5 text-secondary-light">
              <h2 className="font-medium text-base md:text-lg">
                {member.name}
              </h2>
              <p className="text-sm text-secondary-light/70">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expert;
