import { ProductItem } from '../types';

export const featuredProducts: ProductItem[] = [
  // ── Division 04: Plasticware & Consumables ──
  {
    id: 'screw-cap-tube-2ml',
    name: '2 mL Screw-Cap Microcentrifuge Tube, Clear',
    category: 'Laboratory Plasticware & Consumables',
    categoryId: 'laboratory-plasticware-consumables',
    catalogNumber: 'XN-SCT-200C',
    brand: 'XenNov Verified Sourcing',
    shortDescription: 'Polypropylene screw-cap microcentrifuge tube intended for sample collection, preparation, handling and storage in laboratory environments.',
    fullDescription: 'Manufactured from high-clarity medical-grade virgin polypropylene. Certified free of detectable RNase, DNase, human DNA, and endotoxins. Engineered with an integrated ethylene-propylene O-ring seal to prevent evaporation during thermal cycling and vapor loss during cryogenic storage. Available in conical bottom and self-standing skirted variants.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
    availability: 'Available on Enquiry',
    specifications: {
      'Nominal Capacity': '2.0 mL',
      'Material': 'Medical-Grade Virgin Polypropylene (PP)',
      'Cap Type': 'Polypropylene Screw-Cap with O-Ring Seal',
      'Temperature Range': '-80°C to +121°C (Autoclavable)',
      'Centrifugation Limit': 'Up to 20,000 x g',
      'Graduations': 'Molded graduations at 0.5 mL intervals',
      'Purity Standard': 'Certified RNase/DNase and Pyrogen-Free'
    },
    variants: ['Clear Conical Bottom', 'Clear Self-Standing Skirted', 'Amber Light-Blocking Variant', 'Sterile / Non-Sterile Pack'],
    applications: ['DNA/RNA Sample Storage', 'Biobank Archiving', 'Vortexing & Boiling Assays', 'Bead Beating & Homogenization'],
    documents: [
      { title: 'Technical Specification Sheet (PDF)', type: 'Datasheet' },
      { title: 'Material Compliance Certificate', type: 'Certificate' }
    ]
  },
  {
    id: 'screw-cap-tube-5ml',
    name: '5 mL High-Clarity Screw-Cap Conical Tube',
    category: 'Laboratory Plasticware & Consumables',
    categoryId: 'laboratory-plasticware-consumables',
    catalogNumber: 'XN-SCT-500C',
    brand: 'XenNov Verified Sourcing',
    shortDescription: 'Intermediate volume conical tube bridging 2 mL micro-tubes and 15 mL falcon tubes, optimized for sample processing and storage.',
    fullDescription: 'Engineered for intermediate volumes where 15 mL tubes generate excessive dead volume. Features high-transparency medical-grade polypropylene, high chemical resistance, and leak-proof screw closure with silicone seal ring. Suitable for cell pelleting, reagent aliquotting, and buffer formulation.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    availability: 'Available on Enquiry',
    specifications: {
      'Nominal Capacity': '5.0 mL',
      'Material': 'High-Clarity Polypropylene',
      'Cap Type': 'Deep-skirted screw-cap with secure seal',
      'Temperature Range': '-86°C to +121°C',
      'Centrifugation Limit': 'Up to 25,000 x g',
      'Graduations': 'Printed graduations with large white marking area',
      'Sterility': 'Gamma irradiated sterile option available'
    },
    variants: ['Conical Bottom', 'Self-Standing Skirted', 'Amber Light-Sensitive Formulation'],
    applications: ['Medium-Volume Sample Prep', 'Cell Suspension Handling', 'Reagent Aliquots', 'Enzyme Storage'],
    documents: [
      { title: 'Product Dimension & Performance Sheet', type: 'Datasheet' }
    ]
  },
  {
    id: 'filter-tips-low-retention',
    name: 'Barrier Filter Pipette Tips, Low-Retention (10 / 200 / 1000 μL)',
    category: 'Laboratory Plasticware & Consumables',
    categoryId: 'laboratory-plasticware-consumables',
    catalogNumber: 'XN-TIP-BFR',
    brand: 'XenNov Verified Sourcing',
    shortDescription: 'Universal-fit low-retention filter tips with hydrophobic polyethylene barrier to eliminate aerosol cross-contamination in PCR and genomics.',
    fullDescription: 'Molded using ultra-hydrophobic diamond-polished molds ensuring maximum sample recovery with viscous or low-surface-tension liquids (enzymes, master mixes, detergents). Inert polyethylene sintered filter blocks aerosols and liquids from entering the pipette shaft without releasing particulate matter.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    availability: 'Available on Enquiry',
    specifications: {
      'Volume Range': '0.1-10 μL, 20-200 μL, 100-1000 μL',
      'Filter Media': 'Pore-size controlled Hydrophobic Sintered Polyethylene (PE)',
      'Resin Type': 'Low-Retention Medical-Grade Polypropylene',
      'Packaging': 'Racked sterile (96 tips/rack, 10 racks/pack)',
      'Purity Level': 'Certified RNase, DNase, Endotoxin, and PCR-Inhibitor Free'
    },
    variants: ['10 μL Extended Length', '200 μL Beveled Tip', '1000 μL Universal Fit'],
    applications: ['Real-Time qPCR Setup', 'Next-Generation Sequencing (NGS)', 'Infectious Disease Testing', 'Forensic DNA Profiling'],
    documents: [
      { title: 'Lot Release Purity Certificate', type: 'CoA' }
    ]
  },
  {
    id: 'conical-centrifuge-tubes-15-50',
    name: 'Sterile Conical Centrifuge Tubes (15 mL & 50 mL)',
    category: 'Laboratory Plasticware & Consumables',
    categoryId: 'laboratory-plasticware-consumables',
    catalogNumber: 'XN-CFT-1550',
    brand: 'XenNov Verified Sourcing',
    shortDescription: 'Heavy-wall high-RCF conical centrifuge tubes with leak-proof HDPE flat caps and prominent silk-screen graduations.',
    fullDescription: 'High-clarity polypropylene centrifuge tubes engineered for robust mechanical strength during high-speed centrifugation up to 12,000 x g (15 mL) and 16,000 x g (50 mL). Features flat-top caps providing writing surface, dark blue graduations, and large white frosted labeling area.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
    availability: 'Available on Enquiry',
    specifications: {
      'Capacities': '15 mL (17 x 120 mm) & 50 mL (30 x 115 mm)',
      'Max RCF': '12,000 x g (15 mL) / 16,000 x g (50 mL)',
      'Cap Material': 'High-Density Polyethylene (HDPE)',
      'Sterilization': 'Sterilized by E-beam / Gamma irradiation (SAL 10^-6)',
      'Temperature Rating': '-80°C to +121°C'
    },
    variants: ['15 mL Racked (50/rack)', '50 mL Foam Racked (25/rack)', '50 mL Self-Standing Skirted'],
    applications: ['Cell Pellet Harvesting', 'Centrifugal Filtration', 'Density Gradient Separation', 'Media & Buffer Aliquots'],
    documents: [
      { title: 'RCF Centrifugation Test Report', type: 'Datasheet' }
    ]
  },

  // ── Division 03: Laboratory Equipment & Instruments ──
  {
    id: 'laboratory-refrigerator-549l',
    name: 'Precision Laboratory Refrigerator, 2–8°C (~549 L)',
    category: 'Laboratory Equipment & Instruments',
    categoryId: 'laboratory-equipment-instruments',
    catalogNumber: 'XN-REF-549L',
    brand: 'XenNov Verified Sourcing',
    shortDescription: 'Forced-air cooled pharmaceutical and laboratory refrigerator with micro-processor temperature controller and multi-point alarms.',
    fullDescription: 'Engineered for critical biological specimen storage, pharmaceutical products, vaccine preservation, and diagnostic kits requiring tight 2°C to 8°C temperature uniformity. Incorporates dual temperature sensors, energy-efficient hydrocarbon refrigerant, heated glass door to prevent condensation, and integrated audio-visual temperature alarm with battery backup.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
    availability: 'Quote Required',
    specifications: {
      'Effective Capacity': 'Approximately 549 Litres (Dual Door)',
      'Operating Temperature': '+2°C to +8°C (Factory set at 4°C)',
      'Temperature Accuracy': '±1.5°C chamber uniformity',
      'Cooling Mechanism': 'Forced-Air Circulation with Auto-Defrost',
      'Refrigerant': 'Eco-Friendly Hydrocarbon (CFC-Free)',
      'Internal Shelving': '5 adjustable PVC-coated wire shelves',
      'Alarms': 'High/Low Temp, Door Ajar, Power Failure, Sensor Error',
      'Power Supply': '220-240V / 50Hz'
    },
    variants: ['Glass Door with Heated Film', 'Solid Insulated Door', 'Stainless Steel Internal Chamber'],
    applications: ['Vaccine & Biologics Cold-Chain', 'Enzyme & Reagent Preservation', 'Hospital Blood Banks', 'Pharma QC Sample Storage'],
    documents: [
      { title: 'Technical Brochure & Spatial Blueprint', type: 'Brochure' },
      { title: 'Validation Protocol (IQ/OQ Outline)', type: 'Validation' }
    ]
  },
  {
    id: 'laboratory-freezer-700l',
    name: 'Low-Temperature Laboratory Freezer, -20°C (~700 L)',
    category: 'Laboratory Equipment & Instruments',
    categoryId: 'laboratory-equipment-instruments',
    catalogNumber: 'XN-FRZ-700L',
    brand: 'XenNov Verified Sourcing',
    shortDescription: 'Heavy-duty upright laboratory freezer for controlled low-temperature biological specimen, plasma and reagent preservation.',
    fullDescription: 'Designed for institutions requiring reliable -20°C low-temperature sample preservation. Features direct-cooling evaporator shelves for maximum thermal transfer, high-density cyclopentane insulation, and precision digital microprocessor controller. Tested for rapid temperature recovery following door openings.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
    availability: 'Quote Required',
    specifications: {
      'Effective Capacity': 'Approximately 700 Litres',
      'Operating Range': '-10°C to -25°C adjustable',
      'Cooling System': 'Direct cooling with multi-level evaporator shelves',
      'Controller': 'Digital LED display with 0.1°C resolution',
      'Access Security': 'Key lock with padlock facility',
      'Access Ports': '25 mm diameter validation port included',
      'Noise Level': '< 48 dB(A)'
    },
    variants: ['Upright Solid Single Door', 'Drawer Compartment Storage Unit', 'Stainless Steel Interior'],
    applications: ['Biological Tissue Storage', 'Plasma Preservation', 'Long-term Enzyme Storage', 'Cell Culture Reagent Stock'],
    documents: [
      { title: 'Chamber Temperature Uniformity Report', type: 'Datasheet' }
    ]
  },
  {
    id: 'benchtop-microcentrifuge-refrigerated',
    name: 'High-Speed Refrigerated Microcentrifuge (15,000 RPM)',
    category: 'Laboratory Equipment & Instruments',
    categoryId: 'laboratory-equipment-instruments',
    catalogNumber: 'XN-CEN-15KR',
    brand: 'XenNov Verified Sourcing',
    shortDescription: 'Compact refrigerated benchtop microcentrifuge reaching 21,380 x g with rapid pre-cooling down to 4°C in 8 minutes.',
    fullDescription: 'Essential workhorse for molecular biology and proteomics laboratories requiring temperature-sensitive centrifugation. Features brushless induction motor, aerosol-tight 24-place rotor, soft-touch electronic motorized lid lock, and maintenance-free quiet refrigeration system.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
    availability: 'Quote Required',
    specifications: {
      'Max Speed / RCF': '15,000 RPM / 21,380 x g',
      'Temperature Range': '-10°C to +40°C (Guaranteed 4°C at max speed)',
      'Rotor Capacity': '24 x 1.5/2.0 mL tubes (adaptors for 0.2/0.5 mL available)',
      'Acceleration / Deceleration': '10 user-selectable profiles',
      'Noise Level': '< 54 dB(A) with certified acoustic dampening'
    },
    variants: ['24-Place 1.5/2.0 mL Angle Rotor', '32-Place PCR Strip Rotor (4 x 8-strip)', 'Hematocrit Rotor'],
    applications: ['RNA/DNA Pellet Isolation', 'Protein Precipitation', 'Cell Lysate Clarification', 'Plasmid Mini-Prep'],
    documents: [
      { title: 'Microcentrifuge Rotor Compatibility Chart', type: 'Brochure' }
    ]
  },
  {
    id: 'autoclave-vertical-50l',
    name: 'Top-Loading Vertical Laboratory Autoclave (50 L)',
    category: 'Laboratory Equipment & Instruments',
    categoryId: 'laboratory-equipment-instruments',
    catalogNumber: 'XN-AUT-50LV',
    brand: 'XenNov Verified Sourcing',
    shortDescription: 'Fully automatic micro-processor steam sterilizer with digital sterilization cycle timer and dual safety pressure release.',
    fullDescription: 'Heavy-duty AISI 304 stainless steel pressure vessel engineered for sterilizing culture media, laboratory glassware, plasticware, and surgical instruments. Features automatic air purging, lid interlock preventing opening under pressure, and low water level cutoff with acoustic alarm.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    availability: 'Quote Required',
    specifications: {
      'Chamber Volume': '50 Litres (Diameter 350 mm x Depth 520 mm)',
      'Sterilization Temp': '105°C to 134°C adjustable',
      'Chamber Material': 'Heavy-gauge AISI 304 Stainless Steel',
      'Operating Pressure': '0.1 to 0.22 MPa (15 to 30 PSI)',
      'Safety Systems': 'Over-pressure safety valve, thermal sensor cutoff, interlock'
    },
    variants: ['50 L Vertical Standard', '75 L High-Capacity Model', '100 L Dual-Basket Model'],
    applications: ['Microbiological Media Prep', 'Biohazard Waste Decontamination', 'Glassware Sterilization', 'Surgical Tool Sterility'],
    documents: [
      { title: 'Pressure Vessel Hydraulic Test Certificate', type: 'Certificate' }
    ]
  },

  // ── Division 01: Molecular Biology & Life Sciences ──
  {
    id: 'pcr-master-mix-2x',
    name: '2X High-Fidelity Taq PCR Master Mix with Dye',
    category: 'Molecular Biology & Life Sciences',
    categoryId: 'molecular-biology-life-sciences',
    catalogNumber: 'XN-PCR-2XMM',
    brand: 'XenNov Verified Sourcing',
    shortDescription: 'Ready-to-use 2X concentrated master mix containing recombinant Taq DNA polymerase, dNTPs, reaction buffer, and gel loading dye.',
    fullDescription: 'Optimized formulation for routine PCR amplification, genotyping, and DNA fragment cloning. The integrated green loading dye allows direct post-PCR gel loading onto agarose gels without additional loading buffers. Delivers high product yield up to 5 kb with robust specificity.',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80',
    availability: 'Available on Enquiry',
    specifications: {
      'Formulation': '2X Pre-mixed solution (Polymerase, dNTPs, MgCl2, Buffer, Tracking Dye)',
      'Amplification Range': 'Up to 5 kb genomic DNA fragments',
      'Extension Rate': '1-2 minutes per kilobase at 72°C',
      'Gel Loading': 'Direct load onto agarose gel (Two tracking dyes: blue ~4 kb, yellow <25 bp)',
      'Storage Condition': '-20°C in non-frost-free freezer',
      'Unit Size': '100 reactions (2 x 1.25 mL) / 500 reactions bulk'
    },
    variants: ['100 Reactions Pack', '500 Reactions Bulk Pack', 'Dye-Free Colorless Master Mix'],
    applications: ['Genotyping & Colony PCR', 'DNA Sequence Amplification', 'Gene Expression Screening', 'Academic Research Labs'],
    documents: [
      { title: 'Protocol & Thermocycling Guide', type: 'Protocol' }
    ]
  },
  {
    id: 'dna-rna-extraction-kit-spin-column',
    name: 'Spin-Column Total RNA & Genomic DNA Extraction Kit',
    category: 'Molecular Biology & Life Sciences',
    categoryId: 'molecular-biology-life-sciences',
    catalogNumber: 'XN-EXT-SP50',
    brand: 'XenNov Verified Sourcing',
    shortDescription: 'Silica-membrane spin-column kit providing rapid isolation of high-integrity nucleic acids from cell cultures, tissues, and blood.',
    fullDescription: 'Yields intact genomic DNA and total RNA with A260/A280 ratios between 1.8 and 2.1. Completely removes protein contaminants, salts, and PCR inhibitors through specialized wash buffers. Downstream compatible with RT-qPCR, NGS library prep, and restriction digestion.',
    image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80',
    availability: 'Available on Enquiry',
    specifications: {
      'Format': 'Silica membrane spin column in 2 mL collection tube',
      'Starting Material': 'Up to 1 x 10^7 cells or 25 mg animal tissue',
      'Elution Volume': '30 to 100 μL',
      'Isolation Time': '< 25 minutes for 10 preps',
      'Binding Capacity': 'Up to 60 μg nucleic acid per column'
    },
    variants: ['50 Preps Standard Pack', '250 Preps High-Throughput Pack', 'Viral RNA Extraction Variant'],
    applications: ['Gene Expression qPCR', 'Viral Pathogen Detection', 'cDNA Synthesis', 'Northern & Southern Blotting'],
    documents: [
      { title: 'Extraction Protocol & Yield Benchmark', type: 'Protocol' }
    ]
  },
  {
    id: 'agarose-molecular-biology-grade',
    name: 'Multi-Purpose Agarose, Molecular Biology Grade (500 g)',
    category: 'Molecular Biology & Life Sciences',
    categoryId: 'molecular-biology-life-sciences',
    catalogNumber: 'XN-AGA-500G',
    brand: 'XenNov Verified Sourcing',
    shortDescription: 'Standard melting temperature low-EEO agarose for analytical and preparative nucleic acid gel electrophoresis.',
    fullDescription: 'Delivers sharp band resolution for DNA/RNA fragments from 100 bp to 20 kb. Low background fluorescence when stained with ethidium bromide or safe green dyes. Certified DNase- and RNase-free with high gel strength (>1200 g/cm² at 1%).',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80',
    availability: 'Available on Enquiry',
    specifications: {
      'Purity Grade': 'Molecular Biology Analytical Grade',
      'Electroendosmosis (EEO)': '≤ 0.12',
      'Gel Strength (1% gel)': '≥ 1200 g/cm²',
      'Melting Temperature': '88.3°C ± 1.5°C',
      'Moisture Content': '≤ 7.0%'
    },
    variants: ['100 g Research Bottle', '500 g Value Bottle', 'Low-Melting Point Variant (100 g)'],
    applications: ['DNA Fragment Size Analysis', 'PCR Product Gel Verification', 'Southern Blotting', 'Gel Extraction & Purification'],
    documents: [
      { title: 'Certificate of Analysis (CoA)', type: 'CoA' }
    ]
  },

  // ── Division 02: Analytical Instruments & Chromatography ──
  {
    id: 'c18-hplc-column',
    name: 'High-Performance C18 HPLC Analytical Column',
    category: 'Analytical Instruments & Chromatography',
    categoryId: 'analytical-instruments-chromatography',
    catalogNumber: 'XN-COL-C18',
    brand: 'XenNov Verified Sourcing',
    shortDescription: 'Ultra-pure spherical silica-based reversed-phase C18 column with high carbon loading and proprietary endcapping.',
    fullDescription: 'Engineered for exceptional peak symmetry, batch-to-batch reproducibility, and extended column lifetime across demanding pharmaceutical assays and impurity profiling. Fully compatible with 100% aqueous mobile phases, preventing phase dewetting or collapse.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    availability: 'Available on Enquiry',
    specifications: {
      'Dimensions': '4.6 x 250 mm (also available in 4.6 x 150 mm & 2.1 x 100 mm)',
      'Particle Size': '5 μm spherical silica (3 μm option available)',
      'Pore Size': '100 Å pore diameter',
      'Surface Area': '320 m²/g',
      'Carbon Load': '18.5% proprietary endcapped',
      'pH Stability': '1.5 to 10.0 continuous operation',
      'Max Pressure': '400 bar (5,800 psi)'
    },
    variants: ['4.6 x 250 mm (5 μm)', '4.6 x 150 mm (5 μm)', '2.1 x 100 mm UHPLC (3 μm)', 'Guard Column Cartridges (Pack of 3)'],
    applications: ['Pharmaceutical Active Ingredient Assay', 'Related Substances Impurity Testing', 'Nutraceutical Characterization', 'Drug Stability Testing'],
    documents: [
      { title: 'Batch Test Chromatogram & CoA Sample', type: 'CoA' }
    ]
  },
  {
    id: 'autosampler-vials-hplc-2ml',
    name: '2 mL 9 mm Screw-Thread Clear Autosampler Vials & Caps',
    category: 'Analytical Instruments & Chromatography',
    categoryId: 'analytical-instruments-chromatography',
    catalogNumber: 'XN-VIA-200S',
    brand: 'XenNov Verified Sourcing',
    shortDescription: 'First hydrolytic class borosilicate Type 1 glass autosampler vials with pre-slit PTFE/silicone septa.',
    fullDescription: 'Universally compatible with Agilent, Waters, Shimadzu, and Thermo autosamplers. Precision neck geometry prevents autosampler needle damage. Bonded cap-septa technology prevents septa push-through during piercing.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    availability: 'Available on Enquiry',
    specifications: {
      'Volume / Size': '2.0 mL (12 x 32 mm standard autosampler dimensions)',
      'Glass Material': 'Class 1 Borosilicate USP Type I Glass',
      'Closure Type': '9-425 Screw Neck with blue ribbed polypropylene cap',
      'Septa': 'Red PTFE / White Silicone (Pre-slit for reduced vacuum)',
      'Packaging': '100 vials & caps per cleanroom pack'
    },
    variants: ['Clear Glass with Writing Patch', 'Amber Glass Light-Blocking (510 nm cutoff)', 'Pre-assembled Kit'],
    applications: ['Routine HPLC / UHPLC Screening', 'GC-MS Sample Injections', 'Stability Testing Sample Batches', 'Quality Control Injections'],
    documents: [
      { title: 'Autosampler Compatibility Chart', type: 'Datasheet' }
    ]
  },
  {
    id: 'uv-vis-spectrophotometer-double-beam',
    name: 'Double-Beam UV-Vis Spectrophotometer (190–1100 nm)',
    category: 'Analytical Instruments & Chromatography',
    categoryId: 'analytical-instruments-chromatography',
    catalogNumber: 'XN-SPC-UV1100',
    brand: 'XenNov Verified Sourcing',
    shortDescription: 'High-stability double-beam optical system spectrophotometer with variable spectral bandwidth and USB PC workstation software.',
    fullDescription: 'Built for rigorous quantitative photometric assays, spectrum scanning, kinetics, and DNA/protein concentration quantification. Incorporates deuterium and tungsten-halogen lamps with automatic switching and Czerny-Turner blazed holographic grating for minimal stray light.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
    availability: 'Quote Required',
    specifications: {
      'Wavelength Range': '190 nm to 1100 nm',
      'Spectral Bandwidth': '1.0 nm / 2.0 nm',
      'Wavelength Accuracy': '±0.3 nm with automatic wavelength calibration',
      'Photometric Range': '-0.3 to 3.0 A, 0 to 200% T',
      'Stray Light': '≤ 0.03% T at 220 nm (NaI) & 360 nm (NaNO2)',
      'Detector': 'Dual Silicon Photodiode'
    },
    variants: ['Standard 10 mm Cell Holder', 'Micro-Volume Cell Accessory', 'Peltier Temperature Controlled Holder'],
    applications: ['Nucleic Acid Purity (A260/A280)', 'Enzyme Reaction Kinetics', 'Pharmaceutical QA Raw Material Check', 'Environmental Water Nitrates'],
    documents: [
      { title: 'Spectrophotometer Pharmacopeial IQ/OQ Protocol', type: 'Validation' }
    ]
  },

  // ── Division 11: Liquid Handling & Automation ──
  {
    id: 'micropipette-pro-series',
    name: 'Variable Volume Single-Channel Micropipette',
    category: 'Liquid Handling & Laboratory Automation',
    categoryId: 'liquid-handling-laboratory-automation',
    catalogNumber: 'XN-PIP-PRO',
    brand: 'XenNov Verified Sourcing',
    shortDescription: 'Ergonomic, fully autoclavable manual micropipette with magnetic-assist plunger for minimal pipetting fatigue.',
    fullDescription: 'Built with thermal-insulating polymers to eliminate hand-heat-induced volumetric expansion. Features 4-digit volume display, effortless volume locking mechanism, corrosion-resistant piston, and smooth tip ejection. Calibrated according to ISO 8655 standards with individual gravimetric calibration certificate.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    availability: 'Available on Enquiry',
    specifications: {
      'Volume Options': '0.1-2.5 μL, 0.5-10 μL, 2-20 μL, 10-100 μL, 20-200 μL, 100-1000 μL, 1-10 mL',
      'Autoclavability': 'Fully Autoclavable at 121°C (20 min) without disassembly',
      'Piston Mechanism': 'Magnetic-assisted low-force plunger system',
      'Tip Cone': 'Universal tip fitting with chemical-resistant PVDF',
      'Standards Compliance': 'ISO 8655 Parts 1-6 Compliant',
      'Warranty': 'Manufacturer warranty with annual calibration support'
    },
    variants: ['Single-Channel Variable', '8-Channel Multichannel (5-50 μL / 30-300 μL)', '12-Channel Multichannel'],
    applications: ['PCR/qPCR Reaction Setup', 'Serial Dilutions', 'Enzyme Kinetics', 'ELISA Assays'],
    documents: [
      { title: 'ISO 8655 Calibration Protocol', type: 'Calibration' }
    ]
  },
  {
    id: 'bottle-top-dispenser-50ml',
    name: 'Digital Bottle-Top Dispenser with Recirculation Valve (5–50 mL)',
    category: 'Liquid Handling & Laboratory Automation',
    categoryId: 'liquid-handling-laboratory-automation',
    catalogNumber: 'XN-DIS-50ML',
    brand: 'XenNov Verified Sourcing',
    shortDescription: 'Direct chemical dosing dispenser with borosilicate glass cylinder and PTFE piston for acids, bases, and volatile solvents.',
    fullDescription: 'Enables safe, precise liquid transfer directly from reagent bottles. The integrated recirculation valve eliminates reagent loss during priming by purging air back into the reagent reservoir. Compatible with aggressive chemicals including fuming acids, concentrated alkalis, and organic solvents.',
    image: 'https://images.unsplash.com/photo-1603555501671-8f96b3fce8b5?auto=format&fit=crop&w=800&q=80',
    availability: 'Available on Enquiry',
    specifications: {
      'Dispensing Range': '5.0 mL to 50.0 mL (0.5 mL increments)',
      'Accuracy & Precision': 'Accuracy ≤ ±0.5%, Precision ≤ 0.1%',
      'Fluid Contact Materials': 'Borosilicate 3.3, PTFE, FEP, PFA, Platinum-Iridium',
      'Thread Fitment': 'GL 45 base thread (adapters for GL 28, 32, 38 included)',
      'Safety': 'Safety discharge valve cap prevents accidental drips'
    },
    variants: ['0.5 - 5 mL Micro', '1.0 - 10 mL Medium', '2.5 - 25 mL Standard', '5.0 - 50 mL High Volume'],
    applications: ['Acid & Base Dosing', 'Solvent Aliquot Dispensing', 'Culture Media Fractionation', 'Volumetric Reagent Prep'],
    documents: [
      { title: 'Chemical Resistance Compatibility Guide', type: 'Datasheet' }
    ]
  },

  // ── Division 12: Laboratory Infrastructure & Furniture ──
  {
    id: 'biosafety-cabinet-class-ii',
    name: 'Class II Type A2 Biological Safety Cabinet (4 ft)',
    category: 'Laboratory Infrastructure & Furniture',
    categoryId: 'laboratory-infrastructure-furniture',
    catalogNumber: 'XN-BSC-IIA2',
    brand: 'XenNov Verified Sourcing',
    shortDescription: 'Certified biosafety containment cabinet providing personnel, product, and environmental protection with 99.995% HEPA filtration.',
    fullDescription: 'Engineered for handling microbiological agents assigned to Biosafety Levels 1, 2, and 3. Incorporates 70% air recirculation through supply HEPA filter and 30% exhaust through exhaust HEPA filter. Features motorized front sash, microprocessor airflow monitor with digital velocity readout, UV decontamination lamp, and seamless stainless steel work area.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    availability: 'Quote Required',
    specifications: {
      'Work Zone Dimensions': '1220 x 600 x 650 mm (4 Feet Width)',
      'Filtration Efficiency': 'Dual HEPA filters rated 99.995% at 0.3 μm particles',
      'Inflow Velocity': 'Nominal 0.53 m/s (105 fpm)',
      'Downflow Velocity': 'Nominal 0.35 m/s (70 fpm)',
      'Sash Glass': '6 mm toughened anti-UV motorized glass with acoustic alarms',
      'Internal Finish': 'AISI 304 seamless stainless steel with coved corners',
      'Standard Accessories': 'UV lamp, dual waterproof electrical sockets, gas tap'
    },
    variants: ['3 Feet Benchtop Model', '4 Feet Standard Model', '6 Feet Extended Width Model', 'Ducting Exhaust Collar'],
    applications: ['Cell Culture & Viral Vectors', 'Clinical Microbiology & Pathogen Work', 'Pharmaceutical Sterile Compounding', 'Institutional BSL-2 Laboratories'],
    documents: [
      { title: 'EN 12469 / NSF 49 Conformity Overview', type: 'Compliance' }
    ]
  },
  {
    id: 'anti-vibration-balance-table',
    name: 'Granite-Core Anti-Vibration Analytical Balance Table',
    category: 'Laboratory Infrastructure & Furniture',
    categoryId: 'laboratory-infrastructure-furniture',
    catalogNumber: 'XN-TBL-AVB',
    brand: 'XenNov Verified Sourcing',
    shortDescription: 'Heavy-mass vibration isolation balance table designed for high-precision micro-analytical balances (0.01 mg & 0.1 mg).',
    fullDescription: 'Dual-frame construction completely decoupling the outer working surface from the isolated polished granite weighing platform. Absorbent elastomer isolation mounts dampen ambient foot-traffic and mechanical floor vibrations, ensuring stable balance readings and zero baseline drift.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
    availability: 'Quote Required',
    specifications: {
      'Dimensions': '900 mm (W) x 600 mm (D) x 800 mm (H)',
      'Granite Slab': 'Polished black granite 400 x 450 x 50 mm (Weight ~35 kg)',
      'Isolation Damper': 'Tuned neoprene elastomeric vibration mounts',
      'Frame Construction': 'Heavy-gauge tubular steel with epoxy powder coating',
      'Leveling Feet': 'Four independent heavy-duty adjustable leveling pads'
    },
    variants: ['900 mm Single Station', '1200 mm Dual-Balance Workstation'],
    applications: ['Analytical Micro-Weighing (5-decimal balances)', 'Refractometry', 'Viscometry Calibration', 'Surface Tension Tensiometry'],
    documents: [
      { title: 'Damping Frequency Isolation Profile', type: 'Datasheet' }
    ]
  },

  // ── Division 05: Chemicals & Solvents ──
  {
    id: 'acetonitrile-hplc-grade-2.5l',
    name: 'Acetonitrile for HPLC & UV-Spectroscopy (2.5 L)',
    category: 'Laboratory Chemicals & Reagents',
    categoryId: 'laboratory-chemicals-reagents',
    catalogNumber: 'XN-CHM-ACN25',
    brand: 'XenNov Verified Sourcing',
    shortDescription: 'Ultra-pure gradient grade acetonitrile with high UV transmission for HPLC mobile phase preparations.',
    fullDescription: 'Purified through advanced distillation processes to guarantee baseline stability and high UV transmittance at short wavelengths (190–210 nm). Low non-volatile residue, controlled acidity/alkalinity, and sub-micron filtered. Accompanied by batch-specific Certificate of Analysis.',
    image: 'https://images.unsplash.com/photo-1603555501671-8f96b3fce8b5?auto=format&fit=crop&w=800&q=80',
    availability: 'Available on Enquiry',
    specifications: {
      'Assay (GC Purity)': '≥ 99.9%',
      'Water Content (KF)': '≤ 0.02%',
      'UV Transmittance (190 nm)': '≥ 30%',
      'UV Transmittance (200 nm)': '≥ 85%',
      'UV Transmittance (220 nm)': '≥ 98%',
      'Packaging': '2.5 L Amber glass bottle with tamper-evident seal'
    },
    variants: ['2.5 L Winchester Glass Bottle', 'Case of 4 x 2.5 L', 'LC-MS Grade 1 L'],
    applications: ['Reversed-Phase HPLC Mobile Phases', 'UHPLC Gradient Elution', 'Pharmaceutical QC Dissolution Testing', 'Organic Synthesis'],
    documents: [
      { title: 'Safety Data Sheet (SDS) & CoA Sample', type: 'SDS' }
    ]
  },
  {
    id: 'tris-base-biochemical-grade',
    name: 'Tris(hydroxymethyl)aminomethane, Ultra-Pure Biochemical Grade (1 kg)',
    category: 'Laboratory Chemicals & Reagents',
    categoryId: 'laboratory-chemicals-reagents',
    catalogNumber: 'XN-CHM-TRS1K',
    brand: 'XenNov Verified Sourcing',
    shortDescription: 'Primary biological buffer base with high solubility and low heavy-metal trace content for electrophoresis and enzyme assays.',
    fullDescription: 'White crystalline buffer compound extensively used in preparing TAE, TBE, and Tris-buffered saline (TBS) buffers. Tested specifically for absence of protease, DNase, and RNase contamination, safeguarding integrity of nucleic acids and proteins during electrophoresis.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    availability: 'Available on Enquiry',
    specifications: {
      'Assay (Titration)': '≥ 99.9%',
      'pH (1M aqueous at 25°C)': '10.5 – 11.5',
      'Heavy Metals (as Pb)': '≤ 5 ppm',
      'UV Absorbance (1M, 280 nm)': '≤ 0.05',
      'Solubility': 'Completely clear, colorless solution in water'
    },
    variants: ['500 g Bottle', '1 kg Bulk Tub', '5 kg Institutional Pack'],
    applications: ['Electrophoresis Buffers (TAE / TBE)', 'Western Blot TBS / TBST Prep', 'Protein Crystallization', 'Enzyme Storage Solutions'],
    documents: [
      { title: 'Biochemical Purity CoA Specification', type: 'CoA' }
    ]
  },

  // ── Division 06: Laboratory Glassware ──
  {
    id: 'volumetric-flask-class-a',
    name: 'Class A Amber & Clear Volumetric Flasks with Glass Stopper (100 mL)',
    category: 'Laboratory Glassware',
    categoryId: 'laboratory-glassware-consumables',
    catalogNumber: 'XN-GLS-VF100',
    brand: 'XenNov Verified Sourcing',
    shortDescription: 'Precision calibrated borosilicate 3.3 volumetric flask adhering to ASTM E288 / ISO 1042 standards with individual calibration certificate.',
    fullDescription: 'Engineered for precise analytical preparation of reference standards and titration reagents. Manufactured from low-expansion borosilicate 3.3 glass with sharp enameled calibration mark. Includes standard ground glass stopper and batch conformity certificate.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    availability: 'Available on Enquiry',
    specifications: {
      'Nominal Volume': '100 mL (Tolerance ±0.10 mL)',
      'Glass Classification': 'Borosilicate 3.3 (DIN ISO 3585 / USP Type I)',
      'Standard Compliance': 'ISO 1042 / Class A Tolerance',
      'Stopper Size': 'Ground joint NS 14/23 glass stopper',
      'Graduation Mark': 'High-durability white ceramic enamel'
    },
    variants: ['10 mL, 25 mL, 50 mL, 100 mL, 250 mL, 500 mL, 1000 mL', 'Amber Glass for Light-Sensitive Solutions'],
    applications: ['Analytical Standard Preparation', 'Volumetric Titration Standards', 'Mobile Phase Formulation', 'Pharmacopeial Verification'],
    documents: [
      { title: 'Class A Volumetric Calibration Certificate', type: 'Certificate' }
    ]
  },

  // ── Division 08: Safety & Cleanroom ──
  {
    id: 'nitrile-gloves-powder-free',
    name: 'Medical-Grade Powder-Free Nitrile Examination Gloves (Box of 100)',
    category: 'Laboratory Safety & Cleanroom',
    categoryId: 'laboratory-safety-cleanroom',
    catalogNumber: 'XN-SAF-NTR100',
    brand: 'XenNov Verified Sourcing',
    shortDescription: 'Latex-free textured-fingertip nitrile gloves providing chemical splash resistance and exceptional tactile sensitivity.',
    fullDescription: 'Conforms to EN 455 and EN 374 standards. Resists chemical permeation against common laboratory solvents, acids, and disinfectants. Textured fingertips deliver secure grip under wet or dry handling. Certified non-sterile, ambidextrous, and powder-free to eliminate particulate contamination.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    availability: 'Available on Enquiry',
    specifications: {
      'Material': '100% Acrylonitrile Butadiene (Nitrile, Latex-Free)',
      'Thickness': 'Palm: 0.08 mm, Finger: 0.12 mm',
      'AQL Level': 'AQL 1.5 Freedom from holes',
      'Standards': 'EN 455, EN ISO 374-1:2016 Type B, ASTM D6319',
      'Tensile Strength': '≥ 14 MPa before aging'
    },
    variants: ['Size Small (S)', 'Size Medium (M)', 'Size Large (L)', 'Size Extra-Large (XL)'],
    applications: ['Chemical Handling', 'Biological Specimen Testing', 'Cleanroom General Operations', 'Clinical Diagnostics'],
    documents: [
      { title: 'EN 374 Chemical Permeation Table', type: 'Datasheet' }
    ]
  },

  // ── Division 10: Bioprocessing & Cell Culture ──
  {
    id: 'fetal-bovine-serum-premium',
    name: 'Fetal Bovine Serum (FBS), Certified Sterile Filtered (500 mL)',
    category: 'Bioprocessing & Cell Culture',
    categoryId: 'bioprocessing-cell-culture',
    catalogNumber: 'XN-BIO-FBS500',
    brand: 'XenNov Verified Sourcing',
    shortDescription: 'Triple 0.1 μm sterile-filtered fetal bovine serum with comprehensive viral screening and low endotoxin levels.',
    fullDescription: 'Sourced from audited abattoirs in certified BSE/FMD-free geographic regions. Screened for mycoplasma, BVDV, and adventitious viral agents. Rigorously tested for cell growth promotion across sensitive primary cultures, stem cells, and hybridomas.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    availability: 'Quote Required',
    specifications: {
      'Filtration': 'Triple 0.1 μm sterile membrane filtered',
      'Endotoxin Level': '≤ 5.0 EU/mL (LAL test)',
      'Hemoglobin Content': '≤ 20 mg/dL',
      'Storage': '-20°C in dedicated biological freezers',
      'Testing': 'Sterility, Mycoplasma, Viral Screen (BVDV, IBR, PI3)'
    },
    variants: ['Heat-Inactivated (56°C, 30 min)', 'Stem Cell Qualified', 'Dialyzed FBS'],
    applications: ['Mammalian Cell Proliferation', 'Monoclonal Antibody Culture', 'Vaccine Production Bioprocess', 'Stem Cell Lineage Assays'],
    documents: [
      { title: 'Full Certificate of Analysis & Viral Screen', type: 'CoA' }
    ]
  },

  // ── Division 09: Industrial & Environmental Testing ──
  {
    id: 'multiparameter-water-quality-meter',
    name: 'Handheld Multiparameter Water Quality Meter (pH / EC / DO / Temp)',
    category: 'Industrial, Environmental & Food Testing',
    categoryId: 'industrial-environmental-food-testing',
    catalogNumber: 'XN-ENV-WQ4',
    brand: 'XenNov Verified Sourcing',
    shortDescription: 'Rugged IP67 waterproof field and bench instrument for simultaneous analysis of water pH, conductivity, dissolved oxygen, and temperature.',
    fullDescription: 'Equipped with automatic buffer recognition, optical dissolved oxygen (DO) sensor requiring zero polarization time, and internal memory for 1,000 data logs with GPS timestamping. Ideal for municipal water testing, industrial wastewater effluent compliance, and aquaculture monitoring.',
    image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=800&q=80',
    availability: 'Quote Required',
    specifications: {
      'pH Range / Resolution': '-2.00 to 19.99 pH (±0.01 pH)',
      'Conductivity Range': '0.00 μS/cm to 200.0 mS/cm',
      'Dissolved Oxygen': '0.0 to 20.00 mg/L (Optical Sensor)',
      'Ingress Protection': 'IP67 Waterproof and Dustproof',
      'Battery Life': '> 100 hours continuous field measurement'
    },
    variants: ['Field Kit with Carrying Case & Standards', 'Laboratory Benchtop Kit with Stand'],
    applications: ['Effluent & Wastewater Testing', 'Drinking Water Quality Audits', 'Environmental Field Surveys', 'Boiler Feed Water Checks'],
    documents: [
      { title: 'Water Meter Calibration & Sensor Manual', type: 'Datasheet' }
    ]
  }
];
