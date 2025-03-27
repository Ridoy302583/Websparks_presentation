import React from 'react';
import { motion } from 'framer-motion';

const Footer = ({ currentSlide, totalSlides }) => {
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
