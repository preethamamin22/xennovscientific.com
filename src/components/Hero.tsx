import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Send, AlertCircle, MessageSquare } from 'lucide-react';
import { productCategories } from '../data/categories';
import { QuoteFormData } from '../types';

interface HeroProps {
  onExploreProducts: () => void;
  onRequestQuote: () => void;
  onExploreBrands: () => void;
  onSubmitQuote?: (data: QuoteFormData) => void;
  onPerformSearch?: (term: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onRequestQuote,
  onExploreBrands,
  onSubmitQuote,
  onPerformSearch
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    organisation: '',
    email: '',
    phone: '',
    city: '',
    category: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const keyObjectives = [
    'Comprehensive scientific portfolio spanning 12 specialized laboratory divisions',
    'Verified manufacturer sourcing with batch Certificate of Analysis (CoA) traceability',
    'Institutional procurement & rate contract support for universities, pharma & hospitals',
    'Fast-response technical quoting and Bengaluru-based distribution coordination'
  ];

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<Record<keyof QuoteFormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.organisation.trim()) newErrors.organisation = 'Organisation is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid business email required';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.category) newErrors.category = 'Select a division';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
    if (onSubmitQuote) {
      onSubmitQuote(formData);
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello XenNov Scientific, I would like to inquire about laboratory procurement solutions for ${formData.organisation || 'my organization'}.`
    );
    window.open(`https://wa.me/918217524813?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="hero" className="relative bg-xennov-navy-dark text-white border-b border-slate-800">
      {/* Subtle clean scientific grid pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #38B6D9 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Thermo Fisher-style 2-Column Landing Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Authoritative Content & Objectives */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Breadcrumb Eyebrow */}
            <div className="inline-flex items-center gap-2 text-[9px] sm:text-[10px] md:text-[11px] font-bold tracking-wider sm:tracking-[0.18em] uppercase text-xennov-cyan bg-white/5 border border-white/10 px-2.5 sm:px-3 py-1 max-w-full">
              <span className="leading-normal">SCIENTIFIC PRODUCTS &bull; LABORATORY EQUIPMENT &bull; PROCUREMENT SOLUTIONS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[46px] font-black text-white leading-[1.15] tracking-tight">
              Advancing Science.{' '}
              <span className="text-xennov-cyan block sm:inline">Enabling Discovery.</span>
            </h1>

            {/* Supporting Heading */}
            <h2 className="text-base sm:text-lg font-semibold text-slate-200 leading-snug">
              Your One-Stop Scientific &amp; Laboratory Solutions Partner.
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl font-normal">
              Discover a comprehensive range of scientific instruments, laboratory equipment, chemicals, reagents, research consumables, and diagnostic solutions. XenNov Scientific connects research institutions, biotechnology firms, pharmaceutical manufacturers, and clinical laboratories across India with verified products and structured procurement support.
            </p>

            {/* Thermo Fisher-style "Key Capabilities" / Learning Objectives Box */}
            <div className="bg-white/5 border border-white/15 p-5 space-y-3">
              <div className="text-[10px] font-bold uppercase tracking-widest text-xennov-cyan">
                Key Procurement Capabilities:
              </div>
              <ul className="space-y-2.5">
                {keyObjectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-xennov-cyan shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreProducts}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-xennov-blue hover:bg-xennov-blue-dark text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Explore 12 Divisions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onExploreBrands}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-transparent hover:bg-white/10 text-slate-300 hover:text-white text-xs font-semibold uppercase tracking-wider border border-white/30 transition-colors"
              >
                <span>Brand Directory</span>
              </button>
            </div>

            {/* Three Institutional Trust Badges */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-3 text-slate-300">
              <div className="text-[11px]">
                <strong className="block text-white font-bold">12 Divisions</strong>
                <span className="text-[10px] text-slate-400">Complete Taxonomy</span>
              </div>
              <div className="text-[11px]">
                <strong className="block text-white font-bold">Pan-India Support</strong>
                <span className="text-[10px] text-slate-400">Bengaluru Hub</span>
              </div>
              <div className="text-[11px]">
                <strong className="block text-white font-bold">GST Invoicing</strong>
                <span className="text-[10px] text-slate-400">Grant &amp; Tender Ready</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean, High-Converting Quotation Form (Thermo Fisher Form Card) */}
          <div className="lg:col-span-5">
            <div className="bg-white text-xennov-text p-6 sm:p-7 border border-xennov-grey-border shadow-2xl">
              
              <div className="border-b border-xennov-grey-border pb-3 mb-4">
                <div className="text-[10px] font-bold uppercase tracking-widest text-xennov-blue">
                  Commercial Quotation &bull; RFQ
                </div>
                <h3 className="text-lg font-black text-xennov-navy leading-tight mt-0.5">
                  Request a Formal Quote
                </h3>
                <p className="text-[11px] text-xennov-text-muted mt-0.5">
                  Connect with our Bengaluru procurement desk for pricing and availability.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-300">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-xennov-navy">Requisition Received</h4>
                  <p className="text-xs text-slate-600 max-w-xs mx-auto">
                    Thank you. Your request has been logged. Our technical procurement desk will review your specifications and contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="xn-btn-navy text-xs px-4 py-2 mt-2"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleHeroSubmit} noValidate className="space-y-3.5">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-xennov-navy mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Dr. / Mr. / Ms. Name"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3 py-2 text-xs border bg-slate-50 focus:bg-white focus:outline-none transition-colors ${
                        errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-xennov-grey-border focus:border-xennov-blue'
                      }`}
                    />
                    {errors.fullName && <p className="text-[10px] text-red-600 mt-0.5">{errors.fullName}</p>}
                  </div>

                  {/* Organisation */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-xennov-navy mb-1">
                      Organisation / University / Hospital *
                    </label>
                    <input
                      type="text"
                      placeholder="Institution or Company Name"
                      value={formData.organisation}
                      onChange={e => setFormData({ ...formData, organisation: e.target.value })}
                      className={`w-full px-3 py-2 text-xs border bg-slate-50 focus:bg-white focus:outline-none transition-colors ${
                        errors.organisation ? 'border-red-400 bg-red-50/20' : 'border-xennov-grey-border focus:border-xennov-blue'
                      }`}
                    />
                    {errors.organisation && <p className="text-[10px] text-red-600 mt-0.5">{errors.organisation}</p>}
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-xennov-navy mb-1">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        placeholder="name@institution.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3 py-2 text-xs border bg-slate-50 focus:bg-white focus:outline-none transition-colors ${
                          errors.email ? 'border-red-400 bg-red-50/20' : 'border-xennov-grey-border focus:border-xennov-blue'
                        }`}
                      />
                      {errors.email && <p className="text-[10px] text-red-600 mt-0.5">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-xennov-navy mb-1">
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-3 py-2 text-xs border bg-slate-50 focus:bg-white focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-400 bg-red-50/20' : 'border-xennov-grey-border focus:border-xennov-blue'
                        }`}
                      />
                      {errors.phone && <p className="text-[10px] text-red-600 mt-0.5">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Product Category Dropdown */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-xennov-navy mb-1">
                      Product Division / Service Interest *
                    </label>
                    <select
                      value={formData.category}
                      onChange={e => setFormData({ ...formData, category: e.target.value })}
                      className={`w-full px-3 py-2 text-xs border bg-slate-50 focus:bg-white focus:outline-none transition-colors ${
                        errors.category ? 'border-red-400 bg-red-50/20' : 'border-xennov-grey-border focus:border-xennov-blue'
                      }`}
                    >
                      <option value="">Select a scientific division...</option>
                      {productCategories.map(c => (
                        <option key={c.id} value={c.title}>
                          {c.number}. {c.title}
                        </option>
                      ))}
                      <option value="Institutional & Bulk Procurement">Institutional &amp; Bulk Procurement</option>
                      <option value="Custom Product Sourcing">Custom Product Sourcing</option>
                      <option value="Manufacturer & Distribution Partnerships">Manufacturer &amp; Distribution Partnerships</option>
                    </select>
                    {errors.category && <p className="text-[10px] text-red-600 mt-0.5">{errors.category}</p>}
                  </div>

                  {/* Specifications Message */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-xennov-navy mb-1">
                      Product Details / Cat # / Specifications <span className="text-slate-400 font-normal">(optional)</span>
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Mention product codes, quantities, or technical requirements..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-xennov-grey-border bg-slate-50 focus:bg-white focus:outline-none focus:border-xennov-blue transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-xennov-blue hover:bg-xennov-blue-dark active:bg-xennov-blue text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <span>Submit Quotation Request</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {/* WhatsApp Secondary Link */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Need instant desk verification?</span>
                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="text-emerald-700 hover:text-emerald-800 font-bold inline-flex items-center gap-1"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Desk</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
