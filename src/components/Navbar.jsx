import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FiSearch, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartCount } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Deals', path: '/shop?filter=sale' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-brand-bg border-b border-brand-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-brand-accent flex items-center justify-center rounded-md text-brand-bg font-bold text-xl">
              S
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-brand-text">Snapp</span>
              <span className="text-brand-accent">tek</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-1 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-brand-accent border-b-2 border-brand-accent'
                        : 'text-brand-text hover:text-brand-accent'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-brand-card text-brand-text text-sm rounded-full pl-4 pr-10 py-1.5 focus:outline-none focus:ring-1 focus:ring-brand-accent w-48 transition-all focus:w-64"
              />
              <button type="submit" className="absolute right-3 top-1.5 text-brand-muted hover:text-brand-accent">
                <FiSearch size={18} />
              </button>
            </form>

            <Link to="/cart" className="relative text-brand-text hover:text-brand-accent transition-colors">
              <FiShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-accent text-brand-bg text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-brand-text hover:text-[#25D366] transition-colors">
              <FaWhatsapp size={22} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="relative text-brand-text">
              <FiShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-accent text-brand-bg text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-text hover:text-brand-accent focus:outline-none"
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-bg border-b border-brand-card">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <form onSubmit={handleSearch} className="relative mb-4 px-3">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-brand-card text-brand-text text-sm rounded-md pl-4 pr-10 py-2 focus:outline-none focus:ring-1 focus:ring-brand-accent"
              />
              <button type="submit" className="absolute right-6 top-2.5 text-brand-muted">
                <FiSearch size={18} />
              </button>
            </form>
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'bg-brand-card text-brand-accent' : 'text-brand-text hover:bg-brand-card hover:text-brand-accent'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-base font-medium text-brand-text hover:bg-brand-card hover:text-[#25D366] flex items-center gap-2"
            >
              <FaWhatsapp size={20} /> WhatsApp Support
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
