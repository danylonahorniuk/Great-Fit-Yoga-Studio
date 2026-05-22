"use client";
import Image from "next/image";
import { useLang } from "@/contexts/LanguageContext";

const hrefs = ["#home", "#services", "#facility", "#pricing", "#team", "#faq", "#contacts"];

const socials = [
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
];

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;
  const navLabels = [t.nav.home, t.nav.services, t.nav.classes, t.nav.pricing, t.nav.team, t.nav.faq, t.nav.contacts];
  const links = hrefs.map((href, i) => ({ href, label: navLabels[i] }));

  return (
    <footer id="contact" className="bg-white border-t border-gray-200">

      {/* ── Mobile ── */}
      <div className="md:hidden px-6 pt-8 pb-6 flex flex-col gap-6">

        {/* Logo row + socials */}
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-0 font-bold text-[#485C46]">
            <Image src="/logo.png" alt="Great Fit Yoga Studio" width={64} height={64} className="object-contain" />
            <span className="text-sm leading-tight">
              Great Fit<br />
              <span className="font-normal text-xs text-gray-500">Yoga Studio</span>
            </span>
          </a>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className="text-gray-400 hover:text-[#485C46] transition-colors">
                {s.svg}
              </a>
            ))}
          </div>
        </div>

        {/* Nav links — horizontal wrap */}
        <div className="border-t border-gray-100 pt-5">
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-3">{f.nav}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-gray-500 hover:text-[#485C46] transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contacts — 2 col grid */}
        <div className="border-t border-gray-100 pt-5">
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-3">{f.contacts}</p>
          <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-400">
            <span>{f.addressLine1}</span>
            <a href="tel:+380441234567" className="hover:text-[#485C46] transition-colors">+380 44 123 45 67</a>
            <span>{f.addressLine2}</span>
            <a href="mailto:info@greatfit.ua" className="hover:text-[#485C46] transition-colors">info@greatfit.ua</a>
            <span className="text-xs text-gray-400 col-span-2 mt-1">{f.hours}</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 pt-4">
          <p className="text-center text-gray-400 text-xs">{f.copyright}</p>
        </div>
      </div>

      {/* ── Desktop ── */}
      <div className="hidden md:block max-w-7xl mx-auto px-6 pt-12 pb-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          <div className="flex flex-col gap-4">
            <a href="#home" className="flex items-center gap-0 font-bold text-[#485C46]">
              <Image src="/logo.png" alt="Great Fit Yoga Studio" width={80} height={80} className="object-contain" />
              <span className="text-sm leading-tight">
                Great Fit<br />
                <span className="font-normal text-xs text-gray-500">Yoga Studio</span>
              </span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed">
              {f.studio}
            </p>
            <div className="flex items-center gap-4">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className="text-gray-400 hover:text-[#485C46] transition-colors">
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 md:items-center">
            <p className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-1">{f.nav}</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-gray-400 hover:text-[#485C46] transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <p className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-1">{f.contacts}</p>
            <p className="text-sm text-gray-400 leading-relaxed md:text-right">{f.addressLine1}<br />{f.addressLine2}</p>
            <a href="tel:+380441234567" className="text-sm text-gray-400 hover:text-[#485C46] transition-colors">+380 44 123 45 67</a>
            <a href="mailto:info@greatfit.ua" className="text-sm text-gray-400 hover:text-[#485C46] transition-colors">info@greatfit.ua</a>
            <p className="text-sm text-gray-400 md:text-right">{f.hoursLine1}<br />{f.hoursLine2}</p>
          </div>

        </div>
        <div className="border-t border-gray-100 pt-6">
          <p className="text-center text-gray-400 text-xs">{f.copyright}</p>
        </div>
      </div>

    </footer>
  );
}
