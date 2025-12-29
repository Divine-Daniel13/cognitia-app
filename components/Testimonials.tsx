
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 relative bg-slate-50 dark:bg-slate-900/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-brand-500 font-bold uppercase tracking-widest mb-6">Testimonials</h2>
            <h3 className="text-3xl lg:text-5xl font-display font-bold mb-10 leading-tight">
              Hear from Those already<br />Talking to the Future.
            </h3>
            
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <button 
                onClick={prev}
                className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-white dark:hover:bg-slate-800 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={next}
                className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-white dark:hover:bg-slate-800 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="flex-[1.5] w-full relative">
            <div className="relative glass p-10 md:p-16 rounded-[2.5rem] border-slate-200 dark:border-slate-800 overflow-hidden min-h-[400px] flex flex-col justify-center">
               <Quote className="absolute top-8 right-8 w-24 h-24 text-brand-500/5 -z-0" />
               
               <div key={active} className="relative z-10 animate-in fade-in slide-in-from-right-8 duration-700">
                  <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-slate-800 dark:text-slate-200">
                    "{TESTIMONIALS[active].content}"
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <img 
                      src={TESTIMONIALS[active].avatar} 
                      alt={TESTIMONIALS[active].name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-lg">{TESTIMONIALS[active].name}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{TESTIMONIALS[active].role}</p>
                    </div>
                  </div>
               </div>

               {/* Indicators */}
               <div className="absolute bottom-8 right-12 flex space-x-2">
                 {TESTIMONIALS.map((_, i) => (
                   <div 
                    key={i} 
                    className={`h-1.5 transition-all duration-300 rounded-full ${i === active ? 'w-8 bg-brand-500' : 'w-2 bg-slate-300 dark:bg-slate-700'}`}
                   />
                 ))}
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
