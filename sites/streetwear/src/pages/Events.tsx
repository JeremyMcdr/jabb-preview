import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, MapPin } from 'lucide-react';

const EVENTS = [
  {
    title: "Professionnels",
    description: "Solutions sur mesure pour les entreprises : séminaires, conférences, lancements de produits et team building.",
    image: `${import.meta.env.BASE_URL}images/photos/team-brainstorming.jpeg`,
    tags: ["B2B", "Corporate", "Team Building"]
  },
  {
    title: "Étudiants",
    description: "Spécialiste des événements étudiants : soirées, galas ou festivals, adaptés aux besoins du public étudiant.",
    image: `${import.meta.env.BASE_URL}images/photos/team-group-fun.jpeg`,
    tags: ["Gala", "Festival", "Associations"]
  }
];

const FEATURES = [
  { icon: Calendar, title: "Organisation A-Z", description: "De la conception à la réalisation, nous gérons chaque détail de votre événement." },
  { icon: Users, title: "Expérience Unique", description: "Nous créons des moments forts qui fédèrent vos collaborateurs et partenaires." },
  { icon: MapPin, title: "Partout en France", description: "Nos équipes se déplacent pour organiser vos événements là où vous en avez besoin." }
];

export const Events = () => (
  <div className="px-6 py-12 max-w-7xl mx-auto space-y-24">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
      <div className="max-w-2xl">
        <span className="text-jabb-blue font-bold uppercase tracking-widest text-sm mb-4 block">Jabb Events</span>
        <h1 className="text-6xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9] mb-8">
          Marquez les <br /><span className="text-jabb-blue">Esprits</span>.
        </h1>
        <p className="text-xl text-slate-500 font-medium leading-relaxed">
          Nous organisons vos événements de A à Z, avec une touche d'énergie unique et des solutions textiles intégrées.
        </p>
      </div>
      <Link to="/custom" className="bg-slate-900 text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest hover:bg-jabb-blue transition-all whitespace-nowrap">
        Nous Contacter
      </Link>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {EVENTS.map((event, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative h-[550px] rounded-3xl overflow-hidden flex flex-col justify-end p-12 text-white"
        >
          <img src={event.image} alt={event.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
          <div className="relative z-10 space-y-6">
            <div className="flex flex-wrap gap-2">
              {event.tags.map(tag => (
                <span key={tag} className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">{tag}</span>
              ))}
            </div>
            <h2 className="text-5xl font-bold uppercase tracking-tighter">{event.title}</h2>
            <p className="text-lg opacity-80 font-medium max-w-md">{event.description}</p>
            <Link to="/custom" className="inline-flex items-center gap-3 bg-jabb-accent text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white transition-all">
              En Savoir Plus <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12">
      {FEATURES.map((f, idx) => (
        <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="space-y-4">
          <div className="bg-jabb-blue/10 p-4 rounded-2xl text-jabb-blue w-fit">
            <f.icon size={32} />
          </div>
          <h3 className="font-bold text-xl uppercase">{f.title}</h3>
          <p className="text-slate-500 font-medium">{f.description}</p>
        </motion.div>
      ))}
    </div>

    <div className="bg-jabb-blue rounded-3xl p-12 md:p-20 text-center text-white">
      <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8">Discutons de votre prochain événement</h2>
      <Link to="/custom" className="inline-flex bg-jabb-accent text-white px-12 py-5 rounded-xl font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl">
        Prendre Contact
      </Link>
    </div>
  </div>
);
