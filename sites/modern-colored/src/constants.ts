/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: number;
  name: string;
  price?: string;
  category: string;
  image: string;
  tag?: string;
  tagColor?: string;
  description?: string;
}

export const CATALOGUE: Product[] = [
  {
    id: 1,
    name: "T-SHIRTS PERSONNALISÉS",
    category: "Textile",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    tag: "POPULAIRE",
    tagColor: "bg-jabb-blue",
    description: "Coton bio, coupe moderne, marquage haute qualité. Idéal pour vos événements ou vos équipes."
  },
  {
    id: 2,
    name: "HOODIES PREMIUM",
    category: "Textile",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
    tag: "TOP QUALITÉ",
    tagColor: "bg-jabb-pink",
    description: "Grammage lourd, intérieur brossé. Le confort ultime pour votre marque."
  },
  {
    id: 3,
    name: "TOTE BAGS ÉCO",
    category: "Objets",
    image: "https://images.unsplash.com/photo-1544816153-12ad5d714b21?q=80&w=800&auto=format&fit=crop",
    description: "L'accessoire indispensable et durable pour vos salons et cadeaux clients."
  },
  {
    id: 4,
    name: "GOURDES ISOTHERMES",
    category: "Goodies",
    image: "https://images.unsplash.com/photo-1602143393494-721d0026210d?q=80&w=800&auto=format&fit=crop",
    description: "Acier inoxydable, garde le chaud 12h et le froid 24h. Personnalisation laser."
  },
  {
    id: 5,
    name: "CASQUETTES STREETWEAR",
    category: "Textile",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    description: "Broderie 3D, styles variés. Pour un look pro et décontracté."
  },
  {
    id: 6,
    name: "CARNETS DE NOTES",
    category: "Goodies",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=800&auto=format&fit=crop",
    description: "Papier recyclé, couverture rigide. Un classique indémodable."
  }
];

export const STATS = [
  { label: "Références Produits", value: "200K" },
  { label: "Techniques de marquage", value: "5" },
  { label: "Clients depuis 2019", value: "2 000" },
  { label: "Ambassadeurs", value: "50" },
  { label: "Arbres plantés depuis 2022", value: "650" },
  { label: "Satisfaction client", value: "97%" }
];

export const TESTIMONIALS = [
  {
    name: "Sophie K.",
    role: "Responsable Communication",
    text: "J'ai particulièrement apprécié la réactivité des équipes de JABB. Ils travaillent jour et nuit pour satisfaire leurs clients, et cela même lors de situations compliquées comme le COVID."
  },
  {
    name: "Didier R.",
    role: "Service Achats",
    text: "JABB est devenu un vrai partenaire pour nous. Leur fiabilité est exemplaire, leurs catalogues très étendus et leurs tarifs sont compétitifs."
  },
  {
    name: "Marie-Charlotte F.",
    role: "Directrice RH",
    text: "Nous avions des contraintes de timing très serrées pour nos goodies de séminaire. L'équipe JABB s'est adaptée avec une efficacité remarquable. Résultat impeccable."
  },
  {
    name: "Karim D.",
    role: "Dirigeant",
    text: "Ce qui m'a marqué, c'est leur réactivité face à la complexité de nos produits. JABB a su répondre à nos exigences avec professionnalisme et créativité."
  }
];

export const CLIENT_LOGOS = [
  "Canal+",
  "ESSEC",
  "Lactalis",
  "France Football",
  "ESCP",
  "CentraleSupélec",
  "Sciences Po",
  "L'Oréal",
  "Sorbonne Université"
];

export const CONTACT = {
  email: "service.contact@jabb.fr",
  phone: "+33 1 84 80 14 49",
  address: "39 rue Louis Blanc, 92400 Courbevoie",
  social: {
    instagram: "https://www.instagram.com/jabb.officiel/",
    linkedin: "https://www.linkedin.com/company/jabb/",
    facebook: "https://www.facebook.com/jabb.store/"
  }
};
