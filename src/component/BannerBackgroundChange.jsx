import React from 'react'
import arrow from '../assets/arrow.svg'

const BannerBackgroundChange = ({
  heroCount,
  setHeroCount,
  heroData,}) => {
  return (
    <div className="relative z-10 h-[500px] flex flex-col px-6 md:px-16 lg:px-24 py-20 text-white ">
      
      {/* Text Content */}
      <div className="max-w-2xl mt-20">
        <h1 className=" bg-gradient-to-r from-white through-red-700 to-blue-500 bg-clip-text text-transparent font-bold text-3xl md:text-5xl lg:text-6xl">
          {heroData.text1}
        </h1>
        <h1 className="text-white font-bold text-xl md:text-3xl mt-2">
          {heroData.text2}
        </h1>
      </div>

      {/* Explore Section */}
      <div className="absolute bottom-24 left-6 md:left-16 lg:left-24 flex items-center gap-4 cursor-pointer w-max group">
        <p className="text-sm md:text-base tracking-wide">
          Explore the features
        </p>
        <img
          src={arrow}
          alt="Next"
          onClick={() =>
            setHeroCount((count) => (count > 1 ? 0 : count + 1))
          }
          className="w-6 h-6 md:w-8 md:h-8 hover:translate-x-1 transition text-white bg-white/30 hover:bg-white/50 rounded-full p-1"
        />
      </div>

      {/* Dots + Play */}
      <div className="absolute bottom-10 left-6 md:left-16 lg:left-24">
        
        {/* Dots */}
        <ul className="flex gap-3">
          <li
            onClick={() => setHeroCount(0)}
            className={`w-3 h-3 rounded-full cursor-pointer transition
              ${heroCount === 0 ? "bg-white/100 scale-110" : "bg-white/40"}
            `}
          />
          <li
            onClick={() => setHeroCount(1)}
            className={`w-3 h-3 rounded-full cursor-pointer transition
              ${heroCount === 1 ? "bg-white scale-110" : "bg-white/40"}
            `}
          />
          <li
            onClick={() => setHeroCount(2)}
            className={`w-3 h-3 rounded-full cursor-pointer transition
              ${heroCount === 2 ? "bg-white scale-110" : "bg-white/40"}
            `}
          />
        </ul>

       
      </div>
    </div>
  )
}

export default BannerBackgroundChange