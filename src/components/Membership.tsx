"use client";
import Image from "next/image";
import { Info } from "lucide-react";
import { useModal } from "./modals/ModalContext";

export default function Membership() {
  const { openBooking, openContact } = useModal();
  return (
    <section id="membership" className="relative overflow-hidden" style={{ minHeight: "340px" }}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=1920&q=85"
          alt="Йога клас"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-black/35 z-[1]" />

      <div className="relative z-[2] max-w-7xl mx-auto px-6 py-14 flex justify-end items-center min-h-[340px]">
        <div className="bg-white rounded-2xl p-8 md:p-10 max-w-xl w-full shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
            Безкоштовне 30-денне членство
          </h2>
          <p className="text-gray-500 text-sm mb-7">
            Насолоджуйтесь безкоштовним 30-денним пробним членством. Отримайте доступ до нашої студії, досвідчених тренерів та різноманітних класів без будь-яких зобов'язань. Відчуйте переваги йоги та трансформуйте своє самопочуття.
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
              className="cursor-pointer flex items-center gap-2 text-gray-700 text-sm hover:text-[#485C46] transition-colors"
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
