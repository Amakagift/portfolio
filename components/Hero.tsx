import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-12 md:pt-40 overflow-hidden flex items-center">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-5 relative z-10 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-handwriting text-terracotta font-semibold tracking-widest text-sm uppercase mb-4 block">
                Product Manager
              </span>
              <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-deep-green">
                Hey There,<br />
                I'm <span className="relative inline-block">
                  Amaka
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-mustard/40" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7501 9.75062 52.5003 9.75062 76.2501 6.99997C99.9999 4.24932 125.25 6.99997 197.25 2.00005" stroke="currentColor" strokeWidth="3"/></svg>
                </span>
              </h1>
              
              <p className="text-slate-text text-lg leading-relaxed mb-8 max-w-md">
                I focus on converting strategies into valuable digital solutions that my clients love. User centricity is at the heart of my approach 
              </p>

              <div className="flex items-center gap-4">
                <a 
                  href="mailto:amakagift10@gmail.com" 
                  className="text-terracotta font-bold border-b-2 border-terracotta pb-0.5 hover:text-deep-green hover:border-deep-green transition-all"
                >
                  amakagift10@gmail.com
                </a>
              </div>
              
            </motion.div>
          </div>

          {/* Hero Image & Graphics */}
          <div className="lg:col-span-7 relative flex justify-center items-center order-1 lg:order-2 mb-12 lg:mb-0">
             
             {/* Secondary Background Blob (Mustard) - kept for depth */}
             <svg className="absolute w-[90%] h-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-mustard/20 z-0 pointer-events-none scale-110 rotate-12" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M41.9,-66.8C53.3,-58.9,61.1,-44.9,66.8,-30.8C72.4,-16.7,75.8,-2.5,72.8,10.4C69.8,23.3,60.4,34.9,50.1,44.8C39.8,54.7,28.6,62.9,15.9,66.9C3.2,70.9,-11.1,70.7,-24.2,66.2C-37.3,61.7,-49.3,52.9,-58.8,41.3C-68.3,29.7,-75.4,15.3,-75.6,0.7C-75.8,-13.8,-69.1,-28.6,-58.7,-39.7C-48.3,-50.8,-34.1,-58.3,-20.4,-63.2C-6.7,-68.1,6.5,-70.4,20.1,-69.6C33.7,-68.8,47.7,-64.9,41.9,-66.8Z" transform="translate(100 100)" />
             </svg>

             <motion.div 
                className="relative z-10 w-[350px] h-[350px] md:w-[550px] md:h-[550px]"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
             >
                <div className="relative w-full h-full">
                    {/* Main SVG with ClipPath for Image */}
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
                        <defs>
                            <clipPath id="blobClip">
                                <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.2,-19.2,95.8,-5.3C93.5,8.6,82.1,21.5,70.6,32.3C59.1,43.1,47.6,51.8,35.8,58.5C24,65.2,11.9,69.9,-0.8,71.3C-13.5,72.7,-27.3,70.7,-39.8,64.4C-52.3,58.1,-63.5,47.5,-71.3,34.9C-79.1,22.3,-83.5,7.7,-81.5,-6.1C-79.4,-19.9,-70.9,-32.9,-60.4,-43.1C-49.9,-53.3,-37.3,-60.7,-24.5,-68.8C-11.7,-76.9,1.3,-85.7,14.5,-85.7C27.7,-85.7,54.5,-76.9,44.7,-76.4Z" transform="translate(100 100)" />
                            </clipPath>
                        </defs>
                        
                        {/* Background shape to ensure solid fill behind image */}
                        <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.2,-19.2,95.8,-5.3C93.5,8.6,82.1,21.5,70.6,32.3C59.1,43.1,47.6,51.8,35.8,58.5C24,65.2,11.9,69.9,-0.8,71.3C-13.5,72.7,-27.3,70.7,-39.8,64.4C-52.3,58.1,-63.5,47.5,-71.3,34.9C-79.1,22.3,-83.5,7.7,-81.5,-6.1C-79.4,-19.9,-70.9,-32.9,-60.4,-43.1C-49.9,-53.3,-37.3,-60.7,-24.5,-68.8C-11.7,-76.9,1.3,-85.7,14.5,-85.7C27.7,-85.7,54.5,-76.9,44.7,-76.4Z" transform="translate(100 100)" fill="#f0f0f0" />

                        <image 
                            href="https://i.postimg.cc/Fz3rqcpk/IMG-3281.jpg" 
                            x="0" y="0" width="200" height="200" 
                            preserveAspectRatio="xMinYMin slice"
                            clipPath="url(#blobClip)"
                        />
                    </svg>
                    
                    {/* Floating Badge: Experience */}
                    <motion.div 
                        className="absolute bottom-4 left-4 md:bottom-12 md:left-12 bg-cream p-4 md:p-6 rounded-2xl shadow-xl border border-gray-100"
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl md:text-5xl font-bold text-deep-green font-serif">10+</span>
                        </div>
                        <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-text">
                            Years<br/>Experience
                        </div>
                    </motion.div>

                    {/* Floating Badge: Certification */}
                    <motion.div 
                        className="absolute top-8 right-0 md:top-20 md:right-8 bg-white p-3 rounded-full shadow-lg border border-gray-50 flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 text-center"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    >
                         <Award className="text-mustard w-8 h-8 mb-1" />
                         <span className="text-[10px] font-bold uppercase leading-tight text-deep-green">Product<br/>Certified<br/>Leader</span>
                    </motion.div>
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};