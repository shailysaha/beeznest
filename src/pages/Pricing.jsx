import { useMemo, useState } from "react";
import { Check, HelpCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeading from "../components/SectionHeading";

import {
  restaurantPlans,
  visaPlans,
  comparisonFeatures,
} from "../data/plans";

export default function Pricing() {
  const navigate = useNavigate();

  const [businessType, setBusinessType] =
    useState("restaurant");

  const [billingCycle, setBillingCycle] =
    useState("monthly");

  const plans = useMemo(() => {
    return businessType === "restaurant"
      ? restaurantPlans
      : visaPlans;
  }, [businessType]);

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
    <div className="min-h-screen bg-white">

      <Navbar />

      {/* Header */}
      <section className="bg-[#F0FAF3] px-5 py-20 lg:px-8 lg:py-24">

        <SectionHeading
          eyebrow="Pricing"
          title="Simple plans for growing businesses"
          description="Choose your business type and find the plan that fits your current stage."
        />

        {/* Business toggle */}
        <div className="mt-10 flex justify-center">

          <div className="inline-flex rounded-2xl border border-green-100 bg-white p-1 shadow-sm">

            <button
              onClick={() =>
                setBusinessType("restaurant")
              }
              className={`rounded-xl px-5 py-3 text-sm font-bold ${
                businessType === "restaurant"
                  ? "bg-[#94D8AB] text-[#14532D]"
                  : "text-slate-500"
              }`}
            >
              Restaurant
            </button>

            <button
              onClick={() =>
                setBusinessType("visa-agency")
              }
              className={`rounded-xl px-5 py-3 text-sm font-bold ${
                businessType === "visa-agency"
                  ? "bg-[#94D8AB] text-[#14532D]"
                  : "text-slate-500"
              }`}
            >
              Visa Agency
            </button>

          </div>

        </div>

        {/* Billing toggle */}
        <div className="mt-5 flex justify-center">

          <div className="inline-flex items-center gap-2 rounded-full bg-white p-1 shadow-sm">

            <button
              onClick={() => setBillingCycle("monthly")}
              className={`rounded-full px-5 py-2 text-sm font-semibold ${
                billingCycle === "monthly"
                  ? "bg-[#14532D] text-white"
                  : "text-slate-500"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBillingCycle("yearly")}
              className={`rounded-full px-5 py-2 text-sm font-semibold ${
                billingCycle === "yearly"
                  ? "bg-[#14532D] text-white"
                  : "text-slate-500"
              }`}
            >
              Yearly
            </button>

          </div>

        </div>

      </section>

      {/* Pricing cards + comparison */}
      <section className="px-5 py-16 lg:px-8 lg:py-20">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-6 pt-3 lg:grid-cols-3">

            {plans.map((plan) => {

              const displayedPrice =
                billingCycle === "monthly"
                  ? plan.monthly
                  : plan.yearly;

              return (
                <div
                  key={plan.id}
                  className={`
                    relative
                    flex
                    flex-col
                    rounded-2xl
                    border
                    bg-white
                    p-6
                    shadow-sm
                    transition
                    hover:-translate-y-1
                    hover:shadow-lg
                    ${
                      plan.popular
                        ? "border-[#94D8AB] ring-2 ring-[#DCF3E3]"
                        : "border-slate-200"
                    }
                  `}
                >

                  {plan.popular && (
                    <div
                      className="
                        absolute
                        -top-3
                        left-1/2
                        -translate-x-1/2
                        rounded-full
                        bg-[#14532D]
                        px-4
                        py-1
                        text-xs
                        font-bold
                        text-white
                      "
                    >
                      Recommended
                    </div>
                  )}

                  <p className="text-sm font-bold uppercase tracking-wider text-[#2F855A]">
                    {plan.name}
                  </p>

                  <h3 className="mt-3 text-3xl font-black text-[#14532D]">
                    {plan.name}
                  </h3>

                  <p className="mt-3 min-h-12 text-sm leading-6 text-slate-500">
                    {plan.description}
                  </p>

                  <div className="mt-7">

                    <motion.span
                      key={`${plan.id}-${billingCycle}-${displayedPrice}`}
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.25,
                        ease: "easeOut",
                      }}
                      className="inline-block text-4xl font-black text-[#14532D]"
                    >
                      ৳{displayedPrice.toLocaleString()}
                    </motion.span>

                    <span className="ml-1 text-sm text-slate-500">
                      {billingCycle === "monthly"
                        ? "/month"
                        : "/year"}
                    </span>

                  </div>

                  <button
                    type="button"
                    onClick={() => handleStartTrial(plan)}
                    className={`mt-7 block w-full rounded-xl px-6 py-3.5 text-center font-bold transition hover:-translate-y-0.5 ${
                      plan.popular
                        ? "bg-[#94D8AB] text-[#14532D] hover:bg-[#6BC48C]"
                        : "border border-[#94D8AB] text-[#14532D] hover:bg-[#F0FAF3]"
                    }`}
                  >
                    Start free trial
                  </button>

                  <div className="mt-8 border-t border-slate-200 pt-7">

                    <p className="text-sm font-bold text-[#14532D]">
                      Includes:
                    </p>

                    <ul className="mt-4 space-y-3">

                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex gap-3 text-sm text-slate-600"
                        >
                          <Check
                            size={17}
                            className="mt-0.5 shrink-0 text-[#2F855A]"
                          />

                          {feature}
                        </li>
                      ))}

                    </ul>

                  </div>

                </div>
              );
            })}

          </div>

          {/* Comparison table */}
          <section className="mt-16">

            <div className="mb-6 text-center">

              <h2 className="text-2xl font-bold text-[#14532D]">
                Compare plans
              </h2>

              <p className="mt-2 text-slate-600">
                Choose the plan that fits your business.
              </p>

            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">

              <table className="w-full min-w-[700px] border-collapse">

                <thead>

                  <tr className="border-b border-slate-200 bg-[#F7FCF8]">

                    <th className="px-5 py-4 text-left text-sm font-bold text-[#14532D]">
                      Features
                    </th>

                    <th className="px-5 py-4 text-center text-sm font-bold text-[#14532D]">
                      Starter
                    </th>

                    <th className="px-5 py-4 text-center text-sm font-bold text-[#14532D]">
                      Growth
                    </th>

                    <th className="px-5 py-4 text-center text-sm font-bold text-[#14532D]">
                      Pro
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {comparisonFeatures.map((feature) => (
                    <tr
                      key={feature.name}
                      className="border-b border-slate-100 last:border-0"
                    >

                      <td className="px-5 py-4 text-sm text-slate-700">
                        {feature.name}
                      </td>

                      <td className="px-5 py-4 text-center text-sm text-slate-500">
                        {feature.starter ? "✓" : "—"}
                      </td>

                      <td className="px-5 py-4 text-center text-sm font-semibold text-[#2F855A]">
                        {feature.growth ? "✓" : "—"}
                      </td>

                      <td className="px-5 py-4 text-center text-sm text-slate-500">
                        {feature.pro ? "✓" : "—"}
                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

          </section>

        </div>

      </section>

      {/* Add-ons */}
      <section className="px-5 py-20 lg:px-8">

        <div className="mx-auto max-w-5xl">

          <SectionHeading
            eyebrow="Add-ons"
            title="Expand when your business needs more"
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2">

            {[
              "Additional SMS credits",
              "Custom domain",
              "Advanced AI usage",
              "Extra website customization",
            ].map((addon) => (
              <div
                key={addon}
                className="flex items-center gap-4 rounded-2xl border border-green-100 bg-white p-5"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0FAF3]">
                  <Check
                    size={18}
                    className="text-[#2F855A]"
                  />
                </div>

                <span className="font-semibold text-[#14532D]">
                  {addon}
                </span>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Trial */}
      <section className="bg-[#F0FAF3] px-5 py-16 lg:px-8">

        <div className="mx-auto max-w-4xl text-center">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#94D8AB]">
            <HelpCircle size={22} />
          </div>

          <h2 className="mt-5 text-3xl font-black text-[#14532D]">
            Not sure which plan to choose?
          </h2>

          <p className="mt-4 text-slate-600">
            Start with the trial and choose the plan
            that fits your business as you grow.
          </p>

          <Link
            to="/signup"
            className="mt-7 inline-block rounded-xl bg-[#94D8AB] px-6 py-3.5 font-bold text-[#14532D]"
          >
            Start free trial
          </Link>

        </div>

      </section>

      <Footer />

    </div>
  );
}