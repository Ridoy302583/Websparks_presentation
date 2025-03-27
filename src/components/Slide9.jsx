import React from 'react';
import { motion } from 'framer-motion';

const Slide9 = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

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
              Prompt Enhancer
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Transforming simple ideas into detailed specifications</p>
        </motion.div>
        
        {/* Prompt Enhancer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-[#0a0a1a] border border-[#1a1a3a] rounded-2xl p-6 relative overflow-hidden max-w-2xl mx-auto"
        >
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
            <div className="absolute transform rotate-45 bg-primary/20 w-28 h-28 -top-14 -right-14"></div>
          </div>
          
          <div className="flex items-center mb-5">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mr-4">
              <i className="bi bi-magic text-primary text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold">AI-Powered Prompt Enhancement</h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-[#1a1a3a]/30 rounded-lg p-4 border border-[#2a2a4a]/30">
              <div className="text-sm text-gray-400 mb-2">User Prompt:</div>
              <div className="text-lg font-medium">Make a todo app</div>
            </div>
            
            <div className="relative flex justify-center">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0a0a1a] border border-[#1a1a3a] flex items-center justify-center z-10">
                <i className="bi bi-arrow-down text-primary"></i>
              </div>
              <div className="h-10 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-4 border border-primary/30"
            >
              <div className="text-sm text-primary-light mb-2">Enhanced Prompt:</div>
              <div className="text-lg font-medium">Create a responsive todo application with CRUD operations, local storage persistence, drag-and-drop reordering, priority levels, due dates, and dark/light theme toggle</div>
            </motion.div>
          </div>
          
          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              { label: "More Detailed", value: "10x", icon: "bi-lightning-charge-fill" },
              { label: "Context-Aware", value: "100%", icon: "bi-braces" },
              { label: "Best Practices", value: "Built-in", icon: "bi-stars" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className="bg-[#1a1a3a]/30 rounded-lg p-3 text-center"
              >
                <i className={`bi ${item.icon} text-primary text-xl mb-2`}></i>
                <div className="text-sm font-medium text-white">{item.label}</div>
                <div className="text-xs text-gray-400">{item.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide9;
