import React from 'react';
import { ArrowRight, CheckCircle2, PackageSearch, Building2, Cpu, LayoutGrid, SearchCheck, Layers } from 'lucide-react';
import { solutions } from '../data/solutions';

interface SolutionsProps {
  onSelectSolution: (title: string) => void;
}

const SOLUTION_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'product-sourcing': PackageSearch,
  'institutional-bulk': Building2,
  'lab-equipment': Cpu,
  'lab-setup': LayoutGrid,
  'custom-sourcing': SearchCheck,
  'vendor-consolidation': Layers,
};

export const Solutions: React.FC<SolutionsProps> = ({ onSelectSolution }) => {
  return (
    <section id="solutions" className="py-20 lg:py-24 bg-xennov-grey border-t border-b border-xennov-grey-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="xn-label mb-3">Operational Capabilities</div>
          <div className="xn-rule mb-5" />
          <h2 className="xn-section-heading mb-4">
            Scientific Solutions Designed Around Your Needs
          </h2>
          <p className="xn-section-subheading">
            Structured, dependable operational services designed to simplify scientific procurement, facility expansion, rate contracting, and institutional supply management.
          </p>
        </div>

        {/* 6 Clean Enterprise Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, idx) => {
            const Icon = SOLUTION_ICONS[sol.id] || PackageSearch;
            return (
              <div
                key={sol.id}
                className="bg-white border border-slate-200 hover:border-xennov-blue shadow-sm hover:shadow-md transition-all duration-200 p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Top Line: Icon & Service Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-slate-50 border border-slate-200 text-xennov-navy flex items-center justify-center">
                      <Icon className="w-5 h-5 text-xennov-blue" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      SERVICE {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-base font-bold text-xennov-navy mb-1 leading-snug">
                    {sol.title}
                  </h3>
                  <div className="text-xs font-semibold text-xennov-blue mb-3">
                    {sol.subtitle}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {sol.description}
                  </p>

                  {/* Key Points */}
                  <div className="pt-3 border-t border-slate-100 space-y-2 mb-6">
                    {sol.keyPoints.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-xennov-cyan shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onSelectSolution(sol.title)}
                    className="w-full flex items-center justify-between py-2 px-3 text-xs font-semibold text-xennov-navy bg-slate-50 hover:bg-xennov-navy hover:text-white border border-slate-200 transition-colors"
                  >
                    <span>Enquire About This Service</span>
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
