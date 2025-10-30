import { REVIEWS } from '@/data/menuData';
import { useI18n } from '@/contexts/I18nContext';
import { Card } from '@/components/ui/card';
import StarRating from '@/components/StarRating';

interface ReviewsSectionProps {
  productId?: string;
  limit?: number;
}

const ReviewsSection = ({ productId, limit }: ReviewsSectionProps) => {
  const { t } = useI18n();

  let reviews = productId 
    ? REVIEWS.filter(r => r.productId === productId) 
    : REVIEWS;

  if (limit) {
    reviews = reviews.slice(0, limit);
  }

  if (reviews.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        {t('noReviews')}
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl md:text-3xl font-bold heading-display">
        {t('reviewsTitle')}
      </h3>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <Card key={review.id} className="p-6 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-foreground/20 flex items-center justify-center text-foreground font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{formatDate(review.date)}</p>
                </div>
              </div>
              <StarRating rating={review.rating} size="sm" />
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
              "{review.comment}"
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
