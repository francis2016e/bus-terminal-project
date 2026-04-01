import { useState } from 'react'
import './App.css'
import { createHashRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage'

import TerminalsLocations from './component/TerminalsLocation'
import WarningPage from './pages/WarningPage'
import ServicePage from './pages/ServicePage'
import AboutPage from './pages/AboutPage'
import ContactPage from  './pages/ContactPage'
import ShopListingPage from './pages/ShopListingPage'
import SeeMoreShopPage from './pages/SeeMoreShopPage'




function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/terminals" element={<TerminalsLocations />} />
        <Route path="*" element={<WarningPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/shops" element={<ShopListingPage />} />
        <Route path="/shops/:id" element={<SeeMoreShopPage />} />

      </Route>
      
      
    )
  )
  return (
    <>
   <div>
   <RouterProvider router={router} />
   </div>
    </>
  )
}

export default App
