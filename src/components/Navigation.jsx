import React from 'react';
import { motion } from 'framer-motion';

const Navigation = ({ currentSlide, totalSlides, nextSlide, prevSlide }) => {
  return (
    <motion.div 
      className="navigation"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <button 
        className="nav-button"
        onClick={prevSlide}
        disabled={currentSlide === 0}
      >
        <i className="bi bi-chevron-left"></i>
      </button>
      
      <div className="flex items-center gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div 
            key={index}
            className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-primary' : 'bg-gray-500'}`}
          ></div>
        ))}
      </div>
      
      <button 
        className="nav-button"
        onClick={nextSlide}
        disabled={currentSlide === totalSlides - 1}
      >
        <i className="bi bi-chevron-right"></i>
      </button>
    </motion.div>
  );
};

export default Navigation;
