import React from 'react';
import { motion } from 'framer-motion';

const Slide3 = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };
  
  // Technical architecture components
  const architectureComponents = [
    {
      name: "LLM Core Engine",
      description: "Fine-tuned transformer model with 175B parameters optimized for code generation",
      icon: "bi-cpu-fill"
    },
    {
      name: "Multi-Modal Input Processor",
      description: "Converts images, sketches, text, and URLs into standardized code specifications",
      icon: "bi-input-cursor-text"
    },
    {
      name: "Code Generation Pipeline",
      description: "Produces optimized, production-ready code across 20+ programming languages",
      icon: "bi-code-square"
    },
    {
      name: "Execution Environment",
      description: "Secure containerized runtime for testing and previewing generated applications",
      icon: "bi-box"
    },
    {
      name: "Database Integration Layer",
      description: "Automated ORM generation and cloud database connectivity modules",
      icon: "bi-database-fill"
    },
    {
      name: "Deployment Orchestrator",
      description: "CI/CD pipeline automation for seamless deployment to any cloud platform",
      icon: "bi-cloud-arrow-up"
    }
  ];
  
  // Technical innovations
  const innovations = [
    {
      title: "Context-Aware Code Synthesis",
      description: "Generates code that adapts to existing codebases with 94% compatibility",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Adaptive Security Patterns",
      description: "Automatically implements security best practices based on application type",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Intelligent Dependency Management",
      description: "Optimizes package selection and versioning for maximum stability",
      color: "from-orange-500 to-amber-600"
    },
    {
      title: "Self-Healing Code Generation",
      description: "Detects and corrects potential runtime errors during code synthesis",
      color: "from-purple-500 to-fuchsia-600"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
      {/* Technical background with circuit patterns */}
      <div className="absolute inset-0 bg-[#050510] z-0">
        <svg className="absolute w-full h-full opacity-10" viewBox="0 0 100 100">
          <defs>
            <pattern id="circuit" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#6366f1" strokeWidth="0.5" />
              <circle cx="10" cy="10" r="1" fill="#6366f1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
        
        {/* Animated circuit lines */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-primary/30"
            style={{
              width: `${Math.random() * 30 + 20}%`,
              left: `${Math.random() * 70}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 180}deg)`,
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
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Technical Architecture
            </span>
          </h2>
          <p className="text-gray-400 mt-1">Proprietary AI system designed for end-to-end application development</p>
        </motion.div>
        
        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative mb-6 bg-[#0a0a1a]/80 backdrop-blur-sm border border-[#1a1a3a] rounded-2xl p-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {architectureComponents.map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="relative bg-[#1a1a3a]/50 rounded-xl p-4 border border-[#2a2a4a]/30"
              >
                {/* Connector lines for desktop */}
                {index < architectureComponents.length - 1 && (
                  <div className="absolute hidden md:block right-0 top-1/2 w-4 h-0.5 bg-primary/30 transform translate-x-2"></div>
                )}
                {index > 0 && index % 3 === 0 && (
                  <div className="absolute hidden md:block left-1/2 -top-4 h-4 w-0.5 bg-primary/30 transform -translate-x-1/2"></div>
                )}
                
                <div className="flex items-start">
                  <div className="mr-3 p-2 bg-primary/10 rounded-lg self-start">
                    <i className={`bi ${component.icon} text-primary text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm md:text-base">{component.name}</h4>
                    <p className="text-xs md:text-sm text-gray-400">{component.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Data flow arrows - simplified for mobile */}
          <div className="hidden md:block">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute left-1/2 top-[calc(33%-10px)] w-0.5 h-5 bg-primary/50 transform -translate-x-1/2"
            >
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-primary/50 w-0 h-0"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="absolute left-1/2 top-[calc(66%-10px)] w-0.5 h-5 bg-primary/50 transform -translate-x-1/2"
            >
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-primary/50 w-0 h-0"></div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Technical Innovations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-6"
        >
          <h3 className="text-xl font-semibold mb-4 px-5">Key Technical Innovations</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {innovations.map((innovation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className={`bg-gradient-to-r ${innovation.color} rounded-xl p-4 relative overflow-hidden`}
              >
                {/* Decorative pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-20">
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="75" cy="25" r="20" stroke="white" strokeWidth="0.5" />
                    <circle cx="75" cy="25" r="15" stroke="white" strokeWidth="0.5" />
                    <circle cx="75" cy="25" r="10" stroke="white" strokeWidth="0.5" />
                  </svg>
                </div>
                
                <h4 className="font-bold text-white text-lg mb-2">{innovation.title}</h4>
                <p className="text-white/80 text-sm">{innovation.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="bg-[#0a0a1a]/80 backdrop-blur-sm border border-[#1a1a3a] rounded-2xl p-5"
        >
          <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#1a1a3a]/30 rounded-lg p-3 text-center">
              <div className="text-xs text-gray-400">Model Size</div>
              <div className="text-xl font-bold text-primary">175B</div>
              <div className="text-xs text-gray-400">Parameters</div>
            </div>
            <div className="bg-[#1a1a3a]/30 rounded-lg p-3 text-center">
              <div className="text-xs text-gray-400">Languages</div>
              <div className="text-xl font-bold text-primary">20+</div>
              <div className="text-xs text-gray-400">Supported</div>
            </div>
            <div className="bg-[#1a1a3a]/30 rounded-lg p-3 text-center">
              <div className="text-xs text-gray-400">Response Time</div>
              <div className="text-xl font-bold text-primary">&lt;2s</div>
              <div className="text-xs text-gray-400">Average</div>
            </div>
            <div className="bg-[#1a1a3a]/30 rounded-lg p-3 text-center">
              <div className="text-xs text-gray-400">Training Data</div>
              <div className="text-xl font-bold text-primary">2M+</div>
              <div className="text-xs text-gray-400">Repositories</div>
            </div>
          </div>
          
          <div className="mt-4 text-center text-sm text-primary-light">
            Patent-pending technology with proprietary fine-tuning methodology
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide3;
