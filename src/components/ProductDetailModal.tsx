import React from 'react';
import { 
  X, ArrowRight, CheckCircle2, FileText, ShieldCheck, Tag, Layers, HelpCircle,
  FlaskConical, Cpu, Beaker, Dna, Filter, Microscope
} from 'lucide-react';
import { ProductItem } from '../types';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onSelectForQuote: (productName: string, catNumber: string, category: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onSelectForQuote
}) => {
  if (!product) return null;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Available on Enquiry':
        return <span className="bg-sky-50 text-sky-800 border border-sky-200 text-xs font-semibold px-2.5 py-1">Available on Enquiry</span>;
      case 'Quote Required':
        return <span className="bg-amber-50 text-amber-800 border border-amber-200 text-xs font-semibold px-2.5 py-1">Quote Required</span>;
      case 'In Stock':
        return <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold px-2.5 py-1">In Stock (Verified)</span>;
      default:
        return <span className="bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold px-2.5 py-1">Availability to Be Confirmed</span>;
    }
  };

  const getCategoryIcon = (catId: string) => {
    switch (catId) {
      case 'laboratory-plasticware-consumables':
        return FlaskConical;
      case 'laboratory-instruments-equipment':
        return Cpu;
      case 'chemicals-reagents-solvents':
        return Beaker;
      case 'molecular-biology-life-sciences':
        return Dna;
      case 'filtration-separation':
        return Filter;
      default:
        return Microscope;
    }
  };

  const SchematicIcon = getCategoryIcon(product.categoryId);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      style={{ background: 'rgba(9, 30, 52, 0.75)', backdropFilter: 'blur(3px)' }}
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-3xl border border-slate-300 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-xennov-navy-dark text-white px-6 py-4 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-xennov-cyan uppercase font-bold tracking-wider">{product.category}</span>
            <span className="text-slate-500">/</span>
            <span className="font-mono text-slate-300">Cat #{product.catalogNumber}</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Top Product Summary */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Clean Technical Specification Blueprint Box */}
            <div className="md:col-span-5 relative border border-slate-300 bg-slate-50 flex flex-col justify-between overflow-hidden">
              <div className="p-6 flex flex-col items-center justify-center min-h-[190px] bg-gradient-to-b from-slate-100 to-slate-50 relative">
                {/* Subtle Technical Blueprint Grid */}
                <div 
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #1677B8 1px, transparent 1px), linear-gradient(to bottom, #1677B8 1px, transparent 1px)',
                    backgroundSize: '16px 16px'
                  }}
                />

                <div className="relative z-10 w-24 h-24 rounded-none border border-slate-300 bg-white shadow-sm flex items-center justify-center text-xennov-navy p-4">
                  <SchematicIcon className="w-12 h-12 text-xennov-blue stroke-[1.5]" />
                </div>

                <div className="relative z-10 mt-3 text-center">
                  <span className="font-mono text-[11px] font-bold text-xennov-navy uppercase tracking-wider bg-white px-2 py-0.5 border border-slate-300">
                    {product.catalogNumber}
                  </span>
                  <div className="text-[10px] text-slate-500 mt-1 font-mono">
                    Official Product SKU Drawing
                  </div>
                </div>
              </div>

              {/* Quality & Batch Standards Strip */}
              <div className="p-3 bg-white border-t border-slate-200 space-y-1.5">
                <div className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  Quality &amp; Sourcing Standards
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5">
                    ✓ Lot CoA Available
                  </span>
                  <span className="text-[10px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 px-1.5 py-0.5">
                    ✓ Original Manufacturer
                  </span>
                  <span className="text-[10px] font-semibold text-blue-800 bg-blue-50 border border-blue-200 px-1.5 py-0.5">
                    ✓ ISO 9001 Sourcing
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Title & Description */}
            <div className="md:col-span-7 space-y-3">
              <div className="flex items-center gap-2">
                {getStatusBadge(product.availability)}
                <span className="text-xs text-slate-500 font-medium">{product.brand}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-xennov-navy leading-snug">
                {product.name}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {product.shortDescription}
              </p>

              <div className="pt-2 flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    onSelectForQuote(product.name, product.catalogNumber, product.category);
                    onClose();
                  }}
                  className="xn-btn-primary text-xs px-4 py-2.5 group"
                >
                  <span>Request a Formal Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={() => {
                    onSelectForQuote(`Technical Question: ${product.name}`, product.catalogNumber, product.category);
                    onClose();
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-xennov-navy border border-slate-300 hover:bg-slate-50 transition-colors"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-xennov-blue" />
                  <span>Ask Technical Question</span>
                </button>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="pt-4 border-t border-slate-200">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-widest text-xennov-blue mb-2">
              Product Overview &amp; Specifications
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              {product.fullDescription}
            </p>

            {/* Specifications Table */}
            <div className="border border-slate-300 overflow-hidden">
              <div className="bg-slate-100 px-4 py-2 text-xs font-bold text-xennov-navy border-b border-slate-300">
                Verified Technical Attributes
              </div>
              <div className="divide-y divide-slate-200">
                {Object.entries(product.specifications).map(([key, val], idx) => (
                  <div key={key} className={`grid grid-cols-1 sm:grid-cols-12 text-xs p-2.5 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                    <span className="sm:col-span-5 font-semibold text-xennov-navy">{key}</span>
                    <span className="sm:col-span-7 text-slate-700 font-mono sm:font-sans">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Variants and Pack Configurations */}
          {product.variants && product.variants.length > 0 && (
            <div>
              <h4 className="text-[11px] font-mono font-bold uppercase tracking-widest text-xennov-blue mb-2.5">
                Available Configurations &amp; Pack Sizes
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.variants.map((v, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 bg-slate-50 border border-slate-200 text-xs text-xennov-navy">
                    <CheckCircle2 className="w-3.5 h-3.5 text-xennov-cyan shrink-0" />
                    <span>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Applications */}
          <div>
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-widest text-xennov-blue mb-2">
              Recommended Scientific Applications
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((app, i) => (
                <span key={i} className="px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                  {app}
                </span>
              ))}
            </div>
          </div>

          {/* Verification Disclaimer */}
          <div className="p-3 bg-slate-50 border border-slate-200 text-[11px] text-slate-500 leading-relaxed">
            <strong className="text-xennov-navy font-semibold">Publishing &amp; Compliance Notice:</strong> Specifications and dimensions shown are model-dependent. Quotations include verified manufacturer lead times, batch Certificate of Analysis (CoA) confirmation, and institutional GST documentation before dispatch.
          </div>

        </div>

        {/* Footer Bar */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500">
            Need institutional procurement or grant pricing for this item?
          </div>
          <button
            onClick={() => {
              onSelectForQuote(product.name, product.catalogNumber, product.category);
              onClose();
            }}
            className="xn-btn-primary text-xs w-full sm:w-auto px-5 py-2.5"
          >
            <span>Proceed to Request Quote &rarr;</span>
          </button>
        </div>

      </div>
    </div>
  );
};
