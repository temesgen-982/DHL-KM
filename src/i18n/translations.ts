export type Language = 'en' | 'am';

export const translations = {
  en: {
    appName: 'DHL Knowledge Hub',
    nav: {
      home: 'Home',
      knowledgeBase: 'Knowledge Base',
      localization: 'Localization Tools',
      analytics: 'Analytics',
    },
    search: {
      placeholder: 'Search knowledge cards...',
    },
    categories: {
      'Customs Clearance': 'Customs Clearance',
      'Pricing': 'Pricing',
      'SOPs': 'SOPs',
      'Problem Solving': 'Problem Solving',
    },
    knowledgeBase: {
      title: 'Knowledge Repository',
      subtitle: 'The Crown Jewels of DHL Ethiopia',
      filterAll: 'All Categories',
    },
    quickAdd: {
      title: 'Quick Add Lesson Learned',
      titleLabel: 'Title',
      titlePlaceholder: 'Enter lesson title...',
      categoryLabel: 'Category',
      contentLabel: 'Details',
      contentPlaceholder: 'Describe the lesson learned...',
      submit: 'Add to Knowledge Base',
      cancel: 'Cancel',
    },
    documentView: {
      tags: 'Tags',
      author: 'Author',
      date: 'Created',
      close: 'Close',
    },
    analytics: {
      title: 'Analytics Dashboard',
      onboarding: 'Onboarding Progress',
      contributions: 'Knowledge Contributions',
      totalCards: 'Total Knowledge Cards',
      categories: 'By Category',
      recentAdditions: 'Recent Additions',
    },
    home: {
      welcome: 'Welcome to DHL Knowledge Hub',
      description: 'Your central repository for logistics knowledge, SOPs, and lessons learned.',
      quickActions: 'Quick Actions',
      recentKnowledge: 'Recent Knowledge',
      stats: 'Statistics',
    },
    fab: {
      add: 'Add Lesson Learned',
    },
    common: {
      viewAll: 'View All',
      readMore: 'Read More',
    },
  },
  am: {
    appName: 'የDHL የስራ እውቀት ማዕከል',
    nav: {
      home: 'መነሻ',
      knowledgeBase: 'የስራ እውቀት መሰብሰቢያ',
      localization: 'የቋንቋ መሣሪያዎች',
      analytics: 'ትንታኔ',
    },
    search: {
      placeholder: 'የስራ እውቀት ፈልግ...',
    },
    categories: {
      'Customs Clearance': 'የጉምርት ማጽዳት',
      'Pricing': 'ዋጋ አሰጣጥ',
      'SOPs': 'የመደበኛ ስራ ሂደቶች',
      'Problem Solving': 'ችግር ፈቺ',
    },
    knowledgeBase: {
      title: 'የስራ እውቀት ማከማቻ',
      subtitle: 'የDHL ኢትዮጵያ ታሪካዊ እውቀት',
      filterAll: 'ሁሉም ምድቦች',
    },
    quickAdd: {
      title: 'ተማሪ ትምህርት በፍጥነት ጨምር',
      titleLabel: 'ርዕስ',
      titlePlaceholder: 'የትምህርት ርዕስ አስገባ...',
      categoryLabel: 'ምድብ',
      contentLabel: 'ዝርዝሮች',
      contentPlaceholder: 'የተማሪውን ትምህርት ገልፅ...',
      submit: 'ወደ ስራ እውቀት ጨምር',
      cancel: 'ሰርዝ',
    },
    documentView: {
      tags: 'መለያዎች',
      author: 'ደራሲ',
      date: 'ተፈጠረ',
      close: 'ዝጋ',
    },
    analytics: {
      title: 'የትንታኔ ዳሽቦርድ',
      onboarding: 'የስራ ማስተባበር ሂደት',
      contributions: 'የስራ እውቀት አስተዋጽኦ',
      totalCards: 'ጠቅላላ የስራ እውቀት ካርዶች',
      categories: 'በምድብ',
      recentAdditions: 'ቅርብ ጭማሪዎች',
    },
    home: {
      welcome: 'ወደ DHL የስራ እውቀት ማዕከል እንኳን ደህና መጡ',
      description: 'የሎጂስቲክስ ስራ እውቀት፣ የመደበኛ ስራ ሂደቶች እና የተማሪዎች ትምህርቶች ማዕከል.',
      quickActions: 'ፈጣን ድርጊቶች',
      recentKnowledge: 'ቅርብ ስራ እውቀት',
      stats: 'ስታቲስቲክስ',
    },
    fab: {
      add: 'ተማሪ ትምህርት ጨምር',
    },
    common: {
      viewAll: 'ሁሉንም ይመልከት',
      readMore: 'ተጨማሪ አንብብ',
    },
  },
};

export type TranslationKey = keyof typeof translations.en;
