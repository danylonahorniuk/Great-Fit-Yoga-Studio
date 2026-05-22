"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { FadeIn } from "./ui/FadeIn";
import { useLang } from "@/contexts/LanguageContext";

const reviewImages = [
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces&q=80",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=faces&q=80",
  "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=100&h=100&fit=crop&crop=faces&q=80",
  "https://images.unsplash.com/photo-1552334949-51934e5f2d38?w=100&h=100&fit=crop&crop=faces&q=80",
  "https://images.unsplash.com/photo-1758598497192-15ffa411c3de?w=100&h=100&fit=crop&crop=faces&q=80",
];

function ReviewCard({ name, role, text, img }: { name: string; role: string; text: string; img: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default h-full">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#485C46">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-700 text-sm leading-relaxed flex-1">"{text}"</p>
      <div className="flex items-center gap-3 pt-2 border-t border-black/5">
        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 relative">
          <Image src={img} alt={name} fill className="object-cover" sizes="40px" />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{name}</p>
          <p className="text-xs text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { t } = useLang();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = t.testimonials.reviews.map((r, i) => ({ ...r, img: reviewImages[i] }));

  return (
    <section id="testimonials" className="py-20 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">{t.testimonials.title}</h2>
            <p className="text-gray-500 text-base">{t.testimonials.subtitle}</p>
          </div>
        </FadeIn>

        {/* Mobile: snap scroll */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 pb-2"
            style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory" }}
            onScroll={() => {
              if (!scrollRef.current) return;
              const idx = Math.round(scrollRef.current.scrollLeft / scrollRef.current.offsetWidth);
              setActiveIndex(idx);
            }}
          >
            {reviews.map((r) => (
              <div
                key={r.name}
                className="flex-shrink-0 w-full"
                style={{ scrollSnapAlign: "start" }}
              >
                <ReviewCard {...r} />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-1.5 mt-4">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  scrollRef.current?.scrollTo({ left: i * scrollRef.current.offsetWidth, behavior: "smooth" });
                  setActiveIndex(i);
                }}
                className={`rounded-full transition-all duration-300 ${i === activeIndex ? "w-5 h-2 bg-[#485C46]" : "w-2 h-2 bg-gray-300"}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <FadeIn key={r.name} delay={i * 0.08}>
              <ReviewCard {...r} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
