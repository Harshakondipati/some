import React from 'react';
import CategorySection from '../components/CategorySection';

const SuitsBlazersPage = () => {
  const singleBreastedSuits = [
    {
      title: "Classic Navy Single-Breasted Suit",
      price: "$299.99",
      originalPrice: "$399.99",
      description: "Timeless navy suit perfect for business and formal occasions.",
      affiliateLink: "https://example.com/single-suit-1"
    },
    {
      title: "Charcoal Grey Single-Breasted Suit",
      price: "$289.99",
      description: "Sophisticated charcoal grey suit with modern tailoring.",
      affiliateLink: "https://example.com/single-suit-2"
    },
    {
      title: "Black Single-Breasted Suit",
      price: "$319.99",
      description: "Elegant black suit ideal for evening events and formal wear.",
      affiliateLink: "https://example.com/single-suit-3"
    },
    {
      title: "Brown Single-Breasted Suit",
      price: "$309.99",
      originalPrice: "$409.99",
      description: "Unique brown suit for distinguished formal styling.",
      affiliateLink: "https://example.com/single-suit-4"
    },
    {
      title: "Light Grey Single-Breasted Suit",
      price: "$279.99",
      originalPrice: "$379.99",
      description: "Light grey suit perfect for spring and summer events.",
      affiliateLink: "https://example.com/single-suit-5"
    },
    {
      title: "Midnight Blue Single-Breasted Suit",
      price: "$329.99",
      description: "Sophisticated midnight blue suit for evening occasions.",
      affiliateLink: "https://example.com/single-suit-6"
    },
    {
      title: "Burgundy Single-Breasted Suit",
      price: "$339.99",
      originalPrice: "$439.99",
      description: "Bold burgundy suit for distinctive formal styling.",
      affiliateLink: "https://example.com/single-suit-7"
    },
    {
      title: "Olive Green Single-Breasted Suit",
      price: "$314.99",
      description: "Unique olive green suit with contemporary appeal.",
      affiliateLink: "https://example.com/single-suit-8"
    },
    {
      title: "Cream Single-Breasted Suit",
      price: "$294.99",
      originalPrice: "$394.99",
      description: "Elegant cream suit perfect for summer weddings.",
      affiliateLink: "https://example.com/single-suit-9"
    },
    {
      title: "Teal Single-Breasted Suit",
      price: "$324.99",
      description: "Distinctive teal suit for modern formal occasions.",
      affiliateLink: "https://example.com/single-suit-10"
    },
    {
      title: "Slate Grey Single-Breasted Suit",
      price: "$304.99",
      originalPrice: "$404.99",
      description: "Modern slate grey suit with contemporary tailoring.",
      affiliateLink: "https://example.com/single-suit-11"
    },
    {
      title: "Forest Green Single-Breasted Suit",
      price: "$334.99",
      description: "Rich forest green suit for unique formal styling.",
      affiliateLink: "https://example.com/single-suit-12"
    },
    {
      title: "Rust Orange Single-Breasted Suit",
      price: "$319.99",
      originalPrice: "$419.99",
      description: "Bold rust orange suit for autumn formal events.",
      affiliateLink: "https://example.com/single-suit-13"
    },
    {
      title: "Steel Blue Single-Breasted Suit",
      price: "$309.99",
      description: "Modern steel blue suit with sophisticated appeal.",
      affiliateLink: "https://example.com/single-suit-14"
    },
    {
      title: "Maroon Single-Breasted Suit",
      price: "$329.99",
      originalPrice: "$429.99",
      description: "Deep maroon suit for distinguished formal occasions.",
      affiliateLink: "https://example.com/single-suit-15"
    },
    {
      title: "Camel Single-Breasted Suit",
      price: "$299.99",
      description: "Warm camel colored suit perfect for fall events.",
      affiliateLink: "https://example.com/single-suit-16"
    }
  ];

  const doubleBreastedSuits = [
    {
      title: "Classic Double-Breasted Suit",
      price: "$379.99",
      originalPrice: "$479.99",
      description: "Traditional double-breasted suit with peak lapels.",
      affiliateLink: "https://example.com/double-suit-1"
    },
    {
      title: "Modern Double-Breasted Suit",
      price: "$359.99",
      description: "Contemporary double-breasted design with slim fit.",
      affiliateLink: "https://example.com/double-suit-2"
    },
    {
      title: "Pinstripe Double-Breasted Suit",
      price: "$399.99",
      description: "Elegant pinstripe pattern with double-breasted styling.",
      affiliateLink: "https://example.com/double-suit-3"
    },
    {
      title: "Luxury Double-Breasted Suit",
      price: "$449.99",
      originalPrice: "$549.99",
      description: "Premium luxury suit with exceptional craftsmanship.",
      affiliateLink: "https://example.com/double-suit-4"
    },
    {
      title: "Navy Double-Breasted Suit",
      price: "$369.99",
      originalPrice: "$469.99",
      description: "Classic navy double-breasted suit with traditional styling.",
      affiliateLink: "https://example.com/double-suit-5"
    },
    {
      title: "Charcoal Double-Breasted Suit",
      price: "$389.99",
      description: "Sophisticated charcoal double-breasted suit.",
      affiliateLink: "https://example.com/double-suit-6"
    },
    {
      title: "Black Double-Breasted Suit",
      price: "$409.99",
      originalPrice: "$509.99",
      description: "Formal black double-breasted suit for evening events.",
      affiliateLink: "https://example.com/double-suit-7"
    },
    {
      title: "Brown Double-Breasted Suit",
      price: "$394.99",
      description: "Unique brown double-breasted suit with vintage appeal.",
      affiliateLink: "https://example.com/double-suit-8"
    },
    {
      title: "Grey Double-Breasted Suit",
      price: "$374.99",
      originalPrice: "$474.99",
      description: "Classic grey double-breasted suit with modern fit.",
      affiliateLink: "https://example.com/double-suit-9"
    },
    {
      title: "Windowpane Double-Breasted Suit",
      price: "$419.99",
      description: "Sophisticated windowpane pattern double-breasted suit.",
      affiliateLink: "https://example.com/double-suit-10"
    },
    {
      title: "Herringbone Double-Breasted Suit",
      price: "$429.99",
      originalPrice: "$529.99",
      description: "Classic herringbone pattern with double-breasted styling.",
      affiliateLink: "https://example.com/double-suit-11"
    },
    {
      title: "Tweed Double-Breasted Suit",
      price: "$439.99",
      description: "Traditional tweed double-breasted suit with country styling.",
      affiliateLink: "https://example.com/double-suit-12"
    },
    {
      title: "Velvet Double-Breasted Suit",
      price: "$459.99",
      originalPrice: "$559.99",
      description: "Luxurious velvet double-breasted suit for special occasions.",
      affiliateLink: "https://example.com/double-suit-13"
    },
    {
      title: "Corduroy Double-Breasted Suit",
      price: "$384.99",
      description: "Casual corduroy double-breasted suit with textured appeal.",
      affiliateLink: "https://example.com/double-suit-14"
    },
    {
      title: "Linen Double-Breasted Suit",
      price: "$349.99",
      originalPrice: "$449.99",
      description: "Breathable linen double-breasted suit for summer events.",
      affiliateLink: "https://example.com/double-suit-15"
    },
    {
      title: "Wool Double-Breasted Suit",
      price: "$414.99",
      description: "Premium wool double-breasted suit with superior quality.",
      affiliateLink: "https://example.com/double-suit-16"
    }
  ];

  const threePieceSuits = [
    {
      title: "Classic Three-Piece Suit",
      price: "$399.99",
      originalPrice: "$499.99",
      description: "Complete three-piece suit with matching vest.",
      affiliateLink: "https://example.com/three-piece-1"
    },
    {
      title: "Wedding Three-Piece Suit",
      price: "$459.99",
      description: "Special occasion three-piece suit perfect for weddings.",
      affiliateLink: "https://example.com/three-piece-2"
    },
    {
      title: "Formal Three-Piece Suit",
      price: "$429.99",
      description: "Professional three-piece suit for business occasions.",
      affiliateLink: "https://example.com/three-piece-3"
    },
    {
      title: "Luxury Three-Piece Suit",
      price: "$549.99",
      originalPrice: "$649.99",
      description: "Premium three-piece suit with superior fabric and tailoring.",
      affiliateLink: "https://example.com/three-piece-4"
    },
    {
      title: "Navy Three-Piece Suit",
      price: "$389.99",
      originalPrice: "$489.99",
      description: "Classic navy three-piece suit with traditional styling.",
      affiliateLink: "https://example.com/three-piece-5"
    },
    {
      title: "Charcoal Three-Piece Suit",
      price: "$419.99",
      description: "Sophisticated charcoal three-piece suit with modern appeal.",
      affiliateLink: "https://example.com/three-piece-6"
    },
    {
      title: "Black Three-Piece Suit",
      price: "$449.99",
      originalPrice: "$549.99",
      description: "Formal black three-piece suit for evening events.",
      affiliateLink: "https://example.com/three-piece-7"
    },
    {
      title: "Brown Three-Piece Suit",
      price: "$434.99",
      description: "Unique brown three-piece suit with vintage charm.",
      affiliateLink: "https://example.com/three-piece-8"
    },
    {
      title: "Grey Three-Piece Suit",
      price: "$404.99",
      originalPrice: "$504.99",
      description: "Versatile grey three-piece suit for various occasions.",
      affiliateLink: "https://example.com/three-piece-9"
    },
    {
      title: "Pinstripe Three-Piece Suit",
      price: "$469.99",
      description: "Elegant pinstripe three-piece suit with professional appeal.",
      affiliateLink: "https://example.com/three-piece-10"
    },
    {
      title: "Tweed Three-Piece Suit",
      price: "$479.99",
      originalPrice: "$579.99",
      description: "Traditional tweed three-piece suit with country styling.",
      affiliateLink: "https://example.com/three-piece-11"
    },
    {
      title: "Wool Three-Piece Suit",
      price: "$454.99",
      description: "Premium wool three-piece suit with superior quality.",
      affiliateLink: "https://example.com/three-piece-12"
    },
    {
      title: "Velvet Three-Piece Suit",
      price: "$519.99",
      originalPrice: "$619.99",
      description: "Luxurious velvet three-piece suit for special occasions.",
      affiliateLink: "https://example.com/three-piece-13"
    },
    {
      title: "Linen Three-Piece Suit",
      price: "$379.99",
      description: "Breathable linen three-piece suit for summer events.",
      affiliateLink: "https://example.com/three-piece-14"
    },
    {
      title: "Silk Three-Piece Suit",
      price: "$589.99",
      originalPrice: "$689.99",
      description: "Luxurious silk three-piece suit with premium finish.",
      affiliateLink: "https://example.com/three-piece-15"
    },
    {
      title: "Designer Three-Piece Suit",
      price: "$629.99",
      description: "Designer three-piece suit with contemporary luxury styling.",
      affiliateLink: "https://example.com/three-piece-16"
    }
  ];

  const weddingSuits = [
    {
      title: "Groom's Wedding Suit",
      price: "$449.99",
      originalPrice: "$549.99",
      description: "Special groom's suit designed for the perfect wedding day.",
      affiliateLink: "https://example.com/wedding-suit-1"
    },
    {
      title: "Ivory Wedding Suit",
      price: "$479.99",
      description: "Elegant ivory colored suit perfect for summer weddings.",
      affiliateLink: "https://example.com/wedding-suit-2"
    },
    {
      title: "Tuxedo Wedding Suit",
      price: "$599.99",
      description: "Formal tuxedo for evening weddings and black-tie events.",
      affiliateLink: "https://example.com/wedding-suit-3"
    },
    {
      title: "Designer Wedding Suit",
      price: "$699.99",
      originalPrice: "$799.99",
      description: "Designer wedding suit with exquisite details and fit.",
      affiliateLink: "https://example.com/wedding-suit-4"
    },
    {
      title: "Navy Wedding Suit",
      price: "$429.99",
      originalPrice: "$529.99",
      description: "Classic navy wedding suit with timeless appeal.",
      affiliateLink: "https://example.com/wedding-suit-5"
    },
    {
      title: "Charcoal Wedding Suit",
      price: "$459.99",
      description: "Sophisticated charcoal wedding suit with modern styling.",
      affiliateLink: "https://example.com/wedding-suit-6"
    },
    {
      title: "Light Grey Wedding Suit",
      price: "$439.99",
      originalPrice: "$539.99",
      description: "Light grey wedding suit perfect for daytime ceremonies.",
      affiliateLink: "https://example.com/wedding-suit-7"
    },
    {
      title: "Burgundy Wedding Suit",
      price: "$489.99",
      description: "Bold burgundy wedding suit for distinctive styling.",
      affiliateLink: "https://example.com/wedding-suit-8"
    },
    {
      title: "Cream Wedding Suit",
      price: "$469.99",
      originalPrice: "$569.99",
      description: "Elegant cream wedding suit for beach and garden weddings.",
      affiliateLink: "https://example.com/wedding-suit-9"
    },
    {
      title: "Black Tie Wedding Suit",
      price: "$649.99",
      description: "Formal black tie wedding suit for evening ceremonies.",
      affiliateLink: "https://example.com/wedding-suit-10"
    },
    {
      title: "Vintage Wedding Suit",
      price: "$519.99",
      originalPrice: "$619.99",
      description: "Vintage-inspired wedding suit with classic details.",
      affiliateLink: "https://example.com/wedding-suit-11"
    },
    {
      title: "Destination Wedding Suit",
      price: "$399.99",
      description: "Lightweight suit perfect for destination weddings.",
      affiliateLink: "https://example.com/wedding-suit-12"
    },
    {
      title: "Royal Blue Wedding Suit",
      price: "$479.99",
      originalPrice: "$579.99",
      description: "Royal blue wedding suit with regal appeal.",
      affiliateLink: "https://example.com/wedding-suit-13"
    },
    {
      title: "Emerald Wedding Suit",
      price: "$509.99",
      description: "Unique emerald wedding suit for bold grooms.",
      affiliateLink: "https://example.com/wedding-suit-14"
    },
    {
      title: "Platinum Wedding Suit",
      price: "$749.99",
      originalPrice: "$849.99",
      description: "Platinum wedding suit with luxury materials and craftsmanship.",
      affiliateLink: "https://example.com/wedding-suit-15"
    },
    {
      title: "Custom Wedding Suit",
      price: "$799.99",
      description: "Custom wedding suit tailored to perfection for your special day.",
      affiliateLink: "https://example.com/wedding-suit-16"
    }
  ];

  const checkedSuits = [
    {
      title: "Windowpane Check Suit",
      price: "$339.99",
      originalPrice: "$439.99",
      description: "Sophisticated windowpane check pattern for modern styling.",
      affiliateLink: "https://example.com/checked-suit-1"
    },
    {
      title: "Glen Plaid Suit",
      price: "$329.99",
      description: "Classic glen plaid pattern with timeless appeal.",
      affiliateLink: "https://example.com/checked-suit-2"
    },
    {
      title: "Houndstooth Suit",
      price: "$349.99",
      description: "Distinctive houndstooth pattern for bold fashion statements.",
      affiliateLink: "https://example.com/checked-suit-3"
    },
    {
      title: "Check Pattern Suit",
      price: "$359.99",
      originalPrice: "$459.99",
      description: "Modern check pattern suit with contemporary fit.",
      affiliateLink: "https://example.com/checked-suit-4"
    },
    {
      title: "Tartan Check Suit",
      price: "$369.99",
      originalPrice: "$469.99",
      description: "Traditional tartan check suit with Scottish heritage.",
      affiliateLink: "https://example.com/checked-suit-5"
    },
    {
      title: "Gingham Check Suit",
      price: "$319.99",
      description: "Classic gingham check pattern with casual elegance.",
      affiliateLink: "https://example.com/checked-suit-6"
    },
    {
      title: "Micro Check Suit",
      price: "$344.99",
      originalPrice: "$444.99",
      description: "Subtle micro check pattern for sophisticated styling.",
      affiliateLink: "https://example.com/checked-suit-7"
    },
    {
      title: "Buffalo Check Suit",
      price: "$354.99",
      description: "Bold buffalo check pattern with rustic appeal.",
      affiliateLink: "https://example.com/checked-suit-8"
    },
    {
      title: "Shepherd's Check Suit",
      price: "$334.99",
      originalPrice: "$434.99",
      description: "Traditional shepherd's check with country styling.",
      affiliateLink: "https://example.com/checked-suit-9"
    },
    {
      title: "Overcheck Suit",
      price: "$374.99",
      description: "Complex overcheck pattern with sophisticated appeal.",
      affiliateLink: "https://example.com/checked-suit-10"
    },
    {
      title: "Prince of Wales Check Suit",
      price: "$389.99",
      originalPrice: "$489.99",
      description: "Classic Prince of Wales check with royal heritage.",
      affiliateLink: "https://example.com/checked-suit-11"
    },
    {
      title: "Tattersall Check Suit",
      price: "$324.99",
      description: "Traditional tattersall check with equestrian styling.",
      affiliateLink: "https://example.com/checked-suit-12"
    },
    {
      title: "Madras Check Suit",
      price: "$314.99",
      originalPrice: "$414.99",
      description: "Colorful madras check perfect for summer events.",
      affiliateLink: "https://example.com/checked-suit-13"
    },
    {
      title: "Vichy Check Suit",
      price: "$329.99",
      description: "Classic vichy check with French countryside appeal.",
      affiliateLink: "https://example.com/checked-suit-14"
    },
    {
      title: "Graph Check Suit",
      price: "$349.99",
      originalPrice: "$449.99",
      description: "Modern graph check pattern with contemporary styling.",
      affiliateLink: "https://example.com/checked-suit-15"
    },
    {
      title: "Basket Weave Check Suit",
      price: "$364.99",
      description: "Textured basket weave check with unique appeal.",
      affiliateLink: "https://example.com/checked-suit-16"
    }
  ];

  const slimFitSuits = [
    {
      title: "Slim Fit Navy Suit",
      price: "$279.99",
      originalPrice: "$379.99",
      description: "Modern slim fit navy suit with contemporary tailoring.",
      affiliateLink: "https://example.com/slim-suit-1"
    },
    {
      title: "Slim Fit Charcoal Suit",
      price: "$269.99",
      description: "Sleek charcoal slim fit suit perfect for young professionals.",
      affiliateLink: "https://example.com/slim-suit-2"
    },
    {
      title: "Slim Fit Black Suit",
      price: "$289.99",
      description: "Sharp black slim fit suit for formal occasions.",
      affiliateLink: "https://example.com/slim-suit-3"
    },
    {
      title: "Slim Fit Patterned Suit",
      price: "$299.99",
      originalPrice: "$399.99",
      description: "Stylish patterned slim fit suit for fashion-forward men.",
      affiliateLink: "https://example.com/slim-suit-4"
    },
    {
      title: "Slim Fit Grey Suit",
      price: "$274.99",
      originalPrice: "$374.99",
      description: "Versatile grey slim fit suit for business and formal wear.",
      affiliateLink: "https://example.com/slim-suit-5"
    },
    {
      title: "Slim Fit Brown Suit",
      price: "$294.99",
      description: "Unique brown slim fit suit with modern appeal.",
      affiliateLink: "https://example.com/slim-suit-6"
    },
    {
      title: "Slim Fit Burgundy Suit",
      price: "$309.99",
      originalPrice: "$409.99",
      description: "Bold burgundy slim fit suit for distinctive styling.",
      affiliateLink: "https://example.com/slim-suit-7"
    },
    {
      title: "Slim Fit Midnight Blue Suit",
      price: "$319.99",
      description: "Sophisticated midnight blue slim fit suit.",
      affiliateLink: "https://example.com/slim-suit-8"
    },
    {
      title: "Slim Fit Olive Suit",
      price: "$284.99",
      originalPrice: "$384.99",
      description: "Contemporary olive slim fit suit with modern styling.",
      affiliateLink: "https://example.com/slim-suit-9"
    },
    {
      title: "Slim Fit Teal Suit",
      price: "$304.99",
      description: "Distinctive teal slim fit suit for modern occasions.",
      affiliateLink: "https://example.com/slim-suit-10"
    },
    {
      title: "Slim Fit Cream Suit",
      price: "$264.99",
      originalPrice: "$364.99",
      description: "Elegant cream slim fit suit perfect for summer events.",
      affiliateLink: "https://example.com/slim-suit-11"
    },
    {
      title: "Slim Fit Forest Green Suit",
      price: "$314.99",
      description: "Rich forest green slim fit suit with unique appeal.",
      affiliateLink: "https://example.com/slim-suit-12"
    },
    {
      title: "Slim Fit Rust Suit",
      price: "$299.99",
      originalPrice: "$399.99",
      description: "Warm rust colored slim fit suit for autumn events.",
      affiliateLink: "https://example.com/slim-suit-13"
    },
    {
      title: "Slim Fit Steel Blue Suit",
      price: "$289.99",
      description: "Modern steel blue slim fit suit with contemporary appeal.",
      affiliateLink: "https://example.com/slim-suit-14"
    },
    {
      title: "Slim Fit Maroon Suit",
      price: "$309.99",
      originalPrice: "$409.99",
      description: "Deep maroon slim fit suit for distinguished occasions.",
      affiliateLink: "https://example.com/slim-suit-15"
    },
    {
      title: "Slim Fit Camel Suit",
      price: "$279.99",
      description: "Warm camel colored slim fit suit perfect for fall.",
      affiliateLink: "https://example.com/slim-suit-16"
    }
  ];

  const classicFitSuits = [
    {
      title: "Classic Fit Navy Suit",
      price: "$259.99",
      originalPrice: "$359.99",
      description: "Traditional classic fit navy suit with comfortable styling.",
      affiliateLink: "https://example.com/classic-suit-1"
    },
    {
      title: "Classic Fit Grey Suit",
      price: "$249.99",
      description: "Reliable grey classic fit suit for business wear.",
      affiliateLink: "https://example.com/classic-suit-2"
    },
    {
      title: "Classic Fit Brown Suit",
      price: "$269.99",
      description: "Warm brown classic fit suit for versatile styling.",
      affiliateLink: "https://example.com/classic-suit-3"
    },
    {
      title: "Classic Fit Pinstripe Suit",
      price: "$279.99",
      originalPrice: "$379.99",
      description: "Professional pinstripe classic fit suit.",
      affiliateLink: "https://example.com/classic-suit-4"
    },
    {
      title: "Classic Fit Black Suit",
      price: "$264.99",
      originalPrice: "$364.99",
      description: "Formal black classic fit suit for special occasions.",
      affiliateLink: "https://example.com/classic-suit-5"
    },
    {
      title: "Classic Fit Charcoal Suit",
      price: "$254.99",
      description: "Sophisticated charcoal classic fit suit with traditional styling.",
      affiliateLink: "https://example.com/classic-suit-6"
    },
    {
      title: "Classic Fit Light Grey Suit",
      price: "$244.99",
      originalPrice: "$344.99",
      description: "Light grey classic fit suit perfect for spring events.",
      affiliateLink: "https://example.com/classic-suit-7"
    },
    {
      title: "Classic Fit Burgundy Suit",
      price: "$284.99",
      description: "Rich burgundy classic fit suit for distinguished styling.",
      affiliateLink: "https://example.com/classic-suit-8"
    },
    {
      title: "Classic Fit Midnight Blue Suit",
      price: "$274.99",
      originalPrice: "$374.99",
      description: "Elegant midnight blue classic fit suit.",
      affiliateLink: "https://example.com/classic-suit-9"
    },
    {
      title: "Classic Fit Olive Suit",
      price: "$269.99",
      description: "Unique olive classic fit suit with traditional comfort.",
      affiliateLink: "https://example.com/classic-suit-10"
    },
    {
      title: "Classic Fit Cream Suit",
      price: "$239.99",
      originalPrice: "$339.99",
      description: "Elegant cream classic fit suit for summer occasions.",
      affiliateLink: "https://example.com/classic-suit-11"
    },
    {
      title: "Classic Fit Forest Green Suit",
      price: "$289.99",
      description: "Deep forest green classic fit suit with traditional styling.",
      affiliateLink: "https://example.com/classic-suit-12"
    },
    {
      title: "Classic Fit Rust Suit",
      price: "$274.99",
      originalPrice: "$374.99",
      description: "Warm rust colored classic fit suit for autumn events.",
      affiliateLink: "https://example.com/classic-suit-13"
    },
    {
      title: "Classic Fit Steel Blue Suit",
      price: "$264.99",
      description: "Modern steel blue classic fit suit with comfortable styling.",
      affiliateLink: "https://example.com/classic-suit-14"
    },
    {
      title: "Classic Fit Maroon Suit",
      price: "$284.99",
      originalPrice: "$384.99",
      description: "Deep maroon classic fit suit for formal occasions.",
      affiliateLink: "https://example.com/classic-suit-15"
    },
    {
      title: "Classic Fit Camel Suit",
      price: "$259.99",
      description: "Warm camel colored classic fit suit with traditional comfort.",
      affiliateLink: "https://example.com/classic-suit-16"
    }
  ];

  const linenSuits = [
    {
      title: "Summer Linen Suit",
      price: "$199.99",
      originalPrice: "$279.99",
      description: "Breathable linen suit perfect for summer weddings.",
      affiliateLink: "https://example.com/linen-suit-1"
    },
    {
      title: "Beige Linen Suit",
      price: "$189.99",
      description: "Light beige linen suit ideal for tropical occasions.",
      affiliateLink: "https://example.com/linen-suit-2"
    },
    {
      title: "White Linen Suit",
      price: "$209.99",
      description: "Crisp white linen suit for destination weddings.",
      affiliateLink: "https://example.com/linen-suit-3"
    },
    {
      title: "Navy Linen Suit",
      price: "$219.99",
      originalPrice: "$299.99",
      description: "Sophisticated navy linen suit for warm weather events.",
      affiliateLink: "https://example.com/linen-suit-4"
    },
    {
      title: "Light Blue Linen Suit",
      price: "$194.99",
      originalPrice: "$274.99",
      description: "Fresh light blue linen suit perfect for beach weddings.",
      affiliateLink: "https://example.com/linen-suit-5"
    },
    {
      title: "Olive Linen Suit",
      price: "$204.99",
      description: "Unique olive linen suit with natural appeal.",
      affiliateLink: "https://example.com/linen-suit-6"
    },
    {
      title: "Charcoal Linen Suit",
      price: "$214.99",
      originalPrice: "$294.99",
      description: "Modern charcoal linen suit with sophisticated styling.",
      affiliateLink: "https://example.com/linen-suit-7"
    },
    {
      title: "Cream Linen Suit",
      price: "$184.99",
      description: "Elegant cream linen suit for summer formal events.",
      affiliateLink: "https://example.com/linen-suit-8"
    },
    {
      title: "Sage Green Linen Suit",
      price: "$199.99",
      originalPrice: "$279.99",
      description: "Calming sage green linen suit with natural comfort.",
      affiliateLink: "https://example.com/linen-suit-9"
    },
    {
      title: "Khaki Linen Suit",
      price: "$189.99",
      description: "Versatile khaki linen suit perfect for outdoor events.",
      affiliateLink: "https://example.com/linen-suit-10"
    },
    {
      title: "Stone Linen Suit",
      price: "$194.99",
      originalPrice: "$274.99",
      description: "Natural stone colored linen suit with earthy appeal.",
      affiliateLink: "https://example.com/linen-suit-11"
    },
    {
      title: "Rust Linen Suit",
      price: "$209.99",
      description: "Warm rust colored linen suit perfect for autumn weddings.",
      affiliateLink: "https://example.com/linen-suit-12"
    },
    {
      title: "Steel Blue Linen Suit",
      price: "$214.99",
      originalPrice: "$294.99",
      description: "Modern steel blue linen suit with contemporary appeal.",
      affiliateLink: "https://example.com/linen-suit-13"
    },
    {
      title: "Mustard Linen Suit",
      price: "$199.99",
      description: "Bold mustard linen suit for unique summer styling.",
      affiliateLink: "https://example.com/linen-suit-14"
    },
    {
      title: "Forest Green Linen Suit",
      price: "$219.99",
      originalPrice: "$299.99",
      description: "Rich forest green linen suit with natural elegance.",
      affiliateLink: "https://example.com/linen-suit-15"
    },
    {
      title: "Lavender Linen Suit",
      price: "$224.99",
      description: "Sophisticated lavender linen suit for spring events.",
      affiliateLink: "https://example.com/linen-suit-16"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            <span className="text-yellow-500">Suits & Blazers</span> Collection
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Elevate your formal wardrobe with our premium collection of suits and blazers. 
            From business meetings to special occasions, find the perfect fit.
          </p>
        </div>

        <CategorySection title="Single-Breasted Suits" products={singleBreastedSuits} />
        <CategorySection title="Double-Breasted Suits" products={doubleBreastedSuits} />
        <CategorySection title="Three-Piece Suits" products={threePieceSuits} />
        <CategorySection title="Wedding Suits" products={weddingSuits} />
        <CategorySection title="Checked or Patterned Suits" products={checkedSuits} />
        <CategorySection title="Slim Fit Suits" products={slimFitSuits} />
        <CategorySection title="Classic Fit Suits" products={classicFitSuits} />
        <CategorySection title="Linen Suits" products={linenSuits} />
      </div>
    </div>
  );
};

export default SuitsBlazersPage;