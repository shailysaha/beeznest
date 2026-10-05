import { z } from "zod";

export const signupSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your name.")
    .max(50, "Name is too long."),

  businessName: z
    .string()
    .min(2, "Please enter your business name.")
    .max(100, "Business name is too long."),

  phone: z
    .string()
    .regex(
      /^(?:\+880|880|0)1[3-9]\d{8}$/,
      "Enter a valid Bangladesh phone number."
    ),

  email: z
    .string()
    .email("Enter a valid email address.")
    .optional()
    .or(z.literal("")),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .regex(/[A-Z]/, "Add at least one uppercase letter.")
    .regex(/[a-z]/, "Add at least one lowercase letter.")
    .regex(/[0-9]/, "Add at least one number."),

  terms: z
    .boolean()
    .refine((value) => value === true, {
      message: "You must agree to the Terms and Privacy Policy.",
    }),
});

export const loginSchema = z.object({
  identifier: z
    .string()
    .min(3, "Enter your phone number or email."),

  password: z
    .string()
    .min(1, "Please enter your password."),
});

export const forgotPasswordSchema = z.object({
  identifier: z
    .string()
    .min(3, "Enter your phone number or email."),
});

export const otpSchema = z.object({
  otp: z
    .string()
    .regex(/^\d{6}$/, "Enter the 6-digit verification code."),
});

export const resetPasswordSchema = z.object({
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .regex(/[A-Z]/, "Add at least one uppercase letter.")
    .regex(/[a-z]/, "Add at least one lowercase letter.")
    .regex(/[0-9]/, "Add at least one number."),

  confirmPassword: z.string(),
}).refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  }
);