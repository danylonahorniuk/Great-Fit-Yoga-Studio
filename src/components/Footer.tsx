import Image from "next/image";

const links = [
  { label: "Головна", href: "#home" },
  { label: "Послуги", href: "#services" },
  { label: "Зал", href: "#facility" },
  { label: "Про нас", href: "#team" },
  { label: "Контакти", href: "#contact" },
];

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
  return (
    <footer id="contact" className="bg-white border-t border-gray-200 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <a href="#home" className="flex items-center gap-2 font-bold text-[#485C46]">
            <Image src="/logo.png" alt="Great Fit Yoga Studio" width={64} height={64} className="object-contain" />
            <span className="text-sm leading-tight">
              Great Fit<br />
              <span className="font-normal text-xs text-gray-500">Yoga Studio</span>
            </span>
          </a>

          <nav className="flex flex-wrap gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-gray-600 hover:text-[#485C46] transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-100 pt-6">
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className="text-gray-500 hover:text-[#485C46] transition-colors">
                {s.svg}
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-xs">© 2026 Great Fit Yoga Studio. Всі права захищені</p>
        </div>
      </div>
    </footer>
  );
}
