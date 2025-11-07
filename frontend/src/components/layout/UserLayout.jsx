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
   
   </>
  )
}

export default UserLayout