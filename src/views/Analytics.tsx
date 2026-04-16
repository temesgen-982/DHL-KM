import { useStore } from '../store/useStore';
import { translations } from '../i18n/translations';

export function Analytics() {
  const { knowledgeItems, language } = useStore();
  const t = translations[language];

  const categories = ['Customs Clearance', 'Pricing', 'SOPs', 'Problem Solving'];
  const categoryCounts = categories.map((cat) => ({
    name: cat,
    count: knowledgeItems.filter((i) => i.category === cat).length,
  }));

  const maxCount = Math.max(...categoryCounts.map((c) => c.count));

  const onboardingData = [
    { label: 'Week 1', value: 85 },
    { label: 'Week 2', value: 92 },
    { label: 'Week 3', value: 78 },
    { label: 'Week 4', value: 95 },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 mb-8">
        {t.analytics.title}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl border border-neutral-200">
          <h2 className="text-xl font-semibold text-neutral-900 mb-6">{t.analytics.totalCards}</h2>
          <div className="text-6xl font-bold text-amber-500 mb-6">
            {knowledgeItems.length}
          </div>
          <p className="text-neutral-500">
            Total knowledge cards in the repository
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-neutral-200">
          <h2 className="text-xl font-semibold text-neutral-900 mb-6">{t.analytics.categories}</h2>
          <div className="space-y-4">
            {categoryCounts.map((cat) => (
              <div key={cat.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-neutral-700">{cat.name}</span>
                  <span className="font-medium text-neutral-900">{cat.count}</span>
                </div>
                <div className="h-3 bg-neutral-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-500 rounded-full transition-all"
                    style={{ width: `${(cat.count / maxCount) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-neutral-200">
          <h2 className="text-xl font-semibold text-neutral-900 mb-6">{t.analytics.onboarding}</h2>
          <div className="space-y-4">
            {onboardingData.map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-neutral-700">{item.label}</span>
                  <span className="font-medium text-neutral-900">{item.value}%</span>
                </div>
                <div className="h-4 bg-neutral-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 rounded-full transition-all"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-neutral-200">
          <h2 className="text-xl font-semibold text-neutral-900 mb-6">{t.analytics.contributions}</h2>
          <div className="space-y-4">
            {knowledgeItems.slice(0, 5).map((item, index) => (
              <div key={item.id} className="flex items-center gap-4">
                <div className="w-8 h-8 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center font-semibold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-neutral-900 truncate">{item.title}</p>
                  <p className="text-xs text-neutral-500">{item.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
