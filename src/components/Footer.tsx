import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo.png" 
                alt="Urban Elegance Logo" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-white">
                URBAN <span className="text-yellow-500">ELEGANCE</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Your ultimate destination for men's fashion and grooming essentials. 
              Discover the latest trends and elevate your style with our curated 
              collection.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-400">info@urbanelegance.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-400">123 Fashion Street, Style City, SC 12345</span>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 hover:bg-yellow-500 text-gray-400 hover:text-black rounded-lg transition-all duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-yellow-500 text-gray-400 hover:text-black rounded-lg transition-all duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-yellow-500 text-gray-400 hover:text-black rounded-lg transition-all duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Urban Elegance. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-200">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;