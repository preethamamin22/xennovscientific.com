import React from 'react';
import { ArrowRight, Building, CheckCircle2, Handshake, Globe2, ShieldCheck } from 'lucide-react';
import { brandsDirectory } from '../data/brands';

interface BrandsSectionProps {
  onPartnerEnquiry: () => void;
  onBrandSelect: (brandName: string) => void;
}

export const BrandsSection: React.FC<BrandsSectionProps> = ({ onPartnerEnquiry, onBrandSelect }) => {
  return (
    <section id="brands" className="py-20 lg:py-24 bg-white border-b border-xennov-grey-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="xn-label mb-3">Sourcing Network &amp; Portfolio</div>
          <div className="xn-rule mb-5" />
          <h2 className="xn-section-heading mb-4">
            Global Brands. Scientific Excellence.
          </h2>
          <p className="xn-section-subheading">
            Explore scientific manufacturers and brands across laboratory instruments, consumables, reagents, and analytical technologies. XenNov Scientific connects Indian research facilities with verified sourcing channels.
          </p>
        </div>

        {/* Brands Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {brandsDirectory.map(brand => (
            <div
              key={brand.id}
              className="bg-xennov-grey border border-xennov-grey-border p-5 flex flex-col justify-between hover:border-xennov-blue hover:bg-white transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-xennov-blue bg-white border border-xennov-grey-border px-2 py-0.5">
                    {brand.category}
                  </span>
                  <Globe2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-xennov-blue transition-colors" />
                </div>

                <h3 className="text-base font-extrabold text-xennov-navy mb-2 group-hover:text-xennov-blue transition-colors">
                  {brand.name}
                </h3>

                <p className="text-xs text-xennov-text-muted leading-relaxed mb-4">
                  {brand.portfolioArea}
                </p>
              </div>

              <button
                onClick={() => onBrandSelect(brand.name)}
                className="w-full flex items-center justify-between pt-3 border-t border-xennov-grey-border text-xs font-semibold text-xennov-navy group-hover:text-xennov-blue transition-colors"
              >
                <span>Enquire Sourcing</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Become a Brand Partner Box */}
        <div className="bg-gradient-to-r from-xennov-navy via-[#14375e] to-xennov-navy-dark text-white p-8 sm:p-10 border border-slate-700 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xennov-cyan text-xs font-bold uppercase tracking-widest mb-3">
              <Handshake className="w-4 h-4" />
              <span>Manufacturer &amp; Distributor Channel Program</span>
            </div>
            <h3 className="text-2xl font-black text-white mb-2">
              Are you a scientific manufacturer looking to expand your presence in India?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              XenNov Scientific welcomes discussions with scientific manufacturers, authorized distributors, and specialty product companies interested in establishing structured distribution, institutional tender representation, and technical marketing across Bengaluru, Karnataka, and the wider Indian scientific ecosystem.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-xennov-cyan" />
                <span>Institutional Client Access</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-xennov-cyan" />
                <span>Transparent Commercial Reporting</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-xennov-cyan" />
                <span>Tender &amp; Regulatory Compliance</span>
              </div>
            </div>
          </div>

          <div className="shrink-0 flex flex-col gap-3">
            <button
              onClick={onPartnerEnquiry}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-xennov-cyan hover:bg-[#48c3e4] text-xennov-navy font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
            >
              <span>Discuss Partnership</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-[11px] text-slate-400 text-center">
              Direct discussions with XenNov leadership
            </span>
          </div>
        </div>

        {/* Disclaimer Notice per Brief Section 7 & 14 */}
        <div className="mt-6 text-[11px] text-slate-400 leading-relaxed">
          * Prospective sourcing network and industry scope. All third-party trademarks, manufacturer logos, and brand names are property of their respective owners and used strictly for identification of compatible scientific portfolios.
        </div>

      </div>
    </section>
  );
};

