import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Megaphone, Gift, TrendingUp } from 'lucide-react';

const BENEFITS = [
  { icon: Megaphone, title: "Visibilité", description: "Partagez vos créations JABB sur vos réseaux et bénéficiez d'une visibilité accrue grâce à nos reposts et collaborations." },
  { icon: Gift, title: "Avantages Exclusifs", description: "Profitez de tarifs préférentiels, d'échantillons gratuits et d'accès en avant-première à nos nouvelles collections." },
  { icon: TrendingUp, title: "Croissance", description: "Développez votre réseau grâce à notre communauté de 50 ambassadeurs actifs à travers la France." }
];

const PROFILES = [
  {
    name: "Associations étudiantes",
    description: "BDE, BDS, associations culturelles... Nos ambassadeurs étudiants promeuvent JABB dans leurs écoles et lors de leurs événements.",
    image: `${import.meta.env.BASE_URL}images/photos/team-group.jpeg`,
    tag: "Étudiants"
  },
  {
    name: "Entrepreneurs",
    description: "Fondateurs de startups et dirigeants de PME qui utilisent JABB pour leurs besoins de merch et recommandent nos services.",
    image: `${import.meta.env.BASE_URL}images/photos/team-duo-working.jpeg`,
    tag: "Professionnels"
  },
  {
    name: "Créateurs de contenu",
    description: "Influenceurs et créateurs qui partagent leur expérience JABB avec leur communauté sur Instagram, TikTok et LinkedIn.",
    image: `${import.meta.env.BASE_URL}images/photos/desk-rollup-banner.jpeg`,
    tag: "Créateurs"
  }
];

export const Ambassadors = () => (
  <div className="px-6 py-12 max-w-7xl mx-auto space-y-24">
    <div className="text-center max-w-3xl mx-auto">
      <span className="text-jabb-accent font-bold uppercase tracking-widest text-sm mb-4 block">Programme Ambassadeurs</span>
      <h1 className="text-4xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.85] mb-8">
        Devenez <br /><span className="text-jabb-accent">Ambassadeur</span>.
      </h1>
      <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10">
        Rejoignez notre communauté de 50 ambassadeurs à travers la France et participez à l'aventure JABB. Partagez, créez, inspirez.
      </p>
      <Link to="/custom" className="inline-flex bg-jabb-accent text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all items-center gap-3">
        Postuler <ArrowRight size={20} />
      </Link>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-jabb-accent/10 border border-jabb-accent/20 rounded-3xl p-6 md:p-10 text-center">
        <p className="text-3xl md:text-5xl font-bold text-jabb-accent mb-2">50</p>
        <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Ambassadeurs actifs</p>
      </div>
      <div className="bg-jabb-blue/5 border border-jabb-blue/10 rounded-3xl p-6 md:p-10 text-center">
        <p className="text-3xl md:text-5xl font-bold text-jabb-blue mb-2">100+</p>
        <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Écoles représentées</p>
      </div>
      <div className="bg-slate-100 border border-slate-200 rounded-3xl p-6 md:p-10 text-center">
        <p className="text-3xl md:text-5xl font-bold text-slate-900 mb-2">&infin;</p>
        <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Opportunités</p>
      </div>
    </div>

    <div>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">Qui sont nos ambassadeurs ?</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PROFILES.map((profile, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="group">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6">
              <img src={profile.image} alt={profile.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute top-6 left-6 bg-jabb-accent text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">{profile.tag}</span>
            </div>
            <h3 className="text-xl font-bold uppercase mb-2">{profile.name}</h3>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">{profile.description}</p>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="bg-slate-900 rounded-3xl p-12 md:p-20 text-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">Les avantages</h2>
        <p className="text-slate-400 font-medium max-w-xl mx-auto">En rejoignant le programme ambassadeur JABB, vous bénéficiez d'avantages exclusifs.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BENEFITS.map((benefit, idx) => (
          <motion.div key={idx} whileHover={{ y: -8 }} className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-sm space-y-4">
            <div className="bg-jabb-accent/20 p-4 rounded-2xl text-jabb-accent w-fit">
              <benefit.icon size={28} />
            </div>
            <h3 className="text-xl font-bold uppercase">{benefit.title}</h3>
            <p className="text-slate-400 font-medium leading-relaxed">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="bg-jabb-blue rounded-3xl p-12 md:p-20 text-center text-white">
      <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8">Prêt à rejoindre l'aventure ?</h2>
      <p className="text-lg opacity-80 font-medium mb-12 max-w-xl mx-auto">Envoyez-nous votre candidature et intégrez la communauté des ambassadeurs JABB.</p>
      <Link to="/custom" className="inline-flex bg-jabb-accent text-white px-12 py-5 rounded-xl font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl">
        Devenir Ambassadeur
      </Link>
    </div>
  </div>
);
