export type Language = 'en' | 'am' | 'om' | 'ti';

export const translations = {
  en: {
    appName: 'DHL Knowledge Hub',
    nav: {
      home: 'Home',
      knowledgeBase: 'Knowledge Base',
      localization: 'Localization Tools',
      analytics: 'Analytics',
      faq: 'FAQ',
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
      subtitle: 'The Knowledge Bases of DHL Ethiopia',
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
      welcome: 'DHL Knowledge Hub',
      description: 'Your central repository for logistics knowledge, and lessons learned.',
      searchPlaceholder: 'Search the DHL knowledge base...',
      aiSearchLabel: 'AI-based search',
      searchButton: 'Search',
      quickActions: 'Quick Actions',
      recentKnowledge: 'Recent Knowledge',
      stats: 'Statistics',
    },
    faq: {
      title: 'FAQ',
      description: 'Frequently asked questions about the DHL Knowledge Hub.',
      items: [
        {
          question: 'How do I add a new knowledge card?',
          answer: 'Use the Add Lesson Learned button and fill in the details on the form.',
        },
        {
          question: 'How can I switch languages?',
          answer: 'Open the Localization page in the sidebar and choose your language.',
        },
        {
          question: 'Where do I find analytics?',
          answer: 'Go to the Analytics page from the sidebar to view contribution metrics.',
        },
        {
          question: 'What should I include in a good knowledge card?',
          answer: 'Add a clear title, category, context, and any lessons learned or next steps.',
        },
        {
          question: 'Can I edit a card after I submit it?',
          answer: 'Yes, open the card from the knowledge base and update the fields if needed.',
        },
        {
          question: 'How do I check if a topic already exists?',
          answer: 'Use the search bar in the knowledge base before adding a new entry.',
        },
      ],
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
      faq: 'ጥያቄዎች',
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
      contentPlaceholder: 'የተማሪዎቹን ትምህርት ገልፅ...',
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
      searchPlaceholder: 'የDHL እውቀት መሰብሰቢያን ፈልግ...',
      aiSearchLabel: 'በAI የተመሠጠነ ፍለጋ',
      searchButton: 'ፈልግ',
      quickActions: 'ፈጣን ድርጊቶች',
      recentKnowledge: 'ቅርብ ስራ እውቀት',
      stats: 'ስታቲስቲክስ',
    },
    faq: {
      title: 'ጥያቄዎች',
      description: 'እቲ የተደጋጋሚ የሚጠየቁ ጥያቄዎች ናይ DHL የእውቀት ማዕከል ናብ.',
      items: [
        {
          question: 'እንዴት አዲስ የእውቀት ካርድ እንደማከም?',
          answer: 'የጨምር የተማሪ ትምህርት ቁልፍን በመጫን እና ቅጽ ላይ ዝርዝር ይሙሉ.',
        },
        {
          question: 'እንዴት ቋንቋዎን እንቀይራለን?',
          answer: 'በሳይድ ባር ላይ ያለው Localization ገጽ ይክፈቱ እና ቋንቋዎን ይምረጡ.',
        },
        {
          question: 'Analytics የት ነው?',
          answer: 'ወደ Analytics ገጽ በሳይድ ባር እየገቡ የእውቀት መግቢያ ማስታወቂያዎችን ይመልከቱ.',
        },
        {
          question: 'በጥሩ የእውቀት ካርድ ውስጥ ምን ነገር እንዳለው መጻፍ አለብ?',
          answer: 'ርዕስ ግልጽ፣ ምድብ፣ አስተያየት እና የሚከተለው የሚሆን ደረጃ ያስቀምጡ.',
        },
        {
          question: 'ከማስገባት በኋላ ካርድ ማሻሻል እችላለሁ?',
          answer: 'አዎ ፣ ከእውቀት ቤት ውስጥ ካርዱን ከከፈቱ በኋላ ያሻሽሉ.',
        },
        {
          question: 'አንድ ጉዳይ እንዲመሳሰል ወይስ አዲስ እንደሆነ እንዴት እረዳለሁ?',
          answer: 'በእውቀት ቤት የሚገኙትን ዕቃዎች በፈለጋ ቦታ ይፈልጉ.',
        },
      ],
    },
    fab: {
      add: 'ተማሪ ትምህርት ጨምር',
    },
    common: {
      viewAll: 'ሁሉንም ይመልከት',
      readMore: 'ተጨማሪ አንብብ',
    },
  },
  om: {
    appName: 'DHL Kutaa Beekkumsaa',
    nav: {
      home: 'Mana',
      knowledgeBase: 'Qabatama Beekumsa',
      localization: 'Meeshaalee Afaanii',
      analytics: 'Xiinxala',
      faq: 'Gaaffii fi Deebii',
    },
    search: {
      placeholder: 'Kaardii beekumsa barbaadi...',
    },
    categories: {
      'Customs Clearance': 'Eegumsa Albuuda',
      'Pricing': 'Gatii',
      'SOPs': 'Tarsiimoo Hojii',
      'Problem Solving': 'Furmaata Rakkoo',
    },
    knowledgeBase: {
      title: 'Kuusaa Beekumsa',
      subtitle: 'Kuusaa beekumsa DHL Itoophiyaa',
      filterAll: 'Hundaa Filadhu',
    },
    quickAdd: {
      title: 'Barnoota Fudhachuuf Dabaluu',
      titleLabel: 'Mata Duree',
      titlePlaceholder: 'Mata duree barnootaa galchi...',
      categoryLabel: 'Kategorii',
      contentLabel: 'Bal’ina',
      contentPlaceholder: 'Barnoota barbachisu ibsi...',
      submit: 'Kuusaa Beekumsa keessatti ida’i',
      cancel: 'Haqu',
    },
    documentView: {
      tags: 'Mallattoolee',
      author: 'Barreessaa',
      date: 'Uumame',
      close: 'Cufi',
    },
    analytics: {
      title: 'Gabatee Xiinxala',
      onboarding: 'Guddina Hirmaannaa',
      contributions: 'Gumaacha Beekumsa',
      totalCards: 'Kaardii Beekumsa Guutuu',
      categories: 'Kategooriiwwan',
      recentAdditions: 'Dabalata Dhiyoo',
    },
    home: {
      welcome: 'DHL Kutaa Beekkumsaa keessatti baga nagaan dhuftan',
      description: 'Bu’uurri galmee beekumsa, tarsiimoo hojii fi barnoota hubannoo.',
      searchPlaceholder: 'Kuusaa beekumsa DHL irratti barbaadi...',
      aiSearchLabel: 'Barbaachisummaa AI waliin',
      searchButton: 'Barbaadi',
      quickActions: 'Dalagaa Ariifachiisaa',
      recentKnowledge: 'Beekumsa Dhiyoo',
      stats: 'Tarree',
    },
    faq: {
      title: 'FAQ',
      description: 'Gaaffilee yeroo baayʼee gaafatan kan DHL Kutaa Beekkumsaa irratti.',
      items: [
        {
          question: 'Akkaataa kaardii beekumsa haaraa itti dabaltan?',
          answer: 'Button Add Lesson Learned fayyadamiitii odeeffannoo guutuu galchi.',
        },
        {
          question: 'Akkamitti afaan jijjiiruu dandaʼa?',
          answer: 'Fuula Localization irraa afaan barbaadde filadhu.',
        },
        {
          question: 'Analytics eessa argachuu dandaʼa?',
          answer: 'Fuula Analytics irraa odeeffannoo gumaacha ilaali.',
        },
        {
          question: 'Kaardii gaarii keessatti maal galchuu qaba?',
          answer: 'Mata duree ifaa, kategorii sirrii, haala bal’inaa fi waan barame galchi.',
        },
        {
          question: 'Kaardii erga dabalamee booda nan fooyyessu dandaʼaa?',
          answer: 'Eeyyee, kaardii tokko irratti yeroo barbaachisu fooyyessaa sirreessi.',
        },
        {
          question: 'Dhugumaan meeshan dura jiruu akkamitti baru?',
          answer: 'Dursee akkaataa barbaadduuf search bar fayyadami.',
        },
      ],
    },
    fab: {
      add: 'Barnoota Ida’i',
    },
    common: {
      viewAll: 'Hundaa Ilaali',
      readMore: 'Dabalata Dubbisi',
    },
  },
  ti: {
    appName: 'DHL ማዕከል ናይ እውቀት',
    nav: {
      home: 'ቤት',
      knowledgeBase: 'ታንከል እውቀት',
      localization: 'መሣርያታት ቋንቋ',
      analytics: 'ፍርያ',
      faq: 'ጥያቄ ናይ መልሲ',
    },
    search: {
      placeholder: 'እቲ እውቀት ካርድ ፈልግ...',
    },
    categories: {
      'Customs Clearance': 'ግብሪ ሓሳብ',
      'Pricing': 'ዋጋ',
      'SOPs': 'ዝተለገሰ ስርዓት',
      'Problem Solving': 'መፍታት ችግን',
    },
    knowledgeBase: {
      title: 'ማእከል እውቀት',
      subtitle: 'እውቀት ማእከል ንDHL ኢትዮጵያ',
      filterAll: 'ንቁሉ ምድብ',
    },
    quickAdd: {
      title: 'ፈጥነሲ ትምህርቲ ኣኽልእ',
      titleLabel: 'ርእሲ',
      titlePlaceholder: 'ርእሲ ትምህርቲ ኣምጽእ...',
      categoryLabel: 'ምድብ',
      contentLabel: 'ዝርዝር',
      contentPlaceholder: 'ብዝርዝር ትምህርቲ ኣገልግሎም...',
      submit: 'ናብ ማእከል እውቀት ኣኽልእ',
      cancel: 'ሰርዝ',
    },
    documentView: {
      tags: 'ምልክታት',
      author: 'መጻኢ',
      date: 'ተፈጠረ',
      close: 'ዕጽወ',
    },
    analytics: {
      title: 'ዳሽቦርድ ፍርያ',
      onboarding: 'ሂወት መታቦ',
      contributions: 'እውቀት ኣባልነት',
      totalCards: 'ኩሉ ካርድ እውቀት',
      categories: 'ብምድብ',
      recentAdditions: 'ናይ ድሕሪ ገጽ ኣቐማነት',
    },
    home: {
      welcome: 'እንቋዕ ደሓን መጻእኩም ናብ DHL እውቀት ማእከል',
      description: 'ማእከል ናይ ሎጂስቲክስ እውቀት፣ እታ ዝተሓሰበ ስራሕ ሂወትን ትምህርቲ ምብጻሕን.',
      searchPlaceholder: 'ይሕተት ዝተመረጸ ዝውሕብ እውቀት ፈልገ...',
      aiSearchLabel: 'AI መስመር ከይተጠቀም',
      searchButton: 'ፈልግ',
      quickActions: 'ፈጣን እቕታታም',
      recentKnowledge: 'ናይ ድሕሪ ጉዳይ እውቀት',
      stats: 'ስታቲስቲክስ',
    },
    faq: {
      title: 'FAQ',
      description: 'ጥያቄታት ብዙ ጊዜ የሚጠየቁ ናይ DHL እውቀት ማእከል.',
      items: [
        {
          question: 'ከመይ ናይ ሓዲሽ እውቀት ካርድ ከም እንተዳልዩ?',
          answer: 'ቁልፊ ትምህርቲ ኣኽልእ ኩነታት ሙሉእ ኣምጽእ.',
        },
        {
          question: 'ከመይ ቋንቋ ንምቕያር ከኣ ክትችል?',
          answer: 'ፈለጥ ቋንቋ ንምረጽ ናብ Localization ገጽ ይውሰዱ.',
        },
        {
          question: 'Analytics ኣብ ከባቢ ናብ ኣሎ?',
          answer: 'ናብ Analytics ገጽ ይሓዘ እዩ ሓበሬታ ግብሪ ምስ እዋን.',
        },
        {
          question: 'ናይ ዝተረኽበ እውቀት ካርድ ናይ መርሓብ ንኽምክር እንታይ ነይሩ?',
          answer: 'ርእሲ ግልጽ፣ ምድብ ፍላጥ፣ ኣሳሳብ ስለዝኾነ ዝርዝር ኣድርጉ.',
        },
        {
          question: 'ከበዝሒ ካርድ ከም ይቕረድ እምበርክ?',
          answer: 'እዚ ዝሓለፉ ካርዶም ከም ነቲ እቲ ዝሰርዕ ቀጻሊ ትርጉም ይውስእ.',
        },
        {
          question: 'እቲ ካርድ ዝተረኽበ ስለምንታይ እንዴት እንረዳ?',
          answer: 'ብኣካል ብትምህርቲ እንዳለዎ ሃላፊ መረጃ ንምርግጋጽ ጥያቄ ይግበሩ.',
        },
      ],
    },
    fab: {
      add: 'ትምህርቲ ኣኽልእ',
    },
    common: {
      viewAll: 'ኩሉን ኣብ ናይ ተመልከት',
      readMore: 'ዝተጨማሪ ኣንብብ',
    },
  },
};

export type TranslationKey = keyof typeof translations.en;
