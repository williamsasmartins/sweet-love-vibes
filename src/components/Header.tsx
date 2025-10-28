import { Link, useLocation } from 'react-router-dom';
import { useI18n, Language } from '@/contexts/I18nContext';
import logoRound from '@/assets/logo-round.png';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Header = () => {
  const { language, setLanguage, t } = useI18n();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between flex-wrap gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoRound} alt="Sweets Love" className="h-11 w-11 rounded-full" />
            <h1 className="text-xl font-bold heading-display">Sweets Love</h1>
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
              <span>🌐</span>
              <Select value={language} onValueChange={(val) => setLanguage(val as Language)}>
                <SelectTrigger className="w-20 border-0 bg-transparent h-auto p-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">EN</SelectItem>
                  <SelectItem value="es">ES</SelectItem>
                  <SelectItem value="pt">PT-BR</SelectItem>
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
