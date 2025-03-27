import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // Updated to 3 slides

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

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide]); // Re-add event listener when currentSlide changes

  return (
    <div className="slide-container gradient-bg">
      <AnimatePresence mode="wait">
        {currentSlide === 0 && (
          <motion.div
            key="slide1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="slide"
          >
            <Slide1 />
          </motion.div>
        )}
        
        {currentSlide === 1 && (
          <motion.div
            key="slide2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="slide"
          >
            <Slide2 />
          </motion.div>
        )}
        
        {currentSlide === 2 && (
          <motion.div
            key="slide3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="slide"
          >
            <Slide3 />
          </motion.div>
        )}
      </AnimatePresence>
      
      <Navigation 
        currentSlide={currentSlide} 
        totalSlides={totalSlides} 
        nextSlide={nextSlide} 
        prevSlide={prevSlide} 
      />
      
      <Footer currentSlide={currentSlide} totalSlides={totalSlides} />
    </div>
  );
}

export default App;
