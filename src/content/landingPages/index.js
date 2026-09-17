// UK locale site: UK cities only.
//
// This file previously also imported the Kochi, Kerala, Kozhikode and
// Trivandrum modules, putting 25 India-targeted pages on the .co.uk domain.
// They were near-identical to the same pages on infynix-solutions.com, so the
// two domains carried 25 duplicate pairs competing with each other, and the UK
// site's topical focus was diluted by content aimed at Kerala searchers.
// hreflang cannot fix that, because those pages are duplicates rather than
// locale equivalents. India pages belong on the India domain.
import { londonPages } from './london.js';
import { manchesterPages } from './manchester.js';
import { birminghamPages } from './birmingham.js';
import { leedsPages } from './leeds.js';
// Deep post-production page, built to the depth the ranking field carries.
import { postProductionPages } from './post-production.js';

export const landingPages = [
  ...londonPages,
  ...manchesterPages,
  ...birminghamPages,
  ...leedsPages,
  ...postProductionPages,
];

export const landingPageBySlug = Object.fromEntries(
  landingPages.map((page) => [page.slug, page])
);

export const getLandingPage = (slug) => landingPageBySlug[slug] || null;
