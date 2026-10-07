import { ArrowUpRight, CheckCircle2, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const pilotCards = [
  {
    icon: CheckCircle2,
    title: "Built from real business problems",
    description:
      "BeezNest is being shaped around the everyday challenges of restaurants and agencies in Bangladesh.",
  },
  {
    icon: Users,
    title: "Help us build it better",
    description:
      "We are working with early businesses to understand what makes managing sales, customers and websites easier.",
  },
  {
    icon: ArrowUpRight,
    title: "Join the early community",
    description:
      "Be part of the pilot and help influence the features that matter most to growing businesses.",
  },
];

export default function Testimonials() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-20 sm:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#DCF3E3]/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#F0FAF3] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-[#BDE8CB] bg-[#F0FAF3] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#2F855A]">
            {t("Built with growing businesses")}
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#14532D] sm:text-4xl lg:text-5xl">
            {t("Built for the businesses we want to serve.")}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            {t(
              "We are still building our customer community. Instead of invented testimonials, we are sharing what BeezNest is being built around."
            )}
          </p>
        </div>

        {/* Pilot cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pilotCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#BDE8CB] hover:shadow-[0_18px_50px_rgba(47,133,90,0.12)]"
              >
                {/* Soft hover glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#DCF3E3] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DCF3E3] text-[#2F855A] transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Label */}
                  <div className="mt-6 inline-flex rounded-full bg-[#F0FAF3] px-3 py-1 text-xs font-semibold text-[#2F855A]">
                    {t("Early-stage community")}
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-xl font-bold leading-tight text-slate-900">
                    {t(card.title)}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {t(card.description)}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Founder / pilot CTA */}
        <div className="relative mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-[#14532D] to-[#2F855A] px-6 py-10 text-center shadow-[0_20px_60px_rgba(20,83,45,0.18)] sm:px-10 sm:py-12">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full border border-white/10" />

          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#BDE8CB]">
              <Users className="h-6 w-6" />
            </div>

            <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              {t("Want to help shape BeezNest?")}
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
              {t(
                "Start with the tools you need today and help us make the product better for businesses like yours."
              )}
            </p>

            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#14532D] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F0FAF3] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/30"
            >
              {t("Join the pilot")}
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}