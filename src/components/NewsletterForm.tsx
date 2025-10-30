import { useState } from 'react';
import { useI18n } from '@/contexts/I18nContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';

const NewsletterForm = () => {
  const { t } = useI18n();
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    firstName: '',
    birthday: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/manlbzev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: formState.firstName,
          birthday: formState.birthday,
          email: formState.email
        })
      });

      if (response.ok) {
        toast({
          title: t('subscribeSuccess'),
          variant: 'default'
        });
        setFormState({ firstName: '', birthday: '', email: '' });
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      toast({
        title: t('subscribeError'),
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-background to-accent/10 border border-border rounded-[var(--radius)] p-6 md:p-8 shadow-[var(--shadow-soft)]">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary/20 flex items-center justify-center flex-shrink-0">
          <Mail className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold heading-display mb-1">
            {t('newsletterTitle')}
          </h3>
          <p className="text-sm text-muted-foreground">
            {t('newsletterSubtitle')}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="text"
          placeholder={t('firstName')}
          value={formState.firstName}
          onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
          required
          className="bg-background"
        />
        <Input
          type="text"
          placeholder={t('birthday')}
          value={formState.birthday}
          onChange={(e) => setFormState({ ...formState, birthday: e.target.value })}
          pattern="\d{2}/\d{2}"
          title="Format: DD/MM"
          className="bg-background"
        />
        <Input
          type="email"
          placeholder={t('email')}
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          required
          className="bg-background"
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? t('subscribing') : t('subscribe')}
        </Button>
      </form>
    </div>
  );
};

export default NewsletterForm;
