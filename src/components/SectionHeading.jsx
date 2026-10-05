export default function SectionHeading({
  eyebrow,
  title,
  description,
  variant = "light", // "light" (default) or "dark"
}) {
  const isDark = variant === "dark";

  return (
    <div className="mx-auto max-w-3xl text-center">

      {eyebrow && (
        <p
          className={`mb-3 text-sm font-bold uppercase tracking-wider ${
            isDark ? "text-[#94D8AB]" : "text-[#2F855A]"
          }`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl ${
          isDark ? "text-white" : "text-[#14532D]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-base leading-7 sm:text-lg ${
            isDark ? "text-green-200" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}

    </div>
  );
}