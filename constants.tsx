
import React from 'react';
import { 
  Video, 
  Mic, 
  MessageSquare, 
  Shield, 
  Globe, 
  BarChart3, 
  UserPlus, 
  CreditCard 
} from 'lucide-react';
import { Avatar, Testimonial, PricingPlan } from './types';

export const AVATARS: Avatar[] = [
  {
    id: '1',
    name: 'Dr. Elena Vance',
    profession: 'Psychologist',
    language: ['English', 'Spanish'],
    tone: 'Empathetic & Calm',
    image: 'https://picsum.photos/seed/elena/400/400',
    isPremium: false,
  },
  {
    id: '2',
    name: 'Marcus Chen',
    profession: 'Business Strategist',
    language: ['English', 'Mandarin'],
    tone: 'Professional & Direct',
    image: 'https://picsum.photos/seed/marcus/400/400',
    isPremium: true,
  },
  {
    id: '3',
    name: 'Sarah Jenkins',
    profession: 'Language Tutor',
    language: ['French', 'English', 'German'],
    tone: 'Patient & Encouraging',
    image: 'https://picsum.photos/seed/sarah/400/400',
    isPremium: false,
  },
  {
    id: '4',
    name: 'Aiden Reed',
    profession: 'Technical Architect',
    language: ['English', 'Python', 'Rust'],
    tone: 'Analytical & Insightful',
    image: 'https://picsum.photos/seed/aiden/400/400',
    isPremium: true,
  }
];

export const FEATURES = [
  {
    title: 'Real-time Video',
    description: 'Sub-100ms latency for natural, lifelike video calls with AI avatars.',
    icon: <Video className="w-6 h-6 text-brand-400" />,
  },
  {
    title: 'Emotional Voice',
    description: 'Advanced TTS that understands nuance, sarcasm, and emotional weight.',
    icon: <Mic className="w-6 h-6 text-brand-400" />,
  },
  {
    title: 'Visual Aids',
    description: 'Avatars can generate diagrams, slides, and images during the conversation.',
    icon: <BarChart3 className="w-6 h-6 text-brand-400" />,
  },
  {
    title: 'Privacy First',
    description: 'End-to-end encryption. Your data never trains our base models.',
    icon: <Shield className="w-6 h-6 text-brand-400" />,
  },
  {
    title: 'Global Presence',
    description: 'Connect in over 45 languages with culturally aware localizations.',
    icon: <Globe className="w-6 h-6 text-brand-400" />,
  },
  {
    title: 'Summaries',
    description: 'Instant meeting notes and action items delivered after every call.',
    icon: <MessageSquare className="w-6 h-6 text-brand-400" />,
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Jonathan Miller',
    role: 'CEO at TechStream',
    content: "Cognitia has revolutionized how our team handles executive coaching. The AI avatars are remarkably human.",
    avatar: 'https://picsum.photos/seed/jon/100/100',
  },
  {
    id: '2',
    name: 'Leila Faris',
    role: 'Freelance Designer',
    content: "I use Sarah for French lessons every morning. It feels like talking to a real person, but without the social anxiety.",
    avatar: 'https://picsum.photos/seed/leila/100/100',
  },
  {
    id: '3',
    name: 'Robert Zhang',
    role: 'Venture Capitalist',
    content: "The market insights I get from Marcus are surprisingly deep. It's a game changer for quick data synthesis.",
    avatar: 'https://picsum.photos/seed/rob/100/100',
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Starter',
    price: 0,
    description: 'Experience the future of AI conversation.',
    features: [
      '30 minutes / month',
      'Basic Avatars',
      'Standard Quality Audio',
      'Email Support'
    ]
  },
  {
    name: 'Pro',
    price: 49,
    description: 'For professionals needing daily AI insights.',
    isPopular: true,
    features: [
      'Unlimited sessions',
      'All Premium Avatars',
      'High Fidelity Audio/Video',
      'Visual Aid Generation',
      'Priority Support'
    ]
  },
  {
    name: 'Enterprise',
    price: 999,
    description: 'Custom solutions for high-scale teams.',
    features: [
      'Team Dashboards',
      'Custom Avatar Training',
      'SSO & Advanced Security',
      'Dedicated Account Manager',
      'API Access'
    ]
  }
];
