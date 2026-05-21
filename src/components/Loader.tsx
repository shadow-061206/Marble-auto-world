import { useState, useEffect } from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [removed, setRemoved] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Increment loading progress smoothly
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setFadeOut(true), 250);
          setTimeout(() => setRemoved(true), 800);
          return 100;
        }
        // Random incremental hops
        const next = prev + Math.floor(Math.random() * 15) + 5;
        return next > 100 ? 100 : next;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  if (removed) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#060608] transition-all duration-700 ease-in-out ${
        fadeOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Visual background atmospheric elements */}
      <div className="absolute top-[20%] w-[300px] h-[300px] bg-yellow-500/10 rounded-full blur-[100px] animate-pulse pointer-events-none" />

      {/* Elegant minimalist rotating geometry */}
      <div className="relative mb-8 flex items-center justify-center">
        {/* Outer glowing chassis outline effect */}
        <div className="absolute w-24 h-24 border border-yellow-500/20 rounded-full animate-ping duration-1000" />
        <div className="absolute w-20 h-20 border-t-2 border-yellow-500/80 rounded-full animate-spin duration-700" />
        
        {/* Core Icon */}
        <div className="relative w-14 h-14 bg-[#0e0e12] rounded-full border border-white/10 flex items-center justify-center shadow-lg">
          <ShieldCheck className="w-6 h-6 text-yellow-500 animate-pulse" />
        </div>
      </div>

      {/* Brand Branding Typography */}
      <div className="text-center space-y-2 px-6">
        <h1 className="text-3xl md:text-4xl font-display font-medium tracking-widest text-white uppercase">
          MARBLE <span className="text-yellow-500">AUTO</span> WORLD
        </h1>
        <p className="text-xs font-mono text-gray-500 tracking-[0.25em] uppercase flex items-center justify-center gap-1.5">
          <Sparkles className="w-3 h-3 text-yellow-500 animate-pulse" /> BY MAMTA ENTERPRISES <Sparkles className="w-3 h-3 text-yellow-500 animate-pulse" />
        </p>
      </div>

      {/* Horizontal Progress Bar */}
      <div className="mt-12 w-64 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
        <div
          className="h-full bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-500 transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Reading feedback text */}
      <div className="mt-3 text-center">
        <span className="text-[10px] font-mono text-gray-400 tracking-wider">
          {progress < 40 && 'IGNITING V8 ENGINE STATIONS...'}
          {progress >= 40 && progress < 75 && 'TUNING CERAMIC REFLECTION COMPASS...'}
          {progress >= 75 && progress < 99 && 'POLISHING SHADOW MAP RENDERING FILES...'}
          {progress >= 99 && 'SUCCESSFULLY BALANCED...'}
        </span>
        <span className="text-[10px] font-mono text-yellow-500/90 ml-1.5 font-bold">
          {progress}%
        </span>
      </div>
    </div>
  );
}
