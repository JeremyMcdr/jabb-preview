/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, Star, Calendar, MapPin } from 'lucide-react';

const EVENTS = [
  {
    title: "Professionnels",
    description: "Solutions sur mesure pour les entreprises : séminaires, conférences, lancements de produits et team building.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop",
    link: "/custom",
    tags: ["B2B", "Corporate", "Team Building"]
  },
  {
    title: "Étudiants",
    description: "Spécialiste des événements étudiants : soirées, galas ou festivals, adaptés aux besoins du public étudiant.",
    image: "https://images.unsplash.com/photo-1514525253361-bee8718a74a2?q=80&w=1200&auto=format&fit=crop",
    link: "/custom",
    tags: ["Gala", "Festival", "Associations"]
  }
];

export const Events = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto space-y-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <span className="text-jabb-blue font-bold text-xs tracking-widest uppercase italic mb-4 block">Jabb Events</span>
          <h1 className="font-display text-6xl md:text-7xl font-bold italic uppercase tracking-tighter leading-[0.9] mb-8">
            Marquez les <br /> <span className="text-jabb-blue">Esprits</span>.
          </h1>
          <p className="text-xl text-gray-500 font-medium leading-relaxed">
            Nous organisons vos événements de A à Z, avec une touche d'énergie unique et des solutions textiles intégrées.
          </p>
        </div>
        <Link to="/custom" className="bg-black text-white px-10 py-5 rounded-2xl font-bold hover:bg-jabb-blue transition-all whitespace-nowrap">
          NOUS CONTACTER
        </Link>
      </div>

      {/* Event Types */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {EVENTS.map((event, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative h-[600px] rounded-[3rem] overflow-hidden flex flex-col justify-end p-12 text-white"
          >
            <img 
              src={event.image} 
              alt={event.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
            
            <div className="relative z-10 space-y-6">
              <div className="flex flex-wrap gap-2">
                {event.tags.map(tag => (
                  <span key={tag} className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="font-display text-5xl font-bold italic uppercase tracking-tighter">{event.title}</h2>
              <p className="text-lg opacity-80 font-medium max-w-md">{event.description}</p>
              <Link to={event.link} className="inline-flex items-center gap-3 bg-jabb-lime text-white px-8 py-4 rounded-xl font-bold hover:bg-white transition-all group/btn">
                EN SAVOIR PLUS <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats/Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12">
        <div className="space-y-4">
          <div className="bg-jabb-blue/10 p-4 rounded-2xl text-jabb-blue w-fit">
            <Calendar size={32} />
          </div>
          <h3 className="font-bold text-xl uppercase italic font-display">Organisation A-Z</h3>
          <p className="text-gray-500 font-medium">De la conception à la réalisation, nous gérons chaque détail de votre événement.</p>
        </div>
        <div className="space-y-4">
          <div className="bg-jabb-pink/10 p-4 rounded-2xl text-jabb-pink w-fit">
            <Users size={32} />
          </div>
          <h3 className="font-bold text-xl uppercase italic font-display">Expérience Unique</h3>
          <p className="text-gray-500 font-medium">Nous créons des moments forts qui fédèrent vos collaborateurs et partenaires.</p>
        </div>
        <div className="space-y-4">
          <div className="bg-jabb-lime/10 p-4 rounded-2xl text-jabb-lime w-fit">
            <MapPin size={32} />
          </div>
          <h3 className="font-bold text-xl uppercase italic font-display">Partout en France</h3>
          <p className="text-gray-500 font-medium">Nos équipes se déplacent pour organiser vos événements là où vous en avez besoin.</p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-jabb-blue rounded-[3rem] p-12 md:p-20 text-center text-white">
        <h2 className="font-display text-5xl md:text-6xl font-bold italic uppercase tracking-tighter mb-8">Discutons de votre prochain événement</h2>
        <Link to="/custom" className="inline-flex bg-jabb-lime text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-white transition-all shadow-xl">
          PRENDRE CONTACT
        </Link>
      </div>
    </div>
  );
};
