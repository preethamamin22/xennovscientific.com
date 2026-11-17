import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageSquare, Clock, ShieldCheck, Upload, FileText, X } from 'lucide-react';
import { productCategories } from '../data/categories';
import { QuoteFormData } from '../types';

interface QuoteSectionProps {
  initialData?: Partial<QuoteFormData>;
}

type FormErrors = Partial<Record<keyof QuoteFormData, string>>;

export const QuoteSection: React.FC<QuoteSectionProps> = ({ initialData }) => {
  const EMPTY: QuoteFormData = {
    fullName: '',
    organisation: '',
    designation: '',
    email: '',
    phone: '',
    city: '',
    category: '',
    productName: '',
    brandPreference: '',
    catalogNumber: '',
    specifications: '',
    quantity: '',
    message: '',
    fileName: ''
  };

  const [form, setForm] = useState<QuoteFormData>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  // Sync when initialData changes from external clicks
  useEffect(() => {
    if (initialData) {
      setForm(prev => ({
        ...prev,
        ...initialData,
        category: initialData.category || prev.category,
        productName: initialData.productName || prev.productName,
        catalogNumber: initialData.catalogNumber || prev.catalogNumber
      }));
    }
  }, [initialData]);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.fullName.trim()) e.fullName = 'Full Name is required.';
    if (!form.organisation.trim()) e.organisation = 'Organisation or institution name is required.';
    if (!form.email.trim()) {
      e.email = 'Business email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Enter a valid business email address.';
    }
    if (!form.phone.trim()) {
      e.phone = 'Phone number is required.';
    } else if (!/^[0-9+\s\-()]{7,18}$/.test(form.phone)) {
      e.phone = 'Enter a valid contact number.';
    }
    if (!form.city.trim()) e.city = 'City / State is required.';
    if (!form.category) e.category = 'Please select a product division or service category.';
    if (!form.message.trim() && !form.productName?.trim() && !uploadedFile) {
      e.message = 'Please provide product details, specifications, or attach a list.';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 15 * 1024 * 1024) {
        alert('File size exceeds 15 MB limit. Please upload a smaller file.');
        return;
      }
      setUploadedFile(file);
      setForm(prev => ({ ...prev, fileName: file.name }));
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    setForm(prev => ({ ...prev, fileName: '' }));
  };

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    // Simulate structured RFQ capture ready for backend integration
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const resetForm = () => {
    setForm(EMPTY);
    setErrors({});
    setUploadedFile(null);
    setSubmitted(false);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello XenNov Scientific, I would like to request a quotation for: ${form.productName || form.category || 'Laboratory Supplies'} (Organisation: ${form.organisation || 'N/A'}).`
    );
    window.open(`https://wa.me/918217524813?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="quote" className="py-20 lg:py-24 bg-white border-t border-xennov-grey-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Context Column */}
          <div className="lg:col-span-4">
            <div className="xn-label mb-3">B2B Requisition &amp; RFQ</div>
            <div className="xn-rule mb-5" />
            <h2 className="xn-section-heading mb-4">
              Request a Formal Quotation
            </h2>
            <p className="text-sm text-xennov-text-muted leading-relaxed mb-8">
              Submit your product list, specification requirements, or institutional tender enquiries. XenNov's technical specialists verify manufacturer availability and prepare official commercial proposals.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 p-4 border border-xennov-grey-border bg-xennov-grey">
                <div className="w-9 h-9 bg-xennov-cyan-light border border-xennov-grey-border flex items-center justify-center text-xennov-blue shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[13px] font-bold text-xennov-navy">Prompt Commercial Quotation</div>
                  <div className="text-xs text-xennov-text-muted mt-0.5">Formal pricing with delivery timelines, batch CoA availability, and warranty terms.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 border border-xennov-grey-border bg-xennov-grey">
                <div className="w-9 h-9 bg-xennov-cyan-light border border-xennov-grey-border flex items-center justify-center text-xennov-blue shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[13px] font-bold text-xennov-navy">Institutional GST Invoicing</div>
                  <div className="text-xs text-xennov-text-muted mt-0.5">Compliant documentation for research grants, university departments, and corporates.</div>
                </div>
              </div>
            </div>

            {/* WhatsApp Box */}
            <div className="border border-emerald-200 bg-emerald-50/70 p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">Fast Desk Assistance</div>
                  <div className="text-sm font-bold text-emerald-950">WhatsApp Procurement Desk</div>
                </div>
              </div>
              <p className="text-xs text-slate-600 mb-3.5 leading-relaxed">
                Connect directly with our desk for urgent stock inquiries, price estimates, and technical guidance at <a href="tel:+918217524813" className="font-bold text-emerald-800 hover:underline">+91 82175 24813</a>.
              </p>
              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Start WhatsApp Conversation</span>
              </button>
            </div>
          </div>

          {/* Right RFQ Form Column */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-xennov-grey-border shadow-card p-6 sm:p-8">
              
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-300">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-extrabold text-xennov-navy mb-2">Requisition Logged Successfully</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                    Thank you, <strong className="text-xennov-navy">{form.fullName}</strong>. Your enquiry for <strong className="text-xennov-navy">{form.productName || form.category}</strong> on behalf of <strong className="text-xennov-navy">{form.organisation}</strong> has been received by XenNov Scientific.
                  </p>

                  <div className="bg-xennov-grey border border-xennov-grey-border p-4 text-left text-xs max-w-md mx-auto space-y-2 mb-6">
                    <div className="font-bold text-xennov-navy border-b border-xennov-grey-border pb-1">
                      Enquiry Summary:
                    </div>
                    <div><span className="text-slate-500">Contact:</span> {form.email} &bull; {form.phone}</div>
                    <div><span className="text-slate-500">Location:</span> {form.city}</div>
                    {form.productName && <div><span className="text-slate-500">Item:</span> {form.productName}</div>}
                    {form.catalogNumber && <div><span className="text-slate-500">Cat No:</span> {form.catalogNumber}</div>}
                    {form.quantity && <div><span className="text-slate-500">Quantity:</span> {form.quantity}</div>}
                    {uploadedFile && <div><span className="text-slate-500">Attachment:</span> {uploadedFile.name} ({(uploadedFile.size / 1024).toFixed(1)} KB)</div>}
                  </div>

                  <div className="p-3 bg-amber-50 border border-amber-200 text-xs text-amber-800 text-left max-w-md mx-auto mb-6">
                    <strong>Integration Note:</strong> Form data validated on client. Connect this handler to your backend API or transactional email service (e.g. EmailJS, Resend, or corporate SMTP) to route directly to <code>info.xennov@gmail.com</code>.
                  </div>

                  <button
                    onClick={resetForm}
                    className="xn-btn-navy text-xs px-5 py-2.5"
                  >
                    <span>Submit Another Requisition</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-xennov-grey-border mb-2">
                    <div>
                      <h3 className="text-base font-extrabold text-xennov-navy">Commercial RFQ Specification Form</h3>
                      <p className="text-xs text-slate-500">Fields marked with an asterisk (*) are required</p>
                    </div>
                    {form.catalogNumber && (
                      <span className="hidden sm:inline-block text-[11px] font-mono bg-xennov-cyan-light text-xennov-blue px-2.5 py-1 border border-xennov-grey-border font-bold">
                        Prefilled: {form.catalogNumber}
                      </span>
                    )}
                  </div>

                  {/* Row 1: Name & Designation */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-xennov-navy mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Dr. / Mr. / Ms. Name"
                        value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        className={`w-full px-3.5 py-2.5 border text-xs bg-white focus:outline-none transition-colors ${
                          errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-xennov-grey-border focus:border-xennov-blue'
                        }`}
                      />
                      {errors.fullName && <p className="mt-1 text-xs text-red-600 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-xennov-navy mb-1.5">
                        Designation / Role <span className="text-slate-400 font-normal">(optional)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Principal Investigator / Purchase Officer"
                        value={form.designation}
                        onChange={(e) => setForm({ ...form, designation: e.target.value })}
                        className="w-full px-3.5 py-2.5 border border-xennov-grey-border text-xs bg-white focus:outline-none focus:border-xennov-blue transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Organisation & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-xennov-navy mb-1.5">
                        Organisation / University / Hospital *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. IISc / Biocon / Apollo Hospitals"
                        value={form.organisation}
                        onChange={(e) => setForm({ ...form, organisation: e.target.value })}
                        className={`w-full px-3.5 py-2.5 border text-xs bg-white focus:outline-none transition-colors ${
                          errors.organisation ? 'border-red-400 bg-red-50/20' : 'border-xennov-grey-border focus:border-xennov-blue'
                        }`}
                      />
                      {errors.organisation && <p className="mt-1 text-xs text-red-600 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.organisation}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-xennov-navy mb-1.5">
                        City &amp; State *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Bengaluru, Karnataka"
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                        className={`w-full px-3.5 py-2.5 border text-xs bg-white focus:outline-none transition-colors ${
                          errors.city ? 'border-red-400 bg-red-50/20' : 'border-xennov-grey-border focus:border-xennov-blue'
                        }`}
                      />
                      {errors.city && <p className="mt-1 text-xs text-red-600 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.city}</p>}
                    </div>
                  </div>

                  {/* Row 3: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-xennov-navy mb-1.5">
                        Official / Institutional Email *
                      </label>
                      <input
                        type="email"
                        placeholder="name@organisation.edu / .com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 border text-xs bg-white focus:outline-none transition-colors ${
                          errors.email ? 'border-red-400 bg-red-50/20' : 'border-xennov-grey-border focus:border-xennov-blue'
                        }`}
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-600 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-xennov-navy mb-1.5">
                        Contact Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={`w-full px-3.5 py-2.5 border text-xs bg-white focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-400 bg-red-50/20' : 'border-xennov-grey-border focus:border-xennov-blue'
                        }`}
                      />
                      {errors.phone && <p className="mt-1 text-xs text-red-600 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Row 4: Product Category & Specific Product Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-xennov-navy mb-1.5">
                        Product Division / Category *
                      </label>
                      <select
                        value={form.category}
                        onChange={(e) => setForm({ ...form, category: e.target.value })}
                        className={`w-full px-3.5 py-2.5 border text-xs bg-white focus:outline-none transition-colors ${
                          errors.category ? 'border-red-400 bg-red-50/20' : 'border-xennov-grey-border focus:border-xennov-blue'
                        }`}
                      >
                        <option value="">Select a division or service...</option>
                        <optgroup label="12 Product Divisions">
                          {productCategories.map(c => (
                            <option key={c.id} value={c.title}>
                              {c.number}. {c.title}
                            </option>
                          ))}
                        </optgroup>
                        <optgroup label="Procurement Solutions & Services">
                          <option value="Product Sourcing & Procurement">Product Sourcing &amp; Procurement</option>
                          <option value="Institutional & Bulk Procurement">Institutional &amp; Bulk Procurement</option>
                          <option value="Laboratory Equipment Solutions">Laboratory Equipment Solutions</option>
                          <option value="Laboratory Setup & Infrastructure">Laboratory Setup &amp; Infrastructure</option>
                          <option value="Custom Product Sourcing">Custom Product Sourcing</option>
                          <option value="Manufacturer & Distribution Partnerships">Manufacturer &amp; Distribution Partnerships</option>
                        </optgroup>
                        <option value="Other Consolidated Requisition">Other / Multi-Category List</option>
                      </select>
                      {errors.category && <p className="mt-1 text-xs text-red-600 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.category}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-xennov-navy mb-1.5">
                        Product Name / Model <span className="text-slate-400 font-normal">(where known)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 2 mL Screw-Cap Tube / C18 Column"
                        value={form.productName}
                        onChange={(e) => setForm({ ...form, productName: e.target.value })}
                        className="w-full px-3.5 py-2.5 border border-xennov-grey-border text-xs bg-white focus:outline-none focus:border-xennov-blue transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 5: Brand Preference, Cat Number, Quantity */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-xennov-navy mb-1.5">
                        Brand / Manufacturer Preference
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Any / Thermo / Tarsons / Merck"
                        value={form.brandPreference}
                        onChange={(e) => setForm({ ...form, brandPreference: e.target.value })}
                        className="w-full px-3.5 py-2.5 border border-xennov-grey-border text-xs bg-white focus:outline-none focus:border-xennov-blue transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-xennov-navy mb-1.5">
                        Catalogue Number / SKU
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. XN-SCT-200C"
                        value={form.catalogNumber}
                        onChange={(e) => setForm({ ...form, catalogNumber: e.target.value })}
                        className="w-full px-3.5 py-2.5 border border-xennov-grey-border text-xs bg-white focus:outline-none focus:border-xennov-blue transition-colors font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-xennov-navy mb-1.5">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 10 packs / 2 units / monthly"
                        value={form.quantity}
                        onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                        className="w-full px-3.5 py-2.5 border border-xennov-grey-border text-xs bg-white focus:outline-none focus:border-xennov-blue transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 6: Required Specifications / Message */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-xennov-navy mb-1.5">
                      Required Specifications / Dimensions / Delivery Details *
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Please specify temperature range, sterility, pack size, technical standards, or specific grant billing requirements..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`w-full px-3.5 py-2.5 border text-xs bg-white focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-red-400 bg-red-50/20' : 'border-xennov-grey-border focus:border-xennov-blue'
                      }`}
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-600 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</p>}
                  </div>

                  {/* Row 7: Upload RFQ / Product List (PDF, XLSX, DOCX) */}
                  <div className="p-4 bg-xennov-grey border border-dashed border-slate-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-bold text-xennov-navy">
                          <Upload className="w-4 h-4 text-xennov-blue" />
                          <span>Attach RFQ Document, Bill of Materials (BOM) or Tender Spec</span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Supported formats: PDF, XLSX, XLS, DOCX, CSV or Images (Max 15 MB)
                        </p>
                      </div>

                      {uploadedFile ? (
                        <div className="flex items-center gap-2 bg-white px-3 py-1.5 border border-slate-200 text-xs">
                          <FileText className="w-4 h-4 text-xennov-blue" />
                          <span className="font-medium text-slate-700 max-w-[150px] truncate">{uploadedFile.name}</span>
                          <button
                            type="button"
                            onClick={removeFile}
                            className="text-red-500 hover:text-red-700 ml-1"
                            title="Remove attached file"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <label className="shrink-0 cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-300 hover:border-xennov-blue text-xs font-semibold text-xennov-navy transition-colors">
                          <Upload className="w-3.5 h-3.5" />
                          <span>Select Document</span>
                          <input
                            type="file"
                            className="hidden"
                            accept=".pdf,.xlsx,.xls,.docx,.doc,.csv,.png,.jpg"
                            onChange={handleFileChange}
                          />
                        </label>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-xennov-blue hover:bg-xennov-blue-dark text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md disabled:opacity-70"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Validating &amp; Recording RFQ...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Requisition for Official Quotation</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    Your enquiry details are kept confidential under institutional trade privacy. No unverified spam or third-party sharing.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
