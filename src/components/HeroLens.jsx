import React, { useRef, useState, useEffect } from "react";

const POLY_IMAGE = "/assets/hero-polygonal.jpg";
const ORIG_IMAGE = "/assets/hero-original.jpg";

export default function HeroLens() {
  const containerRef = useRef(null);
  const [lensActive, setLensActive] = useState(true); // ✅ lens starts active
  const [lens, setLens] = useState({ x: 0, y: 0, visible: true });
  const lensRadius = 140;

  // Track container size for dynamic backgroundSize
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const handleMouseMove = (e) => {
    if (!lensActive) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      setLens({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        visible: true,
      });
    }
  };

  const handleToggleLens = () => {
    const toggled = !lensActive;
    setLensActive(toggled);
    setLens((prev) => ({ ...prev, visible: toggled }));
  };

  return (
    <section
      ref={containerRef}
      className="relative z-10 w-screen h-screen flex items-center justify-center overflow-hidden bg-black snap-start"
      onClick={handleToggleLens}
      onMouseMove={handleMouseMove}
    >
      {/* Background polygonal image (always visible) */}
      <img
        src={POLY_IMAGE}
        alt="Polygonal Hero"
        className="absolute inset-0 w-full h-full object-cover z-0"
        draggable={false}
      />

      {/* Lens effect */}
      {lens.visible && (
        <div
          className="absolute z-20 pointer-events-none"
          style={{
            left: lens.x - lensRadius,
            top: lens.y - lensRadius,
            width: lensRadius * 2,
            height: lensRadius * 2,
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: "0 0 0 4px rgba(255,255,255,0.2)",
            backgroundImage: `url(${ORIG_IMAGE})`,
            backgroundSize: `${containerSize.width}px ${containerSize.height}px`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: `${-lens.x + lensRadius}px ${-lens.y + lensRadius}px`,
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontSize: 40,
              fontWeight: 700,
              textShadow: "0 2px 8px rgba(0,0,0,0.5)",
              userSelect: "none",
            }}
          >
            +
          </div>
        </div>
      )}

      {/* Text overlay - moved after lens and z-30 */}
      <div className="relative z-30 text-center px-4 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-4">
          Sarthak Londhe
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-lavender mb-6">
          Innovative R&D Intern | Computer Engineering Student | Data & AI Enthusiast
        </h2>
        <p className="text-lg md:text-xl text-neutral-200 bg-black/40 rounded-xl p-4">
          A passionate Computer Engineering student with hands-on experience in research, development,
          and data-driven problem-solving. I thrive in collaborative environments and bring analytical
          thinking and technical skills to every project I take on.
        </p>
      </div>
    </section>
  );
}