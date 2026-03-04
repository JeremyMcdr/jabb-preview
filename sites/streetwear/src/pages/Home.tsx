import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Sparkles, Diamond, Palette, ShoppingCart, Quote } from 'lucide-react';
import { CATALOGUE, STATS, TESTIMONIALS } from '../constants';

const Hero = () => (
  <section className="flex flex-col lg:flex-row min-h-[85vh] overflow-hidden">
    {/* Left: Visual Side */}
    <div className="lg:w-3/5 relative bg-slate-200 group min-h-[50vh] lg:min-h-0">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCx1ElI5NN00TWdoCSeFAHSZJ5BA9RF9GUHv6scd56kbDNQdLUaIG4sCbjlgaZww4nOKzMLEegsw0i6SPGdlARjBk99Y1qCZI4RmZPWOnGaYVGacp46B80CNgVFdsjQIv62bH9JbuMMwYnmKkTWdLCHBj4dgyP6OXnZuFPzFxCJYpnqr6Ne59sRX7HZ9oIy1HDGUSw8Y5kcdpFl7ILGg6dSjEmxrNWMXUN4JrjRS7845Oz73iAJDu7n7hilkOWW70QLMpMQZctpzLQ')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-jabb-blue/40 to-transparent" />
      <div className="absolute bottom-8 left-8 right-8 md:bottom-10 md:left-10 md:right-10 flex flex-col gap-2">
        <div className="inline-flex bg-jabb-accent text-slate-900 px-4 py-1 font-black text-sm uppercase skew-x-[-12deg] w-fit">
          New Collection
        </div>
        <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-white leading-none tracking-tighter uppercase drop-shadow-2xl italic">
          PERSONNALISE<br />TON STYLE
        </h2>
      </div>
    </div>

    {/* Right: Services Side */}
    <div className="lg:w-2/5 flex flex-col justify-center p-8 lg:p-16 gap-8 bg-white border-l border-jabb-blue/20">
      <div className="flex flex-col gap-6">
        <p className="text-xl font-medium text-slate-600">
          Propulse ton identité à travers des pièces uniques. Broderies artisanales et sérigraphies HD réalisées dans notre atelier.
        </p>
        <div className="flex flex-col gap-4">
          <Link to="/custom" className="group flex items-center gap-6 p-6 bg-jabb-blue text-white rounded-xl shadow-xl shadow-jabb-blue/20 hover:scale-[1.02] transition-transform">
            <Palette size={40} className="opacity-80" />
            <div>
              <h3 className="text-2xl font-black uppercase">Broderie</h3>
              <p className="text-sm opacity-90">Qualité premium artisanale faite main.</p>
            </div>
            <ArrowRight size={20} className="ml-auto group-hover:translate-x-2 transition-transform" />
          </Link>
          <Link to="/custom" className="group flex items-center gap-6 p-6 bg-jabb-accent text-slate-900 rounded-xl shadow-xl shadow-jabb-accent/20 hover:scale-[1.02] transition-transform">
            <Diamond size={40} className="opacity-80" />
            <div>
              <h3 className="text-2xl font-black uppercase">Sérigraphie</h3>
              <p className="text-sm opacity-90">Impressions HD durables et éclatantes.</p>
            </div>
            <ArrowRight size={20} className="ml-auto group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
      <Link to="/shop" className="w-full bg-slate-900 text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-jabb-blue transition-colors text-center">
        SHOPPER LA COLLEK
      </Link>
    </div>
  </section>
);

const ProductCard: React.FC<{ product: typeof CATALOGUE[0]; offset?: boolean }> = ({ product, offset }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`group relative aspect-[3/4] bg-slate-200 rounded-2xl overflow-hidden shadow-lg ${offset ? 'lg:mt-12' : ''}`}
  >
    <img
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      src={product.image}
      alt={product.name}
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="absolute bottom-6 left-6 right-6">
      <h3 className="text-white text-xl font-black uppercase tracking-tight">{product.name}</h3>
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
);

