import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FlashDeals = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set target date to 7 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <section className="py-16 bg-[#0f0f0f] border-y border-brand-accent/20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-accent mb-4 tracking-tight">
              Flash Deals <br className="hidden md:block" />
              <span className="text-brand-text text-2xl md:text-4xl">— Up to 50% Off!</span>
            </h2>
            <p className="text-brand-muted text-lg max-w-md mx-auto md:mx-0 mb-6">
              Grab premium tech at unbeatable prices. Limited time offer!
            </p>
            <Link
              to="/shop?filter=sale"
              className="inline-block px-8 py-3 bg-brand-accent text-brand-bg font-bold rounded-md hover:bg-[#00b3d6] transition-all hover:scale-105 shadow-lg shadow-brand-accent/30"
            >
              Grab the Deal
            </Link>
          </div>

          {/* Countdown Timer */}
          <div className="flex space-x-4">
            {timeBlocks.map((block, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-card border border-brand-accent/30 rounded-lg flex items-center justify-center text-2xl sm:text-3xl font-bold text-brand-text shadow-inner shadow-brand-accent/10 mb-2">
                  {block.value.toString().padStart(2, '0')}
                </div>
                <span className="text-brand-muted text-xs sm:text-sm uppercase tracking-wider">{block.label}</span>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FlashDeals;
