import React from 'react';
import { motion } from 'framer-motion';

const Slide1 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center max-w-4xl mx-auto mt-20"
      >
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
          The AI Code Editor That Brings Your Ideas to Life.
        </h1>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 bg-dark-lighter rounded-3xl p-8 shadow-2xl border border-dark-lightest max-w-3xl mx-auto"
        >
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          
          <div className="text-left">
            <p className="text-xl mb-2">
              <span className="text-accent-purple font-semibold">HELLO,</span> <span className="text-primary-light">User</span>
            </p>
            <p className="text-gray-400 mb-6">What you want to Build?</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <motion.div 
                className="card p-6 flex flex-col items-center justify-center"
                whileHover={{ scale: 1.03 }}
              >
                <i className="bi bi-image text-2xl mb-2 text-primary-light"></i>
                <p className="text-sm text-center">From Image</p>
              </motion.div>
              
              <motion.div 
                className="card p-6 flex flex-col items-center justify-center"
                whileHover={{ scale: 1.03 }}
              >
                <i className="bi bi-pencil text-2xl mb-2 text-primary-light"></i>
                <p className="text-sm text-center">From Sketch</p>
              </motion.div>
              
              <motion.div 
                className="card p-6 flex flex-col items-center justify-center"
                whileHover={{ scale: 1.03 }}
              >
                <i className="bi bi-globe text-2xl mb-2 text-primary-light"></i>
                <p className="text-sm text-center">From Crawler</p>
              </motion.div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <motion.button 
                className="bg-dark-lightest hover:bg-primary/20 text-sm rounded-full px-4 py-2 text-gray-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Create a Personal portfolio for me
              </motion.button>
              
              <motion.button 
                className="bg-dark-lightest hover:bg-primary/20 text-sm rounded-full px-4 py-2 text-gray-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Create a SaaS landing page
              </motion.button>
            </div>
            
            <div className="mt-8 relative">
              <input 
                type="text" 
                placeholder="Hey! What you want to Build?" 
                className="w-full bg-dark-lightest border border-dark-lightest rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary">
                <i className="bi bi-arrow-right-circle-fill text-xl"></i>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slide1;
