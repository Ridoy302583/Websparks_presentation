import React from 'react';
import { motion } from 'framer-motion';

const Slide2 = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2 + 0.5,
        duration: 0.5
      }
    })
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center max-w-5xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-4 tracking-tight">
          <motion.span 
            className="text-accent-red"
            animate={{ 
              color: ['#ef4444', '#8b5cf6', '#3b82f6', '#ef4444'],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          >
            81%
          </motion.span> of Programmers struggle with work-life balance.
        </h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          According to a recent report by Haystack Analytics, the pandemic worsened burnout
          issues in 81% of programmers. One of the top factors that affects the web developer's
          work-life balance and leads to possible burnout is working overtime.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <motion.div 
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="card p-8 aspect-square flex flex-col items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-4xl md:text-5xl font-display font-bold mb-4"
            >
              <i className="bi bi-alarm text-primary-light mb-6 text-5xl"></i>
              <h3 className="text-2xl md:text-3xl font-display font-bold">Long Working Hours</h3>
            </motion.div>
          </motion.div>
          
          <motion.div 
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="card p-8 aspect-square flex flex-col items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="text-4xl md:text-5xl font-display font-bold mb-4"
            >
              <i className="bi bi-tools text-primary-light mb-6 text-5xl"></i>
              <h3 className="text-2xl md:text-3xl font-display font-bold">Inefficient Tools and Processes</h3>
            </motion.div>
          </motion.div>
          
          <motion.div 
            custom={2}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="card p-8 aspect-square flex flex-col items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-4xl md:text-5xl font-display font-bold mb-4"
            >
              <i className="bi bi-calendar-x text-primary-light mb-6 text-5xl"></i>
              <h3 className="text-2xl md:text-3xl font-display font-bold">Lack of Flexibility</h3>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Slide2;
