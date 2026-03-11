import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Heart, Globe, TreePine } from 'lucide-react';
import { STATS } from '../constants';

export const Story = () => (
  <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 space-y-24">
    {/* Hero */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <span className="text-jabb-blue font-bold uppercase tracking-widest text-sm">Notre Histoire</span>
        <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.85] mt-2 mb-8">
          L'Atelier <br /><span className="text-jabb-blue">Créatif</span>.
        </h1>
        <p className="text-xl text-slate-500 font-medium leading-relaxed">
          Depuis 2019, JABB redéfinit les codes du textile personnalisé. Broderies artisanales, sérigraphies HD, le tout dans notre atelier français. On ne vend pas des fringues, on crée des pièces d'identité.
        </p>
      </div>
      <div className="relative">
        <div className="aspect-square rounded-3xl overflow-hidden">
          <img
            src="/images/photos/showroom-wide.jpeg"
            alt="Showroom JABB"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-jabb-accent rounded-3xl -z-10" />
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-jabb-blue rounded-full -z-10 blur-2xl opacity-50" />
      </div>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {STATS.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="text-center bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
        >
          <p className="text-4xl font-black italic text-jabb-blue mb-2">{stat.value}</p>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{stat.label}</p>
        </motion.div>
      ))}
    </div>

    {/* Values */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 space-y-4">
        <div className="bg-jabb-blue/10 p-4 rounded-2xl text-jabb-blue w-fit">
          <Target size={28} />
        </div>
        <h3 className="text-2xl font-black uppercase italic">Mission</h3>
        <p className="text-slate-500 font-medium">Accompagner les marques, écoles et assos dans la valorisation de leur identité à travers du textile et des objets de qualité.</p>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 space-y-4">
        <div className="bg-jabb-accent/30 p-4 rounded-2xl text-slate-900 w-fit">
          <Heart size={28} />
        </div>
        <h3 className="text-2xl font-black uppercase italic">Valeurs</h3>
        <p className="text-slate-500 font-medium">Réactivité, créativité et engagement. On plante un arbre par commande et on privilégie les matières durables.</p>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 space-y-4">
        <div className="bg-jabb-blue/10 p-4 rounded-2xl text-jabb-blue w-fit">
          <Globe size={28} />
        </div>
        <h3 className="text-2xl font-black uppercase italic">Impact</h3>
        <p className="text-slate-500 font-medium">2 000+ clients à travers la France et l'Europe. 650 arbres plantés depuis 2022. 97% de satisfaction.</p>
      </div>
    </div>

    {/* CTA */}
    <div className="bg-jabb-dark rounded-3xl p-12 md:p-20 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-jabb-blue/20 blur-[120px] rounded-full" />
      <div className="relative z-10 max-w-3xl">
        <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8">
          Une Équipe <br /><span className="text-jabb-accent">Passionnée</span>.
        </h2>
        <p className="text-xl text-slate-400 font-medium leading-relaxed mb-10">
          Chez JABB, on travaille jour et nuit pour garantir la satisfaction de nos partenaires. Notre flexibilité et notre expertise font de nous le partenaire idéal.
        </p>
        <div className="flex flex-wrap gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-jabb-accent flex items-center justify-center font-black">24/7</div>
            <span className="text-sm font-bold uppercase tracking-widest">Réactivité Max</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-jabb-blue flex items-center justify-center font-black">
              <TreePine size={20} />
            </div>
            <span className="text-sm font-bold uppercase tracking-widest">650 Arbres Plantés</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
