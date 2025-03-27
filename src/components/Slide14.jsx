import React from 'react';
import { motion } from 'framer-motion';

const Slide14 = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  // Backend & Database technology stack
  const backendTech = [
    { name: "Node.js", icon: "bi-nodejs", category: "Runtime" },
    { name: "NativeScript", icon: "bi-phone", category: "Mobile" },
    { name: "Remotion", icon: "bi-film", category: "Video" },
    { name: "Supabase", icon: "bi-grid-3x3", category: "BaaS" },
    { name: "Firebase", icon: "bi-fire", category: "BaaS" },
    { name: "SQLite", icon: "bi-database", category: "Database" },
    { name: "PostgreSQL", icon: "bi-database-fill", category: "Database" },
    { name: "MySQL", icon: "bi-database-check", category: "Database" },
    { name: "Azure", icon: "bi-microsoft", category: "Cloud" }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-[#050510] z-0">
        {/* Circuit-like pattern */}
        <svg className="absolute w-full h-full opacity-10" viewBox="0 0 100 100">
          <defs>
            <pattern id="circuit-pattern-2" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#6366f1" strokeWidth="0.5" />
              <circle cx="10" cy="10" r="1" fill="#6366f1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-2)" />
        </svg>
        
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-secondary/10 to-primary/5 blur-3xl"
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
          <p className="text-gray-400 text-lg">Backend, Database & Infrastructure</p>
        </motion.div>
        
        {/* Backend Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-[#0a0a1a] border border-[#1a1a3a] rounded-2xl p-5 relative overflow-hidden mb-6"
        >
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
            <div className="absolute transform rotate-45 bg-primary/20 w-28 h-28 -top-14 -right-14"></div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {backendTech.map((tech, index) => (
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
        </motion.div>
        
        {/* Technical Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-5 border border-primary/30"
        >
          <h3 className="text-xl font-semibold mb-3 text-center">Technical Advantages</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Multi-Framework Support", description: "Generate code for any modern framework", icon: "bi-boxes" },
              { title: "Full-Stack Integration", description: "Seamless connection between all layers", icon: "bi-layers" },
              { title: "Cloud-Ready Architecture", description: "Optimized for modern cloud environments", icon: "bi-cloud-check" }
            ].map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="flex items-start"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mr-2 flex-shrink-0">
                  <i className={`bi ${advantage.icon} text-white`}></i>
                </div>
                <div>
                  <h4 className="font-medium text-white">{advantage.title}</h4>
                  <p className="text-sm text-gray-300">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide14;
