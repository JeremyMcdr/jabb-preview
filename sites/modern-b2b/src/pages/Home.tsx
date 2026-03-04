import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Plus } from 'lucide-react';
import { CATALOGUE, CATEGORIES, PROCESS_STEPS, CLIENT_LOGOS } from '../constants';

const Hero = () => (
  <section className="relative py-20 lg:py-32 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="z-10">
        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
          Expertise Textile & Objet
        </span>
        <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 mb-8">
          L'expert du textile et de l'objet personnalisé pour les entreprises
        </h1>
        <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
          Sublimez votre image de marque avec des produits de qualité sélectionnés avec soin pour vos équipes et vos clients.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/shop" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl text-base font-bold transition-all">
            Découvrir le catalogue
          </Link>
          <Link to="/custom" className="bg-white border border-slate-200 hover:border-primary px-8 py-4 rounded-xl text-base font-bold transition-all flex items-center gap-2">
            <MessageCircle size={18} className="text-primary" />
            Demander un devis
          </Link>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
        <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-slate-200">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAcjuVteW5BOhTPgfXx3vv34kpFSa2joBiR6aVn20WoZPPZSHylFQrn-fG0HxPgPhB6gBhWdww_7k44m-9QCixEdEfIvOduoYfKpo5xGw5-6WugkmiSA3gLO-9A96rzkvNsKnoxnWb6zbbjG0CpNS25wvxVmq5JHT2xbQVMwDJg3sPEZzSdw1fYa3ikWYjkcnKGlzZGuVdKWBF1VCx5FkLN9mnEjAQOOohTt4br-bylLqraK_wMyWs0tMzsPOUdhVWyu7Ksq_hsos"
            alt="Premium corporate apparel"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
          <div className="flex items-center gap-4 mb-2">
            <div className="flex -space-x-3">
              <img className="size-8 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn5Gj9eb8z5XyB5Q4Q1VOBXyBkbD1DyNSYq2SBm8fJGWqgtvacFEMxgWatSpquCFUedUKKbPZTLjbAdw_ZrL2cV3UgaWr06nS5Qr5aA3AW9VrVWeMN7OPcjwPm1x8i8g40MHhGYLG-tjD6OVgk-FWDvooAjw97AjVVZ-JBQ9ydg5BWHTcIuGW_duUndxz6DglwS-_ane3zExWy4FAq0MhiX67wBoPdxwy46XV2cz3cyRQORcghgitKMtRH6H3xfh71qY3h5P39Daw" alt="" referrerPolicy="no-referrer" />
              <img className="size-8 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXY6kwfVQN_DGT63nxJhSAXhmt4Edb_rjVDkTZ2LsbtAZsjS1zLEX_JIt2xp4v1PEjCKDePi56sKsr5d3o1OhTZetWVCAyFIiY95X6n6WIrRJ5jRukaYptE--j83yBGbR-DSCcJ7nNXghFq-2DTXWBzcQor5qiysfn3VpiGO3IrtT8fzU3OQUrKzRgpzbdFskif6BUZG96cB-XzdZMbMb-azLId2lJFv09JT_TYAq7SkbS58TqfaZVnUS_d-JSInTwc6Ca5kDH0ic" alt="" referrerPolicy="no-referrer" />
              <img className="size-8 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs15C5oZ8Q1kRj1qZ6MMdIngSaGpk-zqVuZ_ugWZvv7cNVJTdR6ALTzID3o8oyz2sFiyLlbVnXVV2s7dpIeg7HkYyGMVVunNbryqEEnyq_KvGVg0EVWNgPNaWfkzuIhVq_5BrK6IJBD7DoSfW8TxhNexu0rj_bO7K1m1H84m_i7rl-ugf9T8nYLJCgXA0HTFyddZLlCktmvNwZ3CMW2Uuyoi-s4gnodV_X_zZbl4V4DLHl1VsIbFKSVf7gooV2uJ9GI8OQC4gDNjU" alt="" referrerPolicy="no-referrer" />
            </div>
            <span className="text-xs font-bold text-slate-500 uppercase">Projets récents</span>
          </div>
          <p className="text-sm font-semibold">+500 entreprises nous font confiance</p>
        </div>
      </motion.div>
    </div>
  </section>
);

const SocialProof = () => (
  <section className="py-12 bg-white border-y border-slate-100">
    <div className="max-w-7xl mx-auto px-6">
      <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-10">Ils nous font confiance</p>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all">
        {CLIENT_LOGOS.map(name => (
          <div key={name} className="h-8 w-32 bg-slate-200 rounded flex items-center justify-center font-bold text-slate-500 text-sm">
            {name}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CategoryGrid = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-black text-slate-900 mb-4 leading-tight">Nos univers produits</h2>
          <p className="text-lg text-slate-600 font-medium">Une sélection rigoureuse pour répondre à tous vos besoins professionnels.</p>
        </div>
        <Link to="/shop" className="text-primary font-bold flex items-center gap-2 hover:underline group">
          Voir tout le catalogue
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {CATEGORIES.map((cat, idx) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
          >
            <Link to="/shop" className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg bg-slate-200 block">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={cat.image}
                alt={cat.name}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{cat.name}</h3>
                <p className="text-white/80 text-sm font-medium">{cat.subtitle}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ProcessSection = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-black text-slate-900 mb-6">Comment ça marche ?</h2>
        <p className="text-slate-500 max-w-lg mx-auto font-medium">Un processus simple et transparent pour vos commandes B2B.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-12 relative">
        <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px border-t-2 border-dashed border-slate-200 -z-0" />
        {PROCESS_STEPS.map((step, idx) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            <div className="size-24 rounded-3xl bg-primary flex items-center justify-center text-white text-3xl font-black shadow-xl shadow-primary/20 mb-8">
              {step.number}
            </div>
            <h4 className="text-xl font-bold mb-4">{step.title}</h4>
            <p className="text-slate-500 leading-relaxed font-medium">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FeaturedProducts = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-4xl font-black text-slate-900 mb-4">Incontournables</h2>
        <p className="text-slate-500 font-medium">Nos meilleures ventes appréciées par les start-ups et grands comptes.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {CATALOGUE.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300"
          >
            <div className="aspect-[3/4] overflow-hidden bg-slate-200">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-[10px] font-bold uppercase tracking-widest ${product.tagColor} px-2 py-0.5 rounded`}>
                  {product.tag}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 mb-1">{product.name}</h3>
              <p className="text-xs text-slate-500 mb-4">{product.subtitle}</p>
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">À partir de</p>
                  <p className="text-lg font-black text-primary">{product.price} <span className="text-xs font-normal text-slate-400">HT</span></p>
                </div>
                <Link to="/custom" className="size-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-slate-600">
                  <Plus size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CtaBanner = () => (
  <section className="py-20 px-6">
    <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] p-12 lg:p-24 relative overflow-hidden">
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">Prêt à sublimer votre image ?</h2>
          <p className="text-xl text-white/70 font-medium leading-relaxed">
            Parlons de votre prochain projet. Nos experts reviennent vers vous en moins de 24h.
          </p>
        </div>
        <Link to="/custom" className="bg-white text-slate-900 hover:scale-105 px-12 py-5 rounded-2xl text-lg font-black transition-all shadow-2xl shrink-0">
          Démarrer un devis gratuit
        </Link>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M0 0 L100 0 L100 100 Z" fill="white" />
        </svg>
      </div>
    </div>
  </section>
);

export const Home = () => (
  <>
    <Hero />
    <SocialProof />
    <CategoryGrid />
    <ProcessSection />
    <FeaturedProducts />
    <CtaBanner />
  </>
);
