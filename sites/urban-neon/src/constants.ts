export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  tag?: string;
  borderColor: string;
  shadowClass: string;
  rotation: string;
  description: string;
}

export const CATALOGUE: Product[] = [
  {
    id: 1,
    name: "NEON HOODIE V1",
    price: "$85.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCudyzQxKdoIjOt7JP2EeL8-z3M5pH1YC2YifmVKvuI1-_Kaq5O6HaQ7sK1NZXPBIJq0ZkkfyBnqO95YeJ1Ok118eLINOZpwvcUZwmoGr_C_iV3mawPA6yDI7UC0DN4Bm07oRGK2QMr8AAMj8Zxr2P5r9oqiGzTz9mI6km9QPTlIw8e2onDqGubRFgaQpMIP2kCjqBeMgrR6IMN-a-U4XK0l53ZaQPMG5kwKBUYemm_N3h062yTwiaBYephfyhNliOR7csC2sWwL8U",
    tag: "NEW",
    borderColor: "border-neon-purple/20",
    shadowClass: "shadow-neon-purple",
    rotation: "-rotate-2",
    description: "Hoodie oversize, broderie néon, intérieur brossé premium."
  },
  {
    id: 2,
    name: "GLITCH TEE",
    price: "$45.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA49_2XDGxJcRuASwl-z83RtWymhBGEoUMZgJ-WRGzZU77CrBtmo0o7CYnyMr68oYegvbzIFPM5lwkv2YQgOWQdS3tGU1CfMFwp8EcJL75AFwP4TbME6x8NvAhjJ1TNFr_2nckXb0PnWJ8pz13vikcmZZTBnEHO1OopLUAGM3znyNTdW3ijyk6Uh5vOp4p94jeyFjOF0YHqzcwd8YIH1rr0kQtc2b8Yg8dE1MvskvKko5YQ8_1nhkCEvjo_X1gkyEftkTMchQnTWhs",
    borderColor: "border-neon-green/20",
    shadowClass: "shadow-neon-green",
    rotation: "rotate-3",
    description: "T-shirt graphic cyberpunk, coton bio, sérigraphie HD."
  },
  {
    id: 3,
    name: "CYBER JOGGERS",
    price: "$120.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5wqetYKVFR6RAn24qtsfX52lhGZZfTUDPdOtUXgprdNqsMkCnYG04V6nyvLL4q6w3N9CLoNdypsx6UMr_eoMKI-lLPuwgiwQRuaLhuuz6mF3gu0KJEyrf1POp5InDAgiZR2o77HUClTNfxN0qeSFflDmBaT1n9Zml8k9001hWx7jEnK6X8QvOVss3Fzn_J-oeAf-CjOjW7xi7_43kqqgU8IphahC6cBbsWrSPjcJBRkKF_iKF4Yk75Tjt79P6wqtK5c2wru5_WLI",
    borderColor: "border-neon-purple/20",
    shadowClass: "shadow-neon-purple",
    rotation: "-rotate-1",
    description: "Joggers techniques avec détails réfléchissants."
  },
  {
    id: 4,
    name: "VIOLET BEANIE",
    price: "$30.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-PII-YFXI_GBBiG4B9XdS9P1CnMDY8nL43VoVkc5HTzrtJ-nFhQTapWV_p82QUTXLJSGTPBVCq4St6MXDsctXRy65hXebecldR1mkQD9Xb2JCgU2ch6nCH1HVltOXBhvZwXuCplbtr7Z81jBZ9SbWpawXm-x9JWgi1uMdLcHSwvY8z9ZlkHZq5VxQ_lgstTmdjK7NEjkm4AUshjliGyXmbDMLc66ZauveesCOragel9H0SaITvvb3_rYBVEcduivQ3mGGJLcwnhk",
    borderColor: "border-neon-green/20",
    shadowClass: "shadow-neon-green",
    rotation: "rotate-2",
    description: "Bonnet brodé logo, maille premium violet."
  }
];

export const CATEGORIES = [
  {
    name: "APPAREL",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0Y_XXGan44p_JFddnCXvHdGBCDtYWZLrsbI5oSI382VsUBfoq0fLebLTVl_n9MGZXNeGpY7zP8D7wbtuoTn7b5rlRx4mph0OsvfOQxJdWpvvpx_bWAQaoUpMKSKXoDFMm7L-YLkL548lffSGmH6FSaPv9bgF_Wo8xIsoRimTT29jwrOI4ylip8M62y7itGgFdwcOnMWCmo9CGqx1Xar4fWgE9pcqasQyk9CkdSYQAx8CpnuaFTMV5Md2gtePdkqLkH1ds2RQQgkg"
  },
  {
    name: "ACCESSORIES",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_OUoxDqL3zkmBaxdxtBB7aNohdNnBUChs03XLuNiizaidWbvVlhDoEShvVMoqgGp1VcbsbMlsVDqrt0Tf9myJyqByApc4GW54ZHMRMMgKtOa2n9EiqPekGXr4TPO6nDUpW1xWO8dwQLe31Rq6TLUXY9EEN-CYt1Npy731H9lIAfGLLiFpURP9f1ntjK3eeHF2yZlQ5Jnj5b3O4FR6G-XyYkuzpW1floypUhpJnX0vLhhpO3THNrsAx0CKDO_zMbyeiAlJvKRdj-M"
  },
  {
    name: "NEW DROPS",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX9xcxKO-hBk4FuwZDXio9r9Qz_IRArtxADdCgFXQSCDT1SPmoLQ2J86_ijElewTohCCOCHIMGienST-21xXa615sl8NT5EBOBF3e9mDv7HX8R0fCeRFskV23_OJrXf47U58WUuQTPbhnTM6Bcuev_IYgXm5VqBUSAuJW3_6klO-LME4t9DHISg_kyEWhYbLUId63DqRQ9HfSEZf9NyBLN42N0ylXsO0gdmHX5yAaBy_DyKfwC3H1_txV8m_Z9I4dNOBxYKGNRHmA"
  }
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
