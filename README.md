# XenNov Scientific – B2B Scientific Procurement Platform

A scalable, product-led B2B scientific products, laboratory equipment, and institutional procurement web platform for **XenNov Scientific Private Limited** (Bengaluru, Karnataka, India).

Built in accordance with the official **Website Design & Content Brief** and referencing the corporate hierarchy and visual standards of **Thermo Fisher Scientific**.

Live preview running at: **http://localhost:3000/**

---

## 🔬 Brand Identity & Design Direction

- **Brand:** XenNov Scientific Private Limited
- **Tagline:** *"Advancing Science. Enabling Discovery."*
- **Positioning:** *"Your One-Stop Scientific & Laboratory Solutions Partner."*
- **Headquarters:** Bengaluru, Karnataka, India
- **Visual Design Language:**
  - **Primary Navy:** `#102C4C`
  - **Secondary Blue:** `#1677B8`
  - **Cyan Accent:** `#38B6D9`
  - **Background Grey:** `#F3F6F9`
  - **Dark Text:** `#172B3A`
  - **White:** `#FFFFFF`
  - **Strict No-AI-Star Policy:** Authentic scientific iconography (`FlaskConical`, `Microscope`, `Dna`, `Activity`, `TestTubes`, `Layers`, `ShieldCheck`) with zero decorative sparkle/star emojis.
  - **Thermo Fisher Reference Patterns:** Utility top strip, clean horizontal navigation, breadcrumb eyebrows, sharp-cornered rectangular content panels, crisp data tables, and structured RFQ conversion funnels.

---

## 📐 Platform Architecture & Delivered Sections

1. **Utility Strip & Sticky Header (`Header.tsx`):**
   - Location, email, and quick-link utility bar.
   - Text & SVG Erlenmeyer flask logo mark.
   - 12-Division Mega Menu with subcategory preview.
   - Global Search button (`Ctrl+K` shortcut).
   - High-contrast **"Request a Quote"** primary CTA.

2. **Enterprise Hero Banner with Quick Search (`Hero.tsx`):**
   - High-precision laboratory photograph with layered navy gradient overlays.
   - Exact copy from brief: *"Advancing Science. Enabling Discovery."*
   - Interactive search input for immediate product, brand, or SKU lookups.
   - 3 Subtle highlights: *Comprehensive Scientific Portfolio*, *Research & Laboratory Solutions*, *Institutional Procurement Support*.

3. **Operational KPI Trust Bar (`TrustBar.tsx`):**
   - 12 Scientific Divisions, 9+ Industry Sectors, 6 Service Solutions, and Bengaluru Gateway.

4. **About XenNov Scientific (`About.tsx`):**
   - Official company statement, vision, mission, core proposition (*"One Partner. Multiple Scientific Solutions."*), and Bengaluru hub showcase.

5. **12 Product Divisions with Full Taxonomy (`ProductDivisions.tsx` & `ProductCategoryModal.tsx`):**
   - Complete subcategory taxonomy directly from Section 4 of the brief:
     1. Molecular Biology & Life Sciences
     2. Analytical Instruments & Chromatography
     3. Laboratory Equipment & Instruments
     4. Laboratory Plasticware & Consumables
     5. Laboratory Chemicals & Reagents
     6. Laboratory Glassware
     7. Clinical Diagnostics & Microbiology
     8. Laboratory Safety & Cleanroom
     9. Industrial, Environmental & Food Testing
     10. Bioprocessing & Cell Culture
     11. Liquid Handling & Laboratory Automation
     12. Laboratory Infrastructure & Furniture
   - Division detail modal with subcategories, key highlights, and prefilled RFQ trigger.

