import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, TrendingUp, Users, Zap } from 'lucide-react';

const services = [
  {
    title: "Product Strategy & Vision",
    description: "My sweet spot is aligning everyone on a product direction. I translate complex business goals into clear roadmaps backed by data, ensuring the team prioritises features that actually move the needle",
    icon: Lightbulb,
    color: "bg-forest text-white",
    hoverColor: "group-hover:bg-forest"
  },
  {
    title: "Data Driven Validator",
    description: "I ensure feature success by prioritising data-driven validation, leading both qualitative and quantitative research initiatives to confidently uncover user needs. Ultimately, minimising development risk leads to valuable product improvements.",
    icon: TrendingUp,
    color: "bg-terracotta text-white",
    hoverColor: "group-hover:bg-terracotta"
  },
  {
    title: "Cross-Functional Alignment",
    description: "For me its about fostering highly collaborative cultures by building trust across cross-functional teams. This approach is fueled by clear communication and solid documentation, ensuring consistent product delivery. The result? Ownership within the team and unified product language understanding",
    icon: Users,
    color: "bg-mustard text-deep-green",
    hoverColor: "group-hover:bg-mustard"
  },
  {
    title: "Agile Execution",
    description: "I'm the person who tunes our product development process. I actively drive improvements that give teams the clarity and autonomy they need to move fast. The focus is to efficiently deliver operational results, improving collaboration turnaround time by 80%, and creating a resilient team",
    icon: Zap,
    color: "bg-deep-green text-white",
    hoverColor: "group-hover:bg-deep-green"
  }
];

export const WhatIDo: React.FC = () => {
  return (
    <section id="services" className="py-20 relative bg-white scroll-mt-28">
       <div className="container mx-auto px-6 md:px-12">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Header */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
               <motion.span 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 className="text-terracotta font-bold uppercase tracking-widest text-sm mb-2 block"
               >
                 My Core Compentencies
               </motion.span>
               <motion.h2 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 className="font-serif text-4xl md:text-5xl font-bold text-deep-green mb-6"
               >
                 How I help my team <br/> win.
               </motion.h2>
               <motion.p 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 transition={{ delay: 0.2 }}
                 className="text-slate-text text-lg leading-relaxed mb-8"
               >
                 I bridge the gap between user needs, business goals, and technical feasibility. By fostering a shared 'Product Language,' I align cross-functional teams and streamline processes. Whether  I am leading a collaborative section or optimising Agile frameworks, my focus is on cutting through ambiguity to drive results.
               </motion.p>
            </div>

            {/* Right Cards */}
            <div className="lg:col-span-7 flex flex-col gap-6">
               {services.map((service, index) => (
                 <motion.div 
                   key={index}
                   initial={{ opacity: 0, x: 50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: index * 0.1 }}
                   className="group bg-cream p-8 rounded-3xl flex items-center gap-6 hover:shadow-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-gray-100"
                 >
                    <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 shrink-0`}>
                      <service.icon size={32} />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-deep-green mb-2 group-hover:text-terracotta transition-colors">{service.title}</h3>
                      <p className="text-slate-text mb-0">{service.description}</p>
                    </div>
                 </motion.div>
               ))}
            </div>

         </div>
       </div>
    </section>
  );
};