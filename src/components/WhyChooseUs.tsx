import React from 'react';
import { PackageCheck, Network, UserCheck, Receipt, Building2, Handshake } from 'lucide-react';
import { benefits } from '../data/benefits';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  PackageCheck, Network, UserCheck, Receipt, Building2, Handshake
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-xennov-grey border-t border-xennov-grey-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header — TF style: label + rule + heading */}
        <div className="mb-12 max-w-3xl">
          <div className="xn-label mb-2">Value &amp; Principles</div>
          <div className="xn-rule mb-5" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-xennov-navy leading-tight mb-4">
            Why Choose XenNov Scientific?
          </h2>
          <p className="text-sm sm:text-base text-xennov-text-muted leading-relaxed">
            We provide institutional buyers, researchers, and facility managers with a transparent, responsive, and scientifically competent procurement experience.
          </p>
        </div>

        {/* 6 benefit cards — TF style: white cards on gray background */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, idx) => {
            const IconComp = ICON_MAP[b.iconName] || PackageCheck;
            return (
              <div
                key={b.id}
                className="group bg-white border border-xennov-grey-border hover:border-xennov-blue hover:shadow-card-hover p-7 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 bg-xennov-cyan-light border border-xennov-grey-border flex items-center justify-center transition-colors group-hover:bg-xennov-blue group-hover:border-xennov-blue">
                    <IconComp className="w-5 h-5 text-xennov-blue group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-mono text-xs font-black text-xennov-text-muted mt-1">{b.number}</span>
                </div>

                <h3 className="text-[15px] font-bold text-xennov-navy mb-3 group-hover:text-xennov-blue transition-colors">
                  {b.title}
                </h3>

                <p className="text-xs text-xennov-text-muted leading-relaxed flex-1">
                  {b.description}
                </p>

                <div className="mt-5 pt-4 border-t border-xennov-grey-border flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-xennov-blue" />
                  <span className="text-[10px] font-semibold tracking-wider text-xennov-text-muted uppercase">
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
