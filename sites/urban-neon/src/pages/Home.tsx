import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart, Star, Sparkles, Diamond, Palette } from 'lucide-react';
import { CATALOGUE, CATEGORIES } from '../constants';

const Hero = () => (
  <section className="relative min-h-[85vh] flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/80 to-transparent z-10" />
      <img
        className="w-full h-full object-cover grayscale contrast-125"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSNGJ3wuIvTIdp1rBpqfZzTTYTE8GX03wIUYCIpsIMgzoSZcu6zixAKUwLG8jUcXDam79EUBLC_8ZB3F8F265RBgg24-Sirn38GF10Rogb5DUpFapPoC1wI-QY1aBAMaQF_Vf2TXbYR-2wTh89I9HvkZ3YSRqAhMooIHoS_zP5hWRRPUYTtBlyA5r0IdTyrMUQ7NFomNLB5uttOdGoDo-tEOjaqnep0x1PL5nObYcMiderdVRh3JJw0UrKzyqHeZlDEwDcnmbQbSc"
        alt="Urban streetwear"
        referrerPolicy="no-referrer"
      />
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
      <div className="skew-box bg-neon-green/90 p-2 inline-block mb-4">
        <span className="skew-content block text-black font-black uppercase tracking-tighter px-4 text-sm">Limited Release v.01</span>
      </div>
      <h2 className="text-6xl sm:text-7xl md:text-9xl font-black italic tracking-tighter leading-none mb-6">
        URBAN <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-green">REVOLUTION</span>
      </h2>
      <p className="max-w-xl text-lg font-medium mb-10 text-slate-300">
        Streetwear haute performance pour le digital native. Silhouettes bold, textures néon, et attitude sans compromis.
      </p>
      <div className="flex flex-wrap gap-6">
        <Link to="/shop" className="bg-neon-purple hover:bg-neon-purple/80 text-white font-black px-10 py-5 rounded-none skew-x-[-12deg] transition-all group inline-block">
          <span className="skew-x-[12deg] block group-hover:scale-105 transition-transform">SHOP THE DROP</span>
        </Link>
        <Link to="/custom" className="border-4 border-neon-green text-neon-green hover:bg-neon-green hover:text-black font-black px-10 py-5 rounded-none skew-x-[-12deg] transition-all inline-block">
          <span className="skew-x-[12deg] block uppercase">Custom Lab</span>
        </Link>
      </div>
    </div>

    {/* Vertical side strip */}
    <div className="absolute right-0 top-0 h-full w-16 bg-neon-purple hidden xl:flex flex-col justify-around py-10 overflow-hidden">
      <div className="rotate-90 whitespace-nowrap text-white font-black text-3xl opacity-30">NEW SEASON // 2025</div>
      <div className="rotate-90 whitespace-nowrap text-white font-black text-3xl opacity-30">NEW SEASON // 2025</div>
    </div>
  </section>
);

const ProductCard: React.FC<{ product: typeof CATALOGUE[0]; offset?: boolean }> = ({ product, offset }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`group relative ${offset ? 'mt-8 lg:mt-12' : ''}`}
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
      </div>
      <Link to="/custom" className="bg-dark-surface border border-neon-purple p-2 hover:bg-neon-purple transition-colors">
        <ShoppingCart size={18} className="text-white" />
      </Link>
    </div>
  </motion.div>
);

const FeaturedGear = () => (
  <section className="py-24 px-6 bg-dark-surface">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h3 className="text-neon-green font-black uppercase tracking-widest text-sm mb-2">// LATEST DROPS</h3>
          <h4 className="text-5xl font-black italic">FEATURED GEAR</h4>
        </div>
        <Link to="/shop" className="text-neon-purple font-bold flex items-center gap-2 group">
          VIEW ALL <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {CATALOGUE.map((product, idx) => (
          <ProductCard key={product.id} product={product} offset={idx % 2 === 1} />
        ))}
      </div>
    </div>
  </section>
);

