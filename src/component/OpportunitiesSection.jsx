import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import commercialImg from "../assets/insidehallterminalimg.jpg";
import employmentImg from "../assets/enugu bus terminal hall.webp";
import businessImg from "../assets/enugu bus terminal bay.webp";

const pathways = [
  {
    number: "01",
    title: "Commercial Opportunities",
    description: "Explore opportunities for legitimate businesses and commercial activities within the terminal environment.",
    cta: "Acquire a Shop at the Terminal",
    route: "/commercial-opportunities",
    image: commercialImg,
    alt: "Terminal interior ticketing and commercial area",
  },
  {
    number: "02",
    title: "Employment Opportunities",
    description: "View current vacancies and recruitment announcements connected to terminal management and approved employment opportunities.",
    cta: "View Jobs & Vacancies",
    route: "/employment-opportunities",
    image: employmentImg,
    alt: "Terminal hall and operational environment",
  },
  {
    number: "03",
    title: "Business Advertising",
    description: "Give approved businesses and services within the terminal ecosystem a visible platform to reach passengers, transport users and the wider public.",
    cta: "Advertise Your Business",
    route: "/business-opportunities",
    image: businessImg,
    alt: "Bus terminal bay and passenger circulation",
  },
];

const OpportunitiesSection = () => {
  return (
    <section aria-label="Opportunities at the terminals" className="bg-slate-50 py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-blue-600" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">
              Opportunities at the Terminals
            </span>
          </div>
          <h2 className="text-[28px] font-bold leading-[1.05] tracking-tight text-slate-900 md:text-[34px] lg:text-[38px]">
            Opportunities Within a Modern Transport Environment
          </h2>
          <p className="mt-5 max-w-[640px] text-[14px] leading-7 text-slate-600 md:text-[15px]">
            The terminals support more than transportation. They provide a structured environment for
            legitimate commerce, employment and business activity, creating opportunities for individuals
            and organisations within Enugu&apos;s growing transport ecosystem.
          </p>
        </motion.div>

        {/* Pathways */}
        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-6 lg:gap-8">
          {pathways.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md hover:border-blue-200"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-blue-900/[0.03] group-hover:bg-blue-900/[0.06] transition-colors" aria-hidden="true" />
                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold tracking-widest text-slate-700 shadow-sm">
                  {item.number}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <h3 className="text-[15px] font-bold leading-tight text-slate-900 md:text-[16px]">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-[13px] leading-6 text-slate-600">
                  {item.description}
                </p>
                <Link
                  to={item.route}
                  className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-blue-600 transition-colors hover:text-blue-700 group/link"
                >
                  {item.cta}
                  <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-0.5" aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;
