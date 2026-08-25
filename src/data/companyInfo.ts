import {
  NavItem,
  TrustHighlight,
  ServiceItem,
  VehicleInfo,
  ServiceAreaInfo,
  WhyChooseUsItem
} from '../types';
import { BUSINESS_CONFIG } from './business';

export { BUSINESS_CONFIG };

export const COMPANY_INFO = {
  name: BUSINESS_CONFIG.name,
  tagline: BUSINESS_CONFIG.tagline,
  heroHeadline: BUSINESS_CONFIG.heroHeadline,
  heroSupportingText: BUSINESS_CONFIG.heroSupportingText,
  shortDescription: BUSINESS_CONFIG.shortDescription,
  fullDescription: BUSINESS_CONFIG.aboutText,
  phone: BUSINESS_CONFIG.phoneDisplay,
  phoneRaw: BUSINESS_CONFIG.phoneRaw,
  whatsapp: BUSINESS_CONFIG.whatsappDisplay,
  whatsappRaw: BUSINESS_CONFIG.whatsappRaw,
  email: BUSINESS_CONFIG.email,
  location: BUSINESS_CONFIG.locationFull,
  workingHours: BUSINESS_CONFIG.workingHours
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Vehicle', href: '#vehicle' },
  { label: 'Contact', href: '#contact' }
];

export const TRUST_HIGHLIGHTS: TrustHighlight[] = [
  {
    id: 'pickup-vehicle',
    title: 'Pickup Vehicle',
    description: 'Clean commercial pickup vehicle suitable for agricultural produce and local goods transport.',
    iconName: 'Truck'
  },
  {
    id: 'driver-included',
    title: 'Driver Included',
    description: 'Experienced driver provided with every trip to handle navigation and transport safely.',
    iconName: 'UserCheck'
  },
  {
    id: 'agricultural-transport',
    title: 'Agricultural Transport',
    description: 'Specialized care for fresh vegetables, fruits, harvested grains, and farm materials.',
    iconName: 'Sprout'
  },
  {
    id: 'flexible-destination',
    title: 'Flexible Destination',
    description: 'Direct delivery from your pickup point in Tirupattur or region to mandis, shops, or warehouses.',
    iconName: 'MapPin'
  }
];

export const ABOUT_INFO = {
  title: 'Transport That Connects Farms to Markets',
  subtitle: 'About SP TRANSPORT',
  description: BUSINESS_CONFIG.aboutText,
  points: [
    'Pickup vehicle provided with a driver for every trip',
    'Careful transport of fresh vegetables, fruits, grains and local goods',
    'Direct pickup from farm fields, warehouses, or pickup locations',
    'Flexible transport based on your location and destination requirements'
  ],
  imageUrl: BUSINESS_CONFIG.aboutImage
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'agri-product-transport',
    title: 'Agricultural Product Transport',
    description: 'Safe transport of fresh vegetables, fruits, harvested crops, and agricultural products from harvest sites to buyers.',
    iconName: 'Sprout'
  },
  {
    id: 'farm-pickup',
    title: 'Farm Pickup',
    description: 'Direct collection of goods right from farm gates, green houses, fields, and local pickup points.',
    iconName: 'Tractor'
  },
  {
    id: 'market-delivery',
    title: 'Market Delivery',
    description: 'Punctual transport to wholesale mandis, Koyambedu market, auction yards, and commercial retail shops.',
    iconName: 'Store'
  },
  {
    id: 'pickup-with-driver',
    title: 'Pickup Vehicle With Driver',
    description: 'Dedicated commercial pickup truck accompanied by a driver assigned to handle your trip requirement.',
    iconName: 'Truck'
  },
  {
    id: 'local-goods-delivery',
    title: 'Local Goods Delivery',
    description: 'Reliable transport for farm supplies, seeds, fertilizers, feeds, packaged crops, and local goods.',
    iconName: 'Package'
  },
  {
    id: 'flexible-transport',
    title: 'Flexible Transport Service',
    description: 'Custom pickup locations and drop destinations planned around your specific route requirements.',
    iconName: 'Route'
  }
];

export const VEHICLE_INFO: VehicleInfo = {
  title: 'Our Pickup Vehicle',
  badge: 'Vehicle + Driver Service',
  description: 'Reliable pickup transportation with a driver for agricultural products and other goods.',
  points: [
    'Vehicle + Driver',
    'Agricultural Transport',
    'Flexible Destinations',
    'Local & Long-Distance Trips'
  ],
  placeholderNotice: 'Vehicle specs and exact capacity will be configured based on your specific transport enquiry.',
  imageUrl: BUSINESS_CONFIG.vehicleImage
};

export const SERVICE_AREA_INFO: ServiceAreaInfo = {
  title: 'Your Destination, Our Route',
  subtitle: 'Service Area',
  description: 'We provide transport based on your location and destination requirements.',
  exampleDestinations: [
    'Vellore',
    'Chennai',
    'Koyambedu Market',
    'Local Wholesale Markets',
    'Shops',
    'Warehouses',
    'Other Destinations'
  ],
  disclaimer: 'Note: The location names above are common destination examples. We provide flexible transport based on your specific pickup and delivery requirement.'
};

export const WHY_CHOOSE_US_ITEMS: WhyChooseUsItem[] = [
  {
    id: 'vehicle-driver',
    title: 'Vehicle With Driver',
    description: 'Every transport trip includes a pickup vehicle accompanied by a driver to execute your delivery smoothly.',
    iconName: 'UserCheck'
  },
  {
    id: 'agri-focus',
    title: 'Agricultural Transport Focus',
    description: 'Experienced in carrying fresh vegetables, fruits, harvested crops, and local goods safely.',
    iconName: 'Sprout'
  },
  {
    id: 'flexible-destinations',
    title: 'Flexible Destinations',
    description: 'We transport from your farm or location in Tirupattur and surrounding areas to your required drop-off destination.',
    iconName: 'MapPin'
  },
  {
    id: 'simple-enquiry',
    title: 'Simple Enquiry Process',
    description: 'Direct call or WhatsApp message to check transport details and confirm your trip schedule.',
    iconName: 'PhoneCall'
  }
];
