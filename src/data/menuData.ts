export interface ProductVariant {
  label: string;
  price: number;
}

export interface Product {
  id: string;
  type: 'cakes' | 'sweets';
  title: string;
  description: string;
  category: string;
  tags: string[];
  images: string[];
  price?: number;
  variants?: ProductVariant[];
  i18n?: {
    es?: { title?: string; description?: string };
    pt?: { title?: string; description?: string };
  };
}

export const PHONE_NUMBER = '12365093775';
export const PICKUP_ADDRESS = '5051 Lougheed Hwy, Burnaby';

export const CATEGORIES = [
  'Classics',
  'Favorites',
  'Specialty',
  'Wedding/Tiered',
  'Add-on',
  'Brigadeiros',
  'Cupcakes',
  'Truffle Cones',
  'Honey Cake',
  'Promo'
];

export const MENU_ITEMS: Product[] = [
  // Add-on
  {
    id: 'addon-ganache-upgrade',
    type: 'cakes',
    title: 'Ganache Frosting Upgrade (+$45)',
    description: 'Swap Swiss meringue buttercream for Callebaut chocolate ganache.',
    category: 'Add-on',
    tags: ['ganache', 'upgrade', 'cocoa'],
    images: [],
    price: 45,
    i18n: {
      es: { title: 'Mejora a Ganache (+$45)', description: 'Cambia el buttercream por ganache Callebaut.' },
      pt: { title: 'Upgrade de Ganache (+R$ 45)', description: 'Troque o buttercream por ganache Callebaut.' }
    }
  },
  
  // Wedding/Tiered
  {
    id: 'luxury-tiered-cake',
    type: 'cakes',
    title: 'Luxury Tiered Cake',
    description: 'Special creation requiring a custom quote. 3 layers of filling and 4 layers of cake (Petite has 2/3).',
    category: 'Wedding/Tiered',
    tags: ['tiered', 'wedding', 'custom'],
    images: [],
    variants: [{ label: 'Starting price', price: 220 }],
    i18n: {
      es: { title: 'Torta en Pisos de Lujo', description: 'Creación especial con presupuesto personalizado.' },
      pt: { title: 'Bolo de Andares de Luxo', description: 'Criação especial com orçamento sob consulta.' }
    }
  },
  
  // Classics
  {
    id: 'classic-chocolate-bliss',
    type: 'cakes',
    title: 'Chocolate Bliss',
    description: 'Moist chocolate cake filled with creamy milk-chocolate brigadeiro.',
    category: 'Classics',
    tags: ['chocolate', 'brigadeiro'],
    images: [],
    variants: [
      { label: 'Petite (15cm) — up to 8 slices', price: 85 },
      { label: 'Petite Classic (15cm) — 15–20 slices', price: 110 },
      { label: 'Classic (20cm) — 25–30 slices', price: 140 },
      { label: 'Supreme (25cm) — 35–40 slices', price: 170 }
    ]
  },
  {
    id: 'classic-choco-marmite',
    type: 'cakes',
    title: 'Choco-Marmite',
    description: 'Blend of dark and white chocolate — indulgent yet balanced.',
    category: 'Classics',
    tags: ['dark', 'white-chocolate'],
    images: [],
    variants: [
      { label: 'Petite (15cm) — up to 8 slices', price: 85 },
      { label: 'Petite Classic (15cm) — 15–20 slices', price: 110 },
      { label: 'Classic (20cm) — 25–30 slices', price: 140 },
      { label: 'Supreme (25cm) — 35–40 slices', price: 170 }
    ]
  },
  {
    id: 'classic-coco-luxe',
    type: 'cakes',
    title: 'Coco-Luxe',
    description: 'Velvety chocolate cake with coconut filling — tropical sweetness meets cocoa.',
    category: 'Classics',
    tags: ['coconut', 'chocolate'],
    images: [],
    variants: [
      { label: 'Petite (15cm) — up to 8 slices', price: 85 },
      { label: 'Petite Classic (15cm) — 15–20 slices', price: 110 },
      { label: 'Classic (20cm) — 25–30 slices', price: 140 },
      { label: 'Supreme (25cm) — 35–40 slices', price: 170 }
    ]
  },
  {
    id: 'classic-berry-chocolate-delight',
    type: 'cakes',
    title: 'Berry Chocolate Delight',
    description: 'Chocolate cake with fresh strawberry chunks + creamy brigadeiro.',
    category: 'Classics',
    tags: ['strawberry', 'chocolate'],
    images: [],
    variants: [
      { label: 'Petite (15cm) — up to 8 slices', price: 85 },
      { label: 'Petite Classic (15cm) — 15–20 slices', price: 110 },
      { label: 'Classic (20cm) — 25–30 slices', price: 140 },
      { label: 'Supreme (25cm) — 35–40 slices', price: 170 }
    ]
  },
  
  // Favorites
  {
    id: 'fav-dulce-leche-coconut-dream',
    type: 'cakes',
    title: 'Dulce de Leche Coconut Dream',
    description: 'Soft cake with dulce de leche and shredded coconut.',
    category: 'Favorites',
    tags: ['dulce-de-leche', 'coconut'],
    images: [],
    variants: [
      { label: 'Petite (15cm) — up to 8 slices', price: 85 },
      { label: 'Petite Classic (15cm) — 15–20 slices', price: 110 },
      { label: 'Classic (20cm) — 25–30 slices', price: 140 },
      { label: 'Supreme (25cm) — 35–40 slices', price: 170 }
    ]
  },
  {
    id: 'fav-four-milks-strawberry',
    type: 'cakes',
    title: '4 Milks & Strawberry Fantasy',
    description: 'Ultra-creamy four-milks cake with fresh strawberries.',
    category: 'Favorites',
    tags: ['four-milks', 'strawberry', 'creamy'],
    images: [],
    variants: [
      { label: 'Petite (15cm) — up to 8 slices', price: 85 },
      { label: 'Petite Classic (15cm) — 15–20 slices', price: 110 },
      { label: 'Classic (20cm) — 25–30 slices', price: 140 },
      { label: 'Supreme (25cm) — 35–40 slices', price: 170 }
    ]
  },
  {
    id: 'fav-nutella-ninho-heaven',
    type: 'cakes',
    title: 'Nutella & Milk Ninho Heaven',
    description: 'Rich Nutella with smooth Ninho milk filling.',
    category: 'Favorites',
    tags: ['nutella', 'ninho'],
    images: [],
    variants: [
      { label: 'Petite (15cm) — up to 8 slices', price: 85 },
      { label: 'Petite Classic (15cm) — 15–20 slices', price: 110 },
      { label: 'Classic (20cm) — 25–30 slices', price: 140 },
      { label: 'Supreme (25cm) — 35–40 slices', price: 170 }
    ]
  },
  
  // Specialty
  {
    id: 'spec-pistachio-raspberry',
    type: 'cakes',
    title: 'Heavenly Pistachio & Raspberry',
    description: 'Light pistachio cake with fresh raspberry filling — nutty and tangy.',
    category: 'Specialty',
    tags: ['pistachio', 'raspberry'],
    images: [],
    variants: [
      { label: 'Petite (15cm) — up to 8 slices', price: 85 },
      { label: 'Petite Classic (15cm) — 15–20 slices', price: 110 },
      { label: 'Classic (20cm) — 25–30 slices', price: 140 },
      { label: 'Supreme (25cm) — 35–40 slices', price: 170 }
    ]
  },
  {
    id: 'spec-red-velvet',
    type: 'cakes',
    title: 'Sinful Red Velvet',
    description: 'Soft red-velvet cake with smooth cream-cheese filling.',
    category: 'Specialty',
    tags: ['red-velvet', 'cream-cheese'],
    images: [],
    variants: [
      { label: 'Petite (15cm) — up to 8 slices', price: 85 },
      { label: 'Petite Classic (15cm) — 15–20 slices', price: 110 },
      { label: 'Classic (20cm) — 25–30 slices', price: 140 },
      { label: 'Supreme (25cm) — 35–40 slices', price: 170 }
    ]
  },
  
  // Sweets
  {
    id: 'promo-sweet-deal',
    type: 'sweets',
    title: 'Sweet Deal — 10% OFF your cake',
    description: 'Order any sweets and get 10% OFF your cake.',
    category: 'Promo',
    tags: ['deal', 'discount', 'cake'],
    images: [],
    price: 0,
    i18n: {
      es: { title: 'Sweet Deal — 10% de DESCUENTO', description: 'Compra cualquier dulce y obtén 10% OFF en tu torta.' },
      pt: { title: 'Sweet Deal — 10% OFF no bolo', description: 'Peça qualquer doce e ganhe 10% OFF no bolo.' }
    }
  },
  {
    id: 'brigadeiro-gourmet',
    type: 'sweets',
    title: 'Gourmet Brigadeiro (assorted)',
    description: 'Soft, rich, creamy truffles. Flavors: Milk, Dark, Coconut+Chocolate, Churros, White, Nido+Nutella, Pistachio, Strawberry. Minimum per flavor: 12 units.',
    category: 'Brigadeiros',
    tags: ['truffles', 'assorted', 'party'],
    images: [],
    variants: [
      { label: '15g — $1.90 (min 12/flavor)', price: 1.90 },
      { label: '20g — $2.30 (min 12/flavor)', price: 2.30 }
    ],
    i18n: {
      es: { title: 'Brigadeiro Gourmet (surtidos)', description: 'Trufas cremosas con coberturas premium.' },
      pt: { title: 'Brigadeiro Gourmet (sortidos)', description: 'Trufas cremosas com coberturas premium.' }
    }
  },
  {
    id: 'cupcakes',
    type: 'sweets',
    title: 'Cupcakes',
    description: 'Fluffy cupcakes with buttercream, brigadeiro frosting, or chocolate ganache. Bases: Vanilla/Chocolate. Fillings: chocolate, coconut, strawberry, dulce de leche. Minimum 6 per flavor.',
    category: 'Cupcakes',
    tags: ['cupcake', 'buttercream', 'ganache'],
    images: [],
    price: 5,
    i18n: {
      es: { title: 'Cupcakes', description: 'Cupcakes esponjosos con buttercream o ganache. Mínimo 6 por sabor.' },
      pt: { title: 'Cupcakes', description: 'Cupcakes fofinhos com buttercream ou ganache. Mínimo 6 por sabor.' }
    }
  },
  {
    id: 'truffle-cones',
    type: 'sweets',
    title: 'Brigadeiro Filled Truffle Cones',
    description: 'Crispy cones filled with velvety brigadeiro and coated in chocolate. Flavors: chocolate, coconut, pistachio. Minimum 10 per flavor.',
    category: 'Truffle Cones',
    tags: ['cones', 'brigadeiro', 'crunchy'],
    images: [],
    price: 7,
    i18n: {
      es: { title: 'Conitos Rellenos de Brigadeiro', description: 'Conos crocantes con brigadeiro. Mínimo 10/sabor.' },
      pt: { title: 'Cones Trufados de Brigadeiro', description: 'Cones crocantes com brigadeiro. Mínimo 10/sabor.' }
    }
  },
  {
    id: 'honey-cake',
    type: 'sweets',
    title: 'Honey Cake (Pão de Mel)',
    description: 'Soft honey cake with dulce de leche filling and chocolate shell.',
    category: 'Honey Cake',
    tags: ['honey', 'dulce-de-leche', 'box'],
    images: [],
    variants: [
      { label: 'Box of 12 — $60', price: 60 },
      { label: 'Box of 24 — $108', price: 108 }
    ],
    i18n: {
      es: { title: 'Honey Cake (Pão de Mel)', description: 'Bizcocho de miel con dulce de leche.' },
      pt: { title: 'Pão de Mel (Honey Cake)', description: 'Bolo de mel com doce de leite.' }
    }
  }
];
