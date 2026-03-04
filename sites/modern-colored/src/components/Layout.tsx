/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  Zap,
  Instagram,
  Linkedin,
  Facebook,
  Menu,
  X,
  Mail,
  MapPin
} from 'lucide-react';
import { CONTACT } from '../constants';

const NAV_LINKS = [
  { label: "Nos Services", path: "/shop" },
  { label: "Catalogues", path: "/shop" },
  { label: "Nos Réalisations", path: "/realisations" },
  { label: "RSE", path: "/rse" },
  { label: "Ambassadeurs", path: "/ambassadeurs" },
  { label: "JABB Events", path: "/events" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-2 font-display text-2xl font-bold tracking-tighter italic">
            <div className="bg-jabb-blue p-1 rounded text-white">
              <Zap size={24} fill="currentColor" />
            </div>
            JABB
          </Link>
          <div className="hidden lg:flex items-center gap-6 text-[11px] font-bold tracking-widest uppercase">
            {NAV_LINKS.map(link => (
              <Link
                key={link.label}
                to={link.path}
                className={`hover:text-jabb-blue transition-colors ${isActive(link.path) ? 'text-jabb-blue' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a href={`tel:${CONTACT.phone}`} className="hidden md:flex items-center gap-2 text-xs font-bold hover:text-jabb-blue transition-colors">
            <Phone size={16} />
            {CONTACT.phone}
          </a>
          <Link to="/custom" className="hidden sm:flex bg-jabb-blue text-white px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase hover:bg-black transition-all">
            Devis Gratuit
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-6 space-y-1">
          {NAV_LINKS.map(link => (
            <Link
              key={link.label}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 px-4 rounded-xl text-sm font-bold uppercase tracking-widest transition-colors ${
                isActive(link.path) ? 'text-jabb-blue bg-jabb-blue/5' : 'hover:bg-gray-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/custom"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 bg-jabb-blue text-white px-6 py-4 rounded-xl text-sm font-bold text-center uppercase tracking-widest"
          >
            Demander un Devis
          </Link>
          <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2 py-3 px-4 text-sm font-bold text-gray-500">
            <Phone size={16} /> {CONTACT.phone}
          </a>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-white border-t border-gray-100 px-6 py-20">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
      {/* Brand */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2 font-display text-2xl font-bold tracking-tighter italic">
          <div className="bg-jabb-blue p-1 rounded text-white">
            <Zap size={24} fill="currentColor" />
          </div>
          JABB
        </div>
        <p className="text-gray-500 text-sm leading-relaxed">
          Valorisez votre marque avec du textile et des goodies personnalisés haute qualité. Devis en moins de 2 heures.
        </p>
        <div className="space-y-3 text-sm text-gray-500">
          <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-jabb-blue transition-colors">
            <Mail size={16} /> {CONTACT.email}
          </a>
          <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2 hover:text-jabb-blue transition-colors">
            <Phone size={16} /> {CONTACT.phone}
          </a>
          <p className="flex items-center gap-2">
            <MapPin size={16} className="shrink-0" /> {CONTACT.address}
          </p>
        </div>
        <div className="flex gap-4">
          <a href={CONTACT.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-jabb-blue hover:text-white hover:border-jabb-blue transition-all">
            <Instagram size={18} />
          </a>
          <a href={CONTACT.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-jabb-blue hover:text-white hover:border-jabb-blue transition-all">
            <Linkedin size={18} />
          </a>
          <a href={CONTACT.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-jabb-blue hover:text-white hover:border-jabb-blue transition-all">
            <Facebook size={18} />
          </a>
        </div>
      </div>

      {/* Navigation */}
      <div>
        <h4 className="font-bold text-xs tracking-widest uppercase mb-8">Navigation</h4>
        <ul className="flex flex-col gap-4 text-sm text-gray-500 font-medium">
          <li><Link to="/shop" className="hover:text-jabb-blue transition-colors">Nos Services</Link></li>
          <li><Link to="/shop" className="hover:text-jabb-blue transition-colors">Catalogues</Link></li>
          <li><Link to="/realisations" className="hover:text-jabb-blue transition-colors">Nos Réalisations</Link></li>
          <li><Link to="/events" className="hover:text-jabb-blue transition-colors">JABB Events</Link></li>
          <li><Link to="/story" className="hover:text-jabb-blue transition-colors">Notre Histoire</Link></li>
        </ul>
      </div>

      {/* Engagements */}
      <div>
        <h4 className="font-bold text-xs tracking-widest uppercase mb-8">Engagements</h4>
        <ul className="flex flex-col gap-4 text-sm text-gray-500 font-medium">
          <li><Link to="/rse" className="hover:text-jabb-blue transition-colors">Engagements RSE</Link></li>
          <li><Link to="/ambassadeurs" className="hover:text-jabb-blue transition-colors">Ambassadeurs</Link></li>
          <li><Link to="/custom" className="hover:text-jabb-blue transition-colors">Demander un Devis</Link></li>
        </ul>
      </div>

      {/* Légal */}
      <div>
        <h4 className="font-bold text-xs tracking-widest uppercase mb-8">Informations</h4>
        <ul className="flex flex-col gap-4 text-sm text-gray-500 font-medium">
          <li><a href="#" className="hover:text-jabb-blue transition-colors">Mentions Légales</a></li>
          <li><a href="#" className="hover:text-jabb-blue transition-colors">Conditions Générales de Vente</a></li>
          <li><a href="#" className="hover:text-jabb-blue transition-colors">Politique de Confidentialité</a></li>
        </ul>
      </div>
    </div>

    <div className="max-w-7xl mx-auto pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
      <p className="text-xs text-gray-400">&copy; 2025 JABB. Tous droits réservés.</p>
      <div className="flex gap-6 text-xs text-gray-400">
        <a href="#" className="hover:text-jabb-blue transition-colors">Mentions légales</a>
        <a href="#" className="hover:text-jabb-blue transition-colors">CGV</a>
        <a href="#" className="hover:text-jabb-blue transition-colors">Confidentialité</a>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
