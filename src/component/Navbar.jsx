import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import terminalLogo from "../assets/enugu bus terminal logo.png";
import stateLogo from "../assets/enugustategovernmentlogo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isTransparent = isHome && !isScrolled && !open;

  const desktopLinkBase =
    "text-[13px] font-medium tracking-wide transition-colors pb-1 border-b-2 border-transparent";

  const getDesktopClass = ({ isActive }) => {
    if (isTransparent) {
      return isActive
        ? `${desktopLinkBase} text-white font-semibold border-blue-400`
        : `${desktopLinkBase} text-white/85 hover:text-white hover:border-white/40`;
    }
    return isActive
      ? `${desktopLinkBase} text-blue-600 font-semibold border-blue-600`
      : `${desktopLinkBase} text-slate-600 hover:text-blue-600 hover:border-slate-200`;
  };

  const getMobileClass = ({ isActive }) =>
    isActive
      ? "bg-blue-600 text-white font-semibold rounded-xl px-4 py-3"
      : "text-slate-700 hover:bg-slate-50 rounded-xl px-4 py-3 transition";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent border-b border-transparent"
          : "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
      }`}
      aria-label="Primary"
    >
      {/* Subtle translucent veil only after scroll — at top keep hero photograph fully visible */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="flex items-center justify-between h-[72px] md:h-[78px] lg:h-[80px]">
          {/* Branding — State emblem + Terminal logo + divider + name */}
          <NavLink
            to="/"
            className="flex items-center gap-3 md:gap-4"
            onClick={() => setOpen(false)}
            aria-label="Enugu East-Zone Bus Terminals — home"
          >
            {/* Logo group — transparent PNGs, no background plate */}
            <div className="flex items-center gap-2 md:gap-2.5">
              <img
                src={stateLogo}
                alt="Enugu State Government emblem"
                className="h-9 w-auto object-contain md:h-10 drop-shadow-[0_1px_3px_rgba(0,0,0,0.35)]"
                loading="eager"
              />
              <img
                src={terminalLogo}
                alt="Enugu East-Zone Bus Terminals logo"
                className="h-9 w-auto object-contain md:h-10 drop-shadow-[0_1px_3px_rgba(0,0,0,0.25)]"
                loading="eager"
              />
            </div>

            {/* Vertical divider */}
            <span
              aria-hidden="true"
              className={`hidden sm:block h-8 w-px md:h-9 ${
                isTransparent ? "bg-white/30" : "bg-slate-200"
              }`}
            />

            {/* Organisation name — without "Management" */}
            <div
              className={`hidden sm:block leading-none ${
                isTransparent ? "text-white" : "text-slate-900"
              }`}
            >
              <div className="text-[12px] font-bold uppercase tracking-[0.14em] leading-none md:text-[13px]">
                Enugu East-Zone
              </div>
              <div className="text-[12px] font-bold uppercase tracking-[0.14em] leading-none md:text-[13px]">
                Bus Terminals
              </div>
            </div>

            {/* Mobile name — two-line, compact */}
            <div
              className={`sm:hidden leading-[1.05] ${
                isTransparent ? "text-white" : "text-slate-900"
              }`}
            >
              <div className="text-[11px] font-bold uppercase tracking-[0.12em] leading-none">
                Enugu East-Zone
              </div>
              <div className="text-[11px] font-bold uppercase tracking-[0.12em] leading-none">
                Bus Terminals
              </div>
            </div>
          </NavLink>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-7 lg:gap-8">
            <NavLink to="/" className={getDesktopClass} end>
              Home
            </NavLink>
            <NavLink to="/terminals" className={getDesktopClass}>
              Terminals
            </NavLink>
            <NavLink to="/services" className={getDesktopClass}>
              Services
            </NavLink>
            <NavLink to="/about" className={getDesktopClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={getDesktopClass}>
              Contact
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
              isTransparent
                ? "text-white hover:bg-white/10"
                : "text-slate-800 hover:bg-slate-100"
            }`}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <HiX className="w-7 h-7" /> : <HiMenuAlt3 className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile menu — solid white for readability, independent of hero */}
      <div
        className={`md:hidden border-t transition-all duration-300 ease-in-out overflow-hidden bg-white ${
          open ? "max-h-[420px] opacity-100 border-slate-100" : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <div className="flex flex-col gap-2 px-6 py-6 text-center">
          <NavLink to="/" className={getMobileClass} onClick={() => setOpen(false)} end>
            Home
          </NavLink>
          <NavLink to="/terminals" className={getMobileClass} onClick={() => setOpen(false)}>
            Terminals
          </NavLink>
          <NavLink to="/services" className={getMobileClass} onClick={() => setOpen(false)}>
            Services
          </NavLink>
          <NavLink to="/about" className={getMobileClass} onClick={() => setOpen(false)}>
            About
          </NavLink>
          <NavLink to="/contact" className={getMobileClass} onClick={() => setOpen(false)}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
