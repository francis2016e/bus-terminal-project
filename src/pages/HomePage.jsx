import React from 'react'
import Hero from "../component/Hero";
import NewEraSection from "../component/NewEraSection";
import OurRoleSection from "../component/OurRoleSection";
import TerminalNetworkSection from "../component/TerminalNetworkSection";
import OpportunitiesSection from "../component/OpportunitiesSection";
import Contact from "../component/Contact";



const HomePage = () => {
  return (
    <div>
    <Hero />
    <NewEraSection />
    <OurRoleSection />
    <TerminalNetworkSection />
    <OpportunitiesSection />
    <Contact />
    </div>
  )
}

export default HomePage