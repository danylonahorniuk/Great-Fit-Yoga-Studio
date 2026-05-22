"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import { useModal } from "./modals/ModalContext";
import { FadeIn } from "./ui/FadeIn";
import { useLang } from "@/contexts/LanguageContext";

const highlights = [false, true, false];

function PlanCard({
  plan,
  highlight,
  popular,
  perMonth,
  openBooking,
}: {
  plan: { name: string; price: string; desc: string; features: string[]; cta: string };
  highlight: boolean;
  popular: string;
  perMonth: string;
  openBooking: () => void;
}) {
  return (
    <div
      className={`rounded-2xl p-6 flex flex-col h-full ${
        highlight
          ? "bg-[#485C46] text-white shadow-2xl"
          : "bg-[#E8E2D6] text-gray-900 shadow-md"
      }`}
    >
      {highlight && (
        <span className="self-start mb-4 bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {popular}
        </span>
      )}
      <p className={`text-sm font-medium mb-1 ${highlight ? "text-white/70" : "text-gray-400"}`}>
        {plan.name}
      </p>
      <div className="flex items-end gap-1 mb-1">
        <span className="text-4xl font-bold">₴{plan.price}</span>
        <span className={`text-sm mb-1.5 ${highlight ? "text-white/60" : "text-gray-400"}`}>{perMonth}</span>
      </div>
      <p className={`text-sm mb-6 ${highlight ? "text-white/70" : "text-gray-400"}`}>{plan.desc}</p>
      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm">
            <span className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
              highlight ? "bg-white/20" : "bg-[#485C46]/10"
            }`}>
              <Check size={10} className={highlight ? "text-white" : "text-[#485C46]"} strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>
      <button
        onClick={openBooking}
        className={`cursor-pointer mt-auto w-full py-3 rounded-lg text-sm font-semibold transition-colors ${
          highlight
            ? "bg-[#E8E2D6] text-[#485C46] hover:bg-[#ddd8cc]"
            : "bg-[#485C46] text-white hover:bg-[#3a4a38]"
        }`}
      >
        {plan.cta}
      </button>
    </div>
  );
}

export default function Pricing() {
  const { openBooking } = useModal();
  const { t } = useLang();
  const [activePlan, setActivePlan] = useState(1); // Popular by default
  const plan = t.pricing.plans[activePlan];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">{t.pricing.title}</h2>
            <p className="text-gray-500 text-base">{t.pricing.subtitle}</p>
          </div>
        </FadeIn>

        {/* Mobile: tabs + full card */}
        <div className="md:hidden">
          {/* Tab row */}
          <div className="flex rounded-xl bg-[#E8E2D6] p-1 mb-5 gap-1">
            {t.pricing.plans.map((p, i) => (
              <button
                key={i}
                onClick={() => setActivePlan(i)}
                className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  activePlan === i
                    ? highlights[i]
                      ? "bg-[#485C46] text-white shadow-sm"
                      : "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500"
                }`}
              >
                {highlights[i] ? "✦ " : ""}{p.name}
              </button>
            ))}
          </div>

          {/* Full card with CSS transition */}
          <div style={{ transition: "opacity 0.2s ease", opacity: 1 }}>
            <PlanCard
              plan={plan}
              highlight={highlights[activePlan]}
              popular={t.pricing.popular}
              perMonth={t.pricing.perMonth}
              openBooking={openBooking}
            />
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 items-center">
          {t.pricing.plans.map((p, i) => (
            <FadeIn key={i} delay={highlights[i] ? 0.1 : 0.3}>
              <div className={highlights[i] ? "md:scale-105" : ""}>
                <PlanCard
                  plan={p}
                  highlight={highlights[i]}
                  popular={t.pricing.popular}
                  perMonth={t.pricing.perMonth}
                  openBooking={openBooking}
                />
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          {t.pricing.footer}
        </p>
      </div>
    </section>
  );
}
