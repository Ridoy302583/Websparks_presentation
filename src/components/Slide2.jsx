import React from 'react';
import { motion } from 'framer-motion';

const Slide2 = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };
  
  // Input methods data
  const inputMethods = [
    { icon: "bi-chat-text-fill", title: "Natural Language" },
    { icon: "bi-image", title: "Images" },
    { icon: "bi-pencil", title: "Sketch Design" },
    { icon: "bi-hand-index-thumb", title: "Hand Drawn" },
    { icon: "bi-globe", title: "URL Crawling" }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
      {/* Dark circuit-like background pattern */}
      <div className="absolute inset-0 bg-[#050510] z-0 overflow-hidden">
        <svg className="absolute w-full h-full opacity-10" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#6366f1" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        
        {/* Glowing lines */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-primary/30"
            style={{
              width: `${Math.random() * 30 + 20}%`,
              left: `${Math.random() * 70}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              width: [`${Math.random() * 30 + 20}%`, `${Math.random() * 30 + 20}%`],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="z-10 max-w-5xl mx-auto w-full px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
            <span className="text-white">AI-Powered</span> <span className="text-primary">Software Engineer</span>
          </h2>
          <p className="text-gray-400 text-lg">Creating full-stack applications with human-like precision</p>
        </motion.div>
        
        <div className="flex flex-col items-center">
          {/* Input Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-[#0a0a1a] border border-[#1a1a3a] rounded-2xl p-5 relative overflow-hidden max-w-2xl w-full"
          >
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
              <div className="absolute transform rotate-45 bg-primary/20 w-28 h-28 -top-14 -right-14"></div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center mr-2">
                <i className="bi bi-lightning text-primary"></i>
              </span>
              Multiple Input Methods
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {inputMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="flex items-center p-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-[#1a1a3a] flex items-center justify-center mr-2">
                    <i className={`bi ${method.icon} text-primary`}></i>
                  </div>
                  <span className="text-sm">{method.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Slide2;
