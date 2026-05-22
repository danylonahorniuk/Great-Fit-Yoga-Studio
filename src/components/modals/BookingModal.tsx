"use client";
import { useState } from "react";
import { X } from "lucide-react";
import { useModal } from "./ModalContext";
import { useLang } from "@/contexts/LanguageContext";

export default function BookingModal() {
  const { open, close } = useModal();
  const { t } = useLang();
  const m = t.modals.booking;
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
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center md:p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
        style={{ animation: isClosing ? "backdropOut 0.28s ease-in both" : "backdropIn 0.28s ease-out both" }}
      />
      <div
        className="relative bg-white w-full md:max-w-md rounded-t-2xl md:rounded-2xl shadow-2xl flex flex-col max-h-[92vh]"
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">{m.successTitle}</h3>
              <p className="text-gray-500 text-sm">{m.successText}</p>
              <button onClick={handleClose} className="mt-6 bg-[#485C46] text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-[#3a4a38] transition-colors">
                {m.close}
              </button>
            </div>
          ) : (
            <>
              {/* Mobile header row */}
              <div className="md:hidden flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{m.title}</h2>
                  <p className="text-gray-500 text-xs mt-0.5">{m.subtitleShort}</p>
                </div>
                <button onClick={handleClose} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors flex-shrink-0 ml-3">
                  <X size={16} />
                </button>
              </div>

              {/* Desktop header */}
              <div className="hidden md:block mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">{m.title}</h2>
                <p className="text-gray-500 text-sm">{m.subtitle}</p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3 md:gap-4">
                <input
                  required
                  type="text"
                  placeholder={m.name}
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#485C46] transition-colors"
                />
                <input
                  required
                  type="email"
                  placeholder={m.email}
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#485C46] transition-colors"
                />
                <input
                  type="tel"
                  placeholder={m.phone}
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
                  <option value="">{m.selectClass}</option>
                  {m.classes.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <select
                  required
                  value={form.time}
                  onChange={e => setForm({ ...form, time: e.target.value })}
                  className="border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#485C46] transition-colors text-gray-600"
                >
                  <option value="">{m.selectTime}</option>
                  {m.times.map(ti => <option key={ti} value={ti}>{ti}</option>)}
                </select>
                <button type="submit" className="mt-1 bg-[#485C46] text-white py-3 rounded-lg text-sm font-semibold hover:bg-[#3a4a38] transition-colors">
                  {m.submit}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
