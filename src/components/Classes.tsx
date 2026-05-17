"use client";
import { useState, useRef } from "react";
import Image from "next/image";

const tabs = [
  {
    id: "beginners",
    label: "Йога для початківців",
    image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=600&q=80",
    title: "Йога для початківців",
    desc: "Ідеально для тих, хто тільки починає свій шлях у йозі. Ми зосереджуємось на базових позах та техніках дихання, щоб зміцнити тіло та підвищити гнучкість.",
    features: [
      { n: 1, title: "Килимки безкоштовно", desc: "Для початківців ми надаємо килимки безкоштовно на першому занятті." },
      { n: 2, title: "Роздягальні", desc: "Сучасні зручні роздягальні з усім необхідним для комфорту." },
      { n: 3, title: "Індивідуальний підхід", desc: "Інструктор приділяє увагу кожному учаснику групи." },
      { n: 4, title: "Безпечна атмосфера", desc: "Дружня та підтримуюча обстановка для впевненого старту." },
    ],
  },
  {
    id: "stretching",
    label: "Розтяжка",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
    title: "Розтяжка та гнучкість",
    desc: "Заняття, спрямовані на покращення гнучкості та зняття напруги у м'язах. Підходить для всіх рівнів підготовки.",
    features: [
      { n: 1, title: "М'язова релаксація", desc: "Техніки глибокого розслаблення м'язів після навантаження." },
      { n: 2, title: "Покращення постави", desc: "Вправи для вирівнювання хребта та покращення постави." },
      { n: 3, title: "Зняття стресу", desc: "Дихальні техніки, що допомагають знизити рівень стресу." },
      { n: 4, title: "Профілактика травм", desc: "Регулярна розтяжка зменшує ризик травмування." },
    ],
  },
  {
    id: "fly",
    label: "Флай-йога",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
    title: "Флай-йога (повітряна)",
    desc: "Унікальний вид йоги в гамаках. Дозволяє глибше розтягнутися, зміцнити м'язи і отримати неймовірне відчуття польоту.",
    features: [
      { n: 1, title: "Гамаки включено", desc: "Усе обладнання надається студією." },
      { n: 2, title: "Декомпресія хребта", desc: "Підвішений стан знімає навантаження зі спини." },
      { n: 3, title: "Баланс і координація", desc: "Розвиває рівновагу та координацію рухів." },
      { n: 4, title: "Весело і ефективно", desc: "Незвичний формат тренування для задоволення та результату." },
    ],
  },
  {
    id: "yin",
    label: "Інь-йога",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&q=80",
    title: "Інь-йога",
    desc: "Повільна і медитативна практика з тривалим утриманням поз. Глибоко впливає на сполучні тканини та знімає хронічне напруження.",
    features: [
      { n: 1, title: "Глибоке розслаблення", desc: "Кожна поза утримується 3-5 хвилин для глибокого ефекту." },
      { n: 2, title: "Медитативність", desc: "Поєднання руху та медитації для спокою розуму." },
      { n: 3, title: "Робота з фасціями", desc: "Вплив на глибокі шари сполучної тканини." },
      { n: 4, title: "Відновлення", desc: "Ідеально після інтенсивних тренувань для регенерації." },
    ],
  },
  {
    id: "zumba",
    label: "Зумба",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    title: "Зумба",
    desc: "Енергійне та веселе кардіо-тренування під латиноамериканські ритми. Танцюй, худни і отримуй задоволення!",
    features: [
      { n: 1, title: "Кардіо тренування", desc: "Ефективне спалювання калорій у форматі танцю." },
      { n: 2, title: "Для всіх рівнів", desc: "Не потрібні навички танцю — все навчимо на місці." },
      { n: 3, title: "Командний дух", desc: "Заряджайся енергією разом із групою." },
      { n: 4, title: "Хороший настрій", desc: "Позитивна атмосфера та живі ритми підіймуть настрій." },
    ],
  },
];

export default function Classes() {
  const [activeId, setActiveId] = useState("beginners");
  const [displayId, setDisplayId] = useState("beginners");
  const [isExiting, setIsExiting] = useState(false);
  const [enterKey, setEnterKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const active = tabs.find((t) => t.id === displayId)!;

  const handleTab = (id: string) => {
    if (id === activeId || isExiting) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    setActiveId(id);
    setIsExiting(true);
    timerRef.current = setTimeout(() => {
      setDisplayId(id);
      setIsExiting(false);
      setEnterKey((k) => k + 1);
    }, 260);
  };

  return (
    <section id="facility" className="py-20 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-gray-900 mb-3">Останні класи</h2>
          <p className="text-gray-500 text-base">Оберіть програму, що підходить саме вам</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => handleTab(t.id)}
              className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                activeId === t.id
                  ? "bg-white border-gray-400 text-gray-900 font-semibold shadow-sm"
                  : "border-gray-300 text-gray-600 hover:border-gray-400"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div
          key={enterKey}
          className="grid md:grid-cols-2 gap-10 items-start"
          style={{
            animation: isExiting
              ? "slideOutLeft 0.26s ease-in both"
              : "slideInRight 0.35s ease-out both",
          }}
        >
          {/* Image */}
          <div className="relative h-80 md:h-[480px] rounded-2xl overflow-hidden">
            <Image
              src={active.image}
              alt={active.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Info */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{active.title}</h3>
            <p className="text-gray-600 text-base mb-8 leading-relaxed">{active.desc}</p>

            <div className="grid grid-cols-2 gap-6">
              {active.features.map((f) => (
                <div key={f.n} className="flex flex-col gap-3">
                  <div className="w-14 h-14 rounded-full border-2 border-[#2D5A27]/40 flex items-center justify-center text-2xl font-bold text-[#2D5A27]/70 flex-shrink-0">
                    {f.n}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-base">{f.title}</p>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#membership"
              className="mt-10 inline-block bg-[#2D5A27] text-white px-8 py-3.5 rounded-md text-base font-medium hover:bg-[#1e3f1b] transition-colors"
            >
              Отримати безкоштовне заняття
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
