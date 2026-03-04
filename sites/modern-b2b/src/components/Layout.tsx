import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';
import { CONTACT } from '../constants';

const NAV_LINKS = [
  { label: "Produits", path: "/shop" },
  { label: "Marquage", path: "/custom" },
  { label: "Réalisations", path: "/shop" },
  { label: "À propos", path: "/" },
];

const JabbLogo = () => (
  <svg className="size-6" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd" />
  </svg>
);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-primary p-1.5 rounded-lg text-white">
              <JabbLogo />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900">JABB</span>
          </Link>
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map(link => (
              <Link key={link.label} to={link.path} className="text-sm font-semibold hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/custom" className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-primary/20">
            Demander un devis
          </Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-slate-900">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-6 py-6 space-y-1">
          {NAV_LINKS.map(link => (
            <Link key={link.label} to={link.path} onClick={() => setMobileOpen(false)}
              className="block py-3 px-4 text-sm font-semibold hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
      <div className="col-span-1 md:col-span-2 lg:col-span-1">
        <div className="flex items-center gap-2 mb-8">
          <div className="bg-primary p-1.5 rounded-lg text-white">
            <JabbLogo />
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-900">JABB</span>
        </div>
        <p className="text-slate-500 font-medium mb-8 max-w-xs">
          Solution premium de textile et objets personnalisés pour les entreprises ambitieuses.
        </p>
        <div className="flex gap-4">
          <a href={CONTACT.social.instagram} target="_blank" rel="noopener noreferrer"
            className="size-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all">
            <Instagram size={18} />
          </a>
          <a href={CONTACT.social.linkedin} target="_blank" rel="noopener noreferrer"
            className="size-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all">
            <Linkedin size={18} />
          </a>
        </div>
      </div>

      <div>
        <h5 className="font-black text-slate-900 mb-8 uppercase tracking-widest text-xs">Produits</h5>
        <ul className="space-y-4 text-slate-500 font-medium">
          <li><Link to="/shop" className="hover:text-primary transition-colors">Tous les textiles</Link></li>
          <li><Link to="/shop" className="hover:text-primary transition-colors">Objets publicitaires</Link></li>
          <li><Link to="/shop" className="hover:text-primary transition-colors">Marques Premium</Link></li>
          <li><Link to="/shop" className="hover:text-primary transition-colors">Collection Bio</Link></li>
        </ul>
      </div>

      <div>
        <h5 className="font-black text-slate-900 mb-8 uppercase tracking-widest text-xs">Services</h5>
        <ul className="space-y-4 text-slate-500 font-medium">
          <li><Link to="/custom" className="hover:text-primary transition-colors">Marquage sur mesure</Link></li>
          <li><a href="#" className="hover:text-primary transition-colors">Logistique B2B</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Accompagnement design</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Stockage & Dispatch</a></li>
        </ul>
      </div>

      <div>
        <h5 className="font-black text-slate-900 mb-8 uppercase tracking-widest text-xs">Contact</h5>
        <ul className="space-y-4 text-slate-500 font-medium">
          <li className="flex items-center gap-3">
            <Mail size={14} className="text-primary" />
            <a href={`mailto:${CONTACT.email}`} className="hover:text-primary transition-colors">{CONTACT.email}</a>
          </li>
          <li className="flex items-center gap-3">
            <Phone size={14} className="text-primary" />
            <a href={`tel:${CONTACT.phone}`} className="hover:text-primary transition-colors">{CONTACT.phone}</a>
          </li>
          <li className="flex items-center gap-3">
            <MapPin size={14} className="text-primary" />
            {CONTACT.address}
          </li>
        </ul>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-sm text-slate-400 font-medium">&copy; 2025 JABB SAS. Tous droits réservés.</p>
      <div className="flex gap-8 text-sm text-slate-400 font-medium">
        <a className="hover:text-slate-900 transition-colors" href="#">Mentions légales</a>
        <a className="hover:text-slate-900 transition-colors" href="#">CGV</a>
        <a className="hover:text-slate-900 transition-colors" href="#">Confidentialité</a>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative flex min-h-screen flex-col font-display overflow-x-hidden">
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);
