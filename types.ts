import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  count: number;
  icon: LucideIcon;
  color: string;
}

export interface Project {
  id: number;
  title: string;
  role: string;
  problem: string;
  solution: string;
  impact: string;
  imageUrl: string;
  tags: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}