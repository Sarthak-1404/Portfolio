import React, { useEffect, useRef } from "react";

const StarsBackground = () => {
  const starsRef = useRef(null);
  let animationFrameId = null;
  let mouseOffsetX = 0;
  let mouseOffsetY = 0;
  let currentX = 0;
  let currentY = 0;

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mouseOffsetX = (e.clientX / innerWidth - 0.5) * 50; // Increased range
      mouseOffsetY = (e.clientY / innerHeight - 0.5) * 50;
    };

    const animate = () => {
      currentX += (mouseOffsetX - currentX) * 0.1; // Increased motion speed
      currentY += (mouseOffsetY - currentY) * 0.1;

      if (starsRef.current) {
        starsRef.current.style.transform = `translate(${currentX}px, ${currentY}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div ref={starsRef} className="w-full h-full">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {Array.from({ length: 120 }).map((_, i) => {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const radius = Math.random() * 0.8 + 0.2;
            const duration = (Math.random() * 2 + 1).toFixed(2); // 1-3s
            const delay = (Math.random() * 2).toFixed(2);
            return (
              <circle
                key={i}
                cx={`${x}%`}
                cy={`${y}%`}
                r={radius}
                fill="white"
                style={{
                  opacity: 0.6,
                  animation: `twinkle ${duration}s ease-in-out ${delay}s infinite alternate`,
                }}
              />
            );
          })}
        </svg>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          from {
            opacity: 0.2;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default StarsBackground;