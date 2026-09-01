import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { terminals } from "../data/terminals";

const TerminalsPage = () => {
  const holyGhost = terminals.filter((t) => t.group === "holy-ghost");
  const others = terminals.filter((t) => t.group !== "holy-ghost");

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-14 md:py-16">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-blue-600" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">
                Our Terminal Network
              </span>
            </div>
            <h1 className="text-[32px] font-bold leading-[1.05] tracking-tight text-slate-900 md:text-[40px]">
              Four Terminals. One Coordinated Transport System.
            </h1>
            <p className="mt-5 max-w-[640px] text-[15px] leading-7 text-slate-600 md:text-[16px]">
              Across Enugu East-Zone, our terminals provide organised spaces for different categories
              of bus operations while helping to improve safety, reduce road congestion and support the
              efficient movement of people and goods.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-12 md:py-16">
        {/* Holy Ghost Complex */}
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-slate-200" aria-hidden="true" />
            <span className="rounded-full bg-slate-900 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
              Holy Ghost Complex
            </span>
            <span className="h-px flex-1 bg-slate-200" aria-hidden="true" />
          </div>

          <div className="grid gap-6">
            {holyGhost.map((terminal, idx) => (
              <motion.div
                key={terminal.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
              >
                <Link to={terminal.route} className="grid md:grid-cols-5 gap-0">
                  <div className="relative md:col-span-3 aspect-[16/10] md:aspect-[16/10] overflow-hidden bg-slate-100">
                    <img src={terminal.image} alt={terminal.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-blue-600/90" aria-hidden="true" />
                  </div>
                  <div className="md:col-span-2 p-6 md:p-7 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 mb-3">
                      <span className="h-px w-6 bg-blue-600" aria-hidden="true" />
                      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-600">{terminal.label}</span>
                    </div>
                    <h2 className="text-[19px] font-bold leading-tight text-slate-900">{terminal.name}</h2>
                    <p className="mt-3 text-[14px] leading-6 text-slate-600">{terminal.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-blue-600 group-hover:text-blue-700">
                      Explore Terminal <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
                {idx === 0 && (
                  <div className="flex flex-col items-center gap-2 py-3 bg-slate-50 border-t border-slate-100">
                    <div className="h-6 w-px bg-slate-300" aria-hidden="true" />
                    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600">
                      Connected by pedestrian cart-walk/bridge
                    </span>
                    <div className="h-6 w-px bg-slate-300" aria-hidden="true" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gariki + Abakpa */}
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
          {others.map((terminal) => (
            <Link
              key={terminal.id}
              to={terminal.route}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <img src={terminal.image} alt={terminal.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
              <div className="p-6">
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="h-px w-6 bg-blue-600" aria-hidden="true" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-600">{terminal.label}</span>
                </div>
                <h3 className="text-[17px] font-bold leading-tight text-slate-900">{terminal.name}</h3>
                <p className="mt-2 text-[14px] leading-6 text-slate-600 line-clamp-4">{terminal.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-blue-600 group-hover:text-blue-700">
                  Explore Terminal <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TerminalsPage;
