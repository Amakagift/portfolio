import React from 'react';
import { PM_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} {PM_NAME}. All rights reserved.</p>
        <p className="mt-2">Built with React, Tailwind, and Gemini AI.</p>
      </div>
    </footer>
  );
};

export default Footer;