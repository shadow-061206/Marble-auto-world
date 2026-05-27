import { Carousel } from "@ark-ui/react/carousel";

interface ThumbnailsCarouselProps {
  items?: {
    full: string;
    thumb: string;
    alt: string;
    category?: string;
  }[];
  onItemClick?: (url: string) => void;
}

export default function ThumbnailsCarousel({ items, onItemClick }: ThumbnailsCarouselProps) {
  const defaultImages = [
    {
      full: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&h=800&q=80",
      thumb: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=240&h=160&q=80",
      alt: "Exotic Supercar Gloss Correction Detailing",
      category: "Detaiilng"
    },
    {
      full: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=1200&h=800&q=80",
      thumb: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=240&h=160&q=80",
      alt: "Precision Paint Swirl-Removal Buffing",
      category: "Swirl Care"
    },
    {
      full: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&h=800&q=80",
      thumb: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=240&h=160&q=80",
      alt: "Under-The-Hood Engine Telemetry Diagnostics",
      category: "Diagnostics"
    },
    {
      full: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&h=800&q=80",
      thumb: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=240&h=160&q=80",
      alt: "Active Gloss Snow-Foam Wash Bay",
      category: "Wash Bay"
    },
    {
      full: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1200&h=800&q=80",
      thumb: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=240&h=160&q=80",
      alt: "High Performance Carbon Ceramic Brake System",
      category: "Brakes"
    },
    {
      full: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&h=800&q=80",
      thumb: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=240&h=160&q=80",
      alt: "Custom Restomod Classic Performance Overhaul",
      category: "Restomod"
    }
  ];

  const images = items && items.length > 0 ? items : defaultImages;

  return (
    <Carousel.Root
      defaultPage={0}
      slideCount={images.length}
      className="max-w-4xl mx-auto w-full bg-zinc-950/80 border border-zinc-900 rounded-2xl p-4 md:p-6 shadow-2xl relative"
    >
      <Carousel.ItemGroup className="overflow-hidden rounded-xl shadow-2xl mb-6 border border-zinc-900 aspect-video md:max-h-[460px]">
        {images.map((image, index) => (
          <Carousel.Item key={index} index={index} className="relative w-full h-full">
            <div 
              onClick={() => onItemClick?.(image.full)}
              className={onItemClick ? "cursor-zoom-in w-full h-full" : "w-full h-full"}
            >
              <img
                src={image.full}
                alt={image.alt}
                className="w-full h-full object-cover select-none pointer-events-none"
              />
              {/* Ambient photo labeling */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent text-white">
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-brand-accent uppercase bg-brand-core/10 px-2 py-1 rounded border border-brand-core/20 mb-1.5 inline-block">
                  {image.category || "HD ARCHIVE ACTION"} {index + 1}
                </span>
                <p className="text-xs sm:text-sm font-sans font-light tracking-wide text-zinc-200">
                  {image.alt}
                </p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      <div className="flex items-center gap-4">
        <Carousel.PrevTrigger className="p-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-brand-accent hover:text-brand-light rounded-xl transition-all active:scale-95 cursor-pointer shrink-0 inline-flex items-center justify-center">
          <svg className="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </Carousel.PrevTrigger>

        {/* Custom scrollable thumbnails bar */}
        <div className="flex gap-3 overflow-x-auto scrollbar-hide flex-1 py-1 px-1">
          {images.map((image, index) => (
            <Carousel.Indicator
              key={index}
              index={index}
              className="shrink-0 border-2 border-zinc-900/40 data-current:border-brand-accent rounded-lg overflow-hidden cursor-pointer transition-all hover:scale-105"
            >
              <img
                src={image.thumb}
                alt={`Thumbnail ${index + 1}`}
                className="w-16 h-12 md:w-20 md:h-14 object-cover select-none pointer-events-none"
              />
            </Carousel.Indicator>
          ))}
        </div>

        <Carousel.NextTrigger className="p-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-brand-accent hover:text-brand-light rounded-xl transition-all active:scale-95 cursor-pointer shrink-0 inline-flex items-center justify-center">
          <svg className="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </Carousel.NextTrigger>
      </div>
    </Carousel.Root>
  );
}
