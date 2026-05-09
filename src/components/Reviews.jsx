import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    name: 'Rahim U.',
    product: 'ErgoPro RGB Gaming Chair',
    rating: 5,
    text: 'Absolutely love this chair! Super comfortable for long gaming sessions and the RGB looks amazing in the dark.',
  },
  {
    id: 2,
    name: 'Sarah K.',
    product: 'SonicPulse 7.1 Headset',
    rating: 5,
    text: 'The sound quality is unreal. I can hear footsteps clearly in games now. Best purchase ever.',
  },
  {
    id: 3,
    name: 'Jamil H.',
    product: 'MechStrike Pro Keyboard',
    rating: 4,
    text: 'Great keyboard, very responsive. The switches feel great to type on. Delivery was also very fast.',
  }
];

const Reviews = () => {
  return (
    <section className="py-16 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-brand-text mb-10 text-center">What Our Customers Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-brand-card p-6 rounded-xl border border-transparent hover:border-brand-accent/30 transition-colors">
              <div className="flex text-brand-accent mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={16} className={i < review.rating ? 'text-brand-accent' : 'text-brand-muted'} />
                ))}
              </div>
              <p className="text-brand-text mb-4 italic">"{review.text}"</p>
              <div className="mt-auto">
                <h4 className="text-brand-text font-bold">{review.name}</h4>
                <span className="text-brand-muted text-sm text-brand-accent">{review.product}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
