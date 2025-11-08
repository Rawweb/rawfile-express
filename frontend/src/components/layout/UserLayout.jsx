import FooterSection from '@components/common/FooterSection'
import Navbar from '@components/common/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
   <>
   {/* header */}
   <Navbar/>

   {/* main content */}
   <main>
    <Outlet/>
   </main>

   {/* footer */}
   <FooterSection/>
   </>
  )
}

export default UserLayout