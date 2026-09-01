import React from "react";
import { motion } from "framer-motion";
import { Quote, Target, Eye, ShieldCheck } from "lucide-react";
import MD from "../assets/md.jpeg";

const About = () => {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-blue-600" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">
              Our Identity
            </span>
            <span className="h-px w-8 bg-blue-600" aria-hidden="true" />
          </div>
          <h1 className="text-[30px] md:text-[38px] font-bold leading-[1.05] tracking-tight text-slate-900">
            Enugu East-Zone Bus Terminals
          </h1>
          <p className="mt-4 text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-500">
            A Government transport infrastructure and terminal management organisation
          </p>
          <p className="mt-6 text-[15px] leading-7 text-slate-600 md:text-[16px] md:leading-8">
            Enugu East-Zone Bus Terminals is a Government organisation supporting Enugu State&apos;s
            transformation toward a safer, more organised and ultra-modern transport system. Through
            the management of designated bus terminals, we support road decongestion, the safety of
            passengers and goods, organised terminal environments and the coordination of mass
            transit, interstate and town-service operations. Our work also supports commerce,
            employment and sustainable public revenue as part of the State&apos;s broader transport
            vision.
          </p>
        </motion.div>

        {/* MD Message */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-slate-800 mb-16 md:mb-20 flex flex-col md:flex-row items-stretch"
        >
          <div className="md:w-[38%] relative">
            <img src={MD} alt="Hon Dr John Egbo" className="w-full h-full object-cover min-h-[380px] object-top" />
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent text-white">
              <h3 className="text-[16px] font-semibold">Hon Dr. John Egbo</h3>
              <p className="text-xs text-blue-200">Managing Director, Enugu East-Zone Bus Terminals</p>
            </div>
          </div>

          <div className="md:w-[62%] p-8 md:p-10 lg:p-12 flex flex-col justify-center relative">
            <Quote className="absolute top-8 right-8 text-slate-800 w-12 h-12" aria-hidden="true" />
            <div className="relative">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-300 mb-3">Managing Director&apos;s Message</p>
              <p className="text-slate-200 text-[15px] md:text-[16px] leading-7 italic">
                &ldquo;Our work is to bring greater order to public transportation — providing organised,
                safe and welcoming terminal environments, supporting the coordination of transport
                operations and contributing to a more efficient movement of people and goods across
                Enugu State.&rdquo;
              </p>
              <div className="mt-6 h-px w-10 bg-blue-600" aria-hidden="true" />
            </div>
          </div>
        </motion.div>

        {/* Mission, Vision & Commitment — institutional */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="p-7 border border-slate-200 rounded-2xl bg-slate-50">
            <Target className="text-blue-600 w-8 h-8 mb-5" aria-hidden="true" />
            <h3 className="text-[15px] font-bold uppercase tracking-[0.06em] text-slate-900 mb-3">Our Mission</h3>
            <p className="text-[14px] leading-6 text-slate-600">
              To manage designated bus terminals as organised, safe and functional public facilities
              that support road decongestion, passenger and goods safety and the efficient coordination
              of transport operations.
            </p>
          </div>

          <div className="p-7 border border-slate-200 rounded-2xl bg-slate-50">
            <Eye className="text-blue-600 w-8 h-8 mb-5" aria-hidden="true" />
            <h3 className="text-[15px] font-bold uppercase tracking-[0.06em] text-slate-900 mb-3">Our Vision</h3>
            <p className="text-[14px] leading-6 text-slate-600">
              To contribute to Enugu State&apos;s emergence as a State with a leading ultra-modern
              transport system — orderly, safe and efficient for residents, operators and businesses.
            </p>
          </div>

          <div className="p-7 border border-slate-200 rounded-2xl bg-slate-50">
            <ShieldCheck className="text-blue-600 w-8 h-8 mb-5" aria-hidden="true" />
            <h3 className="text-[15px] font-bold uppercase tracking-[0.06em] text-slate-900 mb-3">Our Commitment</h3>
            <p className="text-[14px] leading-6 text-slate-600">
              To maintain clean, orderly and ambient terminal environments that are secure for
              passengers, goods and transport workers and supportive of legitimate commerce and
              employment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
