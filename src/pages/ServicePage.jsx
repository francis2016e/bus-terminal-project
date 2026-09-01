import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const responsibilities = [
  {
    number: "01",
    title: "Road Decongestion",
    description:
      "Providing organised spaces for loading, unloading, parking and passenger movement helps reduce roadside congestion and improve traffic flow around transport corridors.",
  },
  {
    number: "02",
    title: "Safety & Security",
    description:
      "Promoting a secure terminal environment for passengers, goods, vehicles, transport workers and other users is central to our operations.",
  },
  {
    number: "03",
    title: "Transport Coordination & Oversight",
    description:
      "Supporting greater organisation and oversight of mass transit, interstate and town-service bus operations within the terminal system.",
  },
  {
    number: "04",
    title: "Terminal Management",
    description:
      "Maintaining clean, orderly, functional and welcoming public transport facilities that support efficient day-to-day operations.",
  },
  {
    number: "05",
    title: "Commerce, Employment & Economic Opportunity",
    description:
      "Providing a structured environment for legitimate businesses while supporting employment, commerce and sustainable public revenue associated with terminal activities.",
  },
];

const ServicePage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-14 md:py-16">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-blue-600" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">
                Our Mandate
              </span>
            </div>
            <h1 className="text-[32px] font-bold leading-[1.05] tracking-tight text-slate-900 md:text-[40px]">
              Our Role in Enugu&apos;s Transport System
            </h1>
            <p className="mt-5 max-w-[640px] text-[15px] leading-7 text-slate-600 md:text-[16px]">
              We support a safer, more organised and efficient transport system across Enugu State
              — bringing order to operations, easing pressure on surrounding roads and providing a
              secure, functional environment for passengers, goods and businesses.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
            {responsibilities.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative flex gap-5 px-6 py-7 md:px-8"
              >
                {index < 2 && (
                  <span className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-blue-600" aria-hidden="true" />
                )}
                <span className="shrink-0 font-mono text-[13px] font-semibold tracking-widest text-blue-600">
                  {item.number}
                </span>
                <div>
                  <h2 className="text-[13px] font-bold uppercase tracking-[0.08em] text-slate-900">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-[14px] leading-6 text-slate-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/terminals" className="rounded-lg bg-blue-600 px-7 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition">
              Explore Our Terminals
            </Link>
            <Link to="/commercial-opportunities" className="rounded-lg border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition">
              Commercial Opportunities
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
