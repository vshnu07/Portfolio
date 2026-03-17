import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import HireMe from "./components/HireMe";
import ResumeModal from "./components/ResumeModal";

const App = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar onResumeClick={() => setIsResumeModalOpen(true)} />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Achievements />
        <div className="relative z-0">
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
        <HireMe />
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
