export const restaurantPlans = [
  {
    id: "starter",
    name: "Starter",
    monthly: 1200,
    yearly: 12000,
    description:
      "Everything you need to start managing your restaurant better.",
    features: [
      "Customer management",
      "Sales tracking",
      "Basic reports",
      "Website on your subdomain",
      "AI business assistance",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    monthly: 3000,
    yearly: 30000,
    description:
      "More automation and tools to help your restaurant grow.",
    popular: true,
    features: [
      "Everything in Starter",
      "Advanced CRM",
      "Marketing tools",
      "Advanced reports",
      "AI business insights",
      "Win-back SMS credits",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    monthly: 5500,
    yearly: 55000,
    description:
      "Advanced tools for established restaurants.",
    features: [
      "Everything in Growth",
      "Advanced analytics",
      "Priority support",
      "Advanced automation",
      "More AI assistance",
      "Custom business tools",
    ],
  },
];

export const visaPlans = [
  {
    id: "starter",
    name: "Starter",
    monthly: 1500,
    yearly: 15000,
    description:
      "Essential tools for managing your student visa agency.",
    features: [
      "Student management",
      "Lead tracking",
      "Basic reports",
      "Website on your subdomain",
      "AI business assistance",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    monthly: 3500,
    yearly: 35000,
    description:
      "Advanced tools for growing your student visa agency.",
    popular: true,
    features: [
      "Everything in Starter",
      "Advanced CRM",
      "Follow-up automation",
      "Advanced reports",
      "AI business insights",
      "Marketing tools",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    monthly: 7000,
    yearly: 70000,
    description:
      "Complete tools for established visa agencies.",
    features: [
      "Everything in Growth",
      "Advanced analytics",
      "Priority support",
      "Advanced automation",
      "More AI assistance",
      "Custom business tools",
    ],
  },
];

export const comparisonFeatures = [
  {
    name: "Customer / Student Management",
    starter: true,
    growth: true,
    pro: true,
  },
  {
    name: "CRM",
    starter: true,
    growth: true,
    pro: true,
  },
  {
    name: "Website",
    starter: true,
    growth: true,
    pro: true,
  },
  {
    name: "AI Business Manager",
    starter: true,
    growth: true,
    pro: true,
  },
  {
    name: "Advanced Reports",
    starter: false,
    growth: true,
    pro: true,
  },
  {
    name: "Marketing Automation",
    starter: false,
    growth: true,
    pro: true,
  },
  {
    name: "Advanced Analytics",
    starter: false,
    growth: false,
    pro: true,
  },
  {
    name: "Priority Support",
    starter: false,
    growth: false,
    pro: true,
  },
];