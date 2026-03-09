import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Diamond, Palette, ShoppingCart, Zap, Phone, MessageCircle, CheckCircle2, Brush } from 'lucide-react';
import { CATALOGUE, STATS, TESTIMONIALS, CONTACT } from '../constants';
import { useQuoteModal } from '../components/Layout';

const Hero = () => {
  const { open: openQuote } = useQuoteModal();
  const waLink = `https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, '')}`;

  return (
    <section className="flex flex-col lg:flex-row min-h-[85vh] overflow-hidden">
      {/* Left: Visual Side - placeholder for photos/videos from Bertille */}
      <div className="lg:w-3/5 relative bg-slate-200 group min-h-[40vh] lg:min-h-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCx1ElI5NN00TWdoCSeFAHSZJ5BA9RF9GUHv6scd56kbDNQdLUaIG4sCbjlgaZww4nOKzMLEegsw0i6SPGdlARjBk99Y1qCZI4RmZPWOnGaYVGacp46B80CNgVFdsjQIv62bH9JbuMMwYnmKkTWdLCHBj4dgyP6OXnZuFPzFxCJYpnqr6Ne59sRX7HZ9oIy1HDGUSw8Y5kcdpFl7ILGg6dSjEmxrNWMXUN4JrjRS7845Oz73iAJDu7n7hilkOWW70QLMpMQZctpzLQ')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8 md:bottom-10 md:left-10 md:right-10 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="inline-flex bg-jabb-accent text-slate-900 px-4 py-1 font-black text-xs uppercase skew-x-[-12deg]">
              300 000 Références
            </div>
            <div className="inline-flex bg-white/20 backdrop-blur-sm text-white px-4 py-1 font-bold text-xs uppercase skew-x-[-12deg]">
              Devis en - de 2h
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-none tracking-tighter uppercase drop-shadow-2xl italic">
            TEXTILES ET<br />GOODIES PERSONNALISÉS
          </h2>
        </div>
      </div>

      {/* Right: CTA Side */}
      <div className="lg:w-2/5 flex flex-col justify-center p-6 lg:p-12 gap-5 bg-white border-l border-jabb-blue/20">
        <div>
          <p className="text-lg font-medium text-slate-600 mb-1">
            Personnalisation à 100% — <span className="text-jabb-blue font-bold">réponse en - de 2h.</span>
          </p>
          <p className="text-sm text-slate-400">
            Plus de 5 000 entreprises et associations nous font confiance.
          </p>
        </div>

        {/* CTA 1: Devis Express */}
        <button
          onClick={openQuote}
          className="group flex items-center gap-4 p-5 bg-jabb-blue text-white rounded-xl shadow-xl shadow-jabb-blue/20 hover:scale-[1.02] transition-transform w-full text-left"
        >
          <div className="bg-white/20 p-3 rounded-lg">
            <Zap size={28} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-black uppercase">Devis Express</h3>
            <p className="text-sm opacity-80">Sans engagement, en - de 2h</p>
          </div>
          <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
        </button>

        {/* CTA 2: Appeler */}
        <a
          href={`tel:${CONTACT.phone}`}
          className="group flex items-center gap-4 p-5 bg-slate-900 text-white rounded-xl shadow-xl hover:scale-[1.02] transition-transform w-full"
        >
          <div className="bg-white/10 p-3 rounded-lg">
            <Phone size={28} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-black uppercase">Appelez-nous</h3>
            <p className="text-sm opacity-80">{CONTACT.phone}</p>
          </div>
          <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
        </a>

        {/* CTA 3: WhatsApp */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 p-5 bg-[#25D366] text-white rounded-xl shadow-xl shadow-green-500/20 hover:scale-[1.02] transition-transform w-full"
        >
          <div className="bg-white/20 p-3 rounded-lg">
            <MessageCircle size={28} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-black uppercase">WhatsApp</h3>
            <p className="text-sm opacity-80">Réponse instantanée</p>
          </div>
          <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
        </a>

        {/* Trust badges */}
        <div className="flex items-center gap-4 text-xs text-slate-400 font-bold">
          <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-green-500" /> Sans engagement</span>
          <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-green-500" /> 97% satisfaction</span>
        </div>
      </div>
    </section>
  );
};

const ProductCard: React.FC<{ product: typeof CATALOGUE[0]; offset?: boolean }> = ({ product, offset }) => {
  const { open: openQuote } = useQuoteModal();
  return (
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
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-6 left-6 right-6">
        <h3 className="text-white text-xl font-black uppercase tracking-tight drop-shadow-md">{product.name}</h3>
        {product.ref && <p className="text-white/70 text-xs font-bold mt-1 drop-shadow-md">Réf. {product.ref}</p>}
      </div>
      <div className={`absolute top-4 left-4 ${product.tagStyle} font-black px-3 py-1 rounded-full text-sm ${product.rotation} shadow-lg`}>
        {product.price}
      </div>
      <button
        onClick={openQuote}
        className="absolute bottom-6 right-6 size-12 bg-white text-jabb-blue rounded-full flex items-center justify-center translate-y-20 group-hover:translate-y-0 transition-transform duration-300 hover:bg-jabb-accent hover:text-slate-900"
      >
        <ShoppingCart size={20} />
      </button>
    </motion.div>
  );
};

const Products = () => {
  const { open: openQuote } = useQuoteModal();

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
      <div className="flex items-end justify-between mb-12">
        <div>
          <span className="text-jabb-blue font-bold uppercase tracking-widest text-sm">Catalogue</span>
          <h2 className="text-5xl font-black uppercase italic mt-2">Nos Best Sellers</h2>
        </div>
        <Link to="/textile" className="text-jabb-blue font-bold border-b-2 border-jabb-blue pb-1 hover:text-slate-900 hover:border-slate-900 transition-all">
          VOIR TOUT
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CATALOGUE.slice(0, 4).map((product, idx) => (
          <ProductCard key={product.id} product={product} offset={idx % 2 === 1} />
        ))}
      </div>
      <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
        <button onClick={openQuote} className="flex items-center justify-center gap-2 bg-jabb-blue text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-lg shadow-jabb-blue/25">
          <Zap size={18} /> Devis Express en - de 2h
        </button>
        <Link to="/textile" className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-jabb-blue transition-colors">
          Voir le Catalogue <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
};

const MarqueeBanner = () => (
  <section className="bg-jabb-blue py-10 overflow-hidden border-y-4 border-slate-900">
    <div className="flex animate-marquee">
      {[0, 1].map(i => (
        <div key={i} className="flex gap-16 items-center shrink-0 pr-16">
          <span className="text-4xl md:text-5xl font-black text-white italic uppercase flex items-center gap-3">
            Devis en - de 2h <Zap size={32} className="text-jabb-accent" />
          </span>
          <span className="text-4xl md:text-5xl font-black text-white italic uppercase flex items-center gap-3">
            Marquage sur mesure <Brush size={32} className="text-jabb-accent" />
          </span>
          <span className="text-4xl md:text-5xl font-black text-white italic uppercase flex items-center gap-3">
            300K+ Références <Diamond size={32} className="text-jabb-accent" />
          </span>
          <span className="text-4xl md:text-5xl font-black text-white italic uppercase flex items-center gap-3">
            Atelier de Marquage Français <Palette size={32} className="text-jabb-accent" />
          </span>
        </div>
      ))}
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

const GoogleRating = () => (
  <div className="flex items-center justify-center gap-3 mb-8">
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={20} className="text-yellow-400" fill="currentColor" />
      ))}
    </div>
    <span className="text-2xl font-black">4.9/5</span>
    <span className="text-sm text-slate-400 font-bold">sur Google</span>
  </div>
);

