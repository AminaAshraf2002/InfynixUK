// Infynix Growth Solutions, UK: depth content for the AI, vision, IoT,
// integration, data and product engineering pages (second half).
//
// Same UK framing as growth.js: UK GDPR and ICO guidance, the EU AI Act for
// exporters, PSTI for connected products, Open Banking, Companies House and
// HMRC APIs, retailer EDI, Power BI, UK cloud regions. Keyed by service
// slug, merged in index.js.

export const growthDepth2 = {
  'artificial-intelligence': {
    overview: [
      'Artificial intelligence and AI integration for UK businesses that want the technology doing real work: reading and classifying documents, answering customers and staff from the company’s own knowledge, extracting data from tenders, contracts and invoices, forecasting demand, and taking the repetitive judgement calls that currently sit in a queue. We build these systems from our office in Dagenham for clients across the country, on the company’s real data, under UK GDPR and the ICO’s guidance on AI.',
      'The British regulatory picture is specific. The ICO expects a lawful basis, transparency and, for significant automated decisions, human review and a route to challenge. Firms selling into Europe also fall under the EU AI Act, whose obligations depend on the use case. Sector rules apply on top: the FCA for financial firms, the SRA for solicitors, CQC for care. None of this prevents useful AI. It shapes where a model decides, where it recommends, and what is logged.',
      'We choose the model for the job rather than the headline, run it privately in UK cloud regions where the data demands it, retrieve answers from the company’s own documents so the system cites sources instead of inventing them, evaluate accuracy against a test set before launch, and monitor cost and quality after. Where a plain rule or a small model does the job, that is what ships.',
      'Law and accountancy firms, insurers and brokers, property businesses, manufacturers and distributors, healthcare and care providers, recruitment agencies, customer service operations, and SaaS companies adding AI features to their product.',
    ],
    capabilitiesHeading: 'What we build',
    capabilities: [
      { name: 'Document intelligence', desc: 'Contracts, tenders, invoices, claims, applications and correspondence read, classified and extracted into structured data.' },
      { name: 'Knowledge assistants', desc: 'Staff and customer assistants that answer from the company’s policies, manuals and records, with sources shown.' },
      { name: 'Customer service AI', desc: 'Triage, drafting and resolution across email, chat and WhatsApp with handover to people and full logging.' },
      { name: 'Forecasting and scoring', desc: 'Demand, cash, churn and lead quality models built on the company’s history and tested honestly.' },
      { name: 'Process decisioning', desc: 'Approvals, routing and checks made by model where safe, with human review where the ICO expects it.' },
      { name: 'Private deployment', desc: 'Models run in UK regions or on private infrastructure when data cannot leave the business.' },
      { name: 'Evaluation and monitoring', desc: 'Test sets, accuracy measures, cost tracking and drift alerts so quality is known, not assumed.' },
      { name: 'AI in your product', desc: 'Features built into SaaS and customer products with the guardrails a UK or EU buyer will ask about.' },
    ],
    specsHeading: 'Typical engagements',
    specsColumns: ['Engagement', 'Typical duration', 'Output'],
    specs: [
      ['AI opportunity review', '1 to 2 weeks', 'Use cases ranked by value, feasibility and risk, with a plan'],
      ['Proof of value', '3 to 6 weeks', 'A working system on real data with measured accuracy'],
      ['Production build', '6 to 14 weeks', 'Integrated, monitored, documented system with governance'],
      ['Document processing pipeline', '4 to 10 weeks', 'Capture, extraction, validation, posting to systems'],
      ['Assistant deployment', '4 to 8 weeks', 'Knowledge base, retrieval, interface, evaluation, handover rules'],
      ['Managed AI', 'Monthly', 'Monitoring, retraining, cost review, model updates'],
    ],
    useCasesHeading: 'Who it is for',
    useCases: [
      { name: 'Law and accountancy', desc: 'Document review, drafting support and onboarding checks with the audit trail a regulator expects.' },
      { name: 'Insurance and brokers', desc: 'Claims and policy documents processed, queries answered, fraud signals flagged for people.' },
      { name: 'Property', desc: 'Applicant handling, document checks and maintenance triage across a portfolio.' },
      { name: 'Manufacturing and distribution', desc: 'Demand forecasting, supplier document processing and technical knowledge assistants.' },
      { name: 'Healthcare and care', desc: 'Administrative automation and staff assistants built with the controls the sector requires.' },
      { name: 'SaaS', desc: 'AI features in the product, with evaluation and cost control from the start.' },
    ],
    engagementsHeading: 'Ways of working',
    engagements: [
      { name: 'Review and roadmap', desc: 'A short engagement that identifies the use cases worth doing and the ones to avoid.' },
      { name: 'Proof of value', desc: 'One use case built on real data with measured results before committing further.' },
      { name: 'Production programme', desc: 'Use cases delivered in sequence, each integrated, evaluated and governed.' },
      { name: 'Managed AI', desc: 'Ongoing monitoring, improvement and cost control of what is in production.' },
    ],
    detail: [
      {
        heading: 'Answers with sources, from your own documents',
        body: [
          'A general model asked about a company’s cancellation policy, a product’s specification or a clause in a standard contract will produce something fluent and possibly wrong. The systems that work in business retrieve the relevant passages from the company’s own documents first, then answer from those passages and show them, so a member of staff or a customer can check.',
          'We build the retrieval layer over the company’s policies, manuals, records and case history, keep it in step as documents change, evaluate answers against questions with known correct responses, and return a clear “I do not know” with a route to a person when the documents do not cover it.',
        ],
        points: [
          { name: 'Retrieval first', desc: 'Answers grounded in the company’s own documents.' },
          { name: 'Sources shown', desc: 'Every answer cites the passages it used.' },
          { name: 'Kept current', desc: 'The knowledge base updates as documents change.' },
          { name: 'Honest limits', desc: 'A clear handover when the material does not cover the question.' },
        ],
      },
      {
        heading: 'Automated decisions the ICO would recognise',
        body: [
          'UK GDPR restricts decisions made solely by automated means that have legal or similarly significant effects, and the ICO expects transparency, meaningful human involvement where it matters, and a way for people to challenge outcomes. Credit, employment, tenancy, insurance and access to services are the obvious cases. Firms selling into Europe also have the EU AI Act’s risk categories to consider.',
          'We design each use case with a written decision on where the model decides, where it recommends and a person confirms, and where it only assists. Logging captures inputs, outputs and the human action, so the business can explain any outcome and evidence its governance.',
        ],
        points: [
          { name: 'Decision map', desc: 'Where the model decides, recommends or assists, written down.' },
          { name: 'Human review', desc: 'Built in where the decision is significant.' },
          { name: 'Full logging', desc: 'Inputs, outputs and human actions recorded.' },
          { name: 'Explainable', desc: 'Any outcome can be explained to the person affected.' },
        ],
      },
      {
        heading: 'Private where it needs to be, practical where it does not',
        body: [
          'Not every AI workload needs a private model. A marketing assistant drafting social posts can use a commercial API. A system reading client files at a law firm, patient correspondence at a care provider or claims at an insurer needs data to stay in the UK, with a documented processor arrangement or no third party at all.',
          'We deploy models in AWS London, Azure UK South or on private infrastructure where confidentiality requires it, use commercial APIs with UK data handling and contractual terms where they are appropriate, and document which data goes where so the DPIA and supplier questionnaires are answered from fact.',
        ],
        points: [
          { name: 'UK regions', desc: 'Models and data kept in London or UK South where required.' },
          { name: 'Private options', desc: 'Open-weight models on private infrastructure for sensitive work.' },
          { name: 'APIs when suitable', desc: 'Commercial models with UK data terms for lower-risk tasks.' },
          { name: 'Data flows documented', desc: 'What goes where, for the DPIA.' },
        ],
      },
      {
        heading: 'Measured before launch, watched after',
        body: [
          'An AI system that was impressive in a demonstration and unmeasured in production is a risk. Accuracy drifts as documents, customers and language change, costs rise with usage, and nobody notices until a customer complains or the bill arrives.',
          'Every system ships with a test set and an accuracy target agreed with the business, a cost budget with alerts, and monitoring of quality signals such as handover rates and corrections. Managed AI covers reviewing the results, retraining or re-prompting, and updating models as better ones become available.',
        ],
        points: [
          { name: 'Test set', desc: 'Accuracy measured against known-correct examples before launch.' },
          { name: 'Cost budget', desc: 'Usage tracked with alerts, not discovered on the invoice.' },
          { name: 'Quality signals', desc: 'Handovers, corrections and feedback monitored.' },
          { name: 'Kept improving', desc: 'Retraining, prompt updates and model changes managed.' },
        ],
      },
    ],
    extraFaqs: [
      { question: 'Where should we start with AI?', answer: 'With a short review that ranks use cases by value, feasibility and risk. Document processing, knowledge assistants and customer service triage are usually first because the data exists and the return is measurable.' },
      { question: 'Will our data be used to train public models?', answer: 'No. Systems are built on your data under your control, commercial APIs are used only with terms that exclude training, and sensitive workloads run privately in UK regions.' },
      { question: 'How do you handle UK GDPR and the ICO’s AI guidance?', answer: 'Each use case has a documented lawful basis, a decision map showing where humans review, full logging of inputs and outputs, and a DPIA where one is needed. We build to the ICO’s guidance and the EU AI Act where you sell into Europe.' },
      { question: 'Can the assistant answer from our own documents?', answer: 'Yes. Retrieval over your policies, manuals and records means answers come from your material with sources shown, and the assistant hands over to a person when the documents do not cover the question.' },
      { question: 'Which models do you use?', answer: 'Whichever suits the task and the data: commercial models through APIs with UK data terms, open-weight models on private infrastructure, or small specialised models. We choose per use case and can switch as better options appear.' },
      { question: 'How do we know it is accurate?', answer: 'A test set and an accuracy target are agreed before launch, results are measured against it, and quality signals are monitored in production with reviews under managed AI.' },
      { question: 'How long does it take to get something live?', answer: 'A proof of value on real data takes three to six weeks; a production system with integration, monitoring and governance six to fourteen.' },
      { question: 'Can you add AI features to our SaaS product?', answer: 'Yes. We build features into products with evaluation, cost control, privacy handling and the documentation UK and EU customers ask for in security reviews.' },
    ],
  },

  'ai-surveillance': {
    overview: [
      'AI vision and security analytics for UK sites that need to know what is happening across warehouses, yards, construction sites, retail floors, car parks and plants without a person watching every screen: intrusion detected at a fence line at night, a forklift and a pedestrian in the same aisle, a worker without a hard hat in a live zone, a vehicle in a loading bay too long, a fire door propped open. Built from our office in Dagenham on the cameras a site already has where they are adequate, and on new hardware where they are not.',
      'The UK is careful about surveillance, and rightly. UK GDPR and the ICO’s guidance on video surveillance apply to any system capturing identifiable people, the Surveillance Camera Code applies to public bodies and is good practice for everyone, and biometric identification of individuals is a different legal category with a high bar. We design systems around events and safety conditions, not tracking people, and every deployment begins with a data protection impact assessment written for that site.',
      'Detection runs on hardware at the site so only events, not continuous footage, leave the premises. Alerts go to the people who can act, with the clip and the location, into the systems the site already runs. Health and safety teams get a record of near misses and PPE compliance they can use in HSE conversations; security teams get fewer false alarms; operations get visibility of dwell times and bottlenecks without anyone watching a wall of monitors.',
      'Logistics and warehousing operators, construction contractors, manufacturers, retailers, car park and facilities operators, ports and yards, and estates with perimeters to protect.',
    ],
    capabilitiesHeading: 'What the system does',
    capabilities: [
      { name: 'Perimeter and intrusion detection', desc: 'People and vehicles in defined zones at defined times, with far fewer false alarms than motion detection.' },
      { name: 'Vehicle and pedestrian separation', desc: 'Forklift, truck and pedestrian interactions detected and logged as near misses.' },
      { name: 'PPE and safety compliance', desc: 'Hard hats, high-visibility clothing and exclusion zones monitored in live areas.' },
      { name: 'Loading bay and yard analytics', desc: 'Dwell times, occupancy and blocked routes reported to operations.' },
      { name: 'Fire and access events', desc: 'Propped doors, blocked exits and after-hours access flagged in real time.' },
      { name: 'Edge processing', desc: 'Detection on site hardware so footage stays on the premises and bandwidth stays low.' },
      { name: 'Alerting and integration', desc: 'Events to phones, control rooms, incident systems and access control with clips attached.' },
      { name: 'Governance', desc: 'DPIA, signage, retention, access controls and audit logs built into the deployment.' },
    ],
    specsHeading: 'Deployment stages',
    specsColumns: ['Stage', 'Typical duration', 'Output'],
    specs: [
      ['Site survey and DPIA', '1 to 3 weeks', 'Camera assessment, use cases, data protection impact assessment'],
      ['Pilot', '4 to 8 weeks', 'Selected cameras live with tuned detection and measured false alarm rate'],
      ['Rollout', '4 to 12 weeks', 'All zones live, integrations, training for security and safety teams'],
      ['Tuning period', '4 weeks', 'Thresholds and zones adjusted on real events'],
      ['Managed service', 'Monthly', 'Monitoring, model updates, hardware health, reporting'],
      ['Multi-site programme', 'Phased', 'Repeatable deployment across an estate'],
    ],
    useCasesHeading: 'Who it is for',
    useCases: [
      { name: 'Warehousing and logistics', desc: 'Vehicle and pedestrian safety, yard flow and after-hours intrusion.' },
      { name: 'Construction', desc: 'PPE compliance, exclusion zones and site security across changing layouts.' },
      { name: 'Manufacturing', desc: 'Machine guarding zones, restricted areas and safety near-miss records.' },
      { name: 'Retail and car parks', desc: 'Occupancy, dwell and after-hours events without identifying individuals.' },
      { name: 'Ports and yards', desc: 'Perimeters, gates and vehicle movements across large open areas.' },
      { name: 'Facilities and estates', desc: 'Fire doors, access points and perimeters across multiple buildings.' },
    ],
    engagementsHeading: 'Ways of working',
    engagements: [
      { name: 'Survey and pilot', desc: 'One site, a few cameras, measured results and a written DPIA before any rollout.' },
      { name: 'Site deployment', desc: 'A full site live with integrations and training as a fixed-scope project.' },
      { name: 'Estate programme', desc: 'A repeatable deployment across many sites with central reporting.' },
      { name: 'Managed service', desc: 'Monitoring, tuning, updates and reporting month to month.' },
    ],
    detail: [
      {
        heading: 'Events, not people',
        body: [
          'The systems that get UK businesses into trouble are the ones that identify and track individuals without a clear basis. The systems that help are the ones that detect conditions: a person in a zone that should be empty, a vehicle where a pedestrian is, a missing hard hat, a door that should be shut. None of those require knowing who the person is, and designing them that way keeps the data protection analysis straightforward.',
          'We build detection around events and conditions, keep footage on site with retention set to the purpose, blur or exclude areas where privacy demands it, and write the DPIA for the specific site and use cases, with signage and a privacy notice that say what the system actually does.',
        ],
        points: [
          { name: 'Condition detection', desc: 'Zones, times, objects and interactions, not identities.' },
          { name: 'No biometric identification', desc: 'Not deployed unless a separate, high-bar case is made.' },
          { name: 'Privacy zones', desc: 'Public areas and neighbours masked where required.' },
          { name: 'DPIA per site', desc: 'Written for the real cameras and real purposes.' },
        ],
      },
      {
        heading: 'Fewer false alarms than motion detection',
        body: [
          'Sites that already have alarm-on-motion turn it off within weeks because foxes, rain, headlights and moving shadows trigger it all night. Security staff and keyholders stop responding, which defeats the point. Object detection tuned to the site distinguishes a person at the fence from a fox, a vehicle in the yard from a tree in the wind, and raises an alert only when the condition is met.',
          'The pilot measures the false alarm rate against the old system, thresholds and zones are tuned on real events during the first weeks, and alerts carry a clip so the responder can confirm before anyone is sent.',
        ],
        points: [
          { name: 'Object detection', desc: 'People and vehicles, not movement.' },
          { name: 'Tuned on site', desc: 'Zones and thresholds adjusted on real events.' },
          { name: 'Measured', desc: 'False alarm rate compared with the previous system.' },
          { name: 'Clip attached', desc: 'Responders confirm before acting.' },
        ],
      },
      {
        heading: 'A safety record the HSE conversation can use',
        body: [
          'Near misses between forklifts and pedestrians, PPE lapses and exclusion zone breaches happen every day on busy sites and are almost never recorded, so the safety team is managing from incident reports written after someone was hurt. A vision system records the near misses as they happen, with location, time and a clip.',
          'Safety managers receive a daily and weekly picture of where the risks are concentrated, by zone, shift and time of day, and can put the evidence behind a layout change, a training intervention or a conversation with a contractor.',
        ],
        points: [
          { name: 'Near misses logged', desc: 'Interactions recorded that would otherwise go unreported.' },
          { name: 'By zone and shift', desc: 'Where and when risk concentrates.' },
          { name: 'Evidence for change', desc: 'Data behind layout, training and contractor decisions.' },
          { name: 'Contractor visibility', desc: 'Compliance across subcontractors on a shared site.' },
        ],
      },
      {
        heading: 'Processing on site, integrated with what you run',
        body: [
          'Streaming every camera to the cloud is expensive, slow and creates a large store of footage nobody wants to hold. Running detection on hardware at the site means the footage stays where it is captured, only events leave, and the system keeps working when the connection drops.',
          'Events are delivered to phones, the control room, the incident management system, access control or the building management system, in the format each expects, so the vision system becomes part of how the site already operates rather than another screen.',
        ],
        points: [
          { name: 'Edge hardware', desc: 'Detection at the site, footage stays on the premises.' },
          { name: 'Works offline', desc: 'Detection continues when the connection drops.' },
          { name: 'Integrated alerts', desc: 'Phones, control room, incident and access systems.' },
          { name: 'Existing cameras', desc: 'Used where adequate, replaced only where they are not.' },
        ],
      },
    ],
    extraFaqs: [
      { question: 'Is this legal under UK GDPR?', answer: 'Video surveillance of identifiable people is regulated but permitted with a lawful basis, proportionality, signage and governance. We design around events rather than identities, write a DPIA for each site and set retention and access to the purpose, following ICO guidance and the Surveillance Camera Code.' },
      { question: 'Do you do facial recognition?', answer: 'Not as standard. Biometric identification of individuals has a much higher legal bar in the UK and is rarely necessary for security or safety outcomes. We only consider it where a separate, documented case is made and the governance is in place.' },
      { question: 'Can you use our existing cameras?', answer: 'Usually, yes. The survey assesses each camera’s resolution, angle and lighting for the intended detection; adequate ones are used and only the gaps are filled with new hardware.' },
      { question: 'How accurate is it?', answer: 'The pilot measures detection and false alarm rates on your site against your current system, and thresholds and zones are tuned on real events before rollout. We report the numbers rather than quote a generic figure.' },
      { question: 'Does footage go to the cloud?', answer: 'No, not by default. Detection runs on hardware at the site, footage stays on the premises under your retention policy, and only events with short clips leave, to the people and systems you choose.' },
      { question: 'Can it help with health and safety?', answer: 'Yes. Vehicle and pedestrian near misses, PPE lapses and exclusion zone breaches are recorded by zone, shift and time, giving safety teams evidence for interventions and a record for HSE discussions.' },
      { question: 'How long does a deployment take?', answer: 'Survey and DPIA one to three weeks, a pilot four to eight, and a full site rollout four to twelve depending on size, followed by a tuning period on real events.' },
      { question: 'What does the managed service include?', answer: 'Monitoring of the hardware and detection quality, model and software updates, threshold tuning as the site changes, and regular reporting for security and safety teams.' },
      { question: 'Can the system work across multiple sites?', answer: 'Yes. Each site runs its own detection on local hardware, and events and reporting are centralised so a security or safety team can see the whole estate.' },
      { question: 'What do staff and visitors need to be told?', answer: 'Signage and a privacy notice stating that video analytics are in use, the purposes and who to contact, which we prepare with the DPIA. Staff consultation is recommended where monitoring affects them.' },
    ],
  },

  'iot-connected-systems': {
    overview: [
      'IoT and connected systems for UK businesses that need to know what their equipment, buildings, vehicles and stock are doing without sending someone to look: energy use across an estate, temperatures in a cold chain, the state of a pump or a compressor, the location of assets, occupancy of rooms, the readings from a field of sensors. We design the sensing, the connectivity, the platform and the dashboards from our office in Dagenham for clients across the country.',
      'Two UK pressures make the case. Energy costs and net zero reporting mean businesses want half-hourly visibility of consumption by site and asset rather than a quarterly bill, and requirements such as SECR and ESOS are easier to meet from data than from estimates. Food safety, pharmaceuticals and healthcare need continuous temperature records rather than a clipboard, and an inspector will ask for them.',
      'The engineering is practical. Sensors and gateways chosen for the environment and the battery life, connectivity through LoRaWAN, cellular, Wi-Fi or wired depending on the site, a platform in a UK cloud region that stores readings, raises alerts and feeds the systems the business already uses, and security that meets the Product Security and Telecommunications Infrastructure regime for consumer products and good practice for everything else.',
      'Food and drink manufacturers and distributors, cold chain operators, facilities and property managers, manufacturers with plant to monitor, agriculture, utilities and water companies, healthcare and pharmacy, fleet operators and product companies building connected devices.',
    ],
    capabilitiesHeading: 'What we build',
    capabilities: [
      { name: 'Environmental monitoring', desc: 'Temperature, humidity, air quality and water with alerts, records and compliance reporting.' },
      { name: 'Energy and utilities', desc: 'Sub-metering, half-hourly data, cost allocation and the figures for SECR and net zero reporting.' },
      { name: 'Asset and condition monitoring', desc: 'Vibration, current, run hours and faults on plant, with maintenance triggered before failure.' },
      { name: 'Smart buildings', desc: 'Occupancy, lighting, heating and access data across an estate feeding facilities decisions.' },
      { name: 'Asset tracking', desc: 'Tools, containers, trolleys and vehicles located across sites and in transit.' },
      { name: 'Connectivity', desc: 'LoRaWAN, NB-IoT and cellular, Wi-Fi and wired networks designed for the site and the battery budget.' },
      { name: 'Platform and integration', desc: 'Ingestion, storage, rules and dashboards in a UK region, connected to ERP, maintenance and BMS.' },
      { name: 'Connected product engineering', desc: 'Firmware, cloud and apps for companies building devices, with PSTI compliance designed in.' },
    ],
    specsHeading: 'Deployment stages',
    specsColumns: ['Stage', 'Typical duration', 'Output'],
    specs: [
      ['Site survey and design', '1 to 3 weeks', 'Sensor plan, connectivity design, platform architecture'],
      ['Pilot', '4 to 8 weeks', 'A zone or site live with dashboards and alerts, data validated'],
      ['Rollout', '4 to 16 weeks', 'Full deployment, integrations, training'],
      ['Platform build', '6 to 12 weeks', 'Ingestion, rules, dashboards, integrations in your cloud'],
      ['Connected product', '12 to 30 weeks', 'Firmware, cloud, app, certification support'],
      ['Managed service', 'Monthly', 'Device health, connectivity, alerts, reporting'],
    ],
    useCasesHeading: 'Who it is for',
    useCases: [
      { name: 'Cold chain and food', desc: 'Continuous temperature records across storage and transport, alerts before stock is lost.' },
      { name: 'Facilities and estates', desc: 'Energy, occupancy and environment across many buildings from one dashboard.' },
      { name: 'Manufacturing', desc: 'Plant condition, downtime causes and energy per unit produced.' },
      { name: 'Agriculture', desc: 'Soil, water, climate and livestock monitoring across large rural sites.' },
      { name: 'Healthcare and pharmacy', desc: 'Fridge and room monitoring with records ready for inspection.' },
      { name: 'Product companies', desc: 'Connected devices designed, built and made compliant for UK sale.' },
    ],
    engagementsHeading: 'Ways of working',
    engagements: [
      { name: 'Survey and pilot', desc: 'A single site or zone live with measured value before rollout.' },
      { name: 'Deployment', desc: 'Full sensing, connectivity and platform as a fixed-scope project.' },
      { name: 'Product engineering', desc: 'A connected product from prototype to production and certification.' },
      { name: 'Managed service', desc: 'Devices, connectivity and platform kept healthy month to month.' },
    ],
    detail: [
      {
        heading: 'Energy data you can act on and report',
        body: [
          'A quarterly electricity bill tells a business what it spent, not where or why. Sub-metering by site, floor, line or asset with half-hourly readings shows the base load that runs all night, the compressor that never cycles off, the site that costs twice the others per square metre, and the effect of every change. The same data produces the figures for SECR reporting and ESOS assessments without an annual estimation exercise.',
          'We install or connect meters and current sensors, bring the data into a platform alongside the half-hourly supplier data, allocate cost to sites and processes, alert on anomalies and produce the reports finance and sustainability teams need.',
        ],
        points: [
          { name: 'Sub-metered', desc: 'Consumption by site, area, line and asset.' },
          { name: 'Half-hourly', desc: 'Base load, peaks and waste visible.' },
          { name: 'Cost allocated', desc: 'Energy attributed to processes and products.' },
          { name: 'Reporting ready', desc: 'Figures for SECR, ESOS and net zero plans.' },
        ],
      },
      {
        heading: 'Cold chain records an inspector will accept',
        body: [
          'Food safety and pharmaceutical rules require evidence that temperature-controlled stock stayed within range, and a clipboard checked twice a day does not show what happened at three in the morning or in the back of a van. When a fridge fails on a Friday night, the difference between a sensor alert and a Monday discovery is the whole stock.',
          'We deploy sensors suited to fridges, freezers, chillers and vehicles, with battery lives measured in years and connectivity that works in metal-lined spaces, record continuously, alert by phone and SMS on excursions and sensor faults, and produce the records in the format the auditor expects.',
        ],
        points: [
          { name: 'Continuous records', desc: 'Every minute, every unit, every vehicle.' },
          { name: 'Excursion alerts', desc: 'Phone and SMS before stock is lost.' },
          { name: 'Fit for the environment', desc: 'Sensors and connectivity chosen for cold, metal and movement.' },
          { name: 'Audit reports', desc: 'Records in the format inspectors accept.' },
        ],
      },
      {
        heading: 'Maintenance before the breakdown',
        body: [
          'Pumps, compressors, motors, conveyors and HVAC give warning before they fail: vibration changes, current draw rises, temperatures drift, run hours accumulate. A business that sees those signals schedules the repair; one that does not loses the shift and pays for an emergency callout.',
          'We fit condition sensors to the assets that matter, set baselines from the first weeks of data, alert on deviation, and connect the platform to the maintenance system so a work order is raised with the evidence attached.',
        ],
        points: [
          { name: 'Condition sensors', desc: 'Vibration, current, temperature and run hours on critical plant.' },
          { name: 'Baselines learned', desc: 'Normal behaviour measured, deviation alerted.' },
          { name: 'Work orders raised', desc: 'Integrated with the maintenance system.' },
          { name: 'Downtime recorded', desc: 'Causes and durations for the improvement plan.' },
        ],
      },
      {
        heading: 'Secure by design, compliant for sale',
        body: [
          'The UK’s Product Security and Telecommunications Infrastructure regime sets minimum security requirements for consumer connectable products sold in the UK, including no default passwords, a vulnerability disclosure policy and stated update periods, and enterprise buyers ask for the same discipline. A device designed without these is a recall or a lost tender.',
          'For companies building connected products, we design firmware, cloud and app together with unique credentials, signed updates, a disclosure process and a security lifecycle, and support the compliance statement and any certification the product needs.',
        ],
        points: [
          { name: 'PSTI designed in', desc: 'Unique credentials, disclosure policy, update commitments.' },
          { name: 'Signed updates', desc: 'Firmware updated securely over the air.' },
          { name: 'Lifecycle planned', desc: 'Support periods and end-of-life defined.' },
          { name: 'Certification support', desc: 'Documentation and testing for UK sale.' },
        ],
      },
      {
        heading: 'Occupancy and comfort across an estate',
        body: [
          'Facilities teams running offices, schools, care homes and multi-site retail heat and light rooms nobody is in, and get complaints about the rooms people are in. Occupancy, temperature, CO2 and humidity sensors show how buildings are actually used by hour and day, and the building management system can respond to that rather than to a timetable set years ago.',
          'We deploy sensors across the estate, connect readings to the BMS and the facilities platform, set alerts for comfort and air quality thresholds, and produce the utilisation reports that inform space decisions and energy savings.',
        ],
        points: [
          { name: 'Occupancy measured', desc: 'Real use by room, hour and day.' },
          { name: 'Comfort and air quality', desc: 'Temperature, CO2 and humidity monitored and alerted.' },
          { name: 'BMS connected', desc: 'Heating and lighting respond to actual occupancy.' },
          { name: 'Space decisions', desc: 'Utilisation data behind estate planning.' },
        ],
      },
    ],
    extraFaqs: [
      { question: 'Can you monitor energy across multiple sites?', answer: 'Yes. Sub-meters and sensors at each site feed one platform with half-hourly data, cost allocation and anomaly alerts, and the figures for SECR, ESOS and net zero reporting come from the same data.' },
      { question: 'Do the temperature records satisfy food safety and pharmacy audits?', answer: 'Yes. Continuous readings, excursion alerts and reports are produced in the formats inspectors accept, with sensor calibration records where required.' },
      { question: 'What connectivity do you use?', answer: 'Whatever the site needs: LoRaWAN for long range and long battery life, NB-IoT or cellular where there is no local network, Wi-Fi or wired where it exists. The survey decides.' },
      { question: 'Can it integrate with our maintenance and ERP systems?', answer: 'Yes. Alerts raise work orders in the maintenance system, readings feed ERP and BMS, and dashboards sit in Power BI or the platform, whichever the team uses.' },
      { question: 'How long do sensor batteries last?', answer: 'Depends on the sensor and reporting interval. Environmental sensors on LoRaWAN typically run for years; the design states the expected life and the platform reports battery levels.' },
      { question: 'Do you build connected products for sale?', answer: 'Yes. Firmware, cloud and app engineering from prototype to production, with PSTI requirements designed in and support for certification.' },
      { question: 'Where is the data stored?', answer: 'In a UK cloud region in your own account, with retention set to your needs and access controlled and logged.' },
      { question: 'What happens if a sensor or gateway fails?', answer: 'The platform detects missed readings and raises a device health alert; the managed service replaces or repairs hardware and keeps connectivity working.' },
      { question: 'Can you retrofit sensors to older plant and buildings?', answer: 'Yes. Most deployments are retrofits: clamp-on current sensors, vibration sensors, wireless environmental sensors and gateways installed without rewiring or downtime.' },
      { question: 'How is the data secured?', answer: 'Devices use unique credentials, data is encrypted from gateway to platform, the platform runs in a UK region in your account, and access is role-based and logged.' },
    ],
  },

  'api-systems-integration': {
    overview: [
      'API and systems integration for UK businesses whose software does not talk to itself: the store that does not know the warehouse stock, the CRM that does not see invoices, the accounting package that receives everything by export, the retailer orders that arrive by portal, the legacy system that only speaks CSV. We connect them with monitored, documented interfaces from our office in Dagenham, for clients across the country.',
      'The British integration landscape has its own fixtures. Xero, Sage and QuickBooks APIs for finance. HMRC APIs for Making Tax Digital. Companies House for company data. Open Banking through FCA-regulated providers for account data and payments. Royal Mail Click & Drop, DPD, Evri and DHL for carriers. Shopify, WooCommerce, Amazon and eBay for commerce. EDI for supplying the supermarkets and major retailers. Microsoft 365, Dynamics, Salesforce and HubSpot for the rest. We have connected all of them.',
      'Integration done badly is a nightly script nobody can explain that fails silently. Done properly it is a set of interfaces with error handling, retries, idempotency so nothing is duplicated, monitoring that alerts a person, and documentation that a new developer can read. Where an in-house or legacy system has no API, we build one in front of it.',
      'Distributors and wholesalers, e-commerce brands, manufacturers, professional services firms, logistics operators, SaaS companies that need to integrate with UK systems, and any business paying people to move data between screens.',
    ],
    capabilitiesHeading: 'What we connect',
    capabilities: [
      { name: 'Accounting and finance', desc: 'Xero, Sage, QuickBooks, HMRC MTD APIs and payment providers with correct VAT and reconciliation.' },
      { name: 'Commerce and marketplaces', desc: 'Shopify, WooCommerce, Magento, Amazon, eBay and B2B portals with stock, orders and returns in sync.' },
      { name: 'Carriers and fulfilment', desc: 'Royal Mail, DPD, Evri, DHL, UPS and 3PL warehouses for labels, tracking and manifests.' },
      { name: 'Retailer EDI', desc: 'Orders, advices and invoices exchanged with UK retailers in their formats.' },
      { name: 'CRM and marketing', desc: 'HubSpot, Salesforce, Dynamics, Pipedrive and email platforms with consent respected.' },
      { name: 'Open Banking and payments', desc: 'Account data and payment initiation through regulated providers, Stripe, GoCardless and acquirers.' },
      { name: 'Legacy and bespoke systems', desc: 'APIs built in front of databases, desktop software and file-based systems.' },
      { name: 'Integration platform', desc: 'A monitored middle layer with retries, logging and alerts, or point-to-point where that is simpler.' },
    ],
    specsHeading: 'Common integrations',
    specsColumns: ['Integration', 'Direction', 'Typical timeline'],
    specs: [
      ['Store to warehouse to accounts', 'Two-way', '3 to 6 weeks'],
      ['Retailer EDI to ERP', 'Two-way', '3 to 8 weeks per retailer group'],
      ['CRM to accounting', 'Two-way', '2 to 4 weeks'],
      ['Carrier integration', 'Order out, tracking in', '1 to 3 weeks per carrier'],
      ['Legacy system API', 'Read and write', '3 to 8 weeks'],
      ['Open Banking connection', 'Read or payment', '2 to 6 weeks including provider onboarding'],
    ],
    useCasesHeading: 'Who it is for',
    useCases: [
      { name: 'Distributors', desc: 'Retailer EDI, ERP, carriers and accounts working as one flow.' },
      { name: 'E-commerce brands', desc: 'Storefront, marketplaces, 3PL and finance in sync as volume grows.' },
      { name: 'Manufacturers', desc: 'Production systems, ERP and suppliers connected without re-keying.' },
      { name: 'Professional services', desc: 'Practice management, CRM, document systems and accounts linked.' },
      { name: 'Logistics', desc: 'Transport management, telematics, customer portals and invoicing joined up.' },
      { name: 'SaaS companies', desc: 'Integrations with UK accounting, banking and commerce systems built into the product.' },
    ],
    engagementsHeading: 'Ways of working',
    engagements: [
      { name: 'Integration audit', desc: 'A map of every system, data flow and manual handoff with a prioritised plan.' },
      { name: 'Fixed integration', desc: 'One connection built, tested and monitored as a fixed-scope project.' },
      { name: 'Integration programme', desc: 'A middle layer and a sequence of connections across the business.' },
      { name: 'Managed integrations', desc: 'Monitoring, maintenance and adaptation as connected systems change.' },
    ],
    detail: [
      {
        heading: 'One order, every system, no re-keying',
        body: [
          'A single web order in a growing UK business can touch the storefront, a marketplace, the warehouse or 3PL, a carrier, the accounting package, the CRM and the returns process. When any two of those are joined by a person and a spreadsheet, stock goes wrong, customers are told the wrong thing and month end takes a week.',
          'We design the order as one flow: captured once, stock reserved, picked and despatched with a carrier label, tracking sent to the customer, invoice posted to the accounts with the right VAT, the customer record updated, and returns handled back through the same path. Each step is monitored and any failure is retried or raised.',
        ],
        points: [
          { name: 'Captured once', desc: 'Store, marketplace and B2B orders into one flow.' },
          { name: 'Stock in sync', desc: 'Warehouse, store and marketplaces agree.' },
          { name: 'Carrier and tracking', desc: 'Labels out, tracking back, customer informed.' },
          { name: 'Accounts correct', desc: 'Invoices and payments posted with the right VAT.' },
        ],
      },
      {
        heading: 'Supplying the supermarkets over EDI',
        body: [
          'Winning a listing with a major retailer usually comes with an EDI requirement: orders, acknowledgements, despatch advices and invoices in the retailer’s specified format, over their chosen network, with barcodes and delivery windows enforced. Suppliers who handle this manually pay in chargebacks and staff time.',
          'We connect EDI to the ERP so retailer orders arrive as orders, despatch generates the advice and labels the retailer requires, invoices go back electronically, and disputes can be matched to the delivery record. Each retailer group is onboarded and tested against its own specification.',
        ],
        points: [
          { name: 'Retailer formats', desc: 'Each retailer’s messages and rules implemented and tested.' },
          { name: 'Into the ERP', desc: 'Orders land as orders, not as PDFs.' },
          { name: 'Advices and invoices', desc: 'Generated from despatch, sent automatically.' },
          { name: 'Chargebacks traceable', desc: 'Disputes matched to what was shipped and when.' },
        ],
      },
      {
        heading: 'An API in front of the system that has none',
        body: [
          'Many UK businesses run on a system that still does the job but was never designed to be connected: an older ERP, a bespoke database, a desktop application, a supplier that only accepts spreadsheets. Replacing it is expensive and disruptive; leaving it isolated keeps the re-keying.',
          'We build a service in front of it, reading and writing its database or files safely, exposing a clean API the rest of the business can use, and monitoring it like any other integration. The old system keeps running and the business gets the connections it needs.',
        ],
        points: [
          { name: 'Safe access', desc: 'Reads and writes that respect the old system’s rules.' },
          { name: 'Clean API', desc: 'A modern interface the rest of the stack can use.' },
          { name: 'No replacement needed', desc: 'The system keeps doing its job.' },
          { name: 'Path to migrate', desc: 'When replacement comes, the API stays and the back end changes.' },
        ],
      },
      {
        heading: 'Integrations that cannot fail silently',
        body: [
          'A connection that stops working and tells nobody is the most expensive kind. Orders stop posting, stock drifts, invoices are missed, and the error surfaces weeks later as a customer complaint or a wrong VAT return. Most integrations we replace had no monitoring at all.',
          'Every integration we ship is idempotent so retries never duplicate, retries transient failures automatically, logs every message, alerts a named person when something needs attention, and is documented so the next developer understands it. Managed integrations cover keeping them working as the connected systems change their APIs.',
        ],
        points: [
          { name: 'Idempotent', desc: 'Retries cannot create duplicate orders or invoices.' },
          { name: 'Monitored', desc: 'Failures alert a person with the detail.' },
          { name: 'Logged', desc: 'Every message kept for tracing and audit.' },
          { name: 'Maintained', desc: 'Adapted as Xero, Shopify, carriers and retailers change.' },
        ],
      },
      {
        heading: 'Making Tax Digital through the accounting package, not around it',
        body: [
          'Making Tax Digital requires VAT records to be kept digitally and submitted through compatible software, with digital links between the systems that hold the figures. An operational system that exports a spreadsheet for someone to re-key into the accounting package breaks the digital link and creates the errors HMRC penalises.',
          'We integrate operational systems to Xero, Sage or QuickBooks so every sale and purchase posts with the correct VAT treatment, the digital link is preserved end to end, and the return is submitted from the accounting package through its HMRC-recognised connection. Where a business needs direct HMRC API access, we build and register it.',
        ],
        points: [
          { name: 'Digital links preserved', desc: 'No spreadsheet re-keying between systems.' },
          { name: 'VAT posted correctly', desc: 'Standard, reduced, zero-rated and exempt lines handled.' },
          { name: 'Submitted properly', desc: 'Through recognised software or a registered connection.' },
          { name: 'Audit trail', desc: 'Every figure traceable to its transaction.' },
        ],
      },
    ],
    extraFaqs: [
      { question: 'Which systems can you integrate?', answer: 'Xero, Sage, QuickBooks, HMRC MTD APIs, Shopify, WooCommerce, Amazon, eBay, Royal Mail, DPD, Evri, DHL, retailer EDI, HubSpot, Salesforce, Dynamics, Microsoft 365, Open Banking providers, Stripe, GoCardless, and legacy or bespoke systems through an API we build in front of them.' },
      { question: 'Can you connect us to supermarket EDI?', answer: 'Yes. Each retailer group is onboarded against its own specification, with orders into the ERP, advices and invoices out from despatch, and labelling and delivery windows handled.' },
      { question: 'Our main system has no API. Can you still integrate it?', answer: 'Yes. We build a service in front of its database or files that exposes a clean API, so the rest of the business can connect to it without replacing it.' },
      { question: 'How do you stop duplicate orders or invoices?', answer: 'Every integration is idempotent: each message carries an identity, and a retry of the same message has no additional effect. Combined with logging, this makes retries safe.' },
      { question: 'Do you use an integration platform or write code?', answer: 'Whichever suits. A monitored middle layer is right when many systems are involved; point-to-point code is simpler for a single connection. Either way, monitoring, retries and documentation are included.' },
      { question: 'Can you integrate Open Banking?', answer: 'Yes, through FCA-regulated providers for account data and payment initiation, with the consent flow built correctly and the provider onboarding handled as part of the project.' },
      { question: 'How long does an integration take?', answer: 'A single connection typically takes one to six weeks depending on the systems; a store-to-warehouse-to-accounts flow three to six; a retailer EDI group three to eight.' },
      { question: 'What happens when a connected system changes its API?', answer: 'Managed integrations cover monitoring for deprecations and changes, updating the connection before it breaks, and telling you what changed.' },
    ],
  },

  'data-platforms-dashboards': {
    overview: [
      'Data platforms and dashboards for UK businesses that have plenty of data and no single view of it: sales in the CRM, orders in the store, stock in the warehouse system, finance in Xero or Sage, marketing in five ad platforms, operations in spreadsheets, and a Monday report that takes someone a day to assemble and is still disputed in the meeting. We build the warehouse, the pipelines and the reporting from our office in Dagenham for clients across the country.',
      'The UK market runs largely on Microsoft, so Power BI is usually the right reporting tool and the warehouse sits in Azure UK South or AWS London. The accounting package is the financial truth, so revenue, margin and cash in the dashboards reconcile to it rather than approximate it. Regulated sectors need governance: who can see what, where personal data sits, and how long it is kept, all under UK GDPR.',
      'The work starts with the questions the business needs answered and the decisions it will take on the answers, not with the tools. Then the sources are connected, the definitions are agreed and written down so “customer”, “order” and “margin” mean one thing, the pipelines are built to run reliably and be checked, and the dashboards are designed for the people who will use them, tested with those people, and maintained.',
      'Multi-site retailers and hospitality groups, distributors and manufacturers, e-commerce brands, professional services firms, healthcare and care providers, education organisations, property companies and any leadership team currently arguing about whose spreadsheet is right.',
    ],
    capabilitiesHeading: 'What we build',
    capabilities: [
      { name: 'Data warehouse', desc: 'A governed store in a UK region, modelled for reporting and built to be extended.' },
      { name: 'Pipelines', desc: 'Reliable extraction from CRM, commerce, finance, marketing and operational systems with checks and alerts.' },
      { name: 'Definitions and governance', desc: 'A written data dictionary, ownership, access control and retention under UK GDPR.' },
      { name: 'Finance reporting', desc: 'Revenue, margin, cash and budget versus actual reconciled to Xero, Sage or QuickBooks.' },
      { name: 'Operational dashboards', desc: 'Sales, stock, fulfilment, service and site performance for the people who run them.' },
      { name: 'Marketing measurement', desc: 'Spend to revenue across platforms, joined to the CRM and the accounts.' },
      { name: 'Power BI and Looker Studio', desc: 'Dashboards built in the tool the business uses, designed for the audience and the device.' },
      { name: 'Forecasting and analysis', desc: 'Demand, cash and capacity models built on the warehouse when the data supports them.' },
    ],
    specsHeading: 'Engagement stages',
    specsColumns: ['Stage', 'Typical duration', 'Output'],
    specs: [
      ['Questions and sources', '1 to 2 weeks', 'Decisions to support, sources mapped, definitions drafted'],
      ['Warehouse and pipelines', '3 to 6 weeks', 'Sources connected, models built, checks running'],
      ['Dashboards', '2 to 4 weeks', 'Reports designed, tested with users, published'],
      ['Finance reconciliation', '1 to 2 weeks', 'Dashboard figures matched to the accounts'],
      ['Training and handover', '1 week', 'Users trained, documentation, ownership'],
      ['Managed data', 'Monthly', 'Pipelines monitored, sources maintained, new reports'],
    ],
    useCasesHeading: 'Who it is for',
    useCases: [
      { name: 'Multi-site retail and hospitality', desc: 'Sales, labour, stock and margin by site and day, compared honestly.' },
      { name: 'Distributors and manufacturers', desc: 'Margin by product, customer and channel; stock health; supplier performance.' },
      { name: 'E-commerce', desc: 'Marketing spend to contribution margin after returns, fees and shipping.' },
      { name: 'Professional services', desc: 'Utilisation, work in progress, lock-up and profitability by client.' },
      { name: 'Healthcare and care', desc: 'Occupancy, staffing, compliance and finance with governance for sensitive data.' },
      { name: 'Leadership teams', desc: 'One set of numbers for the board pack, produced without a week of assembly.' },
    ],
    engagementsHeading: 'Ways of working',
    engagements: [
      { name: 'Reporting sprint', desc: 'The most needed dashboards on existing data in a few weeks.' },
      { name: 'Data platform build', desc: 'Warehouse, pipelines, governance and dashboards as a fixed-scope project.' },
      { name: 'Finance reporting', desc: 'Management accounts and KPIs reconciled to the ledger and automated.' },
      { name: 'Managed data', desc: 'Pipelines kept running, sources maintained, new questions answered month to month.' },
    ],
    detail: [
      {
        heading: 'Numbers that reconcile to the accounts',
        body: [
          'The fastest way to lose a leadership team’s trust in a dashboard is a revenue figure that disagrees with the management accounts. It happens because the dashboard counts orders and the accounts count invoices, or one includes VAT and the other does not, or refunds landed in a different month. Once the finance director has caught it, every number on the screen is suspect.',
          'We treat the accounting package as the financial truth, define revenue, margin and cash the way finance defines them, reconcile the warehouse to the ledger every month as a pipeline check, and show operational measures alongside the financial ones so the two tell one story.',
        ],
        points: [
          { name: 'Ledger is truth', desc: 'Financial figures tied to Xero, Sage or QuickBooks.' },
          { name: 'Finance definitions', desc: 'Revenue, margin and cash as the accounts define them.' },
          { name: 'Reconciled monthly', desc: 'A pipeline check that flags any difference.' },
          { name: 'One story', desc: 'Operational and financial measures side by side.' },
        ],
      },
      {
        heading: 'Agree what the words mean before building the chart',
        body: [
          'Sales, operations and finance each have a definition of a customer, an order, a return and a margin, and they are not the same. A warehouse that copies each system’s definition produces dashboards that disagree with each other by design. The disagreement is not a data problem; it is a decision nobody made.',
          'We run the definitions workshop early, write a data dictionary that names the owner of each measure, build the warehouse to those definitions, and publish the dictionary alongside the dashboards so anyone can see what a number means.',
        ],
        points: [
          { name: 'Definitions workshop', desc: 'Sales, operations and finance agree the terms.' },
          { name: 'Data dictionary', desc: 'Each measure defined and owned in writing.' },
          { name: 'Built to definitions', desc: 'One meaning per word across every report.' },
          { name: 'Published', desc: 'The dictionary lives next to the dashboards.' },
        ],
      },
      {
        heading: 'Pipelines that check themselves',
        body: [
          'A dashboard fed by a pipeline that quietly stopped on Tuesday shows a confident, wrong picture until someone notices the numbers have not moved. The failure is usually an expired credential, a changed API or a source that added a field, and it is always discovered at the worst moment.',
          'Every pipeline we build has freshness checks, row count and reconciliation tests, and alerts to a named person when something is late or wrong. Dashboards show when their data was last updated. Managed data covers fixing sources as they change.',
        ],
        points: [
          { name: 'Freshness checks', desc: 'Late data is flagged, not silently stale.' },
          { name: 'Reconciliation tests', desc: 'Totals checked against sources and the ledger.' },
          { name: 'Alerts to people', desc: 'Named owners told when something needs attention.' },
          { name: 'Visible timestamps', desc: 'Every dashboard shows when its data was last updated.' },
        ],
      },
      {
        heading: 'Governance for data that includes people',
        body: [
          'A warehouse that joins the CRM, the store, the payroll and the support desk contains a great deal of personal data, and UK GDPR applies to all of it: a lawful basis for the processing, access limited to those who need it, retention that ends, and the ability to answer a subject access request. Healthcare, education and financial data carry additional expectations.',
          'We design the warehouse with personal data identified and minimised, role-based access so a site manager sees their site and finance sees finance, retention rules that run, and documentation that supports the DPIA and the record of processing.',
        ],
        points: [
          { name: 'Personal data mapped', desc: 'Identified, minimised and documented.' },
          { name: 'Role-based access', desc: 'People see what their role needs.' },
          { name: 'Retention enforced', desc: 'Rules that actually delete.' },
          { name: 'DPIA supported', desc: 'Documentation for the record of processing.' },
        ],
      },
      {
        heading: 'Board packs produced, not assembled',
        body: [
          'The monthly board pack in most UK mid-sized businesses is a week of work: exports from six systems, a spreadsheet nobody else understands, and a deck rebuilt by hand. It is late, it is disputed, and by the time it is read the month is half gone.',
          'We produce the pack from the warehouse: financial and operational KPIs reconciled to the accounts, commentary fields for the owners of each measure, and a template that renders itself on the first working day. The meeting spends its time on decisions rather than on which number is right.',
        ],
        points: [
          { name: 'Automated', desc: 'Generated from the warehouse on a schedule.' },
          { name: 'Reconciled', desc: 'Figures tie to the management accounts.' },
          { name: 'Commentary built in', desc: 'Owners explain variances in the pack.' },
          { name: 'On time', desc: 'First working day, every month.' },
        ],
      },
    ],
    extraFaqs: [
      { question: 'Do you build in Power BI?', answer: 'Yes, most often, because most UK businesses already have Microsoft licences and the skills. We also build in Looker Studio and other tools where they fit better.' },
      { question: 'Will the dashboard numbers match our management accounts?', answer: 'Yes. The accounting package is the financial truth, measures are defined the way finance defines them, and the warehouse is reconciled to the ledger monthly as a pipeline check.' },
      { question: 'Which systems can you connect?', answer: 'CRM, commerce, warehouse, finance, marketing platforms, support desks, HR and payroll, operational databases and spreadsheets, through APIs or an interface we build in front of older systems.' },
      { question: 'Where is the data held?', answer: 'In a warehouse in a UK cloud region in your own account, with access controlled by role, retention enforced and personal data documented for UK GDPR.' },
      { question: 'How quickly can we see something?', answer: 'A reporting sprint produces the most needed dashboards on existing data in a few weeks. A full platform with warehouse, pipelines and governance takes six to twelve.' },
      { question: 'What if a source changes or a pipeline breaks?', answer: 'Freshness and reconciliation checks alert a named person, dashboards show when their data was last updated, and managed data covers fixing sources as they change.' },
      { question: 'Can our team build their own reports on it?', answer: 'Yes. The warehouse is modelled and documented so analysts and Power BI users can build on it, with the data dictionary telling them what each measure means.' },
      { question: 'Do you do forecasting?', answer: 'Where the data supports it, yes. Demand, cash and capacity models are built on the warehouse and tested against history before anyone plans on them.' },
    ],
  },

  'custom-web-app-development': {
    overview: [
      'Custom web application development for UK businesses that need software no package provides: customer and supplier portals, marketplaces, booking and scheduling platforms, internal operations tools, quoting engines, member systems and the products SaaS companies sell. We design and build them from our office in Dagenham for clients across the country, on modern frameworks, in UK cloud regions, with security that passes a customer’s questionnaire.',
      'The UK specifics run through every build. Sign-in with Microsoft 365 or Google Workspace because that is what British organisations use. Payments through Stripe, GoCardless direct debit and Open Banking. Documents signed with DocuSign or Adobe Sign. Companies House lookups to validate business customers. Data held under UK GDPR with a record of what is stored and why. Accessibility to WCAG 2.2 for anyone selling to the public sector or building for the public.',
      'We work in short releases from a written specification, so the business is using the first version within weeks and shaping the rest on evidence. Everything is built to be owned: source code, cloud accounts and documentation in the client’s name, a test suite, a deployment pipeline, and a handover any competent developer could take on. Support after launch is in writing.',
      'Professional services firms, distributors and manufacturers, property and facilities companies, education and training providers, healthcare and care organisations, logistics operators, membership bodies and SaaS founders.',
    ],
    capabilitiesHeading: 'What we build',
    capabilities: [
      { name: 'Customer and supplier portals', desc: 'Orders, documents, invoices, tickets and approvals behind secure login with roles and audit trails.' },
      { name: 'Booking and scheduling platforms', desc: 'Availability, resources, deposits, reminders and calendar integration for services with capacity.' },
      { name: 'Marketplaces and platforms', desc: 'Two-sided products with onboarding, listings, payments, payouts and dispute handling.' },
      { name: 'Internal operations tools', desc: 'The screens a business runs on, replacing spreadsheets and email chains.' },
      { name: 'Quoting and configuration', desc: 'Pricing rules, product configuration and proposals generated and tracked.' },
      { name: 'SaaS products', desc: 'Multi-tenant platforms with billing, admin, security and the evidence enterprise buyers ask for.' },
      { name: 'Identity and access', desc: 'Microsoft 365, Google and social sign-in, roles, permissions, two-factor authentication.' },
      { name: 'Payments and documents', desc: 'Stripe, GoCardless, Open Banking, e-signature and document generation.' },
    ],
    specsHeading: 'Build stages',
    specsColumns: ['Stage', 'Typical duration', 'Output'],
    specs: [
      ['Discovery and specification', '2 to 4 weeks', 'User journeys, written specification, architecture, plan'],
      ['Design', '2 to 4 weeks', 'Tested prototype and screen designs'],
      ['Core build', '6 to 12 weeks', 'The main workflows live for a pilot group'],
      ['Integrations and hardening', '2 to 6 weeks', 'Connections, security testing, performance, accessibility'],
      ['Launch', '1 to 2 weeks', 'Migration, training, monitoring, go-live'],
      ['Product team', 'Monthly', 'Continuous improvement from a shared backlog'],
    ],
    useCasesHeading: 'Who it is for',
    useCases: [
      { name: 'Professional services', desc: 'Client portals with documents, approvals and payments that feel as safe as a bank.' },
      { name: 'Distributors', desc: 'Trade portals with account pricing, stock visibility and ordering integrated with the ERP.' },
      { name: 'Property and facilities', desc: 'Tenant, contractor and compliance platforms across a portfolio.' },
      { name: 'Education', desc: 'Applications, enrolment, learner and parent portals.' },
      { name: 'Membership bodies', desc: 'Joining, renewals, events, CPD and member directories.' },
      { name: 'SaaS founders', desc: 'A product built to be sold, secured and scaled from the first release.' },
    ],
    engagementsHeading: 'Ways of working',
    engagements: [
      { name: 'Fixed-scope build', desc: 'Specification, design, build and launch with acceptance at each release.' },
      { name: 'Product team', desc: 'A dedicated team building and improving month to month.' },
      { name: 'Rescue and rebuild', desc: 'Stabilising a stalled or unsupported application and planning its future.' },
      { name: 'Managed application', desc: 'Hosting, monitoring, security updates and support in writing.' },
    ],
    detail: [
      {
        heading: 'Passing the security questionnaire',
        body: [
          'Any web application sold to or used by a larger UK organisation will meet a security questionnaire, and increasingly a request for Cyber Essentials or ISO 27001 alignment. Questions cover authentication, encryption, hosting location, backups, penetration testing, data retention and incident response. An application that cannot answer them loses the customer.',
          'We build with two-factor authentication and SSO, encryption at rest and in transit, UK hosting, role-based access and audit logging, dependency and vulnerability scanning in the pipeline, and independent penetration testing before launch where the customer base warrants it, then document all of it so the questionnaire is answered from fact.',
        ],
        points: [
          { name: 'Authentication', desc: 'SSO, two-factor and session controls as standard.' },
          { name: 'Encrypted and UK hosted', desc: 'At rest, in transit, in London or UK South.' },
          { name: 'Tested', desc: 'Scanning in the pipeline, penetration testing where warranted.' },
          { name: 'Documented', desc: 'Answers ready for questionnaires and assessors.' },
        ],
      },
      {
        heading: 'A portal that replaces the email chain',
        body: [
          'Clients and suppliers of most UK businesses interact through email: documents attached, approvals requested, invoices queried, status asked for. Each thread is a small piece of unrecorded work, and the client experience is only as good as the inbox discipline of whoever is on that day.',
          'A portal gives each client or supplier one place to see orders, documents, invoices and status, approve and sign what needs approving, raise and track queries, and pay. Behind it, the business sees everything in one queue with an audit trail, and the systems update themselves.',
        ],
        points: [
          { name: 'One place', desc: 'Documents, orders, invoices, status and queries.' },
          { name: 'Approvals and signatures', desc: 'E-signature and approval built in.' },
          { name: 'Payments', desc: 'Cards, direct debit and Open Banking inside the portal.' },
          { name: 'Audit trail', desc: 'Every action recorded against the account.' },
        ],
      },
      {
        heading: 'Built to be owned, not rented',
        body: [
          'A custom application that only its builder can change is a liability disguised as an asset. The honest test is whether a competent third party could take the code, deploy it and extend it from the documentation alone.',
          'Every build includes a readable codebase on a mainstream stack, automated tests, a deployment pipeline, infrastructure as code, and documentation covering architecture, environments and operations, all in repositories and cloud accounts in the client’s name from day one.',
        ],
        points: [
          { name: 'Mainstream stack', desc: 'Frameworks a UK developer market knows.' },
          { name: 'Tests and pipeline', desc: 'Changes verified and deployed repeatably.' },
          { name: 'Documented', desc: 'Architecture, environments, operations.' },
          { name: 'In your name', desc: 'Repositories and cloud accounts owned by you.' },
        ],
      },
      {
        heading: 'Working software in the first month',
        body: [
          'Long specifications and big-bang launches produce systems that fit the business as it was a year ago. We fix the scope of the first release to the workflow that hurts most, ship it to a pilot group within weeks, and let what they do with it shape the next release.',
          'Each fortnight ends with working software and a written acceptance, so scope changes are conscious decisions and the business always knows what it has and what is next.',
        ],
        points: [
          { name: 'First release scoped tight', desc: 'The most painful workflow, live early.' },
          { name: 'Pilot group', desc: 'Real users shaping the product from the start.' },
          { name: 'Fortnightly releases', desc: 'Working software and acceptance every sprint.' },
          { name: 'Visible backlog', desc: 'What is next, always known.' },
        ],
      },
      {
        heading: 'Validating business customers with Companies House',
        body: [
          'Trade portals, marketplaces and B2B platforms in the UK need to know who they are dealing with. A supplier or customer account opened on a typed company name is a credit risk and, for regulated firms, a compliance gap. Companies House publishes the register through an API, and the identity verification rules now being phased in raise the bar further.',
          'We integrate the Companies House lookup into onboarding so a company number pulls the registered name, address, status, officers and filing history into the account, flag dissolved or recently incorporated entities for review, and store the record with the account for credit and compliance decisions.',
          'For firms that must run anti-money laundering checks, the same onboarding flow hands off to the firm’s regulated verification provider and records the outcome, so the portal becomes the compliance record rather than a gap in it.',
        ],
        points: [
          { name: 'Register lookup', desc: 'Company details pulled from Companies House by number.' },
          { name: 'Risk flags', desc: 'Dissolved, dormant or new entities raised for review.' },
          { name: 'Stored with the account', desc: 'The record kept for credit and compliance.' },
          { name: 'AML handoff', desc: 'Regulated checks integrated where the firm needs them.' },
        ],
      },
    ],
    extraFaqs: [
      { question: 'What technologies do you use?', answer: 'Mainstream, well-supported stacks: React and TypeScript on the front end, Node.js or .NET on the back end, PostgreSQL or SQL Server, hosted on AWS London or Azure UK South. Chosen for the job and for the UK developer market.' },
      { question: 'Can users sign in with Microsoft 365 or Google?', answer: 'Yes. SSO with Microsoft Entra and Google Workspace, plus email and two-factor authentication, with roles and permissions defined for the business.' },
      { question: 'Can it take payments and direct debits?', answer: 'Yes. Stripe for cards and wallets, GoCardless for direct debit, Open Banking through regulated providers, with every transaction posted to the accounting package.' },
      { question: 'Will it pass our customers’ security reviews?', answer: 'It is built to: SSO and two-factor, encryption, UK hosting, audit logging, scanning in the pipeline and penetration testing where warranted, all documented for questionnaires and Cyber Essentials or ISO 27001 assessments.' },
      { question: 'Does it need to meet WCAG 2.2?', answer: 'If you serve the public sector or the public, usually yes, and it is good practice regardless. We design and test to WCAG 2.2 AA where required.' },
      { question: 'How long does a build take?', answer: 'Ten to twenty-four weeks for most applications, with a pilot group using the first release within the first month or two.' },
      { question: 'Who owns the code?', answer: 'You do. Repositories, cloud accounts, domains and documentation are in your name from day one, and the handover is written so any competent developer could take it on.' },
      { question: 'Can you take over an application built by another company?', answer: 'Yes. We audit the code and infrastructure, stabilise what is failing, document it and agree whether to continue, refactor or rebuild.' },
      { question: 'Can the application generate documents such as quotes and contracts?', answer: 'Yes. Quotes, proposals, contracts, statements and certificates are generated from templates with the account’s data, sent for e-signature where needed and stored against the record.' },
      { question: 'Do you provide hosting and support after launch?', answer: 'Yes. Managed application covers UK hosting, monitoring, security updates, backups and support with response times in writing, and a product team can continue development month to month.' },
    ],
  },

  'ai-native-product-development': {
    overview: [
      'AI product development for UK startups and established companies building software where a model is part of the product: assistants that work inside a customer’s workflow, agents that complete tasks across systems, document and data products, vertical tools for law, finance, property, healthcare, recruitment and construction. We build them from our office in Dagenham with the engineering discipline that separates a demo from a product a customer will pay for and a regulator will accept.',
      'Selling AI products in the UK and into Europe means answering questions early. Where is the data processed and by which models? What is the lawful basis and where is the DPIA? How is accuracy measured and what happens when the model is wrong? Which EU AI Act category does the product fall into if it is sold across the Channel? What are the costs at scale? Founders who have those answers close enterprise deals; those who do not stall at procurement.',
      'So we build the product and the evidence together: evaluation sets that measure quality on real tasks, guardrails and human-in-the-loop where the risk requires, cost controls per customer, private or UK-region deployment where the data demands, observability of every model call, and the documentation a buyer’s security and legal teams will ask for. The model is treated as a component that will be replaced, so the product survives the next release from any vendor.',
      'Founders raising or recently funded, established software companies adding AI to their product, professional services firms productising expertise, and businesses building an internal AI capability that must meet enterprise standards.',
    ],
    capabilitiesHeading: 'What we build',
    capabilities: [
      { name: 'Product strategy', desc: 'Where a model creates value the customer will pay for, and what is better solved without one.' },
      { name: 'Assistants and copilots', desc: 'Conversational and embedded assistants working inside the customer’s workflow with their data.' },
      { name: 'Agents', desc: 'Systems that plan and complete tasks across tools and systems, with permissions and review points.' },
      { name: 'Retrieval and knowledge', desc: 'Pipelines that ground answers in customer documents and data with sources shown.' },
      { name: 'Evaluation', desc: 'Test sets, quality scoring, regression testing and release gates so quality is measured, not felt.' },
      { name: 'Guardrails and governance', desc: 'Input and output controls, human review, logging and the documentation buyers ask for.' },
      { name: 'Platform engineering', desc: 'Multi-tenancy, billing, cost control per customer, observability and UK or private deployment.' },
      { name: 'Model strategy', desc: 'Commercial, open-weight and small models selected per task and swappable as the market moves.' },
    ],
    specsHeading: 'Engagement stages',
    specsColumns: ['Stage', 'Typical duration', 'Output'],
    specs: [
      ['Product discovery', '2 to 3 weeks', 'Use cases, risk assessment, architecture, evaluation plan'],
      ['Prototype', '3 to 6 weeks', 'Working prototype with measured quality on real tasks'],
      ['Product build', '8 to 20 weeks', 'Production system with evaluation, guardrails, billing, observability'],
      ['Enterprise readiness', '2 to 6 weeks', 'Security, privacy and AI governance documentation, private deployment options'],
      ['Launch and iteration', 'Monthly', 'Releases driven by usage and evaluation data'],
      ['Embedded team', 'Monthly', 'Engineers working inside the product team'],
    ],
    useCasesHeading: 'Who it is for',
    useCases: [
      { name: 'Funded startups', desc: 'A first product built to be measured, sold and scaled.' },
      { name: 'Software companies', desc: 'AI features that fit the existing product and its customers’ compliance needs.' },
      { name: 'Legal and financial tech', desc: 'Products where accuracy, audit and privacy are the product.' },
      { name: 'Property and construction tech', desc: 'Document-heavy workflows turned into products.' },
      { name: 'Health tech', desc: 'Products built with the governance the sector requires from the start.' },
      { name: 'Internal platforms', desc: 'Enterprise AI capabilities built to the same standard as a product.' },
    ],
    engagementsHeading: 'Ways of working',
    engagements: [
      { name: 'Discovery and prototype', desc: 'Fixed-scope work that proves value on real tasks before a larger commitment.' },
      { name: 'Product build', desc: 'A dedicated team taking the product from prototype to paying customers.' },
      { name: 'Embedded engineers', desc: 'AI engineers working inside your existing team month to month.' },
      { name: 'Enterprise readiness', desc: 'The security, privacy and governance work that unlocks larger customers.' },
    ],
    detail: [
      {
        heading: 'Evaluation is the product roadmap',
        body: [
          'An AI product without an evaluation set is guided by anecdotes: the demo that impressed an investor, the customer who complained. Neither tells the team whether a change to a prompt, a model or a retrieval step made the product better or worse across the tasks customers actually run.',
          'We build evaluation sets from real tasks early, score every release against them, gate deployment on the results, and grow the sets from production data with customer permission. Model swaps, prompt changes and pipeline improvements become measured decisions.',
        ],
        points: [
          { name: 'Real-task test sets', desc: 'Built from what customers actually do.' },
          { name: 'Release gates', desc: 'No deployment that scores worse.' },
          { name: 'Grows with usage', desc: 'Production cases added with permission.' },
          { name: 'Measured changes', desc: 'Models and prompts compared on numbers.' },
        ],
      },
      {
        heading: 'Agents with permissions, not just prompts',
        body: [
          'An agent that can read email, update a CRM, send a document and make a payment is powerful and dangerous in equal measure. The failure modes are known: acting on injected instructions in a document, taking an irreversible step on a misread, running up cost in a loop.',
          'We design agents with explicit tool permissions, review points before irreversible actions, limits on cost and steps, isolation of untrusted content, and logging that shows every decision, so the product can be trusted with real access and the customer can see what it did.',
        ],
        points: [
          { name: 'Scoped permissions', desc: 'Each tool granted deliberately, per customer.' },
          { name: 'Review before irreversible', desc: 'Human confirmation where it matters.' },
          { name: 'Limits', desc: 'Cost, steps and time bounded.' },
          { name: 'Full trace', desc: 'Every decision and action logged.' },
        ],
      },
      {
        heading: 'Enterprise-ready in the UK and Europe',
        body: [
          'The buyers who pay the most ask the hardest questions. Where is data processed? Which models, under what terms? Is there a DPIA and a record of processing? How is human oversight built in? Which EU AI Act obligations apply? Can it be deployed privately? Products that cannot answer these lose months in procurement.',
          'We build the answers into the product: UK-region and private deployment options, documented data flows and model terms, governance features such as review queues and audit logs, and a documentation pack for security, legal and procurement teams that is maintained as the product changes.',
        ],
        points: [
          { name: 'Deployment options', desc: 'UK region, private cloud or on-premise.' },
          { name: 'Data flows documented', desc: 'What goes to which model under which terms.' },
          { name: 'Governance features', desc: 'Review queues, audit logs, oversight controls.' },
          { name: 'Documentation pack', desc: 'For security, legal and procurement, kept current.' },
        ],
      },
      {
        heading: 'Unit economics from the first customer',
        body: [
          'Model costs scale with usage in ways that can turn a healthy price into a loss-making customer. A product priced per seat with unbounded model use, or one that retries expensive calls, or one that sends the whole document when a paragraph would do, discovers the problem in the invoice.',
          'We measure cost per task and per customer from the prototype, design routing so cheap models handle what they can, cache and trim what is sent, cap usage per plan, and build the observability that shows margin per customer, so pricing is set on evidence.',
        ],
        points: [
          { name: 'Cost per task', desc: 'Measured from the prototype onward.' },
          { name: 'Model routing', desc: 'The cheapest model that meets the quality bar.' },
          { name: 'Plan caps', desc: 'Usage bounded per customer and plan.' },
          { name: 'Margin visible', desc: 'Cost and revenue per customer in one view.' },
        ],
      },
      {
        heading: 'From prototype to paying customers without a rebuild',
        body: [
          'Many AI prototypes are built to impress and then thrown away because they cannot be secured, billed or scaled. The second version costs more than the first and loses months. The prototype should be the first slice of the product: the same architecture, the same evaluation harness, the same observability, with the scope cut to one workflow rather than the engineering cut to a demo.',
          'We build prototypes on the production architecture, prove quality on real tasks with a handful of design partners, and extend rather than replace, so the path from prototype to first paying customer is a sequence of releases rather than a restart.',
        ],
        points: [
          { name: 'Production architecture', desc: 'The prototype is the first release, not a throwaway.' },
          { name: 'Design partners', desc: 'Real customers on real tasks from the start.' },
          { name: 'Extend, not restart', desc: 'Each release builds on the last.' },
          { name: 'Time to revenue', desc: 'A sequence of releases to the first paying customer.' },
        ],
      },
    ],
    extraFaqs: [
      { question: 'What is different about building an AI product?', answer: 'Quality is probabilistic and has to be measured, costs scale with usage, the model is a component that will be replaced, and buyers ask about data, privacy and oversight before they sign. We build the evaluation, cost control, governance and documentation alongside the product.' },
      { question: 'Which models do you build on?', answer: 'Whichever suits each task: commercial models through APIs with UK data terms, open-weight models deployed privately, or small specialised models. The architecture keeps them swappable.' },
      { question: 'Can the product be deployed privately or in the UK?', answer: 'Yes. UK-region, private cloud and on-premise deployment options are designed in for customers whose data cannot leave their control.' },
      { question: 'How do you handle UK GDPR and the EU AI Act?', answer: 'Data flows, lawful basis, DPIA support and human oversight are built into the product and documented; where the product is sold into the EU, the AI Act category is assessed and the obligations designed in.' },
      { question: 'How do we know the product is accurate?', answer: 'Evaluation sets built from real tasks score every release, deployment is gated on the results, and production quality is monitored, so accuracy is a number rather than an impression.' },
      { question: 'Can you build agents that take actions in other systems?', answer: 'Yes, with scoped permissions, review points before irreversible actions, cost and step limits, protection against injected instructions and a full trace of every decision.' },
      { question: 'How do you keep model costs under control?', answer: 'Cost per task is measured from the prototype, cheaper models handle what they can, inputs are trimmed and cached, usage is capped per plan, and margin per customer is visible.' },
      { question: 'Can you work inside our existing team?', answer: 'Yes. Embedded AI engineers work in your product team month to month, bringing the evaluation, governance and platform practices with them.' },
    ],
  },
};
