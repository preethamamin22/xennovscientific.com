import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Tag, Layers, Dna, FileText } from 'lucide-react';
import { productCategories } from '../data/categories';
import { featuredProducts } from '../data/products';
import { brandsDirectory } from '../data/brands';
import { scientificApplications } from '../data/applications';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (title: string, category: string, catNo?: string) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectResult
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  // Search matching products
  const matchedProducts = q ? featuredProducts.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.catalogNumber.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.shortDescription.toLowerCase().includes(q)
  ) : [];

  // Search matching categories & subcategories
  const matchedCategories = q ? productCategories.filter(c =>
    c.title.toLowerCase().includes(q) ||
    c.subcategories.some(sub => sub.toLowerCase().includes(q))
  ) : [];

  // Search matching brands
  const matchedBrands = q ? brandsDirectory.filter(b =>
    b.name.toLowerCase().includes(q) ||
    b.portfolioArea.toLowerCase().includes(q)
  ) : [];

  // Search matching applications
  const matchedApps = q ? scientificApplications.filter(a =>
    a.title.toLowerCase().includes(q) ||
    a.description.toLowerCase().includes(q)
  ) : [];

  const totalResults = matchedProducts.length + matchedCategories.length + matchedBrands.length + matchedApps.length;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24"
      style={{ background: 'rgba(9, 30, 52, 0.75)', backdropFilter: 'blur(3px)' }}
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-2xl border border-xennov-grey-border shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-xennov-grey-border flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-xennov-blue shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search by product name, brand, catalogue number (e.g. XN-SCT-200C), or division..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-xennov-navy placeholder:text-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold px-2 py-1 text-slate-500 hover:text-xennov-navy"
          >
            Esc
          </button>
        </div>

        {/* Results Area */}
        <div className="overflow-y-auto p-4 space-y-5 flex-1">
          {q.length === 0 ? (
            <div className="py-8 text-center">
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-3">Popular Scientific Inquiries</p>
              <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
                {['2 mL Screw-Cap Tube', 'C18 HPLC Column', 'Laboratory Refrigerator 2-8°C', 'Class II Biosafety Cabinet', 'PCR Master Mix', 'Tarsons Plasticware', 'Autoclaves'].map(term => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-2.5 py-1 text-xs bg-xennov-grey border border-xennov-grey-border hover:border-xennov-blue text-slate-700"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-10 text-center text-slate-500 text-xs">
              <p className="font-semibold text-xennov-navy mb-1">No direct catalogue match found for "{query}"</p>
              <p className="max-w-xs mx-auto mb-4">You can submit an unlisted product or custom requisition directly to our procurement team.</p>
              <button
                onClick={() => {
                  onSelectResult(query, 'Custom Product Sourcing');
                  onClose();
                }}
                className="xn-btn-primary text-xs px-4 py-2"
              >
                <span>Request Custom Quote for "{query}"</span>
              </button>
            </div>
          ) : (
            <>
              {/* Products */}
              {matchedProducts.length > 0 && (
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-xennov-blue mb-2">
                    Verified Products ({matchedProducts.length})
                  </div>
                  <div className="space-y-1.5">
                    {matchedProducts.map(p => (
                      <button
                        key={p.id}
                        onClick={() => {
                          onSelectResult(p.name, p.category, p.catalogNumber);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 bg-slate-50 hover:bg-xennov-cyan-light/30 border border-slate-200/80 flex items-center justify-between group transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-[10px] font-bold text-xennov-blue bg-white border border-slate-200 px-1.5 py-0.5">
                            {p.catalogNumber}
                          </span>
                          <div>
                            <div className="text-xs font-bold text-xennov-navy group-hover:text-xennov-blue">{p.name}</div>
                            <div className="text-[10px] text-slate-500">{p.category}</div>
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-xennov-blue" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Categories */}
              {matchedCategories.length > 0 && (
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-xennov-blue mb-2">
                    Product Divisions ({matchedCategories.length})
                  </div>
                  <div className="space-y-1.5">
                    {matchedCategories.map(c => (
                      <button
                        key={c.id}
                        onClick={() => {
                          onSelectResult(c.title, c.title);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 bg-slate-50 hover:bg-xennov-cyan-light/30 border border-slate-200/80 flex items-center justify-between group transition-colors"
                      >
                        <div>
                          <div className="text-xs font-bold text-xennov-navy group-hover:text-xennov-blue">
                            Division {String(c.number).padStart(2, '0')}: {c.title}
                          </div>
                          <div className="text-[10px] text-slate-500 line-clamp-1">{c.shortDescription}</div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-xennov-blue" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Brands */}
              {matchedBrands.length > 0 && (
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-xennov-blue mb-2">
                    Brands &amp; Manufacturers ({matchedBrands.length})
                  </div>
                  <div className="space-y-1.5">
                    {matchedBrands.map(b => (
                      <button
                        key={b.id}
                        onClick={() => {
                          onSelectResult(`Brand Sourcing: ${b.name}`, b.category);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 bg-slate-50 hover:bg-xennov-cyan-light/30 border border-slate-200/80 flex items-center justify-between group transition-colors"
                      >
                        <div>
                          <div className="text-xs font-bold text-xennov-navy group-hover:text-xennov-blue">{b.name}</div>
                          <div className="text-[10px] text-slate-500">{b.portfolioArea}</div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-xennov-blue" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Applications */}
              {matchedApps.length > 0 && (
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-xennov-blue mb-2">
                    Workflows &amp; Applications ({matchedApps.length})
                  </div>
                  <div className="space-y-1.5">
                    {matchedApps.map(a => (
                      <button
                        key={a.id}
                        onClick={() => {
                          onSelectResult(`Workflow: ${a.title}`, a.categoryRef);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 bg-slate-50 hover:bg-xennov-cyan-light/30 border border-slate-200/80 flex items-center justify-between group transition-colors"
                      >
                        <div>
                          <div className="text-xs font-bold text-xennov-navy group-hover:text-xennov-blue">{a.title}</div>
                          <div className="text-[10px] text-slate-500 line-clamp-1">{a.description}</div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-xennov-blue" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-xennov-grey border-t border-xennov-grey-border text-[11px] text-slate-500 flex items-center justify-between">
          <span>Search across 12 divisions, priority catalogue SKUs &amp; brands</span>
          <button
            onClick={() => {
              onSelectResult(query || 'General Sourcing Inquiry', 'Custom Product Sourcing');
              onClose();
            }}
            className="text-xennov-blue hover:underline font-semibold"
          >
            Submit Direct RFQ &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

