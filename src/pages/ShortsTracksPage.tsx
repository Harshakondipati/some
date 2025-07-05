import React from 'react';
import CategorySection from '../components/CategorySection';

const ShortsTracksPage = () => {
  const casualShorts = [
    {
      title: "Classic Chino Shorts",
      price: "$29.99",
      originalPrice: "$39.99",
      description: "Versatile chino shorts perfect for casual summer wear.",
      affiliateLink: "https://example.com/shorts-1"
    },
    {
      title: "Cargo Shorts",
      price: "$34.99",
      description: "Functional cargo shorts with multiple pockets for convenience.",
      affiliateLink: "https://example.com/shorts-2"
    },
    {
      title: "Linen Blend Shorts",
      price: "$32.99",
      description: "Breathable linen blend fabric perfect for hot weather.",
      affiliateLink: "https://example.com/shorts-3"
    },
    {
      title: "Denim Shorts",
      price: "$27.99",
      originalPrice: "$37.99",
      description: "Classic denim shorts with comfortable fit and style.",
      affiliateLink: "https://example.com/shorts-4"
    },
    {
      title: "Khaki Casual Shorts",
      price: "$28.99",
      originalPrice: "$38.99",
      description: "Classic khaki shorts perfect for everyday casual wear.",
      affiliateLink: "https://example.com/shorts-5"
    },
    {
      title: "Cotton Twill Shorts",
      price: "$31.99",
      description: "Durable cotton twill shorts with comfortable fit.",
      affiliateLink: "https://example.com/shorts-6"
    },
    {
      title: "Bermuda Shorts",
      price: "$33.99",
      originalPrice: "$43.99",
      description: "Longer bermuda style shorts for modest coverage.",
      affiliateLink: "https://example.com/shorts-7"
    },
    {
      title: "Flat Front Shorts",
      price: "$30.99",
      description: "Clean flat front design with modern tailoring.",
      affiliateLink: "https://example.com/shorts-8"
    },
    {
      title: "Pleated Casual Shorts",
      price: "$32.99",
      originalPrice: "$42.99",
      description: "Traditional pleated shorts with classic styling.",
      affiliateLink: "https://example.com/shorts-9"
    },
    {
      title: "Canvas Utility Shorts",
      price: "$35.99",
      description: "Durable canvas shorts with utility pocket details.",
      affiliateLink: "https://example.com/shorts-10"
    },
    {
      title: "Stretch Chino Shorts",
      price: "$33.99",
      originalPrice: "$43.99",
      description: "Stretch chino shorts for enhanced comfort and mobility.",
      affiliateLink: "https://example.com/shorts-11"
    },
    {
      title: "Seersucker Shorts",
      price: "$29.99",
      description: "Lightweight seersucker fabric perfect for summer.",
      affiliateLink: "https://example.com/shorts-12"
    },
    {
      title: "Madras Plaid Shorts",
      price: "$31.99",
      originalPrice: "$41.99",
      description: "Classic madras plaid pattern with preppy styling.",
      affiliateLink: "https://example.com/shorts-13"
    },
    {
      title: "Oxford Cloth Shorts",
      price: "$34.99",
      description: "Premium oxford cloth shorts with refined casual styling.",
      affiliateLink: "https://example.com/shorts-14"
    },
    {
      title: "Corduroy Shorts",
      price: "$36.99",
      originalPrice: "$46.99",
      description: "Soft corduroy shorts perfect for transitional weather.",
      affiliateLink: "https://example.com/shorts-15"
    },
    {
      title: "Poplin Casual Shorts",
      price: "$28.99",
      description: "Lightweight poplin shorts with crisp, clean appearance.",
      affiliateLink: "https://example.com/shorts-16"
    }
  ];

  const athleticShorts = [
    {
      title: "Performance Gym Shorts",
      price: "$24.99",
      originalPrice: "$34.99",
      description: "Moisture-wicking fabric designed for intense workouts.",
      affiliateLink: "https://example.com/athletic-shorts-1"
    },
    {
      title: "Basketball Shorts",
      price: "$26.99",
      description: "Loose fit shorts perfect for basketball and sports activities.",
      affiliateLink: "https://example.com/athletic-shorts-2"
    },
    {
      title: "Compression Shorts",
      price: "$22.99",
      description: "Tight-fitting compression shorts for enhanced performance.",
      affiliateLink: "https://example.com/athletic-shorts-3"
    },
    {
      title: "Running Shorts",
      price: "$28.99",
      originalPrice: "$38.99",
      description: "Lightweight running shorts with built-in liner.",
      affiliateLink: "https://example.com/athletic-shorts-4"
    },
    {
      title: "Training Shorts",
      price: "$25.99",
      originalPrice: "$35.99",
      description: "Versatile training shorts for all types of workouts.",
      affiliateLink: "https://example.com/athletic-shorts-5"
    },
    {
      title: "Mesh Athletic Shorts",
      price: "$23.99",
      description: "Breathable mesh shorts for maximum airflow during exercise.",
      affiliateLink: "https://example.com/athletic-shorts-6"
    },
    {
      title: "CrossFit Shorts",
      price: "$29.99",
      originalPrice: "$39.99",
      description: "Durable shorts designed for CrossFit and functional fitness.",
      affiliateLink: "https://example.com/athletic-shorts-7"
    },
    {
      title: "Yoga Shorts",
      price: "$24.99",
      description: "Flexible yoga shorts with four-way stretch fabric.",
      affiliateLink: "https://example.com/athletic-shorts-8"
    },
    {
      title: "Cycling Shorts",
      price: "$31.99",
      originalPrice: "$41.99",
      description: "Padded cycling shorts for long-distance comfort.",
      affiliateLink: "https://example.com/athletic-shorts-9"
    },
    {
      title: "Tennis Shorts",
      price: "$27.99",
      description: "Tennis shorts with moisture-wicking and stretch properties.",
      affiliateLink: "https://example.com/athletic-shorts-10"
    },
    {
      title: "Soccer Shorts",
      price: "$26.99",
      originalPrice: "$36.99",
      description: "Lightweight soccer shorts with professional styling.",
      affiliateLink: "https://example.com/athletic-shorts-11"
    },
    {
      title: "Swimming Trunks",
      price: "$32.99",
      description: "Quick-dry swimming trunks with comfortable fit.",
      affiliateLink: "https://example.com/athletic-shorts-12"
    },
    {
      title: "Board Shorts",
      price: "$34.99",
      originalPrice: "$44.99",
      description: "Surf-inspired board shorts with water-resistant fabric.",
      affiliateLink: "https://example.com/athletic-shorts-13"
    },
    {
      title: "Triathlon Shorts",
      price: "$39.99",
      description: "Multi-sport triathlon shorts with quick-dry technology.",
      affiliateLink: "https://example.com/athletic-shorts-14"
    },
    {
      title: "Martial Arts Shorts",
      price: "$28.99",
      originalPrice: "$38.99",
      description: "Flexible martial arts shorts with reinforced construction.",
      affiliateLink: "https://example.com/athletic-shorts-15"
    },
    {
      title: "Gym Training Shorts",
      price: "$25.99",
      description: "All-purpose gym shorts with moisture management technology.",
      affiliateLink: "https://example.com/athletic-shorts-16"
    }
  ];

  const trackPants = [
    {
      title: "Classic Track Pants",
      price: "$39.99",
      originalPrice: "$49.99",
      description: "Traditional track pants with comfortable elastic waistband.",
      affiliateLink: "https://example.com/track-pants-1"
    },
    {
      title: "Jogger Track Pants",
      price: "$42.99",
      description: "Modern jogger style with tapered fit and cuffed ankles.",
      affiliateLink: "https://example.com/track-pants-2"
    },
    {
      title: "Performance Track Pants",
      price: "$44.99",
      description: "Athletic performance fabric with moisture-wicking properties.",
      affiliateLink: "https://example.com/track-pants-3"
    },
    {
      title: "Retro Track Pants",
      price: "$41.99",
      originalPrice: "$51.99",
      description: "Vintage-inspired track pants with classic stripe details.",
      affiliateLink: "https://example.com/track-pants-4"
    },
    {
      title: "Slim Fit Track Pants",
      price: "$43.99",
      originalPrice: "$53.99",
      description: "Slim fit track pants with modern athletic styling.",
      affiliateLink: "https://example.com/track-pants-5"
    },
    {
      title: "Windbreaker Track Pants",
      price: "$46.99",
      description: "Wind-resistant track pants perfect for outdoor activities.",
      affiliateLink: "https://example.com/track-pants-6"
    },
    {
      title: "Mesh Panel Track Pants",
      price: "$45.99",
      originalPrice: "$55.99",
      description: "Track pants with mesh panels for enhanced breathability.",
      affiliateLink: "https://example.com/track-pants-7"
    },
    {
      title: "Warm-Up Track Pants",
      price: "$40.99",
      description: "Warm-up track pants ideal for pre-workout preparation.",
      affiliateLink: "https://example.com/track-pants-8"
    },
    {
      title: "Tearaway Track Pants",
      price: "$48.99",
      originalPrice: "$58.99",
      description: "Tearaway track pants with snap buttons for quick removal.",
      affiliateLink: "https://example.com/track-pants-9"
    },
    {
      title: "Fleece-Lined Track Pants",
      price: "$47.99",
      description: "Fleece-lined track pants for cold weather training.",
      affiliateLink: "https://example.com/track-pants-10"
    },
    {
      title: "Tapered Track Pants",
      price: "$42.99",
      originalPrice: "$52.99",
      description: "Tapered track pants with contemporary athletic fit.",
      affiliateLink: "https://example.com/track-pants-11"
    },
    {
      title: "Zip-Off Track Pants",
      price: "$49.99",
      description: "Convertible track pants that zip off to become shorts.",
      affiliateLink: "https://example.com/track-pants-12"
    },
    {
      title: "Reflective Track Pants",
      price: "$44.99",
      originalPrice: "$54.99",
      description: "Track pants with reflective details for visibility.",
      affiliateLink: "https://example.com/track-pants-13"
    },
    {
      title: "Compression Track Pants",
      price: "$46.99",
      description: "Compression track pants for enhanced muscle support.",
      affiliateLink: "https://example.com/track-pants-14"
    },
    {
      title: "Cargo Track Pants",
      price: "$51.99",
      originalPrice: "$61.99",
      description: "Track pants with cargo pockets for utility and style.",
      affiliateLink: "https://example.com/track-pants-15"
    },
    {
      title: "Premium Track Pants",
      price: "$54.99",
      description: "Premium track pants with superior fabric and construction.",
      affiliateLink: "https://example.com/track-pants-16"
    }
  ];

  const sweatpants = [
    {
      title: "Cotton Sweatpants",
      price: "$34.99",
      originalPrice: "$44.99",
      description: "Comfortable cotton sweatpants perfect for lounging.",
      affiliateLink: "https://example.com/sweatpants-1"
    },
    {
      title: "Fleece Sweatpants",
      price: "$37.99",
      description: "Warm fleece interior for maximum comfort and warmth.",
      affiliateLink: "https://example.com/sweatpants-2"
    },
    {
      title: "Slim Fit Sweatpants",
      price: "$36.99",
      description: "Modern slim fit design with comfortable stretch fabric.",
      affiliateLink: "https://example.com/sweatpants-3"
    },
    {
      title: "Drawstring Sweatpants",
      price: "$35.99",
      originalPrice: "$45.99",
      description: "Adjustable drawstring waist with relaxed fit.",
      affiliateLink: "https://example.com/sweatpants-4"
    },
    {
      title: "Jogger Sweatpants",
      price: "$38.99",
      originalPrice: "$48.99",
      description: "Jogger-style sweatpants with tapered legs and cuffs.",
      affiliateLink: "https://example.com/sweatpants-5"
    },
    {
      title: "French Terry Sweatpants",
      price: "$39.99",
      description: "French terry fabric sweatpants with soft interior.",
      affiliateLink: "https://example.com/sweatpants-6"
    },
    {
      title: "Heavyweight Sweatpants",
      price: "$41.99",
      originalPrice: "$51.99",
      description: "Heavyweight sweatpants for maximum warmth and durability.",
      affiliateLink: "https://example.com/sweatpants-7"
    },
    {
      title: "Vintage Sweatpants",
      price: "$36.99",
      description: "Vintage-style sweatpants with retro wash and fit.",
      affiliateLink: "https://example.com/sweatpants-8"
    },
    {
      title: "Cargo Sweatpants",
      price: "$42.99",
      originalPrice: "$52.99",
      description: "Sweatpants with cargo pockets for utility and style.",
      affiliateLink: "https://example.com/sweatpants-9"
    },
    {
      title: "Zip Pocket Sweatpants",
      price: "$40.99",
      description: "Sweatpants with secure zip pockets for valuables.",
      affiliateLink: "https://example.com/sweatpants-10"
    },
    {
      title: "Organic Cotton Sweatpants",
      price: "$44.99",
      originalPrice: "$54.99",
      description: "Eco-friendly organic cotton sweatpants.",
      affiliateLink: "https://example.com/sweatpants-11"
    },
    {
      title: "Brushed Interior Sweatpants",
      price: "$38.99",
      description: "Sweatpants with brushed interior for extra softness.",
      affiliateLink: "https://example.com/sweatpants-12"
    },
    {
      title: "Cuffed Sweatpants",
      price: "$35.99",
      originalPrice: "$45.99",
      description: "Classic cuffed sweatpants with traditional styling.",
      affiliateLink: "https://example.com/sweatpants-13"
    },
    {
      title: "Open Hem Sweatpants",
      price: "$33.99",
      description: "Open hem sweatpants for a relaxed, casual fit.",
      affiliateLink: "https://example.com/sweatpants-14"
    },
    {
      title: "Premium Sweatpants",
      price: "$49.99",
      originalPrice: "$59.99",
      description: "Premium sweatpants with superior fabric and construction.",
      affiliateLink: "https://example.com/sweatpants-15"
    },
    {
      title: "Lounge Sweatpants",
      price: "$37.99",
      description: "Ultra-comfortable lounge sweatpants for relaxation.",
      affiliateLink: "https://example.com/sweatpants-16"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            <span className="text-yellow-500">Shorts & Tracks</span> Collection
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stay comfortable and stylish with our collection of shorts and track wear. 
            Perfect for workouts, casual wear, and everything in between.
          </p>
        </div>

        <CategorySection title="Casual Shorts" products={casualShorts} />
        <CategorySection title="Athletic Shorts" products={athleticShorts} />
        <CategorySection title="Track Pants" products={trackPants} />
        <CategorySection title="Sweatpants" products={sweatpants} />
      </div>
    </div>
  );
};

export default ShortsTracksPage;