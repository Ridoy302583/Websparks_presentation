import React from 'react';
import { motion } from 'framer-motion';

const Slide6 = () => {
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
            <pattern id="grid-pattern-4" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#6366f1" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-4)" />
        </svg>
        
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-primary/10 to-secondary/5 blur-3xl"
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
      
      <div className="z-10 max-w-5xl mx-auto w-full px-4">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Full Stack Generation
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Complete application development in one platform</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 relative overflow-hidden"
        >
          {/* Decorative pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="75" cy="25" r="20" stroke="white" strokeWidth="0.5" />
              <circle cx="75" cy="25" r="15" stroke="white" strokeWidth="0.5" />
              <circle cx="75" cy="25" r="10" stroke="white" strokeWidth="0.5" />
            </svg>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-20 h-20 rounded-xl bg-white/20 flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0">
              <i className="bi bi-layers-fill text-white text-4xl"></i>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Complete Application Stack</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: "Frontend", description: "Responsive UI with modern frameworks", icon: "bi-window" },
                  { title: "Backend", description: "Scalable server-side architecture", icon: "bi-server" },
                  { title: "Database", description: "Optimized data models and queries", icon: "bi-database" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="bg-white/10 rounded-lg p-3"
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
                        <i className={`bi ${item.icon} text-white`}></i>
                      </div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                    </div>
                    <p className="text-sm text-white/80">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide6;
