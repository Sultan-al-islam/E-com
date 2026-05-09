import ProductCard from './ProductCard';
import { products } from '../data/products';

const BestSellers = () => {
  const bestSellers = products.filter(p => p.isBestSeller);

  return (
    <section className="py-16 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-brand-text mb-10">Best Sellers</h2>
        
        {/* Horizontal Scroll Row */}
        <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
          {bestSellers.map(product => (
            <div key={product.id} className="min-w-[280px] sm:min-w-[320px] max-w-[320px] flex-shrink-0 snap-start relative">
              <ProductCard product={product} />
              {/* Optional override or extra badge could go here if needed */}
              <div className="absolute top-3 right-3 z-10 bg-brand-accent text-brand-bg text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase">
                Best Seller
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
