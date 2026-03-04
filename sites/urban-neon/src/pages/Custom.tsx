import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, Palette, Zap, Diamond, Phone } from 'lucide-react';
import { CONTACT } from '../constants';

export const Custom = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', project: '', quantity: '50-200'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center bg-dark-bg">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-neon-green p-6 rounded-none text-black mb-8">
          <CheckCircle2 size={64} />
        </motion.div>
        <h1 className="text-5xl font-black uppercase italic tracking-tighter mb-4">REQUEST SENT</h1>
        <p className="text-slate-400 max-w-md mx-auto mb-12 font-medium">
          Merci {formData.name}. On analyse ton projet et tu reçois ton devis en moins de 2 heures.
        </p>
        <button onClick={() => setSubmitted(false)} className="bg-neon-purple text-white px-10 py-5 font-black uppercase hover:bg-neon-green hover:text-black transition-all">
          NEW PROJECT
        </button>
      </div>
    );
  }

  return (
    <div className="bg-dark-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Info */}
          <div className="flex-1 space-y-10">
            <div>
              <h3 className="text-neon-green font-black uppercase tracking-widest text-sm mb-2">// CUSTOM LAB</h3>
              <h1 className="text-6xl md:text-7xl font-black italic tracking-tighter leading-[0.9] mb-8">
                YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-green">DESIGN</span><br />OUR CANVAS.
              </h1>
              <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-lg">
                Broderie, sérigraphie, flocage, DTF, sublimation... 5 techniques pour un rendu parfait. Devis en moins de 2h.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-dark-surface border border-neon-purple/20 p-6">
                <Zap size={24} className="text-neon-green mb-3" />
                <h4 className="font-black text-sm uppercase">Rapide</h4>
                <p className="text-xs text-slate-500 mt-1">Devis en -2h</p>
              </div>
              <div className="bg-dark-surface border border-neon-purple/20 p-6">
                <Palette size={24} className="text-neon-purple mb-3" />
                <h4 className="font-black text-sm uppercase">5 Techniques</h4>
                <p className="text-xs text-slate-500 mt-1">Marquage pro</p>
              </div>
              <div className="bg-dark-surface border border-neon-purple/20 p-6">
                <Diamond size={24} className="text-neon-green mb-3" />
                <h4 className="font-black text-sm uppercase">Premium</h4>
                <p className="text-xs text-slate-500 mt-1">Qualité max</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-neon-purple/10 border border-neon-purple/30 p-6">
              <Phone size={24} className="text-neon-green" />
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Appelez-nous</p>
                <a href={`tel:${CONTACT.phone}`} className="font-black text-lg text-white">{CONTACT.phone}</a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-[480px]">
            <div className="bg-dark-surface border-2 border-neon-purple/20 p-10">
              <h2 className="text-2xl font-black uppercase italic mb-8">YOUR <span className="text-neon-green">PROJECT</span></h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { label: "Nom", type: "text", key: "name", placeholder: "Jean Dupont" },
                  { label: "Email", type: "email", key: "email", placeholder: "jean@entreprise.com" },
                  { label: "Structure", type: "text", key: "company", placeholder: "Société, école, asso..." },
                ].map(field => (
                  <div key={field.key}>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-neon-purple/60 ml-1 block mb-2">{field.label}</label>
                    <input
                      required={field.key !== 'company'}
                      type={field.type}
                      value={(formData as any)[field.key]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      placeholder={field.placeholder}
                      className="w-full bg-dark-bg border-2 border-neon-purple/20 rounded-none px-5 py-3.5 text-white focus:outline-none focus:border-neon-green transition-all placeholder:text-slate-600"
                    />
                  </div>
                ))}
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-neon-purple/60 ml-1 block mb-2">Description</label>
                  <textarea
                    required rows={3}
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    placeholder="Décris ton projet..."
                    className="w-full bg-dark-bg border-2 border-neon-purple/20 rounded-none px-5 py-3.5 text-white focus:outline-none focus:border-neon-green transition-all resize-none placeholder:text-slate-600"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-neon-purple/60 ml-1 block mb-2">Quantité</label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full bg-dark-bg border-2 border-neon-purple/20 rounded-none px-5 py-3.5 text-white focus:outline-none focus:border-neon-green transition-all cursor-pointer"
                  >
                    <option value="10-50">10 - 50 pièces</option>
                    <option value="50-200">50 - 200 pièces</option>
                    <option value="200-500">200 - 500 pièces</option>
                    <option value="500+">500+ pièces</option>
                  </select>
                </div>
                <button type="submit"
                  className="w-full bg-neon-green text-black py-4 font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-neon-purple hover:text-white transition-all group">
                  ENVOYER <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
