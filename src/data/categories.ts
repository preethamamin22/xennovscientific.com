import { ProductCategory } from '../types';

export const productCategories: ProductCategory[] = [
  {
    id: 'molecular-biology-life-sciences',
    number: 1,
    title: 'Molecular Biology & Life Sciences',
    shortDescription: 'Genomics, proteomics, electrophoresis, PCR reagents, enzymes, and nucleic acid purification systems.',
    fullDescription: 'Comprehensive solutions for advanced genetic and molecular research. XenNov supplies high-purity reagents, extraction kits, enzymes, thermal cyclers, and electrophoresis systems engineered to deliver reproducibility across life science workflows.',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80',
    iconName: 'Dna',
    highlights: ['PCR & qPCR Master Mixes', 'DNA/RNA Extraction Kits', 'Electrophoresis Systems', 'Cloning & NGS Library Prep'],
    subcategories: [
      'DNA/RNA Extraction Kits (Genomic, Total RNA, Viral, Magnetic Bead & Silica)',
      'PCR & qPCR (Master Mixes, SYBR Green, Probe Reagents, Polymerases, Tubes & Plates)',
      'Molecular Biology Reagents (Taq, High-Fidelity Enzymes, Ligases, dNTPs, DNA Ladders)',
      'Primers, Probes & Oligonucleotides (Custom DNA/RNA Oligos, Fluorescent Probes)',
      'Electrophoresis (Agarose, Acrylamide, Tanks, Power Supplies, Gel Documentation)',
      'Genomics & NGS (Library Prep Kits, Purification Beads, NGS Consumables)',
      'Protein & Immunology (Western Blotting, ELISA Kits, Antibodies, Immunoassay Consumables)'
    ],
    commonApplications: ['Genomics & Sequencing Prep', 'Molecular Diagnostics', 'Academic Life Science Research', 'Bio-therapeutics Development']
  },
  {
    id: 'analytical-instruments-chromatography',
    number: 2,
    title: 'Analytical Instruments & Chromatography',
    shortDescription: 'HPLC, GC columns, spectrophotometers, mass spectrometry consumables, and analytical detection systems.',
    fullDescription: 'High-precision analytical instrumentation and chromatography consumables designed for quantitative analysis, purity testing, and molecular characterization across pharmaceutical and research laboratories.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    iconName: 'Activity',
    highlights: ['HPLC & UHPLC Columns', 'UV-Vis Spectrophotometers', 'Chromatography Vials & Caps', 'Certified Reference Standards'],
    subcategories: [
      'HPLC/UHPLC Systems (Pumps, Autosamplers, Detectors, Column Ovens & Accessories)',
      'Chromatography Columns (C18, C8, Phenyl, Amino, Ion-Exchange, Chiral & Guards)',
      'Gas Chromatography (GC Systems, Capillary Columns, Detectors, Gas Regulators)',
      'Mass Spectrometry (LC-MS, GC-MS Consumables, Triple Quad Accessories)',
      'Chromatography Consumables (Screw-Cap & Crimp Vials, Septa, Syringe Filters, SPE Cartridges)',
      'Spectroscopy (UV-Vis, FTIR, Fluorescence, Atomic Absorption & Raman)',
      'Analytical Standards (Certified Reference Materials, Pharmaceutical Standards, Volumetric Solutions)'
    ],
    commonApplications: ['Pharma QA/QC Testing', 'Impurity Profiling', 'Chemical Characterization', 'Formulation Verification']
  },
  {
    id: 'laboratory-equipment-instruments',
    number: 3,
    title: 'Laboratory Equipment & Instruments',
    shortDescription: 'Centrifuges, precision balances, autoclaves, incubators, hotplates, magnetic stirrers, and water baths.',
    fullDescription: 'Essential benchtop and heavy-duty laboratory equipment built for rigorous daily scientific operations, thermal consistency, accurate weighing, sample preparation, and microbiological incubation.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
    iconName: 'Gauge',
    highlights: ['Laboratory Refrigeration (2-8°C)', '-20°C & -80°C Freezers', 'Micro & Benchtop Centrifuges', 'Autoclaves & CO2 Incubators'],
    subcategories: [
      'Refrigeration & Cold Storage (2-8°C Refrigerators, -20°C & -80°C Freezers, Monitoring)',
      'Centrifuges (Microcentrifuges, High-Speed, Refrigerated, Clinical, Rotors)',
      'Incubators (Bacteriological, BOD, CO2, Orbital Shaking, Refrigerated)',
      'Sterilisation (Vertical, Horizontal & Tabletop Autoclaves, Dry Heat)',
      'Heating & Cooling (Ovens, Water Baths, Dry Baths, Hot Plates, Magnetic Stirrers)',
      'Mixing & Homogenisation (Vortex Mixers, Platform Shakers, Ultrasonic Sonicators)',
      'Microscopy & Imaging (Compound, Stereo, Inverted, Fluorescence & Digital Cameras)',
      'Measurement (Analytical Balances, pH, Conductivity, DO, Turbidity & Moisture Analysers)',
      'Safety Cabinets (Class II Biosafety Cabinets, Laminar Airflow, Fume Hoods)'
    ],
    commonApplications: ['Sample Preparation', 'Biochemical Assays', 'Sterilization Protocols', 'Cold-Chain Biological Storage']
  },
  {
    id: 'laboratory-plasticware-consumables',
    number: 4,
    title: 'Laboratory Plasticware & Consumables',
    shortDescription: 'Pipette tips, centrifuge tubes, cryovials, microplates, petri dishes, and filtration units.',
    fullDescription: 'Certified RNase/DNase and pyrogen-free laboratory plasticware designed with medical-grade polymers to safeguard sample integrity during storage, centrifugation, liquid transfer, and high-throughput screening.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
    iconName: 'Layers',
    highlights: ['Screw-Cap Tubes (2 mL & 5 mL)', 'Low-Retention Filter Tips', 'Cryogenic Vials & Boxes', '96 & 384-Well Microplates'],
    subcategories: [
      'Microcentrifuge Tubes (0.5, 1.5 & 2.0 mL Low-Binding, Sterile & Non-Sterile)',
      'Screw-Cap Tubes (2 mL & 5 mL Clear & Amber, Self-Standing & Conical)',
      'Cryogenic Storage (Internal/External Cryovials, Cryoboxes, Cryoracks)',
      'PCR Consumables (PCR Tubes, 8-Strips, 96/384-Well Optical Plates, Sealing Films)',
      'Pipetting Consumables (Universal, Filtered, Low-Retention Tips, Serological Pipettes)',
      'Centrifuge Consumables (15 mL & 50 mL Falcon Tubes, Centrifuge Bottles)',
      'Culture & Microbiology (Petri Dishes, Culture Plates, Spreaders, Cell Culture Flasks)',
      'Sample Storage (Reagent Bottles, Storage Racks, Tip Boxes, Microplates)'
    ],
    commonApplications: ['Cryogenic Preservation', 'High-Throughput Assays', 'Sample Processing & Archiving', 'Sterile Liquid Transfer']
  },
  {
    id: 'laboratory-chemicals-reagents',
    number: 5,
    title: 'Laboratory Chemicals & Reagents',
    shortDescription: 'Analytical grade solvents, high-purity acids, organic reagents, buffer salts, and synthesis compounds.',
    fullDescription: 'Reliable laboratory chemicals adhering to ACS, AR, and HPLC grade specifications. Complete batch traceability and certificates of analysis (CoA) for rigorous scientific experimentation and industrial synthesis.',
    image: 'https://images.unsplash.com/photo-1603555501671-8f96b3fce8b5?auto=format&fit=crop&w=800&q=80',
    iconName: 'FlaskConical',
    highlights: ['HPLC & LC-MS Solvents', 'Analytical Grade Acids & Bases', 'Biochemical Buffers (Tris, EDTA, PBS)', 'Cell Culture Media (DMEM, RPMI)'],
    subcategories: [
      'Laboratory Solvents (Methanol, Acetonitrile, Ethanol, Isopropanol, Acetone, Hexane)',
      'Specialty Solvents (HPLC, UHPLC, LC-MS, GC, Spectroscopy Grades)',
      'Acids & Bases (Hydrochloric, Sulphuric, Nitric, Acetic Acids, NaOH, KOH)',
      'Biochemical Reagents (Tris, EDTA, SDS, PBS, TAE/TBE, BSA, Amino Acids)',
      'Analytical Reagents (Karl Fischer Reagents, Volumetric Solutions, Titration Standards)',
      'Cell Culture Reagents (DMEM, RPMI 1640, Fetal Bovine Serum, Trypsin, Antibiotics)',
      'Salts & Inorganic Compounds (NaCl, KCl, CaCl2, Magnesium, Phosphates)'
    ],
    commonApplications: ['Chromatography Mobile Phases', 'Analytical Titration', 'Biological Buffer Prep', 'Organic & Inorganic Synthesis']
  },
  {
    id: 'laboratory-glassware',
    number: 6,
    title: 'Laboratory Glassware',
    shortDescription: 'Borosilicate beakers, volumetric flasks, measuring cylinders, condenser units, and filtration assemblies.',
    fullDescription: 'ISO/ASTM-compliant borosilicate 3.3 glassware engineered for superior thermal shock resistance, chemical durability, and volumetric calibration accuracy across educational, industrial, and analytical setups.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    iconName: 'TestTubes',
    highlights: ['Class A Volumetric Flasks', 'Borosilicate Beakers & Erlenmeyers', 'Vacuum Filtration Assemblies', 'Microscope Slides & Cover Glass'],
    subcategories: [
      'Volumetric Glassware (Class A Volumetric Flasks, Measuring Cylinders, Burettes, Pipettes)',
      'General Laboratory Glass (Beakers, Conical Flasks, Round-Bottom Flasks, Test Tubes)',
      'Bottles & Storage (Reagent Bottles, Media Bottles, Screw-Cap Jars, Desiccators)',
      'Separation & Distillation (Separating Funnels, Condensers, Extraction Units)',
      'Filtration Glassware (Vacuum Filtration Assemblies, Fritted Disc Buchners)',
      'Microscopy Glass (Precision Microscope Slides, Cover Glasses, Counting Chambers)'
    ],
    commonApplications: ['Volumetric Solution Prep', 'Distillation & Reflux', 'Solvent Handling', 'Histopathology & Microscopy']
  },
  {
    id: 'clinical-diagnostics-microbiology',
    number: 7,
    title: 'Clinical Diagnostics & Microbiology',
    shortDescription: 'Dehydrated culture media, petri plates, rapid diagnostic test kits, staining solutions, and diagnostic reagents.',
    fullDescription: 'Specialized products for clinical pathology labs, blood banks, and microbiological testing facilities. Ensuring reliable pathogen identification, culture growth, staining clarity, and diagnostic accuracy.',
    image: 'https://images.unsplash.com/photo-1579165466791-788226ab77b6?auto=format&fit=crop&w=800&q=80',
    iconName: 'Microscope',
    highlights: ['Molecular Diagnostic Kits', 'Dehydrated Culture Media', 'Rapid Diagnostic Test Kits', 'Blood Collection Tubes'],
    subcategories: [
      'Molecular Diagnostics (PCR-Based Diagnostic Kits, Viral Extraction, Controls & Calibrators)',
      'Microbiology Media (Dehydrated Media, Prepared Agar Plates, Chromogenic Media, Broths)',
      'Rapid Diagnostics (Infectious Disease Test Strips, Lateral Flow Kits, Biomarkers)',
      'Specimen Collection (Blood Collection Tubes, Transport Swabs, Sterile Sample Containers)',
      'Stains & Indicators (Gram Stain Kits, AFB Stains, Leishman, Giemsa Staining Solutions)',
      'Clinical Consumables (Urine Containers, Serological Tubes, Cryovials, ESR Pipettes)'
    ],
    commonApplications: ['Clinical Pathology', 'Bacterial Identification & Typing', 'Sterility Verification', 'Infection Control Surveillance']
  },
  {
    id: 'laboratory-safety-cleanroom',
    number: 8,
    title: 'Laboratory Safety & Cleanroom',
    shortDescription: 'Nitrile gloves, eye wash stations, spill containment kits, chemical safety cabinets, and cleanroom apparel.',
    fullDescription: 'Comprehensive personal protective equipment (PPE) and facility safety gear complying with international laboratory safety and ISO cleanroom standards to protect scientific personnel and sensitive specimens.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    iconName: 'ShieldCheck',
    highlights: ['Medical-Grade Nitrile Gloves', 'Chemical Spill Response Kits', 'Flammable Storage Cabinets', 'Cleanroom Garments & Sticky Mats'],
    subcategories: [
      'Hand Protection (Powder-Free Nitrile, Latex, Acid-Resistant & Cryogenic Gloves)',
      'Body Protection (Lab Coats, Disposable Coveralls, Cleanroom Gowns, Aprons)',
      'Eye & Face Safety (Chemical Splash Goggles, Face Shields, Laser Safety Eyewear)',
      'Respiratory Protection (N95 Masks, Particulate Respirators, Half-Mask Cartridges)',
      'Facility Safety (Emergency Eye Wash Units, Spill Kits, Biohazard Waste Bags, Sharps Bins)',
      'Cleanroom Consumables (Lint-Free Wipes, Sticky Mats, Cleanroom Paper & Pens)'
    ],
    commonApplications: ['Hazardous Chemical Handling', 'Cleanroom Protocols (ISO 5-8)', 'Biological Containment', 'Institutional EHS Compliance']
  },
  {
    id: 'industrial-environmental-food-testing',
    number: 9,
    title: 'Industrial, Environmental & Food Testing',
    shortDescription: 'Water testing kits, pH/conductivity meters, turbidity meters, food pathogen detection, and soil analyzers.',
    fullDescription: 'Field and benchtop testing solutions tailored for quality assurance in food processing, beverage production, water treatment facilities, and environmental compliance monitoring.',
    image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=800&q=80',
    iconName: 'Sprout',
    highlights: ['Multiparameter Water Analyzers', 'Food Allergen & Pathogen Tests', 'TOC & BOD/COD Testing Supplies', 'Turbidity & Conductivity Meters'],
    subcategories: [
      'Water Quality (Multiparameter Meters, BOD/COD Vials, Turbidity, DO Sensors)',
      'Food & Beverage Testing (Food Pathogen Test Kits, Allergen Strips, Mycotoxin Assays)',
      'Environmental Monitoring (Air Quality Samplers, Soil Testing Reagents, Heavy Metal Consumables)',
      'Industrial QC (Moisture Analysers, Refractometers, Viscometers, Calibration Buffers)',
      'Hygiene Monitoring (ATP Swabs, Surface Hygiene Luminometers, Microbial Contact Plates)'
    ],
    commonApplications: ['Effluent & Drinking Water Testing', 'HACCP Food Safety Protocols', 'Industrial In-Process QC', 'Dairy & Beverage Compliance']
  },
  {
    id: 'bioprocessing-cell-culture',
    number: 10,
    title: 'Bioprocessing & Cell Culture',
    shortDescription: 'Cell culture media, fetal bovine serum (FBS), bioreactor bags, cryopreservation agents, and filtration capsules.',
    fullDescription: 'Upstream and downstream bioprocessing supplies facilitating mammalian, insect, and bacterial cell proliferation. High-batch consistency for vaccine development, antibody production, and cell therapy.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    iconName: 'Binary',
    highlights: ['Specialized Cell Culture Media', 'High-Grade Sera & Supplements', 'Single-Use Bioreactor Bags', 'Sterile Capsule Filters & TFF'],
    subcategories: [
      'Upstream Bioprocess (Bioreactors, Fermenters, Single-Use Bags, Tubing & Connectors)',
      'Cell Proliferation (T-Flasks, Roller Bottles, Microcarrier Beads, Cryopreservation Media)',
      'Media & Supplements (Serum-Free Media, FBS, Growth Factors, Cell Boost Feeders)',
      'Downstream Filtration (Bottle-Top Filters, 0.22 μm Syringe Filters, PES Membrane Capsules)',
      'Purification & TFF (Tangential Flow Filtration Cassettes, Protein A/G Resins, Desalting Columns)'
    ],
    commonApplications: ['Biopharmaceutical Manufacturing', 'Monoclonal Antibody Production', 'Cell & Gene Therapy R&D', 'Vaccine Bioprocessing']
  },
  {
    id: 'liquid-handling-laboratory-automation',
    number: 11,
    title: 'Liquid Handling & Laboratory Automation',
    shortDescription: 'Single and multi-channel pipettes, electronic pipettes, robotic tips, bottle-top dispensers, and automated washers.',
    fullDescription: 'Ergonomic, high-accuracy liquid handling instruments designed to minimize pipetting fatigue, avoid repetitive strain injuries, and ensure volumetric precision from sub-microliter to multi-milliliter volumes.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    iconName: 'Pipette',
    highlights: ['Variable Volume Micropipettes', '8 & 12-Channel Multi-Pipettes', 'Electronic Bottle-Top Dispensers', 'Automation-Grade Robotic Tips'],
    subcategories: [
      'Manual Micropipettes (Single-Channel Variable & Fixed Volume, 0.1 μL to 10 mL)',
      'Multichannel Pipettes (8-Channel & 12-Channel Ergonomic Micropipettes for Microplates)',
      'Electronic Pipettes & Controllers (Rechargeable Serological Pipette Fillers, Steppers)',
      'Bottle-Top Dispensers (Chemical-Resistant Dispensers for Acids, Bases & Solvents)',
      'Automated Pipetting Systems (Liquid Handling Workstations, Plate Washers, Robotic Tips)',
      'Calibration & Stands (Pipette Carousel Stands, Calibration Toolkits, Replacement Filters)'
    ],
    commonApplications: ['ELISA & Serial Dilutions', 'High-Throughput Screening', 'PCR Reaction Assembly', 'Precise Chemical Dosing']
  },
  {
    id: 'laboratory-infrastructure-furniture',
    number: 12,
    title: 'Laboratory Infrastructure & Furniture',
    shortDescription: 'Chemical fume hoods, laminar airflow units, biosafety cabinets, anti-vibration tables, and modular lab benches.',
    fullDescription: 'Turnkey and modular laboratory furniture systems engineered with chemical-resistant surfaces, integrated utility ducting, certified containment hoods, and ergonomic configurations for modern scientific spaces.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
    iconName: 'Cpu',
    highlights: ['Chemical Fume Hoods', 'Class II Biosafety Cabinets', 'Modular Trespa® Benches', 'Anti-Vibration Balance Tables'],
    subcategories: [
      'Modular Benches (Island Benches, Wall Benches, Heavy-Duty Epoxy / Trespa® Worktops)',
      'Containment Systems (Ducted Chemical Fume Hoods, Ductless Carbon Filtration Hoods)',
      'Clean Air Systems (Vertical & Horizontal Laminar Airflow Units, PCR Enclosures)',
      'Biosafety Enclosures (Class II Type A2 & B2 Biological Safety Cabinets)',
      'Specialized Furniture (Anti-Vibration Balance Tables, Chemical Storage Cabinets, Gas Cylinder Cages)',
      'Utility Fittings (Laboratory Sinks, Eye Wash Taps, Gas & Vacuum Valves, Overhead Raceways)'
    ],
    commonApplications: ['New Laboratory Setup', 'Institutional Lab Modernization', 'Pathogen & Vapor Containment', 'Precision Instrument Workstations']
  }
];
