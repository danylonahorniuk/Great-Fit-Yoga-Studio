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
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center md:p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
        style={{ animation: isClosing ? "backdropOut 0.28s ease-in both" : "backdropIn 0.28s ease-out both" }}
      />
      <div
        className="relative bg-white w-full md:max-w-2xl rounded-t-2xl md:rounded-2xl shadow-2xl flex flex-col max-h-[92vh]"
        style={{ animation: isClosing ? "modalOut 0.28s ease-in both" : "modalIn 0.32s ease-out both" }}
      >
        {/* Mobile handle */}
        <div className="md:hidden flex justify-center pt-3 pb-1 flex-shrink-0">
          <div className="w-8 h-1 rounded-full bg-gray-300" />
        </div>

        {/* Close button (desktop) */}
        <button
          onClick={handleClose}
          className="hidden md:flex absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 px-5 pt-3 pb-8 md:px-8 md:pt-8 md:pb-8">
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
            <>
              {/* Mobile: compact header + form only */}
              <div className="md:hidden">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Зв'язатись з нами</h2>
                    <p className="text-gray-500 text-xs mt-0.5">Ми відповімо протягом кількох годин</p>
                  </div>
                  <button onClick={handleClose} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors flex-shrink-0 ml-3">
                    <X size={16} />
                  </button>
                </div>

                {/* Compact info strip */}
                <div className="flex gap-4 mb-5 p-3 bg-[#F5F0E8] rounded-xl">
                  <a href="tel:+380441234567" className="flex items-center gap-1.5 text-xs text-gray-600">
                    <Phone size={13} className="text-[#485C46]" />
                    +380 44 123 45 67
                  </a>
                  <a href="mailto:info@greatfit.com.ua" className="flex items-center gap-1.5 text-xs text-gray-600">
                    <Mail size={13} className="text-[#485C46]" />
                    info@greatfit.com.ua
                  </a>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    required type="text" placeholder="Ваше ім'я *"
                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    className="border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#485C46] transition-colors"
                  />
                  <input
                    required type="email" placeholder="Email *"
                    value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    className="border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#485C46] transition-colors"
                  />
                  <textarea
                    required rows={4} placeholder="Ваше повідомлення *"
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    className="border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#485C46] transition-colors resize-none"
                  />
                  <button type="submit" className="bg-[#485C46] text-white py-3 rounded-lg text-sm font-semibold hover:bg-[#3a4a38] transition-colors">
                    Надіслати повідомлення
                  </button>
                </form>
              </div>

              {/* Desktop: 2-col layout */}
              <div className="hidden md:grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">Зв'язатись з нами</h2>
                  <p className="text-gray-500 text-sm mb-6">Ми завжди раді відповісти на ваші запитання</p>
                  <div className="flex flex-col gap-5">
                    {[
                      { Icon: Phone, label: "Телефон", value: "+380 44 123 45 67" },
                      { Icon: Mail, label: "Email", value: "info@greatfit.com.ua" },
                      { Icon: MapPin, label: "Адреса", value: "вул. Саксаганського 12, Київ" },
                      { Icon: Clock, label: "Години роботи", value: "Пн–Пт: 7:00–21:00\nСб–Нд: 9:00–18:00" },
                    ].map(({ Icon, label, value }) => (
                      <div key={label} className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-full bg-[#485C46]/10 flex items-center justify-center flex-shrink-0">
                          <Icon size={16} className="text-[#485C46]" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">{label}</p>
                          {value.split("\n").map((line, i) => (
                            <p key={i} className="text-sm font-medium text-gray-800">{line}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    required type="text" placeholder="Ваше ім'я *"
                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    className="border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#485C46] transition-colors"
                  />
                  <input
                    required type="email" placeholder="Email *"
                    value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    className="border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#485C46] transition-colors"
                  />
                  <textarea
                    required rows={5} placeholder="Ваше повідомлення *"
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    className="border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#485C46] transition-colors resize-none"
                  />
                  <button type="submit" className="mt-auto bg-[#485C46] text-white py-3 rounded-lg text-sm font-semibold hover:bg-[#3a4a38] transition-colors">
                    Надіслати повідомлення
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
