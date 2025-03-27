import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div 
      className="logo-container flex flex-col items-center"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-xl font-display font-bold text-white mb-1">Websparks</h2>
        
        <motion.img 
          src="https://cdn.websparks.ai/3_logo-2ef35fcd.png" 
          alt="Websparks Logo" 
          className="h-16 w-auto my-2"
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 6,
            ease: "easeInOut" 
          }}
        />
      </div>
    </motion.div>
  );
};

export default Logo;
