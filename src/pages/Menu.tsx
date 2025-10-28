import { useState, useMemo } from 'react';
import { useI18n } from '@/contexts/I18nContext';
import { MENU_ITEMS, CATEGORIES } from '@/data/menuData';
import ProductCard from '@/components/ProductCard';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

type TabType = 'cakes' | 'sweets' | 'all';

const Menu = () => {
  const { t } = useI18n();
  const [tab, setTab] = useState<TabType>('cakes');
  const [search, setSearch] = useState('');
  const [activeCategories, setActiveCategories] = useState<Set<string>>(new Set());

  const filteredProducts = useMemo(() => {
    return MENU_ITEMS.filter((product) => {
      // Filter by tab
      if (tab === 'cakes' && product.type !== 'cakes') return false;
      if (tab === 'sweets' && product.type !== 'sweets') return false;

      // Filter by category
      if (activeCategories.size > 0 && !activeCategories.has(product.category)) return false;

      // Filter by search
      if (search) {
        const searchLower = search.toLowerCase();
        const searchableText = [
          product.title,
          product.description,
          product.category,
          ...product.tags
        ].join(' ').toLowerCase();
        if (!searchableText.includes(searchLower)) return false;
      }

      return true;
    });
  }, [tab, search, activeCategories]);

  const toggleCategory = (category: string) => {
    const newSet = new Set(activeCategories);
    if (newSet.has(category)) {
      newSet.delete(category);
    } else {
      newSet.add(category);
    }
    setActiveCategories(newSet);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold heading-display mb-6">{t('menu')}</h1>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setTab('cakes')}
          className={`px-4 py-2 rounded-full font-bold text-sm transition-all ${
            tab === 'cakes'
              ? 'bg-gradient-to-b from-white to-accent border-2 border-accent text-accent-foreground shadow-sm'
              : 'bg-card border border-border hover:border-accent/50'
          }`}
        >
          {t('cakes')}
        </button>
        <button
          onClick={() => setTab('sweets')}
          className={`px-4 py-2 rounded-full font-bold text-sm transition-all ${
            tab === 'sweets'
              ? 'bg-gradient-to-b from-white to-accent border-2 border-accent text-accent-foreground shadow-sm'
              : 'bg-card border border-border hover:border-accent/50'
          }`}
        >
          {t('sweets')}
        </button>
        <button
          onClick={() => setTab('all')}
          className={`px-4 py-2 rounded-full font-bold text-sm transition-all ${
            tab === 'all'
              ? 'bg-gradient-to-b from-white to-accent border-2 border-accent text-accent-foreground shadow-sm'
              : 'bg-card border border-border hover:border-accent/50'
          }`}
        >
          {t('all')}
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap gap-3 mb-6">
        <Input
          placeholder={t('searchPlaceholder')}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs"
        />
        
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <Badge
              key={cat}
              variant={activeCategories.has(cat) ? 'default' : 'outline'}
              className="cursor-pointer hover:border-accent"
              onClick={() => toggleCategory(cat)}
            >
              {cat}
            </Badge>
          ))}
        </div>

        <Badge variant="outline" className="ml-auto">
          {filteredProducts.length} {t('items')}
        </Badge>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Notes Section */}
      <section className="mt-16 p-8 bg-card rounded-3xl shadow-[var(--shadow-soft)] border">
        <h2 className="text-2xl font-bold heading-display mb-4">Before you order</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Place orders at least <strong>5 days</strong> in advance. Quotes valid for <strong>24h</strong>.</li>
          <li>• Orders confirmed after <strong>50% deposit</strong> (e-transfer to <strong>lupancine@gmail.com</strong>).</li>
          <li>• Frosting: <strong>Swiss meringue buttercream</strong> or <strong>Callebaut ganache</strong> (+$45).</li>
          <li>• Decoration/fresh flowers/fruits billed separately; availability may vary.</li>
          <li>• We don't replicate reference photos 1:1 — every cake is unique.</li>
        </ul>
      </section>
    </div>
  );
};

export default Menu;
