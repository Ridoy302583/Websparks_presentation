import React from 'react';
import { motion } from 'framer-motion';

const Slide3 = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-[#050510] z-0">
        {/* Grid pattern */}
        <svg className="absolute w-full h-full opacity-10" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#6366f1" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
        
        {/* Animated gradient orb */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-primary/10 to-secondary/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
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
              Performance Metrics
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Transforming software development efficiency</p>
        </motion.div>
        
        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl mx-auto w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Development Speed", value: "100x", icon: "bi-speedometer", description: "Faster than traditional methods" },
              { label: "Cost Reduction", value: "90%", icon: "bi-piggy-bank", description: "Lower development costs" },
              { label: "Accuracy", value: "94%", icon: "bi-check-circle", description: "Code generation accuracy" }
            ].map((metric, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="bg-[#0a0a1a] border border-[#1a1a3a] rounded-xl p-5 text-center"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)" }}
              >
                <div className="w-16 h-16 rounded-full bg-[#1a1a3a] flex items-center justify-center mx-auto mb-4">
                  <i className={`bi ${metric.icon} text-primary text-2xl`}></i>
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-lg font-medium text-white mb-1">{metric.label}</div>
                <p className="text-sm text-gray-400">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide3;
