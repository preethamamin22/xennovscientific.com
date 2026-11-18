import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, FlaskConical, Microscope, Beaker } from 'lucide-react';
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger animations after mount
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

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
    if (onSubmitQuote) onSubmitQuote(formData);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello XenNov Scientific, I would like to inquire about laboratory procurement solutions for ${formData.organisation || 'my organization'}.`
    );
    window.open(`https://wa.me/918217524813?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="hero" className="relative bg-white border-b border-xennov-grey-border overflow-hidden">

      {/* Animated red top accent bar */}
      <div className="relative h-1 w-full bg-xennov-grey-border overflow-hidden">
        <div className="xn-bar-sweep" />
      </div>

      {/* Floating background science icons — decorative */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <FlaskConical
          className="absolute text-xennov-blue/[0.04] xn-float-1"
          style={{ width: 160, height: 160, top: '10%', right: '8%' }}
        />
        <Microscope
          className="absolute text-xennov-blue/[0.04] xn-float-2"
          style={{ width: 120, height: 120, top: '50%', right: '22%' }}
        />
        <Beaker
          className="absolute text-xennov-blue/[0.04] xn-float-3"
          style={{ width: 90, height: 90, bottom: '12%', right: '5%' }}
        />
        {/* Soft red circle glow */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-xennov-blue/[0.04] xn-pulse-slow" />
        <div className="absolute -bottom-32 -left-16 w-80 h-80 rounded-full bg-xennov-blue/[0.03] xn-pulse-slow" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Left Column — staggered fade-in-up */}
          <div className="lg:col-span-7 space-y-6">

            {/* Eyebrow */}
            <div
              className={`xn-anim-fade-up inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-xennov-blue ${mounted ? 'xn-anim-visible' : ''}`}
              style={{ transitionDelay: '0ms' }}
            >
              Scientific Products &bull; Laboratory Equipment &bull; Procurement Solutions
            </div>

            {/* Main Headline */}
            <h1
              className={`xn-anim-fade-up text-3xl sm:text-4xl lg:text-[44px] font-black text-xennov-navy leading-[1.12] tracking-tight ${mounted ? 'xn-anim-visible' : ''}`}
              style={{ transitionDelay: '80ms' }}
            >
              Advancing Science.{' '}
              <span className="text-xennov-blue xn-text-shimmer">Enabling Discovery.</span>
            </h1>

            <h2
              className={`xn-anim-fade-up text-base sm:text-lg font-semibold text-xennov-text-muted leading-snug ${mounted ? 'xn-anim-visible' : ''}`}
              style={{ transitionDelay: '160ms' }}
            >
              Your One-Stop Scientific &amp; Laboratory Solutions Partner.
            </h2>

            <p
              className={`xn-anim-fade-up text-sm text-xennov-text-muted leading-relaxed max-w-2xl ${mounted ? 'xn-anim-visible' : ''}`}
              style={{ transitionDelay: '220ms' }}
            >
              Discover a comprehensive range of scientific instruments, laboratory equipment, chemicals, reagents, research consumables, and diagnostic solutions. XenNov Scientific connects research institutions, biotechnology firms, pharmaceutical manufacturers, and clinical laboratories across India with verified products and structured procurement support.
            </p>

            {/* Key Capabilities */}
            <div
              className={`xn-anim-fade-up bg-xennov-grey border border-xennov-grey-border p-5 space-y-3 ${mounted ? 'xn-anim-visible' : ''}`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="text-[11px] font-bold uppercase tracking-widest text-xennov-blue">
                Key Procurement Capabilities:
              </div>
              <ul className="space-y-2.5">
                {keyObjectives.map((obj, i) => (
                  <li
                    key={i}
                    className={`xn-anim-fade-up flex items-start gap-2.5 text-xs text-xennov-text-muted ${mounted ? 'xn-anim-visible' : ''}`}
                    style={{ transitionDelay: `${360 + i * 60}ms` }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-xennov-blue shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div
              className={`xn-anim-fade-up flex flex-wrap items-center gap-3 ${mounted ? 'xn-anim-visible' : ''}`}
              style={{ transitionDelay: '580ms' }}
            >
              <button
                onClick={onExploreProducts}
                className="inline-flex items-center gap-2 px-6 py-3 bg-xennov-blue hover:bg-xennov-blue-dark text-white text-sm font-semibold transition-colors xn-btn-lift"
              >
                Explore 12 Divisions
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onExploreBrands}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-xennov-navy border border-xennov-grey-border hover:border-xennov-blue hover:text-xennov-blue bg-white transition-colors xn-btn-lift"
              >
                Brand Directory
              </button>
            </div>

            {/* Trust Badges */}
            <div
              className={`xn-anim-fade-up pt-4 border-t border-xennov-grey-border flex flex-wrap gap-6 text-sm ${mounted ? 'xn-anim-visible' : ''}`}
              style={{ transitionDelay: '660ms' }}
            >
              <div>
                <strong className="block text-xennov-navy font-bold text-sm">12 Divisions</strong>
                <span className="text-xs text-xennov-text-muted">Complete Taxonomy</span>
              </div>
              <div className="border-l border-xennov-grey-border pl-6">
                <strong className="block text-xennov-navy font-bold text-sm">Pan-India Support</strong>
                <span className="text-xs text-xennov-text-muted">Bengaluru Hub</span>
              </div>
              <div className="border-l border-xennov-grey-border pl-6">
                <strong className="block text-xennov-navy font-bold text-sm">GST Invoicing</strong>
                <span className="text-xs text-xennov-text-muted">Grant &amp; Tender Ready</span>
              </div>
            </div>

          </div>

          {/* Right Column: RFQ Form — slide-in from right */}
          <div
            className={`lg:col-span-5 xn-anim-slide-right ${mounted ? 'xn-anim-visible' : ''}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="bg-white border border-xennov-grey-border shadow-card border-t-4 border-t-xennov-blue">

              <div className="px-6 py-5 border-b border-xennov-grey-border">
                <div className="text-[11px] font-bold uppercase tracking-widest text-xennov-blue mb-1">
                  Commercial Quotation &bull; RFQ
                </div>
                <h3 className="text-xl font-black text-xennov-navy leading-tight">
                  Request a Formal Quote
                </h3>
                <p className="text-xs text-xennov-text-muted mt-1">
                  Connect with our Bengaluru procurement desk for pricing and availability.
                </p>
              </div>

              <div className="px-6 py-5">
                {submitted ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto xn-pop-in">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-xennov-navy">Requisition Received</h4>
                    <p className="text-xs text-xennov-text-muted max-w-xs mx-auto">
                      Thank you. Your request has been logged. Our technical procurement desk will review your specifications and contact you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center gap-2 px-4 py-2 mt-2 bg-xennov-navy text-white text-xs font-semibold hover:bg-xennov-navy-light transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleHeroSubmit} noValidate className="space-y-4">

                    <div>
                      <label className="block text-xs font-semibold text-xennov-navy mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        placeholder="Dr. / Mr. / Ms. Name"
                        value={formData.fullName}
                        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-3 py-2.5 text-sm border focus:outline-none focus:ring-1 transition-all duration-200 ${
                          errors.fullName ? 'border-red-400 focus:ring-red-400' : 'border-xennov-grey-border focus:border-xennov-blue focus:ring-xennov-blue'
                        }`}
                      />
                      {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-xennov-navy mb-1.5">Organisation / University / Hospital *</label>
                      <input
                        type="text"
                        placeholder="Institution or Company Name"
                        value={formData.organisation}
                        onChange={e => setFormData({ ...formData, organisation: e.target.value })}
                        className={`w-full px-3 py-2.5 text-sm border focus:outline-none focus:ring-1 transition-all duration-200 ${
                          errors.organisation ? 'border-red-400 focus:ring-red-400' : 'border-xennov-grey-border focus:border-xennov-blue focus:ring-xennov-blue'
                        }`}
                      />
                      {errors.organisation && <p className="text-xs text-red-600 mt-1">{errors.organisation}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-xennov-navy mb-1.5">Business Email *</label>
                        <input
                          type="email"
                          placeholder="name@institution.com"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full px-3 py-2.5 text-sm border focus:outline-none focus:ring-1 transition-all duration-200 ${
                            errors.email ? 'border-red-400 focus:ring-red-400' : 'border-xennov-grey-border focus:border-xennov-blue focus:ring-xennov-blue'
                          }`}
                        />
                        {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-xennov-navy mb-1.5">Contact Phone *</label>
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full px-3 py-2.5 text-sm border focus:outline-none focus:ring-1 transition-all duration-200 ${
                            errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-xennov-grey-border focus:border-xennov-blue focus:ring-xennov-blue'
                          }`}
                        />
                        {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-xennov-navy mb-1.5">Product Division / Service Interest *</label>
                      <select
                        value={formData.category}
                        onChange={e => setFormData({ ...formData, category: e.target.value })}
                        className={`w-full px-3 py-2.5 text-sm border focus:outline-none focus:ring-1 bg-white transition-all duration-200 ${
                          errors.category ? 'border-red-400 focus:ring-red-400' : 'border-xennov-grey-border focus:border-xennov-blue focus:ring-xennov-blue'
                        }`}
                      >
                        <option value="">Select a scientific division...</option>
                        {productCategories.map(c => (
                          <option key={c.id} value={c.title}>{c.number}. {c.title}</option>
                        ))}
                        <option value="Institutional & Bulk Procurement">Institutional &amp; Bulk Procurement</option>
                        <option value="Custom Product Sourcing">Custom Product Sourcing</option>
                        <option value="Manufacturer & Distribution Partnerships">Manufacturer &amp; Distribution Partnerships</option>
                      </select>
                      {errors.category && <p className="text-xs text-red-600 mt-1">{errors.category}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-xennov-navy mb-1.5">
                        Product Details / Cat # / Specifications <span className="text-xennov-text-muted font-normal">(optional)</span>
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Mention product codes, quantities, or technical requirements..."
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3 py-2.5 text-sm border border-xennov-grey-border focus:outline-none focus:ring-1 focus:border-xennov-blue focus:ring-xennov-blue transition-all duration-200 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-xennov-blue hover:bg-xennov-blue-dark text-white text-sm font-semibold transition-colors xn-btn-lift"
                    >
                      Submit Quotation Request
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="pt-3 border-t border-xennov-grey-border flex items-center justify-between text-xs text-xennov-text-muted">
                      <span>Need instant desk verification?</span>
                      <button
                        type="button"
                        onClick={handleWhatsApp}
                        className="text-emerald-700 hover:text-emerald-800 font-semibold inline-flex items-center gap-1 transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        WhatsApp Desk
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
