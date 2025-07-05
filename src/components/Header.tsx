import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Shirts', path: '/shirts' },
    { name: 'T-Shirts', path: '/t-shirts' },
    { name: 'Trousers & Jeans', path: '/trousers-jeans' },
    { name: 'Shoes & Sneakers', path: '/shoes-sneakers' },
    { name: 'Shorts & Tracks', path: '/shorts-tracks' },
    { name: 'Watches & Accessories', path: '/watches-accessories' },
    { name: 'Ethnic Wear', path: '/ethnic-wear' },
    { name: 'Suits & Blazers', path: '/suits-blazers' },
    { name: 'Winter Wear', path: '/winter-wear' },
    { name: 'Gym & Fitness', path: '/gym-fitness' },
    { name: 'Grooming', path: '/grooming' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src="/logo.png" 
              alt="Urban Elegance Logo" 
              className="h-8 w-8 md:h-10 md:w-10 group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-lg md:text-xl font-bold text-white">
              URBAN <span className="text-yellow-500">ELEGANCE</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium text-gray-300 hover:text-yellow-500 hover:bg-gray-800/50 rounded-md transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-300 hover:text-yellow-500 hover:bg-gray-800/50 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-5 w-5 md:h-6 md:w-6" /> : <Menu className="h-5 w-5 md:h-6 md:w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-800">
            <div className="grid grid-cols-2 gap-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-yellow-500 hover:bg-gray-800/50 rounded-md transition-all duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;