import { useState } from "react";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  Check,
  Crown,
  Utensils,
} from "lucide-react";
import { Link } from "react-router-dom";

import { useLanguage } from "../context/LanguageContext";

import {
  restaurantPlans,
  visaPlans,
} from "../data/plans";

/* =========================================================
   FEATURE CHECK
========================================================= */

function FeatureCheck() {
  return (
    <span
      className="
        flex
        h-7
        w-7
        shrink-0
        items-center
        justify-center
        rounded-xl
        bg-[#F0FAF3]
        text-[#2F855A]
      "
      aria-hidden="true"
    >
      <Check size={15} strokeWidth={2.8} />
    </span>
  );
}

/* =========================================================
   PRICING CARD
========================================================= */

function PricingCard({
  plan,
  billing,
  businessType,
  t,
}) {
  const price =
    billing === "yearly"
      ? plan.yearly
      : plan.monthly;

  const priceLabel =
    billing === "yearly"
      ? t("/year")
      : t("/month");

  return (
    <div
      className={`
        relative
        h-full
        transition-all
        duration-500
        ${
          plan.popular
            ? "lg:-translate-y-3"
            : "hover:-translate-y-1"
        }
      `}
    >
      {/* =================================================
          POPULAR RIBBON
      ================================================= */}

      {plan.popular && (
        <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
          <div
            className="
              flex
              items-center
              gap-1.5
              rounded-full
              bg-[#14532D]
              px-4
              py-1.5
              text-[10px]
              font-black
              uppercase
              tracking-wider
              text-white
              shadow-lg
            "
          >
            <Crown size={12} />

            {t("Most popular")}
          </div>
        </div>
      )}

      {/* =================================================
          CARD BORDER
      ================================================= */}

      <div
        className={`
          h-full
          rounded-[1.75rem]
          p-[1px]
          ${
            plan.popular
              ? `
                bg-gradient-to-br
                from-[#94D8AB]
                via-[#2F855A]
                to-[#6BC48C]
                shadow-[0_25px_70px_rgba(47,133,90,0.16)]
              `
              : `
                border
                border-[#BDE8CB]
                bg-white
                shadow-sm
              `
          }
        `}
      >
        <div
          className="
            flex
            h-full
            flex-col
            rounded-[calc(1.75rem-1px)]
            bg-white
            p-6
            sm:p-7
          "
        >
          {/* =================================================
              PLAN TITLE
          ================================================= */}

          <div>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p
                  className="
                    text-[11px]
                    font-black
                    uppercase
                    tracking-[0.12em]
                    text-[#2F855A]
                  "
                >
                  {businessType === "restaurant"
                    ? t("For restaurants")
                    : t("For visa agencies")}
                </p>

                <h3
                  className="
                    mt-2
                    text-xl
                    font-extrabold
                    text-[#14532D]
                  "
                >
                  {t(plan.name)}
                </h3>
              </div>

              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#F0FAF3]
                  text-[#2F855A]
                "
              >
                {plan.popular ? (
                  <Crown size={17} />
                ) : businessType === "restaurant" ? (
                  <Utensils size={16} />
                ) : (
                  <Building2 size={16} />
                )}
              </div>
            </div>

            <p
              className="
                mt-2
                min-h-[72px]
                text-sm
                leading-6
                text-slate-500
              "
            >
              {t(plan.description)}
            </p>
          </div>

          {/* =================================================
              PRICE
          ================================================= */}

          <div className="mt-6">
            <div className="flex items-end gap-1">
              <span
                className="
                  text-4xl
                  font-black
                  tracking-tight
                  text-[#14532D]
                "
              >
                ৳{price.toLocaleString()}
              </span>

              <span
                className="
                  mb-1
                  text-sm
                  text-slate-400
                "
              >
                {priceLabel}
              </span>
            </div>

            {billing === "yearly" && (
              <p
                className="
                  mt-2
                  text-xs
                  font-semibold
                  text-[#2F855A]
                "
              >
                {t("Billed yearly · save more")}
              </p>
            )}
          </div>

          {/* =================================================
              CTA
          ================================================= */}

          <Link
            to="/signup"
            onClick={() => {
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
                billing
              );
            }}
            className={`
              mt-6
              flex
              h-12
              items-center
              justify-center
              gap-2
              rounded-full
              text-sm
              font-bold
              transition-all
              duration-300
              focus:outline-none
              focus:ring-4
              focus:ring-[#BDE8CB]
              ${
                plan.popular
                  ? `
                    bg-gradient-to-r
                    from-[#6BC48C]
                    to-[#2F855A]
                    text-white
                    shadow-lg
                    hover:-translate-y-0.5
                    hover:shadow-xl
                  `
                  : `
                    border
                    border-[#BDE8CB]
                    bg-[#F0FAF3]
                    text-[#14532D]
                    hover:border-[#94D8AB]
                    hover:bg-[#DCF3E3]
                  `
              }
            `}
          >
            {t("Start free trial")}

            <ArrowRight size={16} />
          </Link>

          {/* =================================================
              FEATURES
          ================================================= */}

          <div
            className="
              mt-7
              border-t
              border-slate-100
              pt-6
            "
          >
            <p
              className="
                mb-4
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-slate-400
              "
            >
              {t("What's included")}
            </p>

            <div className="space-y-3">
              {plan.features.map((feature) => (
                <div
                  key={feature}
                  className="
                    flex
                    items-start
                    gap-3
                  "
                >
                  <FeatureCheck />

                  <span
                    className="
                      pt-0.5
                      text-sm
                      leading-5
                      text-slate-600
                    "
                  >
                    {t(feature)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================
              BUSINESS INDICATOR
          ================================================= */}

          <div className="mt-auto pt-7">
            <div
              className="
                flex
                items-center
                gap-2
                rounded-xl
                bg-[#F7FCF8]
                px-3
                py-2.5
                text-xs
                font-semibold
                text-[#2F855A]
              "
            >
              {businessType === "restaurant" ? (
                <Utensils size={14} />
              ) : (
                <Building2 size={14} />
              )}

              {businessType === "restaurant"
                ? t("For restaurants")
                : t("For visa agencies")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN PRICING PREVIEW
========================================================= */

export default function PricingPreview() {
  const { t } = useLanguage();

  const [businessType, setBusinessType] =
    useState("restaurant");

  const [billing, setBilling] =
    useState("monthly");

  /* =======================================================
     SINGLE SOURCE OF TRUTH

     Prices/features come directly from:
     src/data/plans.js
  ======================================================= */

  const plans =
    businessType === "restaurant"
      ? restaurantPlans
      : visaPlans;

  return (
    <section
      id="pricing-preview"
      className="
        relative
        overflow-hidden
        bg-[#F0FAF3]
        px-5
        py-20
        sm:px-8
        lg:px-12
        lg:py-28
      "
    >
      {/* =================================================
          BACKGROUND DECORATION
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-96
          w-96
          rounded-full
          bg-[#BDE8CB]/40
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-96
          w-96
          rounded-full
          bg-[#DCF3E3]/70
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* =================================================
            HEADING
        ================================================= */}

        <div className="mx-auto max-w-3xl text-center">
          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#BDE8CB]
              bg-white
              px-4
              py-2
              text-xs
              font-bold
              uppercase
              tracking-[0.12em]
              text-[#2F855A]
              shadow-sm
            "
          >
            <CalendarDays size={14} />

            {t("Simple pricing")}
          </div>

          <h2
            className="
              text-3xl
              font-extrabold
              tracking-tight
              text-[#14532D]
              sm:text-4xl
              lg:text-5xl
            "
          >
            {t("Plans that grow with")}

            <span
              className="
                bg-gradient-to-r
                from-[#2F855A]
                to-[#6BC48C]
                bg-clip-text
                text-transparent
              "
            >
              {" "}
              {t("your business.")}
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
            "
          >
            {t(
              "Start with what you need today and move up when your business is ready."
            )}
          </p>
        </div>

        {/* =================================================
            BUSINESS TYPE TOGGLE
        ================================================= */}

        <div
          className="
            mx-auto
            mt-9
            flex
            w-fit
            flex-wrap
            justify-center
            rounded-full
            border
            border-[#BDE8CB]
            bg-white
            p-1.5
            shadow-sm
          "
        >
          <button
            type="button"
            onClick={() =>
              setBusinessType("restaurant")
            }
            aria-pressed={
              businessType === "restaurant"
            }
            className={`
              flex
              items-center
              gap-2
              rounded-full
              px-5
              py-2.5
              text-sm
              font-bold
              transition-all
              focus:outline-none
              focus:ring-4
              focus:ring-[#DCF3E3]
              ${
                businessType === "restaurant"
                  ? "bg-[#14532D] text-white shadow-md"
                  : "text-slate-500 hover:text-[#14532D]"
              }
            `}
          >
            <Utensils size={15} />

            {t("Restaurant")}
          </button>

          <button
            type="button"
            onClick={() =>
              setBusinessType("visa-agency")
            }
            aria-pressed={
              businessType === "visa-agency"
            }
            className={`
              flex
              items-center
              gap-2
              rounded-full
              px-5
              py-2.5
              text-sm
              font-bold
              transition-all
              focus:outline-none
              focus:ring-4
              focus:ring-[#DCF3E3]
              ${
                businessType === "visa-agency"
                  ? "bg-[#14532D] text-white shadow-md"
                  : "text-slate-500 hover:text-[#14532D]"
              }
            `}
          >
            <Building2 size={15} />

            {t("Visa agency")}
          </button>
        </div>

        {/* =================================================
            BILLING TOGGLE
        ================================================= */}

        <div className="mt-4 flex items-center justify-center gap-3">
          <div
            className="
              flex
              rounded-full
              border
              border-[#BDE8CB]
              bg-white
              p-1
              shadow-sm
            "
          >
            <button
              type="button"
              onClick={() =>
                setBilling("monthly")
              }
              aria-pressed={
                billing === "monthly"
              }
              className={`
                rounded-full
                px-4
                py-2
                text-xs
                font-bold
                transition-all
                ${
                  billing === "monthly"
                    ? "bg-[#DCF3E3] text-[#14532D]"
                    : "text-slate-500 hover:text-[#14532D]"
                }
              `}
            >
              {t("Monthly")}
            </button>

            <button
              type="button"
              onClick={() =>
                setBilling("yearly")
              }
              aria-pressed={
                billing === "yearly"
              }
              className={`
                rounded-full
                px-4
                py-2
                text-xs
                font-bold
                transition-all
                ${
                  billing === "yearly"
                    ? "bg-[#DCF3E3] text-[#14532D]"
                    : "text-slate-500 hover:text-[#14532D]"
                }
              `}
            >
              {t("Yearly")}
            </button>
          </div>

          {billing === "yearly" && (
            <span
              className="
                rounded-full
                bg-[#2F855A]
                px-3
                py-1
                text-[10px]
                font-black
                uppercase
                tracking-wide
                text-white
              "
            >
              {t("Save")}
            </span>
          )}
        </div>

        {/* =================================================
            PRICING CARDS
        ================================================= */}

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              billing={billing}
              businessType={businessType}
              t={t}
            />
          ))}
        </div>

        {/* =================================================
            BOTTOM HELP
        ================================================= */}

        <div
          className="
            mt-12
            flex
            flex-col
            items-center
            justify-between
            gap-5
            rounded-3xl
            border
            border-[#BDE8CB]
            bg-white
            p-6
            shadow-sm
            sm:flex-row
            sm:px-8
          "
        >
          <div>
            <p className="font-bold text-[#14532D]">
              {t("Need help choosing a plan?")}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              {t("Compare all plans")}
            </p>
          </div>

          <Link
            to="/pricing"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#BDE8CB]
              bg-[#F0FAF3]
              px-5
              py-3
              text-sm
              font-bold
              text-[#14532D]
              transition
              hover:-translate-y-0.5
              hover:bg-[#DCF3E3]
              focus:outline-none
              focus:ring-4
              focus:ring-[#BDE8CB]
            "
          >
            {t("Compare all plans")}

            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}