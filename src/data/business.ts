export interface BusinessConfig {
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSupportingText: string;
  heroBgImage: string;
  shortDescription: string;
  aboutText: string;
  phone: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappDisplay: string;
  whatsappRaw: string;
  email: string;
  location: string;
  locationFull: string;
  workingHours: string;
  vehicleImage: string;
  aboutImage: string;
  logoText: string;
  logoSubtitle: string;
  emailjsServiceId: string;
  emailjsTemplateId: string;
  emailjsPublicKey: string;
  web3formsAccessKey: string;
}

export const BUSINESS_CONFIG: BusinessConfig = {
  name: 'SPL TRANSPORTS',
  tagline: 'Farm-to-Market Transport',
  heroHeadline: 'Reliable Farm-to-Market Transport',
  heroSupportingText: 'Pickup vehicle with driver for transporting agricultural products from your farm or location to markets, shops and destinations across your service area.',
  heroBgImage: '/images/hero-pickup-bg.png',
  shortDescription: 'Pickup vehicle transportation with driver for vegetables, fruits, grains, and goods from farms to markets, shops, and warehouses.',
  aboutText: 'We provide reliable pickup vehicle transportation with a driver for farmers, traders, shops and businesses that need to move agricultural products and goods from one location to another.',
  phone: '9629701566',
  phoneDisplay: '+91 96297 01566',
  phoneRaw: '+919629701566',
  whatsapp: '9629701566',
  whatsappDisplay: '+91 96297 01566',
  whatsappRaw: '919629701566',
  email: 'logeshwaran102002@gmail.com',
  location: 'Tirupattur',
  locationFull: 'Tirupattur, Tamil Nadu',
  workingHours: 'Available for Scheduled & Urgent Transport Trips',
  vehicleImage: '/images/about-vehicle.png',
  aboutImage: '/images/about-vehicle.png',
  logoText: 'SPL TRANSPORTS',
  logoSubtitle: 'Farm Produce & Goods Logistics',
  // Flexibly support VITE_WEB3FORMS_ACCESS_KEY, WEB3FORMS_ACCESS_KEY, or WEB3FORMS_KEY
  web3formsAccessKey:
    import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
    import.meta.env.WEB3FORMS_ACCESS_KEY ||
    import.meta.env.WEB3FORMS_KEY ||
    '',
  emailjsServiceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || import.meta.env.EMAILJS_SERVICE_ID || '',
  emailjsTemplateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || import.meta.env.EMAILJS_TEMPLATE_ID || '',
  emailjsPublicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || import.meta.env.EMAILJS_PUBLIC_KEY || ''
};
