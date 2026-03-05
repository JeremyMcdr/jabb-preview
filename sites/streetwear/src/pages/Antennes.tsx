import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Users } from 'lucide-react';
import { CONTACT } from '../constants';

interface Region {
  id: string;
  name: string;
  path: string;
  antenna?: {
    city: string;
    address: string;
    phone: string;
    team: number;
  };
}

const REGIONS: Region[] = [
  {
    id: "idf",
    name: "Île-de-France",
    path: "M283,188 L296,182 L308,186 L312,196 L306,208 L294,212 L282,206 L278,196Z",
    antenna: { city: "Courbevoie", address: "39 rue Louis Blanc, 92400", phone: CONTACT.phone, team: 8 }
  },
  {
    id: "hdf",
    name: "Hauts-de-France",
    path: "M260,100 L280,90 L310,88 L330,96 L336,120 L328,148 L312,160 L296,168 L280,172 L268,164 L256,148 L250,128Z",
    antenna: { city: "Lille", address: "15 rue Faidherbe, 59000 Lille", phone: "+33 3 20 00 00 00", team: 3 }
  },
  {
    id: "ges",
    name: "Grand Est",
    path: "M336,120 L360,108 L392,112 L412,128 L420,152 L416,180 L400,200 L376,208 L348,204 L328,196 L316,180 L312,160 L328,148Z",
  },
  {
    id: "bfc",
    name: "Bourgogne-Franche-Comté",
    path: "M316,208 L348,204 L376,208 L400,200 L404,224 L396,248 L380,260 L356,264 L332,256 L316,244 L308,228Z",
  },
  {
    id: "ara",
    name: "Auvergne-Rhône-Alpes",
    path: "M296,264 L332,256 L356,264 L380,260 L396,248 L412,260 L408,288 L396,312 L376,328 L348,332 L320,324 L300,308 L288,288Z",
    antenna: { city: "Lyon", address: "25 rue de la République, 69002 Lyon", phone: "+33 4 72 00 00 00", team: 4 }
  },
  {
    id: "paca",
    name: "Provence-Alpes-Côte d'Azur",
    path: "M348,332 L376,328 L396,312 L420,316 L440,328 L444,352 L432,368 L408,376 L380,372 L356,360 L344,344Z",
    antenna: { city: "Marseille", address: "8 cours Julien, 13006 Marseille", phone: "+33 4 91 00 00 00", team: 2 }
  },
  {
    id: "occ",
    name: "Occitanie",
    path: "M180,340 L212,332 L248,328 L280,332 L308,340 L344,344 L356,360 L348,380 L328,396 L296,404 L260,400 L228,392 L200,380 L184,364Z",
    antenna: { city: "Toulouse", address: "12 place du Capitole, 31000 Toulouse", phone: "+33 5 61 00 00 00", team: 3 }
  },
  {
    id: "naq",
    name: "Nouvelle-Aquitaine",
    path: "M128,244 L160,236 L196,240 L228,248 L260,260 L288,268 L296,288 L288,312 L280,332 L248,328 L212,332 L180,340 L160,328 L140,308 L124,284Z",
    antenna: { city: "Bordeaux", address: "5 allée de Tourny, 33000 Bordeaux", phone: "+33 5 56 00 00 00", team: 3 }
  },
  {
    id: "pdl",
    name: "Pays de la Loire",
    path: "M120,196 L152,188 L180,192 L208,200 L228,212 L236,232 L228,248 L196,240 L160,236 L128,244 L112,228Z",
  },
  {
    id: "bre",
    name: "Bretagne",
    path: "M68,164 L96,156 L120,160 L148,168 L164,180 L180,192 L152,188 L120,196 L100,192 L80,184Z",
  },
  {
    id: "nor",
    name: "Normandie",
    path: "M164,136 L196,128 L228,132 L256,140 L268,156 L264,172 L248,184 L228,188 L208,192 L180,192 L164,180 L148,168 L152,152Z",
  },
  {
    id: "cvl",
    name: "Centre-Val de Loire",
    path: "M208,200 L236,192 L264,188 L280,196 L296,208 L308,228 L296,248 L280,260 L260,260 L228,248 L236,232Z",
  },
  {
    id: "cor",
    name: "Corse",
    path: "M460,368 L468,360 L476,368 L480,392 L476,416 L468,428 L460,416 L456,392Z",
  },
];

const FranceMap = ({ activeRegion, onRegionHover, onRegionClick }: {
  activeRegion: string | null;
  onRegionHover: (id: string | null) => void;
  onRegionClick: (id: string) => void;
}) => (
  <svg viewBox="50 70 460 380" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    {REGIONS.map(region => {
      const isActive = activeRegion === region.id;
      const hasAntenna = !!region.antenna;
      return (
        <g key={region.id}>
          <path
            d={region.path}
            className={`transition-all duration-300 cursor-pointer stroke-2 ${
              isActive
                ? 'fill-jabb-blue stroke-jabb-accent'
                : hasAntenna
                  ? 'fill-jabb-blue/30 stroke-jabb-blue/60 hover:fill-jabb-blue/50'
                  : 'fill-slate-200 stroke-slate-300 hover:fill-slate-300'
            }`}
            onMouseEnter={() => onRegionHover(region.id)}
            onMouseLeave={() => onRegionHover(null)}
            onClick={() => onRegionClick(region.id)}
          />
          {hasAntenna && (
            <circle
              cx={region.path.match(/M(\d+)/)?.[1] ? parseInt(region.path.match(/M(\d+),(\d+)/)?.[1] || '0') + 15 : 0}
              cy={region.path.match(/M\d+,(\d+)/)?.[1] ? parseInt(region.path.match(/M(\d+),(\d+)/)?.[2] || '0') + 15 : 0}
              r="6"
              className={`transition-all duration-300 ${isActive ? 'fill-jabb-accent' : 'fill-jabb-blue animate-pulse'}`}
            />
          )}
        </g>
      );
    })}
  </svg>
);

