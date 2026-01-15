
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Customizer from './components/Customizer';
import Cart from './components/Cart';
import { CAKES, CATEGORIES } from './constants';
import { Cake, CartItem, Customization } from './types';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<'home' | 'shop'>('home');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCustomizingCake, setActiveCustomizingCake] = useState<Cake | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  const filteredCakes = useMemo(() => {
    if (selectedCategory === 'All') return CAKES;
    return CAKES.filter(c => c.category === selectedCategory);
  }, [selectedCategory]);

  const handleAddToCart = (customization: Customization) => {
    if (!activeCustomizingCake) return;
    
    setCart(prev => {
      const existing = prev.find(i => i.id === activeCustomizingCake.id);
      if (existing) {
        return prev.map(i => i.id === activeCustomizingCake.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...activeCustomizingCake, customization, quantity: 1 }];
    });
    
    setActiveCustomizingCake(null);
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        cartCount={cart.reduce((s, i) => s + i.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={setActivePage}
      />

      <main className="flex-grow">
        {activePage === 'home' ? (
          <>
            <Hero onShopClick={() => setActivePage('shop')} />
            
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-serif mb-4">The Tuchaaes Experience</h2>
              <p className="text-gray-500 max-w-2xl mx-auto mb-16">
                We believe cakes should taste as good as they look. Our process combines premium ingredients with contemporary artistry.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  { title: 'Bespoke Design', desc: 'Every cake is unique to your story and vision.', icon: '🎨' },
                  { title: 'Premium Taste', desc: 'We only use top-tier organic ingredients.', icon: '🍓' },
                  { title: 'Eco-Friendly', desc: 'Sustainably sourced packaging and materials.', icon: '🌿' }
                ].map((feature, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-white shadow-sm border border-pink-50 hover:shadow-xl transition-shadow">
                    <div className="text-5xl mb-6">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        ) : (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
              <div>
                <h1 className="text-4xl font-serif mb-2">Cake Collection</h1>
                <p className="text-gray-500">Pick a design and customize it to perfection.</p>
              </div>
              
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-6 py-2 rounded-full whitespace-nowrap font-medium transition ${
                      selectedCategory === cat 
                        ? 'bg-pink-500 text-white shadow-md' 
                        : 'bg-white text-gray-600 border border-gray-100 hover:border-pink-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredCakes.map(cake => (
                <div 
                  key={cake.id} 
                  className="group bg-white rounded-3xl overflow-hidden border border-pink-50 shadow-sm hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={cake.image} 
                      alt={cake.name} 
                      className="w-full h-full object-cover transition transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <button 
                      onClick={() => setActiveCustomizingCake(cake)}
                      className="absolute bottom-6 left-6 right-6 py-3 bg-white/90 backdrop-blur text-pink-600 font-bold rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-pink-500 hover:text-white"
                    >
                      Personalize & Add
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{cake.name}</h3>
                      <span className="text-lg font-bold text-pink-500">${cake.price}</span>
                    </div>
                    <p className="text-gray-500 text-sm mb-4">{cake.description}</p>
                    <div className="flex gap-1">
                      {cake.colors.map((c, i) => (
                        <div key={i} className="w-3 h-3 rounded-full" style={{ backgroundColor: c }} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <span className="text-3xl font-serif font-bold text-pink-400">Tuchaaes</span>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Making celebrations iconic with modern aesthetics and premium taste. Your dream cake is just a few clicks away.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-gray-400">
              <li><button onClick={() => setActivePage('shop')} className="hover:text-pink-400">Shop All</button></li>
              <li><a href="#" className="hover:text-pink-400">Best Sellers</a></li>
              <li><a href="#" className="hover:text-pink-400">Our Story</a></li>
              <li><a href="#" className="hover:text-pink-400">Delivery Info</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-pink-400">FAQ</a></li>
              <li><a href="#" className="hover:text-pink-400">Bulk Orders</a></li>
              <li><a href="#" className="hover:text-pink-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-400">Terms of Use</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Stay Sweet</h4>
            <p className="text-sm text-gray-400 mb-4">Join our newsletter for exclusive discounts and new design drops!</p>
            <div className="flex">
              <input type="email" placeholder="Email address" className="bg-gray-800 border-none rounded-l-xl px-4 py-3 w-full focus:ring-1 focus:ring-pink-500" />
              <button className="bg-pink-500 px-4 py-3 rounded-r-xl hover:bg-pink-600 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Tuchaaes Cakes. All rights reserved.
        </div>
      </footer>

      {activeCustomizingCake && (
        <Customizer 
          cake={activeCustomizingCake} 
          onClose={() => setActiveCustomizingCake(null)} 
          onAddToCart={handleAddToCart}
        />
      )}

      {isCartOpen && (
        <Cart 
          items={cart} 
          onClose={() => setIsCartOpen(false)} 
          onRemove={handleRemoveFromCart}
        />
      )}
    </div>
  );
};

export default App;
