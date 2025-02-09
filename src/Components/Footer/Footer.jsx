import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../index";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Top Section: Logo & Links */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          
          {/* Logo Section */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <Link to="/">
              <Logo width="60px" className="transition-transform duration-300 hover:scale-110" />
            </Link>
          </div>

          {/* Footer Links - Grid Layout for better responsiveness */}
          <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6 text-center md:text-left">
            
            {/* Company Section */}
            <div>
              <h3 className="text-gray-400 uppercase text-sm font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-gray-100 transition cursor-pointer">Features</Link></li>
                <li><Link to="/" className="hover:text-gray-100 transition cursor-pointer">Pricing</Link></li>
                <li><Link to="/" className="hover:text-gray-100 transition cursor-pointer">Affiliate Program</Link></li>
                <li><Link to="/" className="hover:text-gray-100 transition cursor-pointer">Press Kit</Link></li>
              </ul>
            </div>

            {/* Support Section */}
            <div>
              <h3 className="text-gray-400 uppercase text-sm font-semibold mb-3">Support</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-gray-100 transition cursor-pointer">Account</Link></li>
                <li><Link to="/" className="hover:text-gray-100 transition cursor-pointer">Help</Link></li>
                <li><Link to="/" className="hover:text-gray-100 transition cursor-pointer">Contact Us</Link></li>
                <li><Link to="/" className="hover:text-gray-100 transition cursor-pointer">Customer Support</Link></li>
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <h3 className="text-gray-400 uppercase text-sm font-semibold mb-3">Legals</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-gray-100 transition cursor-pointer">Terms & Conditions</Link></li>
                <li><Link to="/" className="hover:text-gray-100 transition cursor-pointer">Privacy Policy</Link></li>
                <li><Link to="/" className="hover:text-gray-100 transition cursor-pointer">Licensing</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
          <p>Made with ❤️ by Team JelQueries</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