const Products = () => (
  <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
    <div className="flex items-end justify-between mb-12">
      <div>
        <span className="text-jabb-blue font-bold uppercase tracking-widest text-sm">Catalog</span>
        <h2 className="text-5xl font-black uppercase italic mt-2">Nos Produits</h2>
      </div>
      <Link to="/shop" className="text-jabb-blue font-bold border-b-2 border-jabb-blue pb-1 hover:text-slate-900 hover:border-slate-900 transition-all">
        VOIR TOUT
      </Link>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {CATALOGUE.slice(0, 4).map((product, idx) => (
        <ProductCard key={product.id} product={product} offset={idx % 2 === 1} />
      ))}
    </div>
  </section>
);

const MarqueeBanner = () => (
  <section className="bg-jabb-blue py-10 overflow-hidden border-y-4 border-slate-900">
    <div className="flex animate-marquee">
      <div className="flex gap-16 items-center shrink-0 pr-16">
        <span className="text-4xl md:text-5xl font-black text-white italic uppercase flex items-center gap-3">
          Broderie Custom <Star size={32} className="text-jabb-accent" fill="currentColor" />
        </span>
        <span className="text-4xl md:text-5xl font-black text-white italic uppercase flex items-center gap-3">
          Streetwear Authentique <Sparkles size={32} className="text-jabb-accent" />
        </span>
        <span className="text-4xl md:text-5xl font-black text-white italic uppercase flex items-center gap-3">
          Qualité HD <Diamond size={32} className="text-jabb-accent" />
        </span>
        <span className="text-4xl md:text-5xl font-black text-white italic uppercase flex items-center gap-3">
          Atelier Français <Palette size={32} className="text-jabb-accent" />
        </span>
      </div>
      <div className="flex gap-16 items-center shrink-0 pr-16">
        <span className="text-4xl md:text-5xl font-black text-white italic uppercase flex items-center gap-3">
          Broderie Custom <Star size={32} className="text-jabb-accent" fill="currentColor" />
        </span>
        <span className="text-4xl md:text-5xl font-black text-white italic uppercase flex items-center gap-3">
          Streetwear Authentique <Sparkles size={32} className="text-jabb-accent" />
        </span>
        <span className="text-4xl md:text-5xl font-black text-white italic uppercase flex items-center gap-3">
          Qualité HD <Diamond size={32} className="text-jabb-accent" />
        </span>
        <span className="text-4xl md:text-5xl font-black text-white italic uppercase flex items-center gap-3">
          Atelier Français <Palette size={32} className="text-jabb-accent" />
        </span>
      </div>
    </div>
  </section>
);

const StatsBar = () => (
  <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {STATS.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="bg-white rounded-2xl p-8 text-center shadow-sm border border-slate-100"
        >
          <p className="text-4xl font-black italic text-jabb-blue">{stat.value}</p>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const Testimonials = () => (
  <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
    <div className="text-center mb-16">
      <span className="text-jabb-blue font-bold uppercase tracking-widest text-sm">Témoignages</span>
      <h2 className="text-5xl font-black uppercase italic mt-2">Ils Kiffent</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {TESTIMONIALS.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative"
        >
          <Quote size={32} className="text-jabb-blue/20 absolute top-6 right-6" />
          <p className="text-lg font-medium italic mb-6 leading-relaxed">"{t.text}"</p>
          <div>
            <p className="font-black text-jabb-blue">{t.name}</p>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{t.role}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const CTASection = () => (
  <section className="max-w-7xl mx-auto px-6 lg:px-10 py-10 pb-20">
    <div className="bg-jabb-dark rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-jabb-blue/20 blur-[120px] rounded-full" />
      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6">
          Prêt à <span className="text-jabb-accent">créer</span> ?
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-10 font-medium text-lg">
          Devis gratuit en moins de 2 heures. Plus de 200 000 références disponibles.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/custom" className="bg-jabb-blue text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-jabb-blue/25">
            Demander un Devis
          </Link>
          <Link to="/shop" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all">
            Voir le Catalogue
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export const Home = () => (
  <>
    <Hero />
    <Products />
    <MarqueeBanner />
    <StatsBar />
    <Testimonials />
    <CTASection />
  </>
);
