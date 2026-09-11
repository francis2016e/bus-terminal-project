import { motion } from "framer-motion";
import stakeholdersImg from "../assets/Gariki terminal.jpg";

const stakeholders = [
  {
    number: "01",
    title: "Passengers & Travellers",
    description: "People using the terminals to access organised transportation within and beyond Enugu State.",
  },
  {
    number: "02",
    title: "Transport Operators",
    description: "Mass transit, interstate and town-service operators participating in the organised terminal system.",
  },
  {
    number: "03",
    title: "Drivers & Transport Workers",
    description: "The people directly involved in the daily movement of passengers, goods and vehicles through the terminals.",
  },
  {
    number: "04",
    title: "Businesses & Commercial Partners",
    description: "Legitimate businesses and service providers operating within or contributing to the terminal environment.",
  },
  {
    number: "05",
    title: "Government & Institutional Partners",
    description: "Government agencies, security institutions and other organisations whose responsibilities support the wider transport system.",
  },
];

const StakeholdersSection = () => {
  return (
    <section aria-label="Our Stakeholders" className="bg-white py-16 md:py-24 lg:py-28">
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
              Our Stakeholders
            </span>
          </div>
          <h2 className="text-[28px] font-bold leading-[1.05] tracking-tight text-slate-900 md:text-[34px] lg:text-[38px]">
            A Transport System Built Around People
          </h2>
          <p className="mt-5 max-w-[640px] text-[14px] leading-7 text-slate-600 md:text-[15px]">
            From passengers and transport operators to businesses, government institutions and the
            people who keep terminal operations running, the success of Enugu&apos;s transport system
            depends on effective coordination across its diverse stakeholders.
          </p>
        </motion.div>

        {/* Editorial grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-14 lg:items-start">
          {/* Image — authentic terminal people/movement */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-2xl bg-slate-100 shadow-sm">
              <img
                src={stakeholdersImg}
                alt="Passengers and transport activity at Gariki Bus Terminal — organised public infrastructure"
                className="aspect-[4/3] w-full object-cover md:aspect-[4/3] lg:aspect-[4/5]"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-blue-900/[0.03]" aria-hidden="true" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-slate-900/5" aria-hidden="true" />
            </div>
          </motion.div>

          {/* Stakeholder list — numbered, dividers, subtle hover */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              {stakeholders.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex gap-5 px-6 py-6 md:px-7 md:py-6 transition-colors hover:bg-blue-50/40"
                >
                  <span className="shrink-0 font-mono text-[13px] font-semibold tracking-widest text-blue-600 md:text-[14px]">
                    {item.number}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[12px] font-bold uppercase tracking-[0.08em] text-slate-900 md:text-[13px]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-6 text-slate-600 md:text-[14px]">
                      {item.description}
                    </p>
                  </div>
                  <span className="hidden shrink-0 self-center text-blue-600 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0 -translate-x-1 md:inline-flex" aria-hidden="true">
                    →
                  </span>
                </motion.div>
              ))}
            </div>
            <p className="mt-4 px-1 text-xs leading-5 text-slate-500">
              Coordination across these groups supports the orderly, safe and efficient operation of the terminal system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StakeholdersSection;
