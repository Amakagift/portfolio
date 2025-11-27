import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Let's Build Something Great</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <a 
          href="mailto:hello@alexsterling.dev"
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-slate-900 bg-accent hover:bg-sky-400 transition-colors shadow-lg shadow-sky-500/20"
        >
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Get In Touch
        </a>

        <div className="mt-16 flex justify-center space-x-8">
           {['LinkedIn', 'Twitter', 'Medium', 'GitHub'].map(social => (
             <a key={social} href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
               {social}
             </a>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;