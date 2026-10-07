import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Globe2,
  Hexagon,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function FinalCTA() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <section
      id="final-cta"
      className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#94D8AB]/60 bg-gradient-to-br from-[#F0FAF3] via-[#BDE8CB] to-[#6BC48C] shadow-[0_30px_100px_rgba(47,133,90,0.16)] sm:rounded-[2.75rem]">

        {/* =====================================================
            LARGE BACKGROUND GLOW
        ====================================================== */}

        <div className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-white/40 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 left-[35%] h-[500px] w-[500px] rounded-full bg-[#2F855A]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 top-1/3 h-[450px] w-[450px] rounded-full bg-white/30 blur-3xl" />

        {/* =====================================================
            HONEYCOMB BACKGROUND
        ====================================================== */}

        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[62%] opacity-[0.13] lg:block">
          <svg
            className="h-full w-full"
            viewBox="0 0 700 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="finalHoneycomb"
                width="76"
                height="132"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M38 2L72 21V59L38 78L4 59V21L38 2Z"
                  stroke="#14532D"
                  strokeWidth="1.5"
                />

                <path
                  d="M38 76L72 95V133L38 152L4 133V95L38 76Z"
                  stroke="#14532D"
                  strokeWidth="1.5"
                />
              </pattern>
            </defs>

            <rect
              width="700"
              height="700"
              fill="url(#finalHoneycomb)"
            />
          </svg>
        </div>

        {/* =====================================================
            DECORATIVE HEXAGONS
        ====================================================== */}

        <div className="pointer-events-none absolute right-[44%] top-10 hidden text-[#14532D]/10 lg:block">
          <Hexagon className="h-28 w-28" strokeWidth={1} />
        </div>

        <div className="pointer-events-none absolute bottom-10 right-[47%] hidden text-white/40 lg:block">
          <Hexagon className="h-20 w-20" strokeWidth={1} />
        </div>

        <div className="pointer-events-none absolute right-8 top-12 hidden text-white/40 lg:block">
          <Hexagon className="h-16 w-16" strokeWidth={1} />
        </div>

        {/* =====================================================
            CONTENT
        ====================================================== */}

        <div className="relative z-10 grid min-h-[600px] items-center lg:grid-cols-[0.88fr_1.12fr]">

          {/* ===================================================
              LEFT CONTENT
          =================================================== */}

          <div className="px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20 xl:px-16">

            {/* Eyebrow */}

            <div className="inline-flex items-center gap-2 rounded-full border border-[#14532D]/15 bg-white/45 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#14532D] shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2F855A] opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2F855A]" />
              </span>

              {t("Ready to grow?")}
            </div>

            {/* Heading - UPDATED SIZE HERE */}
            <h2 className="mt-6 max-w-xl text-3xl font-black leading-[1.15] tracking-[-0.03em] text-[#14532D] sm:text-4xl lg:text-[3.25rem] xl:text-[3.75rem]">
              {t("Run your business.")}
              <br />

              <span className="relative inline-block text-[#2F855A]">
                {t("Grow with confidence.")}

                {/* Underline */}
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8C72 2 190 2 297 7"
                    stroke="#14532D"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.45"
                  />
                </svg>
              </span>
            </h2>

            {/* Description */}

            <p className="mt-7 max-w-xl text-base leading-7 text-[#14532D]/75 sm:text-lg sm:leading-8">
              {t(
                "Bring your customers, website, business tools and AI assistance together with BeezNest."
              )}
            </p>

            {/* Buttons */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#14532D] px-7 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(20,83,45,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0f3f22] hover:shadow-[0_18px_40px_rgba(20,83,45,0.3)] focus:outline-none focus:ring-4 focus:ring-white/60"
              >
                {t("Start free trial")}

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => navigate("/pricing")}
                className="inline-flex min-h-13 items-center justify-center rounded-full border border-[#14532D]/25 bg-white/55 px-7 py-3.5 text-sm font-bold text-[#14532D] shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md focus:outline-none focus:ring-4 focus:ring-white/60"
              >
                {t("Explore pricing")}
              </button>
            </div>

            {/* Trust points */}

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#14532D]/70">
                <CheckCircle2 className="h-4 w-4 text-[#2F855A]" />
                {t("Built for Bangladesh")}
              </span>

              <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#14532D]/70">
                <CheckCircle2 className="h-4 w-4 text-[#2F855A]" />
                {t("Restaurant & Visa agency")}
              </span>
            </div>
          </div>

          {/* ===================================================
              RIGHT PRODUCT COMPOSITION
          =================================================== */}

          <div className="relative min-h-[430px] px-4 pb-12 sm:min-h-[500px] sm:px-8 lg:min-h-[600px] lg:px-0 lg:pb-0">

            {/* Large dashboard glow */}

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50 blur-3xl sm:h-[430px] sm:w-[430px]" />

            {/* =================================================
                FLOATING AI CARD
            ================================================= */}

            <div className="absolute left-2 top-6 z-30 w-44 rounded-2xl border border-white/70 bg-white/85 p-4 shadow-[0_18px_45px_rgba(20,83,45,0.18)] backdrop-blur-xl sm:left-4 sm:w-48 lg:left-0 lg:top-16">

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#DCF3E3] text-[#2F855A]">
                  <Sparkles className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-[10px] font-semibold text-slate-400">
                    {t("AI Manager")}
                  </p>

                  <p className="mt-1 text-xs font-bold leading-5 text-[#14532D]">
                    {t("Your business at a glance.")}
                  </p>
                </div>
              </div>

              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#F0FAF3]">
                <div className="h-full w-[78%] rounded-full bg-[#6BC48C]" />
              </div>
            </div>

            {/* =================================================
                FLOATING CUSTOMER CARD
            ================================================= */}

            <div className="absolute bottom-10 left-0 z-30 hidden w-44 rounded-2xl border border-white/70 bg-white/85 p-4 shadow-[0_18px_45px_rgba(20,83,45,0.18)] backdrop-blur-xl sm:block lg:left-5 lg:bottom-16">

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#DCF3E3] text-[#2F855A]">
                  <Users className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-[10px] text-slate-400">
                    {t("Customers")}
                  </p>

                  <p className="text-sm font-extrabold text-[#14532D]">
                    1,248
                  </p>
                </div>

                <TrendingUp className="ml-auto h-4 w-4 text-[#2F855A]" />
              </div>

              <p className="mt-2 text-[9px] font-semibold text-[#2F855A]">
                +18.4%
              </p>
            </div>

            {/* =================================================
                FLOATING WEBSITE CARD
            ================================================= */}

            <div className="absolute right-0 top-12 z-30 hidden w-48 rounded-2xl border border-white/70 bg-white/85 p-4 shadow-[0_18px_45px_rgba(20,83,45,0.18)] backdrop-blur-xl sm:block lg:right-4 lg:top-24">

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#DCF3E3] text-[#2F855A]">
                  <Globe2 className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-[10px] text-slate-400">
                    {t("Website")}
                  </p>

                  <p className="text-xs font-bold text-[#14532D]">
                    {t("Live & synced")}
                  </p>
                </div>

                <span className="ml-auto h-2 w-2 rounded-full bg-[#6BC48C]" />
              </div>
            </div>

            {/* =================================================
                MAIN LAPTOP
            ================================================= */}

            <div className="absolute left-1/2 top-16 z-20 w-[92%] -translate-x-1/2 sm:top-20 sm:w-[88%] lg:left-[45%] lg:top-24 lg:w-[92%]">

              {/* Laptop screen */}

              <div className="rounded-[1.4rem] border-[5px] border-slate-800/90 bg-slate-900 p-1.5 shadow-[0_35px_80px_rgba(20,83,45,0.3)] sm:rounded-[1.8rem] sm:border-[6px] sm:p-2">

                {/* Camera */}

                <div className="relative overflow-hidden rounded-[0.9rem] bg-white sm:rounded-[1.2rem]">

                  <div className="absolute left-1/2 top-2 z-30 h-1.5 w-10 -translate-x-1/2 rounded-full bg-slate-800/80" />

                  {/* Browser bar */}

                  <div className="flex items-center justify-between border-b border-slate-100 bg-white px-3 py-3 sm:px-4">

                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#94D8AB]" />
                      <span className="h-2 w-2 rounded-full bg-[#BDE8CB]" />
                      <span className="h-2 w-2 rounded-full bg-slate-200" />
                    </div>

                    <div className="hidden rounded-full bg-slate-50 px-5 py-1 text-[8px] text-slate-400 sm:block">
                      app.beeznest.com
                    </div>

                    <div className="h-6 w-6 rounded-full bg-[#DCF3E3]" />
                  </div>

                  {/* Dashboard */}

                  <div className="grid grid-cols-[58px_1fr] gap-2 bg-[#F8FCF9] p-2 sm:grid-cols-[85px_1fr] sm:gap-3 sm:p-3">

                    {/* Sidebar */}

                    <div className="rounded-xl bg-[#14532D] p-2 sm:p-3">

                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#6BC48C]">
                          <Sparkles className="h-3 w-3 text-[#14532D]" />
                        </div>

                        <span className="hidden text-[9px] font-bold text-white sm:block">
                          BeezNest
                        </span>
                      </div>

                      <div className="mt-5 space-y-2">
                        {[1, 2, 3, 4, 5].map((item) => (
                          <div
                            key={item}
                            className={`h-5 rounded-md ${
                              item === 1
                                ? "bg-white/15"
                                : "bg-white/5"
                            }`}
                          />
                        ))}
                      </div>

                      <div className="mt-10 hidden rounded-lg bg-white/10 p-2 sm:block">
                        <div className="h-1.5 w-8 rounded bg-white/20" />
                        <div className="mt-2 h-1.5 w-12 rounded bg-white/10" />
                      </div>
                    </div>

                    {/* Main */}

                    <div className="min-w-0">

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="h-2.5 w-24 rounded-full bg-slate-200 sm:w-32" />
                          <div className="mt-2 h-1.5 w-14 rounded-full bg-slate-100 sm:w-20" />
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="hidden h-5 w-12 rounded-full bg-[#DCF3E3] sm:block" />
                          <div className="h-7 w-7 rounded-full bg-[#DCF3E3]" />
                        </div>
                      </div>

                      {/* Stats */}

                      <div className="mt-3 grid grid-cols-3 gap-1.5 sm:gap-2">

                        {[
                          ["Sales", "৳84K"],
                          ["Customers", "1.2K"],
                          ["Growth", "+18%"],
                        ].map(([label, value]) => (
                          <div
                            key={label}
                            className="rounded-lg border border-slate-100 bg-white p-2 sm:rounded-xl sm:p-3"
                          >
                            <p className="text-[7px] text-slate-400 sm:text-[8px]">
                              {t(label)}
                            </p>

                            <p className="mt-1 text-[9px] font-extrabold text-[#14532D] sm:text-xs">
                              {value}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Chart */}

                      <div className="mt-2 rounded-lg border border-slate-100 bg-white p-2 sm:mt-3 sm:rounded-xl sm:p-3">

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-[8px] font-bold text-slate-700 sm:text-[10px]">
                              {t("Business overview")}
                            </p>

                            <p className="mt-1 text-[6px] text-slate-400 sm:text-[7px]">
                              {t("Last 30 days")}
                            </p>
                          </div>

                          <BarChart3 className="h-3.5 w-3.5 text-[#2F855A]" />
                        </div>

                        <div className="mt-3 flex h-16 items-end gap-1 sm:h-20">
                          {[30, 42, 35, 52, 45, 62, 55, 72, 66, 84, 74, 94].map(
                            (height, index) => (
                              <div
                                key={index}
                                className="flex-1 rounded-t bg-gradient-to-t from-[#2F855A] to-[#94D8AB]"
                                style={{
                                  height: `${height}%`,
                                }}
                              />
                            )
                          )}
                        </div>
                      </div>

                      {/* Bottom cards */}

                      <div className="mt-2 grid grid-cols-2 gap-1.5 sm:mt-3 sm:gap-2">

                        <div className="rounded-lg bg-[#F0FAF3] p-2 sm:rounded-xl sm:p-3">
                          <p className="text-[7px] font-semibold text-[#2F855A] sm:text-[8px]">
                            {t("AI Manager")}
                          </p>

                          <p className="mt-1 text-[7px] font-bold text-[#14532D] sm:text-[9px]">
                            {t("3 useful insights")}
                          </p>
                        </div>

                        <div className="rounded-lg bg-slate-50 p-2 sm:rounded-xl sm:p-3">
                          <p className="text-[7px] font-semibold text-slate-400 sm:text-[8px]">
                            {t("Website")}
                          </p>

                          <p className="mt-1 text-[7px] font-bold text-slate-700 sm:text-[9px]">
                            {t("Live & synced")}
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop base */}

              <div className="mx-auto h-3 w-[104%] rounded-b-[1rem] bg-gradient-to-b from-slate-700 to-slate-900 shadow-xl sm:h-4" />

              <div className="mx-auto h-1.5 w-[35%] rounded-b-full bg-slate-600/70" />
            </div>

            {/* =================================================
                MINI PHONE
            ================================================= */}

            <div className="absolute bottom-2 right-0 z-40 w-[105px] rotate-[5deg] sm:right-4 sm:w-[125px] lg:bottom-0 lg:right-10 lg:w-[145px]">

              <div className="rounded-[1.5rem] border-[4px] border-slate-800 bg-slate-900 p-1.5 shadow-[0_25px_50px_rgba(20,83,45,0.3)]">

                <div className="overflow-hidden rounded-[1.15rem] bg-white">

                  <div className="flex h-5 items-center justify-center bg-[#14532D]">
                    <div className="h-1.5 w-8 rounded-full bg-white/30" />
                  </div>

                  <div className="bg-[#F0FAF3] p-2.5">

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="h-2 w-12 rounded-full bg-[#14532D]" />
                        <div className="mt-1 h-1.5 w-8 rounded-full bg-[#94D8AB]" />
                      </div>

                      <div className="h-5 w-5 rounded-full bg-[#DCF3E3]" />
                    </div>

                    <div className="mt-4 rounded-xl bg-[#14532D] p-3">
                      <p className="text-[6px] text-white/60">
                        {t("Today's favourites")}
                      </p>

                      <p className="mt-1 text-[9px] font-bold text-white">
                        {t("Good food.")}
                      </p>

                      <div className="mt-2 h-1 w-12 rounded-full bg-[#6BC48C]" />
                    </div>

                    <div className="mt-2 grid grid-cols-2 gap-1.5">
                      <div className="h-14 rounded-lg bg-white shadow-sm" />
                      <div className="h-14 rounded-lg bg-white shadow-sm" />
                    </div>

                    <div className="mt-2 h-8 rounded-lg bg-[#6BC48C]" />
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                FLOATING SPARKLE
            ================================================= */}

            <div className="absolute right-8 top-3 z-40 flex h-9 w-9 rotate-12 items-center justify-center rounded-xl border border-white/70 bg-white/70 text-[#2F855A] shadow-lg backdrop-blur-md sm:right-16 sm:h-11 sm:w-11">
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM DECORATIVE LINE
        ====================================================== */}

        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/70 to-transparent" />
      </div>
    </section>
  );
}