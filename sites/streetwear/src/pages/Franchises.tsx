import React from 'react';
import { motion } from 'motion/react';
import { MapPin, TrendingUp, Users, Zap, Phone, Mail, ArrowRight, CheckCircle2, Shield, Rocket } from 'lucide-react';
import { CONTACT } from '../constants';
import { useQuoteModal } from '../components/Layout';

const ADVANTAGES = [
  { icon: Rocket, title: "Lancement clé en main", desc: "Formation, outils et accompagnement pour démarrer rapidement votre activité JABB." },
  { icon: TrendingUp, title: "Modèle rentable", desc: "Marges attractives, récurrence clients et faibles coûts fixes. ROI dès la première année." },
  { icon: Users, title: "Réseau national", desc: "Rejoignez un réseau de franchisés présents dans toute la France et mutualisez les ressources." },
  { icon: Shield, title: "Marque établie", desc: "Bénéficiez de la notoriété JABB, de nos 5 000+ clients et de notre réputation d'excellence." },
];

export const Franchises = () => {
  const { open: openQuote } = useQuoteModal();

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto space-y-20">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-jabb-blue font-bold uppercase tracking-widest text-sm mb-4 block">Développement</span>
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9] mb-6">
          Devenez <span className="text-jabb-blue">Franchisé</span> JABB.
        </h1>
        <p className="text-xl text-slate-500 font-medium leading-relaxed mb-8">
          Rejoignez le réseau JABB et développez votre propre activité de textile et goodies personnalisés dans votre région.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={openQuote} className="flex items-center justify-center gap-2 bg-jabb-blue text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-lg shadow-jabb-blue/25">
            <Zap size={18} /> En savoir plus
          </button>
          <a href={`tel:${CONTACT.phone}`} className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-jabb-blue transition-colors">
            <Phone size={18} /> Nous contacter
          </a>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
          <img src={`${import.meta.env.BASE_URL}images/photos/team-brainstorming.jpeg`} alt="Brainstorming JABB" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <p className="absolute bottom-6 left-6 text-white font-black text-xl uppercase">Stratégie & Vision</p>
        </div>
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
          <img src={`${import.meta.env.BASE_URL}images/photos/open-office.jpeg`} alt="Bureaux JABB" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <p className="absolute bottom-6 left-6 text-white font-black text-xl uppercase">Environnement Moderne</p>
        </div>
      </div>

      {/* Advantages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ADVANTAGES.map((adv, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-5"
          >
            <div className="bg-jabb-blue/10 p-4 rounded-xl text-jabb-blue shrink-0">
              <adv.icon size={28} />
            </div>
            <div>
              <h3 className="text-xl font-black mb-2">{adv.title}</h3>
              <p className="text-slate-500">{adv.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { value: "300K+", label: "Références" },
          { value: "5 000+", label: "Clients actifs" },
          { value: "97%", label: "Satisfaction" },
          { value: "6", label: "Antennes en France" },
        ].map((s, i) => (
          <div key={i} className="bg-jabb-blue/5 border border-jabb-blue/10 rounded-2xl p-6 text-center">
            <p className="text-3xl font-bold text-jabb-blue">{s.value}</p>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-slate-900 rounded-3xl p-12 md:p-20 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-jabb-blue/10 blur-[120px] rounded-full" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
            Intéressé par la franchise JABB ?
          </h2>
          <p className="text-lg text-slate-400 font-medium mb-10 max-w-xl mx-auto">
            Contactez-nous pour recevoir notre dossier de présentation complet et échanger avec notre équipe développement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${CONTACT.phone}`} className="inline-flex bg-jabb-accent text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest hover:bg-white transition-all items-center gap-3 justify-center">
              <Phone size={18} /> {CONTACT.phone}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="inline-flex bg-white/10 text-white border border-white/20 px-10 py-5 rounded-xl font-black uppercase tracking-widest hover:bg-white/20 transition-all items-center gap-3 justify-center">
              <Mail size={18} /> Nous Écrire
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
