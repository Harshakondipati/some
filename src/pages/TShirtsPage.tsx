import React from 'react';
import CategorySection from '../components/CategorySection';

const TShirtsPage = () => {
  const plainTShirts = [
    {
      title: "Essential White T-Shirt",
      price: "$19.99",
      originalPrice: "$29.99",
      description: "Premium cotton basic white tee, perfect foundation for any outfit.",
      imageUrl: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg",
      affiliateLink: "https://example.com/plain-tshirt-1"
    },
    {
      title: "Classic Black T-Shirt",
      price: "$19.99",
      description: "Versatile black tee made from soft, breathable cotton blend.",
      imageUrl: "https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg",
      affiliateLink: "https://example.com/plain-tshirt-2"
    },
    {
      title: "Navy Blue Basic Tee",
      price: "$18.99",
      originalPrice: "$28.99",
      description: "Essential navy blue t-shirt with comfortable regular fit.",
      imageUrl: "https://images.pexels.com/photos/8532618/pexels-photo-8532618.jpeg",
      affiliateLink: "https://example.com/plain-tshirt-3"
    },
    {
      title: "Grey Melange T-Shirt",
      price: "$21.99",
      description: "Stylish grey melange color with premium fabric quality.",
      imageUrl: "https://images.pexels.com/photos/8532619/pexels-photo-8532619.jpeg",
      affiliateLink: "https://example.com/plain-tshirt-4"
    },
    {
      title: "Olive Green Basic Tee",
      price: "$20.99",
      originalPrice: "$30.99",
      description: "Military-inspired olive green with comfortable cotton construction.",
      imageUrl: "https://images.pexels.com/photos/8532620/pexels-photo-8532620.jpeg",
      affiliateLink: "https://example.com/plain-tshirt-5"
    },
    {
      title: "Burgundy Plain T-Shirt",
      price: "$22.99",
      description: "Rich burgundy color with premium cotton fabric quality.",
      imageUrl: "https://images.pexels.com/photos/8532621/pexels-photo-8532621.jpeg",
      affiliateLink: "https://example.com/plain-tshirt-6"
    },
    {
      title: "Cream Basic T-Shirt",
      price: "$19.99",
      originalPrice: "$29.99",
      description: "Elegant cream shade with soft cotton construction.",
      imageUrl: "https://images.pexels.com/photos/8532622/pexels-photo-8532622.jpeg",
      affiliateLink: "https://example.com/plain-tshirt-7"
    },
    {
      title: "Charcoal Grey Tee",
      price: "$21.99",
      description: "Modern charcoal grey with premium cotton blend fabric.",
      imageUrl: "https://images.pexels.com/photos/8532623/pexels-photo-8532623.jpeg",
      affiliateLink: "https://example.com/plain-tshirt-8"
    },
    {
      title: "Forest Green T-Shirt",
      price: "$20.99",
      originalPrice: "$30.99",
      description: "Deep forest green with comfortable regular fit.",
      imageUrl: "https://images.pexels.com/photos/8532624/pexels-photo-8532624.jpeg",
      affiliateLink: "https://example.com/plain-tshirt-9"
    },
    {
      title: "Rust Orange Basic Tee",
      price: "$22.99",
      description: "Warm rust orange color with soft cotton fabric.",
      imageUrl: "https://images.pexels.com/photos/8532625/pexels-photo-8532625.jpeg",
      affiliateLink: "https://example.com/plain-tshirt-10"
    },
    {
      title: "Steel Blue T-Shirt",
      price: "$21.99",
      originalPrice: "$31.99",
      description: "Modern steel blue with premium cotton construction.",
      imageUrl: "https://images.pexels.com/photos/8532626/pexels-photo-8532626.jpeg",
      affiliateLink: "https://example.com/plain-tshirt-11"
    },
    {
      title: "Mustard Yellow Tee",
      price: "$20.99",
      description: "Bold mustard yellow with comfortable cotton blend.",
      imageUrl: "https://images.pexels.com/photos/8532627/pexels-photo-8532627.jpeg",
      affiliateLink: "https://example.com/plain-tshirt-12"
    },
    {
      title: "Lavender Basic T-Shirt",
      price: "$23.99",
      originalPrice: "$33.99",
      description: "Sophisticated lavender color with soft cotton fabric.",
      imageUrl: "https://images.pexels.com/photos/8532628/pexels-photo-8532628.jpeg",
      affiliateLink: "https://example.com/plain-tshirt-13"
    },
    {
      title: "Teal Basic T-Shirt",
      price: "$21.99",
      description: "Distinctive teal color with premium cotton quality.",
      imageUrl: "https://images.pexels.com/photos/8532629/pexels-photo-8532629.jpeg",
      affiliateLink: "https://example.com/plain-tshirt-14"
    },
    {
      title: "Maroon Plain T-Shirt",
      price: "$22.99",
      originalPrice: "$32.99",
      description: "Deep maroon color with comfortable cotton construction.",
      imageUrl: "https://images.pexels.com/photos/8532630/pexels-photo-8532630.jpeg",
      affiliateLink: "https://example.com/plain-tshirt-15"
    },
    {
      title: "Sage Green Basic Tee",
      price: "$20.99",
      description: "Calming sage green with soft cotton blend fabric.",
      imageUrl: "https://images.pexels.com/photos/8532631/pexels-photo-8532631.jpeg",
      affiliateLink: "https://example.com/plain-tshirt-16"
    }
  ];

  const oversizedTShirts = [
    {
      title: "Oversized White Tee",
      price: "$24.99",
      originalPrice: "$34.99",
      description: "Trendy oversized fit perfect for streetwear and casual styling.",
      imageUrl: "https://images.pexels.com/photos/8532632/pexels-photo-8532632.jpeg",
      affiliateLink: "https://example.com/oversized-tshirt-1"
    },
    {
      title: "Drop Shoulder Black Tee",
      price: "$26.99",
      description: "Modern drop shoulder design with relaxed oversized fit.",
      imageUrl: "https://images.pexels.com/photos/8532633/pexels-photo-8532633.jpeg",
      affiliateLink: "https://example.com/oversized-tshirt-2"
    },
    {
      title: "Baggy Fit Beige T-Shirt",
      price: "$25.99",
      description: "Comfortable baggy fit in trendy beige color.",
      imageUrl: "https://images.pexels.com/photos/8532634/pexels-photo-8532634.jpeg",
      affiliateLink: "https://example.com/oversized-tshirt-3"
    },
    {
      title: "Oversized Pocket Tee",
      price: "$28.99",
      originalPrice: "$38.99",
      description: "Oversized fit with convenient chest pocket detail.",
      imageUrl: "https://images.pexels.com/photos/8532635/pexels-photo-8532635.jpeg",
      affiliateLink: "https://example.com/oversized-tshirt-4"
    },
    {
      title: "Relaxed Fit Grey Tee",
      price: "$25.99",
      originalPrice: "$35.99",
      description: "Ultra-relaxed fit grey t-shirt with modern styling.",
      imageUrl: "https://images.pexels.com/photos/8532636/pexels-photo-8532636.jpeg",
      affiliateLink: "https://example.com/oversized-tshirt-5"
    },
    {
      title: "Oversized Navy Tee",
      price: "$27.99",
      description: "Classic navy in trendy oversized fit for casual wear.",
      imageUrl: "https://images.pexels.com/photos/8532637/pexels-photo-8532637.jpeg",
      affiliateLink: "https://example.com/oversized-tshirt-6"
    },
    {
      title: "Baggy Olive Green Tee",
      price: "$26.99",
      originalPrice: "$36.99",
      description: "Military-inspired olive green with baggy fit styling.",
      imageUrl: "https://images.pexels.com/photos/8532638/pexels-photo-8532638.jpeg",
      affiliateLink: "https://example.com/oversized-tshirt-7"
    },
    {
      title: "Oversized Burgundy Tee",
      price: "$28.99",
      description: "Rich burgundy color with comfortable oversized fit.",
      imageUrl: "https://images.pexels.com/photos/8532639/pexels-photo-8532639.jpeg",
      affiliateLink: "https://example.com/oversized-tshirt-8"
    },
    {
      title: "Relaxed Fit Cream Tee",
      price: "$25.99",
      originalPrice: "$35.99",
      description: "Elegant cream shade with relaxed oversized styling.",
      imageUrl: "https://images.pexels.com/photos/8532640/pexels-photo-8532640.jpeg",
      affiliateLink: "https://example.com/oversized-tshirt-9"
    },
    {
      title: "Oversized Charcoal Tee",
      price: "$27.99",
      description: "Modern charcoal grey with trendy oversized fit.",
      imageUrl: "https://images.pexels.com/photos/8532641/pexels-photo-8532641.jpeg",
      affiliateLink: "https://example.com/oversized-tshirt-10"
    },
    {
      title: "Baggy Forest Green Tee",
      price: "$26.99",
      originalPrice: "$36.99",
      description: "Deep forest green with comfortable baggy fit.",
      imageUrl: "https://images.pexels.com/photos/8532642/pexels-photo-8532642.jpeg",
      affiliateLink: "https://example.com/oversized-tshirt-11"
    },
    {
      title: "Oversized Rust Orange Tee",
      price: "$28.99",
      description: "Warm rust orange with relaxed oversized styling.",
      imageUrl: "https://images.pexels.com/photos/8532643/pexels-photo-8532643.jpeg",
      affiliateLink: "https://example.com/oversized-tshirt-12"
    },
    {
      title: "Relaxed Steel Blue Tee",
      price: "$27.99",
      originalPrice: "$37.99",
      description: "Modern steel blue with comfortable oversized fit.",
      imageUrl: "https://images.pexels.com/photos/8532644/pexels-photo-8532644.jpeg",
      affiliateLink: "https://example.com/oversized-tshirt-13"
    },
    {
      title: "Oversized Mustard Tee",
      price: "$26.99",
      description: "Bold mustard yellow with trendy oversized styling.",
      imageUrl: "https://images.pexels.com/photos/8532645/pexels-photo-8532645.jpeg",
      affiliateLink: "https://example.com/oversized-tshirt-14"
    },
    {
      title: "Baggy Lavender Tee",
      price: "$29.99",
      originalPrice: "$39.99",
      description: "Sophisticated lavender with comfortable baggy fit.",
      imageUrl: "https://images.pexels.com/photos/8532646/pexels-photo-8532646.jpeg",
      affiliateLink: "https://example.com/oversized-tshirt-15"
    },
    {
      title: "Oversized Teal Tee",
      price: "$27.99",
      description: "Distinctive teal color with relaxed oversized fit.",
      imageUrl: "https://images.pexels.com/photos/8532647/pexels-photo-8532647.jpeg",
      affiliateLink: "https://example.com/oversized-tshirt-16"
    }
  ];

  const graphicTShirts = [
    {
      title: "Back Print Graphic Tee",
      price: "$32.99",
      originalPrice: "$42.99",
      description: "Eye-catching back print design with comfortable cotton fabric.",
      imageUrl: "https://images.pexels.com/photos/8532648/pexels-photo-8532648.jpeg",
      affiliateLink: "https://example.com/graphic-tshirt-1"
    },
    {
      title: "Vintage Band Graphic Tee",
      price: "$29.99",
      description: "Retro band graphic with vintage wash effect for authentic look.",
      imageUrl: "https://images.pexels.com/photos/8532649/pexels-photo-8532649.jpeg",
      affiliateLink: "https://example.com/graphic-tshirt-2"
    },
    {
      title: "Abstract Art Print Tee",
      price: "$34.99",
      description: "Modern abstract artwork printed on premium quality t-shirt.",
      imageUrl: "https://images.pexels.com/photos/8532650/pexels-photo-8532650.jpeg",
      affiliateLink: "https://example.com/graphic-tshirt-3"
    },
    {
      title: "Typography Design Tee",
      price: "$31.99",
      originalPrice: "$41.99",
      description: "Stylish typography design perfect for making a statement.",
      imageUrl: "https://images.pexels.com/photos/8532651/pexels-photo-8532651.jpeg",
      affiliateLink: "https://example.com/graphic-tshirt-4"
    },
    {
      title: "Skull Back Print Tee",
      price: "$33.99",
      originalPrice: "$43.99",
      description: "Edgy skull design on back with comfortable cotton fabric.",
      imageUrl: "https://images.pexels.com/photos/8532652/pexels-photo-8532652.jpeg",
      affiliateLink: "https://example.com/graphic-tshirt-5"
    },
    {
      title: "Music Graphic Tee",
      price: "$30.99",
      description: "Music-themed graphic design perfect for music lovers.",
      imageUrl: "https://images.pexels.com/photos/8532653/pexels-photo-8532653.jpeg",
      affiliateLink: "https://example.com/graphic-tshirt-6"
    },
    {
      title: "Sports Back Print Tee",
      price: "$32.99",
      originalPrice: "$42.99",
      description: "Athletic-inspired back print with comfortable fit.",
      imageUrl: "https://images.pexels.com/photos/8532654/pexels-photo-8532654.jpeg",
      affiliateLink: "https://example.com/graphic-tshirt-7"
    },
    {
      title: "Anime Graphic Tee",
      price: "$35.99",
      description: "Popular anime character graphic with premium cotton.",
      imageUrl: "https://images.pexels.com/photos/8532655/pexels-photo-8532655.jpeg",
      affiliateLink: "https://example.com/graphic-tshirt-8"
    },
    {
      title: "Graffiti Back Print Tee",
      price: "$34.99",
      originalPrice: "$44.99",
      description: "Street art graffiti design on back with urban styling.",
      imageUrl: "https://images.pexels.com/photos/8532656/pexels-photo-8532656.jpeg",
      affiliateLink: "https://example.com/graphic-tshirt-9"
    },
    {
      title: "Nature Graphic Tee",
      price: "$31.99",
      description: "Beautiful nature-inspired graphic with soft cotton fabric.",
      imageUrl: "https://images.pexels.com/photos/8532657/pexels-photo-8532657.jpeg",
      affiliateLink: "https://example.com/graphic-tshirt-10"
    },
    {
      title: "Geometric Back Print Tee",
      price: "$33.99",
      originalPrice: "$43.99",
      description: "Modern geometric patterns on back with contemporary fit.",
      imageUrl: "https://images.pexels.com/photos/8532658/pexels-photo-8532658.jpeg",
      affiliateLink: "https://example.com/graphic-tshirt-11"
    },
    {
      title: "Galaxy Print Tee",
      price: "$36.99",
      description: "Cosmic galaxy print with premium quality cotton construction.",
      imageUrl: "https://images.pexels.com/photos/8532659/pexels-photo-8532659.jpeg",
      affiliateLink: "https://example.com/graphic-tshirt-12"
    },
    {
      title: "Dragon Back Print Tee",
      price: "$35.99",
      originalPrice: "$45.99",
      description: "Powerful dragon artwork on back with comfortable styling.",
      imageUrl: "https://images.pexels.com/photos/8532660/pexels-photo-8532660.jpeg",
      affiliateLink: "https://example.com/graphic-tshirt-13"
    },
    {
      title: "Mandala Graphic Tee",
      price: "$32.99",
      description: "Intricate mandala design with soft cotton fabric.",
      imageUrl: "https://images.pexels.com/photos/8532661/pexels-photo-8532661.jpeg",
      affiliateLink: "https://example.com/graphic-tshirt-14"
    },
    {
      title: "Retro Gaming Tee",
      price: "$34.99",
      originalPrice: "$44.99",
      description: "Nostalgic gaming graphics with vintage wash effect.",
      imageUrl: "https://images.pexels.com/photos/8532662/pexels-photo-8532662.jpeg",
      affiliateLink: "https://example.com/graphic-tshirt-15"
    },
    {
      title: "Tribal Back Print Tee",
      price: "$33.99",
      description: "Traditional tribal patterns on back with modern fit.",
      imageUrl: "https://images.pexels.com/photos/8532663/pexels-photo-8532663.jpeg",
      affiliateLink: "https://example.com/graphic-tshirt-16"
    }
  ];

  const minimalistTShirts = [
    {
      title: "Minimalist Logo Tee",
      price: "$27.99",
      originalPrice: "$37.99",
      description: "Clean, minimal logo design for sophisticated casual wear.",
      imageUrl: "https://images.pexels.com/photos/8532664/pexels-photo-8532664.jpeg",
      affiliateLink: "https://example.com/minimalist-tshirt-1"
    },
    {
      title: "Simple Stripe Tee",
      price: "$25.99",
      description: "Subtle stripe pattern with minimalist aesthetic.",
      imageUrl: "https://images.pexels.com/photos/8532665/pexels-photo-8532665.jpeg",
      affiliateLink: "https://example.com/minimalist-tshirt-2"
    },
    {
      title: "Clean Cut Basic Tee",
      price: "$23.99",
      description: "Ultra-minimalist design with premium fabric quality.",
      imageUrl: "https://images.pexels.com/photos/8532666/pexels-photo-8532666.jpeg",
      affiliateLink: "https://example.com/minimalist-tshirt-3"
    },
    {
      title: "Geometric Print Tee",
      price: "$29.99",
      originalPrice: "$39.99",
      description: "Simple geometric pattern with modern minimalist appeal.",
      imageUrl: "https://images.pexels.com/photos/8532667/pexels-photo-8532667.jpeg",
      affiliateLink: "https://example.com/minimalist-tshirt-4"
    },
    {
      title: "Pocket Detail Tee",
      price: "$26.99",
      originalPrice: "$36.99",
      description: "Minimalist design with subtle chest pocket detail.",
      imageUrl: "https://images.pexels.com/photos/8532668/pexels-photo-8532668.jpeg",
      affiliateLink: "https://example.com/minimalist-tshirt-5"
    },
    {
      title: "Monochrome Tee",
      price: "$24.99",
      description: "Clean monochrome design with premium cotton construction.",
      imageUrl: "https://images.pexels.com/photos/8532669/pexels-photo-8532669.jpeg",
      affiliateLink: "https://example.com/minimalist-tshirt-6"
    },
    {
      title: "Essential Crew Tee",
      price: "$25.99",
      originalPrice: "$35.99",
      description: "Essential crew neck with minimalist styling.",
      imageUrl: "https://images.pexels.com/photos/8532670/pexels-photo-8532670.jpeg",
      affiliateLink: "https://example.com/minimalist-tshirt-7"
    },
    {
      title: "Subtle Logo Tee",
      price: "$28.99",
      description: "Understated logo placement with clean design.",
      imageUrl: "https://images.pexels.com/photos/8532671/pexels-photo-8532671.jpeg",
      affiliateLink: "https://example.com/minimalist-tshirt-8"
    },
    {
      title: "Modern Basic Tee",
      price: "$24.99",
      originalPrice: "$34.99",
      description: "Modern minimalist approach to the classic basic tee.",
      imageUrl: "https://images.pexels.com/photos/8532672/pexels-photo-8532672.jpeg",
      affiliateLink: "https://example.com/minimalist-tshirt-9"
    },
    {
      title: "Clean Line Tee",
      price: "$27.99",
      description: "Clean lines and minimal design for sophisticated look.",
      imageUrl: "https://images.pexels.com/photos/8532673/pexels-photo-8532673.jpeg",
      affiliateLink: "https://example.com/minimalist-tshirt-10"
    },
    {
      title: "Zen Minimalist Tee",
      price: "$26.99",
      originalPrice: "$36.99",
      description: "Zen-inspired minimalist design with soft cotton fabric.",
      imageUrl: "https://images.pexels.com/photos/8532674/pexels-photo-8532674.jpeg",
      affiliateLink: "https://example.com/minimalist-tshirt-11"
    },
    {
      title: "Pure Essential Tee",
      price: "$25.99",
      description: "Pure minimalist design with premium fabric quality.",
      imageUrl: "https://images.pexels.com/photos/8532675/pexels-photo-8532675.jpeg",
      affiliateLink: "https://example.com/minimalist-tshirt-12"
    },
    {
      title: "Refined Basic Tee",
      price: "$28.99",
      originalPrice: "$38.99",
      description: "Refined minimalist approach with superior comfort.",
      imageUrl: "https://images.pexels.com/photos/8532676/pexels-photo-8532676.jpeg",
      affiliateLink: "https://example.com/minimalist-tshirt-13"
    },
    {
      title: "Sleek Minimal Tee",
      price: "$26.99",
      description: "Sleek minimalist design with contemporary fit.",
      imageUrl: "https://images.pexels.com/photos/8532677/pexels-photo-8532677.jpeg",
      affiliateLink: "https://example.com/minimalist-tshirt-14"
    },
    {
      title: "Understated Tee",
      price: "$27.99",
      originalPrice: "$37.99",
      description: "Understated elegance with minimalist styling.",
      imageUrl: "https://images.pexels.com/photos/8532678/pexels-photo-8532678.jpeg",
      affiliateLink: "https://example.com/minimalist-tshirt-15"
    },
    {
      title: "Essential Minimal Tee",
      price: "$25.99",
      description: "Essential minimalist design with premium cotton blend.",
      imageUrl: "https://images.pexels.com/photos/8532679/pexels-photo-8532679.jpeg",
      affiliateLink: "https://example.com/minimalist-tshirt-16"
    }
  ];

  const vintageTShirts = [
    {
      title: "Vintage Washed Black Tee",
      price: "$33.99",
      originalPrice: "$43.99",
      description: "Authentic vintage wash effect with soft, worn-in feel.",
      imageUrl: "https://images.pexels.com/photos/8532680/pexels-photo-8532680.jpeg",
      affiliateLink: "https://example.com/vintage-tshirt-1"
    },
    {
      title: "Retro Faded Blue Tee",
      price: "$31.99",
      description: "Classic faded blue with vintage-inspired fit and feel.",
      imageUrl: "https://images.pexels.com/photos/8532681/pexels-photo-8532681.jpeg",
      affiliateLink: "https://example.com/vintage-tshirt-2"
    },
    {
      title: "Distressed Grey Tee",
      price: "$35.99",
      description: "Carefully distressed grey t-shirt with authentic vintage look.",
      imageUrl: "https://images.pexels.com/photos/8532682/pexels-photo-8532682.jpeg",
      affiliateLink: "https://example.com/vintage-tshirt-3"
    },
    {
      title: "Vintage Logo Tee",
      price: "$37.99",
      originalPrice: "$47.99",
      description: "Classic vintage logo with perfectly aged wash effect.",
      imageUrl: "https://images.pexels.com/photos/8532683/pexels-photo-8532683.jpeg",
      affiliateLink: "https://example.com/vintage-tshirt-4"
    },
    {
      title: "Acid Wash Tee",
      price: "$34.99",
      originalPrice: "$44.99",
      description: "Retro acid wash effect with authentic vintage styling.",
      imageUrl: "https://images.pexels.com/photos/8532684/pexels-photo-8532684.jpeg",
      affiliateLink: "https://example.com/vintage-tshirt-5"
    },
    {
      title: "Faded Navy Vintage Tee",
      price: "$32.99",
      description: "Faded navy color with vintage wash and soft texture.",
      imageUrl: "https://images.pexels.com/photos/8532685/pexels-photo-8532685.jpeg",
      affiliateLink: "https://example.com/vintage-tshirt-6"
    },
    {
      title: "Worn-In White Tee",
      price: "$33.99",
      originalPrice: "$43.99",
      description: "Perfectly worn-in white tee with vintage character.",
      imageUrl: "https://images.pexels.com/photos/8532686/pexels-photo-8532686.jpeg",
      affiliateLink: "https://example.com/vintage-tshirt-7"
    },
    {
      title: "Retro Burgundy Tee",
      price: "$36.99",
      description: "Rich burgundy with vintage wash and retro styling.",
      imageUrl: "https://images.pexels.com/photos/8532687/pexels-photo-8532687.jpeg",
      affiliateLink: "https://example.com/vintage-tshirt-8"
    },
    {
      title: "Vintage Olive Tee",
      price: "$34.99",
      originalPrice: "$44.99",
      description: "Military-inspired olive with authentic vintage wash.",
      imageUrl: "https://images.pexels.com/photos/8532688/pexels-photo-8532688.jpeg",
      affiliateLink: "https://example.com/vintage-tshirt-9"
    },
    {
      title: "Faded Charcoal Tee",
      price: "$33.99",
      description: "Faded charcoal grey with vintage texture and feel.",
      imageUrl: "https://images.pexels.com/photos/8532689/pexels-photo-8532689.jpeg",
      affiliateLink: "https://example.com/vintage-tshirt-10"
    },
    {
      title: "Retro Cream Tee",
      price: "$35.99",
      originalPrice: "$45.99",
      description: "Vintage cream color with aged wash effect.",
      imageUrl: "https://images.pexels.com/photos/8532690/pexels-photo-8532690.jpeg",
      affiliateLink: "https://example.com/vintage-tshirt-11"
    },
    {
      title: "Distressed Forest Tee",
      price: "$36.99",
      description: "Forest green with carefully distressed vintage finish.",
      imageUrl: "https://images.pexels.com/photos/8532691/pexels-photo-8532691.jpeg",
      affiliateLink: "https://example.com/vintage-tshirt-12"
    },
    {
      title: "Vintage Rust Tee",
      price: "$34.99",
      originalPrice: "$44.99",
      description: "Warm rust color with authentic vintage wash treatment.",
      imageUrl: "https://images.pexels.com/photos/8532692/pexels-photo-8532692.jpeg",
      affiliateLink: "https://example.com/vintage-tshirt-13"
    },
    {
      title: "Faded Steel Blue Tee",
      price: "$33.99",
      description: "Steel blue with vintage fade and soft worn texture.",
      imageUrl: "https://images.pexels.com/photos/8532693/pexels-photo-8532693.jpeg",
      affiliateLink: "https://example.com/vintage-tshirt-14"
    },
    {
      title: "Retro Mustard Tee",
      price: "$37.99",
      originalPrice: "$47.99",
      description: "Bold mustard yellow with retro vintage wash effect.",
      imageUrl: "https://images.pexels.com/photos/8532694/pexels-photo-8532694.jpeg",
      affiliateLink: "https://example.com/vintage-tshirt-15"
    },
    {
      title: "Vintage Maroon Tee",
      price: "$35.99",
      description: "Deep maroon with authentic vintage wash and feel.",
      imageUrl: "https://images.pexels.com/photos/8532695/pexels-photo-8532695.jpeg",
      affiliateLink: "https://example.com/vintage-tshirt-16"
    }
  ];

  const muscleFitTShirts = [
    {
      title: "Muscle Fit Performance Tee",
      price: "$28.99",
      originalPrice: "$38.99",
      description: "Athletic muscle fit design with moisture-wicking fabric.",
      imageUrl: "https://images.pexels.com/photos/8532696/pexels-photo-8532696.jpeg",
      affiliateLink: "https://example.com/musclefit-tshirt-1"
    },
    {
      title: "Athleisure Fitted Tee",
      price: "$26.99",
      description: "Perfect for gym and casual wear with flexible fabric.",
      imageUrl: "https://images.pexels.com/photos/8532697/pexels-photo-8532697.jpeg",
      affiliateLink: "https://example.com/musclefit-tshirt-2"
    },
    {
      title: "Compression Fit Tee",
      price: "$31.99",
      description: "Compression fabric that enhances muscle definition.",
      imageUrl: "https://images.pexels.com/photos/8532698/pexels-photo-8532698.jpeg",
      affiliateLink: "https://example.com/musclefit-tshirt-3"
    },
    {
      title: "Sports Muscle Tee",
      price: "$29.99",
      originalPrice: "$39.99",
      description: "Designed for athletic performance with muscle-enhancing fit.",
      imageUrl: "https://images.pexels.com/photos/8532699/pexels-photo-8532699.jpeg",
      affiliateLink: "https://example.com/musclefit-tshirt-4"
    },
    {
      title: "Fitted Athletic Tee",
      price: "$27.99",
      originalPrice: "$37.99",
      description: "Fitted design perfect for showcasing athletic physique.",
      imageUrl: "https://images.pexels.com/photos/8532700/pexels-photo-8532700.jpeg",
      affiliateLink: "https://example.com/musclefit-tshirt-5"
    },
    {
      title: "Gym Muscle Fit Tee",
      price: "$30.99",
      description: "Specifically designed for gym workouts with muscle fit.",
      imageUrl: "https://images.pexels.com/photos/8532701/pexels-photo-8532701.jpeg",
      affiliateLink: "https://example.com/musclefit-tshirt-6"
    },
    {
      title: "Performance Fitted Tee",
      price: "$28.99",
      originalPrice: "$38.99",
      description: "High-performance fabric with muscle-enhancing fit.",
      imageUrl: "https://images.pexels.com/photos/8532702/pexels-photo-8532702.jpeg",
      affiliateLink: "https://example.com/musclefit-tshirt-7"
    },
    {
      title: "Athletic Muscle Tee",
      price: "$32.99",
      description: "Athletic cut designed to highlight muscle definition.",
      imageUrl: "https://images.pexels.com/photos/8532703/pexels-photo-8532703.jpeg",
      affiliateLink: "https://example.com/musclefit-tshirt-8"
    },
    {
      title: "Bodybuilding Fit Tee",
      price: "$29.99",
      originalPrice: "$39.99",
      description: "Tailored for bodybuilders with muscle-enhancing design.",
      imageUrl: "https://images.pexels.com/photos/8532704/pexels-photo-8532704.jpeg",
      affiliateLink: "https://example.com/musclefit-tshirt-9"
    },
    {
      title: "Stretch Muscle Tee",
      price: "$28.99",
      description: "Stretch fabric with muscle fit for maximum comfort.",
      imageUrl: "https://images.pexels.com/photos/8532705/pexels-photo-8532705.jpeg",
      affiliateLink: "https://example.com/musclefit-tshirt-10"
    },
    {
      title: "Training Fit Tee",
      price: "$30.99",
      originalPrice: "$40.99",
      description: "Training-specific fit with muscle-enhancing properties.",
      imageUrl: "https://images.pexels.com/photos/8532706/pexels-photo-8532706.jpeg",
      affiliateLink: "https://example.com/musclefit-tshirt-11"
    },
    {
      title: "Sculpted Fit Tee",
      price: "$31.99",
      description: "Sculpted design that follows natural muscle contours.",
      imageUrl: "https://images.pexels.com/photos/8532707/pexels-photo-8532707.jpeg",
      affiliateLink: "https://example.com/musclefit-tshirt-12"
    },
    {
      title: "Power Muscle Tee",
      price: "$29.99",
      originalPrice: "$39.99",
      description: "Power-focused design with muscle-enhancing fit.",
      imageUrl: "https://images.pexels.com/photos/8532708/pexels-photo-8532708.jpeg",
      affiliateLink: "https://example.com/musclefit-tshirt-13"
    },
    {
      title: "Flex Fit Athletic Tee",
      price: "$28.99",
      description: "Flexible fit that moves with your muscles during workouts.",
      imageUrl: "https://images.pexels.com/photos/8532709/pexels-photo-8532709.jpeg",
      affiliateLink: "https://example.com/musclefit-tshirt-14"
    },
    {
      title: "Competition Muscle Tee",
      price: "$33.99",
      originalPrice: "$43.99",
      description: "Competition-grade muscle fit for serious athletes.",
      imageUrl: "https://images.pexels.com/photos/8532710/pexels-photo-8532710.jpeg",
      affiliateLink: "https://example.com/musclefit-tshirt-15"
    },
    {
      title: "Pro Athlete Fit Tee",
      price: "$32.99",
      description: "Professional athlete-inspired muscle fit design.",
      imageUrl: "https://images.pexels.com/photos/8532711/pexels-photo-8532711.jpeg",
      affiliateLink: "https://example.com/musclefit-tshirt-16"
    }
  ];

  const dropShoulderTShirts = [
    {
      title: "Drop Shoulder Relaxed Tee",
      price: "$26.99",
      originalPrice: "$36.99",
      description: "Modern drop shoulder design with relaxed, comfortable fit.",
      imageUrl: "https://images.pexels.com/photos/8532712/pexels-photo-8532712.jpeg",
      affiliateLink: "https://example.com/dropshoulder-tshirt-1"
    },
    {
      title: "Boxy Fit Crop Tee",
      price: "$24.99",
      description: "Trendy boxy fit with contemporary drop shoulder styling.",
      imageUrl: "https://images.pexels.com/photos/8532713/pexels-photo-8532713.jpeg",
      affiliateLink: "https://example.com/dropshoulder-tshirt-2"
    },
    {
      title: "Oversized Drop Shoulder Tee",
      price: "$28.99",
      description: "Combining oversized fit with drop shoulder design.",
      imageUrl: "https://images.pexels.com/photos/8532714/pexels-photo-8532714.jpeg",
      affiliateLink: "https://example.com/dropshoulder-tshirt-3"
    },
    {
      title: "Structured Boxy Tee",
      price: "$30.99",
      originalPrice: "$40.99",
      description: "Structured boxy design with premium cotton construction.",
      imageUrl: "https://images.pexels.com/photos/8532715/pexels-photo-8532715.jpeg",
      affiliateLink: "https://example.com/dropshoulder-tshirt-4"
    },
    {
      title: "Relaxed Drop Shoulder Tee",
      price: "$25.99",
      originalPrice: "$35.99",
      description: "Ultra-relaxed fit with modern drop shoulder cut.",
      imageUrl: "https://images.pexels.com/photos/8532716/pexels-photo-8532716.jpeg",
      affiliateLink: "https://example.com/dropshoulder-tshirt-5"
    },
    {
      title: "Contemporary Boxy Tee",
      price: "$27.99",
      description: "Contemporary boxy styling with drop shoulder design.",
      imageUrl: "https://images.pexels.com/photos/8532717/pexels-photo-8532717.jpeg",
      affiliateLink: "https://example.com/dropshoulder-tshirt-6"
    },
    {
      title: "Wide Shoulder Tee",
      price: "$26.99",
      originalPrice: "$36.99",
      description: "Wide shoulder design with comfortable boxy fit.",
      imageUrl: "https://images.pexels.com/photos/8532718/pexels-photo-8532718.jpeg",
      affiliateLink: "https://example.com/dropshoulder-tshirt-7"
    },
    {
      title: "Loose Drop Shoulder Tee",
      price: "$29.99",
      description: "Loose fitting design with trendy drop shoulder cut.",
      imageUrl: "https://images.pexels.com/photos/8532719/pexels-photo-8532719.jpeg",
      affiliateLink: "https://example.com/dropshoulder-tshirt-8"
    },
    {
      title: "Modern Boxy Fit Tee",
      price: "$28.99",
      originalPrice: "$38.99",
      description: "Modern interpretation of the classic boxy fit.",
      imageUrl: "https://images.pexels.com/photos/8532720/pexels-photo-8532720.jpeg",
      affiliateLink: "https://example.com/dropshoulder-tshirt-9"
    },
    {
      title: "Casual Drop Shoulder Tee",
      price: "$25.99",
      description: "Casual styling with comfortable drop shoulder design.",
      imageUrl: "https://images.pexels.com/photos/8532721/pexels-photo-8532721.jpeg",
      affiliateLink: "https://example.com/dropshoulder-tshirt-10"
    },
    {
      title: "Streetwear Boxy Tee",
      price: "$31.99",
      originalPrice: "$41.99",
      description: "Streetwear-inspired boxy fit with drop shoulder styling.",
      imageUrl: "https://images.pexels.com/photos/8532722/pexels-photo-8532722.jpeg",
      affiliateLink: "https://example.com/dropshoulder-tshirt-11"
    },
    {
      title: "Urban Drop Shoulder Tee",
      price: "$27.99",
      description: "Urban styling with modern drop shoulder design.",
      imageUrl: "https://images.pexels.com/photos/8532723/pexels-photo-8532723.jpeg",
      affiliateLink: "https://example.com/dropshoulder-tshirt-12"
    },
    {
      title: "Relaxed Boxy Fit Tee",
      price: "$26.99",
      originalPrice: "$36.99",
      description: "Relaxed boxy fit perfect for casual everyday wear.",
      imageUrl: "https://images.pexels.com/photos/8532724/pexels-photo-8532724.jpeg",
      affiliateLink: "https://example.com/dropshoulder-tshirt-13"
    },
    {
      title: "Contemporary Drop Tee",
      price: "$28.99",
      description: "Contemporary design with drop shoulder and boxy fit.",
      imageUrl: "https://images.pexels.com/photos/8532725/pexels-photo-8532725.jpeg",
      affiliateLink: "https://example.com/dropshoulder-tshirt-14"
    },
    {
      title: "Trendy Boxy Shoulder Tee",
      price: "$30.99",
      originalPrice: "$40.99",
      description: "Trendy boxy design with fashionable drop shoulder cut.",
      imageUrl: "https://images.pexels.com/photos/8532726/pexels-photo-8532726.jpeg",
      affiliateLink: "https://example.com/dropshoulder-tshirt-15"
    },
    {
      title: "Modern Relaxed Fit Tee",
      price: "$27.99",
      description: "Modern relaxed fit with stylish drop shoulder design.",
      imageUrl: "https://images.pexels.com/photos/8532727/pexels-photo-8532727.jpeg",
      affiliateLink: "https://example.com/dropshoulder-tshirt-16"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            <span className="text-yellow-500">T-Shirts</span> Collection
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From classic basics to statement pieces, explore our diverse range of t-shirts 
            designed for every style preference and occasion.
          </p>
        </div>

        <CategorySection title="Plain T-Shirts" products={plainTShirts} />
        <CategorySection title="Oversized T-Shirts" products={oversizedTShirts} />
        <CategorySection title="Graphic & Back-Print T-Shirts" products={graphicTShirts} />
        <CategorySection title="Minimalist T-Shirts" products={minimalistTShirts} />
        <CategorySection title="Vintage/Washed Effect T-Shirts" products={vintageTShirts} />
        <CategorySection title="Muscle Fit & Athleisure T-Shirts" products={muscleFitTShirts} />
        <CategorySection title="Drop Shoulder & Boxy T-Shirts" products={dropShoulderTShirts} />
      </div>
    </div>
  );
};

export default TShirtsPage;