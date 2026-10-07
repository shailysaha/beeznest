import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3 as BarChart3Icon,
  Bot,
  Building2,
  Check,
  ChevronDown,
  Globe2,
  Languages,
  LayoutDashboard,
  Link2,
  MessageSquareText,
  NotebookTabs,
  Pause,
  Play,
  QrCode,
  Settings2,
  Smartphone,
  Sparkles,
  Store,
  Table2,
  Unplug,
  UserPlus,
  Users,
  Zap,
} from "lucide-react";

import TrustAndBusiness from "../components/TrustAndBusiness";
import HowItWorks from "../components/HowItWorks";
import FeatureShowcase from "../components/FeatureShowcase";
import SpecialFeatures from "../components/SpecialFeatures";
import AIManagerSpotlight from "../components/AIManagerSpotlight";
import WebsiteBuilderShowcase from "../components/WebsiteBuilderShowcase";
import PricingPreview from "../components/PricingPreview";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MockDashboard from "../components/MockDashboard";
import SectionHeading from "../components/SectionHeading";
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

  // Get the translation function 't'
  const { t, isBangla } = useLanguage();

  // Step 13.2: Add the handler
  const handleBusinessType = (businessType) => {
    localStorage.setItem("biznest_business_type", businessType);
    navigate("/signup");
  };

  // Step 7K: Connect Step 4 cards to Step 7 showcase
  const previewBusiness = (type) => {
    localStorage.setItem("biznest_business_type", type);
    setActiveBusiness(type === "restaurant" ? "restaurant" : "visa");

    setTimeout(() => {
      document
        .getElementById("feature-showcase")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 50);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative isolate overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-brand-200/50 blur-3xl animate-drift" />
          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-brand-100/70 blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 h-72 opacity-40 bn-honeycomb [mask-image:linear-gradient(to_bottom,transparent,black)]" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-36 sm:pb-24 sm:pt-40 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:px-8 lg:pb-28 lg:pt-44">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-brand-700 shadow-soft backdrop-blur">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-700" />
              </span>
              {t("AI business manager for restaurants and agencies")}
            </div>

            <h1
              className={`
                mt-7
                max-w-3xl
                font-black
                tracking-[-0.035em]
                text-brand-900
                ${
                  isBangla
                    ? "text-4xl leading-[1.15] sm:text-5xl lg:text-6xl"
                    : "text-5xl leading-[1.02] sm:text-6xl lg:text-[72px]"
                }
              `}
            >
              {t("Run your business.")}
              <br />
              <span className="relative inline-block">
                <span className="bn-gradient-text">
                  {t("Grow it smarter.")}
                </span>
                <svg
                  className="absolute -bottom-4 left-0 h-4 w-full overflow-visible"
                  viewBox="0 0 300 18"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 12C65 4 120 17 178 8C220 2 257 7 297 4"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="text-brand-300"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              {t("CRM, website and an AI business manager, in one simple platform.")}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/signup"
                className="bn-gradient-button group inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-3.5 text-sm font-extrabold sm:text-base"
              >
                <span>{t("Start free trial")}</span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              <button
                type="button"
                onClick={() => {
                  const section = document.getElementById("feature-showcase");
                  section?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-brand-200 bg-white/80 px-6 py-3.5 text-sm font-extrabold text-brand-900 shadow-sm backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:bg-brand-50 hover:shadow-soft sm:text-base"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-100 text-brand-700 transition group-hover:bg-brand-200">
                  <Play size={13} fill="currentColor" />
                </span>
                {t("Watch 2-min demo")}
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
              <div className="flex -space-x-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-brand-100 text-xs font-bold text-brand-900">
                  B
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-brand-200 text-xs font-bold text-brand-900">
                  ৳
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-brand-300 text-xs font-bold text-brand-900">
                  AI
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1 text-sm font-bold text-brand-900">
                  <Check size={15} className="text-brand-700" />
                  {t("Made for businesses in Bangladesh")}
                </div>
                <p className="mt-0.5 text-xs text-slate-500">
                  {t("Bangla + English")} · {t("Local payments")}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[620px] px-2 sm:px-5"
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-200/60 blur-3xl" />

            <div className="relative z-20 mb-7 flex justify-center">
              <div className="inline-flex rounded-full border border-brand-200 bg-white/80 p-1 shadow-soft backdrop-blur-xl">
                <button
                  type="button"
                  onClick={() => setActiveBusiness("restaurant")}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition sm:px-5 sm:text-sm ${
                    activeBusiness === "restaurant"
                      ? "bg-brand-900 text-white shadow-sm"
                      : "text-slate-500 hover:text-brand-700"
                  }`}
                >
                  🍽️ {t("Restaurant")}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveBusiness("visa-agency")}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition sm:px-5 sm:text-sm ${
                    activeBusiness === "visa-agency"
                      ? "bg-brand-900 text-white shadow-sm"
                      : "text-slate-500 hover:text-brand-700"
                  }`}
                >
                  🌍 {t("Visa Agency")}
                </button>
              </div>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-[520px]">
              <MockDashboard businessType={activeBusiness} />
            </div>

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-3 top-24 z-20 hidden rounded-2xl border border-white/70 bg-white/75 p-3 shadow-lift backdrop-blur-xl sm:block lg:-left-10"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100">
                  <Zap size={18} className="text-brand-700" />
                </div>
                <div>
                  <p className="text-[10px] font-medium text-slate-400">
                    {t("Sales")}
                  </p>
                  <p className="text-sm font-extrabold text-brand-900">
                    +12.4%
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-2 top-36 z-20 hidden rounded-2xl border border-white/70 bg-white/75 p-3 shadow-lift backdrop-blur-xl sm:block lg:-right-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100">
                  <Store size={18} className="text-brand-700" />
                </div>
                <div>
                  <p className="text-[10px] font-medium text-slate-400">
                    {t("New order")}
                  </p>
                  <p className="text-sm font-extrabold text-brand-900">
                    ৳2,450
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 left-1/2 z-20 hidden w-64 -translate-x-1/2 rounded-2xl border border-white/70 bg-white/80 p-4 shadow-lift backdrop-blur-xl sm:block"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-900 text-white">
                  <Bot size={17} />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-900">
                    {t("AI tip")}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {t("Try a combo offer on Tuesday to improve repeat orders.")}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* =====================================================
          STEP 3: TRUST AND BUSINESS
      ===================================================== */}
      <TrustAndBusiness />

      {/* =====================================================
          STEP 4 — PROBLEM → SOLUTION
      ===================================================== */}
      <section
        id="problem-solution"
        className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#DCF3E3]/70 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#BDE8CB] bg-[#F0FAF3] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#2F855A]">
              <Sparkles size={13} />
              {t("One connected platform")}
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-[#14532D] sm:text-4xl lg:text-5xl">
              {t("Stop switching between tools.")}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              {t("Bring your CRM, website and business insights together in one simple platform.")}
            </p>
          </div>

          <div className="relative mt-14 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-8">
            {/* BEFORE */}
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[#F8FAF9] p-6 sm:p-8">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-slate-200/60 blur-3xl" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="inline-flex rounded-full bg-slate-200 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">
                      {t("Before")}
                    </span>
                    <h3 className="mt-4 text-2xl font-black tracking-tight text-slate-800 sm:text-3xl">
                      {t("Too many tools.")}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                      {t("Your business information is scattered across different places.")}
                    </p>
                  </div>
                  <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-slate-200 text-slate-500 sm:flex">
                    <Settings2 size={22} />
                  </div>
                </div>

                <div className="relative mt-8 min-h-[310px] overflow-hidden rounded-3xl border border-slate-200 bg-white p-5">
                  <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 500 310" preserveAspectRatio="none">
                    <path d="M120 65 C220 20 270 145 360 80" fill="none" stroke="#CBD5D1" strokeWidth="2" strokeDasharray="5 7" />
                    <path d="M105 205 C190 125 275 235 395 170" fill="none" stroke="#CBD5D1" strokeWidth="2" strokeDasharray="5 7" />
                    <path d="M390 70 C300 100 260 185 150 250" fill="none" stroke="#D7DEDA" strokeWidth="2" strokeDasharray="5 7" />
                    <path d="M75 145 C160 95 310 250 425 235" fill="none" stroke="#D7DEDA" strokeWidth="2" strokeDasharray="5 7" />
                  </svg>

                  <div className="absolute left-5 top-7 w-[145px] -rotate-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-500 hover:-translate-y-1 hover:rotate-0">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
                        <NotebookTabs size={16} />
                      </div>
                      <span className="text-xs font-extrabold text-slate-700">{t("Notebook")}</span>
                    </div>
                    <div className="mt-3 space-y-2">
                      <div className="h-2 w-20 rounded-full bg-slate-100" />
                      <div className="h-2 w-28 rounded-full bg-slate-100" />
                      <div className="h-2 w-16 rounded-full bg-slate-100" />
                    </div>
                  </div>

                  <div className="absolute right-5 top-9 w-[150px] rotate-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-500 hover:-translate-y-1 hover:rotate-0">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
                        <BarChart3Icon size={16} />
                      </div>
                      <span className="text-xs font-extrabold text-slate-700">{t("Spreadsheet")}</span>
                    </div>
                    <div className="mt-3 grid grid-cols-4 gap-1">
                      {Array.from({ length: 12 }).map((_, index) => (
                        <div key={index} className="h-4 rounded bg-slate-100" />
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-7 left-7 w-[150px] rotate-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-500 hover:-translate-y-1 hover:rotate-0">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
                        <Globe2 size={16} />
                      </div>
                      <span className="text-xs font-extrabold text-slate-700">{t("Website")}</span>
                    </div>
                    <div className="mt-3 rounded-xl bg-slate-50 p-2">
                      <div className="h-2 w-14 rounded-full bg-slate-200" />
                      <div className="mt-2 h-12 rounded-lg bg-slate-100" />
                    </div>
                  </div>

                  <div className="absolute bottom-8 right-7 w-[145px] -rotate-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-500 hover:-translate-y-1 hover:rotate-0">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
                        <Users size={16} />
                      </div>
                      <span className="text-xs font-extrabold text-slate-700">{t("CRM")}</span>
                    </div>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="h-5 w-5 rounded-full bg-slate-200" />
                        <span className="h-2 w-16 rounded-full bg-slate-100" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="h-5 w-5 rounded-full bg-slate-200" />
                        <span className="h-2 w-12 rounded-full bg-slate-100" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border border-slate-200 bg-white/95 px-4 py-2 text-[10px] font-bold text-slate-400 shadow-sm backdrop-blur">
                    <Link2 size={13} />
                    {t("Disconnected")}
                  </div>
                </div>

                <div className="mt-6 flex items-start gap-3">
                  <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-slate-300" />
                  <p className="text-sm font-semibold leading-6 text-slate-500">
                    {t("Too many tools, too many logins, and information that never stays in sync.")}
                  </p>
                </div>
              </div>
            </div>

            {/* CENTER */}
            <div className="relative z-20 flex items-center justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#BDE8CB] bg-white text-[#2F855A] shadow-lg">
                <ArrowRight size={23} className="hidden lg:block" />
                <span className="text-lg font-black lg:hidden">↓</span>
              </div>
              <div className="absolute left-full hidden h-px w-8 border-t-2 border-dashed border-[#BDE8CB] lg:block" />
              <div className="absolute right-full hidden h-px w-8 border-t-2 border-dashed border-[#CBD5D1] lg:block" />
            </div>

            {/* AFTER */}
            <div className="relative overflow-hidden rounded-[2rem] border border-[#BDE8CB] bg-[#F0FAF3] p-6 shadow-[0_20px_60px_rgba(47,133,90,0.10)] sm:p-8">
              <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#BDE8CB]/70 blur-3xl" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="inline-flex rounded-full bg-[#DCF3E3] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-[#2F855A]">
                      {t("After")}
                    </span>
                    <h3 className="mt-4 text-2xl font-black tracking-tight text-[#14532D] sm:text-3xl">
                      {t("One connected platform.")}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
                      {t("Everything works together so you can focus on growing your business.")}
                    </p>
                  </div>
                  <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-[#DCF3E3] text-[#2F855A] sm:flex">
                    <Zap size={22} />
                  </div>
                </div>

                <div className="relative mt-8 min-h-[310px] overflow-hidden rounded-3xl border border-[#BDE8CB] bg-white p-5 shadow-sm">
                  <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 500 310" preserveAspectRatio="none">
                    <path d="M250 145 C185 105 130 70 95 55" fill="none" stroke="#94D8AB" strokeWidth="2" />
                    <path d="M250 155 C180 165 125 180 85 195" fill="none" stroke="#94D8AB" strokeWidth="2" />
                    <path d="M250 165 C205 215 155 245 105 255" fill="none" stroke="#94D8AB" strokeWidth="2" />
                  </svg>

                  <div className="absolute left-1/2 top-1/2 z-10 w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[#BDE8CB] bg-white p-4 shadow-[0_15px_40px_rgba(47,133,90,0.14)] sm:w-[215px]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[8px] font-semibold text-slate-400">BeezNest</p>
                        <p className="text-xs font-black text-[#14532D]">{t("Business dashboard")}</p>
                      </div>
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#DCF3E3] text-[#2F855A]">
                        <LayoutDashboard size={14} />
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-1.5">
                      <div className="rounded-lg bg-[#F0FAF3] p-2">
                        <p className="text-[7px] text-slate-400">{t("Orders")}</p>
                        <p className="mt-1 text-xs font-black text-[#14532D]">342</p>
                      </div>
                      <div className="rounded-lg bg-[#F0FAF3] p-2">
                        <p className="text-[7px] text-slate-400">{t("Leads")}</p>
                        <p className="mt-1 text-xs font-black text-[#14532D]">128</p>
                      </div>
                      <div className="rounded-lg bg-[#F0FAF3] p-2">
                        <p className="text-[7px] text-slate-400">{t("Growth")}</p>
                        <p className="mt-1 text-xs font-black text-[#14532D]">+12%</p>
                      </div>
                    </div>
                    <div className="mt-3 rounded-lg border border-slate-100 p-2.5">
                      <div className="flex items-end gap-1">
                        {[30, 45, 38, 62, 52, 76, 68].map((height, index) => (
                          <div key={index} style={{ height: `${height}px` }} className="flex-1 rounded-t bg-[#94D8AB]" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-4 top-6 z-20 rounded-2xl border border-[#BDE8CB] bg-white p-3 shadow-sm sm:left-7">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#DCF3E3] text-[#2F855A]">
                        <Users size={15} />
                      </div>
                      <div>
                        <p className="text-[8px] font-bold text-slate-400">{t("Connected")}</p>
                        <p className="text-[10px] font-black text-[#14532D]">CRM</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-4 z-20 rounded-2xl border border-[#BDE8CB] bg-white p-3 shadow-sm sm:left-7">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#DCF3E3] text-[#2F855A]">
                        <Globe2 size={15} />
                      </div>
                      <div>
                        <p className="text-[8px] font-bold text-slate-400">{t("Connected")}</p>
                        <p className="text-[10px] font-black text-[#14532D]">{t("Website")}</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-6 right-4 z-20 rounded-2xl border border-[#BDE8CB] bg-white p-3 shadow-sm sm:right-7">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#DCF3E3] text-[#2F855A]">
                        <Bot size={15} />
                      </div>
                      <div>
                        <p className="text-[8px] font-bold text-slate-400">{t("Connected")}</p>
                        <p className="text-[10px] font-black text-[#14532D]">{t("AI Manager")}</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-1/2 top-1/2 z-30 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#2F855A] text-white shadow-lg">
                    <Zap size={15} />
                  </div>
                </div>

                <div className="mt-6 flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DCF3E3] text-[#2F855A]">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <p className="text-sm font-semibold leading-6 text-slate-600">
                    {t("One dashboard. One connected system. One clearer view of your business.")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-2xl text-center">
            <p className="text-lg font-extrabold tracking-tight text-[#14532D] sm:text-xl">
              {t("Less switching.")}{" "}
              <span className="text-[#2F855A]">{t("More doing.")}</span>
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              {t("BeezNest brings the important parts of your business into one place.")}
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}
      <HowItWorks />

      {/* =====================================================
          STEP 6 — FEATURE SHOWCASE
      ===================================================== */}
      <FeatureShowcase
        activeBusiness={activeBusiness}
        setActiveBusiness={setActiveBusiness}
      />

      {/* =====================================================
          STEP 7 — SPECIAL FEATURES
      ===================================================== */}
      <SpecialFeatures />

      {/* =====================================================
          STEP 8 — AI MANAGER SPOTLIGHT
      ===================================================== */}
      <AIManagerSpotlight />

      {/* =====================================================
          WEBSITE BUILDER
      ===================================================== */}
      <WebsiteBuilderShowcase />

      {/* =====================================================
          PRICING PREVIEW
      ===================================================== */}
      <PricingPreview />

      {/* =====================================================
          STEP 9 — TESTIMONIALS
      ===================================================== */}
      <Testimonials />

      {/* =====================================================
          FAQ
      ===================================================== */}
      <FAQ />

      {/* =====================================================
          STEP 10 — FINAL CTA
      ===================================================== */}
      <FinalCTA />

      <Footer />
    </div>
  );
}