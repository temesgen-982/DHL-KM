import { Plus } from 'lucide-react';
import { useStore } from '../store/useStore';
import { translations } from '../i18n/translations';

export function FloatingActionButton() {
  const { setIsQuickAddOpen, language } = useStore();
  const t = translations[language];

  return (
    <button
      onClick={() => setIsQuickAddOpen(true)}
      className="fixed bottom-8 right-8 w-14 h-14 bg-amber-500 hover:bg-amber-600 text-neutral-950 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105 z-40"
      title={t.fab.add}
    >
      <Plus size={28} strokeWidth={2.5} />
    </button>
  );
}
