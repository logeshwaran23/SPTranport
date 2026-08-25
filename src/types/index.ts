export interface NavItem {
  label: string;
  href: string;
}

export interface TrustHighlight {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface VehicleInfo {
  title: string;
  badge: string;
  description: string;
  points: string[];
  placeholderNotice: string;
  imageUrl: string;
}

export interface ServiceAreaInfo {
  title: string;
  subtitle: string;
  description: string;
  exampleDestinations: string[];
  disclaimer: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSupportingText: string;
  heroBgImage: string;
  shortDescription: string;
  fullDescription: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  email: string;
  location: string;
  workingHours: string;
}
