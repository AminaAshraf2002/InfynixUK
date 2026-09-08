// Single source of truth for every absolute URL, canonical tag, sitemap entry and
// schema @id on the site. Nothing else should hardcode the domain.
//
// NOTE: the previous robots.txt and sitemap.xml declared https://infynix.com , 
// a domain Infynix does not own (it resolves to a domain-sale listing). Do not
// reintroduce it.

export const SITE_URL = 'https://www.infynix-solutions.com';

export const SITE_NAME = 'Infynix Solutions';

export const DEFAULT_TITLE =
  'Growth Engineering Agency London | Infynix Solutions';

export const DEFAULT_DESCRIPTION =
  'Infynix is a growth engineering agency serving London and the UK — web development, AI automation, CRM integration and performance marketing.';

export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;

// Canonical business details. Must stay byte-identical to the Google Business
// Profile and every external citation, inconsistent NAP suppresses local ranking.
export const BUSINESS = {
  legalName: 'Infynix Solutions',
  email: 'office@infynixsolution.co.uk',
  telephone: '+44 7436 670553',
  address: {
    street: '1-75 Shelton St, Covent Garden',
    locality: 'London',
    region: 'Greater London',
    postalCode: 'WC2H 9JQ',
    country: 'GB',
  },
  geo: { latitude: 51.5149, longitude: -0.1236 },
  openingHours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  areaServed: [
    'United Kingdom',
    'London',
    'United Arab Emirates',
    'India',
  ],
};

// Add real profile URLs as they go live, sameAs is a meaningful entity signal and
// an empty/wrong list is worse than a short accurate one.
// The Google Business Profile. Exported separately because it is also used as
// the LocalBusiness hasMap value and linked from the site, not just listed in
// sameAs. Reviews left here are the strongest local ranking signal available.
export const GOOGLE_BUSINESS_PROFILE = 'https://share.google/ey1Jfvouw3GLkRGzF';

export const SOCIAL_PROFILES = [
  'https://www.linkedin.com/company/infynix-solutions',
  'https://www.instagram.com/infynixsolutions',
  // Listing the GBP in sameAs is how the site and the profile get resolved as
  // the same entity rather than two similar businesses.
  GOOGLE_BUSINESS_PROFILE,
];

export const absoluteUrl = (path = '/') => {
  if (!path || path === '/') return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
};
