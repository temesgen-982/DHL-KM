import { useStore } from '../store/useStore';
import { translations } from '../i18n/translations';
import { KnowledgeCard } from '../components/KnowledgeCard';
import { categories } from '../data/mockData';
import { Filter, Search } from 'lucide-react';

export function KnowledgeBase() {
  const { knowledgeItems, searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, language } = useStore();
  const t = translations[language];

  const filteredItems = knowledgeItems.filter((item) => {
    const matchesSearch =
      searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === null || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 mb-2">
          {t.knowledgeBase.title}
        </h1>
        <p className="text-neutral-600 mb-6">{t.knowledgeBase.subtitle}</p>

        <div className="relative mb-6 max-w-2xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.search.placeholder}
            className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-12 py-4 text-base text-neutral-900 placeholder:text-neutral-400 focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-100"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            selectedCategory === null
              ? 'bg-amber-500 text-neutral-950 font-medium'
              : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
          }`}
        >
          <Filter size={16} />
          {t.knowledgeBase.filterAll}
        </button>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === category
                ? 'bg-amber-500 text-neutral-950 font-medium'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-neutral-500 text-lg">No knowledge cards found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <KnowledgeCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
