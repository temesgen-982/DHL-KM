import { Home, BookOpen, Globe, BarChart3 } from 'lucide-react';
import { useStore } from '../store/useStore';
import { translations } from '../i18n/translations';

export function Sidebar() {
  const { currentView, setCurrentView, language } = useStore();
  const t = translations[language];

  const navItems = [
    { id: 'home' as const, icon: Home, label: t.nav.home },
    { id: 'knowledge-base' as const, icon: BookOpen, label: t.nav.knowledgeBase },
    { id: 'localization' as const, icon: Globe, label: t.nav.localization },
    { id: 'analytics' as const, icon: BarChart3, label: t.nav.analytics },
  ];

  return (
    <aside className="w-64 min-h-screen bg-neutral-950 text-white flex flex-col">
      <div className="p-6 border-b border-neutral-800">
        <h1 className="text-xl font-bold tracking-tight">{t.appName}</h1>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setCurrentView(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-amber-500 text-neutral-950 font-medium'
                      : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'
                  }`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-neutral-800">
        <div className="text-xs text-neutral-500">
          <p>DHL Ethiopia</p>
          <p>Service Point KMS</p>
        </div>
      </div>
    </aside>
  );
}
