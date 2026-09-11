import { NavLink } from "react-router-dom";
import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white font-semibold"
      : "text-slate-400 hover:text-white transition-colors";

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-12 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="text-[15px] font-bold uppercase tracking-[0.12em] text-white">
            Enugu East-Zone Bus Terminals
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Supporting safe, organised transport across Enugu State.
          </p>
          <p className="mt-3 text-xs leading-5 text-slate-500">
            A Government transport infrastructure and terminal management
            organisation.
          </p>
        </div>

        {/* Institutional links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-white mb-4">
            Explore
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/terminals" className={linkClass}>
                Terminals
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={linkClass}>
                Our Mandate
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={linkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/notices" className={linkClass}>
                Public Notices
              </NavLink>
            </li>
            <li>
              <NavLink to="/commercial-opportunities" className={linkClass}>
                Commercial Opportunities
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={linkClass}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Terminals */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-white mb-4">
            Terminals
          </h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <NavLink
                to="/terminals/holy-ghost-terminal-1"
                className="hover:text-white transition"
              >
                Holy Ghost Terminal 1 — Headquarters
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/terminals/holy-ghost-terminal-2"
                className="hover:text-white transition"
              >
                Holy Ghost Terminal 2 — Interstate & Night Travel
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/terminals/gariki"
                className="hover:text-white transition"
              >
                Gariki Bus Terminal
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/terminals/abakpa"
                className="hover:text-white transition"
              >
                Abakpa Bus Terminal
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-white mb-4">
            Connect
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="https://instagram.com/enugueastbusterminals"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition"
              >
                <FaInstagram className="shrink-0" /> @enugueastbusterminals
              </a>
            </li>
            <li>
              <a
                href="https://x.com/BusEnugu59470"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition"
              >
                <FaTwitter className="shrink-0" /> @BusEnugu59470
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/2348085555642"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition"
              >
                <FaWhatsapp className="shrink-0" /> 08085555642
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-6 text-center text-xs leading-5 text-slate-500">
          © {new Date().getFullYear()} Enugu East-Zone Bus Terminals. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
