import React, { useState } from 'react';
import { FileText, Download, ArrowRight, BookOpen, CheckCircle2, Search } from 'lucide-react';
import { technicalResources } from '../data/resources';
import { ResourceDoc } from '../types';

interface ResourcesSectionProps {
  onRequestResource: (resourceTitle: string) => void;
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({ onRequestResource }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [downloadModalDoc, setDownloadModalDoc] = useState<ResourceDoc | null>(null);

  const categories = ['All', 'Product Catalogue', 'Selection Guide', 'Application Note', 'Technical Datasheet'];

  const filtered = technicalResources.filter(doc => 
    activeCategory === 'All' || doc.type === activeCategory
  );

  return (
    <section id="resources" className="py-20 lg:py-24 bg-xennov-grey border-b border-xennov-grey-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="xn-label mb-3">Technical Knowledge Centre</div>
          <div className="xn-rule mb-5" />
          <h2 className="xn-section-heading mb-4">
            Technical Resources &amp; Selection Guides
          </h2>
          <p className="xn-section-subheading">
            Access scientific catalogues, product selection frameworks, chemical grade compatibility matrices, and protocol application notes curated by XenNov's technical specialists.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 pb-3 mb-8 border-b border-xennov-grey-border overflow-x-auto scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors border ${
                activeCategory === cat
                  ? 'bg-xennov-navy text-white border-xennov-navy'
                  : 'bg-white text-slate-600 border-xennov-grey-border hover:border-xennov-navy hover:text-xennov-navy'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {filtered.map(doc => (
            <div
              key={doc.id}
              className="bg-white border border-xennov-grey-border p-6 flex flex-col justify-between hover:shadow-card-hover transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-xennov-blue bg-xennov-grey px-2 py-0.5 border border-xennov-grey-border">
                    {doc.type}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {doc.format} &bull; {doc.size}
                  </span>
                </div>

                <div className="flex items-start gap-3 mb-3">
                  <div className="w-9 h-9 bg-xennov-cyan-light border border-xennov-grey-border flex items-center justify-center text-xennov-blue shrink-0 mt-0.5">
                    <FileText className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-sm font-bold text-xennov-navy group-hover:text-xennov-blue transition-colors leading-snug">
                    {doc.title}
                  </h3>
                </div>

                <p className="text-xs text-xennov-text-muted leading-relaxed mb-6">
                  {doc.description}
                </p>
              </div>

              <div className="pt-4 border-t border-xennov-grey-border flex items-center justify-between">
                <button
                  onClick={() => setDownloadModalDoc(doc)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-xennov-blue hover:text-xennov-navy transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resource</span>
                </button>
                <button
                  onClick={() => onRequestResource(doc.title)}
                  className="text-[11px] text-slate-500 hover:text-xennov-navy underline"
                >
                  Request Printed Copy
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Knowledge Callout */}
        <div className="p-6 bg-white border border-xennov-grey-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="text-sm font-bold text-xennov-navy mb-1">
              Need specific Certificate of Analysis (CoA) or Safety Data Sheets (SDS)?
            </h4>
            <p className="text-xs text-xennov-text-muted">
              Submit your batch lot numbers or chemical CAS registry numbers to receive official manufacturer regulatory dossiers.
            </p>
          </div>
          <button
            onClick={() => onRequestResource('Certificate of Analysis (CoA) / SDS Request')}
            className="shrink-0 xn-btn-navy text-xs px-5 py-2.5"
          >
            <span>Request SDS / CoA Dossier</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Simulated Download / Request Modal */}
      {downloadModalDoc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(9, 30, 52, 0.7)', backdropFilter: 'blur(2px)' }}
          onClick={() => setDownloadModalDoc(null)}
        >
          <div
            className="bg-white border border-xennov-grey-border p-6 max-w-md w-full shadow-2xl relative"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 bg-xennov-cyan-light border border-xennov-grey-border flex items-center justify-center text-xennov-blue shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-xennov-blue">{downloadModalDoc.type}</span>
                <h4 className="text-base font-bold text-xennov-navy">{downloadModalDoc.title}</h4>
              </div>
            </div>

            <p className="text-xs text-slate-600 mb-6 leading-relaxed">
              {downloadModalDoc.description}
            </p>

            <div className="p-3 bg-xennov-grey border border-xennov-grey-border text-xs text-xennov-text mb-6 space-y-1">
              <div><strong>Format:</strong> {downloadModalDoc.format} Document ({downloadModalDoc.size})</div>
              <div><strong>Publisher:</strong> XenNov Scientific Technical Desk</div>
              <div><strong>Classification:</strong> Open Institutional Reference</div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setDownloadModalDoc(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-xennov-navy"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onRequestResource(`Resource Download: ${downloadModalDoc.title}`);
                  setDownloadModalDoc(null);
                }}
                className="xn-btn-primary text-xs px-4 py-2"
              >
                <span>Request Document Link &rarr;</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

