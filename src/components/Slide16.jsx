import React from 'react';
import { motion } from 'framer-motion';

const Slide16 = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  // Market segments for investors
  const investorMarketSegments = [
    { 
      name: "Startups & Indie Developers", 
      icon: "bi-rocket-takeoff", 
      percentage: 30,
      growth: "+45% YoY"
    },
    { 
      name: "SMBs & Agencies", 
      icon: "bi-building", 
      percentage: 35,
      growth: "+38% YoY"
    },
    { 
      name: "Enterprise", 
      icon: "bi-buildings", 
      percentage: 25,
      growth: "+52% YoY"
    },
    { 
      name: "Educational Institutions", 
      icon: "bi-mortarboard", 
      percentage: 10,
      growth: "+28% YoY"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-[#050510] z-0">
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
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Market Opportunity
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Rapidly growing segments with high demand</p>
        </motion.div>
        
        {/* Market Segments */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {investorMarketSegments.map((segment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              className="bg-[#0a0a1a] border border-[#1a1a3a] rounded-xl p-4 text-center"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 15px -5px rgba(99, 102, 241, 0.3)"
              }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4">
                <i className={`bi ${segment.icon} text-white text-2xl`}></i>
              </div>
              <h4 className="font-semibold text-white text-lg mb-2">{segment.name}</h4>
              
              <div className="w-full bg-[#1a1a3a] h-3 rounded-full overflow-hidden mt-2">
                <motion.div 
                  className="h-full bg-gradient-to-r from-primary to-secondary"
                  initial={{ width: 0 }}
                  animate={{ width: `${segment.percentage}%` }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                ></motion.div>
              </div>
              <p className="text-sm text-green-400 mt-2 font-medium">{segment.growth}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-8 p-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl border border-primary/30 text-center"
        >
          <p className="text-white text-lg font-medium">
            <i className="bi bi-graph-up-arrow text-green-400 mr-2"></i>
            Global AI development tools market projected to reach $64.2B by 2027
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide16;
