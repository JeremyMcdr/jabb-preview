// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface ProductColor {
  name: string;
  hex: string;
  image?: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: number;
  name: string;
  ref: string;
  category: string;
  brand: string;
  description: string;
  supplierLink: string;
  image: string;
  colors: ProductColor[];
  specs: ProductSpec[];
  techSheetUrl?: string;
}

// ─── Palette partagee ─────────────────────────────────────────────────────────

const C = {
  noir: { name: "Noir", hex: "#000000" },
  blanc: { name: "Blanc", hex: "#FFFFFF" },
  marine: { name: "Marine", hex: "#1B2A4A" },
  gris: { name: "Gris chiné", hex: "#808080" },
  rouge: { name: "Rouge", hex: "#C8102E" },
  royal: { name: "Bleu royal", hex: "#003DA5" },
  vert: { name: "Vert bouteille", hex: "#1B4D3E" },
  ciel: { name: "Bleu ciel", hex: "#87CEEB" },
  jaune: { name: "Jaune", hex: "#FFD100" },
  orange: { name: "Orange", hex: "#FF6600" },
  bordeaux: { name: "Bordeaux", hex: "#6B1D2A" },
  kaki: { name: "Kaki", hex: "#5B6B4F" },
  beige: { name: "Beige", hex: "#D9C9A5" },
  violet: { name: "Violet", hex: "#5B2C6F" },
  rose: { name: "Rose", hex: "#E91E8C" },
  anthracite: { name: "Anthracite", hex: "#3C3C3C" },
  turquoise: { name: "Turquoise", hex: "#00B5AD" },
};

// ─── Specs par defaut par categorie ───────────────────────────────────────────

const specsT = (g: string, m = "100% coton") => [
  { label: "Matière", value: m },
  { label: "Grammage", value: g },
  { label: "Tailles", value: "S – 3XL" },
  { label: "Marquage", value: "Broderie, Sérigraphie, Transfert" },
];

const specsSweat = (g: string, m = "80% coton, 20% polyester") => [
  { label: "Matière", value: m },
  { label: "Grammage", value: g },
  { label: "Tailles", value: "XS – 3XL" },
  { label: "Marquage", value: "Broderie, Sérigraphie, Transfert" },
];

const specsPolo = (g: string, m = "100% coton piqué") => [
  { label: "Matière", value: m },
  { label: "Grammage", value: g },
  { label: "Tailles", value: "S – 4XL" },
  { label: "Marquage", value: "Broderie, Sérigraphie" },
];

const specsCasquette = () => [
  { label: "Matière", value: "100% coton" },
  { label: "Taille", value: "Ajustable" },
  { label: "Marquage", value: "Broderie, Sérigraphie, Transfert" },
];

const specsBonnet = () => [
  { label: "Matière", value: "100% acrylique" },
  { label: "Taille", value: "Unique" },
  { label: "Marquage", value: "Broderie, Transfert" },
];

const specsBob = (m = "100% coton") => [
  { label: "Matière", value: m },
  { label: "Tailles", value: "S/M – L/XL" },
  { label: "Marquage", value: "Broderie, Sérigraphie, Transfert" },
];

const specsChemise = (g: string, m = "65% polyester, 35% coton") => [
  { label: "Matière", value: m },
  { label: "Grammage", value: g },
  { label: "Tailles", value: "S – 4XL" },
  { label: "Marquage", value: "Broderie" },
];

const specsVeste = (g: string, m: string) => [
  { label: "Matière", value: m },
  { label: "Grammage", value: g },
  { label: "Tailles", value: "S – 3XL" },
  { label: "Marquage", value: "Broderie, Sérigraphie" },
];

const specsPolaire = (g: string) => [
  { label: "Matière", value: "100% polyester polaire" },
  { label: "Grammage", value: g },
  { label: "Tailles", value: "S – 3XL" },
  { label: "Marquage", value: "Broderie" },
];

const specsDoudoune = (m = "100% polyester") => [
  { label: "Matière", value: m },
  { label: "Garnissage", value: "Polyester recyclé" },
  { label: "Tailles", value: "S – 3XL" },
  { label: "Marquage", value: "Broderie, Sérigraphie" },
];

const specsSoftshell = (m = "Softshell 3 couches") => [
  { label: "Matière", value: m },
  { label: "Imperméabilité", value: "Respirant, coupe-vent" },
  { label: "Tailles", value: "S – 3XL" },
  { label: "Marquage", value: "Broderie, Sérigraphie" },
];

const specsSport = (g: string, m = "100% polyester") => [
  { label: "Matière", value: m },
  { label: "Grammage", value: g },
  { label: "Tailles", value: "S – 2XL" },
  { label: "Marquage", value: "Sublimation, Sérigraphie, Transfert" },
];

// ─── Couleurs par defaut par categorie ────────────────────────────────────────

