import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  FileText,
  ShoppingBag,
  TrendingUp,
  Users,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";

export default function MockDashboard({
  businessType = "restaurant",
}) {
  const { t } = useLanguage();

  const isRestaurant = businessType === "restaurant";

  /*
   * These values are illustrative UI examples only.
   * They are intentionally labeled as sample/demo content
   * so they are not presented as real BeezNest customer results.
   */

  const restaurantStats = {
    primary: {
      label: "Orders",
      value: "Sample",
    },
    customers: {
      label: "Customers",
      value: "Sample",
    },
    performance: {
      label: "Revenue",
      value: "Demo",
    },
  };

  const visaStats = {
    primary: {
      label: "Applications",
      value: "Sample",
    },
    customers: {
      label: "Leads",
      value: "Sample",
    },
    performance: {
      label: "Conversion",
      value: "Demo",
    },
  };

  const stats = isRestaurant
    ? restaurantStats
    : visaStats;

  const restaurantBars = [42, 58, 48, 68, 57, 76, 65];
  const visaBars = [45, 61, 52, 70, 59, 78, 68];

  const restaurantActivity = [
    ["Customer example", t("Sample activity")],
    ["New customer", t("Example")],
    ["Returning customer", t("Demo")],
  ];

  const visaActivity = [
    ["Student example", t("Visa file")],
    ["Application example", t("Documents")],
    ["Student example", t("Submitted")],
  ];

  const activity = isRestaurant
    ? restaurantActivity
    : visaActivity;

  return (
    <div className="relative w-full">

      {/* =====================================================
          SOFT GLOW
      ====================================================== */}

      <div className="absolute -inset-6 rounded-[3rem] bg-brand-200/60 blur-3xl" />

      {/* =====================================================
          DASHBOARD FRAME
      ====================================================== */}

      <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/95 p-3 shadow-lift backdrop-blur-xl sm:p-4">

        {/* ===================================================
            TOP HEADER
        =================================================== */}

        <div className="flex items-center justify-between rounded-xl border-b border-slate-100 pb-4">

          <div className="flex min-w-0 items-center gap-3">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
              {isRestaurant ? (
                <ShoppingBag size={17} />
              ) : (
                <BriefcaseBusiness size={17} />
              )}
            </div>

            <div className="min-w-0">

              <div className="flex items-center gap-2">
                <p className="text-[10px] font-medium text-slate-400">
                  BeezNest · {t("Demo dashboard")}
                </p>

                {/* DEMO LABEL */}
                <span className="rounded-full bg-brand-50 px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-wide text-brand-700">
                  {t("Demo")}
                </span>
              </div>

              <h3 className="truncate text-sm font-extrabold text-brand-900 sm:text-lg">
                {isRestaurant
                  ? t("Restaurant overview")
                  : t("Agency overview")}
              </h3>

            </div>
          </div>

          <div className="flex shrink-0 items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-brand-400" />

            <span className="hidden text-[10px] font-semibold text-slate-400 sm:block">
              {t("Live preview")}
            </span>
          </div>
        </div>

        {/* ===================================================
            SAMPLE DATA NOTICE
        ====================================================== */}

        <div className="mt-3 flex items-center gap-2 rounded-xl border border-brand-100 bg-brand-50 px-3 py-2.5">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white text-brand-700">
            ✦
          </div>

          <p className="text-[9px] leading-4 text-brand-900 sm:text-[10px]">
            {t(
              "Illustrative dashboard preview — values shown are sample content, not real customer results."
            )}
          </p>
        </div>

        {/* ===================================================
            STATS
        ====================================================== */}

        <div className="mt-3 grid grid-cols-3 gap-2 sm:mt-4 sm:gap-3">

          {/* STAT 1 */}
          <div className="rounded-2xl bg-brand-50 p-3 sm:p-4">

            {isRestaurant ? (
              <ShoppingBag
                size={17}
                className="text-brand-700"
              />
            ) : (
              <FileText
                size={17}
                className="text-brand-700"
              />
            )}

            <p className="mt-2 text-[10px] text-slate-500 sm:text-xs">
              {t(stats.primary.label)}
            </p>

            <p className="mt-1 text-sm font-black text-brand-900 sm:text-lg">
              {t(stats.primary.value)}
            </p>

          </div>

          {/* STAT 2 */}
          <div className="rounded-2xl bg-brand-50 p-3 sm:p-4">

            <Users
              size={17}
              className="text-brand-700"
            />

            <p className="mt-2 text-[10px] text-slate-500 sm:text-xs">
              {t(stats.customers.label)}
            </p>

            <p className="mt-1 text-sm font-black text-brand-900 sm:text-lg">
              {t(stats.customers.value)}
            </p>

          </div>

          {/* STAT 3 */}
          <div className="rounded-2xl bg-brand-50 p-3 sm:p-4">

            {isRestaurant ? (
              <BarChart3
                size={17}
                className="text-brand-700"
              />
            ) : (
              <TrendingUp
                size={17}
                className="text-brand-700"
              />
            )}

            <p className="mt-2 text-[10px] text-slate-500 sm:text-xs">
              {t(stats.performance.label)}
            </p>

            <p className="mt-1 text-sm font-black text-brand-900 sm:text-lg">
              {t(stats.performance.value)}
            </p>

          </div>
        </div>

        {/* ===================================================
            CHART
        ====================================================== */}

        <div className="mt-3 rounded-2xl border border-slate-100 bg-white p-4 sm:mt-4 sm:p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-xs font-bold text-brand-900 sm:text-sm">
                {isRestaurant
                  ? t("Sales overview")
                  : t("Application pipeline")}
              </p>

              <p className="text-[10px] text-slate-400 sm:text-xs">
                {t("Example view")}
              </p>
            </div>

            {/* Instead of fake percentage */}
            <div className="rounded-full bg-slate-50 px-2 py-1 text-[8px] font-semibold text-slate-400 sm:text-[9px]">
              {t("Sample data")}
            </div>
          </div>

          <div className="mt-4 flex h-24 items-end gap-2 sm:mt-5 sm:h-32 sm:gap-3">

            {(isRestaurant
              ? restaurantBars
              : visaBars
            ).map((height, index) => (
              <div
                key={index}
                className="group relative flex-1"
                style={{
                  height: `${height}%`,
                }}
              >
                <div
                  className="h-full w-full rounded-t-lg bg-brand-300 transition-all duration-300 group-hover:bg-brand-700"
                />
              </div>
            ))}

          </div>

          {/* Chart baseline */}
          <div className="mt-2 flex justify-between text-[7px] text-slate-300">
            <span>{t("Example")}</span>
            <span>{t("Example")}</span>
            <span>{t("Example")}</span>
            <span>{t("Example")}</span>
          </div>
        </div>

        {/* ===================================================
            RECENT ACTIVITY
        ====================================================== */}

        <div className="mt-3 rounded-2xl bg-slate-50 p-4 sm:mt-4 sm:p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-xs font-extrabold text-brand-900 sm:text-sm">
                {isRestaurant
                  ? t("Recent customers")
                  : t("Recent applications")}
              </p>

              <p className="mt-0.5 text-[8px] text-slate-400 sm:text-[9px]">
                {t("Example activity")}
              </p>
            </div>

            <span className="text-[10px] font-semibold text-brand-700">
              {t("View all")}
            </span>
          </div>

          <div className="mt-4 space-y-3">

            {activity.map(([name, status], index) => (
              <div
                key={`${name}-${index}`}
                className="flex items-center justify-between gap-3"
              >

                <div className="flex min-w-0 items-center gap-3">

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-200 text-[10px] font-bold text-brand-900">
                    {index + 1}
                  </div>

                  <span className="truncate text-xs font-medium text-slate-700">
                    {t(name)}
                  </span>

                </div>

                <span className="shrink-0 text-[10px] font-semibold text-brand-700">
                  {status}
                </span>

              </div>
            ))}

          </div>
        </div>

        {/* ===================================================
            AI BUSINESS MANAGER
        ====================================================== */}

        <div className="relative mt-3 overflow-hidden rounded-2xl bg-brand-900 p-4 text-white sm:mt-4 sm:p-5">

          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-700/40 blur-2xl" />

          <div className="relative">

            <div className="flex items-center gap-2">

              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-brand-200">
                ✦
              </div>

              <p className="text-[10px] font-semibold text-brand-200">
                {t("AI Business Manager")}
              </p>

              <span className="ml-auto rounded-full bg-white/10 px-2 py-1 text-[7px] font-bold text-brand-200">
                {t("Example")}
              </span>

            </div>

            <p className="mt-2 text-sm font-extrabold">
              {isRestaurant
                ? t("Example business insight")
                : t("Example follow-up suggestion")}
            </p>

            <p className="mt-1 max-w-md text-[10px] leading-5 text-brand-100/70">
              {isRestaurant
                ? t(
                    "Example: review repeat-order patterns and identify products customers may want again."
                  )
                : t(
                    "Example: review pending documents and prioritize students who may need follow-up."
                  )}
            </p>

            <div className="mt-3 flex items-center gap-2 text-[8px] font-semibold text-brand-200">
              <ArrowUpRight size={12} />

              {t("Illustrative AI recommendation")}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}