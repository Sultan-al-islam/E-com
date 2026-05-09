import { Link } from 'react-router-dom';
import { 
  FaChair, FaGamepad, FaHeadphones, FaBatteryFull, FaKeyboard, FaMouse
} from 'react-icons/fa';
import { BsCpuFill, BsMemory, BsSmartwatch, BsEarbuds } from 'react-icons/bs';

const categories = [
  { name: 'Gaming Chair', id: 'GamingChair', icon: FaChair },
  { name: 'Gaming Console', id: 'GamingConsole', icon: FaGamepad },
  { name: 'Gaming Headphone', id: 'GamingHeadphone', icon: FaHeadphones },
  { name: 'Graphics Card', id: 'GraphicsCard', icon: BsCpuFill },
  { name: 'Keyboard', id: 'Keyboard', icon: FaKeyboard },
  { name: 'Mouse', id: 'Mouse', icon: FaMouse },
  { name: 'Power Bank', id: 'PowerBank', icon: FaBatteryFull },
  { name: 'RAM', id: 'RAM', icon: BsMemory },
  { name: 'Smartwatch', id: 'Smartwatch', icon: BsSmartwatch },
  { name: 'TWS Earbuds', id: 'TWS', icon: BsEarbuds },
];

const CategoryGrid = () => {
  return (
    <section className="py-16 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-brand-text mb-10 text-center">
          Shop by Category
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                className="group flex flex-col items-center justify-center p-6 bg-brand-card rounded-xl border border-transparent hover:border-brand-accent hover:shadow-[0_0_15px_rgba(0,212,255,0.2)] transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-brand-bg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:text-brand-accent transition-transform duration-300">
                  <Icon size={32} className="text-brand-text group-hover:text-brand-accent transition-colors" />
                </div>
                <span className="text-sm font-medium text-brand-text text-center group-hover:text-brand-accent transition-colors">
                  {cat.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
