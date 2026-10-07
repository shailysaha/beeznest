import { motion } from "framer-motion";
import {
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Check,
  FileText,
  ShoppingBag,
  Store,
  TrendingUp,
  Zap,
} from "lucide-react";

import MockDashboard from "./MockDashboard";
import { useLanguage } from "../context/LanguageContext";

export default function HeroProductComposition({
  businessType,
  onBusinessChange,
}) {
  const { t } = useLanguage();

  const isRestaurant = businessType === "restaurant";

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 45,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        delay: 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        min-w-0
        pb-10
        sm:pb-12
        lg:pb-14
      "
    >
      {/* =========================================
          LARGE PRODUCT GLOW
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[300px]
          w-[300px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-brand-200/70
          blur-[80px]
          sm:h-[430px]
          sm:w-[430px]
          lg:h-[520px]
          lg:w-[520px]
        "
      />

      {/* =========================================
          BUSINESS TYPE TOGGLE
      ========================================= */}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="
          relative
          z-40
          mb-5
          flex
          justify-center
        "
      >
        <div
          className="
            inline-flex
            rounded-full
            border
            border-brand-200
            bg-white/85
            p-1
            shadow-soft
            backdrop-blur-xl
          "
        >
          {/* RESTAURANT */}
          <button
            type="button"
            onClick={() =>
              onBusinessChange("restaurant")
            }
            aria-pressed={isRestaurant}
            className={`
              inline-flex
              items-center
              gap-2
              rounded-full
              px-4
              py-2.5
              text-xs
              font-extrabold
              transition-all
              duration-300
              sm:px-5
              sm:text-sm
              ${
                isRestaurant
                  ? "bg-brand-900 text-white shadow-md"
                  : "text-slate-500 hover:bg-brand-50 hover:text-brand-700"
              }
            `}
          >
            <ShoppingBag size={15} />
            {t("Restaurant")}
          </button>

          {/* VISA AGENCY */}
          <button
            type="button"
            onClick={() =>
              onBusinessChange("visa-agency")
            }
            aria-pressed={!isRestaurant}
            className={`
              inline-flex
              items-center
              gap-2
              rounded-full
              px-4
              py-2.5
              text-xs
              font-extrabold
              transition-all
              duration-300
              sm:px-5
              sm:text-sm
              ${
                !isRestaurant
                  ? "bg-brand-900 text-white shadow-md"
                  : "text-slate-500 hover:bg-brand-50 hover:text-brand-700"
              }
            `}
          >
            <BriefcaseBusiness size={15} />
            {t("Visa Agency")}
          </button>
        </div>
      </motion.div>

      {/* =========================================
          PRODUCT COMPOSITION
      ========================================= */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[700px]
          px-1
          sm:px-5
        "
      >
        {/* =====================================
            SOFT FLOOR GLOW
        ====================================== */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-1/2
            h-16
            w-[72%]
            -translate-x-1/2
            rounded-full
            bg-brand-300/40
            blur-2xl
          "
        />

        {/* =====================================
            LAPTOP
        ====================================== */}

        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-[610px]
          "
        >
          {/* Laptop outer shell */}
          <div
            className="
              rounded-[1.5rem]
              border
              border-slate-700
              bg-slate-900
              p-1.5
              shadow-[0_35px_90px_rgba(20,83,45,0.20)]
              sm:rounded-[2rem]
              sm:p-2.5
            "
          >
            {/* Camera */}
            <div
              className="
                flex
                h-5
                items-center
                justify-center
                bg-slate-900
                sm:h-6
              "
            >
              <span
                className="
                  h-1.5
                  w-10
                  rounded-full
                  bg-slate-700
                "
              />
            </div>

            {/* Screen */}
            <div
              className="
                overflow-hidden
                rounded-xl
                bg-white
                ring-1
                ring-white/10
                sm:rounded-2xl
              "
            >
              {/* Browser bar */}
              <div
                className="
                  flex
                  h-7
                  items-center
                  gap-1.5
                  border-b
                  border-slate-100
                  bg-slate-50
                  px-3
                "
              >
                <span className="h-2 w-2 rounded-full bg-slate-300" />
                <span className="h-2 w-2 rounded-full bg-slate-300" />
                <span className="h-2 w-2 rounded-full bg-slate-300" />

                <div
                  className="
                    mx-auto
                    hidden
                    h-4
                    w-1/2
                    rounded-full
                    bg-white
                    ring-1
                    ring-slate-100
                    sm:block
                  "
                />
              </div>

              {/* Dashboard */}
              <div className="p-2 sm:p-3">
                <MockDashboard
                  businessType={businessType}
                />
              </div>
            </div>
          </div>

          {/* Laptop base */}
          <div
            className="
              mx-auto
              h-2
              w-[82%]
              rounded-b-full
              bg-gradient-to-b
              from-slate-500
              to-slate-300
              shadow-lg
              sm:h-3
            "
          />

          <div
            className="
              mx-auto
              h-1
              w-[30%]
              rounded-b-full
              bg-slate-400
            "
          />
        </motion.div>

        {/* =====================================
            PHONE
        ====================================== */}

        <motion.div
          animate={{
            y: [0, 8, 0],
            rotate: [2, 1, 2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -bottom-4
            -right-1
            z-30
            w-[105px]
            sm:-bottom-6
            sm:right-0
            sm:w-[145px]
          "
        >
          <div
            className="
              rounded-[1.5rem]
              border-[3px]
              border-slate-800
              bg-slate-900
              p-1.5
              shadow-[0_25px_55px_rgba(20,83,45,0.24)]
              sm:rounded-[1.9rem]
              sm:p-2
            "
          >
            <div
              className="
                overflow-hidden
                rounded-[1.1rem]
                bg-white
                sm:rounded-[1.45rem]
              "
            >
              {/* Phone top */}
              <div
                className="
                  flex
                  h-4
                  items-center
                  justify-center
                  bg-slate-50
                  sm:h-5
                "
              >
                <span
                  className="
                    h-1
                    w-7
                    rounded-full
                    bg-slate-300
                    sm:w-9
                  "
                />
              </div>

              <div className="p-2 sm:p-3">

                <div className="flex items-center justify-between">
                  <div
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-lg
                      bg-brand-100
                      text-brand-700
                      sm:h-8
                      sm:w-8
                    "
                  >
                    {isRestaurant ? (
                      <ShoppingBag size={13} />
                    ) : (
                      <FileText size={13} />
                    )}
                  </div>

                  <span
                    className="
                      h-1.5
                      w-9
                      rounded-full
                      bg-brand-200
                      sm:w-12
                    "
                  />
                </div>

                <p
                  className="
                    mt-3
                    text-[7px]
                    font-bold
                    text-slate-400
                    sm:text-[9px]
                  "
                >
                  {isRestaurant
                    ? t("Today's sales")
                    : t("Applications")}
                </p>

                <p
                  className="
                    mt-0.5
                    text-sm
                    font-black
                    text-brand-900
                    sm:text-lg
                  "
                >
                  {isRestaurant ? "৳84K" : "186"}
                </p>

                {/* Mini chart */}
                <div
                  className="
                    mt-2
                    flex
                    h-12
                    items-end
                    gap-1
                    sm:mt-3
                    sm:h-16
                  "
                >
                  {[30, 48, 42, 65, 54, 78, 70].map(
                    (height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        animate={{
                          height: `${height}%`,
                        }}
                        transition={{
                          duration: 0.7,
                          delay:
                            0.4 + index * 0.08,
                        }}
                        className="
                          flex-1
                          rounded-t
                          bg-brand-300
                        "
                      />
                    )
                  )}
                </div>

                {/* AI mini card */}
                <div
                  className="
                    mt-2
                    rounded-lg
                    bg-brand-50
                    p-2
                    sm:mt-3
                    sm:p-2.5
                  "
                >
                  <p
                    className="
                      text-[6px]
                      font-bold
                      text-brand-700
                      sm:text-[8px]
                    "
                  >
                    {t("AI manager")}
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[6px]
                      leading-3
                      text-slate-500
                      sm:text-[8px]
                      sm:leading-4
                    "
                  >
                    {isRestaurant
                      ? t("Try a combo on Tue")
                      : t("Follow up with 8 leads")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================
            FLOATING SALES CARD
        ====================================== */}

        <motion.div
          animate={{
            y: [0, -7, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-3
            top-20
            z-30
            hidden
            rounded-2xl
            border
            border-white/70
            bg-white/75
            p-3
            shadow-lift
            backdrop-blur-xl
            sm:block
            lg:-left-8
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-brand-100
                text-brand-700
              "
            >
              <TrendingUp size={18} />
            </div>

            <div>
              <p className="text-[10px] font-semibold text-slate-400">
                {t("Sales up")}
              </p>

              <p className="text-sm font-extrabold text-brand-900">
                +12%
              </p>
            </div>
          </div>
        </motion.div>

        {/* =====================================
            FLOATING NEW ORDER CARD
        ====================================== */}

        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-2
            top-32
            z-30
            hidden
            rounded-2xl
            border
            border-white/70
            bg-white/75
            p-3
            shadow-lift
            backdrop-blur-xl
            sm:block
            lg:-right-7
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-brand-100
                text-brand-700
              "
            >
              <Store size={18} />
            </div>

            <div>
              <p className="text-[10px] font-semibold text-slate-400">
                {isRestaurant
                  ? t("New order")
                  : t("New application")}
              </p>

              <p className="text-sm font-extrabold text-brand-900">
                {isRestaurant
                  ? "৳2,450"
                  : "+8 today"}
              </p>
            </div>
          </div>
        </motion.div>

        {/* =====================================
            FLOATING AI CARD
        ====================================== */}

        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -bottom-5
            left-1/2
            z-30
            hidden
            w-64
            -translate-x-1/2
            rounded-2xl
            border
            border-white/70
            bg-white/80
            p-4
            shadow-lift
            backdrop-blur-xl
            sm:block
          "
        >
          <div className="flex items-start gap-3">
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-brand-900
                text-white
              "
            >
              <Bot size={17} />
            </div>

            <div>
              <p className="text-xs font-extrabold text-brand-900">
                {t("AI tip")}
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                {isRestaurant
                  ? t(
                      "Try a combo offer on Tuesday to improve repeat orders."
                    )
                  : t(
                      "Follow up with your highest-priority applicants today."
                    )}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* =========================================
          PRODUCT LABELS
      ========================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.8,
          duration: 0.5,
        }}
        className="
          relative
          z-10
          mt-8
          flex
          flex-wrap
          items-center
          justify-center
          gap-2
          text-[11px]
          font-semibold
          text-slate-500
        "
      >
        <span
          className="
            inline-flex
            items-center
            gap-1.5
            rounded-full
            border
            border-brand-100
            bg-white/75
            px-3
            py-1.5
            backdrop-blur
          "
        >
          <Check
            size={13}
            className="text-brand-700"
          />
          {t("Product preview")}
        </span>

        <span
          className="
            inline-flex
            items-center
            gap-1.5
            rounded-full
            border
            border-brand-100
            bg-white/75
            px-3
            py-1.5
            backdrop-blur
          "
        >
          <BarChart3
            size={13}
            className="text-brand-700"
          />

          {isRestaurant
            ? t("Sales dashboard")
            : t("Agency pipeline")}
        </span>

        <span
          className="
            inline-flex
            items-center
            gap-1.5
            rounded-full
            border
            border-brand-100
            bg-white/75
            px-3
            py-1.5
            backdrop-blur
          "
        >
          <Zap
            size={13}
            className="text-brand-700"
          />

          {t("AI powered")}
        </span>
      </motion.div>
    </motion.div>
  );
}