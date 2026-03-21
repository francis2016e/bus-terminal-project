import React from "react";
import { motion } from "framer-motion";
import { FaBus, FaTicketAlt, FaParking, FaUserShield, FaInfoCircle, FaChair } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <FaBus size={35} />,
    title: "Passenger Transportation",
    description: "Reliable buses traveling daily to multiple destinations with professional drivers.",
  },
  {
    icon: <FaTicketAlt size={35} />,
    title: "Ticketing Services",
    description: "Quick and organized ticket purchase for passengers traveling to different cities.",
  },
  {
    icon: <FaParking size={35} />,
    title: "Bus Parking & Loading",
    description: "Dedicated loading bays and organized parking areas for smooth bus movement.",
  },
  {
    icon: <FaChair size={35} />,
    title: "Waiting Lounge",
    description: "Comfortable seating areas where passengers can wait safely before departure.",
  },
  {
    icon: <FaUserShield size={35} />,
    title: "Security & Safety",
    description: "Security personnel and controlled entry points to ensure passenger safety.",
  },
  {
    icon: <FaInfoCircle size={35} />,
    title: "Customer Support",
    description: "Our staff provide route guidance, travel information, and passenger assistance.",
  },
];

const ServicePage = ({isHome=false}) => {
  const displayedServices = isHome ? services.slice(0, 3) : services;
  return (
    <div className="bg-gray-50 min-h-screen py-20 px-6">

      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Our Terminal Services
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We provide organized, safe, and reliable transport services to ensure a smooth journey for every passenger.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">

        {displayedServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <div className="text-blue-600 mb-5">
              {service.icon}
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {service.title}
            </h3>

            <p className="text-gray-600 text-sm">
              {service.description}
            </p>
          </motion.div>
        ))}

      </div>
      {isHome && (<div className="text-center mt-10">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          <Link to="/services">See More</Link>
        </button>
      </div> )}
      
    </div>
    
  );
};

export default ServicePage;