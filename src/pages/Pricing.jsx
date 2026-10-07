import { useMemo, useState } from "react";
import { Check, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import SectionHeading from "../components/SectionHeading";
import { useLanguage } from "../context/LanguageContext";
import {
  restaurantPlans,
  visaPlans,
} from "../data/plans";

/* =========================================================
   Animated price
========================================================= */

function AnimatedPrice({ value }) {
  return (
    <span className="inline-block tabular-nums">
      ৳{Number(value).toLocaleString("en-BD")}
    </span>
  );
}

/* =========================================================
   Feature check
========================================================= */

function FeatureCheck({ included }) {
  return (
    <span
      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
        included
          ? "bg-[#DCF3E3] text-[#2F855A]"
          : "bg-slate-100 text-slate-300"
      }`}
      aria-label={included ? "Included" : "Not included"}
    >
      {included ? (
        <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
      ) : (
        <span className="text-xs">—</span>
      )}
    </span>
  );
}

/* =========================================================
   Expand inherited features

   Example:
   Growth:
   "Everything in Starter"
   +
   "Advanced CRM"

   becomes all Starter features + Advanced CRM.
========================================================= */

function getExpandedFeatures(plan, allPlans) {
  const visited = new Set();

  function expand(currentPlan) {
    if (!currentPlan || visited.has(currentPlan.id)) {
      return [];
    }

    visited.add(currentPlan.id);

    const result = [];

    currentPlan.features.forEach((feature) => {
      if (feature === "Everything in Starter") {
        const starter = allPlans.find((item) => item.id === "starter");

        if (starter) {
          result.push(...expand(starter));
        }

        return;
      }

      if (feature === "Everything in Growth") {
        const growth = allPlans.find((item) => item.id === "growth");

        if (growth) {
          result.push(...expand(growth));
        }

        return;
      }

      result.push(feature);
    });

    return result;
  }

  return [...new Set(expand(plan))];
}

/* =========================================================
   Pricing card
========================================================= */

function PricingCard({
  plan,
  billingCycle,
  businessType,
  onStartTrial,
}) {
  const { t } = useLanguage();

  const price =
    billingCycle === "monthly" ? plan.monthly : plan.yearly;

  const period =
    billingCycle === "monthly"
      ? t("/month")
      : t("/year");

  return (
    <div
      className={`relative flex h-full flex-col rounded-3xl border p-6 transition-all duration-300 sm:p-7 ${
        plan.popular
          ? "border-[#6BC48C] bg-white shadow-[0_20px_60px_rgba(47,133,90,0.16)] lg:-translate-y-2"
          : "border-slate-200 bg-white shadow-sm hover:-translate-y-1 hover:border-[#BDE8CB] hover:shadow-[0_16px_45px_rgba(47,133,90,0.10)]"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-to-r from-[#6BC48C] to-[#2F855A] px-4 py-1.5 text-xs font-bold text-white shadow-lg">
          <Sparkles className="h-3.5 w-3.5" />
          {t("Most popular")}
        </div>
      )}

      <div>
        <h3 className="text-xl font-bold text-[#14532D]">
          {t(plan.name)}
        </h3>

        <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-600">
          {t(plan.description)}
        </p>
      </div>

      <div className="mt-6">
        <div className="flex items-end gap-1">
          <span className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            <AnimatedPrice value={price} />
          </span>

          <span className="mb-1 text-sm text-slate-500">
            {period}
          </span>
        </div>

        {billingCycle === "yearly" && (
          <p className="mt-2 text-xs font-medium text-[#2F855A]">
            {t("Billed yearly · save more")}
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={() => onStartTrial(plan)}
        className={`mt-6 flex min-h-12 w-full items-center justify-center rounded-full px-5 text-sm font-bold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#DCF3E3] ${
          plan.popular
            ? "bg-gradient-to-r from-[#6BC48C] to-[#2F855A] text-white shadow-md hover:-translate-y-0.5 hover:shadow-lg"
            : "border border-[#6BC48C] bg-white text-[#2F855A] hover:bg-[#F0FAF3]"
        }`}
      >
        {t("Start free trial")}
      </button>

      <div className="my-6 h-px bg-slate-100" />

      <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
        {t("Includes")}
      </p>

      <ul className="space-y-3">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm leading-6 text-slate-700"
          >
            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DCF3E3] text-[#2F855A]">
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>

            <span>{t(feature)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* =========================================================
   Main pricing page
========================================================= */

export default function Pricing() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const [businessType, setBusinessType] = useState("restaurant");
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [comparisonOpen, setComparisonOpen] = useState(true);

  const plans =
    businessType === "restaurant"
      ? restaurantPlans
      : visaPlans;

  /* -------------------------------------------------------
     Build comparison features directly from plans.js
  ------------------------------------------------------- */

  const comparisonRows = useMemo(() => {
    const expandedByPlan = plans.map((plan) => ({
      ...plan,
      expandedFeatures: getExpandedFeatures(plan, plans),
    }));

    const featureSet = new Set();

    expandedByPlan.forEach((plan) => {
      plan.expandedFeatures.forEach((feature) => {
        featureSet.add(feature);
      });
    });

    return Array.from(featureSet).map((feature) => ({
      name: feature,
      starter:
        expandedByPlan
          .find((plan) => plan.id === "starter")
          ?.expandedFeatures.includes(feature) ?? false,
      growth:
        expandedByPlan
          .find((plan) => plan.id === "growth")
          ?.expandedFeatures.includes(feature) ?? false,
      pro:
        expandedByPlan
          .find((plan) => plan.id === "pro")
          ?.expandedFeatures.includes(feature) ?? false,
    }));
  }, [plans]);

  /* -------------------------------------------------------
     Start trial
  ------------------------------------------------------- */

  const handleStartTrial = (plan) => {
    localStorage.setItem(
      "biznest_business_type",
      businessType
    );

    localStorage.setItem(
      "biznest_selected_plan",
      plan.id
    );

    localStorage.setItem(
      "biznest_billing_cycle",
      billingCycle
    );

    navigate("/signup");
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#F0FAF3]">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#BDE8CB]/40 blur-3xl" />

        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#DCF3E3]/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-20 lg:pt-20">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-[#2F855A] transition hover:text-[#14532D]"
          >
            ← {t("Back to home")}
          </button>

          <SectionHeading
            eyebrow={t("Simple pricing")}
            title={t("Plans that grow with your business.")}
            description={t(
              "Choose the tools that fit your business today. You can change your plan as your business grows."
            )}
          />

          {/* =================================================
              Business type toggle
          ================================================= */}

          <div className="mt-10 flex justify-center">
            <div className="inline-flex rounded-full border border-[#BDE8CB] bg-white p-1.5 shadow-sm">
              <button
                type="button"
                onClick={() => setBusinessType("restaurant")}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                  businessType === "restaurant"
                    ? "bg-[#14532D] text-white shadow-sm"
                    : "text-slate-600 hover:bg-[#F0FAF3]"
                }`}
              >
                {t("Restaurant")}
              </button>

              <button
                type="button"
                onClick={() => setBusinessType("visa-agency")}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                  businessType === "visa-agency"
                    ? "bg-[#14532D] text-white shadow-sm"
                    : "text-slate-600 hover:bg-[#F0FAF3]"
                }`}
              >
                {t("Visa agency")}
              </button>
            </div>
          </div>

          {/* =================================================
              Billing toggle
          ================================================= */}

          <div className="mt-5 flex justify-center">
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white p-1.5 shadow-sm">
              <button
                type="button"
                onClick={() => setBillingCycle("monthly")}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                  billingCycle === "monthly"
                    ? "bg-[#DCF3E3] text-[#14532D]"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {t("Monthly")}
              </button>

              <button
                type="button"
                onClick={() => setBillingCycle("yearly")}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                  billingCycle === "yearly"
                    ? "bg-[#DCF3E3] text-[#14532D]"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {t("Yearly")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRICING CARDS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              billingCycle={billingCycle}
              businessType={businessType}
              onStartTrial={handleStartTrial}
            />
          ))}
        </div>
      </section>

      {/* =====================================================
          COMPARISON
      ===================================================== */}

      <section className="bg-[#F8FCF9] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#2F855A]">
                {t("Compare plans")}
              </p>

              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#14532D] sm:text-3xl">
                {businessType === "restaurant"
                  ? t("Restaurant plan comparison")
                  : t("Visa agency plan comparison")}
              </h2>
            </div>

            <button
              type="button"
              onClick={() =>
                setComparisonOpen((value) => !value)
              }
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#BDE8CB] bg-white text-[#2F855A] transition hover:bg-[#F0FAF3]"
              aria-label={t("Toggle comparison")}
            >
              {comparisonOpen ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>
          </div>

          {comparisonOpen && (
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-[#F0FAF3]">
                      <th className="px-5 py-5 text-left text-sm font-bold text-[#14532D]">
                        {t("Features")}
                      </th>

                      {plans.map((plan) => (
                        <th
                          key={plan.id}
                          className={`px-5 py-5 text-center text-sm font-bold ${
                            plan.popular
                              ? "text-[#2F855A]"
                              : "text-slate-700"
                          }`}
                        >
                          {t(plan.name)}

                          {plan.popular && (
                            <span className="mt-1 block text-[10px] uppercase tracking-wider text-[#6BC48C]">
                              {t("Most popular")}
                            </span>
                          )}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {comparisonRows.map((row, index) => (
                      <tr
                        key={row.name}
                        className={
                          index % 2 === 0
                            ? "bg-white"
                            : "bg-slate-50/50"
                        }
                      >
                        <td className="border-b border-slate-100 px-5 py-4 text-sm font-medium text-slate-700">
                          {t(row.name)}
                        </td>

                        <td className="border-b border-slate-100 px-5 py-4">
                          <div className="flex justify-center">
                            <FeatureCheck
                              included={row.starter}
                            />
                          </div>
                        </td>

                        <td className="border-b border-slate-100 px-5 py-4">
                          <div className="flex justify-center">
                            <FeatureCheck
                              included={row.growth}
                            />
                          </div>
                        </td>

                        <td className="border-b border-slate-100 px-5 py-4">
                          <div className="flex justify-center">
                            <FeatureCheck
                              included={row.pro}
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          ADD-ONS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#BDE8CB] bg-[#F0FAF3] p-7 sm:p-9 lg:p-10">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#2F855A]">
              {t("Add-ons")}
            </p>

            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#14532D] sm:text-3xl">
              {t("Expand when your business needs more")}
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              {t(
                "Start with the plan that fits your needs and add more capabilities as your business grows."
              )}
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Additional SMS credits",
              "Custom domain",
              "Advanced AI usage",
              "Extra website customization",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#BDE8CB] bg-white p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DCF3E3] text-[#2F855A]">
                  <Sparkles className="h-5 w-5" />
                </div>

                <p className="mt-4 text-sm font-bold text-slate-800">
                  {t(item)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          HELP CTA
      ===================================================== */}

      <section className="px-5 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#DCF3E3] to-[#6BC48C] px-6 py-12 text-center sm:px-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#14532D] sm:text-4xl">
            {t("Not sure which plan is right for you?")}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#14532D]/80 sm:text-base">
            {t(
              "Start with the plan that matches your current needs. You can change your plan as your business grows."
            )}
          </p>

          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#14532D] px-7 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#0f3f22] focus:outline-none focus:ring-4 focus:ring-white/50"
          >
            {t("Start free trial")}
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}