import { useStore } from './store/useStore';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Home } from './views/Home';
import { KnowledgeBase } from './views/KnowledgeBase';
import { Localization } from './views/Localization';
import { Analytics } from './views/Analytics';
import { QuickAddModal } from './components/QuickAddModal';
import { DocumentView } from './components/DocumentView';
import { FloatingActionButton } from './components/FloatingActionButton';

function App() {
  const { currentView } = useStore();

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home />;
      case 'knowledge-base':
        return <KnowledgeBase />;
      case 'localization':
        return <Localization />;
      case 'analytics':
        return <Analytics />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#FAF9F1]">
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <div className="flex-1 overflow-auto">
          {renderView()}
        </div>
      </main>

      <FloatingActionButton />
      <QuickAddModal />
      <DocumentView />
    </div>
  );
}

export default App;
