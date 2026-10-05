// src/pages/Auth.jsx
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Phone,
  UserRound,
} from "lucide-react";

import {
  loginUser,
  signupUser,
  sendOtp,
  verifyOtp,
} from "../services/authService";
import FormError from "../components/common/FormError";
import PasswordStrength from "../components/auth/PasswordStrength";
import { getFriendlyError } from "../utils/errors";

function AuthShell({ children, title, description }) {
  return (
    <div className="min-h-screen bg-[#F0FAF3]">
      <div className="grid min-h-screen lg:grid-cols-2">
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

        <div className="hidden items-center justify-center bg-[#F0FAF3] p-12 lg:flex">
          <div className="max-w-lg">
            <div className="rounded-[2rem] border border-green-100 bg-white p-7 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">BeezNest</p>
                  <h3 className="mt-1 text-xl font-black text-[#14532D]">
                    Business Dashboard
                  </h3>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#BDE8CB]">
                  <LockKeyhole size={20} />
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-[#F0FAF3] p-5">
                  <p className="text-xs text-slate-500">Revenue</p>
                  <p className="mt-2 text-2xl font-black text-[#14532D]">
                    ৳84,500
                  </p>
                </div>
                <div className="rounded-2xl bg-[#F0FAF3] p-5">
                  <p className="text-xs text-slate-500">Customers</p>
                  <p className="mt-2 text-2xl font-black text-[#14532D]">
                    128
                  </p>
                </div>
              </div>

              <div className="mt-4 h-36 rounded-2xl bg-slate-50 p-5">
                <div className="flex h-full items-end gap-3">
                  {[35, 55, 45, 72, 60, 88, 78].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-lg bg-[#94D8AB]"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-[#14532D] p-5 text-white">
                <p className="text-xs text-green-200">AI Business Manager</p>
                <p className="mt-2 font-bold">
                  3 opportunities found for your business.
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

/* ============================== SCHEMAS ============================== */

const loginSchema = z.object({
  identifier: z
    .string()
    .trim()
    .min(1, "Please enter your phone or email."),

  password: z
    .string()
    .min(1, "Please enter your password."),
});

const signupStep1Schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name."),

  businessName: z
    .string()
    .trim()
    .min(2, "Please enter your business name."),

  phone: z
    .string()
    .trim()
    .min(1, "Please enter your phone number.")
    .regex(
      /^(?:\+880\s?1|01)[3-9]\d{8}$/,
      "Please enter a valid Bangladesh phone number."
    ),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .regex(/[A-Z]/, "Password must contain an uppercase letter.")
    .regex(/[a-z]/, "Password must contain a lowercase letter.")
    .regex(/\d/, "Password must contain a number."),

  terms: z
    .boolean()
    .refine((value) => value === true, {
      message: "You must agree to the Terms and Privacy Policy.",
    }),
});

/* ============================== LOGIN ============================== */

export function Login() {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const handleLogin = async (data) => {
    setError("");

    try {
      setLoading(true);

      const response = await loginUser({
        identifier: data.identifier,
        password: data.password,
      });

      localStorage.setItem("biznest_token", response.token);
      localStorage.setItem(
        "biznest_user",
        JSON.stringify(response.user)
      );

      navigate("/dashboard");
    } catch (err) {
      setError(getFriendlyError(err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell
      title="Welcome back"
      description="Log in to your BeezNest dashboard."
    >
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="space-y-5"
        noValidate
      >
        {error && (
          <div
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
          >
            {error}
          </div>
        )}

        <div>
          <label
            htmlFor="identifier"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Phone or email
          </label>

          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              id="identifier"
              type="text"
              autoComplete="username"
              placeholder="Enter phone or email"
              aria-invalid={!!errors.identifier}
              aria-describedby={
                errors.identifier ? "identifier-error" : undefined
              }
              {...register("identifier")}
              className={`h-12 w-full rounded-xl border py-3.5 pl-11 pr-4 outline-none transition focus:border-[#6BC48C] focus:ring-4 focus:ring-[#DCF3E3] ${
                errors.identifier
                  ? "border-red-300"
                  : "border-slate-200"
              }`}
            />
          </div>

          <FormError
            id="identifier-error"
            message={errors.identifier?.message}
          />
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-slate-700"
            >
              Password
            </label>

            <Link
              to="/forgot-password"
              className="font-semibold text-[#2F855A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#BDE8CB] focus:ring-offset-2"
            >
              Forgot password?
            </Link>
          </div>

          <div className="relative">
            <LockKeyhole
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Enter password"
              aria-invalid={!!errors.password}
              aria-describedby={
                errors.password ? "password-error" : undefined
              }
              {...register("password")}
              className={`h-12 w-full rounded-xl border py-3.5 pl-11 pr-12 outline-none transition focus:border-[#6BC48C] focus:ring-4 focus:ring-[#DCF3E3] ${
                errors.password
                  ? "border-red-300"
                  : "border-slate-200"
              }`}
            />

            <button
              type="button"
              aria-label={
                showPassword ? "Hide password" : "Show password"
              }
              onClick={() =>
                setShowPassword((current) => !current)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg p-1 text-slate-400 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#BDE8CB]"
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>

          <FormError
            id="password-error"
            message={errors.password?.message}
          />
        </div>

        <motion.button
          type="submit"
          disabled={loading}
          whileHover={shouldReduceMotion || loading ? undefined : { y: -2 }}
          whileTap={shouldReduceMotion || loading ? undefined : { scale: 0.98 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#94D8AB] px-6 font-bold text-[#14532D] transition hover:bg-[#6BC48C] focus:outline-none focus:ring-4 focus:ring-[#BDE8CB] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <>
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-[#14532D] border-t-transparent" />
              Please wait...
            </>
          ) : (
            <>
              Log in
              <ArrowRight size={18} />
            </>
          )}
        </motion.button>

        <div className="flex items-center gap-3 py-2">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-xs text-slate-400">OR</span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <button
          type="button"
          className="h-12 w-full rounded-xl border border-slate-200 bg-white px-5 font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Continue with Google
        </button>

        <p className="text-center text-sm text-slate-500">
          New here?{" "}
          <Link
            to="/signup"
            className="font-bold text-[#2F855A] hover:underline"
          >
            Create an account
          </Link>
        </p>
      </form>
    </AuthShell>
  );
}

/* ============================== SIGNUP ============================== */
export function Signup() {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const savedBusinessType = localStorage.getItem("biznest_business_type");

  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");

  // NEW — resend cooldown in seconds
  const [resendCountdown, setResendCountdown] = useState(0);

  const [businessType, setBusinessType] = useState(
    savedBusinessType === "restaurant"
      ? "Restaurant"
      : savedBusinessType === "visa-agency"
      ? "Student Visa Agency"
      : ""
  );

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupStep1Schema),
    defaultValues: {
      name: "",
      businessName: "",
      phone: "",
      email: "",
      password: "",
      terms: false,
    },
  });

  const watchedPassword = watch("password");

  // NEW — tick the resend countdown down to 0
  useEffect(() => {
    if (resendCountdown <= 0) return;

    const timer = setInterval(() => {
      setResendCountdown((current) =>
        current <= 1 ? 0 : current - 1
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [resendCountdown]);

  /* ---------------- STEP 1 — create account ---------------- */
  const handleStep1Submit = async (data) => {
    setError("");

    try {
      setLoading(true);

      await signupUser({
        name: data.name,
        businessName: data.businessName,
        phone: data.phone,
        email: data.email,
        password: data.password,
      });

      await sendOtp(data.phone);

      setPhone(data.phone);
      setResendCountdown(60); // NEW — lock the resend button
      setStep(2);
    } catch (err) {
      setError(getFriendlyError(err.message));
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- STEP 2 & 3 ---------------- */
  const nextStep = async () => {
    setError("");

    if (step === 2) {
      setOtpError("");

      if (otp.length !== 6) {
        setOtpError("Please enter the 6-digit verification code.");
        return;
      }

      try {
        setLoading(true);
        await verifyOtp(phone, otp);
        setStep(3);
      } catch (err) {
        setError(getFriendlyError(err.message));
      } finally {
        setLoading(false);
      }
      return;
    }

    if (step === 3) {
      if (!businessType) {
        setError("Please choose your business type.");
        return;
      }

      localStorage.setItem(
        "biznest_business_type",
        businessType === "Restaurant" ? "restaurant" : "visa-agency"
      );

      navigate("/onboarding");
    }
  };

  return (
    <AuthShell
      title="Create your account"
      description="Start your BeezNest journey in three simple steps."
    >
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-[#2F855A]">
            Step {step} of 3
          </span>
          <span className="text-slate-400">
            {step === 1
              ? "Account"
              : step === 2
              ? "Verification"
              : "Business"}
          </span>
        </div>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#DCF3E3]">
          <div
            className="h-full rounded-full bg-[#6BC48C] transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {error && (
        <div
          role="alert"
          className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
        >
          {error}
        </div>
      )}

      {/* STEP 1 */}
      {step === 1 && (
        <form
          id="signup-step-1-form"
          onSubmit={handleSubmit(handleStep1Submit)}
          className="space-y-5"
          noValidate
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Your name
            </label>

            <div className="relative">
              <UserRound
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                id="name"
                type="text"
                autoComplete="name"
                placeholder="Your full name"
                aria-invalid={!!errors.name}
                aria-describedby="name-error"
                {...register("name")}
                className={`h-12 w-full rounded-xl border py-3.5 pl-11 pr-4 outline-none transition focus:border-[#6BC48C] focus:ring-4 focus:ring-[#DCF3E3] ${
                  errors.name ? "border-red-300" : "border-slate-200"
                }`}
              />
            </div>

            <FormError id="name-error" message={errors.name?.message} />
          </div>

          <div>
            <label
              htmlFor="businessName"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Business name
            </label>

            <div className="relative">
              <UserRound
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                id="businessName"
                type="text"
                autoComplete="organization"
                placeholder="Your business name"
                aria-invalid={!!errors.businessName}
                aria-describedby="businessName-error"
                {...register("businessName")}
                className={`h-12 w-full rounded-xl border py-3.5 pl-11 pr-4 outline-none transition focus:border-[#6BC48C] focus:ring-4 focus:ring-[#DCF3E3] ${
                  errors.businessName
                    ? "border-red-300"
                    : "border-slate-200"
                }`}
              />
            </div>

            <FormError
              id="businessName-error"
              message={errors.businessName?.message}
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Phone number
            </label>

            <div className="relative">
              <Phone
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="+880 1XXXXXXXXX"
                aria-invalid={!!errors.phone}
                aria-describedby="phone-error"
                {...register("phone")}
                className={`h-12 w-full rounded-xl border py-3.5 pl-11 pr-4 outline-none transition focus:border-[#6BC48C] focus:ring-4 focus:ring-[#DCF3E3] ${
                  errors.phone ? "border-red-300" : "border-slate-200"
                }`}
              />
            </div>

            <FormError id="phone-error" message={errors.phone?.message} />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Email
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                id="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
                aria-describedby="email-error"
                {...register("email")}
                className={`h-12 w-full rounded-xl border py-3.5 pl-11 pr-4 outline-none transition focus:border-[#6BC48C] focus:ring-4 focus:ring-[#DCF3E3] ${
                  errors.email ? "border-red-300" : "border-slate-200"
                }`}
              />
            </div>

            <FormError id="email-error" message={errors.email?.message} />
          </div>

          <div>
            <label
              htmlFor="signup-password"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Password
            </label>

            <div className="relative">
              <LockKeyhole
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                id="signup-password"
                type="password"
                autoComplete="new-password"
                placeholder="Create a password"
                aria-invalid={!!errors.password}
                aria-describedby="signup-password-error"
                {...register("password")}
                className={`h-12 w-full rounded-xl border py-3.5 pl-11 pr-4 outline-none transition focus:border-[#6BC48C] focus:ring-4 focus:ring-[#DCF3E3] ${
                  errors.password
                    ? "border-red-300"
                    : "border-slate-200"
                }`}
              />
            </div>

            <FormError
              id="signup-password-error"
              message={errors.password?.message}
            />

            <PasswordStrength password={watchedPassword} />
          </div>

          <div>
            <label className="flex items-start gap-3 text-sm text-slate-500">
              <input
                type="checkbox"
                {...register("terms")}
                className="mt-1 accent-[#2F855A]"
              />

              <span>I agree to the Terms and Privacy Policy.</span>
            </label>

            <FormError
              id="terms-error"
              message={errors.terms?.message}
            />
          </div>
        </form>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="space-y-6">
          <div className="rounded-2xl bg-[#F0FAF3] p-5 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#94D8AB]">
              <Phone size={21} />
            </div>

            <p className="mt-4 font-bold text-[#14532D]">Verify your phone</p>
            <p className="mt-2 text-sm text-slate-500">
              We sent a 6-digit verification code to{" "}
              <span className="font-semibold text-[#14532D]">{phone}</span>
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
              onChange={(event) => {
                setOtpError("");
                setOtp(event.target.value.replace(/\D/g, "").slice(0, 6));
              }}
              placeholder="000000"
              aria-invalid={!!otpError}
              aria-describedby={otpError ? "otp-error" : undefined}
              className={`h-12 w-full rounded-xl border px-4 text-center text-2xl font-bold tracking-[0.5em] outline-none transition focus:border-[#6BC48C] focus:ring-4 focus:ring-[#DCF3E3] ${
                otpError ? "border-red-300" : "border-slate-200"
              }`}
            />

            <FormError id="otp-error" message={otpError} />
          </div>

          <div className="flex items-center justify-between text-sm">
            {/* UPDATED — resend button with countdown */}
            <button
              type="button"
              disabled={resendCountdown > 0}
              onClick={async () => {
                if (resendCountdown > 0) return;

                try {
                  setError("");
                  setOtpError("");
                  await sendOtp(phone);
                  setResendCountdown(60);
                } catch (err) {
                  setError(getFriendlyError(err.message));
                }
              }}
              className="font-semibold text-[#2F855A] disabled:cursor-not-allowed disabled:text-slate-400"
            >
              {resendCountdown > 0
                ? `Resend code in ${resendCountdown}s`
                : "Resend code"}
            </button>

            <button
              type="button"
              onClick={() => {
                setError("");
                setOtpError("");
                setResendCountdown(0);
                setStep(1);
              }}
              className="text-slate-500 hover:text-[#14532D]"
            >
              Change number
            </button>
          </div>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div className="space-y-4">
          <p className="text-sm text-slate-500">
            Choose the type of business you want to manage with BeezNest.
          </p>

          <button
            type="button"
            onClick={() => setBusinessType("Restaurant")}
            aria-pressed={businessType === "Restaurant"}
            className={`w-full rounded-2xl border p-5 text-left transition ${
              businessType === "Restaurant"
                ? "border-[#6BC48C] bg-[#F0FAF3] ring-2 ring-[#DCF3E3]"
                : "border-slate-200 hover:border-[#BDE8CB]"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-bold text-[#14532D]">Restaurant</p>
                <p className="mt-1 text-sm text-slate-500">
                  Orders, tables, customers and reports.
                </p>
              </div>
              {businessType === "Restaurant" && (
                <Check className="text-[#2F855A]" size={22} />
              )}
            </div>
          </button>

          <button
            type="button"
            onClick={() => setBusinessType("Student Visa Agency")}
            aria-pressed={businessType === "Student Visa Agency"}
            className={`w-full rounded-2xl border p-5 text-left transition ${
              businessType === "Student Visa Agency"
                ? "border-[#6BC48C] bg-[#F0FAF3] ring-2 ring-[#DCF3E3]"
                : "border-slate-200 hover:border-[#BDE8CB]"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-bold text-[#14532D]">
                  Student Visa Agency
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Leads, documents, applications and follow-ups.
                </p>
              </div>
              {businessType === "Student Visa Agency" && (
                <Check className="text-[#2F855A]" size={22} />
              )}
            </div>
          </button>
        </div>
      )}

      <div className="mt-8 flex gap-3">
        {step > 1 && (
          <button
            type="button"
            onClick={() => {
              setError("");
              setOtpError("");
              setStep(step - 1);
            }}
            className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            <ArrowLeft size={17} />
            Back
          </button>
        )}

        <motion.button
          type={step === 1 ? "submit" : "button"}
          form={step === 1 ? "signup-step-1-form" : undefined}
          disabled={loading}
          onClick={step === 1 ? undefined : nextStep}
          whileHover={shouldReduceMotion || loading ? undefined : { y: -2 }}
          whileTap={shouldReduceMotion || loading ? undefined : { scale: 0.98 }}
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
              {step === 1
                ? "Create account"
                : step === 2
                ? "Verify & continue"
                : "Finish setup"}
              <ArrowRight size={17} />
            </>
          )}
        </motion.button>
      </div>

      {step === 1 && (
        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link to="/login" className="font-bold text-[#2F855A]">
            Log in
          </Link>
        </p>
      )}
    </AuthShell>
  );
}