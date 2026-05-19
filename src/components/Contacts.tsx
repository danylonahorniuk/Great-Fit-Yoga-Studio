import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { IconBrandInstagram } from "@tabler/icons-react";

const hours = [
  { days: "Понеділок – П'ятниця", time: "07:00 – 21:00" },
  { days: "Субота",               time: "09:00 – 19:00" },
  { days: "Неділя",               time: "09:00 – 17:00" },
];

const contacts = [
  { icon: Phone,     label: "+380 44 123 45 67",  href: "tel:+380441234567" },
  { icon: Mail,      label: "info@greatfit.ua",    href: "mailto:info@greatfit.ua" },
  { icon: IconBrandInstagram, label: "@greatfit_yoga", href: "https://instagram.com/greatfit_yoga" },
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
          <div className="flex flex-col gap-6">

            {/* Address */}
            <div className="bg-white rounded-2xl p-6 flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#485C46]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin size={18} color="#485C46" strokeWidth={1.8} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Адреса</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  вул. Хрещатик, 22, офіс 5<br />
                  Київ, 01001
                </p>
                <a
                  href="https://maps.google.com/?q=Хрещатик+22+Київ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-xs text-[#485C46] font-medium hover:underline"
                >
                  Відкрити у Google Maps →
                </a>
              </div>
            </div>

            {/* Contacts */}
            <div className="bg-white rounded-2xl p-6">
              <p className="font-semibold text-gray-900 mb-4">Контакти</p>
              <div className="flex flex-col gap-3">
                {contacts.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#485C46]/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} color="#485C46" strokeWidth={1.8} />
                    </div>
                    <span className="text-gray-600 text-sm group-hover:text-[#485C46] transition-colors">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-6 flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#485C46]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock size={18} color="#485C46" strokeWidth={1.8} />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-3">Години роботи</p>
                <div className="flex flex-col gap-2">
                  {hours.map(({ days, time }) => (
                    <div key={days} className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">{days}</span>
                      <span className="font-medium text-gray-900">{time}</span>
                    </div>
                  ))}
                </div>
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
