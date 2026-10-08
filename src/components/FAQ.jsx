import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Minus,
  Plus,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const faqs = [
  {
    question: "What is BeezNest?",
    answer:
      "BeezNest is an AI-powered business management platform designed to help restaurants and visa agencies manage important parts of their business from one workspace.",
  },
  {
    question: "Who is BeezNest made for?",
    answer:
      "BeezNest is designed for restaurants and visa agencies. You can choose your business type during sign-up and use the experience built around that business.",
  },
  {
    question: "Can I manage my website and business from one place?",
    answer:
      "Yes. BeezNest is designed to connect your website experience with your business management tools, so important information can stay in sync.",
  },
  {
    question: "Does my website update when I change my menu?",
    answer:
      "The website builder demo shows how your restaurant website can stay connected to your menu. When you change the menu, the website can reflect those changes.",
  },
  {
    question: "Can I use BeezNest in Bangla and English?",
    answer:
      "Yes. Bangla and English are part of the product experience, making BeezNest easier to use for businesses in Bangladesh.",
  },
  {
    question: "What can the AI business manager help me with?",
    answer:
      "The AI manager is designed to help you understand your business information and answer questions such as which products performed best, how to bring back inactive customers, and how your business is performing.",
  },
  {
    question: "How do I choose the right plan?",
    answer:
      "Start with the pricing preview and choose the business type that matches your business. You can compare the available plans and features before getting started.",
  },
  {
    question: "How do I get started?",
    answer:
      "Choose Start free trial and follow the sign-up steps. You will create your account, verify your phone, and choose your business type.",
  },
];

function FAQItem({ item, isOpen, onToggle, index, t }) {
  const answerId = `faq-answer-${index}`;

  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
        isOpen
          ? "border-[#BDE8CB] bg-[#F0FAF3] shadow-[0_12px_35px_rgba(47,133,90,0.08)]"
          : "border-slate-200 bg-white hover:border-[#BDE8CB] hover:shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
      }`}
    >
      <div
        className={
          isOpen
            ? "border-l-4 border-[#2F855A]"
            : "border-l-4 border-transparent"
        }
      >
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={answerId}
          className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left focus:outline-none focus:ring-4 focus:ring-inset focus:ring-[#BDE8CB] sm:px-6"
        >
          <span
            className={`text-[15px] font-bold leading-6 sm:text-base ${
              isOpen ? "text-[#14532D]" : "text-slate-800"
            }`}
          >
            {t(item.question)}
          </span>

          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
              isOpen
                ? "bg-[#2F855A] text-white"
                : "bg-[#DCF3E3] text-[#2F855A]"
            }`}
          >
            {isOpen ? (
              <Minus size={18} strokeWidth={2.5} />
            ) : (
              <Plus size={18} strokeWidth={2.5} />
            )}
          </span>
        </button>

        <div
          id={answerId}
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-5 pb-5 pr-16 text-sm leading-7 text-slate-600 sm:px-6 sm:pb-6 sm:pr-20">
              {t(item.answer)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { t } = useLanguage();

  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Soft background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#DCF3E3]/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#F0FAF3] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          {/* LEFT */}
          <div className="lg:sticky lg:top-28">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#BDE8CB] bg-[#F0FAF3] px-3.5 py-2 text-xs font-bold text-[#2F855A]">
              <Sparkles size={14} />
              {t("Answers, made simple")}
            </div>

            <h2 className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-[#14532D] sm:text-4xl lg:text-[44px]">
              {t("Questions before you")}{" "}
              <span className="bg-gradient-to-r from-[#2F855A] to-[#6BC48C] bg-clip-text text-transparent">
                {t("get started?")}
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
              {t(
                "Here are the answers to the questions business owners usually have before getting started with BeezNest."
              )}
            </p>

            {/* Chat card */}
            <div className="relative mt-8 overflow-hidden rounded-3xl border border-[#BDE8CB] bg-[#F0FAF3] p-6 shadow-[0_20px_60px_rgba(47,133,90,0.10)]">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#BDE8CB]/50 blur-2xl" />

              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#2F855A] text-white shadow-lg shadow-[#2F855A]/20">
                  <MessageCircle size={21} />
                </div>

                <h3 className="mt-5 text-xl font-extrabold text-[#14532D]">
                  {t("Still have questions?")}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {t(
                    "Chat with us and find the right way to get started with your business."
                  )}
                </p>
               <a
  href="mailto:hello@beeznest.com"
  style={{ color: "white" }} // <-- This forces the color to be white no matter what
  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#2F855A] px-5 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#276F4B] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#2F855A] focus:ring-offset-2"
>
  <span style={{ color: "white" }}>{t("Chat with us")}</span>
  <ArrowRight size={16} style={{ color: "white" }} />
</a>

             
                <div className="mt-5 flex items-center gap-2 text-xs font-medium text-[#2F855A]">
                  <CheckCircle2 size={15} />
                  {t("Simple answers. No complicated jargon.")}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — ACCORDION */}
          <div className="space-y-3">
            {faqs.map((item, index) => (
              <FAQItem
                key={item.question}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
                t={t}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}