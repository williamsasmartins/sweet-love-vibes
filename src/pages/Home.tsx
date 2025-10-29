import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useI18n } from '@/contexts/I18nContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/hero-cake.jpg';
import chocolateCake from '@/assets/chocolate-cake.jpg';
import brigadeiros from '@/assets/brigadeiros.jpg';
import cupcakes from '@/assets/cupcakes.jpg';

const Home = () => {
  const { t } = useI18n();

  return (
    <div>
      <Helmet>
        <title>Sweets Love by Lu — Custom Cakes & Signature Sweets</title>
        <meta name="description" content="Custom cakes for every occasion, gourmet brigadeiros, cupcakes & more. Order via WhatsApp. Burnaby / Vancouver." />
        <link rel="canonical" href="https://www.sweetslove.ca/" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sweets Love by Lu" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:url" content="https://www.sweetslove.ca/" />
        <meta property="og:title" content="Sweets Love by Lu — Custom Cakes & Signature Sweets" />
        <meta property="og:description" content="Custom cakes for every occasion, gourmet brigadeiros, cupcakes & more. Order via WhatsApp. Burnaby / Vancouver." />
        <meta property="og:image" content="https://www.sweetslove.ca/og-image.png" />
        <meta property="og:image:alt" content="Sweets Love by Lu — logo" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sweets Love by Lu — Custom Cakes & Signature Sweets" />
        <meta name="twitter:description" content="Custom cakes for every occasion, gourmet brigadeiros, cupcakes & more." />
        <meta name="twitter:image" content="https://www.sweetslove.ca/og-image.png" />
      </Helmet>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
          <div className="space-y-6">
            <Badge className="bg-gradient-to-b from-white to-accent border border-border text-accent-foreground">
              {t('lead')}
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold heading-display leading-tight">
              {t('heroTitle')}
            </h2>
            <p className="text-lg text-foreground/80">
              {t('heroDescription')}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/menu">{t('exploreMenu')}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a
                  href="https://www.instagram.com/sweets_love.lu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </Button>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                📍 5051 Lougheed Hwy — Pickup
              </Badge>
            </div>
          </div>

          <Card className="overflow-hidden shadow-[var(--shadow-lifted)]">
            <div className="aspect-[4/3] overflow-hidden border-b">
              <img src={heroImage} alt="Luxury Wedding Cake" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 space-y-3">
              <h3 className="font-bold text-xl heading-display">Luxury tiered cakes & gourmet sweets</h3>
              <p className="text-sm text-muted-foreground">
                Swiss meringue buttercream or Callebaut ganache (+$45). 50% deposit to confirm. Quotes valid for 24h.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">🎂 Weddings</Badge>
                <Badge variant="outline">🧁 Birthdays</Badge>
                <Badge variant="outline">👶 Baby Shower</Badge>
                <Badge variant="outline">🎓 Graduation</Badge>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold heading-display mb-8">Highlights</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="overflow-hidden shadow-[var(--shadow-soft)]">
            <div className="aspect-[4/3] overflow-hidden border-b">
              <img src={chocolateCake} alt="Cakes" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="font-bold text-lg heading-display">Choose your cake size</h3>
              <p className="text-sm text-muted-foreground">
                <strong>Petite (15cm)</strong> $85 · <strong>Petite Classic (15cm)</strong> $110 ·{' '}
                <strong>Classic (20cm)</strong> $140 · <strong>Supreme (25cm)</strong> $170
              </p>
            </div>
          </Card>

          <Card className="overflow-hidden shadow-[var(--shadow-soft)]">
            <div className="aspect-[4/3] overflow-hidden border-b">
              <img src={brigadeiros} alt="Brigadeiros" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="font-bold text-lg heading-display">Signature sweets</h3>
              <p className="text-sm text-muted-foreground">
                Brigadeiros (15g/20g), Cupcakes, Truffle Cones, Honey Cake (boxes).
              </p>
            </div>
          </Card>

          <Card className="overflow-hidden shadow-[var(--shadow-soft)]">
            <div className="aspect-[4/3] overflow-hidden border-b">
              <img src={cupcakes} alt="Cupcakes" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="font-bold text-lg heading-display">Order & pickup</h3>
              <p className="text-sm text-muted-foreground">
                Order via WhatsApp <strong>+1 (236) 509-3775</strong>. Pickup Burnaby. 30-min grace period.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
