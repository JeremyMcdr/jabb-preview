/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Zap, Palette, Type, Image as ImageIcon, Layers, ArrowRight, Send, CheckCircle2, Phone } from 'lucide-react';
import { CLIENT_LOGOS, CONTACT } from '../constants';

export const CustomLab = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    quantity: '50'
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
          className="bg-jabb-lime p-6 rounded-full text-white mb-8"
        >
          <CheckCircle2 size={64} />
        </motion.div>
        <h1 className="font-display text-5xl font-bold italic uppercase tracking-tighter mb-4">Demande Envoyée !</h1>
        <p className="text-gray-500 max-w-md mx-auto mb-12 font-medium">
          Merci {formData.name}. Nos experts analysent votre projet. Vous recevrez votre devis personnalisé en moins de 2 heures.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-jabb-blue text-white px-10 py-5 rounded-2xl font-bold hover:bg-black transition-all"
        >
          NOUVELLE DEMANDE
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <div className="px-6 py-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Info Panel */}
          <div className="flex-1 space-y-12">
            <div>
              <span className="text-jabb-blue font-bold text-xs tracking-widest uppercase italic mb-4 block">Projet sur mesure</span>
              <h1 className="font-display text-6xl md:text-7xl font-bold italic uppercase tracking-tighter leading-[0.9] mb-8">
                Lancez <br /> Votre <br /> <span className="text-jabb-blue">Production</span>.
              </h1>
              <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-lg">
                Que vous soyez une entreprise, une association ou un créateur, nous vous accompagnons de A à Z dans la création de votre merch.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="bg-jabb-blue/10 p-3 rounded-xl text-jabb-blue w-fit mb-6">
                  <Zap size={24} fill="currentColor" />
                </div>
                <h3 className="font-bold text-lg mb-2">Rapidité</h3>
                <p className="text-sm text-gray-400 font-medium">Devis en moins de 2h et production optimisée.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="bg-jabb-pink/10 p-3 rounded-xl text-jabb-pink w-fit mb-6">
                  <Palette size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Qualité</h3>
                <p className="text-sm text-gray-400 font-medium">5 techniques de marquage pour un rendu parfait.</p>
              </div>
            </div>

            <div className="bg-jabb-lime p-10 rounded-[2.5rem] text-white">
              <h3 className="font-display text-3xl font-bold italic uppercase mb-4">Ils nous font confiance</h3>
              <div className="flex flex-wrap gap-6 opacity-60">
                {CLIENT_LOGOS.slice(0, 6).map(logo => (
                  <span key={logo} className="font-display text-lg font-bold italic">{logo}</span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="bg-jabb-blue/10 p-3 rounded-xl text-jabb-blue">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Appelez-nous</p>
                <a href={`tel:${CONTACT.phone}`} className="font-bold text-lg hover:text-jabb-blue transition-colors">{CONTACT.phone}</a>
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="w-full lg:w-[500px]">
            <div className="bg-white rounded-[3rem] p-10 md:p-12 shadow-2xl shadow-black/5 border border-gray-100">
              <h2 className="font-display text-3xl font-bold italic uppercase mb-8">Votre Projet</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Nom Complet</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Jean Dupont" 
                    className="w-full bg-gray-50 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-jabb-blue/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Email Professionnel</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="jean@entreprise.com" 
                    className="w-full bg-gray-50 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-jabb-blue/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Structure / Marque</label>
                  <input 
                    type="text" 
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="Nom de votre société ou école" 
                    className="w-full bg-gray-50 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-jabb-blue/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Description du projet</label>
                  <textarea 
                    required
                    rows={4}
                    value={formData.project}
                    onChange={(e) => setFormData({...formData, project: e.target.value})}
                    placeholder="Décrivez vos besoins (produits, quantités, logos...)" 
                    className="w-full bg-gray-50 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-jabb-blue/20 transition-all resize-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Quantité estimée</label>
                  <select 
                    value={formData.quantity}
                    onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                    className="w-full bg-gray-50 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-jabb-blue/20 transition-all cursor-pointer"
                  >
                    <option value="10-50">10 - 50 pièces</option>
                    <option value="50-200">50 - 200 pièces</option>
                    <option value="200-500">200 - 500 pièces</option>
                    <option value="500+">500+ pièces</option>
                  </select>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-jabb-blue text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl shadow-jabb-blue/20 group"
                >
                  ENVOYER MA DEMANDE <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

