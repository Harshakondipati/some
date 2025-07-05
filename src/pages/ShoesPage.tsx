import React from 'react';
import CategorySection from '../components/CategorySection';

const ShoesPage = () => {
  const whiteSneakers = [
    {
      title: "Classic White Leather Sneakers",
      price: "$79.99",
      originalPrice: "$99.99",
      description: "Premium white leather sneakers with comfortable sole and timeless design.",
      affiliateLink: "https://example.com/white-sneakers-1"
    },
    {
      title: "Minimalist White Sneakers",
      price: "$69.99",
      description: "Clean, minimalist design perfect for casual and smart-casual looks.",
      affiliateLink: "https://example.com/white-sneakers-2"
    },
    {
      title: "White Canvas Sneakers",
      price: "$45.99",
      originalPrice: "$65.99",
      description: "Classic canvas construction with durable rubber sole.",
      affiliateLink: "https://example.com/white-sneakers-3"
    },
    {
      title: "Premium White Trainers",
      price: "$89.99",
      description: "High-quality materials with superior comfort and style.",
      affiliateLink: "https://example.com/white-sneakers-4"
    },
    {
      title: "White Court Sneakers",
      price: "$74.99",
      originalPrice: "$94.99",
      description: "Court-inspired white sneakers with vintage appeal.",
      affiliateLink: "https://example.com/white-sneakers-5"
    },
    {
      title: "Low-Top White Sneakers",
      price: "$67.99",
      description: "Classic low-top design with modern comfort features.",
      affiliateLink: "https://example.com/white-sneakers-6"
    },
    {
      title: "White Athletic Sneakers",
      price: "$82.99",
      originalPrice: "$102.99",
      description: "Athletic-inspired white sneakers with performance features.",
      affiliateLink: "https://example.com/white-sneakers-7"
    },
    {
      title: "Retro White Sneakers",
      price: "$76.99",
      description: "Retro-inspired design with modern comfort technology.",
      affiliateLink: "https://example.com/white-sneakers-8"
    },
    {
      title: "White Slip-On Sneakers",
      price: "$59.99",
      originalPrice: "$79.99",
      description: "Convenient slip-on design with white leather construction.",
      affiliateLink: "https://example.com/white-sneakers-9"
    },
    {
      title: "Designer White Sneakers",
      price: "$124.99",
      description: "Designer white sneakers with luxury materials and craftsmanship.",
      affiliateLink: "https://example.com/white-sneakers-10"
    },
    {
      title: "White Running Sneakers",
      price: "$84.99",
      originalPrice: "$104.99",
      description: "Running-inspired white sneakers with advanced cushioning.",
      affiliateLink: "https://example.com/white-sneakers-11"
    },
    {
      title: "Vintage White Sneakers",
      price: "$71.99",
      description: "Vintage-style white sneakers with authentic retro details.",
      affiliateLink: "https://example.com/white-sneakers-12"
    },
    {
      title: "White Skate Sneakers",
      price: "$68.99",
      originalPrice: "$88.99",
      description: "Skate-inspired white sneakers with durable construction.",
      affiliateLink: "https://example.com/white-sneakers-13"
    },
    {
      title: "Luxury White Sneakers",
      price: "$149.99",
      description: "Luxury white sneakers with premium materials and design.",
      affiliateLink: "https://example.com/white-sneakers-14"
    },
    {
      title: "White Tennis Sneakers",
      price: "$77.99",
      originalPrice: "$97.99",
      description: "Tennis-inspired white sneakers with court-ready features.",
      affiliateLink: "https://example.com/white-sneakers-15"
    },
    {
      title: "Modern White Sneakers",
      price: "$73.99",
      description: "Modern design white sneakers with contemporary styling.",
      affiliateLink: "https://example.com/white-sneakers-16"
    }
  ];

  const blackFormalOxfords = [
    {
      title: "Classic Black Oxford Shoes",
      price: "$129.99",
      originalPrice: "$159.99",
      description: "Traditional black leather oxfords perfect for formal occasions.",
      affiliateLink: "https://example.com/oxford-shoes-1"
    },
    {
      title: "Patent Leather Oxfords",
      price: "$149.99",
      description: "Elegant patent leather finish for special events and formal wear.",
      affiliateLink: "https://example.com/oxford-shoes-2"
    },
    {
      title: "Wingtip Oxford Shoes",
      price: "$139.99",
      description: "Classic wingtip design with sophisticated brogue detailing.",
      affiliateLink: "https://example.com/oxford-shoes-3"
    },
    {
      title: "Premium Leather Oxfords",
      price: "$169.99",
      originalPrice: "$199.99",
      description: "Handcrafted premium leather with exceptional comfort and durability.",
      affiliateLink: "https://example.com/oxford-shoes-4"
    },
    {
      title: "Business Oxford Shoes",
      price: "$124.99",
      originalPrice: "$154.99",
      description: "Professional business oxfords with modern comfort features.",
      affiliateLink: "https://example.com/oxford-shoes-5"
    },
    {
      title: "Formal Black Oxfords",
      price: "$134.99",
      description: "Formal black oxfords with traditional styling and quality.",
      affiliateLink: "https://example.com/oxford-shoes-6"
    },
    {
      title: "Executive Oxford Shoes",
      price: "$159.99",
      originalPrice: "$189.99",
      description: "Executive-level oxfords with superior leather and craftsmanship.",
      affiliateLink: "https://example.com/oxford-shoes-7"
    },
    {
      title: "Dress Oxford Shoes",
      price: "$144.99",
      description: "Elegant dress oxfords perfect for formal events.",
      affiliateLink: "https://example.com/oxford-shoes-8"
    },
    {
      title: "Luxury Black Oxfords",
      price: "$199.99",
      originalPrice: "$229.99",
      description: "Luxury black oxfords with premium materials and construction.",
      affiliateLink: "https://example.com/oxford-shoes-9"
    },
    {
      title: "Traditional Oxford Shoes",
      price: "$119.99",
      description: "Traditional oxford styling with classic black leather.",
      affiliateLink: "https://example.com/oxford-shoes-10"
    },
    {
      title: "Handcrafted Oxfords",
      price: "$179.99",
      originalPrice: "$209.99",
      description: "Handcrafted oxfords with attention to every detail.",
      affiliateLink: "https://example.com/oxford-shoes-11"
    },
    {
      title: "Professional Oxfords",
      price: "$139.99",
      description: "Professional oxfords designed for business and formal wear.",
      affiliateLink: "https://example.com/oxford-shoes-12"
    },
    {
      title: "Italian Oxford Shoes",
      price: "$189.99",
      originalPrice: "$219.99",
      description: "Italian-crafted oxfords with superior quality and style.",
      affiliateLink: "https://example.com/oxford-shoes-13"
    },
    {
      title: "Classic Formal Oxfords",
      price: "$129.99",
      description: "Classic formal oxfords with timeless appeal and comfort.",
      affiliateLink: "https://example.com/oxford-shoes-14"
    },
    {
      title: "Premium Black Oxfords",
      price: "$164.99",
      originalPrice: "$194.99",
      description: "Premium black oxfords with exceptional quality and fit.",
      affiliateLink: "https://example.com/oxford-shoes-15"
    },
    {
      title: "Elegant Oxford Shoes",
      price: "$154.99",
      description: "Elegant oxford shoes with sophisticated styling and comfort.",
      affiliateLink: "https://example.com/oxford-shoes-16"
    }
  ];

  const brownDerbyShoes = [
    {
      title: "Classic Brown Derby Shoes",
      price: "$119.99",
      originalPrice: "$149.99",
      description: "Versatile brown leather derbies suitable for business and casual wear.",
      affiliateLink: "https://example.com/derby-shoes-1"
    },
    {
      title: "Suede Brown Derby Shoes",
      price: "$109.99",
      description: "Sophisticated suede finish with comfortable derby construction.",
      affiliateLink: "https://example.com/derby-shoes-2"
    },
    {
      title: "Brogue Derby Shoes",
      price: "$134.99",
      description: "Traditional brogue detailing with modern comfort features.",
      affiliateLink: "https://example.com/derby-shoes-3"
    },
    {
      title: "Burnished Brown Derbies",
      price: "$124.99",
      originalPrice: "$154.99",
      description: "Hand-burnished leather with rich brown color variation.",
      affiliateLink: "https://example.com/derby-shoes-4"
    },
    {
      title: "Casual Brown Derbies",
      price: "$114.99",
      originalPrice: "$144.99",
      description: "Casual brown derbies perfect for smart-casual occasions.",
      affiliateLink: "https://example.com/derby-shoes-5"
    },
    {
      title: "Leather Brown Derby Shoes",
      price: "$129.99",
      description: "Premium leather brown derbies with classic styling.",
      affiliateLink: "https://example.com/derby-shoes-6"
    },
    {
      title: "Wingtip Brown Derbies",
      price: "$139.99",
      originalPrice: "$169.99",
      description: "Wingtip brown derbies with sophisticated brogue details.",
      affiliateLink: "https://example.com/derby-shoes-7"
    },
    {
      title: "Business Brown Derbies",
      price: "$124.99",
      description: "Business-appropriate brown derbies with professional styling.",
      affiliateLink: "https://example.com/derby-shoes-8"
    },
    {
      title: "Tan Brown Derby Shoes",
      price: "$119.99",
      originalPrice: "$149.99",
      description: "Rich tan brown derbies with versatile styling options.",
      affiliateLink: "https://example.com/derby-shoes-9"
    },
    {
      title: "Premium Brown Derbies",
      price: "$149.99",
      description: "Premium brown derbies with superior leather and craftsmanship.",
      affiliateLink: "https://example.com/derby-shoes-10"
    },
    {
      title: "Cognac Derby Shoes",
      price: "$134.99",
      originalPrice: "$164.99",
      description: "Cognac brown derbies with rich color and quality construction.",
      affiliateLink: "https://example.com/derby-shoes-11"
    },
    {
      title: "Casual Suede Derbies",
      price: "$109.99",
      description: "Casual suede derbies perfect for weekend wear.",
      affiliateLink: "https://example.com/derby-shoes-12"
    },
    {
      title: "Handcrafted Brown Derbies",
      price: "$159.99",
      originalPrice: "$189.99",
      description: "Handcrafted brown derbies with attention to detail.",
      affiliateLink: "https://example.com/derby-shoes-13"
    },
    {
      title: "Traditional Brown Derbies",
      price: "$114.99",
      description: "Traditional brown derbies with classic styling and comfort.",
      affiliateLink: "https://example.com/derby-shoes-14"
    },
    {
      title: "Luxury Brown Derby Shoes",
      price: "$169.99",
      originalPrice: "$199.99",
      description: "Luxury brown derbies with premium materials and construction.",
      affiliateLink: "https://example.com/derby-shoes-15"
    },
    {
      title: "Modern Brown Derbies",
      price: "$129.99",
      description: "Modern brown derbies with contemporary styling and comfort.",
      affiliateLink: "https://example.com/derby-shoes-16"
    }
  ];

  const chelseaBoots = [
    {
      title: "Black Chelsea Boots",
      price: "$99.99",
      originalPrice: "$129.99",
      description: "Classic black leather Chelsea boots with elastic side panels.",
      affiliateLink: "https://example.com/chelsea-boots-1"
    },
    {
      title: "Brown Suede Chelsea Boots",
      price: "$109.99",
      description: "Luxurious brown suede with comfortable slip-on design.",
      affiliateLink: "https://example.com/chelsea-boots-2"
    },
    {
      title: "Tan Leather Chelsea Boots",
      price: "$114.99",
      description: "Rich tan leather with versatile styling options.",
      affiliateLink: "https://example.com/chelsea-boots-3"
    },
    {
      title: "Premium Chelsea Boots",
      price: "$139.99",
      originalPrice: "$169.99",
      description: "Premium leather construction with superior comfort and style.",
      affiliateLink: "https://example.com/chelsea-boots-4"
    },
    {
      title: "Cognac Chelsea Boots",
      price: "$119.99",
      originalPrice: "$149.99",
      description: "Cognac leather Chelsea boots with rich color and quality.",
      affiliateLink: "https://example.com/chelsea-boots-5"
    },
    {
      title: "Navy Suede Chelsea Boots",
      price: "$104.99",
      description: "Navy suede Chelsea boots with sophisticated styling.",
      affiliateLink: "https://example.com/chelsea-boots-6"
    },
    {
      title: "Burgundy Chelsea Boots",
      price: "$124.99",
      originalPrice: "$154.99",
      description: "Burgundy leather Chelsea boots with distinctive color.",
      affiliateLink: "https://example.com/chelsea-boots-7"
    },
    {
      title: "Grey Suede Chelsea Boots",
      price: "$109.99",
      description: "Grey suede Chelsea boots with modern appeal.",
      affiliateLink: "https://example.com/chelsea-boots-8"
    },
    {
      title: "Olive Chelsea Boots",
      price: "$114.99",
      originalPrice: "$144.99",
      description: "Olive green Chelsea boots with unique styling.",
      affiliateLink: "https://example.com/chelsea-boots-9"
    },
    {
      title: "Luxury Chelsea Boots",
      price: "$159.99",
      description: "Luxury Chelsea boots with premium materials and craftsmanship.",
      affiliateLink: "https://example.com/chelsea-boots-10"
    },
    {
      title: "Casual Chelsea Boots",
      price: "$94.99",
      originalPrice: "$124.99",
      description: "Casual Chelsea boots perfect for everyday wear.",
      affiliateLink: "https://example.com/chelsea-boots-11"
    },
    {
      title: "Dress Chelsea Boots",
      price: "$129.99",
      description: "Dress Chelsea boots suitable for formal occasions.",
      affiliateLink: "https://example.com/chelsea-boots-12"
    },
    {
      title: "Handcrafted Chelsea Boots",
      price: "$149.99",
      originalPrice: "$179.99",
      description: "Handcrafted Chelsea boots with attention to detail.",
      affiliateLink: "https://example.com/chelsea-boots-13"
    },
    {
      title: "Vintage Chelsea Boots",
      price: "$109.99",
      description: "Vintage-inspired Chelsea boots with authentic styling.",
      affiliateLink: "https://example.com/chelsea-boots-14"
    },
    {
      title: "Modern Chelsea Boots",
      price: "$119.99",
      originalPrice: "$149.99",
      description: "Modern Chelsea boots with contemporary design and comfort.",
      affiliateLink: "https://example.com/chelsea-boots-15"
    },
    {
      title: "Classic Chelsea Boots",
      price: "$104.99",
      description: "Classic Chelsea boots with timeless appeal and quality.",
      affiliateLink: "https://example.com/chelsea-boots-16"
    }
  ];

  const loafers = [
    {
      title: "Penny Loafers",
      price: "$89.99",
      originalPrice: "$119.99",
      description: "Classic penny loafers with traditional strap detail.",
      affiliateLink: "https://example.com/loafers-1"
    },
    {
      title: "Tassel Loafers",
      price: "$94.99",
      description: "Elegant tassel detail with comfortable slip-on design.",
      affiliateLink: "https://example.com/loafers-2"
    },
    {
      title: "Driving Loafers",
      price: "$79.99",
      description: "Comfortable driving shoes with flexible rubber sole.",
      affiliateLink: "https://example.com/loafers-3"
    },
    {
      title: "Suede Loafers",
      price: "$99.99",
      originalPrice: "$129.99",
      description: "Sophisticated suede finish perfect for smart-casual occasions.",
      affiliateLink: "https://example.com/loafers-4"
    },
    {
      title: "Leather Penny Loafers",
      price: "$84.99",
      originalPrice: "$114.99",
      description: "Premium leather penny loafers with classic styling.",
      affiliateLink: "https://example.com/loafers-5"
    },
    {
      title: "Brown Tassel Loafers",
      price: "$89.99",
      description: "Brown leather tassel loafers with elegant details.",
      affiliateLink: "https://example.com/loafers-6"
    },
    {
      title: "Black Penny Loafers",
      price: "$92.99",
      originalPrice: "$122.99",
      description: "Black penny loafers perfect for business casual wear.",
      affiliateLink: "https://example.com/loafers-7"
    },
    {
      title: "Casual Driving Loafers",
      price: "$74.99",
      description: "Casual driving loafers with comfortable fit and style.",
      affiliateLink: "https://example.com/loafers-8"
    },
    {
      title: "Navy Suede Loafers",
      price: "$94.99",
      originalPrice: "$124.99",
      description: "Navy suede loafers with sophisticated appeal.",
      affiliateLink: "https://example.com/loafers-9"
    },
    {
      title: "Luxury Loafers",
      price: "$129.99",
      description: "Luxury loafers with premium materials and craftsmanship.",
      affiliateLink: "https://example.com/loafers-10"
    },
    {
      title: "Cognac Penny Loafers",
      price: "$87.99",
      originalPrice: "$117.99",
      description: "Cognac leather penny loafers with rich color.",
      affiliateLink: "https://example.com/loafers-11"
    },
    {
      title: "Horsebit Loafers",
      price: "$109.99",
      description: "Designer horsebit loafers with distinctive metal detail.",
      affiliateLink: "https://example.com/loafers-12"
    },
    {
      title: "Casual Suede Loafers",
      price: "$84.99",
      originalPrice: "$114.99",
      description: "Casual suede loafers perfect for weekend wear.",
      affiliateLink: "https://example.com/loafers-13"
    },
    {
      title: "Business Loafers",
      price: "$99.99",
      description: "Business loafers suitable for professional environments.",
      affiliateLink: "https://example.com/loafers-14"
    },
    {
      title: "Italian Loafers",
      price: "$119.99",
      originalPrice: "$149.99",
      description: "Italian-crafted loafers with superior quality and style.",
      affiliateLink: "https://example.com/loafers-15"
    },
    {
      title: "Classic Loafers",
      price: "$82.99",
      description: "Classic loafers with timeless design and comfort.",
      affiliateLink: "https://example.com/loafers-16"
    }
  ];

  const runningShoes = [
    {
      title: "Performance Running Shoes",
      price: "$89.99",
      originalPrice: "$119.99",
      description: "Advanced cushioning and support for serious runners.",
      affiliateLink: "https://example.com/running-shoes-1"
    },
    {
      title: "Lightweight Trainers",
      price: "$74.99",
      description: "Ultra-lightweight design for comfortable all-day wear.",
      affiliateLink: "https://example.com/running-shoes-2"
    },
    {
      title: "Cross-Training Shoes",
      price: "$79.99",
      description: "Versatile design suitable for various athletic activities.",
      affiliateLink: "https://example.com/running-shoes-3"
    },
    {
      title: "Marathon Running Shoes",
      price: "$104.99",
      originalPrice: "$134.99",
      description: "Professional-grade running shoes with maximum comfort and performance.",
      affiliateLink: "https://example.com/running-shoes-4"
    },
    {
      title: "Cushioned Running Shoes",
      price: "$84.99",
      originalPrice: "$114.99",
      description: "Maximum cushioning for long-distance running comfort.",
      affiliateLink: "https://example.com/running-shoes-5"
    },
    {
      title: "Athletic Trainers",
      price: "$69.99",
      description: "Versatile athletic trainers for gym and casual wear.",
      affiliateLink: "https://example.com/running-shoes-6"
    },
    {
      title: "Trail Running Shoes",
      price: "$94.99",
      originalPrice: "$124.99",
      description: "Rugged trail running shoes with superior grip and protection.",
      affiliateLink: "https://example.com/running-shoes-7"
    },
    {
      title: "Speed Training Shoes",
      price: "$79.99",
      description: "Speed training shoes designed for agility and performance.",
      affiliateLink: "https://example.com/running-shoes-8"
    },
    {
      title: "Breathable Running Shoes",
      price: "$87.99",
      originalPrice: "$117.99",
      description: "Breathable mesh construction for optimal airflow.",
      affiliateLink: "https://example.com/running-shoes-9"
    },
    {
      title: "Professional Running Shoes",
      price: "$109.99",
      description: "Professional-grade running shoes for serious athletes.",
      affiliateLink: "https://example.com/running-shoes-10"
    },
    {
      title: "Stability Running Shoes",
      price: "$92.99",
      originalPrice: "$122.99",
      description: "Stability features for runners who need motion control.",
      affiliateLink: "https://example.com/running-shoes-11"
    },
    {
      title: "Neutral Running Shoes",
      price: "$82.99",
      description: "Neutral running shoes for natural foot motion.",
      affiliateLink: "https://example.com/running-shoes-12"
    },
    {
      title: "High-Performance Trainers",
      price: "$99.99",
      originalPrice: "$129.99",
      description: "High-performance trainers with advanced technology.",
      affiliateLink: "https://example.com/running-shoes-13"
    },
    {
      title: "Casual Athletic Shoes",
      price: "$72.99",
      description: "Casual athletic shoes perfect for everyday activities.",
      affiliateLink: "https://example.com/running-shoes-14"
    },
    {
      title: "Competition Running Shoes",
      price: "$114.99",
      originalPrice: "$144.99",
      description: "Competition-grade running shoes for race day performance.",
      affiliateLink: "https://example.com/running-shoes-15"
    },
    {
      title: "Fitness Training Shoes",
      price: "$77.99",
      description: "Fitness training shoes designed for gym workouts.",
      affiliateLink: "https://example.com/running-shoes-16"
    }
  ];

  const casualSlipOns = [
    {
      title: "Canvas Slip-On Shoes",
      price: "$39.99",
      originalPrice: "$59.99",
      description: "Comfortable canvas slip-ons perfect for casual everyday wear.",
      affiliateLink: "https://example.com/slip-ons-1"
    },
    {
      title: "Leather Slip-On Sneakers",
      price: "$64.99",
      description: "Premium leather construction with convenient slip-on design.",
      affiliateLink: "https://example.com/slip-ons-2"
    },
    {
      title: "Knit Slip-On Shoes",
      price: "$49.99",
      description: "Breathable knit upper with flexible, comfortable sole.",
      affiliateLink: "https://example.com/slip-ons-3"
    },
    {
      title: "Casual Boat Shoes",
      price: "$69.99",
      originalPrice: "$89.99",
      description: "Classic boat shoe styling with modern comfort features.",
      affiliateLink: "https://example.com/slip-ons-4"
    },
    {
      title: "Suede Slip-On Shoes",
      price: "$54.99",
      originalPrice: "$74.99",
      description: "Soft suede slip-ons with casual sophisticated styling.",
      affiliateLink: "https://example.com/slip-ons-5"
    },
    {
      title: "Denim Slip-On Sneakers",
      price: "$44.99",
      description: "Casual denim slip-ons perfect for relaxed styling.",
      affiliateLink: "https://example.com/slip-ons-6"
    },
    {
      title: "Mesh Slip-On Shoes",
      price: "$42.99",
      originalPrice: "$62.99",
      description: "Breathable mesh slip-ons for active casual wear.",
      affiliateLink: "https://example.com/slip-ons-7"
    },
    {
      title: "Espadrille Slip-Ons",
      price: "$52.99",
      description: "Summer espadrille slip-ons with rope sole detail.",
      affiliateLink: "https://example.com/slip-ons-8"
    },
    {
      title: "Vintage Slip-On Shoes",
      price: "$47.99",
      originalPrice: "$67.99",
      description: "Vintage-inspired slip-ons with retro styling.",
      affiliateLink: "https://example.com/slip-ons-9"
    },
    {
      title: "Premium Slip-On Sneakers",
      price: "$74.99",
      description: "Premium slip-on sneakers with luxury materials.",
      affiliateLink: "https://example.com/slip-ons-10"
    },
    {
      title: "Casual Loafer Slip-Ons",
      price: "$59.99",
      originalPrice: "$79.99",
      description: "Loafer-style slip-ons with casual comfort.",
      affiliateLink: "https://example.com/slip-ons-11"
    },
    {
      title: "Athletic Slip-On Shoes",
      price: "$49.99",
      description: "Athletic slip-ons perfect for gym and casual wear.",
      affiliateLink: "https://example.com/slip-ons-12"
    },
    {
      title: "Minimalist Slip-Ons",
      price: "$44.99",
      originalPrice: "$64.99",
      description: "Minimalist design slip-ons with clean styling.",
      affiliateLink: "https://example.com/slip-ons-13"
    },
    {
      title: "Comfort Slip-On Shoes",
      price: "$52.99",
      description: "Comfort-focused slip-ons with cushioned insoles.",
      affiliateLink: "https://example.com/slip-ons-14"
    },
    {
      title: "Designer Slip-On Sneakers",
      price: "$84.99",
      originalPrice: "$104.99",
      description: "Designer slip-on sneakers with fashion-forward styling.",
      affiliateLink: "https://example.com/slip-ons-15"
    },
    {
      title: "Classic Slip-On Shoes",
      price: "$41.99",
      description: "Classic slip-on shoes with timeless appeal and comfort.",
      affiliateLink: "https://example.com/slip-ons-16"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            <span className="text-yellow-500">Shoes & Sneakers</span> Collection
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Step up your style with our comprehensive collection of footwear. From formal dress shoes 
            to casual sneakers, find the perfect pair for every occasion.
          </p>
        </div>

        <CategorySection title="White Sneakers" products={whiteSneakers} />
        <CategorySection title="Black Formal Oxfords" products={blackFormalOxfords} />
        <CategorySection title="Brown Derby Shoes" products={brownDerbyShoes} />
        <CategorySection title="Chelsea Boots" products={chelseaBoots} />
        <CategorySection title="Loafers (Penny or Tassel)" products={loafers} />
        <CategorySection title="Running Shoes / Trainers" products={runningShoes} />
        <CategorySection title="Casual Slip-Ons" products={casualSlipOns} />
      </div>
    </div>
  );
};

export default ShoesPage;