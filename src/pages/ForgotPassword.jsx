import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Phone,
  ShieldCheck,
} from "lucide-react";

import {
  forgotPassword,
  verifyResetOtp,
  resetPassword,
} from "../services/authService";
import FormError from "../components/common/FormError";
import { getFriendlyError } from "../utils/errors";

/* ---------- Shared shell ---------- */
function AuthShell({ children, title, description }) {
  return (
    <div className="min-h-screen bg-[#F0FAF3]">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left form area */}
        <div className="flex items-center justify-center bg-white px-5 py-12 sm:px-10">
          <div className="w-full max-w-md">
            <Link
              to="/"
              className="mb-10 inline-flex items-center gap-2 font-bold text-[#14532D]"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#94D8AB]">
                B
              </div>
              BeezNest
            </Link>

            <h1 className="text-3xl font-black text-[#14532D]">{title}</h1>

            <p className="mt-3 text-slate-500">{description}</p>

            <div className="mt-8">{children}</div>
          </div>
        </div>

        {/* Right visual */}
        <div className="hidden items-center justify-center bg-[#F0FAF3] p-12 lg:flex">
          <div className="max-w-lg">
            <div className="rounded-[2rem] border border-green-100 bg-white p-7 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">BeezNest</p>
                  <h3 className="mt-1 text-xl font-black text-[#14532D]">
                    Account Recovery
                  </h3>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#BDE8CB]">
                  <ShieldCheck size={20} />
                </div>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  "Enter your phone or email",
                  "We send a 6-digit code",
                  "Verify the code",
                  "Set a new password",
                ].map((line, index) => (
                  <div
                    key={line}
                    className="flex items-center gap-3 rounded-2xl bg-[#F0FAF3] p-4"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#94D8AB] font-black text-[#14532D]">
                      {index + 1}
                    </div>
                    <p className="text-sm font-semibold text-[#14532D]">
                      {line}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl bg-[#14532D] p-5 text-white">
                <p className="text-xs text-green-200">Security tip</p>
                <p className="mt-2 text-sm font-bold">
                  Never share your verification code with anyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Accessible input field ---------- */
function InputField({
  id,
  name,
  type = "text",
  autoComplete,
  inputMode,
  icon,
  label,
  value,
  onChange,
  placeholder,
  error,
  trailing = null,
}) {
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold text-slate-700"
      >
        {label}
      </label>

      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          {icon}
        </span>

        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          inputMode={inputMode}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={errorId}
          className={`h-12 w-full rounded-xl border py-3.5 pl-11 ${
            trailing ? "pr-12" : "pr-4"
          } outline-none transition focus:border-[#6BC48C] focus:ring-4 focus:ring-[#DCF3E3] ${
            error ? "border-red-300" : "border-slate-200"
          }`}
        />

        {trailing && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2">
            {trailing}
          </span>
        )}
      </div>

      <FormError id={errorId} message={error} />
    </div>
  );
}

/* ============================== PAGE ============================== */
export default function ForgotPassword() {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  // Step 15: 3-step flow + Step 17: success screen = step 4
  const [step, setStep] = useState(1);

  const [identifier, setIdentifier] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  /* ---------------- STEP 1 — send code ---------------- */
  const handleSendCode = async () => {
    setError("");
    setSuccess("");
    setFieldErrors({});

    if (!identifier.trim()) {
      setFieldErrors({ identifier: "Please enter your phone or email." });
      return;
    }

    try {
      setLoading(true);
      await forgotPassword(identifier.trim());
      setSuccess("We've sent a 6-digit code to your phone or email.");
      setStep(2);
    } catch (err) {
      // Step 28: never leak raw backend errors
      setError(getFriendlyError(err.message));
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- STEP 2 — verify OTP ---------------- */
  const handleVerifyOtp = async () => {
    setError("");
    setSuccess("");
    setFieldErrors({});

    if (otp.length !== 6) {
      setFieldErrors({ otp: "Please enter the 6-digit code." });
      return;
    }

    try {
      setLoading(true);

      // Step 16: verify reset OTP
      await verifyResetOtp(identifier.trim(), otp);

      setSuccess("Code verified. Now set your new password.");
      setStep(3);
    } catch (err) {
      // Step 28
      setError(getFriendlyError(err.message));
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- STEP 3 — reset password ---------------- */
  const handleResetPassword = async () => {
    setError("");
    setSuccess("");
    setFieldErrors({});

    if (password.length < 6) {
      setFieldErrors({
        password: "Password must be at least 6 characters.",
      });
      return;
    }

    if (password !== confirmPassword) {
      setFieldErrors({ confirmPassword: "Passwords do not match." });
      return;
    }

    try {
      setLoading(true);

      // Step 17: reset the password, then move to success screen
      await resetPassword(identifier.trim(), otp, password);

      setStep(4);
    } catch (err) {
      // Step 28
      setError(getFriendlyError(err.message));
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- Which action to run per step ---------------- */
  const handlePrimary = () => {
    if (step === 1) return handleSendCode();
    if (step === 2) return handleVerifyOtp();
    if (step === 3) return handleResetPassword();
  };

  const primaryLabel = loading
    ? "Please wait..."
    : step === 1
    ? "Send reset code"
    : step === 2
    ? "Verify code"
    : "Set new password";

  return (
    <AuthShell
      title="Reset your password"
      description="We'll help you get back into your BeezNest account in a few simple steps."
    >
      {/* Progress — hidden on success screen */}
      {step <= 3 && (
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-[#2F855A]">
              Step {step} of 3
            </span>
            <span className="text-slate-400">
              {step === 1
                ? "Identify"
                : step === 2
                ? "Verify"
                : "New password"}
            </span>
          </div>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#DCF3E3]">
            <div
              className="h-full rounded-full bg-[#6BC48C] transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>
      )}

      {error && (
        <div
          role="alert"
          className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
        >
          {error}
        </div>
      )}

      {success && step <= 3 && (
        <div className="mb-5 rounded-xl border border-green-200 bg-[#F0FAF3] px-4 py-3 text-sm text-[#2F855A]">
          {success}
        </div>
      )}

      {/* STEP 1 — identifier */}
      {step === 1 && (
        <form
          className="space-y-5"
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            handlePrimary();
          }}
        >
          <InputField
            id="identifier"
            name="identifier"
            type="text"
            autoComplete="username"
            icon={<Mail size={18} />}
            label="Phone or email"
            value={identifier}
            onChange={setIdentifier}
            placeholder="Enter your phone or email"
            error={fieldErrors.identifier}
          />

          <p className="text-xs text-slate-500">
            We'll send a 6-digit code to confirm it's really you.
          </p>
        </form>
      )}

      {/* STEP 2 — OTP */}
      {step === 2 && (
        <form
          className="space-y-6"
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            handlePrimary();
          }}
        >
          <div className="rounded-2xl bg-[#F0FAF3] p-5 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#94D8AB]">
              <Phone size={21} />
            </div>

            <p className="mt-4 font-bold text-[#14532D]">
              Enter the verification code
            </p>

            <p className="mt-2 text-sm text-slate-500">
              We sent a 6-digit code to{" "}
              <span className="font-semibold text-[#14532D]">
                {identifier}
              </span>
            </p>
          </div>

          <div>
            <label
              htmlFor="otp"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Verification code
            </label>

            <input
              id="otp"
              name="otp"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              value={otp}
              onChange={(event) =>
                setOtp(event.target.value.replace(/\D/g, "").slice(0, 6))
              }
              placeholder="000000"
              aria-invalid={!!fieldErrors.otp}
              aria-describedby={fieldErrors.otp ? "otp-error" : undefined}
              className={`h-12 w-full rounded-xl border px-4 text-center text-2xl font-bold tracking-[0.5em] outline-none transition focus:border-[#6BC48C] focus:ring-4 focus:ring-[#DCF3E3] ${
                fieldErrors.otp ? "border-red-300" : "border-slate-200"
              }`}
            />

            <FormError id="otp-error" message={fieldErrors.otp} />
          </div>

          <div className="flex items-center justify-between text-sm">
            <button
              type="button"
              onClick={handleSendCode}
              disabled={loading}
              className="font-semibold text-[#2F855A] disabled:opacity-60"
            >
              Resend code
            </button>

            <button
              type="button"
              onClick={() => {
                setError("");
                setSuccess("");
                setFieldErrors({});
                setOtp("");
                setStep(1);
              }}
              className="text-slate-500 hover:text-[#14532D]"
            >
              Change phone/email
            </button>
          </div>
        </form>
      )}

      {/* STEP 3 — new password */}
      {step === 3 && (
        <form
          className="space-y-5"
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            handlePrimary();
          }}
        >
          <InputField
            id="new-password"
            name="new-password"
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            icon={<LockKeyhole size={18} />}
            label="New password"
            value={password}
            onChange={setPassword}
            placeholder="Create a new password"
            error={fieldErrors.password}
            trailing={
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword(!showPassword)}
                className="text-slate-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            }
          />

          <InputField
            id="confirm-password"
            name="confirm-password"
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            icon={<LockKeyhole size={18} />}
            label="Confirm new password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            placeholder="Re-enter new password"
            error={fieldErrors.confirmPassword}
          />

          <div className="rounded-2xl bg-[#F0FAF3] p-4 text-xs text-slate-600">
            <div className="flex items-start gap-2">
              <Check size={14} className="mt-0.5 text-[#2F855A]" />
              <span>At least 6 characters</span>
            </div>
            <div className="mt-2 flex items-start gap-2">
              <Check size={14} className="mt-0.5 text-[#2F855A]" />
              <span>Use a mix of letters and numbers</span>
            </div>
          </div>
        </form>
      )}

      {/* STEP 4 — success (Step 17) */}
      {step === 4 && (
        <div className="space-y-6">
          <div className="rounded-2xl bg-[#F0FAF3] p-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#94D8AB]">
              <CheckCircle2 size={28} className="text-[#14532D]" />
            </div>

            <p className="mt-4 text-lg font-bold text-[#14532D]">
              Password changed successfully.
            </p>

            <p className="mt-2 text-sm text-slate-500">
              You can now log in to your BeezNest account with your new
              password.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/login")}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#94D8AB] px-6 font-bold text-[#14532D] transition hover:bg-[#6BC48C] focus:outline-none focus:ring-4 focus:ring-[#BDE8CB]"
          >
            Back to login
            <ArrowRight size={17} />
          </button>
        </div>
      )}

      {/* Buttons — only on steps 1-3 */}
      {step <= 3 && (
        <div className="mt-8 flex gap-3">
          {step > 1 && (
            <button
              type="button"
              disabled={loading}
              onClick={() => {
                setError("");
                setSuccess("");
                setFieldErrors({});
                setStep(step - 1);
              }}
              className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 font-semibold text-slate-600 transition hover:bg-slate-50 disabled:opacity-60"
            >
              <ArrowLeft size={17} />
              Back
            </button>
          )}

          {/* Step 8 + Step 18: animated button with spinner */}
          <motion.button
            type="button"
            disabled={loading}
            onClick={handlePrimary}
            whileHover={
              shouldReduceMotion || loading ? undefined : { y: -2 }
            }
            whileTap={
              shouldReduceMotion || loading ? undefined : { scale: 0.98 }
            }
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#94D8AB] px-6 font-bold text-[#14532D] transition hover:bg-[#6BC48C] focus:outline-none focus:ring-4 focus:ring-[#BDE8CB] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-[#14532D] border-t-transparent" />
                Please wait...
              </>
            ) : (
              <>
                {primaryLabel}
                <ArrowRight size={17} />
              </>
            )}
          </motion.button>
        </div>
      )}

      {step <= 3 && (
        <p className="mt-6 text-center text-sm text-slate-500">
          Remembered your password?{" "}
          <Link to="/login" className="font-bold text-[#2F855A]">
            Back to log in
          </Link>
        </p>
      )}
    </AuthShell>
  );
}