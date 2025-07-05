import React from 'react';
import CategorySection from '../components/CategorySection';

const WinterWearPage = () => {
  const jackets = [
    {
      title: "Bomber Jacket",
      price: "$79.99",
      originalPrice: "$99.99",
      description: "Classic bomber jacket with ribbed cuffs and modern fit.",
      affiliateLink: "https://example.com/bomber-jacket-1"
    },
    {
      title: "Puffer Jacket",
      price: "$89.99",
      description: "Warm puffer jacket with down insulation for extreme cold.",
      affiliateLink: "https://example.com/puffer-jacket-1"
    },
    {
      title: "Biker Jacket",
      price: "$129.99",
      description: "Edgy leather biker jacket with asymmetrical zip.",
      affiliateLink: "https://example.com/biker-jacket-1"
    },
    {
      title: "Denim Jacket",
      price: "$64.99",
      originalPrice: "$84.99",
      description: "Classic denim jacket perfect for layering.",
      affiliateLink: "https://example.com/denim-jacket-1"
    },
    {
      title: "Military Bomber Jacket",
      price: "$84.99",
      originalPrice: "$104.99",
      description: "Military-inspired bomber with authentic details and patches.",
      affiliateLink: "https://example.com/bomber-jacket-2"
    },
    {
      title: "Down Puffer Jacket",
      price: "$119.99",
      description: "Premium down-filled puffer jacket for maximum warmth.",
      affiliateLink: "https://example.com/puffer-jacket-2"
    },
    {
      title: "Vintage Leather Biker Jacket",
      price: "$149.99",
      originalPrice: "$189.99",
      description: "Vintage-style leather biker jacket with aged finish.",
      affiliateLink: "https://example.com/biker-jacket-2"
    },
    {
      title: "Sherpa Denim Jacket",
      price: "$74.99",
      description: "Denim jacket with cozy sherpa lining for extra warmth.",
      affiliateLink: "https://example.com/denim-jacket-2"
    },
    {
      title: "Varsity Bomber Jacket",
      price: "$69.99",
      originalPrice: "$89.99",
      description: "Classic varsity bomber with contrast sleeves and patches.",
      affiliateLink: "https://example.com/bomber-jacket-3"
    },
    {
      title: "Quilted Puffer Jacket",
      price: "$94.99",
      description: "Quilted puffer jacket with water-resistant outer shell.",
      affiliateLink: "https://example.com/puffer-jacket-3"
    },
    {
      title: "Moto Biker Jacket",
      price: "$139.99",
      originalPrice: "$179.99",
      description: "Modern moto biker jacket with protective padding.",
      affiliateLink: "https://example.com/biker-jacket-3"
    },
    {
      title: "Oversized Denim Jacket",
      price: "$59.99",
      description: "Trendy oversized denim jacket with relaxed fit.",
      affiliateLink: "https://example.com/denim-jacket-3"
    },
    {
      title: "Suede Bomber Jacket",
      price: "$99.99",
      originalPrice: "$129.99",
      description: "Luxurious suede bomber jacket with premium finish.",
      affiliateLink: "https://example.com/bomber-jacket-4"
    },
    {
      title: "Long Puffer Jacket",
      price: "$134.99",
      description: "Long puffer jacket providing extended coverage and warmth.",
      affiliateLink: "https://example.com/puffer-jacket-4"
    },
    {
      title: "Cafe Racer Biker Jacket",
      price: "$124.99",
      originalPrice: "$164.99",
      description: "Classic cafe racer style biker jacket with minimal design.",
      affiliateLink: "https://example.com/biker-jacket-4"
    },
    {
      title: "Distressed Denim Jacket",
      price: "$69.99",
      description: "Distressed denim jacket with authentic worn-in appearance.",
      affiliateLink: "https://example.com/denim-jacket-4"
    }
  ];

  const hoodies = [
    {
      title: "Pullover Hoodie",
      price: "$39.99",
      originalPrice: "$59.99",
      description: "Comfortable pullover hoodie with kangaroo pocket.",
      affiliateLink: "https://example.com/hoodie-1"
    },
    {
      title: "Zip-Up Hoodie",
      price: "$44.99",
      description: "Versatile zip-up hoodie perfect for layering.",
      affiliateLink: "https://example.com/hoodie-2"
    },
    {
      title: "Oversized Hoodie",
      price: "$49.99",
      description: "Trendy oversized hoodie with relaxed fit.",
      affiliateLink: "https://example.com/hoodie-3"
    },
    {
      title: "Fleece Hoodie",
      price: "$42.99",
      originalPrice: "$62.99",
      description: "Ultra-soft fleece hoodie for maximum warmth.",
      affiliateLink: "https://example.com/hoodie-4"
    },
    {
      title: "Graphic Print Hoodie",
      price: "$44.99",
      originalPrice: "$64.99",
      description: "Graphic print hoodie with eye-catching designs.",
      affiliateLink: "https://example.com/hoodie-5"
    },
    {
      title: "Tech Fleece Hoodie",
      price: "$54.99",
      description: "Modern tech fleece hoodie with moisture-wicking properties.",
      affiliateLink: "https://example.com/hoodie-6"
    },
    {
      title: "Vintage Wash Hoodie",
      price: "$47.99",
      originalPrice: "$67.99",
      description: "Vintage wash hoodie with retro styling and comfort.",
      affiliateLink: "https://example.com/hoodie-7"
    },
    {
      title: "Sherpa Lined Hoodie",
      price: "$52.99",
      description: "Hoodie with cozy sherpa lining for extra warmth.",
      affiliateLink: "https://example.com/hoodie-8"
    },
    {
      title: "Cropped Hoodie",
      price: "$41.99",
      originalPrice: "$61.99",
      description: "Trendy cropped hoodie with modern streetwear appeal.",
      affiliateLink: "https://example.com/hoodie-9"
    },
    {
      title: "Color Block Hoodie",
      price: "$46.99",
      description: "Color block hoodie with bold contrasting panels.",
      affiliateLink: "https://example.com/hoodie-10"
    },
    {
      title: "Heavyweight Hoodie",
      price: "$49.99",
      originalPrice: "$69.99",
      description: "Heavyweight hoodie with durable construction and warmth.",
      affiliateLink: "https://example.com/hoodie-11"
    },
    {
      title: "Minimalist Hoodie",
      price: "$43.99",
      description: "Clean minimalist hoodie with simple, elegant design.",
      affiliateLink: "https://example.com/hoodie-12"
    },
    {
      title: "Athletic Hoodie",
      price: "$48.99",
      originalPrice: "$68.99",
      description: "Athletic hoodie with performance fabric and fit.",
      affiliateLink: "https://example.com/hoodie-13"
    },
    {
      title: "Embroidered Hoodie",
      price: "$51.99",
      description: "Embroidered hoodie with detailed stitching and premium feel.",
      affiliateLink: "https://example.com/hoodie-14"
    },
    {
      title: "Tie-Dye Hoodie",
      price: "$45.99",
      originalPrice: "$65.99",
      description: "Colorful tie-dye hoodie with unique pattern variations.",
      affiliateLink: "https://example.com/hoodie-15"
    },
    {
      title: "Premium Cotton Hoodie",
      price: "$54.99",
      description: "Premium cotton hoodie with superior quality and comfort.",
      affiliateLink: "https://example.com/hoodie-16"
    }
  ];

  const sweatshirts = [
    {
      title: "Crew Neck Sweatshirt",
      price: "$34.99",
      originalPrice: "$49.99",
      description: "Classic crew neck sweatshirt with comfortable fit.",
      affiliateLink: "https://example.com/sweatshirt-1"
    },
    {
      title: "Vintage Sweatshirt",
      price: "$39.99",
      description: "Retro-style sweatshirt with vintage wash effect.",
      affiliateLink: "https://example.com/sweatshirt-2"
    },
    {
      title: "Logo Sweatshirt",
      price: "$37.99",
      description: "Branded logo sweatshirt with modern design.",
      affiliateLink: "https://example.com/sweatshirt-3"
    },
    {
      title: "Oversized Sweatshirt",
      price: "$41.99",
      originalPrice: "$61.99",
      description: "Comfortable oversized sweatshirt for relaxed styling.",
      affiliateLink: "https://example.com/sweatshirt-4"
    },
    {
      title: "French Terry Sweatshirt",
      price: "$36.99",
      originalPrice: "$56.99",
      description: "French terry sweatshirt with soft interior texture.",
      affiliateLink: "https://example.com/sweatshirt-5"
    },
    {
      title: "Graphic Sweatshirt",
      price: "$42.99",
      description: "Graphic sweatshirt with bold prints and designs.",
      affiliateLink: "https://example.com/sweatshirt-6"
    },
    {
      title: "Fleece Sweatshirt",
      price: "$38.99",
      originalPrice: "$58.99",
      description: "Fleece sweatshirt with extra warmth and comfort.",
      affiliateLink: "https://example.com/sweatshirt-7"
    },
    {
      title: "Raglan Sweatshirt",
      price: "$35.99",
      description: "Raglan sleeve sweatshirt with athletic styling.",
      affiliateLink: "https://example.com/sweatshirt-8"
    },
    {
      title: "Color Block Sweatshirt",
      price: "$43.99",
      originalPrice: "$63.99",
      description: "Color block sweatshirt with contrasting panel design.",
      affiliateLink: "https://example.com/sweatshirt-9"
    },
    {
      title: "Heavyweight Sweatshirt",
      price: "$44.99",
      description: "Heavyweight sweatshirt with durable construction.",
      affiliateLink: "https://example.com/sweatshirt-10"
    },
    {
      title: "Embossed Sweatshirt",
      price: "$40.99",
      originalPrice: "$60.99",
      description: "Embossed sweatshirt with raised texture details.",
      affiliateLink: "https://example.com/sweatshirt-11"
    },
    {
      title: "Minimalist Sweatshirt",
      price: "$33.99",
      description: "Clean minimalist sweatshirt with simple design.",
      affiliateLink: "https://example.com/sweatshirt-12"
    },
    {
      title: "Distressed Sweatshirt",
      price: "$41.99",
      originalPrice: "$61.99",
      description: "Distressed sweatshirt with vintage worn appearance.",
      affiliateLink: "https://example.com/sweatshirt-13"
    },
    {
      title: "Athletic Sweatshirt",
      price: "$39.99",
      description: "Athletic sweatshirt with performance fabric blend.",
      affiliateLink: "https://example.com/sweatshirt-14"
    },
    {
      title: "Organic Cotton Sweatshirt",
      price: "$46.99",
      originalPrice: "$66.99",
      description: "Eco-friendly organic cotton sweatshirt with sustainable materials.",
      affiliateLink: "https://example.com/sweatshirt-15"
    },
    {
      title: "Premium Sweatshirt",
      price: "$49.99",
      description: "Premium sweatshirt with superior fabric and construction.",
      affiliateLink: "https://example.com/sweatshirt-16"
    }
  ];

  const coatsBlazers = [
    {
      title: "Wool Overcoat",
      price: "$159.99",
      originalPrice: "$199.99",
      description: "Elegant wool overcoat for formal winter occasions.",
      affiliateLink: "https://example.com/coat-1"
    },
    {
      title: "Trench Coat",
      price: "$139.99",
      description: "Classic trench coat with water-resistant fabric.",
      affiliateLink: "https://example.com/coat-2"
    },
    {
      title: "Pea Coat",
      price: "$119.99",
      description: "Traditional navy pea coat with double-breasted design.",
      affiliateLink: "https://example.com/coat-3"
    },
    {
      title: "Winter Blazer",
      price: "$99.99",
      originalPrice: "$129.99",
      description: "Warm winter blazer suitable for business and casual wear.",
      affiliateLink: "https://example.com/blazer-1"
    },
    {
      title: "Cashmere Overcoat",
      price: "$249.99",
      originalPrice: "$299.99",
      description: "Luxurious cashmere overcoat with premium warmth and style.",
      affiliateLink: "https://example.com/coat-4"
    },
    {
      title: "Double-Breasted Coat",
      price: "$179.99",
      description: "Classic double-breasted coat with timeless appeal.",
      affiliateLink: "https://example.com/coat-5"
    },
    {
      title: "Duffle Coat",
      price: "$129.99",
      originalPrice: "$169.99",
      description: "Traditional duffle coat with toggle closures and hood.",
      affiliateLink: "https://example.com/coat-6"
    },
    {
      title: "Wool Blazer",
      price: "$89.99",
      description: "Wool blazer perfect for professional winter styling.",
      affiliateLink: "https://example.com/blazer-2"
    },
    {
      title: "Long Wool Coat",
      price: "$189.99",
      originalPrice: "$229.99",
      description: "Long wool coat providing extended coverage and elegance.",
      affiliateLink: "https://example.com/coat-7"
    },
    {
      title: "Chesterfield Coat",
      price: "$199.99",
      description: "Classic Chesterfield coat with velvet collar detail.",
      affiliateLink: "https://example.com/coat-8"
    },
    {
      title: "Tweed Blazer",
      price: "$109.99",
      originalPrice: "$139.99",
      description: "Traditional tweed blazer with country gentleman styling.",
      affiliateLink: "https://example.com/blazer-3"
    },
    {
      title: "Car Coat",
      price: "$149.99",
      description: "Practical car coat with modern styling and functionality.",
      affiliateLink: "https://example.com/coat-9"
    },
    {
      title: "Corduroy Blazer",
      price: "$94.99",
      originalPrice: "$124.99",
      description: "Corduroy blazer with textured appeal and comfort.",
      affiliateLink: "https://example.com/blazer-4"
    },
    {
      title: "Topcoat",
      price: "$169.99",
      description: "Sophisticated topcoat perfect for business and formal wear.",
      affiliateLink: "https://example.com/coat-10"
    },
    {
      title: "Velvet Blazer",
      price: "$119.99",
      originalPrice: "$149.99",
      description: "Luxurious velvet blazer for special winter occasions.",
      affiliateLink: "https://example.com/blazer-5"
    },
    {
      title: "Military Coat",
      price: "$134.99",
      description: "Military-inspired coat with authentic details and warmth.",
      affiliateLink: "https://example.com/coat-11"
    }
  ];

  const thermals = [
    {
      title: "Thermal Base Layer Set",
      price: "$29.99",
      originalPrice: "$44.99",
      description: "Complete thermal underwear set for extreme cold.",
      affiliateLink: "https://example.com/thermal-1"
    },
    {
      title: "Merino Wool Thermals",
      price: "$49.99",
      description: "Premium merino wool thermal underwear.",
      affiliateLink: "https://example.com/thermal-2"
    },
    {
      title: "Long Sleeve Thermal Top",
      price: "$19.99",
      description: "Comfortable long sleeve thermal shirt.",
      affiliateLink: "https://example.com/thermal-3"
    },
    {
      title: "Thermal Leggings",
      price: "$24.99",
      originalPrice: "$34.99",
      description: "Warm thermal leggings for layering under pants.",
      affiliateLink: "https://example.com/thermal-4"
    },
    {
      title: "Silk Thermal Set",
      price: "$59.99",
      originalPrice: "$79.99",
      description: "Luxurious silk thermal set with natural temperature regulation.",
      affiliateLink: "https://example.com/thermal-5"
    },
    {
      title: "Moisture-Wicking Thermals",
      price: "$34.99",
      description: "Performance thermals with moisture-wicking technology.",
      affiliateLink: "https://example.com/thermal-6"
    },
    {
      title: "Bamboo Thermal Underwear",
      price: "$39.99",
      originalPrice: "$54.99",
      description: "Eco-friendly bamboo thermal underwear with natural properties.",
      affiliateLink: "https://example.com/thermal-7"
    },
    {
      title: "Heavyweight Thermal Set",
      price: "$44.99",
      description: "Heavyweight thermal set for extreme cold conditions.",
      affiliateLink: "https://example.com/thermal-8"
    },
    {
      title: "Compression Thermal Wear",
      price: "$42.99",
      originalPrice: "$57.99",
      description: "Compression thermal wear for enhanced performance and warmth.",
      affiliateLink: "https://example.com/thermal-9"
    },
    {
      title: "Thermal Henley Shirt",
      price: "$26.99",
      description: "Thermal henley shirt with button placket styling.",
      affiliateLink: "https://example.com/thermal-10"
    },
    {
      title: "Fleece-Lined Thermals",
      price: "$37.99",
      originalPrice: "$52.99",
      description: "Fleece-lined thermals for maximum warmth and comfort.",
      affiliateLink: "https://example.com/thermal-11"
    },
    {
      title: "Thermal Union Suit",
      price: "$32.99",
      description: "One-piece thermal union suit for full-body warmth.",
      affiliateLink: "https://example.com/thermal-12"
    },
    {
      title: "Seamless Thermal Set",
      price: "$41.99",
      originalPrice: "$56.99",
      description: "Seamless thermal set for comfort without chafing.",
      affiliateLink: "https://example.com/thermal-13"
    },
    {
      title: "Thermal Crew Neck Shirt",
      price: "$22.99",
      description: "Basic thermal crew neck shirt for layering.",
      affiliateLink: "https://example.com/thermal-14"
    },
    {
      title: "Odor-Resistant Thermals",
      price: "$46.99",
      originalPrice: "$61.99",
      description: "Thermal underwear with odor-resistant treatment.",
      affiliateLink: "https://example.com/thermal-15"
    },
    {
      title: "Premium Thermal Set",
      price: "$54.99",
      description: "Premium thermal set with superior fabric and construction.",
      affiliateLink: "https://example.com/thermal-16"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            <span className="text-yellow-500">Winter Wear</span> Collection
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stay warm and stylish with our comprehensive winter collection. From insulated jackets 
            to cozy layers, we have everything you need for the cold season.
          </p>
        </div>

        <CategorySection title="Jackets (Bomber, Puffer, Biker)" products={jackets} />
        <CategorySection title="Hoodies" products={hoodies} />
        <CategorySection title="Sweatshirts" products={sweatshirts} />
        <CategorySection title="Coats & Blazers" products={coatsBlazers} />
        <CategorySection title="Thermals" products={thermals} />
      </div>
    </div>
  );
};

export default WinterWearPage;