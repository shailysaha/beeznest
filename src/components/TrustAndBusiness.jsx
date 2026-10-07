import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  Clock3,
  Globe2,
  LayoutDashboard,
  MoreHorizontal,
  ShoppingBag,
  Sparkles,
  Users,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const BUSINESS_STORAGE_KEY = "biznest_business_type";

function MiniRestaurantDashboard() {
  const { t } = useLanguage();
  return (
    <div className="relative overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-soft">
      {/* browser bar */}
      <div className="flex h-7 items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3">
        <span className="h-2 w-2 rounded-full bg-slate-300" />
        <span className="h-2 w-2 rounded-full bg-slate-300" />
        <span className="h-2 w-2 rounded-full bg-slate-300" />
        <div className="mx-auto h-3.5 w-28 rounded-full bg-white ring-1 ring-slate-100" />
      </div>

      <div className="p-3 sm:p-4">
        {/* heading */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px] font-semibold text-slate-400">BeezNest</p>
            <p className="text-sm font-extrabold text-brand-900">
              {t("Restaurant overview")}
            </p>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-brand-50 px-2 py-1 text-[8px] font-bold text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            {t("Live")}
          </div>
        </div>

        {/* stats */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="rounded-xl bg-brand-50 p-2.5">
            <ShoppingBag size={13} className="text-brand-700" />
            <p className="mt-2 text-[8px] text-slate-400">{t("Orders")}</p>
            <p className="text-sm font-black text-brand-900">342</p>
          </div>
          <div className="rounded-xl bg-brand-50 p-2.5">
            <Users size={13} className="text-brand-700" />
            <p className="mt-2 text-[8px] text-slate-400">{t("Customers")}</p>
            <p className="text-sm font-black text-brand-900">128</p>
          </div>
          <div className="rounded-xl bg-brand-50 p-2.5">
            <BarChart3 size={13} className="text-brand-700" />
            <p className="mt-2 text-[8px] text-slate-400">{t("Revenue")}</p>
            <p className="text-sm font-black text-brand-900">৳84K</p>
          </div>
        </div>

        {/* chart */}
        <div className="mt-3 rounded-xl border border-slate-100 bg-white p-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] font-bold text-brand-900">
                {t("Sales overview")}
              </p>
              <p className="text-[8px] text-slate-400">{t("Last 7 days")}</p>
            </div>
            <span className="text-[9px] font-bold text-brand-700">+12.4%</span>
          </div>
          <div className="mt-3 flex h-16 items-end gap-1.5">
            {[38, 55, 46, 72, 61, 84, 74].map((height, index) => (
              <div
                key={index}
                style={{ height: `${height}%` }}
                className="flex-1 rounded-t-md bg-brand-300"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniAgencyDashboard() {
  const { t } = useLanguage();
  return (
    <div className="relative overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-soft">
      {/* browser bar */}
      <div className="flex h-7 items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3">
        <span className="h-2 w-2 rounded-full bg-slate-300" />
        <span className="h-2 w-2 rounded-full bg-slate-300" />
        <span className="h-2 w-2 rounded-full bg-slate-300" />
        <div className="mx-auto h-3.5 w-28 rounded-full bg-white ring-1 ring-slate-100" />
      </div>

      <div className="p-3 sm:p-4">
        {/* heading */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px] font-semibold text-slate-400">BeezNest</p>
            <p className="text-sm font-extrabold text-brand-900">
              {t("Visa pipeline")}
            </p>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-brand-50 px-2 py-1 text-[8px] font-bold text-brand-700">
            <Globe2 size={10} />
            {t("Agency")}
          </div>
        </div>

        {/* pipeline */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="rounded-xl bg-slate-50 p-2">
            <p className="text-[8px] font-bold text-slate-500">{t("New")}</p>
            <p className="mt-1 text-base font-black text-brand-900">24</p>
          </div>
          <div className="rounded-xl bg-brand-50 p-2">
            <p className="text-[8px] font-bold text-brand-700">
              {t("Processing")}
            </p>
            <p className="mt-1 text-base font-black text-brand-900">18</p>
          </div>
          <div className="rounded-xl bg-brand-100 p-2">
            <p className="text-[8px] font-bold text-brand-700">
              {t("Approved")}
            </p>
            <p className="mt-1 text-base font-black text-brand-900">12</p>
          </div>
        </div>

        {/* applicants */}
        <div className="mt-3 rounded-xl border border-slate-100 bg-white p-3">
          <div className="flex items-center justify-between">
            <p className="text-[9px] font-bold text-brand-900">
              {t("Recent applicants")}
            </p>
            <span className="text-[8px] font-semibold text-brand-700">
              {t("View all")}
            </span>
          </div>

          <div className="mt-3 space-y-2">
            {[
              ["RA", "Rahim Ahmed", t("Student Visa")],
              ["NS", "Nusrat S.", t("UK Application")],
              ["TA", "Tanvir A.", t("Canada Study")],
            ].map(([initials, name, type]) => (
              <div key={name} className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-100 text-[8px] font-black text-brand-700">
                  {initials}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[8px] font-bold text-slate-700">
                    {name}
                  </p>
                  <p className="truncate text-[7px] text-slate-400">{type}</p>
                </div>
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BusinessCard({
  type,
  title,
  description,
  benefits,
  children,
  icon: Icon,
  selected,
  onSelect,
  ctaLabel,
}) {
  return (
    <article
      id={type}
      onClick={onSelect}
      className={`group relative cursor-pointer rounded-[1.75rem] p-[1px] transition-all duration-300 ${
        selected
          ? "bg-gradient-to-br from-brand-300 via-brand-400 to-brand-700 shadow-lift"
          : "bg-gradient-to-br from-brand-100 via-brand-200 to-brand-100 hover:-translate-y-2 hover:from-brand-300 hover:via-brand-400 hover:to-brand-700"
      }`}
    >
      <div className="relative h-full overflow-hidden rounded-[1.7rem] bg-white p-5 sm:p-6 lg:p-7">
        {/* decorative glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-brand-100/70 blur-3xl transition duration-500 group-hover:bg-brand-200" />

        {/* selected check */}
        {selected && (
          <div className="absolute right-5 top-5 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-brand-700 text-white shadow-md">
            <Check size={16} strokeWidth={3} />
          </div>
        )}

        {/* heading */}
        <div className="relative z-10 flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 transition duration-300 group-hover:scale-105 group-hover:bg-brand-200">
            <Icon size={23} />
          </div>
          <div className="pr-8">
            <p className="text-xl font-extrabold tracking-tight text-brand-900">
              {title}
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              {description}
            </p>
          </div>
        </div>

        {/* mini dashboard */}
        <div className="relative z-10 mt-6">{children}</div>

        {/* benefits */}
        <div className="relative z-10 mt-6 space-y-3">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-start gap-2.5">
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                <Check size={11} strokeWidth={3} />
              </div>
              <span className="text-sm font-semibold text-slate-600">
                {benefit}
              </span>
            </div>
          ))}
        </div>

        {/* button */}
        <div className="relative z-10 mt-7">
          <Link
            to="/signup"
            onClick={(event) => {
              event.stopPropagation();
              onSelect();
            }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-900 px-5 py-3 text-sm font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lg"
          >
            {ctaLabel}
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function TrustAndBusiness() {
  const { t } = useLanguage();

  const [selectedBusiness, setSelectedBusiness] = useState(() => {
    return localStorage.getItem(BUSINESS_STORAGE_KEY) || "";
  });

  const chooseBusiness = (type) => {
    setSelectedBusiness(type);
    localStorage.setItem(BUSINESS_STORAGE_KEY, type);
    window.dispatchEvent(
      new CustomEvent("biznest-business-change", { detail: type })
    );
  };

  const scrollToFeatures = () => {
    const featureSection = document.getElementById("feature-showcase");
    if (!featureSection) return;
    const y =
      featureSection.getBoundingClientRect().top + window.pageYOffset - 90;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      {/* =================================================
          3.1 TRUST STRIP
      ================================================= */}
      <section
        aria-label="Payment and Bangladesh trust"
        className="border-y border-brand-100 bg-white"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          {/* message */}
          <div className="flex items-center justify-center gap-2.5 lg:justify-start">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-brand-700">
              <Check size={15} strokeWidth={3} />
            </div>
            <p className="text-sm font-bold text-brand-900">
              {t("Secure payments and made for Bangladesh")}
            </p>
          </div>

          {/* payment marks */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {["bKash", "Nagad", "SSLCommerz"].map((brand) => (
              <span
                key={brand}
                className="rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-xs font-extrabold text-slate-600 transition hover:bg-brand-100 hover:text-brand-900"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          3.2 CHOOSE YOUR BUSINESS
      ================================================= */}
      <section
        id="business-types"
        className="relative overflow-hidden bg-brand-50 py-20 sm:py-24 lg:py-28"
      >
        {/* background glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-200/50 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* heading */}
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3.5 py-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-brand-700 backdrop-blur">
              <Sparkles size={13} />
              {t("Choose your business")}
            </div>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl lg:text-[44px] lg:leading-tight">
              {t("Built around the way")}
              <span className="block bg-gradient-to-r from-brand-700 to-brand-400 bg-clip-text text-transparent">
                {t("your business works.")}
              </span>
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              {t(
                "Start with the tools that fit your business today. Your choice will also be remembered when you create your BeezNest account."
              )}
            </p>
          </div>

          {/* cards */}
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {/* RESTAURANT */}
            <BusinessCard
              type="restaurant"
              title={t("Restaurant")}
              description={t(
                "Orders, customers, sales and your digital menu in one connected system."
              )}
              icon={ShoppingBag}
              selected={selectedBusiness === "restaurant"}
              onSelect={() => chooseBusiness("restaurant")}
              ctaLabel={t("Get started")}
              benefits={[
                t("Track orders and daily sales"),
                t("QR ordering and digital menu"),
                t("AI insights for repeat customers"),
              ]}
            >
              <MiniRestaurantDashboard />
            </BusinessCard>

            {/* VISA AGENCY */}
            <BusinessCard
              type="visa-agency"
              title={t("Student Visa Agency")}
              description={t(
                "Keep applicants, documents, follow-ups and your pipeline organized."
              )}
              icon={BriefcaseBusiness}
              selected={selectedBusiness === "visa-agency"}
              onSelect={() => chooseBusiness("visa-agency")}
              ctaLabel={t("Get started")}
              benefits={[
                t("Manage applicants and pipeline"),
                t("Keep documents and tasks organized"),
                t("Follow up with leads using AI"),
              ]}
            >
              <MiniAgencyDashboard />
            </BusinessCard>

            {/* COMING SOON */}
            <article className="relative flex min-h-full flex-col overflow-hidden rounded-[1.75rem] border border-dashed border-brand-200 bg-white/55 p-6 sm:p-7">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-100/60 blur-3xl" />

              <div className="relative flex h-full flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                  <MoreHorizontal size={24} />
                </div>

                <p className="mt-6 text-xl font-extrabold text-brand-900">
                  {t("More business types coming soon")}
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {t(
                    "We are building more tools for growing businesses across Bangladesh."
                  )}
                </p>

                {/* future preview */}
                <div className="mt-6 flex flex-1 items-center justify-center rounded-2xl border border-brand-100 bg-gradient-to-br from-white to-brand-50">
                  <div className="text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                      <LayoutDashboard size={26} />
                    </div>
                    <p className="mt-3 text-xs font-bold text-slate-400">
                      {t("New business tools")}
                    </p>
                    <div className="mt-3 flex justify-center gap-1.5">
                      <span className="h-1.5 w-8 rounded-full bg-brand-200" />
                      <span className="h-1.5 w-5 rounded-full bg-brand-100" />
                      <span className="h-1.5 w-3 rounded-full bg-brand-100" />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-slate-400">
                  <Clock3 size={14} />
                  {t("More coming soon")}
                </div>
              </div>
            </article>
          </div>

          {/* bottom helper */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
            <p className="text-sm text-slate-500">
              {t("Already know what you need?")}
            </p>
            <button
              type="button"
              onClick={scrollToFeatures}
              className="inline-flex items-center gap-1.5 text-sm font-extrabold text-brand-700 transition hover:text-brand-900"
            >
              {t("Explore the features")}
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}