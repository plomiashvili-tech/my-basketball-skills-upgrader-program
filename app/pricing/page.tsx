import Link from "next/link";
import { PLANS } from "@/lib/plans";

const faqs = [
  {
    q: "Is the free month really free?",
    a: "Yes. Beginners can take their entire first month with no credit card on file. You'll only be asked to pick a paid plan if you choose to continue.",
  },
  {
    q: "What if my child is already playing for 1–2 years?",
    a: "We recommend the 3 or 6 month plan. The intermediate track skips Lesson 0 basics and focuses on the weak hand, crossover, and shooting under control.",
  },
  {
    q: "Can two children share one account?",
    a: "Right now each account is for one player so progress is tracked correctly. We're working on a family plan for siblings.",
  },
  {
    q: "When is live parent webcam view available?",
    a: "It's in development. The progress dashboard is live today; live webcam view ships with the 6 and 12 month plans first.",
  },
];

export default function PricingPage() {
  return (
    <div className="container-narrow space-y-12 py-12 sm:py-16">
      <div className="max-w-3xl space-y-3">
        <span className="pill">Pricing</span>
        <h1 className="text-3xl font-bold sm:text-4xl">Choose how long you want to train</h1>
        <p className="text-white/70">
          Beginners start with one month free. After that, pick a 3, 6, or 12-month plan —
          longer plans cost less per month.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {PLANS.map((plan) => {
          const isFree = plan.priceUSD === "free";
          return (
            <div
              key={plan.id}
              className={`flex flex-col rounded-2xl border p-6 ${
                plan.badge === "Most popular"
                  ? "border-court-400 bg-court-500/10 shadow-lg shadow-court-500/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <div className="space-y-2">
                {plan.badge && (
                  <span className="inline-flex items-center rounded-full bg-court-500 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-slate-950">
                    {plan.badge}
                  </span>
                )}
                <h2 className="text-xl font-semibold">{plan.name}</h2>
                <p className="text-sm text-white/60">{plan.audience}</p>
              </div>

              <div className="mt-5">
                {isFree ? (
                  <p className="text-3xl font-bold">Free</p>
                ) : (
                  <p className="text-3xl font-bold">
                    ${plan.priceUSD}
                    <span className="ml-1 text-base font-normal text-white/60">
                      / {plan.durationLabel}
                    </span>
                  </p>
                )}
                {plan.monthlyEquivalent && (
                  <p className="mt-1 text-sm text-white/55">{plan.monthlyEquivalent}</p>
                )}
              </div>

              <ul className="mt-5 flex-1 space-y-2 text-sm text-white/80">
                {plan.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span aria-hidden className="mt-0.5 text-court-400">
                      ✓
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={isFree ? "/lessons?level=beginner" : `/checkout?plan=${plan.id}`}
                className={`mt-6 ${isFree ? "btn-ghost" : "btn-primary"}`}
              >
                {plan.cta}
              </Link>
            </div>
          );
        })}
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">FAQ</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="card">
              <p className="font-semibold">{f.q}</p>
              <p className="mt-2 text-sm text-white/75">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
