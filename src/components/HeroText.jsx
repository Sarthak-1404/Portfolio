import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";
import { Astronaut } from "./Astronaut";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

const HeroText = () => {
  const words = ["Innovative", "Modern", "Analytical"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16">
      {/* Text content */}
      <div className="flex-1 flex flex-col items-start justify-center">
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold text-white mb-4 text-left"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Sarthak Kiran Londhe
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl font-medium text-neutral-300 mb-2 text-left"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          R&D Intern | Computer Engineering Student | Data & AI Enthusiast |
        </motion.p>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}
          className="mb-2"
        >
          <FlipWords
            words={words}
            className="font-black text-white text-4xl md:text-7xl text-left"
          />
        </motion.div>
        <motion.p
          className="text-lg md:text-2xl font-medium text-neutral-300 text-left"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}
        >
          Building Data-Driven Solutions
        </motion.p>
      </div>
      
    </div>
  );
};

export default HeroText;
