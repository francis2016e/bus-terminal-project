import React from "react";
import { motion } from "framer-motion";
import { FaBus, FaTicketAlt, FaParking, FaUserShield, FaInfoCircle, FaChair, FaStore } from "react-icons/fa";
import { Link } from "react-router-dom";
import t1shop2 from "../assets/T1shop2.jfif";


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

const ServicePage = ({ isHome = false }) => {
  const displayedServices = isHome ? services.slice(0, 3) : services;

  return (
    <div className="bg-gray-50 min-h-screen py-20 px-6">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Our Terminal Services</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We provide organized, safe, and reliable transport and retail services.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* 1. Shop Renting - Hero Style (Full Width) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative w-full h-[400px] rounded-3xl overflow-hidden mb-10 shadow-2xl group"
        >
          {/* Background Image with Hover Zoom */}
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
            src={t1shop2}
            alt="Shop Renting"
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />

          {/* Content */}
          <div className="relative h-full flex flex-col justify-center items-start p-10 md:p-16 text-white max-w-2xl">
            <div className="bg-blue-600 p-3 rounded-xl mb-4">
              <FaStore size={30} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop Renting Services</h2>
            <p className="text-lg text-gray-200 mb-6">
              Establish your business in a high-traffic environment. Premium retail spaces are now available for rent within the terminal.
            </p>
            <Link to="/shops">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition transform hover:scale-105">
                See More Shops
              </button>
            </Link>
          </div>
        </motion.div>

        {/* 2. Other Services - Equal Grid (Same Height/Width) */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {displayedServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 flex flex-col items-start transition-all h-[280px]" // Fixed Height
            >
              <div className="text-blue-600 mb-5">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {isHome && (
        <div className="text-center mt-16">
          <Link to="/services">
            <button className="bg-gray-900 text-white px-10 py-4 rounded-xl hover:bg-black transition-all font-semibold shadow-lg">
              Explore All Services
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ServicePage;
