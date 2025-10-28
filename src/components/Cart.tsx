import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useI18n } from '@/contexts/I18nContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PHONE_NUMBER, PICKUP_ADDRESS } from '@/data/menuData';

const Cart = () => {
  const { cart, removeFromCart, clearCart, total } = useCart();
  const { t, language } = useI18n();

  const currency = { en: '$', es: '$', pt: 'R$' }[language];

  const buildWhatsAppMessage = () => {
    let lines = [];
    const greeting = { en: "Hello! I'd like to order:", es: '¡Hola! Me gustaría pedir:', pt: 'Olá! Gostaria de pedir:' }[language];
    lines.push(greeting);
    cart.forEach((item) => {
      lines.push(`• ${item.title}${item.variant ? ` — ${item.variant}` : ''} × ${item.qty} = ${currency}${(item.qty * item.price).toFixed(2)}`);
    });
    lines.push(`Total: ${currency}${total.toFixed(2)}`);
    lines.push('');
    lines.push(`Pickup: ${PICKUP_ADDRESS}`);
    lines.push('Name: ______ | Date: ____ | Guests: ____ | Theme/colors: ____');
    return lines.join('\n');
  };

  if (cart.length === 0) return null;

  return (
    <Card className="fixed right-4 bottom-4 z-50 p-4 w-full max-w-md shadow-[var(--shadow-lifted)]">
      <div className="flex items-center gap-2 mb-3">
        <ShoppingCart className="h-5 w-5" />
        <h3 className="font-bold text-lg">{t('yourCart')}</h3>
        {cart.length > 0 && (
          <Badge variant="secondary" className="ml-auto">
            {cart.length}
          </Badge>
        )}
      </div>

      <div className="max-h-[50vh] overflow-auto space-y-2 mb-3">
        {cart.map((item, index) => (
          <div key={index} className="grid grid-cols-[1fr_auto] gap-2 pb-2 border-b border-dashed last:border-0">
            <div>
              <div className="font-semibold text-sm">{item.title}</div>
              {item.variant && <Badge variant="outline" className="text-xs mt-1">{item.variant}</Badge>}
              <div className="text-xs text-muted-foreground">
                × {item.qty}
                <button
                  onClick={() => removeFromCart(index)}
                  className="ml-3 underline hover:text-destructive"
                >
                  {t('remove')}
                </button>
              </div>
            </div>
            <div className="font-bold text-sm">
              {currency}
              {(item.price * item.qty).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mb-3 pt-2 border-t font-bold">
        <span>{t('total')}</span>
        <span>
          {currency}
          {total.toFixed(2)}
        </span>
      </div>

      <div className="flex gap-2">
        <Button variant="outline" onClick={clearCart} className="flex-1">
          {t('clear')}
        </Button>
        <Button
          asChild
          className="flex-1 bg-[#25D366] hover:bg-[#20BD5C] text-[#073518]"
        >
          <a
            href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage())}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('checkoutWhatsApp')}
          </a>
        </Button>
      </div>

      <div className="flex gap-2 mt-2 text-xs">
        <Badge variant="outline">📞 +1 (236) 509-3775</Badge>
        <Badge variant="outline">IG: @sweets_love.lu</Badge>
      </div>
    </Card>
  );
};

export default Cart;
