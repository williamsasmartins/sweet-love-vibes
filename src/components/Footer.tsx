import { Link } from 'react-router-dom';
import { useI18n } from '@/contexts/I18nContext';
import logoRound from '@/assets/logo-sweetslove.png';
import fallbackLogo from '@/assets/logo-round.png';

const Footer = () => {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoRound}
                alt="Sweets Love"
                className="h-12 w-12 rounded-full bg-white p-1 border border-border shadow-sm object-contain"
                loading="eager"
                onError={(e) => {
                  e.currentTarget.src = fallbackLogo;
                }}
              />
              <span className="font-bold heading-display text-lg">Sweets Love</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} {t('footerText')}
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-3">{t('pages')}</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/" className="text-foreground/70 hover:text-foreground">
                {t('home')}
              </Link>
              <Link to="/menu" className="text-foreground/70 hover:text-foreground">
                {t('menu')}
              </Link>
              <Link to="/about" className="text-foreground/70 hover:text-foreground">
                {t('about')}
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-3">{t('legal')}</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/terms" className="text-foreground/70 hover:text-foreground">
                {t('terms')}
              </Link>
              <a href="/privacy.html" className="text-foreground/70 hover:text-foreground">
                {t('privacy')}
              </a>
              <a
                href="https://www.instagram.com/sweets_love.lu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
