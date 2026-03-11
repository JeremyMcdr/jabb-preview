import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useQuoteModal } from '../components/Layout';
import { PRODUCTS, CATEGORIES, CAT_COLORS, type Product } from '../data/products';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { open: openQuote } = useQuoteModal();
  const catColor = CAT_COLORS[product.category] || "bg-jabb-blue";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-jabb-blue/30 transition-all duration-300 flex flex-col"
    >
      {/* Color bar */}
      <div className={`h-1.5 ${catColor}`} />

      {/* Clickable area */}
      <Link to={`/textile/${product.ref}`} className="block flex-1">
        {/* Product image */}
        <div className="aspect-[4/3] bg-slate-50 overflow-hidden flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-2 mb-1">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{product.category}</p>
            <span className="text-[10px] font-bold uppercase tracking-widest text-jabb-blue bg-jabb-blue/10 px-2 py-0.5 rounded-md shrink-0">
              {product.brand}
            </span>
          </div>
          <h3 className="font-bold text-base leading-tight line-clamp-2 group-hover:text-jabb-blue transition-colors">{product.name}</h3>
          <span className="text-xs font-mono font-bold text-slate-400 mt-1 block">
            Réf. {product.ref}
          </span>
        </div>
      </Link>

      {/* CTA outside Link */}
      <div className="px-5 pb-5 mt-auto">
        <button
          onClick={openQuote}
          className="w-full flex items-center justify-center gap-2 bg-jabb-blue text-white px-4 py-3 rounded-xl text-sm font-bold hover:bg-jabb-blue/90 transition-colors"
        >
          Devis Express
        </button>
      </div>
    </motion.div>
  );
};

export const Shop = () => {
  const [filter, setFilter] = useState<string>("Voir tous les produits");
  const { open: openQuote } = useQuoteModal();

  const filtered = filter === "Voir tous les produits"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === filter);

  const count = filtered.length;

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <span className="text-jabb-blue font-bold uppercase tracking-widest text-sm">Textile</span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter mt-2">Nos Incontournables</h1>
          <p className="text-slate-500 font-medium mt-4 max-w-xl">
            Toutes nos pièces sont personnalisables — <span className="text-jabb-blue font-bold">Broderie, Sérigraphie, Transfert, Sublimation et Tampographie</span>.
          </p>
        </div>
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest shrink-0">
          {count} produit{count > 1 ? 's' : ''}
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-12 sticky top-20 z-30 bg-white/80 backdrop-blur-lg py-4 -mx-6 px-6 border-b border-slate-100">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2.5 rounded-full font-bold text-sm uppercase transition-all whitespace-nowrap ${
              filter === cat
                ? 'bg-jabb-blue text-white shadow-lg shadow-jabb-blue/20'
                : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <AnimatePresence mode="popLayout">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* CTA Bottom */}
      <div className="mt-20 bg-slate-900 rounded-3xl p-12 md:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">Vous ne trouvez pas votre bonheur ?</h2>
          <p className="text-slate-400 font-medium">
            Ceci est un petit aperçu de notre catalogue complet. Nous avons accès à plus de <span className="text-jabb-accent font-bold">300 000 références</span>. Envoyez-nous une demande pour un devis sur mesure.
          </p>
        </div>
        <button
          onClick={openQuote}
          className="bg-jabb-blue text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-jabb-blue/25 whitespace-nowrap flex items-center gap-2"
        >
          Devis Express <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};
