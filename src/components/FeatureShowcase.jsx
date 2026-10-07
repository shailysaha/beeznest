import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  BarChart3,
  Bot,
  Check,
  ChevronDown,
  Globe2,
  MessageSquareText,
  QrCode,
  ShoppingBag,
  Users,
  Zap,
} from "lucide-react";

const restaurantFeatures = [
  {
    id: "restaurant-orders",
    title: "Smart order management",
    description:
      "Keep orders, customers and daily sales organized from one place.",
    icon: ShoppingBag,
    visual: "orders",
  },
  {
    id: "restaurant-profit",
    title: "Profit per item",
    description:
      "Understand which menu items are actually contributing to your business.",
    icon: BarChart3,
    visual: "profit",
  },
  {
    id: "restaurant-qr",
    title: "QR table ordering",
    description:
      "Let customers browse your menu and place orders from their table.",
    icon: QrCode,
    visual: "qr",
  },
  {
    id: "restaurant-sms",
    title: "Smart win-back SMS",
    description:
      "Reconnect with customers who have not visited recently.",
    icon: MessageSquareText,
    visual: "sms",
  },
  {
    id: "restaurant-ai",
    title: "AI business manager",
    description:
      "Ask questions about your restaurant and get useful business insights.",
    icon: Bot,
    visual: "ai",
  },
];

const visaFeatures = [
  {
    id: "visa-students",
    title: "Student management",
    description:
      "Keep student information, documents and application progress together.",
    icon: Users,
    visual: "students",
  },
  {
    id: "visa-leads",
    title: "Lead tracking",
    description:
      "Track new leads and move them through your agency pipeline.",
    icon: Zap,
    visual: "leads",
  },
  {
    id: "visa-followup",
    title: "Follow-up automation",
    description:
      "Keep follow-ups organized so important prospects do not get forgotten.",
    icon: MessageSquareText,
    visual: "followup",
  },
  {
    id: "visa-website",
    title: "Website + CRM",
    description:
      "Keep your public website connected with the information in your CRM.",
    icon: Globe2,
    visual: "website",
  },
  {
    id: "visa-ai",
    title: "AI business manager",
    description:
      "Get quick answers about leads, students and your agency workflow.",
    icon: Bot,
    visual: "ai",
  },
];

/* =====================================================
   SMALL VISUAL COMPONENTS
===================================================== */

