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
    { title: 'About Us', id: 'about' },
    { title: 'Why Choose Us', id: 'why-us' },
    { title: 'Before/After', id: 'before-after' },
    { title: 'Testimonials', id: 'testimonials' },
    { title: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] border-b transition-all duration-500 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md border-white/10 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent border-transparent py-6 md:py-8'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <div
            onClick={() => scrollToSection('home')}
            className="flex flex-col items-start gap-1 cursor-pointer select-none group"
          >
            <span className="text-xl font-display font-medium text-white tracking-[0.15em] uppercase transition-colors group-hover:text-amber-500">
              MARBLE AUTO WORLD
            </span>
            <span className="text-[9px] font-mono text-gray-400 uppercase tracking-[0.35em] leading-none">
              MAMTA ENTERPRISES
            </span>
          </div>

          {/* Desktop Links - styled with luxury letter tracking */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-[10px] font-mono font-medium uppercase tracking-[0.25em] text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-amber-500 after:transition-all after:duration-300"
              >
                {link.title}
              </button>
            ))}
          </nav>

          {/* Booking CTA for Desktop - sharp edge, luxury outline */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-6 py-2.5 bg-white text-black hover:bg-amber-500 hover:text-black font-mono font-bold text-[10px] tracking-[0.2em] uppercase transition-all duration-500 cursor-pointer active:scale-95"
            >
              BOOK EVENT Care
            </button>
          </div>

          {/* Mobile Hamburguer */}
          <div className="flex lg:hidden items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="sm:hidden px-4 py-2 bg-white text-black hover:bg-amber-500 font-mono font-bold text-[10px] tracking-[0.15em] uppercase cursor-pointer"
            >
              BOOK
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white bg-white/5 p-2 rounded-none border border-white/10 transition-colors duration-200 cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Container */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-black border-b border-white/10 ${
          isOpen ? 'max-h-[460px] opacity-100 py-6' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left text-[10px] font-mono font-medium uppercase tracking-[0.25em] text-gray-400 hover:text-white py-2.5 border-b border-white/5 cursor-pointer"
            >
              {link.title}
            </button>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenBooking();
            }}
            className="w-full mt-4 py-3.5 bg-amber-500 text-black font-mono font-bold text-[10px] tracking-[0.2em] uppercase text-center cursor-pointer hover:bg-yellow-400"
          >
            BOOK EVENT Care
          </button>
        </div>
      </div>
    </header>
  );
}
