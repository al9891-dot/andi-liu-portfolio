export type Metric = {
  value: string;
  label: string;
  context?: string;
};

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  location?: string;
  details: string[];
};

export type ExperienceItem = {
  id: string;
  companyDisplayName: string;
  companyLegalName?: string;
  role: string;
  period: string;
  periodNote?: string;
  keywords: string[];
  summary: string;
  details: string[];
  outcomes: string[];
  tags: string[];
};

export type ProjectItem = {
  slug: string;
  title: string;
  type: string;
  summary: string;
  sections: { title: string; items: string[] }[];
  tags: string[];
};

export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
  related: string[];
};

export type NavItem = {
  href: string;
  label: string;
};
