import React from 'react';
import { motion } from 'framer-motion';

const Slide12 = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  // Deployment options
  const deploymentOptions = [
    {
      name: "Netlify",
      icon: "bi-cloud-upload",
      features: ["One-click deploy", "CI/CD pipeline", "Custom domains", "Preview deployments"]
    },
    {
      name: "Vercel",
      icon: "bi-cloud-arrow-up",
      features: ["Serverless functions", "Edge network", "Environment variables", "Team collaboration"]
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-[#050510] z-0">
        {/* Grid pattern */}
        <svg className="absolute w-full h-full opacity-10" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid-dots-2" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="0.5" fill="#6366f1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-dots-2)" />
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
      
      <div className="z-10 max-w-5xl mx-auto w-full px-4">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              One-Click Deployment
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Deploy your applications instantly to the cloud</p>
        </motion.div>
        
        {/* One-Click Deployment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-[#0a0a1a] border border-[#1a1a3a] rounded-2xl p-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
            <div className="absolute transform rotate-45 bg-primary/20 w-28 h-28 -top-14 -right-14"></div>
          </div>
          
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mr-4">
              <i className="bi bi-rocket-takeoff-fill text-primary text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold">Seamless Cloud Deployment</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deploymentOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                className="bg-[#1a1a3a]/30 rounded-xl p-5 border border-[#2a2a4a]/30 hover:bg-[#1a1a3a]/50 transition-colors"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 5px 15px -5px rgba(99, 102, 241, 0.3)"
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                    <i className={`bi ${option.icon} text-primary text-2xl`}></i>
                  </div>
                  <h4 className="font-semibold text-white text-xl">{option.name}</h4>
                </div>
                
                <div className="space-y-2 mb-4">
                  {option.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + idx * 0.1, duration: 0.5 }}
                      className="flex items-center"
                    >
                      <i className="bi bi-check-circle-fill text-green-400 mr-2"></i>
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-medium text-sm flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <i className={`bi ${option.icon} mr-2`}></i>
                  Deploy to {option.name}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide12;
