import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';
import Slide5 from './components/Slide5';
import Slide6 from './components/Slide6';
import Slide7 from './components/Slide7';
import Slide8 from './components/Slide8';
import Slide9 from './components/Slide9';
import Slide10 from './components/Slide10';
import Slide11 from './components/Slide11';
import Slide12 from './components/Slide12';
import Slide13 from './components/Slide13';
import Slide14 from './components/Slide14';
import Slide15 from './components/Slide15';
import Slide16 from './components/Slide16';
import Slide17 from './components/Slide17';
import Slide18 from './components/Slide18';
import Slide19 from './components/Slide19';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 19; // Updated to 19 slides total

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

        {currentSlide === 3 && (
          <motion.div
            key="slide4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="slide"
          >
            <Slide4 />
          </motion.div>
        )}

        {currentSlide === 4 && (
          <motion.div
            key="slide5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="slide"
          >
            <Slide5 />
          </motion.div>
        )}

        {currentSlide === 5 && (
          <motion.div
            key="slide6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="slide"
          >
            <Slide6 />
          </motion.div>
        )}

        {currentSlide === 6 && (
          <motion.div
            key="slide7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="slide"
          >
            <Slide7 />
          </motion.div>
        )}

        {currentSlide === 7 && (
          <motion.div
            key="slide8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="slide"
          >
            <Slide8 />
          </motion.div>
        )}

        {currentSlide === 8 && (
          <motion.div
            key="slide9"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="slide"
          >
            <Slide9 />
          </motion.div>
        )}

        {currentSlide === 9 && (
          <motion.div
            key="slide10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="slide"
          >
            <Slide10 />
          </motion.div>
        )}

        {currentSlide === 10 && (
          <motion.div
            key="slide11"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="slide"
          >
            <Slide11 />
          </motion.div>
        )}

        {currentSlide === 11 && (
          <motion.div
            key="slide12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="slide"
          >
            <Slide12 />
          </motion.div>
        )}

        {currentSlide === 12 && (
          <motion.div
            key="slide13"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="slide"
          >
            <Slide13 />
          </motion.div>
        )}

        {currentSlide === 13 && (
          <motion.div
            key="slide14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="slide"
          >
            <Slide14 />
          </motion.div>
        )}

        {currentSlide === 14 && (
          <motion.div
            key="slide15"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="slide"
          >
            <Slide15 />
          </motion.div>
        )}

        {currentSlide === 15 && (
          <motion.div
            key="slide16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="slide"
          >
            <Slide16 />
          </motion.div>
        )}

        {currentSlide === 16 && (
          <motion.div
            key="slide17"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="slide"
          >
            <Slide17 />
          </motion.div>
        )}

        {currentSlide === 17 && (
          <motion.div
            key="slide18"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="slide"
          >
            <Slide18 />
          </motion.div>
        )}

        {currentSlide === 18 && (
          <motion.div
            key="slide19"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="slide"
          >
            <Slide19 />
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
