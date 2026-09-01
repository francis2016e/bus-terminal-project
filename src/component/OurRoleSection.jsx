import { motion } from "framer-motion";
// Section 3 image — interior of Holy Ghost Bus Terminal (ticketing, escalators, circulation).
// Source: insidehallterminalimg.jpg — optimized wide-to-portrait editorial crop (original PNG 1537×1023).
// Mobile: wide (16:11); Desktop: portrait covering full height of mandate list.
import terminalOperations from "../assets/insidehallterminalimg.jpg";

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

const OurRoleSection = () => {
  return (
    <section
      aria-label="Our Role in Enugu's Transport System"
      className="bg-slate-50 py-16 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        {/* Header — eyebrow + heading + intro */}
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
              Our Mandate
            </span>
          </div>

          <h2 className="text-[28px] font-bold leading-[1.1] tracking-tight text-slate-900 md:text-[34px] lg:text-[38px]">
            Our Role in Enugu&apos;s Transport System
          </h2>

          <p className="mt-6 max-w-[600px] text-[14px] leading-6 text-slate-600 md:text-[15px] md:leading-7 lg:text-[16px]">
            We support a safer, more organised and efficient transport system across Enugu
            State — bringing order to operations, easing pressure on surrounding roads and
            providing a secure, functional environment for passengers, goods and businesses.
          </p>
        </motion.div>

        {/* Content grid — photo + responsibilities — editorial */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-14 lg:items-stretch">
          {/* Large terminal photo — mobile wide, desktop portrait covering full text height */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:flex"
          >
            <div className="relative w-full overflow-hidden rounded-2xl bg-slate-200 shadow-sm lg:flex lg:min-h-[560px]">
              <img
                src={terminalOperations}
                alt="Holy Ghost Bus Terminal interior — ticketing area, escalators, passengers and organised circulation"
                className="aspect-[16/11] w-full object-cover object-[50%_30%] md:aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[560px] lg:object-[50%_28%]"
                loading="lazy"
                decoding="async"
              />
              {/* very subtle blue-toned editorial overlay — keeps blue branding, does not over-darken */}
              <div
                className="pointer-events-none absolute inset-0 bg-blue-900/[0.04]"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-slate-900/5"
                aria-hidden="true"
              />
            </div>
          </motion.div>

          {/* Five responsibilities — numbered, editorial */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
              {responsibilities.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`group relative flex gap-5 px-6 py-6 transition-colors md:px-7 md:py-7 ${
                    index < 2
                      ? "bg-slate-50/70 hover:bg-blue-50/60"
                      : "hover:bg-slate-50/80"
                  }`}
                >
                  {/* subtle left accent for first two */}
                  {index < 2 && (
                    <span
                      className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-blue-600"
                      aria-hidden="true"
                    />
                  )}

                  {/* Number */}
                  <span className="shrink-0 font-mono text-[13px] font-semibold tracking-widest text-blue-600 md:text-[14px]">
                    {item.number}
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-[12px] font-bold uppercase tracking-[0.08em] text-slate-900 md:text-[13px]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-6 text-slate-600 md:text-[14px] md:leading-6">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* subtle institutional footnote — no extra CTA, keeps hierarchy clean */}
            <p className="mt-4 px-1 text-xs leading-5 text-slate-500">
              All responsibilities are delivered as part of the State&apos;s broader
              transport-modernisation effort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurRoleSection;
