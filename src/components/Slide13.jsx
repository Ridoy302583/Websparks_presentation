import React from 'react';
import { motion } from 'framer-motion';

const Slide13 = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  // Frontend technology stack
  const frontendTech = [
    { name: "React", icon: "bi-filetype-jsx", category: "UI Library" },
    { name: "Vite", icon: "bi-lightning-charge", category: "Build Tool" },
    { name: "Remix", icon: "bi-arrow-repeat", category: "Framework" },
    { name: "Next.js", icon: "bi-box-arrow-right", category: "Framework" },
    { name: "Astro", icon: "bi-stars", category: "Framework" },
    { name: "Vue.js", icon: "bi-diagram-2", category: "UI Library" },
    { name: "Nuxt.js", icon: "bi-box-arrow-up-right", category: "Framework" },
    { name: "Svelte", icon: "bi-hurricane", category: "UI Library" },
    { name: "Angular", icon: "bi-shield", category: "Framework" },
    { name: "TypeScript", icon: "bi-file-earmark-code", category: "Language" },
    { name: "Qwik", icon: "bi-lightning", category: "Framework" },
    { name: "Slidev", icon: "bi-easel", category: "Presentation" }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-[#050510] z-0">
        {/* Circuit-like pattern */}
        <svg className="absolute w-full h-full opacity-10" viewBox="0 0 100 100">
          <defs>
            <pattern id="circuit-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#6366f1" strokeWidth="0.5" />
              <circle cx="10" cy="10" r="1" fill="#6366f1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
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
      
      <div className="z-10 max-w-6xl mx-auto w-full px-4">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Supported Technology Stack
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Frontend Technologies</p>
        </motion.div>
        
        {/* Frontend Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-[#0a0a1a] border border-[#1a1a3a] rounded-2xl p-5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
            <div className="absolute transform rotate-45 bg-primary/20 w-28 h-28 -top-14 -right-14"></div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {frontendTech.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
                className="bg-[#1a1a3a]/30 rounded-xl p-4 border border-[#2a2a4a]/30 text-center"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 5px 15px -5px rgba(99, 102, 241, 0.3)"
                }}
              >
                <div className="w-12 h-12 rounded-lg bg-[#1a1a3a] flex items-center justify-center mx-auto mb-3">
                  <i className={`bi ${tech.icon} text-primary text-2xl`}></i>
                </div>
                <h4 className="font-semibold text-white text-sm mb-1">{tech.name}</h4>
                <p className="text-xs text-gray-400">{tech.category}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-6 p-3 bg-[#1a1a3a]/50 rounded-lg border border-[#2a2a4a] text-sm text-center"
          >
            <div className="flex items-center justify-center">
              <i className="bi bi-info-circle text-primary mr-2"></i>
              <span>Backend, Database & Infrastructure technologies on next slide</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide13;
