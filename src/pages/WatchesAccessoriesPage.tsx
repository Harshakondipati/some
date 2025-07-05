import React from 'react';
import CategorySection from '../components/CategorySection';

const WatchesAccessoriesPage = () => {
  const dressWatches = [
    {
      title: "Classic Dress Watch",
      price: "$129.99",
      originalPrice: "$159.99",
      description: "Elegant dress watch with leather strap, perfect for formal occasions.",
      affiliateLink: "https://example.com/dress-watch-1"
    },
    {
      title: "Gold Dress Watch",
      price: "$189.99",
      description: "Sophisticated gold-tone dress watch with premium materials.",
      affiliateLink: "https://example.com/dress-watch-2"
    },
    {
      title: "Silver Dress Watch",
      price: "$149.99",
      description: "Timeless silver dress watch with clean, minimalist design.",
      affiliateLink: "https://example.com/dress-watch-3"
    },
    {
      title: "Ultra-Thin Dress Watch",
      price: "$199.99",
      originalPrice: "$249.99",
      description: "Ultra-slim profile dress watch with sapphire crystal.",
      affiliateLink: "https://example.com/dress-watch-4"
    },
    {
      title: "Roman Numeral Dress Watch",
      price: "$139.99",
      originalPrice: "$169.99",
      description: "Classic dress watch with Roman numeral markers.",
      affiliateLink: "https://example.com/dress-watch-5"
    },
    {
      title: "Blue Dial Dress Watch",
      price: "$154.99",
      description: "Sophisticated blue dial dress watch with leather strap.",
      affiliateLink: "https://example.com/dress-watch-6"
    },
    {
      title: "Vintage Dress Watch",
      price: "$174.99",
      originalPrice: "$204.99",
      description: "Vintage-inspired dress watch with classic styling.",
      affiliateLink: "https://example.com/dress-watch-7"
    },
    {
      title: "Minimalist Dress Watch",
      price: "$119.99",
      description: "Clean minimalist dress watch with modern appeal.",
      affiliateLink: "https://example.com/dress-watch-8"
    },
    {
      title: "Luxury Dress Watch",
      price: "$299.99",
      originalPrice: "$349.99",
      description: "Luxury dress watch with premium Swiss movement.",
      affiliateLink: "https://example.com/dress-watch-9"
    },
    {
      title: "Black Dial Dress Watch",
      price: "$144.99",
      description: "Elegant black dial dress watch with gold accents.",
      affiliateLink: "https://example.com/dress-watch-10"
    },
    {
      title: "Skeleton Dress Watch",
      price: "$219.99",
      originalPrice: "$259.99",
      description: "Skeleton dial dress watch showcasing mechanical movement.",
      affiliateLink: "https://example.com/dress-watch-11"
    },
    {
      title: "Two-Tone Dress Watch",
      price: "$164.99",
      description: "Two-tone dress watch with gold and silver styling.",
      affiliateLink: "https://example.com/dress-watch-12"
    },
    {
      title: "Moonphase Dress Watch",
      price: "$234.99",
      originalPrice: "$274.99",
      description: "Sophisticated moonphase dress watch with complications.",
      affiliateLink: "https://example.com/dress-watch-13"
    },
    {
      title: "Automatic Dress Watch",
      price: "$189.99",
      description: "Automatic dress watch with self-winding movement.",
      affiliateLink: "https://example.com/dress-watch-14"
    },
    {
      title: "Diamond Accent Dress Watch",
      price: "$279.99",
      originalPrice: "$319.99",
      description: "Dress watch with diamond hour markers for luxury appeal.",
      affiliateLink: "https://example.com/dress-watch-15"
    },
    {
      title: "Heritage Dress Watch",
      price: "$194.99",
      description: "Heritage-inspired dress watch with traditional craftsmanship.",
      affiliateLink: "https://example.com/dress-watch-16"
    }
  ];

  const fieldWatches = [
    {
      title: "Military Field Watch",
      price: "$89.99",
      originalPrice: "$119.99",
      description: "Rugged military-inspired field watch with canvas strap.",
      affiliateLink: "https://example.com/field-watch-1"
    },
    {
      title: "Tactical Field Watch",
      price: "$94.99",
      description: "Durable tactical watch designed for outdoor adventures.",
      affiliateLink: "https://example.com/field-watch-2"
    },
    {
      title: "Vintage Field Watch",
      price: "$79.99",
      description: "Classic vintage-style field watch with aged dial.",
      affiliateLink: "https://example.com/field-watch-3"
    },
    {
      title: "Modern Field Watch",
      price: "$104.99",
      originalPrice: "$134.99",
      description: "Contemporary field watch with modern materials and design.",
      affiliateLink: "https://example.com/field-watch-4"
    },
    {
      title: "Automatic Field Watch",
      price: "$124.99",
      originalPrice: "$154.99",
      description: "Automatic field watch with self-winding movement.",
      affiliateLink: "https://example.com/field-watch-5"
    },
    {
      title: "Solar Field Watch",
      price: "$99.99",
      description: "Solar-powered field watch with eco-friendly technology.",
      affiliateLink: "https://example.com/field-watch-6"
    },
    {
      title: "Compass Field Watch",
      price: "$114.99",
      originalPrice: "$144.99",
      description: "Field watch with built-in compass for navigation.",
      affiliateLink: "https://example.com/field-watch-7"
    },
    {
      title: "Titanium Field Watch",
      price: "$139.99",
      description: "Lightweight titanium field watch with superior durability.",
      affiliateLink: "https://example.com/field-watch-8"
    },
    {
      title: "Pilot Field Watch",
      price: "$109.99",
      originalPrice: "$139.99",
      description: "Aviation-inspired field watch with pilot styling.",
      affiliateLink: "https://example.com/field-watch-9"
    },
    {
      title: "Expedition Field Watch",
      price: "$119.99",
      description: "Expedition-ready field watch with extreme durability.",
      affiliateLink: "https://example.com/field-watch-10"
    },
    {
      title: "NATO Strap Field Watch",
      price: "$84.99",
      originalPrice: "$114.99",
      description: "Field watch with authentic NATO strap styling.",
      affiliateLink: "https://example.com/field-watch-11"
    },
    {
      title: "Luminous Field Watch",
      price: "$94.99",
      description: "Field watch with super-luminous hands and markers.",
      affiliateLink: "https://example.com/field-watch-12"
    },
    {
      title: "Chronograph Field Watch",
      price: "$149.99",
      originalPrice: "$179.99",
      description: "Field watch with chronograph timing functions.",
      affiliateLink: "https://example.com/field-watch-13"
    },
    {
      title: "Ranger Field Watch",
      price: "$89.99",
      description: "Ranger-style field watch with outdoor functionality.",
      affiliateLink: "https://example.com/field-watch-14"
    },
    {
      title: "Survival Field Watch",
      price: "$129.99",
      originalPrice: "$159.99",
      description: "Survival field watch with emergency features.",
      affiliateLink: "https://example.com/field-watch-15"
    },
    {
      title: "Heritage Field Watch",
      price: "$104.99",
      description: "Heritage field watch with traditional military styling.",
      affiliateLink: "https://example.com/field-watch-16"
    }
  ];

  const diversWatches = [
    {
      title: "Professional Dive Watch",
      price: "$199.99",
      originalPrice: "$249.99",
      description: "Water-resistant to 300m, perfect for diving and water sports.",
      affiliateLink: "https://example.com/dive-watch-1"
    },
    {
      title: "Automatic Dive Watch",
      price: "$279.99",
      description: "Automatic movement dive watch with rotating bezel.",
      affiliateLink: "https://example.com/dive-watch-2"
    },
    {
      title: "Black Dive Watch",
      price: "$229.99",
      description: "Sleek black dive watch with high contrast dial.",
      affiliateLink: "https://example.com/dive-watch-3"
    },
    {
      title: "Titanium Dive Watch",
      price: "$349.99",
      originalPrice: "$399.99",
      description: "Lightweight titanium construction with professional features.",
      affiliateLink: "https://example.com/dive-watch-4"
    },
    {
      title: "Ceramic Dive Watch",
      price: "$319.99",
      originalPrice: "$369.99",
      description: "Ceramic bezel dive watch with scratch-resistant properties.",
      affiliateLink: "https://example.com/dive-watch-5"
    },
    {
      title: "GMT Dive Watch",
      price: "$289.99",
      description: "Dive watch with GMT function for multiple time zones.",
      affiliateLink: "https://example.com/dive-watch-6"
    },
    {
      title: "Solar Dive Watch",
      price: "$249.99",
      originalPrice: "$299.99",
      description: "Solar-powered dive watch with eco-friendly technology.",
      affiliateLink: "https://example.com/dive-watch-7"
    },
    {
      title: "Chronograph Dive Watch",
      price: "$359.99",
      description: "Dive watch with chronograph timing functions.",
      affiliateLink: "https://example.com/dive-watch-8"
    },
    {
      title: "Vintage Dive Watch",
      price: "$219.99",
      originalPrice: "$269.99",
      description: "Vintage-inspired dive watch with retro styling.",
      affiliateLink: "https://example.com/dive-watch-9"
    },
    {
      title: "Luxury Dive Watch",
      price: "$449.99",
      description: "Luxury dive watch with premium materials and Swiss movement.",
      affiliateLink: "https://example.com/dive-watch-10"
    },
    {
      title: "Blue Dial Dive Watch",
      price: "$239.99",
      originalPrice: "$289.99",
      description: "Blue dial dive watch with ocean-inspired styling.",
      affiliateLink: "https://example.com/dive-watch-11"
    },
    {
      title: "Orange Accent Dive Watch",
      price: "$259.99",
      description: "Dive watch with orange accents for high visibility.",
      affiliateLink: "https://example.com/dive-watch-12"
    },
    {
      title: "Helium Escape Dive Watch",
      price: "$329.99",
      originalPrice: "$379.99",
      description: "Professional dive watch with helium escape valve.",
      affiliateLink: "https://example.com/dive-watch-13"
    },
    {
      title: "Saturation Dive Watch",
      price: "$389.99",
      description: "Saturation diving watch for extreme underwater conditions.",
      affiliateLink: "https://example.com/dive-watch-14"
    },
    {
      title: "Submarine Dive Watch",
      price: "$299.99",
      originalPrice: "$349.99",
      description: "Submarine-inspired dive watch with military heritage.",
      affiliateLink: "https://example.com/dive-watch-15"
    },
    {
      title: "Deep Sea Dive Watch",
      price: "$419.99",
      description: "Deep sea dive watch rated for extreme depths.",
      affiliateLink: "https://example.com/dive-watch-16"
    }
  ];

  const smartwatches = [
    {
      title: "Fitness Smartwatch",
      price: "$179.99",
      originalPrice: "$219.99",
      description: "Advanced fitness tracking with heart rate monitor and GPS.",
      affiliateLink: "https://example.com/smartwatch-1"
    },
    {
      title: "Premium Smartwatch",
      price: "$299.99",
      description: "High-end smartwatch with premium materials and features.",
      affiliateLink: "https://example.com/smartwatch-2"
    },
    {
      title: "Sport Smartwatch",
      price: "$149.99",
      description: "Rugged sport smartwatch with water resistance.",
      affiliateLink: "https://example.com/smartwatch-3"
    },
    {
      title: "Luxury Smartwatch",
      price: "$399.99",
      originalPrice: "$449.99",
      description: "Luxury smartwatch combining traditional design with smart features.",
      affiliateLink: "https://example.com/smartwatch-4"
    },
    {
      title: "Health Monitoring Smartwatch",
      price: "$199.99",
      originalPrice: "$239.99",
      description: "Advanced health monitoring with ECG and blood oxygen.",
      affiliateLink: "https://example.com/smartwatch-5"
    },
    {
      title: "GPS Smartwatch",
      price: "$169.99",
      description: "GPS-enabled smartwatch for outdoor activities.",
      affiliateLink: "https://example.com/smartwatch-6"
    },
    {
      title: "Cellular Smartwatch",
      price: "$329.99",
      originalPrice: "$379.99",
      description: "Cellular smartwatch with independent connectivity.",
      affiliateLink: "https://example.com/smartwatch-7"
    },
    {
      title: "Hybrid Smartwatch",
      price: "$139.99",
      description: "Hybrid smartwatch with analog display and smart features.",
      affiliateLink: "https://example.com/smartwatch-8"
    },
    {
      title: "Gaming Smartwatch",
      price: "$189.99",
      originalPrice: "$229.99",
      description: "Gaming-focused smartwatch with entertainment features.",
      affiliateLink: "https://example.com/smartwatch-9"
    },
    {
      title: "Business Smartwatch",
      price: "$249.99",
      description: "Professional smartwatch designed for business use.",
      affiliateLink: "https://example.com/smartwatch-10"
    },
    {
      title: "Outdoor Smartwatch",
      price: "$219.99",
      originalPrice: "$259.99",
      description: "Rugged outdoor smartwatch with adventure features.",
      affiliateLink: "https://example.com/smartwatch-11"
    },
    {
      title: "Fashion Smartwatch",
      price: "$159.99",
      description: "Fashion-forward smartwatch with style and functionality.",
      affiliateLink: "https://example.com/smartwatch-12"
    },
    {
      title: "Swimming Smartwatch",
      price: "$199.99",
      originalPrice: "$239.99",
      description: "Swimming-specific smartwatch with water sports tracking.",
      affiliateLink: "https://example.com/smartwatch-13"
    },
    {
      title: "Music Smartwatch",
      price: "$179.99",
      description: "Music-focused smartwatch with streaming capabilities.",
      affiliateLink: "https://example.com/smartwatch-14"
    },
    {
      title: "Solar Smartwatch",
      price: "$269.99",
      originalPrice: "$309.99",
      description: "Solar-powered smartwatch with extended battery life.",
      affiliateLink: "https://example.com/smartwatch-15"
    },
    {
      title: "Ultra Smartwatch",
      price: "$449.99",
      description: "Ultra-premium smartwatch with cutting-edge technology.",
      affiliateLink: "https://example.com/smartwatch-16"
    }
  ];

  const bracelets = [
    {
      title: "Leather Bracelet",
      price: "$24.99",
      originalPrice: "$34.99",
      description: "Genuine leather bracelet with adjustable sizing.",
      affiliateLink: "https://example.com/bracelet-1"
    },
    {
      title: "Stainless Steel Bracelet",
      price: "$32.99",
      description: "Durable stainless steel chain bracelet.",
      affiliateLink: "https://example.com/bracelet-2"
    },
    {
      title: "Beaded Bracelet",
      price: "$19.99",
      description: "Natural stone beaded bracelet for casual wear.",
      affiliateLink: "https://example.com/bracelet-3"
    },
    {
      title: "Magnetic Bracelet",
      price: "$29.99",
      originalPrice: "$39.99",
      description: "Therapeutic magnetic bracelet with modern design.",
      affiliateLink: "https://example.com/bracelet-4"
    },
    {
      title: "Silver Chain Bracelet",
      price: "$39.99",
      originalPrice: "$49.99",
      description: "Sterling silver chain bracelet with classic styling.",
      affiliateLink: "https://example.com/bracelet-5"
    },
    {
      title: "Rope Bracelet",
      price: "$16.99",
      description: "Nautical rope bracelet with anchor charm.",
      affiliateLink: "https://example.com/bracelet-6"
    },
    {
      title: "Titanium Bracelet",
      price: "$44.99",
      originalPrice: "$54.99",
      description: "Lightweight titanium bracelet with modern appeal.",
      affiliateLink: "https://example.com/bracelet-7"
    },
    {
      title: "Wooden Bracelet",
      price: "$22.99",
      description: "Natural wood bracelet with eco-friendly materials.",
      affiliateLink: "https://example.com/bracelet-8"
    },
    {
      title: "Copper Bracelet",
      price: "$27.99",
      originalPrice: "$37.99",
      description: "Pure copper bracelet with health benefits.",
      affiliateLink: "https://example.com/bracelet-9"
    },
    {
      title: "Paracord Bracelet",
      price: "$18.99",
      description: "Survival paracord bracelet with utility features.",
      affiliateLink: "https://example.com/bracelet-10"
    },
    {
      title: "Gold Plated Bracelet",
      price: "$49.99",
      originalPrice: "$59.99",
      description: "Gold plated bracelet with luxury appearance.",
      affiliateLink: "https://example.com/bracelet-11"
    },
    {
      title: "Silicone Bracelet",
      price: "$14.99",
      description: "Comfortable silicone bracelet for active wear.",
      affiliateLink: "https://example.com/bracelet-12"
    },
    {
      title: "Vintage Bracelet",
      price: "$34.99",
      originalPrice: "$44.99",
      description: "Vintage-inspired bracelet with antique finish.",
      affiliateLink: "https://example.com/bracelet-13"
    },
    {
      title: "Minimalist Bracelet",
      price: "$21.99",
      description: "Clean minimalist bracelet with simple design.",
      affiliateLink: "https://example.com/bracelet-14"
    },
    {
      title: "Charm Bracelet",
      price: "$36.99",
      originalPrice: "$46.99",
      description: "Charm bracelet with customizable pendant options.",
      affiliateLink: "https://example.com/bracelet-15"
    },
    {
      title: "Cuff Bracelet",
      price: "$31.99",
      description: "Bold cuff bracelet with statement styling.",
      affiliateLink: "https://example.com/bracelet-16"
    }
  ];

  const wallets = [
    {
      title: "Leather Bi-Fold Wallet",
      price: "$39.99",
      originalPrice: "$54.99",
      description: "Classic bi-fold wallet made from genuine leather.",
      affiliateLink: "https://example.com/wallet-1"
    },
    {
      title: "Minimalist Wallet",
      price: "$24.99",
      description: "Slim minimalist wallet with RFID blocking technology.",
      affiliateLink: "https://example.com/wallet-2"
    },
    {
      title: "Money Clip Wallet",
      price: "$32.99",
      description: "Sleek money clip wallet for the modern man.",
      affiliateLink: "https://example.com/wallet-3"
    },
    {
      title: "Travel Wallet",
      price: "$49.99",
      originalPrice: "$64.99",
      description: "Spacious travel wallet with passport holder.",
      affiliateLink: "https://example.com/wallet-4"
    },
    {
      title: "RFID Blocking Wallet",
      price: "$34.99",
      originalPrice: "$44.99",
      description: "RFID blocking wallet for security and protection.",
      affiliateLink: "https://example.com/wallet-5"
    },
    {
      title: "Carbon Fiber Wallet",
      price: "$42.99",
      description: "Modern carbon fiber wallet with sleek design.",
      affiliateLink: "https://example.com/wallet-6"
    },
    {
      title: "Vintage Leather Wallet",
      price: "$44.99",
      originalPrice: "$54.99",
      description: "Vintage leather wallet with aged patina finish.",
      affiliateLink: "https://example.com/wallet-7"
    },
    {
      title: "Slim Card Wallet",
      price: "$19.99",
      description: "Ultra-slim card wallet for minimal carry.",
      affiliateLink: "https://example.com/wallet-8"
    },
    {
      title: "Trifold Wallet",
      price: "$36.99",
      originalPrice: "$46.99",
      description: "Traditional trifold wallet with ample storage.",
      affiliateLink: "https://example.com/wallet-9"
    },
    {
      title: "Smart Wallet",
      price: "$59.99",
      description: "Smart wallet with Bluetooth tracking technology.",
      affiliateLink: "https://example.com/wallet-10"
    },
    {
      title: "Coin Pocket Wallet",
      price: "$37.99",
      originalPrice: "$47.99",
      description: "Wallet with secure coin pocket compartment.",
      affiliateLink: "https://example.com/wallet-11"
    },
    {
      title: "Designer Wallet",
      price: "$79.99",
      description: "Designer wallet with luxury branding and materials.",
      affiliateLink: "https://example.com/wallet-12"
    },
    {
      title: "Tactical Wallet",
      price: "$29.99",
      originalPrice: "$39.99",
      description: "Tactical wallet with durable construction.",
      affiliateLink: "https://example.com/wallet-13"
    },
    {
      title: "Magnetic Wallet",
      price: "$27.99",
      description: "Magnetic closure wallet with secure fastening.",
      affiliateLink: "https://example.com/wallet-14"
    },
    {
      title: "Personalized Wallet",
      price: "$44.99",
      originalPrice: "$54.99",
      description: "Personalized wallet with custom engraving options.",
      affiliateLink: "https://example.com/wallet-15"
    },
    {
      title: "Executive Wallet",
      price: "$64.99",
      description: "Executive wallet with premium leather and craftsmanship.",
      affiliateLink: "https://example.com/wallet-16"
    }
  ];

  const sunglasses = [
    {
      title: "Aviator Sunglasses",
      price: "$49.99",
      originalPrice: "$69.99",
      description: "Classic aviator style with UV protection.",
      affiliateLink: "https://example.com/sunglasses-1"
    },
    {
      title: "Wayframe Sunglasses",
      price: "$42.99",
      description: "Timeless wayframe design suitable for any face shape.",
      affiliateLink: "https://example.com/sunglasses-2"
    },
    {
      title: "Sport Sunglasses",
      price: "$54.99",
      description: "Athletic sunglasses with polarized lenses.",
      affiliateLink: "https://example.com/sunglasses-3"
    },
    {
      title: "Designer Sunglasses",
      price: "$89.99",
      originalPrice: "$119.99",
      description: "Premium designer sunglasses with luxury materials.",
      affiliateLink: "https://example.com/sunglasses-4"
    },
    {
      title: "Polarized Sunglasses",
      price: "$59.99",
      originalPrice: "$79.99",
      description: "Polarized sunglasses for glare reduction.",
      affiliateLink: "https://example.com/sunglasses-5"
    },
    {
      title: "Round Sunglasses",
      price: "$39.99",
      description: "Vintage round sunglasses with retro appeal.",
      affiliateLink: "https://example.com/sunglasses-6"
    },
    {
      title: "Square Sunglasses",
      price: "$44.99",
      originalPrice: "$64.99",
      description: "Modern square sunglasses with contemporary styling.",
      affiliateLink: "https://example.com/sunglasses-7"
    },
    {
      title: "Mirrored Sunglasses",
      price: "$52.99",
      description: "Mirrored lens sunglasses with reflective coating.",
      affiliateLink: "https://example.com/sunglasses-8"
    },
    {
      title: "Gradient Sunglasses",
      price: "$47.99",
      originalPrice: "$67.99",
      description: "Gradient lens sunglasses with stylish fade effect.",
      affiliateLink: "https://example.com/sunglasses-9"
    },
    {
      title: "Photochromic Sunglasses",
      price: "$74.99",
      description: "Photochromic sunglasses that adapt to light conditions.",
      affiliateLink: "https://example.com/sunglasses-10"
    },
    {
      title: "Wraparound Sunglasses",
      price: "$49.99",
      originalPrice: "$69.99",
      description: "Wraparound sunglasses for maximum coverage.",
      affiliateLink: "https://example.com/sunglasses-11"
    },
    {
      title: "Vintage Sunglasses",
      price: "$41.99",
      description: "Vintage-inspired sunglasses with classic styling.",
      affiliateLink: "https://example.com/sunglasses-12"
    },
    {
      title: "Driving Sunglasses",
      price: "$56.99",
      originalPrice: "$76.99",
      description: "Driving sunglasses optimized for road visibility.",
      affiliateLink: "https://example.com/sunglasses-13"
    },
    {
      title: "Luxury Sunglasses",
      price: "$129.99",
      description: "Luxury sunglasses with premium materials and craftsmanship.",
      affiliateLink: "https://example.com/sunglasses-14"
    },
    {
      title: "Clip-On Sunglasses",
      price: "$29.99",
      originalPrice: "$39.99",
      description: "Convenient clip-on sunglasses for prescription glasses.",
      affiliateLink: "https://example.com/sunglasses-15"
    },
    {
      title: "Folding Sunglasses",
      price: "$34.99",
      description: "Compact folding sunglasses for travel convenience.",
      affiliateLink: "https://example.com/sunglasses-16"
    }
  ];

  const backpacks = [
    {
      title: "Business Backpack",
      price: "$59.99",
      originalPrice: "$79.99",
      description: "Professional backpack with laptop compartment.",
      affiliateLink: "https://example.com/backpack-1"
    },
    {
      title: "Travel Backpack",
      price: "$74.99",
      description: "Spacious travel backpack with multiple compartments.",
      affiliateLink: "https://example.com/backpack-2"
    },
    {
      title: "Casual Backpack",
      price: "$44.99",
      description: "Everyday casual backpack perfect for daily use.",
      affiliateLink: "https://example.com/backpack-3"
    },
    {
      title: "Hiking Backpack",
      price: "$89.99",
      originalPrice: "$109.99",
      description: "Durable hiking backpack with weather-resistant fabric.",
      affiliateLink: "https://example.com/backpack-4"
    },
    {
      title: "Laptop Backpack",
      price: "$54.99",
      originalPrice: "$74.99",
      description: "Padded laptop backpack with tech organization.",
      affiliateLink: "https://example.com/backpack-5"
    },
    {
      title: "Gym Backpack",
      price: "$39.99",
      description: "Gym backpack with shoe compartment and ventilation.",
      affiliateLink: "https://example.com/backpack-6"
    },
    {
      title: "Tactical Backpack",
      price: "$69.99",
      originalPrice: "$89.99",
      description: "Military-style tactical backpack with MOLLE system.",
      affiliateLink: "https://example.com/backpack-7"
    },
    {
      title: "School Backpack",
      price: "$34.99",
      description: "Student backpack with book organization features.",
      affiliateLink: "https://example.com/backpack-8"
    },
    {
      title: "Camera Backpack",
      price: "$79.99",
      originalPrice: "$99.99",
      description: "Photography backpack with padded camera compartments.",
      affiliateLink: "https://example.com/backpack-9"
    },
    {
      title: "Waterproof Backpack",
      price: "$64.99",
      description: "Waterproof backpack for outdoor adventures.",
      affiliateLink: "https://example.com/backpack-10"
    },
    {
      title: "Minimalist Backpack",
      price: "$49.99",
      originalPrice: "$69.99",
      description: "Clean minimalist backpack with simple design.",
      affiliateLink: "https://example.com/backpack-11"
    },
    {
      title: "Anti-Theft Backpack",
      price: "$59.99",
      description: "Security backpack with anti-theft features.",
      affiliateLink: "https://example.com/backpack-12"
    },
    {
      title: "Vintage Backpack",
      price: "$52.99",
      originalPrice: "$72.99",
      description: "Vintage-style backpack with retro leather accents.",
      affiliateLink: "https://example.com/backpack-13"
    },
    {
      title: "Convertible Backpack",
      price: "$84.99",
      description: "Convertible backpack that transforms into a briefcase.",
      affiliateLink: "https://example.com/backpack-14"
    },
    {
      title: "Solar Backpack",
      price: "$94.99",
      originalPrice: "$114.99",
      description: "Solar-powered backpack with device charging capability.",
      affiliateLink: "https://example.com/backpack-15"
    },
    {
      title: "Designer Backpack",
      price: "$129.99",
      description: "Designer backpack with luxury materials and branding.",
      affiliateLink: "https://example.com/backpack-16"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            <span className="text-yellow-500">Watches & Accessories</span> Collection
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Complete your look with our curated selection of watches and accessories. 
            From timepieces to everyday essentials, find everything you need.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            <span className="text-yellow-500">Watches</span>
          </h2>
          <CategorySection title="Dress Watches" products={dressWatches} />
          <CategorySection title="Field Watches" products={fieldWatches} />
          <CategorySection title="Diver's Watches" products={diversWatches} />
          <CategorySection title="Smartwatches" products={smartwatches} />
        </div>

        <div>
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            <span className="text-yellow-500">Accessories</span>
          </h2>
          <CategorySection title="Bracelets" products={bracelets} />
          <CategorySection title="Wallets" products={wallets} />
          <CategorySection title="Sunglasses" products={sunglasses} />
          <CategorySection title="Backpacks" products={backpacks} />
        </div>
      </div>
    </div>
  );
};

export default WatchesAccessoriesPage;