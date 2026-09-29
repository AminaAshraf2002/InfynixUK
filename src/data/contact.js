/**
 * Shared Contact & Brand Constants (Single Source of Truth)
 * Contains all brand contacts and sister-site links.
 */

export const CURRENT_SITE_ID = 'uk';

export const BRAND_CONTACTS = [
  {
    id: 'infynix-agency',
    slug: 'infynix-agency',
    name: 'Infynix Agency',
    phone: '9995911173',
    phoneDisplay: '+91 99959 11173',
    tel: 'tel:+919995911173',
    instagram: 'https://www.instagram.com/infynix_agency?stkn=OWZvbGllcDd3bmpq',
    instagramHandle: '@infynix_agency',
    callAriaLabel: 'Call Infynix Agency',
    instagramAriaLabel: 'Infynix Agency on Instagram',
    pageUrl: '/solutions/infynix-agency',
    tagline: 'Performance and digital marketing',
  },
  {
    id: 'infynix-media',
    slug: 'infynix-media',
    aliasSlug: 'infynix-media-house',
    name: 'Infynix Media House',
    phone: '9995911196',
    phoneDisplay: '+91 99959 11196',
    tel: 'tel:+919995911196',
    instagram: 'https://www.instagram.com/infynixmediahouse?stkn=bDM5eHFydGVpZWQy',
    instagramHandle: '@infynixmediahouse',
    callAriaLabel: 'Call Infynix Media House',
    instagramAriaLabel: 'Infynix Media House on Instagram',
    pageUrl: '/solutions/infynix-media',
    tagline: 'Content, film and creative production',
  },
];

export const SISTER_WEBSITES = [
  {
    id: 'uae',
    label: 'United Arab Emirates',
    name: 'Infynix Solutions UAE',
    domain: 'infynixsolutions.ae',
    url: 'https://www.infynixsolutions.ae/',
    anchorText: 'Infynix Solutions UAE - Digital Marketing & Web Development',
    title: 'Visit Infynix Solutions UAE',
    isCurrent: false,
  },
  {
    id: 'uk',
    label: 'United Kingdom',
    name: 'Infynix Solutions UK',
    domain: 'infynixsolutions.co.uk',
    url: 'https://www.infynixsolutions.co.uk/',
    anchorText: 'Infynix Solutions UK - Growth Engineering & AI Surveillance Partner',
    title: 'Visit Infynix Solutions UK',
    isCurrent: true, // This is our UK website
  },
  {
    id: 'growth',
    label: 'Infynix Growth Solutions',
    name: 'Infynix Growth Solutions',
    domain: 'infynixgrowthsolutions.com',
    url: 'https://www.infynixgrowthsolutions.com/',
    anchorText: 'Infynix Growth Solutions - Software, ERP & Enterprise Systems',
    title: 'Visit Infynix Growth Solutions',
    isCurrent: false,
  },
];

/**
 * Returns brand contact for a given slug or id.
 */
export const getBrandBySlug = (slug) => {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();
  return (
    BRAND_CONTACTS.find(
      (b) =>
        b.slug === normalized ||
        b.id === normalized ||
        b.aliasSlug === normalized
    ) || null
  );
};

/**
 * Returns sister websites, skipping the current site by default to avoid self-links.
 */
export const getSisterWebsites = ({ skipCurrent = true } = {}) => {
  if (!skipCurrent) return SISTER_WEBSITES;
  return SISTER_WEBSITES.filter((site) => !site.isCurrent);
};
