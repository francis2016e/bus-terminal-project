import React from 'react'
import { useState, useEffect } from 'react'
import BackgroundChange from './BackgroundChange'
import BannerBackgroundChange from './BannerBackgroundChange'

const Hero = () => {
  
    const heroData = [
    { text1: "Travel without stress", text2: "Your comfort is our priority" },
    { text1: "Reliable transport services", text2: "Get to your destination safely" },
    { text1: "Smooth and organized travel", text2: "Experience better commuting today" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
      
      {/* Background */}
      <BackgroundChange
        heroCount={heroCount}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full">
        <BannerBackgroundChange
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
        />
      </div>
    </div>
  );
  
}

export default Hero