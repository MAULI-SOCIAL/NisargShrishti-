/**
 * NISARG SHRISHTI (निसर्ग सृष्टी) - CENTRAL CONFIGURATION FILE
 * All farm settings, backend endpoints, slot capacities, and prices.
 */
const CONFIG = {
  // --- FARM DETAILS ---
  FARM_NAME: "Nisarg Shrishti Agro Tourism & Education",
  FARM_NAME_MR: "निसर्ग सृष्टी कृषी पर्यटन व शिक्षण केंद्र",
  LOCATION: "Katraj-Kondhwa Road, Near Swargate, Pune, Maharashtra",
  PHONE: "+919876543210",
  WHATSAPP_NUMBER: "919876543210",
  EMAIL: "hello@nisargshrishti.com",
  UPI_ID: "nisargshrishti@upi", // Static fallback UPI ID
  GOOGLE_MAPS_LINK: "https://maps.google.com/?q=18.4521,73.8652",
  DISTANCE_FROM_PUNE_CITY: "18 km (Approx. 40 mins from Swargate)",

  // --- PRICING & SLOTS ---
  PRICE_PER_HEAD: 300, // ₹300 per head (Day Pass)
  OVERNIGHT_CAMPING_PRICE: 1200, // Overnight Stay + Night Campfire Package
  CHILD_FREE_UNDER_AGE: 5,
  MAX_CAPACITY_PER_SLOT: 60,
  BOOKING_WINDOW_DAYS: 60,

  SLOTS: [
    { id: "morning", title: "Morning Agro Tour", titleMr: "सकाळचे सत्र", time: "08:30 AM – 12:30 PM", start: "08:30" },
    { id: "afternoon", title: "Afternoon Tour & Feast", titleMr: "दुपारचे सत्र", time: "12:30 PM – 03:30 PM", start: "12:30" },
    { id: "evening", title: "Sunset Farm Walk", titleMr: "संध्याकाळचे सत्र", time: "03:30 PM – 06:30 PM", start: "03:30" },
    { id: "overnight", title: "Overnight Camping & Stargazing", titleMr: "रात्रीची कॅम्पिंग", time: "06:30 PM – 08:30 AM (Next Day)", start: "18:30", isNight: true }
  ],

  BLOCKED_DATES: [
    "2026-11-01",
    "2026-12-31"
  ],

  // --- BACKEND & DEMO MODE ---
  DEMO_MODE: true, // Set to FALSE when Supabase & Razorpay are connected
  SUPABASE_URL: "https://your-supabase-id.supabase.co",
  SUPABASE_ANON_KEY: "YOUR_SUPABASE_ANON_KEY",
  RAZORPAY_KEY_ID: "rzp_test_YOUR_KEY_HERE",

  SOCIAL: {
    instagram: "https://instagram.com/nisargshrishti",
    facebook: "https://facebook.com/nisargshrishti",
    youtube: "https://youtube.com/@nisargshrishti"
  }
};
