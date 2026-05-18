import Image from "next/image";

const trainers = [
  {
    name: "Олена Коваль",
    role: "Хатха-йога, медитація",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=faces&q=80",
  },
  {
    name: "Марія Петренко",
    role: "Флай-йога, розтяжка",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop&crop=faces&q=80",
  },
  {
    name: "Дмитро Сидоренко",
    role: "Аштанга, силова йога",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=faces&q=80",
  },
  {
    name: "Наталія Бойко",
    role: "Інь-йога, дихання",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=faces&q=80",
  },
  {
    name: "Андрій Мельник",
    role: "Зумба, кардіо",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=faces&q=80",
  },
  {
    name: "Ірина Шевченко",
    role: "Йога для початківців",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=500&fit=crop&crop=faces&q=80",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Наша чудова команда</h2>
          <p className="text-gray-500 text-base">Досвідчені фахівці, що присвятили себе вашому добробуту</p>
        </div>
        <p className="text-gray-500 text-sm text-center max-w-2xl mx-auto mb-12">
          Познайомтесь з нашою командою експертів — кожен із них має глибокі знання йоги та фітнесу. Вони допоможуть вам досягти цілей у безпечній та підтримуючій атмосфері.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {trainers.map((t) => (
            <div key={t.name} className="relative h-60 md:h-72 rounded-2xl overflow-hidden group">
              <Image
                src={t.img}
                alt={t.name}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-green-300 text-xs mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-block border border-gray-300 text-gray-700 px-6 py-3 rounded-md text-sm hover:border-[#485C46] hover:text-[#485C46] transition-colors"
          >
            Дізнатись більше про нас
          </a>
        </div>
      </div>
    </section>
  );
}