function OrdersVisual() {
  const { t } = useLanguage();
  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-bold text-slate-400">{t("Orders")}</p>
          <p className="mt-1 text-xl font-black text-[#14532D]">{t("Today")}</p>
        </div>
        <div className="rounded-xl bg-[#DCF3E3] p-2 text-[#2F855A]">
          <ShoppingBag size={18} />
        </div>
      </div>
      <div className="mt-5 space-y-3">
        {[
          ["#1048", "Chicken Burger", "৳ 450"],
          ["#1047", "Family Combo", "৳ 980"],
          ["#1046", "Beef Pizza", "৳ 720"],
        ].map(([id, item, price]) => (
          <div key={id} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-xs font-black text-[#2F855A] shadow-sm">
              {id.slice(1, 3)}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-bold text-slate-700">{item}</p>
              <p className="mt-1 text-[10px] text-slate-400">{t("Order")} {id}</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-black text-[#14532D]">{price}</p>
              <span className="text-[9px] font-bold text-[#2F855A]">{t("Active")}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfitVisual() {
  const { t } = useLanguage();
  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-bold text-slate-400">{t("Profit per item")}</p>
          <p className="mt-1 text-xl font-black text-[#14532D]">{t("Menu insights")}</p>
        </div>
        <div className="rounded-xl bg-[#DCF3E3] p-2 text-[#2F855A]">
          <BarChart3 size={18} />
        </div>
      </div>
      <div className="mt-6 flex h-44 items-end gap-3 rounded-2xl bg-[#F0FAF3] px-5 pb-5 pt-8">
        {[42, 68, 54, 84, 62, 96].map((height, index) => (
          <div key={index} className="group flex h-full flex-1 items-end">
            <div className="w-full rounded-t-xl bg-[#94D8AB] transition duration-300 group-hover:bg-[#2F855A]" style={{ height: `${height}%` }} />
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="rounded-xl border border-green-100 bg-white p-3">
          <p className="text-[9px] text-slate-400">{t("Best seller")}</p>
          <p className="mt-1 text-xs font-black text-[#14532D]">{t("Burger")}</p>
        </div>
        <div className="rounded-xl border border-green-100 bg-white p-3">
          <p className="text-[9px] text-slate-400">{t("Margin")}</p>
          <p className="mt-1 text-xs font-black text-[#2F855A]">38%</p>
        </div>
        <div className="rounded-xl border border-green-100 bg-white p-3">
          <p className="text-[9px] text-slate-400">{t("Trend")}</p>
          <p className="mt-1 text-xs font-black text-[#2F855A]">{t("Up")}</p>
        </div>
      </div>
    </div>
  );
}

function QrVisual() {
  const { t } = useLanguage();
  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-bold text-slate-400">{t("Table ordering")}</p>
          <p className="mt-1 text-xl font-black text-[#14532D]">{t("Scan & order")}</p>
        </div>
        <div className="rounded-xl bg-[#DCF3E3] p-2 text-[#2F855A]">
          <QrCode size={18} />
        </div>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-[150px_1fr]">
        <div className="flex aspect-square items-center justify-center rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
          <div className="grid grid-cols-5 gap-1">
            {Array.from({ length: 25 }).map((_, index) => (
              <div key={index} className={`h-3 w-3 rounded-[2px] ${[0, 1, 3, 5, 7, 9, 11, 13, 15, 18, 20, 21, 23, 24].includes(index) ? "bg-[#14532D]" : "bg-[#DCF3E3]"}`} />
            ))}
          </div>
        </div>
        <div className="space-y-3">
          {[
            [t("Table"), "T-12"],
            [t("Items"), "4"],
            [t("Order"), t("Preparing")],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl bg-[#F0FAF3] p-3">
              <p className="text-[9px] font-bold text-slate-400">{label}</p>
              <p className="mt-1 text-sm font-black text-[#14532D]">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SmsVisual() {
  const { t } = useLanguage();
  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-bold text-slate-400">{t("Win-back campaign")}</p>
          <p className="mt-1 text-xl font-black text-[#14532D]">{t("Reconnect")}</p>
        </div>
        <div className="rounded-xl bg-[#DCF3E3] p-2 text-[#2F855A]">
          <MessageSquareText size={18} />
        </div>
      </div>
      <div className="mt-5 rounded-2xl border border-green-100 bg-[#F8FCF9] p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#BDE8CB] text-sm font-black text-[#14532D]">R</div>
          <div>
            <p className="text-xs font-black text-slate-700">{t("Recent customer")}</p>
            <p className="text-[10px] text-slate-400">{t("No visit in 30 days")}</p>
          </div>
        </div>
        <div className="mt-4 rounded-2xl rounded-tl-md bg-[#2F855A] p-4 text-xs leading-5 text-white">
          {t("We miss you! Come back this week and enjoy a special offer from us.")}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-[10px] font-bold text-slate-400">{t("Campaign")}</span>
          <span className="rounded-full bg-[#DCF3E3] px-2.5 py-1 text-[9px] font-black text-[#2F855A]">{t("Ready")}</span>
        </div>
      </div>
    </div>
  );
}

function AiVisual() {
  const { t } = useLanguage();
  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-bold text-slate-400">{t("AI Manager")}</p>
          <p className="mt-1 text-xl font-black text-[#14532D]">{t("Ask your business")}</p>
        </div>
        <div className="rounded-xl bg-[#DCF3E3] p-2 text-[#2F855A]">
          <Bot size={18} />
        </div>
      </div>
      <div className="mt-5 space-y-3">
        <div className="ml-auto max-w-[75%] rounded-2xl rounded-br-md bg-[#F0FAF3] p-3 text-xs font-semibold leading-5 text-slate-600">
          {t("How can I get more repeat customers?")}
        </div>
        <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-[#14532D] p-4 text-xs leading-5 text-white">
          {t("Start by reviewing customers who have not returned recently. I can help you create a win-back campaign for them.")}
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-green-100 bg-white p-3">
          <Bot size={14} className="text-[#2F855A]" />
          <span className="text-[10px] font-bold text-slate-400">{t("Business-aware AI assistant")}</span>
        </div>
      </div>
    </div>
  );
}

function StudentsVisual() {
  const { t } = useLanguage();
  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-bold text-slate-400">{t("Students")}</p>
          <p className="mt-1 text-xl font-black text-[#14532D]">{t("Application pipeline")}</p>
        </div>
        <div className="rounded-xl bg-[#DCF3E3] p-2 text-[#2F855A]">
          <Users size={18} />
        </div>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-3">
        {[
          [t("New"), "18"],
          [t("Review"), "12"],
          [t("Submitted"), "26"],
        ].map(([label, count]) => (
          <div key={label} className="rounded-2xl bg-[#F0FAF3] p-4">
            <p className="text-[9px] font-bold text-slate-400">{label}</p>
            <p className="mt-2 text-xl font-black text-[#14532D]">{count}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 space-y-2">
        {["Rahim A.", "Nusrat J.", "Sadia K."].map((name, index) => (
          <div key={name} className="flex items-center gap-3 rounded-xl border border-slate-100 p-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DCF3E3] text-[10px] font-black text-[#2F855A]">{name.charAt(0)}</div>
            <span className="flex-1 text-xs font-bold text-slate-600">{name}</span>
            <span className="text-[9px] font-bold text-[#2F855A]">
              {index === 0 ? t("Review") : index === 1 ? t("New") : t("Submitted")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LeadsVisual() {
  const { t } = useLanguage();
  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-bold text-slate-400">{t("Lead pipeline")}</p>
          <p className="mt-1 text-xl font-black text-[#14532D]">{t("Keep every lead moving")}</p>
        </div>
        <div className="rounded-xl bg-[#DCF3E3] p-2 text-[#2F855A]">
          <Zap size={18} />
        </div>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-3">
        {[
          { title: t("New"), items: ["Arif", "Maya"] },
          { title: t("Follow-up"), items: ["Nadia", "Siam"] },
          { title: t("Qualified"), items: ["Rafi"] },
        ].map((column) => (
          <div key={column.title} className="rounded-2xl bg-[#F0FAF3] p-3">
            <p className="text-[9px] font-black text-[#14532D]">{column.title}</p>
            <div className="mt-3 space-y-2">
              {column.items.map((item) => (
                <div key={item} className="rounded-xl bg-white p-2.5 shadow-sm">
                  <div className="h-2 w-12 rounded-full bg-[#BDE8CB]" />
                  <p className="mt-2 text-[9px] font-bold text-slate-500">{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FollowupVisual() {
  const { t } = useLanguage();
  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-bold text-slate-400">{t("Follow-ups")}</p>
          <p className="mt-1 text-xl font-black text-[#14532D]">{t("Never miss a next step")}</p>
        </div>
        <div className="rounded-xl bg-[#DCF3E3] p-2 text-[#2F855A]">
          <MessageSquareText size={18} />
        </div>
      </div>
      <div className="mt-6 space-y-3">
        {[
          [t("Call Rahim"), t("Today · 3:00 PM")],
          [t("Send documents"), t("Tomorrow · 10:30 AM")],
          [t("Check application"), t("Friday · 11:00 AM")],
        ].map(([task, time], index) => (
          <div key={task} className="flex items-center gap-3 rounded-2xl border border-green-100 bg-white p-3">
            <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${index === 0 ? "bg-[#2F855A] text-white" : "bg-[#DCF3E3] text-[#2F855A]"}`}>
              {index === 0 ? <Check size={15} /> : <MessageSquareText size={14} />}
            </div>
            <div className="flex-1">
              <p className="text-xs font-black text-slate-700">{task}</p>
              <p className="mt-1 text-[9px] text-slate-400">{time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WebsiteVisual() {
  const { t } = useLanguage();
  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-bold text-slate-400">{t("Website")}</p>
          <p className="mt-1 text-xl font-black text-[#14532D]">{t("Connected to your CRM")}</p>
        </div>
        <div className="rounded-xl bg-[#DCF3E3] p-2 text-[#2F855A]">
          <Globe2 size={18} />
        </div>
      </div>
      <div className="mt-5 overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm">
        <div className="flex items-center gap-1 border-b border-slate-100 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-slate-200" />
          <span className="h-2 w-2 rounded-full bg-slate-200" />
          <span className="h-2 w-2 rounded-full bg-slate-200" />
          <div className="ml-3 h-5 flex-1 rounded-md bg-slate-50" />
        </div>
        <div className="bg-[#F0FAF3] p-5">
          <div className="h-2 w-24 rounded-full bg-[#2F855A]" />
          <div className="mt-3 h-2 w-40 rounded-full bg-[#BDE8CB]" />
          <div className="mt-5 grid grid-cols-3 gap-2">
            <div className="h-16 rounded-xl bg-white" />
            <div className="h-16 rounded-xl bg-white" />
            <div className="h-16 rounded-xl bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

function BrowserVisual({ visual }) {
  const visuals = {
    orders: <OrdersVisual />,
    profit: <ProfitVisual />,
    qr: <QrVisual />,
    sms: <SmsVisual />,
    ai: <AiVisual />,
    students: <StudentsVisual />,
    leads: <LeadsVisual />,
    followup: <FollowupVisual />,
    website: <WebsiteVisual />,
  };

  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-green-100 bg-white shadow-[0_25px_70px_rgba(20,83,45,0.14)]">
      <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <div className="ml-3 flex h-7 flex-1 items-center rounded-lg border border-slate-200 bg-white px-3">
          <span className="text-[9px] text-slate-400">app.beeznest.com/dashboard</span>
        </div>
      </div>
      <div key={visual} className="min-h-[390px] animate-[fadeIn_.35s_ease-out]">
        {visuals[visual]}
      </div>
    </div>
  );
}

/* =====================================================
   FEATURE SHOWCASE
===================================================== */

export default function FeatureShowcase({
  activeBusiness = "restaurant",
  setActiveBusiness,
}) {
  const { t } = useLanguage();
  const [activeFeature, setActiveFeature] = useState(0);
  const [paused, setPaused] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(0);

  const isRestaurant = activeBusiness === "restaurant";
  const features = isRestaurant ? restaurantFeatures : visaFeatures;

  useEffect(() => {
    setActiveFeature(0);
    setMobileOpen(0);
  }, [activeBusiness]);

  useEffect(() => {
    if (paused) return undefined;
    const timer = setInterval(() => {
      setActiveFeature((current) => (current + 1) % features.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [paused, features.length]);

  const selectFeature = (index) => {
    setActiveFeature(index);
    setMobileOpen(index);
    setPaused(true);
  };

  const selectBusiness = (type) => {
    if (setActiveBusiness) setActiveBusiness(type);
    setActiveFeature(0);
    setMobileOpen(0);
    setPaused(true);
  };

  const currentFeature = features[activeFeature] || features[0];

  return (
    <section id="feature-showcase" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-[#DCF3E3] opacity-60 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* HEADING */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#BDE8CB] bg-[#F0FAF3] px-4 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#2F855A]">
            <Zap size={13} />
            {t("Feature showcase")}
          </div>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-[#14532D] sm:text-4xl lg:text-5xl">
            {t("See what BeezNest can")}
            <span className="text-[#2F855A]"> {t("do for you.")}</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            {t("Choose your business and explore the tools built around the way you work.")}
          </p>
        </div>

        {/* BUSINESS TABS */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full border border-green-100 bg-[#F0FAF3] p-1.5 shadow-sm">
            <button
              type="button"
              onClick={() => selectBusiness("restaurant")}
              className={`rounded-full px-5 py-2.5 text-sm font-extrabold transition duration-300 sm:px-7 ${isRestaurant ? "bg-[#14532D] text-white shadow-md" : "text-slate-500 hover:text-[#14532D]"}`}
            >
              {t("Restaurant")}
            </button>
            <button
              type="button"
              onClick={() => selectBusiness("visa-agency")}
              className={`rounded-full px-5 py-2.5 text-sm font-extrabold transition duration-300 sm:px-7 ${!isRestaurant ? "bg-[#14532D] text-white shadow-md" : "text-slate-500 hover:text-[#14532D]"}`}
            >
              {t("Visa Agency")}
            </button>
          </div>
        </div>

        {/* DESKTOP SHOWCASE */}
        <div className="mt-12 hidden overflow-hidden rounded-[2rem] border border-green-100 bg-[#F8FCF9] lg:block" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="grid lg:grid-cols-[0.85fr_1.4fr]">
            <div className="border-r border-green-100 p-7 xl:p-9">
              <div className="mb-7">
                <p className="text-xs font-black uppercase tracking-[0.12em] text-[#2F855A]">
                  {isRestaurant ? t("Restaurant tools") : t("Visa agency tools")}
                </p>
                <h3 className="mt-2 text-2xl font-black tracking-tight text-[#14532D]">
                  {t("Built around your workflow")}
                </h3>
              </div>

              <div className="space-y-2">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  const active = index === activeFeature;
                  return (
                    <button
                      key={feature.id}
                      type="button"
                      onClick={() => selectFeature(index)}
                      className={`group relative w-full rounded-2xl border p-4 text-left transition-all duration-300 ${active ? "border-[#BDE8CB] bg-white shadow-sm" : "border-transparent bg-transparent hover:border-green-100 hover:bg-white/70"}`}
                    >
                      <div className={`absolute bottom-3 left-0 top-3 w-1 rounded-full transition ${active ? "bg-[#2F855A]" : "bg-transparent"}`} />
                      <div className="flex items-start gap-3">
                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition ${active ? "bg-[#DCF3E3] text-[#2F855A]" : "bg-white text-slate-400 shadow-sm"}`}>
                          <Icon size={17} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <h4 className={`text-sm font-black ${active ? "text-[#14532D]" : "text-slate-700"}`}>
                              {t(feature.title)}
                            </h4>
                            {active && <Check size={15} className="shrink-0 text-[#2F855A]" />}
                          </div>
                          <p className="mt-1.5 text-xs leading-5 text-slate-500">{t(feature.description)}</p>
                        </div>
                      </div>
                      <div className={`mt-4 h-1 overflow-hidden rounded-full ${active ? "bg-[#E4F4E9]" : "bg-transparent"}`}>
                        {active && !paused && <div className="h-full w-full origin-left animate-[progress_6s_linear] rounded-full bg-[#2F855A]" />}
                        {active && paused && <div className="h-full w-[42%] rounded-full bg-[#2F855A]" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-7 flex items-center gap-2 text-[10px] font-bold text-slate-400">
                <span className={`h-2 w-2 rounded-full ${paused ? "bg-slate-300" : "bg-[#2F855A]"}`} />
                {paused ? t("Paused — click a feature to continue exploring") : t("Features change automatically")}
              </div>
            </div>

            <div className="flex min-h-[600px] items-center justify-center bg-[#F0FAF3] p-7 xl:p-10">
              <div className="w-full max-w-2xl">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.12em] text-[#2F855A]">
                      {t("Live product preview")}
                    </p>
                    <p className="mt-1 text-sm font-bold text-slate-500">{t(currentFeature.title)}</p>
                  </div>
                  <div className="rounded-full bg-white px-3 py-1.5 text-[9px] font-black text-[#2F855A] shadow-sm">
                    {activeFeature + 1} / {features.length}
                  </div>
                </div>

                <div key={`${activeBusiness}-${currentFeature.id}`} className="animate-[fadeIn_.35s_ease-out]">
                  <BrowserVisual visual={currentFeature.visual} />
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-green-100 bg-white p-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#2F855A]" />
                      <span className="text-[9px] font-black text-slate-600">{t("Simple")}</span>
                    </div>
                    <p className="mt-1 text-[9px] text-slate-400">{t("Easy to understand")}</p>
                  </div>
                  <div className="rounded-xl border border-green-100 bg-white p-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#94D8AB]" />
                      <span className="text-[9px] font-black text-slate-600">{t("Connected")}</span>
                    </div>
                    <p className="mt-1 text-[9px] text-slate-400">{t("Works with your CRM")}</p>
                  </div>
                  <div className="hidden rounded-xl border border-green-100 bg-white p-3 sm:block">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#BDE8CB]" />
                      <span className="text-[9px] font-black text-slate-600">{t("Business-ready")}</span>
                    </div>
                    <p className="mt-1 text-[9px] text-slate-400">{t("Built for daily work")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE ACCORDION */}
        <div className="mt-10 space-y-3 lg:hidden">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const open = mobileOpen === index;
            return (
              <div key={feature.id} className={`overflow-hidden rounded-2xl border transition ${open ? "border-[#BDE8CB] bg-[#F8FCF9]" : "border-green-100 bg-white"}`}>
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(open ? -1 : index);
                    selectFeature(index);
                  }}
                  className="flex w-full items-center gap-3 p-4 text-left"
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${open ? "bg-[#DCF3E3] text-[#2F855A]" : "bg-slate-50 text-slate-400"}`}>
                    <Icon size={17} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-black text-[#14532D]">{t(feature.title)}</h3>
                    {!open && <p className="mt-1 truncate text-xs text-slate-400">{t(feature.description)}</p>}
                  </div>
                  <ChevronDown size={18} className={`shrink-0 text-slate-400 transition ${open ? "rotate-180 text-[#2F855A]" : ""}`} />
                </button>
                {open && (
                  <div className="px-4 pb-5">
                    <p className="mb-4 pl-[52px] text-xs leading-5 text-slate-500">{t(feature.description)}</p>
                    <BrowserVisual visual={feature.visual} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-sm font-semibold leading-6 text-slate-500">
            {t("Everything is designed to keep your business information in one connected place.")}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes progress { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </section>
  );
}