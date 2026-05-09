import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import FeaturedProducts from '../components/FeaturedProducts';
import FlashDeals from '../components/FlashDeals';
import BestSellers from '../components/BestSellers';
import WhyUs from '../components/WhyUs';
import Reviews from '../components/Reviews';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <FlashDeals />
      <BestSellers />
      <WhyUs />
      <Reviews />
      <Newsletter />
    </>
  );
};

export default Home;
