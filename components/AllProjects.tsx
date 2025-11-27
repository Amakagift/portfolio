import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';

export const AllProjects: React.FC = () => {
  
  const handleBackClick = (e: React.MouseEvent) => {
      e.preventDefault();
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new Event('popstate'));
      window.scrollTo(0,0);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <a 
            href="/"
            onClick={handleBackClick}
            className="inline-flex items-center gap-2 text-deep-green hover:text-terracotta font-bold mb-12 transition-colors cursor-pointer"
        >
            <ArrowLeft size={20} /> Back to Home
        </a>

        <div className="max-w-4xl mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-deep-green mb-6">All Projects</h1>
            <p className="text-slate-text text-xl">
                A comprehensive collection of my product management work, featuring strategy, execution, and user-centric problem solving.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, index) => (
                <motion.div 
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex flex-col h-full bg-cream rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                    <div className="relative h-64 overflow-hidden">
                        <div className="absolute inset-0 bg-deep-green/10 group-hover:bg-transparent transition-colors z-10" />
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 right-4 z-20">
                             <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-deep-green">
                                {project.category}
                             </span>
                        </div>
                    </div>
                    
                    <div className="p-8 flex-1 flex flex-col">
                        <h3 className="font-serif text-2xl font-bold text-deep-green mb-2 group-hover:text-terracotta transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-sm font-medium text-slate-400 mb-6">{project.role}</p>
                        
                        <div className="space-y-4 mb-8 flex-1">
                             <div>
                                <h4 className="text-xs font-bold text-slate-text uppercase mb-1">Problem</h4>
                                <p className="text-sm text-deep-green leading-relaxed line-clamp-3">{project.problem}</p>
                             </div>
                             <div>
                                <h4 className="text-xs font-bold text-terracotta uppercase mb-1">Impact</h4>
                                <p className="text-sm text-deep-green font-semibold leading-relaxed">{project.impact}</p>
                             </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tags.map(tag => (
                                <span key={tag} className="bg-white border border-gray-100 px-2 py-1 rounded-md text-[10px] font-bold uppercase text-slate-text">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};