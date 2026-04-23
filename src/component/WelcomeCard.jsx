import React from "react";
import { motion } from "framer-motion";
import welcomeImage from "../assets/governor img.jpg";
import { Link } from "react-router-dom";

const WelcomeCard = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden my-2">

      {/* Top Level Text */}
      <div className="p-8 text-center ">
        <h2 className="text-3xl font-bold text-gray-800">
          Welcome to Enugu East-Zone Bus Terminal
        </h2>
        <p className="text-gray-600 mt-2">
          Your gateway to safe and reliable transportation.
        </p>
      </div>

      <div className="flex flex-col md:flex-row">

        {/* Image - Slides from LEFT */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
         whileInView={{ x: 0, opacity: 1 }}
           viewport={{ once: true }}

          transition={{ duration: 0.8 }}
          className="md:w-[60%]"
        >
          <img
            src={welcomeImage}
            alt="Terminal"
            className="w-full h-full pt-10 pb-10 pl-20 pr-20 object-cover rounded-5xl shadow-lg"
          />
        </motion.div>

        {/* Text - Slides from RIGHT */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}

          transition={{ duration: 0.8 }}
          className="md:w-[40%] p-8  flex flex-col justify-center"
        >
          <h3 className="text-3xl text-center font-semibold mb-4">
            Why Choose Us?
          </h3>

          <p className="text-gray-600 mb-4">
           We provide organized terminals, comfortable waiting areas, secure environments, and efficient transport services across Enugu State. Our facilities are designed to ensure passenger safety, convenience, and timely departures while maintaining high standards of cleanliness and operational excellence. We are committed to delivering reliable travel experiences through well-managed terminals and customer-focused service.
          </p>
        <Link to="/about">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition ">
            Learn More
          </button>
        </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default WelcomeCard;
