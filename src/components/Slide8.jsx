import React from 'react';
import { motion } from 'framer-motion';

const Slide8 = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  // Voice input languages
  const languages = [
    "English", "Spanish", "French", "German", "Chinese", 
    "Japanese", "Russian", "Arabic", "Hindi", "Portuguese", 
    "Italian", "Korean"
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-[#050510] z-0">
        {/* Animated gradient background */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            background: "radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.3), transparent 70%), radial-gradient(circle at 70% 70%, rgba(16, 185, 129, 0.3), transparent 70%)"
          }}
          animate={{
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="z-10 max-w-4xl mx-auto w-full px-4">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Voice Input
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Natural language processing with multilingual support</p>
        </motion.div>
        
        {/* Voice Input */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-[#0a0a1a] border border-[#1a1a3a] rounded-2xl p-5 relative overflow-hidden max-w-2xl mx-auto"
        >
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
            <div className="absolute transform rotate-45 bg-primary/20 w-28 h-28 -top-14 -right-14"></div>
          </div>
          
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mr-4">
              <i className="bi bi-mic-fill text-primary text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold">Multilingual Voice Commands</h3>
          </div>
          
          <div className="mb-4">
            <div className="bg-[#1a1a3a]/50 rounded-lg p-3 mb-3 relative">
              <motion.div
                className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-lg"
                initial={{ width: "0%" }}
                animate={{ 
                  width: ["0%", "100%", "100%"],
                }}
                transition={{ 
                  duration: 3,
                  times: [0, 0.7, 1],
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-primary/20 rounded-lg"></div>
              </motion.div>
              
              <div className="relative flex items-center">
                <i className="bi bi-mic-fill text-red-500 mr-2 animate-pulse"></i>
                <span className="text-sm">Create a responsive e-commerce dashboard...</span>
              </div>
            </div>
            
            <div className="text-center mb-3">
              <span className="text-xs text-gray-400">Supported Languages</span>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {languages.map((lang, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
                  className="bg-[#1a1a3a]/30 text-xs rounded-full px-3 py-1 text-gray-300 border border-white/5"
                >
                  {lang}
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="p-3 bg-[#1a1a3a]/50 rounded-lg border border-[#2a2a4a] text-sm"
          >
            <div className="flex items-start">
              <i className="bi bi-translate text-primary mr-2 mt-0.5"></i>
              <div>
                <span className="font-medium text-white">Natural Language Processing:</span> Advanced algorithms understand context and intent across multiple languages.
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide8;
