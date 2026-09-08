import { kochiPages } from './kochi.js';
import { keralaPages } from './kerala.js';
import { kozhikodePages } from './kozhikode.js';
import { trivandrumPages } from './trivandrum.js';
import { londonPages } from './london.js';

export const landingPages = [
  ...londonPages,
  ...kochiPages,
  ...keralaPages,
  ...kozhikodePages,
  ...trivandrumPages,
];

export const landingPageBySlug = Object.fromEntries(
  landingPages.map((page) => [page.slug, page])
);

export const getLandingPage = (slug) => landingPageBySlug[slug] || null;
