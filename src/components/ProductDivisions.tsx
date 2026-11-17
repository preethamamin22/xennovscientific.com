import React, { useState } from 'react';
import { ArrowRight, FlaskConical, Dna, Layers, Activity, Gauge, Microscope, ShieldCheck, Sprout, Binary, Pipette, Cpu, TestTubes, Search, ChevronRight } from 'lucide-react';
import { productCategories } from '../data/categories';
import { ProductCategory } from '../types';
import { ProductCategoryModal } from './ProductCategoryModal';

interface ProductDivisionsProps {
  onSelectForQuote: (categoryTitle: string) => void;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Dna, Activity, Gauge, Layers, FlaskConical, TestTubes, Microscope, ShieldCheck, Sprout, Binary, Pipette, Cpu
};

export const ProductDivisions: React.FC<ProductDivisionsProps> = ({ onSelectForQuote }) => {
  const [selected, setSelected] = useState<ProductCategory | null>(null);
  const [divisionFilter, setDivisionFilter] = useState('');

  const filteredCategories = productCategories.filter(cat =>
    cat.title.toLowerCase().includes(divisionFilter.toLowerCase()) ||
    cat.shortDescription.toLowerCase().includes(divisionFilter.toLowerCase()) ||
    cat.subcategories.some(s => s.toLowerCase().includes(divisionFilter.toLowerCase()))
  );

  return (
    <section id="divisions" className="py-16 sm:py-20 bg-xennov-grey border-b border-xennov-grey-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header - Clean Enterprise Format */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-6 border-b border-xennov-grey-border">
          <div className="max-w-3xl">
            <div className="xn-label mb-2">Scientific Taxonomy &bull; 12 Divisions</div>
            <h2 className="xn-section-heading mb-3">
              12 Scientific Product Divisions
            </h2>
            <p className="xn-section-subheading">
              Comprehensive multi-division taxonomy covering molecular biology, analytical instruments, laboratory plasticware, chemicals, safety systems, and modular furniture.
            </p>
          </div>

          {/* Clean Search Input */}
          <div className="w-full lg:w-72 shrink-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Filter divisions &amp; subcategories..."
                value={divisionFilter}
                onChange={(e) => setDivisionFilter(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-xennov-grey-border text-xs bg-white focus:outline-none focus:border-xennov-blue transition-colors"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>

        {/* Clean 12-Division Grid – Thermo Fisher Style Technical Cards (Clean UI, No Cluttered Photos) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {filteredCategories.map(cat => {
            const IconComp = ICON_MAP[cat.iconName] || FlaskConical;
            return (
              <div
                key={cat.id}
                className="bg-white border border-xennov-grey-border hover:border-xennov-blue p-6 transition-all duration-200 flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div>
                  {/* Top Bar: Division Number & Icon */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                    <span className="font-mono text-[11px] font-black tracking-wider text-xennov-blue bg-xennov-grey px-2 py-0.5 border border-xennov-grey-border">
                      DIVISION {String(cat.number).padStart(2, '0')}
                    </span>
                    <div className="w-8 h-8 bg-xennov-cyan-light border border-xennov-grey-border flex items-center justify-center text-xennov-blue group-hover:bg-xennov-blue group-hover:text-white transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 
                    onClick={() => setSelected(cat)}
                    className="text-sm font-extrabold text-xennov-navy group-hover:text-xennov-blue transition-colors mb-2 cursor-pointer leading-snug"
                  >
                    {cat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-xennov-text-muted leading-relaxed mb-4">
                    {cat.shortDescription}
                  </p>

                  {/* Subcategory Pills / Highlights */}
                  <div className="space-y-1 mb-5">
                    {cat.highlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-600">
                        <span className="w-1 h-1 bg-xennov-blue shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="pt-3 border-t border-xennov-grey-border flex items-center justify-between">
                  <button
                    onClick={() => setSelected(cat)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-xennov-blue hover:text-xennov-navy transition-colors"
                  >
                    <span>View All Subcategories</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  <button
                    onClick={() => onSelectForQuote(cat.title)}
                    className="text-[11px] font-semibold text-slate-500 hover:text-xennov-blue transition-colors underline"
                  >
                    Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clean Bottom Banner */}
        <div className="p-5 bg-white border border-xennov-grey-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-600">
            <strong className="text-xennov-navy block sm:inline mr-2">Custom Requisitions:</strong>
            Need specific chemical CAS numbers, custom-synthesized oligos, or unlisted equipment brands?
          </div>
          <button
            onClick={() => onSelectForQuote('Custom Product Sourcing')}
            className="shrink-0 xn-btn-primary text-xs px-4 py-2"
          >
            <span>Submit Custom Requisition</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 inline" />
          </button>
        </div>

      </div>

      {/* Detail modal */}
      <ProductCategoryModal
        category={selected}
        onClose={() => setSelected(null)}
        onSelectForQuote={onSelectForQuote}
      />
    </section>
  );
};
