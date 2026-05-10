import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { FiFilter, FiX } from 'react-icons/fi';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  const initialSearch = searchParams.get('search') || '';
  const initialFilter = searchParams.get('filter') || '';

  const [categories, setCategories] = useState(initialCategory ? [initialCategory] : []);
  const [brands, setBrands] = useState([]);
  const [priceRange, setPriceRange] = useState(200000);
  const [sortOrder, setSortOrder] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);

  // Extract unique categories and brands
  const allCategories = [...new Set(products.map(p => p.category))];
  const allBrands = [...new Set(products.map(p => p.brand))];

  useEffect(() => {
    // Update categories if URL params change
    if (initialCategory) setCategories([initialCategory]);
    else setCategories([]);
  }, [initialCategory]);

  const toggleCategory = (cat) => {
    setCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const toggleBrand = (brand) => {
    setBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const price = product.salePrice || product.price;
      const matchSearch = product.name.toLowerCase().includes(initialSearch.toLowerCase());
      const matchCategory = categories.length === 0 || categories.includes(product.category);
      const matchBrand = brands.length === 0 || brands.includes(product.brand);
      const matchPrice = price <= priceRange;
      const matchFilter = initialFilter === 'sale' ? product.salePrice !== null : true;
      
      return matchSearch && matchCategory && matchBrand && matchPrice && matchFilter;
    }).sort((a, b) => {
      const priceA = a.salePrice || a.price;
      const priceB = b.salePrice || b.price;
      if (sortOrder === 'price-low') return priceA - priceB;
      if (sortOrder === 'price-high') return priceB - priceA;
      return 0; // newest
    });
  }, [categories, brands, priceRange, sortOrder, initialSearch, initialFilter]);

  return (
    <div className="bg-brand-bg min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-4 border-b border-brand-card">
          <h1 className="text-3xl font-bold text-brand-text mb-4 md:mb-0">
            {initialSearch ? `Search Results for "${initialSearch}"` : 'Shop'}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 text-brand-text bg-brand-card px-4 py-2 rounded-md"
            >
              <FiFilter /> Filters
            </button>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-brand-muted hidden sm:block">Sort by:</span>
              <select 
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="bg-brand-card text-brand-text text-sm rounded-md border-none focus:ring-1 focus:ring-brand-accent p-2"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-64 flex-shrink-0 space-y-8 bg-brand-card p-6 rounded-xl h-fit`}>
            <div className="flex justify-between items-center md:hidden mb-4">
              <h2 className="text-lg font-bold text-brand-text">Filters</h2>
              <button onClick={() => setShowFilters(false)} className="text-brand-text"><FiX size={24}/></button>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-brand-text font-semibold mb-3 border-b border-brand-accent/20 pb-2">Categories</h3>
              <div className="space-y-2">
                {allCategories.map(cat => (
                  <label key={cat} className="flex items-center gap-2 text-sm text-brand-muted cursor-pointer hover:text-brand-text">
                    <input 
                      type="checkbox" 
                      checked={categories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="rounded bg-brand-bg border-brand-card text-brand-accent focus:ring-brand-accent"
                    />
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            {/* Brands */}
            <div>
              <h3 className="text-brand-text font-semibold mb-3 border-b border-brand-accent/20 pb-2">Brands</h3>
              <div className="space-y-2">
                {allBrands.map(brand => (
                  <label key={brand} className="flex items-center gap-2 text-sm text-brand-muted cursor-pointer hover:text-brand-text">
                    <input 
                      type="checkbox" 
                      checked={brands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
                      className="rounded bg-brand-bg border-brand-card text-brand-accent focus:ring-brand-accent"
                    />
                    {brand}
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="text-brand-text font-semibold mb-3 border-b border-brand-accent/20 pb-2">Price Range</h3>
              <div className="space-y-4">
                <input 
                  type="range" 
                  min="0" 
                  max="200000" 
                  step="1000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-brand-accent"
                />
                <div className="flex justify-between text-sm text-brand-muted">
                  <span>৳0</span>
                  <span>৳{priceRange.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-grow">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <div className="col-span-full py-20 text-center text-brand-muted">
                  <p className="text-xl">No products found matching your criteria.</p>
                  <button 
                    onClick={() => {
                      setCategories([]);
                      setBrands([]);
                      setPriceRange(200000);
                      setSearchParams({});
                    }}
                    className="mt-4 text-brand-accent hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
