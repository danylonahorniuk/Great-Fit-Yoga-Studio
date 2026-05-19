"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  IconSeeding,
  IconHanger,
  IconBook,
  IconYoga,
  IconUserStar,
  IconDroplets,
  IconMoodKid,
} from "@tabler/icons-react";
import { useModal } from "./modals/ModalContext";

const iconProps = { size: 48, stroke: 1.8, color: "#485C46" };

const services = [
  { icon: <IconSeeding {...iconProps} />,   title: "Спа-зона",            desc: "Відновіться та розслабтесь у нашій преміальній спа-зоні після тренування. Ідеально для тіла та душі." },
  { icon: <IconHanger {...iconProps} />,    title: "Роздягальні",          desc: "Сучасні роздягальні з усіма зручностями для комфортного перебування у нашому центрі." },
  { icon: <IconBook {...iconProps} />,      title: "Безкоштовні уроки",    desc: "Вступні уроки для новачків — спробуй йогу без жодних зобов'язань і відчуй усі переваги." },
  { icon: <IconYoga {...iconProps} />,      title: "Килимки в оренду",     desc: "Не маєш свого килимка? Ми надаємо якісні йога-килимки для кожного відвідувача студії." },
  { icon: <IconUserStar {...iconProps} />,  title: "Персональний тренер",  desc: "Індивідуальні заняття з досвідченим тренером для швидкого прогресу та досягнення цілей." },
  { icon: <IconDroplets {...iconProps} />,  title: "Душові кімнати",       desc: "Чисті та зручні душові кімнати з усім необхідним після тренування." },
  { icon: <IconMoodKid {...iconProps} />,   title: "Дитяча йога",          desc: "Спеціальні заняття для дітей від 5 років. Гнучкість, координація і любов до здоров'я." },
];

export default function Services() {
  const { openBooking, openContact } = useModal();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Наші Послуги</h2>
          <p className="text-gray-500 text-base">Все що потрібно для вашого добробуту</p>
        </div>

        <div className="flex gap-7 items-stretch">
          {/* Promo card */}
          <div className="hidden md:flex flex-col justify-between bg-[#485C46] text-white rounded-2xl p-7 w-[210px] flex-shrink-0">
            <div>
              <h3 className="font-bold text-base leading-snug mb-4 text-center">
                Почніть з безкоштовного пробного заняття
              </h3>
              <p className="text-white/80 text-sm text-center leading-relaxed">
                Досліджуйте йогу в нашій студії. Познайомтесь з інструкторами та відчуйте всі переваги.
              </p>
            </div>
            <button onClick={openBooking} className="cursor-pointer mt-6 bg-white text-[#485C46] text-sm font-semibold px-4 py-2.5 rounded-md text-center hover:bg-green-50 transition-colors">
              Спробувати безкоштовно
            </button>
          </div>

          {/* Scrollable cards */}
          <div ref={scrollRef} className="flex gap-6 overflow-x-auto flex-1 pb-1" style={{ scrollbarWidth: "none" }}>
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl px-6 py-5 w-[250px] flex-shrink-0 flex flex-col gap-3 hover:shadow-md transition-shadow"
                style={{ backgroundColor: "#EEF1F6" }}
              >
                <div className="mb-1">{s.icon}</div>
                <h3 className="font-semibold text-gray-900 text-[15px]">{s.title}</h3>
                <p className="text-gray-500 text-sm flex-1 leading-relaxed">{s.desc}</p>
                <button onClick={openContact} className="cursor-pointer text-[#485C46] text-sm font-medium border border-[#485C46] px-4 py-1.5 rounded-md w-fit hover:bg-[#485C46] hover:text-white transition-colors">
                  Дізнатись більше
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button onClick={() => scroll("left")} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors" aria-label="Назад">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => scroll("right")} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors" aria-label="Вперед">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
