/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Star, Megaphone, Gift, TrendingUp } from 'lucide-react';

const BENEFITS = [
  {
    icon: Megaphone,
    title: "Visibilité",
    description: "Partagez vos créations JABB sur vos réseaux et bénéficiez d'une visibilité accrue grâce à nos reposts et collaborations."
  },
  {
    icon: Gift,
    title: "Avantages Exclusifs",
    description: "Profitez de tarifs préférentiels, d'échantillons gratuits et d'accès en avant-première à nos nouvelles collections."
  },
  {
    icon: TrendingUp,
    title: "Croissance",
    description: "Développez votre réseau grâce à notre communauté de 50 ambassadeurs actifs à travers la France."
  }
];

const AMBASSADOR_PROFILES = [
  {
    name: "Associations étudiantes",
    description: "BDE, BDS, associations culturelles... Nos ambassadeurs étudiants promeuvent JABB dans leurs écoles et lors de leurs événements.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    tag: "Étudiants"
  },
  {
    name: "Entrepreneurs",
    description: "Fondateurs de startups et dirigeants de PME qui utilisent JABB pour leurs besoins de merch et recommandent nos services.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop",
    tag: "Professionnels"
  },
  {
    name: "Créateurs de contenu",
    description: "Influenceurs et créateurs qui partagent leur expérience JABB avec leur communauté sur Instagram, TikTok et LinkedIn.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop",
    tag: "Créateurs"
  }
];

export const Ambassadors = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto space-y-24">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-jabb-pink font-bold text-xs tracking-widest uppercase italic mb-4 block">Programme Ambassadeurs</span>
        <h1 className="font-display text-6xl md:text-8xl font-bold italic uppercase tracking-tighter leading-[0.85] mb-8">
          Devenez <br /> <span className="text-jabb-pink">Ambassadeur</span>.
        </h1>
        <p className="text-xl text-gray-500 font-medium leading-relaxed mb-10">
          Rejoignez notre communauté de 50 ambassadeurs à travers la France et participez à l'aventure JABB. Partagez, créez, inspirez.
        </p>
        <Link to="/custom" className="inline-flex bg-jabb-pink text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-black transition-all items-center gap-3">
          POSTULER <ArrowRight size={20} />
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-jabb-pink/5 border border-jabb-pink/10 rounded-[2rem] p-10 text-center">
          <p className="text-5xl font-display font-bold italic text-jabb-pink mb-2">50</p>
          <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Ambassadeurs actifs</p>
        </div>
        <div className="bg-jabb-blue/5 border border-jabb-blue/10 rounded-[2rem] p-10 text-center">
          <p className="text-5xl font-display font-bold italic text-jabb-blue mb-2">100+</p>
          <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Écoles représentées</p>
        </div>
        <div className="bg-jabb-lime/5 border border-jabb-lime/10 rounded-[2rem] p-10 text-center">
          <p className="text-5xl font-display font-bold italic text-jabb-lime mb-2">∞</p>
          <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Opportunités</p>
        </div>
      </div>

      {/* Profiles */}
      <div>
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold italic uppercase tracking-tighter">Qui sont nos ambassadeurs ?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AMBASSADOR_PROFILES.map((profile, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-6 left-6 bg-jabb-pink text-white text-[10px] font-bold px-4 py-1.5 rounded-full italic tracking-widest uppercase">
                  {profile.tag}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold italic uppercase mb-2">{profile.name}</h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">{profile.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-black rounded-[3rem] p-12 md:p-20 text-white">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold italic uppercase tracking-tighter mb-4">Les avantages</h2>
          <p className="text-gray-400 font-medium max-w-xl mx-auto">En rejoignant le programme ambassadeur JABB, vous bénéficiez d'avantages exclusifs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-white/5 border border-white/10 rounded-[2rem] p-10 backdrop-blur-sm space-y-4"
            >
              <div className="bg-jabb-pink/20 p-4 rounded-2xl text-jabb-pink w-fit">
                <benefit.icon size={28} />
              </div>
              <h3 className="font-display text-xl font-bold italic uppercase">{benefit.title}</h3>
              <p className="text-gray-400 font-medium leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-jabb-pink rounded-[3rem] p-12 md:p-20 text-center text-white">
        <h2 className="font-display text-4xl md:text-6xl font-bold italic uppercase tracking-tighter mb-8">Prêt à rejoindre l'aventure ?</h2>
        <p className="text-lg opacity-80 font-medium mb-12 max-w-xl mx-auto">Envoyez-nous votre candidature et intégrez la communauté des ambassadeurs JABB.</p>
        <Link to="/custom" className="inline-flex bg-white text-black px-12 py-5 rounded-2xl font-bold text-lg hover:bg-jabb-lime hover:text-white transition-all shadow-xl">
          DEVENIR AMBASSADEUR
        </Link>
      </div>
    </div>
  );
};
