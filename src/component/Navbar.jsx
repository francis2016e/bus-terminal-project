import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Professional icons
import terminalLogo from "../assets/enugu bus terminal logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Harmonized colors: using Blue-600 as the primary brand color
  const navActive = ({ isActive }) => {
    return isActive
      ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
      : "text-slate-600 hover:text-blue-600 transition-colors font-medium";
  };

  const mobileShowActive = ({ isActive }) =>
    isActive
      ? "bg-blue-600 text-white font-semibold rounded-xl px-4 py-3"
      : "text-slate-700 hover:bg-blue-50 rounded-xl px-4 py-3 transition";

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20"> {/* Increased height to h-20 */}
          
          {/* Logo - Adjusted size to fit within h-20 */}
          <NavLink to="/" className="flex items-center" onClick={() => setOpen(false)}>
            <img 
              src={terminalLogo} 
              alt="Terminal Logo" 
              className="h-14 w-auto object-contain md:h-16" 
            />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={navActive}>Home</NavLink>
            <NavLink to="/terminals" className={navActive}>Terminals</NavLink>
            <NavLink to="/services" className={navActive}>Services</NavLink>
            <NavLink to="/about" className={navActive}>About</NavLink>
            <NavLink to="/contact" className={navActive}>Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-800"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <HiX className="w-8 h-8" /> : <HiMenuAlt3 className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Added a subtle animation-like feel with max-height */}
      <div 
        className={`md:hidden bg-white border-t transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 px-6 py-8 text-center">
          <NavLink to="/" className={mobileShowActive} onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/terminals" className={mobileShowActive} onClick={() => setOpen(false)}>Terminals</NavLink>
          <NavLink to="/services" className={mobileShowActive} onClick={() => setOpen(false)}>Services</NavLink>
          <NavLink to="/about" className={mobileShowActive} onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/contact" className={mobileShowActive} onClick={() => setOpen(false)}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;