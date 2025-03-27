import React from 'react';
import { motion } from 'framer-motion';

const Slide1 = () => {
  // Particle animation setup
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10
  }));

  return (
    <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
      {/* Animated particles background */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
      
      {/* Animated gradient circle */}
      <motion.div 
        className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary/20 to-secondary/10 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="flex flex-col items-center justify-center z-10 max-w-4xl mx-auto"
      >
        <motion.img 
          src="https://cdn.websparks.ai/3_logo-2ef35fcd.png" 
          alt="Websparks Logo" 
          className="h-24 w-auto mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: 1,
            opacity: 1,
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{ 
            duration: 2,
            opacity: { duration: 1 },
            rotate: { 
              repeat: Infinity, 
              duration: 12,
              ease: "easeInOut" 
            }
          }}
        />
        
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl font-display font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
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
            Websparks
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <p className="text-3xl md:text-4xl text-white/90 mb-2 font-semibold">The AI Software Engineer</p>
            <p className="text-3xl md:text-4xl text-white/80 font-semibold">That brings your ideas into reality</p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-4 bg-dark-lighter/60 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/10 w-full max-w-4xl mx-auto relative"
        >
          {/* Glow effect behind the card */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl transform scale-105"></div>
          
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          
          <div className="text-left">
            <p className="text-xl mb-2">
              <span className="text-accent-purple font-semibold">HELLO,</span> <span className="text-primary-light">Investor</span>
            </p>
            <p className="text-gray-400 mb-4">Revolutionizing software development with AI</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <motion.div 
                className="card p-4 flex flex-col items-center justify-center"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)" }}
              >
                <i className="bi bi-image text-2xl mb-1 text-primary-light"></i>
                <p className="text-sm text-center">From Image</p>
              </motion.div>
              
              <motion.div 
                className="card p-4 flex flex-col items-center justify-center"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)" }}
              >
                <i className="bi bi-pencil text-2xl mb-1 text-primary-light"></i>
                <p className="text-sm text-center">From Sketch</p>
              </motion.div>
              
              <motion.div 
                className="card p-4 flex flex-col items-center justify-center"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)" }}
              >
                <i className="bi bi-globe text-2xl mb-1 text-primary-light"></i>
                <p className="text-sm text-center">From Crawler</p>
              </motion.div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <motion.div 
                className="bg-dark-lightest/80 hover:bg-primary/20 text-sm rounded-full px-4 py-2 text-gray-300 border border-white/5 flex items-center"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(99, 102, 241, 0.2)" }}
              >
                <i className="bi bi-check-circle-fill text-green-400 mr-1"></i>
                100x Faster Development
              </motion.div>
              
              <motion.div 
                className="bg-dark-lightest/80 hover:bg-primary/20 text-sm rounded-full px-4 py-2 text-gray-300 border border-white/5 flex items-center"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(99, 102, 241, 0.2)" }}
              >
                <i className="bi bi-check-circle-fill text-green-400 mr-1"></i>
                90% Cost Reduction
              </motion.div>
              
              <motion.div 
                className="bg-dark-lightest/80 hover:bg-primary/20 text-sm rounded-full px-4 py-2 text-gray-300 border border-white/5 flex items-center"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(99, 102, 241, 0.2)" }}
              >
                <i className="bi bi-check-circle-fill text-green-400 mr-1"></i>
                94% Accuracy
              </motion.div>
            </div>
            
            <div className="mt-4 relative">
              <div className="w-full bg-dark-lightest/80 border border-white/10 rounded-lg p-3 text-white">
                <span className="text-gray-400">$ </span>
                <span className="text-primary-light">websparks</span>
                <span className="text-white"> create-app</span>
                <span className="animate-pulse">|</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slide1;
