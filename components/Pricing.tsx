
import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import { PRICING_PLANS } from '../constants';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold text-brand-500 uppercase tracking-widest mb-4">Investment</h2>
          <h3 className="text-3xl lg:text-5xl font-display font-bold mb-8">Scale Your Intelligence</h3>
          
          {/* Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-semibold transition-colors ${billingCycle === 'monthly' ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>Monthly</span>
            <button 
              onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly')}
              className="w-14 h-7 rounded-full bg-slate-200 dark:bg-slate-800 relative p-1 transition-colors"
            >
              <div className={`w-5 h-5 rounded-full bg-brand-600 transition-all duration-300 ${billingCycle === 'yearly' ? 'translate-x-7' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-sm font-semibold transition-colors ${billingCycle === 'yearly' ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>Yearly <span className="text-green-500 font-bold ml-1">(-20%)</span></span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan) => (
            <div 
              key={plan.name}
              className={`relative p-8 rounded-3xl glass border transition-all duration-300 hover:-translate-y-2 ${
                plan.isPopular 
                  ? 'border-brand-500 dark:border-brand-500 shadow-2xl shadow-brand-500/10' 
                  : 'border-slate-200 dark:border-slate-800'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full bg-brand-600 text-white text-[10px] font-bold uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">{plan.description}</p>
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-display font-extrabold">${billingCycle === 'yearly' ? Math.floor(plan.price * 0.8) : plan.price}</span>
                  <span className="text-slate-500 dark:text-slate-400 font-medium">/mo</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3 text-sm">
                    <Check size={18} className="text-brand-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all active:scale-95 ${
                plan.isPopular 
                  ? 'bg-brand-600 text-white shadow-xl shadow-brand-600/20' 
                  : 'bg-slate-900 dark:bg-white text-white dark:text-slate-950'
              }`}>
                {plan.price === 0 ? 'Start Free' : 'Upgrade Now'}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 text-center border border-dashed border-slate-200 dark:border-slate-800">
           <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
             Need a custom credit package for high-volume usage? <a href="#" className="text-brand-500 font-bold hover:underline">Talk to our Sales team</a>.
           </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
