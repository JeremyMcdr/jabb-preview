import React from 'react';
import { motion } from 'motion/react';
import { Palette, Diamond, Zap, Phone, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CONTACT } from '../constants';
import { useQuoteModal } from '../components/Layout';

export const Custom = () => {
  const { open: openQuote } = useQuoteModal();

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
      {/* Hero with 3 CTAs visible */}
      <div className="flex flex-col lg:flex-row gap-12 mb-20">
        <div className="flex-1 space-y-8">
          <div>
            <span className="text-jabb-blue font-bold uppercase tracking-widest text-sm">Custom Lab</span>
            <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mt-2 mb-6">
              Crée ta <br /><span className="text-jabb-blue">pièce unique</span>.
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-lg">
              Broderie, sérigraphie, flocage, DTF, sublimation — <span className="text-jabb-blue font-bold">5 techniques</span> pour un rendu parfait.
            </p>
          </div>

          {/* 3 CTAs visible without scrolling */}
          <div className="space-y-3">
            <button
              onClick={openQuote}
              className="group flex items-center gap-4 p-5 bg-jabb-blue text-white rounded-xl shadow-xl shadow-jabb-blue/20 hover:scale-[1.02] transition-transform w-full text-left"
            >
              <div className="bg-white/20 p-3 rounded-lg"><Zap size={28} /></div>
              <div className="flex-1">
                <h3 className="text-xl font-black uppercase">Devis Express</h3>
                <p className="text-sm opacity-80">Gratuit, sans engagement, en - de 2h</p>
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
              href="https://wa.me/33184801449"
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
            <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-green-500" /> Gratuit</span>
            <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-green-500" /> Sans engagement</span>
            <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-green-500" /> 97% satisfaction</span>
          </div>
        </div>

        {/* Right: features */}
        <div className="w-full lg:w-[400px] space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: Zap, title: "Rapide", desc: "Devis en - de 2h, livraison express possible", color: "bg-jabb-blue/10 text-jabb-blue" },
              { icon: Palette, title: "5 Techniques", desc: "Broderie, sérigraphie, flocage, DTF, sublimation", color: "bg-jabb-accent/30 text-slate-900" },
              { icon: Diamond, title: "Premium", desc: "Qualité garantie, 200 000+ références", color: "bg-jabb-blue/10 text-jabb-blue" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4"
              >
                <div className={`${item.color} p-3 rounded-xl shrink-0`}>
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="font-black text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-slate-900 text-white p-6 rounded-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-jabb-accent mb-3">Nos clients parlent</p>
            <p className="italic font-medium mb-3">"Devis reçu en 45 minutes, livraison en 5 jours. Impressionnant."</p>
            <p className="text-xs text-slate-400 font-bold">— Sophie K., Responsable Communication</p>
          </div>
        </div>
      </div>
    </div>
  );
};
