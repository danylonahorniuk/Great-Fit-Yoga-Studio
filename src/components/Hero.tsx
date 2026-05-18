"use client";
import Image from "next/image";
import { Info } from "lucide-react";
import { useModal } from "./modals/ModalContext";

export default function Hero() {
  const { openBooking, openContact } = useModal();
  return (
    <section id="home" className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "#F0EDE6" }}>
      {/* Full-width background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=1920&q=85"
          alt="Йога"
          fill
          priority
          className="object-cover object-right"
          sizes="100vw"
        />
      </div>

      {/* Gradient: solid beige left → transparent right */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, #F0EDE6 30%, #F0EDE655 48%, transparent 62%)",
        }}
      />


      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">
        <div className="max-w-lg pt-16">
          <h1
            className="uppercase mb-6 leading-none tracking-wide"
            style={{
              fontFamily: "var(--font-oswald)",
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              color: "#2D3A1E",
              fontWeight: 700,
            }}
          >
            Йога перш<br />за все
          </h1>
          <p className="text-gray-700 text-base md:text-lg mb-8 max-w-sm leading-relaxed">
            Ласкаво просимо до Great Fit — місця, де традиції зустрічаються з інноваціями. Наші тренери проведуть вас через трансформаційні програми, що зміцнять тіло та заспокоять розум.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={openBooking}
              className="cursor-pointer bg-[#485C46] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#3a4a38] transition-colors"
            >
              Записатись на сесію
            </button>
            <button
              onClick={openContact}
              className="cursor-pointer flex items-center gap-2 text-gray-700 text-sm font-medium hover:text-[#485C46] transition-colors"
            >
              Зв'язатись з нами
              <Info size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
