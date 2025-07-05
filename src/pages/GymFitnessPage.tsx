import React from 'react';
import CategorySection from '../components/CategorySection';

const GymFitnessPage = () => {
  const gymTShirts = [
    {
      title: "Performance Gym T-Shirt",
      price: "$24.99",
      originalPrice: "$34.99",
      description: "Moisture-wicking performance t-shirt for intense workouts.",
      imageUrl: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
      affiliateLink: "https://example.com/gym-tshirt-1"
    },
    {
      title: "Muscle Fit Training Tee",
      price: "$22.99",
      description: "Fitted training t-shirt designed to show your physique.",
      imageUrl: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg",
      affiliateLink: "https://example.com/gym-tshirt-2"
    },
    {
      title: "Breathable Mesh Tank",
      price: "$26.99",
      description: "Mesh panel tank top for maximum airflow during workouts.",
      imageUrl: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg",
      affiliateLink: "https://example.com/gym-tshirt-3"
    },
    {
      title: "Compression Fit Tee",
      price: "$28.99",
      originalPrice: "$38.99",
      description: "Compression t-shirt for enhanced muscle support.",
      imageUrl: "https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg",
      affiliateLink: "https://example.com/gym-tshirt-4"
    },
    {
      title: "Quick-Dry Gym Tee",
      price: "$23.99",
      originalPrice: "$33.99",
      description: "Quick-dry fabric t-shirt perfect for high-intensity training.",
      imageUrl: "https://images.pexels.com/photos/1552238/pexels-photo-1552238.jpeg",
      affiliateLink: "https://example.com/gym-tshirt-5"
    },
    {
      title: "Stringer Tank Top",
      price: "$19.99",
      description: "Classic stringer tank for unrestricted arm movement.",
      imageUrl: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg",
      affiliateLink: "https://example.com/gym-tshirt-6"
    },
    {
      title: "Athletic Fit Tee",
      price: "$25.99",
      originalPrice: "$35.99",
      description: "Athletic fit t-shirt with performance fabric blend.",
      imageUrl: "https://images.pexels.com/photos/1552100/pexels-photo-1552100.jpeg",
      affiliateLink: "https://example.com/gym-tshirt-7"
    },
    {
      title: "Seamless Training Tee",
      price: "$29.99",
      description: "Seamless construction t-shirt for chafe-free workouts.",
      imageUrl: "https://images.pexels.com/photos/1552104/pexels-photo-1552104.jpeg",
      affiliateLink: "https://example.com/gym-tshirt-8"
    },
    {
      title: "Reflective Gym Tee",
      price: "$27.99",
      originalPrice: "$37.99",
      description: "Reflective details t-shirt for early morning or evening runs.",
      imageUrl: "https://images.pexels.com/photos/1552240/pexels-photo-1552240.jpeg",
      affiliateLink: "https://example.com/gym-tshirt-9"
    },
    {
      title: "Cooling Technology Tee",
      price: "$31.99",
      description: "Advanced cooling technology t-shirt for temperature regulation.",
      imageUrl: "https://images.pexels.com/photos/1552241/pexels-photo-1552241.jpeg",
      affiliateLink: "https://example.com/gym-tshirt-10"
    },
    {
      title: "Motivational Print Tee",
      price: "$24.99",
      originalPrice: "$34.99",
      description: "Motivational graphic t-shirt to inspire your workouts.",
      imageUrl: "https://images.pexels.com/photos/1552243/pexels-photo-1552243.jpeg",
      affiliateLink: "https://example.com/gym-tshirt-11"
    },
    {
      title: "Bamboo Fiber Gym Tee",
      price: "$26.99",
      description: "Eco-friendly bamboo fiber t-shirt with natural antibacterial properties.",
      imageUrl: "https://images.pexels.com/photos/1552244/pexels-photo-1552244.jpeg",
      affiliateLink: "https://example.com/gym-tshirt-12"
    },
    {
      title: "Raglan Sleeve Tee",
      price: "$23.99",
      originalPrice: "$33.99",
      description: "Raglan sleeve design for enhanced shoulder mobility.",
      imageUrl: "https://images.pexels.com/photos/1552245/pexels-photo-1552245.jpeg",
      affiliateLink: "https://example.com/gym-tshirt-13"
    },
    {
      title: "Vintage Gym Tank",
      price: "$25.99",
      description: "Vintage-style gym tank with retro fitness graphics.",
      imageUrl: "https://images.pexels.com/photos/1552246/pexels-photo-1552246.jpeg",
      affiliateLink: "https://example.com/gym-tshirt-14"
    },
    {
      title: "Long Sleeve Training Tee",
      price: "$28.99",
      originalPrice: "$38.99",
      description: "Long sleeve training t-shirt for cooler weather workouts.",
      imageUrl: "https://images.pexels.com/photos/1552247/pexels-photo-1552247.jpeg",
      affiliateLink: "https://example.com/gym-tshirt-15"
    },
    {
      title: "Premium Gym Tank",
      price: "$32.99",
      description: "Premium quality gym tank with superior fabric and fit.",
      imageUrl: "https://images.pexels.com/photos/1552248/pexels-photo-1552248.jpeg",
      affiliateLink: "https://example.com/gym-tshirt-16"
    }
  ];

  const gymShorts = [
    {
      title: "Performance Training Shorts",
      price: "$29.99",
      originalPrice: "$39.99",
      description: "High-performance training shorts with moisture-wicking fabric.",
      imageUrl: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg",
      affiliateLink: "https://example.com/gym-shorts-1"
    },
    {
      title: "Compression Gym Shorts",
      price: "$34.99",
      description: "Compression shorts for enhanced muscle support and recovery.",
      imageUrl: "https://images.pexels.com/photos/7679721/pexels-photo-7679721.jpeg",
      affiliateLink: "https://example.com/gym-shorts-2"
    },
    {
      title: "Basketball Shorts",
      price: "$26.99",
      description: "Loose-fit basketball shorts perfect for court and gym.",
      imageUrl: "https://images.pexels.com/photos/7679722/pexels-photo-7679722.jpeg",
      affiliateLink: "https://example.com/gym-shorts-3"
    },
    {
      title: "Running Shorts",
      price: "$24.99",
      originalPrice: "$34.99",
      description: "Lightweight running shorts with built-in liner.",
      imageUrl: "https://images.pexels.com/photos/7679723/pexels-photo-7679723.jpeg",
      affiliateLink: "https://example.com/gym-shorts-4"
    },
    {
      title: "CrossFit Training Shorts",
      price: "$31.99",
      originalPrice: "$41.99",
      description: "Durable CrossFit shorts designed for functional fitness.",
      imageUrl: "https://images.pexels.com/photos/7679724/pexels-photo-7679724.jpeg",
      affiliateLink: "https://example.com/gym-shorts-5"
    },
    {
      title: "Mesh Panel Shorts",
      price: "$27.99",
      description: "Shorts with mesh panels for enhanced breathability.",
      imageUrl: "https://images.pexels.com/photos/7679725/pexels-photo-7679725.jpeg",
      affiliateLink: "https://example.com/gym-shorts-6"
    },
    {
      title: "Squat-Proof Shorts",
      price: "$33.99",
      originalPrice: "$43.99",
      description: "Squat-proof shorts with four-way stretch fabric.",
      imageUrl: "https://images.pexels.com/photos/7679726/pexels-photo-7679726.jpeg",
      affiliateLink: "https://example.com/gym-shorts-7"
    },
    {
      title: "Quick-Dry Gym Shorts",
      price: "$25.99",
      description: "Quick-dry shorts perfect for intense training sessions.",
      imageUrl: "https://images.pexels.com/photos/7679727/pexels-photo-7679727.jpeg",
      affiliateLink: "https://example.com/gym-shorts-8"
    },
    {
      title: "Cargo Gym Shorts",
      price: "$32.99",
      originalPrice: "$42.99",
      description: "Cargo shorts with multiple pockets for gym essentials.",
      imageUrl: "https://images.pexels.com/photos/7679728/pexels-photo-7679728.jpeg",
      affiliateLink: "https://example.com/gym-shorts-9"
    },
    {
      title: "Hybrid Training Shorts",
      price: "$28.99",
      description: "Hybrid shorts suitable for both gym and casual wear.",
      imageUrl: "https://images.pexels.com/photos/7679729/pexels-photo-7679729.jpeg",
      affiliateLink: "https://example.com/gym-shorts-10"
    },
    {
      title: "Reflective Running Shorts",
      price: "$26.99",
      originalPrice: "$36.99",
      description: "Reflective running shorts for visibility during night runs.",
      imageUrl: "https://images.pexels.com/photos/7679730/pexels-photo-7679730.jpeg",
      affiliateLink: "https://example.com/gym-shorts-11"
    },
    {
      title: "Board Shorts Style",
      price: "$30.99",
      description: "Board shorts style gym shorts with water-resistant fabric.",
      imageUrl: "https://images.pexels.com/photos/7679731/pexels-photo-7679731.jpeg",
      affiliateLink: "https://example.com/gym-shorts-12"
    },
    {
      title: "Thermal Gym Shorts",
      price: "$29.99",
      originalPrice: "$39.99",
      description: "Thermal shorts for cold weather outdoor training.",
      imageUrl: "https://images.pexels.com/photos/7679732/pexels-photo-7679732.jpeg",
      affiliateLink: "https://example.com/gym-shorts-13"
    },
    {
      title: "Yoga Shorts",
      price: "$27.99",
      description: "Flexible yoga shorts with four-way stretch for mobility.",
      imageUrl: "https://images.pexels.com/photos/7679733/pexels-photo-7679733.jpeg",
      affiliateLink: "https://example.com/gym-shorts-14"
    },
    {
      title: "Powerlifting Shorts",
      price: "$35.99",
      originalPrice: "$45.99",
      description: "Heavy-duty powerlifting shorts with reinforced seams.",
      imageUrl: "https://images.pexels.com/photos/7679734/pexels-photo-7679734.jpeg",
      affiliateLink: "https://example.com/gym-shorts-15"
    },
    {
      title: "Premium Training Shorts",
      price: "$37.99",
      description: "Premium training shorts with advanced fabric technology.",
      imageUrl: "https://images.pexels.com/photos/7679735/pexels-photo-7679735.jpeg",
      affiliateLink: "https://example.com/gym-shorts-16"
    }
  ];

  const gymShoes = [
    {
      title: "Cross Training Shoes",
      price: "$89.99",
      originalPrice: "$119.99",
      description: "Versatile cross training shoes for all types of workouts.",
      imageUrl: "https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg",
      affiliateLink: "https://example.com/gym-shoes-1"
    },
    {
      title: "Weightlifting Shoes",
      price: "$129.99",
      description: "Specialized weightlifting shoes with raised heel and stability.",
      imageUrl: "https://images.pexels.com/photos/1240893/pexels-photo-1240893.jpeg",
      affiliateLink: "https://example.com/gym-shoes-2"
    },
    {
      title: "Running Shoes",
      price: "$94.99",
      description: "Cushioned running shoes with responsive midsole.",
      imageUrl: "https://images.pexels.com/photos/1240894/pexels-photo-1240894.jpeg",
      affiliateLink: "https://example.com/gym-shoes-3"
    },
    {
      title: "HIIT Training Shoes",
      price: "$79.99",
      originalPrice: "$109.99",
      description: "High-intensity interval training shoes with lateral support.",
      imageUrl: "https://images.pexels.com/photos/1240895/pexels-photo-1240895.jpeg",
      affiliateLink: "https://example.com/gym-shoes-4"
    },
    {
      title: "Deadlift Shoes",
      price: "$69.99",
      originalPrice: "$99.99",
      description: "Flat-soled deadlift shoes for maximum ground contact.",
      imageUrl: "https://images.pexels.com/photos/1240896/pexels-photo-1240896.jpeg",
      affiliateLink: "https://example.com/gym-shoes-5"
    },
    {
      title: "Basketball Shoes",
      price: "$109.99",
      description: "High-top basketball shoes with ankle support and cushioning.",
      imageUrl: "https://images.pexels.com/photos/1240897/pexels-photo-1240897.jpeg",
      affiliateLink: "https://example.com/gym-shoes-6"
    },
    {
      title: "Minimalist Training Shoes",
      price: "$74.99",
      originalPrice: "$104.99",
      description: "Minimalist shoes for natural movement and ground feel.",
      imageUrl: "https://images.pexels.com/photos/1240898/pexels-photo-1240898.jpeg",
      affiliateLink: "https://example.com/gym-shoes-7"
    },
    {
      title: "Cardio Shoes",
      price: "$84.99",
      description: "Lightweight cardio shoes with breathable mesh upper.",
      imageUrl: "https://images.pexels.com/photos/1240899/pexels-photo-1240899.jpeg",
      affiliateLink: "https://example.com/gym-shoes-8"
    },
    {
      title: "Squat Shoes",
      price: "$119.99",
      originalPrice: "$149.99",
      description: "Squat shoes with elevated heel for improved depth and form.",
      imageUrl: "https://images.pexels.com/photos/1240900/pexels-photo-1240900.jpeg",
      affiliateLink: "https://example.com/gym-shoes-9"
    },
    {
      title: "Trail Running Shoes",
      price: "$99.99",
      description: "Rugged trail running shoes with aggressive tread pattern.",
      imageUrl: "https://images.pexels.com/photos/1240901/pexels-photo-1240901.jpeg",
      affiliateLink: "https://example.com/gym-shoes-10"
    },
    {
      title: "Boxing Shoes",
      price: "$89.99",
      originalPrice: "$119.99",
      description: "Lightweight boxing shoes with ankle support and grip.",
      imageUrl: "https://images.pexels.com/photos/1240902/pexels-photo-1240902.jpeg",
      affiliateLink: "https://example.com/gym-shoes-11"
    },
    {
      title: "Yoga Shoes",
      price: "$59.99",
      description: "Flexible yoga shoes with non-slip sole for studio practice.",
      imageUrl: "https://images.pexels.com/photos/1240903/pexels-photo-1240903.jpeg",
      affiliateLink: "https://example.com/gym-shoes-12"
    },
    {
      title: "Cycling Shoes",
      price: "$134.99",
      originalPrice: "$164.99",
      description: "Cycling shoes with clip-in compatibility and stiff sole.",
      imageUrl: "https://images.pexels.com/photos/1240904/pexels-photo-1240904.jpeg",
      affiliateLink: "https://example.com/gym-shoes-13"
    },
    {
      title: "Wrestling Shoes",
      price: "$79.99",
      description: "Wrestling shoes with superior grip and ankle support.",
      imageUrl: "https://images.pexels.com/photos/1240905/pexels-photo-1240905.jpeg",
      affiliateLink: "https://example.com/gym-shoes-14"
    },
    {
      title: "Martial Arts Shoes",
      price: "$64.99",
      originalPrice: "$94.99",
      description: "Martial arts shoes with flexible sole and lightweight design.",
      imageUrl: "https://images.pexels.com/photos/1240906/pexels-photo-1240906.jpeg",
      affiliateLink: "https://example.com/gym-shoes-15"
    },
    {
      title: "Premium Training Shoes",
      price: "$149.99",
      description: "Premium training shoes with advanced technology and materials.",
      imageUrl: "https://images.pexels.com/photos/1240907/pexels-photo-1240907.jpeg",
      affiliateLink: "https://example.com/gym-shoes-16"
    }
  ];

  const gymEquipment = [
    {
      title: "Resistance Bands Set",
      price: "$24.99",
      originalPrice: "$34.99",
      description: "Complete resistance bands set with multiple resistance levels for full-body workouts.",
      imageUrl: "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg",
      affiliateLink: "https://example.com/gym-equipment-1"
    },
    {
      title: "Adjustable Dumbbells",
      price: "$149.99",
      description: "Space-saving adjustable dumbbells with quick weight change system.",
      imageUrl: "https://images.pexels.com/photos/4162450/pexels-photo-4162450.jpeg",
      affiliateLink: "https://example.com/gym-equipment-2"
    },
    {
      title: "Kettlebell Set",
      price: "$89.99",
      description: "Cast iron kettlebell set for strength and cardio training.",
      imageUrl: "https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg",
      affiliateLink: "https://example.com/gym-equipment-3"
    },
    {
      title: "Pull-Up Bar",
      price: "$39.99",
      originalPrice: "$59.99",
      description: "Doorway pull-up bar with multiple grip positions for upper body training.",
      imageUrl: "https://images.pexels.com/photos/4162452/pexels-photo-4162452.jpeg",
      affiliateLink: "https://example.com/gym-equipment-4"
    },
    {
      title: "Yoga Mat Premium",
      price: "$34.99",
      originalPrice: "$49.99",
      description: "Extra thick premium yoga mat with superior grip and cushioning.",
      imageUrl: "https://images.pexels.com/photos/4162453/pexels-photo-4162453.jpeg",
      affiliateLink: "https://example.com/gym-equipment-5"
    },
    {
      title: "Foam Roller",
      price: "$22.99",
      description: "High-density foam roller for muscle recovery and myofascial release.",
      imageUrl: "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
      affiliateLink: "https://example.com/gym-equipment-6"
    },
    {
      title: "Medicine Ball",
      price: "$44.99",
      originalPrice: "$64.99",
      description: "Weighted medicine ball for functional strength and core training.",
      imageUrl: "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg",
      affiliateLink: "https://example.com/gym-equipment-7"
    },
    {
      title: "Battle Ropes",
      price: "$79.99",
      description: "Heavy-duty battle ropes for high-intensity cardio and strength training.",
      imageUrl: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg",
      affiliateLink: "https://example.com/gym-equipment-8"
    },
    {
      title: "Suspension Trainer",
      price: "$129.99",
      originalPrice: "$179.99",
      description: "Complete suspension training system for bodyweight exercises.",
      imageUrl: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg",
      affiliateLink: "https://example.com/gym-equipment-9"
    },
    {
      title: "Ab Wheel Roller",
      price: "$19.99",
      description: "Dual-wheel ab roller for core strengthening and stability training.",
      imageUrl: "https://images.pexels.com/photos/4162458/pexels-photo-4162458.jpeg",
      affiliateLink: "https://example.com/gym-equipment-10"
    },
    {
      title: "Resistance Loop Bands",
      price: "$16.99",
      originalPrice: "$26.99",
      description: "Set of resistance loop bands for glute activation and strength training.",
      imageUrl: "https://images.pexels.com/photos/4162459/pexels-photo-4162459.jpeg",
      affiliateLink: "https://example.com/gym-equipment-11"
    },
    {
      title: "Jump Rope",
      price: "$14.99",
      description: "Speed jump rope with adjustable length for cardio training.",
      imageUrl: "https://images.pexels.com/photos/4162460/pexels-photo-4162460.jpeg",
      affiliateLink: "https://example.com/gym-equipment-12"
    },
    {
      title: "Stability Ball",
      price: "$29.99",
      originalPrice: "$39.99",
      description: "Anti-burst stability ball for core training and rehabilitation.",
      imageUrl: "https://images.pexels.com/photos/4162461/pexels-photo-4162461.jpeg",
      affiliateLink: "https://example.com/gym-equipment-13"
    },
    {
      title: "Parallette Bars",
      price: "$59.99",
      description: "Parallette bars for calisthenics and bodyweight training.",
      imageUrl: "https://images.pexels.com/photos/4162462/pexels-photo-4162462.jpeg",
      affiliateLink: "https://example.com/gym-equipment-14"
    },
    {
      title: "Agility Ladder",
      price: "$24.99",
      originalPrice: "$34.99",
      description: "Speed and agility ladder for footwork and coordination training.",
      imageUrl: "https://images.pexels.com/photos/4162463/pexels-photo-4162463.jpeg",
      affiliateLink: "https://example.com/gym-equipment-15"
    },
    {
      title: "Plyo Box Set",
      price: "$199.99",
      description: "Stackable plyo boxes for plyometric and jump training.",
      imageUrl: "https://images.pexels.com/photos/4162464/pexels-photo-4162464.jpeg",
      affiliateLink: "https://example.com/gym-equipment-16"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            <span className="text-yellow-500">Gym & Fitness</span> Collection
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Elevate your fitness game with our premium collection of gym wear and equipment. 
            From performance apparel to essential training gear, we have everything you need.
          </p>
        </div>

        <CategorySection title="Gym T-Shirts & Tanks" products={gymTShirts} />
        <CategorySection title="Gym Shorts" products={gymShorts} />
        <CategorySection title="Gym Shoes" products={gymShoes} />
        <CategorySection title="Gym Equipment & Accessories" products={gymEquipment} />
      </div>
    </div>
  );
};

export default GymFitnessPage;