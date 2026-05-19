"use client";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import { useModal } from "./modals/ModalContext";

const trainers = [
  {
    name: "Олена Коваль",
    genitive: "Олени",
    role: "Хатха-йога · Медитація",
    exp: "7 років досвіду",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces&q=80",
    bio: "Олена почала практику йоги у 2017 році після пошуку способів впоратись зі стресом. Вже за рік отримала сертифікацію RYT-200, а згодом RYT-500. Її заняття поєднують точну роботу з тілом та глибоку медитативну практику — кожен учасник відчуває індивідуальний підхід.",
    tags: ["Хатха-йога", "Медитація", "Пранаяма", "Йога-нідра"],
  },
  {
    name: "Марія Петренко",
    genitive: "Марії",
    role: "Флай-йога · Розтяжка",
    exp: "5 років досвіду",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop&crop=faces&q=80",
    bio: "Марія — сертифікований інструктор з флай-йоги та акробатики. Пройшла навчання в Барселоні та Берліні. Вірить, що гамак — найкращий спосіб зняти напругу зі спини і одночасно отримати задоволення від тренування. Веде як групові, так і індивідуальні заняття.",
    tags: ["Флай-йога", "Розтяжка", "Акробатика", "Антигравітаційна йога"],
  },
  {
    name: "Дмитро Сидоренко",
    genitive: "Дмитра",
    role: "Аштанга · Силова йога",
    exp: "10 років досвіду",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces&q=80",
    bio: "Дмитро — один з найдосвідченіших інструкторів студії. Проходив навчання в Майсорі, Індія, де вивчав традиційну аштанга-йогу. Його підхід — строгий, але підтримуючий. Спеціалізується на роботі з людьми, які хочуть швидкого прогресу і серйозної практики.",
    tags: ["Аштанга", "Силова йога", "Віньяса", "Arm balances"],
  },
  {
    name: "Наталія Бойко",
    genitive: "Наталії",
    role: "Інь-йога · Дихання",
    exp: "6 років досвіду",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=faces&q=80",
    bio: "Наталія спеціалізується на повільних, відновлювальних практиках. Сертифікований фахівець з технік дихання (pranayama) і терапевтичної йоги. Її заняття особливо підходять людям зі стресом, тривогою або хронічними болями в спині. Підхід м'який, але глибокий.",
    tags: ["Інь-йога", "Дихальні практики", "Йога-терапія", "Релаксація"],
  },
  {
    name: "Андрій Мельник",
    genitive: "Андрія",
    role: "Зумба · Кардіо",
    exp: "4 роки досвіду",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=faces&q=80",
    bio: "Андрій — ліцензований інструктор Zumba Fitness і фітнес-тренер. До роботи в студії займався латиноамериканськими танцями понад 8 років. Його заняття — це завжди висока енергія, сміх і максимальне спалювання калорій. Підходить для всіх рівнів без виключення.",
    tags: ["Зумба", "Кардіо", "Латино-танці", "Функціональний фітнес"],
  },
  {
    name: "Ірина Шевченко",
    genitive: "Ірини",
    role: "Йога для початківців",
    exp: "8 років досвіду",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop&crop=faces&q=80",
    bio: "Ірина — ідеальний тренер для тих, хто тільки починає. Вона сама прийшла до йоги не маючи жодної фізичної підготовки, тому чудово розуміє страхи новачків. Її заняття побудовані так, щоб кожен міг виконати позу у своєму темпі без осуду і порівняння з іншими.",
    tags: ["Початківці", "Хатха", "Дитяча йога", "Йога для вагітних"],
  },
];

type Trainer = typeof trainers[0];

export default function Team() {
  const { openBooking } = useModal();
  const [selected, setSelected] = useState<Trainer | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelected(null);
      setIsClosing(false);
    }, 280);
  };

  const handleBook = () => {
    handleClose();
    setTimeout(() => openBooking(), 300);
  };

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Наша команда</h2>
          <p className="text-gray-500 text-base">Досвідчені фахівці, що присвятили себе вашому добробуту</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {trainers.map((t) => (
            <button
              key={t.name}
              onClick={() => setSelected(t)}
              className="flex items-center gap-5 bg-[#F5F0E8] rounded-2xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-left w-full cursor-pointer"
            >
              <div className="relative w-[72px] h-[72px] rounded-full overflow-hidden flex-shrink-0">
                <Image src={t.img} alt={t.name} fill className="object-cover" sizes="72px" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-[#485C46] text-sm mt-0.5">{t.role}</p>
                <p className="text-gray-400 text-xs mt-1">{t.exp}</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-[#485C46]/30 flex-shrink-0" />
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {(selected || isClosing) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
            style={{ animation: isClosing ? "backdropOut 0.28s ease-in both" : "backdropIn 0.28s ease-out both" }}
          />
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
            style={{ animation: isClosing ? "modalOut 0.28s ease-in both" : "modalIn 0.32s ease-out both" }}
          >
            {/* Header */}
            <div className="bg-[#F5F0E8] px-6 pt-8 pb-6 flex flex-col items-center text-center">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"
              >
                <X size={16} />
              </button>
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 ring-4 ring-white shadow-md">
                <Image
                  src={selected?.img ?? ""}
                  alt={selected?.name ?? ""}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{selected?.name}</h3>
              <p className="text-[#485C46] text-sm mt-1">{selected?.role}</p>
              <p className="text-gray-400 text-xs mt-1">{selected?.exp}</p>
            </div>

            {/* Body */}
            <div className="p-6">
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{selected?.bio}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selected?.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#485C46] bg-[#485C46]/10 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={handleBook}
                className="cursor-pointer w-full bg-[#485C46] text-white py-3 rounded-lg text-sm font-semibold hover:bg-[#3a4a38] transition-colors"
              >
                Записатись до {selected?.genitive}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
