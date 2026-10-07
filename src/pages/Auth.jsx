// src/pages/Auth.jsx
import { useEffect, useRef, useState } from "react";
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

import logo from "../assets/beeznest-logo.jpeg";

import {
  loginUser,
  signupUser,
  sendOtp,
  verifyOtp,
} from "../services/authService";
import FormError from "../components/common/FormError";
import PasswordStrength from "../components/auth/PasswordStrength";
import { getFriendlyError } from "../utils/errors";
import { useLanguage } from "../context/LanguageContext";

/* =====================================================
   AUTH SHELL
===================================================== */
function AuthShell({
  children,
  title,
  description,
  mode = "login",
  eyebrow,
}) {
  const { t } = useLanguage();
  const isSignup = mode === "signup";
  const defaultEyebrow = isSignup
    ? t("Get started with BeezNest")
    : t("Welcome back");

  return (
    <div className="min-h-screen bg-white">
      <div className="grid min-h-screen lg:grid-cols-[46%_54%]">
        {/* LEFT — AUTH FORM */}
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-5 py-10 sm:px-8 lg:px-12">
          <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-[#DCF3E3]/60 blur-3xl" />

          <div className="relative z-10 w-full max-w-[420px]">
            <Link
              to="/"
              className="mb-10 inline-flex items-center gap-3 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#DCF3E3]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white ring-1 ring-[#BDE8CB] shadow-sm">
                <img
                  src={logo}
                  alt="BeezNest logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <span className="text-xl font-black tracking-tight text-[#14532D]">
                BeezNest
              </span>
            </Link>

            <div className="mb-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#BDE8CB] bg-[#F0FAF3] px-3 py-1.5 text-xs font-bold text-[#2F855A]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2F855A]" />
                {eyebrow || defaultEyebrow}
              </div>

              <h1 className="text-[30px] font-black tracking-tight text-[#14532D] sm:text-[32px]">
                {title}
              </h1>

              <p className="mt-3 text-[15px] leading-6 text-slate-500">
                {description}
              </p>
            </div>

            <div className="animate-[fadeUp_0.5s_ease-out]">{children}</div>

            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400 lg:hidden">
              <LockKeyhole size={14} className="text-[#2F855A]" />
              {t("Your data is private and protected")}
            </div>
          </div>
        </div>

        {/* RIGHT — VISUAL PANEL */}
        <div className="relative hidden min-h-screen overflow-hidden bg-[#F0FAF3] lg:flex">
          <div
            className="absolute inset-0 opacity-[0.45]"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 20%, rgba(148,216,171,0.35), transparent 28%),
                radial-gradient(circle at 80% 70%, rgba(107,196,140,0.22), transparent 30%),
                linear-gradient(30deg, transparent 24%, rgba(47,133,90,0.06) 25%, rgba(47,133,90,0.06) 26%, transparent 27%, transparent 74%, rgba(47,133,90,0.06) 75%, rgba(47,133,90,0.06) 76%, transparent 77%),
                linear-gradient(150deg, transparent 24%, rgba(47,133,90,0.06) 25%, rgba(47,133,90,0.06) 26%, transparent 27%, transparent 74%, rgba(47,133,90,0.06) 75%, rgba(47,133,90,0.06) 76%, transparent 77%)
              `,
              backgroundSize: "180px 104px",
            }}
          />

          <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border-[70px] border-[#BDE8CB]/30" />
          <div className="absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full border-[80px] border-[#94D8AB]/20" />

          <div className="relative z-10 flex w-full items-center justify-center px-10 py-12 xl:px-16">
            <div className="relative w-full max-w-[620px]">
              <div className="mb-8 max-w-lg">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg shadow-[#2F855A]/10">
                  <span className="text-xl">✦</span>
                </div>

                <h2 className="text-4xl font-black leading-[1.08] tracking-tight text-[#14532D] xl:text-5xl">
                  {isSignup ? (
                    <>
                      {t("One workspace for your")}{" "}
                      <span className="bg-gradient-to-r from-[#2F855A] to-[#6BC48C] bg-clip-text text-transparent">
                        {t("whole business.")}
                      </span>
                    </>
                  ) : (
                    <>
                      {t("Your business has a manager that")}{" "}
                      <span className="bg-gradient-to-r from-[#2F855A] to-[#6BC48C] bg-clip-text text-transparent">
                        {t("never sleeps.")}
                      </span>
                    </>
                  )}
                </h2>

                <p className="mt-5 max-w-md text-base leading-7 text-slate-600">
                  {isSignup
                    ? t("Bring your business tools, customer information and daily operations together with BeezNest.")
                    : t("See your business clearly, understand what is happening, and make better decisions from one place.")}
                </p>
              </div>

              <div className="relative mt-10 h-[360px]">
                <div className="absolute left-1/2 top-4 w-[82%] -translate-x-1/2 rounded-[2rem] border border-white/80 bg-white/75 p-5 shadow-[0_30px_80px_rgba(20,83,45,0.14)] backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-slate-400">
                        BeezNest
                      </p>
                      <h3 className="mt-1 text-lg font-black text-[#14532D]">
                        {t("Business overview")}
                      </h3>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DCF3E3] text-[#2F855A]">
                      <BarChart3Icon />
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-[#F0FAF3] p-4">
                      <p className="text-[11px] font-medium text-slate-400">
                        {t("This week")}
                      </p>
                      <p className="mt-1 text-xl font-black text-[#14532D]">
                        ৳84,500
                      </p>
                    </div>
                    <div className="rounded-2xl bg-[#F0FAF3] p-4">
                      <p className="text-[11px] font-medium text-slate-400">
                        {t("Customers")}
                      </p>
                      <p className="mt-1 text-xl font-black text-[#14532D]">
                        128
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex h-24 items-end gap-2 rounded-2xl bg-[#F8FCF9] p-4">
                    {[35, 48, 42, 62, 55, 76, 68, 86].map((height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t-md bg-[#94D8AB]"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="absolute -left-2 bottom-4 w-52 rounded-2xl border border-white/60 bg-[#14532D]/95 p-4 text-white shadow-2xl backdrop-blur-xl xl:-left-8">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6BC48C] text-[#14532D]">
                      ✦
                    </div>
                    <span className="text-xs font-bold text-green-100">
                      {t("AI Business Manager")}
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-bold leading-5">
                    {isSignup
                      ? t("Your next business insight is one click away.")
                      : t("3 opportunities found for your business.")}
                  </p>
                </div>

                <div className="absolute -right-2 bottom-16 w-48 rounded-2xl border border-white/70 bg-white/80 p-4 shadow-2xl backdrop-blur-xl xl:-right-8">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">
                      {isSignup ? t("New order") : t("Sales today")}
                    </span>
                    <span className="rounded-full bg-[#DCF3E3] px-2 py-1 text-[10px] font-bold text-[#2F855A]">
                      {t("Live")}
                    </span>
                  </div>
                  <p className="mt-3 text-2xl font-black text-[#14532D]">
                    {isSignup ? "৳2,450" : "৳18,240"}
                  </p>
                  <div className="mt-2 flex items-center gap-1 text-xs font-bold text-[#2F855A]">
                    <ArrowUpIcon />
                    {t("Growing steadily")}
                  </div>
                </div>

                <div className="absolute right-[18%] top-0 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-xs font-bold text-[#14532D] shadow-xl backdrop-blur-xl">
                  ✦ {t("Smart insights")}
                </div>
              </div>

              <div className="mt-2 flex items-center gap-2 text-sm font-medium text-[#2F855A]">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm">
                  <LockKeyhole size={14} />
                </div>
                {t("Your data is private and protected")}
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
      </div>

      <FormError id={errorId} message={error} />
    </div>
  );
}

/* ============================== SCHEMAS ============================== */

const loginSchema = z.object({
  identifier: z.string().trim().min(1, "Please enter your phone or email."),
  password: z.string().min(1, "Please enter your password."),
});

const signupStep1Schema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  businessName: z.string().trim().min(2, "Please enter your business name."),
  phone: z
    .string()
    .trim()
    .min(1, "Please enter your phone number.")
    .regex(
      /^(?:\+880\s?1|01)[3-9]\d{8}$/,
      "Please enter a valid Bangladesh phone number."
    ),
  email: z.string().trim().email("Please enter a valid email address."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .regex(/[A-Z]/, "Password must contain an uppercase letter.")
    .regex(/[a-z]/, "Password must contain a lowercase letter.")
    .regex(/\d/, "Password must contain a number."),
  terms: z.boolean().refine((value) => value === true, {
    message: "You must agree to the Terms and Privacy Policy.",
  }),
});

/* ============================== LOGIN ============================== */

export function Login() {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();

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
      localStorage.setItem("biznest_user", JSON.stringify(response.user));
      navigate("/");
    } catch (err) {
      setError(getFriendlyError(err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell
      mode="login"
      eyebrow={t("Welcome back")}
      title={t("Run your business with confidence.")}
      description={t("Sign in to manage your business, customers, sales, and smart insights from one workspace.")}
    >
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="mb-7">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#BDE8CB] bg-[#F0FAF3] px-3 py-1.5 text-xs font-semibold text-[#2F855A]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2F855A]" />
            {t("Secure business access")}
          </div>

          <h2 className="text-[30px] font-extrabold leading-tight tracking-[-0.03em] text-slate-900">
            {t("Welcome")}
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            {t("Login to continue protecting and growing your business.")}
          </p>
        </div>

        <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">
          <div>
            <label
              htmlFor="identifier"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              {t("Email or phone number")}
            </label>

            <div className="group relative">
              <Mail
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#2F855A]"
              />
              <input
                id="identifier"
                type="text"
                placeholder="you@example.com"
                autoComplete="username"
                {...register("identifier")}
                className={`h-12 w-full rounded-full border bg-white pl-11 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:ring-4 focus:ring-[#DCF3E3] ${
                  errors.identifier
                    ? "border-red-400 focus:border-red-400"
                    : "border-[#94D8AB] focus:border-[#2F855A]"
                }`}
              />
            </div>

            {errors.identifier && (
              <p className="mt-2 text-xs font-medium text-red-500">
                {errors.identifier.message}
              </p>
            )}
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-slate-700"
              >
                {t("Password")}
              </label>

              <Link
                to="/forgot-password"
                className="text-xs font-semibold text-[#2F855A] transition-colors hover:text-[#14532D]"
              >
                {t("Forgot password?")}
              </Link>
            </div>

            <div className="group relative">
              <LockKeyhole
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#2F855A]"
              />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder={t("Enter your password")}
                autoComplete="current-password"
                {...register("password")}
                className={`h-12 w-full rounded-full border bg-white pl-11 pr-12 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:ring-4 focus:ring-[#DCF3E3] ${
                  errors.password
                    ? "border-red-400 focus:border-red-400"
                    : "border-[#94D8AB] focus:border-[#2F855A]"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                aria-label={showPassword ? t("Hide password") : t("Show password")}
                className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition hover:bg-[#F0FAF3] hover:text-[#2F855A]"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {errors.password && (
              <p className="mt-2 text-xs font-medium text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {error && (
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600"
            >
              {error}
            </motion.div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="group flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2F855A] to-[#6BC48C] px-5 text-sm font-bold text-white shadow-[0_12px_28px_rgba(47,133,90,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(47,133,90,0.28)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
          >
            {loading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                {t("Signing in...")}
              </>
            ) : (
              <>
                {t("Sign in")}
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </>
            )}
          </button>

          <div className="relative py-1">
            <div className="absolute inset-x-0 top-1/2 h-px bg-slate-200" />
            <div className="relative mx-auto w-fit bg-white px-3 text-xs font-medium text-slate-400">
              {t("or continue with")}
            </div>
          </div>

          <button
            type="button"
            className="flex h-12 w-full items-center justify-center gap-3 rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-[#94D8AB] hover:bg-[#F0FAF3] hover:shadow-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#4285F4" d="M21.35 12.27c0-.68-.06-1.34-.17-1.97H12v3.73h5.23a4.47 4.47 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.92-4.18 2.92-7.15Z" />
              <path fill="#34A853" d="M12 21.96c2.63 0 4.84-.87 6.45-2.36l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.7-1.72-5.47-4.03H3.29v2.53A9.74 9.74 0 0 0 12 21.96Z" />
              <path fill="#FBBC05" d="M6.53 14.04a5.86 5.86 0 0 1 0-3.74V7.77H3.29a9.75 9.75 0 0 0 0 8.8l3.24-2.53Z" />
              <path fill="#EA4335" d="M12 6.27c1.43 0 2.71.49 3.72 1.46l2.79-2.79C16.83 3.37 14.63 2.4 12 2.4a9.74 9.74 0 0 0-8.71 5.37l3.24 2.53C7.3 7.99 9.46 6.27 12 6.27Z" />
            </svg>
            {t("Continue with Google")}
          </button>
        </form>

        <div className="mt-7 text-center text-sm text-slate-500">
          {t("Don't have an account?")}{" "}
          <Link
            to="/signup"
            className="font-bold text-[#2F855A] transition-colors hover:text-[#14532D]"
          >
            {t("Create an account")}
          </Link>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
          <Check size={14} className="text-[#2F855A]" />
          {t("Your business information stays protected.")}
        </div>
      </motion.div>
    </AuthShell>
  );
}

/* ============================== SIGNUP ============================== */
export function Signup() {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();

  const savedBusinessType = localStorage.getItem("biznest_business_type");

  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpError, setOtpError] = useState("");
  const [verified, setVerified] = useState(false);

  const otpInputRefs = Array.from({ length: 6 }, () => useRef(null));

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

  useEffect(() => {
    if (resendCountdown <= 0) return;
    const timer = setInterval(() => {
      setResendCountdown((current) => (current <= 1 ? 0 : current - 1));
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
      setResendCountdown(60);
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
      const otpValue = otp.join("");
      if (otpValue.length !== 6) {
        setOtpError(t("Please enter the 6-digit verification code."));
        return;
      }
      try {
        setLoading(true);
        await verifyOtp(phone, otpValue);
        setVerified(true);
        setTimeout(() => {
          setVerified(false);
          setStep(3);
        }, 900);
      } catch (err) {
        setError(getFriendlyError(err.message));
      } finally {
        setLoading(false);
      }
      return;
    }

    if (step === 3) {
      if (!businessType) {
        setError(t("Please choose your business type."));
        return;
      }

      // FIX: Save the business type WITHOUT removing it
      const savedType =
        businessType === "Restaurant" ? "restaurant" : "visa-agency";

      localStorage.setItem("biznest_business_type", savedType);

      navigate("/");
    }
  };

  return (
    <AuthShell
      mode="signup"
      eyebrow={t("Start your journey")}
      title={t("Build a smarter business.")}
      description={t("Create your BeezNest account in three simple steps.")}
    >
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        {/* ================= STEP HEADER ================= */}
        <div className="mb-7">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2F855A]">
                {t("Your setup")}
              </p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900">
                {step === 1
                  ? t("Create your account")
                  : step === 2
                  ? t("Verify your phone")
                  : t("Choose your business")}
              </h2>
            </div>
            <div className="rounded-full bg-[#F0FAF3] px-3 py-1.5 text-xs font-bold text-[#2F855A]">
              {step} / 3
            </div>
          </div>

          <div className="flex items-center gap-2">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex flex-1 items-center gap-2">
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all ${
                    step >= item
                      ? "bg-[#2F855A] text-white shadow-[0_5px_15px_rgba(47,133,90,0.2)]"
                      : "bg-[#DCF3E3] text-[#2F855A]"
                  }`}
                >
                  {step > item ? <Check size={15} /> : item}
                </div>
                {item !== 3 && (
                  <div
                    className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                      step > item ? "bg-[#6BC48C]" : "bg-[#DCF3E3]"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mt-2 flex justify-between text-[11px] font-medium text-slate-400">
            <span>{t("Create account")}</span>
            <span>{t("Verify phone")}</span>
            <span>{t("Business type")}</span>
          </div>
        </div>

        {/* ================= ERROR ================= */}
        {error && (
          <motion.div
            role="alert"
            initial={shouldReduceMotion ? false : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600"
          >
            <span className="mt-0.5">!</span>
            <span>{error}</span>
          </motion.div>
        )}

        {/* =========================================================
            STEP 1 — CREATE ACCOUNT
        ========================================================= */}
        {step === 1 && (
          <form
            id="signup-step-1-form"
            onSubmit={handleSubmit(handleStep1Submit)}
            className="space-y-4"
            noValidate
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">
                {t("Your name")}
              </label>
              <div className="group relative">
                <UserRound
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition group-focus-within:text-[#2F855A]"
                />
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  placeholder={t("Your full name")}
                  aria-invalid={!!errors.name}
                  {...register("name")}
                  className={`h-12 w-full rounded-full border bg-white pl-11 pr-4 text-sm outline-none transition focus:ring-4 focus:ring-[#DCF3E3] ${
                    errors.name
                      ? "border-red-300"
                      : "border-[#94D8AB] focus:border-[#2F855A]"
                  }`}
                />
              </div>
              <FormError id="name-error" message={errors.name?.message} />
            </div>

            <div>
              <label htmlFor="businessName" className="mb-2 block text-sm font-semibold text-slate-700">
                {t("Business name")}
              </label>
              <div className="group relative">
                <UserRound
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition group-focus-within:text-[#2F855A]"
                />
                <input
                  id="businessName"
                  type="text"
                  autoComplete="organization"
                  placeholder={t("Your business name")}
                  aria-invalid={!!errors.businessName}
                  {...register("businessName")}
                  className={`h-12 w-full rounded-full border bg-white pl-11 pr-4 text-sm outline-none transition focus:ring-4 focus:ring-[#DCF3E3] ${
                    errors.businessName
                      ? "border-red-300"
                      : "border-[#94D8AB] focus:border-[#2F855A]"
                  }`}
                />
              </div>
              <FormError id="businessName-error" message={errors.businessName?.message} />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-700">
                {t("Phone number")}
              </label>
              <div className="group relative">
                <Phone
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition group-focus-within:text-[#2F855A]"
                />
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="+880 1XXXXXXXXX"
                  aria-invalid={!!errors.phone}
                  {...register("phone")}
                  className={`h-12 w-full rounded-full border bg-white pl-11 pr-4 text-sm outline-none transition focus:ring-4 focus:ring-[#DCF3E3] ${
                    errors.phone
                      ? "border-red-300"
                      : "border-[#94D8AB] focus:border-[#2F855A]"
                  }`}
                />
              </div>
              <FormError id="phone-error" message={errors.phone?.message} />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
                {t("Email address")}
              </label>
              <div className="group relative">
                <Mail
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition group-focus-within:text-[#2F855A]"
                />
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                  {...register("email")}
                  className={`h-12 w-full rounded-full border bg-white pl-11 pr-4 text-sm outline-none transition focus:ring-4 focus:ring-[#DCF3E3] ${
                    errors.email
                      ? "border-red-300"
                      : "border-[#94D8AB] focus:border-[#2F855A]"
                  }`}
                />
              </div>
              <FormError id="email-error" message={errors.email?.message} />
            </div>

            <div>
              <label htmlFor="signup-password" className="mb-2 block text-sm font-semibold text-slate-700">
                {t("Password")}
              </label>
              <div className="group relative">
                <LockKeyhole
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition group-focus-within:text-[#2F855A]"
                />
                <input
                  id="signup-password"
                  type="password"
                  autoComplete="new-password"
                  placeholder={t("Create a strong password")}
                  aria-invalid={!!errors.password}
                  {...register("password")}
                  className={`h-12 w-full rounded-full border bg-white pl-11 pr-4 text-sm outline-none transition focus:ring-4 focus:ring-[#DCF3E3] ${
                    errors.password
                      ? "border-red-300"
                      : "border-[#94D8AB] focus:border-[#2F855A]"
                  }`}
                />
              </div>
              <FormError id="signup-password-error" message={errors.password?.message} />
              <PasswordStrength password={watchedPassword} />
            </div>

            <div className="rounded-2xl border border-[#DCF3E3] bg-[#F0FAF3] p-3.5">
              <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-600">
                <input
                  type="checkbox"
                  {...register("terms")}
                  className="mt-1 h-4 w-4 accent-[#2F855A]"
                />
                <span className="leading-5">
                  {t("I agree to the")}{" "}
                  <span className="font-semibold text-[#2F855A]">{t("Terms")}</span>{" "}
                  {t("and")}{" "}
                  <span className="font-semibold text-[#2F855A]">{t("Privacy Policy")}</span>.
                </span>
              </label>
              <FormError id="terms-error" message={errors.terms?.message} />
            </div>
          </form>
        )}

        {/* =========================================================
            STEP 2 — OTP
        ========================================================= */}
        {step === 2 && (
          <motion.div
            key="otp"
            initial={shouldReduceMotion ? false : { opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-[#BDE8CB] bg-gradient-to-br from-[#F0FAF3] to-white p-5 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DCF3E3] text-[#2F855A]">
                <Phone size={23} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#14532D]">
                {t("Check your phone")}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {t("We sent a 6-digit verification code to")}
              </p>
              <p className="mt-1 font-bold text-[#14532D]">{phone}</p>
            </div>

            <div>
              <label className="mb-3 block text-center text-sm font-semibold text-slate-700">
                {t("Enter verification code")}
              </label>

              <div className="flex justify-center gap-1.5 xs:gap-2 sm:gap-3">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(element) => {
                      otpInputRefs[index].current = element;
                    }}
                    type="text"
                    inputMode="numeric"
                    autoComplete={index === 0 ? "one-time-code" : "off"}
                    maxLength={1}
                    value={digit}
                    aria-label={`Verification digit ${index + 1}`}
                    onChange={(event) => {
                      const value = event.target.value.replace(/\D/g, "").slice(-1);
                      const updatedOtp = [...otp];
                      updatedOtp[index] = value;
                      setOtp(updatedOtp);
                      setOtpError("");
                      if (value && index < 5) {
                        otpInputRefs[index + 1].current?.focus();
                      }
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Backspace" && !otp[index] && index > 0) {
                        otpInputRefs[index - 1].current?.focus();
                      }
                    }}
                    onPaste={(event) => {
                      event.preventDefault();
                      const pasted = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
                      if (!pasted) return;
                      const updatedOtp = [...otp];
                      pasted.split("").forEach((digit, pasteIndex) => {
                        if (index + pasteIndex < 6) {
                          updatedOtp[index + pasteIndex] = digit;
                        }
                      });
                      setOtp(updatedOtp);
                      setOtpError("");
                      const nextIndex = Math.min(index + pasted.length, 5);
                      otpInputRefs[nextIndex].current?.focus();
                    }}
                    className={`h-12 w-10 rounded-2xl border bg-white text-center text-xl font-extrabold text-[#14532D] outline-none transition-all focus:-translate-y-0.5 focus:ring-4 focus:ring-[#DCF3E3] sm:h-14 sm:w-12 ${
                      otpError
                        ? "border-red-300"
                        : "border-[#94D8AB] focus:border-[#2F855A]"
                    }`}
                  />
                ))}
              </div>

              {otpError && (
                <p className="mt-3 text-center text-xs font-medium text-red-500">
                  {otpError}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between text-sm">
              <button
                type="button"
                disabled={resendCountdown > 0}
                onClick={async () => {
                  if (resendCountdown > 0) return;
                  try {
                    setError("");
                    setOtpError("");
                    await sendOtp(phone);
                    setOtp(["", "", "", "", "", ""]);
                    setResendCountdown(60);
                    setTimeout(() => {
                      otpInputRefs[0].current?.focus();
                    }, 50);
                  } catch (err) {
                    setError(getFriendlyError(err.message));
                  }
                }}
                className="font-bold text-[#2F855A] transition hover:text-[#14532D] disabled:cursor-not-allowed disabled:text-slate-400"
              >
                {resendCountdown > 0
                  ? `${t("Resend code in")} ${resendCountdown}s`
                  : t("Resend code")}
              </button>

              <button
                type="button"
                onClick={() => {
                  setError("");
                  setOtpError("");
                  setOtp(["", "", "", "", "", ""]);
                  setResendCountdown(0);
                  setStep(1);
                }}
                className="font-medium text-slate-500 transition hover:text-[#14532D]"
              >
                {t("Change number")}
              </button>
            </div>
          </motion.div>
        )}

        {/* =========================================================
            VERIFIED SUCCESS STATE
        ========================================================= */}
        {verified && (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="mb-5 flex flex-col items-center justify-center rounded-3xl border border-[#BDE8CB] bg-[#F0FAF3] px-6 py-8 text-center"
          >
            <motion.div
              initial={shouldReduceMotion ? false : { scale: 0.7 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.35 }}
              className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2F855A] text-white shadow-[0_10px_25px_rgba(47,133,90,0.22)]"
            >
              <Check size={30} strokeWidth={3} />
            </motion.div>
            <h3 className="mt-4 text-lg font-extrabold text-[#14532D]">
              {t("Phone verified!")}
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              {t("Your phone number has been successfully verified.")}
            </p>
          </motion.div>
        )}

        {/* =========================================================
            STEP 3 — BUSINESS TYPE
        ========================================================= */}
        {step === 3 && (
          <motion.div
            key="business"
            initial={shouldReduceMotion ? false : { opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="mb-5">
              <p className="text-sm leading-6 text-slate-500">
                {t("Tell us what kind of business you want to manage with BeezNest.")}
              </p>
            </div>

            {/* RESTAURANT BUTTON — updated with localStorage.setItem */}
            <button
              type="button"
              onClick={() => {
                setBusinessType("Restaurant");
                localStorage.setItem("biznest_business_type", "restaurant");
                setError("");
              }}
              aria-pressed={businessType === "Restaurant"}
              className={`group w-full rounded-3xl border p-5 text-left transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#DCF3E3] ${
                businessType === "Restaurant"
                  ? "border-[#6BC48C] bg-[#F0FAF3] shadow-[0_12px_30px_rgba(47,133,90,0.12)] ring-2 ring-[#DCF3E3]"
                  : "border-slate-200 bg-white hover:-translate-y-1 hover:border-[#94D8AB] hover:shadow-[0_14px_30px_rgba(47,133,90,0.10)]"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl transition ${businessType === "Restaurant" ? "bg-[#2F855A] text-white" : "bg-[#F0FAF3]"}`}>
                  🍽️
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-lg font-extrabold text-[#14532D]">
                    {t("Restaurant")}
                  </p>
                  <p className="mt-1 text-sm leading-5 text-slate-500">
                    {t("Manage orders, tables, customers, menu and reports.")}
                  </p>
                </div>
                <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 transition ${businessType === "Restaurant" ? "border-[#2F855A] bg-[#2F855A] text-white" : "border-slate-200 text-transparent"}`}>
                  <Check size={15} />
                </div>
              </div>
            </button>

            {/* VISA AGENCY BUTTON — updated with localStorage.setItem */}
            <button
              type="button"
              onClick={() => {
                setBusinessType("Student Visa Agency");
                localStorage.setItem("biznest_business_type", "visa-agency");
                setError("");
              }}
              aria-pressed={businessType === "Student Visa Agency"}
              className={`group w-full rounded-3xl border p-5 text-left transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#DCF3E3] ${
                businessType === "Student Visa Agency"
                  ? "border-[#6BC48C] bg-[#F0FAF3] shadow-[0_12px_30px_rgba(47,133,90,0.12)] ring-2 ring-[#DCF3E3]"
                  : "border-slate-200 bg-white hover:-translate-y-1 hover:border-[#94D8AB] hover:shadow-[0_14px_30px_rgba(47,133,90,0.10)]"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl transition ${businessType === "Student Visa Agency" ? "bg-[#2F855A] text-white" : "bg-[#F0FAF3]"}`}>
                  ✈️
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-lg font-extrabold text-[#14532D]">
                    {t("Visa Agency")}
                  </p>
                  <p className="mt-1 text-sm leading-5 text-slate-500">
                    {t("Manage leads, documents, applications and follow-ups.")}
                  </p>
                </div>
                <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 transition ${businessType === "Student Visa Agency" ? "border-[#2F855A] bg-[#2F855A] text-white" : "border-slate-200 text-transparent"}`}>
                  <Check size={15} />
                </div>
              </div>
            </button>

            {businessType && (
              <div className="flex items-center gap-2 rounded-2xl bg-[#F0FAF3] px-4 py-3 text-xs font-semibold text-[#2F855A]">
                <Check size={15} />
                {businessType === "Restaurant"
                  ? t("Restaurant selected")
                  : t("Visa Agency selected")}
              </div>
            )}
          </motion.div>
        )}

        {/* =========================================================
            NAVIGATION
        ========================================================= */}
        <div className="mt-7 flex gap-3">
          {step > 1 && (
            <button
              type="button"
              onClick={() => {
                setError("");
                setOtpError("");
                setStep(step - 1);
              }}
              className="flex h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 text-sm font-bold text-slate-600 transition hover:-translate-y-0.5 hover:border-[#BDE8CB] hover:bg-[#F0FAF3] focus:outline-none focus:ring-4 focus:ring-[#DCF3E3]"
            >
              <ArrowLeft size={16} />
              {t("Back")}
            </button>
          )}

          <motion.button
            type={step === 1 ? "submit" : "button"}
            form={step === 1 ? "signup-step-1-form" : undefined}
            disabled={loading}
            onClick={step === 1 ? undefined : nextStep}
            whileHover={shouldReduceMotion || loading ? undefined : { y: -2 }}
            whileTap={shouldReduceMotion || loading ? undefined : { scale: 0.98 }}
            className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2F855A] to-[#6BC48C] px-6 text-sm font-bold text-white shadow-[0_12px_28px_rgba(47,133,90,0.2)] transition-all hover:shadow-[0_16px_34px_rgba(47,133,90,0.28)] focus:outline-none focus:ring-4 focus:ring-[#DCF3E3] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                {t("Please wait...")}
              </>
            ) : (
              <>
                {step === 1
                  ? t("Create account")
                  : step === 2
                  ? t("Verify & continue")
                  : t("Finish setup")}
                <ArrowRight size={17} />
              </>
            )}
          </motion.button>
        </div>

        {step === 1 && (
          <p className="mt-6 text-center text-sm text-slate-500">
            {t("Already have an account?")}{" "}
            <Link
              to="/login"
              className="font-bold text-[#2F855A] transition hover:text-[#14532D]"
            >
              {t("Log in")}
            </Link>
          </p>
        )}

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
          <Check size={14} className="text-[#2F855A]" />
          {t("Secure account setup")}
        </div>
      </motion.div>
    </AuthShell>
  );
}

/* =====================================================
   INLINE SVG HELPERS FOR THE NEW AUTH SHELL
===================================================== */

function BarChart3Icon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 3v18h18" />
      <path d="M7 16v-5" />
      <path d="M12 16V7" />
      <path d="M17 16v-8" />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12l7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}