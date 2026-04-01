import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Location from './Location'
import { terminalData } from './terminalData'

const Locations = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Define a Bold Separator Card
  const SeparatorCard = () => (
    <div className="min-w-[300px] h-[400px] flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-900 rounded-2xl shadow-xl px-6 text-center">
      <h3 className="text-white text-3xl font-black italic uppercase tracking-tighter mb-2">
        Next Terminal
      </h3>
      <div className="h-1 w-20 bg-yellow-400 mb-4"></div>
      <p className="text-blue-100 font-medium">Connecting Enugu East to the World</p>
    </div>
  );

  const scrollingVariants = {
    animate: {
      x: [0, "-50%"], 
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25, 
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="overflow-hidden py-16 bg-slate-50">
      <h2 className="text-4xl font-extrabold mb-12 text-center text-slate-800">
        Explore Our Terminals
      </h2>
      
      <motion.div 
        className="flex gap-8 px-4 w-max items-center"
        variants={scrollingVariants}
        animate={isPaused ? { x: undefined } : "animate"}
      >
        {/* First Set of Data */}
        {terminalData.map((terminal) => (
          <motion.div 
            key={`set1-${terminal.id}`} 
            className="w-[300px] cursor-pointer"
            onClick={() => setIsPaused(!isPaused)}
            whileHover={{ y: -10 }}
          >
            <Location {...terminal} />
          </motion.div>
        ))}

        {/* BOLD SEPARATOR - Appears "immediately" after the first set */}
        <SeparatorCard />

        {/* Second Set of Data (The "Follow up") */}
        {terminalData.map((terminal) => (
          <motion.div 
            key={`set2-${terminal.id}`} 
            className="w-[300px] cursor-pointer"
            onClick={() => setIsPaused(!isPaused)}
            whileHover={{ y: -10 }}
          >
            <Location {...terminal} />
          </motion.div>
        ))}
        
        {/* Second Separator to complete the loop */}
        <SeparatorCard />
      </motion.div>

      <div className="mt-10 text-center">
        <span className={`px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest ${isPaused ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
          {isPaused ? "Paused - Click to Resume" : "Live Terminal Feed"}
        </span>
      </div>
    </div>
  )
}

export default Locations