export const Antennes = () => {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const activeData = REGIONS.find(r => r.id === (selectedRegion || activeRegion));
  const antennas = REGIONS.filter(r => r.antenna);

  const handleClick = (id: string) => {
    setSelectedRegion(selectedRegion === id ? null : id);
  };

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-jabb-blue font-bold uppercase tracking-widest text-sm mb-4 block">Réseau National</span>
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9] mb-6">
          Nos <span className="text-jabb-blue">Antennes</span>.
        </h1>
        <p className="text-xl text-slate-500 font-medium leading-relaxed">
          JABB est présent partout en France grâce à ses antennes régionales. Trouvez l'équipe la plus proche de vous.
        </p>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-jabb-blue/5 border border-jabb-blue/10 rounded-2xl p-6 text-center">
          <p className="text-3xl font-bold text-jabb-blue">{antennas.length}</p>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">Antennes</p>
        </div>
        <div className="bg-jabb-accent/10 border border-jabb-accent/20 rounded-2xl p-6 text-center">
          <p className="text-3xl font-bold text-slate-900">{antennas.reduce((sum, a) => sum + (a.antenna?.team || 0), 0)}</p>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">Collaborateurs</p>
        </div>
        <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 text-center">
          <p className="text-3xl font-bold text-slate-900">13</p>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">Régions couvertes</p>
        </div>
        <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 text-center">
          <p className="text-3xl font-bold text-slate-900">&lt;24h</p>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">Temps de réponse</p>
        </div>
      </div>

      {/* Map + Details */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        {/* Map */}
        <div className="lg:col-span-3 bg-white rounded-3xl border border-slate-200 p-8 relative">
          <FranceMap
            activeRegion={selectedRegion || activeRegion}
            onRegionHover={setActiveRegion}
            onRegionClick={handleClick}
          />

          {/* Tooltip */}
          <AnimatePresence>
            {activeData && !selectedRegion && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute top-8 right-8 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-xl text-sm font-bold"
              >
                {activeData.name}
                {activeData.antenna && (
                  <span className="ml-2 text-jabb-accent text-xs">ANTENNE</span>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center gap-6 mt-6 pt-6 border-t border-slate-100 text-xs font-bold uppercase tracking-widest text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-jabb-blue/30 border border-jabb-blue/60" />
              Antenne JABB
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-slate-200 border border-slate-300" />
              Zone desservie
            </div>
          </div>
        </div>

        {/* Antenna list */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-2xl font-bold uppercase tracking-tight mb-6">Nos implantations</h2>
          {antennas.map(region => (
            <motion.button
              key={region.id}
              onClick={() => handleClick(region.id)}
              whileHover={{ x: 4 }}
              className={`w-full text-left p-6 rounded-2xl border-2 transition-all ${
                selectedRegion === region.id
                  ? 'bg-jabb-blue text-white border-jabb-blue shadow-lg shadow-jabb-blue/20'
                  : 'bg-white border-slate-200 hover:border-jabb-blue/30'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${
                    selectedRegion === region.id ? 'text-jabb-accent' : 'text-jabb-blue'
                  }`}>{region.name}</p>
                  <p className="font-bold text-lg">{region.antenna!.city}</p>
                </div>
                <MapPin size={20} className={selectedRegion === region.id ? 'text-jabb-accent' : 'text-jabb-blue'} />
              </div>

              <AnimatePresence>
                {selectedRegion === region.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 mt-4 border-t border-white/20 space-y-3 text-sm">
                      <p className="flex items-center gap-2 opacity-80">
                        <MapPin size={14} /> {region.antenna!.address}
                      </p>
                      <p className="flex items-center gap-2 opacity-80">
                        <Phone size={14} /> {region.antenna!.phone}
                      </p>
                      <p className="flex items-center gap-2 opacity-80">
                        <Users size={14} /> {region.antenna!.team} collaborateurs
                      </p>
                      <a href={`tel:${region.antenna!.phone}`}
                        className="inline-flex mt-2 bg-jabb-accent text-slate-900 px-6 py-2.5 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all">
                        Contacter
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-900 rounded-3xl p-12 md:p-20 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-jabb-blue/10 blur-[120px] rounded-full" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
            Vous ne trouvez pas votre région ?
          </h2>
          <p className="text-lg text-slate-400 font-medium mb-10 max-w-xl mx-auto">
            Pas de panique ! Nous livrons partout en France et nos équipes se déplacent pour vos projets. Contactez-nous directement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${CONTACT.phone}`} className="inline-flex bg-jabb-accent text-slate-900 px-10 py-5 rounded-xl font-black uppercase tracking-widest hover:bg-white transition-all items-center gap-3 justify-center">
              <Phone size={18} /> {CONTACT.phone}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="inline-flex bg-white/10 text-white border border-white/20 px-10 py-5 rounded-xl font-black uppercase tracking-widest hover:bg-white/20 transition-all items-center gap-3 justify-center">
              <Mail size={18} /> Nous Écrire
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
