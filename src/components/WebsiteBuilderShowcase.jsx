import { useState } from "react";
import {
  Check,
  ExternalLink,
  Palette,
  Smartphone,
  Monitor,
  Sparkles,
  Utensils,
  GraduationCap,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const themes = [
  {
    name: "Fresh Green",
    color: "#2F855A",
    light: "#F0FAF3",
    accent: "#DCF3E3",
  },
  {
    name: "Forest",
    color: "#14532D",
    light: "#F0FDF4",
    accent: "#BBF7D0",
  },
  {
    name: "Mint",
    color: "#168B6A",
    light: "#ECFDF5",
    accent: "#A7F3D0",
  },
  {
    name: "Ocean",
    color: "#2563EB",
    light: "#EFF6FF",
    accent: "#BFDBFE",
  },
];

const menuItems = [
  {
    name: "Signature Burger",
    description: "Smoked beef, fresh greens & house sauce",
    price: "৳420",
  },
  {
    name: "Chicken Rice Bowl",
    description: "Grilled chicken, vegetables & special dressing",
    price: "৳360",
  },
  {
    name: "Fresh Lemonade",
    description: "Fresh lemon, mint & a little sweetness",
    price: "৳140",
  },
];

const agencyItems = [
  {
    name: "Student Application",
    description: "University application and document tracking",
    status: "In progress",
  },
  {
    name: "Visa Documentation",
    description: "Documents and application checklist",
    status: "Ready",
  },
  {
    name: "New Student Lead",
    description: "Follow-up and consultation required",
    status: "New",
  },
];

function RestaurantWebsite({ theme, t }) {
  return (
    <div
      className="h-full overflow-hidden rounded-[1.4rem] bg-white"
      style={{ color: theme.color }}
    >
      <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2.5 sm:px-5 sm:py-3">
        <div className="flex items-center gap-2">
          <div
            className="flex h-6 w-6 items-center justify-center rounded-lg text-[10px] font-black text-white sm:h-7 sm:w-7 sm:text-xs"
            style={{ backgroundColor: theme.color }}
          >
            B
          </div>

          <span className="text-xs font-extrabold text-slate-800 sm:text-sm">
            Bistro 24
          </span>
        </div>

        <div className="hidden items-center gap-4 text-[10px] font-semibold text-slate-500 sm:flex">
          <span>{t("Menu")}</span>
          <span>{t("About")}</span>
          <span>{t("Contact")}</span>
        </div>

        <button
          type="button"
          className="rounded-full px-2.5 py-1 text-[9px] font-bold text-white sm:px-3 sm:py-1.5 sm:text-[10px]"
          style={{ backgroundColor: theme.color }}
        >
          {t("Order now")}
        </button>
      </div>

      <div
        className="relative px-3 py-5 sm:px-6 sm:py-8"
        style={{ backgroundColor: theme.light }}
      >
        <div
          className="absolute right-5 top-4 h-12 w-12 rounded-full opacity-40 blur-2xl sm:h-16 sm:w-16"
          style={{ backgroundColor: theme.accent }}
        />

        <div className="relative max-w-[75%]">
          <div className="mb-1.5 flex items-center gap-1 text-[8px] font-bold uppercase tracking-[0.12em] sm:mb-2 sm:text-[9px]">
            <Sparkles size={9} />
            {t("Fresh every day")}
          </div>

          <h3 className="text-lg font-black leading-tight text-slate-900 sm:text-2xl">
            {t("Good food.")}
            <br />
            {t("Good mood.")}
          </h3>

          <p className="mt-1.5 text-[9px] leading-relaxed text-slate-500 sm:mt-2 sm:text-[10px]">
            {t(
              "Delicious meals made with fresh ingredients and served with care."
            )}
          </p>

          <button
            type="button"
            className="mt-3 rounded-full px-3 py-1.5 text-[9px] font-bold text-white shadow-md sm:mt-4 sm:px-4 sm:py-2 sm:text-[10px]"
            style={{ backgroundColor: theme.color }}
          >
            {t("Explore menu")}
          </button>
        </div>
      </div>

      <div className="px-3 py-3 sm:px-5 sm:py-4">
        <div className="mb-2.5 flex items-center justify-between sm:mb-3">
          <h4 className="text-[11px] font-extrabold text-slate-900 sm:text-xs">
            {t("Popular today")}
          </h4>

          <span
            className="text-[8px] font-bold sm:text-[9px]"
            style={{ color: theme.color }}
          >
            {t("View all")}
          </span>
        </div>

        <div className="space-y-1.5 sm:space-y-2">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-2 rounded-xl border border-slate-100 bg-white p-2 shadow-sm sm:gap-3 sm:p-2.5"
            >
              <div
                className="h-8 w-8 shrink-0 rounded-lg sm:h-10 sm:w-10"
                style={{ backgroundColor: theme.accent }}
              />

              <div className="min-w-0 flex-1">
                <p className="truncate text-[9px] font-bold text-slate-800 sm:text-[10px]">
                  {t(item.name)}
                </p>

                <p className="mt-0.5 truncate text-[7px] text-slate-400 sm:text-[8px]">
                  {t(item.description)}
                </p>
              </div>

              <span
                className="text-[9px] font-extrabold sm:text-[10px]"
                style={{ color: theme.color }}
              >
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AgencyWebsite({ theme, t }) {
  return (
    <div className="h-full overflow-hidden rounded-[1.4rem] bg-white">
      <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2.5 sm:px-5 sm:py-3">
        <div className="flex items-center gap-2">
          <div
            className="flex h-6 w-6 items-center justify-center rounded-lg text-white sm:h-7 sm:w-7"
            style={{ backgroundColor: theme.color }}
          >
            <GraduationCap size={13} />
          </div>

          <span className="text-xs font-extrabold text-slate-800 sm:text-sm">
            StudyPath
          </span>
        </div>

        <button
          type="button"
          className="rounded-full px-2.5 py-1 text-[9px] font-bold text-white sm:px-3 sm:py-1.5 sm:text-[10px]"
          style={{ backgroundColor: theme.color }}
        >
          {t("Book consultation")}
        </button>
      </div>

      <div
        className="relative px-3 py-5 sm:px-6 sm:py-8"
        style={{ backgroundColor: theme.light }}
      >
        <p
          className="text-[8px] font-bold uppercase tracking-[0.12em] sm:text-[9px]"
          style={{ color: theme.color }}
        >
          {t("Study abroad")}
        </p>

        <h3 className="mt-1 text-lg font-black leading-tight text-slate-900 sm:text-2xl">
          {t("Your future starts here.")}
        </h3>

        <p className="mt-2 max-w-[80%] text-[9px] leading-relaxed text-slate-500 sm:text-[10px]">
          {t(
            "Manage students, documents and applications from one place."
          )}
        </p>

        <button
          type="button"
          className="mt-3 rounded-full px-3 py-1.5 text-[9px] font-bold text-white shadow-md sm:mt-4 sm:px-4 sm:py-2 sm:text-[10px]"
          style={{ backgroundColor: theme.color }}
        >
          {t("Explore services")}
        </button>
      </div>

      <div className="px-3 py-3 sm:px-5 sm:py-4">
        <div className="mb-2.5 flex items-center justify-between sm:mb-3">
          <h4 className="text-[11px] font-extrabold text-slate-900 sm:text-xs">
            {t("Application overview")}
          </h4>

          <span
            className="text-[8px] font-bold sm:text-[9px]"
            style={{ color: theme.color }}
          >
            {t("View pipeline")}
          </span>
        </div>

        <div className="space-y-1.5 sm:space-y-2">
          {agencyItems.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-2 rounded-xl border border-slate-100 bg-white p-2 shadow-sm sm:gap-3 sm:p-2.5"
            >
              <div
                className="h-8 w-8 shrink-0 rounded-lg sm:h-10 sm:w-10"
                style={{ backgroundColor: theme.accent }}
              />

              <div className="min-w-0 flex-1">
                <p className="truncate text-[9px] font-bold text-slate-800 sm:text-[10px]">
                  {t(item.name)}
                </p>

                <p className="mt-0.5 truncate text-[7px] text-slate-400 sm:text-[8px]">
                  {t(item.description)}
                </p>
              </div>

              <span
                className="rounded-full px-2 py-1 text-[7px] font-bold sm:text-[8px]"
                style={{
                  backgroundColor: theme.light,
                  color: theme.color,
                }}
              >
                {t(item.status)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PhoneWebsite({ theme, businessType, t }) {
  const isRestaurant = businessType === "restaurant";

  return (
    <div className="h-full overflow-hidden rounded-[1.5rem] border-[5px] border-slate-800 bg-white shadow-2xl">
      <div className="mx-auto mt-1 h-1 w-8 rounded-full bg-slate-700 sm:w-10" />

      <div
        className="mt-2 px-2.5 py-4 sm:px-3 sm:py-5"
        style={{ backgroundColor: theme.light }}
      >
        <div className="flex items-center justify-between">
          <span className="text-[8px] font-black text-slate-800 sm:text-[9px]">
            {isRestaurant ? "Bistro 24" : "StudyPath"}
          </span>

          <div
            className="rounded-full px-1.5 py-0.5 text-[6px] font-bold text-white sm:px-2 sm:py-1 sm:text-[7px]"
            style={{ backgroundColor: theme.color }}
          >
            {isRestaurant ? t("Order") : t("Contact")}
          </div>
        </div>

        <div className="mt-6 sm:mt-8">
          <p
            className="text-[6px] font-bold uppercase tracking-widest sm:text-[7px]"
            style={{ color: theme.color }}
          >
            {isRestaurant ? t("Welcome") : t("Study abroad")}
          </p>

          <h4 className="mt-1 text-sm font-black leading-tight text-slate-900 sm:text-lg">
            {isRestaurant ? (
              <>
                {t("Taste the")}
                <br />
                {t("difference.")}
              </>
            ) : (
              <>
                {t("Plan your")}
                <br />
                {t("next step.")}
              </>
            )}
          </h4>

          <div
            className="mt-2 h-5 w-14 rounded-full sm:mt-3 sm:h-7 sm:w-20"
            style={{ backgroundColor: theme.color }}
          />
        </div>
      </div>

      <div className="space-y-1.5 p-2 sm:space-y-2 sm:p-3">
        <p className="text-[7px] font-extrabold text-slate-800 sm:text-[9px]">
          {isRestaurant ? t("Today's favourites") : t("Quick links")}
        </p>

        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="flex items-center gap-1.5 rounded-lg border border-slate-100 p-1.5 sm:gap-2 sm:p-2"
          >
            <div
              className="h-5 w-5 rounded-md sm:h-7 sm:w-7"
              style={{ backgroundColor: theme.accent }}
            />

            <div className="flex-1">
              <div className="h-1 w-10 rounded-full bg-slate-200 sm:h-1.5 sm:w-14" />
              <div className="mt-1 h-1 w-6 rounded-full bg-slate-100 sm:w-10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WebsiteBuilder() {
  const { t } = useLanguage();

  const [activeTheme, setActiveTheme] = useState(themes[0]);
  const [businessType, setBusinessType] = useState("restaurant");

  const isRestaurant = businessType === "restaurant";

  return (
    <section
      id="website-builder"
      className="relative overflow-hidden bg-[#F8FCF9] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="pointer-events-none absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-white/60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-[-100px] h-80 w-80 rounded-full bg-brand-100/40 blur-3xl" />

      {/* Honeycomb background pattern */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[60%] opacity-[0.08] lg:block">
        <svg
          className="h-full w-full"
          viewBox="0 0 700 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="builderHoneycomb"
              width="76"
              height="132"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M38 2L72 21V59L38 78L4 59V21L38 2Z"
                stroke="#2F855A"
                strokeWidth="1.5"
              />
              <path
                d="M38 76L72 95V133L38 152L4 133V95L38 76Z"
                stroke="#2F855A"
                strokeWidth="1.5"
              />
            </pattern>
          </defs>
          <rect
            width="700"
            height="700"
            fill="url(#builderHoneycomb)"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-700 shadow-sm">
            <Palette size={14} />
            {t("Website builder")}
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl lg:text-5xl">
            {t("Your website.")}
            <span className="bg-gradient-to-r from-brand-700 to-brand-400 bg-clip-text text-transparent">
              {" "}
              {t("Your brand.")}
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            {t(
              "Pick your colours and logo. We build the website for you — and when you update your menu in BeezNest, your website stays in sync."
            )}
          </p>
        </div>

        {/* Business toggle */}
        <div className="mx-auto mt-8 flex w-fit rounded-full border border-brand-200 bg-white p-1 shadow-sm">
          <button
            type="button"
            onClick={() => setBusinessType("restaurant")}
            className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition ${
              isRestaurant
                ? "bg-brand-50 text-brand-700 shadow-sm"
                : "text-slate-500 hover:text-brand-700"
            }`}
          >
            <Utensils size={16} />
            {t("Restaurant")}
          </button>

          <button
            type="button"
            onClick={() => setBusinessType("agency")}
            className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition ${
              !isRestaurant
                ? "bg-brand-50 text-brand-700 shadow-sm"
                : "text-slate-500 hover:text-brand-700"
            }`}
          >
            <GraduationCap size={16} />
            {t("Visa agency")}
          </button>
        </div>

        {/* Main builder */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Left */}
          <div>
            <div className="rounded-3xl border border-brand-100 bg-white p-6 shadow-[0_10px_30px_rgba(20,83,45,0.08)] sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 shadow-sm">
                {isRestaurant ? (
                  <Palette size={22} />
                ) : (
                  <GraduationCap size={22} />
                )}
              </div>

              <h3 className="mt-5 text-2xl font-extrabold text-brand-900">
                {isRestaurant
                  ? t("Make it look like your restaurant.")
                  : t("Make it look like your agency.")}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {isRestaurant
                  ? t(
                      "No complicated website editor. Choose a style, add your logo, and let BeezNest handle the rest."
                    )
                  : t(
                      "Present your services, student journey and agency brand with a simple professional website."
                    )}
              </p>

              <div className="mt-6 space-y-3">
                {(isRestaurant
                  ? [
                      "Choose your brand colours",
                      "Add your logo and business details",
                      "Keep your menu synced automatically",
                    ]
                  : [
                      "Choose your brand colours",
                      "Add your logo and agency details",
                      "Keep student and service information organized",
                    ]
                ).map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                      <Check size={12} strokeWidth={3} />
                    </div>

                    <span className="text-sm font-medium text-slate-700">
                      {t(item)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Colour picker */}
              <div className="mt-8 border-t border-slate-100 pt-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-brand-900">
                    {t("Choose your colour")}
                  </p>

                  <span className="text-xs text-slate-500">
                    {t(activeTheme.name)}
                  </span>
                </div>

                <div className="mt-4 flex gap-3">
                  {themes.map((theme) => (
                    <button
                      key={theme.name}
                      type="button"
                      onClick={() => setActiveTheme(theme)}
                      aria-label={`${t("Use")} ${t(theme.name)} ${t("theme")}`}
                      className={`relative h-10 w-10 rounded-full border-4 border-white shadow-md transition duration-300 hover:-translate-y-1 ${
                        activeTheme.name === theme.name
                          ? "ring-2 ring-brand-700 ring-offset-2"
                          : ""
                      }`}
                      style={{ backgroundColor: theme.color }}
                    >
                      {activeTheme.name === theme.name && (
                        <Check
                          size={15}
                          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
                          strokeWidth={3}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs text-brand-700">
                <Sparkles size={14} />
                <span className="font-semibold">
                  {t("Click a colour to preview it live")}
                </span>
              </div>
            </div>
          </div>

          {/* Preview - Added pb-16 for mobile spacing */}
          <div className="relative min-h-[400px] pb-16 sm:min-h-[500px] sm:pb-0">
            <div
              className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl transition-colors duration-500 sm:h-72 sm:w-72"
              style={{ backgroundColor: activeTheme.accent }}
            />

            {/* Laptop */}
            <div className="relative mx-auto w-full max-w-2xl">
              <div className="relative rounded-[1.5rem] border-[8px] border-slate-800 bg-slate-800 p-1 shadow-[0_25px_60px_rgba(20,83,45,0.18)]">
                <div className="overflow-hidden rounded-xl bg-white">
                  <div className="flex h-6 items-center gap-1 border-b border-slate-200 bg-slate-50 px-3 sm:h-7">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300 sm:h-2 sm:w-2" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300 sm:h-2 sm:w-2" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300 sm:h-2 sm:w-2" />

                    <div className="mx-auto hidden h-3 w-40 rounded-full bg-white sm:block" />
                  </div>

                  <div className="h-[280px] p-2 sm:h-[370px] sm:p-3">
                    {isRestaurant ? (
                      <RestaurantWebsite
                        theme={activeTheme}
                        t={t}
                      />
                    ) : (
                      <AgencyWebsite
                        theme={activeTheme}
                        t={t}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="mx-auto h-3 w-[88%] rounded-b-2xl bg-gradient-to-b from-slate-500 to-slate-700 shadow-lg" />

              <div className="mx-auto h-1 w-[25%] rounded-b-full bg-slate-400" />
            </div>

            {/* Phone - Updated for better mobile responsiveness */}
            <div className="absolute bottom-0 right-[-15px] w-[110px] sm:-bottom-5 sm:-right-3 sm:w-[130px] sm:rotate-[4deg]">
              <PhoneWebsite
                theme={activeTheme}
                businessType={businessType}
                t={t}
              />
            </div>

            {/* Status card */}
            <div className="absolute -left-2 top-8 hidden rounded-2xl border border-white/70 bg-white/90 p-4 shadow-[0_15px_40px_rgba(20,83,45,0.12)] backdrop-blur-md sm:left-0 sm:block">
              <div className="flex items-center gap-2">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-xl"
                  style={{ backgroundColor: activeTheme.accent }}
                >
                  <Monitor
                    size={15}
                    style={{ color: activeTheme.color }}
                  />
                </div>

                <div>
                  <p className="text-[10px] font-bold text-slate-400">
                    {t("Website status")}
                  </p>

                  <p className="text-xs font-extrabold text-brand-900">
                    {t("Live & synced")}
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile card */}
            <div className="absolute bottom-16 -left-2 hidden rounded-2xl border border-white/70 bg-white/90 p-3 shadow-[0_15px_40px_rgba(20,83,45,0.12)] backdrop-blur-md sm:left-1 sm:block">
              <div className="flex items-center gap-2">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-xl"
                  style={{ backgroundColor: activeTheme.accent }}
                >
                  <Smartphone
                    size={15}
                    style={{ color: activeTheme.color }}
                  />
                </div>

                <div>
                  <p className="text-[10px] font-bold text-slate-400">
                    {t("Mobile ready")}
                  </p>

                  <p className="text-xs font-extrabold text-brand-900">
                    {t("Always responsive")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mx-auto mt-14 flex max-w-2xl items-center justify-center gap-2 text-center text-sm text-slate-500">
          <ExternalLink size={15} className="shrink-0 text-brand-700" />

          <span>
            {t(
              "A polished website experience, connected to the same system that runs your business."
            )}
          </span>
        </div>
      </div>
    </section>
  );
}