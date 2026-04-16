import { X } from 'lucide-react';
import { useStore } from '../store/useStore';
import { translations } from '../i18n/translations';
import { categories } from '../data/mockData';
import { useState } from 'react';

export function QuickAddModal() {
  const { isQuickAddOpen, setIsQuickAddOpen, addKnowledgeItem, language } = useStore();
  const t = translations[language];

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [content, setContent] = useState('');

  if (!isQuickAddOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    addKnowledgeItem({
      title: title.trim(),
      category,
      content: content.trim(),
      tags: [category, 'Quick Add', 'Staff'],
      author: 'Current User',
    });

    setTitle('');
    setCategory(categories[0]);
    setContent('');
    setIsQuickAddOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl">
        <div className="flex items-center justify-between p-6 border-b border-neutral-200">
          <h2 className="text-xl font-semibold text-neutral-900">{t.quickAdd.title}</h2>
          <button
            onClick={() => setIsQuickAddOpen(false)}
            className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
          >
            <X size={20} className="text-neutral-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              {t.quickAdd.titleLabel}
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={t.quickAdd.titlePlaceholder}
              className="w-full px-4 py-3 bg-neutral-100 border-0 rounded-lg text-neutral-900 placeholder-neutral-400 focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              {t.quickAdd.categoryLabel}
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as typeof categories[number])}
              className="w-full px-4 py-3 bg-neutral-100 border-0 rounded-lg text-neutral-900 focus:ring-2 focus:ring-amber-500"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              {t.quickAdd.contentLabel}
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={t.quickAdd.contentPlaceholder}
              rows={5}
              className="w-full px-4 py-3 bg-neutral-100 border-0 rounded-lg text-neutral-900 placeholder-neutral-400 focus:ring-2 focus:ring-amber-500 resize-none"
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={() => setIsQuickAddOpen(false)}
              className="flex-1 px-4 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-medium rounded-lg transition-colors"
            >
              {t.quickAdd.cancel}
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-3 bg-amber-500 hover:bg-amber-600 text-neutral-950 font-medium rounded-lg transition-colors"
            >
              {t.quickAdd.submit}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
