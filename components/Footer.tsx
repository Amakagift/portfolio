import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-deep-green text-cream py-12 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-serif text-2xl font-bold">Amaka.</h3>
          <p className="text-white/60 text-sm mt-2">© {new Date().getFullYear()} Amaka Madueke. All rights reserved.</p>
        </div>
        
        <div className="flex gap-8 text-sm font-semibold text-white/80">
          <a href="#" className="hover:text-mustard transition-colors">Home</a>
          <a href="#about" className="hover:text-mustard transition-colors">About</a>
          <a href="#work" className="hover:text-mustard transition-colors">Work</a>
          <a href="#contact" className="hover:text-mustard transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};