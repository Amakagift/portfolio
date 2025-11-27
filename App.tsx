import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatIDo } from './components/WhatIDo';
import { FeaturedWork } from './components/FeaturedWork';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AllProjects } from './components/AllProjects';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    // Check path on mount
    handleLocationChange();

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const isProjectPage = currentPath === '/projects';

  return (
    <div className="min-h-screen font-sans text-deep-green bg-cream relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-terracotta origin-left z-50"
        style={{ scaleX }}
      />

      <Navbar isProjectPage={isProjectPage} />
      
      <main>
        {isProjectPage ? (
          <AllProjects />
        ) : (
          <>
            <Hero />
            <WhatIDo />
            <About />
            <Experience />
            <FeaturedWork />
            <Contact />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;