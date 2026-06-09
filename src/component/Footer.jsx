import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import {NavLink} from "react-router-dom"

const Footer = () => {

   const footerActive = ({isActive}) => {
    return isActive ?  "text-white font-semibold border-b-2 border-blue-600"
      : "text-slate-700 hover:text-white transition-colors font-medium";
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-4">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white">Enugu East Zone Bus Terminal</h2>
          <p className="mt-4 text-sm leading-6">
         Delivering safe, reliable, and efficient transportation services with a focus on comfort and convenience. Let’s make your journey smoother.
          </p>
        </div>

        {/* Quick Links */}
        
        <div className="">
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="">
              <NavLink to="/" className={footerActive}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about"  className={footerActive}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services"  className={footerActive}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact"  className={footerActive}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition cursor-pointer">
             Passenger Transportation
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Ticketing & Booking
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Safety & Security Monitoring
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Customer Support
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Connect With Us
          </h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-white transition">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm">
          © {new Date().getFullYear()} Enugu East Zone Bus Terminal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;