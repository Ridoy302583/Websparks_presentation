import React from 'react';
import { motion } from 'framer-motion';

const Slide15 = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  // Architecture steps
  const architectureSteps = [
    { name: "User Prompt", icon: "bi-chat-text", description: "Natural language, image, or sketch input" },
    { name: "Analyzer", icon: "bi-search", description: "Processes and categorizes input" },
    { name: "LLM", icon: "bi-cpu", description: "Large Language Model processes the input" },
    { name: "Code Generation", icon: "bi-code-square", description: "Creates optimized code" },
    { name: "AI Editor", icon: "bi-pencil-square", description: "Refines and optimizes code" },
    { name: "Project Setup", icon: "bi-folder-plus", description: "Creates project structure" },
    { name: "Command Executor", icon: "bi-terminal", description: "Runs necessary commands" },
    { name: "Instant Preview", icon: "bi-eye", description: "Shows live preview" },
    { name: "Connector", icon: "bi-link", description: "Integrates with external services" },
    { name: "Push or Deploy", icon: "bi-rocket-takeoff", description: "Finalizes and deploys" }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-[#050510] z-0">
        {/* Circuit-like pattern */}
        <svg className="absolute w-full h-full opacity-10" viewBox="0 0 100 100">
          <defs>
            <pattern id="circuit-pattern-3" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#6366f1" strokeWidth="0.5" />
              <circle cx="10" cy="10" r="1" fill="#6366f1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-3)" />
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
              Architecture Flow
            </span>
          </h2>
          <p className="text-gray-400 text-lg">End-to-end process from user input to deployed application</p>
        </motion.div>
        
        {/* Architecture Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-[#0a0a1a] border border-[#1a1a3a] rounded-2xl p-5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
            <div className="absolute transform rotate-45 bg-primary/20 w-28 h-28 -top-14 -right-14"></div>
          </div>
          
          {/* Architecture flow diagram */}
          <div className="flex flex-wrap justify-center mb-4">
            {architectureSteps.map((step, index) => (
              <React.Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-3 border border-primary/30 m-2 w-[180px]"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-[#1a1a3a] flex items-center justify-center mb-2">
                      <i className={`bi ${step.icon} text-primary`}></i>
                    </div>
                    <h4 className="font-medium text-white text-sm mb-1">{step.name}</h4>
                    <p className="text-xs text-gray-400">{step.description}</p>
                  </div>
                </motion.div>
                
                {index < architectureSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    className="flex items-center justify-center m-2"
                  >
                    <i className="bi bi-arrow-right text-primary text-xl"></i>
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="p-3 bg-[#1a1a3a]/50 rounded-lg border border-[#2a2a4a] text-sm"
          >
            <div className="flex items-start">
              <i className="bi bi-info-circle-fill text-primary mr-2 mt-0.5"></i>
              <div>
                <span className="font-medium text-white">Architecture Highlights:</span> Our modular architecture allows for parallel processing, continuous feedback loops, and seamless integration with external services. Each component is designed to be scalable and maintainable.
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide15;
