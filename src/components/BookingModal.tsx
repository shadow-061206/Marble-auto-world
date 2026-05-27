import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, Car, Sliders, MessageSquare } from 'lucide-react';
import { SERVICES } from '../data';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export default function BookingModal({ isOpen, onClose, initialServiceId }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carModel: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });

  // Dynamically set initial service if provided when opening modal
  useEffect(() => {
    if (isOpen) {
      const selectedService = SERVICES.find(s => s.id === initialServiceId || s.title === initialServiceId);
      setFormData(prev => ({
        ...prev,
        service: selectedService ? selectedService.title : SERVICES[0].title,
      }));
      
      // Lock main body scroll
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialServiceId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Standard high-reliability Indian WhatsApp routing config
    const targetPhone = '918005934469';

    const textMessage = `Hello Marble Auto World,

Booking Details:
Name: ${formData.name}
Phone: ${formData.phone}
Car Model: ${formData.carModel}
Service: ${formData.service}
Date: ${formData.date}
Time: ${formData.time}
Message: ${formData.message || 'No additional notes.'}`;

    const encodedText = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodedText}`;
    
    // Open in a new tab safely
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      id="booking-modal-overlay"
      className="fixed inset-0 z-[9990] flex items-center justify-center bg-black/60 backdrop-blur-md px-4 py-6 overflow-y-auto"
      onClick={(e) => {
        if ((e.target as HTMLElement).id === 'booking-modal-overlay') onClose();
      }}
    >
      <div
        id="booking-modal"
        className="relative w-full max-w-lg bg-white border border-zinc-200 rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Subtle top ambient bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2389DA] via-[#9FC8DD] to-[#2389DA] animate-pulse" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-800 bg-zinc-100 hover:bg-zinc-200 p-2 rounded-full transition-colors duration-200 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-display font-medium text-zinc-900 tracking-tight">
            Reserve Your <span className="text-[#2389DA]">Service</span>
          </h2>
          <p className="text-xs text-zinc-550 mt-1 font-medium">
            Book online. Re-route instantly to our official reservation desk on WhatsApp.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Row */}
          <div className="relative">
            <label className="block text-xs font-bold text-zinc-700 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#2389DA]" /> Full Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Rajan Malhotra"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full bg-zinc-50 border border-zinc-200 p-3 pl-3 text-zinc-900 placeholder-zinc-400 focus:placeholder-zinc-500 focus:border-[#2389DA]/80 focus:bg-white outline-none rounded-lg text-sm transition-all duration-200 font-medium"
            />
          </div>

          {/* Grid for Phone and Car Model */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-xs font-bold text-zinc-700 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#2389DA]" /> Phone Number
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 9876543210"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full bg-zinc-50 border border-zinc-200 p-3 text-zinc-900 placeholder-zinc-400 focus:placeholder-zinc-500 focus:border-[#2389DA]/80 focus:bg-white outline-none rounded-lg text-sm transition-all duration-200 font-medium"
              />
            </div>

            <div className="relative">
              <label className="block text-xs font-bold text-zinc-700 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5 text-[#2389DA]" /> Car Model
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Mahindra Scorpio-N Z8L"
                value={formData.carModel}
                onChange={(e) => setFormData(prev => ({ ...prev, carModel: e.target.value }))}
                className="w-full bg-zinc-50 border border-zinc-200 p-3 text-zinc-900 placeholder-zinc-400 focus:placeholder-zinc-500 focus:border-[#2389DA]/80 focus:bg-white outline-none rounded-lg text-sm transition-all duration-200 font-medium"
              />
            </div>
          </div>

          {/* Service Selector */}
          <div className="relative">
            <label className="block text-xs font-bold text-zinc-700 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-[#2389DA]" /> Service Solution
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
              className="w-full bg-zinc-50 border border-zinc-200 p-3 text-zinc-900 focus:border-[#2389DA]/80 focus:bg-white outline-none rounded-lg text-sm transition-all duration-200 cursor-pointer font-medium"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.title} className="bg-white text-zinc-900">
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          {/* Grid for Date and Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-xs font-bold text-zinc-700 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#2389DA]" /> Desired Date
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                className="w-full bg-zinc-50 border border-zinc-200 p-3 text-zinc-900 focus:border-[#2389DA]/80 focus:bg-white outline-none rounded-lg text-sm transition-all duration-200 cursor-pointer font-medium"
              />
            </div>

            <div className="relative">
              <label className="block text-xs font-bold text-zinc-700 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#2389DA]" /> Desired Time
              </label>
              <input
                type="time"
                required
                value={formData.time}
                onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
                className="w-full bg-zinc-50 border border-zinc-200 p-3 text-zinc-900 focus:border-[#2389DA]/80 focus:bg-white outline-none rounded-lg text-sm transition-all duration-200 cursor-pointer font-medium"
              />
            </div>
          </div>

          {/* Special Instructions Message */}
          <div className="relative">
            <label className="block text-xs font-bold text-zinc-700 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-[#2389DA]" /> Special Instructions
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Scratches on front right door, ceramic re-coating requested..."
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              className="w-full bg-zinc-50 border border-zinc-200 p-3 text-zinc-900 placeholder-zinc-400 focus:placeholder-zinc-500 focus:border-[#2389DA]/80 focus:bg-white outline-none rounded-lg text-sm transition-all duration-200 resize-none font-medium"
            />
          </div>

          {/* CTA Submit Button */}
          <button
            type="submit"
            className="w-full mt-2 bg-[#2389DA] hover:bg-[#9FC8DD] text-white hover:text-black py-3.5 px-6 font-display font-bold text-sm tracking-widest uppercase rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer hover:shadow-md hover:shadow-[#2389DA]/20 hover:scale-[1.01] active:scale-[0.99]"
          >
            Confirm & Send on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
