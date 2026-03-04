import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Plus, ArrowRight } from 'lucide-react';
import { CATALOGUE } from '../constants';

export const Shop = () => (
  <div className="bg-slate-50 min-h-screen">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-16">
        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
          Catalogue
        </span>
        <h1 className="text-5xl font-black text-slate-900 mb-4">Tous nos produits</h1>
        <p className="text-lg text-slate-500 font-medium max-w-xl">
          Une sélection rigoureuse de textile et d'objets publicitaires personnalisables pour vos projets d'entreprise.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {CATALOGUE.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300"
          >
            <div className="aspect-[3/4] overflow-hidden bg-slate-200">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-[10px] font-bold uppercase tracking-widest ${product.tagColor} px-2 py-0.5 rounded`}>
                  {product.tag}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 mb-1">{product.name}</h3>
              <p className="text-xs text-slate-500 mb-4">{product.subtitle}</p>
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">À partir de</p>
                  <p className="text-lg font-black text-primary">{product.price} <span className="text-xs font-normal text-slate-400">HT</span></p>
                </div>
                <Link to="/custom" className="size-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-slate-600">
                  <Plus size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 bg-slate-900 rounded-[2rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
            Besoin d'un produit spécifique ?
          </h2>
          <p className="text-white/70 font-medium">
            Nous sourçons le produit idéal pour votre projet. Décrivez votre besoin et recevez un devis personnalisé.
          </p>
        </div>
        <Link to="/custom" className="bg-white text-slate-900 font-black px-10 py-5 rounded-2xl transition-all hover:scale-105 group inline-flex items-center gap-2 shrink-0">
          Demander un devis <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  </div>
);
