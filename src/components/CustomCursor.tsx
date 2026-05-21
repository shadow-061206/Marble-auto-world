import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [interactive, setInteractive] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Detect mobile touch devices to completely bypass overhead
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.style.cursor === 'pointer' ||
        target.closest('[role="button"]')
      ) {
        setInteractive(true);
      } else {
        setInteractive(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Precision cursor dot */}
      <div
        id="custom-dot"
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-yellow-500 rounded-full pointer-events-none z-[9999] transition-transform duration-100 mix-blend-difference"
        style={{
          transform: `translate3d(${position.x - 5}px, ${position.y - 5}px, 0) scale(${interactive ? 2 : 1})`,
        }}
      />
      {/* Outer elegant ring delay follower */}
      <div
        id="custom-ring"
        className="fixed top-0 left-0 w-8 h-8 border border-yellow-500/50 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out"
        style={{
          transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0) scale(${interactive ? 1.5 : 1})`,
          opacity: interactive ? 0.8 : 0.4,
        }}
      />
      {/* Cinematic subtle light spotlight that radiates behind the dark dashboard */}
      <div
        id="cursor-glow"
        className="fixed top-0 left-0 w-[450px] h-[450px] bg-yellow-500/5 rounded-full pointer-events-none z-[-10] blur-[100px] transition-transform duration-500 ease-out"
        style={{
          transform: `translate3d(${position.x - 225}px, ${position.y - 225}px, 0)`,
        }}
      />
    </>
  );
}
