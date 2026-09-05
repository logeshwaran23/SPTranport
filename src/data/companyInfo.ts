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
  title: 'About SPL Transports',
  subtitle: 'Farm-to-Market Transport',
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
    id: 'bolero-pickup',
    title: 'Bolero Pickup',
    description: 'Ideal for transporting agricultural products, farm goods, sacks, crates, and other loads.',
    iconName: 'Truck',
    badge: 'Popular Choice',
    imageUrl: '/images/spl-transports-pickup-vehicle.png',
    imageAlt: 'SPL Transports Mahindra Bolero pickup truck for agricultural goods transportation in Tamil Nadu'
  },
  {
    id: 'tractor-transport',
    title: 'Tractor Transport',
    description: 'Suitable for farm operations, heavy agricultural loads, farm equipment, and local transport.',
    iconName: 'Tractor',
    badge: 'Heavy Farm Transport',
    imageUrl: '/images/spl-transports-tractor-transport.png',
    imageAlt: 'SPL Transports tractor transport for heavy agricultural equipment and farm loads'
  },
  {
    id: 'farm-to-market-transport',
    title: 'Farm-to-Market Transport',
    description: 'Reliable pickup and delivery support for moving agricultural products from farms to markets.',
    iconName: 'Store',
    badge: 'Direct Market Delivery',
    imageUrl: '/images/spl-transports-farm-market-delivery.png',
    imageAlt: 'SPL Transports produce delivery truck transporting fresh harvest from farms to wholesale markets'
  }
];

export const SERVICE_TRUST_HIGHLIGHTS = [
  {
    id: 'experienced-drivers',
    title: 'Experienced Drivers',
    description: 'Professional & courteous drivers who know local routes and farm routes.',
    iconName: 'UserCheck'
  },
  {
    id: 'reliable-pickup',
    title: 'Reliable Pickup',
    description: 'On-time pickup from fields, farms, houses, or local collection points.',
    iconName: 'Truck'
  },
  {
    id: 'farm-to-market-support',
    title: 'Farm-to-Market Support',
    description: 'Direct door-to-mandi delivery to wholesale markets and buyers.',
    iconName: 'Sprout'
  },
  {
    id: 'flexible-transport',
    title: 'Flexible Transport',
    description: 'Custom trip scheduling adapted to your harvest and loading timings.',
    iconName: 'ShieldCheck'
  }
];

export const VEHICLE_INFO: VehicleInfo = {
  title: 'Agricultural Goods Transportation',
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
  title: 'Service Area & Transport Destinations',
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
    id: 'experienced-drivers',
    title: 'Experienced Drivers',
    description: 'Skilled drivers who understand local routes and transport requirements.',
    iconName: 'UserCheck'
  },
  {
    id: 'reliable-vehicles',
    title: 'Reliable Vehicles',
    description: 'Well-maintained vehicles ready for agricultural and goods transportation.',
    iconName: 'Truck'
  },
  {
    id: 'farm-to-market-support',
    title: 'Farm-to-Market Support',
    description: 'Convenient transport support for moving goods from farms to nearby markets.',
    iconName: 'Sprout'
  },
  {
    id: 'flexible-transport',
    title: 'Flexible Transport',
    description: 'Choose the vehicle and transport option that suits your requirement.',
    iconName: 'Route'
  }
];
