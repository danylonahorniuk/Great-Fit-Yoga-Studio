"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useModal } from "./modals/ModalContext";
import { FadeIn } from "./ui/FadeIn";
import { useLang } from "@/contexts/LanguageContext";

const tabImages = [
  "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=600&q=80",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
  "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&q=80",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
];

export default function Classes() {
  const { openBooking } = useModal();
  const { t } = useLang();
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [enterKey, setEnterKey] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const tabs = t.classes.tabs.map((tab, i) => ({ ...tab, id: String(i), image: tabImages[i] }));
  const active = tabs[displayIndex];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const preload = () => {
      tabImages.forEach((src) => {
        const img = new window.Image();
        img.src = `/_next/image?url=${encodeURIComponent(src)}&w=828&q=75`;
      });
    };
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(preload);
    } else {
      setTimeout(preload, 2000);
    }
  }, []);

  const handleTab = (idx: number) => {
    if (idx === activeIndex || isExiting) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    setActiveIndex(idx);
    setIsExiting(true);
    timerRef.current = setTimeout(() => {
      setDisplayIndex(idx);
      setIsExiting(false);
      setEnterKey((k) => k + 1);
    }, 260);
  };

  return (
    <section id="facility" className="py-20 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-10">
            <h2 className="text-5xl font-bold text-gray-900 mb-3">{t.classes.title}</h2>
            <p className="text-gray-500 text-base">{t.classes.subtitle}</p>
          </div>
        </FadeIn>

        {/* Tabs */}
        <FadeIn delay={0.1}>
          {/* Mobile: dropdown */}
          <div className="md:hidden relative mb-6" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              className="w-full flex items-center justify-between gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm"
            >
              <span>{active.label}</span>
              <ChevronDown
                size={18}
                className="text-gray-400 flex-shrink-0 transition-transform duration-200"
                style={{ transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-20 overflow-hidden">
                {tabs.map((tab, idx) => (
                  <button
                    key={tab.id}
                    onClick={() => { handleTab(idx); setDropdownOpen(false); }}
                    className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                      activeIndex === idx
                        ? "bg-[#485C46]/8 text-[#485C46] font-semibold"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Desktop: wrap */}
          <div className="hidden md:flex flex-wrap gap-2 justify-center mb-10">
            {tabs.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => handleTab(idx)}
                className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                  activeIndex === idx
                    ? "bg-white border-gray-400 text-gray-900 font-semibold shadow-sm"
                    : "border-gray-300 text-gray-600 hover:border-gray-400"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Content */}
        <FadeIn delay={0.2}>
        <div
          key={enterKey}
          style={{
            animation: isExiting
              ? "slideOutLeft 0.26s ease-in both"
              : "slideInRight 0.35s ease-out both",
          }}
        >
          {/* Mobile layout */}
          <div className="md:hidden flex flex-col gap-4">
            <div className="relative h-52 rounded-2xl overflow-hidden">
              <Image src={active.image} alt={active.title} fill className="object-cover" sizes="100vw" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%)" }} />
              <h3 className="absolute bottom-4 left-4 right-4 text-white text-xl font-bold leading-tight">{active.title}</h3>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">{active.desc}</p>

            <div className="grid grid-cols-2 gap-3">
              {active.features.map((f, n) => (
                <div key={n} className="flex flex-col gap-1.5">
                  <span className="w-6 h-6 rounded-full border-2 border-[#485C46]/40 flex items-center justify-center text-xs font-bold text-[#485C46]/70 flex-shrink-0">
                    {n + 1}
                  </span>
                  <p className="font-semibold text-gray-900 text-sm">{f.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            <button
              onClick={openBooking}
              className="cursor-pointer w-full bg-[#485C46] text-white py-3 rounded-md text-sm font-medium hover:bg-[#3a4a38] transition-colors"
            >
              {t.classes.cta}
            </button>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-10 items-start">
            <div className="relative h-[480px] rounded-2xl overflow-hidden">
              <Image src={active.image} alt={active.title} fill className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: "inset 0 0 50px 18px #F5F0E8" }} />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{active.title}</h3>
              <p className="text-gray-600 text-base mb-8 leading-relaxed">{active.desc}</p>
              <div className="grid grid-cols-2 gap-6">
                {active.features.map((f, n) => (
                  <div key={n} className="flex flex-col gap-3">
                    <div className="w-14 h-14 rounded-full border-2 border-[#485C46]/40 flex items-center justify-center text-2xl font-bold text-[#485C46]/70 flex-shrink-0">
                      {n + 1}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-base">{f.title}</p>
                      <p className="text-gray-500 text-sm mt-1 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={openBooking}
                className="cursor-pointer mt-10 inline-block bg-[#485C46] text-white px-8 py-3.5 rounded-md text-base font-medium hover:bg-[#3a4a38] transition-colors"
              >
                {t.classes.cta}
              </button>
            </div>
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
