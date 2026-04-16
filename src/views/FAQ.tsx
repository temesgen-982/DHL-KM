import { useState } from 'react';
import { useStore } from '../store/useStore';
import { translations } from '../i18n/translations';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const { language } = useStore();
  const t = translations[language];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="p-8">
      <div className="max-w-4xl space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900">{t.faq.title}</h1>
            <p className="text-neutral-600 mt-1">{t.faq.description}</p>
          </div>
        </div>

        <div className="space-y-3">
          {t.faq.items.map((item, index) => {
            const expanded = openIndex === index;
            return (
              <div key={item.question} className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpenIndex(expanded ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={expanded}
                >
                  <span className="text-left text-lg font-semibold text-neutral-900">{item.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-neutral-500 transition-transform duration-200 ${expanded ? 'rotate-180' : 'rotate-0'}`}
                  />
                </button>
                <div className={`${expanded ? 'max-h-96 py-4' : 'max-h-0'} px-6 overflow-hidden transition-all duration-300`}
                  aria-hidden={!expanded}
                >
                  <p className="text-neutral-600">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
