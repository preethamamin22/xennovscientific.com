import React from 'react';
import { PackageCheck, Network, UserCheck, Receipt, Building2, Handshake } from 'lucide-react';
import { benefits } from '../data/benefits';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  PackageCheck, Network, UserCheck, Receipt, Building2, Handshake
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-xennov-navy relative overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #E71316 1px, transparent 0)', backgroundSize: '28px 28px' }}
      />
      {/* Blue accent glow top-right */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-xennov-blue/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="xn-label text-xennov-cyan mb-3">Value &amp; Principles</div>
          <div className="w-12 h-1 bg-xennov-cyan mb-5" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
            Why Choose XenNov Scientific?
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-normal">
            We provide institutional buyers, researchers, and facility managers with a transparent, responsive, and scientifically competent procurement experience.
          </p>
        </div>

        {/* 6 benefit blocks – 3-col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map(b => {
            const IconComp = ICON_MAP[b.iconName] || PackageCheck;
            return (
              <div
                key={b.id}
                className="group bg-white/5 hover:bg-white/[0.09] border border-white/10 hover:border-xennov-cyan/40 p-7 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 bg-white/10 group-hover:bg-xennov-cyan/20 border border-white/15 flex items-center justify-center transition-colors">
                    <IconComp className="w-5 h-5 text-xennov-cyan" />
                  </div>
                  <span className="font-mono text-xs font-black text-xennov-cyan/50 mt-1">{b.number}</span>
                </div>

                <h3 className="text-[15px] font-bold text-white mb-3 group-hover:text-xennov-cyan transition-colors">
                  {b.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed flex-1">
                  {b.description}
                </p>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-xennov-cyan" />
                  <span className="text-[10px] font-semibold tracking-wider text-xennov-cyan/70 uppercase">
                    Committed Operational Standard
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
