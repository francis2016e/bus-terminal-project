import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Approved Hero photograph — Holy Ghost Bus Terminal 1 (actual terminal).
// New terminal1img.png supplied — replace old jpg, used as hero.
import heroImage from "../assets/terminal1img.jpg";

const Hero = () => {
  return (
    <section
      aria-label="Hero — Transforming Transportation in Enugu State"
      className="relative w-full overflow-hidden bg-slate-900"
    >
      {/* Background — single-image, cinematic institutional treatment */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.015, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          src={heroImage}
          alt="Holy Ghost Bus Terminal 1 — modern government transport infrastructure, Enugu State"
          className="h-full w-full object-cover"
          style={{ objectPosition: "50% 38%" }}
          loading="eager"
          decoding="async"
        />
        {/* Very subtle overall softening — must not destroy photograph */}
        <div className="absolute inset-0 bg-slate-900/[0.06]" aria-hidden="true" />
        {/* Primary cinematic gradient: strong navy left → transparent right */}
        {/* Keeps left text readable, centre transition, right bright/natural */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(90deg, rgba(7,22,48,0.94) 0%, rgba(10,30,64,0.90) 22%, rgba(14,38,78,0.74) 38%, rgba(18,46,92,0.42) 56%, rgba(28,58,112,0.18) 68%, rgba(0,0,0,0) 82%)",
          }}
        />
        {/* Mobile refinement: slightly deeper left coverage so stacked buttons/text remain contrasted */}
        <div
          className="absolute inset-0 md:hidden"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(90deg, rgba(7,22,48,0.92) 0%, rgba(10,30,64,0.88) 42%, rgba(14,38,78,0.58) 62%, rgba(0,0,0,0) 88%)",
          }}
        />
        {/* Smooth premium transition to Section 2 — subtle blue/white dissolve (60-120px) */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[72px] md:h-[96px] lg:h-[110px]"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(230,238,255,0.18) 22%, rgba(240,245,255,0.48) 48%, rgba(248,250,255,0.82) 74%, rgba(255,255,255,1) 100%)",
          }}
        />
        {/* Very subtle navy veil just above the white dissolve — ensures blue identity, almost subconscious */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[110px] md:h-[140px] lg:h-[150px]"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to bottom, rgba(7,22,48,0) 0%, rgba(14,38,78,0.04) 38%, rgba(14,38,78,0.06) 68%, rgba(14,38,78,0) 100%)",
          }}
        />
      </div>

      {/* Content — offset for fixed navbar (h-20), left-aligned, vertically centred slightly below centre */}
      <div className="relative z-10 mx-auto flex min-h-[84vh] max-w-7xl items-center px-6 pb-14 pt-28 md:min-h-[82vh] md:px-8 md:pb-16 md:pt-28 lg:min-h-[84vh] lg:px-10">
        <div className="w-full max-w-[720px]">
          {/* Eyebrow — governmental */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 inline-flex items-center gap-3"
          >
            <span className="h-[2px] w-8 bg-blue-500" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-100">
              Enugu State Government &nbsp;·&nbsp; Transport Infrastructure
            </span>
          </motion.div>

          {/* Headline — approved, editorial hierarchy */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[640px] text-[38px] font-extrabold leading-[0.92] tracking-tight text-white md:text-[54px] lg:text-[64px]"
          >
            <span className="block font-extrabold tracking-tight text-white">
              Transforming
            </span>
            <span className="block font-light tracking-tight text-white">
              Transportation
            </span>
            <span className="block font-extrabold tracking-tight text-white">
              in Enugu State
            </span>
          </motion.h1>

          {/* Supporting copy — approved verbatim */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-[620px] text-[15px] font-normal leading-7 text-slate-100/90 md:text-[17px] md:leading-8 lg:text-[18px]"
          >
            Enugu State is building a safer, more organised and ultra-modern
            transportation system—decongesting our roads, protecting passengers
            and goods, supporting commerce and creating opportunities for
            employment and growth.
          </motion.p>

          {/* CTAs — exactly two */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Link
              to="/terminals"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-7 py-[14px] text-[14px] font-semibold tracking-wide text-white shadow-lg shadow-blue-900/20 transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:w-auto"
            >
              Explore Our Terminals
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>

            <Link
              to="/notices"
              className="inline-flex w-full items-center justify-center rounded-lg border border-white/35 bg-white/[0.08] px-7 py-[14px] text-[14px] font-semibold tracking-wide text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:w-auto"
            >
              Public Notices
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
