import React, { useState } from 'react';
import { ArrowRight, Eye, CheckCircle2, Search, Filter, Tag, FileText } from 'lucide-react';
import { featuredProducts } from '../data/products';
import { ProductItem } from '../types';
import { ProductDetailModal } from './ProductDetailModal';

interface FeaturedProductsProps {
  onSelectProductForQuote: (productName: string, catNumber: string, category: string) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onSelectProductForQuote }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filterCategories = [
    { id: 'all', label: 'All Priority Items' },
    { id: 'laboratory-plasticware-consumables', label: 'Plasticware & Consumables' },
    { id: 'laboratory-equipment-instruments', label: 'Equipment & Storage' },
    { id: 'molecular-biology-life-sciences', label: 'Molecular Biology' },
    { id: 'analytical-instruments-chromatography', label: 'Chromatography' },
    { id: 'liquid-handling-laboratory-automation', label: 'Liquid Handling' },
    { id: 'laboratory-chemicals-reagents', label: 'Chemicals & Reagents' }
  ];

  const filtered = featuredProducts.filter(item => {
    const matchesCategory = activeFilter === 'all' || item.categoryId === activeFilter;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.catalogNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
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
    <section id="featured-products" className="py-16 sm:py-20 bg-white border-b border-xennov-grey-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 pb-6 border-b border-xennov-grey-border">
          <div className="max-w-3xl">
            <div className="xn-label mb-2">Verified Sourcing &bull; Priority Catalogue</div>
            <h2 className="xn-section-heading mb-3">
              Featured Verified Scientific Products
            </h2>
            <p className="xn-section-subheading">
              Key catalogue items across laboratory consumables, cold-chain refrigeration, analytical chromatography columns, and molecular reagents.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full lg:w-72 shrink-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products or Cat #..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-xennov-grey-border text-xs bg-slate-50 focus:bg-white focus:outline-none focus:border-xennov-blue transition-colors"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 border-b border-xennov-grey-border scrollbar-none">
          {filterCategories.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors border ${
                activeFilter === tab.id
                  ? 'bg-xennov-navy text-white border-xennov-navy'
                  : 'bg-white text-slate-600 border-xennov-grey-border hover:border-xennov-navy hover:text-xennov-navy'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
          <span>Showing <strong>{filtered.length}</strong> items</span>
          {searchTerm && (
            <button onClick={() => setSearchTerm('')} className="text-xennov-blue hover:underline">
              Clear search
            </button>
          )}
        </div>

        {/* Clean Technical Table/Card Grid Layout (Thermo Fisher Catalogue Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {filtered.map(product => (
            <div
              key={product.id}
              className="bg-white border border-xennov-grey-border hover:border-xennov-blue shadow-sm hover:shadow-md transition-all duration-200 p-5 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* SKU and Status Line */}
                <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
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
                <p className="text-[11px] text-xennov-text-muted leading-relaxed line-clamp-2">
                  {product.shortDescription}
                </p>

                {/* Key Specs Preview (Clean Data List) */}
                <div className="bg-slate-50 p-2.5 border border-slate-200/80 text-[11px] space-y-1">
                  {Object.entries(product.specifications).slice(0, 2).map(([k, v]) => (
                    <div key={k} className="flex items-center justify-between text-slate-600">
                      <span className="font-semibold text-xennov-navy truncate mr-2">{k}:</span>
                      <span className="truncate font-mono text-[10px]">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3.5 mt-3.5 border-t border-xennov-grey-border flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 hover:text-xennov-navy transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-xennov-blue" />
                  <span>Technical Specs</span>
                </button>
                <button
                  onClick={() => onSelectProductForQuote(product.name, product.catalogNumber, product.category)}
                  className="xn-btn-primary text-xs px-3 py-1.5"
                >
                  <span>Request Quote</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Requisition Box */}
        <div className="p-4 sm:p-5 bg-xennov-grey border border-xennov-grey-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-600">
            <strong className="text-xennov-navy block sm:inline mr-1">Institutional Procurement:</strong>
            Have a multi-item tender or departmental requisition list?
          </div>
          <button
            onClick={() => onSelectProductForQuote('Consolidated Requisition / BOM List', 'BULK-RFQ', 'Institutional & Bulk Procurement')}
            className="shrink-0 xn-btn-navy text-xs px-4 py-2"
          >
            <span>Submit RFQ Document / BOM</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 inline" />
          </button>
        </div>

      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onSelectForQuote={onSelectProductForQuote}
      />
    </section>
  );
};
