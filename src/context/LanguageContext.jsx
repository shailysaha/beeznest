import { createContext, useContext, useMemo, useState } from "react";

const LanguageContext = createContext(null);

/* =========================================================
   BANGLA TRANSLATIONS
========================================================= */
const bn = {
  // --- NAVBAR & GLOBAL ---
  "Features": "ফিচারসমূহ",
  "Solutions": "সমাধানসমূহ",
  "Pricing": "মূল্য নির্ধারণ",
  "Resources": "রিসোর্স",
  "Log in": "লগ ইন",
  "Start free trial": "ফ্রি ট্রায়াল শুরু করুন",
  "Start free": "ফ্রি শুরু করুন",
  "Toggle navigation": "নেভিগেশন খুলুন",
  "Restaurant": "রেস্টুরেন্ট",
  "Student Visa Agency": "স্টুডেন্ট ভিসা এজেন্সি",
  "Visa Agency": "ভিসা এজেন্সি",

  // --- HERO SECTION ---
  "Run your business.": "আপনার ব্যবসা পরিচালনা করুন।",
  "Grow it smarter.": "আরও স্মার্টভাবে বাড়ান।",
  "Built for restaurants and visa agencies": "রেস্টুরেন্ট এবং ভিসা এজেন্সির জন্য তৈরি",
  "Watch 2-min demo": "২ মিনিটের ডেমো দেখুন",
  "CRM + website + AI": "CRM + ওয়েবসাইট + AI",
  "Bangla & English": "বাংলা ও ইংরেজি",
  "bKash & Nagad ready": "বিকাশ ও নগদ প্রস্তুত",

  // --- TRUST STRIP ---
  "Built for growing businesses": "বর্ধনশীল ব্যবসার জন্য তৈরি",
  "CRM": "CRM",
  "Website": "ওয়েবসাইট",
  "AI Manager": "AI ম্যানেজার",
  "Bangla + English": "বাংলা + ইংরেজি",
  "Local Payments": "স্থানীয় পেমেন্ট",

  // --- CHOOSE BUSINESS ---
  "Choose your business": "আপনার ব্যবসা নির্বাচন করুন",
  "One platform, built around your business": "আপনার ব্যবসাকে কেন্দ্র করে তৈরি একটি প্ল্যাটফর্ম",
  "Start with the tools that match how your business actually works.": "আপনার ব্যবসা যেভাবে কাজ করে, সেই অনুযায়ী টুল দিয়ে শুরু করুন।",
  "Manage tables, orders, customers and profitability from one simple dashboard.": "একটি সহজ ড্যাশবোর্ড থেকে টেবিল, অর্ডার, গ্রাহক এবং লাভজনকতা পরিচালনা করুন।",
  "Table & order management": "টেবিল ও অর্ডার ব্যবস্থাপনা",
  "Customer loyalty tools": "কাস্টমার লয়্যালটি টুল",
  "Sales and profit reports": "বিক্রয় ও লাভের রিপোর্ট",
  "Start with Restaurant": "রেস্টুরেন্ট দিয়ে শুরু করুন",
  "See restaurant features": "রেস্টুরেন্টের ফিচার দেখুন",
  "Track leads, documents, applications and follow-ups without spreadsheet chaos.": "স্প্রেডশিটের ঝামেলা ছাড়াই লিড, ডকুমেন্ট, আবেদন এবং ফলো-আপ ট্র্যাক করুন।",
  "Lead pipeline": "লিড পাইপলাইন",
  "Document checklist": "ডকুমেন্ট চেকলিস্ট",
  "Follow-up reminders": "ফলো-আপ রিমাইন্ডার",
  "Start with Visa Agency": "ভিসা এজেন্সি দিয়ে শুরু করুন",
  "See agency features": "এজেন্সির ফিচার দেখুন",

  // --- PROBLEM TO SOLUTION ---
  "Simplify your stack": "আপনার ব্যবহৃত টুলগুলো সহজ করুন",
  "Stop switching between tools": "বারবার টুল পরিবর্তন করা বন্ধ করুন",
  "Bring your CRM, website and business insights together.": "আপনার CRM, ওয়েবসাইট এবং ব্যবসায়িক তথ্য এক জায়গায় আনুন।",
  "Before": "আগে",
  "Too many tools": "অতিরিক্ত টুল",
  "Notebook": "নোটবুক",
  "Spreadsheet": "স্প্রেডশিট",
  "Too many tools, too many bills, nothing talks to each other.": "অতিরিক্ত টুল, অতিরিক্ত বিল, একটির সাথে আরেকটি কথা বলে না।",
  "After": "পরে",
  "One simple platform": "একটি সহজ প্ল্যাটফর্ম",
  "One profile. One login. One simple bill.": "একটি প্রোফাইল। একটি লগইন। একটি সহজ বিল।",

  // --- HOW IT WORKS ---
  "How it works": "কীভাবে কাজ করে",
  "Get started in four simple steps": "চারটি সহজ ধাপে শুরু করুন",
  "Sign up and choose your business type": "সাইন আপ করুন এবং ব্যবসার ধরন নির্বাচন করুন",
  "Tell us about your business": "আপনার ব্যবসা সম্পর্কে জানান",
  "Set up your menu or pipeline": "আপনার মেনু বা পাইপলাইন সেটআপ করুন",
  "Get your website and ask your AI manager": "ওয়েবসাইট নিন এবং AI ম্যানেজারকে প্রশ্ন করুন",

  // --- FEATURES SHOWCASE ---
  "Feature showcase": "ফিচার প্রদর্শনী",
  "Tools designed around the way you work": "আপনার কাজের ধরন অনুযায়ী তৈরি টুল",
  "Switch between business types to explore the most relevant features.": "সবচেয়ে প্রাসঙ্গিক ফিচারগুলি অন্বেষণ করতে ব্যবসার ধরনগুলির মধ্যে স্যুইচ করুন।",
  "Table layout and orders": "টেবিল লেআউট ও অর্ডার",
  "Kitchen screen": "কিচেন স্ক্রিন",
  "Customers and loyalty": "কাস্টমার ও লয়্যালটি",
  "Reports and profit per item": "রিপোর্ট ও পণ্যভিত্তিক লাভ",
  "Fees and installments": "ফি ও কিস্তি",

  // --- AI BUSINESS MANAGER ---
  "Your AI Business Manager": "আপনার AI বিজনেস ম্যানেজার",
  "Ask your business questions in plain language.": "সহজ ভাষায় আপনার ব্যবসার প্রশ্ন জিজ্ঞাসা করুন।",
  "Get practical suggestions based on your business data, customers and daily operations.": "আপনার ব্যবসার ডেটা, গ্রাহক এবং দৈনন্দিন কার্যক্রমের উপর ভিত্তি করে ব্যবহারিক পরামর্শ পান।",
  "Spot customer opportunities": "কাস্টমারের সুযোগ খুঁজে বের করুন",
  "Understand business performance": "ব্যবসার কার্যকারিতা বুঝুন",
  "Get weekly business insights": "সাপ্তাহিক ব্যবসায়িক তথ্য পান",
  "BeezNest AI": "BeezNest AI",
  "Business Manager": "বিজনেস ম্যানেজার",
  "You": "আপনি",
  "How can I get more repeat customers?": "আমি কীভাবে আরও রিপিট কাস্টমার পেতে পারি?",
  "Start a win-back message for customers who have not returned recently, then review the response after a week.": "যারা সম্প্রতি ফিরে আসেননি তাদের জন্য একটি উইন-ব্যাক বার্তা শুরু করুন, তারপর এক সপ্তাহ পরে প্রতিক্রিয়া পর্যালোচনা করুন।",

  // --- WEBSITE BUILDER ---
  "Website Builder": "ওয়েবসাইট বিল্ডার",
  "A website that stays in sync with your CRM.": "এমন একটি ওয়েবসাইট যা আপনার CRM-এর সাথে সিঙ্কে থাকে।",
  "Build a professional business website without managing another disconnected system.": "আরেকটি বিচ্ছিন্ন সিস্টেম পরিচালনা না করেই একটি পেশাদার ব্যবসায়িক ওয়েবসাইট তৈরি করুন।",
  "Pick your colours and logo": "আপনার রং ও লোগো নির্বাচন করুন",
  "We build it for you": "আমরা এটি আপনার জন্য তৈরি করি",
  "Change a price in CRM and your website updates": "CRM-এ একটি মূল্য পরিবর্তন করুন এবং আপনার ওয়েবসাইট আপডেট হয়",

  // --- SPECIAL FEATURES ---
  "Special features": "বিশেষ ফিচার",
  "Small details that make a big difference": "ছোট ছোট সুবিধা যা বড় পার্থক্য তৈরি করে",
  "Smart win-back SMS": "স্মার্ট উইন-ব্যাক SMS",
  "QR table ordering": "QR টেবিল অর্ডার",
  "Profit per item": "পণ্যভিত্তিক লাভ",
  "Weekly AI report": "সাপ্তাহিক AI রিপোর্ট",
  "bKash and Nagad ready": "বিকাশ ও নগদ প্রস্তুত",
  "Bangla and English": "বাংলা এবং ইংরেজি",

  // --- PRICING PREVIEW ---
  "Simple pricing": "সহজ মূল্য নির্ধারণ",
  "Plans that grow with your business": "আপনার ব্যবসার সাথে বাড়ে এমন প্ল্যান",
  "Start small and move up when your business needs more.": "ছোট শুরু করুন এবং ব্যবসার প্রয়োজন বাড়লে এগিয়ে যান।",
  "Starter": "স্টার্টার",
  "Growth": "গ্রোথ",
  "Pro": "প্রো",
  "/month": "/মাস",
  "View pricing": "মূল্য দেখুন",

  // --- TESTIMONIAL / PILOT ---
  "Built with real business needs in mind.": "প্রকৃত ব্যবসায়িক চাহিদার কথা মাথায় রেখে তৈরি।",
  "We are opening our pilot to restaurant and visa agency owners in Bangladesh.": "আমরা বাংলাদেশের রেস্টুরেন্ট এবং ভিসা এজেন্সি মালিকদের জন্য আমাদের পাইলট খুলছি।",
  "Join the pilot": "পাইলটে যোগ দিন",

  // --- FAQ SECTION ---
  "FAQ": "সাধারণ প্রশ্ন",
  "Questions, answered": "আপনার প্রশ্নের উত্তর",
  "How does the free trial work?": "ফ্রি ট্রায়াল কীভাবে কাজ করে?",
  "The trial lets you explore the BeezNest experience before choosing a plan. Final trial terms will be confirmed by the BeezNest team.": "প্ল্যান বেছে নেওয়ার আগে ট্রায়ালের মাধ্যমে BeezNest-এর অভিজ্ঞতা নিতে পারবেন। চূড়ান্ত ট্রায়াল শর্ত BeezNest টিম নিশ্চিত করবে।",
  "Do I need technical knowledge?": "আমার কি প্রযুক্তিগত জ্ঞান দরকার?",
  "No. BeezNest is designed to keep business management simple and easy to use.": "না। BeezNest ব্যবসা ব্যবস্থাপনাকে সহজ ও ব্যবহারবান্ধব রাখার জন্য তৈরি।",
  "Can I use my own domain?": "আমি কি নিজের ডোমেইন ব্যবহার করতে পারি?",
  "Yes, custom domain support can be configured as part of the website setup.": "হ্যাঁ, ওয়েবসাইট সেটআপের অংশ হিসেবে কাস্টম ডোমেইন সাপোর্ট যুক্ত করা যায়।",
  "Is my data safe?": "আমার ডেটা কি নিরাপদ?",
  "BeezNest is designed with secure business data handling in mind. Final security and privacy policies should be confirmed before launch.": "BeezNest নিরাপদ ব্যবসায়িক ডেটা ব্যবস্থাপনাকে গুরুত্ব দিয়ে তৈরি। চূড়ান্ত নিরাপত্তা ও প্রাইভেসি নীতি লঞ্চের আগে নিশ্চিত করা উচিত।",
  "Does it work in Bangla?": "এটি কি বাংলায় কাজ করে?",
  "Yes. BeezNest is planned for both Bangla and English business experiences.": "হ্যাঁ। BeezNest বাংলা ও ইংরেজি—দুই ভাষার ব্যবসায়িক অভিজ্ঞতার জন্য পরিকল্পিত।",
  "How do I pay?": "আমি কীভাবে পেমেন্ট করব?",
  "The platform is planned to support local payment methods including bKash and Nagad.": "প্ল্যাটফর্মে বিকাশ ও নগদসহ স্থানীয় পেমেন্ট পদ্ধতি সাপোর্ট করার পরিকল্পনা রয়েছে।",

  // --- FINAL CTA ---
  "Ready to run your business smarter?": "আরও স্মার্টভাবে ব্যবসা চালাতে প্রস্তুত?",
  "Start with BeezNest and bring your business tools together in one simple platform.": "BeezNest দিয়ে শুরু করুন এবং আপনার ব্যবসার টুলগুলো একটি সহজ প্ল্যাটফর্মে একত্রিত করুন।",

  // --- DASHBOARD (MockDashboard) ---
  "Business Overview": "ব্যবসায়িক ওভারভিউ",
  "Orders": "অর্ডার",
  "Customers": "গ্রাহক",
  "Revenue": "রাজস্ব",
  "Sales overview": "বিক্রয় ওভারভিউ",
  "Last 7 days": "গত ৭ দিন",
  "Recent customers": "সাম্প্রতিক গ্রাহক",
  "Active": "সক্রিয়",
  "AI Business Manager": "AI বিজনেস ম্যানেজার",
  "opportunities found": "সম্ভাবনা পাওয়া গেছে",

  // --- AUTH / LOGIN / SIGNUP ---
  "Welcome back": "আবার স্বাগতম",
  "Log in to your dashboard": "আপনার ড্যাশবোর্ডে লগ ইন করুন",
  "Phone or email": "ফোন বা ইমেইল",
  "Password": "পাসওয়ার্ড",
  "Forgot password?": "পাসওয়ার্ড ভুলে গেছেন?",
  "Continue with Google": "Google দিয়ে চালিয়ে যান",
  "New here? Create an account": "নতুন? একটি অ্যাকাউন্ট তৈরি করুন",
  "Create your account": "আপনার অ্যাকাউন্ট তৈরি করুন",
  "Start your free trial": "আপনার ফ্রি ট্রায়াল শুরু করুন",
  "Your name": "আপনার নাম",
  "Business name": "ব্যবসার নাম",
  "Phone number": "ফোন নম্বর",
  "I agree to Terms and Privacy": "আমি শর্তাবলী এবং গোপনীয়তায় সম্মত",
  "Already have an account?": "ইতিমধ্যে একটি অ্যাকাউন্ট আছে?",
  "Log in here": "এখানে লগ ইন করুন",
  "Next: verify phone, choose business": "পরবর্তী: ফোন যাচাই করুন, ব্যবসা নির্বাচন করুন",
  "Account": "অ্যাকাউন্ট",
  "Business": "ব্যবসা",
  "Verification": "ভেরিফিকেশন",
  "Verify your phone": "আপনার ফোন ভেরিফাই করুন",
  "Verification code": "ভেরিফিকেশন কোড",
  "Please enter the 6-digit verification code.": "৬ সংখ্যার ভেরিফিকেশন কোড লিখুন।",
  "Resend code": "কোড আবার পাঠান",
  "Change number": "নম্বর পরিবর্তন করুন",
  "Resend code in": "কোড আবার পাঠাতে বাকি",
  "Please enter your password.": "আপনার পাসওয়ার্ড লিখুন।",
  "Your full name": "আপনার পূর্ণ নাম",
  "Please enter your name.": "আপনার নাম লিখুন।",
  "Your business name": "আপনার ব্যবসার নাম",
  "Please enter your business name.": "আপনার ব্যবসার নাম লিখুন।",
  "Enter phone or email": "ফোন বা ইমেইল লিখুন",
  "Please enter your phone number.": "আপনার ফোন নম্বর লিখুন।",
  "Please enter a valid Bangladesh phone number.": "সঠিক বাংলাদেশি ফোন নম্বর লিখুন।",
  "Please enter a valid email address.": "সঠিক ইমেইল ঠিকানা লিখুন।",
  "Create a password": "পাসওয়ার্ড তৈরি করুন",
  "Password must be at least 8 characters.": "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।",
  "Password must contain a lowercase letter.": "পাসওয়ার্ডে একটি ছোট হাতের অক্ষর থাকতে হবে।",
  "Password must contain a number.": "পাসওয়ার্ডে একটি সংখ্যা থাকতে হবে।",
  "Password must contain an uppercase letter.": "পাসওয়ার্ডে একটি বড় হাতের অক্ষর থাকতে হবে।",
  "I agree to the Terms and Privacy Policy.": "আমি Terms এবং Privacy Policy-তে সম্মত।",
  "Orders, tables, customers and reports.": "অর্ডার, টেবিল, কাস্টমার ও রিপোর্ট।",
  "Leads, documents, applications and follow-ups.": "লিড, ডকুমেন্ট, আবেদন ও ফলো-আপ।",
  "Please choose your business type.": "আপনার ব্যবসার ধরন নির্বাচন করুন।",
  "Back": "পেছনে",
  "Please wait...": "অনুগ্রহ করে অপেক্ষা করুন...",
  "Create account": "অ্যাকাউন্ট তৈরি করুন",
  "Verify & continue": "ভেরিফাই করে এগিয়ে যান",
  "Finish setup": "সেটআপ সম্পন্ন করুন",

  // --- PRICING PAGE EXTRAS ---
  "Simple plans for growing businesses": "বর্ধনশীল ব্যবসার জন্য সহজ প্ল্যান",
  "Choose your business type and find the plan that fits your current stage.": "আপনার ব্যবসার ধরন নির্বাচন করুন এবং বর্তমান অবস্থার জন্য উপযুক্ত প্ল্যান বেছে নিন।",
  "Monthly": "মাসিক",
  "Yearly": "বার্ষিক",
  "/year": "/বছর",
  "Recommended": "সুপারিশকৃত",
  "Includes:": "যা যা থাকছে:",
  "Compare plans": "প্ল্যান তুলনা করুন",
  "Choose the plan that fits your business.": "আপনার ব্যবসার জন্য উপযুক্ত প্ল্যান বেছে নিন।",
  "Add-ons": "অ্যাড-অন",
  "Additional SMS credits": "অতিরিক্ত SMS ক্রেডিট",
  "Advanced AI usage": "অ্যাডভান্সড AI ব্যবহার",
  "Custom domain": "কাস্টম ডোমেইন",
  "Extra website customization": "অতিরিক্ত ওয়েবসাইট কাস্টমাইজেশন",
  "Expand when your business needs more": "ব্যবসার প্রয়োজন বাড়লে আরও সুবিধা নিন",
  "OR": "অথবা",
  
  // (Plan features and limits can be added here as you build the pricing page)
};

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(
    () => localStorage.getItem("beeznest_language") || "en"
  );

  const setLanguage = (nextLanguage) => {
    const next = nextLanguage === "bn" ? "bn" : "en";
    localStorage.setItem("beeznest_language", next);
    setLanguageState(next);
    document.documentElement.lang = next; 
  };

  // The 't' function is the safest way to translate. 
  // It looks up the English text in the 'bn' object.
  // If it finds it, it returns the Bangla text.
  // If it doesn't find it (or if the language is English), it returns the original English text safely.
  const t = (text) => {
    if (language === "bn") {
      return bn[text] || text; 
    }
    return text;
  };

  const value = useMemo(
    () => ({ language, setLanguage, isBangla: language === "bn", t }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}