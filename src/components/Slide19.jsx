import React from 'react';
import { motion } from 'framer-motion';

const Slide19 = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-[#050510] z-0">
        {/* Animated particles */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/30"
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
        
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/10 to-secondary/5 blur-3xl"
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
        
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[250px] h-[250px] rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      <div className="z-10 max-w-6xl mx-auto w-full px-4">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-center mb-8"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: '200% auto',
            }}
          >
            Thank You
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            For your interest in Websparks
          </motion.p>
        </motion.div>
        
        {/* Main content with CTO and contact info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* CTO Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-gradient-to-br from-[#0a0a1a] to-[#1a1a3a] border border-[#1a1a3a] rounded-2xl p-6 relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
              <div className="absolute transform rotate-45 bg-primary/20 w-28 h-28 -top-14 -right-14"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 w-16 h-16 overflow-hidden">
              <div className="absolute transform rotate-45 bg-secondary/20 w-24 h-24 -bottom-12 -left-12"></div>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="w-40 h-40 rounded-full overflow-hidden border-4 border-gradient-to-r from-primary to-secondary mb-5 relative"
                style={{
                  background: "linear-gradient(to right, rgba(99, 102, 241, 0.2), rgba(16, 185, 129, 0.2))",
                  padding: "3px"
                }}
              >
                <img 
                  src="https://cdn.websparks.ai/3_mdRidoy-CdbbF1Gb-c17858ec.jpeg" 
                  alt="Md Allmamun" 
                  className="w-full h-full object-cover rounded-full"
                  crossOrigin="anonymous"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/200x200/1a1a3a/FFFFFF?text=CTO";
                  }}
                />
                
                <motion.div 
                  className="absolute inset-0 rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 0 0px rgba(99, 102, 241, 0.3)",
                      "0 0 0 10px rgba(99, 102, 241, 0)",
                      "0 0 0 0px rgba(99, 102, 241, 0.3)"
                    ]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-white mb-1">Prepared by</h3>
                <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-semibold mb-1">Md Allmamun</p>
                <p className="text-lg text-gray-300 mb-1">Chief Technology Officer</p>
                <p className="text-gray-400">Websparks Corporation</p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="bg-gradient-to-br from-[#0a0a1a] to-[#1a1a3a] border border-[#1a1a3a] rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className="absolute transform rotate-45 bg-primary/20 w-28 h-28 -top-14 -right-14"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <i className="bi bi-chat-dots-fill text-primary"></i>
                </span>
                Connect With Us
              </h3>
              
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="flex items-center bg-[#1a1a3a]/50 rounded-xl p-4 border border-[#2a2a4a]/30"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 5px 15px -5px rgba(99, 102, 241, 0.3)"
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mr-4">
                    <i className="bi bi-envelope-fill text-white text-xl"></i>
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-medium text-white text-lg">Email</h4>
                    <p className="text-gray-400">almamun@websparks.ai</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="flex items-center bg-[#1a1a3a]/50 rounded-xl p-4 border border-[#2a2a4a]/30"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 5px 15px -5px rgba(99, 102, 241, 0.3)"
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mr-4">
                    <i className="bi bi-globe text-white text-xl"></i>
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-medium text-white text-lg">Website</h4>
                    <p className="text-gray-400">www.websparks.ai</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-5 border border-primary/30 text-center"
            >
              <motion.img 
                src="https://cdn.websparks.ai/3_logo-2ef35fcd.png" 
                alt="Websparks Logo" 
                className="h-16 w-auto mx-auto mb-3"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 6,
                  ease: "easeInOut" 
                }}
                crossOrigin="anonymous"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/200x80/1a1a3a/FFFFFF?text=Websparks";
                }}
              />
              <p className="text-white text-sm">© 2025 Websparks. All rights reserved.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Slide19;
