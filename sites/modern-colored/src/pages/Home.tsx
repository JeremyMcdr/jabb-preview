/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Zap, ShoppingBag, PartyPopper, FileText, Award, TreePine, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CATALOGUE, STATS, TESTIMONIALS, CLIENT_LOGOS, Product } from '../constants';

const Hero = () => (
  <div className="px-6 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-[700px]">
    <div className="lg:col-span-2 relative rounded-3xl overflow-hidden group">
      <img
        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1920&auto=format&fit=crop"
        alt="B2B Collaboration"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-jabb-blue/80 via-jabb-blue/40 to-transparent" />

      <div className="relative h-full flex flex-col justify-center p-8 md:p-12 text-white max-w-2xl">
        <span className="bg-jabb-lime text-white font-bold text-[10px] px-3 py-1 rounded-full w-fit mb-6 tracking-widest uppercase italic">
          Personnalisez vos produits sans limite
        </span>
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.9] mb-8 tracking-tighter italic uppercase">
          Valorisez <br /> Votre <br /> Marque.
        </h1>
        <p className="text-base md:text-lg opacity-90 mb-10 font-medium leading-relaxed">
          Société, Association, École ou Entrepreneur ? Fédérez vos équipes, vos collaborateurs, vos clients et partenaires avec du textile et des goodies personnalisés haute qualité.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link to="/shop" className="bg-white text-black px-6 py-3.5 rounded-xl font-bold flex items-center gap-2 text-sm hover:bg-jabb-lime hover:text-white hover:scale-105 transition-all group/btn">
            <ShoppingBag size={18} /> Acheter textile / goodies
          </Link>
          <Link to="/events" className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-6 py-3.5 rounded-xl font-bold flex items-center gap-2 text-sm hover:bg-white hover:text-black transition-all">
            <PartyPopper size={18} /> Créer votre événement
          </Link>
          <Link to="/custom" className="bg-jabb-lime text-white px-6 py-3.5 rounded-xl font-bold flex items-center gap-2 text-sm hover:scale-105 transition-all group/btn">
            <FileText size={18} /> Recevoir un devis
          </Link>
        </div>
      </div>
    </div>

    <div className="flex flex-col gap-6">
      <Link to="/events" className="flex-1 relative rounded-3xl overflow-hidden group">
        <img
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop"
          alt="Jabb Events"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-jabb-pink/80 mix-blend-multiply" />
        <div className="relative p-8 h-full flex flex-col justify-between text-white">
          <div>
            <h2 className="font-display text-3xl font-bold italic uppercase mb-2">Jabb Events</h2>
            <p className="text-sm opacity-90">Séminaires, Galas, Team Building.</p>
          </div>
          <div className="bg-black text-white px-6 py-3 rounded-xl font-bold text-sm w-fit hover:bg-white hover:text-black transition-colors">
            DÉCOUVRIR
          </div>
        </div>
      </Link>

      <div className="flex-1 bg-jabb-lime p-8 rounded-3xl flex flex-col justify-between text-white">
        <div className="grid grid-cols-2 gap-4">
          {STATS.slice(0, 4).map(stat => (
            <div key={stat.label}>
              <p className="text-3xl font-display font-bold italic">{stat.value}</p>
              <p className="text-[10px] font-bold uppercase tracking-tighter opacity-70">{stat.label}</p>
            </div>
          ))}
        </div>
        <Link to="/story" className="bg-jabb-blue text-white px-6 py-3 rounded-xl font-bold text-sm w-fit hover:bg-black transition-colors self-end">
          NOTRE IMPACT
        </Link>
      </div>
    </div>
  </div>
);