const Testimonials = () => (
  <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
    <div className="text-center mb-8">
      <span className="text-jabb-blue font-bold uppercase tracking-widest text-sm">Témoignages</span>
      <h2 className="text-5xl font-black uppercase italic mt-2">Ils Nous Font Confiance</h2>
    </div>
    <GoogleRating />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {TESTIMONIALS.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative"
        >
          <div className="flex items-center gap-1 mb-4">
            {Array.from({ length: t.rating }).map((_, j) => (
              <Star key={j} size={14} className="text-yellow-400" fill="currentColor" />
            ))}
          </div>
          <p className="text-base font-medium italic mb-6 leading-relaxed">"{t.text}"</p>
          <div>
            <p className="font-black text-jabb-blue">{t.name}</p>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{t.role}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const CTASection = () => {
  const { open: openQuote } = useQuoteModal();

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-10 pb-20">
      <div className="bg-jabb-dark rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-jabb-blue/20 blur-[120px] rounded-full" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6">
            Prêt à <span className="text-jabb-accent">personnaliser</span> ?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-10 font-medium text-lg">
            Devis gratuit en moins de 2 heures. Plus de 300 000 références disponibles.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={openQuote} className="flex items-center justify-center gap-2 bg-jabb-blue text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-jabb-blue/25">
              <Zap size={18} /> Devis Express
            </button>
            <a href={`tel:${CONTACT.phone}`} className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all">
              <Phone size={18} /> Appeler
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

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
