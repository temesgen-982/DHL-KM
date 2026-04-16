import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { KnowledgeItem } from '../data/mockData';
import { mockKnowledgeData } from '../data/mockData';
import type { Language } from '../i18n/translations';

interface AppState {
  language: Language;
  setLanguage: (lang: Language) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  knowledgeItems: KnowledgeItem[];
  addKnowledgeItem: (item: Omit<KnowledgeItem, 'id' | 'createdAt'>) => void;
  selectedItem: KnowledgeItem | null;
  setSelectedItem: (item: KnowledgeItem | null) => void;
  isQuickAddOpen: boolean;
  setIsQuickAddOpen: (open: boolean) => void;
  currentView: 'home' | 'knowledge-base' | 'localization' | 'analytics';
  setCurrentView: (view: 'home' | 'knowledge-base' | 'localization' | 'analytics') => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      language: 'en',
      setLanguage: (lang) => set({ language: lang }),
      searchQuery: '',
      setSearchQuery: (query) => set({ searchQuery: query }),
      selectedCategory: null,
      setSelectedCategory: (category) => set({ selectedCategory: category }),
      knowledgeItems: mockKnowledgeData,
      addKnowledgeItem: (item) =>
        set((state) => ({
          knowledgeItems: [
            {
              ...item,
              id: Date.now().toString(),
              createdAt: new Date().toISOString().split('T')[0],
            },
            ...state.knowledgeItems,
          ],
        })),
      selectedItem: null,
      setSelectedItem: (item) => set({ selectedItem: item }),
      isQuickAddOpen: false,
      setIsQuickAddOpen: (open) => set({ isQuickAddOpen: open }),
      currentView: 'home',
      setCurrentView: (view) => set({ currentView: view }),
    }),
    {
      name: 'dhl-knowledge-storage',
      partialize: (state) => ({
        language: state.language,
        knowledgeItems: state.knowledgeItems,
      }),
    }
  )
);
