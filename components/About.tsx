import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-cream overflow-hidden scroll-mt-28">
      <div className="container mx-auto px-6 md:px-12">
        <div className="relative bg-deep-green rounded-[3rem] p-8 md:p-20 text-cream overflow-hidden">
          
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10">
             <svg width="100%" height="100%">
               <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                 <circle cx="20" cy="20" r="2" fill="currentColor" />
               </pattern>
               <rect width="100%" height="100%" fill="url(#pattern-circles)" />
             </svg>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8 leading-tight">
                "I believe in delivering valuable products through empathy, clarity, bold decision-making, and relentless optimism"
              </h2>
              <div className="w-20 h-1 bg-mustard mx-auto mb-8 rounded-full"></div>
              <p className="text-lg md:text-xl text-sage/90 leading-relaxed font-light">
                My work is driven by a passion for transforming complex business challenges into simple, scalable software solutions. As a Product Manager, I specialise in being the conduit between market opportunity and engineering delivery, with my expertise in Product Strategy, Agile Execution, and Data-Informed Discovery. I thrive in dynamic B2B environments where my ability to secure buy-in from relevant stakeholders is paramount. Whether leading the launch of a new platform or establishing a strong data foundation through research and tracking, my commitment remains the same: to improve alignment, reduce time-to-market, and drive measurable client success.
              </p>
            </motion.div>
          </div>

          {/* Decorative Circle */}
          <motion.div 
            className="absolute -bottom-20 -left-20 w-64 h-64 bg-terracotta rounded-full mix-blend-multiply opacity-50 blur-2xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
           <motion.div 
            className="absolute -top-20 -right-20 w-64 h-64 bg-mustard rounded-full mix-blend-multiply opacity-50 blur-2xl"
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ duration: 8, repeat: Infinity }}
          />

        </div>
      </div>
    </section>
  );
};