import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { SKILLS_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Competency Map</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A balanced mix of strategic vision, technical understanding, and user empathy define my approach to product management.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="h-[400px] w-full bg-slate-50 rounded-2xl p-4 shadow-inner border border-slate-100">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILLS_DATA}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 12, fontWeight: 600 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Proficiency"
                  dataKey="A"
                  stroke="#38bdf8"
                  strokeWidth={3}
                  fill="#38bdf8"
                  fillOpacity={0.3}
                />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Key Methodologies</h3>
              <div className="flex flex-wrap gap-2">
                {['Agile / Scrum', 'Design Thinking', 'Jobs-to-be-Done', 'A/B Testing', 'OKR Framework', 'Product Discovery'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Tools & Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['Jira', 'Figma', 'Amplitude', 'Mixpanel', 'SQL', 'Tableau', 'Notion', 'Linear'].map(tool => (
                  <span key={tool} className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium hover:bg-indigo-100 transition-colors cursor-default">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;