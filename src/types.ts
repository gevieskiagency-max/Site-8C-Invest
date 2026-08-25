export interface SectionData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  watermark: string;
  themeColor: string;
}

export interface TransitionState {
  currentSection: number;
  scrollProgress: number;
  lenisReady: boolean;
  reducedMotion: boolean;
  activeStep: number;
}

export interface MetricItem {
  label: string;
  value: string;
  change?: string;
  detail: string;
}

export interface PillarItem {
  id: string;
  number: string;
  title: string;
  description: string;
  badge: string;
  metrics: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  category?: string;
}

export interface LeaderItem {
  name: string;
  role: string;
  focus?: string;
  expertise: string[];
}

export interface EightCItem {
  number: string;
  name: string;
  description?: string;
}

