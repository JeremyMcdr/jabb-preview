import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, X } from 'lucide-react';
import { useQuoteModal } from '../components/Layout';

interface Product {
  id: number;
  name: string;
  ref: string;
  category: string;
  link: string;
}

const CATEGORIES = [
  "Voir tous les produits",
  "T-shirts",
  "Sweats",
  "Polos",
  "Casquettes",
  "Bonnets",
  "Bobs",
  "Chemises",
  "Vestes",
  "Polaires",
  "Doudounes",
  "Softshells",
  "Sport",
] as const;

const PRODUCTS: Product[] = [
  // T-SHIRTS
  { id: 1, name: "Men's short-sleeve t-shirt", ref: "CA6424", category: "T-shirts", link: "https://www.roly.eu/model_CA6424" },
  { id: 2, name: "SOL'S T-shirt", ref: "S11380", category: "T-shirts", link: "https://www.midocean.com/france/fr/eur/vetements-et-habillement/marques/sol-s/s11380-fy-xxl-zid10247672" },
  { id: 3, name: "T-shirt homme #E190", ref: "CGTU03T", category: "T-shirts", link: "https://www.toptex.fr/cgtu03t-t-shirt-homme-e190.html" },
  { id: 4, name: "T-shirt Bio190 IC homme", ref: "K3032IC", category: "T-shirts", link: "https://www.toptex.fr/k3032ic-t-shirt-bio190-ic-homme.html" },
  { id: 5, name: "Stanley/Stella Creator 2.0", ref: "STTU169", category: "T-shirts", link: "https://stanleystella.com/fr-eu/creator-2-0-sttu169#color=1357" },

  // SWEATS
  { id: 6, name: "Sweat-shirt capuche homme", ref: "K476", category: "Sweats", link: "https://www.toptex.fr/k476-sweat-shirt-capuche-homme.html" },
  { id: 7, name: "College Hoodie", ref: "75117", category: "Sweats", link: "https://www.imbretex.fr/produits/75117" },
  { id: 8, name: "Graduate Heavyweight Hoodie", ref: "75120", category: "Sweats", link: "https://www.imbretex.fr/produits/75120" },
  { id: 9, name: "Heavy Hoody", ref: "75141", category: "Sweats", link: "https://www.imbretex.fr/produits/75141" },
  { id: 10, name: "Stanley/Stella Drummer 2.0", ref: "STSU168", category: "Sweats", link: "https://stanleystella.com/fr-eu/drummer-2-0-stsu168#color=1358" },
  { id: 11, name: "Stanley/Stella Cruiser 2.0", ref: "STSU177", category: "Sweats", link: "https://stanleystella.com/fr-eu/cruiser-2-0-stsu177#color=1357" },
  { id: 12, name: "Sweat-shirt col rond unisexe", ref: "K474", category: "Sweats", link: "https://www.toptex.fr/k474-sweat-shirt-col-rond-unisexe.html" },
  { id: 13, name: "Awdis Sweat", ref: "75049", category: "Sweats", link: "https://www.imbretex.fr/produits/75049" },
  { id: 14, name: "Sweat écoresponsable col rond unisexe", ref: "NS400", category: "Sweats", link: "https://www.toptex.fr/ns400-sweat-shirt-ecoresponsable-a-col-rond-unisexe.html" },
  { id: 15, name: "Stanley/Stella Changer 2.0", ref: "STSU178", category: "Sweats", link: "https://stanleystella.com/fr-eu/changer-2-0-stsu178#color=1361" },
  { id: 16, name: "Sweat-shirt col zippé homme", ref: "K478", category: "Sweats", link: "https://www.toptex.fr/k478-sweat-shirt-col-zippe-homme.html" },
  { id: 17, name: "Sweat-shirt col zippé homme", ref: "K487", category: "Sweats", link: "https://www.toptex.fr/k487-sweat-shirt-col-zippe-homme.html" },
  { id: 18, name: "Premium Zip Neck Sweat", ref: "75179", category: "Sweats", link: "https://www.imbretex.fr/produits/75179" },
  { id: 19, name: "Stanley/Stella Trucker 2.0", ref: "STSU204", category: "Sweats", link: "https://stanleystella.com/fr-eu/trucker-2-0-stsu204#color=168" },

  // POLOS
  { id: 20, name: "Austral", ref: "PO6632", category: "Polos", link: "https://www.roly.eu/model_PO6632" },
  { id: 21, name: "Polo casual Star", ref: "PO6638", category: "Polos", link: "https://www.roly.eu/model_PO6638" },
  { id: 22, name: "Polo piqué homme", ref: "IB295", category: "Polos", link: "https://www.toptex.fr/ib295-polo-pique-homme.html" },
  { id: 23, name: "Polo piqué manches courtes homme", ref: "K241", category: "Polos", link: "https://www.toptex.fr/k241-polo-pique-manches-courtes-homme.html" },
  { id: 24, name: "Polo piqué Bio180 homme", ref: "K2025", category: "Polos", link: "https://www.toptex.fr/k2025-polo-pique-bio180-homme.html" },
  { id: 25, name: "Polo écoresponsable maille piquée", ref: "NS207", category: "Polos", link: "https://www.toptex.fr/ns207-polo-ecoresponsable-maille-piquee-homme.html" },
  { id: 26, name: "Stanley/Stella Stanley Coaster", ref: "STPM224", category: "Polos", link: "https://stanleystella.com/fr-eu/stanley-coaster-stpm224#color=1360" },

  // CASQUETTES
  { id: 27, name: "Uranus", ref: "GO7041", category: "Casquettes", link: "https://stamina-shop.fr/model_GO7041" },
  { id: 28, name: "Eris", ref: "GO7019", category: "Casquettes", link: "https://stamina-shop.fr/model_GO7019" },
  { id: 29, name: "Barny", ref: "GO1283", category: "Casquettes", link: "https://stamina-shop.fr/model_GO1283" },
  { id: 30, name: "Casquette baseball 5 panneaux", ref: "MO1447-85", category: "Casquettes", link: "https://www.midocean.com/france/fr/eur/chapeaux-et-accessoires/casquettes-et-chapeaux/casquettes-de-baseball-a-5-panneaux/mo1447-85-zid10238008" },
  { id: 31, name: "Casquette Pro-Style coton brossé 6 panneaux", ref: "B65", category: "Casquettes", link: "https://www.toptex.fr/b65-casquette-homme-pro-style-en-coton-brosse-6-panneaux.html" },
  { id: 32, name: "Casquette en coton bio 6 panneaux", ref: "KP233", category: "Casquettes", link: "https://www.toptex.fr/kp233-casquette-en-coton-bio-6-panneaux.html" },
  { id: 33, name: "Casquette écoresponsable 5 panneaux", ref: "NS037", category: "Casquettes", link: "https://www.toptex.fr/ns037-casquette-ecoresponsable-5-panneaux-unisexe.html" },
  { id: 34, name: "Béret basque", ref: "KP604", category: "Casquettes", link: "https://www.toptex.fr/kp604-beret-basque.html" },

  // BONNETS
  { id: 35, name: "Planet", ref: "GR9009", category: "Bonnets", link: "https://stamina-shop.fr/model_GR9009" },
  { id: 36, name: "Bonnet Original à revers", ref: "B45", category: "Bonnets", link: "https://www.toptex.fr/b45-bonnet-original-a-revers.html" },
  { id: 37, name: "Bonnet classique", ref: "MO2705-15", category: "Bonnets", link: "https://www.midocean.com/france/fr/eur/chapeaux-et-accessoires/bonnets/bonnets/mo2705-15-zid10244435" },
  { id: 38, name: "Bonnet écoresponsable unisexe", ref: "NS014", category: "Bonnets", link: "https://www.toptex.fr/ns014-bonnet-ecoresponsable-unisexe.html" },

  // BOBS
  { id: 39, name: "Bob promotionnel Bobin", ref: "GR6999", category: "Bobs", link: "https://stamina-shop.fr/model_GR6999" },
  { id: 40, name: "Bob réversible Frosty", ref: "GR6998", category: "Bobs", link: "https://stamina-shop.fr/model_GR6998" },
  { id: 41, name: "Lagos", ref: "GR1814", category: "Bobs", link: "https://stamina-shop.fr/model_GR1814" },
  { id: 42, name: "Bob style bucket", ref: "KP616", category: "Bobs", link: "https://www.toptex.fr/kp616-bob-style-bucket.html" },
  { id: 43, name: "Bob écoresponsable velours côtelé", ref: "NS019", category: "Bobs", link: "https://www.toptex.fr/ns019-bob-ecoresponsable-en-velours-cotele-unisexe.html" },
  { id: 44, name: "Outback Hat", ref: "74261", category: "Bobs", link: "https://www.imbretex.fr/produits/74261" },

  // CHEMISES
  { id: 45, name: "Chemise popeline polycoton", ref: "K545", category: "Chemises", link: "https://www.toptex.fr/k545-chemise-popeline-polycoton-entretien-facile-homme.html" },
  { id: 46, name: "Chemise manches longues sans repassage", ref: "K537", category: "Chemises", link: "https://www.toptex.fr/k537-chemise-manches-longues-sans-repassage.html" },
  { id: 47, name: "Chemise Oxford manches longues", ref: "K533", category: "Chemises", link: "https://www.toptex.fr/k533-chemise-oxford-manches-longues.html" },

  // VESTES
  { id: 48, name: "Blouson Harrington", ref: "K623", category: "Vestes", link: "https://www.toptex.fr/k623-blouson-harrington.html" },
  { id: 49, name: "Bomber Jacket", ref: "73252", category: "Vestes", link: "https://www.imbretex.fr/produits/73252" },
  { id: 50, name: "Nylon Bomber Jacket", ref: "73254", category: "Vestes", link: "https://www.imbretex.fr/produits/73254" },
  { id: 51, name: "Island", ref: "CB5200", category: "Vestes", link: "https://www.roly.eu/model_CB5200" },
  { id: 52, name: "Sitka", ref: "CB5201", category: "Vestes", link: "https://www.roly.eu/model_CB5201" },

  // POLAIRES
  { id: 53, name: "Luciane", ref: "SM1195", category: "Polaires", link: "https://www.roly.eu/model_SM1195" },
  { id: 54, name: "Himalaya", ref: "SM1095", category: "Polaires", link: "https://www.roly.eu/model_SM1095" },
  { id: 55, name: "Bellagio", ref: "RA1099", category: "Polaires", link: "https://www.roly.eu/collection_outlet/model_RA1099" },
  { id: 56, name: "Polaire col zippé Polartherm", ref: "R33", category: "Polaires", link: "https://www.toptex.fr/r33-polaire-col-zippe-polarthermtm.html" },
  { id: 57, name: "Veste polaire ajustable", ref: "K940", category: "Polaires", link: "https://www.toptex.fr/k940-veste-polaire-ajustable-a-poignets-elastiques.html" },
  { id: 58, name: "Polaire sherpa recyclée", ref: "FR854", category: "Polaires", link: "https://www.toptex.fr/fr854-polaire-sherpa-recyclee.html" },

  // DOUDOUNES
  { id: 59, name: "Gilet Oslo", ref: "RA5092", category: "Doudounes", link: "https://www.roly.eu/model_RA5092" },
  { id: 60, name: "Finland", ref: "RA5094", category: "Doudounes", link: "https://www.roly.eu/model_RA5094" },
  { id: 61, name: "Norway", ref: "RA5090", category: "Doudounes", link: "https://www.roly.eu/model_RA5090" },
  { id: 62, name: "Doudoune légère sans manches", ref: "K6113", category: "Doudounes", link: "https://www.toptex.fr/k6113-doudoune-legere-sans-manches-homme.html" },
  { id: 63, name: "Doudoune légère écoresponsable", ref: "NS6000", category: "Doudounes", link: "https://www.toptex.fr/ns6000-doudoune-legere-ecoresponsable-homme.html" },

  // SOFTSHELLS
  { id: 64, name: "Nebraska", ref: "SS6436", category: "Softshells", link: "https://www.roly.eu/model_SS6436" },
  { id: 65, name: "SOL'S Softshell", ref: "S01195", category: "Softshells", link: "https://www.midocean.com/france/fr/eur/vetements-et-habillement/marques/sol-s/s01195-ar-xxl-zid10229035" },
  { id: 66, name: "Veste softshell 2 couches", ref: "IB410", category: "Softshells", link: "https://www.toptex.fr/ib410-veste-softshell-2-couches-homme.html" },
  { id: 67, name: "Parka softshell doublée capuche", ref: "K650", category: "Softshells", link: "https://www.toptex.fr/k650-parka-softshell-doublee-capuche-homme.html" },

  // SPORT
  { id: 68, name: "T-shirt sport Mercury", ref: "IB300", category: "Sport", link: "https://www.toptex.fr/ib300-t-shirt-sport-homme-mercury.html" },
  { id: 69, name: "T-shirt sport Bahrain", ref: "CA0407", category: "Sport", link: "https://www.roly.eu/model_CA0407" },
  { id: 70, name: "T-shirt sport Roly", ref: "CA0427", category: "Sport", link: "https://www.roly.eu/model_CA0427" },
];

