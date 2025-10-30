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
  galleryCategory?: 'signature' | 'adult' | 'kids' | 'baby' | 'vintage' | 'wedding';
  tags: string[];
  images: string[];
  price?: number;
  variants?: ProductVariant[];
  detailedDescription?: string;
  flavors?: string[];
  minOrder?: string;
  i18n?: {
    es?: { title?: string; description?: string; detailedDescription?: string };
    pt?: { title?: string; description?: string; detailedDescription?: string };
  };
}

export interface GalleryCategory {
  id: string;
  name: { en: string; es: string; pt: string };
  description: { en: string; es: string; pt: string };
  image: string;
  slug: string;
  featured?: boolean;
}

export interface Review {
  id: string;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment: string;
  date: string;
  productId?: string;
  image?: string;
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

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  {
    id: 'signature',
    name: { en: 'Signature Cakes', es: 'Tortas Signature', pt: 'Bolos Assinatura' },
    description: { en: 'Our most popular creations', es: 'Nuestras creaciones más populares', pt: 'Nossas criações mais populares' },
    image: 'signature-cover',
    slug: 'signature-cakes'
  },
  {
    id: 'wedding',
    name: { en: 'Wedding Cakes', es: 'Tortas de Boda', pt: 'Bolos de Casamento' },
    description: { en: 'Elegant tiered cakes for your special day', es: 'Tortas elegantes para tu día especial', pt: 'Bolos elegantes para o seu dia especial' },
    image: 'wedding-cover',
    slug: 'wedding-cakes',
    featured: true
  },
  {
    id: 'adult',
    name: { en: 'Adult Cakes', es: 'Tortas para Adultos', pt: 'Bolos para Adultos' },
    description: { en: 'Sophisticated designs for grown-up celebrations', es: 'Diseños sofisticados para celebraciones adultas', pt: 'Designs sofisticados para celebrações adultas' },
    image: 'adult-cover',
    slug: 'adult-cakes'
  },
  {
    id: 'kids',
    name: { en: 'Kids Cakes', es: 'Tortas Infantiles', pt: 'Bolos Infantis' },
    description: { en: 'Colorful & fun cakes for little ones', es: 'Tortas coloridas y divertidas para los pequeños', pt: 'Bolos coloridos e divertidos para os pequenos' },
    image: 'kids-cover',
    slug: 'kids-cakes'
  },
  {
    id: 'baby',
    name: { en: 'Baby Cakes', es: 'Tortas de Bebé', pt: 'Bolos de Bebê' },
    description: { en: 'Delicate cakes for baby showers & christenings', es: 'Tortas delicadas para baby showers y bautizos', pt: 'Bolos delicados para chás de bebê e batizados' },
    image: 'baby-cover',
    slug: 'baby-cakes'
  },
  {
    id: 'vintage',
    name: { en: 'Vintage Cakes', es: 'Tortas Vintage', pt: 'Bolos Vintage' },
    description: { en: 'Classic elegant designs with timeless charm', es: 'Diseños elegantes clásicos con encanto atemporal', pt: 'Designs elegantes clássicos com charme atemporal' },
    image: 'vintage-cover',
    slug: 'vintage-cakes'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Sarah M.',
    rating: 5,
    comment: 'The wedding cake was absolutely stunning! Every guest asked for the baker\'s contact. Highly recommend!',
    date: '2024-09-15',
    productId: 'luxury-tiered-cake'
  },
  {
    id: 'r2',
    name: 'Carlos R.',
    rating: 5,
    comment: 'Los brigadeiros son los mejores que he probado fuera de Brasil. ¡Increíbles!',
    date: '2024-08-20',
    productId: 'brigadeiro-gourmet'
  },
  {
    id: 'r3',
    name: 'Amanda L.',
    rating: 5,
    comment: 'Perfect cake for my daughter\'s birthday! Beautiful rainbow design and delicious flavors.',
    date: '2024-10-05'
  },
  {
    id: 'r4',
    name: 'Michael T.',
    rating: 5,
    comment: 'The chocolate ganache cake was a hit at our anniversary party. Worth every penny!',
    date: '2024-07-12'
  },
  {
    id: 'r5',
    name: 'Patricia S.',
    rating: 5,
    comment: 'Cupcakes perfeitos para o chá de bebê! Todo mundo amou!',
    date: '2024-09-28'
  },
  {
    id: 'r6',
    name: 'James K.',
    rating: 5,
    comment: 'Professional service and amazing cake. The pistachio raspberry combination was divine!',
    date: '2024-06-30'
  }
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
    galleryCategory: 'wedding',
    tags: ['tiered', 'wedding', 'custom'],
    images: ['wedding-cover'],
    variants: [{ label: 'Starting price', price: 220 }],
    detailedDescription: 'Our luxury tiered cakes are perfect for weddings and grand celebrations. Each cake features multiple tiers with 3 layers of filling and 4 layers of moist cake. Choose from Swiss meringue buttercream or premium Callebaut ganache. Custom designs available to match your theme and color palette.',
    i18n: {
      es: { title: 'Torta en Pisos de Lujo', description: 'Creación especial con presupuesto personalizado.', detailedDescription: 'Nuestras tortas de lujo son perfectas para bodas y grandes celebraciones. Cada torta cuenta con múltiples pisos con 3 capas de relleno y 4 capas de bizcocho.' },
      pt: { title: 'Bolo de Andares de Luxo', description: 'Criação especial com orçamento sob consulta.', detailedDescription: 'Nossos bolos de andares de luxo são perfeitos para casamentos e grandes celebrações. Cada bolo possui múltiplos andares com 3 camadas de recheio e 4 camadas de massa.' }
    }
  },
  
  // Classics
  {
    id: 'classic-chocolate-bliss',
    type: 'cakes',
    title: 'Chocolate Bliss',
    description: 'Moist chocolate cake filled with creamy milk-chocolate brigadeiro.',
    category: 'Classics',
    galleryCategory: 'signature',
    tags: ['chocolate', 'brigadeiro'],
    images: ['signature-cover'],
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
    galleryCategory: 'adult',
    tags: ['pistachio', 'raspberry'],
    images: ['adult-cover'],
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
    images: ['brigadeiros-main'],
    detailedDescription: 'Our gourmet brigadeiros are handcrafted Brazilian chocolate truffles made with premium ingredients. Each brigadeiro is soft, creamy, and perfectly sweet. Available in 8 delicious flavors with various premium toppings.',
    flavors: ['Milk Chocolate', 'Dark Chocolate', 'Coconut + Chocolate', 'Churros', 'White Chocolate', 'Nido + Nutella', 'Pistachio', 'Strawberry'],
    minOrder: 'Minimum 12 units per flavor',
    variants: [
      { label: '15g — $1.90 (min 12/flavor)', price: 1.90 },
      { label: '20g — $2.30 (min 12/flavor)', price: 2.30 }
    ],
    i18n: {
      es: { title: 'Brigadeiro Gourmet (surtidos)', description: 'Trufas cremosas con coberturas premium.', detailedDescription: 'Nuestros brigadeiros gourmet son trufas de chocolate brasileñas hechas a mano con ingredientes premium.' },
      pt: { title: 'Brigadeiro Gourmet (sortidos)', description: 'Trufas cremosas com coberturas premium.', detailedDescription: 'Nossos brigadeiros gourmet são trufas de chocolate brasileiras feitas à mão com ingredientes premium.' }
    }
  },
  {
    id: 'cupcakes',
    type: 'sweets',
    title: 'Cupcakes',
    description: 'Fluffy cupcakes with buttercream, brigadeiro frosting, or chocolate ganache. Bases: Vanilla/Chocolate. Fillings: chocolate, coconut, strawberry, dulce de leche. Minimum 6 per flavor.',
    category: 'Cupcakes',
    tags: ['cupcake', 'buttercream', 'ganache'],
    images: ['cupcakes-main'],
    price: 5,
    detailedDescription: 'Our cupcakes are baked fresh with fluffy vanilla or chocolate bases. Choose your favorite filling and frosting combination for a personalized treat perfect for any celebration.',
    flavors: ['Chocolate filling', 'Coconut', 'Strawberry', 'Dulce de leche'],
    minOrder: 'Minimum 6 per flavor',
    i18n: {
      es: { title: 'Cupcakes', description: 'Cupcakes esponjosos con buttercream o ganache. Mínimo 6 por sabor.', detailedDescription: 'Nuestros cupcakes se hornean frescos con bases esponjosas de vainilla o chocolate.' },
      pt: { title: 'Cupcakes', description: 'Cupcakes fofinhos com buttercream ou ganache. Mínimo 6 por sabor.', detailedDescription: 'Nossos cupcakes são assados frescos com bases fofas de baunilha ou chocolate.' }
    }
  },
  {
    id: 'truffle-cones',
    type: 'sweets',
    title: 'Brigadeiro Filled Truffle Cones',
    description: 'Crispy cones filled with velvety brigadeiro and coated in chocolate. Flavors: chocolate, coconut, pistachio. Minimum 10 per flavor.',
    category: 'Truffle Cones',
    tags: ['cones', 'brigadeiro', 'crunchy'],
    images: ['truffle-cones-main'],
    price: 7,
    detailedDescription: 'A delightful combination of crispy waffle cone and smooth brigadeiro truffle, all coated in premium chocolate. These elegant treats are perfect for parties and special occasions.',
    flavors: ['Chocolate', 'Coconut', 'Pistachio'],
    minOrder: 'Minimum 10 per flavor',
    i18n: {
      es: { title: 'Conitos Rellenos de Brigadeiro', description: 'Conos crocantes con brigadeiro. Mínimo 10/sabor.', detailedDescription: 'Una deliciosa combinación de cono de waffle crujiente y trufa de brigadeiro suave, todo cubierto en chocolate premium.' },
      pt: { title: 'Cones Trufados de Brigadeiro', description: 'Cones crocantes com brigadeiro. Mínimo 10/sabor.', detailedDescription: 'Uma deliciosa combinação de cone de waffle crocante e trufa de brigadeiro macia, tudo coberto com chocolate premium.' }
    }
  },
  {
    id: 'honey-cake',
    type: 'sweets',
    title: 'Honey Cake (Pão de Mel)',
    description: 'Soft honey cake with dulce de leche filling and chocolate shell.',
    category: 'Honey Cake',
    tags: ['honey', 'dulce-de-leche', 'box'],
    images: ['honey-cake-main'],
    detailedDescription: 'Traditional Brazilian pão de mel - soft honey-spiced cake filled with creamy dulce de leche and covered in a glossy chocolate shell. Perfect for gifting or as party favors.',
    minOrder: 'Available in boxes of 12 or 24',
    variants: [
      { label: 'Box of 12 — $60', price: 60 },
      { label: 'Box of 24 — $108', price: 108 }
    ],
    i18n: {
      es: { title: 'Honey Cake (Pão de Mel)', description: 'Bizcocho de miel con dulce de leche.', detailedDescription: 'Pão de mel brasileño tradicional - bizcocho de miel especiado relleno de dulce de leche cremoso y cubierto con chocolate brillante.' },
      pt: { title: 'Pão de Mel (Honey Cake)', description: 'Bolo de mel com doce de leite.', detailedDescription: 'Pão de mel brasileiro tradicional - bolo de mel com especiarias recheado com doce de leite cremoso e coberto com chocolate brilhante.' }
    }
  }
];
