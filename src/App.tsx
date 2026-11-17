import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { About } from './components/About';
import { ProductDivisions } from './components/ProductDivisions';
import { FeaturedProducts } from './components/FeaturedProducts';
import { ApplicationsSection } from './components/ApplicationsSection';
import { Industries } from './components/Industries';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Solutions } from './components/Solutions';
import { BrandsSection } from './components/BrandsSection';
import { ResourcesSection } from './components/ResourcesSection';
import { QuoteSection } from './components/QuoteSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { LegalModal, LegalDocType } from './components/LegalModal';
import { QuoteFormData } from './types';

export function App() {
  const [rfqInitialData, setRfqInitialData] = useState<Partial<QuoteFormData>>({});
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocType>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Keyboard shortcut Ctrl+K or Cmd+K to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectCategoryForQuote = (categoryTitle: string) => {
    setRfqInitialData({ category: categoryTitle });
    scrollTo('quote');
  };

  const handleSelectProductForQuote = (productName: string, catNumber: string, category: string) => {
    setRfqInitialData({
      productName,
      catalogNumber: catNumber,
      category,
      message: `I would like to request commercial pricing, pack sizes, and availability for ${productName} (Cat #${catNumber}).`
    });
    scrollTo('quote');
  };

  const handleSelectApplicationForQuote = (appTitle: string, categoryRef: string) => {
    setRfqInitialData({
      category: 'Molecular Biology & Life Sciences',
      message: `Inquiring about recommended equipment and consumable packages for: ${appTitle}.`
    });
    scrollTo('quote');
  };

  const handleSelectBrandForQuote = (brandName: string) => {
    setRfqInitialData({
      brandPreference: brandName,
      category: 'Product Sourcing & Procurement',
      message: `Inquiring about authorized sourcing and pricing for ${brandName} scientific products.`
    });
    scrollTo('quote');
  };

  const handlePartnerEnquiry = () => {
    setRfqInitialData({
      category: 'Manufacturer & Distribution Partnerships',
      message: 'Manufacturer / Distributor channel partnership proposal for the Indian scientific market.'
    });
    scrollTo('quote');
  };

  const handleResourceRequest = (resourceTitle: string) => {
    setRfqInitialData({
      category: 'General Scientific Enquiry',
      message: `Requesting copy of technical resource: ${resourceTitle}.`
    });
    scrollTo('quote');
  };

  const handlePerformSearch = (term: string) => {
    setIsSearchOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-xennov-text flex flex-col antialiased selection:bg-xennov-cyan selection:text-xennov-navy w-full overflow-x-hidden">
      {/* 1. Header with Mega Menu & Search Trigger */}
      <Header
        onSelectCategory={handleSelectCategoryForQuote}
        onRequestQuote={() => scrollTo('quote')}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-1 w-full overflow-x-hidden">
        {/* 2. Hero Section with Integrated Search */}
        <Hero
          onExploreProducts={() => scrollTo('products')}
          onRequestQuote={() => scrollTo('quote')}
          onExploreBrands={() => scrollTo('brands')}
          onPerformSearch={handlePerformSearch}
        />

        {/* 3. Factual Operational KPI Trust Bar */}
        <TrustBar />

        {/* 4. About XenNov Scientific */}
        <About
          onRequestQuote={() => scrollTo('quote')}
          onExploreProducts={() => scrollTo('products')}
        />

        {/* 5. Scientific Products Catalogue (Prominent Product Section) */}
        <FeaturedProducts
          onSelectProductForQuote={handleSelectProductForQuote}
        />

        {/* 6. 12 Product Divisions with Taxonomy Tree */}
        <ProductDivisions
          onSelectForQuote={handleSelectCategoryForQuote}
        />

        {/* 7. 14 Scientific Workflows & Applications */}
        <ApplicationsSection
          onSelectApplication={handleSelectApplicationForQuote}
        />

        {/* 8. Industries We Serve (9 Sectors) */}
        <Industries
          onSelectIndustry={(indTitle) => {
            setRfqInitialData({
              category: 'Institutional & Bulk Procurement',
              message: `Inquiry regarding scientific supplies for ${indTitle} sector.`
            });
            scrollTo('quote');
          }}
        />

        {/* 9. Why Choose XenNov (6 Value Pillars) */}
        <WhyChooseUs />

        {/* 10. Operational Solutions & Services */}
        <Solutions
          onSelectSolution={(solTitle) => {
            setRfqInitialData({
              category: solTitle,
              message: `Inquiring about ${solTitle} services.`
            });
            scrollTo('quote');
          }}
        />

        {/* 11. Brands Directory & Manufacturer Partnerships */}
        <BrandsSection
          onPartnerEnquiry={handlePartnerEnquiry}
          onBrandSelect={handleSelectBrandForQuote}
        />

        {/* 12. Technical Knowledge Centre & Selection Guides */}
        <ResourcesSection
          onRequestResource={handleResourceRequest}
        />

        {/* 13. Comprehensive Request a Quote (RFQ) Form with File Upload */}
        <QuoteSection
          initialData={rfqInitialData}
        />

        {/* 14. Contact Section & Interactive Bengaluru Map */}
        <ContactSection />
      </main>

      {/* 15. Dark Navy Footer */}
      <Footer
        onOpenLegal={(type) => setActiveLegalDoc(type)}
      />

      {/* 16. Floating WhatsApp Desk Button */}
      <WhatsAppButton />

      {/* 17. Global Search Modal */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={(title, category, catNo) => {
          if (catNo) {
            handleSelectProductForQuote(title, catNo, category);
          } else {
            handleSelectCategoryForQuote(title);
          }
        }}
      />

      {/* 18. Legal Documents Modal */}
      <LegalModal
        docType={activeLegalDoc}
        onClose={() => setActiveLegalDoc(null)}
      />
    </div>
  );
}

export default App;
