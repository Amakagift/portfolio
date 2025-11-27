import React from 'react';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Professional Journey</h2>
        
        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -ml-0.5 hidden md:block"></div>

          {EXPERIENCE_DATA.map((exp, index) => (
            <div key={exp.id} className={`relative flex flex-col md:flex-row gap-8 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}>
              
              {/* Timeline Dot (Desktop) */}
              <div className="absolute left-1/2 top-0 w-4 h-4 rounded-full bg-accent border-4 border-white shadow-sm transform -translate-x-1/2 hidden md:block mt-1.5"></div>

              {/* Content Card */}
              <div className="flex-1 md:w-1/2">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-1 rounded">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-lg text-accent font-medium mb-4">{exp.company}</h4>
                  <p className="text-slate-600 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-600">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Spacer for alignment */}
              <div className="flex-1 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;