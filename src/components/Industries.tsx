import React from 'react';
import { ArrowRight, GraduationCap, Dna, Pill, Hospital, Microscope, Coffee, Sprout, Droplet, Factory, CheckCircle2 } from 'lucide-react';
import { industries } from '../data/industries';

interface IndustriesProps {
  onSelectIndustry?: (title: string) => void;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap, Dna, Pill, Hospital, Microscope, Coffee, Sprout, Droplet, Factory
};

export const Industries: React.FC<IndustriesProps> = ({ onSelectIndustry }) => {
  return (
    <section id="industries" className="py-20 lg:py-24 bg-white border-t border-xennov-grey-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <div className="xn-label mb-3">Sectors &amp; Applications</div>
          <div className="xn-rule mb-5" />
          <h2 className="xn-section-heading mb-4">
            Empowering Innovation Across Scientific Sectors
          </h2>
          <p className="xn-section-subheading">
            From university research benches to industrial QA/QC lines, XenNov Scientific supplies certified laboratory instruments, consumables, and reagents across critical scientific disciplines.
          </p>
        </div>

        {/* 9-Card Clean Technical Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind, idx) => {
            const IconComp = ICON_MAP[ind.iconName] || Microscope;
            return (
              <div
                key={ind.id}
                className="group bg-white border border-slate-200 hover:border-xennov-blue shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between border-t-2 border-t-xennov-navy hover:border-t-xennov-cyan p-5 sm:p-6"
              >
                <div>
                  {/* Top Bar: Icon + Index */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-slate-50 border border-slate-200 group-hover:border-xennov-cyan group-hover:bg-xennov-cyan/10 text-xennov-navy group-hover:text-xennov-blue flex items-center justify-center transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                      Sector {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-sm sm:text-base font-bold text-xennov-navy group-hover:text-xennov-blue transition-colors mb-2 leading-snug">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {ind.description}
                  </p>

                  {/* Focus Procurement Areas */}
                  <div className="pt-3 border-t border-slate-100">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-xennov-blue mb-2.5">
                      Procurement Scope
                    </div>
                    <div className="space-y-1.5">
                      {ind.focusAreas.map((f, i) => (
                        <div key={i} className="flex items-start gap-2 text-[11px] text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-xennov-cyan shrink-0 mt-0.5" />
                          <span className="leading-tight">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-5 mt-5 border-t border-slate-100">
                  <button
                    onClick={() => onSelectIndustry?.(ind.title)}
                    className="w-full flex items-center justify-between py-2 px-3 text-xs font-semibold text-xennov-navy bg-slate-50 hover:bg-xennov-navy hover:text-white border border-slate-200 transition-colors"
                  >
                    <span>Request Sector RFQ</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
