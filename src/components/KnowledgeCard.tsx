import { useStore } from '../store/useStore';
import type { KnowledgeItem } from '../data/mockData';

interface KnowledgeCardProps {
  item: KnowledgeItem;
}

const categoryColors: Record<string, string> = {
  'Customs Clearance': 'bg-amber-100 text-amber-800',
  'Pricing': 'bg-emerald-100 text-emerald-800',
  'SOPs': 'bg-blue-100 text-blue-800',
  'Problem Solving': 'bg-purple-100 text-purple-800',
};

export function KnowledgeCard({ item }: KnowledgeCardProps) {
  const { setSelectedItem, language } = useStore();
  const categoryLabel = language === 'en' ? item.category : item.category;

  return (
    <button
      onClick={() => setSelectedItem(item)}
      className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200 hover:shadow-md hover:border-amber-300 transition-all text-left group"
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[item.category]}`}>
          {categoryLabel}
        </span>
        <span className="text-xs text-neutral-400">{item.createdAt}</span>
      </div>

      <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-amber-600 transition-colors">
        {item.title}
      </h3>

      <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
        {item.content}
      </p>

      <div className="flex flex-wrap gap-2">
        {item.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded"
          >
            #{tag}
          </span>
        ))}
      </div>
    </button>
  );
}
