"use client";
import { useState } from "react";
import { X, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useModal } from "./ModalContext";

export default function ContactModal() {
  const { open, close } = useModal();
  const [submitted, setSubmitted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  if (open !== "contact" && !isClosing) return null;

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
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8"
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">Повідомлення надіслано!</h3>
            <p className="text-gray-500 text-sm">Дякуємо! Ми відповімо вам протягом декількох годин.</p>
            <button onClick={handleClose} className="mt-6 bg-[#485C46] text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-[#3a4a38] transition-colors">
              Закрити
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Зв'язатись з нами</h2>
              <p className="text-gray-500 text-sm mb-6">Ми завжди раді відповісти на ваші запитання</p>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#485C46]/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-[#485C46]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Телефон</p>
                    <p className="text-sm font-medium text-gray-800">+380 44 123 45 67</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#485C46]/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-[#485C46]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Email</p>
                    <p className="text-sm font-medium text-gray-800">info@greatfit.com.ua</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#485C46]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-[#485C46]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Адреса</p>
                    <p className="text-sm font-medium text-gray-800">вул. Саксаганського 12, Київ</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#485C46]/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={16} className="text-[#485C46]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Години роботи</p>
                    <p className="text-sm font-medium text-gray-800">Пн–Пт: 7:00–21:00</p>
                    <p className="text-sm font-medium text-gray-800">Сб–Нд: 9:00–18:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
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
              <textarea
                required
                rows={5}
                placeholder="Ваше повідомлення *"
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#485C46] transition-colors resize-none"
              />
              <button type="submit" className="mt-auto bg-[#485C46] text-white py-3 rounded-lg text-sm font-semibold hover:bg-[#3a4a38] transition-colors">
                Надіслати повідомлення
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
