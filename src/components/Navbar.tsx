"use client";
import { useState, useEffect } from "react";
import { Menu, X, Leaf, ShoppingBag } from "lucide-react";
import { useModal } from "./modals/ModalContext";

const links = [
  { label: "Головна", href: "#home" },
  { label: "Послуги", href: "#services" },
  { label: "Зал", href: "#facility" },
  { label: "Про нас", href: "#team" },
  { label: "Контакти", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openBooking } = useModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight - 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = scrolled;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: dark ? "rgba(35, 45, 30, 0.97)" : "rgba(255,255,255,0.92)",
        backdropFilter: "blur(8px)",
        boxShadow: dark ? "none" : "0 1px 8px rgba(0,0,0,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 font-bold transition-colors duration-300"
          style={{ color: dark ? "#fff" : "#485C46" }}>
          <Leaf size={22} />
          <span className="text-sm leading-tight">
            Great Fit<br />
            <span className={`font-normal text-xs ${dark ? "text-white/60" : "text-gray-500"}`}>Yoga Studio</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm transition-colors duration-300"
              style={{ color: dark ? "rgba(255,255,255,0.8)" : "#374151" }}
              onMouseEnter={e => (e.currentTarget.style.color = dark ? "#fff" : "#485C46")}
              onMouseLeave={e => (e.currentTarget.style.color = dark ? "rgba(255,255,255,0.8)" : "#374151")}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={openBooking}
          className="cursor-pointer hidden md:flex items-center gap-2 text-sm px-4 py-2 rounded-md transition-colors duration-300"
          style={{
            backgroundColor: dark ? "#485C46" : "#485C46",
            color: "#fff",
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#3a4a38")}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#485C46")}
        >
          <ShoppingBag size={15} />
          Записатись
        </button>

        {/* Mobile burger */}
        <button
          className="md:hidden transition-colors duration-300"
          style={{ color: dark ? "#fff" : "#374151" }}
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
          style={{ backgroundColor: dark ? "rgba(35,45,30,0.97)" : "#fff",
            borderColor: dark ? "rgba(255,255,255,0.1)" : "#e5e7eb" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm"
              style={{ color: dark ? "rgba(255,255,255,0.8)" : "#374151" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <button
            className="cursor-pointer bg-[#485C46] text-white text-sm px-4 py-2 rounded-md text-center"
            onClick={() => { setOpen(false); openBooking(); }}
          >
            Записатись
          </button>
        </div>
      )}
    </header>
  );
}
