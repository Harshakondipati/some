import React from 'react';
import CategorySection from '../components/CategorySection';

const EthnicWearPage = () => {
  const kurtaPajama = [
    {
      title: "Cotton Kurta Pajama Set",
      price: "$45.99",
      originalPrice: "$65.99",
      description: "Comfortable cotton kurta pajama perfect for festivals and casual wear.",
      affiliateLink: "https://example.com/kurta-pajama-1"
    },
    {
      title: "Linen Kurta Pajama",
      price: "$52.99",
      description: "Breathable linen fabric kurta pajama ideal for summer occasions.",
      affiliateLink: "https://example.com/kurta-pajama-2"
    },
    {
      title: "Silk Kurta Pajama",
      price: "$89.99",
      description: "Luxurious silk kurta pajama for special occasions and celebrations.",
      affiliateLink: "https://example.com/kurta-pajama-3"
    },
    {
      title: "Printed Kurta Pajama",
      price: "$48.99",
      originalPrice: "$68.99",
      description: "Elegant printed design kurta pajama with traditional patterns.",
      affiliateLink: "https://example.com/kurta-pajama-4"
    },
    {
      title: "White Cotton Kurta Pajama",
      price: "$42.99",
      originalPrice: "$62.99",
      description: "Classic white cotton kurta pajama for religious occasions.",
      affiliateLink: "https://example.com/kurta-pajama-5"
    },
    {
      title: "Embroidered Kurta Pajama",
      price: "$67.99",
      description: "Beautifully embroidered kurta pajama with intricate designs.",
      affiliateLink: "https://example.com/kurta-pajama-6"
    },
    {
      title: "Khadi Kurta Pajama",
      price: "$54.99",
      originalPrice: "$74.99",
      description: "Traditional khadi fabric kurta pajama with authentic feel.",
      affiliateLink: "https://example.com/kurta-pajama-7"
    },
    {
      title: "Designer Kurta Pajama",
      price: "$79.99",
      description: "Designer kurta pajama with contemporary styling and comfort.",
      affiliateLink: "https://example.com/kurta-pajama-8"
    },
    {
      title: "Festive Kurta Pajama",
      price: "$59.99",
      originalPrice: "$79.99",
      description: "Festive kurta pajama perfect for celebrations and gatherings.",
      affiliateLink: "https://example.com/kurta-pajama-9"
    },
    {
      title: "Casual Kurta Pajama",
      price: "$39.99",
      description: "Casual kurta pajama for everyday comfortable ethnic wear.",
      affiliateLink: "https://example.com/kurta-pajama-10"
    },
    {
      title: "Wedding Kurta Pajama",
      price: "$94.99",
      originalPrice: "$114.99",
      description: "Wedding kurta pajama with premium fabric and elegant styling.",
      affiliateLink: "https://example.com/kurta-pajama-11"
    },
    {
      title: "Handloom Kurta Pajama",
      price: "$64.99",
      description: "Handloom kurta pajama supporting traditional craftsmanship.",
      affiliateLink: "https://example.com/kurta-pajama-12"
    },
    {
      title: "Organic Cotton Kurta Pajama",
      price: "$49.99",
      originalPrice: "$69.99",
      description: "Eco-friendly organic cotton kurta pajama with natural comfort.",
      affiliateLink: "https://example.com/kurta-pajama-13"
    },
    {
      title: "Collar Kurta Pajama",
      price: "$56.99",
      description: "Modern collar kurta pajama with contemporary appeal.",
      affiliateLink: "https://example.com/kurta-pajama-14"
    },
    {
      title: "Short Kurta Pajama",
      price: "$44.99",
      originalPrice: "$64.99",
      description: "Short kurta pajama perfect for casual ethnic styling.",
      affiliateLink: "https://example.com/kurta-pajama-15"
    },
    {
      title: "Pathani Kurta Pajama",
      price: "$51.99",
      description: "Traditional Pathani style kurta pajama with authentic cut.",
      affiliateLink: "https://example.com/kurta-pajama-16"
    }
  ];

  const sherwani = [
    {
      title: "Wedding Sherwani",
      price: "$199.99",
      originalPrice: "$249.99",
      description: "Ornate wedding sherwani with intricate embroidery and premium fabric.",
      affiliateLink: "https://example.com/sherwani-1"
    },
    {
      title: "Classic Sherwani",
      price: "$149.99",
      description: "Traditional sherwani with classic design and comfortable fit.",
      affiliateLink: "https://example.com/sherwani-2"
    },
    {
      title: "Designer Sherwani",
      price: "$279.99",
      description: "Designer sherwani with contemporary styling and luxury materials.",
      affiliateLink: "https://example.com/sherwani-3"
    },
    {
      title: "Bandhgala Sherwani",
      price: "$169.99",
      originalPrice: "$219.99",
      description: "Modern bandhgala style sherwani perfect for formal events.",
      affiliateLink: "https://example.com/sherwani-4"
    },
    {
      title: "Silk Sherwani",
      price: "$189.99",
      originalPrice: "$239.99",
      description: "Luxurious silk sherwani with rich texture and elegant drape.",
      affiliateLink: "https://example.com/sherwani-5"
    },
    {
      title: "Embroidered Sherwani",
      price: "$229.99",
      description: "Heavily embroidered sherwani with traditional motifs and patterns.",
      affiliateLink: "https://example.com/sherwani-6"
    },
    {
      title: "Velvet Sherwani",
      price: "$259.99",
      originalPrice: "$309.99",
      description: "Rich velvet sherwani perfect for winter weddings and events.",
      affiliateLink: "https://example.com/sherwani-7"
    },
    {
      title: "Brocade Sherwani",
      price: "$219.99",
      description: "Elegant brocade sherwani with intricate woven patterns.",
      affiliateLink: "https://example.com/sherwani-8"
    },
    {
      title: "Groom Sherwani",
      price: "$299.99",
      originalPrice: "$349.99",
      description: "Special groom sherwani with premium embellishments and fit.",
      affiliateLink: "https://example.com/sherwani-9"
    },
    {
      title: "Jodhpuri Sherwani",
      price: "$179.99",
      description: "Jodhpuri style sherwani with royal heritage and modern comfort.",
      affiliateLink: "https://example.com/sherwani-10"
    },
    {
      title: "Achkan Sherwani",
      price: "$194.99",
      originalPrice: "$244.99",
      description: "Traditional achkan style sherwani with authentic styling.",
      affiliateLink: "https://example.com/sherwani-11"
    },
    {
      title: "Indo-Western Sherwani",
      price: "$209.99",
      description: "Indo-western sherwani blending traditional and modern elements.",
      affiliateLink: "https://example.com/sherwani-12"
    },
    {
      title: "Nehru Collar Sherwani",
      price: "$164.99",
      originalPrice: "$214.99",
      description: "Nehru collar sherwani with sophisticated contemporary appeal.",
      affiliateLink: "https://example.com/sherwani-13"
    },
    {
      title: "Dupion Silk Sherwani",
      price: "$234.99",
      description: "Premium dupion silk sherwani with lustrous finish.",
      affiliateLink: "https://example.com/sherwani-14"
    },
    {
      title: "Zardozi Sherwani",
      price: "$319.99",
      originalPrice: "$369.99",
      description: "Zardozi embroidered sherwani with gold thread work.",
      affiliateLink: "https://example.com/sherwani-15"
    },
    {
      title: "Royal Sherwani",
      price: "$349.99",
      description: "Royal sherwani with regal styling and premium craftsmanship.",
      affiliateLink: "https://example.com/sherwani-16"
    }
  ];

  const nehruJacket = [
    {
      title: "Classic Nehru Jacket",
      price: "$39.99",
      originalPrice: "$59.99",
      description: "Traditional Nehru jacket perfect for layering over kurtas.",
      affiliateLink: "https://example.com/nehru-jacket-1"
    },
    {
      title: "Silk Nehru Jacket",
      price: "$54.99",
      description: "Elegant silk Nehru jacket with premium finish.",
      affiliateLink: "https://example.com/nehru-jacket-2"
    },
    {
      title: "Cotton Nehru Jacket",
      price: "$34.99",
      description: "Comfortable cotton Nehru jacket for casual ethnic wear.",
      affiliateLink: "https://example.com/nehru-jacket-3"
    },
    {
      title: "Embroidered Nehru Jacket",
      price: "$64.99",
      originalPrice: "$84.99",
      description: "Beautifully embroidered Nehru jacket for special occasions.",
      affiliateLink: "https://example.com/nehru-jacket-4"
    },
    {
      title: "Linen Nehru Jacket",
      price: "$44.99",
      originalPrice: "$64.99",
      description: "Breathable linen Nehru jacket perfect for summer events.",
      affiliateLink: "https://example.com/nehru-jacket-5"
    },
    {
      title: "Velvet Nehru Jacket",
      price: "$69.99",
      description: "Luxurious velvet Nehru jacket for formal occasions.",
      affiliateLink: "https://example.com/nehru-jacket-6"
    },
    {
      title: "Brocade Nehru Jacket",
      price: "$59.99",
      originalPrice: "$79.99",
      description: "Elegant brocade Nehru jacket with traditional patterns.",
      affiliateLink: "https://example.com/nehru-jacket-7"
    },
    {
      title: "Khadi Nehru Jacket",
      price: "$42.99",
      description: "Traditional khadi Nehru jacket supporting local artisans.",
      affiliateLink: "https://example.com/nehru-jacket-8"
    },
    {
      title: "Designer Nehru Jacket",
      price: "$74.99",
      originalPrice: "$94.99",
      description: "Designer Nehru jacket with contemporary styling.",
      affiliateLink: "https://example.com/nehru-jacket-9"
    },
    {
      title: "Printed Nehru Jacket",
      price: "$47.99",
      description: "Stylish printed Nehru jacket with modern patterns.",
      affiliateLink: "https://example.com/nehru-jacket-10"
    },
    {
      title: "Bandhgala Nehru Jacket",
      price: "$52.99",
      originalPrice: "$72.99",
      description: "Bandhgala style Nehru jacket with formal appeal.",
      affiliateLink: "https://example.com/nehru-jacket-11"
    },
    {
      title: "Dupion Silk Nehru Jacket",
      price: "$62.99",
      description: "Premium dupion silk Nehru jacket with lustrous finish.",
      affiliateLink: "https://example.com/nehru-jacket-12"
    },
    {
      title: "Casual Nehru Jacket",
      price: "$37.99",
      originalPrice: "$57.99",
      description: "Casual Nehru jacket for everyday ethnic styling.",
      affiliateLink: "https://example.com/nehru-jacket-13"
    },
    {
      title: "Formal Nehru Jacket",
      price: "$56.99",
      description: "Formal Nehru jacket perfect for business ethnic wear.",
      affiliateLink: "https://example.com/nehru-jacket-14"
    },
    {
      title: "Wedding Nehru Jacket",
      price: "$79.99",
      originalPrice: "$99.99",
      description: "Wedding Nehru jacket with premium embellishments.",
      affiliateLink: "https://example.com/nehru-jacket-15"
    },
    {
      title: "Modi Jacket",
      price: "$49.99",
      description: "Popular Modi style jacket with contemporary appeal.",
      affiliateLink: "https://example.com/nehru-jacket-16"
    }
  ];

  const dhotiKurta = [
    {
      title: "Traditional Dhoti Kurta",
      price: "$55.99",
      originalPrice: "$75.99",
      description: "Complete traditional dhoti kurta set for cultural events.",
      affiliateLink: "https://example.com/dhoti-kurta-1"
    },
    {
      title: "Cotton Dhoti Kurta",
      price: "$49.99",
      description: "Comfortable cotton dhoti kurta perfect for festivals.",
      affiliateLink: "https://example.com/dhoti-kurta-2"
    },
    {
      title: "Silk Dhoti Kurta",
      price: "$79.99",
      description: "Luxurious silk dhoti kurta for ceremonial occasions.",
      affiliateLink: "https://example.com/dhoti-kurta-3"
    },
    {
      title: "Festive Dhoti Kurta",
      price: "$59.99",
      originalPrice: "$79.99",
      description: "Festive dhoti kurta with decorative borders and patterns.",
      affiliateLink: "https://example.com/dhoti-kurta-4"
    },
    {
      title: "White Dhoti Kurta",
      price: "$52.99",
      originalPrice: "$72.99",
      description: "Pure white dhoti kurta for religious and spiritual occasions.",
      affiliateLink: "https://example.com/dhoti-kurta-5"
    },
    {
      title: "Handloom Dhoti Kurta",
      price: "$64.99",
      description: "Handloom dhoti kurta supporting traditional weaving.",
      affiliateLink: "https://example.com/dhoti-kurta-6"
    },
    {
      title: "Khadi Dhoti Kurta",
      price: "$57.99",
      originalPrice: "$77.99",
      description: "Khadi dhoti kurta with authentic traditional feel.",
      affiliateLink: "https://example.com/dhoti-kurta-7"
    },
    {
      title: "Embroidered Dhoti Kurta",
      price: "$69.99",
      description: "Embroidered dhoti kurta with intricate traditional designs.",
      affiliateLink: "https://example.com/dhoti-kurta-8"
    },
    {
      title: "Wedding Dhoti Kurta",
      price: "$84.99",
      originalPrice: "$104.99",
      description: "Wedding dhoti kurta with premium fabric and styling.",
      affiliateLink: "https://example.com/dhoti-kurta-9"
    },
    {
      title: "Casual Dhoti Kurta",
      price: "$44.99",
      description: "Casual dhoti kurta for comfortable ethnic wear.",
      affiliateLink: "https://example.com/dhoti-kurta-10"
    },
    {
      title: "Linen Dhoti Kurta",
      price: "$62.99",
      originalPrice: "$82.99",
      description: "Breathable linen dhoti kurta perfect for summer.",
      affiliateLink: "https://example.com/dhoti-kurta-11"
    },
    {
      title: "Designer Dhoti Kurta",
      price: "$74.99",
      description: "Designer dhoti kurta with contemporary ethnic styling.",
      affiliateLink: "https://example.com/dhoti-kurta-12"
    },
    {
      title: "Printed Dhoti Kurta",
      price: "$54.99",
      originalPrice: "$74.99",
      description: "Printed dhoti kurta with traditional motifs and patterns.",
      affiliateLink: "https://example.com/dhoti-kurta-13"
    },
    {
      title: "Organic Cotton Dhoti Kurta",
      price: "$59.99",
      description: "Eco-friendly organic cotton dhoti kurta with natural comfort.",
      affiliateLink: "https://example.com/dhoti-kurta-14"
    },
    {
      title: "Ceremonial Dhoti Kurta",
      price: "$79.99",
      originalPrice: "$99.99",
      description: "Ceremonial dhoti kurta for special religious occasions.",
      affiliateLink: "https://example.com/dhoti-kurta-15"
    },
    {
      title: "Regional Dhoti Kurta",
      price: "$67.99",
      description: "Regional style dhoti kurta with authentic cultural styling.",
      affiliateLink: "https://example.com/dhoti-kurta-16"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            <span className="text-yellow-500">Ethnic Wear</span> Collection
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Embrace tradition with our authentic ethnic wear collection. Perfect for festivals, 
            weddings, and cultural celebrations.
          </p>
        </div>

        <CategorySection title="Kurta Pajama" products={kurtaPajama} />
        <CategorySection title="Sherwani" products={sherwani} />
        <CategorySection title="Nehru Jacket" products={nehruJacket} />
        <CategorySection title="Dhoti Kurta" products={dhotiKurta} />
      </div>
    </div>
  );
};

export default EthnicWearPage;