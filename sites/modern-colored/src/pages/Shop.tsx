/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CATALOGUE } from '../constants';
import { Filter, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Shop = () => {
  const [filter, setFilter] = useState('Tout');
  const categories = ['Tout', 'Textile', 'Objets', 'Goodies'];

  const filteredProducts = filter === 'Tout' 
    ? CATALOGUE 
    : CATALOGUE.filter(p => p.category === filter);

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <h1 className="font-display text-6xl font-bold italic uppercase tracking-tighter mb-4">Notre Catalogue</h1>
          <p className="text-gray-500 font-medium">Découvrez notre large gamme de supports personnalisables.</p>
        </div>
        
        <div className="flex flex-wrap gap-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-xl font-bold text-xs tracking-widest uppercase transition-all ${
                filter === cat 
                  ? 'bg-jabb-blue text-white shadow-lg shadow-jabb-blue/20' 
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredProducts.map((product) => (
          <motion.div 
            key={product.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="group"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-100 mb-6">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-8 text-center">
                <p className="text-white text-sm font-medium mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  {product.description}
                </p>
                <Link 
                  to="/custom" 
                  className="bg-white text-black px-6 py-3 rounded-xl font-bold text-xs tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform delay-75 hover:bg-jabb-lime hover:text-white"
                >
                  DEMANDER UN DEVIS
                </Link>
              </div>
              {product.tag && (
                <span className={`absolute top-6 left-6 ${product.tagColor} text-white text-[10px] font-bold px-4 py-1.5 rounded-full italic tracking-widest uppercase`}>
                  {product.tag}
                </span>
              )}
            </div>
            <div className="flex justify-between items-start">
              <div>
                <span className="text-jabb-blue font-bold text-[10px] tracking-widest uppercase mb-1 block">{product.category}</span>
                <h3 className="font-display font-bold text-xl uppercase tracking-tight group-hover:text-jabb-blue transition-colors">{product.name}</h3>
              </div>
              <ArrowRight className="text-gray-300 group-hover:text-jabb-blue group-hover:translate-x-1 transition-all" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 bg-black rounded-[3rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold italic uppercase tracking-tighter mb-6">Vous ne trouvez pas votre bonheur ?</h2>
          <p className="text-gray-400 font-medium">Nous avons accès à plus de 200 000 références. Contactez-nous pour une recherche personnalisée.</p>
        </div>
        <Link to="/custom" className="bg-jabb-blue text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-jabb-lime hover:text-white transition-all whitespace-nowrap">
          NOUS CONTACTER
        </Link>
      </div>
    </div>
  );
};

