const translations = {
  en: {
    nav_home: "Home",
    nav_learning: "Agro Learning",
    nav_activities: "Activities",
    nav_story: "Our Story",
    nav_contact: "Contact",
    nav_book: "Book Visit",
    hero_title: "Nisarg Shrishti Agro Tourism",
    highlights: "Farm Experiences & Learning Highlights"
  },
  hi: {
    nav_home: "होम",
    nav_learning: "कृषि शिक्षण",
    nav_activities: "गतिविधियां",
    nav_story: "हमारी कहानी",
    nav_contact: "संपर्क करें",
    nav_book: "टिकट बुक करें",
    hero_title: "निसर्ग सृष्टि कृषि पर्यटन",
    highlights: "फार्म अनुभव और प्रमुख आकर्षण"
  },
  mr: {
    nav_home: "मुख्य पृष्ठ",
    nav_learning: "कृषी शिक्षण",
    nav_activities: "उपक्रम व उपक्रम",
    nav_story: "आमची कथा",
    nav_contact: "संपर्क",
    nav_book: "तिकीट बुक करा",
    hero_title: "निसर्ग सृष्टी कृषी पर्यटन",
    highlights: "शेतातील अनुभव आणि मुख्य आकर्षणे"
  }
};

function changeLanguage(lang) {
  localStorage.setItem('selectedLang', lang);
  
  // Update elements with data-i18n attributes
  document.querySelectorAll('[data-i18n]').forEach(elem => {
    const key = elem.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      elem.innerText = translations[lang][key];
    }
  });

  // Dynamic titles
  const heroTitle = document.getElementById('heroTitle');
  if (heroTitle && translations[lang]['hero_title']) {
    heroTitle.innerText = translations[lang]['hero_title'];
  }

  const sectionHighlights = document.getElementById('sectionHighlights');
  if (sectionHighlights && translations[lang]['highlights']) {
    sectionHighlights.innerText = translations[lang]['highlights'];
  }
}

// Load saved language on startup
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('selectedLang') || 'en';
  changeLanguage(savedLang);
});
