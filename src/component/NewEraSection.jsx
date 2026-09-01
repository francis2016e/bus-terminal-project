import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import governorImage from "../assets/Governor img.jpg";

const NewEraSection = () => {
  return (
    <section
      aria-label="A New Era of Transportation"
      className="bg-white py-16 md:py-24 lg:py-28"
    >

      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16 lg:items-start">
          {/* LEFT — Governor photograph — editorial, breathing room */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-2xl bg-slate-100 shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
              {/* subtle blue accent at top edge — retained but finer */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-blue-600/90"
                aria-hidden="true"
              />
              <img
                src={governorImage}
                alt="Governor Peter Ndubuisi Mbah, Enugu State"
                className="aspect-[4/5] w-full object-cover object-[50%_22%] md:aspect-[5/6] lg:aspect-[4/5]"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="mt-4 text-center text-xs font-medium uppercase tracking-widest text-slate-500 lg:text-left">
              Governor Peter Ndubuisi Mbah — Enugu State
            </p>
          </motion.div>

          {/* RIGHT — Heading + narrative */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            {/* Eyebrow */}
            <div className="mb-4 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-blue-600" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">
                Enugu State Transport Transformation
              </span>
            </div>

            {/* Heading — exact */}
            <h2 className="max-w-[560px] text-[30px] font-bold leading-[1.05] tracking-tight text-slate-900 md:text-[36px] lg:text-[40px]">
              A New Era of Transportation
            </h2>

            {/* Blue divider under heading — subtle institutional */}
            <div
              className="mt-5 h-px w-12 bg-blue-600"
              aria-hidden="true"
            />

            {/* Body — approved copy verbatim — narrowed for readability */}
            <div className="mt-7 max-w-[600px] space-y-6 text-[15px] leading-7 text-slate-600 md:text-[17px] md:leading-8">
              <p>
                Under the leadership of Governor Peter Ndubuisi Mbah, Enugu State is taking a
                transformative approach to transportation—building modern infrastructure that
                promotes safer journeys, decongests our roads, brings greater organisation to
                public transportation and creates a more efficient environment for passengers,
                transport operators and businesses.
              </p>
              <p>
                The modern bus terminals at Holy Ghost, Abakpa and Gariki are part of this
                effort. They provide organised spaces for transport operations while supporting
                the wider reorganisation of road transportation, improving the safety and
                experience of passengers and goods, and creating opportunities for commerce,
                employment and sustainable revenue generation.
              </p>
              <p>
                This is part of a broader vision to position Enugu as a State with a leading
                ultra-modern transport system.
              </p>
            </div>

            {/* CTA — single */}
            <div className="mt-10">
              <Link
                to="/management"
                className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-[13px] text-[14px] font-semibold tracking-wide text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Meet the Management Team
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewEraSection;
