import React from 'react';
import { motion } from 'framer-motion';

const Slide5 = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };
  
  // Development workflow steps - second half
  const workflowSteps = [
    { title: "Instant Preview", icon: "bi-eye" },
    { title: "Database Integration", icon: "bi-database" },
    { title: "Deployment", icon: "bi-cloud-upload" }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-[#050510] z-0">
        {/* Grid pattern */}
        <svg className="absolute w-full h-full opacity-10" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid-pattern-3" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#6366f1" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-3)" />
        </svg>
        
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-1/3 right-1/3 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-primary/10 to-secondary/5 blur-3xl"
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
              Development Workflow
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Human-like approach to software creation (Part 2)</p>
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
                    <span>{step.title}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-6 p-3 bg-[#1a1a3a]/50 rounded-lg border border-[#2a2a4a] text-sm"
          >
            <div className="flex items-start">
              <i className="bi bi-shield-check text-green-400 mr-2 mt-0.5"></i>
              <div>
                <span className="font-medium text-green-400">Security & SEO:</span> Automatically implements best practices for security and search engine optimization.
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide5;