// Color palette for category-based card accents
const CAT_COLORS: Record<string, string> = {
  "T-shirts": "bg-blue-500",
  "Sweats": "bg-indigo-500",
  "Polos": "bg-sky-500",
  "Casquettes": "bg-amber-500",
  "Bonnets": "bg-orange-500",
  "Bobs": "bg-yellow-500",
  "Chemises": "bg-slate-500",
  "Vestes": "bg-emerald-500",
  "Polaires": "bg-teal-500",
  "Doudounes": "bg-violet-500",
  "Softshells": "bg-cyan-500",
  "Sport": "bg-red-500",
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { open: openQuote } = useQuoteModal();
  const catColor = CAT_COLORS[product.category] || "bg-jabb-blue";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-jabb-blue/30 transition-all duration-300"
    >
      {/* Color bar */}
      <div className={`h-1.5 ${catColor}`} />

      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{product.category}</p>
            <h3 className="font-bold text-lg leading-tight truncate">{product.name}</h3>
          </div>
          <span className="text-xs font-mono font-bold text-jabb-blue bg-jabb-blue/10 px-2.5 py-1 rounded-lg shrink-0">
            {product.ref}
          </span>
        </div>

        <div className="flex items-center gap-2 mt-4">
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-slate-100 text-slate-700 px-4 py-3 rounded-xl text-sm font-bold hover:bg-slate-200 transition-colors"
          >
            <ExternalLink size={14} /> Fiche produit
          </a>
          <button
            onClick={openQuote}
            className="flex-1 flex items-center justify-center gap-2 bg-jabb-blue text-white px-4 py-3 rounded-xl text-sm font-bold hover:bg-jabb-blue/90 transition-colors"
          >
            Devis Express
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export const Shop = () => {
  const [filter, setFilter] = useState<string>("Voir tous les produits");
  const { open: openQuote } = useQuoteModal();

  const filtered = filter === "Voir tous les produits"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === filter);

  const count = filtered.length;

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <span className="text-jabb-blue font-bold uppercase tracking-widest text-sm">Textile</span>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mt-2">Nos Incontournables</h1>
          <p className="text-slate-500 font-medium mt-4 max-w-xl">
            Toutes nos pièces sont personnalisables — <span className="text-jabb-blue font-bold">Broderie, Sérigraphie, Transfert, Sublimation et Tampographie</span>.
          </p>
        </div>
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest shrink-0">
          {count} produit{count > 1 ? 's' : ''}
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-12 sticky top-20 z-30 bg-white/80 backdrop-blur-lg py-4 -mx-6 px-6 border-b border-slate-100">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2.5 rounded-full font-bold text-sm uppercase transition-all whitespace-nowrap ${
              filter === cat
                ? 'bg-jabb-blue text-white shadow-lg shadow-jabb-blue/20'
                : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <AnimatePresence mode="popLayout">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* CTA Bottom */}
      <div className="mt-20 bg-slate-900 rounded-3xl p-12 md:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">Vous ne trouvez pas votre bonheur ?</h2>
          <p className="text-slate-400 font-medium">
            Ceci est un petit aperçu de notre catalogue complet. Nous avons accès à plus de <span className="text-jabb-accent font-bold">300 000 références</span>. Envoyez-nous une demande pour un devis sur mesure.
          </p>
        </div>
        <button
          onClick={openQuote}
          className="bg-jabb-blue text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-jabb-blue/25 whitespace-nowrap flex items-center gap-2"
        >
          Devis Express <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};
