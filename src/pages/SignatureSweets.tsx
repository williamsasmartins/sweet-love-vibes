import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useI18n } from '@/contexts/I18nContext';
import { Card } from '@/components/ui/card';
import Breadcrumb from '@/components/Breadcrumb';
import brigadeirosImg from '@/assets/signature-sweets/brigadeiros-main.jpg';
import cupcakesImg from '@/assets/signature-sweets/cupcakes-main.jpg';
import truffleConesImg from '@/assets/signature-sweets/truffle-cones-main.jpg';
import honeyCakeImg from '@/assets/signature-sweets/honey-cake-main.jpg';

const SignatureSweets = () => {
  const { t } = useI18n();

  const sweets = [
    { id: 'brigadeiros', name: 'Brigadeiros', image: brigadeirosImg, icon: '🍫' },
    { id: 'cupcakes', name: 'Cupcakes', image: cupcakesImg, icon: '🧁' },
    { id: 'truffle-cones', name: 'Truffle Cones', image: truffleConesImg, icon: '🍦' },
    { id: 'honey-cake', name: 'Honey Cake', image: honeyCakeImg, icon: '🍯' }
  ];

  return (
    <div>
      <Helmet>
        <title>Signature Sweets — Sweets Love by Lu</title>
        <meta name="description" content="Discover our handcrafted specialty sweets: brigadeiros, cupcakes, truffle cones, and honey cakes." />
      </Helmet>

      <section className="container mx-auto px-4 py-12">
        <Breadcrumb items={[
          { label: t('home'), href: '/' },
          { label: t('signatureSweets') }
        ]} />

        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold heading-display mb-3">
            {t('signatureSweetsTitle')}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t('signatureSweetsDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {sweets.map((sweet) => (
            <Link key={sweet.id} to={`/signature-sweets/${sweet.id}`}>
              <Card className="overflow-hidden group cursor-pointer hover:shadow-[var(--shadow-lifted)] transition-all">
                <div className="aspect-[3/2] overflow-hidden">
                  <img 
                    src={sweet.image} 
                    alt={sweet.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold heading-display flex items-center gap-2">
                    <span>{sweet.icon}</span>
                    {sweet.name}
                  </h3>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SignatureSweets;
