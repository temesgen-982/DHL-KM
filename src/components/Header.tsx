import { Search } from 'lucide-react';
import { useStore } from '../store/useStore';
import { translations } from '../i18n/translations';
import { Globe } from 'lucide-react';

export function Header() {
  const { searchQuery, setSearchQuery, language, setLanguage } = useStore();
  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'am' : 'en');
  };

  return (
    <header className="bg-white border-b border-neutral-200 px-6 py-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.search.placeholder}
              className="w-full pl-12 pr-4 py-3 bg-neutral-100 border-0 rounded-lg text-neutral-900 placeholder-neutral-400 focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
            />
          </div>
        </div>

        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-4 py-3 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors"
        >
          <Globe size={20} className="text-neutral-600" />
          <span className="font-medium text-neutral-700 uppercase">{language}</span>
        </button>
      </div>
    </header>
  );
}
