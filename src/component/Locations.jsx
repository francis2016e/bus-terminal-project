import React from 'react'
import Location from './Location'
import {terminalData} from './terminalData'

const Locations = ({isHome = false}) => {
  const displayTerminalLocations = isHome ? terminalData.slice(0, 4) : terminalData;
  return (
    <>
      <div className="text-4xl font-bold mt-10 mb-10 text-center"> Terminal Locations</div>
    
    <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
  {displayTerminalLocations.map((terminal) => (
    <Location
      key={terminal.id}
      name={terminal.name}
      location={terminal.location}
      description={terminal.description}
      image={terminal.image}
    />
  ))}
</div>

    </>
   
  )
}

export default Locations