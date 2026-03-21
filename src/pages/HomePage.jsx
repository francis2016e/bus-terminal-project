import React from 'react'
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Locations from "../component/Locations";
import Terminals from "../component/Terminals";
import WelcomeCard from "../component/WelcomeCard";
// import Services from "../component/Services";
import ServicePage from "./ServicePage";
import Contact from "../component/Contact";



const HomePage = () => {
  return (
    <div>
       <Navbar />
    <Hero />
    <Locations isHome={true} />
    <Terminals />
    <WelcomeCard />
    {/* <Services /> */}
      <ServicePage isHome={true} />
    <Contact />
    </div>
  )
}

export default HomePage