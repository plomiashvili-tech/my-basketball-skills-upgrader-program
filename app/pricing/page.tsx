"use client";

import Link from "next/link";
import { PLANS } from "@/lib/plans";
import { useTranslation } from "@/components/LanguageContext";

export default function PricingPage() {
  const { t } = useTranslation();

  return (
    <div className="container-narrow space-y-12 py-12 sm:py-16">
      <div className="max-w-3xl space-y-3">
        <span className="pill">{t.pricing.badge}</span>
        <h1 className="text-3xl font-bold sm:text-4xl">{t.pricing.title}</h1>
        <p className="text-white/70">{t.pricing.desc}</p>
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
                  <p className="text-3xl font-bold">{t.pricing.free}</p>
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
        <h2 className="text-2xl font-bold">{t.pricing.faqTitle}</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {t.pricing.faqs.map((f) => (
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