const CustomCallout = () => (
  <section className="py-20 bg-dark-bg relative overflow-hidden">
    {/* Grid overlay */}
    <div className="absolute inset-0 opacity-10">
      <div className="grid grid-cols-12 h-full">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-slate-700" />
        ))}
      </div>
    </div>

    <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
      <h3 className="text-neon-green font-black italic text-5xl sm:text-6xl md:text-8xl tracking-tighter mb-8 uppercase">
        YOUR DESIGN <br />
        <span className="text-white">OUR CANVAS</span>
      </h3>
      <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium">
        Upload ton artwork ou utilise notre moteur glitch pour créer des pièces uniques. Pas de minimum, qualité premium.
      </p>
      <Link to="/custom" className="inline-block bg-white text-black font-black px-12 py-6 rounded-none skew-x-[-15deg] transition-all hover:bg-neon-green group">
        <span className="skew-x-[15deg] block text-xl md:text-2xl uppercase flex items-center gap-3">
          Launch Customizer <Palette size={24} />
        </span>
      </Link>
    </div>
  </section>
);

const CategoryGrid = () => (
  <section className="bg-neon-purple py-24 -rotate-2 -mx-10 px-10">
    <div className="rotate-2 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {CATEGORIES.map((cat) => (
        <Link to="/shop" key={cat.name} className="relative h-[350px] md:h-[400px] overflow-hidden group cursor-pointer border-4 border-black">
          <img
            className="w-full h-full object-cover brightness-50 group-hover:scale-110 transition-transform duration-700"
            src={cat.image}
            alt={cat.name}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl md:text-4xl font-black italic text-white group-hover:text-neon-green transition-colors">{cat.name}</span>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

const MarqueeBanner = () => (
  <section className="bg-dark-surface py-8 overflow-hidden border-y-2 border-neon-purple/30">
    <div className="flex animate-marquee">
      <div className="flex gap-16 items-center shrink-0 pr-16">
        <span className="text-3xl md:text-4xl font-black text-white/20 italic uppercase flex items-center gap-3">
          BRODERIE CUSTOM <Star size={24} className="text-neon-green" fill="currentColor" />
        </span>
        <span className="text-3xl md:text-4xl font-black text-white/20 italic uppercase flex items-center gap-3">
          SÉRIGRAPHIE HD <Sparkles size={24} className="text-neon-purple" />
        </span>
        <span className="text-3xl md:text-4xl font-black text-white/20 italic uppercase flex items-center gap-3">
          ATELIER FRANÇAIS <Diamond size={24} className="text-neon-green" />
        </span>
        <span className="text-3xl md:text-4xl font-black text-white/20 italic uppercase flex items-center gap-3">
          QUALITÉ PREMIUM <Star size={24} className="text-neon-purple" fill="currentColor" />
        </span>
      </div>
      <div className="flex gap-16 items-center shrink-0 pr-16">
        <span className="text-3xl md:text-4xl font-black text-white/20 italic uppercase flex items-center gap-3">
          BRODERIE CUSTOM <Star size={24} className="text-neon-green" fill="currentColor" />
        </span>
        <span className="text-3xl md:text-4xl font-black text-white/20 italic uppercase flex items-center gap-3">
          SÉRIGRAPHIE HD <Sparkles size={24} className="text-neon-purple" />
        </span>
        <span className="text-3xl md:text-4xl font-black text-white/20 italic uppercase flex items-center gap-3">
          ATELIER FRANÇAIS <Diamond size={24} className="text-neon-green" />
        </span>
        <span className="text-3xl md:text-4xl font-black text-white/20 italic uppercase flex items-center gap-3">
          QUALITÉ PREMIUM <Star size={24} className="text-neon-purple" fill="currentColor" />
        </span>
      </div>
    </div>
  </section>
);

export const Home = () => (
  <>
    <Hero />
    <FeaturedGear />
    <CustomCallout />
    <CategoryGrid />
    <MarqueeBanner />
  </>
);
