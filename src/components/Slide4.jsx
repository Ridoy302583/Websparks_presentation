import React from 'react';
import { motion } from 'framer-motion';

const Slide4 = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };
  
  // Development workflow steps
  const workflowSteps = [
    { title: "Development Plan", icon: "bi-list-check", description: "AI analyzes requirements and creates a detailed plan" },
    { title: "Environment Setup", icon: "bi-gear", description: "Configures development environment with dependencies" },
    { title: "Code Generation", icon: "bi-code-square", description: "Creates optimized code across all application layers" },
    { title: "Installation & Run", icon: "bi-terminal", description: "Installs dependencies and executes build commands" },
    { title: "Instant Preview", icon: "bi-eye", description: "Shows real-time preview with hot reloading" },
    { title: "Database Integration", icon: "bi-database", description: "Connects and configures database with proper schema" },
    { title: "Deployment", icon: "bi-cloud-upload", description: "Deploys application to selected cloud platform" }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-[#050510] z-0">
        {/* Grid pattern */}
        <svg className="absolute w-full h-full opacity-10" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid-pattern-2" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#6366f1" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-2)" />
        </svg>
        
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-secondary/10 to-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
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
              Development Workflow
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Websparks creates applications with a human-like approach</p>
        </motion.div>
        
        {/* Development Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-[#0a0a1a] border border-[#1a1a3a] rounded-2xl p-6 relative overflow-hidden"
        >
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
            <div className="absolute transform rotate-45 bg-primary/20 w-28 h-28 -top-14 -right-14"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left column: Flow diagram */}
            <div className="relative pl-6">
              {/* Vertical line */}
              <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/30"></div>
              
              {/* Workflow steps */}
              <div className="space-y-4">
                {workflowSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.15, duration: 0.5 }}
                    className="relative"
                  >
                    {/* Step marker */}
                    <div className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-[#0a0a1a] border-2 border-primary"></div>
                    
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-[#1a1a3a] flex items-center justify-center mr-3">
                        <i className={`bi ${step.icon} text-primary`}></i>
                      </div>
                      <span className="font-medium">{step.title}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Right column: Flow images */}
            <div className="space-y-4">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.15, duration: 0.5 }}
                  className="bg-[#1a1a3a]/30 rounded-lg p-3 border border-[#2a2a4a]/30"
                >
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <i className={`bi ${step.icon} text-primary text-xl`}></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-sm">{step.title}</h4>
                      <p className="text-xs text-gray-400">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="mt-6 p-3 bg-[#1a1a3a]/50 rounded-lg border border-[#2a2a4a] text-sm"
          >
            <div className="flex items-start">
              <i className="bi bi-shield-check text-green-400 mr-2 mt-0.5"></i>
              <div>
                <span className="font-medium text-green-400">Human-like Approach:</span> Websparks follows the same logical steps a senior developer would take, but with AI-powered speed and precision.
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide4;
