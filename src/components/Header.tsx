import { Link, useLocation } from 'react-router-dom';
import { useI18n, Language } from '@/contexts/I18nContext';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import usFlag from '@/assets/flags/us.svg';
import esFlag from '@/assets/flags/es.svg';
import brFlag from '@/assets/flags/br.svg';

const Header = () => {
  const { language, setLanguage, t } = useI18n();
  const location = useLocation();

  const flagByLang: Record<Language, string> = {
    en: usFlag,
    es: esFlag,
    pt: brFlag,
  };

  const flagAlt: Record<Language, string> = {
    en: 'United States flag',
    es: 'Spain flag',
    pt: 'Brazil flag',
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between flex-wrap gap-4">
          <Link to="/" className="inline-flex items-center gap-3">
            <img
              src="/logos/logo-sweetslove.png"
              alt="Sweets Love by Lu — logo"
              className="h-9 w-9 rounded-full"
              loading="eager"
              decoding="sync"
            />
            <span className="sr-only">Sweets Love by Lu</span>
            <span className="hidden sm:inline-flex px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-b from-white to-accent text-accent-foreground border border-border">
              Burnaby • Vancouver
            </span>
          </Link>

          <div className="flex items-center gap-2 flex-wrap">
            <Link
              to="/"
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                isActive('/') ? 'bg-card border border-border shadow-sm' : 'hover:bg-accent/50'
              }`}
            >
              {t('home')}
            </Link>
            <Link
              to="/menu"
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                isActive('/menu') ? 'bg-card border border-border shadow-sm' : 'hover:bg-accent/50'
              }`}
            >
              {t('menu')}
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                isActive('/about') ? 'bg-card border border-border shadow-sm' : 'hover:bg-accent/50'
              }`}
            >
              {t('about')}
            </Link>

            <a
              href="https://wa.me/12365093775"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-sm font-bold bg-[#25D366] text-[#073518] hover:bg-[#20BD5C] transition-all shadow-sm"
            >
              WhatsApp
            </a>

            <div className="flex items-center gap-2 px-2 py-1 rounded-full border border-border bg-card">
              <img
                src={flagByLang[language]}
                alt={flagAlt[language]}
                aria-label="language-flag"
                title={language}
                className="h-5 w-5 rounded-full object-cover"
              />
              <Select value={language} onValueChange={(val) => setLanguage(val as Language)}>
                <SelectTrigger className="w-20 border-0 bg-transparent h-auto p-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value="en"
                    leading={<img src={usFlag} alt="United States flag" className="h-4 w-4 rounded-full object-cover" loading="lazy" />}
                  >
                    EN
                  </SelectItem>
                  <SelectItem
                    value="es"
                    leading={<img src={esFlag} alt="Spain flag" className="h-4 w-4 rounded-full object-cover" loading="lazy" />}
                  >
                    ES
                  </SelectItem>
                  <SelectItem
                    value="pt"
                    leading={<img src={brFlag} alt="Brazil flag" className="h-4 w-4 rounded-full object-cover" loading="lazy" />}
                  >
                    PT-BR
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
