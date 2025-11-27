import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "GIATA GmbH",
    location: "Berlin, Germany",
    period: "Aug. 2024 - Present",
    role: "Product Manager",
    description: "I quickly took ownership of two high-impact data products, driving the research and strategy behind them. My approach relied on deep strategic discovery and facilitating cross-functional alignment, which enabled us to untangle complex problems. This collaborative focus built a resilient team culture capable of continuous delivery, even in my absence.",
    color: "bg-forest",
    ringColor: "ring-forest/20"
  },
  {
    company: "Plista GmbH (no longer operational)",
    location: "Berlin, Germany",
    period: "Aug. 2022 - April 2024",
    role: "Product Manager",
    description: "Tasked with a new product offering, I took the lead on launching our new programmatic self-service AdTech platform, managing 5 critical domains from discovery to deployment. This intensive, user-centric approach didn't just deliver a product; it redefined efficiency and trust by implementing new communication strategies and simplifying complex workflows. Leading to 75% CSAT while we cut cross-functional collaboration turnaround time by 80%.",
    color: "bg-terracotta",
    ringColor: "ring-terracotta/20"
  },
  {
    company: "Elopage (now ablefy)",
    location: "Berlin, Germany",
    period: "Jan 2022 - June 2022",
    role: "Product Manager",
    description: "I developed the integration strategy for a new live-shopping feature, empowering creators to sell directly during live streaming. My approach was strictly data-driven, prioritising based on real impact. By pairing data analytics with close engineering collaboration and comprehensive documentation, I ensured valuable feature improvements and optimal user experience.",
    color: "bg-mustard",
    ringColor: "ring-mustard/20"
  },
  {
    company: "Enterfive Limited",
    location: "Lagos, Nigeria",
    period: "May 2018 - Dec 2021",
    role: "Product Manager (Client Relations)",
    description: "I managed the full product lifecycle for up to 8 client products across different sectors, driving value-driven feature implementation that secured a consistent 80% yearly renewal rate for both our internal SaaS product (Versus) and client product contracts. To ensure scalability and quality, I implemented a customised project management framework; this streamlined delivery and directly improved CSAT up 85%.",
    color: "bg-deep-green",
    ringColor: "ring-deep-green/20"
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white relative overflow-hidden scroll-mt-20">
       {/* Background decorations */}
       <div className="absolute top-1/3 left-0 w-64 h-64 bg-sage/30 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />
       <div className="absolute bottom-0 right-0 w-96 h-96 bg-mustard/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

       <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-terracotta font-bold uppercase tracking-widest text-sm mb-2 block">Career Path</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-deep-green">My Work Experience</h2>
          </motion.div>

          <div className="max-w-5xl mx-auto relative">
             {/* Vertical Dotted Line - Desktop Center, Mobile Left */}
             <div className="absolute left-8 md:left-1/2 top-2 bottom-0 w-0.5 border-l-2 border-dotted border-gray-300 transform -translate-x-1/2 md:ml-[6px] z-0"></div>

             <div className="space-y-16 md:space-y-24">
               {experiences.map((exp, index) => (
                 <div key={index} className="relative z-10 flex flex-col md:flex-row gap-2 md:gap-0 items-start">
                    
                    {/* Left Side (Company info on Desktop) */}
                    <motion.div 
                       initial={{ opacity: 0, x: -30 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: index * 0.2, duration: 0.5 }}
                       className="md:w-1/2 md:pr-16 md:text-right pl-20 md:pl-0 mb-2 md:mb-0"
                    >
                       <h3 className="text-xl font-bold text-deep-green">{exp.company}</h3>
                       <p className="text-slate-text font-medium text-sm mb-2">{exp.location}</p>
                       <span className="inline-block px-3 py-1 rounded-full bg-sage/50 text-deep-green text-xs font-bold tracking-wide">
                         {exp.period}
                       </span>
                    </motion.div>

                    {/* Center Dot */}
                    <motion.div 
                       initial={{ scale: 0 }}
                       whileInView={{ scale: 1 }}
                       viewport={{ once: true }}
                       transition={{ delay: index * 0.2 + 0.2, type: "spring", stiffness: 200 }}
                       className="absolute left-8 md:left-1/2 transform -translate-x-1/2 mt-1.5 md:mt-1 flex items-center justify-center bg-white py-2"
                    >
                       <div className={`w-4 h-4 rounded-full ${exp.color} ring-4 ${exp.ringColor} bg-cream`}></div>
                    </motion.div>

                    {/* Right Side (Role info on Desktop) */}
                    <motion.div 
                       initial={{ opacity: 0, x: 30 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: index * 0.2, duration: 0.5 }}
                       className="md:w-1/2 md:pl-16 pl-20"
                    >
                       <h4 className="text-2xl font-serif font-bold text-deep-green mb-3">{exp.role}</h4>
                       <p className="text-slate-text leading-relaxed text-base opacity-90">
                         {exp.description}
                       </p>
                    </motion.div>

                 </div>
               ))}
             </div>
          </div>
       </div>
    </section>
  );
};