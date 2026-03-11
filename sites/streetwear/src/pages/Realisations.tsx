import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CLIENT_LOGOS } from '../constants';

const REALISATIONS = [
  {
    title: "Showroom JABB",
    category: "Corporate",
    image: `${import.meta.env.BASE_URL}images/photos/showroom-wide.jpeg`,
    description: "Notre showroom avec plus de 300 000 références textiles disponibles à la personnalisation."
  },
  {
    title: "Maillots Sportifs Personnalisés",
    category: "Corporate",
    image: `${import.meta.env.BASE_URL}images/photos/sport-jersey.jpeg`,
    description: "Maillots de sport personnalisés pour clubs et entreprises. Marquage professionnel haute qualité."
  },
  {
    title: "Présentation Client",
    category: "Corporate",
    image: `${import.meta.env.BASE_URL}images/photos/team-showing-textiles.jpeg`,
    description: "Accompagnement personnalisé : notre équipe vous présente les textiles et techniques de marquage adaptés à votre projet."
  },
  {
    title: "Collection Textile",
    category: "Étudiant",
    image: `${import.meta.env.BASE_URL}images/photos/logo-textiles.jpeg`,
    description: "Large gamme de textiles disponibles dans toutes les couleurs : t-shirts, sweats, polos, casquettes et plus."
  },
  {
    title: "Espace de Travail JABB",
    category: "Corporate",
    image: `${import.meta.env.BASE_URL}images/photos/open-office.jpeg`,
    description: "Nos équipes au service de vos projets, dans nos bureaux modernes et dynamiques."
  },
  {
    title: "Conseil & Accompagnement",
    category: "Étudiant",
    image: `${import.meta.env.BASE_URL}images/photos/team-meeting.jpeg`,
    description: "Réunion d'équipe pour préparer vos commandes : chaque projet est unique et mérite une attention particulière."
  }
];

export const Realisations = () => {
  const [filter, setFilter] = useState('Tout');
  const categories = ['Tout', 'Corporate', 'Étudiant'];
  const filtered = filter === 'Tout' ? REALISATIONS : REALISATIONS.filter(r => r.category === filter);

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto space-y-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <span className="text-jabb-blue font-bold uppercase tracking-widest text-sm mb-4 block">Portfolio</span>
          <h1 className="text-6xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9] mb-8">
            Nos <br /><span className="text-jabb-blue">Réalisations</span>.
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">
            Découvrez quelques-unes de nos réalisations pour des entreprises, des écoles et des associations à travers la France.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-xl font-bold text-xs tracking-widest uppercase transition-all ${
                filter === cat ? 'bg-jabb-blue text-white shadow-lg shadow-jabb-blue/20' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((item) => (
          <motion.div key={item.title} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="group">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute top-6 left-6 bg-jabb-blue text-white text-[10px] font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">{item.category}</span>
            </div>
            <h3 className="text-xl font-bold uppercase tracking-tight mb-2 group-hover:text-jabb-blue transition-colors">{item.title}</h3>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-slate-50 rounded-3xl p-12 md:p-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold uppercase tracking-tighter">Ils nous ont fait confiance</h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {CLIENT_LOGOS.map((logo) => (
            <div key={logo} className="bg-white px-8 py-5 rounded-2xl shadow-sm border border-slate-100">
              <span className="text-lg font-bold text-slate-400">{logo}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-jabb-blue rounded-3xl p-12 md:p-20 text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8">Votre projet sera le prochain.</h2>
        <p className="text-lg opacity-80 font-medium mb-12 max-w-xl mx-auto">
          Quelle que soit la taille de votre projet, nous avons la solution. Devis gratuit en moins de 2 heures.
        </p>
        <Link to="/custom" className="inline-flex bg-jabb-accent text-white px-12 py-5 rounded-xl font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl items-center gap-3">
          Lancez votre projet <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
};
