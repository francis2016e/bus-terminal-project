import React from 'react'
import { useState } from "react";
import { FaMapMarker, FaPhone } from "react-icons/fa";

const TerminalsLocation = ({isHome=true}) => {
     const [search, setSearch] = useState("");
    
      const terminalData = [
        {
          id: 1,
          name: "Holy Ghost Terminal 1",
          address: "Holy Ghost Bus Terminal, Ogbete, Enugu State, Nigeria",
          phone: "0803 123 4567",
        },
        {
          id: 2,
          name: "Holy Ghost Terminal 2",
          address: "Holy Ghost Bus Terminal, Ogbete, Enugu State, Nigeria",
          phone: "0803 123 4567",
        },
        {
          id: 2,
          name: "Abakpa Terminal",
          address: "Abakpa Main Bus Park, Abakpa Nike, Enugu",
          phone: "0815 987 6543",
        },
        {
          id: 3,
          name: "Gariki Terminal",
          address: "Gariki Transport Terminal, Awkunanaw, Enugu",
          phone: "0706 555 1122",
        },
      ];
    
      const filteredTerminals = terminalData.filter((terminal) =>
        terminal.name.toLowerCase().includes(search.toLowerCase()) ||
        terminal.address.toLowerCase().includes(search.toLowerCase()) ||
        terminal.phone.includes(search)
      );

  return (
    <div>

      {isHome && (<div className="max-w-4xl mx-auto px-4 py-8 mt-10">
                <input
                  type="text"
                  placeholder="Search by name, address or phone..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full p-4 border rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div> )}

        {/* SEARCH SECTION (NOW BELOW IMAGE) */}
              
        
              {/* TERMINAL CARDS */}
              <div className="max-w-6xl mx-auto px-6 pb-16">
                <div className="grid gap-8 md:grid-cols-3">
                  {filteredTerminals.length > 0 ? (
                    filteredTerminals.map((terminal) => (
                      <div
                        key={terminal.id}
                        className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
                      >
                        <h2 className="text-xl font-bold mb-3">
                          {terminal.name}
                        </h2>
        
                        <p className="text-gray-600 mb-2">
                          <FaMapMarker className="inline mr-2 text-red-500" />
                          {terminal.address}
                        </p>
        
                        <p className="text-gray-600 mb-4">
                          <FaPhone className="inline mr-2 text-blue-500" />
                          {terminal.phone}
                        </p>
        
                        <a
                          href={`tel:${terminal.phone}`}
                          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                          Call Now
                        </a>
                      </div>
                    ))
                  ) : (
                    <p className="text-center col-span-full text-gray-500">
                      No terminal found.
                    </p>
                  )}
                </div>
              </div>
        

    </div>
  )
}

export default TerminalsLocation