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
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-full gap-2 mb-3">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div 
              key={index}
              className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-primary' : 'bg-gray-400/50'}`}
            ></div>
          ))}
        </div>
        
        <div className="flex items-center justify-center w-full space-x-8">
          <motion.button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`text-white/80 hover:text-white transition-colors ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="bi bi-arrow-left text-2xl"></i>
          </motion.button>
          
          <motion.button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className={`text-white/80 hover:text-white transition-colors ${currentSlide === totalSlides - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="bi bi-arrow-right text-2xl"></i>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Navigation;
