import { useStore } from '../store/useStore';
import { translations } from '../i18n/translations';
import { ArrowRight, BookOpen, TrendingUp, Users } from 'lucide-react';

export function Home() {
  const { knowledgeItems, setCurrentView, language, searchQuery, setSearchQuery } = useStore();
  const t = translations[language];

  const recentItems = knowledgeItems.slice(0, 3);
  const stats = {
    total: knowledgeItems.length,
    customs: knowledgeItems.filter((i) => i.category === 'Customs Clearance').length,
    pricing: knowledgeItems.filter((i) => i.category === 'Pricing').length,
    sops: knowledgeItems.filter((i) => i.category === 'SOPs').length,
    problem: knowledgeItems.filter((i) => i.category === 'Problem Solving').length,
  };

  return (
    <div className="p-8 space-y-8">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 mb-4">
          {t.home.welcome}
        </h1>
        <p className="text-lg text-neutral-600 mb-8">
          {t.home.description}
        </p>
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          setCurrentView('knowledge-base');
        }}
        className="w-full rounded-2xl bg-white p-4 border border-neutral-200"
      >
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="home-search" className="sr-only">
              {t.home.searchPlaceholder}
            </label>
            <textarea
              id="home-search"
              rows={4}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.home.searchPlaceholder}
              className="w-full rounded-2xl px-1 py-4 text-base text-neutral-900 placeholder:text-neutral-400 focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-100 resize-none"
            />
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-neutral-500">{t.home.aiSearchLabel}</p>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-amber-500 px-6 py-4 text-sm font-semibold text-neutral-950 transition-colors hover:bg-amber-600"
            >
              {t.home.searchButton}
              <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          onClick={() => setCurrentView('knowledge-base')}
          className="flex items-center gap-4 p-6 bg-amber-500 text-neutral-950 rounded-xl hover:bg-amber-600 transition-colors"
        >
          <BookOpen size={32} />
          <div className="text-left">
            <p className="font-semibold text-lg">{t.nav.knowledgeBase}</p>
            <p className="text-sm opacity-80">{stats.total} cards</p>
          </div>
        </button>

        <button
          onClick={() => setCurrentView('analytics')}
          className="flex items-center gap-4 p-6 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition-colors"
        >
          <TrendingUp size={32} />
          <div className="text-left">
            <p className="font-semibold text-lg">{t.analytics.title}</p>
            <p className="text-sm opacity-80">View insights</p>
          </div>
        </button>

        <div className="flex items-center gap-4 p-6 bg-neutral-100 rounded-xl">
          <Users size={32} className="text-neutral-600" />
          <div className="text-left">
            <p className="font-semibold text-lg text-neutral-900">{t.home.stats}</p>
            <p className="text-sm text-neutral-500">Live data</p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-neutral-900">{t.home.recentKnowledge}</h2>
          <button
            onClick={() => setCurrentView('knowledge-base')}
            className="text-amber-600 hover:text-amber-700 font-medium"
          >
            {t.common.viewAll}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recentItems.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-xl border border-neutral-200">
              <span className="text-xs font-medium text-amber-600">{item.category}</span>
              <h3 className="font-semibold text-neutral-900 mt-2 mb-2">{item.title}</h3>
              <p className="text-sm text-neutral-600 line-clamp-2">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
