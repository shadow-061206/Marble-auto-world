import { useState, useRef, useEffect, MouseEvent, TouchEvent } from 'react';
import { ChevronsLeftRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';

export default function BeforeAfter() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeItem = GALLERY_ITEMS[activeItemIndex];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: any) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: any) => {
    if (!isDragging) return;
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div className="w-full">
      {/* Tab Selectors - sharp, tracked letters */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {GALLERY_ITEMS.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveItemIndex(idx);
              setSliderPosition(50);
            }}
            className={`px-5 py-2.5 text-[10px] font-mono tracking-[0.2em] uppercase transition-all duration-300 border cursor-pointer ${
              activeItemIndex === idx
                ? 'bg-[#2389DA] text-white border-[#2389DA] font-bold'
                : 'bg-white text-zinc-650 border-zinc-200 hover:text-[#2389DA] hover:border-[#2389DA]/55'
            }`}
          >
            {item.title.split(' ')[0]} {item.title.split(' ')[1] || ''}
          </button>
        ))}
      </div>

      {/* Main Interactive Comparison Stage - luxury border & clear grid feel */}
      <div className="relative w-full max-w-4xl mx-auto border border-zinc-200 bg-white shadow-md">
        <div
          ref={containerRef}
          className="relative aspect-[16/10] md:aspect-[16/9] w-full select-none overflow-hidden cursor-ew-resize"
          onMouseDown={(e) => {
            e.preventDefault();
            setIsDragging(true);
            handleMove(e.clientX);
          }}
          onTouchStart={() => {
            setIsDragging(true);
          }}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* BEFORE: Dust & Scratch Base Layer */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={activeItem.beforeUrl}
              alt="Before Restoration"
              className="w-full h-full object-cover pointer-events-none"
            />
            {/* Elegant text label left bottom */}
            <div className="absolute bottom-4 left-4 bg-white/95 border border-zinc-200 text-zinc-800 font-mono text-[9px] tracking-[0.2em] uppercase py-1.5 px-3 z-10 shadow-sm font-semibold">
              BEFORE / WORN
            </div>
          </div>

          {/* AFTER: Ceramic Glaze Reflected Layer */}
          <div
            className="absolute inset-y-0 left-0 h-full overflow-hidden pointer-events-none transition-all duration-75"
            style={{ width: `${sliderPosition}%` }}
          >
            {/* Mirror sizing wrapper */}
            <div className="absolute inset-0 w-[100vw] h-full" style={{ width: containerRef.current?.getBoundingClientRect().width }}>
              <img
                src={activeItem.afterUrl}
                alt="After Detailing"
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
            {/* Elegant text label right bottom */}
            <div className="absolute bottom-4 left-4 bg-[#2389DA] text-white font-mono text-[9px] tracking-[0.2em] uppercase py-1.5 px-3 z-10 font-bold flex items-center gap-1 shadow-md">
              AFTER / PRISTINE
            </div>
          </div>

          {/* Separator Line with sharp handle */}
          <div
            className="absolute inset-y-0 w-[1px] bg-[#2389DA] cursor-ew-resize flex items-center justify-center z-20 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Square handle matching industrial precision look */}
            <div className="w-9 h-9 bg-white border border-[#2389DA] text-[#2389DA] shadow-xl flex items-center justify-center cursor-pointer pointer-events-auto hover:bg-[#2389DA] hover:text-white transition-colors duration-300">
              <ChevronsLeftRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Text description underneath */}
        <div className="p-6 bg-white border-t border-zinc-200 text-center">
          <p className="text-sm font-serif italic text-zinc-850 tracking-wide font-semibold">
            {activeItem.title} Specifications
          </p>
          <p className="text-[11px] text-zinc-655 mt-2 max-w-xl mx-auto font-sans font-medium tracking-wide leading-relaxed">
            {activeItem.description} Drag the center slider to inspect the restorative alignment and detailing precision of Marble Auto World.
          </p>
        </div>
      </div>
    </div>
  );
}
