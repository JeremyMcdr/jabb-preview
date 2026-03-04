import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { CATALOGUE } from '../constants';

export const Shop = () => (
  <div className="bg-dark-surface min-h-screen">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
      <div className="mb-16">
        <h3 className="text-neon-green font-black uppercase tracking-widest text-sm mb-2">// FULL CATALOG</h3>
        <h1 className="text-6xl md:text-7xl font-black italic tracking-tighter">ALL GEAR</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {CATALOGUE.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`group relative ${idx % 2 === 1 ? 'mt-8 lg:mt-12' : ''}`}
          >
            <div className={`aspect-[3/4] bg-dark-bg overflow-hidden mb-6 ${product.rotation} group-hover:rotate-0 transition-transform duration-500 border-2 ${product.borderColor} ${product.shadowClass}`}>
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
              />
              {product.tag && (
                <div className="absolute top-4 right-4 bg-neon-green text-black px-3 py-1 text-xs font-black italic">{product.tag}</div>
              )}
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h5 className="text-xl font-black uppercase">{product.name}</h5>
                <p className="text-neon-purple font-bold">{product.price}</p>
                <p className="text-slate-500 text-sm mt-1">{product.description}</p>
              </div>
              <Link to="/custom" className="bg-dark-surface border border-neon-purple p-2 hover:bg-neon-purple transition-colors shrink-0">
                <ShoppingCart size={18} className="text-white" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 border-2 border-neon-purple/30 p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-4">
            <span className="text-neon-green">CUSTOM</span> PIECE?
          </h2>
          <p className="text-slate-400 font-medium">Tu veux un truc unique ? Upload ton design ou décris ton projet. On s'occupe du reste.</p>
        </div>
        <Link to="/custom" className="bg-neon-purple text-white font-black px-10 py-5 rounded-none skew-x-[-12deg] transition-all hover:bg-neon-green hover:text-black group inline-block whitespace-nowrap">
          <span className="skew-x-[12deg] block flex items-center gap-2">CUSTOM LAB <ArrowRight size={18} /></span>
        </Link>
      </div>
    </div>
  </div>
);
