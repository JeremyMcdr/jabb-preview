export interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  tag?: string;
  tagStyle?: string;
  rotation?: string;
  description: string;
  ref?: string;
  link?: string;
}

export const CATALOGUE: Product[] = [
  {
    id: 1,
    name: "T-shirt Bio190 IC",
    price: "Dès 8€ HT",
    category: "Textile",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtMOWqvFYt-rkjHT8DVQjJsFAiDjSKv9Hl28Hjf3pxs94wmX4dlNRYm81ckMux8N3tuBwxLwRMtV_MTFSDz1PSjCrgiXVg7SHWIuAyBe4kbCmNfjnHfnbQzmONODuMCb6MV5nBVssgi4bYdgDUmNgpeVGhxqdBYylHtoNwFPf99Vpvg-HNR5THohpWkiY9fM7jfVa-RHVyjzmyF0uZAhHDPQ9G-BdExoQnzd0G57FVkaAQKdVsoGjYdWLO8HdheKLOa7uancZj5Gg",
    tagStyle: "bg-jabb-accent text-slate-900",
    rotation: "rotate-[-12deg]",
    description: "Coton bio 190g/m², coupe moderne, marquage personnalisé.",
    ref: "K3032IC",
    link: "https://www.toptex.fr/k3032ic-t-shirt-bio190-ic-homme.html"
  },
  {
    id: 2,
    name: "Sweat Capuche",
    price: "Dès 22€ HT",
    category: "Textile",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWYTsrZYxN_O7LIQSpPLJR5PJMr9PdUGUs5-WYChk43gcyQ3Kz8uvvmDQ7FoAnWFgROow77Q0iEHptG5Yf-zFR3nBAeMr51rqA-dwbd-vM4tg_kCzJJR2cZ9wvIep93ckspzMEe7Mv5I0utUxXpZ8URBcm43O85w4F62EZQvopgZBBgd7UPVDrV9KxGVVT7eKh1yvowvqIp-jmWKsppoGBuqtkMgWTKmmlGR07ECqXFEEr73jYyWisYeQCnEioj52ZhBIEiy3dQJc",
    tagStyle: "bg-jabb-blue text-white",
    rotation: "rotate-[8deg]",
    description: "Sweat capuche premium, intérieur brossé, broderie ou sérigraphie.",
    ref: "K476",
    link: "https://www.toptex.fr/k476-sweat-shirt-capuche-homme.html"
  },
  {
    id: 3,
    name: "Casquette 5 panneaux",
    price: "Dès 5€ HT",
    category: "Goodies",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQz-3KmfwHJddC28Aoe9dsBnRJbF6IovQwqiHmhB9DYAVeUsre_bABLnKFoalmbRyTVFrPLClUS1JkPvqVT5cEs3ztxjwpx0u6CuVLypVVW5tKOzeJA46TeauZ8J39XrZIdlWOVb0JFUigMkl5QnLUcNrNxgFJ1We_mGUF-epFK23Ysv1lkqDYKBB4ubpPZ1nwyB_oX1BUL3kPGzOct9U2tp4JPKjgUq5Sk868CQFqoFMGKDMTmsUMy5TeIt0Tk9z0by-QL10UYP4",
    tagStyle: "bg-jabb-accent text-slate-900",
    rotation: "rotate-[-12deg]",
    description: "Casquette baseball 5 panneaux, broderie logo personnalisée.",
    ref: "BUZZ",
    link: "https://www.midocean.com/france/fr/eur/chapeaux-et-accessoires/casquettes-et-chapeaux/casquettes-de-baseball-a-5-panneaux/mo1447-85-zid10238008"
  },
  {
    id: 4,
    name: "Tote Bag promotionnel",
    price: "Dès 3€ HT",
    category: "Goodies",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBov-rTHilw41OP2yhcV0zIsA7gzouxcaQ3yO74jXfvX_STbthbrqjWT4wlyMPuj7a4BVDujQcmYW-SlSXFSnX19nMJ12DBryqKrSeH_8Hmp6QRu0zKc9KTQ0svg8W9LbdeEf3OuZpXOgN9VJw4m_8Lm3cJ50U-dAr_l_gfKX9fPk23arlz1aTmjryVk99Y-4TxqDkxk2z65HCTVh97d6J8CmVGqbO2mzVy06kOoJbs0ECMRd54TsyjALpgV-s8Mat0pDWnUbID68I",
    tagStyle: "bg-jabb-blue text-white",
    rotation: "rotate-[8deg]",
    description: "Sac promotionnel résistant, sérigraphie HD grande surface.",
    ref: "HILL",
    link: "https://stamina-shop.fr/model_BO7601"
  }
];

export const STATS = [
  { label: "Références", value: "300K+" },
  { label: "Techniques de marquage", value: "10" },
  { label: "Clients", value: "5 000+" },
  { label: "Satisfaction", value: "97%" }
];

export const TESTIMONIALS = [
  {
    name: "Sophie K.",
    role: "Responsable Communication",
    text: "J'ai particulièrement apprécié la réactivité des équipes de JABB. Ils travaillent jour et nuit pour satisfaire leurs clients.",
    rating: 5
  },
  {
    name: "Didier R.",
    role: "Service Achats",
    text: "JABB est devenu un vrai partenaire pour nous. Leur fiabilité est exemplaire et leurs tarifs sont compétitifs.",
    rating: 5
  },
  {
    name: "Marie-Charlotte F.",
    role: "Directrice RH",
    text: "L'équipe JABB s'est adaptée avec une efficacité remarquable à nos contraintes de timing. Résultat impeccable.",
    rating: 5
  },
  {
    name: "Karim D.",
    role: "Dirigeant",
    text: "Ce qui m'a marqué, c'est leur réactivité face à la complexité de nos produits. Professionnalisme et créativité.",
    rating: 5
  },
  {
    name: "Thomas L.",
    role: "Président BDE",
    text: "On a commandé 500 sweats pour notre asso en urgence. Devis reçu en 1h, livraison en 6 jours. Qualité parfaite, on recommande !",
    rating: 5
  },
  {
    name: "Nadia B.",
    role: "Responsable Marketing",
    text: "Troisième commande chez JABB, toujours aussi satisfaits. Le suivi client est exemplaire et les finitions sont impeccables.",
    rating: 5
  }
];

export const CLIENT_LOGOS = [
  "Canal+", "ESSEC", "ESCP", "Lactalis", "France Football",
  "Sciences Po", "Centrale Supélec", "L'Oréal", "Sorbonne"
];

export const CONTACT = {
  email: "service.contact@jabb.fr",
  phone: "+33 1 84 80 14 49",
  whatsapp: "+33 6 34 49 12 11",
  address: "39 rue Louis Blanc, 92400 Courbevoie",
  social: {
    instagram: "https://www.instagram.com/jabb.officiel/",
    linkedin: "https://www.linkedin.com/company/jabb/",
    facebook: "https://www.facebook.com/jabb.store/"
  }
};
