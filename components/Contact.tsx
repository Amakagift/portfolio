import React from 'react';
import { Mail, Linkedin, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-cream relative overflow-hidden scroll-mt-28">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-mustard/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-terracotta font-bold uppercase tracking-widest text-sm mb-4 block">Get in touch</span>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-deep-green mb-8">
              Let's talk about <br className="hidden md:block" /> product.
            </h2>
            <p className="text-slate-text text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              I'm always looking to share ideas within the product space. Whether you have a project in mind, a question about my work, or just want to say hi, I'd love to hear from you!
            </p>

            <div className="flex flex-col items-center gap-8 mb-12">
              <a href="mailto:amaka10@gmail.com" className="flex items-center gap-4 group bg-white px-8 py-4 rounded-full shadow-sm hover:shadow-md border border-gray-100 transition-all">
                <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-deep-green group-hover:bg-terracotta group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <span className="text-xl font-medium text-deep-green group-hover:text-terracotta transition-colors">amakagift10@gmail.com</span>
              </a>
              
              <div className="flex gap-6">
                {[
                  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/amaka-madueke/" }
                ].map((Item, i) => (
                  <a key={i} href={Item.href} target="_blank" rel="noopener noreferrer" aria-label={Item.label} className="w-14 h-14 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-deep-green hover:bg-terracotta hover:text-white hover:border-terracotta hover:-translate-y-1 transition-all duration-300">
                    <Item.icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            <a 
              href="https://drive.google.com/file/d/1pP7Kl_C6bDlBneyp3PPwP-oagnHFkMYb/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-deep-green text-white rounded-full font-bold hover:bg-terracotta transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              <Download size={22} />
              Download Resume
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};