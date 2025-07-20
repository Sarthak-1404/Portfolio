import React, { useEffect, useRef, useState } from "react";

const POLY_IMAGE = "/assets/poly.jpg";
const ORIG_IMAGE = "/assets/hero-original.jpg";

export default function LensEffect() {
  const containerRef = useRef(null);
  const [lensOn, setLensOn] = useState(true);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [lensRadius, setLensRadius] = useState(70); // start near medium
  const animationRef = useRef(null);
  const growingRef = useRef(true);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    const animate = () => {
      setLensRadius((r) => {
        if (growingRef.current) {
          if (r >= 80) growingRef.current = false;
          return r + 0.2;
        } else {
          if (r <= 60) growingRef.current = true;
          return r - 0.2;
        }
      });
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  const handleClick = () => {
    setLensOn((prev) => !prev);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      {/* Background Image */}
      <img
        src={POLY_IMAGE}
        alt="Polygon Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        draggable={false}
      />

      {/* Lens Reveal */}
      {lensOn && (
        <div className="absolute inset-0 pointer-events-none z-10">
          <img
            src={ORIG_IMAGE}
            alt="Original Reveal"
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{
              clipPath: `circle(${lensRadius}px at ${mouse.x}px ${mouse.y}px)`,
            }}
            draggable={false}
          />
          {/* + Icon at lens center */}
          <div
            className="absolute text-3xl font-bold text-white drop-shadow-lg select-none"
            style={{
              left: mouse.x,
              top: mouse.y,
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
              zIndex: 20,
            }}
          >
            +
          </div>
        </div>
      )}

      {/* Text Content */}
      <div className="relative z-20 h-full w-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg mb-4">
          Sarthak kiran Londhe
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-lavender mb-6">
          Innovative R&D Intern | Computer Engineering Student | Data & AI Enthusiast
        </h2>
        <p className="text-lg md:text-xl text-neutral-200 bg-black/40 rounded-xl p-4 max-w-3xl">
          A passionate Computer Engineering student with hands-on experience in research,
          development, and data-driven problem-solving. I thrive in collaborative environments
          and bring analytical thinking and technical skills to every project I take on.
        </p>
      </div>
    </div>
  );
}