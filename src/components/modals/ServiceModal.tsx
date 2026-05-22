"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { useModal } from "./ModalContext";
import { useLang } from "@/contexts/LanguageContext";

export default function ServiceModal() {
  const { open, serviceData, close, openBooking } = useModal();
  const { t } = useLang();
  const m = t.modals.service;
  const [isClosing, setIsClosing] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    if (open === "service") setImgLoaded(false);
  }, [open, serviceData]);

  if (open !== "service" && !isClosing) return null;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      close();
      setIsClosing(false);
    }, 280);
  };

  const handleBook = () => {
    handleClose();
    setTimeout(() => openBooking(), 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
        style={{ animation: isClosing ? "backdropOut 0.28s ease-in both" : "backdropIn 0.28s ease-out both" }}
      />
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
        style={{ animation: isClosing ? "modalOut 0.28s ease-in both" : "modalIn 0.32s ease-out both" }}
      >
        {/* Header image */}
        <div className="relative h-48 w-full bg-gray-200">
          {!imgLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
          )}
          <Image
            src={serviceData?.image ?? ""}
            alt={serviceData?.title ?? ""}
            fill
            className={`object-cover transition-opacity duration-300 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
            sizes="448px"
            onLoad={() => setImgLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white transition-colors"
          >
            <X size={16} />
          </button>
          <h2 className="absolute bottom-4 left-5 text-xl font-bold text-white">{serviceData?.title}</h2>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-500 text-sm leading-relaxed mb-4">{serviceData?.desc}</p>
          <div className="border-t border-gray-100 my-4" />
          <p className="text-gray-600 text-sm leading-relaxed mb-6">{serviceData?.details}</p>

          <button
            onClick={handleBook}
            className="cursor-pointer w-full bg-[#485C46] text-white py-3 rounded-lg text-sm font-semibold hover:bg-[#3a4a38] transition-colors"
          >
            {m.book}
          </button>
        </div>
      </div>
    </div>
  );
}
