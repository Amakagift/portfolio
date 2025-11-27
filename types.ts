export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  metrics: string[];
  tags: string[];
  imageUrl: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface SkillData {
  subject: string;
  A: number;
  fullMark: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}
