import { useState } from 'react';
import { Product } from '@/data/menuData';
import { useCart } from '@/contexts/CartContext';
import { useI18n } from '@/contexts/I18nContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import chocolateCake from '@/assets/chocolate-cake.jpg';
import cupcakes from '@/assets/cupcakes.jpg';
import brigadeiros from '@/assets/brigadeiros.jpg';

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const { t, language } = useI18n();
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [qty, setQty] = useState(1);

  const currency = { en: '$', es: '$', pt: 'R$' }[language];
  
  const title = product.i18n?.[language]?.title || product.title;
  const description = product.i18n?.[language]?.description || product.description;

  const getImage = () => {
    if (product.images && product.images.length > 0) return product.images[0];
    if (product.type === 'sweets') {
      if (product.category === 'Brigadeiros') return brigadeiros;
      if (product.category === 'Cupcakes') return cupcakes;
    }
    return chocolateCake;
  };

  const handleAdd = () => {
    const variant = product.variants ? product.variants[selectedVariantIndex] : null;
    addToCart({
      id: product.id,
      title,
      variant: variant?.label,
      price: variant?.price || product.price || 0,
      qty
    });
    setQty(1);
  };

  const currentPrice = product.variants
    ? product.variants[selectedVariantIndex]?.price || 0
    : product.price || 0;

  return (
    <Card className="overflow-hidden flex flex-col shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lifted)] transition-all duration-300">
      <div className="aspect-[4/3] overflow-hidden bg-accent/20 border-b">
        <img src={getImage()} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="p-4 flex flex-col gap-3 flex-1">
        <div>
          <h4 className="font-bold text-lg mb-1 heading-display">{title}</h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2 mt-auto">
          {product.variants && product.variants.length > 1 && (
            <Select
              value={selectedVariantIndex.toString()}
              onValueChange={(val) => setSelectedVariantIndex(Number(val))}
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {product.variants.map((variant, idx) => (
                  <SelectItem key={idx} value={idx.toString()}>
                    {variant.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}

          <div className="flex items-center gap-2 w-full">
            <Input
              type="number"
              min="1"
              value={qty}
              onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-20"
            />
            <Button onClick={handleAdd} className="flex-1">
              {t('addToCart')}
            </Button>
            <div className="font-bold text-lg whitespace-nowrap">
              {currency}
              {currentPrice.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
