import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: 1 | 2 | 3 | 4 | 5;
  size?: 'sm' | 'md' | 'lg';
}

const StarRating = ({ rating, size = 'md' }: StarRatingProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${sizeClasses[size]} ${
            star <= rating
              ? 'fill-[hsl(var(--brand))] text-[hsl(var(--brand))]'
              : 'fill-none text-muted-foreground/30'
          }`}
        />
      ))}
    </div>
  );
};

export default StarRating;
