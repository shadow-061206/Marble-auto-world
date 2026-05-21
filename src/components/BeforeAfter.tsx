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
                ? 'bg-amber-500 text-black border-amber-500 font-bold'
                : 'bg-black text-gray-400 border-white/10 hover:text-white hover:border-white/30'
            }`}
          >
            {item.title.split(' ')[0]} {item.title.split(' ')[1] || ''}
          </button>
        ))}
      </div>

      {/* Main Interactive Comparison Stage - luxury border & clear grid feel */}
      <div className="relative w-full max-w-4xl mx-auto border border-white/10 bg-black">
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
            <div className="absolute bottom-4 left-4 bg-black/95 border border-white/10 text-white font-mono text-[9px] tracking-[0.2em] uppercase py-1.5 px-3 z-10">
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
            <div className="absolute bottom-4 left-4 bg-amber-500 text-black font-mono text-[9px] tracking-[0.2em] uppercase py-1.5 px-3 z-10 font-bold flex items-center gap-1 shadow-md">
              AFTER / PRISTINE
            </div>
          </div>

          {/* Separator Line with sharp handle */}
          <div
            className="absolute inset-y-0 w-[1px] bg-amber-500 cursor-ew-resize flex items-center justify-center z-20 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Square handle matching industrial precision look */}
            <div className="w-9 h-9 bg-black border border-amber-500 text-amber-500 shadow-xl flex items-center justify-center cursor-pointer pointer-events-auto hover:bg-amber-500 hover:text-black transition-colors duration-300">
              <ChevronsLeftRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Text description underneath */}
        <div className="p-6 bg-black border-t border-white/10 text-center">
          <p className="text-sm font-serif italic text-white tracking-wide">
            {activeItem.title} Specifications
          </p>
          <p className="text-[11px] text-gray-400 mt-2 max-w-xl mx-auto font-mono tracking-wider leading-relaxed">
            {activeItem.description} Drag the center slider to inspect the restorative alignment and detailing precision of Marble Auto World.
          </p>
        </div>
      </div>
    </div>
  );
}