const colorsBasic = [C.noir, C.blanc, C.marine, C.gris, C.rouge, C.royal];
const colorsSweat = [C.noir, C.marine, C.gris, C.blanc, C.bordeaux, C.royal];
const colorsPolo = [C.noir, C.blanc, C.marine, C.royal, C.rouge, C.vert];
const colorsCap = [C.noir, C.blanc, C.marine, C.rouge, C.royal];
const colorsBonnet = [C.noir, C.marine, C.gris, C.rouge, C.royal];
const colorsBob = [C.noir, C.marine, C.blanc, C.kaki, C.beige];
const colorsChemise = [C.blanc, C.ciel, C.marine, C.noir];
const colorsVeste = [C.noir, C.marine, C.kaki, C.anthracite];
const colorsPolaire = [C.noir, C.marine, C.gris, C.rouge, C.royal];
const colorsDoudoune = [C.noir, C.marine, C.rouge, C.anthracite];
const colorsSoftshell = [C.noir, C.marine, C.anthracite, C.royal];
const colorsSport = [C.noir, C.blanc, C.marine, C.rouge, C.jaune, C.royal];

// ─── Helper images couleurs ──────────────────────────────────────────────────

const colorKey: Record<string, string> = {
  "Noir": "noir", "Blanc": "blanc", "Marine": "marine",
  "Gris chiné": "gris", "Rouge": "rouge", "Bleu royal": "royal",
  "Vert bouteille": "vert", "Bleu ciel": "ciel", "Jaune": "jaune",
  "Orange": "orange", "Bordeaux": "bordeaux", "Kaki": "kaki",
  "Beige": "beige", "Violet": "violet", "Rose": "rose",
  "Anthracite": "anthracite", "Turquoise": "turquoise",
};

const withImg = (ref: string, colors: ProductColor[]): ProductColor[] =>
  colors.map(c => {
    const key = colorKey[c.name];
    return key ? { ...c, image: `/products/${ref}/${key}.jpg` } : c;
  });

// ─── Description par categorie ────────────────────────────────────────────────

const descT = "T-shirt coupe classique, idéal pour la personnalisation. Marquage professionnel en broderie, sérigraphie ou transfert.";
const descSweatH = "Sweat à capuche confortable et résistant. Intérieur brossé, idéal pour un marquage de qualité.";
const descSweatR = "Sweat col rond moderne et polyvalent. Parfait pour les collections d'entreprise ou associatives.";
const descSweatZ = "Sweat col zippé pratique et élégant. Personnalisable en broderie ou sérigraphie.";
const descPolo = "Polo piqué coupe classique, idéal pour l'image de marque. Finitions soignées et confort optimal.";
const descCasquette = "Casquette structurée de qualité, personnalisable en broderie. Ajustable pour un confort universel.";
const descBonnet = "Bonnet classique chaud et confortable. Broderie personnalisée pour votre marque.";
const descBob = "Bob tendance au style urbain. Personnalisable en broderie ou sérigraphie pour un look unique.";
const descChemise = "Chemise professionnelle au tombé impeccable. Marquage discret en broderie pour une image soignée.";
const descVeste = "Veste moderne et fonctionnelle. Personnalisation en broderie pour un rendu professionnel.";
const descPolaire = "Polaire chaude et légère, idéale pour l'hiver. Broderie personnalisée pour votre équipe.";
const descDoudoune = "Doudoune légère et compacte, garnissage isolant. Marquage broderie ou sérigraphie.";
const descSoftshell = "Veste softshell respirante et coupe-vent. Idéale pour les équipes terrain et événements.";
const descSport = "Textile sport technique, respirant et léger. Parfait pour les clubs, événements sportifs et teams building.";

// ─── Produits ─────────────────────────────────────────────────────────────────

