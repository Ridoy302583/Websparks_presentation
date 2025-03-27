import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.div 
      className="header-container w-full flex justify-between items-center px-6 py-4 absolute top-0 left-0 z-10"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div className="flex space-x-3">
        <motion.a 
          href="https://linkedin.com/company/websparks" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="bi bi-linkedin mr-1"></i>
          @websparks
        </motion.a>
        
        <motion.a 
          href="https://twitter.com/websparks" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="bi bi-twitter mr-1"></i>
          @websparks
        </motion.a>
      </div>
      
      <motion.a 
        href="https://websparks.ai" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white font-medium"
        whileHover={{ scale: 1.05 }}
      >
        www.websparks.ai
      </motion.a>
    </motion.div>
  );
};

export default Header;
