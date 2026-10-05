export default function PasswordStrength({ password = "" }) {
  const checks = [
    {
      label: "8+ characters",
      valid: password.length >= 8,
    },
    {
      label: "Uppercase letter",
      valid: /[A-Z]/.test(password),
    },
    {
      label: "Lowercase letter",
      valid: /[a-z]/.test(password),
    },
    {
      label: "Number",
      valid: /\d/.test(password),
    },
  ];

  const score = checks.filter((item) => item.valid).length;

  let label = "Weak";

  if (score === 2) label = "Fair";
  if (score === 3) label = "Good";
  if (score === 4) label = "Strong";

  return (
    <div className="mt-3">
      <div className="mb-2 flex items-center justify-between text-xs">
        <span className="text-slate-600">
          Password strength
        </span>

        <span className="font-semibold text-[#2F855A]">
          {label}
        </span>
      </div>

      <div className="grid grid-cols-4 gap-1">
        {checks.map((check) => (
          <div
            key={check.label}
            className={`h-1.5 rounded-full ${
              check.valid
                ? "bg-[#6BC48C]"
                : "bg-slate-200"
            }`}
          />
        ))}
      </div>

      <div className="mt-2 grid grid-cols-2 gap-1 text-xs text-slate-500">
        {checks.map((check) => (
          <span key={check.label}>
            {check.valid ? "✓" : "○"} {check.label}
          </span>
        ))}
      </div>
    </div>
  );
}