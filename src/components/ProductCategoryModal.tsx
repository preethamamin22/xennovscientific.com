import React from 'react';
import { X, ArrowRight, CheckCircle2, ChevronRight, Layers, FileText, Bookmark } from 'lucide-react';
import { ProductCategory } from '../types';

interface ProductCategoryModalProps {
  category: ProductCategory | null;
  onClose: () => void;
  onSelectForQuote: (categoryTitle: string) => void;
}

export const ProductCategoryModal: React.FC<ProductCategoryModalProps> = ({
  category,
  onClose,
  onSelectForQuote
}) => {
  if (!category) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      style={{ background: 'rgba(9, 30, 52, 0.75)', backdropFilter: 'blur(3px)' }}
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-2xl border border-xennov-grey-border shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Executive Technical Header (Thermo Fisher Style) */}
        <div className="relative bg-xennov-navy-dark text-white p-6 sm:p-7 border-b border-slate-800 shrink-0">
          {/* Subtle Grid Accent */}
          <div 
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #38B6D9 1px, transparent 0)',
              backgroundSize: '24px 24px'
            }}
          />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="relative space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] font-bold tracking-widest text-xennov-cyan uppercase bg-xennov-navy px-2 py-0.5 border border-xennov-cyan/30">
                Division {String(category.number).padStart(2, '0')} of 12
              </span>
              <span className="text-slate-400 text-xs font-mono">
                {category.subcategories.length} Specialized Subcategories
              </span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
              {category.title}
            </h3>
            <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
              Official catalogue division for research laboratories, industrial QA/QC, and diagnostic facilities.
            </p>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-6">
          <div>
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-xennov-blue mb-2">
              Division Scope
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-xennov-grey p-3.5 border border-xennov-grey-border">
              {category.fullDescription}
            </p>
          </div>

          {/* Subcategories Tree */}
          {category.subcategories && category.subcategories.length > 0 && (
            <div>
              <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-xennov-blue mb-2.5">
                Complete Catalogue Taxonomy ({category.subcategories.length} Subcategories)
              </h4>
              <div className="space-y-1.5 max-h-52 overflow-y-auto pr-1">
                {category.subcategories.map((sub, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2 bg-xennov-grey border border-xennov-grey-border text-xs text-xennov-navy hover:border-xennov-blue transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-xennov-blue shrink-0 mt-0.5" />
                    <span className="font-medium">{sub}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Portfolio Items */}
          <div>
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-xennov-blue mb-2.5">
              Featured Product Segments
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {category.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-xennov-navy bg-xennov-grey border border-xennov-grey-border px-2.5 py-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-xennov-cyan shrink-0 mt-0.5" />
                  <span className="font-medium">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Research Applications */}
          <div>
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-xennov-blue mb-2">
              Common Research &amp; Industrial Applications
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {category.commonApplications.map((app, i) => (
                <span key={i} className="px-2.5 py-1 text-[11px] font-medium text-slate-700 bg-xennov-grey border border-xennov-grey-border">
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="px-6 py-4 bg-xennov-grey border-t border-xennov-grey-border flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <span className="text-xs text-slate-500">
            Need specifications, volume availability, or quotes for this division?
          </span>
          <button
            onClick={() => {
              onSelectForQuote(category.title);
              onClose();
            }}
            className="xn-btn-primary text-xs w-full sm:w-auto px-5 py-2 group"
          >
            <span>Enquire About Division</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
};