6. **Priority Launch Catalogue (`FeaturedProducts.tsx` & `ProductDetailModal.tsx`):**
   - Verified priority catalogue items:
     - 2 mL Screw-Cap Microcentrifuge Tube, Clear (Cat #XN-SCT-200C)
     - 5 mL Screw-Cap Conical Tube (Cat #XN-SCT-500C)
     - Precision Laboratory Refrigerator, 2–8°C ~549 L (Cat #XN-REF-549L)
     - Low-Temperature Laboratory Freezer, -20°C ~700 L (Cat #XN-FRZ-700L)
     - Variable Volume Single-Channel Micropipette (Cat #XN-PIP-PRO)
     - High-Performance C18 HPLC Analytical Column (Cat #XN-COL-C18)
     - 2X High-Fidelity Taq PCR Master Mix (Cat #XN-PCR-2XMM)
     - Class II Type A2 Biological Safety Cabinet (Cat #XN-BSC-IIA2)
   - Status badges: *Available on Enquiry*, *Quote Required*, *In Stock*.
   - Technical specifications table, pack variants, and direct quote prefill.

7. **Scientific Workflows & Applications (`ApplicationsSection.tsx`):**
   - 14 workflows from Section 6 of the brief: DNA/RNA extraction, PCR/qPCR, Genomics & NGS, Protein analysis, Cell culture, Microbiology, Chromatography, Pharma QC, Chemical analysis, Environmental testing, Food safety, Bioprocessing, Sample storage, and Cold-chain.

8. **Industries We Serve (`Industries.tsx`):**
   - 9 sectors: Academic & Research, Biotechnology, Pharmaceutical, Hospitals, Clinical Diagnostics, Food & Beverage, Agriculture & Veterinary, Environmental & Water, Industrial & Manufacturing.

9. **Why Choose XenNov (`WhyChooseUs.tsx`):**
   - 6 benefit blocks: Comprehensive Portfolio, Reliable Sourcing Network, Customer-Focused Procurement, Competitive Quotations, Institutional & Bulk Support, Long-Term Partnerships.

10. **Solutions & Services (`Solutions.tsx`):**
    - Alternating layout detailing the 6 operational capabilities: Product Sourcing, Institutional & Bulk, Equipment Solutions, Lab Setup & Infrastructure, Custom Sourcing, Manufacturer Partnerships.

11. **Brands & Manufacturer Partnerships (`BrandsSection.tsx`):**
    - Global brand directory (Thermo Fisher, Merck, Agilent, Waters, Eppendorf, Tarsons, Abdos, Haier Biomedical) with clear compliant framing as sourcing networks.
    - **"Become a Brand Partner"** manufacturer expansion program.

12. **Technical Resources & Knowledge Centre (`ResourcesSection.tsx`):**
    - Catalogues, selection guides (cold storage, HPLC column selection, PCR optimization), and technical datasheets with downloadable preview modal.

13. **Comprehensive B2B RFQ Workflow (`QuoteSection.tsx`):**
    - All fields from Section 10: Full Name, Organisation, Designation, Email, Phone, City/State, Category, Product Name, Brand Preference, Catalogue Number, Required Specifications, Quantity, File Upload (PDF, XLSX, DOCX, Images up to 15 MB), and Additional Requirements.
    - Instant pre-fill when navigating from any product or division.
    - WhatsApp Procurement Desk quick-connect.

14. **Corporate Contact & Interactive Map (`ContactSection.tsx`):**
    - Bengaluru headquarters details, official placeholders, and live Google Maps embed.

15. **Enterprise Footer (`Footer.tsx`):**
    - Logo, tagline, company summary, quick navigation, 12 divisions, key industries, legal placeholders (*Privacy Policy, Terms & Conditions, Disclaimer, Shipping & Returns*), and copyright notice.

16. **Global Search Modal (`GlobalSearchModal.tsx`):**
    - Fast indexed search supporting product names, SKUs, brands, categories, and applications. Triggered via header or `Ctrl+K`.

---

## 🛠️ Technology Stack

- **React 18** with **TypeScript 5**
- **Vite 5** (production build size: ~320 kB JS, ~41 kB CSS)
- **Tailwind CSS 3** (corporate palette, custom enterprise components)
- **Lucide Icons** (strictly scientific and enterprise line icons)

---

## 💻 Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Compile TypeScript and build production bundle
npm run build

# Preview production build locally
npm run preview
```
