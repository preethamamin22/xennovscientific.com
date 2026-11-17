import React from 'react';
import { X, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

export type LegalDocType = 'privacy' | 'terms' | 'disclaimer' | 'shipping' | null;

interface LegalModalProps {
  docType: LegalDocType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ docType, onClose }) => {
  if (!docType) return null;

  const content = {
    privacy: {
      title: 'Privacy Policy',
      subtitle: 'Data Handling & Privacy Under India Digital Personal Data Protection Act (DPDP Act)',
      sections: [
        {
          heading: '1. Information We Collect',
          body: 'XenNov Scientific Private Limited collects institutional procurement details submitted through our website enquiry and RFQ forms, including full name, business or university email, phone number, organisation name, city, product specifications, and uploaded purchase requisitions or bills of materials (BOM).'
        },
        {
          heading: '2. Commercial Purpose & Usage',
          body: 'All captured information is utilized strictly to verify product availability, prepare formal commercial quotations, issue GST-compliant proforma invoices, verify institutional credit eligibility, and coordinate laboratory delivery.'
        },
        {
          heading: '3. Data Security & Non-Disclosure',
          body: 'We do not sell, rent, or trade your contact or requisition data to external marketing agencies. Data is restricted to authorized XenNov technical and sales procurement personnel.'
        },
        {
          heading: '4. Contact for Privacy Inquiries',
          body: 'For data access, correction, or removal requests, please write to our compliance desk at info.xennov@gmail.com with the subject line "Data Privacy Request".'
        }
      ]
    },
    terms: {
      title: 'Terms & Conditions',
      subtitle: 'B2B Quotation, Purchase Orders & Commercial Terms',
      sections: [
        {
          heading: '1. Quotation Validity',
          body: 'All formal quotations issued by XenNov Scientific Private Limited are valid for thirty (30) calendar days from the date of issue, unless otherwise specified in the formal commercial proposal. Prices are subject to revision upon raw material currency fluctuations or manufacturer list updates.'
        },
        {
          heading: '2. Purchase Orders & Institutional Billing',
          body: 'Orders are confirmed upon receipt of a valid Purchase Order (PO) from registered universities, research institutes, hospitals, or corporate entities. Invoicing is conducted in Indian Rupees (INR) under applicable GST regulations.'
        },
        {
          heading: '3. Delivery & Title Transfer',
          body: 'Delivery timelines are communicated in the formal quotation based on verified stock or manufacturer production schedules. Title and risk of loss transfer to the consignee upon delivery by our authorized logistics carrier.'
        },
        {
          heading: '4. Jurisdiction',
          body: 'All commercial transactions and legal matters shall be governed exclusively by the laws of India, subject to the jurisdiction of the competent courts in Bengaluru, Karnataka.'
        }
      ]
    },
    disclaimer: {
      title: 'Website & Regulatory Disclaimer',
      subtitle: 'Product Specifications, Trademarks & Operational Scope',
      sections: [
        {
          heading: '1. Proposed Catalogue & Sourcing Scope',
          body: 'Product descriptions, specifications, and catalogue numbers shown on www.xennovscientific.com represent proposed catalogue categories and procurement sourcing capability. They do not constitute confirmation of instant on-shelf inventory or exclusive authorized distributorship unless explicitly confirmed in a formal quotation.'
        },
        {
          heading: '2. Third-Party Trademarks',
          body: 'All product names, logos, and brands mentioned (such as Thermo Fisher Scientific, Merck, Agilent, Waters, Eppendorf, Tarsons, etc.) are property of their respective owners. Mention on this website is for informational purposes only to designate compatible portfolios.'
        },
        {
          heading: '3. Intended Scientific Use',
          body: 'Products supplied by XenNov Scientific are intended for scientific laboratory research, quality control, or diagnostic procedures as specified by the original manufacturer. Users are responsible for safe handling and compliance with institutional EHS standards.'
        }
      ]
    },
    shipping: {
      title: 'Shipping & Returns Policy',
      subtitle: 'Cold-Chain Logistics, Transit Inspection & Replacement Guidelines',
      sections: [
        {
          heading: '1. Temperature-Controlled Dispatch',
          body: 'Biological enzymes, primers, master mixes, and antibodies requiring -20°C storage are shipped in insulated polystyrene containers with dry ice or validated cold gel packs to maintain thermal integrity during transit.'
        },
        {
          heading: '2. Transit Inspection & Discrepancies',
          body: 'Consignees must inspect shipments upon arrival. Any transit damage, outer packaging compromise, or item discrepancies must be reported in writing within 48 hours of receipt accompanied by photographic evidence and delivery challan notes.'
        },
        {
          heading: '3. Return Criteria',
          body: 'Returns are accepted only for defective products, incorrect catalogue dispatches, or items confirmed non-compliant with manufacturer Certificate of Analysis (CoA). Temperature-sensitive biologicals and custom-synthesized oligonucleotides cannot be returned once delivered in good condition.'
        }
      ]
    }
  }[docType];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
      style={{ background: 'rgba(9, 30, 52, 0.72)', backdropFilter: 'blur(3px)' }}
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-2xl border border-xennov-grey-border shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-xennov-navy-dark text-white px-6 py-4 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-xennov-cyan" />
            <div>
              <h3 className="text-base font-bold text-white">{content.title}</h3>
              <p className="text-[10px] text-slate-400">{content.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close legal modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="text-xs text-slate-500 font-mono border-b border-slate-100 pb-2">
            XenNov Scientific Private Limited &bull; Corporate Governance &bull; Bengaluru, Karnataka
          </div>

          <div className="space-y-5">
            {content.sections.map((s, idx) => (
              <div key={idx} className="space-y-1.5">
                <h4 className="text-xs font-bold text-xennov-navy uppercase tracking-wider">{s.heading}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-xennov-grey border-t border-xennov-grey-border flex items-center justify-between shrink-0">
          <span className="text-[11px] text-slate-500">Official Institutional Disclosure</span>
          <button
            onClick={onClose}
            className="xn-btn-navy text-xs px-4 py-1.5"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
};

