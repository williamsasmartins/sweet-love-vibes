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
  
  // Cart
  yourCart: { en: 'Your Cart', es: 'Tu Carrito', pt: 'Seu Carrinho' },
  total: { en: 'Total', es: 'Total', pt: 'Total' },
  clear: { en: 'Clear', es: 'Vaciar', pt: 'Limpar' },
  checkoutWhatsApp: { en: 'Checkout via WhatsApp', es: 'Pagar por WhatsApp', pt: 'Finalizar via WhatsApp' },
  addToCart: { en: 'Add', es: 'Agregar', pt: 'Adicionar' },
  remove: { en: 'Remove', es: 'Eliminar', pt: 'Remover' },
  
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
