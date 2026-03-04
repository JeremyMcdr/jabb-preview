/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Target, Users, Globe, Heart } from 'lucide-react';
import { STATS } from '../constants';

export const Story = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto space-y-32">
      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-jabb-blue font-bold text-xs tracking-widest uppercase italic mb-4 block">Notre Histoire</span>
          <h1 className="font-display text-6xl md:text-8xl font-bold italic uppercase tracking-tighter leading-[0.85] mb-8">
            L'Énergie <br /> Derrière <br /> <span className="text-jabb-blue">La Marque</span>.
          </h1>
          <p className="text-xl text-gray-500 font-medium leading-relaxed">
            Depuis 2019, JABB redéfinit les codes du textile personnalisé. Nous ne vendons pas seulement des vêtements, nous créons des vecteurs d'appartenance.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-[3rem] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop" 
              alt="The Story" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-jabb-lime rounded-[2rem] -z-10 animate-pulse" />
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-jabb-pink rounded-full -z-10 blur-2xl opacity-50" />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 py-20 border-y border-gray-100">
        {STATS.map((stat, idx) => (
          <div key={idx} className="text-center">
            <p className="text-4xl font-display font-bold italic text-jabb-blue mb-2">{stat.value}</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Mission */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="space-y-6">
          <div className="bg-jabb-blue/10 p-4 rounded-2xl text-jabb-blue w-fit">
            <Target size={32} />
          </div>
          <h3 className="font-display text-3xl font-bold italic uppercase">Notre Mission</h3>
          <p className="text-gray-500 font-medium">Accompagner les marques, les écoles et les associations dans la valorisation de leur identité à travers des produits textiles et objets de qualité.</p>
        </div>
        <div className="space-y-6">
          <div className="bg-jabb-pink/10 p-4 rounded-2xl text-jabb-pink w-fit">
            <Heart size={32} />
          </div>
          <h3 className="font-display text-3xl font-bold italic uppercase">Nos Valeurs</h3>
          <p className="text-gray-500 font-medium">Réactivité, créativité et engagement. Nous plantons un arbre pour chaque commande et privilégions les matières durables.</p>
        </div>
        <div className="space-y-6">
          <div className="bg-jabb-lime/10 p-4 rounded-2xl text-jabb-lime w-fit">
            <Globe size={32} />
          </div>
          <h3 className="font-display text-3xl font-bold italic uppercase">Notre Impact</h3>
          <p className="text-gray-500 font-medium">Plus de 2000 clients nous font confiance à travers la France et l'Europe pour leurs projets les plus ambitieux.</p>
        </div>
      </div>

      {/* Team/Culture */}
      <div className="bg-black rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-jabb-blue/20 blur-[120px] rounded-full" />
        <div className="relative z-10 max-w-3xl">
          <h2 className="font-display text-5xl md:text-7xl font-bold italic uppercase tracking-tighter leading-[0.9] mb-12">
            Une Équipe <br /> <span className="text-jabb-lime">Passionnée</span> <br /> À Votre Service.
          </h2>
          <p className="text-xl text-gray-400 font-medium leading-relaxed mb-12">
            Chez JABB, nous travaillons jour et nuit pour garantir la satisfaction de nos partenaires. Notre flexibilité et notre expertise technique font de nous le partenaire idéal pour vos défis de timing et de complexité.
          </p>
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-jabb-lime flex items-center justify-center font-bold">24/7</div>
              <span className="text-xs font-bold uppercase tracking-widest">Réactivité Maximale</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-jabb-pink flex items-center justify-center font-bold">100%</div>
              <span className="text-xs font-bold uppercase tracking-widest">Accompagnement</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
