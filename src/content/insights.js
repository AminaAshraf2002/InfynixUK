// Insights articles for the UK site.
//
// Each article has a short lead (`content`, split on blank lines), a set of
// `sections` (heading plus paragraphs) and `sources`: the outbound citations
// the article relies on. Written for UK readers: UK GDPR and PECR, the ICO,
// the Surveillance Camera Code, HSE guidance and Cyber Essentials.

export const insightsData = [
  {
    slug: 'what-is-growth-engineering',
    title: 'What is Growth Engineering and Why Your Business Needs It',
    category: 'Growth Engineering',
    summary:
      'Why UK businesses lose revenue in the gaps between their website, their ads and their systems, and how connecting them under one number the finance director recognises changes the result.',
    content: `
      Most UK businesses we meet have the pieces. A website that was expensive, an ad agency that sends reports, a CRM someone configured two years ago and an accounting package that Making Tax Digital made the system of record. The pieces do not talk to each other, and the gaps between them are where the marketing budget goes.

      Growth Engineering is the practice of closing those gaps deliberately: a site search engines can read, campaigns measured against a lead the sales team applies, consent handled so measurement survives, and systems that carry the enquiry from click to invoice without re-keying.
    `,
    sections: [
      {
        heading: 'The finance director’s question',
        paragraphs: [
          'Marketing reports are full of numbers that never appear in the accounts: impressions, reach, sessions, engagement, even leads. The finance director asks a simpler question, which is what did we spend and what did it bring in. Answering it requires a definition of a qualified lead that sales apply, a CRM that records source and outcome, calls counted, and revenue matched back to the campaign that produced it.',
          'When no supplier owns that number, each optimises its own piece. The web developer blames the leads, the agency blames the website, and the CRM was set up by someone who left. Growth Engineering starts by making one team responsible for the number and then building what produces it.',
        ],
      },
      {
        heading: 'Google has to be able to read the site',
        paragraphs: [
          'Many UK business sites are built on frameworks that ship an empty page and fill it with JavaScript in the browser. Google renders JavaScript in a second pass, with a delay and not always completely, and Google’s own JavaScript SEO documentation recommends server-side or pre-rendering for content that has to be indexed. Assistants that read the web get nothing from a page that only exists after a script runs.',
          'Our own sites are pre-rendered for that reason, and the same fix on a client’s site is usually the largest technical gain available. Core Web Vitals, the page experience measures Google publishes, are treated as acceptance criteria for any page we build.',
        ],
      },
      {
        heading: 'Consent that keeps the measurement',
        paragraphs: [
          'UK GDPR governs personal data and PECR governs cookies and electronic marketing, and the ICO has been clear that a consent banner without a genuine choice does not count. Implemented badly, consent removes half of a business’s analytics and the platforms cannot learn. Implemented properly, with Google’s consent mode and server-side tagging, it keeps the business compliant and keeps enough signal for campaigns to optimise.',
          'The second half is feeding outcomes back. When qualified leads and closed deals are uploaded to Google and Meta as offline conversions, the platforms optimise for what the business wants rather than for whoever fills forms fastest. In expensive UK auctions for legal, dental, cosmetic and property terms, this is the largest lever most accounts have never pulled.',
        ],
      },
      {
        heading: 'Speed to lead',
        paragraphs: [
          'Research published in Harvard Business Review found that firms contacting a lead within an hour were far more likely to qualify it than those that waited, and that most firms did not manage it. A UK enquiry for a solicitor, an implant or a kitchen has usually gone to three companies at once; the one that responds first, usefully, wins the meeting. Routing, acknowledgement and escalation when nobody responds are engineering problems with known solutions.',
        ],
      },
      {
        heading: 'From the CRM to Xero without re-keying',
        paragraphs: [
          'The last gap is between the CRM and the accounts. A deal closed in the CRM is re-keyed into Xero, Sage or QuickBooks, the customer exists twice, and the salesperson never learns the invoice is overdue. Connecting the two with the right VAT treatment, and with digital links preserved as Making Tax Digital requires, closes the loop: the campaign that produced the enquiry can be matched to the revenue it produced.',
          'That is Growth Engineering in practice. Not a new platform, but the connections between the platforms a business already pays for, built so the finance director’s question can be answered every month.',
        ],
      },
      {
        heading: 'Where to start',
        paragraphs: [
          'Three questions decide the order of work. Can Google read the site? Does sales agree what a lead is, and is it applied in the CRM? Can a closed deal be traced to the campaign that produced it? The first no is where the engineering begins.',
        ],
      },
    ],
    sources: [
      { label: 'Google Search Central: Understand JavaScript SEO basics', url: 'https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics' },
      { label: 'web.dev: Rendering on the web', url: 'https://web.dev/articles/rendering-on-the-web' },
      { label: 'web.dev: Web Vitals', url: 'https://web.dev/articles/vitals' },
      { label: 'ICO: Guide to PECR', url: 'https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/' },
      { label: 'ICO: UK GDPR guidance and resources', url: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/' },
      { label: 'Google Analytics Help: Consent mode', url: 'https://support.google.com/analytics/answer/9976101' },
      { label: 'Harvard Business Review: The Short Life of Online Sales Leads', url: 'https://hbr.org/2011/03/the-short-life-of-online-sales-leads' },
      { label: 'GOV.UK: Making Tax Digital for VAT', url: 'https://www.gov.uk/government/collections/making-tax-digital-for-vat' },
    ],
    related: [
      { label: 'Infynix Agency: performance marketing and search', path: '/solutions/infynix-agency' },
      { label: 'SEO services and search infrastructure', path: '/solutions/seo-services' },
      { label: 'Marketing automation and CRM', path: '/solutions/marketing-automation-crm' },
      { label: 'Custom CRM and ERP software', path: '/solutions/crm-erp-development' },
    ],
    date: 'September 6, 2026',
    author: 'Infynix Tech Lab',
  },
  {
    slug: 'ai-surveillance-computer-vision-security',
    title: 'How Real-Time AI Computer Vision Improves Facility Security',
    category: 'AI Vision',
    summary:
      'How object detection on edge hardware turns recorded video into live alerts for UK warehouses, yards and sites, and how to deploy it within UK GDPR, the Surveillance Camera Code and HSE expectations.',
    content: `
      Most UK facilities record video that nobody watches. A guard cannot attend to forty feeds, so incidents are found afterwards, if at all, and the footage becomes evidence for an insurance claim rather than a way to prevent the loss.

      Computer vision changes what cameras are for. A model running on hardware at the site watches every feed continuously, detects the conditions that matter and raises an alert with a clip while there is still time to act. Done properly, it also produces the safety record that HSE conversations need.
    `,
    sections: [
      {
        heading: 'Conditions, not identities',
        paragraphs: [
          'Object detection models such as the YOLO family identify people, vehicles and objects in each frame and track them across frames. That is enough to express most security and safety needs as rules: a person in a zone after hours, a vehicle in a loading bay too long, a forklift and a pedestrian in the same aisle, a worker without a hard hat in a live area, a fire door propped open.',
          'None of these require knowing who the person is. Designing around conditions rather than identities keeps the system accurate and keeps the data protection analysis straightforward. Biometric identification of individuals is a different legal category in the UK with a much higher bar, and it is rarely needed for security or safety outcomes.',
        ],
      },
      {
        heading: 'The legal frame in the UK',
        paragraphs: [
          'Video of identifiable people is personal data under UK GDPR, and the ICO expects a lawful basis, proportionality, signage, retention set to the purpose and a data protection impact assessment for systems that monitor people systematically. The Surveillance Camera Code of Practice applies to relevant public authorities and is treated as good practice by everyone else. The ICO’s guidance on AI adds expectations about explaining what an automated system does.',
          'A deployment that starts with a written DPIA for the specific site and use cases, states plainly on signage what the system detects, masks public areas and neighbours where required and keeps footage on the premises tends to satisfy all three without difficulty.',
        ],
      },
      {
        heading: 'Why processing stays on site',
        paragraphs: [
          'Streaming every camera to the cloud is expensive, slow and creates a large store of footage nobody wants to hold. Edge hardware such as NVIDIA’s Jetson modules runs detection at the site, so only events with short clips leave the premises, the system keeps working when the connection drops, and residency questions from customers or insurers are answered simply.',
          'Existing cameras can usually be reused. A survey assesses each one’s resolution, angle and lighting against the intended detection, and only the gaps are filled.',
        ],
      },
      {
        heading: 'False alarms decide whether anyone responds',
        paragraphs: [
          'Sites with motion-triggered alarms turn them off within weeks because foxes, rain, headlights and moving shadows fire them all night and keyholders stop responding. Object detection tuned to the site distinguishes a person at the fence from a fox and a vehicle in the yard from a tree in the wind.',
          'The honest measure is the false alarm rate against the previous system, measured in a pilot on real events, with zones and thresholds tuned in the first weeks. An alert that carries a clip lets the responder confirm before anyone is sent.',
        ],
      },
      {
        heading: 'A safety record for the HSE conversation',
        paragraphs: [
          'HSE guidance on workplace transport is clear that separating vehicles and pedestrians is the priority on sites where both move, and that near misses should be recorded. In practice they rarely are, so safety managers work from incident reports written after someone was hurt. A vision system logs near misses as they happen, by zone, shift and time, and gives the evidence for a layout change, a training intervention or a conversation with a contractor.',
        ],
      },
      {
        heading: 'How a deployment runs',
        paragraphs: [
          'Survey and DPIA first. A pilot on a handful of cameras with false alarm rate measured. Rollout with alerts delivered to phones, the control room, the incident system or access control in the format each expects, followed by a tuning period on real events. A managed service keeps the hardware healthy, the models current and the reporting flowing to security and safety teams.',
        ],
      },
    ],
    sources: [
      { label: 'ICO: UK GDPR guidance and resources', url: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/' },
      { label: 'ICO: Guidance on AI and data protection', url: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/' },
      { label: 'GOV.UK: Surveillance Camera Code of Practice', url: 'https://www.gov.uk/government/publications/update-to-surveillance-camera-code' },
      { label: 'HSE: Workplace transport', url: 'https://www.hse.gov.uk/workplacetransport/' },
      { label: 'Ultralytics YOLO documentation', url: 'https://docs.ultralytics.com/' },
      { label: 'NVIDIA Jetson modules', url: 'https://developer.nvidia.com/embedded/jetson-modules' },
      { label: 'NCSC: Cyber Essentials overview', url: 'https://www.ncsc.gov.uk/cyberessentials/overview', note: 'for securing the edge devices and network the system runs on' },
    ],
    related: [
      { label: 'AI vision and security analytics', path: '/solutions/ai-surveillance' },
      { label: 'Artificial intelligence and AI integration', path: '/solutions/artificial-intelligence' },
      { label: 'Infynix Growth Solutions: software and systems', path: '/solutions/infynix-growth-solutions' },
    ],
    date: 'September 6, 2026',
    author: 'Infynix AI Team',
  },
];
