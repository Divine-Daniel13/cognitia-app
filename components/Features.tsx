
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-base font-bold text-brand-500 uppercase tracking-widest mb-4">Capabilities</h2>
          <h3 className="text-3xl lg:text-5xl font-display font-bold">The Science of Realism</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-3xl glass border-slate-200 dark:border-slate-800 hover:border-brand-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 dark:bg-brand-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
