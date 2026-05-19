import Image from "next/image";

const trainers = [
  {
    name: "Олена Коваль",
    role: "Хатха-йога · Медитація",
    exp: "7 років досвіду",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    name: "Марія Петренко",
    role: "Флай-йога · Розтяжка",
    exp: "5 років досвіду",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    name: "Дмитро Сидоренко",
    role: "Аштанга · Силова йога",
    exp: "10 років досвіду",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    name: "Наталія Бойко",
    role: "Інь-йога · Дихання",
    exp: "6 років досвіду",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    name: "Андрій Мельник",
    role: "Зумба · Кардіо",
    exp: "4 роки досвіду",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    name: "Ірина Шевченко",
    role: "Йога для початківців",
    exp: "8 років досвіду",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop&crop=faces&q=80",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Наша команда</h2>
          <p className="text-gray-500 text-base">Досвідчені фахівці, що присвятили себе вашому добробуту</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {trainers.map((t) => (
            <div
              key={t.name}
              className="flex items-center gap-5 bg-[#F5F0E8] rounded-2xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Circle photo */}
              <div className="relative w-[72px] h-[72px] rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={t.img}
                  alt={t.name}
                  fill
                  className="object-cover"
                  sizes="72px"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-[#485C46] text-sm mt-0.5">{t.role}</p>
                <p className="text-gray-400 text-xs mt-1">{t.exp}</p>
              </div>

              {/* Accent dot */}
              <div className="w-2 h-2 rounded-full bg-[#485C46]/30 flex-shrink-0" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
