import {
  ArrowRight,
  Bot,
  Check,
  Globe2,
  LayoutDashboard,
  Menu,
  Settings2,
  Sparkles,
  Store,
  Users,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function HexagonBadge({ number }) {
  return (
    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
      <div className="absolute inset-0 bg-[#94D8AB] [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0_50%)] shadow-sm" />
      <span className="relative z-10 text-sm font-black text-[#14532D]">
        {number}
      </span>
    </div>
  );
}

/* -----------------------------------------
   STEP 01 VISUAL
----------------------------------------- */
function SignupVisual() {
  const { t } = useLanguage();
  return (
    <div className="relative overflow-hidden rounded-2xl border border-green-100 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[8px] font-semibold text-slate-400">BeezNest</p>
          <p className="mt-0.5 text-xs font-black text-[#14532D]">
            {t("Create your account")}
          </p>
        </div>
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#DCF3E3] text-[#2F855A]">
          <Sparkles size={13} />
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div>
          <div className="mb-1 h-1.5 w-14 rounded-full bg-slate-100" />
          <div className="h-8 rounded-lg border border-green-100 bg-slate-50" />
        </div>
        <div>
          <div className="mb-1 h-1.5 w-12 rounded-full bg-slate-100" />
          <div className="h-8 rounded-lg border border-green-100 bg-slate-50" />
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="rounded-xl border border-green-200 bg-[#F0FAF3] p-2.5">
          <Store size={14} className="text-[#2F855A]" />
          <p className="mt-2 text-[8px] font-bold text-[#14532D]">
            {t("Restaurant")}
          </p>
        </div>
        <div className="rounded-xl border border-green-100 bg-white p-2.5">
          <Globe2 size={14} className="text-slate-400" />
          <p className="mt-2 text-[8px] font-bold text-slate-500">
            {t("Visa Agency")}
          </p>
        </div>
      </div>

      <div className="mt-3 h-8 rounded-xl bg-[#2F855A] text-center text-[9px] font-bold leading-8 text-white">
        {t("Continue")}
      </div>
    </div>
  );
}

/* -----------------------------------------
   STEP 02 VISUAL
----------------------------------------- */
function BusinessVisual() {
  const { t } = useLanguage();
  return (
    <div className="relative overflow-hidden rounded-2xl border border-green-100 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#DCF3E3] text-[#2F855A]">
          <Store size={14} />
        </div>
        <div>
          <p className="text-[8px] text-slate-400">{t("Step 2")}</p>
          <p className="text-xs font-black text-[#14532D]">
            {t("Your business")}
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {[t("Business name"), t("Location"), t("Business details")].map(
          (label) => (
            <div
              key={label}
              className="rounded-xl border border-green-100 bg-[#F8FCF9] p-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-bold text-slate-500">
                  {label}
                </span>
                <Check size={11} className="text-[#2F855A]" />
              </div>
              <div className="mt-2 h-2 w-28 rounded-full bg-[#BDE8CB]" />
            </div>
          )
        )}
      </div>
    </div>
  );
}

/* -----------------------------------------
   STEP 03 VISUAL
----------------------------------------- */
function SetupVisual() {
  const { t } = useLanguage();
  return (
    <div className="relative overflow-hidden rounded-2xl border border-green-100 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[8px] text-slate-400">{t("Setup")}</p>
          <p className="text-xs font-black text-[#14532D]">
            {t("Your workspace")}
          </p>
        </div>
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#DCF3E3] text-[#2F855A]">
          <LayoutDashboard size={13} />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-[#F0FAF3] p-3">
          <Menu size={14} className="text-[#2F855A]" />
          <p className="mt-2 text-[8px] font-bold text-[#14532D]">
            {t("Menu")}
          </p>
          <div className="mt-2 h-1.5 w-12 rounded-full bg-[#BDE8CB]" />
          <div className="mt-1.5 h-1.5 w-16 rounded-full bg-[#DCF3E3]" />
        </div>
        <div className="rounded-xl bg-[#F0FAF3] p-3">
          <Users size={14} className="text-[#2F855A]" />
          <p className="mt-2 text-[8px] font-bold text-[#14532D]">
            {t("Pipeline")}
          </p>
          <div className="mt-2 flex gap-1">
            <span className="h-5 flex-1 rounded bg-[#BDE8CB]" />
            <span className="h-7 flex-1 rounded bg-[#94D8AB]" />
            <span className="h-4 flex-1 rounded bg-[#DCF3E3]" />
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between rounded-xl border border-green-100 p-3">
        <div>
          <p className="text-[8px] font-bold text-slate-500">
            {t("Setup progress")}
          </p>
          <p className="mt-1 text-[10px] font-black text-[#14532D]">
            {t("80% complete")}
          </p>
        </div>
        <div className="h-8 w-8 rounded-full border-4 border-[#94D8AB] border-r-slate-100" />
      </div>
    </div>
  );
}

/* -----------------------------------------
   STEP 04 VISUAL
----------------------------------------- */
function LaunchVisual() {
  const { t } = useLanguage();
  return (
    <div className="relative overflow-hidden rounded-2xl border border-green-100 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[8px] text-slate-400">
            {t("Your business is ready")}
          </p>
          <p className="text-xs font-black text-[#14532D]">
            {t("BeezNest dashboard")}
          </p>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-[#DCF3E3] px-2 py-1 text-[7px] font-bold text-[#2F855A]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2F855A]" />
          {t("Live")}
        </div>
      </div>

      <div className="mt-4 rounded-xl bg-[#F0FAF3] p-3">
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { label: t("Orders"), value: "342" },
            { label: t("Leads"), value: "128" },
            { label: t("Growth"), value: "+12%" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg bg-white p-2">
              <p className="text-[7px] text-slate-400">{stat.label}</p>
              <p className="mt-1 text-xs font-black text-[#14532D]">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-2 flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2F855A] text-white">
            <Bot size={16} />
          </div>
          <div>
            <p className="text-[8px] font-black text-[#14532D]">
              {t("AI Manager")}
            </p>
            <p className="text-[7px] text-slate-400">
              {t("Ask me about your business")}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-xl border border-green-100 bg-white p-2.5">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#DCF3E3] text-[#2F855A]">
          <Globe2 size={13} />
        </div>
        <div className="flex-1">
          <div className="h-1.5 w-20 rounded-full bg-[#BDE8CB]" />
          <div className="mt-1.5 h-1.5 w-12 rounded-full bg-slate-100" />
        </div>
        <ArrowRight size={13} className="text-[#2F855A]" />
      </div>
    </div>
  );
}

function StepVisual({ type }) {
  if (type === "signup") return <SignupVisual />;
  if (type === "business") return <BusinessVisual />;
  if (type === "setup") return <SetupVisual />;
  return <LaunchVisual />;
}

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      title: t("Sign up"),
      description: t(
        "Create your account and choose Restaurant or Student Visa Agency."
      ),
      icon: Sparkles,
      visual: "signup",
    },
    {
      number: "02",
      title: t("Tell us about your business"),
      description: t(
        "Add the basic information BeezNest needs to understand your business."
      ),
      icon: Settings2,
      visual: "business",
    },
    {
      number: "03",
      title: t("Set up your menu or pipeline"),
      description: t(
        "Add your menu, services, applicants, or pipeline in a few simple steps."
      ),
      icon: Menu,
      visual: "setup",
    },
    {
      number: "04",
      title: t("Get your website and AI manager"),
      description: t(
        "Launch your website and start asking your AI manager for business help."
      ),
      icon: Bot,
      visual: "launch",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#F8FCF9] py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#DCF3E3] opacity-70 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#BDE8CB] bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#2F855A]">
            <Sparkles size={13} />
            {t("How it works")}
          </div>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-[#14532D] sm:text-4xl lg:text-5xl">
            {t("Get started in four")}
            <span className="block text-[#2F855A]">
              {t("simple steps.")}
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            {t(
              "From your first sign-up to a connected business workspace, BeezNest keeps the setup simple."
            )}
          </p>
        </div>

        {/* STEPS */}
        <div className="relative mt-14 lg:mt-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[28px] hidden border-t-2 border-dashed border-[#BDE8CB] lg:block"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-10 left-[27px] top-10 border-l-2 border-dashed border-[#BDE8CB] md:left-[29px] lg:hidden"
          />

          <div className="relative grid gap-10 lg:grid-cols-4 lg:gap-5">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.number}
                  className="group relative rounded-[1.75rem] border border-green-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#BDE8CB] hover:shadow-[0_20px_45px_rgba(47,133,90,0.10)] sm:p-6"
                >
                  <div className="relative z-10 flex items-center gap-3 bg-white">
                    <div className="rounded-2xl bg-white p-1">
                      <HexagonBadge number={step.number} />
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F0FAF3] text-[#2F855A]">
                      <Icon size={17} />
                    </div>
                  </div>

                  <div className="mt-5">
                    <h3 className="text-lg font-black tracking-tight text-[#14532D]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    <StepVisual type={step.visual} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* bottom reassurance */}
        <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DCF3E3] text-[#2F855A]">
            <Check size={15} strokeWidth={3} />
          </div>
          <p className="text-sm font-bold text-slate-600">
            {t("No complicated setup. Just follow the steps and start building.")}
          </p>
        </div>
      </div>
    </section>
  );
}