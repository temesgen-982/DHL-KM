import { ChevronDown, Globe } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useStore } from '../store/useStore';
import { translations, type Language } from '../i18n/translations';

const languageOptions: Array<{ value: Language; label: string }> = [
  { value: 'en', label: 'English' },
  { value: 'am', label: 'አማርኛ' },
  { value: 'om', label: 'Afaan Oromoo' },
  { value: 'ti', label: 'ትግርኛ' },
];

export function Header() {
  const { language, setLanguage } = useStore();
  const t = translations[language];
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedLabel = languageOptions.find((option) => option.value === language)?.label ?? 'English';

  return (
    <header className="bg-white border-b border-neutral-200 px-6 py-3">
      <div className="flex items-center justify-end gap-4">
        <div ref={dropdownRef} className="relative inline-flex items-center rounded-2xl border border-neutral-200 bg-neutral-100 p-2 transition-colors hover:bg-neutral-200">
          <button
            type="button"
            onClick={() => setDropdownOpen((open) => !open)}
            className="inline-flex items-center gap-3 rounded-2xl px-4 py-2 text-neutral-700 focus:outline-none"
          >
            <Globe size={20} className="text-neutral-600" />
            <span className="text-sm font-semibold text-neutral-900">{selectedLabel}</span>
            <ChevronDown
              className={`text-neutral-500 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`}
              size={18}
            />
          </button>

          {dropdownOpen ? (
            <div className="absolute right-0 top-full z-20 mt-2 min-w-[12rem] overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-2xl">
              {languageOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    setLanguage(option.value);
                    setDropdownOpen(false);
                  }}
                  className="w-full px-4 py-3 text-left text-sm text-neutral-700 transition-colors hover:bg-neutral-100"
                >
                  {option.label}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
