import {
  Utensils,
  GraduationCap,
  Check,
} from "lucide-react";

const businesses = [
  {
    id: "restaurant",
    title: "Restaurant",
    description:
      "Manage customers, orders, marketing and growth.",
    icon: Utensils,
  },
  {
    id: "visa-agency",
    title: "Student Visa Agency",
    description:
      "Manage leads, follow-ups and student applications.",
    icon: GraduationCap,
  },
];

export default function BusinessTypeStep({
  selected,
  onChange,
  onContinue,
}) {
  return (
    <div>
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold text-[#2F855A]">
          Step 3 of 3
        </p>

        <h2 className="text-3xl font-bold text-[#14532D]">
          Choose your business
        </h2>

        <p className="mt-2 text-slate-600">
          Choose the type that best describes your business.
        </p>
      </div>

      <div className="grid gap-4">
        {businesses.map((business) => {
          const Icon = business.icon;
          const active = selected === business.id;

          return (
            <button
              key={business.id}
              type="button"
              onClick={() => onChange(business.id)}
              className={`
                relative
                flex
                items-start
                gap-4
                rounded-2xl
                border
                p-5
                text-left
                transition
                hover:-translate-y-1
                ${
                  active
                    ? "border-[#94D8AB] bg-[#F0FAF3]"
                    : "border-slate-200 bg-white"
                }
              `}
            >
              <div className="rounded-xl bg-[#DCF3E3] p-3 text-[#14532D]">
                <Icon size={24} />
              </div>

              <div>
                <h3 className="font-bold text-[#14532D]">
                  {business.title}
                </h3>

                <p className="mt-1 text-sm text-slate-600">
                  {business.description}
                </p>
              </div>

              {active && (
                <div className="absolute right-4 top-4 rounded-full bg-[#94D8AB] p-1 text-[#14532D]">
                  <Check size={14} />
                </div>
              )}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        disabled={!selected}
        onClick={onContinue}
        className="
          mt-6
          h-12
          w-full
          rounded-xl
          bg-[#94D8AB]
          font-bold
          text-[#14532D]
          transition
          hover:bg-[#6BC48C]
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        Continue
      </button>
    </div>
  );
}