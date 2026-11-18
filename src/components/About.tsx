import React from 'react';
import { ArrowRight, CheckCircle2, MapPin, ShieldCheck, Target, Truck, Thermometer, FileCheck } from 'lucide-react';

interface AboutProps {
  onRequestQuote: () => void;
  onExploreProducts: () => void;
}

export const About: React.FC<AboutProps> = ({ onRequestQuote, onExploreProducts }) => {
  const checkpoints = [
    'Bengaluru-based scientific procurement hub',
    'Multi-brand product access across 12 divisions',
    'Tender, grant & institutional billing support',
    'Verified CoA & batch traceability documentation',
  ];

  const credentials = [
    {
      icon: ShieldCheck,
      title: 'Batch Traceability & CoA',
      desc: 'All analytical reagents, chemicals, and plasticware are sourced with traceable manufacturer lot numbers, Certificates of Analysis, and MSDS documentation.'
    },
    {
      icon: Thermometer,
      title: 'Active Cold-Chain Protocol',
      desc: 'Dedicated handling protocols for temperature-sensitive enzymes, antibodies, cell culture media, and PCR master mixes spanning -80°C to +4°C.'
    },
    {
      icon: FileCheck,
      title: 'Institutional Contracting & GeM',
      desc: 'Established processes for university purchase orders, institutional rate contracts, CSIR/ICMR grants, and formal vendor empanelment.'
    },
    {
      icon: Truck,
      title: 'Pan-India Distribution Network',
      desc: 'Expedited ground and air freight from our Bengaluru gateway ensuring timely dispatch to research centers across all Indian states and UTs.'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">

          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="xn-label mb-2 sm:mb-3">About XenNov Scientific</div>
              <div className="xn-rule mb-4 sm:mb-5" />
              <h2 className="xn-section-heading mb-4 sm:mb-6">
                Supporting Science Through Reliable Solutions.
              </h2>

              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-xennov-text-muted leading-relaxed mb-6">
                <p>
                  <strong className="text-xennov-navy font-semibold">XenNov Scientific Private Limited</strong> is an emerging scientific products distribution and laboratory solutions company based in Bengaluru, India.
                </p>
                <p>
                  Our objective is to simplify scientific procurement by connecting research institutions, universities, biotechnology companies, pharmaceutical industries, hospitals and laboratories with scientific products and technologies.
                </p>
                <p className="text-slate-500">
                  Operating from India’s biotech hub in Karnataka, we understand that science requires precision, reliability, and prompt access to the right reagents and instruments. We aim to become a comprehensive destination for laboratory procurement, eliminating vendor fragmentation.
                </p>
              </div>

              {/* Core Proposition highlight */}
              <div className="flex items-center gap-3 p-3.5 sm:p-4 mb-6 border-l-4 border-xennov-blue bg-xennov-grey border-y border-r border-xennov-grey-border">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-xennov-cyan-light border border-xennov-grey-border flex items-center justify-center text-xennov-blue shrink-0">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-xennov-blue">Core Value Proposition</div>
                  <div className="text-xs sm:text-sm font-bold text-xennov-navy">One Partner. Multiple Scientific Solutions.</div>
                </div>
              </div>

              {/* Vision & Mission boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                <div className="p-3.5 bg-xennov-grey border border-xennov-grey-border">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-xennov-navy block mb-1">Our Vision</span>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    To be a respected and comprehensive scientific solutions provider, recognized for quality, integrity, product diversity and commitment to researchers.
                  </p>
                </div>
                <div className="p-3.5 bg-xennov-grey border border-xennov-grey-border">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-xennov-navy block mb-1">Our Mission</span>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    To make scientific procurement simpler, more accessible and more efficient through a diverse product portfolio and customer-focused solutions.
                  </p>
                </div>
              </div>

              {/* Checkpoints */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 mb-7 sm:mb-8">
                {checkpoints.map(point => (
                  <li key={point} className="flex items-center gap-2 text-xs text-xennov-text font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-xennov-blue shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-2">
              <button
                onClick={onRequestQuote}
                className="xn-btn-navy text-xs uppercase tracking-wider px-4 sm:px-5 py-2.5 group"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={onExploreProducts}
                className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2.5 text-xs font-semibold text-xennov-navy border border-xennov-grey-border hover:border-xennov-blue bg-white transition-colors uppercase tracking-wider"
              >
                <span>Explore Catalog Divisions</span>
              </button>
            </div>
          </div>

          {/* Right Column: Clean Enterprise Corporate Credentials & Verification Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="border border-xennov-grey-border bg-white shadow-sm flex flex-col h-full">
              
              {/* Header Strip */}
              <div className="bg-xennov-navy-dark text-white p-5 border-b border-slate-800">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="text-[10px] font-mono font-bold tracking-widest text-xennov-cyan uppercase">
                    Procurement Infrastructure
                  </div>
                  <span className="text-[10px] bg-white/10 text-slate-300 font-mono px-2 py-0.5 border border-white/10">
                    Karnataka, India
                  </span>
                </div>
                <h3 className="text-base font-bold text-white leading-snug">
                  Operational &amp; Sourcing Framework
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Built to meet demanding research, industrial QA/QC, and institutional standards.
                </p>
              </div>

              {/* 4 Pillars List */}
              <div className="p-5 sm:p-6 space-y-4 divide-y divide-xennov-grey-border/60 flex-1">
                {credentials.map((cred, idx) => {
                  const Icon = cred.icon;
                  return (
                    <div key={cred.title} className={`${idx !== 0 ? 'pt-4' : ''} flex items-start gap-3.5`}>
                      <div className="w-8 h-8 rounded-none bg-xennov-grey border border-xennov-grey-border text-xennov-navy flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-xennov-blue" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold text-xennov-navy">
                          {cred.title}
                        </h4>
                        <p className="text-[11px] text-slate-600 leading-relaxed">
                          {cred.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Operational Hub Box */}
              <div className="p-4 bg-slate-50 border-t border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-xennov-navy text-xennov-cyan flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                      Headquarters &amp; Distribution
                    </div>
                    <div className="text-xs font-bold text-xennov-navy truncate">
                      Kamakshipalya, Magadi Main Road, Bangalore 560079
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5">
                      ACTIVE SOURCING
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
