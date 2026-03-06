import React, { useState, createContext, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, ShoppingBag, Shirt, Menu, X, Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Zap, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CONTACT } from '../constants';

// Quote modal context
const QuoteModalContext = createContext<{ open: () => void }>({ open: () => {} });
export const useQuoteModal = () => useContext(QuoteModalContext);

const NAV_LINKS = [
  { label: "T-shirts", path: "/shop?cat=T-shirts" },
  { label: "Hoodies", path: "/shop?cat=Hoodies" },
  { label: "Accessoires", path: "/shop?cat=Accessoires" },
  { label: "Réalisations", path: "/realisations" },
  { label: "Antennes", path: "/antennes" },
];

const PRODUCT_TYPES = [
  "T-shirt",
  "Hoodie / Sweat",
  "Polo",
  "Veste / Bomber",
  "Casquette",
  "Tote bag",
  "Goodies / Objets",
  "Autre",
];

// ── Quote Modal ──────────────────────────────────
const QuoteModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    quantity: '50-200',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <button onClick={handleClose} className="absolute top-5 right-5 p-2 hover:bg-slate-100 rounded-full z-10">
              <X size={20} />
            </button>

            {submitted ? (
              <div className="p-10 text-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-jabb-accent p-5 rounded-full text-slate-900 mb-6 inline-flex">
                  <CheckCircle2 size={48} />
                </motion.div>
                <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-3">C'est envoyé !</h2>
                <p className="text-slate-500 font-medium mb-2">Merci {formData.name}.</p>
                <div className="bg-jabb-blue/5 border border-jabb-blue/10 rounded-xl p-4 mb-6">
                  <p className="text-jabb-blue font-black text-lg">Devis en - de 2h</p>
                  <p className="text-sm text-slate-500">Notre équipe analyse votre projet en ce moment</p>
                </div>
                <button onClick={handleClose} className="bg-jabb-blue text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-slate-900 transition-all">
                  Fermer
                </button>
              </div>
            ) : (
              <div className="p-8 md:p-10">
                {/* Header with speed badge */}
                <div className="flex items-start gap-4 mb-8">
                  <div className="bg-jabb-blue p-3 rounded-xl text-white shrink-0">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black uppercase italic tracking-tighter">Devis Express</h2>
                    <p className="text-jabb-blue font-bold text-sm">Réponse en - de 2h</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1 block mb-1.5">Nom *</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jean Dupont"
                        className="w-full bg-slate-50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-jabb-blue/20 text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1 block mb-1.5">Email *</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jean@entreprise.com"
                        className="w-full bg-slate-50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-jabb-blue/20 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1 block mb-1.5">Téléphone <span className="text-slate-300">(optionnel)</span></label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="06 00 00 00 00"
                      className="w-full bg-slate-50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-jabb-blue/20 text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1 block mb-1.5">Type de produit *</label>
                      <select
                        required
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full bg-slate-50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-jabb-blue/20 text-sm cursor-pointer"
                      >
                        <option value="">Sélectionner...</option>
                        {PRODUCT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1 block mb-1.5">Quantité *</label>
                      <select
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        className="w-full bg-slate-50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-jabb-blue/20 text-sm cursor-pointer"
                      >
                        <option value="10-50">10 - 50 pièces</option>
                        <option value="50-200">50 - 200 pièces</option>
                        <option value="200-500">200 - 500 pièces</option>
                        <option value="500+">500+ pièces</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1 block mb-1.5">Message <span className="text-slate-300">(optionnel)</span></label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Décrivez brièvement votre projet..."
                      className="w-full bg-slate-50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-jabb-blue/20 text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-jabb-blue text-white py-4 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-slate-900 transition-all shadow-lg shadow-jabb-blue/20 group text-sm"
                  >
                    <Zap size={18} /> DEVIS EXPRESS EN - DE 2H <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center justify-center gap-6 pt-2 text-xs text-slate-400">
                    <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-green-500" /> Gratuit</span>
                    <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-green-500" /> Sans engagement</span>
                    <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-green-500" /> Réponse rapide</span>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ── Navbar ──────────────────────────────────
const Navbar = ({ onOpenQuote }: { onOpenQuote: () => void }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-jabb-light/80 backdrop-blur-md border-b border-jabb-blue/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-10 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8 lg:gap-12">
          <Link to="/" className="flex items-center gap-2">
            <div className="size-8 bg-jabb-blue rounded-lg flex items-center justify-center text-white">
              <Shirt size={20} />
            </div>
            <span className="text-xl lg:text-2xl font-bold tracking-tighter uppercase italic">Jabb</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(link => (
              <Link
                key={link.label}
                to={link.path}
                className="text-sm font-bold uppercase hover:text-jabb-blue transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <a href={`tel:${CONTACT.phone}`} className="hidden lg:flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-jabb-blue transition-colors px-3 py-2">
            <Phone size={16} /> {CONTACT.phone}
          </a>
          <button
            onClick={onOpenQuote}
            className="flex items-center gap-2 bg-jabb-blue text-white px-4 lg:px-6 py-2.5 rounded-full font-black text-xs lg:text-sm uppercase tracking-wider hover:scale-105 transition-transform shadow-lg shadow-jabb-blue/25"
          >
            <Zap size={16} />
            <span className="hidden sm:inline">Devis Express</span>
            <span className="sm:hidden">Devis</span>
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 hover:bg-slate-100 rounded-xl transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-6 py-4 space-y-1">
          {NAV_LINKS.map(link => (
            <Link
              key={link.label}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className="block py-3 px-4 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-jabb-blue/5 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-3 py-3 px-4 rounded-xl text-sm font-bold uppercase tracking-widest text-jabb-blue">
            <Phone size={16} /> {CONTACT.phone}
          </a>
        </div>
      )}
    </header>
  );
};

// ── Floating Contact Buttons ──────────────────────────────────
const FloatingButtons = ({ onOpenQuote }: { onOpenQuote: () => void }) => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
    <a
      href={`https://wa.me/33184801449`}
      target="_blank"
      rel="noopener noreferrer"
      className="size-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-transform"
      title="WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
    <a
      href={`tel:${CONTACT.phone}`}
      className="size-14 bg-jabb-blue text-white rounded-full flex items-center justify-center shadow-lg shadow-jabb-blue/30 hover:scale-110 transition-transform"
      title="Appeler"
    >
      <Phone size={24} />
    </a>
  </div>
);

// ── Footer ──────────────────────────────────
const Footer = ({ onOpenQuote }: { onOpenQuote: () => void }) => (
  <footer className="bg-jabb-dark text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-2 mb-6">
          <div className="size-10 bg-jabb-blue rounded-lg flex items-center justify-center text-white">
            <Shirt size={22} />
          </div>
          <span className="text-3xl font-black uppercase italic">Jabb</span>
        </div>
        <p className="text-slate-400 max-w-sm mb-6">
          Le laboratoire créatif de ton style. On transforme tes idées en pièces de mode uniques et durables. Devis en - de 2h.
        </p>
        <div className="space-y-2 text-sm text-slate-400 mb-6">
          <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={14} /> {CONTACT.email}
          </a>
          <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone size={14} /> {CONTACT.phone}
          </a>
          <p className="flex items-center gap-2">
            <MapPin size={14} className="shrink-0" /> {CONTACT.address}
          </p>
        </div>
        <div className="flex gap-3">
          <a href={CONTACT.social.instagram} target="_blank" rel="noopener noreferrer" className="size-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-jabb-blue transition-colors">
            <Instagram size={18} />
          </a>
          <a href={CONTACT.social.linkedin} target="_blank" rel="noopener noreferrer" className="size-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-jabb-blue transition-colors">
            <Linkedin size={18} />
          </a>
          <a href={CONTACT.social.facebook} target="_blank" rel="noopener noreferrer" className="size-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-jabb-blue transition-colors">
            <Facebook size={18} />
          </a>
        </div>
      </div>

      <div>
        <h4 className="font-bold uppercase mb-6 tracking-widest text-jabb-blue text-sm">Produits</h4>
        <ul className="flex flex-col gap-4 text-slate-400 text-sm">
          <li><Link to="/shop?cat=T-shirts" className="hover:text-white transition-colors">T-shirts</Link></li>
          <li><Link to="/shop?cat=Hoodies" className="hover:text-white transition-colors">Hoodies & Sweats</Link></li>
          <li><Link to="/shop?cat=Accessoires" className="hover:text-white transition-colors">Accessoires</Link></li>
          <li><Link to="/realisations" className="hover:text-white transition-colors">Réalisations</Link></li>
          <li><Link to="/antennes" className="hover:text-white transition-colors">Nos Antennes</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold uppercase mb-6 tracking-widest text-jabb-blue text-sm">Contact</h4>
        <ul className="flex flex-col gap-4 text-slate-400 text-sm">
          <li><button onClick={onOpenQuote} className="hover:text-white transition-colors">Devis Express</button></li>
          <li><a href={`tel:${CONTACT.phone}`} className="hover:text-white transition-colors">Appeler</a></li>
          <li><a href="https://wa.me/33184801449" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Mentions Légales</a></li>
          <li><a href="#" className="hover:text-white transition-colors">CGV</a></li>
        </ul>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-slate-500 text-sm">&copy; 2025 Jabb. Tous droits réservés.</p>
      <div className="flex gap-6 text-slate-500 text-sm">
        <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
        <a href="#" className="hover:text-white transition-colors">CGV</a>
      </div>
    </div>
  </footer>
);

// ── Layout ──────────────────────────────────
export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const openQuote = () => setQuoteOpen(true);

  return (
    <QuoteModalContext.Provider value={{ open: openQuote }}>
      <div className="relative flex min-h-screen flex-col font-display">
        <Navbar onOpenQuote={openQuote} />
        <main className="flex-grow">{children}</main>
        <Footer onOpenQuote={openQuote} />
        <FloatingButtons onOpenQuote={openQuote} />
        <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
      </div>
    </QuoteModalContext.Provider>
  );
};
