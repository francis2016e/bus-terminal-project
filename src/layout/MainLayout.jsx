import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const MainLayout = () => {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className={isHome ? '' : 'pt-[72px] md:pt-[78px] lg:pt-[80px]'}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout