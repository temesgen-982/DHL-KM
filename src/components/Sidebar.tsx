import { useState } from 'react';
import { Home, BookOpen, Globe, BarChart3, HelpCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useStore } from '../store/useStore';
import { translations } from '../i18n/translations';

export function Sidebar() {
  const { currentView, setCurrentView, language } = useStore();
  const t = translations[language];
  const [collapsed, setCollapsed] = useState(false);

  const navItems = [
    { id: 'home' as const, icon: Home, label: t.nav.home },
    { id: 'knowledge-base' as const, icon: BookOpen, label: t.nav.knowledgeBase },
    { id: 'faq' as const, icon: HelpCircle, label: t.nav.faq },
    { id: 'localization' as const, icon: Globe, label: t.nav.localization },
    { id: 'analytics' as const, icon: BarChart3, label: t.nav.analytics },
  ];

  return (
    <aside
      className={`h-screen sticky top-0 flex flex-col overflow-hidden bg-neutral-950 text-white transition-all duration-300 ${
        collapsed ? 'w-20' : 'w-72'
      }`}
    >
      <div className="flex items-center justify-between gap-3 p-3.5 border-b border-neutral-800">
        <div className={`overflow-hidden transition-all duration-300 ${collapsed ? 'w-0 opacity-0' : 'w-full opacity-100'}`}>
          <h1 className="text-xl font-bold tracking-tight">{t.appName}</h1>
        </div>
        <button
          type="button"
          onClick={() => setCollapsed((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-700 bg-neutral-900 text-neutral-300 transition-colors hover:bg-neutral-800"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto p-3">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setCurrentView(item.id)}
                  className={`w-full flex items-center gap-3 rounded-md px-3 py-3 transition-all duration-200 ${
                    isActive
                      ? 'bg-amber-500 text-neutral-950 font-medium'
                      : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'
                  } ${collapsed ? 'justify-center' : 'justify-start'}`}
                  title={item.label}
                >
                  <Icon size={20} />
                  <span className={`${collapsed ? 'hidden' : 'block'}`}>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className={`p-4 border-t border-neutral-800 transition-all duration-300 ${collapsed ? 'hidden' : 'block'}`}>
        <div className="text-xs text-neutral-500">
          <p>DHL Ethiopia</p>
          <p>Service Point KMS</p>
        </div>
      </div>
    </aside>
  );
}
