"use client";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useModal } from "./modals/ModalContext";

const links = [
  { label: "Головна",   href: "#home" },
  { label: "Послуги",   href: "#services" },
  { label: "Програми",  href: "#facility" },
  { label: "Ціни",      href: "#pricing" },
  { label: "Команда",   href: "#team" },
  { label: "FAQ",       href: "#faq" },
  { label: "Контакти",  href: "#contacts" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { openBooking } = useModal();

  useEffect(() => { setMounted(true); }, []);

  return (
    <>
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(8px)",
        boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
        transform: "translateZ(0)",
        willChange: "transform",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-0 font-bold flex-none" style={{ color: "#485C46" }}>
          <Image src="/logo.png" alt="Great Fit Yoga Studio" width={90} height={90} className="object-contain" priority />
          <span className="text-sm leading-tight">
            Great Fit<br />
            <span className="font-normal text-xs text-gray-500">Yoga Studio</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-600 hover:text-[#485C46] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={openBooking}
          className="cursor-pointer hidden lg:flex items-center gap-2 text-sm px-4 py-2 rounded-md bg-[#485C46] text-white hover:bg-[#3a4a38] transition-colors"
        >
          <ShoppingBag size={15} />
          Записатись
        </button>

        {/* Mobile burger */}
        <button
          className="lg:hidden text-gray-600"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
          suppressHydrationWarning
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

    </header>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className="lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-all duration-300"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
      />

      {/* Sidebar */}
      <div
        className="lg:hidden fixed top-0 right-0 bottom-0 z-50 w-72 bg-white flex flex-col shadow-2xl transition-transform duration-300 ease-in-out"
        style={{ transform: open ? "translateX(0)" : "translateX(100%)" }}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-gray-100 flex-shrink-0">
          <span className="font-bold text-sm text-[#485C46]">Меню</span>
          <button
            onClick={() => setOpen(false)}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            aria-label="Закрити"
          >
            <X size={16} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col px-4 py-6 gap-1 flex-1">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-gray-700 hover:text-[#485C46] hover:bg-[#485C46]/5 px-3 py-3 rounded-lg transition-colors"
              style={{
                transitionDelay: open ? `${i * 40}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "translateX(0)" : "translateX(20px)",
                transition: `opacity 0.3s ease ${i * 40}ms, transform 0.3s ease ${i * 40}ms, color 0.15s, background 0.15s`,
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="px-4 pb-8 flex-shrink-0">
          <button
            onClick={() => { setOpen(false); openBooking(); }}
            className="cursor-pointer w-full bg-[#485C46] text-white text-sm px-4 py-3 rounded-lg font-medium hover:bg-[#3a4a38] transition-colors"
          >
            Записатись на заняття
          </button>
        </div>
      </div>
    </>
  );
}
