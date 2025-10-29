import { Card } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

const Terms = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <Helmet>
        <link rel="canonical" href="https://www.sweetslove.ca/terms" />
        <title>Terms of Service — Sweets Love by Lu</title>
        <meta name="description" content="Purchase terms, cancellations, deposits and pickup rules." />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sweets Love by Lu" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:url" content="https://www.sweetslove.ca/terms" />
        <meta property="og:title" content="Terms of Service — Sweets Love by Lu" />
        <meta property="og:description" content="Purchase terms, cancellations, deposits and pickup rules." />
        <meta property="og:image" content="https://www.sweetslove.ca/og-image.png" />
        <meta property="og:image:alt" content="Sweets Love by Lu — logo" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms of Service — Sweets Love by Lu" />
        <meta name="twitter:description" content="Purchase terms, cancellations, deposits and pickup rules." />
        <meta name="twitter:image" content="https://www.sweetslove.ca/og-image.png" />
      </Helmet>
      <h1 className="text-4xl font-bold heading-display mb-8">Terms of Service</h1>

      <Card className="p-8 shadow-[var(--shadow-soft)] space-y-4 text-muted-foreground">
        <p>
          Quotes are valid for 24 hours. A 50% non-refundable deposit is required to confirm your order. Orders
          canceled within 48 hours of pickup are charged in full.
        </p>

        <p>
          Changes to the pickup date require 7 days' notice. Deposits may be kept as credit (valid for 30 days).
        </p>

        <p>
          The pickup window includes a 30-minute grace period. After that, a new time will be arranged with an
          additional fee of $40.
        </p>

        <p>
          All products are handmade and made-to-order; returns are not accepted. Please inform us of any food
          allergies when ordering.
        </p>

        <p>
          We reserve the right to refuse service or cancel orders at our discretion. All designs are unique
          interpretations and may not exactly match reference photos.
        </p>
      </Card>
    </div>
  );
};

export default Terms;
