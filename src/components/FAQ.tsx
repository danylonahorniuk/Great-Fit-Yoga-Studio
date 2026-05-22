"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";
import { useLang } from "@/contexts/LanguageContext";

const VISIBLE_DEFAULT = 4;

export default function FAQ() {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const faqs = t.faq.items;
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-20 bg-[#F5F0E8]">
      <div className="max-w-3xl mx-auto px-6">

        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">{t.faq.title}</h2>
            <p className="text-gray-500 text-base">{t.faq.subtitle}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          {/* Mobile: 4 visible + show more */}
          <div className="md:hidden">
            <div className="bg-white rounded-2xl px-6 divide-y divide-gray-100">
              {faqs.slice(0, VISIBLE_DEFAULT).map((faq, i) => (
                <div key={i}>
                  <button onClick={() => toggle(i)} className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group">
                    <span className={`text-sm font-semibold transition-colors ${openIndex === i ? "text-[#485C46]" : "text-gray-900 group-hover:text-[#485C46]"}`}>{faq.q}</span>
                    <ChevronDown size={18} className="flex-shrink-0 text-gray-400 transition-transform duration-300" style={{ transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)" }} />
                  </button>
                  <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openIndex === i ? "400px" : 0, opacity: openIndex === i ? 1 : 0 }}>
                    <p className="text-gray-600 text-sm leading-relaxed pb-5">{faq.a}</p>
                  </div>
                </div>
              ))}
              {showAll && faqs.slice(VISIBLE_DEFAULT).map((faq, i) => {
                const idx = VISIBLE_DEFAULT + i;
                return (
                  <div key={idx} style={{ opacity: showAll ? 1 : 0, transition: `opacity 0.25s ease ${i * 0.05}s` }}>
                    <button onClick={() => toggle(idx)} className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group">
                      <span className={`text-sm font-semibold transition-colors ${openIndex === idx ? "text-[#485C46]" : "text-gray-900 group-hover:text-[#485C46]"}`}>{faq.q}</span>
                      <ChevronDown size={18} className="flex-shrink-0 text-gray-400 transition-transform duration-300" style={{ transform: openIndex === idx ? "rotate(180deg)" : "rotate(0deg)" }} />
                    </button>
                    <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openIndex === idx ? "400px" : 0, opacity: openIndex === idx ? 1 : 0 }}>
                      <p className="text-gray-600 text-sm leading-relaxed pb-5">{faq.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <button
              onClick={() => { setShowAll(v => !v); if (showAll) setOpenIndex(null); }}
              className="cursor-pointer mt-4 w-full py-3 rounded-xl border border-[#485C46]/30 text-sm font-medium text-[#485C46] hover:bg-[#485C46]/5 transition-colors"
            >
              {showAll ? t.faq.collapse : t.faq.showMore}
            </button>
          </div>

          {/* Desktop: all questions always visible */}
          <div className="hidden md:block bg-white rounded-2xl px-6 divide-y divide-gray-100">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button onClick={() => toggle(i)} className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group">
                  <span className={`text-sm font-semibold transition-colors ${openIndex === i ? "text-[#485C46]" : "text-gray-900 group-hover:text-[#485C46]"}`}>{faq.q}</span>
                  <ChevronDown size={18} className="flex-shrink-0 text-gray-400 transition-transform duration-300" style={{ transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)" }} />
                </button>
                <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openIndex === i ? "400px" : 0, opacity: openIndex === i ? 1 : 0 }}>
                  <p className="text-gray-600 text-sm leading-relaxed pb-5">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
