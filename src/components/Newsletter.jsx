import { useState } from 'react';
import { FiMail } from 'react-icons/fi';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      localStorage.setItem('snapptek_newsletter', email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-brand-bg relative overflow-hidden">
      {/* Dynamic background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-brand-accent/5 rounded-[100%] blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">Stay in the Loop</h2>
        <p className="text-brand-muted text-lg mb-8 max-w-2xl mx-auto">
          Get exclusive deals straight to your inbox. Subscribe to our newsletter and never miss out on the latest tech drops.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-xl mx-auto gap-3">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-brand-muted">
              <FiMail size={20} />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full bg-brand-card text-brand-text rounded-md pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-accent border border-transparent transition-all"
              required
            />
          </div>
          <button
            type="submit"
            className="px-8 py-3.5 bg-brand-accent text-brand-bg font-bold rounded-md hover:bg-[#00b3d6] transition-colors whitespace-nowrap shadow-lg shadow-brand-accent/20"
          >
            {subscribed ? 'Subscribed!' : 'Subscribe'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
