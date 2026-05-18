"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useModal } from "./modals/ModalContext";

const ic = (path: React.ReactNode) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#485C46" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    {path}
  </svg>
);

const icons = {
  spa: ic(<>
    <path d="M24 40c0 0-12-8-12-20a12 12 0 0 1 12-12 12 12 0 0 1 12 12c0 12-12 20-12 20z"/>
    <path d="M24 14c0 0-4 4-4 10"/>
    <path d="M24 14c0 0 4 4 4 10"/>
  </>),

  hanger: ic(<>
    <path d="M24 10a4 4 0 0 1 4 4c0 2-2 3-4 4L8 28h32L24 18"/>
    <circle cx="24" cy="8" r="2"/>
    <line x1="20" y1="36" x2="28" y2="36"/>
  </>),

  book: ic(<>
    <path d="M24 10v28"/>
    <path d="M10 10h14v28H10a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2z"/>
    <path d="M24 10h14a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H24"/>
    <line x1="14" y1="18" x2="20" y2="18"/>
    <line x1="14" y1="24" x2="20" y2="24"/>
    <line x1="28" y1="18" x2="38" y2="18"/>
    <line x1="28" y1="24" x2="38" y2="24"/>
  </>),

  mat: ic(<>
    <rect x="10" y="16" width="28" height="16" rx="8"/>
    <rect x="16" y="20" width="16" height="8" rx="4"/>
    <line x1="10" y1="24" x2="6" y2="24"/>
    <line x1="38" y1="24" x2="42" y2="24"/>
  </>),

  trainer: ic(<>
    <circle cx="18" cy="12" r="5"/>
    <path d="M8 36v-4a8 8 0 0 1 8-8h4"/>
    <circle cx="34" cy="12" r="5"/>
    <path d="M44 36v-4a8 8 0 0 0-8-8h-4"/>
    <line x1="24" y1="24" x2="24" y2="36"/>
    <path d="M18 30h12"/>
  </>),

  shower: ic(<>
    <path d="M10 10 Q10 6 14 6 L38 6 Q42 6 42 10 L42 20"/>
    <path d="M42 20 Q42 26 36 26 L16 26 Q10 26 10 20 L10 14"/>
    <line x1="16" y1="32" x2="14" y2="40"/>
    <line x1="24" y1="32" x2="22" y2="40"/>
    <line x1="32" y1="32" x2="30" y2="40"/>
    <line x1="20" y1="34" x2="18" y2="42"/>
    <line x1="28" y1="34" x2="26" y2="42"/>
  </>),

  kids: ic(<>
    <circle cx="24" cy="10" r="5"/>
    <path d="M24 15v12"/>
    <path d="M16 20l8 4 8-4"/>
    <path d="M18 27l-4 8"/>
    <path d="M30 27l4 8"/>
    <path d="M10 42h8"/>
    <path d="M30 42h8"/>
  </>),
};

const services = [
  { icon: icons.spa,     title: "Спа-зона",            desc: "Відновіться та розслабтесь у нашій преміальній спа-зоні після тренування. Ідеально для тіла та душі." },
  { icon: icons.hanger,  title: "Роздягальні",          desc: "Сучасні роздягальні з усіма зручностями для комфортного перебування у нашому центрі." },
  { icon: icons.book,    title: "Безкоштовні уроки",    desc: "Вступні уроки для новачків — спробуй йогу без жодних зобов'язань і відчуй усі переваги." },
  { icon: icons.mat,     title: "Килимки в оренду",     desc: "Не маєш свого килимка? Ми надаємо якісні йога-килимки для кожного відвідувача студії." },
  { icon: icons.trainer, title: "Персональний тренер",  desc: "Індивідуальні заняття з досвідченим тренером для швидкого прогресу та досягнення цілей." },
  { icon: icons.shower,  title: "Душові кімнати",       desc: "Чисті та зручні душові кімнати з усім необхідним після тренування." },
  { icon: icons.kids,    title: "Дитяча йога",          desc: "Спеціальні заняття для дітей від 5 років. Гнучкість, координація і любов до здоров'я." },
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
              <p className="text-green-200 text-sm text-center leading-relaxed">
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
