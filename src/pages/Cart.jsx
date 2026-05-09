import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiMinus, FiPlus, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, subtotal } = useCart();
  const [formData, setFormData] = useState({
    name: '', phone: '', address: ''
  });

  const deliveryCharge = 100;
  const total = subtotal + (cart.length > 0 ? deliveryCharge : 0);

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Please fill all details");
      return;
    }
    
    let orderDetails = `*New Order - Snapptek*\n\n`;
    orderDetails += `*Customer Details:*\nName: ${formData.name}\nPhone: ${formData.phone}\nAddress: ${formData.address}\n\n`;
    orderDetails += `*Items:*\n`;
    cart.forEach(item => {
      orderDetails += `- ${item.name} x${item.quantity} (৳${(item.salePrice || item.price) * item.quantity})\n`;
    });
    orderDetails += `\nSubtotal: ৳${subtotal}\nDelivery: ৳${deliveryCharge}\n*Total: ৳${total}*\nMethod: Cash on Delivery`;

    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(orderDetails)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-brand-bg text-brand-text py-20">
        <div className="w-24 h-24 bg-brand-card rounded-full flex items-center justify-center mb-6 border border-brand-accent/20 text-brand-accent">
          <FiShoppingCart size={40} className="text-brand-accent" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-brand-muted mb-8">Looks like you haven't added anything yet.</p>
        <Link to="/shop" className="px-8 py-3 bg-brand-accent text-brand-bg font-bold rounded-md hover:bg-[#00b3d6] transition-colors">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-brand-bg min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-brand-text mb-8">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Cart Items List */}
          <div className="lg:w-2/3 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row items-center gap-4 bg-brand-card p-4 rounded-xl border border-brand-accent/10">
                <Link to={`/product/${item.id}`} className="w-24 h-24 flex-shrink-0 bg-brand-bg rounded-md flex items-center justify-center p-2">
                  <img src={item.images[0]} alt={item.name} className="max-w-full max-h-full object-contain" />
                </Link>
                
                <div className="flex-grow text-center sm:text-left">
                  <div className="text-xs text-brand-muted uppercase">{item.brand}</div>
                  <Link to={`/product/${item.id}`} className="text-brand-text font-semibold hover:text-brand-accent">
                    {item.name}
                  </Link>
                  <div className="text-brand-accent font-bold mt-1">
                    ৳{(item.salePrice || item.price).toLocaleString()}
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex items-center bg-brand-bg rounded-md border border-brand-accent/20">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center text-brand-text hover:text-brand-accent"><FiMinus size={14}/></button>
                    <span className="w-8 text-center text-brand-text text-sm font-medium">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center text-brand-text hover:text-brand-accent"><FiPlus size={14}/></button>
                  </div>
                  <div className="text-brand-text font-bold min-w-[80px] text-right">
                    ৳{((item.salePrice || item.price) * item.quantity).toLocaleString()}
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-400 p-2">
                    <FiTrash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout Form & Summary */}
          <div className="lg:w-1/3">
            <div className="bg-brand-card p-6 rounded-xl border border-brand-accent/10 sticky top-24">
              <h2 className="text-xl font-bold text-brand-text mb-6 pb-4 border-b border-brand-accent/20">Order Summary</h2>
              
              <div className="space-y-3 text-brand-muted mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-brand-text">৳{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charge</span>
                  <span className="text-brand-text">৳{deliveryCharge.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-3 border-t border-brand-accent/20">
                  <span className="text-brand-text">Total</span>
                  <span className="text-brand-accent">৳{total.toLocaleString()}</span>
                </div>
              </div>

              <form onSubmit={handleCheckout} className="space-y-4">
                <h3 className="text-brand-text font-semibold mb-2">Delivery Details</h3>
                <input 
                  type="text" placeholder="Full Name" required
                  value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-brand-bg text-brand-text rounded-md px-4 py-2 border border-brand-accent/20 focus:outline-none focus:border-brand-accent"
                />
                <input 
                  type="tel" placeholder="Phone Number" required
                  value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-brand-bg text-brand-text rounded-md px-4 py-2 border border-brand-accent/20 focus:outline-none focus:border-brand-accent"
                />
                <textarea 
                  placeholder="Full Delivery Address" required rows="3"
                  value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})}
                  className="w-full bg-brand-bg text-brand-text rounded-md px-4 py-2 border border-brand-accent/20 focus:outline-none focus:border-brand-accent resize-none"
                ></textarea>
                
                <div className="bg-brand-bg p-3 rounded-md border border-brand-accent/20 flex items-center gap-2 text-brand-text text-sm">
                  <input type="radio" checked readOnly className="accent-brand-accent" /> Cash on Delivery
                </div>

                <button type="submit" className="w-full py-3.5 bg-brand-accent text-brand-bg font-bold rounded-md hover:bg-[#00b3d6] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand-accent/20 mt-4">
                  Proceed to Checkout <FiArrowRight />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
