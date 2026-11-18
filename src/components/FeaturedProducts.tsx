import React, { useState } from 'react';
import { 
  ArrowRight, Eye, CheckCircle2, Search, Filter, Tag, FileText, 
  LayoutGrid, List, SlidersHorizontal, Package, ShieldCheck, ChevronRight 
} from 'lucide-react';
import { featuredProducts } from '../data/products';
import { ProductItem } from '../types';
import { ProductDetailModal } from './ProductDetailModal';

interface FeaturedProductsProps {
  onSelectProductForQuote: (productName: string, catNumber: string, category: string) => void;
  selectedCategoryFilter?: string;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ 
  onSelectProductForQuote,
  selectedCategoryFilter = 'all'
}) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>(selectedCategoryFilter);
  const [availabilityFilter, setAvailabilityFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const filterCategories = [
    { id: 'all', label: 'All Products (24)' },
    { id: 'laboratory-plasticware-consumables', label: 'Plasticware & Consumables' },
    { id: 'laboratory-equipment-instruments', label: 'Equipment & Cold-Chain' },
    { id: 'molecular-biology-life-sciences', label: 'Molecular Biology & PCR' },
    { id: 'analytical-instruments-chromatography', label: 'Chromatography & Spectroscopy' },
    { id: 'liquid-handling-laboratory-automation', label: 'Liquid Handling' },
    { id: 'laboratory-chemicals-reagents', label: 'Chemicals & Reagents' },
    { id: 'laboratory-safety-cleanroom', label: 'Safety & Cleanroom' }
  ];

  const availabilityOptions = [
    { id: 'all', label: 'All Availability' },
    { id: 'In Stock', label: 'In Stock' },
    { id: 'Available on Enquiry', label: 'Available on Enquiry' },
    { id: 'Quote Required', label: 'Quote Required' }
  ];

  const filtered = featuredProducts.filter(item => {
    const matchesCategory = activeFilter === 'all' || item.categoryId === activeFilter;
    const matchesAvailability = availabilityFilter === 'all' || item.availability === availabilityFilter;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.catalogNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      Object.entries(item.specifications).some(([k, v]) => 
        k.toLowerCase().includes(searchTerm.toLowerCase()) || v.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesAvailability && matchesSearch;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Available on Enquiry':
        return <span className="bg-sky-50 text-sky-800 border border-sky-200 text-[10px] font-semibold px-2 py-0.5 whitespace-nowrap">Available on Enquiry</span>;
      case 'Quote Required':
        return <span className="bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-semibold px-2 py-0.5 whitespace-nowrap">Quote Required</span>;
      case 'In Stock':
        return <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-semibold px-2 py-0.5 whitespace-nowrap">In Stock</span>;
      default:
        return <span className="bg-slate-100 text-slate-700 border border-slate-200 text-[10px] font-semibold px-2 py-0.5 whitespace-nowrap">To Be Confirmed</span>;
    }
  };

  return (
    <section id="products" className="py-16 sm:py-20 bg-white border-b border-xennov-grey-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Prominent Products & Catalogue Title */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 pb-6 border-b border-xennov-grey-border">
          <div className="max-w-3xl">
            <div className="xn-label mb-2">Scientific Products &bull; Verified Catalogue</div>
            <h2 className="xn-section-heading mb-3">
              Scientific Products &amp; Laboratory Supplies
            </h2>
            <p className="xn-section-subheading">
              Browse certified laboratory instruments, research consumables, cold-chain refrigeration units, molecular reagents, chromatography columns, and analytical supplies available for institutional procurement across India.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by product name, SKU or spec..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-slate-300 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:border-xennov-blue transition-colors shadow-inner"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono font-bold text-slate-400 hover:text-xennov-navy"
                >
                  CLEAR
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Filter Pills (Horizontal Scroll on Mobile) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-4 border-b border-slate-100 scrollbar-none">
          {filterCategories.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors border ${
                activeFilter === tab.id
                  ? 'bg-xennov-navy text-white border-xennov-navy shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-xennov-navy hover:text-xennov-navy'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Sub-Filter Controls Bar: Availability Filter + View Mode Toggle + Counter */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 bg-xennov-grey p-3 border border-xennov-grey-border text-xs">
          
          {/* Availability Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 mr-1 hidden sm:inline">
              Availability:
            </span>
            {availabilityOptions.map(opt => (
              <button
                key={opt.id}
                onClick={() => setAvailabilityFilter(opt.id)}
                className={`px-2.5 py-1 text-[11px] font-medium border transition-colors whitespace-nowrap ${
                  availabilityFilter === opt.id
                    ? 'bg-xennov-blue text-white border-xennov-blue'
                    : 'bg-white text-slate-600 border-xennov-grey-border hover:border-slate-300'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Right Controls: Results Count & View Mode */}
          <div className="flex items-center gap-4 ml-auto">
            <span className="text-slate-600 text-[11px]">
              Showing <strong className="text-xennov-navy font-bold">{filtered.length}</strong> of {featuredProducts.length} items
            </span>

            {/* View Mode Toggle */}
            <div className="flex items-center border border-xennov-grey-border bg-white">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 ${viewMode === 'grid' ? 'bg-xennov-grey text-xennov-navy font-bold' : 'text-slate-400 hover:text-slate-700'}`}
                title="Grid View"
                aria-label="Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-1.5 ${viewMode === 'table' ? 'bg-xennov-grey text-xennov-navy font-bold' : 'text-slate-400 hover:text-slate-700'}`}
                title="Table View"
                aria-label="Table View"
              >
                <List className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* ── View 1: Clean Grid Layout ── */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {filtered.map(product => (
              <div
                key={product.id}
                className="bg-white border border-xennov-grey-border hover:border-xennov-blue shadow-sm hover:shadow-md transition-all duration-200 p-5 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* SKU and Status Line */}
                  <div className="flex items-center justify-between gap-2 border-b border-xennov-grey-border/60 pb-2.5">
                    <span className="font-mono text-[11px] font-bold text-xennov-navy bg-xennov-grey px-2 py-0.5 border border-xennov-grey-border">
                      {product.catalogNumber}
                    </span>
                    {getStatusBadge(product.availability)}
                  </div>

                  {/* Category & Title */}
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-xennov-blue font-bold mb-1">
                      {product.category}
                    </div>
                    <h3
                      onClick={() => setSelectedProduct(product)}
                      className="text-xs sm:text-[13px] font-bold text-xennov-navy hover:text-xennov-blue transition-colors cursor-pointer leading-snug"
                    >
                      {product.name}
                    </h3>
                  </div>

                  {/* Short Description */}
                  <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-2">
                    {product.shortDescription}
                  </p>

                  {/* Key Specs Preview (Clean Data List) */}
                  <div className="bg-xennov-grey p-2.5 border border-xennov-grey-border text-[11px] space-y-1">
                    {Object.entries(product.specifications).slice(0, 2).map(([k, v]) => (
                      <div key={k} className="flex items-center justify-between text-slate-600">
                        <span className="font-semibold text-xennov-navy truncate mr-2">{k}:</span>
                        <span className="truncate font-mono text-[10px]">{v}</span>
                      </div>
                    ))}
                  </div>

                  {/* Trust markers */}
                  <div className="flex items-center gap-3 pt-1 text-[10px] text-slate-500 font-mono">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      CoA Available
                    </span>
                    <span>&bull;</span>
                    <span>GST Invoiced</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-3.5 mt-3.5 border-t border-xennov-grey-border/60 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 hover:text-xennov-navy transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-xennov-blue" />
                    <span>Technical Specs</span>
                  </button>
                  <button
                    onClick={() => onSelectProductForQuote(product.name, product.catalogNumber, product.category)}
                    className="xn-btn-primary text-[11px] px-3 py-1.5"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── View 2: High-Density Table / List View (Thermo Fisher Catalogue Table Style) ── */}
        {viewMode === 'table' && (
          <div className="border border-xennov-grey-border overflow-x-auto mb-10 shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-xennov-navy text-white font-mono text-[11px] border-b border-slate-800">
                  <th className="p-3 whitespace-nowrap font-bold">Cat # / SKU</th>
                  <th className="p-3 font-bold min-w-[220px]">Product Name &amp; Overview</th>
                  <th className="p-3 font-bold min-w-[150px]">Category Division</th>
                  <th className="p-3 font-bold min-w-[180px]">Key Specification</th>
                  <th className="p-3 font-bold whitespace-nowrap">Status</th>
                  <th className="p-3 text-right font-bold whitespace-nowrap">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-xennov-grey-border">
                {filtered.map((product, idx) => {
                  const firstSpecKey = Object.keys(product.specifications)[0];
                  const firstSpecVal = firstSpecKey ? product.specifications[firstSpecKey] : 'Standard';
                  return (
                    <tr 
                      key={product.id}
                      className={`hover:bg-xennov-grey transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-xennov-grey/50'}`}
                    >
                      <td className="p-3 font-mono font-bold text-xennov-navy whitespace-nowrap">
                        <span className="bg-xennov-grey px-2 py-0.5 border border-xennov-grey-border">
                          {product.catalogNumber}
                        </span>
                      </td>
                      <td className="p-3">
                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="font-bold text-xennov-navy hover:text-xennov-blue text-left transition-colors"
                        >
                          {product.name}
                        </button>
                        <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {product.shortDescription}
                        </p>
                      </td>
                      <td className="p-3 text-[11px] text-slate-600 font-mono">
                        {product.category}
                      </td>
                      <td className="p-3 text-[11px] text-slate-600 font-mono">
                        <span className="font-semibold text-xennov-navy">{firstSpecKey}:</span> {firstSpecVal}
                      </td>
                      <td className="p-3 whitespace-nowrap">
                        {getStatusBadge(product.availability)}
                      </td>
                      <td className="p-3 text-right whitespace-nowrap space-x-2">
                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="px-2.5 py-1 text-[11px] font-semibold text-slate-600 border border-xennov-grey-border hover:bg-xennov-grey transition-colors"
                        >
                          Specs
                        </button>
                        <button
                          onClick={() => onSelectProductForQuote(product.name, product.catalogNumber, product.category)}
                          className="px-3 py-1 text-[11px] font-semibold text-white bg-xennov-blue hover:bg-xennov-blue-dark transition-colors"
                        >
                          Quote
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="p-12 text-center border border-dashed border-xennov-grey-border bg-xennov-grey mb-10">
            <Package className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-sm font-bold text-xennov-navy mb-1">No products match your filter criteria</h3>
            <p className="text-xs text-slate-500 mb-4">Try clearing your search query or choosing another division.</p>
            <button
              onClick={() => {
                setActiveFilter('all');
                setAvailabilityFilter('all');
                setSearchTerm('');
              }}
              className="xn-btn-navy text-xs px-4 py-2"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Bottom Procurement Help Banner */}
        <div className="bg-xennov-grey border border-xennov-grey-border p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-xennov-navy">
              Looking for non-catalog items, custom chemical grades, or specialized chromatography phases?
            </div>
            <p className="text-[11px] text-slate-600 mt-0.5">
              Our technical procurement specialists leverage direct global sourcing to supply specialized laboratory requisitions.
            </p>
          </div>
          <button
            onClick={() => onSelectProductForQuote('Custom Product Procurement Requisition', 'CUSTOM-RFQ', 'Custom Sourcing')}
            className="xn-btn-primary text-xs whitespace-nowrap px-4 py-2"
          >
            <span>Custom Sourcing Requisition &rarr;</span>
          </button>
        </div>

      </div>

      {/* Individual Technical Product Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onSelectForQuote={onSelectProductForQuote}
      />
    </section>
  );
};
