import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaMapMarkerAlt, FaTag, FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";
import { shopListings } from "../component/terminalData"; 

const ShopListingPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <Link to="/" className="flex items-center mt-5 text-blue-600 font-medium mb-4 hover:text-blue-800 transition-colors group">
          <FaArrowLeft className="mr-2 transition-transform group-hover:-translate-x-1" /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-900 via-black to-blue-800 bg-clip-text text-transparent">
          Available Shop Spaces
        </h1>
        <p className="text-gray-500 mt-3 text-lg">Premium retail opportunities in our high-traffic terminal.</p>
      </div>

      {/* Shop Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto">
        {shopListings.map((shop) => (
          <motion.div
            key={shop.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl shadow-sm hover:shadow-2xl border border-gray-100 overflow-hidden flex flex-col transition-all duration-300"
          >
            {/* Image Section */}
            <div className="relative overflow-hidden h-60">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                src={shop.image}
                alt={shop.name}
                className="w-full h-full object-cover"
              />
              {/* Status Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center shadow-sm">
                <FaCheckCircle className="text-green-500 mr-2 text-xs" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-700">Ready for Lease</span>
              </div>
            </div>

            {/* Shop Details */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {shop.name}
                </h3>
                <div className="flex items-center text-gray-500 text-sm">
                  <FaMapMarkerAlt className="mr-1.5 text-blue-500" />
                  {shop.location}
                </div>
              </div>

              {/* Pricing & Tag Info */}
              <div className="mt-auto pt-4 border-t border-gray-50 flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Starting from</span>
                  <div className="flex items-center text-blue-600 font-extrabold text-lg">
                    <FaTag className="mr-2 text-xs opacity-50" />
                    {shop.price}
                  </div>
                </div>
                
                <div className="bg-gray-100 px-3 py-1 rounded-lg text-gray-600 text-xs font-semibold">
                  {shop.category || "Retail"}
                </div>
              </div>

              <Link to={`/shops/${shop.id}`} className="mt-6">
                <button className="w-full bg-gray-900 text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all duration-300">
                  View Details <FaExternalLinkAlt className="text-[10px] opacity-70" />
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ShopListingPage;