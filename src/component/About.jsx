import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="px-6 md:px-16 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* ABOUT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            About the Terminal
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
            The terminal serves as a major transportation hub committed to
            providing safe, reliable, and efficient travel services for
            passengers across multiple routes. It plays a vital role in
            connecting communities and supporting economic activities through
            organized and structured transport operations.
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
            With well-coordinated loading systems, trained personnel, and
            clearly defined routes, the terminal ensures smooth daily
            operations while minimizing delays and enhancing passenger
            convenience.
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            By integrating technology into its services, the platform allows
            passengers to easily access information about routes, terminals,
            and schedules — improving the overall travel experience.
          </p>
        </motion.div>

        {/* MANAGING DIRECTOR */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-10 items-center mb-20"
        >
          
          <div className="flex justify-center">
            <img
              src="/images/md.jpg"
              alt="Managing Director"
              className="rounded-2xl shadow-lg w-72 h-80 object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Hon Dr John Egbo
            </h3>
            <p className="text-blue-600 font-medium mb-4">
              Managing Director <span className="text-green-600">(East-Zone Bus Terminal)</span>
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed">
              The Managing Director provides strategic leadership and oversees
              the overall operations of the terminal. Through effective
              management and forward-thinking initiatives, the terminal
              continues to maintain high standards of service delivery.
            </p>

            <p className="text-gray-600 leading-relaxed">
              With a strong commitment to safety, efficiency, and innovation,
              the leadership ensures that the terminal adapts to modern
              transportation needs while maintaining professionalism and
              operational excellence.
            </p>
          </div>

        </motion.div>

        {/* MISSION & VISION */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To provide safe, efficient, and reliable transportation services
              through well-organized terminal operations and customer-focused
              service delivery.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To become a leading transportation hub recognized for excellence,
              innovation, and commitment to passenger satisfaction.
            </p>
          </div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          
          <div>
            <h3 className="text-2xl font-bold text-blue-600">15+</h3>
            <p className="text-gray-600 text-sm">Routes Covered</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-green-600">100+</h3>
            <p className="text-gray-600 text-sm">Daily Trips</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-purple-600">24/7</h3>
            <p className="text-gray-600 text-sm">Operation</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-red-600">5000+</h3>
            <p className="text-gray-600 text-sm">Passengers Served</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;