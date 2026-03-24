import { useState } from 'react'
import './App.css'
import { createHashRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage'

import TerminalsLocations from './component/TerminalsLocation'
import WarningPage from './pages/WarningPage'
import ServicePage from './pages/ServicePage'
import AboutPage from './pages/AboutPage'



function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/terminals" element={<TerminalsLocations />} />
        <Route path="*" element={<WarningPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/about" element={<AboutPage />} />

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
