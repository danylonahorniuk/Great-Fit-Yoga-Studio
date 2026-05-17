"use client";
import { useState } from "react";
import { Menu, X, Leaf, ShoppingBag } from "lucide-react";

const links = [
  { label: "Головна", href: "#home" },
  { label: "Послуги", href: "#services" },
  { label: "Зал", href: "#facility" },
  { label: "Про нас", href: "#team" },
  { label: "Контакти", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 font-bold text-[#2D5A27]">
          <Leaf size={22} className="text-[#2D5A27]" />
          <span className="text-sm leading-tight">
            Great Fit<br />
            <span className="font-normal text-xs text-gray-500">Yoga Studio</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-700 hover:text-[#2D5A27] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#membership"
          className="hidden md:flex items-center gap-2 bg-[#2D5A27] text-white text-sm px-4 py-2 rounded-md hover:bg-[#1e3f1b] transition-colors"
        >
          <ShoppingBag size={15} />
          Записатись
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-700 hover:text-[#2D5A27]"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#membership"
            className="bg-[#2D5A27] text-white text-sm px-4 py-2 rounded-md text-center"
            onClick={() => setOpen(false)}
          >
            Записатись
          </a>
        </div>
      )}
    </header>
  );
}
