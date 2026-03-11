import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Download, ExternalLink, ArrowRight, Zap, ChevronRight } from 'lucide-react';
import { PRODUCTS, CAT_COLORS, type Product } from '../data/products';
import { useQuoteModal } from '../components/Layout';
import { CONTACT } from '../constants';

const RelatedCard: React.FC<{ product: Product }> = ({ product }) => {
  const catColor = CAT_COLORS[product.category] || "bg-jabb-blue";
  return (
    <Link
      to={`/textile/${product.ref}`}
      className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-jabb-blue/30 transition-all duration-300"
    >
      <div className={`h-1 ${catColor}`} />
      <div className="aspect-[4/3] bg-slate-50 flex items-center justify-center">
        <img src={product.image} alt={product.name} className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500" loading="lazy" />
      </div>
      <div className="p-4">
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">{product.category}</p>
        <h4 className="font-bold text-sm leading-tight line-clamp-2 group-hover:text-jabb-blue transition-colors">{product.name}</h4>
        <span className="text-xs font-mono text-slate-400 mt-1 block">Réf. {product.ref}</span>
      </div>
    </Link>
  );
};

export default function ProductDetail() {
  const { productRef } = useParams<{ productRef: string }>();
  const product = PRODUCTS.find(p => p.ref === productRef);
  const { open: openQuote } = useQuoteModal();
  const [selectedColor, setSelectedColor] = useState(0);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32 text-center">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-6">Produit introuvable</h1>
        <p className="text-slate-500 font-medium mb-8">Ce produit n'existe pas ou a été retiré du catalogue.</p>
        <Link to="/textile" className="inline-flex items-center gap-2 text-jabb-blue font-bold hover:underline">
          <ArrowLeft size={18} /> Retour au catalogue
        </Link>
      </div>
    );
  }

  const related = PRODUCTS
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const catColor = CAT_COLORS[product.category] || "bg-jabb-blue";

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-400 mb-8 flex-wrap">
        <Link to="/textile" className="hover:text-jabb-blue transition-colors">Textile</Link>
        <ChevronRight size={12} />
        <Link to="/textile" className="hover:text-jabb-blue transition-colors">{product.category}</Link>
        <ChevronRight size={12} />
        <span className="text-slate-700">{product.name}</span>
      </nav>

      {/* Hero: 2 columns */}
      <div className="flex flex-col lg:flex-row gap-10 mb-20">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:w-[55%]"
        >
          <div className="bg-slate-50 rounded-3xl overflow-hidden flex items-center justify-center aspect-square relative">
            <div className={`absolute top-0 left-0 right-0 h-1.5 ${catColor}`} />
            <img
              src={product.colors[selectedColor]?.image || product.image}
              alt={`${product.name} - ${product.colors[selectedColor]?.name || ''}`}
              className="max-w-[70%] max-h-[70%] object-contain"
            />
          </div>
        </motion.div>

        {/* Right: Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:w-[45%] flex flex-col"
        >
          {/* Brand badge */}
          <span className="text-[10px] font-bold uppercase tracking-widest text-jabb-blue bg-jabb-blue/10 px-3 py-1 rounded-full w-fit mb-3">
            {product.brand}
          </span>

          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight mb-2">
            {product.name}
          </h1>

          <span className="font-mono font-bold text-sm text-slate-400 mb-4">
            Réf. {product.ref}
          </span>

          <p className="text-slate-500 font-medium leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Colors */}
          {product.colors.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                Couleurs disponibles
                <span className="text-jabb-blue ml-2">{product.colors[selectedColor]?.name}</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(i)}
                    title={color.name}
                    className={`w-9 h-9 rounded-full border-2 transition-all hover:scale-110 ${
                      i === selectedColor
                        ? 'border-jabb-blue ring-2 ring-jabb-blue/30 scale-110'
                        : 'border-slate-200'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  >
                    {color.hex === '#FFFFFF' && (
                      <span className="block w-full h-full rounded-full border border-slate-200" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Specs */}
          {product.specs.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Caractéristiques</h3>
              <div className="bg-slate-50 rounded-xl overflow-hidden">
                {product.specs.map((spec, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between px-5 py-3 ${
                      i % 2 === 0 ? 'bg-slate-50' : 'bg-white'
                    }`}
                  >
                    <span className="text-sm font-bold text-slate-500">{spec.label}</span>
                    <span className="text-sm font-medium text-slate-700">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTAs */}
          <div className="space-y-3 mt-auto">
            <button
              onClick={openQuote}
              className="group w-full flex items-center justify-center gap-3 bg-jabb-blue text-white px-6 py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:scale-[1.02] transition-transform shadow-lg shadow-jabb-blue/20"
            >
              <Zap size={18} /> Devis Express
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {product.techSheetUrl && (
              <a
                href={product.techSheetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-slate-100 text-slate-700 px-6 py-4 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors"
              >
                <Download size={16} /> Télécharger la fiche technique
              </a>
            )}

            {/* <a
              href={product.supplierLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 text-slate-400 hover:text-jabb-blue text-sm font-bold transition-colors py-2"
            >
              <ExternalLink size={14} /> Voir chez le fournisseur
            </a> */}
          </div>
        </motion.div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="mb-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-jabb-blue font-bold uppercase tracking-widest text-sm">Catalogue</span>
              <h2 className="text-3xl font-black uppercase tracking-tighter mt-1">Produits similaires</h2>
            </div>
            <Link to="/textile" className="text-jabb-blue font-bold text-sm hover:underline flex items-center gap-1">
              Voir tout <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {related.map(p => (
              <RelatedCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <div className="bg-slate-900 rounded-3xl p-12 md:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
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
}
