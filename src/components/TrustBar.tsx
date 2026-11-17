import React from 'react';
import { FlaskConical, Building2, Globe2, Package } from 'lucide-react';

/**
 * TrustBar – Thermo Fisher-style horizontal KPI strip between Hero and About.
 * Shows XenNov's factual operational scope without inventing statistics.
 */
export const TrustBar: React.FC = () => {
  const facts = [
    {
      icon: FlaskConical,
      value: '12',
      label: 'Scientific Divisions',
      sub: 'Instruments, chemicals & consumables',
    },
    {
      icon: Building2,
      value: '9+',
      label: 'Industry Sectors',
      sub: 'From academia to pharma & diagnostics',
    },
    {
      icon: Package,
      value: '6',
      label: 'Service Solutions',
      sub: 'Sourcing, setup, bulk & custom procurement',
    },
    {
      icon: Globe2,
      value: 'India',
      label: 'Procurement Gateway',
      sub: 'Bengaluru-based · Karnataka & beyond',
    },
  ];

  return (
    <div className="bg-xennov-grey border-b border-xennov-grey-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 border-l border-r border-xennov-grey-border">
          {facts.map(({ icon: Icon, value, label, sub }, idx) => (
            <div
              key={label}
              className={`flex items-center gap-2.5 sm:gap-4 p-3.5 sm:px-6 sm:py-5 bg-white sm:bg-transparent ${
                idx % 2 === 0 ? 'border-r border-xennov-grey-border' : ''
              } ${
                idx < 2 ? 'border-b lg:border-b-0 border-xennov-grey-border' : ''
              } ${
                idx === 1 ? 'lg:border-r border-xennov-grey-border' : ''
              } ${
                idx === 2 ? 'lg:border-r border-xennov-grey-border' : ''
              }`}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-50 border border-xennov-grey-border flex items-center justify-center text-xennov-blue shrink-0">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-xennov-blue" />
              </div>
              <div className="min-w-0">
                <div className="text-xl sm:text-2xl font-black text-xennov-navy leading-none tracking-tight">{value}</div>
                <div className="text-[10px] sm:text-[11px] font-bold text-xennov-navy mt-1 leading-tight truncate">{label}</div>
                <div className="text-[9px] sm:text-[10px] text-slate-500 mt-0.5 leading-tight hidden xs:block truncate">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
