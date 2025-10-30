import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'es' | 'pt';

interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

const translations: Translations = {
  // Navigation
  home: { en: 'Home', es: 'Inicio', pt: 'Início' },
  menu: { en: 'Menu', es: 'Menú', pt: 'Cardápio' },
  about: { en: 'About', es: 'Acerca', pt: 'Sobre' },
  gallery: { en: 'Gallery', es: 'Galería', pt: 'Galeria' },
  signatureSweets: { en: 'Signature Sweets', es: 'Dulces Exclusivos', pt: 'Doces Exclusivos' },
  terms: { en: 'Terms', es: 'Términos', pt: 'Termos' },
  privacy: { en: 'Privacy', es: 'Privacidad', pt: 'Privacidade' },
  
  // Hero
  lead: {
    en: 'Custom cakes & signature sweets',
    es: 'Tortas personalizadas y dulces exclusivos',
    pt: 'Bolos personalizados e doces exclusivos'
  },
  heroTitle: {
    en: 'Handcrafted with love for every occasion',
    es: 'Hecho a mano con amor para cada ocasión',
    pt: 'Feitos à mão com amor para cada ocasião'
  },
  heroDescription: {
    en: 'From petite celebrations to grand tiered designs — choose flavors, sizes, and decorations. Order easily on WhatsApp.',
    es: 'Desde celebraciones pequeñas hasta diseños en pisos: elige sabores, tamaños y decoración. Pide por WhatsApp.',
    pt: 'De celebrações íntimas a bolos de andares — escolha sabores, tamanhos e decoração. Peça pelo WhatsApp.'
  },
  exploreMenu: { en: 'Explore Menu', es: 'Ver Menú', pt: 'Ver Cardápio' },
  exploreGallery: { en: 'Explore Gallery', es: 'Ver Galería', pt: 'Ver Galeria' },
  
  // Gallery
  galleryTitle: { en: 'Cake Gallery', es: 'Galería de Tortas', pt: 'Galeria de Bolos' },
  galleryDescription: { en: 'Browse our beautiful cake categories', es: 'Explora nuestras hermosas categorías de tortas', pt: 'Navegue por nossas lindas categorias de bolos' },
  viewCategory: { en: 'View Category', es: 'Ver Categoría', pt: 'Ver Categoria' },
  viewDetails: { en: 'View Details', es: 'Ver Detalles', pt: 'Ver Detalhes' },
  backToGallery: { en: 'Back to Gallery', es: 'Volver a Galería', pt: 'Voltar à Galeria' },
  backToCategory: { en: 'Back to Category', es: 'Volver a Categoría', pt: 'Voltar à Categoria' },
  relatedProducts: { en: 'Related Products', es: 'Productos Relacionados', pt: 'Produtos Relacionados' },
  
  // Product Details
  selectSize: { en: 'Select Size', es: 'Seleccionar Tamaño', pt: 'Selecionar Tamanho' },
  quantity: { en: 'Quantity', es: 'Cantidad', pt: 'Quantidade' },
  availableFlavors: { en: 'Available Flavors', es: 'Sabores Disponibles', pt: 'Sabores Disponíveis' },
  minOrder: { en: 'Minimum Order', es: 'Pedido Mínimo', pt: 'Pedido Mínimo' },
  
  // Cart
  yourCart: { en: 'Your Cart', es: 'Tu Carrito', pt: 'Seu Carrinho' },
  total: { en: 'Total', es: 'Total', pt: 'Total' },
  clear: { en: 'Clear', es: 'Vaciar', pt: 'Limpar' },
  checkoutWhatsApp: { en: 'Checkout via WhatsApp', es: 'Pagar por WhatsApp', pt: 'Finalizar via WhatsApp' },
  addToCart: { en: 'Add', es: 'Agregar', pt: 'Adicionar' },
  remove: { en: 'Remove', es: 'Eliminar', pt: 'Remover' },
  
  // Reviews
  reviewsTitle: { en: 'What Our Clients Say', es: 'Lo Que Dicen Nuestros Clientes', pt: 'O Que Nossos Clientes Dizem' },
  noReviews: { en: 'No reviews yet', es: 'Aún no hay reseñas', pt: 'Ainda não há avaliações' },
  
  // Newsletter
  newsletterTitle: { en: '10% OFF YOUR NEXT ORDER', es: '10% DE DESCUENTO EN TU PRÓXIMO PEDIDO', pt: '10% DE DESCONTO NO SEU PRÓXIMO PEDIDO' },
  newsletterSubtitle: { en: 'Subscribe to our mailing list for your exclusive discount and our latest updates!', es: '¡Suscríbete a nuestra lista para tu descuento exclusivo y nuestras últimas novedades!', pt: 'Inscreva-se na nossa lista para receber seu desconto exclusivo e nossas últimas novidades!' },
  firstName: { en: 'First Name', es: 'Nombre', pt: 'Primeiro Nome' },
  birthday: { en: 'Birthday (DD/MM)', es: 'Cumpleaños (DD/MM)', pt: 'Aniversário (DD/MM)' },
  email: { en: 'Email', es: 'Correo Electrónico', pt: 'Email' },
  subscribe: { en: 'Subscribe', es: 'Suscribirse', pt: 'Inscrever-se' },
  subscribing: { en: 'Subscribing...', es: 'Suscribiendo...', pt: 'Inscrevendo...' },
  subscribeSuccess: { en: 'Thank you! Check your email for your discount code.', es: '¡Gracias! Revisa tu correo para tu código de descuento.', pt: 'Obrigado! Verifique seu email para o código de desconto.' },
  subscribeError: { en: 'Something went wrong. Please try again.', es: 'Algo salió mal. Por favor intenta de nuevo.', pt: 'Algo deu errado. Por favor, tente novamente.' },
  
  // Signature Sweets
  signatureSweetsTitle: { en: 'Signature Sweets', es: 'Dulces Exclusivos', pt: 'Doces Exclusivos' },
  signatureSweetsDescription: { en: 'Discover our handcrafted specialty sweets', es: 'Descubre nuestros dulces especiales hechos a mano', pt: 'Descubra nossos doces especiais feitos à mão' },
  backToSignatureSweets: { en: 'Back to Signature Sweets', es: 'Volver a Dulces Exclusivos', pt: 'Voltar aos Doces Exclusivos' },
  
  // Menu
  searchPlaceholder: { en: 'Search flavors, tags…', es: 'Buscar sabores, etiquetas…', pt: 'Buscar sabores, tags…' },
  cakes: { en: '🎂 Cakes', es: '🎂 Tortas', pt: '🎂 Bolos' },
  sweets: { en: '🍬 Sweets', es: '🍬 Dulces', pt: '🍬 Doces' },
  all: { en: '⭐ All', es: '⭐ Todo', pt: '⭐ Todos' },
  items: { en: 'items', es: 'artículos', pt: 'itens' },
  
  // About
  aboutTitle: { en: 'About Sweets Love', es: 'Acerca de Sweets Love', pt: 'Sobre Sweets Love' },
  aboutDescription: {
    en: 'I pour my passion into every cake and pastry I make. Each treat is handcrafted with the finest ingredients to bring joy to your special moments.',
    es: 'Pongo mi pasión en cada torta y dulce que hago. Cada creación está hecha a mano con los mejores ingredientes para traer alegría a tus momentos especiales.',
    pt: 'Coloco minha paixão em cada bolo e doce que faço. Cada criação é feita à mão com os melhores ingredientes para trazer alegria aos seus momentos especiais.'
  },
  
  // Footer
  footerText: { en: 'Sweets Love • Burnaby, BC • All rights reserved.', es: 'Sweets Love • Burnaby, BC • Todos los derechos reservados.', pt: 'Sweets Love • Burnaby, BC • Todos os direitos reservados.' },
  pages: { en: 'Pages', es: 'Páginas', pt: 'Páginas' },
  legal: { en: 'Legal', es: 'Legal', pt: 'Legal' }
};

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || translations[key]?.en || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
};
