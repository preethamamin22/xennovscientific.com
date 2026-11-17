import React from 'react';
import { Mail, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-xennov-grey border-t border-xennov-grey-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-10 sm:mb-12 max-w-3xl">
          <div className="xn-label mb-2 sm:mb-3">Corporate Office &amp; Operations</div>
          <div className="xn-rule mb-4 sm:mb-5" />
          <h2 className="xn-section-heading mb-3 sm:mb-4">Let's Connect.</h2>
          <p className="xn-section-subheading">
            Whether establishing a new laboratory facility, planning departmental procurement, or seeking reliable scientific distribution across Karnataka and India, our team is ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 items-stretch">

          {/* Contact Card */}
          <div className="lg:col-span-2 flex flex-col gap-4 sm:gap-5">

            <div className="bg-white border border-xennov-grey-border shadow-sm p-5 sm:p-6 space-y-5">
              <div>
                <div className="xn-label">Corporate Entity</div>
                <h3 className="text-base sm:text-lg font-extrabold text-xennov-navy mt-1">XenNov Scientific Private Limited</h3>
                <p className="text-[11px] text-xennov-text-muted mt-0.5">Scientific Products, Laboratory Equipment &amp; Research Solutions</p>
              </div>

              <div className="space-y-4 pt-3.5 border-t border-xennov-grey-border">
                {[
                  {
                    icon: MapPin,
                    label: 'Registered Location',
                    value: 'Bengaluru, Karnataka, India',
                    sub: '[Office Address Placeholder – Commercial Facility / Tech Corridor]',
                  },
                  {
                    icon: Mail,
                    label: 'Business Email',
                    value: 'info@xennovscientific.com',
                    sub: 'Commercial Requisitions & Supplier Relations',
                    href: 'mailto:info@xennovscientific.com'
                  },
                  {
                    icon: Phone,
                    label: 'Contact Desk',
                    value: '+91 82175 24813',
                    sub: 'Direct Telephone & WhatsApp Support',
                    href: 'tel:+918217524813'
                  },
                  {
                    icon: Clock,
                    label: 'Operational Hours',
                    value: 'Mon – Sat: 9:00 AM – 6:30 PM IST',
                    sub: 'Sundays & National Holidays: Closed',
                  },
                ].map(({ icon: Icon, label, value, sub, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 bg-xennov-grey border border-xennov-grey-border flex items-center justify-center text-xennov-blue shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-xennov-navy">{label}</div>
                      {href ? (
                        <a href={href} className="text-xs sm:text-sm font-semibold text-xennov-blue hover:text-xennov-navy hover:underline mt-0.5 block break-words">
                          {value}
                        </a>
                      ) : (
                        <div className="text-xs sm:text-sm font-semibold text-xennov-text mt-0.5 break-words">{value}</div>
                      )}
                      <div className="text-[10px] sm:text-xs text-slate-400 italic break-words">{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Note */}
            <div className="bg-white border border-xennov-grey-border p-4 text-[11px] sm:text-xs text-slate-600 leading-relaxed">
              <strong className="text-xennov-navy font-semibold">Institutional Support:</strong> For purchase orders, billing mandates, rate contracts, and vendor registration, address queries to our Bengaluru office.
            </div>
          </div>

          {/* Interactive Google Map Embed Card */}
          <div className="lg:col-span-3 flex flex-col min-h-[320px] sm:min-h-[420px] border border-xennov-grey-border shadow-sm overflow-hidden bg-slate-100 relative">
            <div className="relative flex-1 w-full h-full min-h-[280px]">
              <iframe
                title="XenNov Scientific – Bengaluru Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.88653909243!2d77.49085452814809!3d12.953960000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1716300000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '280px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[20%] contrast-[1.05]"
              />

              {/* Overlay badge */}
              <div className="absolute top-3 left-3 bg-white/95 border border-slate-200 shadow-sm px-2.5 py-1.5 sm:px-3 sm:py-2">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[10px] sm:text-[11px] font-bold text-xennov-navy">Bengaluru Gateway</span>
                </div>
                <div className="text-[9px] sm:text-[10px] text-slate-500">Karnataka, India &bull; Scientific Distribution</div>
              </div>
            </div>

            {/* Map footer */}
            <div className="bg-white border-t border-xennov-grey-border flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-xs text-slate-500">
              <span className="truncate mr-2">Bengaluru, Karnataka &bull; Google Maps</span>
              <a
                href="https://maps.google.com/?q=Bengaluru,Karnataka,India"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xennov-blue hover:text-xennov-navy font-semibold flex items-center gap-1 transition-colors shrink-0"
              >
                <span>Open Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
