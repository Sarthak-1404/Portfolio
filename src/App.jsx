import React from "react";
import Navbar from "./sections/navbar";
import HeroLens from "./components/HeroLens";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import StarsBackground from "./components/StarBackground";

const App = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">

      <Navbar />
      <HeroLens />
      <Hero />
      <About />

      {/* Stars behind Projects */}
      <div className="relative">
        <StarsBackground />
        <Projects />
      </div>

      {/* Stars behind Experiences */}
      <div className="relative">
        <StarsBackground />
        <Experiences />
      </div>

      {/* Stars behind Testimonial */}
      <div className="relative">
        <StarsBackground />
        <Testimonial />
      </div>

      {/* Stars behind Contact */}
      <div className="relative">
        <StarsBackground />
        <Contact />
      </div>

      
        <Footer />
      
      
    </div>
  );
};

export default App;