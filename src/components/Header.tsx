import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, ArrowRight, Phone, Mail, MapPin, Search } from 'lucide-react';
import { productCategories } from '../data/categories';
import { Logo } from './Logo';

interface HeaderProps {
  onSelectCategory?: (categoryTitle: string) => void;
  onRequestQuote?: () => void;
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSelectCategory, onRequestQuote, onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileOpen(false);
    setIsDropdownOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCategoryClick = (categoryTitle: string) => {
    setIsDropdownOpen(false);
    setIsMobileOpen(false);
    onSelectCategory?.(categoryTitle);
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openDropdown = () => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setIsDropdownOpen(true);
  };
  const closeDropdown = () => {
    dropdownTimer.current = setTimeout(() => setIsDropdownOpen(false), 140);
  };

  const NAV_LINKS = [
    { label: 'Products', id: 'products', hasDropdown: true },
    { label: 'Divisions', id: 'divisions' },
    { label: 'Applications', id: 'applications' },
    { label: 'Brands', id: 'brands' },
    { label: 'Industries', id: 'industries' },
    { label: 'Solutions', id: 'solutions' },
    { label: 'Resources', id: 'resources' },
    { label: 'About Us', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      {/* Utility Top Strip */}
      <div className="bg-xennov-navy-dark text-slate-300 text-[11px] hidden lg:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-xennov-cyan shrink-0" />
              Kamakshipalya, Bangalore 560079
            </span>
            <span className="text-slate-600">|</span>
            <a href="mailto:info.xennov@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3 h-3 text-xennov-cyan shrink-0" />
              info.xennov@gmail.com
            </a>
            <span className="text-slate-600">|</span>
            <a href="tel:+918217524813" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3 h-3 text-xennov-cyan shrink-0" />
              +91 82175 24813
            </a>
          </div>
          <div className="flex items-center gap-6 text-slate-400">
            <button onClick={() => scrollTo('quote')} className="hover:text-white transition-colors">Request a Quote</button>
            <span className="text-slate-700">|</span>
            <button onClick={() => scrollTo('resources')} className="hover:text-white transition-colors">Datasheets &amp; Guides</button>
            <span className="text-slate-700">|</span>
            <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors">Contact Desk</button>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className={`sticky top-0 z-40 w-full bg-white transition-all duration-200 ${
        isScrolled ? 'shadow-header' : 'border-b border-xennov-grey-border'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[68px]">

            {/* Logo */}
            <button
              onClick={() => scrollTo('hero')}
              className="flex items-center shrink-0 group focus:outline-none"
              aria-label="XenNov Scientific – Home"
            >
              <Logo variant="light" size="md" />
            </button>

            {/* Center Navigation */}
            <nav className="hidden xl:flex items-center h-full space-x-1" aria-label="Main navigation">
              
              {/* Products Mega Dropdown */}
              <div
                className="relative h-full flex items-center"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <button
                  onClick={() => scrollTo('products')}
                  className={`flex items-center gap-1 px-3 h-full text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors ${
                    isDropdownOpen
                      ? 'text-xennov-blue border-xennov-blue'
                      : 'text-slate-600 border-transparent hover:text-xennov-navy hover:border-xennov-grey-border'
                  }`}
                >
                  Products
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-xennov-blue' : 'text-slate-400'}`} />
                </button>

                {isDropdownOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[780px] mt-0 z-50 animate-in fade-in duration-100"
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                  >
                    <div className="bg-white border-t-2 border-xennov-blue shadow-dropdown border-x border-b border-xennov-grey-border">
                      <div className="px-6 py-3 bg-xennov-grey border-b border-xennov-grey-border flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-xennov-blue">
                          12 Core Scientific Product Divisions
                        </span>
                        <button
                          onClick={() => scrollTo('products')}
                          className="text-xs font-semibold text-xennov-blue hover:text-xennov-navy flex items-center gap-1 group"
                        >
                          View Full Taxonomy
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-0 p-3 max-h-[380px] overflow-y-auto">
                        {productCategories.map(cat => (
                          <button
                            key={cat.id}
                            onClick={() => handleCategoryClick(cat.title)}
                            className="flex items-start gap-2.5 px-3 py-2 text-left hover:bg-xennov-grey group transition-colors"
                          >
                            <span className="w-5 h-5 bg-xennov-cyan-light border border-xennov-grey-border text-xennov-blue text-[9px] font-black font-mono flex items-center justify-center shrink-0 mt-0.5">
                              {String(cat.number).padStart(2, '0')}
                            </span>
                            <div>
                              <div className="text-[11px] font-bold text-xennov-navy group-hover:text-xennov-blue transition-colors leading-tight">
                                {cat.title}
                              </div>
                              <div className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                                {cat.highlights.slice(0, 2).join(' • ')}
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>

                      <div className="px-6 py-2.5 bg-slate-50 border-t border-xennov-grey-border flex items-center justify-between text-[11px] text-slate-500">
                        <span>Need custom sourcing for specialized reagents or CAS registry items?</span>
                        <button
                          onClick={() => { scrollTo('quote'); setIsDropdownOpen(false); }}
                          className="font-semibold text-xennov-navy hover:text-xennov-blue underline"
                        >
                          Submit Requisition &rarr;
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Other Navigation Links */}
              {NAV_LINKS.filter(l => !l.hasDropdown).map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="px-2.5 h-full text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-xennov-navy border-b-2 border-transparent hover:border-xennov-grey-border transition-colors whitespace-nowrap"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Global Search Button */}
              <button
                onClick={onOpenSearch}
                className="flex items-center gap-2 px-3 py-2 border border-xennov-grey-border hover:border-xennov-blue text-slate-500 hover:text-xennov-navy bg-slate-50 hover:bg-white text-xs transition-colors"
                title="Search products, catalogue numbers, brands (Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-xennov-blue" />
                <span className="hidden xl:inline">Search Catalogue...</span>
              </button>

              <button
                onClick={() => onRequestQuote?.()}
                className="xn-btn-primary text-xs uppercase tracking-wider px-4 py-2.5"
              >
                Request a Quote
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onOpenSearch}
                className="p-2 text-slate-600 hover:text-xennov-navy"
                aria-label="Open search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => onRequestQuote?.()}
                className="px-3 py-1.5 bg-xennov-blue text-white text-xs font-bold uppercase tracking-wider"
              >
                Quote
              </button>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="p-2 text-xennov-navy hover:bg-slate-100"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {isMobileOpen && (
          <div className="lg:hidden border-t border-xennov-grey-border bg-white shadow-lg max-h-[85vh] overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
              <button onClick={() => scrollTo('hero')} className="block w-full text-left px-3 py-2.5 text-sm font-semibold text-xennov-navy hover:bg-xennov-grey border-b border-slate-100">
                Home
              </button>

              <div>
                <div className="px-3 pt-3 pb-1 text-[10px] font-bold uppercase tracking-widest text-xennov-blue">
                  12 Product Divisions
                </div>
                <div className="grid grid-cols-1 gap-0.5">
                  {productCategories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryClick(cat.title)}
                      className="flex items-center gap-2 w-full text-left px-3 py-1.5 text-xs text-slate-600 hover:text-xennov-blue hover:bg-xennov-grey"
                    >
                      <span className="text-[9px] font-mono font-bold text-xennov-blue w-4">{String(cat.number).padStart(2, '0')}</span>
                      <span className="truncate">{cat.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              {NAV_LINKS.filter(l => !l.hasDropdown).map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="block w-full text-left px-3 py-2.5 text-sm font-semibold text-xennov-navy hover:bg-xennov-grey border-t border-slate-100"
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-3 border-t border-xennov-grey-border">
                <button
                  onClick={() => { onRequestQuote?.(); setIsMobileOpen(false); }}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-xennov-blue text-white text-xs font-bold uppercase tracking-wider"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
