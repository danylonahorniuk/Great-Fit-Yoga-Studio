"use client";
import Image from "next/image";
import { useState } from "react";
import { X, ChevronRight } from "lucide-react";
import { useModal } from "./modals/ModalContext";
import { FadeIn } from "./ui/FadeIn";
import { useLang } from "@/contexts/LanguageContext";

const trainerImages = [
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=faces&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=faces&q=80",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop&crop=faces&q=80",
];

export default function Team() {
  const { openBooking } = useModal();
  const { t } = useLang();
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const trainers = t.team.trainers.map((tr, i) => ({ ...tr, img: trainerImages[i] }));
  const selected = selectedIdx !== null ? trainers[selectedIdx] : null;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedIdx(null);
      setIsClosing(false);
    }, 280);
  };

  const handleBook = () => {
    handleClose();
    setTimeout(() => openBooking(), 300);
  };

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">{t.team.title}</h2>
            <p className="text-gray-500 text-base">{t.team.subtitle}</p>
          </div>
        </FadeIn>

        {/* Mobile: 2-col avatar grid */}
        <div className="grid grid-cols-2 md:hidden gap-3">
          {trainers.map((tr, i) => (
            <FadeIn key={tr.name} delay={i * 0.08}>
              <button
                onClick={() => setSelectedIdx(i)}
                className="flex flex-col items-center gap-3 bg-[#F5F0E8] rounded-2xl p-4 hover:shadow-md transition-all duration-300 w-full cursor-pointer text-center"
              >
                <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-white shadow-sm">
                  <Image src={tr.img} alt={tr.name} fill className="object-cover" sizes="80px" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm leading-tight">{tr.name}</p>
                  <p className="text-[#485C46] text-xs mt-0.5">{tr.role}</p>
                  <p className="text-gray-400 text-[11px] mt-0.5">{tr.exp}</p>
                  <p className="text-[#485C46] text-[11px] font-medium mt-2">{t.team.more}</p>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>

        {/* Desktop: horizontal rows */}
        <div className="hidden md:grid md:grid-cols-2 gap-4">
          {trainers.map((tr, i) => (
            <FadeIn key={tr.name} delay={i * 0.08}>
              <button
                onClick={() => setSelectedIdx(i)}
                className="flex items-center gap-5 bg-[#F5F0E8] rounded-2xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-left w-full cursor-pointer"
              >
                <div className="relative w-[72px] h-[72px] rounded-full overflow-hidden flex-shrink-0">
                  <Image src={tr.img} alt={tr.name} fill className="object-cover" sizes="72px" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900">{tr.name}</p>
                  <p className="text-[#485C46] text-sm mt-0.5">{tr.role}</p>
                  <p className="text-gray-400 text-xs mt-1">{tr.exp}</p>
                </div>
                <ChevronRight size={18} className="flex-shrink-0 text-gray-300 group-hover:text-[#485C46] transition-colors" />
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Modal */}
      {(selected || isClosing) && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center md:p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
            style={{ animation: isClosing ? "backdropOut 0.28s ease-in both" : "backdropIn 0.28s ease-out both" }}
          />
          <div
            className="relative bg-white w-full md:max-w-md md:rounded-2xl rounded-t-2xl shadow-2xl overflow-hidden"
            style={{ animation: isClosing ? "modalOut 0.28s ease-in both" : "modalIn 0.32s ease-out both" }}
          >
            {/* Mobile: handle + compact horizontal header */}
            <div className="md:hidden">
              <div className="flex justify-center pt-3 pb-1">
                <div className="w-8 h-1 rounded-full bg-gray-300" />
              </div>
              <div className="bg-[#F5F0E8] px-5 pt-4 pb-4 flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-white shadow-sm">
                  <Image src={selected?.img ?? ""} alt={selected?.name ?? ""} fill className="object-cover" sizes="56px" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-gray-900 leading-tight">{selected?.name}</h3>
                  <p className="text-[#485C46] text-xs mt-0.5">{selected?.role}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{selected?.exp}</p>
                </div>
                <button onClick={handleClose} className="w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors flex-shrink-0">
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* Desktop: original centered header */}
            <div className="hidden md:block bg-[#F5F0E8] px-6 pt-8 pb-6 text-center">
              <button onClick={handleClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors">
                <X size={16} />
              </button>
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 ring-4 ring-white shadow-md mx-auto">
                <Image src={selected?.img ?? ""} alt={selected?.name ?? ""} fill className="object-cover" sizes="96px" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{selected?.name}</h3>
              <p className="text-[#485C46] text-sm mt-1">{selected?.role}</p>
              <p className="text-gray-400 text-xs mt-1">{selected?.exp}</p>
            </div>

            {/* Body */}
            <div className="px-5 md:px-6 py-4 md:py-6">
              <p className="text-gray-600 text-sm leading-relaxed mb-4 md:mb-5">{selected?.bio}</p>
              <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                {selected?.tags.map((tag) => (
                  <span key={tag} className="text-xs text-[#485C46] bg-[#485C46]/10 px-2.5 md:px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <button onClick={handleBook} className="cursor-pointer w-full bg-[#485C46] text-white py-2.5 md:py-3 rounded-lg text-sm font-semibold hover:bg-[#3a4a38] transition-colors">
                {t.team.bookWith} {selected?.bookName}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
