"use client";
import { Info } from "lucide-react";
import { useModal } from "./modals/ModalContext";
import { FadeIn } from "./ui/FadeIn";
import { useLang } from "@/contexts/LanguageContext";

export default function Membership() {
  const { openBooking, openContact } = useModal();
  const { t } = useLang();
  const m = t.membership;

  const bgStyle = {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1588286840104-8957b019727f?w=1920&q=85)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section id="membership">

      {/* Mobile: text over image with gradient */}
      <div className="md:hidden relative" style={{ minHeight: 320, ...bgStyle }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 50%, rgba(0,0,0,0.35) 100%)" }} />
        <FadeIn className="relative z-10 px-6 pt-16 pb-10 flex flex-col justify-end min-h-[320px]">
          <h2 className="text-2xl font-bold text-white mb-3 leading-tight">
            {m.title}
          </h2>
          <p className="text-white/75 text-sm mb-6 leading-relaxed">
            {m.subtitleMobile}
          </p>
          <div className="flex flex-col gap-3">
            <button onClick={openBooking}
              className="cursor-pointer w-full bg-white text-[#485C46] px-6 py-3 rounded-md text-sm font-semibold hover:bg-gray-100 transition-colors">
              {m.cta}
            </button>
            <button onClick={openContact}
              className="cursor-pointer flex items-center justify-center gap-2 text-white/80 text-sm hover:text-white transition-colors">
              {m.contact} <Info size={15} />
            </button>
          </div>
        </FadeIn>
      </div>

      {/* Desktop: white card over image */}
      <div className="hidden md:block" style={{ minHeight: 340, ...bgStyle }}>
        <div style={{ background: "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35))", minHeight: 340 }}>
          <div className="max-w-7xl mx-auto px-6 py-14 flex justify-end items-center min-h-[340px]">
            <FadeIn direction="left" className="max-w-xl w-full">
              <div className="bg-white rounded-2xl p-10 w-full shadow-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {m.title}
                </h2>
                <p className="text-gray-500 text-sm mb-7">
                  {m.subtitleDesktop}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <button onClick={openBooking}
                    className="cursor-pointer bg-[#485C46] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#3a4a38] transition-colors">
                    {m.cta}
                  </button>
                  <button onClick={openContact}
                    className="cursor-pointer flex items-center gap-2 text-gray-700 text-sm hover:text-[#485C46] transition-colors">
                    {m.contact} <Info size={16} />
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

    </section>
  );
}
