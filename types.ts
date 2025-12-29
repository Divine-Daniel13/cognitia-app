
export interface Avatar {
  id: string;
  name: string;
  profession: string;
  language: string[];
  tone: string;
  image: string;
  isPremium: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface PricingPlan {
  name: string;
  price: number;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export type Theme = 'light' | 'dark';
