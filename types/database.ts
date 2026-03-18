export interface Project {
  id: number;
  experience_id: number;
  name: string;
  stack: string;
  links: string[];
  points: string[];
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  sort_order: number;
  projects?: Project[];
}

export interface TechnicalSkill {
  id: number;
  category: string;
  items: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
}

export interface Language {
  id: number;
  name: string;
  level: string;
}

export interface PortfolioData {
  experiences: Experience[];
  education: Education[];
  technicalSkills: TechnicalSkill[];
  languages: Language[];
}

export interface Database {
  public: {
    Tables: {
      experiences: {
        Row: Experience;
      };
      projects: {
        Row: Project;
      };
      education: {
        Row: Education;
      };
      technical_skills: {
        Row: TechnicalSkill;
      };
      languages: {
        Row: Language;
      };
    };
  };
}