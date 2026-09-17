// UK post-production landing page.
//
// Built to the depth the ranking field actually carries, measured 15 Sep 2026:
// competitors for UK software and media terms run 2,600 to 16,753 words with 10
// to 25 H2 and 30 to 86 H3. The standard Infynix landing template tops out near
// 1,000 words, which is why every SEO tool reports thin content. This page uses
// the optional deep sections on LandingPage: capabilities, specs, useCases,
// engagements and detail blocks.
//
// Positioned as remote post-production rather than production, which is the UK
// operating model: editing, grading, sound and delivery, with shooting handled
// by the India and UAE teams or by the client's own crew.

export const postProductionPages = [
  {
    slug: 'video-post-production-company-in-london',
    city: 'London',
    cityAlt: null,
    region: 'United Kingdom',
    service: 'Video Post-Production',
    category: 'media',
    title: 'Video Post-Production Company in London | Infynix',
    description:
      'Remote video post-production for London brands and agencies: editing, colour grading, sound, motion graphics and multi-platform delivery, on a retainer or per project.',
    h1: 'Video Post-Production Company in London',
    heroSubtitle:
      'Editing, grading, sound and delivery, run remotely for London brands and agencies. You shoot, or we arrange the shoot. Everything after the camera stops is ours.',

    intro: [
      'Most London brands do not have a post-production problem. They have a throughput problem. Footage arrives from a shoot, a freelancer, a conference or a phone, and it sits on a drive because nobody owns the eight hours it takes to turn it into something publishable.',
      'Infynix runs post-production as a service rather than as a project. Footage comes in through a shared workspace, comes back cut for the platforms it is going to live on, in the aspect ratios and durations each one actually needs. No studio booking, no day rate for a suite in Soho, no waiting for an editor to come off another job.',
      'We work with marketing teams, agencies who need overflow capacity, and founders who are shooting far more than they are publishing. The model is deliberately remote: post-production has not needed everyone in one room for a decade, and pricing that assumes otherwise is charging you for a building.',
      'The practical effect is throughput. A brand that was publishing one film a month because that was as fast as its edit capacity allowed usually finds the constraint moves somewhere else entirely, normally to how much it is shooting, which is a far better problem to have and a much cheaper one to solve.',
    ],

    servicesHeading: 'Post-production services',
    services: [
      { name: 'Video Editing', desc: 'Offline and online edit from rushes to final cut, including selects, structure, pacing and revisions to a defined round count.' },
      { name: 'Colour Grading', desc: 'Primary and secondary grading, shot matching across cameras and days, and LUT creation so a brand looks consistent across every film.' },
      { name: 'Sound Design & Mix', desc: 'Dialogue cleanup, noise reduction, music selection and licensing, sound effects and a broadcast-safe final mix.' },
      { name: 'Motion Graphics', desc: 'Lower thirds, titles, animated logos, data visualisation and explainer sequences built to your brand system.' },
      { name: 'Subtitling & Captions', desc: 'Burned-in and sidecar captions, multi-language subtitle files, and the open captions that carry short-form on silent autoplay.' },
      { name: 'Versioning & Delivery', desc: 'One edit cut into every ratio and duration a campaign needs, exported to platform specification rather than one master everyone crops badly.' },
    ],

    capabilitiesHeading: 'What comes back to you',
    capabilities: [
      { name: 'Hero film', desc: 'The long-form cut for the homepage, the pitch deck and the event loop, usually 60 to 180 seconds.' },
      { name: 'Paid social cutdowns', desc: 'Six-second, fifteen-second and thirty-second versions built for the platform, not trimmed from the hero at the last minute.' },
      { name: 'Vertical masters', desc: 'Nine by sixteen cuts framed deliberately rather than centre-cropped, with safe areas respected for each platform UI.' },
      { name: 'Square and landscape', desc: 'One by one and sixteen by nine masters for feed, YouTube and display placements.' },
      { name: 'Caption files', desc: 'SRT and VTT sidecars plus burned-in open captions, because most feed video is watched muted.' },
      { name: 'Stills and frame grabs', desc: 'High-resolution pulls from the footage for use as thumbnails, ad creative and press assets.' },
      { name: 'Project archive', desc: 'Organised source media and project files handed over, so you are never locked to one editor.' },
      { name: 'Brand template', desc: 'Reusable title and lower-third templates so future edits stay on brand without rebuilding.' },
    ],

    specsHeading: 'Turnaround and formats',
    specsColumns: ['Deliverable', 'Typical turnaround', 'Formats supplied'],
    specs: [
      ['Social cutdown', '48 hours', '9:16, 1:1, 16:9 with captions'],
      ['Corporate or brand film', '5 to 10 working days', '16:9 master plus social versions'],
      ['Event recap', '3 to 5 working days', '16:9 and 9:16, music licensed'],
      ['Motion graphics explainer', '10 to 15 working days', '16:9, 1:1, transparent overlays'],
      ['Podcast video edit', '48 to 72 hours', 'Full episode plus 4 to 6 vertical clips'],
      ['Subtitle pass only', '24 hours', 'SRT, VTT and burned-in'],
    ],

    useCasesHeading: 'Who this is for',
    useCases: [
      { name: 'In-house marketing teams', desc: 'You are shooting more than you can publish. Post is the bottleneck, and hiring an editor for the volume you have is hard to justify.' },
      { name: 'Agencies needing overflow', desc: 'Your edit suite is full and a client deadline is not moving. We work white label, to your brand guidelines, under your name.' },
      { name: 'Founders and executives', desc: 'Regular thought-leadership content that needs to look considered without consuming a day of your week per clip.' },
      { name: 'Event and conference organisers', desc: 'Multi-day footage that needs a recap film fast enough to matter, plus clips for next year’s promotion.' },
      { name: 'Podcast and series producers', desc: 'Weekly episodes needing a consistent edit, plus the vertical clips that actually grow the audience.' },
      { name: 'E-commerce and D2C brands', desc: 'Product video at volume, versioned per SKU and per platform, on a predictable monthly cadence.' },
    ],

    engagementsHeading: 'How we work together',
    engagements: [
      { name: 'Per project', desc: 'A defined deliverable with a fixed quote and a set number of revision rounds. Best for one-off films where the scope is clear before we start.' },
      { name: 'Monthly retainer', desc: 'A fixed block of post-production hours each month, with priority turnaround. Most clients settle here once volume is steady.' },
      { name: 'White label for agencies', desc: 'We work under your brand, to your guidelines, invisible to your client. NDAs signed before any discussion of the account.' },
      { name: 'Rescue and recut', desc: 'Existing footage or a stalled edit that needs finishing. We audit what exists and tell you honestly whether it is salvageable.' },
    ],

    detail: [
      {
        heading: 'Why remote post-production works',
        body: [
          'Post-production stopped requiring everyone in one room somewhere around the point that proxy workflows and cloud review became normal. What a London edit suite charges for is largely the building, the machine and the fact that you are physically present while someone else does the work.',
          'Working remotely changes the economics without changing the output. You review cuts on a timestamped link rather than sitting behind an editor for an afternoon. Notes are written against a frame, so nothing is lost in translation, and the edit continues after you close the laptop rather than stopping when the session ends.',
        ],
        points: [
          { name: 'Frame-accurate review', desc: 'Comments attached to a timecode rather than described in an email thread, so feedback is unambiguous and traceable.' },
          { name: 'Defined revision rounds', desc: 'Two rounds included as standard, written into the quote, so neither side is guessing when a project is finished.' },
          { name: 'Time-zone overlap', desc: 'Our teams span India, the UAE and the UK, so notes left at the end of a London day are usually actioned by the following morning.' },
        ],
      },
      {
        heading: 'How footage reaches us, and what comes back',
        body: [
          'The handover is the part most post-production relationships get wrong. Footage arrives as an unlabelled folder, the brief lives in somebody’s inbox, and the first cut is a guess. We front-load that instead.',
          'Every project starts with a short written brief covering what the film has to achieve, who it is for, where it will run, and what already exists that it has to match. That document is what the edit is judged against, which removes most of the subjectivity from the first review.',
        ],
        points: [
          { name: 'Upload, not couriers', desc: 'A shared workspace per project. No drives in the post, no compressed WeTransfer links that expire before anyone downloads them.' },
          { name: 'Written brief first', desc: 'Purpose, audience, placement and reference films agreed before the edit starts, so round one is a real cut rather than an exploration.' },
          { name: 'Music licensed properly', desc: 'Every track cleared for the territory and platform the film will run on, with the licence supplied alongside the delivery.' },
        ],
      },
      {
        heading: 'Editing for silent autoplay, and why most brand video ignores it',
        body: [
          'The majority of video on a feed is watched with the sound off, at least for the first few seconds. That single fact should change how a film is cut, and in most brand video it changes nothing at all: the opening still relies on a voiceover nobody hears, and the point arrives at twenty seconds when the viewer left at three.',
          'Editing for silent autoplay is not a caption pass bolted on at the end. It changes the structure. The claim moves to the first frame, on screen as text rather than spoken. Motion in the opening second earns the stop. Captions are styled as part of the design rather than generated automatically in whatever the platform defaults to, which is why so much branded content looks like a screen recording.',
          'It also changes what the shoot needs to deliver, which is one reason we ask to see the brief before the footage exists wherever possible. A film cut for sound and a film cut for silence want different coverage.',
        ],
        points: [
          { name: 'Hook in the first frame', desc: 'The proposition on screen immediately, as text and motion, not held back for a reveal that most viewers never reach.' },
          { name: 'Designed captions', desc: 'Typeset to your brand rather than auto-generated, positioned clear of the platform UI so nothing is obscured.' },
          { name: 'Sound as an upgrade', desc: 'The film works muted and is better with audio, rather than being incomprehensible without it.' },
        ],
      },
      {
        heading: 'What we cannot do from London, and what that means',
        body: [
          'We do not shoot in the UK. Production, crew, kit hire and location work are handled by our teams in India and the UAE, or by a crew you already work with. That is a deliberate boundary rather than a gap we are hoping you will not notice.',
          'In practice it matters less than it sounds. Most brands already have footage, or a production partner they like, and what they lack is the capacity to finish it. Where you do need a shoot in the UK, we will say so plainly and either recommend a crew or work alongside the one you choose.',
        ],
        points: [
          { name: 'You shoot, we finish', desc: 'The most common arrangement. Your crew or your phone footage, our post-production.' },
          { name: 'We coordinate a crew', desc: 'Where you have no production partner, we brief and manage one, and take over at the point the footage lands.' },
          { name: 'Production in India and the GCC', desc: 'Full production capability through the Infynix Media teams in Kochi and the UAE, where shooting is part of the service.' },
        ],
      },
    ],

    localHeading: 'Working with London brands from outside the M25',
    localBody: [
      'London post-production pricing carries the cost of London property, and for remote work that is a cost you are paying for nothing.',
      'The practical questions are the ones that actually matter: how fast is turnaround, how are notes handled, who owns the project files, and what happens when a deadline moves. We answer those in writing before an engagement starts.',
      'Our UK company is registered at 39 Becontree Avenue, Dagenham, and we work with clients across Greater London, Manchester, Birmingham and Leeds. Meetings happen on video as standard, in person where a project genuinely warrants it.',
    ],

    faqs: [
      { question: 'Do you shoot video in London?', answer: 'No. The UK operation is post-production only: editing, grading, sound, motion graphics and delivery. Production is handled by our teams in India and the UAE, or by a crew you already work with. We would rather be straightforward about that than take a shoot brief and subcontract it quietly.' },
      { question: 'How fast is turnaround?', answer: 'A social cutdown is typically 48 hours, a corporate or brand film 5 to 10 working days, and a motion graphics explainer 10 to 15. Retainer clients get priority and generally sit at the faster end. Genuinely urgent work can be expedited, and we will tell you the cost before we start rather than after.' },
      { question: 'What footage formats do you accept?', answer: 'Anything a modern camera or phone produces, including log and raw formats from Sony, Canon, Blackmagic, RED and ARRI, plus drone and action camera footage. If you are unsure, send a sample clip and we will confirm before you upload the full project.' },
      { question: 'How many revision rounds are included?', answer: 'Two as standard, written into the quote. Most projects finish inside that when the brief is agreed properly up front. Further rounds are charged at an hourly rate that is stated before you commit, so there are no surprises at invoice.' },
      { question: 'Do you work white label for agencies?', answer: 'Yes, and it is a substantial part of the work. We operate under your brand, to your guidelines, and your client need never know we exist. NDAs are signed before any detailed discussion of the account.' },
      { question: 'Who owns the project files?', answer: 'You do. On final payment you receive the organised source media and the project files, so you are never locked to one editor or one agency. We keep a backup for six months in case you need a recut, then it is deleted unless you ask otherwise.' },
      { question: 'Do you handle music licensing?', answer: 'Yes. Every track is cleared for the territory and platform the film will run on, and the licence is supplied with the delivery. This matters more than people expect: an uncleared track is the most common reason a finished campaign film gets pulled from a platform.' },
      { question: 'What does post-production cost?', answer: 'We do not quote from a rate card. A discovery session establishes the scope, the systems involved and the outcome you are working towards, and the proposal that follows is a fixed price or a monthly retainer for exactly that. If a smaller first phase would answer the question, we say so.' },
      { question: 'Can you match an existing brand look?', answer: 'Yes. Send reference films and any brand guidelines and we will match grade, typography, pacing and title treatment. Where no guidelines exist, we can build a reusable template during the first project so later edits stay consistent without rebuilding each time.' },
      { question: 'Can you rescue an edit another editor started?', answer: 'Usually. We start with a paid audit of the footage and project files to tell you honestly what is usable and what needs redoing. Sometimes the answer is that starting again is cheaper than repairing, and we would rather say that at the outset than bill for salvage that was never going to work.' },
    ],

    related: [
      'digital-marketing-agency-in-london',
      'seo-company-in-london',
      'web-design-company-in-london',
      'software-development-company-in-london',
    ],
  },
];
