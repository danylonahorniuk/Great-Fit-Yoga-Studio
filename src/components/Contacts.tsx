"use client";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { IconBrandInstagram } from "@tabler/icons-react";
import { FadeIn } from "./ui/FadeIn";
import { useLang } from "@/contexts/LanguageContext";

const contactLinks = [
  { icon: Phone,              label: "+380 44 123 45 67", href: "tel:+380441234567" },
  { icon: Mail,               label: "info@greatfit.ua",  href: "mailto:info@greatfit.ua" },
  { icon: IconBrandInstagram, label: "@greatfit_yoga",    href: "https://instagram.com/greatfit_yoga" },
];

export default function Contacts() {
  const { t } = useLang();
  const c = t.contacts;

  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">{c.title}</h2>
            <p className="text-gray-500 text-base">{c.subtitle}</p>
          </div>
        </FadeIn>

        {/* Mobile layout */}
        <div className="md:hidden flex flex-col gap-4">
          <FadeIn delay={0.1}>
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-sm h-[200px]">
              <iframe
                src="https://maps.google.com/maps?q=Хрещатик+22+Київ&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" height="100%" style={{ border: 0 }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            {/* All info in one card */}
            <div className="bg-[#F5F0E8] rounded-2xl overflow-hidden divide-y divide-gray-100">
              {/* Address */}
              <div className="flex items-start gap-3 p-4">
                <div className="w-8 h-8 rounded-full bg-[#485C46]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={15} color="#485C46" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-0.5">{c.addressLabel}</p>
                  <p className="text-gray-500 text-sm">{c.addressLine1}, {c.addressLine2}</p>
                  <a href="https://maps.google.com/?q=Хрещатик+22+Київ" target="_blank" rel="noopener noreferrer"
                    className="text-xs text-[#485C46] font-medium mt-1 inline-block">
                    {c.mapLink}
                  </a>
                </div>
              </div>

              {/* Contacts */}
              <div className="flex items-start gap-3 p-4">
                <div className="w-8 h-8 rounded-full bg-[#485C46]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={15} color="#485C46" strokeWidth={1.8} />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-gray-900 text-sm">{c.contactsLabel}</p>
                  {contactLinks.map(({ icon: Icon, label, href }) => (
                    <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 text-sm">
                      <Icon size={13} color="#485C46" strokeWidth={1.8} className="flex-shrink-0 opacity-60" />
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3 p-4">
                <div className="w-8 h-8 rounded-full bg-[#485C46]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={15} color="#485C46" strokeWidth={1.8} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm mb-2">{c.hoursLabel}</p>
                  {c.hours.map(({ days, time }) => (
                    <div key={days} className="flex justify-between items-center text-sm py-0.5">
                      <span className="text-gray-400">{days}</span>
                      <span className="font-medium text-gray-900">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col gap-4">
            <FadeIn delay={0.1} direction="left">
            <div className="bg-[#F5F0E8] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#485C46]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} color="#485C46" strokeWidth={1.8} />
                </div>
                <p className="font-semibold text-gray-900">{c.addressLabel}</p>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed pl-11">
                {c.addressLine1}<br />{c.addressLine2}
              </p>
              <a href="https://maps.google.com/?q=Хрещатик+22+Київ" target="_blank" rel="noopener noreferrer"
                className="inline-block mt-2 pl-11 text-xs text-[#485C46] font-medium hover:underline">
                {c.mapLinkFull}
              </a>
            </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="left">
            <div className="bg-[#F5F0E8] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#485C46]/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={16} color="#485C46" strokeWidth={1.8} />
                </div>
                <p className="font-semibold text-gray-900">{c.contactsLabel}</p>
              </div>
              <div className="flex flex-col gap-3 pl-11">
                {contactLinks.map(({ icon: Icon, label, href }) => (
                  <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer" className="flex items-center gap-3 group">
                    <Icon size={15} color="#485C46" strokeWidth={1.8} className="flex-shrink-0 opacity-60" />
                    <span className="text-gray-500 text-sm group-hover:text-gray-900 transition-colors">{label}</span>
                  </a>
                ))}
              </div>
            </div>
            </FadeIn>

            <FadeIn delay={0.3} direction="left">
            <div className="bg-[#F5F0E8] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#485C46]/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={16} color="#485C46" strokeWidth={1.8} />
                </div>
                <p className="font-semibold text-gray-900">{c.hoursLabel}</p>
              </div>
              <div className="flex flex-col gap-2.5 pl-11">
                {c.hours.map(({ days, time }) => (
                  <div key={days} className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">{days}</span>
                    <span className="font-medium text-gray-900">{time}</span>
                  </div>
                ))}
              </div>
            </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.15} direction="right">
          <div className="rounded-2xl overflow-hidden shadow-sm h-[460px]">
            <iframe
              src="https://maps.google.com/maps?q=Хрещатик+22+Київ&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" height="100%" style={{ border: 0 }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
