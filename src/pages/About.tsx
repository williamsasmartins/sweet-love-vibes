import { useI18n } from '@/contexts/I18nContext';
import { Card } from '@/components/ui/card';
import heroImage from '@/assets/hero-cake.jpg';

const About = () => {
  const { t } = useI18n();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold heading-display mb-8">{t('aboutTitle')}</h1>

      <div className="grid md:grid-cols-[1.5fr_1fr] gap-6">
        <Card className="p-8 shadow-[var(--shadow-soft)]">
          <h2 className="text-2xl font-bold heading-display mb-4">Hi, I'm Luciana</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>{t('aboutDescription')}</p>
            <p>
              <strong>Pickup:</strong> 5051 Lougheed Hwy, Burnaby
              <br />
              <strong>WhatsApp:</strong> +1 (236) 509-3775
              <br />
              <strong>Instagram:</strong>{' '}
              <a
                href="https://www.instagram.com/sweets_love.lu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                @sweets_love.lu
              </a>
            </p>
          </div>
        </Card>

        <Card className="overflow-hidden shadow-[var(--shadow-soft)]">
          <div className="aspect-[4/3] border-b">
            <img src={heroImage} alt="About Sweets Love" className="w-full h-full object-cover" />
          </div>
          <div className="p-6">
            <p className="text-sm text-muted-foreground">
              Swiss meringue buttercream or Callebaut ganache (+$45). All cakes have 3 layers of filling and 4 of
              cake (Petite has 2/3).
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