const About = () => (
  <section className="px-6 py-20">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <span className="text-jabb-blue font-bold text-[10px] tracking-[0.2em] uppercase italic mb-4 block">Qui sommes-nous</span>
        <h2 className="font-display text-5xl md:text-6xl font-bold italic uppercase tracking-tighter leading-[0.9] mb-8">
          <span className="text-jabb-blue">5 ans</span> d'expertise <br /> à votre service.
        </h2>
        <p className="text-lg text-gray-500 font-medium leading-relaxed mb-6">
          Vous êtes une organisation qui cherche à valoriser votre Marque ? Vous souhaitez fédérer vos équipes, vos salariés, vos collaborateurs, vos clients et vos partenaires à travers du textile et des goodies personnalisés ?
        </p>
        <p className="text-lg text-gray-500 font-medium leading-relaxed mb-10">
          Consultez notre catalogue, envoyez-nous une demande de devis et obtenez-le en <strong className="text-black">moins de 2 heures</strong>.
        </p>
        <Link to="/custom" className="inline-flex bg-jabb-blue text-white px-8 py-4 rounded-xl font-bold items-center gap-3 hover:bg-black transition-all group">
          DEMANDER UN DEVIS <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      <div className="relative">
        <div className="aspect-[4/3] rounded-[3rem] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
            alt="L'équipe JABB"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-jabb-lime rounded-2xl p-6 shadow-xl">
          <p className="font-display text-4xl font-bold italic">2 000+</p>
          <p className="text-xs font-bold uppercase tracking-widest opacity-70">Clients satisfaits</p>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section className="px-6 py-20 bg-black text-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-jabb-lime font-bold text-[10px] tracking-[0.2em] uppercase italic mb-4 block">Ce que nous proposons</span>
        <h2 className="font-display text-5xl md:text-6xl font-bold italic uppercase tracking-tighter mb-6">
          Bien plus que des produits.
        </h2>
        <p className="text-lg text-gray-400 font-medium leading-relaxed">
          JABB ne vend pas simplement des vêtements ou goodies personnalisés. Nous proposons une réelle expérience d'accompagnement à nos partenaires.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          whileHover={{ y: -8 }}
          className="bg-white/5 border border-white/10 rounded-[2rem] p-10 backdrop-blur-sm"
        >
          <div className="bg-jabb-blue/20 p-4 rounded-2xl text-jabb-blue w-fit mb-6">
            <ShoppingBag size={28} />
          </div>
          <h3 className="font-display text-2xl font-bold italic uppercase mb-4">Textile</h3>
          <p className="text-gray-400 font-medium leading-relaxed">
            T-shirts, hoodies, polos, casquettes... Des milliers de références textiles personnalisables avec votre logo et vos couleurs.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -8 }}
          className="bg-white/5 border border-white/10 rounded-[2rem] p-10 backdrop-blur-sm"
        >
          <div className="bg-jabb-pink/20 p-4 rounded-2xl text-jabb-pink w-fit mb-6">
            <Award size={28} />
          </div>
          <h3 className="font-display text-2xl font-bold italic uppercase mb-4">Objets</h3>
          <p className="text-gray-400 font-medium leading-relaxed">
            Tote bags, mugs, gourdes, clés USB... Des objets publicitaires de qualité pour marquer les esprits de vos clients et collaborateurs.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -8 }}
          className="bg-white/5 border border-white/10 rounded-[2rem] p-10 backdrop-blur-sm"
        >
          <div className="bg-jabb-lime/20 p-4 rounded-2xl text-jabb-lime w-fit mb-6">
            <Zap size={28} />
          </div>
          <h3 className="font-display text-2xl font-bold italic uppercase mb-4">Goodies</h3>
          <p className="text-gray-400 font-medium leading-relaxed">
            Carnets, stylos, porte-clés, stickers... Des goodies créatifs et originaux pour vos événements, séminaires et cadeaux d'affaires.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

const StatsSection = () => (
  <section className="px-6 py-20">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {STATS.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
          >
            <p className="text-3xl md:text-4xl font-display font-bold italic text-jabb-blue mb-2">{stat.value}</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ServiceCard: React.FC<{ product: Product }> = ({ product }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="flex flex-col gap-4"
  >
    <Link to="/shop" className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100 group">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      {product.tag && (
        <span className={`absolute top-4 left-4 ${product.tagColor} text-white text-[10px] font-bold px-3 py-1 rounded-full italic tracking-widest uppercase`}>
          {product.tag}
        </span>
      )}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="bg-white text-black px-6 py-3 rounded-xl font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
          VOIR LE CATALOGUE
        </div>
      </div>
    </Link>
    <div className="space-y-1">
      <h3 className="font-display font-bold text-lg uppercase tracking-tight">{product.name}</h3>
      <p className="text-xs text-gray-500 font-medium leading-relaxed">{product.description}</p>
    </div>
  </motion.div>
);

