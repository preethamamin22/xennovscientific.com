import React from 'react';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { productCategories } from '../data/categories';
import { LegalDocType } from './LegalModal';

interface FooterProps {
  onOpenLegal?: (type: LegalDocType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-xennov-navy-dark text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14 pb-10">
        
        {/* Main Footer Columns - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-10 border-b border-slate-800">

          {/* Col 1-2: Brand & Contact Placeholders */}
          <div className="sm:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-xennov-navy border border-white/20 flex items-center justify-center">
                <svg viewBox="0 0 36 36" className="w-4 h-4 sm:w-5 sm:h-5" fill="none">
                  <path d="M13 5h10M15 5v9L9 25a4 4 0 003.5 6h11A4 4 0 0027 25L21 14V5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="18" cy="22" r="2" fill="#FFFFFF" opacity="0.9"/>
                  <circle cx="14" cy="27" r="1.2" fill="#FFFFFF" opacity="0.7"/>
                </svg>
              </div>
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-base sm:text-lg font-black text-white">XenNov</span>
                  <span className="text-xs sm:text-sm font-bold text-xennov-cyan">Scientific</span>
                </div>
                <div className="text-[8px] sm:text-[9px] tracking-widest font-semibold text-slate-400 uppercase">Private Limited</div>
              </div>
            </div>

            <p className="text-xs italic text-xennov-cyan font-medium">
              &ldquo;Advancing Science. Enabling Discovery.&rdquo;
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Your One-Stop Scientific &amp; Laboratory Solutions Partner. Connecting research institutions, biotechnology firms, pharmaceutical manufacturers, and clinical laboratories with certified instruments, reagents, and procurement solutions.
            </p>

            <div className="space-y-2 text-xs text-slate-400 pt-2 border-t border-slate-800">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-xennov-cyan shrink-0 mt-0.5" />
                <span className="leading-snug">
                  C-204, Soundarya Kamakshi, Magadi Main Road, Kamakshipalya, Bangalore 560079
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-xennov-cyan shrink-0" />
                <a href="mailto:info.xennov@gmail.com" className="hover:text-white transition-colors">
                  info.xennov@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-xennov-cyan shrink-0" />
                <a href="tel:+918217524813" className="hover:text-white transition-colors">
                  +91 82175 24813
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-white mb-3 sm:mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {[
                ['Home', 'hero'],
                ['Scientific Products', 'products'],
                ['12 Product Divisions', 'divisions'],
                ['Applications & Workflows', 'applications'],
                ['Brands & Sourcing', 'brands'],
                ['Industries We Serve', 'industries'],
                ['Solutions & Services', 'solutions'],
                ['Technical Resources', 'resources'],
                ['About XenNov', 'about'],
                ['Contact & Office', 'contact']
              ].map(([label, id]) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="hover:text-xennov-cyan transition-colors text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollTo('quote')}
                  className="font-bold text-xennov-cyan hover:text-white transition-colors"
                >
                  Request a Quote &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Top Product Divisions */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-white mb-3 sm:mb-4">
              Product Divisions
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {productCategories.slice(0, 8).map(cat => (
                <li key={cat.id}>
                  <button
                    onClick={() => scrollTo('products')}
                    className="hover:text-xennov-cyan transition-colors text-left line-clamp-1 text-[11px]"
                  >
                    {cat.number}. {cat.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollTo('products')}
                  className="text-xennov-blue hover:text-xennov-cyan font-bold text-[11px] mt-1"
                >
                  View All 12 Divisions &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Sectors & Compliance */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-white mb-3 sm:mb-4">
              Industry Sectors
            </h4>
            <ul className="space-y-1.5 text-[11px] text-slate-400 mb-5">
              <li>Academic &amp; Research Institutions</li>
              <li>Biotechnology &amp; Life Sciences</li>
              <li>Pharmaceutical &amp; Biopharma</li>
              <li>Hospitals &amp; Healthcare</li>
              <li>Clinical Diagnostics</li>
              <li>Food, Water &amp; Environment</li>
              <li>Industrial Manufacturing</li>
            </ul>

            <div className="p-3 bg-white/5 border border-white/10 text-[10px] text-slate-400 leading-relaxed">
              <strong className="text-white block mb-0.5">Procurement Partner:</strong>
              Supporting institutional rate contracts, grant billing, and bulk tenders across India.
            </div>
          </div>

        </div>

        {/* Bottom Bar: Responsive Stack */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-[11px] text-slate-500">
          <span className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} XenNov Scientific Private Limited. All rights reserved. &bull; Bengaluru, Karnataka.
          </span>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button onClick={() => onOpenLegal?.('privacy')} className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </button>
            <span>&bull;</span>
            <button onClick={() => onOpenLegal?.('terms')} className="hover:text-slate-300 transition-colors">
              Terms &amp; Conditions
            </button>
            <span>&bull;</span>
            <button onClick={() => onOpenLegal?.('disclaimer')} className="hover:text-slate-300 transition-colors">
              Disclaimer
            </button>
            <span>&bull;</span>
            <button onClick={() => onOpenLegal?.('shipping')} className="hover:text-slate-300 transition-colors">
              Shipping &amp; Returns
            </button>
            <button
              onClick={toTop}
              className="w-7 h-7 bg-white/10 hover:bg-xennov-blue text-white flex items-center justify-center transition-colors ml-1"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
