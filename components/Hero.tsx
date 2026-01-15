
import React from 'react';

interface HeroProps {
  onShopClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopClick }) => {
  return (
    <div className="relative overflow-hidden bg-pink-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight mb-6">
            Sweet Moments, <br />
            <span className="text-pink-500">Aesthetically</span> Baked.
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto md:mx-0">
            Tuchaaes brings modern design to your celebrations. Handcrafted with love, personalized just for you, and delivered to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={onShopClick}
              className="px-8 py-4 bg-pink-500 text-white font-bold rounded-full shadow-lg shadow-pink-200 hover:bg-pink-600 transition-all transform hover:-translate-y-1"
            >
              Order Now
            </button>
            <button className="px-8 py-4 bg-white text-pink-500 font-bold rounded-full border border-pink-100 hover:bg-pink-50 transition-all">
              Custom Inquiries
            </button>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://picsum.photos/seed/hero-cake/800/800" 
              alt="Beautiful aesthetic cake" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative blobs */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-200/50 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