const CataloguePreview = () => (
  <section className="px-6 py-20">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-12">
        <div>
          <span className="text-jabb-blue font-bold text-[10px] tracking-[0.2em] uppercase italic mb-2 block">Nos Solutions</span>
          <h2 className="font-display text-5xl font-bold italic uppercase tracking-tighter">Notre Catalogue</h2>
        </div>
        <Link to="/shop" className="text-xs font-bold tracking-widest uppercase hover:text-jabb-blue transition-colors flex items-center gap-2">
          Tout voir <ArrowRight size={16} />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {CATALOGUE.slice(0, 4).map(product => (
          <ServiceCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </section>
);

const ClientLogos = () => (
  <section className="px-6 py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-jabb-blue font-bold text-[10px] tracking-[0.2em] uppercase italic mb-2 block">Plus de 2 000 clients</span>
        <h2 className="font-display text-4xl font-bold italic uppercase tracking-tighter">Ils nous font confiance</h2>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {CLIENT_LOGOS.map((logo) => (
          <motion.div
            key={logo}
            whileHover={{ scale: 1.05 }}
            className="bg-white px-8 py-5 rounded-2xl shadow-sm border border-gray-100"
          >
            <span className="font-display text-lg md:text-xl font-bold italic text-gray-400 hover:text-gray-700 transition-colors">
              {logo}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="px-6 py-20">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-jabb-blue font-bold text-[10px] tracking-[0.2em] uppercase italic mb-2 block">Témoignages</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold italic uppercase tracking-tighter">Ce que disent nos clients</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100"
          >
            <p className="text-lg md:text-xl font-medium italic mb-8 leading-relaxed">"{t.text}"</p>
            <div>
              <p className="font-bold text-jabb-blue">{t.name}</p>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const JabbEventsPreview = () => (
  <section className="px-6 py-20">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Professionnels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative h-[400px] rounded-[3rem] overflow-hidden group"
        >
          <img
            src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop"
            alt="Événements professionnels"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="relative h-full flex flex-col justify-end p-10 text-white">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-jabb-blue/80 backdrop-blur-sm px-3 py-1 rounded-full w-fit mb-4">Professionnels</span>
            <h3 className="font-display text-3xl font-bold italic uppercase mb-3">Événements B2B</h3>
            <p className="text-sm opacity-80 font-medium mb-6 max-w-md">
              Solutions sur mesure pour les entreprises : séminaires, conférences, lancements de produits et team building.
            </p>
            <Link to="/events" className="inline-flex items-center gap-2 bg-jabb-lime text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-white transition-all w-fit">
              EN SAVOIR PLUS <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>

        {/* Étudiants */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative h-[400px] rounded-[3rem] overflow-hidden group"
        >
          <img
            src="https://images.unsplash.com/photo-1514525253361-bee8718a74a2?q=80&w=1200&auto=format&fit=crop"
            alt="Événements étudiants"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="relative h-full flex flex-col justify-end p-10 text-white">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-jabb-pink/80 backdrop-blur-sm px-3 py-1 rounded-full w-fit mb-4">Étudiants & Associations</span>
            <h3 className="font-display text-3xl font-bold italic uppercase mb-3">Événements Étudiants</h3>
            <p className="text-sm opacity-80 font-medium mb-6 max-w-md">
              Spécialiste des événements étudiants : soirées, galas ou festivals, adaptés aux besoins du public étudiant.
            </p>
            <Link to="/events" className="inline-flex items-center gap-2 bg-jabb-lime text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-white transition-all w-fit">
              EN SAVOIR PLUS <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Newsletter = () => (
  <section className="px-6 py-24">
    <div className="max-w-5xl mx-auto bg-jabb-blue rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-jabb-lime rounded-full" />
      </div>

      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold italic uppercase tracking-tighter mb-6">
        Prêt à lancer votre projet ?
      </h2>
      <p className="opacity-80 mb-12 max-w-xl mx-auto font-medium text-lg">
        Consultez notre catalogue, envoyez-nous une demande de devis et obtenez-le en moins de 2 heures.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link to="/custom" className="inline-flex bg-white text-black px-10 py-5 rounded-2xl font-bold text-lg hover:bg-jabb-lime hover:text-white transition-all shadow-xl items-center justify-center gap-3">
          DEMANDER UN DEVIS GRATUIT
        </Link>
        <Link to="/shop" className="inline-flex bg-white/20 backdrop-blur-sm text-white border border-white/30 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-black transition-all items-center justify-center gap-3">
          VOIR LE CATALOGUE
        </Link>
      </div>
    </div>
  </section>
);

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <StatsSection />
      <Services />
      <CataloguePreview />
      <JabbEventsPreview />
      <ClientLogos />
      <Testimonials />
      <Newsletter />
    </>
  );
};
