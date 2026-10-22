/**
 * NISARG SHRISHTI - BILINGUAL DICTIONARY (EN / MR)
 */
const I18N = {
  en: {
    nav_home: "Home",
    nav_activities: "Activities",
    nav_learning: "Agro Learning",
    nav_about: "Our Story",
    nav_contact: "Contact",
    btn_book_now: "Book Your Day",
    hero_title: "Reconnect with Nature & Earth",
    hero_subtitle: "Step into a lush, organic wonderland in Pune. Animal petting, watercolor sunsets, aquatic farming, and authentic village feasting.",
    stat_animals: "20+ Species",
    stat_activities: "15+ Activities",
    stat_plants: "40+ Varieties",
    stat_memories: "Endless Joy",
    drawer_title: "My Day Plan",
    drawer_empty: "Your day plan is empty. Click the heart icon on any activity to add it!",
    cow_floating_label: "Book Visit"
  },
  mr: {
    nav_home: "मुख्य पृष्ठ",
    nav_activities: "उपक्रम",
    nav_learning: "कृषी शिक्षण",
    nav_about: "आमची गोष्ट",
    nav_contact: "संपर्क",
    btn_book_now: "तिकीट बुक करा",
    hero_title: "मातीशी आणि निसर्गाशी नाते जोडा",
    hero_subtitle: "पुण्यातील निसर्गरम्य सेंद्रिय शेतात तुमचे स्वागत आहे. प्राणी-पक्षी संपर्क, ताजे भोजन आणि अस्सल ग्रामीण आनंद.",
    stat_animals: "२०+ प्रजाती",
    stat_activities: "१५+ शेती उपक्रम",
    stat_plants: "४०+ वनस्पती",
    stat_memories: "अविस्मरणीय क्षण",
    drawer_title: "माझे नियोजन",
    drawer_empty: "तुमचे नियोजन रिकामे आहे. उपक्रम जोडण्यासाठी हृदयाच्या चिन्हावर क्लिक करा!",
    cow_floating_label: "बुकिंग करा"
  }
};

let currentLang = localStorage.getItem('ns_lang') || 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('ns_lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[lang] && I18N[lang][key]) {
      el.textContent = I18N[lang][key];
    }
  });
  document.documentElement.lang = lang;
}