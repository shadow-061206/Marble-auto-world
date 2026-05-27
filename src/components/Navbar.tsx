import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const navLinks = [
    { title: 'Home', id: 'home' },
    { title: 'Services', id: 'services' },
    { title: 'Why Choose Us', id: 'why-us' },
    { title: 'Before/After', id: 'before-after' },
    { title: 'Testimonials', id: 'testimonials' },
    { title: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] border-b transition-all duration-500 ${
        scrolled
          ? 'bg-[#FCFBFB]/95 backdrop-blur-md border-[#93BAD9]/30 py-4 shadow-[0_10px_30px_rgba(35,137,218,0.06)]'
          : 'bg-transparent border-transparent py-6 md:py-8'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <div
            onClick={() => scrollToSection('home')}
            className="flex flex-col items-start cursor-pointer select-none group"
          >
            <div className="flex items-baseline gap-1.5 leading-none">
              <span className="text-sm font-black text-zinc-900 uppercase tracking-tight transition-colors group-hover:text-[#2389DA]">
                AUTO
              </span>
              <span className="text-zinc-500 font-sans text-[8px] font-medium tracking-wide">
                By Mamta Enterprises
              </span>
            </div>
            <span className="text-lg font-black text-[#9FC8DD] uppercase tracking-tight leading-none">
              WORLD
            </span>
          </div>

          {/* Desktop Links - styled with luxury letter tracking */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-[10px] font-mono font-semibold uppercase tracking-[0.25em] text-zinc-600 hover:text-[#2389DA] transition-colors duration-300 cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#2389DA] after:transition-all after:duration-300"
              >
                {link.title}
              </button>
            ))}
          </nav>

          {/* Booking CTA for Desktop - sharp edge, luxury outline */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-6 py-2.5 bg-[#2389DA] text-white hover:bg-[#9FC8DD] hover:text-black font-mono font-bold text-[10px] tracking-[0.2em] uppercase transition-all duration-500 cursor-pointer active:scale-95"
            >
              BOOK EVENT Care
            </button>
          </div>

          {/* Mobile Hamburguer */}
          <div className="flex lg:hidden items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="sm:hidden px-4 py-2 bg-[#2389DA] text-white hover:bg-[#9FC8DD] hover:text-black font-mono font-bold text-[10px] tracking-[0.15em] uppercase cursor-pointer"
            >
              BOOK
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-600 hover:text-[#2389DA] bg-zinc-100 p-2 rounded-none border border-zinc-200 transition-colors duration-200 cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Container */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#FCFBFB] border-b border-[#93BAD9]/30 ${
          isOpen ? 'max-h-[460px] opacity-100 py-6' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left text-[10px] font-mono font-semibold uppercase tracking-[0.25em] text-zinc-600 hover:text-[#2389DA] py-2.5 border-b border-zinc-100 cursor-pointer"
            >
              {link.title}
            </button>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenBooking();
            }}
            className="w-full mt-4 py-3.5 bg-[#2389DA] text-white font-mono font-bold text-[10px] tracking-[0.2em] uppercase text-center cursor-pointer hover:bg-brand-accent hover:text-black"
          >
            BOOK EVENT Care
          </button>
        </div>
      </div>
    </header>
  );
}
