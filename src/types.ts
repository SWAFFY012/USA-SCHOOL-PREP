export type Language = 'ru' | 'en';

export interface LevelDescription {
  id: string;
  name: string;
  badge: string;
  usGoal: string;
  description: string;
  scenarios: string[];
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  location: string;
  bio: string;
  specialty: string[];
  avatar: string;
  accent: string;
}

export interface PricingPlan {
  id: string;
  title: string;
  originalPrice: { usd: number; rub: number };
  price: { usd: number; rub: number };
  period: string;
  badge?: string;
  features: string[];
  cta: string;
}

export interface ScheduleClass {
  id: string;
  time: string;
  title: string;
  teacher: string;
  spotsLeft: number;
  level: string;
  category: 'visa' | 'speech' | 'slang' | 'culture';
}
