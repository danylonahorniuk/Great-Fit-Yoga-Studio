import Image from "next/image";

const trainers = [
  {
    name: "Олена Коваль",
    role: "Хатха-йога, медитація",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
  {
    name: "Марія Петренко",
    role: "Флай-йога, розтяжка",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Дмитро Сидоренко",
    role: "Аштанга, силова йога",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Наталія Бойко",
    role: "Інь-йога, дихання",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
  },
  {
    name: "Андрій Мельник",
    role: "Зумба, кардіо",
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80",
  },
  {
    name: "Ірина Шевченко",
    role: "Йога для вагітних",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Наша чудова команда</h2>
          <p className="text-gray-500 text-sm">Досвідчені фахівці, що присвятили себе вашому добробуту</p>
        </div>
        <p className="text-gray-500 text-sm text-center max-w-2xl mx-auto mb-12">
          Познайомтесь з нашою командою експертів — кожен із них має глибокі знання йоги та фітнесу. Вони допоможуть вам досягти цілей у безпечній та підтримуючій атмосфері.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {trainers.map((t) => (
            <div key={t.name} className="relative h-52 md:h-64 rounded-2xl overflow-hidden group">
              <Image
                src={t.img}
                alt={t.name}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-green-300 text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-block border border-gray-300 text-gray-700 px-6 py-3 rounded-md text-sm hover:border-[#2D5A27] hover:text-[#2D5A27] transition-colors"
          >
            Дізнатись більше про нас
          </a>
        </div>
      </div>
    </section>
  );
}
