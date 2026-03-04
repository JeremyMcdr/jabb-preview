import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, Truck, Palette, Shield, Phone } from 'lucide-react';
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
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center bg-slate-50">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-primary p-6 rounded-3xl text-white mb-8">
          <CheckCircle2 size={64} />
        </motion.div>
        <h1 className="text-5xl font-black text-slate-900 mb-4">Demande envoyée</h1>
        <p className="text-slate-500 max-w-md mx-auto mb-12 font-medium">
          Merci {formData.name}. Nos experts analysent votre projet et vous recontactent en moins de 24h.
        </p>
        <button onClick={() => setSubmitted(false)} className="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all">
          Nouveau projet
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Info */}
          <div className="flex-1 space-y-10">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                Devis gratuit
              </span>
              <h1 className="text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
                Parlons de votre projet
              </h1>
              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-lg">
                Broderie, sérigraphie, flocage, DTF, sublimation... 5 techniques de marquage pour un rendu parfait. Devis en moins de 24h.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl border border-slate-100 p-6">
                <Truck size={24} className="text-primary mb-3" />
                <h4 className="font-bold text-sm">Rapide</h4>
                <p className="text-xs text-slate-500 mt-1">Livraison express</p>
              </div>
              <div className="bg-white rounded-2xl border border-slate-100 p-6">
                <Palette size={24} className="text-primary mb-3" />
                <h4 className="font-bold text-sm">5 Techniques</h4>
                <p className="text-xs text-slate-500 mt-1">Marquage pro</p>
              </div>
              <div className="bg-white rounded-2xl border border-slate-100 p-6">
                <Shield size={24} className="text-primary mb-3" />
                <h4 className="font-bold text-sm">Premium</h4>
                <p className="text-xs text-slate-500 mt-1">Qualité garantie</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-primary/5 border border-primary/10 rounded-2xl p-6">
              <Phone size={24} className="text-primary" />
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Appelez-nous</p>
                <a href={`tel:${CONTACT.phone}`} className="font-black text-lg text-slate-900">{CONTACT.phone}</a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-[480px]">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-lg p-10">
              <h2 className="text-2xl font-black text-slate-900 mb-8">Votre projet</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { label: "Nom complet", type: "text", key: "name", placeholder: "Jean Dupont" },
                  { label: "Email professionnel", type: "email", key: "email", placeholder: "jean@entreprise.com" },
                  { label: "Structure", type: "text", key: "company", placeholder: "Société, école, association..." },
                ].map(field => (
                  <div key={field.key}>
                    <label className="text-xs font-bold text-slate-500 block mb-2">{field.label}</label>
                    <input
                      required={field.key !== 'company'}
                      type={field.type}
                      value={(formData as any)[field.key]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      placeholder={field.placeholder}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-slate-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-slate-400"
                    />
                  </div>
                ))}
                <div>
                  <label className="text-xs font-bold text-slate-500 block mb-2">Description du projet</label>
                  <textarea
                    required rows={3}
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    placeholder="Décrivez votre projet de personnalisation..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-slate-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 block mb-2">Quantité estimée</label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-slate-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all cursor-pointer"
                  >
                    <option value="10-50">10 - 50 pièces</option>
                    <option value="50-200">50 - 200 pièces</option>
                    <option value="200-500">200 - 500 pièces</option>
                    <option value="500+">500+ pièces</option>
                  </select>
                </div>
                <button type="submit"
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-primary/90 transition-all group">
                  Envoyer ma demande <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
