import { Card } from '@/components/ui/card';
// Using native <hr> for broader compatibility and zero external deps

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold heading-display mb-4">Privacy Policy – Sweets Love by Lu</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: October 28, 2025</p>

      <Card className="p-8 shadow-[var(--shadow-soft)] space-y-6">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Website: <code className="font-mono bg-muted px-1.5 py-0.5 rounded">https://www.sweetslove.ca</code>
          </p>
          <p className="text-sm text-muted-foreground">
            Contact: <a href="mailto:contact@sweetslove.ca" className="text-primary hover:underline">contact@sweetslove.ca</a>
            {' '}| WhatsApp: <a href="https://wa.me/12365093775" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">+1 236 509 3775</a>
          </p>
        </div>

        <hr className="border-border" />

        <section className="space-y-3">
          <h3 className="text-xl font-semibold">1. Data We Collect</h3>
          <p className="text-muted-foreground">We collect only essential contact and order details to prepare your sweets, including:</p>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>Your name</li>
            <li>Phone/WhatsApp number</li>
            <li>Order notes, photos, or voice messages (via WhatsApp)</li>
          </ul>
        </section>

        <hr className="border-border" />

        <section className="space-y-3">
          <h3 className="text-xl font-semibold">2. How We Use Your Data</h3>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>To process and confirm orders</li>
            <li>To communicate via WhatsApp (automated responses using AI from <strong>OpenAI</strong> and voice from <strong>ElevenLabs</strong>)</li>
            <li>To improve our service</li>
          </ul>
          <p className="text-muted-foreground font-semibold">We do not sell or share personal data with third parties.</p>
        </section>

        <hr className="border-border" />

        <section className="space-y-3">
          <h3 className="text-xl font-semibold">3. Data Sharing</h3>
          <p className="text-muted-foreground">Your data is shared <strong>only with</strong>:</p>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li><strong>OpenAI</strong> (to generate AI responses)</li>
            <li><strong>ElevenLabs</strong> (to create voice messages)</li>
            <li><strong>Meta (WhatsApp Cloud API)</strong> for message delivery</li>
          </ul>
          <p className="text-muted-foreground">All partners are GDPR/PIPEDA compliant.</p>
        </section>

        <hr className="border-border" />

        <section className="space-y-3">
          <h3 className="text-xl font-semibold">4. Your Rights</h3>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li><strong>Request deletion:</strong> Send "DELETE MY DATA" via WhatsApp or email</li>
            <li><strong>Opt-out of photos:</strong> Tell us at order time</li>
            <li><strong>Access your data:</strong> Email us anytime</li>
          </ul>
          <p className="text-muted-foreground">We respond within <strong>48 hours</strong>.</p>
        </section>

        <hr className="border-border" />

        <section className="space-y-3">
          <h3 className="text-xl font-semibold">5. Photos & Social Media</h3>
          <p className="text-muted-foreground">Photos of our creations may be shared on <a href="https://www.instagram.com/sweets_love.lu" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Instagram @sweets_love.lu</a> without personal identifiers.</p>
          <p className="text-muted-foreground">If you prefer your order not to be featured, please let us know at the time of ordering.</p>
        </section>

        <hr className="border-border" />

        <section className="space-y-3">
          <h3 className="text-xl font-semibold">6. Security & Retention</h3>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>Messages are stored securely for <strong>30 days</strong> (order history)</li>
            <li>Deleted upon request</li>
            <li>We use encryption via WhatsApp and secure servers</li>
          </ul>
        </section>

        <hr className="border-border" />

        <section className="space-y-3">
          <h3 className="text-xl font-semibold">7. Contact Us</h3>
          <p className="text-muted-foreground">For questions or concerns about your privacy, please contact:</p>
          <p>
            <a href="mailto:contact@sweetslove.ca" className="text-primary hover:underline">contact@sweetslove.ca</a>
          </p>
        </section>
      </Card>
    </div>
  );
};

export default Privacy;
