"use client";
import { useState } from "react";
import { X } from "lucide-react";
import { useModal } from "./ModalContext";

const classes = ["Йога для початківців", "Розтяжка", "Флай-йога", "Інь-йога", "Зумба", "Дитяча йога"];
const times = ["Ранок (8:00–11:00)", "День (12:00–15:00)", "Вечір (17:00–20:00)"];

export default function BookingModal() {
  const { open, close } = useModal();
  const [submitted, setSubmitted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", cls: "", time: "" });

  if (open !== "booking" && !isClosing) return null;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      close();
      setIsClosing(false);
      setSubmitted(false);
    }, 280);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
        style={{ animation: isClosing ? "backdropOut 0.28s ease-in both" : "backdropIn 0.28s ease-out both" }}
      />
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8"
        style={{ animation: isClosing ? "modalOut 0.28s ease-in both" : "modalIn 0.32s ease-out both" }}
      >
        <button onClick={handleClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#485C46]/10 flex items-center justify-center mx-auto mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#485C46" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Заявку надіслано!</h3>
            <p className="text-gray-500 text-sm">Ми зв'яжемось з вами найближчим часом для підтвердження.</p>
            <button onClick={handleClose} className="mt-6 bg-[#485C46] text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-[#3a4a38] transition-colors">
              Закрити
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Записатись на сесію</h2>
            <p className="text-gray-500 text-sm mb-6">Заповніть форму і ми зв'яжемось для підтвердження</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                required
                type="text"
                placeholder="Ваше ім'я *"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#485C46] transition-colors"
              />
              <input
                required
                type="email"
                placeholder="Email *"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#485C46] transition-colors"
              />
              <input
                type="tel"
                placeholder="Телефон"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#485C46] transition-colors"
              />
              <select
                required
                value={form.cls}
                onChange={e => setForm({ ...form, cls: e.target.value })}
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#485C46] transition-colors text-gray-600"
              >
                <option value="">Оберіть клас *</option>
                {classes.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <select
                required
                value={form.time}
                onChange={e => setForm({ ...form, time: e.target.value })}
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#485C46] transition-colors text-gray-600"
              >
                <option value="">Зручний час *</option>
                {times.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              <button type="submit" className="mt-2 bg-[#485C46] text-white py-3 rounded-lg text-sm font-semibold hover:bg-[#3a4a38] transition-colors">
                Надіслати заявку
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
