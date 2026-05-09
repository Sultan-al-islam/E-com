import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative w-full bg-brand-bg overflow-hidden py-20 lg:py-32">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none overflow-hidden">
        <span className="text-[40rem] font-black text-brand-text leading-none">S</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start space-y-8">
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-brand-text leading-tight">
              Gear Up. <br />
              <span className="text-brand-accent">Snap into Tech.</span>
            </h1>
            <p className="text-lg lg:text-xl text-brand-muted max-w-lg">
              Premium gaming & tech accessories at your fingertips. Discover top-tier gear to elevate your experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="px-8 py-3.5 bg-brand-accent text-brand-bg font-bold rounded-md hover:bg-[#00b3d6] transition-colors shadow-lg shadow-brand-accent/30"
              >
                Shop Now
              </Link>
              <Link
                to="/shop"
                className="px-8 py-3.5 bg-transparent border-2 border-brand-accent text-brand-accent font-bold rounded-md hover:bg-brand-accent/10 transition-colors"
              >
                View All Products
              </Link>
            </div>
          </div>

          {/* Right Content - Decorative Dot Grid */}
          <div className="hidden lg:flex justify-end relative">
            <div className="w-[400px] h-[400px] grid grid-cols-10 grid-rows-10 gap-4 opacity-30">
              {Array.from({ length: 100 }).map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"
                  style={{
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
            
            {/* Overlay glass card just for aesthetics */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-card/40 backdrop-blur-md border border-brand-accent/20 rounded-2xl flex items-center justify-center p-6 transform rotate-12 hover:rotate-0 transition-all duration-500">
              <img src="/hero.png" alt="Gaming Gear" className="w-full h-full object-contain drop-shadow-2xl" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
