"use client";
import { useState } from "react";
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
  const { openBooking } = useModal();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(8px)",
        boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 font-bold" style={{ color: "#485C46" }}>
          <Image src="/logo.png" alt="Great Fit Yoga Studio" width={68} height={68} className="object-contain" />
          <span className="text-sm leading-tight">
            Great Fit<br />
            <span className="font-normal text-xs text-gray-500">Yoga Studio</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5">
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
          className="cursor-pointer hidden md:flex items-center gap-2 text-sm px-4 py-2 rounded-md bg-[#485C46] text-white hover:bg-[#3a4a38] transition-colors"
        >
          <ShoppingBag size={15} />
          Записатись
        </button>

        {/* Mobile burger */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 px-6 py-4 flex flex-col gap-4 bg-white">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-600 hover:text-[#485C46] transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <button
            className="cursor-pointer bg-[#485C46] text-white text-sm px-4 py-2 rounded-md text-center hover:bg-[#3a4a38] transition-colors"
            onClick={() => { setOpen(false); openBooking(); }}
          >
            Записатись
          </button>
        </div>
      )}
    </header>
  );
}
