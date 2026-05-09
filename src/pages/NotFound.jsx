import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-brand-bg text-center px-4">
      <h1 className="text-9xl font-black text-brand-accent/20 select-none">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold text-brand-text mt-[-40px] mb-4 relative z-10">
        Page Not Found
      </h2>
      <p className="text-brand-muted text-lg max-w-md mx-auto mb-8 relative z-10">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="px-8 py-3 bg-brand-accent text-brand-bg font-bold rounded-md hover:bg-[#00b3d6] transition-colors shadow-lg shadow-brand-accent/20 relative z-10"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
