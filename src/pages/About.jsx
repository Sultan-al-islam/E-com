import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-brand-bg min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-8 text-center">
          About <span className="text-brand-accent">Snapptek</span>
        </h1>
        
        <div className="bg-brand-card p-8 md:p-12 rounded-2xl border border-brand-accent/10 shadow-xl shadow-brand-accent/5">
          <p className="text-brand-text text-lg leading-relaxed mb-6">
            Welcome to Snapptek, your ultimate destination for premium gaming and tech accessories. Our mission is to provide you with the best gear to "Snap into Tech" and elevate your digital lifestyle.
          </p>
          <p className="text-brand-muted text-base leading-relaxed mb-8">
            Founded in 2025, we understand the needs of gamers, creators, and tech enthusiasts. We source our products carefully to ensure 100% authenticity and top-notch quality. Whether you need an ergonomic gaming chair, high-fidelity headphones, or the latest PC components, we've got you covered.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center">
            <div className="p-4 bg-brand-bg rounded-lg border border-brand-accent/20">
              <h3 className="text-2xl font-bold text-brand-accent mb-2">10k+</h3>
              <p className="text-sm text-brand-muted uppercase">Happy Customers</p>
            </div>
            <div className="p-4 bg-brand-bg rounded-lg border border-brand-accent/20">
              <h3 className="text-2xl font-bold text-brand-accent mb-2">100%</h3>
              <p className="text-sm text-brand-muted uppercase">Genuine Products</p>
            </div>
            <div className="p-4 bg-brand-bg rounded-lg border border-brand-accent/20">
              <h3 className="text-2xl font-bold text-brand-accent mb-2">24/7</h3>
              <p className="text-sm text-brand-muted uppercase">Customer Support</p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/shop" className="inline-block px-8 py-3 bg-brand-accent text-brand-bg font-bold rounded-md hover:bg-[#00b3d6] transition-colors">
              Explore Our Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
