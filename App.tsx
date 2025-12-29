
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trust from './components/Trust';
import HowItWorks from './components/HowItWorks';
import AvatarShowcase from './components/AvatarShowcase';
import Features from './components/Features';
import LiveDemo from './components/LiveDemo';
import Pricing from './components/Pricing';
import Enterprise from './components/Enterprise';
import Security from './components/Security';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 selection:bg-brand-500/30">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <Trust />
        <HowItWorks />
        <AvatarShowcase />
        <Features />
        <LiveDemo />
        <Pricing />
        <Enterprise />
        <Security />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default App;
