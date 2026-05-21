"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";

const faqs = [
  {
    q: "Чи потрібен досвід для занять?",
    a: "Ні, досвід не потрібен. У нас є окремі групи для початківців, де інструктор пояснює кожну позу з нуля. Ми приймаємо всіх незалежно від рівня фізичної підготовки.",
  },
  {
    q: "Що взяти з собою на перше заняття?",
    a: "Зручний одяг для руху, пляшку води та гарний настрій. Килимок надаємо безкоштовно — купувати його не обов'язково. Також є роздягальні з душовими та шафками для речей.",
  },
  {
    q: "Як записатись на заняття?",
    a: "Натисніть кнопку «Записатись» на сайті і заповніть коротку форму — ім'я, номер телефону і зручний час. Ми зв'яжемось з вами протягом кількох годин для підтвердження.",
  },
  {
    q: "Чи можна скасувати або перенести запис?",
    a: "Так, без жодних штрафів. Просто повідомте нас не пізніше ніж за 3 години до заняття — зателефонуйте або напишіть в Instagram. Ми перенесемо вас на інший зручний час.",
  },
  {
    q: "Чи підходить йога при болях у спині або травмах?",
    a: "У багатьох випадках — так, і навіть рекомендується. Інь-йога та хатха добре працюють при хронічних болях у спині. Але спочатку порадьтеся з лікарем і обов'язково повідомте тренера про свій стан — він підбере безпечні модифікації поз.",
  },
  {
    q: "З якого віку можна займатись?",
    a: "Дорослі групи — від 16 років. Для дітей від 5 до 14 років працює окрема програма дитячої йоги у форматі гри з сертифікованим дитячим інструктором.",
  },
  {
    q: "Коли відчувається перший результат?",
    a: "Більшість клієнтів відчувають легкість і менше напруги вже після 2-3 занять. Помітне покращення гнучкості та постави — зазвичай через 3-4 тижні регулярних тренувань.",
  },
  {
    q: "Чи є безкоштовне пробне заняття?",
    a: "Так! Перший місяць занять — абсолютно безкоштовно для нових відвідувачів. Це ваш шанс познайомитись зі студією, тренерами та форматом без будь-яких зобов'язань.",
  },
];

const VISIBLE_DEFAULT = 4;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);
  const visibleFaqs = showAll ? faqs : faqs.slice(0, VISIBLE_DEFAULT);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">

        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Часті запитання</h2>
            <p className="text-gray-500 text-base">Відповіді на те, що запитують найчастіше</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="bg-[#F5F0E8] rounded-2xl px-6 divide-y divide-[#E8E2D6]">
            {visibleFaqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group"
                >
                  <span className={`text-sm font-semibold transition-colors ${openIndex === i ? "text-[#485C46]" : "text-gray-900 group-hover:text-[#485C46]"}`}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className="flex-shrink-0 text-gray-400 transition-transform duration-300"
                    style={{ transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openIndex === i ? "300px" : "0px", opacity: openIndex === i ? 1 : 0 }}
                >
                  <p className="text-gray-600 text-sm leading-relaxed pb-5">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="cursor-pointer mt-4 w-full py-3 rounded-xl border border-[#485C46]/30 text-sm font-medium text-[#485C46] hover:bg-[#485C46]/5 transition-colors"
            >
              Показати ще {faqs.length - VISIBLE_DEFAULT} питання ↓
            </button>
          )}
        </FadeIn>

      </div>
    </section>
  );
}
