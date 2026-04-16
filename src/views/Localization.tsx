import { Globe, Languages } from 'lucide-react';
import { useStore } from '../store/useStore';
import { translations } from '../i18n/translations';

export function Localization() {
  const { language, setLanguage } = useStore();
  const t = translations[language];

  return (
    <div className="p-8">
      <div className="max-w-2xl">
        <div className="flex items-center gap-3 mb-8">
          <Languages size={32} className="text-amber-500" />
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
            {t.nav.localization}
          </h1>
        </div>

        <div className="bg-white p-6 rounded-xl border border-neutral-200 mb-6">
          <h2 className="text-lg font-semibold text-neutral-900 mb-4">Language Settings</h2>
          <p className="text-neutral-600 mb-6">
            Select your preferred language for the knowledge management system interface.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setLanguage('en')}
              className={`p-6 rounded-xl border-2 transition-all ${
                language === 'en'
                  ? 'border-amber-500 bg-amber-50'
                  : 'border-neutral-200 hover:border-neutral-300'
              }`}
            >
              <Globe className={`mb-3 ${language === 'en' ? 'text-amber-500' : 'text-neutral-400'}`} size={32} />
              <p className={`font-semibold ${language === 'en' ? 'text-amber-700' : 'text-neutral-900'}`}>
                English
              </p>
              <p className="text-sm text-neutral-500">English (US)</p>
            </button>

            <button
              onClick={() => setLanguage('am')}
              className={`p-6 rounded-xl border-2 transition-all ${
                language === 'am'
                  ? 'border-amber-500 bg-amber-50'
                  : 'border-neutral-200 hover:border-neutral-300'
              }`}
            >
              <Globe className={`mb-3 ${language === 'am' ? 'text-amber-500' : 'text-neutral-400'}`} size={32} />
              <p className={`font-semibold ${language === 'am' ? 'text-amber-700' : 'text-neutral-900'}`}>
                አማርኛ
              </p>
              <p className="text-sm text-neutral-500">Amharic</p>
            </button>

            <button
              onClick={() => setLanguage('om')}
              className={`p-6 rounded-xl border-2 transition-all ${
                language === 'om'
                  ? 'border-amber-500 bg-amber-50'
                  : 'border-neutral-200 hover:border-neutral-300'
              }`}
            >
              <Globe className={`mb-3 ${language === 'om' ? 'text-amber-500' : 'text-neutral-400'}`} size={32} />
              <p className={`font-semibold ${language === 'om' ? 'text-amber-700' : 'text-neutral-900'}`}>
                Afaan Oromoo
              </p>
              <p className="text-sm text-neutral-500">Oromo</p>
            </button>

            <button
              onClick={() => setLanguage('ti')}
              className={`p-6 rounded-xl border-2 transition-all ${
                language === 'ti'
                  ? 'border-amber-500 bg-amber-50'
                  : 'border-neutral-200 hover:border-neutral-300'
              }`}
            >
              <Globe className={`mb-3 ${language === 'ti' ? 'text-amber-500' : 'text-neutral-400'}`} size={32} />
              <p className={`font-semibold ${language === 'ti' ? 'text-amber-700' : 'text-neutral-900'}`}>
                ትግርኛ
              </p>
              <p className="text-sm text-neutral-500">Tigrinya</p>
            </button>
          </div>
        </div>

        <div className="bg-neutral-100 p-6 rounded-xl">
          <h3 className="font-semibold text-neutral-900 mb-3">Preview</h3>
          <div className="space-y-2 text-neutral-700">
            <p><strong>{t.nav.home}:</strong> Sample navigation item</p>
            <p><strong>{t.nav.knowledgeBase}:</strong> Sample knowledge section</p>
            <p><strong>{t.search.placeholder}:</strong> Sample search placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}
