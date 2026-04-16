import { useStore } from '../store/useStore';
import { translations } from '../i18n/translations';
import { BookOpen, TrendingUp, Users } from 'lucide-react';

export function Home() {
  const { knowledgeItems, setCurrentView, language } = useStore();
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
        <p className="text-lg text-neutral-600">
          {t.home.description}
        </p>
      </div>

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
