import React from 'react';
import CategorySection from '../components/CategorySection';

const TrousersJeansPage = () => {
  const relaxedTrousers = [
    {
      title: "Relaxed Fit Chinos",
      price: "$49.99",
      originalPrice: "$69.99",
      description: "Comfortable relaxed fit chinos perfect for casual and semi-formal wear.",
      affiliateLink: "https://example.com/relaxed-trousers-1"
    },
    {
      title: "Loose Fit Cotton Trousers",
      price: "$45.99",
      description: "Breathable cotton fabric with relaxed, comfortable fit.",
      affiliateLink: "https://example.com/relaxed-trousers-2"
    },
    {
      title: "Wide Leg Trousers",
      price: "$52.99",
      description: "Trendy wide leg design with modern relaxed styling.",
      affiliateLink: "https://example.com/relaxed-trousers-3"
    },
    {
      title: "Baggy Fit Trousers",
      price: "$47.99",
      originalPrice: "$67.99",
      description: "Contemporary baggy fit perfect for streetwear styling.",
      affiliateLink: "https://example.com/relaxed-trousers-4"
    },
    {
      title: "Comfort Fit Khakis",
      price: "$46.99",
      originalPrice: "$66.99",
      description: "Ultimate comfort with relaxed khaki styling.",
      affiliateLink: "https://example.com/relaxed-trousers-5"
    },
    {
      title: "Loose Cotton Pants",
      price: "$44.99",
      description: "Loose fitting cotton pants for maximum comfort.",
      affiliateLink: "https://example.com/relaxed-trousers-6"
    },
    {
      title: "Relaxed Cargo Pants",
      price: "$51.99",
      originalPrice: "$71.99",
      description: "Relaxed cargo pants with multiple utility pockets.",
      affiliateLink: "https://example.com/relaxed-trousers-7"
    },
    {
      title: "Wide Leg Chinos",
      price: "$48.99",
      description: "Modern wide leg chinos with contemporary styling.",
      affiliateLink: "https://example.com/relaxed-trousers-8"
    },
    {
      title: "Baggy Cotton Trousers",
      price: "$46.99",
      originalPrice: "$66.99",
      description: "Baggy cotton trousers with streetwear appeal.",
      affiliateLink: "https://example.com/relaxed-trousers-9"
    },
    {
      title: "Relaxed Linen Pants",
      price: "$53.99",
      description: "Breathable linen with relaxed comfortable fit.",
      affiliateLink: "https://example.com/relaxed-trousers-10"
    },
    {
      title: "Loose Fit Khakis",
      price: "$45.99",
      originalPrice: "$65.99",
      description: "Classic khaki color with loose comfortable fit.",
      affiliateLink: "https://example.com/relaxed-trousers-11"
    },
    {
      title: "Wide Leg Cotton Pants",
      price: "$50.99",
      description: "Wide leg cotton pants with modern relaxed styling.",
      affiliateLink: "https://example.com/relaxed-trousers-12"
    },
    {
      title: "Baggy Fit Chinos",
      price: "$48.99",
      originalPrice: "$68.99",
      description: "Baggy fit chinos perfect for casual wear.",
      affiliateLink: "https://example.com/relaxed-trousers-13"
    },
    {
      title: "Relaxed Canvas Pants",
      price: "$47.99",
      description: "Durable canvas fabric with relaxed comfortable fit.",
      affiliateLink: "https://example.com/relaxed-trousers-14"
    },
    {
      title: "Loose Utility Pants",
      price: "$52.99",
      originalPrice: "$72.99",
      description: "Utility-style pants with loose comfortable fit.",
      affiliateLink: "https://example.com/relaxed-trousers-15"
    },
    {
      title: "Wide Leg Cargo Pants",
      price: "$54.99",
      description: "Wide leg cargo pants with multiple pockets.",
      affiliateLink: "https://example.com/relaxed-trousers-16"
    }
  ];

  const chinos = [
    {
      title: "Classic Khaki Chinos",
      price: "$42.99",
      originalPrice: "$62.99",
      description: "Timeless khaki chinos suitable for both casual and business casual.",
      affiliateLink: "https://example.com/chinos-1"
    },
    {
      title: "Navy Blue Chinos",
      price: "$44.99",
      description: "Versatile navy chinos that pair well with any top.",
      affiliateLink: "https://example.com/chinos-2"
    },
    {
      title: "Olive Green Chinos",
      price: "$43.99",
      description: "Modern olive green color with contemporary fit.",
      affiliateLink: "https://example.com/chinos-3"
    },
    {
      title: "Charcoal Grey Chinos",
      price: "$46.99",
      originalPrice: "$66.99",
      description: "Sophisticated charcoal grey perfect for smart casual looks.",
      affiliateLink: "https://example.com/chinos-4"
    },
    {
      title: "Beige Chinos",
      price: "$41.99",
      originalPrice: "$61.99",
      description: "Classic beige chinos with versatile styling options.",
      affiliateLink: "https://example.com/chinos-5"
    },
    {
      title: "Black Chinos",
      price: "$45.99",
      description: "Sleek black chinos perfect for evening casual wear.",
      affiliateLink: "https://example.com/chinos-6"
    },
    {
      title: "Burgundy Chinos",
      price: "$47.99",
      originalPrice: "$67.99",
      description: "Rich burgundy color for distinctive casual styling.",
      affiliateLink: "https://example.com/chinos-7"
    },
    {
      title: "Stone Chinos",
      price: "$43.99",
      description: "Natural stone color with premium cotton construction.",
      affiliateLink: "https://example.com/chinos-8"
    },
    {
      title: "Forest Green Chinos",
      price: "$44.99",
      originalPrice: "$64.99",
      description: "Deep forest green with modern tailored fit.",
      affiliateLink: "https://example.com/chinos-9"
    },
    {
      title: "Rust Orange Chinos",
      price: "$46.99",
      description: "Warm rust orange color for autumn styling.",
      affiliateLink: "https://example.com/chinos-10"
    },
    {
      title: "Steel Blue Chinos",
      price: "$45.99",
      originalPrice: "$65.99",
      description: "Modern steel blue with contemporary fit.",
      affiliateLink: "https://example.com/chinos-11"
    },
    {
      title: "Mustard Yellow Chinos",
      price: "$47.99",
      description: "Bold mustard yellow for statement casual looks.",
      affiliateLink: "https://example.com/chinos-12"
    },
    {
      title: "Cream Chinos",
      price: "$42.99",
      originalPrice: "$62.99",
      description: "Elegant cream color perfect for summer wear.",
      affiliateLink: "https://example.com/chinos-13"
    },
    {
      title: "Maroon Chinos",
      price: "$46.99",
      description: "Deep maroon color with premium fabric quality.",
      affiliateLink: "https://example.com/chinos-14"
    },
    {
      title: "Teal Chinos",
      price: "$45.99",
      originalPrice: "$65.99",
      description: "Distinctive teal color with modern styling.",
      affiliateLink: "https://example.com/chinos-15"
    },
    {
      title: "Camel Chinos",
      price: "$44.99",
      description: "Warm camel color with classic chino styling.",
      affiliateLink: "https://example.com/chinos-16"
    }
  ];

  const pleatedTrousers = [
    {
      title: "Classic Pleated Trousers",
      price: "$59.99",
      originalPrice: "$79.99",
      description: "Traditional pleated design with tailored fit and premium fabric.",
      affiliateLink: "https://example.com/pleated-trousers-1"
    },
    {
      title: "Double Pleated Dress Pants",
      price: "$62.99",
      description: "Elegant double pleats perfect for formal occasions.",
      affiliateLink: "https://example.com/pleated-trousers-2"
    },
    {
      title: "Single Pleat Trousers",
      price: "$57.99",
      description: "Subtle single pleat with modern tailored fit.",
      affiliateLink: "https://example.com/pleated-trousers-3"
    },
    {
      title: "Wool Pleated Trousers",
      price: "$74.99",
      originalPrice: "$94.99",
      description: "Premium wool fabric with classic pleated styling.",
      affiliateLink: "https://example.com/pleated-trousers-4"
    },
    {
      title: "Navy Pleated Pants",
      price: "$58.99",
      originalPrice: "$78.99",
      description: "Classic navy pleated pants for business wear.",
      affiliateLink: "https://example.com/pleated-trousers-5"
    },
    {
      title: "Charcoal Pleated Trousers",
      price: "$61.99",
      description: "Sophisticated charcoal with traditional pleating.",
      affiliateLink: "https://example.com/pleated-trousers-6"
    },
    {
      title: "Black Pleated Dress Pants",
      price: "$63.99",
      originalPrice: "$83.99",
      description: "Formal black pleated pants for special occasions.",
      affiliateLink: "https://example.com/pleated-trousers-7"
    },
    {
      title: "Brown Pleated Trousers",
      price: "$60.99",
      description: "Rich brown color with classic pleated design.",
      affiliateLink: "https://example.com/pleated-trousers-8"
    },
    {
      title: "Grey Pleated Pants",
      price: "$59.99",
      originalPrice: "$79.99",
      description: "Versatile grey with traditional pleated styling.",
      affiliateLink: "https://example.com/pleated-trousers-9"
    },
    {
      title: "Pinstripe Pleated Trousers",
      price: "$67.99",
      description: "Elegant pinstripe pattern with pleated design.",
      affiliateLink: "https://example.com/pleated-trousers-10"
    },
    {
      title: "Formal Pleated Pants",
      price: "$64.99",
      originalPrice: "$84.99",
      description: "Professional formal pants with pleated front.",
      affiliateLink: "https://example.com/pleated-trousers-11"
    },
    {
      title: "Wool Blend Pleated Trousers",
      price: "$69.99",
      description: "Premium wool blend with classic pleating.",
      affiliateLink: "https://example.com/pleated-trousers-12"
    },
    {
      title: "Business Pleated Pants",
      price: "$61.99",
      originalPrice: "$81.99",
      description: "Business-appropriate pleated pants with modern fit.",
      affiliateLink: "https://example.com/pleated-trousers-13"
    },
    {
      title: "Dress Pleated Trousers",
      price: "$65.99",
      description: "Dress trousers with elegant pleated front design.",
      affiliateLink: "https://example.com/pleated-trousers-14"
    },
    {
      title: "Executive Pleated Pants",
      price: "$71.99",
      originalPrice: "$91.99",
      description: "Executive-level pleated pants with superior quality.",
      affiliateLink: "https://example.com/pleated-trousers-15"
    },
    {
      title: "Traditional Pleated Trousers",
      price: "$63.99",
      description: "Traditional pleated design with timeless appeal.",
      affiliateLink: "https://example.com/pleated-trousers-16"
    }
  ];

  const slimFitTrousers = [
    {
      title: "Slim Fit Dress Pants",
      price: "$48.99",
      originalPrice: "$68.99",
      description: "Modern slim fit perfect for contemporary professional looks.",
      affiliateLink: "https://example.com/slim-trousers-1"
    },
    {
      title: "Tapered Leg Trousers",
      price: "$51.99",
      description: "Sleek tapered design with comfortable slim fit.",
      affiliateLink: "https://example.com/slim-trousers-2"
    },
    {
      title: "Skinny Fit Chinos",
      price: "$46.99",
      description: "Ultra-slim fit chinos for a sharp, modern silhouette.",
      affiliateLink: "https://example.com/slim-trousers-3"
    },
    {
      title: "Stretch Slim Trousers",
      price: "$53.99",
      originalPrice: "$73.99",
      description: "Comfortable stretch fabric with flattering slim fit.",
      affiliateLink: "https://example.com/slim-trousers-4"
    },
    {
      title: "Slim Fit Khakis",
      price: "$47.99",
      originalPrice: "$67.99",
      description: "Classic khaki color with modern slim fit styling.",
      affiliateLink: "https://example.com/slim-trousers-5"
    },
    {
      title: "Narrow Leg Trousers",
      price: "$50.99",
      description: "Narrow leg design with contemporary slim fit.",
      affiliateLink: "https://example.com/slim-trousers-6"
    },
    {
      title: "Slim Business Pants",
      price: "$52.99",
      originalPrice: "$72.99",
      description: "Business-appropriate slim fit with professional styling.",
      affiliateLink: "https://example.com/slim-trousers-7"
    },
    {
      title: "Fitted Dress Trousers",
      price: "$49.99",
      description: "Fitted design perfect for formal occasions.",
      affiliateLink: "https://example.com/slim-trousers-8"
    },
    {
      title: "Slim Fit Cotton Pants",
      price: "$48.99",
      originalPrice: "$68.99",
      description: "Cotton fabric with comfortable slim fit design.",
      affiliateLink: "https://example.com/slim-trousers-9"
    },
    {
      title: "Tapered Chinos",
      price: "$51.99",
      description: "Tapered chinos with modern slim fit styling.",
      affiliateLink: "https://example.com/slim-trousers-10"
    },
    {
      title: "Slim Formal Pants",
      price: "$54.99",
      originalPrice: "$74.99",
      description: "Formal pants with sleek slim fit design.",
      affiliateLink: "https://example.com/slim-trousers-11"
    },
    {
      title: "Skinny Dress Pants",
      price: "$50.99",
      description: "Skinny fit dress pants for contemporary styling.",
      affiliateLink: "https://example.com/slim-trousers-12"
    },
    {
      title: "Slim Fit Wool Trousers",
      price: "$59.99",
      originalPrice: "$79.99",
      description: "Premium wool with modern slim fit tailoring.",
      affiliateLink: "https://example.com/slim-trousers-13"
    },
    {
      title: "Narrow Fit Chinos",
      price: "$49.99",
      description: "Narrow fit chinos with contemporary styling.",
      affiliateLink: "https://example.com/slim-trousers-14"
    },
    {
      title: "Slim Cut Trousers",
      price: "$52.99",
      originalPrice: "$72.99",
      description: "Slim cut design with modern professional appeal.",
      affiliateLink: "https://example.com/slim-trousers-15"
    },
    {
      title: "Fitted Business Trousers",
      price: "$55.99",
      description: "Fitted business trousers with slim professional styling.",
      affiliateLink: "https://example.com/slim-trousers-16"
    }
  ];

  const tailoredTrousers = [
    {
      title: "Tailored Fit Wool Trousers",
      price: "$79.99",
      originalPrice: "$99.99",
      description: "Premium wool with expert tailoring for perfect fit.",
      affiliateLink: "https://example.com/tailored-trousers-1"
    },
    {
      title: "Custom Tailored Pants",
      price: "$85.99",
      description: "Professional tailoring with attention to every detail.",
      affiliateLink: "https://example.com/tailored-trousers-2"
    },
    {
      title: "Italian Tailored Trousers",
      price: "$92.99",
      description: "Italian craftsmanship with superior fabric and fit.",
      affiliateLink: "https://example.com/tailored-trousers-3"
    },
    {
      title: "Bespoke Style Trousers",
      price: "$88.99",
      originalPrice: "$108.99",
      description: "Bespoke-inspired design with impeccable tailoring.",
      affiliateLink: "https://example.com/tailored-trousers-4"
    },
    {
      title: "Handcrafted Trousers",
      price: "$94.99",
      originalPrice: "$114.99",
      description: "Handcrafted with premium materials and expert tailoring.",
      affiliateLink: "https://example.com/tailored-trousers-5"
    },
    {
      title: "Savile Row Style Trousers",
      price: "$89.99",
      description: "Savile Row inspired tailoring with classic styling.",
      affiliateLink: "https://example.com/tailored-trousers-6"
    },
    {
      title: "Master Tailored Pants",
      price: "$91.99",
      originalPrice: "$111.99",
      description: "Master tailor crafted with exceptional attention to detail.",
      affiliateLink: "https://example.com/tailored-trousers-7"
    },
    {
      title: "Precision Fit Trousers",
      price: "$87.99",
      description: "Precision tailoring for the perfect fit and comfort.",
      affiliateLink: "https://example.com/tailored-trousers-8"
    },
    {
      title: "Artisan Tailored Pants",
      price: "$93.99",
      originalPrice: "$113.99",
      description: "Artisan crafted with traditional tailoring techniques.",
      affiliateLink: "https://example.com/tailored-trousers-9"
    },
    {
      title: "Luxury Tailored Trousers",
      price: "$96.99",
      description: "Luxury tailoring with premium fabrics and construction.",
      affiliateLink: "https://example.com/tailored-trousers-10"
    },
    {
      title: "Professional Tailored Pants",
      price: "$84.99",
      originalPrice: "$104.99",
      description: "Professional tailoring for business and formal wear.",
      affiliateLink: "https://example.com/tailored-trousers-11"
    },
    {
      title: "Expert Fit Trousers",
      price: "$90.99",
      description: "Expert tailoring with superior fit and comfort.",
      affiliateLink: "https://example.com/tailored-trousers-12"
    },
    {
      title: "Couture Style Trousers",
      price: "$98.99",
      originalPrice: "$118.99",
      description: "Couture-inspired tailoring with exceptional quality.",
      affiliateLink: "https://example.com/tailored-trousers-13"
    },
    {
      title: "Made-to-Measure Pants",
      price: "$86.99",
      description: "Made-to-measure quality with perfect fit guarantee.",
      affiliateLink: "https://example.com/tailored-trousers-14"
    },
    {
      title: "Heritage Tailored Trousers",
      price: "$92.99",
      originalPrice: "$112.99",
      description: "Heritage tailoring techniques with modern comfort.",
      affiliateLink: "https://example.com/tailored-trousers-15"
    },
    {
      title: "Premium Tailored Pants",
      price: "$95.99",
      description: "Premium tailoring with the finest materials and craftsmanship.",
      affiliateLink: "https://example.com/tailored-trousers-16"
    }
  ];

  const formalTrousers = [
    {
      title: "Black Formal Trousers",
      price: "$54.99",
      originalPrice: "$74.99",
      description: "Classic black formal trousers perfect for business and events.",
      affiliateLink: "https://example.com/formal-trousers-1"
    },
    {
      title: "Charcoal Dress Pants",
      price: "$56.99",
      description: "Professional charcoal color with sharp, clean lines.",
      affiliateLink: "https://example.com/formal-trousers-2"
    },
    {
      title: "Navy Formal Trousers",
      price: "$55.99",
      description: "Versatile navy color suitable for various formal occasions.",
      affiliateLink: "https://example.com/formal-trousers-3"
    },
    {
      title: "Pinstripe Formal Pants",
      price: "$64.99",
      originalPrice: "$84.99",
      description: "Elegant pinstripe pattern for sophisticated formal wear.",
      affiliateLink: "https://example.com/formal-trousers-4"
    },
    {
      title: "Grey Formal Trousers",
      price: "$53.99",
      originalPrice: "$73.99",
      description: "Classic grey formal pants for business occasions.",
      affiliateLink: "https://example.com/formal-trousers-5"
    },
    {
      title: "Midnight Blue Formal Pants",
      price: "$58.99",
      description: "Sophisticated midnight blue for evening formal wear.",
      affiliateLink: "https://example.com/formal-trousers-6"
    },
    {
      title: "Wool Formal Trousers",
      price: "$67.99",
      originalPrice: "$87.99",
      description: "Premium wool formal trousers with superior quality.",
      affiliateLink: "https://example.com/formal-trousers-7"
    },
    {
      title: "Business Formal Pants",
      price: "$57.99",
      description: "Professional business formal pants with modern fit.",
      affiliateLink: "https://example.com/formal-trousers-8"
    },
    {
      title: "Executive Formal Trousers",
      price: "$62.99",
      originalPrice: "$82.99",
      description: "Executive-level formal trousers with premium construction.",
      affiliateLink: "https://example.com/formal-trousers-9"
    },
    {
      title: "Dress Formal Pants",
      price: "$59.99",
      description: "Elegant dress pants perfect for formal occasions.",
      affiliateLink: "https://example.com/formal-trousers-10"
    },
    {
      title: "Tuxedo Formal Trousers",
      price: "$69.99",
      originalPrice: "$89.99",
      description: "Formal tuxedo trousers for black-tie events.",
      affiliateLink: "https://example.com/formal-trousers-11"
    },
    {
      title: "Corporate Formal Pants",
      price: "$56.99",
      description: "Corporate-appropriate formal pants with professional styling.",
      affiliateLink: "https://example.com/formal-trousers-12"
    },
    {
      title: "Evening Formal Trousers",
      price: "$61.99",
      originalPrice: "$81.99",
      description: "Evening formal trousers for special occasions.",
      affiliateLink: "https://example.com/formal-trousers-13"
    },
    {
      title: "Ceremony Formal Pants",
      price: "$63.99",
      description: "Formal pants perfect for ceremonies and special events.",
      affiliateLink: "https://example.com/formal-trousers-14"
    },
    {
      title: "Premium Formal Trousers",
      price: "$71.99",
      originalPrice: "$91.99",
      description: "Premium formal trousers with exceptional quality and fit.",
      affiliateLink: "https://example.com/formal-trousers-15"
    },
    {
      title: "Classic Formal Pants",
      price: "$58.99",
      description: "Classic formal pants with timeless styling and comfort.",
      affiliateLink: "https://example.com/formal-trousers-16"
    }
  ];

  const straightFitJeans = [
    {
      title: "Classic Straight Leg Jeans",
      price: "$58.99",
      originalPrice: "$78.99",
      description: "Timeless straight fit with premium denim construction.",
      affiliateLink: "https://example.com/straight-jeans-1"
    },
    {
      title: "Dark Wash Straight Jeans",
      price: "$61.99",
      description: "Sophisticated dark wash perfect for smart casual looks.",
      affiliateLink: "https://example.com/straight-jeans-2"
    },
    {
      title: "Light Blue Straight Jeans",
      price: "$56.99",
      description: "Classic light blue wash with comfortable straight fit.",
      affiliateLink: "https://example.com/straight-jeans-3"
    },
    {
      title: "Black Straight Jeans",
      price: "$59.99",
      originalPrice: "$79.99",
      description: "Versatile black denim with sleek straight silhouette.",
      affiliateLink: "https://example.com/straight-jeans-4"
    },
    {
      title: "Medium Wash Straight Jeans",
      price: "$57.99",
      originalPrice: "$77.99",
      description: "Classic medium wash with comfortable straight fit.",
      affiliateLink: "https://example.com/straight-jeans-5"
    },
    {
      title: "Raw Denim Straight Jeans",
      price: "$64.99",
      description: "Premium raw denim with authentic straight fit styling.",
      affiliateLink: "https://example.com/straight-jeans-6"
    },
    {
      title: "Vintage Straight Jeans",
      price: "$62.99",
      originalPrice: "$82.99",
      description: "Vintage-inspired straight jeans with authentic wash.",
      affiliateLink: "https://example.com/straight-jeans-7"
    },
    {
      title: "Indigo Straight Jeans",
      price: "$60.99",
      description: "Deep indigo color with classic straight leg design.",
      affiliateLink: "https://example.com/straight-jeans-8"
    },
    {
      title: "Stone Wash Straight Jeans",
      price: "$58.99",
      originalPrice: "$78.99",
      description: "Stone washed denim with comfortable straight fit.",
      affiliateLink: "https://example.com/straight-jeans-9"
    },
    {
      title: "Faded Straight Jeans",
      price: "$59.99",
      description: "Faded denim with vintage straight leg styling.",
      affiliateLink: "https://example.com/straight-jeans-10"
    },
    {
      title: "Premium Straight Jeans",
      price: "$67.99",
      originalPrice: "$87.99",
      description: "Premium denim with superior straight fit construction.",
      affiliateLink: "https://example.com/straight-jeans-11"
    },
    {
      title: "Classic Blue Straight Jeans",
      price: "$57.99",
      description: "Classic blue denim with timeless straight fit.",
      affiliateLink: "https://example.com/straight-jeans-12"
    },
    {
      title: "Distressed Straight Jeans",
      price: "$63.99",
      originalPrice: "$83.99",
      description: "Distressed denim with modern straight fit styling.",
      affiliateLink: "https://example.com/straight-jeans-13"
    },
    {
      title: "Selvedge Straight Jeans",
      price: "$69.99",
      description: "Premium selvedge denim with authentic straight fit.",
      affiliateLink: "https://example.com/straight-jeans-14"
    },
    {
      title: "Washed Straight Jeans",
      price: "$61.99",
      originalPrice: "$81.99",
      description: "Perfectly washed denim with comfortable straight fit.",
      affiliateLink: "https://example.com/straight-jeans-15"
    },
    {
      title: "Regular Straight Jeans",
      price: "$56.99",
      description: "Regular straight fit jeans with classic denim styling.",
      affiliateLink: "https://example.com/straight-jeans-16"
    }
  ];

  const relaxedJeans = [
    {
      title: "Relaxed Fit Blue Jeans",
      price: "$52.99",
      originalPrice: "$72.99",
      description: "Comfortable relaxed fit perfect for everyday casual wear.",
      affiliateLink: "https://example.com/relaxed-jeans-1"
    },
    {
      title: "Loose Fit Denim",
      price: "$49.99",
      description: "Extra roomy fit with classic denim styling.",
      affiliateLink: "https://example.com/relaxed-jeans-2"
    },
    {
      title: "Comfort Fit Jeans",
      price: "$54.99",
      description: "Designed for maximum comfort without sacrificing style.",
      affiliateLink: "https://example.com/relaxed-jeans-3"
    },
    {
      title: "Regular Relaxed Jeans",
      price: "$51.99",
      originalPrice: "$71.99",
      description: "Classic relaxed styling with durable denim fabric.",
      affiliateLink: "https://example.com/relaxed-jeans-4"
    },
    {
      title: "Easy Fit Jeans",
      price: "$50.99",
      originalPrice: "$70.99",
      description: "Easy fit design with comfortable relaxed styling.",
      affiliateLink: "https://example.com/relaxed-jeans-5"
    },
    {
      title: "Loose Straight Jeans",
      price: "$53.99",
      description: "Loose straight fit with classic denim construction.",
      affiliateLink: "https://example.com/relaxed-jeans-6"
    },
    {
      title: "Relaxed Dark Wash Jeans",
      price: "$55.99",
      originalPrice: "$75.99",
      description: "Dark wash denim with comfortable relaxed fit.",
      affiliateLink: "https://example.com/relaxed-jeans-7"
    },
    {
      title: "Baggy Fit Jeans",
      price: "$54.99",
      description: "Baggy fit jeans with streetwear appeal.",
      affiliateLink: "https://example.com/relaxed-jeans-8"
    },
    {
      title: "Relaxed Light Wash Jeans",
      price: "$51.99",
      originalPrice: "$71.99",
      description: "Light wash denim with relaxed comfortable fit.",
      affiliateLink: "https://example.com/relaxed-jeans-9"
    },
    {
      title: "Loose Comfort Jeans",
      price: "$52.99",
      description: "Loose fit design prioritizing comfort and style.",
      affiliateLink: "https://example.com/relaxed-jeans-10"
    },
    {
      title: "Relaxed Black Jeans",
      price: "$56.99",
      originalPrice: "$76.99",
      description: "Black denim with relaxed fit for casual wear.",
      affiliateLink: "https://example.com/relaxed-jeans-11"
    },
    {
      title: "Wide Leg Jeans",
      price: "$57.99",
      description: "Wide leg design with relaxed comfortable fit.",
      affiliateLink: "https://example.com/relaxed-jeans-12"
    },
    {
      title: "Relaxed Vintage Jeans",
      price: "$58.99",
      originalPrice: "$78.99",
      description: "Vintage-style denim with relaxed fit comfort.",
      affiliateLink: "https://example.com/relaxed-jeans-13"
    },
    {
      title: "Casual Relaxed Jeans",
      price: "$50.99",
      description: "Casual relaxed jeans perfect for weekend wear.",
      affiliateLink: "https://example.com/relaxed-jeans-14"
    },
    {
      title: "Relaxed Stone Wash Jeans",
      price: "$53.99",
      originalPrice: "$73.99",
      description: "Stone washed denim with relaxed comfortable styling.",
      affiliateLink: "https://example.com/relaxed-jeans-15"
    },
    {
      title: "Loose Fit Blue Jeans",
      price: "$52.99",
      description: "Loose fit blue jeans with classic denim appeal.",
      affiliateLink: "https://example.com/relaxed-jeans-16"
    }
  ];

  const bootcutJeans = [
    {
      title: "Classic Bootcut Jeans",
      price: "$55.99",
      originalPrice: "$75.99",
      description: "Traditional bootcut style perfect for wearing with boots.",
      affiliateLink: "https://example.com/bootcut-jeans-1"
    },
    {
      title: "Flared Bootcut Denim",
      price: "$58.99",
      description: "Modern take on bootcut with subtle flare.",
      affiliateLink: "https://example.com/bootcut-jeans-2"
    },
    {
      title: "Vintage Bootcut Jeans",
      price: "$62.99",
      description: "Retro-inspired bootcut with authentic vintage wash.",
      affiliateLink: "https://example.com/bootcut-jeans-3"
    },
    {
      title: "Dark Bootcut Jeans",
      price: "$59.99",
      originalPrice: "$79.99",
      description: "Sophisticated dark wash bootcut for versatile styling.",
      affiliateLink: "https://example.com/bootcut-jeans-4"
    },
    {
      title: "Medium Wash Bootcut Jeans",
      price: "$56.99",
      originalPrice: "$76.99",
      description: "Classic medium wash with traditional bootcut styling.",
      affiliateLink: "https://example.com/bootcut-jeans-5"
    },
    {
      title: "Light Bootcut Jeans",
      price: "$54.99",
      description: "Light wash bootcut jeans with casual appeal.",
      affiliateLink: "https://example.com/bootcut-jeans-6"
    },
    {
      title: "Distressed Bootcut Jeans",
      price: "$61.99",
      originalPrice: "$81.99",
      description: "Distressed denim with modern bootcut styling.",
      affiliateLink: "https://example.com/bootcut-jeans-7"
    },
    {
      title: "Faded Bootcut Jeans",
      price: "$57.99",
      description: "Faded denim with classic bootcut design.",
      affiliateLink: "https://example.com/bootcut-jeans-8"
    },
    {
      title: "Stone Wash Bootcut Jeans",
      price: "$58.99",
      originalPrice: "$78.99",
      description: "Stone washed bootcut jeans with vintage appeal.",
      affiliateLink: "https://example.com/bootcut-jeans-9"
    },
    {
      title: "Indigo Bootcut Jeans",
      price: "$60.99",
      description: "Deep indigo bootcut jeans with premium denim.",
      affiliateLink: "https://example.com/bootcut-jeans-10"
    },
    {
      title: "Raw Denim Bootcut Jeans",
      price: "$64.99",
      originalPrice: "$84.99",
      description: "Raw denim bootcut with authentic styling.",
      affiliateLink: "https://example.com/bootcut-jeans-11"
    },
    {
      title: "Washed Bootcut Jeans",
      price: "$57.99",
      description: "Perfectly washed bootcut jeans with comfortable fit.",
      affiliateLink: "https://example.com/bootcut-jeans-12"
    },
    {
      title: "Premium Bootcut Jeans",
      price: "$66.99",
      originalPrice: "$86.99",
      description: "Premium bootcut jeans with superior denim quality.",
      affiliateLink: "https://example.com/bootcut-jeans-13"
    },
    {
      title: "Regular Bootcut Jeans",
      price: "$55.99",
      description: "Regular bootcut fit with classic denim styling.",
      affiliateLink: "https://example.com/bootcut-jeans-14"
    },
    {
      title: "Selvedge Bootcut Jeans",
      price: "$68.99",
      originalPrice: "$88.99",
      description: "Premium selvedge denim with bootcut styling.",
      affiliateLink: "https://example.com/bootcut-jeans-15"
    },
    {
      title: "Classic Blue Bootcut Jeans",
      price: "$56.99",
      description: "Classic blue bootcut jeans with timeless appeal.",
      affiliateLink: "https://example.com/bootcut-jeans-16"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            <span className="text-yellow-500">Trousers & Jeans</span> Collection
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our extensive collection of trousers and jeans, from formal business wear 
            to casual weekend styles. Find the perfect fit for every occasion.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            <span className="text-yellow-500">Trousers</span>
          </h2>
          <CategorySection title="Relaxed Fit Trousers" products={relaxedTrousers} />
          <CategorySection title="Chinos" products={chinos} />
          <CategorySection title="Pleated Trousers" products={pleatedTrousers} />
          <CategorySection title="Slim Fit Trousers" products={slimFitTrousers} />
          <CategorySection title="Tailored Fit Trousers" products={tailoredTrousers} />
          <CategorySection title="Formal Trousers" products={formalTrousers} />
        </div>

        <div>
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            <span className="text-yellow-500">Jeans</span>
          </h2>
          <CategorySection title="Straight Fit Jeans" products={straightFitJeans} />
          <CategorySection title="Relaxed Fit Jeans" products={relaxedJeans} />
          <CategorySection title="Bootcut Jeans" products={bootcutJeans} />
        </div>
      </div>
    </div>
  );
};

export default TrousersJeansPage;