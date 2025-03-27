import React from 'react';
import { motion } from 'framer-motion';

const Slide10 = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  // Integration features
  const integrationFeatures = [
    {
      title: "GitHub Integration",
      description: "Push and pull code with version control",
      icon: "bi-github"
    },
    {
      title: "Cloud Database",
      description: "Firebase and Supabase integration",
      icon: "bi-database-fill"
    },
    {
      title: "One-Click Deploy",
      description: "Netlify and Vercel deployment",
      icon: "bi-cloud-upload-fill"
    },
    {
      title: "Instant Preview",
      description: "Real-time application preview",
      icon: "bi-eye-fill"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-[#050510] z-0">
        {/* Animated gradient background */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            background: "radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.3), transparent 70%), radial-gradient(circle at 70% 70%, rgba(16, 185, 129, 0.3), transparent 70%)"
          }}
          animate={{
            opacity: [0.2, 0.3, 0.2],
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
              Integrations & Tooling
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Seamlessly connect with your favorite tools</p>
        </motion.div>
        
        {/* Integration Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-[#0a0a1a]/80 backdrop-blur-sm border border-[#1a1a3a] rounded-2xl p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {integrationFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="bg-[#1a1a3a]/30 rounded-xl p-4 border border-[#2a2a4a]/30 hover:bg-[#1a1a3a]/50 transition-colors"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 5px 15px -5px rgba(99, 102, 241, 0.3)"
                }}
              >
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                    <i className={`bi ${feature.icon} text-primary text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base">{feature.title}</h4>
                    <p className="text-sm text-gray-400 mt-1">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-6 p-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl border border-primary/30 text-center"
        >
          <p className="text-white text-lg">
            <i className="bi bi-lightning-charge-fill text-yellow-400 mr-2"></i>
            All integrations work with a single click, no configuration needed
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide10;
