import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Check,
  ChevronDown,
  Globe2,
  LayoutDashboard,
  MessageSquareText,
  QrCode,
  Smartphone,
  Sparkles,
  Store,
  Users,
  Zap,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MockDashboard from "../components/MockDashboard";
import SectionHeading from "../components/SectionHeading";
// Import the language hook
import { useLanguage } from "../context/LanguageContext";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Home() {
  const navigate = useNavigate();
  const [activeBusiness, setActiveBusiness] = useState("restaurant");
  const [openFaq, setOpenFaq] = useState(null);
  
  // Get the translation function 't'
  const { t , isBangla } = useLanguage();

  // Step 13: remember chosen business type + go to signup
  const chooseBusiness = (type) => {
    localStorage.setItem("biznest_business_type", type);
    navigate("/signup");
  };

  const faqs = [
    {
      question: "How does the free trial work?",
      answer:
        "The trial lets you explore the BeezNest experience before choosing a plan. Final trial terms will be confirmed by the BeezNest team.",
    },
    {
      question: "Do I need technical knowledge?",
      answer:
        "No. BeezNest is designed to keep business management simple and easy to use.",
    },
    {
      question: "Can I use my own domain?",
      answer:
        "Yes, custom domain support can be configured as part of the website setup.",
    },
    {
      question: "Is my data safe?",
      answer:
        "BeezNest is designed with secure business data handling in mind. Final security and privacy policies should be confirmed before launch.",
    },
    {
      question: "Does it work in Bangla?",
      answer:
        "Yes. BeezNest is planned for both Bangla and English business experiences.",
    },
    {
      question: "How do I pay?",
      answer:
        "The platform is planned to support local payment methods including bKash and Nagad.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="overflow-hidden bg-[#F0FAF3]">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-semibold text-[#2F855A] shadow-sm">
              <Sparkles size={16} />
              {t("Built for restaurants and visa agencies")}
            </div>

            <h1 
             className={`mt-6 max-w-3xl font-black tracking-tight text-[#14532D] ${
             isBangla 
               ? "text-4xl sm:text-5xl lg:text-6xl leading-tight sm:leading-tight" // Smaller size for Bengali
               : "text-5xl sm:text-6xl lg:text-7xl" // Original size for English
}`}
>
  {t("Run your business.")}
  <br />
  <span className="text-[#2F855A]">{t("Grow it smarter.")}</span>
</h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
              {t("CRM, website and an AI business manager, in one simple platform.")}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#94D8AB] px-6 py-3.5 font-bold text-[#14532D] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#6BC48C]"
              >
                {t("Start free trial")}
                <ArrowRight size={18} />
              </Link>

              <button className="rounded-xl border border-[#94D8AB] bg-white px-6 py-3.5 font-bold text-[#14532D] transition hover:bg-[#F0FAF3]">
                {t("Watch 2-min demo")}
              </button>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <Check size={16} className="text-[#2F855A]" />
                {t("CRM + website + AI")}
              </span>

              <span className="flex items-center gap-2">
                <Check size={16} className="text-[#2F855A]" />
                {t("Bangla & English")}
              </span>

              <span className="flex items-center gap-2">
                <Check size={16} className="text-[#2F855A]" />
                {t("bKash & Nagad ready")}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <MockDashboard />
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          TRUST STRIP
      ===================================================== */}
      <section className="border-b border-green-100 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5 text-sm text-slate-500 lg:px-8">
          <span className="font-semibold text-slate-600">
            {t("Built for growing businesses")}
          </span>

          <span>{t("CRM")}</span>
          <span>{t("Website")}</span>
          <span>{t("AI Manager")}</span>
          <span>{t("Bangla + English")}</span>
          <span>{t("Local Payments")}</span>
        </div>
      </section>

      {/* =====================================================
          CHOOSE BUSINESS
      ===================================================== */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow={t("Choose your business")}
            title={t("One platform, built around your business")}
            description={t("Start with the tools that match how your business actually works.")}
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {/* Restaurant */}
            <motion.div
              id="restaurant"
              whileHover={{ y: -5 }}
              className="flex flex-col rounded-3xl border border-green-100 bg-white p-8 shadow-sm transition hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0FAF3] text-3xl">
                🍽️
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#14532D]">
                {t("Restaurant")}
              </h3>

              <p className="mt-3 text-slate-600">
                {t("Manage tables, orders, customers and profitability from one simple dashboard.")}
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Table & order management",
                  "Customer loyalty tools",
                  "Sales and profit reports",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-600"
                  >
                    <Check size={17} className="text-[#2F855A]" />
                    {t(item)}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  onClick={() => chooseBusiness("restaurant")}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#94D8AB] px-5 py-3 font-bold text-[#14532D] transition hover:-translate-y-0.5 hover:bg-[#6BC48C] focus:outline-none focus:ring-4 focus:ring-[#BDE8CB]"
                >
                  {t("Start with Restaurant")}
                  <ArrowRight size={16} />
                </button>

                <a
                  href="#features"
                  className="inline-flex items-center gap-2 font-bold text-[#2F855A] hover:underline"
                >
                  {t("See restaurant features")}
                </a>
              </div>
            </motion.div>

            {/* Visa Agency */}
            <motion.div
              id="visa-agency"
              whileHover={{ y: -5 }}
              className="flex flex-col rounded-3xl border border-green-100 bg-white p-8 shadow-sm transition hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0FAF3]">
                <Globe2 size={30} className="text-[#2F855A]" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#14532D]">
                {t("Student Visa Agency")}
              </h3>

              <p className="mt-3 text-slate-600">
                {t("Track leads, documents, applications and follow-ups without spreadsheet chaos.")}
              </p>

              <ul className="mt-6 space-y-3">
                {["Lead pipeline", "Document checklist", "Follow-up reminders"].map(
                  (item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-slate-600"
                    >
                      <Check size={17} className="text-[#2F855A]" />
                      {t(item)}
                    </li>
                  )
                )}
              </ul>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  onClick={() => chooseBusiness("visa-agency")}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#94D8AB] px-5 py-3 font-bold text-[#14532D] transition hover:-translate-y-0.5 hover:bg-[#6BC48C] focus:outline-none focus:ring-4 focus:ring-[#BDE8CB]"
                >
                  {t("Start with Visa Agency")}
                  <ArrowRight size={16} />
                </button>

                <a
                  href="#features"
                  className="inline-flex items-center gap-2 font-bold text-[#2F855A] hover:underline"
                >
                  {t("See agency features")}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROBLEM → SOLUTION
      ===================================================== */}
      <section className="bg-[#F0FAF3] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow={t("Simplify your stack")}
            title={t("Stop switching between tools")}
            description={t("Bring your CRM, website and business insights together.")}
          />

          <div className="mt-14 grid items-center gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-red-100 bg-white p-8">
              <p className="text-sm font-bold uppercase tracking-wider text-red-500">
                {t("Before")}
              </p>

              <h3 className="mt-3 text-2xl font-bold text-slate-800">
                {t("Too many tools")}
              </h3>

              <div className="mt-7 grid grid-cols-2 gap-4">
                {["Notebook", "Spreadsheet", "Website", "CRM"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 p-5 text-center text-sm font-semibold text-slate-600"
                  >
                    {t(item)}
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm leading-6 text-slate-500">
                {t("Too many tools, too many bills, nothing talks to each other.")}
              </p>
            </div>

            <div className="rounded-3xl border border-green-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-[#2F855A]">
                {t("After")}
              </p>

              <h3 className="mt-3 text-2xl font-bold text-[#14532D]">
                {t("One simple platform")}
              </h3>

              <div className="mt-7 flex items-center justify-center">
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#94D8AB] text-center font-black text-[#14532D] shadow-lg">
                  {t("BeezNest")}
                </div>
              </div>

              <div className="mt-7 grid grid-cols-3 gap-3 text-center text-xs font-semibold text-slate-600">
                <div className="rounded-xl bg-[#F0FAF3] p-3">{t("CRM")}</div>
                <div className="rounded-xl bg-[#F0FAF3] p-3">{t("Website")}</div>
                <div className="rounded-xl bg-[#F0FAF3] p-3">{t("AI Manager")}</div>
              </div>

              <p className="mt-6 text-sm font-semibold text-[#2F855A]">
                {t("One profile. One login. One simple bill.")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow={t("How it works")}
            title={t("Get started in four simple steps")}
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Sign up and choose your business type",
              },
              {
                number: "02",
                title: "Tell us about your business",
              },
              {
                number: "03",
                title: "Set up your menu or pipeline",
              },
              {
                number: "04",
                title: "Get your website and ask your AI manager",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#94D8AB] font-black text-[#14532D]">
                  {item.number}
                </div>

                <h3 className="mt-6 font-bold leading-6 text-[#14532D]">
                  {t(item.title)}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURES
      ===================================================== */}
      <section id="features" className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow={t("Feature showcase")}
            title={t("Tools designed around the way you work")}
            description={t("Switch between business types to explore the most relevant features.")}
          />

          <div className="mt-10 flex justify-center">
            <div className="inline-flex rounded-2xl border border-green-100 bg-white p-1">
              <button
                onClick={() => setActiveBusiness("restaurant")}
                className={`rounded-xl px-5 py-3 text-sm font-bold transition ${
                  activeBusiness === "restaurant"
                    ? "bg-[#94D8AB] text-[#14532D]"
                    : "text-slate-500"
                }`}
              >
                {t("Restaurant")}
              </button>

              <button
                onClick={() => setActiveBusiness("visa")}
                className={`rounded-xl px-5 py-3 text-sm font-bold transition ${
                  activeBusiness === "visa"
                    ? "bg-[#94D8AB] text-[#14532D]"
                    : "text-slate-500"
                }`}
              >
                {t("Visa Agency")}
              </button>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {(activeBusiness === "restaurant"
              ? [
                  { icon: Store, title: "Table layout and orders" },
                  { icon: Smartphone, title: "Kitchen screen" },
                  { icon: Users, title: "Customers and loyalty" },
                  { icon: BarChart3Icon, title: "Reports and profit per item" },
                ]
              : [
                  { icon: Users, title: "Lead pipeline" },
                  { icon: LayoutDashboard, title: "Document checklist" },
                  { icon: MessageSquareText, title: "Follow-up reminders" },
                  { icon: BarChart3Icon, title: "Fees and installments" },
                ]
            ).map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-green-100 bg-white p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0FAF3]">
                    <Icon size={23} className="text-[#2F855A]" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#14532D]">
                    {t(feature.title)}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          AI BUSINESS MANAGER
      ===================================================== */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0FAF3]">
              <Bot size={30} className="text-[#2F855A]" />
            </div>

            <p className="mt-6 text-sm font-bold uppercase tracking-wider text-[#2F855A]">
              {t("Your AI Business Manager")}
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-[#14532D]">
              {t("Ask your business questions in plain language.")}
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              {t("Get practical suggestions based on your business data, customers and daily operations.")}
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Spot customer opportunities",
                "Understand business performance",
                "Get weekly business insights",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-slate-600"
                >
                  <Check size={18} className="text-[#2F855A]" />
                  {t(item)}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-green-100 bg-[#F0FAF3] p-5">
            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#94D8AB]">
                  <Bot size={20} />
                </div>

                <div>
                  <p className="font-bold text-[#14532D]">{t("BeezNest AI")}</p>
                  <p className="text-xs text-slate-400">{t("Business Manager")}</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-700">{t("You")}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {t("How can I get more repeat customers?")}
                </p>
              </div>

              <div className="mt-4 rounded-2xl bg-[#F0FAF3] p-4">
                <p className="text-sm font-semibold text-[#2F855A]">
                  {t("BeezNest AI")}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {t("Start a win-back message for customers who have not returned recently, then review the response after a week.")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WEBSITE BUILDER
      ===================================================== */}
      <section className="bg-[#F0FAF3] py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div className="order-2 lg:order-1">
            <div className="rounded-3xl border border-green-100 bg-white p-5 shadow-xl">
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <div className="h-5 w-32 rounded bg-[#94D8AB]" />

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="col-span-2 h-32 rounded-xl bg-[#DCF3E3]" />
                  <div className="h-32 rounded-xl bg-white" />
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div className="h-20 rounded-xl bg-white" />
                  <div className="h-20 rounded-xl bg-white" />
                  <div className="h-20 rounded-xl bg-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-sm font-bold uppercase tracking-wider text-[#2F855A]">
              {t("Website Builder")}
            </p>

            <h2 className="mt-3 text-4xl font-black text-[#14532D]">
              {t("A website that stays in sync with your CRM.")}
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              {t("Build a professional business website without managing another disconnected system.")}
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Pick your colours and logo",
                "We build it for you",
                "Change a price in CRM and your website updates",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#94D8AB]">
                    <Check size={16} />
                  </div>

                  <span className="text-slate-600">{t(item)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SPECIAL FEATURES
      ===================================================== */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow={t("Special features")}
            title={t("Small details that make a big difference")}
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: MessageSquareText, title: "Smart win-back SMS" },
              { icon: QrCode, title: "QR table ordering" },
              { icon: BarChart3Icon, title: "Profit per item" },
              { icon: Bot, title: "Weekly AI report" },
              { icon: Smartphone, title: "bKash and Nagad ready" },
              { icon: Globe2, title: "Bangla and English" },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-green-100 bg-white p-7 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0FAF3]">
                    <Icon size={22} className="text-[#2F855A]" />
                  </div>

                  <h3 className="mt-5 font-bold text-[#14532D]">
                    {t(item.title)}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRICING PREVIEW
      ===================================================== */}
      <section className="bg-[#14532D] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow={t("Simple pricing")}
            title={t("Plans that grow with your business")}
            description={t("Start small and move up when your business needs more.")}
            variant="dark"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { name: "Starter", price: "৳1,200" },
              { name: "Growth", price: "৳3,000" },
              { name: "Pro", price: "৳5,500" },
            ].map((plan) => (
              <div
                key={plan.name}
                className="rounded-3xl border border-green-800 bg-white/5 p-7"
              >
                <p className="font-bold">{t(plan.name)}</p>

                <p className="mt-4 text-4xl font-black">
                  {plan.price}
                  <span className="text-sm font-normal text-green-200">
                    {t("/month")}
                  </span>
                </p>

                <Link
                  to="/pricing"
                  className="mt-7 inline-flex w-full justify-center rounded-xl bg-[#94D8AB] px-5 py-3 font-bold text-[#14532D]"
                >
                  {t("View pricing")}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIAL / PILOT
      ===================================================== */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0FAF3]">
            <Sparkles size={28} className="text-[#2F855A]" />
          </div>

          <h2 className="mt-6 text-3xl font-black text-[#14532D] sm:text-4xl">
            {t("Built with real business needs in mind.")}
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            {t("We are opening our pilot to restaurant and visa agency owners in Bangladesh.")}
          </p>

          <Link
            to="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#94D8AB] px-6 py-3.5 font-bold text-[#14532D]"
          >
            {t("Join the pilot")}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}
      <section id="faq" className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <SectionHeading eyebrow={t("FAQ")} title={t("Questions, answered")} />

          <div className="mt-12 space-y-3">
            {faqs.map((faq, index) => {
              const open = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-green-100 bg-white"
                >
                  <button
                    onClick={() => setOpenFaq(open ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                  >
                    <span className="font-bold text-[#14532D]">
                      {t(faq.question)}
                    </span>

                    <ChevronDown
                      size={20}
                      className={`shrink-0 transition ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {open && (
                    <div className="border-t border-green-100 px-5 py-5 text-sm leading-7 text-slate-600">
                      {t(faq.answer)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#F0FAF3] px-6 py-14 text-center sm:px-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#94D8AB]">
            <Zap size={28} className="text-[#14532D]" />
          </div>

          <h2 className="mt-6 text-4xl font-black text-[#14532D] sm:text-5xl">
            {t("Ready to run your business smarter?")}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            {t("Start with BeezNest and bring your business tools together in one simple platform.")}
          </p>

          <Link
            to="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#94D8AB] px-7 py-4 font-bold text-[#14532D] shadow-sm hover:bg-[#6BC48C]"
          >
            {t("Start free trial")}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/*
  Small reusable icon component so the feature data above
  stays simple.
*/
function BarChart3Icon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 3v18h18" />
      <path d="M7 16v-4" />
      <path d="M12 16V8" />
      <path d="M17 16V5" />
    </svg>
  );
}