import { FiTruck, FiCheckCircle, FiRefreshCw, FiMessageCircle } from 'react-icons/fi';

const features = [
  { icon: FiTruck, title: 'Fast Delivery', desc: 'Across the country' },
  { icon: FiCheckCircle, title: '100% Genuine', desc: 'Authentic products' },
  { icon: FiRefreshCw, title: 'Easy Returns', desc: '7 days return policy' },
  { icon: FiMessageCircle, title: '24/7 Support', desc: 'Always here for you' },
];

const WhyUs = () => {
  return (
    <section className="py-12 bg-brand-card border-y border-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-brand-bg border border-brand-accent/20 flex items-center justify-center mb-4 group-hover:bg-brand-accent/10 group-hover:scale-110 transition-all duration-300">
                  <Icon size={28} className="text-brand-accent" />
                </div>
                <h3 className="text-lg font-semibold text-brand-text mb-1">{feature.title}</h3>
                <p className="text-sm text-brand-muted">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
