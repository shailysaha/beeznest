import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
// FIXED PATH HERE: Added "/context/"
import { useLanguage } from "../context/LanguageContext"; 

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  
  // Get the language state and setter from context
  const { language, setLanguage, t } = useLanguage();

  const closeMenu = () => {
    setMobileOpen(false);
    setSolutionsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-green-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#94D8AB] font-bold text-[#14532D]">
            B
          </div>

          <span className="text-2xl font-extrabold tracking-tight text-[#14532D]">
            BeezNest
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">

          <a
            href="/#features"
            className="text-sm font-medium text-slate-600 transition hover:text-[#2F855A]"
          >
            {t("Features")}
          </a>

          <div className="relative">
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-[#2F855A]"
            >
              {t("Solutions")}
              <ChevronDown size={16} />
            </button>

            {solutionsOpen && (
              <div className="absolute left-0 top-8 w-52 rounded-2xl border border-green-100 bg-white p-2 shadow-xl">

                <a
                  href="/#restaurant"
                  className="block rounded-xl px-4 py-3 text-sm text-slate-700 hover:bg-[#F0FAF3]"
                  onClick={() => setSolutionsOpen(false)}
                >
                  {t("Restaurant")}
                </a>

                <a
                  href="/#visa-agency"
                  className="block rounded-xl px-4 py-3 text-sm text-slate-700 hover:bg-[#F0FAF3]"
                  onClick={() => setSolutionsOpen(false)}
                >
                  {t("Student Visa Agency")}
                </a>

              </div>
            )}
          </div>

          <NavLink
            to="/pricing"
            className="text-sm font-medium text-slate-600 hover:text-[#2F855A]"
          >
            {t("Pricing")}
          </NavLink>

          <a
            href="/#faq"
            className="text-sm font-medium text-slate-600 hover:text-[#2F855A]"
          >
            {t("Resources")}
          </a>
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">

          {/* Language Toggle */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setLanguage("en")}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                language === "en" 
                  ? "bg-[#F0FAF3] text-[#14532D] font-bold" 
                  : "text-slate-600 hover:text-[#2F855A]"
              }`}
            >
              EN
            </button>

            <span className="text-slate-300">|</span>

            <button
              onClick={() => setLanguage("bn")}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                language === "bn" 
                  ? "bg-[#F0FAF3] text-[#14532D] font-bold" 
                  : "text-slate-600 hover:text-[#2F855A]"
              }`}
            >
              BN
            </button>
          </div>

          <Link
            to="/login"
            className="rounded-xl px-4 py-2.5 text-sm font-semibold text-[#14532D] hover:bg-[#F0FAF3]"
          >
            {t("Log in")}
          </Link>

          <Link
            to="/signup"
            className="rounded-xl bg-[#94D8AB] px-5 py-2.5 text-sm font-bold text-[#14532D] transition hover:bg-[#6BC48C]"
          >
            {t("Start free trial")}
          </Link>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-xl p-2 text-[#14532D] lg:hidden"
          aria-label={t("Toggle navigation")}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-green-100 bg-white px-5 py-5 lg:hidden">

          <div className="flex flex-col gap-2">

            <a
              href="/#features"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-slate-700 hover:bg-[#F0FAF3]"
            >
              {t("Features")}
            </a>

            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className="flex items-center justify-between rounded-xl px-4 py-3 text-left text-slate-700 hover:bg-[#F0FAF3]"
            >
              {t("Solutions")}
              <ChevronDown size={18} />
            </button>

            {solutionsOpen && (
              <div className="ml-4 space-y-1">

                <a
                  href="/#restaurant"
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-[#F0FAF3]"
                >
                  {t("Restaurant")}
                </a>

                <a
                  href="/#visa-agency"
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-[#F0FAF3]"
                >
                  {t("Student Visa Agency")}
                </a>

              </div>
            )}

            <Link
              to="/pricing"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-slate-700 hover:bg-[#F0FAF3]"
            >
              {t("Pricing")}
            </Link>

            <a
              href="/#faq"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-slate-700 hover:bg-[#F0FAF3]"
            >
              {t("Resources")}
            </a>

            {/* Mobile Language Toggle */}
            <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#F0FAF3] p-1">
              <button
                onClick={() => setLanguage("en")}
                className={`flex-1 rounded-lg py-2 text-sm font-medium transition ${
                  language === "en" 
                    ? "bg-white text-[#14532D] shadow-sm font-bold" 
                    : "text-slate-600"
                }`}
              >
                English (EN)
              </button>
              <button
                onClick={() => setLanguage("bn")}
                className={`flex-1 rounded-lg py-2 text-sm font-medium transition ${
                  language === "bn" 
                    ? "bg-white text-[#14532D] shadow-sm font-bold" 
                    : "text-slate-600"
                }`}
              >
                বাংলা (BN)
              </button>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3">
              <Link
                to="/login"
                onClick={closeMenu}
                className="rounded-xl border border-green-200 px-4 py-3 text-center font-semibold text-[#14532D]"
              >
                {t("Log in")}
              </Link>

              <Link
                to="/signup"
                onClick={closeMenu}
                className="rounded-xl bg-[#94D8AB] px-4 py-3 text-center font-bold text-[#14532D]"
              >
                {t("Start free")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}