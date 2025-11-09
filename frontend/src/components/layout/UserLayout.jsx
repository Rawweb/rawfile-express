import FooterSection from '@components/common/FooterSection';
import Navbar from '@components/common/Navbar';
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const UserLayout = () => {
  const UserLayout = useLocation();

  // List of pages where I want my image footer to show
  const showFooterImage = location.pathname === '/';
  return (
    <>
      {/* header */}
      <Navbar />

      {/* main content */}
      <main>
        <Outlet />
      </main>

      {/* footer */}
      <FooterSection showImage={showFooterImage} /> 
    </>
  );
};

export default UserLayout;
