"use client";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  IconSeeding,
  IconHanger,
  IconBook,
  IconYoga,
  IconUserStar,
  IconDroplets,
  IconMoodKid,
} from "@tabler/icons-react";
import { useModal } from "./modals/ModalContext";
import { FadeIn } from "./ui/FadeIn";
import { useLang } from "@/contexts/LanguageContext";

const iconProps = { size: 48, stroke: 1.8, color: "#485C46" };
const iconSmall = { size: 28, stroke: 1.8, color: "#485C46" };

const icons = [
  { big: <IconSeeding {...iconProps} />, small: <IconSeeding {...iconSmall} /> },
  { big: <IconHanger {...iconProps} />, small: <IconHanger {...iconSmall} /> },
  { big: <IconBook {...iconProps} />, small: <IconBook {...iconSmall} /> },
  { big: <IconYoga {...iconProps} />, small: <IconYoga {...iconSmall} /> },
  { big: <IconUserStar {...iconProps} />, small: <IconUserStar {...iconSmall} /> },
  { big: <IconDroplets {...iconProps} />, small: <IconDroplets {...iconSmall} /> },
  { big: <IconMoodKid {...iconProps} />, small: <IconMoodKid {...iconSmall} /> },
];

const images = [
  "https://images.unsplash.com/photo-1772378452022-94ee7971fe80?w=600&q=75",
  "https://images.unsplash.com/photo-1721099163762-344c8549620f?w=600&q=75",
  "https://images.unsplash.com/photo-1764661441867-473a59a765bc?w=600&q=75",
  "https://images.unsplash.com/photo-1763004871583-4183d64096b1?w=600&q=75",
  "https://images.unsplash.com/photo-1758274535024-be3faa30f507?w=600&q=75",
  "https://images.unsplash.com/photo-1571712704100-5cade806bf6d?w=600&q=75",
  "https://images.unsplash.com/photo-1714646793234-9e58a9ccfddb?w=600&q=75",
];

export default function Services() {
  const { openBooking, openService } = useModal();
  const { t } = useLang();
  const scrollRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const preload = () => {
      images.forEach((src) => {
        const img = new window.Image();
        img.src = `/_next/image?url=${encodeURIComponent(src)}&w=640&q=75`;
      });
    };
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(preload);
    } else {
      setTimeout(preload, 2000);
    }
  }, []);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
  };

  const services = t.services.items.map((item, i) => ({
    ...item,
    icon: icons[i].big,
    iconSmall: icons[i].small,
    image: images[i],
  }));

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">{t.services.title}</h2>
            <p className="text-gray-500 text-base">{t.services.subtitle}</p>
          </div>
        </FadeIn>

        {/* Mobile: snap scroll */}
        <div className="md:hidden">
          <div
            ref={mobileScrollRef}
            className="flex overflow-x-auto gap-4 pb-2"
            style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory" }}
            onScroll={() => {
              if (!mobileScrollRef.current) return;
              const idx = Math.round(mobileScrollRef.current.scrollLeft / mobileScrollRef.current.offsetWidth);
              setActiveIndex(idx);
            }}
          >
            {services.map((s) => (
              <div
                key={s.title}
                className="flex-shrink-0 w-full rounded-2xl px-6 py-7 flex flex-col gap-4"
                style={{ backgroundColor: "#EEF1F6", scrollSnapAlign: "start" }}
              >
                <div>{s.icon}</div>
                <h3 className="font-semibold text-gray-900 text-lg">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{s.desc}</p>
                <button
                  onClick={() => openService({ icon: s.iconSmall, title: s.title, desc: s.desc, details: s.details, image: s.image })}
                  className="cursor-pointer text-[#485C46] text-sm font-medium border border-[#485C46] px-4 py-2 rounded-md w-fit hover:bg-[#485C46] hover:text-white transition-colors"
                >
                  {t.services.learnMore}
                </button>
              </div>
            ))}
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-1.5 mt-4">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  mobileScrollRef.current?.scrollTo({ left: i * mobileScrollRef.current.offsetWidth, behavior: "smooth" });
                  setActiveIndex(i);
                }}
                className={`rounded-full transition-all duration-300 ${i === activeIndex ? "w-5 h-2 bg-[#485C46]" : "w-2 h-2 bg-gray-300"}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: promo card + horizontal scroll */}
        <FadeIn delay={0.15}>
        <div className="hidden md:flex gap-7 items-stretch">
          {/* Promo card */}
          <div className="flex flex-col justify-between bg-[#485C46] text-white rounded-2xl p-7 w-[210px] flex-shrink-0">
            <div>
              <h3 className="font-bold text-base leading-snug mb-4 text-center">
                {t.services.promoTitle}
              </h3>
              <p className="text-white/80 text-sm text-center leading-relaxed">
                {t.services.promoDesc}
              </p>
            </div>
            <button onClick={openBooking} className="cursor-pointer mt-6 bg-white text-[#485C46] text-sm font-semibold px-4 py-2.5 rounded-md text-center hover:bg-green-50 transition-colors">
              {t.services.tryFree}
            </button>
          </div>

          {/* Scrollable cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-1 flex-1 min-w-0"
            style={{ scrollbarWidth: "none" }}
          >
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl px-6 py-5 w-[250px] flex-shrink-0 flex flex-col gap-3 hover:shadow-md transition-shadow"
                style={{ backgroundColor: "#EEF1F6" }}
              >
                <div className="mb-1">{s.icon}</div>
                <h3 className="font-semibold text-gray-900 text-[15px]">{s.title}</h3>
                <p className="text-gray-500 text-sm flex-1 leading-relaxed">{s.desc}</p>
                <button
                  onClick={() => openService({ icon: s.iconSmall, title: s.title, desc: s.desc, details: s.details, image: s.image })}
                  className="cursor-pointer text-[#485C46] text-sm font-medium border border-[#485C46] px-4 py-1.5 rounded-md w-fit hover:bg-[#485C46] hover:text-white transition-colors"
                >
                  {t.services.learnMore}
                </button>
              </div>
            ))}
          </div>
        </div>
        </FadeIn>

        <div className="hidden md:flex justify-end gap-3 mt-6">
          <button onClick={() => scroll("left")} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors" aria-label="Назад">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => scroll("right")} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors" aria-label="Вперед">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
