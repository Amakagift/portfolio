import { Experience, Project, SkillData } from './types';

export const PM_NAME = "Alex Sterling";
export const PM_ROLE = "Senior Product Manager";

export const RESUME_SUMMARY = `
I am a strategic Product Manager with over 8 years of experience building B2B SaaS and consumer-facing mobile applications. 
I specialize in data-driven decision making, cross-functional leadership, and agile methodologies. 
My passion lies in translating complex user needs into intuitive digital experiences that drive business growth.
`;

export const SKILLS_DATA: SkillData[] = [
  { subject: 'Product Strategy', A: 95, fullMark: 100 },
  { subject: 'Data Analytics', A: 85, fullMark: 100 },
  { subject: 'UX/UI Design', A: 75, fullMark: 100 },
  { subject: 'Technical Depth', A: 80, fullMark: 100 },
  { subject: 'Marketing', A: 65, fullMark: 100 },
  { subject: 'Leadership', A: 90, fullMark: 100 },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 'exp-1',
    company: 'TechFlow Solutions',
    role: 'Senior Product Manager',
    period: '2021 - Present',
    description: 'Leading the flagship enterprise workflow automation platform.',
    achievements: [
      'Increased ARR by 25% ($2M) through the launch of the "Smart Flow" module.',
      'Reduced customer churn by 15% by implementing a new feedback loop system.',
      'Managed a cross-functional team of 12 engineers and designers.'
    ]
  },
  {
    id: 'exp-2',
    company: 'Nebula Stream',
    role: 'Product Manager',
    period: '2018 - 2021',
    description: 'Owned the mobile experience for a high-growth video streaming startup.',
    achievements: [
      'Grew MAU from 50k to 500k within 18 months.',
      'Led the redesign of the onboarding flow, improving conversion by 30%.',
      'Partnered with marketing to launch a successful referral program.'
    ]
  },
  {
    id: 'exp-3',
    company: 'Innovate Corp',
    role: 'Associate PM',
    period: '2016 - 2018',
    description: 'Started career in product, focusing on internal tools and data dashboards.',
    achievements: [
      'Automated internal reporting, saving 20 hours/week for the operations team.',
      'Conducted over 50 user interviews to identify key pain points for internal tools.'
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
    title: 'Smart Flow Automation',
    role: 'Lead PM',
    description: 'An AI-powered workflow builder that suggests optimal process improvements based on historical data.',
    metrics: ['25% ARR Increase', '40% Time Saved for Users'],
    tags: ['AI/ML', 'B2B SaaS', 'React'],
    imageUrl: 'https://picsum.photos/600/400?random=1'
  },
  {
    id: 'proj-2',
    title: 'Nebula Mobile App 2.0',
    role: 'Product Owner',
    description: 'A complete overhaul of the mobile viewing experience focusing on personalization and social sharing.',
    metrics: ['30% Conversion Lift', '4.8 App Store Rating'],
    tags: ['Mobile', 'Consumer', 'Growth'],
    imageUrl: 'https://picsum.photos/600/400?random=2'
  },
  {
    id: 'proj-3',
    title: 'DataInsight Dashboard',
    role: 'PM',
    description: 'A unified analytics dashboard aggregating data from 5 different sources for real-time decision making.',
    metrics: ['100% Data Accuracy', 'Used by C-Suite'],
    tags: ['Analytics', 'Internal Tools', 'Visualization'],
    imageUrl: 'https://picsum.photos/600/400?random=3'
  }
];

// Constructing the system prompt for the AI
export const SYSTEM_INSTRUCTION = `
You are an AI assistant for Alex Sterling's personal portfolio website.
Your name is "Alex's AI Assistant".
You are helpful, professional, and concise.

Here is Alex's resume data to use as context for answering questions:

Summary: ${RESUME_SUMMARY}

Experience:
${JSON.stringify(EXPERIENCE_DATA)}

Projects:
${JSON.stringify(PROJECTS_DATA)}

Skills Overview:
High proficiency in Product Strategy, Data Analytics, and Leadership. Good technical depth and UX understanding.

If a user asks about something not in this data, politely say you don't have that specific information but suggest asking about Alex's experience at TechFlow or Nebula Stream.
Keep answers under 100 words unless asked for detail.
`;
