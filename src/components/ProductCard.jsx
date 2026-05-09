import { Link } from 'react-router-dom';
import { FiShoppingCart, FiEye } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    // Optional: show toast notification
  };

  return (
    <div className="group relative bg-brand-card rounded-xl overflow-hidden border border-transparent hover:border-brand-accent transition-all duration-300 flex flex-col h-full shadow-lg hover:shadow-brand-accent/20">
      {/* Badges */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-10 bg-brand-accent text-brand-bg text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
          {product.badge}
        </div>
      )}

      {/* Image container */}
      <Link to={`/product/${product.id}`} className="relative h-60 w-full overflow-hidden bg-white/5 flex items-center justify-center">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x400?text=Snapptek';
          }}
        />
        
        {/* Quick View Overlay (Mobile hidden, Desktop hover) */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-brand-bg/80 text-brand-text hover:text-brand-accent p-3 rounded-full backdrop-blur-sm transition-colors">
            <FiEye size={24} />
          </button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="text-xs text-brand-muted mb-1 uppercase tracking-wider">{product.brand}</div>
        <Link to={`/product/${product.id}`} className="block flex-grow">
          <h3 className="text-lg font-semibold text-brand-text mb-2 line-clamp-2 group-hover:text-brand-accent transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="mt-auto pt-4 flex items-center justify-between">
          <div>
            {product.salePrice ? (
              <div className="flex flex-col">
                <span className="text-brand-muted text-sm line-through">৳{product.price.toLocaleString()}</span>
                <span className="text-brand-accent font-bold text-xl">৳{product.salePrice.toLocaleString()}</span>
              </div>
            ) : (
              <span className="text-brand-text font-bold text-xl">৳{product.price.toLocaleString()}</span>
            )}
          </div>
          
          <button
            onClick={handleAddToCart}
            className="w-10 h-10 rounded-full bg-brand-bg border border-brand-card flex items-center justify-center text-brand-text hover:bg-brand-accent hover:text-brand-bg hover:border-brand-accent transition-all"
            title="Add to Cart"
          >
            <FiShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
