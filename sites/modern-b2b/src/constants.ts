export interface Product {
  id: number;
  name: string;
  price: string;
  subtitle: string;
  image: string;
  tag: string;
  tagColor: string;
}

export const CATALOGUE: Product[] = [
  {
    id: 1,
    name: "T-shirt Premium Bio",
    price: "8,50 €",
    subtitle: "Coton peigné 180g/m²",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnKkCB7W70Dtf6Nx-csF-FilGD8y5VPsp3PjcGv_sl68hmosmk2mUI32VIIZqg4Do3ppJv6LQ4-ZGC6cnV_gt7D6LfTZXfGjopVPNJdEjBK7yoPPzrVGMwvDdaG14ipPL_FuCR50tTZ63hP6YbJ5txFo0lkxIMVhG_E1fggNbp8pmygwxhzKHqCuGVT0D3nVea0juVeg3zn0biD5DlSTRz_21ucGmEF2KNsx0UFmv1Lp4EQk9TGRdu-DSaU7CDf77plezJUPCfg8o",
    tag: "Bio & Durable",
    tagColor: "text-primary bg-primary/10"
  },
  {
    id: 2,
    name: "Hoodie Recyclé",
    price: "24,90 €",
    subtitle: "Polyester recyclé & coton",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVoLswS3VkIHP2RTE3MzLhnJLTVFf0rxCgHuky65KMCOTIHF3hkmBn2gCdxckKd1n27w13ITMPbAykxsd4IqdAkR9dKIao8ak-d7Q9m6-2cCwGu0tkrhXP5zcEt70JcWFfeGWGWfRMr-Acx2eJuwWtF2j_IZZsQMa3x83w6xSGlAGQCkQ7bihVDCGe2MPTWkXoDfbDmdmH12liBiHaQEd1ubfJisbATmBxnBOfT41OpaGKswR1iypvGY3QJTnWAF9f7j_Mt7hvI_M",
    tag: "Eco-Responsable",
    tagColor: "text-emerald-600 bg-emerald-100"
  },
  {
    id: 3,
    name: "Tote-bag Toile Épaisse",
    price: "3,20 €",
    subtitle: "340g/m² haute résistance",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1XHPis8SCjLdJnyolesJAOesp0lyIS6lK4HSFJo9Gs-cZFEkdDte4Chiyq9tmRhtv20XTGfGP254qT4hUUjt6t33cLKXmoNdcLC3-jHaTdnGENGpt-lvaogs4oF04DWY1C29CVh3tQuxZbeIIdIv84edj8iEea9rjaK4XZN67DENT_Q_5IJNzA__6bVXchzkO0mFtGK2XFWEQdGURiXlwkevS1838K9C4eiUQtDN5kidH_0Prhsqs6chu3FsMMmyb_xq8Gn0MJfI",
    tag: "Indispensable",
    tagColor: "text-primary bg-primary/10"
  },
  {
    id: 4,
    name: "Gourde Isotherme 500ml",
    price: "12,50 €",
    subtitle: "Acier inoxydable, sans BPA",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTLEE_j4sWqVCNM5m7K1ktoxm7VP_BXD6Q25IzorxwYM6dMgsR041c6n7vghN9YF_9tBhpK5X8XrIJ9sYneUFXWf2g4yrOKnlS7yUE5V8JXBsOegO6u3JHUMDMa4ZEP0osK7-oD99Q8Y-dgkZn8eWC83R1b48vyMmk-qy4lUypff4MbJjMFCfIpPiyg4QkAQI9AYXyWjjIn-j0FME8y31nPGNohTXT7gGenWZvau9i2jhNkMWAVlortKSA32HOMutm6Jw8c0WaLNg",
    tag: "Best Seller",
    tagColor: "text-amber-600 bg-amber-100"
  }
];

export const CATEGORIES = [
  {
    name: "Textile",
    subtitle: "T-shirts, Polos, Sweats & Softshells",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfZYzfJ44i7XuuJ-BXiO2XgJfIlDwOVhAHHofvtpb_-YCnKWrY1GZVvyQTVnoU3a6oHzbigUmRX-C_Sf9MwvgaGEOHN7e119dS-i5YKEAgaN67tyP2kDKy9NxtrwUVr3xDUjzrPghqKYJGLZuQm-gBiemJoHO59BR8NwyzegVIz-urYTs_EqrumPLlRojmz54A-L2LFJtpS9LV-MRNqwDIJFad46euEiHdgE7ULxHk7P2YXMmHXyCVlnv7Ig8cT5nXhpGQcVekuBY"
  },
  {
    name: "Objets Publicitaires",
    subtitle: "Gourdes, Tote-bags, Notebooks",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxqB7PYVYLuRLQ4_EyBz_j7PMofrroI1RXYxmybAFr71U87k9lNbhJP5WQGL0jaGYmHoKuvBIDrLueoB8h7dq63cXeGIDp394BXYOvmRJ1yX5OhFezvtmUZdGo3VFwVuES9QiJpLJnQElVyjzbmhr-meE4-1oZNxWC9C_GOyBqmHppENHMFEwESbYZcauSm6mjpfCpzKrrAW3cTQnatR1L8K8NWGoCL0P-mr-GMsc-PazhZbt68zjMAmU1FxxM08EPwgITW4Sm_Eg"
  },
  {
    name: "Équipements Sportifs",
    subtitle: "Tenues techniques et accessoires",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCD2E3IzuKhH2rAjwFfatLEEpjN4Sk8xvYhaK0eGGoRHdlzpoIM7pUrlZEO6gkG7PEk0aK07BDfW2XTJCd0OwLnJF6dvh_d9fhkOBJNnWP4SkJNLjys0_4x85FoOInycJwdhpTsOlDQWZ9zHkZjtrS2DvyG14_ORv5KlEgeDuq8H4WiB8nqdd2HwaOs_w2eItT9IPUBSUiC4pWVALu_Xz10pkRemnfB7lXS0EZmYiVZrWPS_Hy37w5G148QSqqvnNZ5VWCbghfglGs"
  }
];

export const PROCESS_STEPS = [
  {
    number: 1,
    title: "Choisissez vos produits",
    description: "Explorez notre catalogue premium et sélectionnez les pièces adaptées à vos besoins."
  },
  {
    number: 2,
    title: "Personnalisez votre design",
    description: "Nos experts vous accompagnent sur le choix du marquage (broderie, impression, sérigraphie)."
  },
  {
    number: 3,
    title: "Recevez votre commande",
    description: "Nous livrons partout en France avec un contrôle qualité rigoureux sur chaque pièce."
  }
];

export const CLIENT_LOGOS = [
  "BNP Paribas", "Décathlon", "SNCF", "Carrefour", "L'Oréal"
];

export const CONTACT = {
  email: "service.contact@jabb.fr",
  phone: "+33 1 84 80 14 49",
  address: "39 rue Louis Blanc, 92400 Courbevoie",
  social: {
    instagram: "https://www.instagram.com/jabb.officiel/",
    linkedin: "https://www.linkedin.com/company/jabb/"
  }
};
