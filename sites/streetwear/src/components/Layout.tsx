import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Heart, ShoppingBag, Shirt, Menu, X, Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';
import { CONTACT } from '../constants';

const NAV_LINKS = [
  { label: "Services", path: "/custom" },
  { label: "Catalogues", path: "/shop" },
  { label: "Réalisations", path: "/realisations" },
  { label: "RSE", path: "/rse" },
  { label: "Ambassadeurs", path: "/ambassadeurs" },
  { label: "Antennes", path: "/antennes" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-jabb-light/80 backdrop-blur-md border-b border-jabb-blue/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center gap-2">
            <div className="size-8 bg-jabb-blue rounded-lg flex items-center justify-center text-white">
              <Shirt size={20} />
            </div>
            <span className="text-2xl font-bold tracking-tighter uppercase italic">Jabb Store</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
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

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center bg-slate-200/50 rounded-full px-4 py-2">
            <Search size={16} className="text-slate-500" />
            <input
              className="bg-transparent border-none focus:outline-none text-sm w-40 ml-2"
              placeholder="Search..."
              type="text"
            />
          </div>
          <button className="p-2 hover:bg-jabb-blue/10 rounded-full transition-colors">
            <Heart size={20} />
          </button>
          <Link to="/shop" className="flex items-center gap-2 bg-jabb-blue text-white px-5 py-2 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-jabb-blue/25">
            <ShoppingBag size={18} />
            <span className="hidden sm:inline text-sm">PANIER</span>
            <span className="bg-white text-jabb-blue text-[10px] rounded-full px-1.5 py-0.5 ml-1 font-black">0</span>
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 hover:bg-slate-100 rounded-xl transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-6 py-6 space-y-1">
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
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="bg-jabb-dark text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-2 mb-6">
          <div className="size-10 bg-jabb-blue rounded-lg flex items-center justify-center text-white">
            <Shirt size={22} />
          </div>
          <span className="text-3xl font-black uppercase italic">Jabb Store</span>
        </div>
        <p className="text-slate-400 max-w-sm mb-6">
          Le laboratoire créatif de ton style. On transforme tes idées en pièces de mode uniques et durables.
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
        <h4 className="font-bold uppercase mb-6 tracking-widest text-jabb-blue text-sm">Menu</h4>
        <ul className="flex flex-col gap-4 text-slate-400 text-sm">
          <li><Link to="/" className="hover:text-white transition-colors">Accueil</Link></li>
          <li><Link to="/shop" className="hover:text-white transition-colors">Catalogues</Link></li>
          <li><Link to="/custom" className="hover:text-white transition-colors">Nos Services</Link></li>
          <li><Link to="/realisations" className="hover:text-white transition-colors">Réalisations</Link></li>
          <li><Link to="/events" className="hover:text-white transition-colors">Jabb Events</Link></li>
          <li><Link to="/story" className="hover:text-white transition-colors">Notre Atelier</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold uppercase mb-6 tracking-widest text-jabb-blue text-sm">Engagements</h4>
        <ul className="flex flex-col gap-4 text-slate-400 text-sm">
          <li><Link to="/rse" className="hover:text-white transition-colors">RSE</Link></li>
          <li><Link to="/ambassadeurs" className="hover:text-white transition-colors">Ambassadeurs</Link></li>
          <li><a href="#" className="hover:text-white transition-colors">Mentions Légales</a></li>
          <li><a href="#" className="hover:text-white transition-colors">CGV</a></li>
        </ul>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-slate-500 text-sm">&copy; 2025 Jabb Store. Tous droits réservés.</p>
      <div className="flex gap-6 text-slate-500 text-sm">
        <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
        <a href="#" className="hover:text-white transition-colors">CGV</a>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative flex min-h-screen flex-col font-display">
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);
