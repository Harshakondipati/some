import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProductCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  description: string;
  imageUrl?: string;
  affiliateLink: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  originalPrice,
  description,
  imageUrl,
  affiliateLink
}) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-all duration-300 group border border-gray-700 hover:border-yellow-500/50">
      {/* Image Container */}
      <div className="aspect-w-16 aspect-h-12 bg-gray-700 relative overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-40 md:h-48 bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">
            <span className="text-gray-400 text-sm">Product Image</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-3 md:p-4">
        <h3 className="text-white font-semibold text-base md:text-lg mb-2 line-clamp-2 group-hover:text-yellow-500 transition-colors duration-200">
          {title}
        </h3>
        
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-yellow-500 font-bold text-lg md:text-xl">{price}</span>
          {originalPrice && (
            <span className="text-gray-400 line-through text-sm">{originalPrice}</span>
          )}
        </div>

        <p className="text-gray-300 text-xs md:text-sm mb-4 line-clamp-3">
          {description}
        </p>

        <a
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 px-3 md:px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 group/button text-sm md:text-base"
        >
          <span>Shop Now</span>
          <ExternalLink className="h-3 w-3 md:h-4 md:w-4 group-hover/button:translate-x-1 transition-transform duration-200" />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;