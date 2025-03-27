import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div 
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
    >
      <p>© 2025 websparks. All rights reserved.</p>
      <p className="mt-1 text-xs">Designed by WebSparks AI</p>
    </motion.div>
  );
};

export default Footer;
