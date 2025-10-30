import { Helmet } from 'react-helmet-async';
import { useI18n } from '@/contexts/I18nContext';
import { GALLERY_CATEGORIES } from '@/data/menuData';
import GalleryCategoryCard from '@/components/GalleryCategoryCard';
import Breadcrumb from '@/components/Breadcrumb';

const Gallery = () => {
  const { t } = useI18n();

  return (
    <div>
      <Helmet>
        <title>Cake Gallery — Sweets Love by Lu</title>
        <meta name="description" content="Browse our beautiful collection of custom cakes organized by category. Wedding cakes, birthday cakes, and more." />
      </Helmet>

      <section className="container mx-auto px-4 py-12">
        <Breadcrumb items={[
          { label: t('home'), href: '/' },
          { label: t('gallery') }
        ]} />

        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold heading-display mb-3">
            {t('galleryTitle')}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t('galleryDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {GALLERY_CATEGORIES.map((category) => (
            <GalleryCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
