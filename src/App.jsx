import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import About from './pages/About';
import NotFound from './pages/NotFound';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageTitle = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const titles = {
      '/': 'Snapptek | Home',
      '/shop': 'Snapptek | Shop',
      '/cart': 'Snapptek | Cart',
      '/about': 'Snapptek | About',
    };
    if (pathname.startsWith('/product/')) {
      document.title = 'Snapptek | Product Detail';
    } else {
      document.title = titles[pathname] || 'Snapptek | Page Not Found';
    }
  }, [pathname]);
  return null;
};

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <PageTitle />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
