import { useState } from 'react';
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
import heroSectionImg from './assets/images/hero section image.webp';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [selectedReviewPhoto, setSelectedReviewPhoto] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'detailing' | 'repair' | 'utility'>('all');

  const handleOpenBooking = (serviceId: string = '') => {
    setSelectedServiceId(serviceId);
    setBookingOpen(true);
  };

  const filteredServices = SERVICES.filter(
    (service) => activeCategory === 'all' || service.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-black text-[#faf8f6] font-sans selection:bg-amber-500 selection:text-black overflow-x-hidden relative">
      {/* Architectural Thin Vertical Guidelines Backdrops */}
      <div className="absolute inset-y-0 left-0 right-0 pointer-events-none flex justify-between max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 z-0 opacity-20">
        <div className="w-[1px] h-full bg-zinc-800" />
        <div className="w-[1px] h-full bg-zinc-800 hidden sm:block" />
        <div className="w-[1px] h-full bg-zinc-800 hidden md:block" />
        <div className="w-[1px] h-full bg-zinc-800 hidden lg:block" />
        <div className="w-[1px] h-full bg-zinc-800" />
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
            className="w-full h-full object-cover opacity-10 pointer-events-none select-none filter grayscale block"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black pointer-events-none" />
          
          {/* Animated luxury floating path lines */}
          <div className="absolute inset-0 z-10 opacity-75">
            <FloatingPaths position={1} className="w-full h-full text-amber-500/25" />
            <FloatingPaths position={-1} className="w-full h-full text-zinc-600/35" />
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Narrative Column - Clean, Wide and High Contrast */}
            <div className="lg:col-span-7 space-y-8 text-left z-20 relative">
              
              {/* Premium Tag */}
              <div className="inline-flex items-center gap-2 border-b border-amber-500/30 pb-1 text-[10px] font-mono uppercase tracking-[0.3em] text-amber-500">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block animate-pulse" />
                MARBLE AUTOMOTIVE SANCTUARY
              </div>

              {/* Outstanding Brand Title */}
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.35em] text-amber-500 block">
                  MASTERBRAND DEFINITION
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-light leading-[1.05] tracking-tight text-white uppercase">
                  MARBLE AUTO WORLD <br />
                  <span className="font-serif italic font-light text-amber-500 block mt-2 text-2xl sm:text-4xl md:text-5xl lg:text-6xl lowercase">
                    by Mamta Enterprises
                  </span>
                </h1>
              </div>

              {/* Brand Description Statement */}
              <div className="space-y-4 text-xs md:text-sm text-zinc-350 font-light leading-relaxed max-w-xl">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-900 max-w-xl">
                {[
                  'Pressurized climate PPF chambers',
                  'Computerized laser paint matchers',
                  'Accredited detailing master crew',
                  'Cashless insurance claims coordinators'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[11px] text-zinc-300">
                    <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-900 max-w-lg">
                <div>
                  <span className="block text-xl md:text-2xl font-mono font-bold text-white leading-none">5K+</span>
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-500 mt-2 block">Specimens</span>
                </div>
                <div className="border-l border-zinc-800 pl-6">
                  <span className="block text-xl md:text-2xl font-mono font-bold text-amber-500 leading-none">9H+</span>
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-500 mt-2 block">Hardness Shield</span>
                </div>
                <div className="border-l border-zinc-800 pl-6">
                  <span className="block text-xl md:text-2xl font-mono font-bold text-white leading-none">100%</span>
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-500 mt-2 block">Pristine State</span>
                </div>
              </div>

              {/* Call To Actions - pure sharp luxury button grid */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <button
                  onClick={() => handleOpenBooking('')}
                  className="px-8 py-3.5 bg-white hover:bg-amber-500 text-black font-mono font-bold text-[10px] tracking-[0.2em] uppercase transition-all duration-350 cursor-pointer text-center font-bold"
                >
                  Book Event care
                </button>
                <a
                  href="#services"
                  className="px-8 py-3.5 border border-white/10 hover:border-amber-500 text-white font-mono font-bold text-[10px] tracking-[0.2em] uppercase transition-all duration-350 cursor-pointer text-center hover:bg-white/5"
                >
                  EXP RECIPE
                </a>
              </div>
            </div>

            {/* Right Side Immersive Exhibition Frame */}
            <div className="lg:col-span-5 relative w-full h-[360px] md:h-[460px] lg:h-[500px] z-10">
              
              <div className="absolute inset-0 bg-zinc-950 border border-white/10 overflow-hidden flex flex-col justify-between group">
                
                {/* Tech Margin bar */}
                <div className="px-4 py-3 bg-black border-b border-white/10 flex items-center justify-between text-[9px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5 font-bold tracking-wider text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    ACTUAL SPECIMEN SEC_0
                  </span>
                  <span className="tracking-widest">9H GLAZE COATING</span>
                </div>

                <div className="flex-1 w-full h-full relative overflow-hidden bg-black">
                  <img
                    src={heroSectionImg}
                    alt="Premium Detailed Vehicle Showcase"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 filter grayscale hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  
                  {/* Absolute Corner Info Spec badge */}
                  <div className="absolute bottom-4 right-4 bg-black/95 border border-white/10 p-4 max-w-[220px] pointer-events-none transition-all duration-500 hover:border-amber-500/40">
                    <div className="flex items-center gap-1.5 mb-2">
                      <Gauge className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                      <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-white uppercase">STATION SPEC_A</span>
                    </div>
                    <p className="text-[9px] text-zinc-400 font-mono leading-relaxed">
                      Custom 3-Stage paint corrections with absolute specular reflectance coefficient checks.
                    </p>
                  </div>
                </div>

                <div className="px-4 py-3 bg-black border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-amber-500">
                  <span className="flex items-center gap-1.5 text-zinc-500 text-[9px] uppercase tracking-wider">
                    <Info className="w-3 h-3 text-amber-500" /> Professional inspection criteria
                  </span>
                  <span className="text-[9px] tracking-wider uppercase bg-amber-500/10 px-2 py-0.5 border border-amber-500/20">
                    Certified
                  </span>
                </div>

              </div>

              {/* Bottom Subtle Reflection */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-amber-500/5 blur-2xl pointer-events-none" />
            </div>

          </div>
        </div>
      </section>

      {/* Big Center Display Quote - Built by enthusiasts, for enthusiasts */}
      <section className="py-24 border-t border-b border-zinc-900 bg-black text-center relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <p className="text-xs font-mono text-zinc-500 tracking-[0.4em] uppercase mb-4">
            MARBLE CRAFT RULES
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif italic font-light text-white tracking-wide">
            "Built by enthusiasts, for enthusiasts."
          </h2>
        </div>
      </section>

      {/* Why Choose Us Section - Pure Grid layout */}
      <section id="why-us" className="py-28 bg-[#050505] relative z-10 border-b border-zinc-900">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-20 space-y-4">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.35em] text-amber-500 block">
              PRISTINE OPERATION STANDARDS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-white tracking-tight uppercase leading-none">
              WHY CHOOSE <span className="font-serif italic font-light text-amber-500">Marble</span>
            </h2>
            <div className="w-12 h-[1px] bg-amber-500 mt-4" />
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-light max-w-xl">
              We never cut corners. Our facilities, products, claims networks, and expert mechanics ensure your automotive investment remains flawlessly shielded.
            </p>
          </div>

          {/* Symmetrical Grid List for Why Choose Us */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 bg-transparent">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="bg-black hover:bg-zinc-980 border border-white/10 hover:border-amber-500/30 p-6 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-amber-500 bg-zinc-900">
                    <IconResolver name={item.icon} className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-mono font-bold text-white uppercase leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-zinc-400 leading-relaxed font-light font-sans">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4 text-[9px] font-mono text-zinc-500 uppercase tracking-widest border-t border-zinc-900 mt-6 pointer-events-none">
                  STATION PILLAR {idx + 1}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Services Section - The Care Portfolio */}
      <section id="services" className="py-28 bg-[#050505] relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-20 space-y-4">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.35em] text-amber-500 block">
              SYSTEMATIC CAR CARE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-white tracking-tight uppercase leading-none">
              OUR <span className="font-serif italic font-light text-amber-500">Facility & Solutions</span>
            </h2>
            <div className="w-12 h-[1px] bg-amber-500 mt-4" />
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-light max-w-xl">
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
                    ? 'bg-amber-500 text-black border-amber-500 font-bold'
                    : 'bg-black text-zinc-400 border-white/5 hover:text-white hover:border-white/20'
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
                className="bg-black hover:bg-zinc-980 border border-white/10 hover:border-amber-500/30 p-8 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Icon & Title Row */}
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-amber-500 bg-zinc-900">
                      <IconResolver name={service.icon} className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 tracking-wider">
                      SPEC #0{service.id.slice(-1) || '1'}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-medium text-white hover:text-amber-500 transition-colors duration-200 uppercase">
                    {service.title}
                  </h3>

                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet checklist */}
                  <ul className="space-y-2 pt-2 border-t border-zinc-900 pointer-events-none">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-[11px] text-zinc-300 font-light leading-relaxed">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-8 border-t border-zinc-900 flex items-center justify-between">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase">
                    Accredited Care
                  </span>
                  <button
                    onClick={() => handleOpenBooking(service.title)}
                    className="text-[10px] font-mono tracking-widest uppercase text-amber-500 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    BOOK CODE <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* About Us Section - The Sanctuary Story (re-contextualized to WHAT IS MARBLE story) */}
      <section id="about" className="py-28 bg-black relative z-10 border-t border-zinc-900">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-8">
              <span className="block text-xs font-mono tracking-[0.35em] text-zinc-500 uppercase">
                MAMTA ENTERPRISES
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-white uppercase tracking-tight leading-none">
                WHAT IS <br />
                <span className="font-serif italic font-light text-amber-500 text-3xl sm:text-4xl mt-2 block lowercase">
                  marble?
                </span>
              </h2>
              <div className="w-12 h-[1px] bg-amber-500" />
              
              <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                Marble is the ultimate destination where passion, precision, and community converge. More than storage or maintenance, it’s a sanctuary for extraordinary cars and the enthusiasts who drive them.
              </p>

              {/* Vision Quote Grid */}
              <div className="border-t border-b border-zinc-800 py-6 my-4 space-y-4">
                <span className="text-[10px] font-mono tracking-[0.3em] text-amber-500 block uppercase">
                  OUR VISION
                </span>
                <p className="font-serif italic text-base text-zinc-300 leading-relaxed font-light">
                  "To create a place for extraordinary cars and the people who love them. An ecosystem where world-class care meets precision craftsmanship, and where a shared passion for the drive transforms into lasting connection."
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-6 pt-2 max-w-lg">
                <div>
                  <span className="block text-lg md:text-xl font-mono font-bold text-white leading-none">5K+</span>
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-500 mt-2 block">Specimens</span>
                </div>
                <div className="border-l border-zinc-800 pl-6">
                  <span className="block text-lg md:text-xl font-mono font-bold text-amber-500 leading-none">9H+</span>
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-500 mt-2 block">Hardness Shield</span>
                </div>
                <div className="border-l border-zinc-800 pl-6">
                  <span className="block text-lg md:text-xl font-mono font-bold text-white leading-none">100%</span>
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-500 mt-2 block">Pristine State</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Photo frame */}
            <div className="lg:col-span-6 relative">
              <div className="border border-white/10 bg-zinc-950 p-4">
                <img
                  src="https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?q=80&w=1200&auto=format&fit=crop"
                  alt="Marble Auto World Facility"
                  className="w-full h-[300px] md:h-[420px] object-cover filter grayscale hover:grayscale-0 transition-all duration-[1000ms]"
                />
                
                {/* Certified Float Indicator */}
                <div className="absolute top-8 right-8 bg-black border border-amber-500/40 p-4 text-center max-w-[170px]">
                  <span className="text-[9px] font-mono text-amber-500 uppercase tracking-widest font-bold">CERTIFIED</span>
                  <span className="text-lg font-mono font-medium text-white block mt-1">GLY-9H0</span>
                  <span className="text-[9px] text-zinc-500 mt-1 block font-mono">ACCEDERATED DETAILER LAB</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery & Before/After Slider Center */}
      <section id="before-after" className="py-28 bg-black relative z-10 border-t border-zinc-900">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Header */}
          <div className="max-w-3xl mb-16 space-y-4 text-left">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.35em] text-amber-500 block">
              CRAFT EXHIBITION
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-white tracking-tight uppercase leading-none">
              REVEALING <span className="font-serif italic font-light text-amber-500">Impeccable Care</span>
            </h2>
            <div className="w-12 h-[1px] bg-amber-500 mt-4" />
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-light max-w-xl">
              Don’t take our word for it. Review real, non-glamorized paint corrections, coating reflections, and detailing projects completed directly inside our Mamta Enterprises service stations.
            </p>
          </div>

          <BeforeAfter />

        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-28 bg-[#050505] relative z-10 border-t border-zinc-900">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Header */}
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.35em] text-amber-500 block">
              VERIFIED CLIENTS DICTIONARY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-white tracking-tight uppercase leading-none">
              THE <span className="font-serif italic font-light text-amber-500">Client Feedback</span>
            </h2>
            <div className="w-12 h-[1px] bg-amber-500 mt-4" />
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-light max-w-xl">
              Read authentic reviews and explore ground photos shared directly by regional vehicle owners after visiting our high-capacity service bays.
            </p>
          </div>

          {/* Google reviews stats badge/bar */}
          <div className="mb-16 border border-white/10 bg-black p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center font-mono font-extrabold text-[#faffaf] bg-zinc-900 text-lg">
                G
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-mono font-bold text-white">4.9 / 5.0</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>
                <p className="text-[9px] text-zinc-500 font-mono mt-0.5 uppercase tracking-wider">Based on 184 Google Reviews</p>
              </div>
            </div>

            <div className="shrink-0">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-amber-500/20 text-[9px] font-mono text-amber-500 uppercase tracking-widest bg-amber-500/5">
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
                className="bg-black hover:bg-zinc-980 border border-white/10 hover:border-amber-500/30 p-8 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5">
                      {[...Array(t.rating)].map((_, starIdx) => (
                        <Star key={starIdx} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    {t.timeAgo && (
                      <span className="text-[10px] text-zinc-500 font-mono font-medium">{t.timeAgo}</span>
                    )}
                  </div>

                  <p className="text-xs md:text-sm text-zinc-300 font-light leading-relaxed italic relative">
                    "{t.comment}"
                  </p>
                </div>

                {/* Owner Information footer */}
                <div className="mt-8 pt-6 border-t border-zinc-900 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 object-cover border border-white/10 shrink-0"
                    />
                    <div>
                      <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                        {t.name}
                      </h4>
                      <p className="text-[9px] text-amber-500 font-mono tracking-widest uppercase mt-0.5">
                        {t.carOwned}
                      </p>
                      <span className="text-[9px] text-zinc-500 block mt-0.5">
                        Service: {t.serviceReceived}
                      </span>
                    </div>
                  </div>

                  {t.reviewCount !== undefined && (
                    <div className="text-right shrink-0">
                      <span className="text-[8px] bg-zinc-900 text-amber-500 px-2 py-0.5 border border-white/10 font-mono uppercase font-bold block ml-auto">
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
          <div className="mt-28 border-t border-zinc-900 pt-20">
            <div className="max-w-3xl mb-12 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-amber-500 bg-amber-500/5 px-3 py-1 border border-amber-500/10 mb-2">
                <Camera className="w-3.5 h-3.5" /> DIGITAL ARCHIVE FEED
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-light text-white uppercase leading-none">
                FROM THE <span className="font-serif italic text-amber-500 lowercase">workshop floor</span>
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed max-w-xl font-light">
                Real actions on the ground inside our Mamta Enterprises service bay! Authentic photos shared directly by users displaying custom paint-booth finishes, hydraulic lifts, washing, and detailing processes. Click to expand.
              </p>
            </div>

            {/* Photo Stream Responsive Bento/Grid Layout */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {WORKSHOP_REVIEWS_PHOTOS.map((photo) => (
                <div
                  key={photo.id}
                  onClick={() => setSelectedReviewPhoto(photo.url)}
                  className="group relative h-48 border border-white/10 bg-black cursor-zoom-in overflow-hidden"
                >
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent opacity-90" />
                  
                  {/* Category Chip */}
                  <span className="absolute top-3 left-3 bg-black text-[8px] font-mono tracking-wider font-bold text-amber-500 border border-white/10 px-2.5 py-0.5 uppercase">
                    {photo.category}
                  </span>

                  {/* Caption Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black via-black/90 to-transparent">
                    <p className="text-[9px] text-zinc-300 font-mono line-clamp-2 leading-relaxed">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              ))}
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
                      className="max-h-[72vh] object-contain mx-auto"
                      referrerPolicy="no-referrer"
                    />
                    {currentPhoto && (
                      <span className="absolute top-4 left-4 bg-black text-amber-500 text-[9px] font-mono uppercase font-bold tracking-widest px-3 py-1.5 border border-white/10">
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
      <section id="contact" className="py-28 bg-black relative z-10 border-t border-zinc-900">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Header */}
          <div className="max-w-3xl mb-20 space-y-4 text-left">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.35em] text-amber-500 block">
              VISIT OUR CRADLE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-white tracking-tight uppercase leading-none">
              CONNECT <span className="font-serif italic font-light text-amber-500">With Experts</span>
            </h2>
            <div className="w-12 h-[1px] bg-amber-500 mt-4" />
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-light max-w-xl">
              Get in touch to align schedules, consult detailing compounds with our master technicians, or receive help with accident claims. We are ready to serve.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Contact block fields */}
            <div className="lg:col-span-5 border border-white/10 bg-zinc-950 p-8 flex flex-col justify-between space-y-12">
              
              <div className="space-y-8">
                <h3 className="text-xl font-display font-light text-white uppercase tracking-tight">
                  MARBLE AUTO WORLD <br />
                  <span className="text-amber-500 text-[9px] font-mono uppercase tracking-[0.3em] block mt-2">
                    BY MAMTA ENTERPRISES
                  </span>
                </h3>

                <div className="space-y-6 pt-2">
                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-amber-500 bg-zinc-900 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                        Support Hotline
                      </span>
                      <a
                        href="tel:+918005934469"
                        className="text-base font-bold text-white hover:text-amber-500 transition-colors mt-0.5 block font-mono"
                      >
                        +91 80059 34469
                      </a>
                    </div>
                  </div>

                  {/* Mail */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-amber-500 bg-zinc-900 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                        Official Mailbox
                      </span>
                      <a
                        href="mailto:marbleautoworld@gmail.com"
                        className="text-sm font-bold text-zinc-300 hover:text-amber-500 transition-colors mt-0.5 block font-mono"
                      >
                        marbleautoworld@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-amber-500 bg-zinc-900 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                        Station coordinates
                      </span>
                      <span className="text-xs text-zinc-400 mt-1 block leading-relaxed font-light">
                        Marble Auto World, opposite Mamta Enterprises, Siddharth Nagar, Jagatpura, Jaipur, Rajasthan, India.
                      </span>
                    </div>
                  </div>

                  {/* Clock */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-amber-500 bg-zinc-900 shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                        Operating schedule
                      </span>
                      <span className="text-xs text-zinc-400 mt-1 block font-light leading-relaxed">
                        Mon – Sun: 09:00 AM – 08:30 PM <span className="text-amber-500 font-bold ml-1 block sm:inline">(Open Every Day)</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-8 border-t border-zinc-900">
                <button
                  onClick={() => handleOpenBooking('')}
                  className="w-full py-4 bg-white text-black font-mono font-bold text-[10px] tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer hover:bg-amber-500"
                >
                  <Calendar className="w-4 h-4" /> RESERVE BOOKING DATE
                </button>
              </div>

            </div>

            {/* Right Map embed card (black design inline) */}
            <div className="lg:col-span-7 border border-white/10 bg-zinc-950 relative min-h-[400px]">
              
              <div className="bg-black border-b border-white/10 p-3.5 flex justify-between items-center text-[9px] font-mono text-zinc-400">
                <span className="flex items-center gap-1.5 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> GPS CALIBRATION STABLE
                </span>
                <span className="text-amber-500 uppercase">Opp. Mamta Enterprises</span>
              </div>

              <iframe
                title="Marble Auto World Coordinates Map"
                className="w-full h-[350px] md:h-[450px] lg:h-[450px] border-0 grayscale invert pointer-events-auto"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer"
                src="https://maps.google.com/maps?q=26.811104567709013,75.88653791030661&z=17&output=embed"
              />

              <a
                href="https://www.google.com/maps/place/26%C2%B048'40.0%22N+75%C2%B053'11.5%22E/@26.8111046,75.8865379,17z/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-black border border-white/10 px-4 py-2 text-[9px] font-mono uppercase tracking-widest text-amber-500 hover:text-white transition-colors flex items-center gap-1.5"
              >
                OPEN ON MAPS <ExternalLink className="w-3.5 h-3.5" />
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* Elegant Professional Footer */}
      <footer className="bg-black text-zinc-650 py-16 border-t border-zinc-900 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 border-b border-zinc-900 pb-12 mb-12">
            
            <div className="text-left space-y-2">
              <span className="text-base font-display font-medium uppercase tracking-[0.15em] text-white block">
                MARBLE AUTO WORLD
              </span>
              <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-zinc-500">
                Operating under license with Mamta Enterprises.
              </p>
            </div>

            <div className="text-center">
              <p className="text-[10px] hover:text-white transition-colors uppercase tracking-[0.15em] text-zinc-500 mb-1">
                A sanctuary for extraordinary cars.
              </p>
              <p className="text-[9px] text-zinc-600 font-mono">
                &copy; {new Date().getFullYear()} Marble Auto World.
              </p>
            </div>

            <div className="text-right space-y-1">
              <span className="block text-[9px] font-mono uppercase text-zinc-500 tracking-wider">
                Support Coordinate HOTLINE
              </span>
              <a
                href="tel:+918005934469"
                className="text-base font-mono font-bold text-amber-500 hover:text-white transition-colors"
              >
                +91 80059 34469
              </a>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
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
