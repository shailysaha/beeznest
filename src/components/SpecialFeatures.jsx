import { useEffect, useRef, useState } from "react";
import {
  BarChart3,
  Bot,
  Check,
  Globe2,
  MessageSquareText,
  QrCode,
  Smartphone,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";

const features = [
  {
    id: "profit",
    title: "Profit per item",
    description:
      "See which products bring the strongest margins and make smarter menu decisions.",
    icon: BarChart3,
    visual: "profit",
  },
  {
    id: "qr",
    title: "QR table ordering",
    description:
      "Let customers scan, browse and order directly from their table.",
    icon: QrCode,
    visual: "qr",
  },
  {
    id: "sms",
    title: "Smart win-back SMS",
    description:
      "Reconnect with customers who have not visited recently.",
    icon: MessageSquareText,
    visual: "sms",
  },
  {
    id: "language",
    title: "Bangla + English",
    description:
      "Give your team and customers a familiar experience in both languages.",
    icon: Globe2,
    visual: "language",
  },
  {
    id: "report",
    title: "Weekly AI report",
    description:
      "Get a simple weekly summary of useful business signals and trends.",
    icon: Bot,
    visual: "report",
  },
  {
    id: "crm",
    title: "Website synced with CRM",
    description:
      "Keep your website and business information connected.",
    icon: Smartphone,
    visual: "crm",
  },
];

function ProfitMiniVisual({ t }) {
  return (
    <div className="mt-6 rounded-2xl border border-green-100 bg-[#F8FCF9] p-4">
      <div className="flex h-32 items-end gap-2">
        {[42, 68, 52, 88, 61, 96, 76].map((height, index) => (
          <div
            key={index}
            className="group flex h-full flex-1 items-end"
          >
            <div
              className="
                w-full
                rounded-t-lg
                bg-[#BDE8CB]
                transition-all
                duration-500
                group-hover:bg-[#2F855A]
              "
              style={{ height: `${height}%` }}
            />
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between">
        <span className="text-[9px] font-bold text-slate-400">
          {t("Menu performance")}
        </span>

        <span className="text-[10px] font-black text-[#2F855A]">
          +18.4%
        </span>
      </div>
    </div>
  );
}

function QrMiniVisual() {
  const blocks = [
    1, 1, 0, 1, 1,
    1, 0, 0, 0, 1,
    0, 1, 1, 1, 0,
    1, 0, 1, 0, 1,
    1, 1, 0, 1, 1,
  ];

  return (
    <div className="mt-5 flex items-center justify-center rounded-2xl bg-[#F0FAF3] p-5">
      <div className="grid grid-cols-5 gap-1 rounded-xl bg-white p-3 shadow-sm">
        {blocks.map((block, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-[2px] ${
              block ? "bg-[#14532D]" : "bg-[#DCF3E3]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function SmsMiniVisual({ t }) {
  return (
    <div className="mt-5 space-y-2">
      <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-[#F0FAF3] p-3">
        <p className="text-[9px] font-semibold leading-4 text-slate-500">
          {t("We miss you! Come back this week for a special offer.")}
        </p>
      </div>

      <div className="flex items-center gap-2 rounded-xl bg-[#2F855A] p-3 text-white">
        <MessageSquareText size={13} />

        <span className="text-[9px] font-bold">
          {t("Campaign ready")}
        </span>
      </div>
    </div>
  );
}

function LanguageMiniVisual({ t }) {
  return (
    <div className="mt-5 rounded-2xl bg-[#F0FAF3] p-4">
      <div className="flex gap-2">
        <div className="flex-1 rounded-xl bg-[#14532D] p-3 text-center text-xs font-black text-white">
          {t("Bangla")}
        </div>

        <div className="flex-1 rounded-xl bg-white p-3 text-center text-xs font-black text-[#2F855A] shadow-sm">
          {t("English")}
        </div>
      </div>

      <div className="mt-3 h-2 w-3/4 rounded-full bg-[#BDE8CB]" />
      <div className="mt-2 h-2 w-1/2 rounded-full bg-[#DCF3E3]" />
    </div>
  );
}

function ReportMiniVisual({ t }) {
  return (
    <div className="mt-5 rounded-2xl border border-green-100 bg-white p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#DCF3E3] text-[#2F855A]">
          <Bot size={16} />
        </div>

        <div>
          <p className="text-[9px] font-black text-[#14532D]">
            {t("Weekly AI report")}
          </p>

          <p className="text-[8px] text-slate-400">
            {t("Example insights")}
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[9px] text-slate-400">
            {t("Sales trend")}
          </span>

          <span className="text-[9px] font-black text-[#2F855A]">
            {t("Positive")}
          </span>
        </div>

        <div className="h-1.5 rounded-full bg-[#F0FAF3]">
          <div className="h-full w-[76%] rounded-full bg-[#94D8AB]" />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[9px] text-slate-400">
            {t("Repeat customers")}
          </span>

          <span className="text-[9px] font-black text-[#2F855A]">
            {t("Growing")}
          </span>
        </div>

        <div className="h-1.5 rounded-full bg-[#F0FAF3]">
          <div className="h-full w-[62%] rounded-full bg-[#BDE8CB]" />
        </div>
      </div>
    </div>
  );
}

function CrmMiniVisual({ t }) {
  return (
    <div className="mt-5 overflow-hidden rounded-2xl border border-green-100 bg-white">
      <div className="flex items-center gap-1 border-b border-slate-100 px-3 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />
        <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />
        <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />

        <div className="ml-2 h-4 flex-1 rounded bg-slate-50" />
      </div>

      <div className="bg-[#F0FAF3] p-4">
        <div className="flex items-center gap-2">
          <Globe2
            size={14}
            className="text-[#2F855A]"
          />

          <div className="h-2 w-20 rounded-full bg-[#2F855A]" />
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="h-12 rounded-lg bg-white" />
          <div className="h-12 rounded-lg bg-white" />
          <div className="h-12 rounded-lg bg-white" />
        </div>

        <p className="mt-3 text-center text-[8px] font-bold text-[#2F855A]">
          {t("Connected to your CRM")}
        </p>
      </div>
    </div>
  );
}

function AiManagerTile({ t }) {
  const [message, setMessage] = useState(0);

  const messages = [
    {
      question: t("Which menu item has the best margin?"),
      answer: t(
        "Your Chicken Burger is currently one of the strongest margin items."
      ),
    },
    {
      question: t("How can I bring customers back?"),
      answer: t(
        "Try a win-back campaign for customers who have not returned recently."
      ),
    },
    {
      question: t("Give me this week's summary."),
      answer: t(
        "Sales are trending positively. Your repeat-customer activity also improved."
      ),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setMessage((current) => (current + 1) % messages.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [messages.length]);

  const current = messages[message];

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[2rem]
        bg-[#14532D]
        p-6
        text-white
        shadow-[0_25px_60px_rgba(20,83,45,0.22)]
        sm:p-8
        lg:col-span-3
      "
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#6BC48C] opacity-20 blur-[80px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-48 w-48 opacity-10">
        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 16 }).map((_, index) => (
            <div
              key={index}
              className="
                h-10
                w-10
                border
                border-white
                [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0_50%)]
              "
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
              <Bot size={23} />
            </div>

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.12em] text-[#BDE8CB]">
                {t("BeezNest AI")}
              </p>

              <p className="mt-1 text-sm font-bold">
                {t("Your business manager")}
              </p>
            </div>
          </div>

          <h3 className="mt-6 max-w-lg text-2xl font-black tracking-tight sm:text-3xl">
            {t("Ask your business")}{" "}
            <span className="text-[#94D8AB]">
              {t("anything.")}
            </span>
          </h3>

          <p className="mt-3 max-w-lg text-sm leading-6 text-green-50/70">
            {t(
              "Get simple, useful answers from your business information without digging through multiple screens."
            )}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {messages.map((item, index) => (
              <button
                key={item.question}
                type="button"
                onClick={() => setMessage(index)}
                className={`
                  rounded-full
                  border
                  px-3
                  py-2
                  text-[10px]
                  font-bold
                  transition
                  ${
                    index === message
                      ? "border-[#94D8AB] bg-[#94D8AB] text-[#14532D]"
                      : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
                  }
                `}
              >
                {item.question}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-white/10 p-4 backdrop-blur-md sm:p-5">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#94D8AB]" />

              <span className="text-[10px] font-bold text-white/70">
                {t("AI Manager")}
              </span>
            </div>

            <span className="text-[9px] text-white/40">
              {t("Example conversation")}
            </span>
          </div>

          <div
            key={message}
            className="space-y-3 py-5 animate-[answerIn_.35s_ease-out]"
          >
            <div className="ml-auto max-w-[82%] rounded-2xl rounded-br-md bg-white/10 p-3">
              <p className="text-[11px] leading-5 text-white/80">
                {current.question}
              </p>
            </div>

            <div className="max-w-[88%] rounded-2xl rounded-bl-md bg-white p-4">
              <div className="flex gap-2">
                <Bot
                  size={14}
                  className="mt-0.5 shrink-0 text-[#2F855A]"
                />

                <p className="text-[11px] leading-5 text-slate-600">
                  {current.answer}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-black/10 px-3 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#94D8AB]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#94D8AB]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#94D8AB]" />

            <span className="ml-1 text-[9px] text-white/40">
              {t("Thinking about your business...")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniVisual({ type, t }) {
  if (type === "profit") {
    return <ProfitMiniVisual t={t} />;
  }

  if (type === "qr") {
    return <QrMiniVisual />;
  }

  if (type === "sms") {
    return <SmsMiniVisual t={t} />;
  }

  if (type === "language") {
    return <LanguageMiniVisual t={t} />;
  }

  if (type === "report") {
    return <ReportMiniVisual t={t} />;
  }

  return <CrmMiniVisual t={t} />;
}

function FeatureTile({ feature, index, t }) {
  const tileRef = useRef(null);

  const [position, setPosition] = useState({
    x: 50,
    y: 50,
  });

  const Icon = feature.icon;

  const handlePointerMove = (event) => {
    const element = tileRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    setPosition({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <article
      ref={tileRef}
      onPointerMove={handlePointerMove}
      className="
        group
        relative
        overflow-hidden
        rounded-[2rem]
        border
        border-green-100
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-[0_25px_55px_rgba(47,133,90,0.12)]
        animate-[fadeUp_.6s_ease-out_both]
      "
      style={{
        animationDelay: `${index * 80}ms`,
      }}
    >
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
        style={{
          background: `radial-gradient(
            180px circle at ${position.x}% ${position.y}%,
            rgba(148,216,171,0.20),
            transparent 70%
          )`,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-[#F0FAF3]
              text-[#2F855A]
              transition
              duration-300
              group-hover:scale-105
              group-hover:bg-[#DCF3E3]
            "
          >
            <Icon size={21} />
          </div>

          <span className="text-[9px] font-black uppercase tracking-[0.12em] text-[#94D8AB]">
            {t("Feature")}
          </span>
        </div>

        <h3 className="mt-5 text-lg font-black tracking-tight text-[#14532D]">
          {t(feature.title)}
        </h3>

        <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
          {t(feature.description)}
        </p>

        <MiniVisual type={feature.visual} t={t} />
      </div>
    </article>
  );
}

export default function SpecialFeatures() {
  const { t } = useLanguage();

  return (
    <section
      id="special-features"
      className="
        relative
        overflow-hidden
        bg-[#F0FAF3]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-20
          h-80
          w-80
          rounded-full
          bg-[#DCF3E3]
          opacity-70
          blur-[110px]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
        "
      >
        <div className="mx-auto max-w-2xl text-center">
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#BDE8CB]
              bg-white
              px-4
              py-2
              text-[11px]
              font-black
              uppercase
              tracking-[0.12em]
              text-[#2F855A]
            "
          >
            <Check size={13} />

            {t("Special features")}
          </div>

          <h2
            className="
              mt-5
              text-3xl
              font-black
              tracking-tight
              text-[#14532D]
              sm:text-4xl
              lg:text-5xl
            "
          >
            {t("Small details that make")}{" "}
            <span className="block text-[#2F855A]">
              {t("a big difference.")}
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            {t(
              "Useful tools that turn BeezNest from a simple dashboard into a smarter business workspace."
            )}
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureTile
              key={feature.id}
              feature={feature}
              index={index}
              t={t}
            />
          ))}

          <AiManagerTile t={t} />
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes answerIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}