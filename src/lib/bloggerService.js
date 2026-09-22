// Blogger Service for Infynix Solutions UK
// Fetches live posts from Google Blogger via JSONP (bypasses browser CORS completely)

export const BLOGGER_URL = 'https://infynixsolutions.blogspot.com';

const FALLBACK_CATEGORY_IMAGES = {
  Agency: '/agency_marketing_uae.jpg',
  Media: '/media_production_uae.jpg',
  Development: '/dev_engineering_uae.jpg',
  Default: '/unified_growth_model.jpg',
};

// Formats date into readable string
export const formatBloggerDate = (dateStr) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

// Strips HTML and creates clean plain-text snippet
export const createSnippet = (htmlContent, maxLength = 180) => {
  if (!htmlContent) return '';
  const text = htmlContent
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

// Extracts first <img> src from HTML content, or matches topic, or falls back to category
export const extractThumbnail = (htmlContent, categories = [], title = '') => {
  if (htmlContent) {
    const imgMatch = htmlContent.match(/<img[^>]+src=["']([^"']+)["']/i);
    if (imgMatch && imgMatch[1]) {
      return imgMatch[1];
    }
  }

  // Title-based distinct image matching (ensures each of the 6 posts gets its exact unique image)
  const t = (title || '').toLowerCase();

  // 1. High-Ticket Lead Generation (London Skyline)
  if (t.includes('lead generation') || t.includes('high-ticket') || t.includes('luxury real estate') || t.includes('luxury services')) {
    return '/lead_generation_uk.jpg';
  }

  // 2. Performance Marketing & SEO (Agency) -> Analytics Executive Suite
  if (t.includes('performance marketing') || t.includes('vanity metrics') || t.includes('marketing in dubai')) {
    return '/agency_marketing_uae.jpg';
  }

  // 3. Commercial Video Production (Media) -> Cinema Production Rig
  if (t.includes('video production') || t.includes('cinematic') || t.includes('commercial video') || t.includes('cuts cac')) {
    return '/media_production_uae.jpg';
  }

  // 4. Custom Web Development & Engineering (Development) -> Code & Engineering Workstation
  if (t.includes('engineering for conversion') || t.includes('custom web') || t.includes('generic templates') || t.includes('web platforms')) {
    return '/dev_engineering_uae.jpg';
  }

  // 5. AI Automation & Intelligent CRMs -> Enterprise Global Neural Network
  if (/\bai\b/i.test(title) || t.includes('automation') || t.includes('intelligent crm') || t.includes('manual work')) {
    return '/ai_automation_uae.jpg';
  }

  // 6. Unified Growth Model -> Infynix Team Office
  if (t.includes('unified growth') || t.includes('growth model') || t.includes('three separate vendors') || t.includes('under one roof')) {
    return '/unified_growth_model.jpg';
  }

  for (const cat of categories) {
    if (FALLBACK_CATEGORY_IMAGES[cat]) {
      return FALLBACK_CATEGORY_IMAGES[cat];
    }
  }
  return FALLBACK_CATEGORY_IMAGES.Default;
};

export const extractPostId = (idString) => {
  if (!idString) return '';
  const parts = idString.split('.post-');
  return parts.length > 1 ? parts[1] : idString;
};

export const generateSlug = (title, id) => {
  if (!title) return id;
  const clean = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
    .substring(0, 50);
  return `${clean}-${id}`;
};

export const parseIdFromSlug = (slugOrId) => {
  if (!slugOrId) return '';
  const match = slugOrId.match(/(\d{15,25})$/);
  return match ? match[1] : slugOrId;
};

// Fallback initial post so UI is NEVER empty even before network returns
export const INITIAL_POSTS = [
  {
    id: '3672986851097605036',
    slug: 'the-unified-growth-model-why-uk-businesses-need-3672986851097605036',
    title: 'The Unified Growth Model: Why UK Businesses Need Agency, Media, and Development Under One Roof',
    content: `<p>In the UK's competitive business ecosystem—from Central London and Canary Wharf to Manchester and Birmingham—most companies manage their digital growth across three separate vendors: a creative video production house, a performance marketing agency, and an outsourced software development team.</p>
<p>The result? <strong>Disconnected messaging, broken lead tracking, and wasted marketing spend.</strong></p>
<p>At <strong>Infynix Solutions</strong>, we operate with a unified model connecting three core pillars: <strong>Agency, Media, and Development</strong>. Here is why this integrated approach is transforming UK enterprise growth.</p>
<hr/>
<h2>1. Infynix Agency: Strategy, Search & Revenue Attribution</h2>
<p>An agency shouldn't just buy clicks; it should build predictable revenue pipelines. The <strong>Infynix Agency</strong> division focuses on measurable commercial outcomes:</p>
<ul>
  <li><strong>Technical SEO:</strong> Dominating high-intent commercial search queries across London and the UK with schema-rich architecture.</li>
  <li><strong>Revenue Attribution:</strong> Server-side tracking (GA4, CAPI) that maps every pound sterling back to the specific campaign and keyword.</li>
  <li><strong>CRM & Lead Routing:</strong> Automated pipelines ensuring inquiries from Google, Meta, or LinkedIn are contacted within minutes.</li>
</ul>
<h2>2. Infynix Media: High-Impact Video & Creative Production</h2>
<p>Stock videos and generic templates do not build trust with discerning UK clients. <strong>Infynix Media</strong> is our dedicated production unit equipped with studio-grade crews and equipment:</p>
<ul>
  <li><strong>Brand & Corporate Films:</strong> High-production storytelling for corporate enterprises, property developers, and healthcare providers.</li>
  <li><strong>Native Social Video:</strong> Platform-native vertical video crafted for LinkedIn, Instagram Reels, and TikTok.</li>
  <li><strong>Executive Thought Leadership:</strong> Studio-grade podcasts and founder interviews that position executives as industry leaders.</li>
</ul>
<h2>3. Infynix Development: Robust Software & Web Engineering</h2>
<p>Marketing and creative can only succeed if the underlying platform converts. Our <strong>Development</strong> team engineers digital architectures built for sub-second performance:</p>
<ul>
  <li><strong>Custom Web Applications:</strong> Ultra-fast, responsive web platforms built with modern stacks (React, Vite, SSR) with zero layout shift.</li>
  <li><strong>Workflow & AI Automation:</strong> Custom internal tools and API integrations connecting your CRM, payment gateways, and communications.</li>
  <li><strong>Enterprise Security & Reliability:</strong> Architectures designed to handle high transaction volumes with complete GDPR compliance.</li>
</ul>
<hr/>
<h2>Why The 3 Pillars Must Work as One System</h2>
<p>When <strong>Media</strong> produces the visuals, <strong>Development</strong> builds the high-speed landing pages, and <strong>Agency</strong> drives targeted traffic and tracks conversions, there are zero gaps. Marketing spend becomes accountable, and every campaign is optimized from shoot day to final closed contract.</p>
<hr/>
<h2>Partner with Infynix Solutions UK</h2>
<p>Looking to scale your presence across London and the UK? Explore how our <strong>Agency, Media, and Development</strong> teams can support your next phase of growth.</p>
<p><a href="/contact" style="color: #007A5E; font-weight: bold; text-decoration: underline;">Speak with our London team today →</a></p>`,
    summary: 'Discover why separating marketing, media production, and software development hurts business growth in London and across the UK—and how a unified system drives higher ROI.',
    published: '2026-09-21T02:57:40.817-07:00',
    formattedDate: 'Sep 21, 2026',
    updated: '2026-09-21T02:57:40.817-07:00',
    categories: ['Agency', 'Development', 'Infynix Solutions', 'Media', 'UK Business'],
    author: 'Infynix',
    thumbnail: '/unified_growth_model.jpg',
    bloggerUrl: '',
  },
  {
    id: '4918294820194820101',
    slug: 'performance-marketing-london-first-party-attribution-4918294820194820101',
    title: 'Performance Marketing in London: Why Vanity Metrics Hurt UK ROI',
    content: `<p>In London's hyper-competitive commercial landscape, businesses frequently spend thousands of pounds on ad campaigns only to celebrate superficial metrics: impressions, video views, and clicks.</p>
<p>Yet when the month ends, the revenue ledger remains unchanged. <strong>Vanity metrics do not pay salaries or commercial leases in the UK.</strong></p>
<hr/>
<h2>The Pitfall of Disconnected Paid Media</h2>
<p>Most UK enterprises rely on external media buyers who optimize for low Cost-Per-Click (CPC) rather than qualified sales pipeline or signed contracts. In sectors like high-value professional services, tech, and luxury real estate, a £50 click from an unqualified visitor is pure waste.</p>
<p>To win in this market, marketing must transition from basic lead generation to <strong>revenue engineering</strong>.</p>
<h2>1. First-Party Server-Side Tracking (GA4 & CAPI)</h2>
<p>With iOS privacy updates, cookie restrictions, and browser blockers, client-side tracking pixels lose up to 40% of conversion data. Infynix Agency deploys server-side Google Tag Manager and Conversions API (Meta, LinkedIn, Google) ensuring full GDPR compliance while accurately tracking every pound invested.</p>
<h2>2. High-Intent Commercial Search Dominance</h2>
<p>Ranking on page one for competitive UK commercial queries requires technical site health, semantic entity structures, and authoritative backlink profiles that outperform legacy competitors.</p>
<h2>3. Automated Speed-to-Lead Routing</h2>
<p>Studies show that contacting an inbound B2B enquiry within 5 minutes increases conversion rates by nearly 400%. By integrating webhook pipelines into CRM systems (HubSpot, Salesforce, Zoho), lead drop-off is practically eliminated.</p>
<hr/>
<h2>Scale Your Marketing ROI with Infynix Agency</h2>
<p>Ready to replace vanity reports with verified revenue pipeline? Connect with our growth strategists in London.</p>
<p><a href="/contact" style="color: #007A5E; font-weight: bold; text-decoration: underline;">Schedule your marketing audit today →</a></p>`,
    summary: 'Discover why vanity metrics like clicks and impressions are costing UK businesses valuable budget, and how revenue-focused attribution and localized SEO drive real ROI.',
    published: '2026-09-21T03:30:00.000-07:00',
    formattedDate: 'Sep 21, 2026',
    updated: '2026-09-21T03:30:00.000-07:00',
    categories: ['Agency', 'UK Business', 'SEO', 'Infynix Solutions'],
    author: 'Infynix',
    thumbnail: '/agency_marketing_uae.jpg',
    bloggerUrl: '',
  },
  {
    id: '6820194820193850202',
    slug: 'commercial-video-production-uk-cuts-cac-6820194820193850202',
    title: 'Commercial Video Production in the UK: How Cinematic Media Cuts CAC',
    content: `<p>Attention in the UK business landscape has migrated decisively to short-form and high-fidelity video. Whether on LinkedIn, Instagram, or YouTube, static image ads are increasingly overlooked by decision-makers and high-value buyers.</p>
<p>Yet many companies treat video as an afterthought—hiring one-off freelancers with no understanding of brand positioning or customer acquisition psychology.</p>
<hr/>
<h2>Why Generic Stock Imagery Destroys Brand Trust</h2>
<p>UK buyers value authenticity. Using generic stock videos of foreign skylines immediately signals that a business lacks authentic domestic infrastructure. Tailored, locally produced visual content builds instant credibility across the UK.</p>
<h2>1. Native Vertical Video for Paid Social</h2>
<p>Producing cinematic vertical video optimized for LinkedIn and social feeds yields up to 3x higher retention. The key is hook-driven storytelling within the first 3 seconds paired with authentic messaging.</p>
<h2>2. Founder & Executive Thought Leadership</h2>
<p>B2B decision-makers buy from leaders they trust. Studio podcast series, executive interviews, and cinematic client case studies elevate founders into recognized industry authorities.</p>
<h2>3. The Content Repurposing Engine</h2>
<p>A single dedicated shoot day with Infynix Media produces 1 master brand film, 6 targeted social cutdowns, and dozens of high-resolution stills—maximizing your production investment across website, social, and sales collateral.</p>
<hr/>
<h2>Transform Your Visual Storytelling</h2>
<p>Equip your brand with studio-grade production and authentic storytelling that converts viewers into long-term clients.</p>
<p><a href="/contact" style="color: #007A5E; font-weight: bold; text-decoration: underline;">Book a video production briefing →</a></p>`,
    summary: 'Discover how cinematic video production, vertical social reels, and authentic storytelling dramatically lower customer acquisition costs across the UK.',
    published: '2026-09-21T03:45:00.000-07:00',
    formattedDate: 'Sep 21, 2026',
    updated: '2026-09-21T03:45:00.000-07:00',
    categories: ['Media', 'UK Business', 'Video Production', 'Infynix Solutions'],
    author: 'Infynix',
    thumbnail: '/media_production_uae.jpg',
    bloggerUrl: '',
  },
  {
    id: '7930294810294820303',
    slug: 'engineering-for-conversion-why-uk-brands-need-custom-platforms-7930294810294820303',
    title: 'Engineering for Conversion: Why UK Brands Need Custom Web Platforms Over Generic Templates',
    content: `<p>A beautiful design that loads slowly is an expensive liability. In the UK, where mobile commerce and digital-first B2B research are the norm, visitors bounce from websites that take longer than 2.5 seconds to render.</p>
<p>Yet many enterprise websites in the UK remain burdened by bloated WordPress themes, unmaintained plugins, and sluggish shared hosting.</p>
<hr/>
<h2>The Hidden Costs of Off-the-Shelf Templates</h2>
<p>Generic templates carry hundreds of unnecessary render-blocking scripts, uncompressed assets, and heavy database overhead. Every millisecond of latency directly damages Google rankings and degrades ad conversion rates.</p>
<h2>1. Sub-Second Architecture (React, Vite & SSR)</h2>
<p>By building on modern engineering stacks with pre-rendering and headless infrastructure, pages load instantly across mobile networks. Zero layout shifts and perfect Core Web Vitals elevate organic search rankings.</p>
<h2>2. Custom API Integrations & UK Gateways</h2>
<p>UK businesses require seamless connectivity with payment gateways (Stripe, GoCardless), accounting platforms (Xero, QuickBooks), and CRM systems. Bespoke engineering guarantees resilient uptime and automated synchronization.</p>
<h2>3. Enterprise Scalability & Cloud Security</h2>
<p>Whether handling seasonal traffic surges or scaling internationally, modern cloud architectures guarantee that your digital platform remains secure, compliant, and responsive under heavy load.</p>
<hr/>
<h2>Build Your Next-Generation Digital Platform</h2>
<p>Upgrade from sluggish website templates to high-velocity software engineering built for measurable commercial scale.</p>
<p><a href="/contact" style="color: #007A5E; font-weight: bold; text-decoration: underline;">Discuss your technical requirements with Infynix Development →</a></p>`,
    summary: 'Learn why bloated website templates hurt conversion rates and Google rankings, and why custom web engineering and sub-second performance are essential for UK growth.',
    published: '2026-09-21T04:00:00.000-07:00',
    formattedDate: 'Sep 21, 2026',
    updated: '2026-09-21T04:00:00.000-07:00',
    categories: ['Development', 'UK Business', 'Web Engineering', 'Infynix Solutions'],
    author: 'Infynix',
    thumbnail: '/dev_engineering_uae.jpg',
    bloggerUrl: '',
  },
  {
    id: '8192039481920394850',
    slug: 'ai-automation-enterprise-crm-uk-8192039481920394850',
    title: 'AI Automation & Intelligent CRMs: How UK Enterprises Eliminate Manual Work in 2026',
    content: `<p>Across the UK's commercial hubs—from London and Leeds to Edinburgh and Bristol—operations teams spend hundreds of hours each week on repetitive data entry, lead forwarding, and appointment scheduling.</p>
<p>In 2026, manual business operations are an expensive bottleneck. <strong>Forward-thinking UK companies are deploying autonomous AI middleware and CRM automation to scale revenue without ballooning operational headcount.</strong></p>
<hr/>
<h2>The Cost of Fragmented Software Stacks</h2>
<p>A typical UK enterprise operates between 4 to 8 disconnected software platforms: a website form, email inbox, accounting software, and an off-the-shelf CRM. When data fails to flow automatically between these systems, client inquiries go cold and deals stall.</p>
<h2>1. Autonomous Conversational & Lead Workflows</h2>
<p>Infynix Development engineers custom conversational bots and lead routing pipelines integrated directly into core CRMs (HubSpot, Salesforce, Zoho). Inquiries receive instant qualification, pricing estimations, and calendar bookings 24/7.</p>
<h2>2. AI-Powered Document Parsing & Invoicing</h2>
<p>Extracting data from supplier invoices, contracts, and compliance paperwork used to require dedicated administrative hours. Custom AI models process unstructured PDFs and sync line items directly with UK accounting platforms (Xero, Sage) within seconds.</p>
<h2>3. Unified Real-Time Executive Dashboards</h2>
<p>Instead of manually compiling spreadsheets, leadership teams access live BI dashboards that synthesize marketing spend, conversion velocity, and operational performance into a single pane of glass.</p>
<hr/>
<h2>Automate Your Enterprise Workflows</h2>
<p>Explore how Infynix Development engineers custom AI workflows and system integrations built for measurable business scale.</p>
<p><a href="/contact" style="color: #007A5E; font-weight: bold; text-decoration: underline;">Schedule an enterprise automation consultation →</a></p>`,
    summary: 'Discover how UK enterprises in London and across the nation use custom AI middleware, automated workflows, and intelligent CRM pipelines to cut administrative overhead by 70%.',
    published: '2026-09-21T04:15:00.000-07:00',
    formattedDate: 'Sep 21, 2026',
    updated: '2026-09-21T04:15:00.000-07:00',
    categories: ['Development', 'AI Automation', 'UK Business', 'Infynix Solutions'],
    author: 'Infynix',
    thumbnail: '/ai_automation_uae.jpg',
    bloggerUrl: '',
  },
  {
    id: '9283746192837461928',
    slug: 'high-ticket-b2b-lead-gen-london-uk-9283746192837461928',
    title: 'High-Ticket B2B Lead Generation in London & the UK: The Omnichannel Blueprint',
    content: `<p>Securing high-ticket corporate clients and institutional contracts in London requires a completely different playbook than standard high-volume consumer lead generation.</p>
<p>Senior UK executives and enterprise decision-makers do not fill out generic social media forms. <strong>They demand high-production brand authority, verified proof, and seamless digital access.</strong></p>
<hr/>
<h2>The High-Ticket Acquisition Funnel</h2>
<p>Standard lead funnels fail in the UK enterprise market because they lack depth. Low-production creatives and generic landing pages immediately undermine the prestige and trust required to close five- and six-figure contracts.</p>
<h2>1. Cinematic Media as a Trust Accelerator</h2>
<p>Infynix Media captures corporate authority through studio lighting, professional cinematography, and documentary-style case studies. When high-value prospects watch your brand film, the barrier to trust drops immediately.</p>
<h2>2. Account-Based Marketing (ABM) on LinkedIn Enterprise</h2>
<p>Using proprietary audience layering across LinkedIn Enterprise, Meta VIP targeting, and high-intent Google search keywords, our Agency team puts your message directly in front of vetted UK C-suite decision-makers.</p>
<h2>3. VIP Dedicated Portal Architecture</h2>
<p>Rather than directing traffic onto a generic corporate home page, each campaign guides prospects to dedicated, ultra-fast landing pages with bespoke video walkthroughs, client case evidence, and direct calendar reservation options.</p>
<hr/>
<h2>Attract High-Value Clients Across the UK</h2>
<p>Discover how Infynix combines Media production with Agency precision to engineer premium client acquisition pipelines.</p>
<p><a href="/contact" style="color: #007A5E; font-weight: bold; text-decoration: underline;">Request a private growth strategy briefing →</a></p>`,
    summary: 'Learn why generic lead forms fail for corporate services in London, and how cinematic storytelling paired with Account-Based Marketing captures high-value UK clients.',
    published: '2026-09-21T04:30:00.000-07:00',
    formattedDate: 'Sep 21, 2026',
    updated: '2026-09-21T04:30:00.000-07:00',
    categories: ['Agency', 'Media', 'UK Business', 'Lead Generation', 'Infynix Solutions'],
    author: 'Infynix',
    thumbnail: '/lead_generation_uk.jpg',
    bloggerUrl: '',
  },
];

let cachedPosts = null;

// Parse standard Blogger feed entry
const parseEntries = (entries) => {
  return entries.map((entry) => {
    const fullId = entry.id?.$t || '';
    const id = extractPostId(fullId);
    const title = entry.title?.$t || 'Untitled Post';
    const content = entry.content?.$t || '';
    const published = entry.published?.$t || '';
    const updated = entry.updated?.$t || published;

    const categories = (entry.category || [])
      .map((cat) => {
        if (typeof cat === 'string') return cat;
        return cat.term || '';
      })
      .filter(Boolean);

    const alternateLink = (entry.link || []).find(
      (l) => l.rel === 'alternate' && l.type === 'text/html'
    )?.href || '';

    const authorName = entry.author?.[0]?.name?.$t || 'Infynix';
    const thumbnail = extractThumbnail(content, categories, title);
    const summary = createSnippet(content, 180);
    const slug = generateSlug(title, id);

    return {
      id,
      slug,
      title,
      content,
      summary,
      published,
      formattedDate: formatBloggerDate(published),
      updated,
      categories,
      author: authorName,
      thumbnail,
      bloggerUrl: alternateLink,
    };
  });
};

export const fetchBloggerPosts = async (forceRefresh = false) => {
  if (!forceRefresh && cachedPosts && cachedPosts.length > 0) {
    return cachedPosts;
  }

  // If running in SSR / Node environment where window is undefined
  if (typeof window === 'undefined') {
    return INITIAL_POSTS;
  }

  return new Promise((resolve) => {
    const callbackName = `bloggerCallback_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

    const timer = setTimeout(() => {
      cleanup();
      cachedPosts = cachedPosts || INITIAL_POSTS;
      resolve(cachedPosts);
    }, 4000);

    const cleanup = () => {
      clearTimeout(timer);
      try {
        delete window[callbackName];
        const script = document.getElementById(callbackName);
        if (script) script.remove();
      } catch {
        // ignore cleanup errors
      }
    };

    window[callbackName] = (data) => {
      cleanup();
      try {
        const entries = data?.feed?.entry || [];
        if (entries.length > 0) {
          const parsed = parseEntries(entries);
          // Combine live Blogger posts with initial posts so categories are never empty
          const parsedTitles = new Set(parsed.map((p) => p.title.toLowerCase().trim()));
          const remainingInitial = INITIAL_POSTS.filter(
            (p) => !parsedTitles.has(p.title.toLowerCase().trim())
          );
          const combined = [...parsed, ...remainingInitial];
          cachedPosts = combined;
          resolve(combined);
          return;
        }
      } catch (err) {
        console.warn('Error parsing Blogger JSONP feed:', err);
      }
      cachedPosts = cachedPosts || INITIAL_POSTS;
      resolve(cachedPosts);
    };

    try {
      const script = document.createElement('script');
      script.id = callbackName;
      script.src = `${BLOGGER_URL}/feeds/posts/default?alt=json-in-script&callback=${callbackName}`;
      script.onerror = () => {
        cleanup();
        cachedPosts = cachedPosts || INITIAL_POSTS;
        resolve(cachedPosts);
      };
      document.head.appendChild(script);
    } catch {
      cleanup();
      cachedPosts = cachedPosts || INITIAL_POSTS;
      resolve(cachedPosts);
    }
  });
};
