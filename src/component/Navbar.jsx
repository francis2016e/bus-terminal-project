import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const navActive = ({isActive}) => {
    return isActive ?  "text-blue-600 font-semibold border-b-2 border-emerald-600"
      : "text-slate-700 hover:text-emerald-600 transition-colors font-medium";
  }

  const mobileShowActive = ({ isActive }) =>
    isActive
      ? "bg-emerald-600 text-white font-semibold rounded-md px-3 py-2"
      : "text-slate-700 hover:bg-emerald-100 rounded-md px-3 py-2 transition";


  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <NavLink to="/" className="text-xl font-bold text-gray-900">
            Enugu-Bus
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/"  className={navActive}>
              Home
            </NavLink>
            <NavLink to="/terminals"  className={navActive}>
              Terminals
            </NavLink>
            <NavLink to="/services"  className={navActive}>
              Services
            </NavLink>
            
            <NavLink to="/about" className={navActive}>
              About
            </NavLink>

            <NavLink to="/contact" className={navActive}>
              Contact
            </NavLink>

           
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col gap-4 px-6 py-6 text-center">
            <NavLink to="/" className={mobileShowActive} onClick={() => setOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/terminals" className={mobileShowActive} onClick={() => setOpen(false)}>
              Terminals
            </NavLink>
            <NavLink to="/services" className={mobileShowActive} onClick={() => setOpen(false)}>
              Services
            </NavLink>
            <NavLink to="/about" className={mobileShowActive} onClick={() => setOpen(false)}>
              About
            </NavLink>
            <NavLink to="/contact" className={mobileShowActive} onClick={() => setOpen(false)}>
              Contact
            </NavLink>
            

            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
