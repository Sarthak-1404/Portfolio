import React from "react";
import HeroText from "../components/HeroText";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Astronaut } from "../components/Astronaut";

const SKY_IMAGE = "/assets/sky.jpg";
const MOUNTAIN_IMAGE = "/assets/mount.jpg";
const PLANETS_IMAGE = "/assets/planets.png";

const Hero = () => {
  return (
    <section className="relative w-screen h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <img src={SKY_IMAGE} alt="Sky" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none" draggable={false} />
      <img src={MOUNTAIN_IMAGE} alt="Mountain" className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none" draggable={false} />
      <img src={PLANETS_IMAGE} alt="Planets" className="absolute inset-0 w-full h-full object-cover z-20 pointer-events-none" draggable={false} />

      {/* Content Layer */}
      <div className="relative z-50 flex flex-col md:flex-row items-center justify-between w-full h-full px-6 md:px-16">
        {/* Left: Text */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center">
          <HeroText />
        </div>

        {/* Right: Astronaut */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-end justify-end">
          <Canvas
            style={{ width: '100%', height: '100%', maxHeight: 500 }}
            camera={{ position: [0, 0, 5] }}
          >
            <Float>
              <Astronaut scale={0.5} position={[0, -1, 0]} />
            </Float>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Hero;
