import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Zap, Menu, X, Mail, Instagram, Linkedin } from 'lucide-react';
import { CONTACT } from '../constants';

const NAV_LINKS = [
  { label: "Drops", path: "/shop" },
  { label: "Apparel", path: "/shop" },
  { label: "Accessories", path: "/shop" },
  { label: "Custom", path: "/custom" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dark-bg/90 backdrop-blur-md border-b border-neon-purple/20 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-neon-purple p-1 rounded-sm rotate-12 group-hover:rotate-0 transition-transform">
              <Zap size={24} className="text-white" fill="currentColor" />
            </div>
            <span className="text-2xl font-black tracking-tighter italic">JABB<span className="text-neon-green">STORE</span></span>
          </Link>
          <nav className="hidden md:flex gap-8">
            {NAV_LINKS.map(link => (
              <Link key={link.label} to={link.path} className="text-sm font-bold uppercase tracking-widest hover:text-neon-green transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative hidden lg:block">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neon-purple" />
            <input
              className="bg-dark-surface border-2 border-neon-purple/30 rounded-none py-2 pl-10 pr-4 text-xs font-bold focus:border-neon-green focus:outline-none transition-all w-56 placeholder:text-neon-purple/50 text-white"
              placeholder="HUNT FOR GEAR..."
              type="text"
            />
          </div>
          <div className="flex gap-4">
            <button className="relative hover:text-neon-green transition-colors">
              <ShoppingCart size={24} />
              <span className="absolute -top-1 -right-1 bg-neon-green text-black text-[10px] font-black w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </button>
            <button className="hover:text-neon-green transition-colors hidden sm:block">
              <User size={24} />
            </button>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden hover:text-neon-green transition-colors">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-neon-purple/20 bg-dark-bg px-6 py-6 space-y-1 mt-4">
          {NAV_LINKS.map(link => (
            <Link key={link.label} to={link.path} onClick={() => setMobileOpen(false)}
              className="block py-3 px-4 text-sm font-bold uppercase tracking-widest hover:text-neon-green transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="bg-dark-bg pt-24 pb-12 px-6 border-t border-neon-purple/20">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-2 mb-8">
          <div className="bg-neon-purple p-1 rounded-sm rotate-12">
            <Zap size={24} className="text-white" fill="currentColor" />
          </div>
          <span className="text-2xl font-black tracking-tighter italic">JABB<span className="text-neon-green">STORE</span></span>
        </div>
        <p className="text-slate-400 max-w-sm mb-8 font-medium">
          L'intersection du high fashion et du streetwear. Rejoins la révolution et définis ton propre style.
        </p>
        <div className="flex gap-4">
          <a href={CONTACT.social.instagram} target="_blank" rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center border border-neon-purple/30 hover:border-neon-green transition-colors">
            <Instagram size={18} />
          </a>
          <a href={CONTACT.social.linkedin} target="_blank" rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center border border-neon-purple/30 hover:border-neon-green transition-colors">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${CONTACT.email}`}
            className="w-12 h-12 flex items-center justify-center border border-neon-purple/30 hover:border-neon-green transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div>
        <h6 className="text-white font-black uppercase mb-6 tracking-widest text-sm">Navigation</h6>
        <ul className="space-y-4 text-slate-400 font-medium">
          <li><Link to="/shop" className="hover:text-neon-green transition-colors">Shop All</Link></li>
          <li><Link to="/shop" className="hover:text-neon-green transition-colors">Latest Drops</Link></li>
          <li><Link to="/custom" className="hover:text-neon-green transition-colors">Custom Lab</Link></li>
          <li><Link to="/" className="hover:text-neon-green transition-colors">Lookbook</Link></li>
        </ul>
      </div>

      <div>
        <h6 className="text-white font-black uppercase mb-6 tracking-widest text-sm">Support</h6>
        <ul className="space-y-4 text-slate-400 font-medium">
          <li><a href="#" className="hover:text-neon-green transition-colors">Livraison</a></li>
          <li><a href="#" className="hover:text-neon-green transition-colors">Retours</a></li>
          <li><a href="#" className="hover:text-neon-green transition-colors">Contact</a></li>
          <li><a href="#" className="hover:text-neon-green transition-colors">Mentions Légales</a></li>
        </ul>
      </div>
    </div>

    <div className="max-w-7xl mx-auto pt-12 border-t border-neon-purple/10 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">&copy; 2025 JABB STORE // ALL RIGHTS RESERVED</p>
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
