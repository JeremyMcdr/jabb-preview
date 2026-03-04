import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { CATALOGUE } from '../constants';

export const Shop = () => {
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get('cat') || 'Tout';
  const [filter, setFilter] = useState(initialCat);
  const categories = ['Tout', 'T-shirts', 'Hoodies', 'Accessoires'];

  const filtered = filter === 'Tout'
    ? CATALOGUE
    : CATALOGUE.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <span className="text-jabb-blue font-bold uppercase tracking-widest text-sm">Collection</span>
          <h1 className="text-6xl font-black uppercase italic mt-2">La Collek</h1>
          <p className="text-slate-500 font-medium mt-4">Toutes nos pièces personnalisables. Broderie, sérigraphie, flocage.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-full font-bold text-sm uppercase transition-all ${
                filter === cat
                  ? 'bg-jabb-blue text-white shadow-lg shadow-jabb-blue/20'
                  : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((product, idx) => (
          <motion.div
            key={product.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="group relative aspect-[3/4] bg-slate-200 rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white text-xl font-black uppercase tracking-tight">{product.name}</h3>
              <p className="text-white/70 text-sm font-medium mt-1 opacity-0 group-hover:opacity-100 transition-opacity">{product.description}</p>
            </div>
            <div className={`absolute top-4 left-4 ${product.tagStyle} font-black px-3 py-1 rounded-full text-sm ${product.rotation} shadow-lg`}>
              {product.price}
            </div>
            <Link
              to="/custom"
              className="absolute bottom-6 right-6 size-12 bg-white text-jabb-blue rounded-full flex items-center justify-center translate-y-20 group-hover:translate-y-0 transition-transform duration-300 hover:bg-jabb-accent hover:text-slate-900"
            >
              <ShoppingCart size={20} />
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 bg-jabb-dark rounded-3xl p-12 md:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-4">Tu veux un truc unique ?</h2>
          <p className="text-slate-400 font-medium">On a accès à plus de 200 000 références. Envoie-nous ta demande pour un devis sur mesure.</p>
        </div>
        <Link to="/custom" className="bg-jabb-blue text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-jabb-blue/25 whitespace-nowrap flex items-center gap-2">
          Custom Lab <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
};
