import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './components/Logo';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="slide-container gradient-bg">
      <Logo />
      
      <AnimatePresence mode="wait">
        {currentSlide === 0 && (
          <motion.div
            key="slide1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="slide"
          >
            <Slide1 />
          </motion.div>
        )}
        
        {currentSlide === 1 && (
          <motion.div
            key="slide2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="slide"
          >
            <Slide2 />
          </motion.div>
        )}
      </AnimatePresence>
      
      <Navigation 
        currentSlide={currentSlide} 
        totalSlides={totalSlides} 
        nextSlide={nextSlide} 
        prevSlide={prevSlide} 
      />
      
      <Footer />
    </div>
  );
}

export default App;
