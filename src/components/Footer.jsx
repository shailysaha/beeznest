import {
  Mail,
  MapPin,
  Phone,
  Globe,
  ArrowUp,
  ExternalLink,
} from "lucide-react";

import logo from "../assets/beeznest-logo.jpeg";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t, language, setLanguage } = useLanguage();

  const productLinks = [
    {
      label: t("Features"),
      href: "#special-features",
    },
    {
      label: t("AI Manager"),
      href: "#ai-manager",
    },
    {
      label: t("Pricing"),
      href: "/pricing",
    },
    {
      label: t("How it works"),
      href: "#how-it-works",
    },
  ];

  const companyLinks = [
    {
      label: t("About us"),
      href: "#",
      disabled: true,
    },
    {
      label: t("Contact"),
      href: "mailto:hello@beeznest.com",
      external: true,
    },
    {
      label: t("FAQ"),
      href: "#faq",
    },
    {
      label: t("Blog"),
      href: "#",
      disabled: true,
    },
  ];

  const legalLinks = [
    {
      label: t("Privacy policy"),
      href: "#",
      disabled: true,
    },
    {
      label: t("Terms of service"),
      href: "#",
      disabled: true,
    },
    {
      label: t("Refund policy"),
      href: "#",
      disabled: true,
    },
  ];

  function FooterLinkColumn({ title, links }) {
    return (
      <div>
        <h3 className="text-xs font-black uppercase tracking-[0.12em] text-white">
          {title}
        </h3>

        <ul className="mt-5 space-y-3">
          {links.map((link) => (
            <li key={link.label}>
              {link.disabled ? (
                <span
                  className="cursor-default text-sm font-medium text-[#DCF3E3]/35"
                  title="Coming soon"
                >
                  {link.label}
                </span>
              ) : (
                <a
                  href={link.href}
                  {...(link.external
                    ? {
                        target: "_blank",
                        rel: "noreferrer",
                      }
                    : {})}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#DCF3E3]/65 transition-colors duration-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#94D8AB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#14532D]"
                >
                  {link.label}
                  {link.external && <ExternalLink size={11} />}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#14532D] text-white">
      {/* Curved top divider */}
      <div className="absolute left-0 right-0 top-0 h-16 -translate-y-1/2">
        <div className="absolute left-[-5%] top-0 h-24 w-[110%] rounded-[50%] bg-white" />
      </div>

      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-[#2F855A] opacity-20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-6 pt-24 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid gap-12 lg:grid-cols-[1.25fr_2fr]">
          {/* Brand + contact */}
          <div className="max-w-sm">
            <a
              href="/"
              aria-label="BeezNest home"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-white/20">
                <img
                  src={logo}
                  alt="BeezNest"
                  className="h-full w-full object-contain"
                />
              </div>

              <span className="text-xl font-black tracking-tight">
                BeezNest
              </span>
            </a>

            <p className="mt-5 text-sm leading-7 text-[#DCF3E3]/70">
              {t(
                "One simple workspace for growing businesses. Manage your operations, understand your numbers and make smarter decisions."
              )}
            </p>

            {/* Contact */}
            <div className="mt-7 space-y-3">
              <a
                href="mailto:hello@beeznest.com"
                className="flex items-center gap-3 text-sm text-[#DCF3E3]/70 transition-colors hover:text-white"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
                  <Mail size={14} />
                </span>

                hello@beeznest.com
              </a>

              {/* Keep phone hidden until a real business number is available */}
              <div className="flex items-center gap-3 text-sm text-[#DCF3E3]/45">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
                  <Phone size={14} />
                </span>

                <span>{t("Phone coming soon")}</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-[#DCF3E3]/70">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
                  <MapPin size={14} />
                </span>

                {t("Bangladesh")}
              </div>
            </div>

            {/* Language switch */}
            <div className="mt-7 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
              <Globe size={14} className="ml-2 text-[#94D8AB]" />

              <button
                type="button"
                onClick={() => setLanguage("en")}
                aria-pressed={language === "en"}
                className={`rounded-full px-3 py-1.5 text-[10px] font-black transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#94D8AB] ${
                  language === "en"
                    ? "bg-white text-[#14532D]"
                    : "text-[#DCF3E3]/60 hover:text-white"
                }`}
              >
                EN
              </button>

              <button
                type="button"
                onClick={() => setLanguage("bn")}
                aria-pressed={language === "bn"}
                className={`rounded-full px-3 py-1.5 text-[10px] font-black transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#94D8AB] ${
                  language === "bn"
                    ? "bg-white text-[#14532D]"
                    : "text-[#DCF3E3]/60 hover:text-white"
                }`}
              >
                BN
              </button>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <FooterLinkColumn
              title={t("Product")}
              links={productLinks}
            />

            <FooterLinkColumn
              title={t("Company")}
              links={companyLinks}
            />

            <FooterLinkColumn
              title={t("Legal")}
              links={legalLinks}
            />
          </div>
        </div>

        {/* Payments + social */}
        <div className="mt-14 border-t border-white/10 pt-7">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Payment section */}
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.14em] text-[#DCF3E3]/45">
                {t("Payments")}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-black text-white/70">
                  bKash
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-black text-white/70">
                  Nagad
                </span>

                <span className="text-[10px] font-medium text-[#DCF3E3]/40">
                  {t("Payment methods may vary by plan.")}
                </span>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.14em] text-[#DCF3E3]/45 lg:text-right">
                {t("Follow us")}
              </p>

              <div className="mt-3 flex gap-2 lg:justify-end">
                {/* These are intentionally disabled until real social URLs exist */}
                {["FB", "IG", "LI", "X"].map((social) => (
                  <span
                    key={social}
                    title="Social link coming soon"
                    className="flex h-9 w-9 cursor-default items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[10px] font-black text-[#DCF3E3]/35"
                  >
                    {social}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="relative mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[10px] font-medium text-[#DCF3E3]/45">
              © {new Date().getFullYear()} BeezNest.{" "}
              {t("All rights reserved.")}
            </p>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#94D8AB] transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#94D8AB]"
            >
              <ArrowUp size={12} />
              {t("Back to top")}
            </button>
          </div>

          {/* Large faded wordmark */}
          <div className="pointer-events-none mt-8 overflow-hidden">
            <p className="whitespace-nowrap text-center text-[18vw] font-black leading-[0.7] tracking-[-0.08em] text-white/[0.05]">
              BeezNest
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}