import React from 'react';
import { motion } from 'framer-motion';

const Footer = ({ currentSlide, totalSlides, nextSlide, prevSlide }) => {
  return (
    <motion.div 
      className="footer flex justify-between items-center w-full px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
    >
      <div className="flex items-center">
        <motion.img 
          src="https://cdn.websparks.ai/3_logo-2ef35fcd.png" 
          alt="Websparks Logo" 
          className="h-6 w-auto mr-2"
          whileHover={{ scale: 1.1, rotate: 10 }}
          crossOrigin="anonymous"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/100x40/1a1a3a/FFFFFF?text=Websparks";
          }}
        />
        <p className="text-sm">Designed by WebSparks AI</p>
      </div>
      
      <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div 
              key={index}
              className={`w-1 h-1 rounded-full ${currentSlide === index ? 'bg-primary w-2' : 'bg-gray-500'}`}
            ></div>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          <motion.button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`text-white/70 hover:text-white transition-colors ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="bi bi-arrow-left text-lg"></i>
          </motion.button>
          
          <motion.button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className={`text-white/70 hover:text-white transition-colors ${currentSlide === totalSlides - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="bi bi-arrow-right text-lg"></i>
          </motion.button>
        </div>
      </div>
      
      <div className="flex items-center">
        <p className="text-sm mr-4">© 2025 websparks. All rights reserved.</p>
        <div className="text-xl font-medium">
          {currentSlide + 1}/{totalSlides}
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
