import { X } from 'lucide-react';
import { useStore } from '../store/useStore';
import { translations } from '../i18n/translations';

export function DocumentView() {
  const { selectedItem, setSelectedItem, language } = useStore();
  const t = translations[language];

  if (!selectedItem) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-neutral-200 p-6 flex items-start justify-between">
          <div>
            <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">
              {selectedItem.category}
            </span>
            <h2 className="text-2xl font-bold text-neutral-900 mt-3">{selectedItem.title}</h2>
          </div>
          <button
            onClick={() => setSelectedItem(null)}
            className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
          >
            <X size={24} className="text-neutral-500" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap gap-4 text-sm text-neutral-500 mb-6">
            <p><span className="font-medium text-neutral-700">{t.documentView.author}:</span> {selectedItem.author}</p>
            <p><span className="font-medium text-neutral-700">{t.documentView.date}:</span> {selectedItem.createdAt}</p>
          </div>

          <div className="prose prose-neutral max-w-none">
            <p className="text-neutral-700 leading-relaxed whitespace-pre-wrap">
              {selectedItem.content}
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-neutral-200">
            <p className="text-sm font-medium text-neutral-700 mb-3">{t.documentView.tags}</p>
            <div className="flex flex-wrap gap-2">
              {selectedItem.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm rounded-lg"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
