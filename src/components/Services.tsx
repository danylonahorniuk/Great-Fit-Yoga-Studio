"use client";
import { useRef, useEffect } from "react";
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
import { FadeIn } from "./ui/FadeIn";

const iconProps = { size: 48, stroke: 1.8, color: "#485C46" };
const iconSmall = { size: 28, stroke: 1.8, color: "#485C46" };

const services = [
  {
    icon: <IconSeeding {...iconProps} />, iconSmall: <IconSeeding {...iconSmall} />,
    title: "Спа-зона",
    desc: "Відновіться та розслабтесь у нашій преміальній спа-зоні після тренування. Ідеально для тіла та душі.",
    details: "Наша спа-зона обладнана сучасними процедурними кімнатами, де ви можете відновити сили після інтенсивного тренування. До послуг відвідувачів: аромотерапія, теплові процедури, масаж та зона релаксації. Відкрита щодня з 8:00 до 21:00.",
    image: "https://images.unsplash.com/photo-1772378452022-94ee7971fe80?w=600&q=75",
  },
  {
    icon: <IconHanger {...iconProps} />, iconSmall: <IconHanger {...iconSmall} />,
    title: "Роздягальні",
    desc: "Сучасні роздягальні з усіма зручностями для комфортного перебування у нашому центрі.",
    details: "Просторі та чисті роздягальні з індивідуальними шафками, де ви можете безпечно залишити речі під час тренування. Є все необхідне: фени, дзеркала, лавки. Шафки відкриваються власним замком або кодом.",
    image: "https://images.unsplash.com/photo-1721099163762-344c8549620f?w=600&q=75",
  },
  {
    icon: <IconBook {...iconProps} />, iconSmall: <IconBook {...iconSmall} />,
    title: "Безкоштовні уроки",
    desc: "Вступні уроки для новачків — спробуй йогу без жодних зобов'язань і відчуй усі переваги.",
    details: "Перший місяць занять — абсолютно безкоштовно для нових відвідувачів. Ви отримуєте доступ до всіх групових класів, консультацію з тренером та вступний інструктаж. Жодних прихованих умов — просто приходь і спробуй.",
    image: "https://images.unsplash.com/photo-1764661441867-473a59a765bc?w=600&q=75",
  },
  {
    icon: <IconYoga {...iconProps} />, iconSmall: <IconYoga {...iconSmall} />,
    title: "Килимки в оренду",
    desc: "Не маєш свого килимка? Ми надаємо якісні йога-килимки для кожного відвідувача студії.",
    details: "Всі килимки виготовлені з екологічно чистих матеріалів і ретельно очищуються після кожного використання. Оренда входить у вартість абонементу — нічого додатково платити не потрібно. Також доступні блоки, ремені та болстери.",
    image: "https://images.unsplash.com/photo-1763004871583-4183d64096b1?w=600&q=75",
  },
  {
    icon: <IconUserStar {...iconProps} />, iconSmall: <IconUserStar {...iconSmall} />,
    title: "Персональний тренер",
    desc: "Індивідуальні заняття з досвідченим тренером для швидкого прогресу та досягнення цілей.",
    details: "Персональний тренер розробить індивідуальну програму занять з урахуванням вашого рівня підготовки, цілей та стану здоров'я. Регулярний моніторинг прогресу та коригування програми дозволяє досягти результату вдвічі швидше ніж у групі.",
    image: "https://images.unsplash.com/photo-1758274535024-be3faa30f507?w=600&q=75",
  },
  {
    icon: <IconDroplets {...iconProps} />, iconSmall: <IconDroplets {...iconSmall} />,
    title: "Душові кімнати",
    desc: "Чисті та зручні душові кімнати з усім необхідним після тренування.",
    details: "Окремі душові кабіни для чоловіків та жінок з постійною гарячою водою. Надаємо рушники, одноразові капці та базові засоби гігієни. Прибирання проводиться декілька разів на день для підтримання ідеальної чистоти.",
    image: "https://images.unsplash.com/photo-1571712704100-5cade806bf6d?w=600&q=75",
  },
  {
    icon: <IconMoodKid {...iconProps} />, iconSmall: <IconMoodKid {...iconSmall} />,
    title: "Дитяча йога",
    desc: "Спеціальні заняття для дітей від 5 років. Гнучкість, координація і любов до здоров'я.",
    details: "Заняття проводяться у форматі гри та орієнтовані на розвиток гнучкості, координації та уважності. Досвідчені дитячі інструктори створюють безпечну та веселу атмосферу. Групи формуються за віком: 5–8 років та 9–14 років. Максимум 10 дітей у групі.",
    image: "https://images.unsplash.com/photo-1714646793234-9e58a9ccfddb?w=600&q=75",
  },
];

export default function Services() {
  const { openBooking, openService } = useModal();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preload = () => {
      services.forEach((s) => {
        const img = new window.Image();
        img.src = `/_next/image?url=${encodeURIComponent(s.image)}&w=640&q=75`;
      });
    };
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(preload);
    } else {
      setTimeout(preload, 2000);
    }
  }, []);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Наші Послуги</h2>
            <p className="text-gray-500 text-base">Все що потрібно для вашого добробуту</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
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
          <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-1 flex-1 min-w-0" style={{ scrollbarWidth: "none" }}>
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl px-6 py-5 w-[250px] flex-shrink-0 flex flex-col gap-3 hover:shadow-md transition-shadow"
                style={{ backgroundColor: "#EEF1F6" }}
              >
                <div className="mb-1">{s.icon}</div>
                <h3 className="font-semibold text-gray-900 text-[15px]">{s.title}</h3>
                <p className="text-gray-500 text-sm flex-1 leading-relaxed">{s.desc}</p>
                <button
                  onClick={() => openService({ icon: s.iconSmall, title: s.title, desc: s.desc, details: s.details, image: s.image })}
                  className="cursor-pointer text-[#485C46] text-sm font-medium border border-[#485C46] px-4 py-1.5 rounded-md w-fit hover:bg-[#485C46] hover:text-white transition-colors"
                >
                  Дізнатись більше
                </button>
              </div>
            ))}
          </div>
        </div>
        </FadeIn>

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
