
import React from 'react';
import { Play, Sparkles, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-500/10 blur-[120px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-teal/10 blur-[120px] rounded-full animate-pulse-slow"></div>
        
        {/* Abstract Mesh Lines */}
        <svg className="absolute w-full h-full opacity-[0.03] dark:opacity-[0.07]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-500/10 dark:bg-brand-500/20 text-brand-600 dark:text-brand-400 text-sm font-semibold mb-6 border border-brand-500/20">
              <Sparkles size={16} />
              <span>Next-Gen AI Consultation</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-extrabold tracking-tight mb-6 leading-[1.1]">
              Talk to AI Experts.<br />
              <span className="gradient-text">In Real Time.</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Experience the world's first ultra-realistic AI consultation platform. Engage in human-like voice and video calls with specialized avatars designed to help you grow.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="group w-full sm:w-auto px-8 py-4 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-lg shadow-xl shadow-brand-600/20 transition-all hover:scale-105 active:scale-95 flex items-center justify-center space-x-2">
                <Zap size={20} className="fill-current" />
                <span>Start a Free Session</span>
              </button>
              <button className="group w-full sm:w-auto px-8 py-4 rounded-full glass hover:bg-white/10 dark:hover:bg-white/5 font-semibold text-lg transition-all flex items-center justify-center space-x-2 border border-slate-200 dark:border-slate-800">
                <Play size={18} className="fill-current" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8 opacity-60">
              <div className="text-sm font-medium">4.9/5 Rating</div>
              <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
              <div className="text-sm font-medium">1M+ Minutes Consulted</div>
              <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
              <div className="text-sm font-medium">HIPAA Compliant</div>
            </div>
          </div>

          {/* Hero Visual - Animated AI Avatar */}
          <div className="relative">
            <div className="relative aspect-square max-w-[500px] mx-auto group">
              {/* Outer Glowing Ring */}
              <div className="absolute inset-0 rounded-full border border-brand-500/30 dark:border-brand-500/20 scale-110 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full border border-accent-teal/30 dark:border-accent-teal/20 scale-125 animate-pulse delay-700"></div>
              
              {/* Main Avatar Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden glass p-1 shadow-2xl border-2 border-white/20 dark:border-white/5">
                <img 
                  src="https://picsum.photos/seed/cognitia-hero/600/600" 
                  alt="AI Avatar" 
                  className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Voice Waveform Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-xl flex items-center space-x-3">
                  <div className="flex-1 flex items-end justify-center space-x-1 h-8">
                    {[0.4, 0.7, 0.5, 0.9, 0.3, 0.8, 0.6, 0.4, 0.7, 0.5].map((h, i) => (
                      <div 
                        key={i} 
                        className="w-1.5 bg-brand-400 rounded-full animate-bounce" 
                        style={{ height: `${h * 100}%`, animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-400 animate-pulse">
                    Live Session Active
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="absolute top-6 right-6 flex items-center space-x-2 px-3 py-1.5 glass rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-bold tracking-widest uppercase">Latency: 42ms</span>
                </div>
              </div>

              {/* Floaties */}
              <div className="absolute -top-10 -right-10 glass p-4 rounded-xl shadow-lg border border-white/20 animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center">
                    <Zap size={16} className="text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Processing</p>
                    <p className="text-xs font-bold">Neural Engine v3.1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
