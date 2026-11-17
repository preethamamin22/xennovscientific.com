import React, { useState } from 'react';
import { ArrowRight, Dna, Activity, Binary, Layers, FlaskConical, Microscope, TestTubes, ShieldCheck, Sprout, Gauge, Cpu } from 'lucide-react';
import { scientificApplications } from '../data/applications';

interface ApplicationsSectionProps {
  onSelectApplication: (title: string, categoryRef: string) => void;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Dna,
  Activity,
  Binary,
  Layers,
  FlaskConical,
  Microscope,
  TestTubes,
  ShieldCheck,
  Sprout,
  Gauge,
  Cpu
};

export const ApplicationsSection: React.FC<ApplicationsSectionProps> = ({ onSelectApplication }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'genomics' | 'analytical' | 'bioprocess'>('all');

  const filtered = scientificApplications.filter(app => {
    if (activeTab === 'genomics') {
      return ['dna-rna-extraction', 'pcr-qpcr', 'genomics-sequencing', 'protein-analysis'].includes(app.id);
    }
    if (activeTab === 'analytical') {
      return ['chromatography-separation', 'pharmaceutical-qc', 'chemical-analysis', 'environmental-water-testing', 'food-safety'].includes(app.id);
    }
    if (activeTab === 'bioprocess') {
      return ['cell-culture', 'microbiology-sterile-processing', 'bioprocess-development', 'sample-collection-storage', 'laboratory-cold-chain'].includes(app.id);
    }
    return true;
  });

  return (
    <section id="applications" className="py-20 lg:py-24 bg-xennov-grey border-b border-xennov-grey-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 max-w-3xl">
          <div className="xn-label mb-3">Workflow Solutions</div>
          <div className="xn-rule mb-5" />
          <h2 className="xn-section-heading mb-4">
            Scientific Workflows &amp; Applications
          </h2>
          <p className="xn-section-subheading">
            Explore dedicated instrumentation, reagents, and consumable bundles aligned with your laboratory's experimental pipelines.
          </p>
        </div>

        {/* Workflow Category Filter */}
        <div className="flex items-center gap-2 pb-4 mb-8 border-b border-xennov-grey-border overflow-x-auto scrollbar-none">
          {[
            { id: 'all', label: 'All 14 Workflows' },
            { id: 'genomics', label: 'Genomics, PCR & Proteomics' },
            { id: 'analytical', label: 'Chromatography, Pharma QC & Testing' },
            { id: 'bioprocess', label: 'Cell Culture, Bioprocessing & Cold-Chain' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors border ${
                activeTab === tab.id
                  ? 'bg-xennov-blue text-white border-xennov-blue'
                  : 'bg-white text-slate-600 border-xennov-grey-border hover:border-xennov-blue hover:text-xennov-blue'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 14 Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(app => {
            const IconComp = ICON_MAP[app.iconName] || Dna;
            return (
              <div
                key={app.id}
                className="bg-white border border-xennov-grey-border shadow-sm hover:shadow-card-hover transition-all duration-200 p-5 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-xennov-cyan-light border border-xennov-grey-border flex items-center justify-center text-xennov-blue shrink-0 group-hover:bg-xennov-blue group-hover:text-white transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-xennov-navy group-hover:text-xennov-blue transition-colors leading-snug">
                      {app.title}
                    </h3>
                  </div>

                  <p className="text-xs text-xennov-text-muted leading-relaxed mb-4">
                    {app.description}
                  </p>

                  <div className="pt-3 border-t border-xennov-grey-border mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-xennov-navy block mb-1.5">
                      Recommended Equipment &amp; Supplies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {app.relatedProducts.map((prod, i) => (
                        <span key={i} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 border border-slate-200/80 font-medium">
                          {prod}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onSelectApplication(app.title, app.categoryRef)}
                  className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-xennov-blue border border-xennov-grey-border hover:bg-xennov-blue hover:text-white transition-colors"
                >
                  <span>Enquire For This Workflow</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

