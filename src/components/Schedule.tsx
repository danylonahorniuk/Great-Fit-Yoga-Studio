"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useModal } from "./modals/ModalContext";

const DAYS_UA = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];
const MONTHS_UA = ["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"];

const CLASS_COLORS: Record<string, string> = {
  "Хатха-йога":  "#485C46",
  "Аштанга":     "#2D3A1E",
  "Розтяжка":    "#6B9B7A",
  "Інь-йога":    "#8B6BAE",
  "Флай-йога":   "#5B8BC9",
  "Зумба":       "#D4875A",
  "Дитяча йога": "#C96B6B",
  "Медитація":   "#5B9E9B",
};

type ClassEntry = { time: string; title: string; trainer: string; duration: string };

const SCHEDULE: Record<number, ClassEntry[]> = {
  0: [
    { time: "08:00", title: "Хатха-йога",  trainer: "Олена Коваль",      duration: "60 хв" },
    { time: "17:00", title: "Розтяжка",    trainer: "Марія Петренко",    duration: "60 хв" },
    { time: "18:30", title: "Аштанга",     trainer: "Дмитро Сидоренко",  duration: "90 хв" },
    { time: "20:00", title: "Інь-йога",    trainer: "Наталія Бойко",     duration: "60 хв" },
  ],
  1: [
    { time: "10:00", title: "Флай-йога",   trainer: "Марія Петренко",    duration: "75 хв" },
    { time: "17:00", title: "Хатха-йога",  trainer: "Ірина Шевченко",    duration: "60 хв" },
    { time: "18:30", title: "Зумба",       trainer: "Андрій Мельник",    duration: "60 хв" },
  ],
  2: [
    { time: "08:00", title: "Хатха-йога",  trainer: "Олена Коваль",      duration: "60 хв" },
    { time: "17:00", title: "Інь-йога",    trainer: "Наталія Бойко",     duration: "90 хв" },
    { time: "18:30", title: "Зумба",       trainer: "Андрій Мельник",    duration: "60 хв" },
    { time: "20:00", title: "Флай-йога",   trainer: "Марія Петренко",    duration: "75 хв" },
  ],
  3: [
    { time: "10:00", title: "Флай-йога",   trainer: "Марія Петренко",    duration: "75 хв" },
    { time: "17:00", title: "Хатха-йога",  trainer: "Ірина Шевченко",    duration: "60 хв" },
    { time: "18:30", title: "Аштанга",     trainer: "Дмитро Сидоренко",  duration: "90 хв" },
  ],
  4: [
    { time: "08:00", title: "Хатха-йога",  trainer: "Олена Коваль",      duration: "60 хв" },
    { time: "17:00", title: "Розтяжка",    trainer: "Марія Петренко",    duration: "60 хв" },
    { time: "18:30", title: "Аштанга",     trainer: "Дмитро Сидоренко",  duration: "90 хв" },
    { time: "20:00", title: "Флай-йога",   trainer: "Марія Петренко",    duration: "75 хв" },
  ],
  5: [
    { time: "10:00", title: "Розтяжка",    trainer: "Марія Петренко",    duration: "60 хв" },
    { time: "12:00", title: "Дитяча йога", trainer: "Ірина Шевченко",    duration: "45 хв" },
    { time: "18:30", title: "Зумба",       trainer: "Андрій Мельник",    duration: "60 хв" },
  ],
  6: [
    { time: "10:00", title: "Інь-йога",    trainer: "Наталія Бойко",     duration: "90 хв" },
    { time: "12:00", title: "Медитація",   trainer: "Олена Коваль",      duration: "60 хв" },
  ],
};

function getWeekStart(offset: number): Date {
  const today = new Date();
  const dow = today.getDay() === 0 ? 6 : today.getDay() - 1;
  const monday = new Date(today);
  monday.setDate(today.getDate() - dow + offset * 7);
  monday.setHours(0, 0, 0, 0);
  return monday;
}

function formatWeekLabel(start: Date): string {
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  if (start.getMonth() === end.getMonth()) {
    return `${start.getDate()}–${end.getDate()} ${MONTHS_UA[start.getMonth()]}`;
  }
  return `${start.getDate()} ${MONTHS_UA[start.getMonth()]} – ${end.getDate()} ${MONTHS_UA[end.getMonth()]}`;
}

export default function Schedule() {
  const { openBooking } = useModal();

  const todayDow = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;
  const [weekOffset, setWeekOffset] = useState(0);
  const [selectedDay, setSelectedDay] = useState(todayDow);

  const weekStart = getWeekStart(weekOffset);
  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart);
    d.setDate(weekStart.getDate() + i);
    return d;
  });

  const classes = SCHEDULE[selectedDay] ?? [];

  return (
    <section id="schedule" className="py-20 bg-[#F5F0E8]">
      <div className="max-w-3xl mx-auto px-6">

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Розклад занять</h2>
          <p className="text-gray-500 text-base">Оберіть зручний день та час</p>
        </div>

        {/* Week navigation */}
        <div className="flex items-center justify-between mb-5">
          <button
            onClick={() => setWeekOffset((w) => Math.max(0, w - 1))}
            disabled={weekOffset === 0}
            className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-sm font-medium text-gray-600">
            {formatWeekLabel(weekStart)}
          </span>
          <button
            onClick={() => setWeekOffset((w) => w + 1)}
            className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Day selector */}
        <div className="flex gap-2 mb-8">
          {weekDates.map((date, i) => {
            const isSelected = i === selectedDay;
            const isToday = weekOffset === 0 && i === todayDow;
            return (
              <button
                key={i}
                onClick={() => setSelectedDay(i)}
                className={`flex-1 flex flex-col items-center py-3 rounded-xl transition-all duration-200 ${
                  isSelected
                    ? "bg-[#485C46] text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                <span className="text-[11px] font-medium opacity-70">{DAYS_UA[i]}</span>
                <span className={`text-lg font-bold mt-0.5 ${isSelected ? "text-white" : "text-gray-900"}`}>
                  {date.getDate()}
                </span>
                <div className={`w-1.5 h-1.5 rounded-full mt-1 transition-all ${
                  isToday
                    ? isSelected ? "bg-white/60" : "bg-[#485C46]"
                    : "bg-transparent"
                }`} />
              </button>
            );
          })}
        </div>

        {/* Class list */}
        {classes.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <p className="text-4xl mb-3">🧘</p>
            <p className="font-medium">Занять немає</p>
            <p className="text-sm mt-1">Студія відпочиває — і ви теж можете</p>
          </div>
        ) : (
          <div className="space-y-3">
            {classes.map((cls, i) => {
              const color = CLASS_COLORS[cls.title] ?? "#485C46";
              return (
                <div key={i} className="flex gap-4 items-center">
                  {/* Time */}
                  <div className="w-12 text-sm font-medium text-gray-400 text-right flex-shrink-0">
                    {cls.time}
                  </div>
                  {/* Card */}
                  <div
                    className="flex-1 flex items-center justify-between bg-white rounded-xl px-5 py-4 border-l-[3px] hover:shadow-md transition-all cursor-pointer group"
                    style={{ borderLeftColor: color }}
                    onClick={openBooking}
                  >
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{cls.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {cls.trainer} · {cls.duration}
                      </p>
                    </div>
                    <span
                      className="text-xs font-medium px-3 py-1.5 rounded-md border transition-colors flex-shrink-0 ml-4 group-hover:text-white"
                      style={{
                        color,
                        borderColor: color,
                      }}
                    >
                      Записатись
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
