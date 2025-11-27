import React from 'react';
import { PM_NAME, PM_ROLE, RESUME_SUMMARY } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-[10%] left-[-5%] w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-semibold text-accent mb-2">
              Available for new opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-tight">
              Building products <br/>
              that <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-indigo-600">matter</span>.
            </h1>
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
              Hi, I'm <span className="font-semibold text-slate-900">{PM_NAME}</span>. {PM_ROLE}.
              <br />
              {RESUME_SUMMARY.split('.')[0]}.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-3.5 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl">
                View My Work
              </a>
              <a href="#contact" className="px-8 py-3.5 bg-white text-slate-900 border border-slate-200 font-medium rounded-lg hover:bg-slate-50 transition-all">
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-3 hover:rotate-0 transition-transform duration-500 ease-out">
              <img 
                src="https://picsum.photos/600/700?grayscale" 
                alt={PM_NAME} 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-bold text-lg">Product Leadership</p>
                  <p className="text-sm opacity-80">Driving innovation through clarity</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;