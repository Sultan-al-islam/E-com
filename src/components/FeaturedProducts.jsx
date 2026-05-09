import ProductCard from './ProductCard';
import { products } from '../data/products';

const FeaturedProducts = () => {
  const featured = products.filter(p => p.isFeatured).slice(0, 8); // Max 8

  return (
    <section className="py-16 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl font-bold text-brand-text">Top Picks</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
