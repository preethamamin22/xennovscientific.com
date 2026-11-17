import { ApplicationWorkflow } from '../types';

export const scientificApplications: ApplicationWorkflow[] = [
  {
    id: 'dna-rna-extraction',
    title: 'DNA/RNA Extraction & Purification',
    categoryRef: 'molecular-biology-life-sciences',
    description: 'High-purity isolation of genomic DNA, viral nucleic acids, and total RNA from clinical, biological, and environmental specimens using silica-column and magnetic-bead chemistries.',
    relatedProducts: ['Extraction Spin Columns', 'Magnetic Bead Purification Kits', 'Homogenizers', 'RNase-Free Plasticware'],
    iconName: 'Dna'
  },
  {
    id: 'pcr-qpcr',
    title: 'PCR & Real-Time qPCR',
    categoryRef: 'molecular-biology-life-sciences',
    description: 'Endpoint PCR, reverse-transcription PCR, and real-time quantitative PCR for target gene amplification, pathogen identification, and gene expression analysis.',
    relatedProducts: ['2X Taq Master Mix', 'SYBR Green qPCR Reagents', 'Optical 96-Well Plates', 'Thermal Cyclers'],
    iconName: 'Activity'
  },
  {
    id: 'genomics-sequencing',
    title: 'Genomics & Next-Generation Sequencing',
    categoryRef: 'molecular-biology-life-sciences',
    description: 'Targeted library construction, fragment size selection, enzymatic shearing, and indexing consumables for high-throughput sequencing platforms.',
    relatedProducts: ['DNA Library Prep Kits', 'Size Selection Beads', 'Fluorometers', 'Low-Retention Microtips'],
    iconName: 'Binary'
  },
  {
    id: 'protein-analysis',
    title: 'Protein Analysis & Purification',
    categoryRef: 'molecular-biology-life-sciences',
    description: 'Lysis, protein quantification, SDS-PAGE separation, Western blotting, affinity chromatography resins, and quantitative ELISA assays.',
    relatedProducts: ['BCA Protein Assay Kits', 'PVDF Transfer Membranes', 'ELISA Kits', 'Affinity Resins'],
    iconName: 'Layers'
  },
  {
    id: 'cell-culture',
    title: 'Cell Culture & Tissue Engineering',
    categoryRef: 'bioprocessing-cell-culture',
    description: 'Aseptic propagation of mammalian, stem, and primary cell lines with certified endotoxin-free media, fetal bovine serum, flasks, and CO2 incubators.',
    relatedProducts: ['DMEM / RPMI 1640 Media', 'Fetal Bovine Serum', 'T-75 & T-175 Culture Flasks', 'CO2 Incubators'],
    iconName: 'FlaskConical'
  },
  {
    id: 'microbiology-sterile-processing',
    title: 'Microbiology & Sterile Processing',
    categoryRef: 'clinical-diagnostics-microbiology',
    description: 'Cultivation, isolation, and antibiotic susceptibility testing of bacterial and fungal cultures with dehydrated agar, petridishes, and autoclaves.',
    relatedProducts: ['Nutrient & Chromogenic Agar', 'Petri Dishes', 'Vertical Steam Autoclaves', 'Inoculation Loops'],
    iconName: 'Microscope'
  },
  {
    id: 'chromatography-separation',
    title: 'Chromatography & Separation Science',
    categoryRef: 'analytical-instruments-chromatography',
    description: 'Reversed-phase, normal-phase, and ion-exchange separation of small molecules, peptides, and polymers via HPLC, UHPLC, and GC systems.',
    relatedProducts: ['C18 Analytical Columns', 'Autosampler Vials 2 mL', 'HPLC Grade Acetonitrile', 'Syringe Filters (0.22 μm)'],
    iconName: 'TestTubes'
  },
  {
    id: 'pharmaceutical-qc',
    title: 'Pharmaceutical Quality Control',
    categoryRef: 'analytical-instruments-chromatography',
    description: 'cGMP/GLP compliance testing, dissolution testing, active ingredient assays, Karl Fischer moisture titration, and related substance checks.',
    relatedProducts: ['USP Reference Standards', 'Karl Fischer Reagents', 'Analytical Balances', 'Dissolution Vessels'],
    iconName: 'ShieldCheck'
  },
  {
    id: 'chemical-analysis',
    title: 'Chemical Analysis & Synthesis',
    categoryRef: 'laboratory-chemicals-reagents',
    description: 'High-purity organic synthesis, acid-base titrations, volumetric reagent preparation, and spectroscopic molecular characterization.',
    relatedProducts: ['AR Grade Solvents', 'Volumetric Glassware Class A', 'UV-Vis Spectrophotometers', 'Magnetic Hotplate Stirrers'],
    iconName: 'FlaskConical'
  },
  {
    id: 'environmental-water-testing',
    title: 'Environmental & Water Testing',
    categoryRef: 'industrial-environmental-food-testing',
    description: 'Measurement of biological oxygen demand (BOD), chemical oxygen demand (COD), total dissolved solids (TDS), turbidity, and heavy metals in water.',
    relatedProducts: ['Multiparameter Water Meters', 'BOD Digestion Vials', 'Turbidity Standards', 'Field Sampling Bottles'],
    iconName: 'Sprout'
  },
  {
    id: 'food-safety',
    title: 'Food Safety & Quality Testing',
    categoryRef: 'industrial-environmental-food-testing',
    description: 'Foodborne pathogen detection (Salmonella, Listeria, E. coli), allergen detection, moisture determination, and nutritional shelf-life analysis.',
    relatedProducts: ['Pathogen Screening Kits', 'Moisture Analysers', 'Surface Hygiene Swabs', 'Sterile Filter Bags'],
    iconName: 'Gauge'
  },
  {
    id: 'bioprocess-development',
    title: 'Bioprocess Development',
    categoryRef: 'bioprocessing-cell-culture',
    description: 'Benchtop microbial fermentation, mammalian bioreactor runs, tangential flow filtration (TFF), and single-use bioprocess harvesting.',
    relatedProducts: ['Single-Use Bioreactor Bags', 'TFF Cassettes', 'Capsule Depth Filters', 'Silicone Tubing'],
    iconName: 'Binary'
  },
  {
    id: 'sample-collection-storage',
    title: 'Sample Collection & Storage',
    categoryRef: 'laboratory-plasticware-consumables',
    description: 'Field specimen collection, blood sampling, biological archiving, barcoded cryogenic tracking, and long-term biobank containment.',
    relatedProducts: ['Cryovials 1.8 mL', '2 mL Screw-Cap Tubes', 'Cryoboxes 81-Well', 'Specimen Jars'],
    iconName: 'Layers'
  },
  {
    id: 'laboratory-cold-chain',
    title: 'Laboratory Cold-Chain Management',
    categoryRef: 'laboratory-equipment-instruments',
    description: 'Monitored temperature-controlled preservation from 2°C to 8°C biological storage down to -20°C and -80°C ultra-low cryopreservation.',
    relatedProducts: ['2-8°C Lab Refrigerators (549L)', '-20°C Upright Freezers (700L)', '-86°C ULT Freezers', 'Data Loggers'],
    iconName: 'Cpu'
  }
];

