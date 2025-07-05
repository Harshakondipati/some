import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowDown } from 'lucide-react';

const HomePage = () => {
  const categories = [
    { name: 'Shirts', path: '/shirts', image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg' },
    { name: 'T-Shirts', path: '/t-shirts', image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg' },
    { name: 'Trousers & Jeans', path: '/trousers-jeans', image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg' },
    { name: 'Shoes & Sneakers', path: '/shoes-sneakers', image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg' },
    { name: 'Shorts & Tracks', path: '/shorts-tracks', image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg' },
    { name: 'Watches & Accessories', path: '/watches-accessories', image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg' },
    { name: 'Ethnic Wear', path: '/ethnic-wear', image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg' },
    { name: 'Suits & Blazers', path: '/suits-blazers', image: 'https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg' },
    { name: 'Winter Wear', path: '/winter-wear', image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg' },
    { name: 'Gym & Fitness', path: '/gym-fitness', image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg' },
    { name: 'Grooming Items', path: '/grooming', image: 'https://imhttps://cmsimages.ssbeauty.in/Men_s_Grooming_desktop_2x_ffe26eadd6.jpgages.pexels.com/photos/3998365/pexels-photo-3998365.jpeg' },
    

  const quotes = [
    "Style is a way to say who you are without having to speak.",
    "Fashion fades, but style is eternal.",
    "Dress well, feel good, conquer the day.",
    "Elegance is the only beauty that never fades."
  ];

  const scrollToCategories = () => {
    const categoriesSection = document.getElementById('categories-section');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center overflow-hidden">
        {/* Background Models */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-80 bg-gradient-to-b from-yellow-500/30 to-transparent rounded-lg transform rotate-12"></div>
          <div className="absolute top-20 right-20 w-48 h-64 bg-gradient-to-b from-yellow-500/20 to-transparent rounded-lg transform -rotate-6"></div>
          <div className="absolute bottom-20 left-1/4 w-56 h-72 bg-gradient-to-b from-yellow-500/25 to-transparent rounded-lg transform rotate-6"></div>
          <div className="absolute bottom-10 right-1/3 w-40 h-56 bg-gradient-to-b from-yellow-500/15 to-transparent rounded-lg transform -rotate-12"></div>
        </div>

        {/* Floating Fashion Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-yellow-500/50 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-yellow-400/70 rounded-full animate-pulse"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          {/* Logo */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-yellow-500 mb-6 bg-black/50 backdrop-blur-sm">
              <img 
                src="/logo.png" 
                alt="Urban Elegance Logo" 
                className="h-16 w-16 md:h-20 md:w-20"
              />
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 leading-tight">
            URBAN <span className="text-yellow-500">ELEGANCE</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-yellow-400 mb-8 font-light tracking-wide">
            where trends come alive
          </p>
          
          {/* Inspirational Quote */}
          <div className="mb-12 max-w-4xl mx-auto">
            <blockquote className="text-lg md:text-xl text-gray-300 italic leading-relaxed">
              "Fashion is not something that exists in dresses only. Fashion is in the sky, in the street, 
              fashion has to do with ideas, the way we live, what is happening."
            </blockquote>
            <cite className="text-yellow-500 text-sm md:text-base mt-4 block">— Coco Chanel</cite>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 mb-16">
            <Link
              to="/shirts"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 md:px-10 py-4 md:py-5 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25"
            >
              <ShoppingBag className="h-5 w-5" />
              <span>Start Shopping</span>
            </Link>
            <button 
              onClick={scrollToCategories}
              className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold px-8 md:px-10 py-4 md:py-5 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Browse Collection
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-yellow-500 mx-auto" />
            <p className="text-gray-400 text-sm mt-2">Scroll to explore</p>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent pointer-events-none"></div>
      </section>

      {/* Style Inspiration Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Style <span className="text-yellow-500">Inspiration</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quotes.map((quote, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 transform hover:scale-105">
                <p className="text-gray-300 text-lg italic text-center leading-relaxed">"{quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purchase Guide Video Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              🛍️ New Here? <span className="text-yellow-500">Watch & Learn!</span>
            </h2>
            <p className="text-gray-400 text-lg">A quick video tutorial on how to:</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                <span className="text-gray-300">Browse fashion categories</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                <span className="text-gray-300">Click on affiliate links</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                <span className="text-gray-300">Complete purchases on Amazon, Flipkart, etc.</span>
              </div>
            </div>
          </div>

          {/* YouTube Video Embed */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <div className="aspect-w-16 aspect-h-9 relative">
              <iframe
                className="w-full h-64 md:h-80 lg:h-96 rounded-lg"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="How to Buy from Our Website - Tutorial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-white text-xl font-semibold mt-4 mb-2">How to Buy from Our Website</p>
            <p className="text-gray-400">Watch our comprehensive buying guide to get started</p>
          </div>

          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <span>👉 Scroll down and explore our categories to get started!</span>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section id="categories-section" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Explore Our <span className="text-yellow-500">Categories</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg">Discover premium fashion and grooming essentials</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.path}
                className="group relative overflow-hidden rounded-lg aspect-square transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <h3 className="text-white font-semibold text-center text-sm md:text-base group-hover:text-yellow-500 transition-colors duration-200">
                    {category.name}
                  </h3>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-500/50 rounded-lg transition-all duration-300"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;