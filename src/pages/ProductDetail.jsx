import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { FiMinus, FiPlus, FiShoppingCart, FiCheck } from 'react-icons/fi';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  
  const [mainImage, setMainImage] = useState(product?.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-brand-bg text-brand-text">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <Link to="/shop" className="text-brand-accent hover:underline">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const price = product.salePrice || product.price;
  const whatsappMsg = encodeURIComponent(`Hi Snapptek! I want to order:\n${product.name}\nQuantity: ${quantity}\nPrice: ৳${price * quantity}`);

  return (
    <div className="bg-brand-bg py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-sm text-brand-muted mb-8 flex gap-2">
          <Link to="/" className="hover:text-brand-accent">Home</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-brand-accent">{product.category}</Link>
          <span>/</span>
          <span className="text-brand-text">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="bg-brand-card rounded-xl aspect-square flex items-center justify-center p-4 border border-brand-accent/10">
              <img src={mainImage} alt={product.name} className="max-w-full max-h-full object-contain" />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto">
                {product.images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setMainImage(img)}
                    className={`w-20 h-20 rounded-md bg-brand-card border-2 flex-shrink-0 flex items-center justify-center p-2 ${mainImage === img ? 'border-brand-accent' : 'border-transparent'}`}
                  >
                    <img src={img} alt="" className="max-w-full max-h-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="text-brand-accent uppercase tracking-wider text-sm font-bold mb-2">{product.brand}</div>
            <h1 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">{product.name}</h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              {product.salePrice ? (
                <>
                  <span className="text-3xl font-bold text-brand-accent">৳{product.salePrice.toLocaleString()}</span>
                  <span className="text-xl text-brand-muted line-through">৳{product.price.toLocaleString()}</span>
                  <span className="bg-brand-accent/20 text-brand-accent text-xs font-bold px-2 py-1 rounded">
                    Save ৳{(product.price - product.salePrice).toLocaleString()}
                  </span>
                </>
              ) : (
                <span className="text-3xl font-bold text-brand-text">৳{product.price.toLocaleString()}</span>
              )}
            </div>

            <p className="text-brand-muted text-base mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="mb-8">
              <h3 className="text-brand-text font-semibold mb-3">Key Features:</h3>
              <ul className="list-disc list-inside text-brand-muted space-y-1">
                {product.specs.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* Quantity */}
              <div className="flex items-center bg-brand-card rounded-md border border-brand-accent/20">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-12 h-12 flex items-center justify-center text-brand-text hover:text-brand-accent"
                >
                  <FiMinus />
                </button>
                <span className="w-12 text-center text-brand-text font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-12 h-12 flex items-center justify-center text-brand-text hover:text-brand-accent"
                >
                  <FiPlus />
                </button>
              </div>

              {/* Add to Cart */}
              <button 
                onClick={handleAddToCart}
                className={`flex-grow h-12 flex items-center justify-center gap-2 font-bold rounded-md transition-all ${added ? 'bg-green-500 text-white' : 'bg-brand-card border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-bg'}`}
              >
                {added ? <><FiCheck size={20}/> Added to Cart</> : <><FiShoppingCart size={20}/> Add to Cart</>}
              </button>
            </div>

            <div className="flex gap-4">
              <button className="flex-grow h-12 bg-brand-accent text-brand-bg font-bold rounded-md hover:bg-[#00b3d6] transition-colors shadow-lg shadow-brand-accent/20">
                Buy Now
              </button>
              <a 
                href={`https://wa.me/1234567890?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-[#25D366] text-white rounded-md hover:scale-105 transition-transform"
                title="Order via WhatsApp"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="pt-12 border-t border-brand-card">
            <h2 className="text-2xl font-bold text-brand-text mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProductDetail;
