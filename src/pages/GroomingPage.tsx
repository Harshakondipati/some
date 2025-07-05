import React from 'react';
import CategorySection from '../components/CategorySection';

const GroomingPage = () => {
  const skincare = [
    {
      title: "Daily Face Cleanser",
      price: "$24.99",
      originalPrice: "$34.99",
      description: "Gentle daily cleanser for all skin types with natural ingredients.",
      affiliateLink: "https://example.com/skincare-1"
    },
    {
      title: "Anti-Aging Moisturizer",
      price: "$39.99",
      description: "Premium moisturizer with anti-aging properties and SPF protection.",
      affiliateLink: "https://example.com/skincare-2"
    },
    {
      title: "Vitamin C Serum",
      price: "$29.99",
      description: "Brightening vitamin C serum for healthy, glowing skin.",
      affiliateLink: "https://example.com/skincare-3"
    },
    {
      title: "Eye Cream",
      price: "$34.99",
      originalPrice: "$44.99",
      description: "Hydrating eye cream to reduce dark circles and fine lines.",
      affiliateLink: "https://example.com/skincare-4"
    },
    {
      title: "Exfoliating Face Scrub",
      price: "$22.99",
      originalPrice: "$32.99",
      description: "Gentle exfoliating scrub to remove dead skin cells.",
      affiliateLink: "https://example.com/skincare-5"
    },
    {
      title: "Hydrating Face Mask",
      price: "$19.99",
      description: "Intensive hydrating mask for dry and tired skin.",
      affiliateLink: "https://example.com/skincare-6"
    },
    {
      title: "Retinol Night Cream",
      price: "$44.99",
      originalPrice: "$59.99",
      description: "Anti-aging retinol night cream for skin renewal.",
      affiliateLink: "https://example.com/skincare-7"
    },
    {
      title: "Toner for Men",
      price: "$18.99",
      description: "Balancing toner to prep skin for moisturizer.",
      affiliateLink: "https://example.com/skincare-8"
    },
    {
      title: "Acne Treatment Gel",
      price: "$26.99",
      originalPrice: "$36.99",
      description: "Targeted acne treatment gel with salicylic acid.",
      affiliateLink: "https://example.com/skincare-9"
    },
    {
      title: "Sunscreen SPF 50",
      price: "$21.99",
      description: "Broad-spectrum sunscreen for daily protection.",
      affiliateLink: "https://example.com/skincare-10"
    },
    {
      title: "Beard Oil",
      price: "$16.99",
      originalPrice: "$26.99",
      description: "Nourishing beard oil for soft, manageable facial hair.",
      affiliateLink: "https://example.com/skincare-11"
    },
    {
      title: "Face Serum for Men",
      price: "$32.99",
      description: "Concentrated face serum with active ingredients.",
      affiliateLink: "https://example.com/skincare-12"
    },
    {
      title: "Charcoal Face Wash",
      price: "$23.99",
      originalPrice: "$33.99",
      description: "Deep-cleansing charcoal face wash for oily skin.",
      affiliateLink: "https://example.com/skincare-13"
    },
    {
      title: "Lip Balm for Men",
      price: "$8.99",
      description: "Moisturizing lip balm with natural ingredients.",
      affiliateLink: "https://example.com/skincare-14"
    },
    {
      title: "Under Eye Patches",
      price: "$27.99",
      originalPrice: "$37.99",
      description: "Hydrogel under eye patches for instant refreshment.",
      affiliateLink: "https://example.com/skincare-15"
    },
    {
      title: "Complete Skincare Set",
      price: "$79.99",
      description: "Complete skincare routine set with cleanser, toner, and moisturizer.",
      affiliateLink: "https://example.com/skincare-16"
    }
  ];

  const shaving = [
    {
      title: "Premium Shaving Kit",
      price: "$49.99",
      originalPrice: "$69.99",
      description: "Complete shaving kit with razor, brush, and shaving cream.",
      affiliateLink: "https://example.com/shaving-1"
    },
    {
      title: "Electric Shaver",
      price: "$89.99",
      description: "High-quality electric shaver with precision cutting technology.",
      affiliateLink: "https://example.com/shaving-2"
    },
    {
      title: "Shaving Cream",
      price: "$14.99",
      description: "Rich lathering shaving cream for smooth, comfortable shaves.",
      affiliateLink: "https://example.com/shaving-3"
    },
    {
      title: "Aftershave Balm",
      price: "$19.99",
      originalPrice: "$29.99",
      description: "Soothing aftershave balm to prevent irritation and moisturize.",
      affiliateLink: "https://example.com/shaving-4"
    },
    {
      title: "Safety Razor",
      price: "$34.99",
      originalPrice: "$44.99",
      description: "Classic safety razor for precise, traditional shaving.",
      affiliateLink: "https://example.com/shaving-5"
    },
    {
      title: "Shaving Brush",
      price: "$24.99",
      description: "Premium badger hair shaving brush for rich lather.",
      affiliateLink: "https://example.com/shaving-6"
    },
    {
      title: "Pre-Shave Oil",
      price: "$16.99",
      originalPrice: "$24.99",
      description: "Pre-shave oil to soften hair and protect skin.",
      affiliateLink: "https://example.com/shaving-7"
    },
    {
      title: "Razor Blade Refills",
      price: "$12.99",
      description: "High-quality razor blade refills for smooth shaving.",
      affiliateLink: "https://example.com/shaving-8"
    },
    {
      title: "Shaving Soap",
      price: "$11.99",
      originalPrice: "$19.99",
      description: "Traditional shaving soap with natural ingredients.",
      affiliateLink: "https://example.com/shaving-9"
    },
    {
      title: "Electric Trimmer",
      price: "$39.99",
      description: "Versatile electric trimmer for beard and body grooming.",
      affiliateLink: "https://example.com/shaving-10"
    },
    {
      title: "Shaving Stand",
      price: "$22.99",
      originalPrice: "$32.99",
      description: "Elegant shaving stand for razor and brush storage.",
      affiliateLink: "https://example.com/shaving-11"
    },
    {
      title: "Alum Block",
      price: "$7.99",
      description: "Natural alum block for post-shave skin treatment.",
      affiliateLink: "https://example.com/shaving-12"
    },
    {
      title: "Shaving Gel",
      price: "$13.99",
      originalPrice: "$21.99",
      description: "Clear shaving gel for precision shaving and visibility.",
      affiliateLink: "https://example.com/shaving-13"
    },
    {
      title: "Straight Razor",
      price: "$79.99",
      description: "Professional straight razor for traditional wet shaving.",
      affiliateLink: "https://example.com/shaving-14"
    },
    {
      title: "Aftershave Splash",
      price: "$17.99",
      originalPrice: "$25.99",
      description: "Classic aftershave splash with antiseptic properties.",
      affiliateLink: "https://example.com/shaving-15"
    },
    {
      title: "Deluxe Shaving Set",
      price: "$129.99",
      description: "Deluxe shaving set with premium tools and accessories.",
      affiliateLink: "https://example.com/shaving-16"
    }
  ];

  const haircare = [
    {
      title: "Premium Hair Styling Gel",
      price: "$16.99",
      originalPrice: "$24.99",
      description: "Strong hold styling gel for all-day hair control.",
      affiliateLink: "https://example.com/haircare-1"
    },
    {
      title: "Nourishing Shampoo",
      price: "$18.99",
      description: "Sulfate-free shampoo that cleanses and nourishes hair.",
      affiliateLink: "https://example.com/haircare-2"
    },
    {
      title: "Hair Pomade",
      price: "$22.99",
      description: "Classic pomade for sleek, polished hairstyles.",
      affiliateLink: "https://example.com/haircare-3"
    },
    {
      title: "Hair Growth Oil",
      price: "$26.99",
      originalPrice: "$36.99",
      description: "Natural hair growth oil with essential vitamins and nutrients.",
      affiliateLink: "https://example.com/haircare-4"
    },
    {
      title: "Conditioning Treatment",
      price: "$21.99",
      originalPrice: "$31.99",
      description: "Deep conditioning treatment for damaged and dry hair.",
      affiliateLink: "https://example.com/haircare-5"
    },
    {
      title: "Hair Wax",
      price: "$19.99",
      description: "Flexible hold hair wax for textured styling.",
      affiliateLink: "https://example.com/haircare-6"
    },
    {
      title: "Dry Shampoo",
      price: "$14.99",
      originalPrice: "$22.99",
      description: "Refreshing dry shampoo for oil absorption and volume.",
      affiliateLink: "https://example.com/haircare-7"
    },
    {
      title: "Hair Serum",
      price: "$24.99",
      description: "Smoothing hair serum for frizz control and shine.",
      affiliateLink: "https://example.com/haircare-8"
    },
    {
      title: "Scalp Treatment",
      price: "$29.99",
      originalPrice: "$39.99",
      description: "Therapeutic scalp treatment for healthy hair growth.",
      affiliateLink: "https://example.com/haircare-9"
    },
    {
      title: "Hair Spray",
      price: "$13.99",
      description: "Flexible hold hair spray for lasting style.",
      affiliateLink: "https://example.com/haircare-10"
    },
    {
      title: "Leave-In Conditioner",
      price: "$17.99",
      originalPrice: "$25.99",
      description: "Leave-in conditioner for daily hair protection.",
      affiliateLink: "https://example.com/haircare-11"
    },
    {
      title: "Hair Mousse",
      price: "$15.99",
      description: "Volumizing hair mousse for body and texture.",
      affiliateLink: "https://example.com/haircare-12"
    },
    {
      title: "Anti-Dandruff Shampoo",
      price: "$20.99",
      originalPrice: "$28.99",
      description: "Medicated anti-dandruff shampoo for scalp health.",
      affiliateLink: "https://example.com/haircare-13"
    },
    {
      title: "Hair Mask",
      price: "$23.99",
      description: "Intensive hair mask for deep nourishment and repair.",
      affiliateLink: "https://example.com/haircare-14"
    },
    {
      title: "Heat Protectant Spray",
      price: "$18.99",
      originalPrice: "$26.99",
      description: "Heat protectant spray for styling tool protection.",
      affiliateLink: "https://example.com/haircare-15"
    },
    {
      title: "Complete Hair Care Set",
      price: "$69.99",
      description: "Complete hair care set with shampoo, conditioner, and styling products.",
      affiliateLink: "https://example.com/haircare-16"
    }
  ];

  const fragrances = [
    {
      title: "Classic Cologne",
      price: "$39.99",
      originalPrice: "$54.99",
      description: "Timeless cologne with fresh, masculine scent.",
      affiliateLink: "https://example.com/fragrance-1"
    },
    {
      title: "Eau de Toilette",
      price: "$44.99",
      description: "Light, refreshing eau de toilette perfect for daily wear.",
      affiliateLink: "https://example.com/fragrance-2"
    },
    {
      title: "Woody Fragrance",
      price: "$49.99",
      description: "Rich woody fragrance with notes of cedar and sandalwood.",
      affiliateLink: "https://example.com/fragrance-3"
    },
    {
      title: "Premium Perfume",
      price: "$79.99",
      originalPrice: "$99.99",
      description: "Luxury fragrance with complex, sophisticated scent profile.",
      affiliateLink: "https://example.com/fragrance-4"
    },
    {
      title: "Citrus Fresh Cologne",
      price: "$34.99",
      originalPrice: "$49.99",
      description: "Energizing citrus cologne with bergamot and lemon notes.",
      affiliateLink: "https://example.com/fragrance-5"
    },
    {
      title: "Spicy Oriental Fragrance",
      price: "$54.99",
      description: "Exotic spicy oriental fragrance with warm, sensual notes.",
      affiliateLink: "https://example.com/fragrance-6"
    },
    {
      title: "Aquatic Fresh Scent",
      price: "$42.99",
      originalPrice: "$57.99",
      description: "Clean aquatic fragrance with marine and fresh notes.",
      affiliateLink: "https://example.com/fragrance-7"
    },
    {
      title: "Musk Cologne",
      price: "$37.99",
      description: "Classic musk cologne with deep, masculine appeal.",
      affiliateLink: "https://example.com/fragrance-8"
    },
    {
      title: "Leather & Tobacco Fragrance",
      price: "$59.99",
      originalPrice: "$74.99",
      description: "Sophisticated leather and tobacco fragrance for evening wear.",
      affiliateLink: "https://example.com/fragrance-9"
    },
    {
      title: "Sport Fragrance",
      price: "$32.99",
      description: "Dynamic sport fragrance with energizing and fresh notes.",
      affiliateLink: "https://example.com/fragrance-10"
    },
    {
      title: "Vanilla & Amber Cologne",
      price: "$46.99",
      originalPrice: "$61.99",
      description: "Warm vanilla and amber cologne with sweet, comforting notes.",
      affiliateLink: "https://example.com/fragrance-11"
    },
    {
      title: "Green Tea Fragrance",
      price: "$38.99",
      description: "Refreshing green tea fragrance with natural, clean scent.",
      affiliateLink: "https://example.com/fragrance-12"
    },
    {
      title: "Oud Luxury Perfume",
      price: "$89.99",
      originalPrice: "$119.99",
      description: "Exotic oud perfume with rich, luxurious Middle Eastern notes.",
      affiliateLink: "https://example.com/fragrance-13"
    },
    {
      title: "Bergamot & Neroli Cologne",
      price: "$41.99",
      description: "Elegant bergamot and neroli cologne with floral citrus notes.",
      affiliateLink: "https://example.com/fragrance-14"
    },
    {
      title: "Black Pepper & Vetiver",
      price: "$52.99",
      originalPrice: "$67.99",
      description: "Bold black pepper and vetiver fragrance with spicy, earthy notes.",
      affiliateLink: "https://example.com/fragrance-15"
    },
    {
      title: "Signature Fragrance Collection",
      price: "$149.99",
      description: "Curated collection of signature fragrances for every occasion.",
      affiliateLink: "https://example.com/fragrance-16"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            <span className="text-yellow-500">Grooming</span> Essentials
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Complete your grooming routine with our premium collection of skincare, 
            haircare, and grooming products designed for the modern man.
          </p>
        </div>

        <CategorySection title="Skincare" products={skincare} />
        <CategorySection title="Shaving Essentials" products={shaving} />
        <CategorySection title="Haircare" products={haircare} />
        <CategorySection title="Fragrances" products={fragrances} />
      </div>
    </div>
  );
};

export default GroomingPage;