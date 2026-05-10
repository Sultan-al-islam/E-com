import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-brand-card pt-16 pb-8 border-t border-brand-accent/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-8 h-8 bg-brand-accent flex items-center justify-center rounded-md text-brand-bg font-bold text-xl">
                S
              </div>
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-brand-text">Snapp</span>
                <span className="text-brand-accent">tek</span>
              </span>
            </Link>
            <p className="text-brand-muted text-sm max-w-xs">
              Snap into Tech. Premium gaming and tech accessories for everyone. Level up your setup today.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.facebook.com/profile.php?id=61589219863220" target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-brand-accent transition-colors"><FaFacebook size={24} /></a>
              <a href="#" className="text-brand-muted hover:text-brand-accent transition-colors"><FaInstagram size={24} /></a>
              <a href="#" className="text-brand-muted hover:text-brand-accent transition-colors"><FaTiktok size={24} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-brand-text font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm text-brand-muted">
              <li><Link to="/" className="hover:text-brand-accent transition-colors">Home</Link></li>
              <li><Link to="/shop" className="hover:text-brand-accent transition-colors">Shop All</Link></li>
              <li><Link to="/shop?filter=sale" className="hover:text-brand-accent transition-colors">Flash Deals</Link></li>
              <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
              <li><Link to="/cart" className="hover:text-brand-accent transition-colors">My Cart</Link></li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h3 className="text-brand-text font-bold text-lg mb-6">Categories</h3>
            <ul className="space-y-3 text-sm text-brand-muted">
              <li><Link to="/shop?category=GamingChair" className="hover:text-brand-accent transition-colors">Gaming Chairs</Link></li>
              <li><Link to="/shop?category=GamingHeadphone" className="hover:text-brand-accent transition-colors">Headsets</Link></li>
              <li><Link to="/shop?category=Keyboard" className="hover:text-brand-accent transition-colors">Keyboards</Link></li>
              <li><Link to="/shop?category=Mouse" className="hover:text-brand-accent transition-colors">Mice</Link></li>
              <li><Link to="/shop?category=GraphicsCard" className="hover:text-brand-accent transition-colors">Components</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-brand-text font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-3 text-sm text-brand-muted">
              <li>Dhaka, Bangladesh</li>
              <li>support@snapptek.com</li>
              <li>+880 1234-567890</li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-brand-accent/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-brand-muted">
          <p>Copyright &copy; 2025 Snapptek. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="hover:text-brand-text">Privacy Policy</Link>
            <Link to="#" className="hover:text-brand-text">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/YOUR_NUMBER"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300"
      >
        <FaWhatsapp size={32} />
      </a>
    </footer>
  );
};

export default Footer;
