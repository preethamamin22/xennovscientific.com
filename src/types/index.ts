export interface ProductCategory {
  id: string;
  number: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  iconName: string;
  highlights: string[];
  subcategories: string[];
  commonApplications: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  catalogNumber: string;
  brand: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  availability: 'Available on Enquiry' | 'Availability to Be Confirmed' | 'Quote Required' | 'In Stock';
  specifications: Record<string, string>;
  variants?: string[];
  applications: string[];
  documents?: { title: string; type: string }[];
}

export interface ApplicationWorkflow {
  id: string;
  title: string;
  categoryRef: string;
  description: string;
  relatedProducts: string[];
  iconName: string;
}

export interface BrandPartner {
  id: string;
  name: string;
  portfolioArea: string;
  category: string;
}

export interface ResourceDoc {
  id: string;
  title: string;
  category: string;
  type: 'Product Catalogue' | 'Selection Guide' | 'Application Note' | 'Technical Datasheet';
  format: 'PDF';
  size: string;
  description: string;
}

export interface Industry {
  id: string;
  title: string;
  description: string;
  image: string;
  iconName: string;
  focusAreas: string[];
}

export interface Benefit {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Solution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  image: string;
}

export interface QuoteFormData {
  fullName: string;
  organisation: string;
  designation?: string;
  email: string;
  phone: string;
  city: string;
  category: string;
  productName?: string;
  brandPreference?: string;
  catalogNumber?: string;
  specifications?: string;
  quantity?: string;
  message: string;
  fileName?: string;
}
