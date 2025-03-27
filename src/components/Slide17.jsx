import React from 'react';
import { motion } from 'framer-motion';

const Slide17 = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  // Market size data
  const marketSizeData = [
    { year: "2023", value: "$18.6B", growth: "+32%" },
    { year: "2024", value: "$27.4B", growth: "+47%" },
    { year: "2025", value: "$41.2B", growth: "+50%" },
    { year: "2026", value: "$58.9B", growth: "+43%" },
    { year: "2027", value: "$84.2B", growth: "+43%" }
  ];

  // Revenue model components
  const revenueModel = [
    {
      name: "Free",
      icon: "bi-gift",
      description: "Limited features, community support",
      color: "from-gray-600 to-gray-700",
      conversion: "12% convert to paid"
    },
    {
      name: "Starter",
      icon: "bi-rocket-takeoff",
      description: "Basic features for individuals",
      color: "from-blue-500 to-indigo-600",
      conversion: "35% of paid users"
    },
    {
      name: "Plus",
      icon: "bi-plus-circle",
      description: "Advanced features for professionals",
      color: "from-primary to-secondary",
      conversion: "40% of paid users"
    },
    {
      name: "Pro",
      icon: "bi-stars",
      description: "Full access for power users",
      color: "from-purple-600 to-pink-600",
      conversion: "20% of paid users"
    },
    {
      name: "Enterprise",
      icon: "bi-building",
      description: "Custom solutions for organizations",
      color: "from-amber-500 to-orange-600",
      conversion: "5% of paid users, 42% of revenue"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-[#050510] z-0">
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
              Market Size & Revenue Model
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Capturing value in a rapidly growing market</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Market Size Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-[#0a0a1a] border border-[#1a1a3a] rounded-2xl p-5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
              <div className="absolute transform rotate-45 bg-primary/20 w-28 h-28 -top-14 -right-14"></div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center mr-2">
                <i className="bi bi-graph-up-arrow text-primary"></i>
              </span>
              Global AI Dev Tools Market
            </h3>
            
            <div className="relative h-64 mt-6">
              {/* Bar chart */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end h-48">
                {marketSizeData.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  >
                    <motion.div 
                      className="w-12 md:w-16 bg-gradient-to-t from-primary to-secondary rounded-t-lg relative group"
                      initial={{ height: 0 }}
                      animate={{ height: `${(index + 1) * 20}%` }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                    >
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#1a1a3a] text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        {item.value}
                      </div>
                    </motion.div>
                    <div className="text-sm mt-2 text-white">{item.year}</div>
                    <div className="text-xs text-green-400">{item.growth}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="mt-2 p-3 bg-[#1a1a3a]/50 rounded-lg border border-[#2a2a4a] text-sm text-center"
            >
              <span className="text-primary font-medium">CAGR: </span>
              <span className="text-white">45.8% (2023-2027)</span>
            </motion.div>
          </motion.div>
          
          {/* Revenue Model Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-[#0a0a1a] border border-[#1a1a3a] rounded-2xl p-5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
              <div className="absolute transform rotate-45 bg-primary/20 w-28 h-28 -top-14 -right-14"></div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center mr-2">
                <i className="bi bi-cash-stack text-primary"></i>
              </span>
              Revenue Model
            </h3>
            
            <div className="space-y-3">
              {revenueModel.map((model, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className={`bg-gradient-to-r ${model.color} rounded-xl p-3 border border-white/10`}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 5px 15px -5px rgba(99, 102, 241, 0.3)"
                  }}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <i className={`bi ${model.icon} text-white text-xl`}></i>
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-lg font-bold text-white">{model.name}</h4>
                      <p className="text-xs text-white/80">{model.description}</p>
                    </div>
                    <div className="bg-white/20 rounded-lg px-2 py-1 text-xs text-white">
                      {model.conversion}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="mt-4 p-3 bg-[#1a1a3a]/50 rounded-lg border border-[#2a2a4a] text-sm text-center"
            >
              <span className="text-primary font-medium">Retention Rate: </span>
              <span className="text-white">85% across all paid tiers</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Slide17;
