
import React, { useState } from 'react';
import { Cake, Customization } from '../types';
import { FLAVORS, SIZES } from '../constants';

interface CustomizerProps {
  cake: Cake;
  onClose: () => void;
  onAddToCart: (customization: Customization) => void;
}

const Customizer: React.FC<CustomizerProps> = ({ cake, onClose, onAddToCart }) => {
  const [flavor, setFlavor] = useState(FLAVORS[0]);
  const [size, setSize] = useState(SIZES[1]);
  const [message, setMessage] = useState('');
  const [primaryColor, setPrimaryColor] = useState(cake.colors[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddToCart({ flavor, size, message, primaryColor });
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col md:flex-row">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/80 rounded-full shadow-md z-10 hover:bg-gray-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="md:w-1/2 p-6 bg-pink-50/30">
          <div className="sticky top-0">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-inner bg-white mb-6">
              <img src={cake.image} alt={cake.name} className="w-full h-full object-cover" />
            </div>
            <h2 className="text-3xl font-serif mb-2">{cake.name}</h2>
            <p className="text-gray-500 mb-4">{cake.description}</p>
            <div className="text-2xl font-bold text-pink-600">${cake.price}</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="md:w-1/2 p-8 space-y-8">
          <div>
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">Choose Flavor</label>
            <div className="grid grid-cols-1 gap-2">
              {FLAVORS.map(f => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFlavor(f)}
                  className={`px-4 py-3 rounded-xl border-2 transition text-left ${
                    flavor === f ? 'border-pink-500 bg-pink-50 text-pink-700' : 'border-gray-100 hover:border-pink-200'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">Size Selection</label>
            <div className="grid grid-cols-2 gap-3">
              {SIZES.map(s => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  className={`px-4 py-3 rounded-xl border-2 transition ${
                    size === s ? 'border-pink-500 bg-pink-50 text-pink-700' : 'border-gray-100 hover:border-pink-200 text-gray-600'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">Custom Theme Color</label>
            <div className="flex gap-4">
              {cake.colors.map(c => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setPrimaryColor(c)}
                  className={`w-10 h-10 rounded-full border-4 transition transform hover:scale-110 ${
                    primaryColor === c ? 'border-gray-900 ring-2 ring-pink-500 ring-offset-2' : 'border-transparent'
                  }`}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">Message on Cake</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="e.g. Happy 21st Birthday, Chloe!"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-pink-500 focus:outline-none transition h-24"
            />
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-pink-500 text-white font-bold rounded-2xl shadow-xl shadow-pink-100 hover:bg-pink-600 transition transform hover:-translate-y-1"
          >
            Add to Bag - ${cake.price}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Customizer;
