import React from 'react';
import CategorySection from '../components/CategorySection';

const ShirtsPage = () => {
  const formalShirts = [
    {
      title: "Classic White Formal Shirt",
      price: "$49.99",
      originalPrice: "$69.99",
      description: "Premium cotton formal shirt perfect for business meetings and formal occasions.",
      imageUrl: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
      affiliateLink: "https://example.com/formal-shirt-1"
    },
    {
      title: "Blue Striped Formal Shirt",
      price: "$54.99",
      originalPrice: "$74.99",
      description: "Elegant striped pattern with premium fabric for professional look.",
      imageUrl: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
      affiliateLink: "https://example.com/formal-shirt-2"
    },
    {
      title: "Light Pink Formal Shirt",
      price: "$52.99",
      description: "Subtle pink shade that adds sophistication to your wardrobe.",
      imageUrl: "https://images.pexels.com/photos/1043475/pexels-photo-1043475.jpeg",
      affiliateLink: "https://example.com/formal-shirt-3"
    },
    {
      title: "Charcoal Grey Formal Shirt",
      price: "$56.99",
      description: "Modern charcoal grey perfect for contemporary business attire.",
      imageUrl: "https://images.pexels.com/photos/1043476/pexels-photo-1043476.jpeg",
      affiliateLink: "https://example.com/formal-shirt-4"
    },
    {
      title: "Navy Blue Formal Shirt",
      price: "$51.99",
      originalPrice: "$71.99",
      description: "Classic navy blue with professional tailoring and comfort.",
      imageUrl: "https://images.pexels.com/photos/1043477/pexels-photo-1043477.jpeg",
      affiliateLink: "https://example.com/formal-shirt-5"
    },
    {
      title: "Lavender Formal Shirt",
      price: "$53.99",
      description: "Sophisticated lavender color for modern business professionals.",
      imageUrl: "https://images.pexels.com/photos/1043478/pexels-photo-1043478.jpeg",
      affiliateLink: "https://example.com/formal-shirt-6"
    },
    {
      title: "Cream Formal Shirt",
      price: "$48.99",
      originalPrice: "$68.99",
      description: "Elegant cream shade perfect for formal events and meetings.",
      imageUrl: "https://images.pexels.com/photos/1043479/pexels-photo-1043479.jpeg",
      affiliateLink: "https://example.com/formal-shirt-7"
    },
    {
      title: "Black Formal Shirt",
      price: "$55.99",
      description: "Sharp black formal shirt for evening events and formal occasions.",
      imageUrl: "https://images.pexels.com/photos/1043480/pexels-photo-1043480.jpeg",
      affiliateLink: "https://example.com/formal-shirt-8"
    },
    {
      title: "Light Blue Formal Shirt",
      price: "$50.99",
      originalPrice: "$70.99",
      description: "Fresh light blue color with premium cotton construction.",
      imageUrl: "https://images.pexels.com/photos/1043481/pexels-photo-1043481.jpeg",
      affiliateLink: "https://example.com/formal-shirt-9"
    },
    {
      title: "Mint Green Formal Shirt",
      price: "$52.99",
      description: "Unique mint green shade for contemporary professional styling.",
      imageUrl: "https://images.pexels.com/photos/1043482/pexels-photo-1043482.jpeg",
      affiliateLink: "https://example.com/formal-shirt-10"
    },
    {
      title: "Burgundy Formal Shirt",
      price: "$57.99",
      originalPrice: "$77.99",
      description: "Rich burgundy color perfect for special business occasions.",
      imageUrl: "https://images.pexels.com/photos/1043483/pexels-photo-1043483.jpeg",
      affiliateLink: "https://example.com/formal-shirt-11"
    },
    {
      title: "Steel Grey Formal Shirt",
      price: "$54.99",
      description: "Modern steel grey with contemporary fit and premium fabric.",
      imageUrl: "https://images.pexels.com/photos/1043484/pexels-photo-1043484.jpeg",
      affiliateLink: "https://example.com/formal-shirt-12"
    },
    {
      title: "Peach Formal Shirt",
      price: "$51.99",
      originalPrice: "$71.99",
      description: "Subtle peach tone for sophisticated business attire.",
      imageUrl: "https://images.pexels.com/photos/1043485/pexels-photo-1043485.jpeg",
      affiliateLink: "https://example.com/formal-shirt-13"
    },
    {
      title: "Teal Formal Shirt",
      price: "$55.99",
      description: "Distinctive teal color for modern professional wardrobe.",
      imageUrl: "https://images.pexels.com/photos/1043486/pexels-photo-1043486.jpeg",
      affiliateLink: "https://example.com/formal-shirt-14"
    },
    {
      title: "Olive Green Formal Shirt",
      price: "$53.99",
      originalPrice: "$73.99",
      description: "Sophisticated olive green perfect for contemporary business wear.",
      imageUrl: "https://images.pexels.com/photos/1043487/pexels-photo-1043487.jpeg",
      affiliateLink: "https://example.com/formal-shirt-15"
    },
    {
      title: "Maroon Formal Shirt",
      price: "$56.99",
      description: "Deep maroon color for distinguished formal occasions.",
      imageUrl: "https://images.pexels.com/photos/1043488/pexels-photo-1043488.jpeg",
      affiliateLink: "https://example.com/formal-shirt-16"
    }
  ];

  const printedShirts = [
    {
      title: "Floral Print Casual Shirt",
      price: "$39.99",
      originalPrice: "$59.99",
      description: "Trendy floral pattern perfect for casual outings and weekend wear.",
      imageUrl: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg",
      affiliateLink: "https://example.com/printed-shirt-1"
    },
    {
      title: "Geometric Print Shirt",
      price: "$42.99",
      description: "Modern geometric design that makes a bold fashion statement.",
      imageUrl: "https://images.pexels.com/photos/1040946/pexels-photo-1040946.jpeg",
      affiliateLink: "https://example.com/printed-shirt-2"
    },
    {
      title: "Abstract Art Print Shirt",
      price: "$45.99",
      description: "Unique abstract design for the fashion-forward individual.",
      imageUrl: "https://images.pexels.com/photos/1040947/pexels-photo-1040947.jpeg",
      affiliateLink: "https://example.com/printed-shirt-3"
    },
    {
      title: "Tropical Print Shirt",
      price: "$41.99",
      originalPrice: "$61.99",
      description: "Vibrant tropical patterns perfect for vacation and summer wear.",
      imageUrl: "https://images.pexels.com/photos/1040948/pexels-photo-1040948.jpeg",
      affiliateLink: "https://example.com/printed-shirt-4"
    },
    {
      title: "Paisley Print Shirt",
      price: "$43.99",
      originalPrice: "$63.99",
      description: "Classic paisley pattern with modern styling and comfort.",
      imageUrl: "https://images.pexels.com/photos/1040949/pexels-photo-1040949.jpeg",
      affiliateLink: "https://example.com/printed-shirt-5"
    },
    {
      title: "Polka Dot Print Shirt",
      price: "$40.99",
      description: "Playful polka dot design perfect for casual occasions.",
      imageUrl: "https://images.pexels.com/photos/1040950/pexels-photo-1040950.jpeg",
      affiliateLink: "https://example.com/printed-shirt-6"
    },
    {
      title: "Striped Print Shirt",
      price: "$38.99",
      originalPrice: "$58.99",
      description: "Classic striped pattern with contemporary fit and style.",
      imageUrl: "https://images.pexels.com/photos/1040951/pexels-photo-1040951.jpeg",
      affiliateLink: "https://example.com/printed-shirt-7"
    },
    {
      title: "Checkered Print Shirt",
      price: "$44.99",
      description: "Traditional checkered pattern perfect for casual wear.",
      imageUrl: "https://images.pexels.com/photos/1040952/pexels-photo-1040952.jpeg",
      affiliateLink: "https://example.com/printed-shirt-8"
    },
    {
      title: "Animal Print Shirt",
      price: "$46.99",
      originalPrice: "$66.99",
      description: "Bold animal print design for adventurous fashion choices.",
      imageUrl: "https://images.pexels.com/photos/1040953/pexels-photo-1040953.jpeg",
      affiliateLink: "https://example.com/printed-shirt-9"
    },
    {
      title: "Vintage Print Shirt",
      price: "$42.99",
      description: "Retro vintage patterns with authentic styling and comfort.",
      imageUrl: "https://images.pexels.com/photos/1040954/pexels-photo-1040954.jpeg",
      affiliateLink: "https://example.com/printed-shirt-10"
    },
    {
      title: "Mandala Print Shirt",
      price: "$45.99",
      originalPrice: "$65.99",
      description: "Intricate mandala designs perfect for bohemian styling.",
      imageUrl: "https://images.pexels.com/photos/1040955/pexels-photo-1040955.jpeg",
      affiliateLink: "https://example.com/printed-shirt-11"
    },
    {
      title: "Camouflage Print Shirt",
      price: "$41.99",
      description: "Military-inspired camo pattern for rugged casual wear.",
      imageUrl: "https://images.pexels.com/photos/1040956/pexels-photo-1040956.jpeg",
      affiliateLink: "https://example.com/printed-shirt-12"
    },
    {
      title: "Aztec Print Shirt",
      price: "$44.99",
      originalPrice: "$64.99",
      description: "Traditional Aztec patterns with modern fit and styling.",
      imageUrl: "https://images.pexels.com/photos/1040957/pexels-photo-1040957.jpeg",
      affiliateLink: "https://example.com/printed-shirt-13"
    },
    {
      title: "Tie-Dye Print Shirt",
      price: "$39.99",
      description: "Colorful tie-dye patterns perfect for festival and casual wear.",
      imageUrl: "https://images.pexels.com/photos/1040958/pexels-photo-1040958.jpeg",
      affiliateLink: "https://example.com/printed-shirt-14"
    },
    {
      title: "Marble Print Shirt",
      price: "$47.99",
      originalPrice: "$67.99",
      description: "Elegant marble patterns for sophisticated casual styling.",
      imageUrl: "https://images.pexels.com/photos/1040959/pexels-photo-1040959.jpeg",
      affiliateLink: "https://example.com/printed-shirt-15"
    },
    {
      title: "Galaxy Print Shirt",
      price: "$43.99",
      description: "Cosmic galaxy patterns for unique and eye-catching style.",
      imageUrl: "https://images.pexels.com/photos/1040960/pexels-photo-1040960.jpeg",
      affiliateLink: "https://example.com/printed-shirt-16"
    }
  ];

  const relaxedFitShirts = [
    {
      title: "Relaxed Fit Back Print Shirt",
      price: "$47.99",
      description: "Comfortable relaxed fit with stylish back print design.",
      imageUrl: "https://images.pexels.com/photos/1040961/pexels-photo-1040961.jpeg",
      affiliateLink: "https://example.com/relaxed-shirt-1"
    },
    {
      title: "Oversized Graphic Back Print",
      price: "$49.99",
      originalPrice: "$69.99",
      description: "Trendy oversized fit with eye-catching graphic back print.",
      imageUrl: "https://images.pexels.com/photos/1040962/pexels-photo-1040962.jpeg",
      affiliateLink: "https://example.com/relaxed-shirt-2"
    },
    {
      title: "Minimalist Back Print Shirt",
      price: "$44.99",
      description: "Clean, minimalist design with subtle back print detail.",
      imageUrl: "https://images.pexels.com/photos/1040963/pexels-photo-1040963.jpeg",
      affiliateLink: "https://example.com/relaxed-shirt-3"
    },
    {
      title: "Vintage Back Print Shirt",
      price: "$51.99",
      description: "Retro-inspired back print with relaxed, comfortable fit.",
      imageUrl: "https://images.pexels.com/photos/1040964/pexels-photo-1040964.jpeg",
      affiliateLink: "https://example.com/relaxed-shirt-4"
    },
    {
      title: "Abstract Back Print Shirt",
      price: "$48.99",
      originalPrice: "$68.99",
      description: "Modern abstract artwork on the back with relaxed styling.",
      imageUrl: "https://images.pexels.com/photos/1040965/pexels-photo-1040965.jpeg",
      affiliateLink: "https://example.com/relaxed-shirt-5"
    },
    {
      title: "Typography Back Print Shirt",
      price: "$46.99",
      description: "Bold typography design on back with comfortable fit.",
      imageUrl: "https://images.pexels.com/photos/1040966/pexels-photo-1040966.jpeg",
      affiliateLink: "https://example.com/relaxed-shirt-6"
    },
    {
      title: "Nature Back Print Shirt",
      price: "$50.99",
      originalPrice: "$70.99",
      description: "Beautiful nature-inspired back print with relaxed cut.",
      imageUrl: "https://images.pexels.com/photos/1040967/pexels-photo-1040967.jpeg",
      affiliateLink: "https://example.com/relaxed-shirt-7"
    },
    {
      title: "Geometric Back Print Shirt",
      price: "$45.99",
      description: "Modern geometric patterns on back with oversized fit.",
      imageUrl: "https://images.pexels.com/photos/1040968/pexels-photo-1040968.jpeg",
      affiliateLink: "https://example.com/relaxed-shirt-8"
    },
    {
      title: "Skull Back Print Shirt",
      price: "$52.99",
      originalPrice: "$72.99",
      description: "Edgy skull design on back with comfortable relaxed fit.",
      imageUrl: "https://images.pexels.com/photos/1040969/pexels-photo-1040969.jpeg",
      affiliateLink: "https://example.com/relaxed-shirt-9"
    },
    {
      title: "Music Back Print Shirt",
      price: "$47.99",
      description: "Music-themed back print perfect for music lovers.",
      imageUrl: "https://images.pexels.com/photos/1040970/pexels-photo-1040970.jpeg",
      affiliateLink: "https://example.com/relaxed-shirt-10"
    },
    {
      title: "Sports Back Print Shirt",
      price: "$49.99",
      originalPrice: "$69.99",
      description: "Athletic-inspired back print with relaxed sporty fit.",
      imageUrl: "https://images.pexels.com/photos/1040971/pexels-photo-1040971.jpeg",
      affiliateLink: "https://example.com/relaxed-shirt-11"
    },
    {
      title: "Anime Back Print Shirt",
      price: "$48.99",
      description: "Popular anime character back print with oversized styling.",
      imageUrl: "https://images.pexels.com/photos/1040972/pexels-photo-1040972.jpeg",
      affiliateLink: "https://example.com/relaxed-shirt-12"
    },
    {
      title: "Graffiti Back Print Shirt",
      price: "$51.99",
      originalPrice: "$71.99",
      description: "Street art graffiti design on back with urban fit.",
      imageUrl: "https://images.pexels.com/photos/1040973/pexels-photo-1040973.jpeg",
      affiliateLink: "https://example.com/relaxed-shirt-13"
    },
    {
      title: "Mandala Back Print Shirt",
      price: "$46.99",
      description: "Intricate mandala design on back with relaxed comfort.",
      imageUrl: "https://images.pexels.com/photos/1040974/pexels-photo-1040974.jpeg",
      affiliateLink: "https://example.com/relaxed-shirt-14"
    },
    {
      title: "Galaxy Back Print Shirt",
      price: "$53.99",
      originalPrice: "$73.99",
      description: "Cosmic galaxy print on back with oversized relaxed fit.",
      imageUrl: "https://images.pexels.com/photos/1040975/pexels-photo-1040975.jpeg",
      affiliateLink: "https://example.com/relaxed-shirt-15"
    },
    {
      title: "Dragon Back Print Shirt",
      price: "$50.99",
      description: "Powerful dragon artwork on back with comfortable styling.",
      imageUrl: "https://images.pexels.com/photos/1040976/pexels-photo-1040976.jpeg",
      affiliateLink: "https://example.com/relaxed-shirt-16"
    }
  ];

  const cubanCollarShirts = [
    {
      title: "Classic Cuban Collar Shirt",
      price: "$43.99",
      originalPrice: "$63.99",
      description: "Timeless Cuban collar design perfect for casual elegance.",
      imageUrl: "https://images.pexels.com/photos/1040977/pexels-photo-1040977.jpeg",
      affiliateLink: "https://example.com/cuban-shirt-1"
    },
    {
      title: "Linen Cuban Collar Shirt",
      price: "$48.99",
      description: "Breathable linen fabric with classic Cuban collar styling.",
      imageUrl: "https://images.pexels.com/photos/1040978/pexels-photo-1040978.jpeg",
      affiliateLink: "https://example.com/cuban-shirt-2"
    },
    {
      title: "Short Sleeve Cuban Shirt",
      price: "$41.99",
      description: "Perfect for summer with comfortable short sleeves.",
      imageUrl: "https://images.pexels.com/photos/1040979/pexels-photo-1040979.jpeg",
      affiliateLink: "https://example.com/cuban-shirt-3"
    },
    {
      title: "Silk Cuban Collar Shirt",
      price: "$67.99",
      originalPrice: "$89.99",
      description: "Luxurious silk fabric with sophisticated Cuban collar.",
      imageUrl: "https://images.pexels.com/photos/1040980/pexels-photo-1040980.jpeg",
      affiliateLink: "https://example.com/cuban-shirt-4"
    },
    {
      title: "Tropical Cuban Collar Shirt",
      price: "$45.99",
      originalPrice: "$65.99",
      description: "Vibrant tropical prints with classic Cuban styling.",
      imageUrl: "https://images.pexels.com/photos/1040981/pexels-photo-1040981.jpeg",
      affiliateLink: "https://example.com/cuban-shirt-5"
    },
    {
      title: "Vintage Cuban Collar Shirt",
      price: "$46.99",
      description: "Retro-inspired design with authentic Cuban collar cut.",
      imageUrl: "https://images.pexels.com/photos/1040982/pexels-photo-1040982.jpeg",
      affiliateLink: "https://example.com/cuban-shirt-6"
    },
    {
      title: "Striped Cuban Collar Shirt",
      price: "$44.99",
      originalPrice: "$64.99",
      description: "Classic stripes with relaxed Cuban collar styling.",
      imageUrl: "https://images.pexels.com/photos/1040983/pexels-photo-1040983.jpeg",
      affiliateLink: "https://example.com/cuban-shirt-7"
    },
    {
      title: "Floral Cuban Collar Shirt",
      price: "$47.99",
      description: "Beautiful floral patterns with Cuban collar elegance.",
      imageUrl: "https://images.pexels.com/photos/1040984/pexels-photo-1040984.jpeg",
      affiliateLink: "https://example.com/cuban-shirt-8"
    },
    {
      title: "Solid Color Cuban Shirt",
      price: "$42.99",
      originalPrice: "$62.99",
      description: "Clean solid colors with classic Cuban collar design.",
      imageUrl: "https://images.pexels.com/photos/1040985/pexels-photo-1040985.jpeg",
      affiliateLink: "https://example.com/cuban-shirt-9"
    },
    {
      title: "Paisley Cuban Collar Shirt",
      price: "$49.99",
      description: "Intricate paisley patterns with Cuban collar sophistication.",
      imageUrl: "https://images.pexels.com/photos/1040986/pexels-photo-1040986.jpeg",
      affiliateLink: "https://example.com/cuban-shirt-10"
    },
    {
      title: "Geometric Cuban Collar Shirt",
      price: "$45.99",
      originalPrice: "$65.99",
      description: "Modern geometric prints with Cuban collar styling.",
      imageUrl: "https://images.pexels.com/photos/1040987/pexels-photo-1040987.jpeg",
      affiliateLink: "https://example.com/cuban-shirt-11"
    },
    {
      title: "Chambray Cuban Collar Shirt",
      price: "$48.99",
      description: "Soft chambray fabric with classic Cuban collar cut.",
      imageUrl: "https://images.pexels.com/photos/1040988/pexels-photo-1040988.jpeg",
      affiliateLink: "https://example.com/cuban-shirt-12"
    },
    {
      title: "Denim Cuban Collar Shirt",
      price: "$51.99",
      originalPrice: "$71.99",
      description: "Casual denim fabric with Cuban collar styling.",
      imageUrl: "https://images.pexels.com/photos/1040989/pexels-photo-1040989.jpeg",
      affiliateLink: "https://example.com/cuban-shirt-13"
    },
    {
      title: "Polka Dot Cuban Shirt",
      price: "$44.99",
      description: "Playful polka dots with sophisticated Cuban collar.",
      imageUrl: "https://images.pexels.com/photos/1040990/pexels-photo-1040990.jpeg",
      affiliateLink: "https://example.com/cuban-shirt-14"
    },
    {
      title: "Checkered Cuban Collar Shirt",
      price: "$46.99",
      originalPrice: "$66.99",
      description: "Classic checkered pattern with Cuban collar elegance.",
      imageUrl: "https://images.pexels.com/photos/1040991/pexels-photo-1040991.jpeg",
      affiliateLink: "https://example.com/cuban-shirt-15"
    },
    {
      title: "Tie-Dye Cuban Collar Shirt",
      price: "$43.99",
      description: "Colorful tie-dye patterns with relaxed Cuban styling.",
      imageUrl: "https://images.pexels.com/photos/1040992/pexels-photo-1040992.jpeg",
      affiliateLink: "https://example.com/cuban-shirt-16"
    }
  ];

  const flannelShirts = [
    {
      title: "Red Plaid Flannel Shirt",
      price: "$38.99",
      originalPrice: "$58.99",
      description: "Classic red plaid pattern perfect for casual winter wear.",
      imageUrl: "https://images.pexels.com/photos/1040993/pexels-photo-1040993.jpeg",
      affiliateLink: "https://example.com/flannel-shirt-1"
    },
    {
      title: "Navy Blue Flannel Shirt",
      price: "$41.99",
      description: "Versatile navy blue flannel for layering and standalone wear.",
      imageUrl: "https://images.pexels.com/photos/1040994/pexels-photo-1040994.jpeg",
      affiliateLink: "https://example.com/flannel-shirt-2"
    },
    {
      title: "Green Check Flannel Shirt",
      price: "$39.99",
      description: "Outdoorsy green check pattern with soft flannel fabric.",
      imageUrl: "https://images.pexels.com/photos/1040995/pexels-photo-1040995.jpeg",
      affiliateLink: "https://example.com/flannel-shirt-3"
    },
    {
      title: "Grey Flannel Shirt",
      price: "$42.99",
      originalPrice: "$62.99",
      description: "Modern grey flannel with contemporary fit and styling.",
      imageUrl: "https://images.pexels.com/photos/1040996/pexels-photo-1040996.jpeg",
      affiliateLink: "https://example.com/flannel-shirt-4"
    },
    {
      title: "Black Watch Flannel Shirt",
      price: "$40.99",
      originalPrice: "$60.99",
      description: "Classic black watch plaid with premium flannel fabric.",
      imageUrl: "https://images.pexels.com/photos/1040997/pexels-photo-1040997.jpeg",
      affiliateLink: "https://example.com/flannel-shirt-5"
    },
    {
      title: "Buffalo Plaid Flannel Shirt",
      price: "$37.99",
      description: "Traditional buffalo plaid pattern with rugged styling.",
      imageUrl: "https://images.pexels.com/photos/1040998/pexels-photo-1040998.jpeg",
      affiliateLink: "https://example.com/flannel-shirt-6"
    },
    {
      title: "Burgundy Flannel Shirt",
      price: "$43.99",
      originalPrice: "$63.99",
      description: "Rich burgundy color with soft flannel comfort.",
      imageUrl: "https://images.pexels.com/photos/1040999/pexels-photo-1040999.jpeg",
      affiliateLink: "https://example.com/flannel-shirt-7"
    },
    {
      title: "Brown Plaid Flannel Shirt",
      price: "$39.99",
      description: "Earthy brown plaid perfect for outdoor activities.",
      imageUrl: "https://images.pexels.com/photos/1041000/pexels-photo-1041000.jpeg",
      affiliateLink: "https://example.com/flannel-shirt-8"
    },
    {
      title: "Blue Tartan Flannel Shirt",
      price: "$44.99",
      originalPrice: "$64.99",
      description: "Traditional tartan pattern with modern flannel comfort.",
      imageUrl: "https://images.pexels.com/photos/1041001/pexels-photo-1041001.jpeg",
      affiliateLink: "https://example.com/flannel-shirt-9"
    },
    {
      title: "Orange Plaid Flannel Shirt",
      price: "$38.99",
      description: "Vibrant orange plaid for bold casual styling.",
      imageUrl: "https://images.pexels.com/photos/1041002/pexels-photo-1041002.jpeg",
      affiliateLink: "https://example.com/flannel-shirt-10"
    },
    {
      title: "Purple Check Flannel Shirt",
      price: "$41.99",
      originalPrice: "$61.99",
      description: "Unique purple check pattern with soft flannel fabric.",
      imageUrl: "https://images.pexels.com/photos/1041003/pexels-photo-1041003.jpeg",
      affiliateLink: "https://example.com/flannel-shirt-11"
    },
    {
      title: "Yellow Plaid Flannel Shirt",
      price: "$40.99",
      description: "Bright yellow plaid for cheerful casual wear.",
      imageUrl: "https://images.pexels.com/photos/1041004/pexels-photo-1041004.jpeg",
      affiliateLink: "https://example.com/flannel-shirt-12"
    },
    {
      title: "Olive Green Flannel Shirt",
      price: "$42.99",
      originalPrice: "$62.99",
      description: "Military-inspired olive green with flannel comfort.",
      imageUrl: "https://images.pexels.com/photos/1041005/pexels-photo-1041005.jpeg",
      affiliateLink: "https://example.com/flannel-shirt-13"
    },
    {
      title: "Cream Flannel Shirt",
      price: "$39.99",
      description: "Soft cream color with premium flannel construction.",
      imageUrl: "https://images.pexels.com/photos/1041006/pexels-photo-1041006.jpeg",
      affiliateLink: "https://example.com/flannel-shirt-14"
    },
    {
      title: "Maroon Plaid Flannel Shirt",
      price: "$43.99",
      originalPrice: "$63.99",
      description: "Deep maroon plaid with classic flannel styling.",
      imageUrl: "https://images.pexels.com/photos/1041007/pexels-photo-1041007.jpeg",
      affiliateLink: "https://example.com/flannel-shirt-15"
    },
    {
      title: "Teal Check Flannel Shirt",
      price: "$41.99",
      description: "Distinctive teal check pattern with soft flannel feel.",
      imageUrl: "https://images.pexels.com/photos/1041008/pexels-photo-1041008.jpeg",
      affiliateLink: "https://example.com/flannel-shirt-16"
    }
  ];

  const linenShirts = [
    {
      title: "White Linen Shirt",
      price: "$55.99",
      originalPrice: "$75.99",
      description: "Pure white linen shirt perfect for summer elegance.",
      imageUrl: "https://images.pexels.com/photos/1041009/pexels-photo-1041009.jpeg",
      affiliateLink: "https://example.com/linen-shirt-1"
    },
    {
      title: "Beige Linen Shirt",
      price: "$52.99",
      description: "Natural beige color with breathable linen fabric.",
      imageUrl: "https://images.pexels.com/photos/1041010/pexels-photo-1041010.jpeg",
      affiliateLink: "https://example.com/linen-shirt-2"
    },
    {
      title: "Light Blue Linen Shirt",
      price: "$54.99",
      description: "Soft blue shade perfect for casual summer occasions.",
      imageUrl: "https://images.pexels.com/photos/1041011/pexels-photo-1041011.jpeg",
      affiliateLink: "https://example.com/linen-shirt-3"
    },
    {
      title: "Olive Green Linen Shirt",
      price: "$56.99",
      originalPrice: "$76.99",
      description: "Sophisticated olive green with premium linen quality.",
      imageUrl: "https://images.pexels.com/photos/1041012/pexels-photo-1041012.jpeg",
      affiliateLink: "https://example.com/linen-shirt-4"
    },
    {
      title: "Navy Blue Linen Shirt",
      price: "$57.99",
      originalPrice: "$77.99",
      description: "Classic navy blue with breathable linen construction.",
      imageUrl: "https://images.pexels.com/photos/1041013/pexels-photo-1041013.jpeg",
      affiliateLink: "https://example.com/linen-shirt-5"
    },
    {
      title: "Charcoal Grey Linen Shirt",
      price: "$53.99",
      description: "Modern charcoal grey with premium linen fabric.",
      imageUrl: "https://images.pexels.com/photos/1041014/pexels-photo-1041014.jpeg",
      affiliateLink: "https://example.com/linen-shirt-6"
    },
    {
      title: "Cream Linen Shirt",
      price: "$54.99",
      originalPrice: "$74.99",
      description: "Elegant cream shade with soft linen texture.",
      imageUrl: "https://images.pexels.com/photos/1041015/pexels-photo-1041015.jpeg",
      affiliateLink: "https://example.com/linen-shirt-7"
    },
    {
      title: "Sage Green Linen Shirt",
      price: "$55.99",
      description: "Calming sage green with natural linen comfort.",
      imageUrl: "https://images.pexels.com/photos/1041016/pexels-photo-1041016.jpeg",
      affiliateLink: "https://example.com/linen-shirt-8"
    },
    {
      title: "Dusty Pink Linen Shirt",
      price: "$56.99",
      originalPrice: "$76.99",
      description: "Subtle dusty pink with premium linen quality.",
      imageUrl: "https://images.pexels.com/photos/1041017/pexels-photo-1041017.jpeg",
      affiliateLink: "https://example.com/linen-shirt-9"
    },
    {
      title: "Khaki Linen Shirt",
      price: "$52.99",
      description: "Versatile khaki color with breathable linen fabric.",
      imageUrl: "https://images.pexels.com/photos/1041018/pexels-photo-1041018.jpeg",
      affiliateLink: "https://example.com/linen-shirt-10"
    },
    {
      title: "Lavender Linen Shirt",
      price: "$58.99",
      originalPrice: "$78.99",
      description: "Sophisticated lavender with soft linen construction.",
      imageUrl: "https://images.pexels.com/photos/1041019/pexels-photo-1041019.jpeg",
      affiliateLink: "https://example.com/linen-shirt-11"
    },
    {
      title: "Rust Orange Linen Shirt",
      price: "$54.99",
      description: "Warm rust orange with premium linen comfort.",
      imageUrl: "https://images.pexels.com/photos/1041020/pexels-photo-1041020.jpeg",
      affiliateLink: "https://example.com/linen-shirt-12"
    },
    {
      title: "Steel Blue Linen Shirt",
      price: "$57.99",
      originalPrice: "$77.99",
      description: "Modern steel blue with breathable linen fabric.",
      imageUrl: "https://images.pexels.com/photos/1041021/pexels-photo-1041021.jpeg",
      affiliateLink: "https://example.com/linen-shirt-13"
    },
    {
      title: "Mustard Yellow Linen Shirt",
      price: "$55.99",
      description: "Bold mustard yellow with natural linen texture.",
      imageUrl: "https://images.pexels.com/photos/1041022/pexels-photo-1041022.jpeg",
      affiliateLink: "https://example.com/linen-shirt-14"
    },
    {
      title: "Burgundy Linen Shirt",
      price: "$59.99",
      originalPrice: "$79.99",
      description: "Rich burgundy color with premium linen quality.",
      imageUrl: "https://images.pexels.com/photos/1041023/pexels-photo-1041023.jpeg",
      affiliateLink: "https://example.com/linen-shirt-15"
    },
    {
      title: "Forest Green Linen Shirt",
      price: "$56.99",
      description: "Deep forest green with soft linen comfort.",
      imageUrl: "https://images.pexels.com/photos/1041024/pexels-photo-1041024.jpeg",
      affiliateLink: "https://example.com/linen-shirt-16"
    }
  ];

  const oxfordShirts = [
    {
      title: "Classic Oxford Shirt",
      price: "$48.99",
      originalPrice: "$68.99",
      description: "Traditional oxford weave with timeless button-down collar.",
      imageUrl: "https://images.pexels.com/photos/1041025/pexels-photo-1041025.jpeg",
      affiliateLink: "https://example.com/oxford-shirt-1"
    },
    {
      title: "Chambray Oxford Shirt",
      price: "$51.99",
      description: "Modern chambray fabric with oxford styling.",
      imageUrl: "https://images.pexels.com/photos/1041026/pexels-photo-1041026.jpeg",
      affiliateLink: "https://example.com/oxford-shirt-2"
    },
    {
      title: "Pinpoint Oxford Shirt",
      price: "$53.99",
      description: "Fine pinpoint oxford weave for refined appearance.",
      imageUrl: "https://images.pexels.com/photos/1041027/pexels-photo-1041027.jpeg",
      affiliateLink: "https://example.com/oxford-shirt-3"
    },
    {
      title: "Oxford Button-Down Shirt",
      price: "$49.99",
      originalPrice: "$69.99",
      description: "Classic button-down collar with authentic oxford fabric.",
      imageUrl: "https://images.pexels.com/photos/1041028/pexels-photo-1041028.jpeg",
      affiliateLink: "https://example.com/oxford-shirt-4"
    },
    {
      title: "White Oxford Shirt",
      price: "$47.99",
      originalPrice: "$67.99",
      description: "Crisp white oxford with traditional button-down styling.",
      imageUrl: "https://images.pexels.com/photos/1041029/pexels-photo-1041029.jpeg",
      affiliateLink: "https://example.com/oxford-shirt-5"
    },
    {
      title: "Blue Oxford Shirt",
      price: "$50.99",
      description: "Classic blue oxford with premium cotton construction.",
      imageUrl: "https://images.pexels.com/photos/1041030/pexels-photo-1041030.jpeg",
      affiliateLink: "https://example.com/oxford-shirt-6"
    },
    {
      title: "Pink Oxford Shirt",
      price: "$52.99",
      originalPrice: "$72.99",
      description: "Sophisticated pink oxford with button-down collar.",
      imageUrl: "https://images.pexels.com/photos/1041031/pexels-photo-1041031.jpeg",
      affiliateLink: "https://example.com/oxford-shirt-7"
    },
    {
      title: "Yellow Oxford Shirt",
      price: "$49.99",
      description: "Bright yellow oxford with traditional styling.",
      imageUrl: "https://images.pexels.com/photos/1041032/pexels-photo-1041032.jpeg",
      affiliateLink: "https://example.com/oxford-shirt-8"
    },
    {
      title: "Green Oxford Shirt",
      price: "$51.99",
      originalPrice: "$71.99",
      description: "Fresh green oxford with classic button-down design.",
      imageUrl: "https://images.pexels.com/photos/1041033/pexels-photo-1041033.jpeg",
      affiliateLink: "https://example.com/oxford-shirt-9"
    },
    {
      title: "Grey Oxford Shirt",
      price: "$48.99",
      description: "Modern grey oxford with premium fabric quality.",
      imageUrl: "https://images.pexels.com/photos/1041034/pexels-photo-1041034.jpeg",
      affiliateLink: "https://example.com/oxford-shirt-10"
    },
    {
      title: "Striped Oxford Shirt",
      price: "$54.99",
      originalPrice: "$74.99",
      description: "Classic striped pattern with oxford weave construction.",
      imageUrl: "https://images.pexels.com/photos/1041035/pexels-photo-1041035.jpeg",
      affiliateLink: "https://example.com/oxford-shirt-11"
    },
    {
      title: "Navy Oxford Shirt",
      price: "$50.99",
      description: "Versatile navy oxford with traditional button-down collar.",
      imageUrl: "https://images.pexels.com/photos/1041036/pexels-photo-1041036.jpeg",
      affiliateLink: "https://example.com/oxford-shirt-12"
    },
    {
      title: "Lavender Oxford Shirt",
      price: "$53.99",
      originalPrice: "$73.99",
      description: "Elegant lavender oxford with sophisticated styling.",
      imageUrl: "https://images.pexels.com/photos/1041037/pexels-photo-1041037.jpeg",
      affiliateLink: "https://example.com/oxford-shirt-13"
    },
    {
      title: "Burgundy Oxford Shirt",
      price: "$52.99",
      description: "Rich burgundy oxford with premium cotton fabric.",
      imageUrl: "https://images.pexels.com/photos/1041038/pexels-photo-1041038.jpeg",
      affiliateLink: "https://example.com/oxford-shirt-14"
    },
    {
      title: "Teal Oxford Shirt",
      price: "$51.99",
      originalPrice: "$71.99",
      description: "Distinctive teal oxford with classic button-down design.",
      imageUrl: "https://images.pexels.com/photos/1041039/pexels-photo-1041039.jpeg",
      affiliateLink: "https://example.com/oxford-shirt-15"
    },
    {
      title: "Cream Oxford Shirt",
      price: "$49.99",
      description: "Elegant cream oxford with traditional styling.",
      imageUrl: "https://images.pexels.com/photos/1041040/pexels-photo-1041040.jpeg",
      affiliateLink: "https://example.com/oxford-shirt-16"
    }
  ];

  const henleyShirts = [
    {
      title: "Long Sleeve Henley Shirt",
      price: "$34.99",
      originalPrice: "$54.99",
      description: "Comfortable cotton henley with classic button placket.",
      imageUrl: "https://images.pexels.com/photos/1041041/pexels-photo-1041041.jpeg",
      affiliateLink: "https://example.com/henley-shirt-1"
    },
    {
      title: "Short Sleeve Henley Shirt",
      price: "$29.99",
      description: "Perfect summer henley with breathable cotton fabric.",
      imageUrl: "https://images.pexels.com/photos/1041042/pexels-photo-1041042.jpeg",
      affiliateLink: "https://example.com/henley-shirt-2"
    },
    {
      title: "Striped Henley Shirt",
      price: "$36.99",
      description: "Classic striped pattern with comfortable henley styling.",
      imageUrl: "https://images.pexels.com/photos/1041043/pexels-photo-1041043.jpeg",
      affiliateLink: "https://example.com/henley-shirt-3"
    },
    {
      title: "Thermal Henley Shirt",
      price: "$39.99",
      originalPrice: "$59.99",
      description: "Warm thermal fabric perfect for layering in cold weather.",
      imageUrl: "https://images.pexels.com/photos/1041044/pexels-photo-1041044.jpeg",
      affiliateLink: "https://example.com/henley-shirt-4"
    },
    {
      title: "White Henley Shirt",
      price: "$32.99",
      originalPrice: "$52.99",
      description: "Classic white henley with comfortable cotton construction.",
      imageUrl: "https://images.pexels.com/photos/1041045/pexels-photo-1041045.jpeg",
      affiliateLink: "https://example.com/henley-shirt-5"
    },
    {
      title: "Black Henley Shirt",
      price: "$33.99",
      description: "Versatile black henley perfect for casual styling.",
      imageUrl: "https://images.pexels.com/photos/1041046/pexels-photo-1041046.jpeg",
      affiliateLink: "https://example.com/henley-shirt-6"
    },
    {
      title: "Grey Henley Shirt",
      price: "$31.99",
      originalPrice: "$51.99",
      description: "Modern grey henley with soft cotton fabric.",
      imageUrl: "https://images.pexels.com/photos/1041047/pexels-photo-1041047.jpeg",
      affiliateLink: "https://example.com/henley-shirt-7"
    },
    {
      title: "Navy Henley Shirt",
      price: "$35.99",
      description: "Classic navy henley with traditional button placket.",
      imageUrl: "https://images.pexels.com/photos/1041048/pexels-photo-1041048.jpeg",
      affiliateLink: "https://example.com/henley-shirt-8"
    },
    {
      title: "Burgundy Henley Shirt",
      price: "$37.99",
      originalPrice: "$57.99",
      description: "Rich burgundy henley with premium cotton quality.",
      imageUrl: "https://images.pexels.com/photos/1041049/pexels-photo-1041049.jpeg",
      affiliateLink: "https://example.com/henley-shirt-9"
    },
    {
      title: "Olive Green Henley Shirt",
      price: "$34.99",
      description: "Military-inspired olive green with henley styling.",
      imageUrl: "https://images.pexels.com/photos/1041050/pexels-photo-1041050.jpeg",
      affiliateLink: "https://example.com/henley-shirt-10"
    },
    {
      title: "Maroon Henley Shirt",
      price: "$36.99",
      originalPrice: "$56.99",
      description: "Deep maroon henley with comfortable cotton construction.",
      imageUrl: "https://images.pexels.com/photos/1041051/pexels-photo-1041051.jpeg",
      affiliateLink: "https://example.com/henley-shirt-11"
    },
    {
      title: "Cream Henley Shirt",
      price: "$33.99",
      description: "Elegant cream henley with soft cotton fabric.",
      imageUrl: "https://images.pexels.com/photos/1041052/pexels-photo-1041052.jpeg",
      affiliateLink: "https://example.com/henley-shirt-12"
    },
    {
      title: "Charcoal Henley Shirt",
      price: "$35.99",
      originalPrice: "$55.99",
      description: "Modern charcoal henley with premium cotton quality.",
      imageUrl: "https://images.pexels.com/photos/1041053/pexels-photo-1041053.jpeg",
      affiliateLink: "https://example.com/henley-shirt-13"
    },
    {
      title: "Forest Green Henley Shirt",
      price: "$34.99",
      description: "Deep forest green with classic henley button placket.",
      imageUrl: "https://images.pexels.com/photos/1041054/pexels-photo-1041054.jpeg",
      affiliateLink: "https://example.com/henley-shirt-14"
    },
    {
      title: "Rust Orange Henley Shirt",
      price: "$37.99",
      originalPrice: "$57.99",
      description: "Warm rust orange henley with comfortable cotton fabric.",
      imageUrl: "https://images.pexels.com/photos/1041055/pexels-photo-1041055.jpeg",
      affiliateLink: "https://example.com/henley-shirt-15"
    },
    {
      title: "Steel Blue Henley Shirt",
      price: "$35.99",
      description: "Modern steel blue henley with soft cotton construction.",
      imageUrl: "https://images.pexels.com/photos/1041056/pexels-photo-1041056.jpeg",
      affiliateLink: "https://example.com/henley-shirt-16"
    }
  ];

  const poloShirts = [
    {
      title: "Classic Polo Shirt",
      price: "$32.99",
      originalPrice: "$52.99",
      description: "Timeless polo design with comfortable pique cotton fabric.",
      imageUrl: "https://images.pexels.com/photos/1041057/pexels-photo-1041057.jpeg",
      affiliateLink: "https://example.com/polo-shirt-1"
    },
    {
      title: "Slim Fit Polo Shirt",
      price: "$35.99",
      description: "Modern slim fit polo for a contemporary look.",
      imageUrl: "https://images.pexels.com/photos/1041058/pexels-photo-1041058.jpeg",
      affiliateLink: "https://example.com/polo-shirt-2"
    },
    {
      title: "Long Sleeve Polo Shirt",
      price: "$38.99",
      description: "Versatile long sleeve polo perfect for transitional weather.",
      imageUrl: "https://images.pexels.com/photos/1041059/pexels-photo-1041059.jpeg",
      affiliateLink: "https://example.com/polo-shirt-3"
    },
    {
      title: "Premium Pique Polo Shirt",
      price: "$44.99",
      originalPrice: "$64.99",
      description: "High-quality pique fabric with superior comfort and durability.",
      imageUrl: "https://images.pexels.com/photos/1041060/pexels-photo-1041060.jpeg",
      affiliateLink: "https://example.com/polo-shirt-4"
    },
    {
      title: "White Polo Shirt",
      price: "$31.99",
      originalPrice: "$51.99",
      description: "Classic white polo with traditional pique construction.",
      imageUrl: "https://images.pexels.com/photos/1041061/pexels-photo-1041061.jpeg",
      affiliateLink: "https://example.com/polo-shirt-5"
    },
    {
      title: "Navy Blue Polo Shirt",
      price: "$33.99",
      description: "Versatile navy polo perfect for casual and smart-casual wear.",
      imageUrl: "https://images.pexels.com/photos/1041062/pexels-photo-1041062.jpeg",
      affiliateLink: "https://example.com/polo-shirt-6"
    },
    {
      title: "Black Polo Shirt",
      price: "$34.99",
      originalPrice: "$54.99",
      description: "Sleek black polo with comfortable pique fabric.",
      imageUrl: "https://images.pexels.com/photos/1041063/pexels-photo-1041063.jpeg",
      affiliateLink: "https://example.com/polo-shirt-7"
    },
    {
      title: "Grey Polo Shirt",
      price: "$32.99",
      description: "Modern grey polo with soft pique cotton construction.",
      imageUrl: "https://images.pexels.com/photos/1041064/pexels-photo-1041064.jpeg",
      affiliateLink: "https://example.com/polo-shirt-8"
    },
    {
      title: "Red Polo Shirt",
      price: "$35.99",
      originalPrice: "$55.99",
      description: "Bold red polo with classic collar and button design.",
      imageUrl: "https://images.pexels.com/photos/1041065/pexels-photo-1041065.jpeg",
      affiliateLink: "https://example.com/polo-shirt-9"
    },
    {
      title: "Green Polo Shirt",
      price: "$33.99",
      description: "Fresh green polo with traditional pique fabric.",
      imageUrl: "https://images.pexels.com/photos/1041066/pexels-photo-1041066.jpeg",
      affiliateLink: "https://example.com/polo-shirt-10"
    },
    {
      title: "Yellow Polo Shirt",
      price: "$34.99",
      originalPrice: "$54.99",
      description: "Bright yellow polo with comfortable cotton construction.",
      imageUrl: "https://images.pexels.com/photos/1041067/pexels-photo-1041067.jpeg",
      affiliateLink: "https://example.com/polo-shirt-11"
    },
    {
      title: "Purple Polo Shirt",
      price: "$36.99",
      description: "Distinctive purple polo with premium pique fabric.",
      imageUrl: "https://images.pexels.com/photos/1041068/pexels-photo-1041068.jpeg",
      affiliateLink: "https://example.com/polo-shirt-12"
    },
    {
      title: "Orange Polo Shirt",
      price: "$33.99",
      originalPrice: "$53.99",
      description: "Vibrant orange polo with classic polo styling.",
      imageUrl: "https://images.pexels.com/photos/1041069/pexels-photo-1041069.jpeg",
      affiliateLink: "https://example.com/polo-shirt-13"
    },
    {
      title: "Pink Polo Shirt",
      price: "$35.99",
      description: "Sophisticated pink polo with soft pique cotton.",
      imageUrl: "https://images.pexels.com/photos/1041070/pexels-photo-1041070.jpeg",
      affiliateLink: "https://example.com/polo-shirt-14"
    },
    {
      title: "Burgundy Polo Shirt",
      price: "$37.99",
      originalPrice: "$57.99",
      description: "Rich burgundy polo with premium cotton construction.",
      imageUrl: "https://images.pexels.com/photos/1041071/pexels-photo-1041071.jpeg",
      affiliateLink: "https://example.com/polo-shirt-15"
    },
    {
      title: "Teal Polo Shirt",
      price: "$34.99",
      description: "Modern teal polo with comfortable pique fabric.",
      imageUrl: "https://images.pexels.com/photos/1041072/pexels-photo-1041072.jpeg",
      affiliateLink: "https://example.com/polo-shirt-16"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-yellow-500">Shirts</span> Collection
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Discover our premium collection of shirts for every occasion. From formal business wear 
            to casual weekend styles, find the perfect shirt to elevate your wardrobe.
          </p>
        </div>

        <CategorySection title="Formal Shirts" products={formalShirts} />
        <CategorySection title="Printed Shirts" products={printedShirts} />
        <CategorySection title="Relaxed Fit Shirts with Back Prints" products={relaxedFitShirts} />
        <CategorySection title="Cuban Collar Shirts" products={cubanCollarShirts} />
        <CategorySection title="Flannel Shirts" products={flannelShirts} />
        <CategorySection title="Linen Shirts" products={linenShirts} />
        <CategorySection title="Oxford Shirts" products={oxfordShirts} />
        <CategorySection title="Henley Shirts" products={henleyShirts} />
        <CategorySection title="Polo Shirts" products={poloShirts} />
      </div>
    </div>
  );
};

export default ShirtsPage;