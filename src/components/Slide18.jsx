import React from 'react';
import { motion } from 'framer-motion';

const Slide18 = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  // Team quotes
  const teamQuotes = [
    {
      quote: "We're building the future of software development where AI and human creativity work together seamlessly.",
      position: { top: "15%", left: "5%" }
    },
    {
      quote: "Our technology reduces development time by 100x while maintaining enterprise-grade quality.",
      position: { top: "25%", right: "5%" }
    },
    {
      quote: "We've achieved what others thought impossible: AI that understands context like a senior developer.",
      position: { bottom: "20%", left: "10%" }
    },
    {
      quote: "Websparks isn't just a tool, it's a revolution in how software is created.",
      position: { bottom: "30%", right: "10%" }
    }
  ];

  // Competitive advantages
  const competitiveAdvantages = [
    {
      title: "Technology Moat",
      icon: "bi-shield-lock",
      description: "Proprietary AI models fine-tuned for code generation with patent-pending optimization algorithms"
    },
    {
      title: "Market Position",
      icon: "bi-graph-up",
      description: "First-mover advantage with strategic partnerships and 50K+ active users"
    },
    {
      title: "Team Expertise",
      icon: "bi-people",
      description: "Founded by ex-Google and Microsoft AI engineers with multiple successful exits"
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
      
      <div className="z-10 max-w-6xl mx-auto w-full px-4">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Our Team & Advantage
            </span>
          </h2>
          <p className="text-gray-400 text-lg">The people and technology behind Websparks</p>
        </motion.div>
        
        {/* Team Image with Quotes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-[#0a0a1a] border border-[#1a1a3a] rounded-2xl p-5 relative overflow-hidden mb-8"
        >
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
            <div className="absolute transform rotate-45 bg-primary/20 w-28 h-28 -top-14 -right-14"></div>
          </div>
          
          <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
            <img 
              src="https://cdn.websparks.ai/3_team1-b84d01b6.jpg" 
              alt="Websparks Team" 
              className="w-full h-full object-cover rounded-xl"
              crossOrigin="anonymous"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/800x400/1a1a3a/FFFFFF?text=Websparks+Team";
              }}
            />
            
            {/* Quotes */}
            {teamQuotes.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                className="absolute bg-[#0a0a1a]/80 backdrop-blur-sm border border-[#1a1a3a] rounded-xl p-3 max-w-[220px] md:max-w-[280px] shadow-lg"
                style={quote.position}
              >
                <div className="text-sm text-white">"{quote.quote}"</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Competitive Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {competitiveAdvantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-5 border border-primary/30"
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 5px 15px -5px rgba(99, 102, 241, 0.3)"
              }}
            >
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-3">
                  <i className={`bi ${advantage.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-white">{advantage.title}</h3>
              </div>
              
              <p className="text-sm text-gray-300">{advantage.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Slide18;
