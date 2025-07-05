import React from 'react';
import ProductCard from './ProductCard';

interface Product {
  title: string;
  price: string;
  originalPrice?: string;
  description: string;
  imageUrl?: string;
  affiliateLink: string;
}

interface CategorySectionProps {
  title: string;
  products: Product[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, products }) => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-8 text-center">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            {...product}
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;