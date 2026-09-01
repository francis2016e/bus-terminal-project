import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { terminals } from "../data/terminals";

const TerminalCard = ({ terminal, variant = "large" }) => {
  const isLarge = variant === "large";
  return (
    <Link
      to={terminal.route}
      className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md hover:border-blue-200"
    >
      <div className={`relative overflow-hidden bg-slate-100 ${isLarge ? "aspect-[16/10] md:aspect-[16/9]" : "aspect-[16/10]"}`}>
        <img
          src={terminal.image}
          alt={terminal.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
          decoding="async"
        />
        {/* subtle top blue line for large Holy Ghost cards */}
        {isLarge && (
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-blue-600/90" aria-hidden="true" />
        )}
        {/* very subtle overlay to keep blue identity */}
        <div className="pointer-events-none absolute inset-0 bg-blue-900/[0.02] group-hover:bg-blue-900/[0.04] transition-colors" aria-hidden="true" />
      </div>

      <div className={`p-6 md:p-7 ${isLarge ? "md:p-8" : ""}`}>
        <div className="mb-3 inline-flex items-center gap-2">
          <span className="h-px w-6 bg-blue-600" aria-hidden="true" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-600">
            {terminal.label}
          </span>
        </div>

        <h3 className={`font-bold leading-tight tracking-tight text-slate-900 ${isLarge ? "text-[20px] md:text-[22px]" : "text-[18px] md:text-[19px]"}`}>
          {terminal.name}
        </h3>

        <p className={`mt-3 text-slate-600 leading-6 ${isLarge ? "text-[14px] md:text-[15px]" : "text-[14px]"}`}>
          {terminal.description}
        </p>

        <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-blue-600 transition-colors group-hover:text-blue-700">
          Explore Terminal
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
};

const Connection = () => (
  <div className="flex flex-col items-center gap-3 py-4 md:py-6" aria-hidden="true">
    <div className="h-8 w-px bg-slate-300 md:h-10" />
    <div className="rounded-full border border-slate-200 bg-white px-4 py-1.5 shadow-sm">
      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600 md:text-[11px]">
        Connected by pedestrian cart-walk/bridge
      </span>
    </div>
    <div className="h-8 w-px bg-slate-300 md:h-10" />
  </div>
);

const TerminalNetworkSection = () => {
  const holyGhost = terminals.filter((t) => t.group === "holy-ghost");
  const others = terminals.filter((t) => t.group !== "holy-ghost");

  return (
    <section
      aria-label="Our Terminal Network"
      className="bg-white py-16 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-blue-600" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">
              Our Terminal Network
            </span>
            <span className="h-px w-8 bg-blue-600" aria-hidden="true" />
          </div>

          <h2 className="text-[28px] font-bold leading-[1.05] tracking-tight text-slate-900 md:text-[34px] lg:text-[38px]">
            Four Terminals. One Coordinated Transport System.
          </h2>

          <p className="mx-auto mt-6 max-w-[640px] text-[14px] leading-6 text-slate-600 md:text-[15px] md:leading-7">
            Across Enugu East-Zone, our terminals provide organised spaces for different categories
            of bus operations while helping to improve safety, reduce road congestion and support the
            efficient movement of people and goods.
          </p>
        </motion.div>

        {/* Holy Ghost Complex — two large stacked visuals with connection */}
        <div className="mx-auto mt-14 max-w-5xl">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px flex-1 bg-slate-200" aria-hidden="true" />
            <span className="rounded-full bg-slate-900 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
              Holy Ghost Complex
            </span>
            <span className="h-px flex-1 bg-slate-200" aria-hidden="true" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <TerminalCard terminal={holyGhost[0]} variant="large" />
          </motion.div>

          <Connection />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <TerminalCard terminal={holyGhost[1]} variant="large" />
          </motion.div>
        </div>

        {/* Gariki + Abakpa — second row */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:mt-14 md:grid-cols-2 md:gap-8">
          {others.map((terminal, index) => (
            <motion.div
              key={terminal.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <TerminalCard terminal={terminal} variant="compact" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TerminalNetworkSection;
