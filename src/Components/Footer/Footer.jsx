import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../index";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-wrap justify-between -mx-4">
          


          {/* Footer Links */}
          <div className="w-full md:w-2/3 flex flex-wrap">
            <div className="w-1/2 md:w-1/4 px-4 mb-6">
              <h3 className="text-gray-400 uppercase text-sm font-semibold mb-3">Company</h3>
              <ul>
                <li><Link to="/" className="hover:text-gray-100 transition">Features</Link></li>
                <li><Link to="/" className="hover:text-gray-100 transition">Pricing</Link></li>
                <li><Link to="/" className="hover:text-gray-100 transition">Affiliate Program</Link></li>
                <li><Link to="/" className="hover:text-gray-100 transition">Press Kit</Link></li>
              </ul>
            </div>

            <div className="w-1/2 md:w-1/4 px-4 mb-6">
              <h3 className="text-gray-400 uppercase text-sm font-semibold mb-3">Support</h3>
              <ul>
                <li><Link to="/" className="hover:text-gray-100 transition">Account</Link></li>
                <li><Link to="/" className="hover:text-gray-100 transition">Help</Link></li>
                <li><Link to="/" className="hover:text-gray-100 transition">Contact Us</Link></li>
                <li><Link to="/" className="hover:text-gray-100 transition">Customer Support</Link></li>
              </ul>
            </div>

            <div className="w-1/2 md:w-1/4 px-4 mb-6">
              <h3 className="text-gray-400 uppercase text-sm font-semibold mb-3">Legals</h3>
              <ul>
                <li><Link to="/" className="hover:text-gray-100 transition">Terms & Conditions</Link></li>
                <li><Link to="/" className="hover:text-gray-100 transition">Privacy Policy</Link></li>
                <li><Link to="/" className="hover:text-gray-100 transition">Licensing</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
          <p>Made with ❤️ by Team JelQueries</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
