# XenNov Scientific – Corporate Landing Page & B2B Procurement Platform

A scalable, product-led B2B scientific products, laboratory equipment, and institutional procurement web platform for **XenNov Scientific Private Limited** (Bengaluru, Karnataka, India).

Built in accordance with the official **Website Design & Content Brief** and referencing the clean, high-density corporate hierarchy and visual standards of **Thermo Fisher Scientific** ([Reference Guide Page](https://www.thermofisher.com/in/en/home/global/forms/industrial/pharma-development-analytics-guide.html)).

- **Repository:** [https://github.com/preethamamin22/xennovscientific.com](https://github.com/preethamamin22/xennovscientific.com)
- **Live Local Preview:** `http://localhost:3000/`

---

## 🔬 Brand Identity & Design Direction

- **Brand:** XenNov Scientific Private Limited
- **Tagline:** *"Advancing Science. Enabling Discovery."*
- **Positioning:** *"Your One-Stop Scientific & Laboratory Solutions Partner."*
- **Registered Office:** C-204, Soundarya Kamakshi, Magadi Main Road, Kamakshipalya, Bangalore 560079, Karnataka, India
- **Contact:** +91 82175 24813 | info.xennov@gmail.com
- **Visual Design Language:**
  - **Primary Navy:** `#102C4C`
  - **Secondary Blue:** `#1677B8`
  - **Cyan Accent:** `#38B6D9`
  - **Background Grey:** `#F3F6F9`
  - **Dark Text:** `#172B3A`
  - **White:** `#FFFFFF`
  - **Strict Clean UI Policy:** Pure data-driven, schematic layouts without stock photo clutter or decorative sparkle/star emojis.
  - **Thermo Fisher Reference Patterns:** Utility top strip, 2-column Hero with side-by-side RFQ Quotation form, breadcrumb eyebrows, sharp-cornered content panels, crisp data tables, and structured RFQ conversion funnels.

---

## 📐 Platform Architecture & Delivered Sections

1. **Utility Strip & Sticky Header (`Header.tsx`):**
   - Location, email, and quick-link utility bar.
   - Text & SVG Erlenmeyer flask logo mark.
   - 12-Division Mega Menu with subcategory preview.
   - Global Search modal (`Ctrl+K` shortcut).
   - High-contrast **"Request a Quote"** primary CTA and responsive mobile drawer.

2. **Executive 2-Column Hero & RFQ Form (`Hero.tsx`):**
   - Direct Thermo Fisher Guide formula: Left column delivers authority breadcrumbs, primary headline, strategic positioning, and **Key Procurement Capabilities** bulleted box.
   - Right column provides an immediate B2B Quotation Form card with instant division selection and WhatsApp fast-track.

3. **Operational KPI Trust Bar (`TrustBar.tsx`):**
   - 12 Scientific Divisions, 9+ Industry Sectors, 6 Service Solutions, and Bengaluru Gateway with responsive 2-column (mobile) to 4-column (desktop) alignment.

4. **Corporate Credentials & Operations (`About.tsx`):**
   - Executive corporate infrastructure card highlighting Batch CoA traceability, active Cold-Chain protocols (-80°C to +4°C), institutional GeM/rate contracting, and Bengaluru hub dispatch.

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
   - 24 verified scientific catalogue items with SKU codes, specifications tables, pack configurations, and direct RFQ prefill.
   - Clean Technical Blueprint & Verification Panel with official SKU drawing icons and quality stamps (*✓ Lot CoA Available*, *✓ Manufacturer Verified*, *✓ ISO 9001 Sourcing*).

7. **Scientific Workflows & Applications (`ApplicationsSection.tsx`):**
   - 14 workflows from Section 6 of the brief: DNA/RNA extraction, PCR/qPCR, Genomics & NGS, Protein analysis, Cell culture, Microbiology, Chromatography, Pharma QC, Chemical analysis, Environmental testing, Food safety, Bioprocessing, Sample storage, and Cold-chain.

8. **Global Brands Directory & Channel Program (`BrandsSection.tsx`):**
   - Directory across instruments, reagents, chromatography, and consumables.
   - *"Become a Brand Partner"* manufacturer channel proposal box.

9. **Sectors & Applications (`Industries.tsx`):**
   - 9 structured scientific sector cards with custom discipline icons and bulleted procurement scopes.

10. **Operational Capabilities (`Solutions.tsx`):**
    - High-density 3-column enterprise grid for Product Sourcing, Institutional & Bulk Procurement, Lab Equipment, Lab Setup, Custom Sourcing, and Vendor Consolidation.

11. **Technical Resources Knowledge Centre (`ResourcesSection.tsx`):**
    - Catalogues, selection guides, application notes, and datasheets with simulated modal preview and dossier requests.

12. **B2B Quotation Desk with Multi-File Upload (`QuoteSection.tsx`):**
    - Specification upload (PDF, XLSX, DOCX up to 15 MB).
    - Pre-filling integration from featured products, divisions, brands, and workflows.
    - Direct WhatsApp desk integration.

13. **Corporate Office & Interactive Map (`ContactSection.tsx`):**
    - Bengaluru headquarters details, business placeholders, and interactive Google Map embed.

14. **Enterprise Footer & Regulatory Modals (`Footer.tsx` & `LegalModal.tsx`):**
    - Complete sitemap and formal compliance dialogs for Privacy Policy (India DPDP Act 2023), Terms & Conditions, Regulatory & Sourcing Disclaimers, and Shipping & Returns Policy.

---

## 🛠️ Technology Stack & Build Tools

- **Framework:** React 18 with TypeScript 5
- **Build Tool:** Vite 5 (instant HMR & tree-shaken production bundles)
- **Styling:** Tailwind CSS 3 with custom XenNov enterprise design tokens
- **Iconography:** Lucide React (authentic scientific and operational symbols)
- **Forms & State:** Controlled state with instant validation, deep-link prefilling, and client-side sanitization

---

## 🚀 Running the Project

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Create production build
npm run build

# 4. Preview production build
npm run preview -- --port 3000 --host
```
