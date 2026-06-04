import { useState, useEffect } from 'react';
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  Info,
  Calendar,
  Wrench,
  Gauge,
  X,
  Camera
} from 'lucide-react';

// Static Data & Utility Types
import { SERVICES, TESTIMONIALS, WHY_CHOOSE_US, WORKSHOP_REVIEWS_PHOTOS } from './data';

// Custom Components
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import BookingModal from './components/BookingModal';
import BeforeAfter from './components/BeforeAfter';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import IconResolver from './components/IconResolver';
import { FloatingPaths } from './components/ui/background-paths';
import ThumbnailsCarousel from './components/ui/demo';
import heroSectionImg from './assets/images/hero section image.webp';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [selectedReviewPhoto, setSelectedReviewPhoto] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'detailing' | 'repair' | 'utility'>('all');
  const [galleryRadius, setGalleryRadius] = useState(550);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setGalleryRadius(280);
      } else if (window.innerWidth < 1024) {
        setGalleryRadius(420);
      } else {
        setGalleryRadius(550);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleOpenBooking = (serviceId: string = '') => {
    setSelectedServiceId(serviceId);
    setBookingOpen(true);
  };

  const filteredServices = SERVICES.filter(
    (service) => activeCategory === 'all' || service.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-[#FCFBFB] text-zinc-800 font-sans selection:bg-[#2389DA] selection:text-white overflow-x-hidden relative">
      {/* Architectural Thin Vertical Guidelines Backdrops */}
      <div className="absolute inset-y-0 left-0 right-0 pointer-events-none flex justify-between max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 z-0 opacity-25">
        <div className="w-[1px] h-full bg-zinc-200" />
        <div className="w-[1px] h-full bg-zinc-200 hidden sm:block" />
        <div className="w-[1px] h-full bg-zinc-200 hidden md:block" />
        <div className="w-[1px] h-full bg-zinc-200 hidden lg:block" />
        <div className="w-[1px] h-full bg-zinc-200" />
      </div>

      {/* Premium Cinematic Loader */}
      <Loader />

      {/* Persistent Sticky Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking('')} />

      {/* Constant Floating WhatsApp Helper Contact */}
      <FloatingWhatsApp />

      {/* Hero Section - Majestic Editorial Canvas */}
      <section id="home" className="relative min-h-screen pt-32 pb-24 flex flex-col justify-center overflow-hidden z-10">
        {/* Subtle background industrial automotive lineup */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1920&auto=format&fit=crop"
            alt="Hero Automotive Background"
            className="w-full h-full object-cover opacity-10 pointer-events-none select-none filter blur-[2px] grayscale block"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FCFBFB] via-[#FCFBFB]/70 to-[#FCFBFB] pointer-events-none" />
          
          {/* Animated luxury floating path lines */}
          <div className="absolute inset-0 z-10 opacity-75">
            <FloatingPaths position={1} className="w-full h-full text-brand-core/15" />
            <FloatingPaths position={-1} className="w-full h-full text-zinc-400/25" />
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Narrative Column - Clean, Wide and High Contrast */}
            <div className="lg:col-span-7 space-y-8 text-left z-20 relative">
              
              {/* Premium Tag */}
              <div className="inline-flex items-center gap-2 border-b border-[#2389DA]/30 pb-1 text-[10px] font-mono uppercase tracking-[0.3em] text-[#2389DA] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2389DA] inline-block animate-pulse" />
                MARBLE AUTO WORLD AUTOMOTIVE SANCTUARY
              </div>

               {/* Outstanding Brand Title */}
              <div className="space-y-4">
                
                <div className="flex flex-col gap-1 tracking-tight select-none font-sans font-bold">
                  {/* Top row: MARBLE + By Mamta Enterprises */}
                  <div className="flex flex-wrap items-baseline gap-x-4 md:gap-x-6 gap-y-2">
                    <span className="text-3xl sm:text-4xl lg:text-[38px] xl:text-[47px] font-black text-zinc-900 tracking-[0.02em] uppercase leading-none">
                      MARBLE
                    </span>
                    
                    <span className="text-zinc-600 font-sans font-semibold text-xs sm:text-sm md:text-lg tracking-wide leading-none">
                      By Mamta Enterprises
                    </span>
                  </div>

                  {/* Bottom row: AUTO WORLD */}
                  <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[70px] xl:text-[90px] 2xl:text-[105px] font-black text-[#2389DA] tracking-tight uppercase leading-none whitespace-nowrap mt-1">
                    AUTO WORLD
                  </h1>
                </div>
              </div>

              {/* Brand Description Statement */}
              <div className="space-y-4 text-xs md:text-sm text-zinc-650 font-medium leading-relaxed max-w-xl">
                <p>
                  Established as the premium complete car care center, 
                  <strong> Marble Auto World</strong> has become synonymous with mechanical authority and luxury automotive detailing. 
                  Operated with standard procedures and utilizing state-of-the-art diagnostic frameworks, 
                  we cater to detailing enthusiasts, offroad collectors, and daily commuter vehicles alike.
                </p>
                <p>
                  Our fully pressurized dust-free climate booths ensure absolute precision for Paint Protection Film (PPF) 
                  and 9H nano liquid applications. Backed by Mamta Enterprises licensing, we support end-to-end motor 
                  insurance accident claim management, guaranteeing zero friction for our patrons.
                </p>
              </div>

              {/* Symmetrical Mini Parameters Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-200 max-w-xl">
                {[
                  'Pressurized climate PPF chambers',
                  'Computerized laser paint matchers',
                  'Accredited detailing master crew',
                  'Cashless insurance claims coordinators'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[11px] text-zinc-700 font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#2389DA] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-200 max-w-lg">
                <div>
                  <span className="block text-xl md:text-2xl font-mono font-bold text-zinc-900 leading-none">5K+</span>
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-500 mt-2 block">Specimens</span>
                </div>
                <div className="border-l border-zinc-200 pl-6">
                  <span className="block text-xl md:text-2xl font-mono font-bold text-[#2389DA] leading-none">9H+</span>
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-500 mt-2 block">Hardness Shield</span>
                </div>
                <div className="border-l border-zinc-200 pl-6">
                  <span className="block text-xl md:text-2xl font-mono font-bold text-zinc-900 leading-none">100%</span>
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-500 mt-2 block">Pristine State</span>
                </div>
              </div>

              {/* Call To Actions - pure sharp luxury button grid */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <button
                  onClick={() => handleOpenBooking('')}
                  className="px-8 py-3.5 bg-[#2389DA] hover:bg-[#9FC8DD] text-white hover:text-black font-mono font-bold text-[10px] tracking-[0.2em] uppercase transition-all duration-350 cursor-pointer text-center font-bold"
                >
                  Book Event care
                </button>
                <a
                  href="#services"
                  className="px-8 py-3.5 border border-zinc-350 hover:border-brand-core text-zinc-700 font-mono font-bold text-[10px] tracking-[0.2em] uppercase transition-all duration-350 cursor-pointer text-center hover:bg-zinc-100"
                >
                  EXP RECIPE
                </a>
              </div>
            </div>

            {/* Right Side Immersive Exhibition Frame */}
            <div className="lg:col-span-5 relative w-full h-[360px] md:h-[460px] lg:h-[500px] z-10">
              
              <div className="absolute inset-0 bg-white border border-zinc-200 overflow-hidden flex flex-col justify-between group shadow-lg">
                
                {/* Tech Margin bar */}
                <div className="px-4 py-3 bg-zinc-50 border-b border-zinc-200 flex items-center justify-between text-[9px] font-mono text-zinc-650">
                  <span className="flex items-center gap-1.5 font-bold tracking-wider text-zinc-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2389DA] animate-pulse" />
                    ACTUAL SPECIMEN SEC_0
                  </span>
                  <span className="tracking-widest text-[#2389DA]">9H GLAZE COATING</span>
                </div>

                <div className="flex-1 w-full h-full relative overflow-hidden bg-zinc-100">
                  <img
                    src={heroSectionImg}
                    alt="Premium Detailed Vehicle Showcase"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/10 via-transparent to-transparent opacity-80" />
                  
                  {/* Absolute Corner Info Spec badge */}
                  <div className="absolute bottom-4 right-4 bg-white border border-zinc-200 p-4 max-w-[220px] pointer-events-none transition-all duration-500 hover:border-[#2389DA]/40 shadow-md">
                    <div className="flex items-center gap-1.5 mb-2">
                      <Gauge className="w-3.5 h-3.5 text-[#2389DA] animate-pulse" />
                      <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-zinc-800 uppercase">STATION SPEC_A</span>
                    </div>
                    <p className="text-[9px] text-zinc-600 font-mono leading-relaxed">
                      Custom 3-Stage paint corrections with absolute specular reflectance coefficient checks.
                    </p>
                  </div>
                </div>

                <div className="px-4 py-3 bg-zinc-50 border-t border-zinc-200 flex items-center justify-between text-[10px] font-mono text-[#2389DA]">
                  <span className="flex items-center gap-1.5 text-zinc-500 text-[9px] uppercase tracking-wider">
                    <Info className="w-3 h-3 text-[#2389DA]" /> Professional inspection criteria
                  </span>
                  <span className="text-[9px] tracking-wider uppercase bg-[#2389DA]/10 px-2 py-0.5 border border-[#2389DA]/20 text-[#2389DA] font-bold">
                    Certified
                  </span>
                </div>

              </div>

              {/* Bottom Subtle Reflection */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-brand-core/5 blur-2xl pointer-events-none" />
            </div>

          </div>
        </div>
      </section>

      {/* Big Center Display Quote - Built by enthusiasts, for enthusiasts */}
      <section className="py-24 border-t border-b border-zinc-200 bg-white text-center relative z-10 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <p className="text-xs font-mono text-zinc-400 tracking-[0.4em] uppercase mb-4">
            MARBLE AUTO WORLD CRAFT RULES
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif italic text-zinc-900 tracking-wide">
            "Built by enthusiasts, <span className="text-[#2389DA]">for enthusiasts."</span>
          </h2>
        </div>
      </section>

      {/* Why Choose Us Section - Pure Grid layout */}
      <section id="why-us" className="py-28 bg-[#FCFBFB] relative z-10 border-b border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-20 space-y-4">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.35em] text-[#2389DA] block">
              PRISTINE OPERATION STANDARDS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-zinc-900 tracking-tight uppercase leading-none">
              WHY CHOOSE <span className="font-serif italic font-light text-[#2389DA]">Marble Auto World</span>
            </h2>
            <div className="w-12 h-[1px] bg-[#2389DA] mt-4" />
            <p className="text-xs md:text-sm text-zinc-655 leading-relaxed font-medium max-w-xl">
              We never cut corners. Our facilities, products, claims networks, and expert mechanics ensure your automotive investment remains flawlessly shielded.
            </p>
          </div>

          {/* Symmetrical Grid List for Why Choose Us */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 bg-transparent">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="bg-white hover:bg-zinc-50 border border-zinc-200 hover:border-[#2389DA]/35 p-6 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.01)]"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 border border-zinc-200 flex items-center justify-center text-[#2389DA] bg-zinc-50">
                    <IconResolver name={item.icon} className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-mono font-bold text-zinc-900 uppercase leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-zinc-600 leading-relaxed font-normal font-sans">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4 text-[9px] font-mono text-zinc-400 uppercase tracking-widest border-t border-zinc-105 mt-6 pointer-events-none">
                  STATION PILLAR {idx + 1}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Services Section - The Care Portfolio */}
      <section id="services" className="py-28 bg-[#FCFBFB] relative z-10 border-t border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-20 space-y-4">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.35em] text-[#2389DA] block">
              SYSTEMATIC CAR CARE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-zinc-900 tracking-tight uppercase leading-none">
              OUR <span className="font-serif italic font-light text-[#2389DA]">Facility & Solutions</span>
            </h2>
            <div className="w-12 h-[1px] bg-[#2389DA] mt-4" />
            <p className="text-xs md:text-sm text-zinc-650 leading-relaxed font-medium max-w-xl">
              Inside our state-of-the-art facility, every vehicle is treated with climate-controlled perfection, entrusted to a dedicated car care team who treat every detail with passion and reverence.
            </p>
          </div>



          {/* Service Categories Selector Tab Panel */}
          <div className="flex flex-wrap items-center justify-start gap-3 mb-12">
            {[
              { id: 'all', label: 'All solutions' },
              { id: 'detailing', label: 'Restoration & PPF' },
              { id: 'repair', label: 'Mechanical & Electrics' },
              { id: 'utility', label: 'Claims & Accessories' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-5 py-2.5 text-[10px] font-mono tracking-[0.2em] uppercase transition-all duration-300 border cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-[#2389DA] text-white border-[#2389DA] font-bold'
                    : 'bg-white text-zinc-500 border-zinc-200 hover:text-[#2389DA] hover:border-[#2389DA]/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid of Interactive Services - Flat luxury grid layout with 1px borders */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 bg-transparent">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white hover:bg-zinc-50 border border-zinc-200 hover:border-[#2389DA]/30 p-8 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_30px_rgba(0,0,0,0.01)]"
              >
                <div className="space-y-6">
                  {/* Icon & Title Row */}
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 border border-zinc-200 flex items-center justify-center text-[#2389DA] bg-zinc-50">
                      <IconResolver name={service.icon} className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 tracking-wider">
                      SPEC #0{service.id.slice(-1) || '1'}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-medium text-zinc-900 hover:text-[#2389DA] transition-colors duration-200 uppercase">
                    {service.title}
                  </h3>

                  <p className="text-xs text-zinc-600 font-medium leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet checklist */}
                  <ul className="space-y-2 pt-2 border-t border-zinc-100 pointer-events-none">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-[11px] text-zinc-700 font-medium leading-relaxed">
                        <CheckCircle className="w-3.5 h-3.5 text-[#2389DA] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-8 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase">
                    Accredited Care
                  </span>
                  <button
                    onClick={() => handleOpenBooking(service.title)}
                    className="text-[10px] font-mono tracking-widest uppercase text-[#2389DA] hover:text-[#9FC8DD] flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    BOOK CODE <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>



      {/* Gallery & Before/After Slider Center */}
      <section id="before-after" className="py-28 bg-[#FCFBFB] relative z-10 border-t border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Header */}
          <div className="max-w-3xl mb-16 space-y-4 text-left">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.35em] text-[#2389DA] block">
              CRAFT EXHIBITION
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-zinc-900 tracking-tight uppercase leading-none">
              REVEALING <span className="font-serif italic font-light text-[#2389DA]">Impeccable Care</span>
            </h2>
            <div className="w-12 h-[1px] bg-[#2389DA] mt-4" />
            <p className="text-xs md:text-sm text-zinc-650 leading-relaxed font-medium max-w-xl">
              Don’t take our word for it. Review real, non-glamorized paint corrections, coating reflections, and detailing projects completed directly inside our Mamta Enterprises service stations.
            </p>
          </div>

          <BeforeAfter />

        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-28 bg-[#FCFBFB] relative z-10 border-t border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Header */}
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.35em] text-[#2389DA] block">
              VERIFIED CLIENTS DICTIONARY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-zinc-900 tracking-tight uppercase leading-none">
              THE <span className="font-serif italic font-light text-[#2389DA]">Client Feedback</span>
            </h2>
            <div className="w-12 h-[1px] bg-[#2389DA] mt-4" />
            <p className="text-xs md:text-sm text-zinc-655 leading-relaxed font-medium max-w-xl">
              Read authentic reviews and explore ground photos shared directly by regional vehicle owners after visiting our high-capacity service bays.
            </p>
          </div>

          {/* Google reviews stats badge/bar */}
          <div className="mb-16 border border-zinc-200 bg-white p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 border border-zinc-200 flex items-center justify-center font-mono font-extrabold text-[#2389DA] bg-zinc-50 text-lg">
                G
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-mono font-bold text-zinc-905">4.9 / 5.0</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#2389DA] text-[#2389DA]" />
                    ))}
                  </div>
                </div>
                <p className="text-[9px] text-zinc-500 font-mono mt-0.5 uppercase tracking-wider">Based on 184 Google Reviews</p>
              </div>
            </div>

            <div className="shrink-0">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#2389DA]/25 text-[9px] font-mono text-[#2389DA] uppercase tracking-widest bg-[#2389DA]/5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                Live Customer Feeds
              </span>
            </div>
          </div>

          {/* Testimonial Cards Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 bg-transparent">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white hover:bg-zinc-50 border border-zinc-200 hover:border-[#2389DA]/30 p-8 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_30px_rgba(0,0,0,0.01)]"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5">
                      {[...Array(t.rating)].map((_, starIdx) => (
                        <Star key={starIdx} className="w-3.5 h-3.5 fill-[#2389DA] text-[#2389DA]" />
                      ))}
                    </div>
                    {t.timeAgo && (
                      <span className="text-[10px] text-zinc-500 font-mono font-medium">{t.timeAgo}</span>
                    )}
                  </div>

                  <p className="text-xs md:text-sm text-zinc-700 font-normal leading-relaxed italic relative">
                    "{t.comment}"
                  </p>
                </div>

                {/* Owner Information footer */}
                <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 object-cover border border-zinc-200 shrink-0"
                    />
                    <div>
                      <h4 className="text-xs font-mono font-bold text-zinc-900 uppercase tracking-wider">
                        {t.name}
                      </h4>
                      <p className="text-[9px] text-[#2389DA] font-mono tracking-widest uppercase mt-0.5">
                        {t.carOwned}
                      </p>
                      <span className="text-[9px] text-zinc-500 block mt-0.5">
                        Service: {t.serviceReceived}
                      </span>
                    </div>
                  </div>

                  {t.reviewCount !== undefined && (
                    <div className="text-right shrink-0">
                      <span className="text-[8px] bg-zinc-50 text-[#2389DA] px-2 py-0.5 border border-zinc-200 font-mono uppercase font-bold block ml-auto">
                        google spec
                      </span>
                      <span className="text-[8px] text-zinc-500 block mt-1 font-mono uppercase">
                        {t.reviewCount} reviews
                      </span>
                    </div>
                  )}

                </div>

              </div>
            ))}
          </div>

          {/* Ground Operations Section */}
          <div className="mt-28 border-t border-zinc-200 pt-20">
            <div className="max-w-3xl mb-12 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-[#2389DA] bg-[#2389DA]/5 px-3 py-1 border border-[#2389DA]/10 mb-2">
                <Camera className="w-3.5 h-3.5" /> DIGITAL ARCHIVE FEED
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-light text-zinc-900 uppercase leading-none">
                FROM THE <span className="font-serif italic text-[#2389DA] lowercase font-medium">workshop floor</span>
              </h3>
              <p className="text-xs text-zinc-650 leading-relaxed max-w-xl font-medium">
                Real actions on the ground inside our Mamta Enterprises service bay! Authentic photos shared directly by users displaying custom paint-booth finishes, hydraulic lifts, washing, and detailing processes. Click to expand.
              </p>
            </div>

            {/* Highly Polished Modern Workshop Carousel Section */}
            <div className="relative w-full">
              <ThumbnailsCarousel
                items={WORKSHOP_REVIEWS_PHOTOS.map((photo) => ({
                  full: photo.url,
                  thumb: photo.fallbackUrl || photo.url,
                  alt: photo.caption,
                  category: photo.category
                }))}
                onItemClick={(url) => setSelectedReviewPhoto(url)}
              />
            </div>
          </div>

          {/* Lightbox / Modal Viewer for Genuine Action Photos */}
          {selectedReviewPhoto && (() => {
            const currentPhoto = WORKSHOP_REVIEWS_PHOTOS.find(p => p.url === selectedReviewPhoto);
            return (
              <div 
                className="fixed inset-0 z-[1100] flex items-center justify-center p-4 md:p-8 bg-black/98 transition-all duration-300"
                onClick={() => setSelectedReviewPhoto(null)}
              >
                {/* Close Button top-right */}
                <button 
                  className="absolute top-4 right-4 z-[1200] p-3 border border-white/10 bg-black text-zinc-350 hover:text-white transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedReviewPhoto(null)}
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Inner Content Box */}
                <div 
                  className="max-w-4xl w-full flex flex-col items-center gap-4 relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative border border-white/10 bg-black max-w-full">
                    <img
                      src={selectedReviewPhoto}
                      alt="Full screen detailed inspect"
                      onError={(e) => {
                        if (currentPhoto?.fallbackUrl && e.currentTarget.src !== currentPhoto.fallbackUrl) {
                          e.currentTarget.src = currentPhoto.fallbackUrl;
                        }
                      }}
                      className="max-h-[72vh] object-contain mx-auto"
                      referrerPolicy="no-referrer"
                    />
                    {currentPhoto && (
                      <span className="absolute top-4 left-4 bg-black text-brand-accent text-[9px] font-mono uppercase font-bold tracking-widest px-3 py-1.5 border border-white/10">
                        {currentPhoto.category}
                      </span>
                    )}
                  </div>
                  {currentPhoto && (
                    <div className="text-center max-w-2xl mt-2 px-4 space-y-2">
                      <p className="text-xs md:text-sm text-zinc-200 leading-relaxed font-sans">
                        {currentPhoto.caption}
                      </p>
                      <div className="inline-flex items-center gap-1.5 text-[9px] text-zinc-500 font-mono tracking-widest uppercase">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> Verified Ground specimen
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* Contact Section - Connecting with Experts */}
      <section id="contact" className="py-28 bg-[#FCFBFB] relative z-10 border-t border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Header */}
          <div className="max-w-3xl mb-20 space-y-4 text-left">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.35em] text-[#2389DA] block">
              VISIT OUR CRADLE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-zinc-900 tracking-tight uppercase leading-none">
              CONNECT <span className="font-serif italic font-light text-[#2389DA]">With Experts</span>
            </h2>
            <div className="w-12 h-[1px] bg-[#2389DA] mt-4" />
            <p className="text-xs md:text-sm text-zinc-650 leading-relaxed font-medium max-w-xl">
              Get in touch to align schedules, consult detailing compounds with our master technicians, or receive help with accident claims. We are ready to serve.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Contact block fields */}
            <div className="lg:col-span-5 border border-zinc-200 bg-white p-8 flex flex-col justify-between space-y-12 shadow-sm">
              
              <div className="space-y-8">
                <div className="flex flex-col gap-0.5 select-none text-left font-sans font-bold">
                  <div className="flex items-baseline gap-2 leading-none">
                    <span className="text-sm font-black text-zinc-900 uppercase tracking-tight">MARBLE</span>
                    <span className="text-zinc-550 font-sans font-semibold text-xs">By Mamta Enterprises</span>
                  </div>
                  <h3 className="text-3xl font-black text-[#2389DA] uppercase tracking-tight leading-none mt-1">
                    AUTO WORLD
                  </h3>
                </div>

                <div className="space-y-6 pt-2">
                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 border border-zinc-150 flex items-center justify-center text-[#2389DA] bg-zinc-50 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                        Support Hotline
                      </span>
                      <a
                        href="tel:+918005934469"
                        className="text-base font-bold text-zinc-800 hover:text-[#2389DA] transition-colors mt-0.5 block font-mono"
                      >
                        +91 80059 34469
                      </a>
                    </div>
                  </div>

                  {/* Mail */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 border border-zinc-150 flex items-center justify-center text-[#2389DA] bg-zinc-50 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                        Official Mailbox
                      </span>
                      <a
                        href="mailto:marbleautoworld@gmail.com"
                        className="text-sm font-bold text-zinc-700 hover:text-[#2389DA] transition-colors mt-0.5 block font-mono"
                      >
                        marbleautoworld@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 border border-zinc-150 flex items-center justify-center text-[#2389DA] bg-zinc-50 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                        Station coordinates
                      </span>
                      <span className="text-xs text-zinc-655 mt-1 block leading-relaxed font-medium">
                        Marble Auto World, opposite Mamta Enterprises, Siddharth Nagar, Jagatpura, Jaipur, Rajasthan, India.
                      </span>
                    </div>
                  </div>

                  {/* Clock */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 border border-zinc-150 flex items-center justify-center text-[#2389DA] bg-zinc-50 shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                        Operating schedule
                      </span>
                      <span className="text-xs text-zinc-655 mt-1 block font-medium leading-relaxed">
                        Mon – Sun: 09:00 AM – 08:30 PM <span className="text-[#2389DA] font-bold ml-1 block sm:inline">(Open Every Day)</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-8 border-t border-zinc-100">
                <button
                  onClick={() => handleOpenBooking('')}
                  className="w-full py-4 bg-[#2389DA] text-white font-mono font-bold text-[10px] tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer hover:bg-[#9FC8DD] hover:text-black"
                >
                  <Calendar className="w-4 h-4" /> RESERVE BOOKING DATE
                </button>
              </div>

            </div>

            {/* Right Map embed card (black design inline) */}
            <div className="lg:col-span-7 border border-zinc-200 bg-white relative min-h-[400px] shadow-sm">
              
              <div className="bg-zinc-50 border-b border-zinc-200 p-3.5 flex justify-between items-center text-[9px] font-mono text-zinc-650">
                <span className="flex items-center gap-1.5 uppercase font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> GPS CALIBRATION STABLE
                </span>
                <span className="text-[#2389DA] uppercase font-bold">Opp. Mamta Enterprises</span>
              </div>

              <iframe
                title="Marble Auto World Coordinates Map"
                className="w-full h-[350px] md:h-[450px] lg:h-[450px] border-0 pointer-events-auto filter brightness-[0.98] contrast-[1.02]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer"
                src="https://maps.google.com/maps?q=26.811104567709013,75.88653791030661&z=17&output=embed"
              />

              <a
                href="https://www.google.com/maps/place/26%C2%B048'40.0%22N+75%C2%B053'11.5%22E/@26.8111046,75.8865379,17z/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-white border border-zinc-200 px-4 py-2 text-[9px] font-mono uppercase tracking-widest text-[#2389DA] hover:text-black transition-colors flex items-center gap-1.5 shadow-md font-bold"
              >
                OPEN ON MAPS <ExternalLink className="w-3.5 h-3.5" />
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* Elegant Professional Footer */}
      <footer className="bg-zinc-50 text-zinc-500 py-16 border-t border-zinc-200 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 border-b border-zinc-200 pb-12 mb-12">
            
            <div className="text-left space-y-2">
              <div className="flex flex-col gap-0.5 select-none font-sans font-bold">
                <div className="flex items-baseline gap-2 leading-none">
                  <span className="text-xs font-black text-zinc-900 uppercase tracking-tight">MARBLE</span>
                  <span className="text-zinc-550 font-sans font-semibold text-[10px]">By Mamta Enterprises</span>
                </div>
                <span className="text-sm font-black text-[#2389DA] uppercase tracking-tight leading-none">
                  AUTO WORLD
                </span>
              </div>
              <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-zinc-400">
                Operating under license with Mamta Enterprises.
              </p>
            </div>

            <div className="text-center">
              <p className="text-[10px] hover:text-[#2389DA] transition-colors uppercase tracking-[0.15em] text-zinc-500 mb-1">
                A sanctuary for extraordinary cars.
              </p>
              <p className="text-[9px] text-zinc-500 font-mono">
                &copy; {new Date().getFullYear()} Marble Auto World.
              </p>
            </div>

            <div className="text-right space-y-1">
              <span className="block text-[9px] font-mono uppercase text-zinc-400 tracking-wider">
                Support Coordinate HOTLINE
              </span>
              <a
                href="tel:+918005934469"
                className="text-base font-mono font-bold text-[#2389DA] hover:text-[#9FC8DD] transition-colors"
              >
                +91 80059 34469
              </a>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[9px] font-mono text-zinc-400 uppercase tracking-widest">
            <div>PRECISION AUTOMOTIVE REHABILITATION MATRIX</div>
            <div>STATION CODE IND-N03</div>
          </div>
        </div>
      </footer>

      {/* High-Fidelity Booking Modal Overlay Trigger */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialServiceId={selectedServiceId}
      />

    </div>
  );
}
