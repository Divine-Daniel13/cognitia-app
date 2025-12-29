
import React, { useState } from 'react';
import { Globe, Lock, Play, Star } from 'lucide-react';
import { AVATARS } from '../constants';

const AvatarShowcase: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const professions = ['All', 'Psychologist', 'Business Strategist', 'Language Tutor', 'Technical Architect'];

  const filteredAvatars = filter === 'All' 
    ? AVATARS 
    : AVATARS.filter(a => a.profession === filter);

  return (
    <section id="avatars" className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-8 md:space-y-0">
          <div>
            <h2 className="text-base font-bold text-brand-500 uppercase tracking-widest mb-4">Meet the Experts</h2>
            <h3 className="text-3xl lg:text-5xl font-display font-bold">Find Your AI Companion</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {professions.map(p => (
              <button
                key={p}
                onClick={() => setFilter(p)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === p 
                    ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/20' 
                    : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-brand-500'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredAvatars.map((avatar) => (
            <div key={avatar.id} className="group relative rounded-2xl overflow-hidden glass border-slate-200 dark:border-slate-800 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-500/10">
              {/* Image Container */}
              <div className="aspect-[4/5] relative overflow-hidden">
                <img 
                  src={avatar.image} 
                  alt={avatar.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                {avatar.isPremium && (
                  <div className="absolute top-4 right-4 bg-amber-400 text-slate-950 px-3 py-1 rounded-full text-[10px] font-bold uppercase flex items-center space-x-1">
                    <Lock size={10} />
                    <span>Premium</span>
                  </div>
                )}

                <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="w-full py-2.5 rounded-lg bg-white text-slate-950 font-bold text-sm flex items-center justify-center space-x-2">
                    <Play size={14} fill="currentColor" />
                    <span>Quick Preview</span>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-500">{avatar.profession}</span>
                  <div className="flex items-center space-x-1 text-xs font-bold">
                    <Star size={12} className="text-amber-400 fill-amber-400" />
                    <span>4.9</span>
                  </div>
                </div>
                <h4 className="text-lg font-bold mb-1">{avatar.name}</h4>
                <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 space-x-3 mb-4">
                  <div className="flex items-center space-x-1">
                    <Globe size={12} />
                    <span>{avatar.language.join(', ')}</span>
                  </div>
                </div>
                
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-3">
                  Tone: <span className="text-slate-900 dark:text-white">{avatar.tone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="text-lg font-bold text-brand-500 hover:text-brand-400 transition-colors inline-flex items-center space-x-2">
            <span>Explore all 150+ Avatars</span>
            <span className="text-2xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AvatarShowcase;
