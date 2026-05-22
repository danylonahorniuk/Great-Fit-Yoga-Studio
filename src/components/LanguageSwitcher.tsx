"use client";
import { useLang } from "@/contexts/LanguageContext";

export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLang();

  return (
    <div
      className={`relative flex items-center rounded-full p-0.5 select-none ${
        compact ? "bg-gray-100" : "bg-gray-100"
      }`}
      style={{ minWidth: compact ? 80 : 90 }}
    >
      {/* Sliding pill */}
      <div
        className="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out"
        style={{ transform: lang === "en" ? "translateX(calc(100% + 4px))" : "translateX(0)" }}
      />

      <button
        onClick={() => setLang("uk")}
        className={`relative z-10 flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full transition-colors duration-150 flex-1 justify-center ${
          lang === "uk" ? "text-gray-900" : "text-gray-400 hover:text-gray-600"
        }`}
        aria-label="Українська"
      >
        <span>🇺🇦</span>
        <span>UA</span>
      </button>

      <button
        onClick={() => setLang("en")}
        className={`relative z-10 flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full transition-colors duration-150 flex-1 justify-center ${
          lang === "en" ? "text-gray-900" : "text-gray-400 hover:text-gray-600"
        }`}
        aria-label="English"
      >
        <span>🇬🇧</span>
        <span>EN</span>
      </button>
    </div>
  );
}
