import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Palette, Diamond, Zap, Send, CheckCircle2, Phone } from 'lucide-react';
import { CONTACT } from '../constants';

export const Custom = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    quantity: '50-200'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="bg-jabb-accent p-6 rounded-full text-slate-900 mb-8"
        >
          <CheckCircle2 size={64} />
        </motion.div>
        <h1 className="text-5xl font-black uppercase italic tracking-tighter mb-4">C'est envoyé !</h1>
        <p className="text-slate-500 max-w-md mx-auto mb-12 font-medium">
          Merci {formData.name}. On analyse ton projet et tu reçois ton devis en moins de 2 heures.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="bg-jabb-blue text-white px-10 py-5 rounded-xl font-black uppercase hover:bg-slate-900 transition-all"
        >
          Nouveau Projet
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Info */}
        <div className="flex-1 space-y-10">
          <div>
            <span className="text-jabb-blue font-bold uppercase tracking-widest text-sm">Custom Lab</span>
            <h1 className="text-6xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mt-2 mb-8">
              Crée ta <br /><span className="text-jabb-blue">pièce unique</span>.
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-lg">
              Broderie, sérigraphie, flocage, DTF, sublimation... On maîtrise 5 techniques pour un rendu parfait. Devis gratuit en moins de 2h.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="bg-jabb-blue/10 p-3 rounded-xl text-jabb-blue w-fit mb-4">
                <Zap size={24} />
              </div>
              <h3 className="font-black text-lg mb-1">Rapide</h3>
              <p className="text-sm text-slate-400">Devis en -2h</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="bg-jabb-accent/30 p-3 rounded-xl text-slate-900 w-fit mb-4">
                <Palette size={24} />
              </div>
              <h3 className="font-black text-lg mb-1">5 Techniques</h3>
              <p className="text-sm text-slate-400">Marquage pro</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="bg-jabb-blue/10 p-3 rounded-xl text-jabb-blue w-fit mb-4">
                <Diamond size={24} />
              </div>
              <h3 className="font-black text-lg mb-1">Premium</h3>
              <p className="text-sm text-slate-400">Qualité garantie</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-jabb-blue text-white p-6 rounded-2xl">
            <Phone size={24} />
            <div>
              <p className="text-xs opacity-70 font-bold uppercase tracking-widest mb-1">Appelez-nous</p>
              <a href={`tel:${CONTACT.phone}`} className="font-black text-lg">{CONTACT.phone}</a>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="w-full lg:w-[480px]">
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100">
            <h2 className="text-2xl font-black uppercase italic mb-8">Ton Projet</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4 block mb-2">Nom</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jean Dupont"
                  className="w-full bg-slate-50 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-jabb-blue/20"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4 block mb-2">Email</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jean@entreprise.com"
                  className="w-full bg-slate-50 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-jabb-blue/20"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4 block mb-2">Structure</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Société, école, asso..."
                  className="w-full bg-slate-50 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-jabb-blue/20"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4 block mb-2">Description</label>
                <textarea
                  required
                  rows={3}
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  placeholder="Décris ton projet (produits, quantités, logos...)"
                  className="w-full bg-slate-50 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-jabb-blue/20 resize-none"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4 block mb-2">Quantité</label>
                <select
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full bg-slate-50 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-jabb-blue/20 cursor-pointer"
                >
                  <option value="10-50">10 - 50 pièces</option>
                  <option value="50-200">50 - 200 pièces</option>
                  <option value="200-500">200 - 500 pièces</option>
                  <option value="500+">500+ pièces</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-jabb-blue text-white py-4 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-slate-900 transition-all shadow-lg shadow-jabb-blue/20 group"
              >
                ENVOYER <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
