import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { useI18n } from '@/contexts/I18nContext';
import type { GalleryCategory } from '@/data/menuData';

// Import all gallery images
import signatureCover from '@/assets/gallery/signature-cover.jpg';
import weddingCover from '@/assets/gallery/wedding-cover.jpg';
import adultCover from '@/assets/gallery/adult-cover.jpg';
import kidsCover from '@/assets/gallery/kids-cover.jpg';
import babyCover from '@/assets/gallery/baby-cover.jpg';
import vintageCover from '@/assets/gallery/vintage-cover.jpg';

const imageMap: Record<string, string> = {
  'signature-cover': signatureCover,
  'wedding-cover': weddingCover,
  'adult-cover': adultCover,
  'kids-cover': kidsCover,
  'baby-cover': babyCover,
  'vintage-cover': vintageCover,
};

interface GalleryCategoryCardProps {
  category: GalleryCategory;
}

const GalleryCategoryCard = ({ category }: GalleryCategoryCardProps) => {
  const { language } = useI18n();
  
  const imageUrl = imageMap[category.image] || signatureCover;

  return (
    <Link 
      to={`/gallery/${category.slug}`}
      className={`group relative overflow-hidden rounded-[var(--radius)] shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lifted)] transition-all duration-300 ${
        category.featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={imageUrl} 
          alt={category.name[language]}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        {category.featured && (
          <Badge className="mb-2 bg-[hsl(var(--brand))] text-foreground border-0">
            Featured
          </Badge>
        )}
        <h3 className="text-2xl md:text-3xl font-bold mb-2">
          {category.name[language]}
        </h3>
        <p className="text-white/90 text-sm md:text-base">
          {category.description[language]}
        </p>
      </div>
    </Link>
  );
};

export default GalleryCategoryCard;
