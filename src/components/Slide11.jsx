import React from 'react';
import { motion } from 'framer-motion';

const Slide11 = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  // Visual tools
  const visualTools = [
    {
      title: "Instant Preview",
      description: "Real-time application preview with hot reloading",
      icon: "bi-eye-fill"
    },
    {
      title: "Visual Inspector",
      description: "Screenshot capture for visual debugging",
      icon: "bi-camera-fill"
    },
    {
      title: "Responsive Checker",
      description: "Test across multiple device viewports",
      icon: "bi-phone-fill"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-[#050510] z-0">
        {/* Grid pattern */}
        <svg className="absolute w-full h-full opacity-10" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid-dots" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="0.5" fill="#6366f1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-dots)" />
        </svg>
        
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary/10 to-secondary/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="z-10 max-w-5xl mx-auto w-full px-4">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Visual Tools
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Visualize and test your applications with ease</p>
        </motion.div>
        
        {/* Visual Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {visualTools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              className="bg-[#0a0a1a] border border-[#1a1a3a] rounded-xl p-5 relative overflow-hidden"
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 5px 15px -5px rgba(99, 102, 241, 0.3)"
              }}
            >
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute transform rotate-45 bg-primary/20 w-20 h-20 -top-10 -right-10"></div>
              </div>
              
              <div className="flex flex-col h-full">
                <div className="w-14 h-14 rounded-lg bg-[#1a1a3a] flex items-center justify-center mb-4">
                  <i className={`bi ${tool.icon} text-primary text-2xl`}></i>
                </div>
                
                <h4 className="font-semibold text-white text-xl mb-3">{tool.title}</h4>
                <p className="text-gray-400 flex-grow">{tool.description}</p>
                
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="mt-4 bg-[#1a1a3a]/50 text-white py-2 px-4 rounded-lg text-sm flex items-center justify-center border border-[#2a2a4a]/30"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <i className="bi bi-play-fill mr-1"></i>
                  Launch Tool
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Slide11;
