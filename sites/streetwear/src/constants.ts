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
}

export const CATALOGUE: Product[] = [
  {
    id: 1,
    name: "T-shirt Graphic",
    price: "Dès 15€",
    category: "T-shirts",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtMOWqvFYt-rkjHT8DVQjJsFAiDjSKv9Hl28Hjf3pxs94wmX4dlNRYm81ckMux8N3tuBwxLwRMtV_MTFSDz1PSjCrgiXVg7SHWIuAyBe4kbCmNfjnHfnbQzmONODuMCb6MV5nBVssgi4bYdgDUmNgpeVGhxqdBYylHtoNwFPf99Vpvg-HNR5THohpWkiY9fM7jfVa-RHVyjzmyF0uZAhHDPQ9G-BdExoQnzd0G57FVkaAQKdVsoGjYdWLO8HdheKLOa7uancZj5Gg",
    tagStyle: "bg-jabb-accent text-slate-900",
    rotation: "rotate-[-12deg]",
    description: "Coton bio, coupe moderne, sérigraphie HD."
  },
  {
    id: 2,
    name: "Hoodie Oversize",
    price: "Dès 45€",
    category: "Hoodies",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWYTsrZYxN_O7LIQSpPLJR5PJMr9PdUGUs5-WYChk43gcyQ3Kz8uvvmDQ7FoAnWFgROow77Q0iEHptG5Yf-zFR3nBAeMr51rqA-dwbd-vM4tg_kCzJJR2cZ9wvIep93ckspzMEe7Mv5I0utUxXpZ8URBcm43O85w4F62EZQvopgZBBgd7UPVDrV9KxGVVT7eKh1yvowvqIp-jmWKsppoGBuqtkMgWTKmmlGR07ECqXFEEr73jYyWisYeQCnEioj52ZhBIEiy3dQJc",
    tagStyle: "bg-jabb-blue text-white",
    rotation: "rotate-[8deg]",
    description: "Grammage lourd, intérieur brossé, broderie premium."
  },
  {
    id: 3,
    name: "Casquette Brodée",
    price: "Dès 25€",
    category: "Accessoires",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQz-3KmfwHJddC28Aoe9dsBnRJbF6IovQwqiHmhB9DYAVeUsre_bABLnKFoalmbRyTVFrPLClUS1JkPvqVT5cEs3ztxjwpx0u6CuVLypVVW5tKOzeJA46TeauZ8J39XrZIdlWOVb0JFUigMkl5QnLUcNrNxgFJ1We_mGUF-epFK23Ysv1lkqDYKBB4ubpPZ1nwyB_oX1BUL3kPGzOct9U2tp4JPKjgUq5Sk868CQFqoFMGKDMTmsUMy5TeIt0Tk9z0by-QL10UYP4",
    tagStyle: "bg-jabb-accent text-slate-900",
    rotation: "rotate-[-12deg]",
    description: "Broderie 3D artisanale, styles variés."
  },
  {
    id: 4,
    name: "Veste Custom",
    price: "Dès 89€",
    category: "Hoodies",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBov-rTHilw41OP2yhcV0zIsA7gzouxcaQ3yO74jXfvX_STbthbrqjWT4wlyMPuj7a4BVDujQcmYW-SlSXFSnX19nMJ12DBryqKrSeH_8Hmp6QRu0zKc9KTQ0svg8W9LbdeEf3OuZpXOgN9VJw4m_8Lm3cJ50U-dAr_l_gfKX9fPk23arlz1aTmjryVk99Y-4TxqDkxk2z65HCTVh97d6J8CmVGqbO2mzVy06kOoJbs0ECMRd54TsyjALpgV-s8Mat0pDWnUbID68I",
    tagStyle: "bg-jabb-blue text-white",
    rotation: "rotate-[8deg]",
    description: "Denim custom avec patchs et broderies."
  },
  {
    id: 5,
    name: "Polo Brodé",
    price: "Dès 30€",
    category: "T-shirts",
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=800&auto=format&fit=crop",
    tagStyle: "bg-jabb-accent text-slate-900",
    rotation: "rotate-[-8deg]",
    description: "Polo premium avec broderie logo personnalisée."
  },
  {
    id: 6,
    name: "Tote Bag Custom",
    price: "Dès 12€",
    category: "Accessoires",
    image: "https://images.unsplash.com/photo-1544816153-12ad5d714b21?q=80&w=800&auto=format&fit=crop",
    tagStyle: "bg-jabb-blue text-white",
    rotation: "rotate-[6deg]",
    description: "Sérigraphie HD, coton bio résistant."
  }
];

export const STATS = [
  { label: "Références", value: "200K+" },
  { label: "Techniques", value: "5" },
  { label: "Clients", value: "2 000+" },
  { label: "Satisfaction", value: "97%" }
];

export const TESTIMONIALS = [
  {
    name: "Sophie K.",
    role: "Responsable Communication",
    text: "J'ai particulièrement apprécié la réactivité des équipes de JABB. Ils travaillent jour et nuit pour satisfaire leurs clients."
  },
  {
    name: "Didier R.",
    role: "Service Achats",
    text: "JABB est devenu un vrai partenaire pour nous. Leur fiabilité est exemplaire et leurs tarifs sont compétitifs."
  },
  {
    name: "Marie-Charlotte F.",
    role: "Directrice RH",
    text: "L'équipe JABB s'est adaptée avec une efficacité remarquable à nos contraintes de timing. Résultat impeccable."
  },
  {
    name: "Karim D.",
    role: "Dirigeant",
    text: "Ce qui m'a marqué, c'est leur réactivité face à la complexité de nos produits. Professionnalisme et créativité."
  }
];

export const CLIENT_LOGOS = [
  "Canal+", "ESSEC", "ESCP", "Lactalis", "France Football",
  "Sciences Po", "Centrale Supélec", "L'Oréal", "Sorbonne"
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
