import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";
import logo from "../assets/beeznest-logo.jpeg";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const { language, setLanguage, t } = useLanguage();

  /* =========================================
     SCROLL EFFECT
  ========================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================
     CLOSE MOBILE MENU
  ========================================= */

  useEffect(() => {
    setMobileOpen(false);
    setSolutionsOpen(false);
  }, [location.pathname]);

  /* =========================================
     CLOSE MENU
  ========================================= */

  const closeMenu = () => {
    setMobileOpen(false);
    setSolutionsOpen(false);
  };

  /* =========================================
     SCROLL TO SECTION
  ========================================= */

  const goToSection = (id) => {
    closeMenu();

    const scrollToElement = () => {
      const element = document.getElementById(id);

      if (!element) return;

      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        100;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    };

    if (location.pathname === "/") {
      scrollToElement();
      return;
    }

    navigate("/");

    setTimeout(scrollToElement, 200);
  };

  return (
    <>
      {/* =================================================
          FLOATING NAVBAR
      ================================================= */}

      <header
        className={`
          fixed
          left-0
          right-0
          top-0
          z-50
          flex
          justify-center
          px-3
          transition-all
          duration-300
          sm:px-4
          ${
            scrolled
              ? "pt-2 sm:pt-3"
              : "pt-3 sm:pt-4"
          }
        `}
      >
        <nav
          className={`
            relative
            flex
            w-full
            max-w-[1120px]
            items-center
            justify-between
            border
            border-white/70
            bg-white/80
            backdrop-blur-xl
            transition-all
            duration-300
            ${
              scrolled
                ? "rounded-2xl px-3 py-2 shadow-lift sm:px-4"
                : "rounded-[1.4rem] px-3 py-2.5 shadow-soft sm:rounded-full sm:px-5 sm:py-3"
            }
          `}
        >
          {/* =========================================
              LOGO
          ========================================= */}

          <Link
            to="/"
            onClick={closeMenu}
            className="group flex shrink-0 items-center gap-2.5"
          >
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                overflow-hidden
                rounded-xl
                bg-white
                ring-1
                ring-brand-100
                shadow-sm
                transition
                duration-300
                group-hover:scale-105
                group-hover:shadow-soft
              "
            >
              <img
                src={logo}
                alt="BeezNest"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="hidden sm:block">
              <div className="text-base font-extrabold tracking-tight text-brand-900">
                BeezNest
              </div>

              <div className="text-[9px] font-bold tracking-[0.16em] text-slate-400">
                BUSINESS MANAGER
              </div>
            </div>
          </Link>

          {/* =========================================
              DESKTOP NAVIGATION
          ========================================= */}

          <div className="hidden items-center gap-0.5 lg:flex">

            {/* FEATURES */}
            <button
              type="button"
              onClick={() =>
                goToSection("feature-showcase")
              }
              className="
                nav-link
                group
                relative
                rounded-full
                px-3.5
                py-2
                text-sm
                font-semibold
                text-slate-600
                transition
                hover:text-brand-700
              "
            >
              {t("Features")}

              <span
                className="
                  absolute
                  bottom-1
                  left-1/2
                  h-0.5
                  w-0
                  -translate-x-1/2
                  rounded-full
                  bg-brand-400
                  transition-all
                  duration-300
                  group-hover:w-6
                "
              />
            </button>

            {/* HOW IT WORKS */}
            <button
              type="button"
              onClick={() =>
                goToSection("how-it-works")
              }
              className="
                group
                relative
                rounded-full
                px-3.5
                py-2
                text-sm
                font-semibold
                text-slate-600
                transition
                hover:text-brand-700
              "
            >
              {t("How it works")}

              <span
                className="
                  absolute
                  bottom-1
                  left-1/2
                  h-0.5
                  w-0
                  -translate-x-1/2
                  rounded-full
                  bg-brand-400
                  transition-all
                  duration-300
                  group-hover:w-6
                "
              />
            </button>

            {/* SOLUTIONS */}
            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setSolutionsOpen((value) => !value)
                }
                className="
                  group
                  flex
                  items-center
                  gap-1
                  rounded-full
                  px-3.5
                  py-2
                  text-sm
                  font-semibold
                  text-slate-600
                  transition
                  hover:bg-brand-50
                  hover:text-brand-700
                "
              >
                {t("Solutions")}

                <ChevronDown
                  size={15}
                  className={`
                    transition-transform
                    duration-200
                    ${
                      solutionsOpen
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />
              </button>

              {/* DROPDOWN */}
              {solutionsOpen && (
                <div
                  className="
                    absolute
                    left-0
                    top-[calc(100%+10px)]
                    w-60
                    overflow-hidden
                    rounded-2xl
                    border
                    border-brand-100
                    bg-white/95
                    p-2
                    shadow-lift
                    backdrop-blur-xl
                  "
                >
                  <button
                    type="button"
                    onClick={() =>
                      goToSection("restaurant")
                    }
                    className="
                      flex
                      w-full
                      items-center
                      rounded-xl
                      px-4
                      py-3
                      text-left
                      text-sm
                      font-semibold
                      text-slate-700
                      transition
                      hover:bg-brand-50
                      hover:text-brand-700
                    "
                  >
                    Restaurant
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      goToSection("visa-agency")
                    }
                    className="
                      flex
                      w-full
                      items-center
                      rounded-xl
                      px-4
                      py-3
                      text-left
                      text-sm
                      font-semibold
                      text-slate-700
                      transition
                      hover:bg-brand-50
                      hover:text-brand-700
                    "
                  >
                    Student Visa Agency
                  </button>
                </div>
              )}
            </div>

            {/* PRICING */}
            <NavLink
              to="/pricing"
              className="
                group
                relative
                rounded-full
                px-3.5
                py-2
                text-sm
                font-semibold
                text-slate-600
                transition
                hover:text-brand-700
              "
            >
              {t("Pricing")}

              <span
                className="
                  absolute
                  bottom-1
                  left-1/2
                  h-0.5
                  w-0
                  -translate-x-1/2
                  rounded-full
                  bg-brand-400
                  transition-all
                  duration-300
                  group-hover:w-6
                "
              />
            </NavLink>

            {/* FAQ */}
            <button
              type="button"
              onClick={() => goToSection("faq")}
              className="
                group
                relative
                rounded-full
                px-3.5
                py-2
                text-sm
                font-semibold
                text-slate-600
                transition
                hover:text-brand-700
              "
            >
              {t("FAQ")}

              <span
                className="
                  absolute
                  bottom-1
                  left-1/2
                  h-0.5
                  w-0
                  -translate-x-1/2
                  rounded-full
                  bg-brand-400
                  transition-all
                  duration-300
                  group-hover:w-6
                "
              />
            </button>
          </div>

          {/* =========================================
              RIGHT SIDE
          ========================================= */}

          <div className="hidden items-center gap-2 md:flex">

            {/* LANGUAGE */}
            <div
              className="
                flex
                items-center
                gap-1
                rounded-full
                border
                border-brand-100
                bg-brand-50
                p-1
              "
            >
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`
                  rounded-full
                  px-2.5
                  py-1.5
                  text-xs
                  font-bold
                  transition
                  ${
                    language === "en"
                      ? "bg-white text-brand-900 shadow-sm"
                      : "text-slate-500 hover:text-brand-700"
                  }
                `}
              >
                EN
              </button>

              <button
                type="button"
                onClick={() => setLanguage("bn")}
                className={`
                  rounded-full
                  px-2.5
                  py-1.5
                  text-xs
                  font-bold
                  transition
                  ${
                    language === "bn"
                      ? "bg-white text-brand-900 shadow-sm"
                      : "text-slate-500 hover:text-brand-700"
                  }
                `}
              >
                BN
              </button>
            </div>

            {/* LOGIN */}
            <Link
              to="/login"
              className="
                rounded-full
                px-3.5
                py-2.5
                text-sm
                font-bold
                text-brand-900
                transition
                hover:bg-brand-50
              "
            >
              {t("Log in")}
            </Link>

            {/* CTA */}
            <Link
              to="/signup"
              className="
                bn-gradient-button
                group
                flex
                items-center
                gap-2
                rounded-full
                px-5
                py-2.5
                text-sm
                font-bold
              "
            >
              <span>{t("Start free trial")}</span>

              <ArrowRight
                size={15}
                className="
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>

          {/* =========================================
              MOBILE MENU BUTTON
          ========================================= */}

          <button
            type="button"
            onClick={() =>
              setMobileOpen((value) => !value)
            }
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-brand-50
              text-brand-900
              transition
              hover:bg-brand-100
              md:flex
              lg:hidden
            "
            aria-label="Toggle navigation"
          >
            {mobileOpen ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>
        </nav>

        {/* =========================================
            MOBILE MENU
        ========================================= */}

        {mobileOpen && (
          <div
            className="
              absolute
              left-3
              right-3
              top-[calc(100%+8px)]
              overflow-hidden
              rounded-3xl
              border
              border-brand-100
              bg-white/95
              p-3
              shadow-lift
              backdrop-blur-xl
              md:left-4
              md:right-4
            "
          >
            <div className="space-y-1">

              <button
                type="button"
                onClick={() =>
                  goToSection("feature-showcase")
                }
                className="
                  w-full
                  rounded-2xl
                  px-4
                  py-3.5
                  text-left
                  text-base
                  font-bold
                  text-slate-700
                  transition
                  hover:bg-brand-50
                "
              >
                {t("Features")}
              </button>

              <button
                type="button"
                onClick={() =>
                  goToSection("how-it-works")
                }
                className="
                  w-full
                  rounded-2xl
                  px-4
                  py-3.5
                  text-left
                  text-base
                  font-bold
                  text-slate-700
                  transition
                  hover:bg-brand-50
                "
              >
                {t("How it works")}
              </button>

              <button
                type="button"
                onClick={() =>
                  goToSection("restaurant")
                }
                className="
                  w-full
                  rounded-2xl
                  px-4
                  py-3.5
                  text-left
                  text-base
                  font-bold
                  text-slate-700
                  transition
                  hover:bg-brand-50
                "
              >
                Restaurant
              </button>

              <button
                type="button"
                onClick={() =>
                  goToSection("visa-agency")
                }
                className="
                  w-full
                  rounded-2xl
                  px-4
                  py-3.5
                  text-left
                  text-base
                  font-bold
                  text-slate-700
                  transition
                  hover:bg-brand-50
                "
              >
                Student Visa Agency
              </button>

              <NavLink
                to="/pricing"
                className="
                  block
                  rounded-2xl
                  px-4
                  py-3.5
                  text-base
                  font-bold
                  text-slate-700
                  transition
                  hover:bg-brand-50
                "
              >
                {t("Pricing")}
              </NavLink>

              <button
                type="button"
                onClick={() => goToSection("faq")}
                className="
                  w-full
                  rounded-2xl
                  px-4
                  py-3.5
                  text-left
                  text-base
                  font-bold
                  text-slate-700
                  transition
                  hover:bg-brand-50
                "
              >
                {t("FAQ")}
              </button>
            </div>

            {/* MOBILE LANGUAGE */}
            <div
              className="
                mt-3
                flex
                items-center
                justify-between
                rounded-2xl
                bg-brand-50
                p-2
              "
            >
              <span className="pl-2 text-sm font-bold text-slate-500">
                Language
              </span>

              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`
                    rounded-full
                    px-4
                    py-2
                    text-xs
                    font-bold
                    ${
                      language === "en"
                        ? "bg-white text-brand-900 shadow-sm"
                        : "text-slate-500"
                    }
                  `}
                >
                  EN
                </button>

                <button
                  type="button"
                  onClick={() => setLanguage("bn")}
                  className={`
                    rounded-full
                    px-4
                    py-2
                    text-xs
                    font-bold
                    ${
                      language === "bn"
                        ? "bg-white text-brand-900 shadow-sm"
                        : "text-slate-500"
                    }
                  `}
                >
                  BN
                </button>
              </div>
            </div>

            {/* MOBILE ACTIONS */}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <Link
                to="/login"
                className="
                  flex
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-brand-200
                  px-4
                  py-3.5
                  text-sm
                  font-bold
                  text-brand-900
                "
              >
                {t("Log in")}
              </Link>

              <Link
                to="/signup"
                className="
                  bn-gradient-button
                  flex
                  items-center
                  justify-center
                  rounded-2xl
                  px-4
                  py-3.5
                  text-sm
                  font-bold
                "
              >
                {t("Start free trial")}
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}