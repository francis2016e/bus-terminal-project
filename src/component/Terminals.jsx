import React, { useState } from "react";
import terminalHall from "../assets/enugu bus terminal hall.webp";
import { FaMapMarker,FaPhone } from "react-icons/fa";

const Terminals = ({isHome=false}) => {
  const [search, setSearch] = useState("");

  const terminalData = [
    {
      id: 1,
      name: "Holy Ghost Terminal",
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
    <div className="w-full">

      {/* HEADER */}
      <div className="text-center py-10 px-4">
        <h1 className="text-4xl font-bold text-gray-800">
          Enugu East-Zone Bus Terminals
        </h1>
        <p className="mt-3 text-gray-600">
          Find and contact bus terminals in Enugu East-Zone 
        </p>
      </div>

      {/* TERMINAL HALL IMAGE */}
      <div className="w-full">
        <img
          src={terminalHall}
          alt="Enugu Bus Terminal Hall"
          className="w-full h-[350px] object-cover mb-10 rounded-lg shadow"
        />
      </div>

      {isHome && ( <div className="max-w-4xl mx-auto px-4 py-8">
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
  );
};

export default Terminals;
