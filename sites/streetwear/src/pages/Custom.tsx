import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { CONTACT } from '../constants';
import { useQuoteModal } from '../components/Layout';

export const Custom = () => {
  const { open: openQuote } = useQuoteModal();
  const waLink = `https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, '')}`;

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
      <div className="flex flex-col lg:flex-row gap-12 mb-20">
        <div className="flex-1 space-y-8">
          <div>
            <span className="text-jabb-blue font-bold uppercase tracking-widest text-sm">Devis Express</span>
            <h1 className="text-3xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mt-2 mb-6">
              Créez votre <br /><span className="text-jabb-blue">produit sur mesure</span>.
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-lg">
              <span className="text-jabb-blue font-bold">Broderie, Sérigraphie, Transfert, Sublimation, Tampographie.</span>
            </p>
          </div>

          {/* 3 CTAs */}
          <div className="space-y-3">
            <button
              onClick={openQuote}
              className="group flex items-center gap-4 p-5 bg-jabb-blue text-white rounded-xl shadow-xl shadow-jabb-blue/20 hover:scale-[1.02] transition-transform w-full text-left"
            >
              <div className="bg-white/20 p-3 rounded-lg"><Zap size={28} /></div>
              <div className="flex-1">
                <h3 className="text-xl font-black uppercase">Devis Express</h3>
                <p className="text-sm opacity-80">Sans engagement, en - de 2h</p>
              </div>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>

            <a
              href={`tel:${CONTACT.phone}`}
              className="group flex items-center gap-4 p-5 bg-slate-900 text-white rounded-xl hover:scale-[1.02] transition-transform w-full"
            >
              <div className="bg-white/10 p-3 rounded-lg"><Phone size={28} /></div>
              <div className="flex-1">
                <h3 className="text-lg font-black uppercase">Appelez-nous</h3>
                <p className="text-sm opacity-80">{CONTACT.phone}</p>
              </div>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </a>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 bg-[#25D366] text-white rounded-xl shadow-xl shadow-green-500/20 hover:scale-[1.02] transition-transform w-full"
            >
              <div className="bg-white/20 p-3 rounded-lg"><MessageCircle size={28} /></div>
              <div className="flex-1">
                <h3 className="text-lg font-black uppercase">WhatsApp</h3>
                <p className="text-sm opacity-80">Réponse instantanée</p>
              </div>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400 font-bold">
            <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-green-500" /> Sans engagement</span>
            <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-green-500" /> 97% satisfaction</span>
          </div>
        </div>

        {/* Right: Showroom visual */}
        <div className="w-full lg:w-[500px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl aspect-[4/3] overflow-hidden"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/photos/showroom-sofa.jpeg`}
              alt="Showroom JABB - Textiles personnalisés"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="bg-slate-900 text-white p-6 rounded-2xl mt-6">
            <p className="text-xs font-bold uppercase tracking-widest text-jabb-accent mb-3">Nos clients parlent</p>
            <p className="italic font-medium mb-3">"Devis reçu en 45 minutes, livraison en 5 jours. Impressionnant."</p>
            <p className="text-xs text-slate-400 font-bold">— Sophie K., Responsable Communication</p>
          </div>
        </div>
      </div>
    </div>
  );
};
