export type Plan = {
  id: "free-beginner" | "three-month" | "six-month" | "one-year";
  name: string;
  durationLabel: string;
  priceUSD: number | "free";
  monthlyEquivalent?: string;
  badge?: string;
  bullets: string[];
  cta: string;
  audience: string;
};

export const PLANS: Plan[] = [
  {
    id: "free-beginner",
    name: "Free Beginner Month",
    durationLabel: "1 month free",
    priceUSD: "free",
    badge: "For first-time beginners",
    audience: "Brand new players, ages 7+",
    bullets: [
      "All beginner lessons unlocked (Lesson 0 → Lesson 3)",
      "Parent dashboard with progress tracking",
      "Cancel anytime — no card required",
      "Upgrade later if you want to continue",
    ],
    cta: "Start free",
  },
  {
    id: "three-month",
    name: "3 Month Program",
    durationLabel: "3 months",
    priceUSD: 49,
    monthlyEquivalent: "~$16.33 / month",
    audience: "Players who want a focused improvement push",
    bullets: [
      "All beginner + intermediate lessons",
      "Personalized lesson order based on starting level",
      "Parent dashboard with weekly progress emails",
      "Drill library you can revisit any time",
    ],
    cta: "Choose 3 months",
  },
  {
    id: "six-month",
    name: "6 Month Program",
    durationLabel: "6 months",
    priceUSD: 89,
    monthlyEquivalent: "~$14.83 / month",
    badge: "Most popular",
    audience: "Players ready to make a real season-long jump",
    bullets: [
      "Everything in the 3 month plan",
      "Advanced lessons unlocked",
      "Monthly skills check-in video review",
      "Early access to new lessons as they release",
    ],
    cta: "Choose 6 months",
  },
  {
    id: "one-year",
    name: "1 Year Program",
    durationLabel: "12 months",
    priceUSD: 149,
    monthlyEquivalent: "~$12.42 / month",
    badge: "Best value",
    audience: "Serious players committed for a full year",
    bullets: [
      "Everything in the 6 month plan",
      "Live webcam coach view (coming soon)",
      "Quarterly 1-on-1 video feedback",
      "Lock in this price for the full year",
    ],
    cta: "Choose 1 year",
  },
];
