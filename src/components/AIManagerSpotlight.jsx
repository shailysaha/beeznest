import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Bot,
  MessageCircle,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";

const questions = [
  {
    id: 1,
    question: "Which product made the most profit this week?",
    answer:
      "Your Chicken Burger generated the strongest profit margin this week.",
  },
  {
    id: 2,
    question: "How can I bring back inactive customers?",
    answer:
      "You could send a win-back offer to customers who have not ordered recently.",
  },
  {
    id: 3,
    question: "How is my business performing?",
    answer:
      "Your sales are trending upward and repeat customer activity is improving.",
  },
];

function TypingDots({ t }) {
  return (
    <div className="flex items-center gap-2 text-xs text-white/45">
      <div className="flex items-center gap-1">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#94D8AB]" />
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#94D8AB] [animation-delay:150ms]" />
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#94D8AB] [animation-delay:300ms]" />
      </div>
      {t("Analyzing your business...")}
    </div>
  );
}

function MetricCard({ icon: Icon, label, value, change, t }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-[#BDE8CB]">
          <Icon size={14} />
        </div>
        <ArrowUpRight size={13} className="text-[#94D8AB]" />
      </div>
      <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.08em] text-white/40">
        {t(label)}
      </p>
      <div className="mt-1 flex items-end justify-between gap-2">
        <span className="text-lg font-black text-white">{value}</span>
        <span className="text-[9px] font-black text-[#94D8AB]">{change}</span>
      </div>
    </div>
  );
}

export default function AIManagerSpotlight() {
  const { t } = useLanguage();

  const translatedQuestions = questions.map((item) => ({
    ...item,
    question: t(item.question),
    answer: t(item.answer),
  }));

  const [activeQuestion, setActiveQuestion] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const active = translatedQuestions[activeQuestion];

  useEffect(() => {
    setIsTyping(true);
    const timer = setTimeout(() => {
      setIsTyping(false);
    }, 900);
    return () => clearTimeout(timer);
  }, [activeQuestion]);

  const handleQuestionClick = (index) => {
    if (index === activeQuestion) return;
    setActiveQuestion(index);
  };

  return (
    <section
      id="ai-manager"
      className="relative overflow-hidden bg-[#14532D] py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#6BC48C] opacity-20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[#94D8AB] opacity-10 blur-[140px]" />
      <div className="pointer-events-none absolute right-[8%] top-[12%] h-24 w-24 rounded-full border border-white/5" />
      <div className="pointer-events-none absolute right-[11%] top-[17%] h-10 w-10 rounded-full bg-[#94D8AB]/10" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-[#BDE8CB]">
            <Sparkles size={13} />
            {t("AI Manager")}
          </div>

          <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t("Your business has a")}{" "}
            <span className="text-[#94D8AB]">
              {t("manager who never sleeps.")}
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-green-50/65 sm:text-base">
            {t(
              "Ask simple questions about your business and get useful answers without digging through reports, spreadsheets or multiple screens."
            )}
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.14em] text-[#94D8AB]">
              {t("Try asking")}
            </p>

            <div className="space-y-3">
              {translatedQuestions.map((item, index) => {
                const selected = activeQuestion === index;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleQuestionClick(index)}
                    className={`group w-full rounded-2xl border p-4 text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#94D8AB] focus:ring-offset-2 focus:ring-offset-[#14532D] ${
                      selected
                        ? "border-[#94D8AB]/40 bg-[#94D8AB]/10 shadow-[0_12px_35px_rgba(107,196,140,0.10)]"
                        : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07]"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition ${
                          selected
                            ? "bg-[#94D8AB] text-[#14532D]"
                            : "bg-white/10 text-white/50 group-hover:text-[#BDE8CB]"
                        }`}
                      >
                        <MessageCircle size={15} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p
                          className={`text-sm font-bold leading-6 transition ${
                            selected
                              ? "text-white"
                              : "text-white/65 group-hover:text-white"
                          }`}
                        >
                          {item.question}
                        </p>
                        <span
                          className={`mt-2 inline-flex text-[9px] font-black uppercase tracking-[0.08em] ${
                            selected ? "text-[#94D8AB]" : "text-white/30"
                          }`}
                        >
                          {selected ? t("Click to explore") : t("Try asking")}
                        </span>
                      </div>
                      <ArrowUpRight
                        size={15}
                        className={`mt-1 shrink-0 transition ${
                          selected
                            ? "text-[#94D8AB]"
                            : "text-white/20 group-hover:text-white/60"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-white/10 bg-black/10 p-4">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#94D8AB]/10 text-[#94D8AB]">
                <Bot size={15} />
              </div>
              <div>
                <p className="text-xs font-bold text-white/80">
                  {t("Designed to turn your business data into simple, actionable answers.")}
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-[#6BC48C]/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0F3F24] p-4 shadow-[0_35px_90px_rgba(0,0,0,0.28)] sm:p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5">
                  <Bot size={11} className="text-[#94D8AB]" />
                  <span className="text-[8px] font-bold text-white/50">
                    {t("BeezNest AI Manager")}
                  </span>
                </div>
              </div>

              <div className="grid gap-4 py-5 sm:grid-cols-[1fr_0.85fr]">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#94D8AB]/10 text-[#94D8AB]">
                      <Bot size={14} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-white">
                        {t("AI Manager")}
                      </p>
                      <p className="text-[8px] text-white/30">
                        {t("Online")}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 ml-auto max-w-[88%] rounded-2xl rounded-br-md bg-white/10 p-3">
                    <p className="text-[10px] leading-5 text-white/70">
                      {active.question}
                    </p>
                  </div>

                  <div className="mt-3 max-w-[92%] rounded-2xl rounded-bl-md bg-white p-4">
                    {isTyping ? (
                      <TypingDots t={t} />
                    ) : (
                      <div className="flex gap-2">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#DCF3E3] text-[#2F855A]">
                          <Bot size={10} />
                        </div>
                        <p
                          key={activeQuestion}
                          className="text-[10px] leading-5 text-slate-600 animate-[answer_.4s_ease-out]"
                        >
                          {active.answer}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 flex items-center gap-2 rounded-xl bg-black/10 px-3 py-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#94D8AB]" />
                    <span className="text-[8px] text-white/35">
                      {t("Powered by your business data")}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <MetricCard
                    icon={TrendingUp}
                    label="Sales"
                    value="৳48.6K"
                    change="+12.8%"
                    t={t}
                  />
                  <MetricCard
                    icon={Users}
                    label="Returning customers"
                    value="324"
                    change="+8.2%"
                    t={t}
                  />
                  <MetricCard
                    icon={Bot}
                    label="AI insights"
                    value="18"
                    change={t("This week")}
                    t={t}
                  />
                </div>
              </div>

              <div className="relative mt-1 min-h-28 rounded-2xl border border-white/10 bg-white/[0.035] p-4 sm:min-h-32">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.1em] text-white/35">
                      {t("Business snapshot")}
                    </p>
                    <p className="mt-1 text-sm font-black text-white">
                      {t("Looking healthy")}
                    </p>
                  </div>
                  <div className="rounded-lg bg-[#94D8AB]/10 px-2 py-1 text-[9px] font-black text-[#94D8AB]">
                    +18.4%
                  </div>
                </div>
                <div className="mt-5 flex h-12 items-end gap-1">
                  {[35, 42, 37, 50, 48, 61, 55, 68, 64, 78, 72, 90].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t-sm bg-[#94D8AB]/30 transition hover:bg-[#94D8AB]/70"
                        style={{ height: `${height}%` }}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes answer {
          from { opacity: 0; transform: translateY(7px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}