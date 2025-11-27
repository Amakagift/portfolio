import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';

export const FeaturedWork: React.FC = () => {
  const displayedProjects = projects.slice(0, 3);

  const handleViewAllClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', '/projects');
    window.dispatchEvent(new Event('popstate'));
    window.scrollTo(0, 0);
  };

  return (
    <section id="work" className="py-24 bg-white scroll-mt-28">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
           <div>
             <span className="text-terracotta font-bold uppercase tracking-widest text-sm mb-2 block">Selected Work</span>
             <h2 className="font-serif text-4xl md:text-5xl font-bold text-deep-green">Case Studies</h2>
           </div>
           <a 
             href="/projects" 
             onClick={handleViewAllClick}
             className="hidden md:flex items-center gap-2 font-bold text-deep-green hover:text-terracotta transition-colors mt-4 md:mt-0 cursor-pointer"
           >
             View all projects <ArrowUpRight size={20} />
           </a>
        </div>

        <div className="space-y-24">
          {displayedProjects.map((project, index) => (
            <div key={project.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className={`relative group cursor-pointer rounded-3xl overflow-hidden shadow-2xl ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <div className="absolute inset-0 bg-deep-green/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 z-20 flex gap-2">
                   {project.tags.map(tag => (
                     <span key={tag} className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-deep-green">
                       {tag}
                     </span>
                   ))}
                </div>
              </motion.div>

              {/* Content Side */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}
              >
                <span className="text-mustard font-bold uppercase tracking-wider text-xs mb-2 block">{project.category}</span>
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-deep-green mb-4 group-hover:text-terracotta transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 font-medium mb-6">{project.role}</p>

                <div className="space-y-6 border-l-2 border-gray-100 pl-6">
                   <div>
                     <h4 className="text-sm font-bold text-slate-text uppercase mb-1">The Problem</h4>
                     <p className="text-deep-green leading-relaxed">{project.problem}</p>
                   </div>
                   <div>
                     <h4 className="text-sm font-bold text-slate-text uppercase mb-1">The Solution</h4>
                     <p className="text-deep-green leading-relaxed">{project.solution}</p>
                   </div>
                   <div>
                     <h4 className="text-sm font-bold text-terracotta uppercase mb-1">The Impact</h4>
                     <p className="text-deep-green font-semibold leading-relaxed">{project.impact}</p>
                   </div>
                </div>
              </motion.div>
            
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center md:hidden">
            <a 
             href="/projects" 
             onClick={handleViewAllClick}
             className="inline-flex items-center gap-2 font-bold text-deep-green hover:text-terracotta transition-colors cursor-pointer border border-deep-green px-6 py-3 rounded-full"
           >
             View all projects <ArrowUpRight size={20} />
           </a>
        </div>

      </div>
    </section>
  );
};