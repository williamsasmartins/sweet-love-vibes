import { Card } from '@/components/ui/card';

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold heading-display mb-8">Privacy Policy</h1>

      <Card className="p-8 shadow-[var(--shadow-soft)] space-y-4 text-muted-foreground">
        <p>
          We collect only essential contact and order details to prepare your sweets, including your name,
          phone/WhatsApp number, and order notes.
        </p>

        <p>
          We do not sell or share personal data with third parties. Your information is used solely for order
          fulfillment and communication purposes.
        </p>

        <p>
          Photos of our creations may be shared on our social media platforms without personal identifiers. If you
          prefer your order not to be featured, please let us know at the time of ordering.
        </p>

        <p>
          For questions or concerns about your privacy, please contact us at{' '}
          <a href="mailto:lupancine@gmail.com" className="text-primary hover:underline">
            lupancine@gmail.com
          </a>
          .
        </p>
      </Card>
    </div>
  );
};

export default Privacy;
