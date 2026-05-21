import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const number = '918005934469';
  const welcomeText = encodeURIComponent('Hello Marble Auto World, I am interested in exploring detailing options or booking custom car services. Could you please advise?');
  const url = `https://wa.me/${number}?text=${welcomeText}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Direct Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[990] bg-[#25d366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
    >
      {/* Absolute pulsing background circles to grab visual focus */}
      <span className="absolute inset-0 rounded-full bg-[#25d366]/40 animate-ping pointer-events-none" />
      
      {/* Main Core Icon */}
      <MessageCircle className="w-6 h-6 stroke-[2.2]" />

      {/* Slide-out tooltip helper on desktop hover */}
      <span className="absolute right-14 bg-black/90 backdrop-blur-md text-white text-[11px] font-display font-bold tracking-widest uppercase py-1.5 px-3 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 pointer-events-none transition-all duration-300 shadow-xl whitespace-nowrap">
        Chat with Expert
      </span>
    </a>
  );
}
