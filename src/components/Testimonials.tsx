import Image from "next/image";

const reviews = [
  {
    name: "Катерина Мороз",
    role: "Відвідує 8 місяців",
    text: "Найкраща студія в якій я коли-небудь займалась! Тренери дуже уважні, атмосфера неймовірна. Вже за місяць відчула результат.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces&q=80",
  },
  {
    name: "Олексій Ткаченко",
    role: "Відвідує 1 рік",
    text: "Прийшов з болями у спині — через 3 місяці забув про них. Дмитро — просто геній своєї справи. Рекомендую всім без виключення.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces&q=80",
  },
  {
    name: "Вікторія Лисенко",
    role: "Відвідує 4 місяці",
    text: "Флай-йога — це щось неймовірне! Спочатку боялась, але Марія так класно все пояснила. Тепер це моє улюблене заняття.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=faces&q=80",
  },
  {
    name: "Андрій Савченко",
    role: "Відвідує 6 місяців",
    text: "Зал чистий, обладнання сучасне, персонал привітний. Займаюсь тричі на тиждень і вже не уявляю свого життя без цього.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=100&h=100&fit=crop&crop=faces&q=80",
  },
  {
    name: "Юлія Павленко",
    role: "Відвідує 2 роки",
    text: "Прийшла на пробне заняття і залишилась назавжди. Ця студія стала для мене другим домом. Дякую всій команді за любов до своєї справи!",
    rating: 5,
    img: "https://images.unsplash.com/photo-1552334949-51934e5f2d38?w=100&h=100&fit=crop&crop=faces&q=80",
  },
  {
    name: "Максим Бондаренко",
    role: "Відвідує 3 місяці",
    text: "Як новачок був трохи невпевнений, але група для початківців — просто ідеальна. Ніхто не засуджує, всі підтримують. Кайф!",
    rating: 5,
    img: "https://images.unsplash.com/photo-1758598497192-15ffa411c3de?w=100&h=100&fit=crop&crop=faces&q=80",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Що кажуть наші клієнти</h2>
          <p className="text-gray-500 text-base">Понад 500 задоволених відвідувачів довіряють нам</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#485C46">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 text-sm leading-relaxed flex-1">"{r.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-black/5">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 relative">
                  <Image
                    src={r.img}
                    alt={r.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{r.name}</p>
                  <p className="text-xs text-gray-400">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
