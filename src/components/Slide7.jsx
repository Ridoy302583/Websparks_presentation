import React from 'react';
import { motion } from 'framer-motion';

const Slide7 = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  // Code editor features
  const editorFeatures = [
    { title: "AI-Powered Autocomplete", description: "Context-aware suggestions" },
    { title: "Real-time Error Detection", description: "Identifies bugs before execution" },
    { title: "Refactoring Tools", description: "Intelligent code restructuring" },
    { title: "Multi-language Support", description: "All major programming languages" }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-[#050510] z-0">
        {/* Code particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[8px] text-primary/30 font-mono whitespace-nowrap"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.7, 0],
              y: [0, -50],
            }}
            transition={{
              duration: Math.random() * 5 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          >
            {`${Math.random() > 0.5 ? '<' : '{'} ${Math.random() > 0.5 ? 'function' : 'const'} ${Math.random() > 0.5 ? 'render' : 'create'} ${Math.random() > 0.5 ? '/>' : '}'}`}
          </motion.div>
        ))}
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
              AI Code Editor
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Intelligent assistance for faster development</p>
        </motion.div>
        
        {/* AI Code Editor */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-[#0a0a1a] border border-[#1a1a3a] rounded-2xl p-5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
            <div className="absolute transform rotate-45 bg-primary/20 w-28 h-28 -top-14 -right-14"></div>
          </div>
          
          {/* Code editor mockup */}
          <div className="bg-[#0d1117] rounded-lg border border-[#30363d] mb-4 overflow-hidden">
            <div className="flex items-center bg-[#161b22] px-3 py-2 border-b border-[#30363d]">
              <div className="flex space-x-2 mr-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs text-gray-400 ml-2">App.jsx</div>
            </div>
            
            <div className="p-3 font-mono text-xs text-gray-300 overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div><span className="text-purple-400">import</span> <span className="text-blue-400">React</span> <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span>;</div>
                <div className="mt-1"><span className="text-purple-400">function</span> <span className="text-yellow-400">App</span>() {'{'}</div>
                <div className="ml-4"><span className="text-purple-400">return</span> (</div>
                <div className="ml-8"><span className="text-blue-400">{'<div'}</span> <span className="text-green-400">className</span>=<span className="text-orange-400">"app"</span><span className="text-blue-400">{'>'}</span></div>
                
                <div className="relative ml-12">
                  <span className="text-blue-400">{'<h1>'}</span>Hello, World!<span className="text-blue-400">{'</h1>'}</span>
                  <motion.span 
                    className="absolute ml-1 inline-block w-2 h-4 bg-white/70"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  ></motion.span>
                  
                  <motion.div
                    className="absolute top-0 left-0 bg-primary/20 rounded px-1 py-0.5 -mt-6 text-[10px] whitespace-nowrap"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <i className="bi bi-lightbulb-fill text-yellow-400 mr-1"></i>
                    <span className="text-primary-light">AI Suggestion: Add a welcome message component here</span>
                  </motion.div>
                </div>
                
                <div className="ml-8"><span className="text-blue-400">{'</div>'}</span></div>
                <div className="ml-4">);</div>
                <div>{'}'}</div>
                <div className="mt-1"><span className="text-purple-400">export</span> <span className="text-purple-400">default</span> <span className="text-yellow-400">App</span>;</div>
              </motion.div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {editorFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className="flex items-start"
              >
                <i className="bi bi-check-circle-fill text-green-400 mr-2 mt-0.5 flex-shrink-0"></i>
                <div>
                  <h4 className="text-sm font-medium text-white">{feature.title}</h4>
                  <p className="text-xs text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide7;
