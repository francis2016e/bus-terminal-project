import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaMapMarkerAlt, FaTag } from "react-icons/fa";
import {shops} from "../component/terminalData"; 




const ShopListingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16 px-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <Link to="/" className="flex items-center text-blue-600 font-medium mb-4 hover:underline">
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-gray-800">Available Shop Spaces</h1>
        <p className="text-gray-600 mt-2">Find the perfect spot for your business in our busy terminal.</p>
      </div>

      {/* Shop Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto">
        {shops.map((shop) => (
          <motion.div
            key={shop.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
          >
            {/* Image with Hover "Grow" Effect */}
            <div className="overflow-hidden h-56">
              <motion.img
                whileHover={{ scale: 1.15 }} // This makes the picture grow
                transition={{ duration: 0.4 }}
                src={shop.image}
                alt={shop.name}
                className="w-full h-full object-cover cursor-pointer"
              />
            </div>

            {/* Shop Details */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{shop.name}</h3>
              
              <div className="flex items-center text-gray-600 text-sm mb-2">
                <FaMapMarkerAlt className="mr-2 text-blue-500" />
                {shop.location}
              </div>

              <div className="flex items-center text-gray-800 font-semibold mb-4">
                <FaTag className="mr-2 text-green-500" />
                {shop.price}
              </div>

              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                <Link to={`/shops/${shop.id}`}>View Details</Link>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ShopListingPage;
