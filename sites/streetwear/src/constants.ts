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
    image: `${import.meta.env.BASE_URL}products/T-shirtBio190IChomme-K3032IC.avif`,
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
    image: `${import.meta.env.BASE_URL}products/Sweat-shirtcapuchehomme-K476.avif`,
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
    image: `${import.meta.env.BASE_URL}products/Casquettes-de-baseball-MO1447-85.jpg`,
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
    image: `${import.meta.env.BASE_URL}products/HILL-todbag.jpg`,
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
