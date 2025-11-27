import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isProjectPage?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isProjectPage = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Strenght', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (isProjectPage) {
      // If we are on the project page, we need to go back home first
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new Event('popstate'));
      
      // Wait a tick for the route to change before scrolling
      setTimeout(() => {
        if (href === '#') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    } else {
      // Normal behavior on home page
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      if (isProjectPage) {
          window.history.pushState({}, '', '/');
          window.dispatchEvent(new Event('popstate'));
          window.scrollTo(0, 0);
      } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
      }
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-cream/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a 
          href="/" 
          onClick={handleHomeClick}
          className="font-serif text-2xl md:text-3xl font-bold text-deep-green tracking-tight relative group"
        >
          Amaka<span className="text-terracotta">.</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terracotta transition-all group-hover:w-full"></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-semibold uppercase tracking-wider text-deep-green hover:text-terracotta transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 font-semibold text-sm">
            <span className="text-terracotta">+49 178 3091562</span>
            <div className="w-10 h-10 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-deep-green hover:bg-terracotta hover:text-white transition-all cursor-pointer">
              <Phone size={18} />
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-deep-green z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-cream border-b border-gray-100 p-6 md:hidden shadow-xl"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  className="text-lg font-serif font-medium text-deep-green hover:text-terracotta"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-gray-200 my-2" />
              <div className="flex items-center gap-2 font-semibold text-sm">
                <Phone size={16} className="text-terracotta" />
                <span>+001 (313) 345 678</span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};