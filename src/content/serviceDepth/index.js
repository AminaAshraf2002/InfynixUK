// Depth content for the UK service pages, keyed by service slug. Rendered by
// ServiceDepth.jsx on /solutions/:slug; extraFaqs merge with the base FAQs.
import { mediaDepth } from './media.js';
import { agencyDepth } from './agency.js';
import { growthDepth } from './growth.js';
import { growthDepth2 } from './growth2.js';

export const serviceDepth = { ...mediaDepth, ...agencyDepth, ...growthDepth, ...growthDepth2 };
