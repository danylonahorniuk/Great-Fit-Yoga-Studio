import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { IconBrandInstagram } from "@tabler/icons-react";

const hours = [
  { days: "Понеділок – П'ятниця", time: "07:00 – 21:00" },
  { days: "Субота",               time: "09:00 – 19:00" },
  { days: "Неділя",               time: "09:00 – 17:00" },
];

const contacts = [
  { icon: Phone,              label: "+380 44 123 45 67", href: "tel:+380441234567" },
  { icon: Mail,               label: "info@greatfit.ua",  href: "mailto:info@greatfit.ua" },
  { icon: IconBrandInstagram, label: "@greatfit_yoga",    href: "https://instagram.com/greatfit_yoga" },
];

export default function Contacts() {
  return (
    <section id="contacts" className="py-20 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Як нас знайти</h2>
          <p className="text-gray-500 text-base">Ми знаходимось у центрі міста — зручно добиратись</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* Left: info */}
          <div className="flex flex-col gap-4">

            {/* Address */}
            <div className="bg-[#485C46] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} color="white" strokeWidth={1.8} />
                </div>
                <p className="font-semibold text-white">Адреса</p>
              </div>
              <p className="text-white/70 text-sm leading-relaxed pl-11">
                вул. Хрещатик, 22, офіс 5<br />
                Київ, 01001
              </p>
              <a
                href="https://maps.google.com/?q=Хрещатик+22+Київ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 pl-11 text-xs text-white/50 font-medium hover:text-white transition-colors"
              >
                Відкрити у Google Maps →
              </a>
            </div>

            {/* Contacts */}
            <div className="bg-[#485C46] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                  <Phone size={16} color="white" strokeWidth={1.8} />
                </div>
                <p className="font-semibold text-white">Контакти</p>
              </div>
              <div className="flex flex-col gap-3 pl-11">
                {contacts.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <Icon size={15} color="rgba(255,255,255,0.5)" strokeWidth={1.8} className="flex-shrink-0" />
                    <span className="text-white/70 text-sm group-hover:text-white transition-colors">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div className="bg-[#485C46] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                  <Clock size={16} color="white" strokeWidth={1.8} />
                </div>
                <p className="font-semibold text-white">Години роботи</p>
              </div>
              <div className="flex flex-col gap-2.5 pl-11">
                {hours.map(({ days, time }) => (
                  <div key={days} className="flex justify-between items-center text-sm">
                    <span className="text-white/60">{days}</span>
                    <span className="font-medium text-white">{time}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: map */}
          <div className="rounded-2xl overflow-hidden shadow-sm h-[460px]">
            <iframe
              src="https://maps.google.com/maps?q=Хрещатик+22+Київ&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
