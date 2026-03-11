import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { TreePine, Recycle, Heart, Leaf, Globe, ArrowRight } from 'lucide-react';

const ENGAGEMENTS = [
  {
    icon: TreePine,
    title: "650 arbres plantés",
    description: "Depuis 2022, nous plantons un arbre pour chaque commande passée. Un engagement concret pour compenser notre empreinte carbone.",
    color: "bg-green-500/10 text-green-600"
  },
  {
    icon: Recycle,
    title: "Matières durables",
    description: "Nous privilégions les matières recyclées et bio dans notre catalogue. Coton bio, polyester recyclé, encres à base d'eau.",
    color: "bg-jabb-blue/10 text-jabb-blue"
  },
  {
    icon: Leaf,
    title: "Production responsable",
    description: "Nos fournisseurs sont certifiés OEKO-TEX, GOTS et Fair Wear Foundation. Nous garantissons des conditions de travail éthiques.",
    color: "bg-jabb-accent/20 text-jabb-accent"
  },
  {
    icon: Heart,
    title: "Engagement local",
    description: "Nous travaillons avec des ateliers de marquage en France pour réduire les transports et soutenir l'économie locale.",
    color: "bg-orange-500/10 text-orange-500"
  }
];

export const RSE = () => (
  <div className="px-6 py-12 max-w-7xl mx-auto space-y-24">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <span className="text-green-600 font-bold uppercase tracking-widest text-sm mb-4 block">Engagements RSE</span>
        <h1 className="text-6xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9] mb-8">
          Notre <br />Responsabilité <br /><span className="text-green-600">Sociale</span>.
        </h1>
        <p className="text-xl text-slate-500 font-medium leading-relaxed mb-8">
          Chez JABB, nous croyons que la personnalisation textile peut rimer avec engagement environnemental et social. Chaque décision que nous prenons intègre notre volonté de réduire notre impact.
        </p>
        <div className="flex items-center gap-6">
          <div className="bg-green-500/10 px-6 py-4 rounded-2xl text-center">
            <p className="text-3xl font-bold text-green-600">650</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Arbres plantés</p>
          </div>
          <div className="bg-jabb-blue/10 px-6 py-4 rounded-2xl text-center">
            <p className="text-3xl font-bold text-jabb-blue">97%</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Satisfaction</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="aspect-[4/3] rounded-3xl overflow-hidden">
          <img src={`${import.meta.env.BASE_URL}images/photos/team-group.jpeg`} alt="Équipe JABB" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-green-100 rounded-3xl -z-10" />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {ENGAGEMENTS.map((item, idx) => (
        <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
          className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 space-y-6">
          <div className={`${item.color} p-4 rounded-2xl w-fit`}>
            <item.icon size={28} />
          </div>
          <h3 className="text-2xl font-bold uppercase">{item.title}</h3>
          <p className="text-slate-500 font-medium leading-relaxed">{item.description}</p>
        </motion.div>
      ))}
    </div>

    <div className="bg-slate-900 rounded-3xl p-12 md:p-20 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-green-500/10 blur-[120px] rounded-full" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <Globe size={48} className="text-jabb-accent mx-auto mb-8" />
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8">
          Ensemble, construisons un avenir plus vert.
        </h2>
        <p className="text-lg text-slate-400 font-medium leading-relaxed mb-12">
          Notre objectif : planter 1 000 arbres d'ici fin 2026 et atteindre 100% de matières éco-responsables dans notre catalogue textile.
        </p>
        <Link to="/custom" className="inline-flex bg-jabb-accent text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all items-center gap-3">
          Rejoindre le mouvement <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  </div>
);