export const PRODUCTS: Product[] = [
  // ── T-SHIRTS ──────────────────────────────────────────────────────────────
  { id: 1, name: "Men's Short-Sleeve T-Shirt", ref: "CA6424", category: "T-shirts", brand: "ROLY", description: descT, supplierLink: "https://www.roly.eu/model_CA6424", image: "/products/CA6424/main.jpg", colors: withImg("CA6424", colorsBasic), specs: specsT("155 g/m²") },
  { id: 2, name: "SOL'S T-Shirt", ref: "S11380", category: "T-shirts", brand: "SOL'S", description: descT, supplierLink: "https://www.midocean.com/france/fr/eur/vetements-et-habillement/marques/sol-s/s11380-fy-xxl-zid10247672", image: "/products/S11380/main.jpg", colors: withImg("S11380", colorsBasic), specs: specsT("190 g/m²") },
  { id: 3, name: "T-Shirt Homme #E190", ref: "CGTU03T", category: "T-shirts", brand: "B&C", description: descT, supplierLink: "https://www.toptex.fr/cgtu03t-t-shirt-homme-e190.html", image: "/products/CGTU03T/main.jpg", colors: withImg("CGTU03T", colorsBasic), specs: specsT("190 g/m²") },
  { id: 4, name: "T-Shirt Bio190 IC Homme", ref: "K3032IC", category: "T-shirts", brand: "KARIBAN", description: "T-shirt en coton bio 190g/m², coupe moderne et confortable. Marquage personnalisé haute qualité.", supplierLink: "https://www.toptex.fr/k3032ic-t-shirt-bio190-ic-homme.html", image: "/products/K3032IC/main.jpg", colors: withImg("K3032IC", colorsBasic), specs: specsT("190 g/m²", "100% coton bio") },
  { id: 5, name: "Stanley/Stella Creator 2.0", ref: "STTU169", category: "T-shirts", brand: "STANLEY/STELLA", description: "T-shirt iconique en coton bio, coupe unisexe ajustée. Le best-seller de la mode écoresponsable.", supplierLink: "https://stanleystella.com/fr-eu/creator-2-0-sttu169#color=1357", image: "/products/STTU169/main.jpg", colors: withImg("STTU169", [C.noir, C.blanc, C.marine, C.gris, C.rouge, C.vert, C.bordeaux, C.kaki, C.jaune]), specs: specsT("180 g/m²", "100% coton bio") },

  // ── SWEATS ────────────────────────────────────────────────────────────────
  { id: 6, name: "Sweat-Shirt Capuche Homme", ref: "K476", category: "Sweats", brand: "KARIBAN", description: "Sweat à capuche premium, intérieur brossé. Idéal pour broderie ou sérigraphie.", supplierLink: "https://www.toptex.fr/k476-sweat-shirt-capuche-homme.html", image: "/products/K476/main.jpg", colors: withImg("K476", colorsSweat), specs: specsSweat("280 g/m²") },
  { id: 7, name: "College Hoodie", ref: "75117", category: "Sweats", brand: "IMBRETEX", description: descSweatH, supplierLink: "https://www.imbretex.fr/produits/75117", image: "/products/75117/main.jpg", colors: withImg("75117", colorsSweat), specs: specsSweat("280 g/m²") },
  { id: 8, name: "Graduate Heavyweight Hoodie", ref: "75120", category: "Sweats", brand: "IMBRETEX", description: "Sweat capuche lourd et premium. Qualité supérieure pour un marquage durable.", supplierLink: "https://www.imbretex.fr/produits/75120", image: "/products/75120/main.jpg", colors: withImg("75120", colorsSweat), specs: specsSweat("330 g/m²") },
  { id: 9, name: "Heavy Hoody", ref: "75141", category: "Sweats", brand: "IMBRETEX", description: descSweatH, supplierLink: "https://www.imbretex.fr/produits/75141", image: "/products/75141/main.jpg", colors: withImg("75141", [C.noir, C.marine, C.gris, C.blanc, C.bordeaux]), specs: specsSweat("320 g/m²") },
  { id: 10, name: "Stanley/Stella Drummer 2.0", ref: "STSU168", category: "Sweats", brand: "STANLEY/STELLA", description: "Hoodie écoresponsable en coton bio. Confort premium et coupe moderne.", supplierLink: "https://stanleystella.com/fr-eu/drummer-2-0-stsu168#color=1358", image: "/products/STSU168/main.jpg", colors: withImg("STSU168", [C.noir, C.blanc, C.marine, C.gris, C.bordeaux, C.royal, C.vert, C.kaki]), specs: specsSweat("350 g/m²", "85% coton bio, 15% polyester recyclé") },
  { id: 11, name: "Stanley/Stella Cruiser 2.0", ref: "STSU177", category: "Sweats", brand: "STANLEY/STELLA", description: descSweatH, supplierLink: "https://stanleystella.com/fr-eu/cruiser-2-0-stsu177#color=1357", image: "/products/STSU177/main.jpg", colors: withImg("STSU177", [C.noir, C.blanc, C.marine, C.gris, C.bordeaux]), specs: specsSweat("350 g/m²", "85% coton bio, 15% polyester recyclé") },
  { id: 12, name: "Sweat-Shirt Col Rond Unisexe", ref: "K474", category: "Sweats", brand: "KARIBAN", description: descSweatR, supplierLink: "https://www.toptex.fr/k474-sweat-shirt-col-rond-unisexe.html", image: "/products/K474/main.jpg", colors: withImg("K474", colorsSweat), specs: specsSweat("280 g/m²") },
  { id: 13, name: "Awdis Sweat", ref: "75049", category: "Sweats", brand: "IMBRETEX", description: descSweatR, supplierLink: "https://www.imbretex.fr/produits/75049", image: "/products/75049/main.jpg", colors: withImg("75049", colorsSweat), specs: specsSweat("280 g/m²") },
  { id: 14, name: "Sweat Écoresponsable Col Rond Unisexe", ref: "NS400", category: "Sweats", brand: "NATIVE SPIRIT", description: "Sweat écoresponsable col rond, en coton bio. Look moderne et engagement durable.", supplierLink: "https://www.toptex.fr/ns400-sweat-shirt-ecoresponsable-a-col-rond-unisexe.html", image: "/products/NS400/main.jpg", colors: withImg("NS400", [C.noir, C.marine, C.blanc, C.beige]), specs: specsSweat("300 g/m²", "85% coton bio, 15% polyester recyclé") },
  { id: 15, name: "Stanley/Stella Changer 2.0", ref: "STSU178", category: "Sweats", brand: "STANLEY/STELLA", description: descSweatR, supplierLink: "https://stanleystella.com/fr-eu/changer-2-0-stsu178#color=1361", image: "/products/STSU178/main.jpg", colors: withImg("STSU178", [C.noir, C.blanc, C.marine, C.gris, C.bordeaux, C.royal]), specs: specsSweat("350 g/m²", "85% coton bio, 15% polyester recyclé") },
  { id: 16, name: "Sweat-Shirt Col Zippé Homme", ref: "K478", category: "Sweats", brand: "KARIBAN", description: descSweatZ, supplierLink: "https://www.toptex.fr/k478-sweat-shirt-col-zippe-homme.html", image: "/products/K478/main.jpg", colors: withImg("K478", colorsSweat), specs: specsSweat("280 g/m²") },
  { id: 17, name: "Sweat-Shirt Col Zippé Homme", ref: "K487", category: "Sweats", brand: "KARIBAN", description: descSweatZ, supplierLink: "https://www.toptex.fr/k487-sweat-shirt-col-zippe-homme.html", image: "/products/K487/main.jpg", colors: withImg("K487", [C.noir, C.marine, C.gris, C.blanc, C.bordeaux]), specs: specsSweat("300 g/m²") },
  { id: 18, name: "Premium Zip Neck Sweat", ref: "75179", category: "Sweats", brand: "IMBRETEX", description: descSweatZ, supplierLink: "https://www.imbretex.fr/produits/75179", image: "/products/75179/main.jpg", colors: withImg("75179", colorsSweat), specs: specsSweat("320 g/m²") },
  { id: 19, name: "Stanley/Stella Trucker 2.0", ref: "STSU204", category: "Sweats", brand: "STANLEY/STELLA", description: descSweatZ, supplierLink: "https://stanleystella.com/fr-eu/trucker-2-0-stsu204#color=168", image: "/products/STSU204/main.jpg", colors: withImg("STSU204", [C.noir, C.marine, C.gris, C.blanc]), specs: specsSweat("350 g/m²", "85% coton bio, 15% polyester recyclé") },

  // ── POLOS ─────────────────────────────────────────────────────────────────
  { id: 20, name: "Austral", ref: "PO6632", category: "Polos", brand: "ROLY", description: descPolo, supplierLink: "https://www.roly.eu/model_PO6632", image: "/products/PO6632/main.jpg", colors: withImg("PO6632", colorsPolo), specs: specsPolo("180 g/m²") },
  { id: 21, name: "Polo Casual Star", ref: "PO6638", category: "Polos", brand: "ROLY", description: descPolo, supplierLink: "https://www.roly.eu/model_PO6638", image: "/products/PO6638/main.jpg", colors: withImg("PO6638", [C.noir, C.blanc, C.marine, C.royal, C.rouge]), specs: specsPolo("200 g/m²") },
  { id: 22, name: "Polo Piqué Homme", ref: "IB295", category: "Polos", brand: "IMBRETEX", description: descPolo, supplierLink: "https://www.toptex.fr/ib295-polo-pique-homme.html", image: "/products/IB295/main.jpg", colors: [], specs: specsPolo("180 g/m²") },
  { id: 23, name: "Polo Piqué Manches Courtes Homme", ref: "K241", category: "Polos", brand: "KARIBAN", description: descPolo, supplierLink: "https://www.toptex.fr/k241-polo-pique-manches-courtes-homme.html", image: "/products/K241/main.jpg", colors: withImg("K241", colorsPolo), specs: specsPolo("200 g/m²") },
  { id: 24, name: "Polo Piqué Bio180 Homme", ref: "K2025", category: "Polos", brand: "KARIBAN", description: "Polo piqué en coton bio 180g. Écoresponsable et confortable pour un marquage broderie premium.", supplierLink: "https://www.toptex.fr/k2025-polo-pique-bio180-homme.html", image: "/products/K2025/main.jpg", colors: withImg("K2025", [C.noir, C.blanc, C.marine, C.rouge, C.vert]), specs: specsPolo("180 g/m²", "100% coton bio piqué") },
  { id: 25, name: "Polo Écoresponsable Maille Piquée", ref: "NS207", category: "Polos", brand: "NATIVE SPIRIT", description: "Polo écoresponsable maille piquée, coupe moderne. Matières durables et confort premium.", supplierLink: "https://www.toptex.fr/ns207-polo-ecoresponsable-maille-piquee-homme.html", image: "/products/NS207/main.jpg", colors: withImg("NS207", [C.noir, C.blanc, C.marine, C.beige]), specs: specsPolo("220 g/m²", "Coton bio / polyester recyclé") },
  { id: 26, name: "Stanley/Stella Stanley Coaster", ref: "STPM224", category: "Polos", brand: "STANLEY/STELLA", description: "Polo écoresponsable au design intemporel. Coton bio piqué pour un style professionnel durable.", supplierLink: "https://stanleystella.com/fr-eu/stanley-coaster-stpm224#color=1360", image: "/products/STPM224/main.jpg", colors: withImg("STPM224", [C.noir, C.blanc, C.marine, C.gris, C.royal]), specs: specsPolo("220 g/m²", "100% coton bio piqué") },

  // ── CASQUETTES ────────────────────────────────────────────────────────────
  { id: 27, name: "Uranus", ref: "GO7041", category: "Casquettes", brand: "STAMINA", description: descCasquette, supplierLink: "https://stamina-shop.fr/model_GO7041", image: "/products/GO7041/main.jpg", colors: withImg("GO7041", colorsCap), specs: specsCasquette() },
  { id: 28, name: "Eris", ref: "GO7019", category: "Casquettes", brand: "STAMINA", description: descCasquette, supplierLink: "https://stamina-shop.fr/model_GO7019", image: "/products/GO7019/main.jpg", colors: withImg("GO7019", colorsCap), specs: specsCasquette() },
  { id: 29, name: "Barny", ref: "GO1283", category: "Casquettes", brand: "STAMINA", description: descCasquette, supplierLink: "https://stamina-shop.fr/model_GO1283", image: "/products/GO1283/main.jpg", colors: withImg("GO1283", [C.noir, C.rouge, C.royal]), specs: specsCasquette() },
  { id: 30, name: "Casquette Baseball 5 Panneaux", ref: "MO1447-85", category: "Casquettes", brand: "MIDOCEAN", description: descCasquette, supplierLink: "https://www.midocean.com/france/fr/eur/chapeaux-et-accessoires/casquettes-et-chapeaux/casquettes-de-baseball-a-5-panneaux/mo1447-85-zid10238008", image: "/products/MO1447-85/main.jpg", colors: withImg("MO1447-85", colorsCap), specs: specsCasquette() },
  { id: 31, name: "Casquette Pro-Style Coton Brossé 6P", ref: "B65", category: "Casquettes", brand: "BEECHFIELD", description: descCasquette, supplierLink: "https://www.toptex.fr/b65-casquette-homme-pro-style-en-coton-brosse-6-panneaux.html", image: "/products/B65/main.jpg", colors: withImg("B65", colorsCap), specs: specsCasquette() },
  { id: 32, name: "Casquette Coton Bio 6 Panneaux", ref: "KP233", category: "Casquettes", brand: "K-UP", description: "Casquette en coton bio, 6 panneaux. Broderie personnalisée écoresponsable.", supplierLink: "https://www.toptex.fr/kp233-casquette-en-coton-bio-6-panneaux.html", image: "/products/KP233/main.jpg", colors: withImg("KP233", [C.noir, C.blanc, C.marine]), specs: specsCasquette() },
  { id: 33, name: "Casquette Écoresponsable 5 Panneaux", ref: "NS037", category: "Casquettes", brand: "NATIVE SPIRIT", description: "Casquette écoresponsable 5 panneaux, matières durables. Broderie personnalisée.", supplierLink: "https://www.toptex.fr/ns037-casquette-ecoresponsable-5-panneaux-unisexe.html", image: "/products/NS037/main.jpg", colors: withImg("NS037", [C.noir, C.marine, C.beige]), specs: specsCasquette() },
  { id: 34, name: "Béret Basque", ref: "KP604", category: "Casquettes", brand: "K-UP", description: "Béret basque traditionnel, laine feutrée. Broderie personnalisée pour un style unique.", supplierLink: "https://www.toptex.fr/kp604-beret-basque.html", image: "/products/KP604/main.jpg", colors: withImg("KP604", [C.noir, C.marine, C.rouge, C.royal]), specs: [{ label: "Matière", value: "Laine feutrée" }, { label: "Taille", value: "Unique" }, { label: "Marquage", value: "Broderie" }] },

  // ── BONNETS ───────────────────────────────────────────────────────────────
  { id: 35, name: "Planet", ref: "GR9009", category: "Bonnets", brand: "STAMINA", description: descBonnet, supplierLink: "https://stamina-shop.fr/model_GR9009", image: "/products/GR9009/main.jpg", colors: withImg("GR9009", [C.noir, C.marine, C.rouge, C.royal]), specs: specsBonnet() },
  { id: 36, name: "Bonnet Original à Revers", ref: "B45", category: "Bonnets", brand: "BEECHFIELD", description: descBonnet, supplierLink: "https://www.toptex.fr/b45-bonnet-original-a-revers.html", image: "/products/B45/main.jpg", colors: withImg("B45", colorsBonnet), specs: specsBonnet() },
  { id: 37, name: "Bonnet Classique", ref: "MO2705-15", category: "Bonnets", brand: "MIDOCEAN", description: descBonnet, supplierLink: "https://www.midocean.com/france/fr/eur/chapeaux-et-accessoires/bonnets/bonnets/mo2705-15-zid10244435", image: "/products/MO2705-15/main.jpg", colors: withImg("MO2705-15", [C.noir, C.marine, C.gris]), specs: specsBonnet() },
  { id: 38, name: "Bonnet Écoresponsable Unisexe", ref: "NS014", category: "Bonnets", brand: "NATIVE SPIRIT", description: "Bonnet écoresponsable en matières recyclées. Broderie personnalisée pour votre marque.", supplierLink: "https://www.toptex.fr/ns014-bonnet-ecoresponsable-unisexe.html", image: "/products/NS014/main.jpg", colors: withImg("NS014", [C.noir, C.marine, C.beige]), specs: [{ label: "Matière", value: "Acrylique recyclé" }, { label: "Taille", value: "Unique" }, { label: "Marquage", value: "Broderie" }] },

  // ── BOBS ──────────────────────────────────────────────────────────────────
  { id: 39, name: "Bob Promotionnel Bobin", ref: "GR6999", category: "Bobs", brand: "STAMINA", description: descBob, supplierLink: "https://stamina-shop.fr/model_GR6999", image: "/products/GR6999/main.jpg", colors: withImg("GR6999", [C.noir, C.marine, C.blanc]), specs: specsBob() },
  { id: 40, name: "Bob Réversible Frosty", ref: "GR6998", category: "Bobs", brand: "STAMINA", description: "Bob réversible avec deux looks en un. Parfait pour les événements et la personnalisation.", supplierLink: "https://stamina-shop.fr/model_GR6998", image: "/products/GR6998/main.jpg", colors: withImg("GR6998", [C.noir, C.marine]), specs: specsBob() },
  { id: 41, name: "Lagos", ref: "GR1814", category: "Bobs", brand: "STAMINA", description: descBob, supplierLink: "https://stamina-shop.fr/model_GR1814", image: "/products/GR1814/main.jpg", colors: withImg("GR1814", [C.noir, C.marine]), specs: specsBob() },
  { id: 42, name: "Bob Style Bucket", ref: "KP616", category: "Bobs", brand: "K-UP", description: descBob, supplierLink: "https://www.toptex.fr/kp616-bob-style-bucket.html", image: "/products/KP616/main.jpg", colors: [], specs: specsBob() },
  { id: 43, name: "Bob Écoresponsable Velours Côtelé", ref: "NS019", category: "Bobs", brand: "NATIVE SPIRIT", description: "Bob écoresponsable en velours côtelé, style tendance et durable.", supplierLink: "https://www.toptex.fr/ns019-bob-ecoresponsable-en-velours-cotele-unisexe.html", image: "/products/NS019/main.jpg", colors: withImg("NS019", [C.noir, C.marine, C.beige]), specs: specsBob("Velours côtelé coton/polyester") },
  { id: 44, name: "Outback Hat", ref: "74261", category: "Bobs", brand: "IMBRETEX", description: "Bob style outback, look tendance pour l'été. Personnalisation broderie ou sérigraphie.", supplierLink: "https://www.imbretex.fr/produits/74261", image: "/products/74261/main.jpg", colors: withImg("74261", [C.noir, C.marine, C.kaki, C.beige]), specs: specsBob() },

  // ── CHEMISES ──────────────────────────────────────────────────────────────
  { id: 45, name: "Chemise Popeline Polycoton", ref: "K545", category: "Chemises", brand: "KARIBAN", description: descChemise, supplierLink: "https://www.toptex.fr/k545-chemise-popeline-polycoton-entretien-facile-homme.html", image: "/products/K545/main.jpg", colors: withImg("K545", colorsChemise), specs: specsChemise("115 g/m²") },
  { id: 46, name: "Chemise Manches Longues Sans Repassage", ref: "K537", category: "Chemises", brand: "KARIBAN", description: "Chemise sans repassage, entretien facile. Broderie discrète pour un look corporate.", supplierLink: "https://www.toptex.fr/k537-chemise-manches-longues-sans-repassage.html", image: "/products/K537/main.jpg", colors: withImg("K537", [C.blanc, C.ciel, C.noir]), specs: specsChemise("120 g/m²") },
  { id: 47, name: "Chemise Oxford Manches Longues", ref: "K533", category: "Chemises", brand: "KARIBAN", description: "Chemise Oxford classique et intemporelle. Tissu résistant et confortable.", supplierLink: "https://www.toptex.fr/k533-chemise-oxford-manches-longues.html", image: "/products/K533/main.jpg", colors: withImg("K533", [C.blanc, C.ciel]), specs: specsChemise("135 g/m²", "70% coton, 30% polyester") },

  // ── VESTES ────────────────────────────────────────────────────────────────
  { id: 48, name: "Blouson Harrington", ref: "K623", category: "Vestes", brand: "KARIBAN", description: descVeste, supplierLink: "https://www.toptex.fr/k623-blouson-harrington.html", image: "/products/K623/main.jpg", colors: withImg("K623", [C.marine]), specs: specsVeste("160 g/m²", "100% coton") },
  { id: 49, name: "Bomber Jacket", ref: "73252", category: "Vestes", brand: "IMBRETEX", description: descVeste, supplierLink: "https://www.imbretex.fr/produits/73252", image: "/products/73252/main.jpg", colors: withImg("73252", [C.noir, C.beige]), specs: specsVeste("200 g/m²", "100% polyester") },
  { id: 50, name: "Nylon Bomber Jacket", ref: "73254", category: "Vestes", brand: "IMBRETEX", description: "Bomber en nylon léger et imperméable. Style urbain et marquage professionnel.", supplierLink: "https://www.imbretex.fr/produits/73254", image: "/products/73254/main.jpg", colors: withImg("73254", [C.noir, C.kaki]), specs: specsVeste("180 g/m²", "100% nylon") },
  { id: 51, name: "Island", ref: "CB5200", category: "Vestes", brand: "ROLY", description: descVeste, supplierLink: "https://www.roly.eu/model_CB5200", image: "/products/CB5200/main.jpg", colors: withImg("CB5200", [C.noir, C.marine, C.rouge, C.royal]), specs: specsVeste("200 g/m²", "100% polyester") },
  { id: 52, name: "Sitka", ref: "CB5201", category: "Vestes", brand: "ROLY", description: descVeste, supplierLink: "https://www.roly.eu/model_CB5201", image: "/products/CB5201/main.jpg", colors: withImg("CB5201", [C.noir, C.marine]), specs: specsVeste("220 g/m²", "100% polyester") },

  // ── POLAIRES ──────────────────────────────────────────────────────────────
  { id: 53, name: "Luciane", ref: "SM1195", category: "Polaires", brand: "ROLY", description: descPolaire, supplierLink: "https://www.roly.eu/model_SM1195", image: "/products/SM1195/main.jpg", colors: withImg("SM1195", [C.noir, C.marine]), specs: specsPolaire("195 g/m²") },
  { id: 54, name: "Himalaya", ref: "SM1095", category: "Polaires", brand: "ROLY", description: descPolaire, supplierLink: "https://www.roly.eu/model_SM1095", image: "/products/SM1095/main.jpg", colors: withImg("SM1095", [C.noir, C.marine, C.rouge, C.royal]), specs: specsPolaire("300 g/m²") },
  { id: 55, name: "Bellagio", ref: "RA1099", category: "Polaires", brand: "ROLY", description: descPolaire, supplierLink: "https://www.roly.eu/collection_outlet/model_RA1099", image: "/products/RA1099/main.jpg", colors: withImg("RA1099", [C.noir, C.marine, C.rouge]), specs: specsPolaire("280 g/m²") },
  { id: 56, name: "Polaire Col Zippé Polartherm", ref: "R33", category: "Polaires", brand: "RESULT", description: descPolaire, supplierLink: "https://www.toptex.fr/r33-polaire-col-zippe-polarthermtm.html", image: "/products/R33/main.jpg", colors: withImg("R33", [C.noir, C.marine, C.gris, C.rouge]), specs: specsPolaire("330 g/m²") },
  { id: 57, name: "Veste Polaire Ajustable", ref: "K940", category: "Polaires", brand: "KARIBAN", description: descPolaire, supplierLink: "https://www.toptex.fr/k940-veste-polaire-ajustable-a-poignets-elastiques.html", image: "/products/K940/main.jpg", colors: withImg("K940", [C.noir, C.marine, C.rouge, C.royal]), specs: specsPolaire("300 g/m²") },
  { id: 58, name: "Polaire Sherpa Recyclée", ref: "FR854", category: "Polaires", brand: "FRUIT OF THE LOOM", description: "Polaire sherpa en polyester recyclé. Chaleur et engagement écoresponsable.", supplierLink: "https://www.toptex.fr/fr854-polaire-sherpa-recyclee.html", image: "/products/FR854/main.jpg", colors: withImg("FR854", [C.noir, C.marine, C.beige]), specs: specsPolaire("300 g/m²") },

  // ── DOUDOUNES ─────────────────────────────────────────────────────────────
  { id: 59, name: "Gilet Oslo", ref: "RA5092", category: "Doudounes", brand: "ROLY", description: "Gilet doudoune sans manches, léger et chaud. Marquage broderie pour un look professionnel.", supplierLink: "https://www.roly.eu/model_RA5092", image: "/products/RA5092/main.jpg", colors: withImg("RA5092", colorsDoudoune), specs: specsDoudoune() },
  { id: 60, name: "Finland", ref: "RA5094", category: "Doudounes", brand: "ROLY", description: descDoudoune, supplierLink: "https://www.roly.eu/model_RA5094", image: "/products/RA5094/main.jpg", colors: withImg("RA5094", colorsDoudoune), specs: specsDoudoune() },
  { id: 61, name: "Norway", ref: "RA5090", category: "Doudounes", brand: "ROLY", description: descDoudoune, supplierLink: "https://www.roly.eu/model_RA5090", image: "/products/RA5090/main.jpg", colors: withImg("RA5090", [C.noir, C.marine]), specs: specsDoudoune() },
  { id: 62, name: "Doudoune Légère Sans Manches", ref: "K6113", category: "Doudounes", brand: "KARIBAN", description: "Doudoune sans manches légère, idéale pour la mi-saison. Broderie personnalisée.", supplierLink: "https://www.toptex.fr/k6113-doudoune-legere-sans-manches-homme.html", image: "/products/K6113/main.jpg", colors: withImg("K6113", [C.noir, C.marine, C.rouge]), specs: specsDoudoune() },
  { id: 63, name: "Doudoune Légère Écoresponsable", ref: "NS6000", category: "Doudounes", brand: "NATIVE SPIRIT", description: "Doudoune légère écoresponsable, garnissage recyclé. Confort et engagement durable.", supplierLink: "https://www.toptex.fr/ns6000-doudoune-legere-ecoresponsable-homme.html", image: "/products/NS6000/main.jpg", colors: withImg("NS6000", [C.noir, C.marine]), specs: specsDoudoune("Polyester recyclé") },

  // ── SOFTSHELLS ────────────────────────────────────────────────────────────
  { id: 64, name: "Nebraska", ref: "SS6436", category: "Softshells", brand: "ROLY", description: descSoftshell, supplierLink: "https://www.roly.eu/model_SS6436", image: "/products/SS6436/main.jpg", colors: withImg("SS6436", [C.noir, C.marine, C.rouge, C.royal]), specs: specsSoftshell() },
  { id: 65, name: "SOL'S Softshell", ref: "S01195", category: "Softshells", brand: "SOL'S", description: descSoftshell, supplierLink: "https://www.midocean.com/france/fr/eur/vetements-et-habillement/marques/sol-s/s01195-ar-xxl-zid10229035", image: "/products/S01195/main.jpg", colors: withImg("S01195", colorsSoftshell), specs: specsSoftshell() },
  { id: 66, name: "Veste Softshell 2 Couches", ref: "IB410", category: "Softshells", brand: "IMBRETEX", description: descSoftshell, supplierLink: "https://www.toptex.fr/ib410-veste-softshell-2-couches-homme.html", image: "/products/IB410/main.jpg", colors: [], specs: specsSoftshell("Softshell 2 couches") },
  { id: 67, name: "Parka Softshell Doublée Capuche", ref: "K650", category: "Softshells", brand: "KARIBAN", description: "Parka softshell doublée avec capuche. Protection maximale et style professionnel.", supplierLink: "https://www.toptex.fr/k650-parka-softshell-doublee-capuche-homme.html", image: "/products/K650/main.jpg", colors: withImg("K650", [C.noir, C.marine, C.anthracite]), specs: specsSoftshell("Softshell 3 couches doublée") },

  // ── SPORT ─────────────────────────────────────────────────────────────────
  { id: 68, name: "T-Shirt Sport Mercury", ref: "IB300", category: "Sport", brand: "IMBRETEX", description: descSport, supplierLink: "https://www.toptex.fr/ib300-t-shirt-sport-homme-mercury.html", image: "/products/IB300/main.jpg", colors: [], specs: specsSport("130 g/m²") },
  { id: 69, name: "T-Shirt Sport Bahrain", ref: "CA0407", category: "Sport", brand: "ROLY", description: descSport, supplierLink: "https://www.roly.eu/model_CA0407", image: "/products/CA0407/main.jpg", colors: withImg("CA0407", [C.noir, C.blanc, C.marine, C.rouge, C.royal]), specs: specsSport("135 g/m²") },
  { id: 70, name: "T-Shirt Sport Roly", ref: "CA0427", category: "Sport", brand: "ROLY", description: descSport, supplierLink: "https://www.roly.eu/model_CA0427", image: "/products/CA0427/main.jpg", colors: withImg("CA0427", [C.noir, C.blanc, C.marine, C.rouge, C.royal]), specs: specsSport("130 g/m²") },
  { id: 71, name: "Polo Sport Monzha", ref: "PO0404", category: "Sport", brand: "ROLY", description: "Polo sport technique respirant. Idéal pour les événements sportifs et teams building.", supplierLink: "https://www.roly.eu/model_PO0404", image: "/products/PO0404/main.jpg", colors: withImg("PO0404", [C.noir, C.blanc, C.marine, C.rouge, C.royal]), specs: specsSport("150 g/m²") },
  { id: 72, name: "Short Sport Murray", ref: "PA0306", category: "Sport", brand: "ROLY", description: "Short de sport technique avec élastique à la taille. Confort et liberté de mouvement.", supplierLink: "https://www.roly.eu/model_PA0306", image: "/products/PA0306/main.jpg", colors: withImg("PA0306", [C.noir, C.marine]), specs: specsSport("140 g/m²") },
  { id: 73, name: "Débardeur Sport Sebring", ref: "RD6665", category: "Sport", brand: "ROLY", description: "Débardeur sport technique léger et respirant. Sublimation ou sérigraphie.", supplierLink: "https://www.roly.eu/model_RD6665", image: "/products/RD6665/main.jpg", colors: withImg("RD6665", [C.noir, C.marine]), specs: specsSport("130 g/m²") },
  { id: 74, name: "T-Shirt Sport Slam", ref: "CA0304", category: "Sport", brand: "ROLY", description: descSport, supplierLink: "https://www.roly.eu/model_CA0304", image: "/products/CA0304/main.jpg", colors: withImg("CA0304", [C.noir, C.blanc, C.marine, C.rouge]), specs: specsSport("120 g/m²") },
  { id: 75, name: "Leggings Sport Gales", ref: "LG6700", category: "Sport", brand: "ROLY", description: "Leggings sport femme, coupe ajustée et confortable. Sublimation tout-over possible.", supplierLink: "https://www.roly.eu/model_LG6700", image: "/products/LG6700/main.jpg", colors: withImg("LG6700", [C.noir]), specs: specsSport("240 g/m²", "92% polyester, 8% élasthanne") },
];

// ─── Categories (pour filtrage) ───────────────────────────────────────────────

export const CATEGORIES = [
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

export const CAT_COLORS: Record<string, string> = {
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
