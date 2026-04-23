import React from "react";
import { motion } from "framer-motion";
import { Quote, Target, Eye, ShieldCheck } from "lucide-react"; // npm install lucide-react
import MD from "../assets/md.jpeg";

const About = () => {
  return (
    <section className="px-6 md:px-16 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* HERO / ABOUT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Our Identity</h2>
          <h1 className="text-4xl md:text-5xl text-slate-900 text-extrabold mb-8 font-bold">
            Redefining Transport Excellence in Enugu
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            The Enugu East-Zone Bus Terminals is more than just a departure point; it is a 
            technologically driven gateway connecting communities. We are committed 
            to setting the gold standard for safety, efficiency, and structured 
            transportation across the region.
          </p>
        </motion.div>

        {/* MD MESSAGE SECTION - THE "BRILLIANT MESSAGE" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl mb-24 flex flex-col md:flex-row items-stretch"
        >
          <div className="md:w-2/5 relative">
            <img
              src={MD}
              alt="Hon Dr John Egbo"
              className="w-full h-full object-cover min-h-[400px]"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
              <h3 className="text-xl font-bold italic">Hon Dr. John Egbo</h3>
              <p className="text-sm text-blue-400">Managing Director, Enugu East-Zone Bus Terminals</p>
            </div>
          </div>

          <div className="md:w-3/5 p-10 md:p-16 flex flex-col justify-center relative">
            <Quote className="absolute top-10 right-10 text-slate-800 w-20 h-20 -z-0" />
            <div className="relative z-10">
              <h4 className="text-blue-400 font-semibold mb-4 uppercase tracking-wider text-sm">MD's Visionary Message</h4>
              <p className="text-slate-300 text-xl italic leading-relaxed mb-8">
                "Our mission transcends simply moving vehicles from one point to another. 
                We are building a legacy of trust. By integrating digital optimization 
                with world-class infrastructure, we ensure that every traveler who steps 
                into this terminal experiences the dignity, safety, and reliability 
                they deserve."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-12 bg-blue-500"></div>
                <p className="text-slate-400 font-medium">Leading with Operational Excellence</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* MISSION, VISION & VALUES */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="p-8 border border-slate-100 rounded-2xl bg-slate-50 hover:shadow-lg transition">
            <Target className="text-blue-600 w-10 h-10 mb-6" />
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To provide safe, efficient, and reliable transportation services 
              through well-organized terminal operations and customer-focused 
              service delivery.
            </p>
          </div>

          <div className="p-8 border border-slate-100 rounded-2xl bg-slate-50 hover:shadow-lg transition">
            <Eye className="text-green-600 w-10 h-10 mb-6" />
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To become a leading transportation hub recognized for excellence, 
              innovation, and a seamless travel experience across Nigeria.
            </p>
          </div>

          <div className="p-8 border border-slate-100 rounded-2xl bg-slate-50 hover:shadow-lg transition">
            <ShieldCheck className="text-purple-600 w-10 h-10 mb-6" />
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Commitment</h3>
            <p className="text-slate-600 leading-relaxed">
              We prioritize passenger security and terminal hygiene above all, 
              ensuring that our environment is conducive for both commerce and travel.
            </p>
          </div>
        </div>

        {/* REFINED STATS SECTION */}
        <div className="bg-blue-600 rounded-2xl p-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div>
            <h3 className="text-4xl font-black mb-1">15+</h3>
            <p className="text-blue-100 text-sm font-medium">Primary Routes</p>
          </div>
          <div>
            <h3 className="text-4xl font-black mb-1">1,000+</h3>
            <p className="text-blue-100 text-sm font-medium">Daily Departures</p>
          </div>
          <div>
            <h3 className="text-4xl font-black mb-1">24/7</h3>
            <p className="text-blue-100 text-sm font-medium">Live Surveillance</p>
          </div>
          <div>
            <h3 className="text-4xl font-black mb-1">5,000+</h3>
            <p className="text-blue-100 text-sm font-medium">Weekly Passengers</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;