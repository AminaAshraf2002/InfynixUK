import { useState, useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Search,
  Share2,
  Cpu,
  Palette,
  Video,
  Sparkles,
  Camera,
  Code2,
  Smartphone,
  Bot,
  ShieldCheck,
  ArrowRight,
  Phone,
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import { useGSAP } from '@gsap/react';
import InstagramIcon from './ui/InstagramIcon';
import { SITE_URL } from '../seo/siteConfig';
import './WhatWeOffer.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, Flip, useGSAP);

const CATEGORIES = ['All', 'Infynix Agency', 'Infynix Media', 'Infynix Development'];

const DIVISION_CONTACTS = {
  'Infynix Agency': {
    name: 'Infynix Agency',
    phone: '+91 99959 11173',
    tel: 'tel:+919995911173',
    instagram: 'https://www.instagram.com/infynix_agency?stkn=OWZvbGllcDd3bmpq',
    instagramHandle: '@infynix_agency',
    callAriaLabel: 'Call Infynix Agency at +91 99959 11173',
    instagramAriaLabel: 'Visit Infynix Agency on Instagram',
  },
  'Infynix Media': {
    name: 'Infynix Media',
    phone: '+91 99959 11196',
    tel: 'tel:+919995911196',
    instagram: 'https://www.instagram.com/infynixmediahouse?stkn=bDM5eHFydGVpZWQy',
    instagramHandle: '@infynixmediahouse',
    callAriaLabel: 'Call Infynix Media House at +91 99959 11196',
    instagramAriaLabel: 'Visit Infynix Media House on Instagram',
  },
};

const SERVICES = [
  // --- INFYNIX AGENCY ---
  {
    id: 'performance-advertising',
    title: 'Performance Advertising & PPC',
    category: 'Infynix Agency',
    categoryLabel: 'Infynix Agency',
    slug: 'performance-advertising',
    link: '/solutions/performance-advertising',
    icon: TrendingUp,
    brandContact: DIVISION_CONTACTS['Infynix Agency'],
    description:
      'Data-driven Google Ads, Meta Ads and paid media campaigns engineered for high-intent client acquisition across the UK, UAE and India.',
  },
  {
    id: 'seo-services',
    title: 'SEO & Search Infrastructure',
    category: 'Infynix Agency',
    categoryLabel: 'Infynix Agency',
    slug: 'seo-services',
    link: '/solutions/seo-services',
    icon: Search,
    brandContact: DIVISION_CONTACTS['Infynix Agency'],
    description:
      'Technical search pre-rendering, Core Web Vitals optimization, and commercial keyword rankings that bring high-value inbound buyers.',
  },
  {
    id: 'social-media-management',
    title: 'Social Media & Brand Growth',
    category: 'Infynix Agency',
    categoryLabel: 'Infynix Agency',
    slug: 'social-media-management',
    link: '/solutions/social-media-management',
    icon: Share2,
    brandContact: DIVISION_CONTACTS['Infynix Agency'],
    description:
      'Multi-channel organic social campaigns, active community management, and brand authority content tailored for fast-growth companies.',
  },
  {
    id: 'marketing-automation-crm',
    title: 'Marketing Automation & CRM',
    category: 'Infynix Agency',
    categoryLabel: 'Infynix Agency',
    slug: 'marketing-automation-crm',
    link: '/solutions/marketing-automation-crm',
    icon: Cpu,
    brandContact: DIVISION_CONTACTS['Infynix Agency'],
    description:
      'Automated customer journeys, HubSpot and Salesforce sync, and revenue attribution pipelines that turn leads into qualified deals.',
  },

  // --- INFYNIX MEDIA ---
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design & Brand Styling',
    category: 'Infynix Media',
    categoryLabel: 'Infynix Media',
    slug: 'ui-ux-design',
    link: '/solutions/ui-ux-design',
    icon: Palette,
    brandContact: DIVISION_CONTACTS['Infynix Media'],
    description:
      'UI/UX design and brand styling services in Kochi, UAE and UK, delivering pixel-perfect Figma design systems and intuitive user journeys.',
  },
  {
    id: 'brand-films-commercials',
    title: 'Cinematic Brand Films',
    category: 'Infynix Media',
    categoryLabel: 'Infynix Media',
    slug: 'brand-films-commercials',
    link: '/solutions/brand-films-commercials',
    icon: Video,
    brandContact: DIVISION_CONTACTS['Infynix Media'],
    description:
      'High-resolution commercial video production, corporate brand stories, and broadcast-ready promotional media that command market authority.',
  },
  {
    id: 'motion-graphics-animation',
    title: '3D Motion Graphics & Animation',
    category: 'Infynix Media',
    categoryLabel: 'Infynix Media',
    slug: 'motion-graphics-animation',
    link: '/solutions/motion-graphics-animation',
    icon: Sparkles,
    brandContact: DIVISION_CONTACTS['Infynix Media'],
    description:
      'Photorealistic 3D product renders, dynamic 2D vector explainer videos, and interactive visual motion graphics designed to clarify complex products.',
  },
  {
    id: 'photography-videography',
    title: 'Studio Photography & Media',
    category: 'Infynix Media',
    categoryLabel: 'Infynix Media',
    slug: 'photography-videography',
    link: '/solutions/photography-videography',
    icon: Camera,
    brandContact: DIVISION_CONTACTS['Infynix Media'],
    description:
      'Commercial product photography, executive corporate headshots, and viral short-form social video content tailored for modern channels.',
  },

  // --- INFYNIX DEVELOPMENT ---
  {
    id: 'custom-web-app-development',
    title: 'Custom Web & App Engineering',
    category: 'Infynix Development',
    categoryLabel: 'Infynix Development',
    slug: 'custom-web-app-development',
    link: '/solutions/custom-web-app-development',
    icon: Code2,
    description:
      'Custom web software engineered in React 19, Next.js, and Node.js built for high concurrency, security, and sub-second loading performance.',
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    category: 'Infynix Development',
    categoryLabel: 'Infynix Development',
    slug: 'mobile-app-development',
    link: '/solutions/mobile-app-development',
    icon: Smartphone,
    description:
      'High-performance cross-platform iOS and Android mobile apps engineered with Flutter and React Native architectures with cloud APIs.',
  },
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence & Agents',
    category: 'Infynix Development',
    categoryLabel: 'Infynix Development',
    slug: 'artificial-intelligence',
    link: '/solutions/artificial-intelligence',
    icon: Bot,
    description:
      'Autonomous AI agents, enterprise RAG document intelligence, and custom LLM workflows securely connected to internal business data.',
  },
  {
    id: 'ai-surveillance',
    title: 'AI Surveillance & Vision Systems',
    category: 'Infynix Development',
    categoryLabel: 'Infynix Development',
    slug: 'ai-surveillance',
    link: '/solutions/ai-surveillance',
    icon: ShieldCheck,
    description:
      'Real-time edge computer vision security on NVIDIA Jetson, instant boundary threat detection, and existing IP camera integration.',
  },
];

const WhatWeOffer = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const headingTextRef = useRef(null);
  const underlineRef = useRef(null);
  const subtitleRef = useRef(null);
  const tabsRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const ctaWrapperRef = useRef(null);
  const ctaBtnRef = useRef(null);
  const bgShapeRef = useRef(null);
  const flipStateRef = useRef(null);

  // Category change with GSAP Flip state capture
  const handleCategorySelect = (category) => {
    if (category === activeCategory) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActiveCategory(category);
      return;
    }

    if (cardsContainerRef.current) {
      const cards = cardsContainerRef.current.querySelectorAll('.offer-card');
      flipStateRef.current = Flip.getState(cards);
    }
    setActiveCategory(category);
  };

  // Flip animation on layout change
  useLayoutEffect(() => {
    if (!flipStateRef.current || !cardsContainerRef.current) return;

    Flip.from(flipStateRef.current, {
      duration: 0.45,
      ease: 'power3.out',
      absolute: true,
      fade: true,
      scale: true,
      onEnter: (elements) => {
        gsap.fromTo(
          elements,
          { opacity: 0, scale: 0.9, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'power3.out' }
        );
      },
      onLeave: (elements) => {
        gsap.to(elements, { opacity: 0, scale: 0.9, duration: 0.25, ease: 'power2.in' });
      },
    });

    flipStateRef.current = null;
  }, [activeCategory]);

  // Interactive 3D Card Hover & Tilt Animation
  const handleCardMouseMove = (e) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPercent = (x / rect.width - 0.5) * 2; // -1 to 1
    const yPercent = (y / rect.height - 0.5) * 2; // -1 to 1

    gsap.to(card, {
      rotateY: xPercent * 9,
      rotateX: -yPercent * 9,
      y: -10,
      transformPerspective: 1000,
      boxShadow:
        '0 26px 48px -12px rgba(0, 122, 94, 0.22), 0 10px 20px -6px rgba(0, 168, 128, 0.16)',
      borderColor: 'rgba(0, 122, 94, 0.28)',
      duration: 0.35,
      ease: 'power2.out',
      overwrite: 'auto',
    });

    const shine = card.querySelector('.offer-card-shine');
    if (shine) {
      gsap.to(shine, {
        opacity: 0.65,
        x: xPercent * 40,
        y: yPercent * 40,
        duration: 0.2,
        overwrite: 'auto',
      });
    }

    const icon = card.querySelector('.offer-card-icon-wrap');
    if (icon) {
      gsap.to(icon, {
        scale: 1.14,
        rotateZ: xPercent * 8,
        duration: 0.3,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    }
  };

  const handleCardMouseLeave = (e) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const card = e.currentTarget;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      y: 0,
      boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.04)',
      borderColor: 'rgba(0, 0, 0, 0.08)',
      duration: 0.6,
      ease: 'elastic.out(1, 0.5)',
      overwrite: 'auto',
    });

    const shine = card.querySelector('.offer-card-shine');
    if (shine) {
      gsap.to(shine, {
        opacity: 0,
        duration: 0.4,
        overwrite: 'auto',
      });
    }

    const icon = card.querySelector('.offer-card-icon-wrap');
    if (icon) {
      gsap.to(icon, {
        scale: 1,
        rotateZ: 0,
        duration: 0.4,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    }
  };

  // CTA Magnetic hover
  const handleCtaMouseMove = (e) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const btn = ctaBtnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;

    gsap.to(btn, {
      x: relX * 0.28,
      y: relY * 0.28,
      duration: 0.3,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  };

  const handleCtaMouseLeave = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const btn = ctaBtnRef.current;
    if (!btn) return;

    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.4)',
      overwrite: 'auto',
    });
  };

  // Enhanced GSAP ScrollTrigger Entrance Animation with useGSAP
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        });

        const words = headingTextRef.current?.querySelectorAll('.heading-word');

        // 1. Eyebrow badge expands and reveals
        tl.from(labelRef.current, {
          y: 25,
          opacity: 0,
          letterSpacing: '0.3em',
          duration: 0.7,
          ease: 'power3.out',
        })
          // 2. Heading title words pop up with stagger
          .from(
            words,
            {
              y: 45,
              opacity: 0,
              rotateX: -40,
              stagger: 0.12,
              duration: 0.8,
              ease: 'back.out(1.6)',
            },
            '-=0.35'
          )
          // 3. Heading underline draws from left to right (scaleX 0 -> 1)
          .to(
            underlineRef.current,
            {
              scaleX: 1,
              duration: 0.65,
              ease: 'power2.out',
            },
            '-=0.3'
          )
          // 4. Subtitle and tabs fade up
          .from(
            [subtitleRef.current, tabsRef.current],
            {
              y: 28,
              opacity: 0,
              stagger: 0.1,
              duration: 0.6,
              ease: 'power3.out',
            },
            '-=0.3'
          )
          // 5. Cards staggered reveal (y: 60 -> 0, opacity 0 -> 1, stagger 0.08)
          .from(
            cardsContainerRef.current?.querySelectorAll(
              '.offer-card:not(.offer-card--filtered-out)'
            ),
            {
              y: 60,
              opacity: 0,
              stagger: 0.08,
              duration: 0.75,
              ease: 'power3.out',
              clearProps: 'transform',
            },
            '-=0.3'
          )
          // 6. CTA button entrance
          .from(
            ctaWrapperRef.current,
            {
              y: 25,
              opacity: 0,
              duration: 0.6,
              ease: 'power3.out',
            },
            '-=0.2'
          );

        // Light parallax on soft green blurred background shapes
        if (bgShapeRef.current) {
          gsap.to(bgShapeRef.current, {
            yPercent: 35,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
          });
        }
      });

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(
          [
            labelRef.current,
            headingTextRef.current,
            subtitleRef.current,
            tabsRef.current,
            ctaWrapperRef.current,
          ],
          {
            opacity: 1,
            y: 0,
          }
        );
        if (underlineRef.current) {
          gsap.set(underlineRef.current, { scaleX: 1 });
        }
        const cards = cardsContainerRef.current?.querySelectorAll(
          '.offer-card:not(.offer-card--filtered-out)'
        );
        if (cards) {
          gsap.set(cards, { opacity: 1, y: 0, scale: 1 });
        }
      });

      return () => {
        mm.revert();
      };
    },
    { scope: sectionRef }
  );

  // Active brand contact if Agency or Media is selected
  const activeBrandContact = DIVISION_CONTACTS[activeCategory] || null;

  // SEO JSON-LD schema (ItemList + Service)
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'What We Offer - Infynix Solutions Services',
    description:
      'Connected digital marketing, creative media, and software engineering solutions by Infynix Solutions across the UK, UAE, and India.',
    itemListElement: SERVICES.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        '@id': `${SITE_URL}${service.link}#service`,
        name: service.title,
        description: service.description,
        url: `${SITE_URL}${service.link}`,
        serviceType: service.category,
        provider: {
          '@type': 'Organization',
          name: 'Infynix Solutions',
          url: SITE_URL,
        },
        areaServed: [
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Country', name: 'United Arab Emirates' },
          { '@type': 'Country', name: 'India' },
        ],
      },
    })),
  };

  return (
    <section
      id="what-we-offer"
      className="what-we-offer-section"
      aria-labelledby="what-we-offer-heading"
      ref={sectionRef}
    >
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Ambient background shapes for parallax */}
      <div className="offer-bg-shape offer-bg-shape--1" ref={bgShapeRef} aria-hidden="true" />
      <div className="offer-bg-shape offer-bg-shape--2" aria-hidden="true" />

      <div className="what-we-offer-container">
        {/* Header */}
        <header className="offer-header">
          <span className="offer-eyebrow" ref={labelRef}>
            OUR CAPABILITIES
          </span>

          <div className="offer-heading-wrapper" ref={headingTextRef}>
            <h2 id="what-we-offer-heading" className="offer-heading">
              <span className="heading-word">What</span>{' '}
              <span className="heading-word">We</span>{' '}
              <span className="heading-word">Offer</span>
            </h2>
            <span className="offer-heading-underline" ref={underlineRef} aria-hidden="true" />
          </div>

          <p className="offer-subtitle" ref={subtitleRef}>
            Explore our connected ecosystem of digital marketing, creative media, and software
            engineering solutions.
          </p>
        </header>

        {/* Category Filter Tabs (Infynix Agency / Infynix Media / Infynix Development) */}
        <nav
          className="offer-tabs-nav"
          ref={tabsRef}
          aria-label="Filter services by capability category"
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                className={`offer-tab-btn ${isActive ? 'is-active' : ''}`}
                onClick={() => handleCategorySelect(cat)}
                aria-pressed={isActive}
              >
                {cat}
              </button>
            );
          })}
        </nav>

        {/* Direct Contact Bar for Infynix Agency and Infynix Media */}
        {activeBrandContact && (
          <div
            className="offer-brand-bar"
            aria-label={`${activeBrandContact.name} Direct Contacts`}
          >
            <span className="offer-brand-tagline">
              Direct Contact for <strong>{activeBrandContact.name}</strong>:
            </span>
            <div className="offer-brand-links">
              <a
                href={activeBrandContact.tel}
                className="offer-brand-chip"
                aria-label={activeBrandContact.callAriaLabel}
              >
                <Phone size={14} aria-hidden="true" />
                <span>{activeBrandContact.phone}</span>
              </a>
              <a
                href={activeBrandContact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="offer-brand-chip"
                aria-label={activeBrandContact.instagramAriaLabel}
              >
                <InstagramIcon size={14} />
                <span>{activeBrandContact.instagramHandle}</span>
                <span className="offer-chip-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>
          </div>
        )}

        {/* 3D Service Cards Grid - Content remains rendered in HTML for SEO */}
        <div className="offer-grid" ref={cardsContainerRef}>
          {SERVICES.map((service) => {
            const isMatch = activeCategory === 'All' || service.category === activeCategory;
            const Icon = service.icon;
            const brand = service.brandContact;

            return (
              <Link
                key={service.id}
                to={service.link}
                className={`offer-card ${!isMatch ? 'offer-card--filtered-out' : ''}`}
                aria-label={`Learn more about ${service.title} services`}
                aria-hidden={!isMatch ? 'true' : undefined}
                tabIndex={!isMatch ? -1 : 0}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                {/* 3D Specular Light Shine */}
                <div className="offer-card-shine" aria-hidden="true" />

                {/* Classic Gradient Circle Icon */}
                <div className="offer-card-icon-wrap" aria-hidden="true">
                  <Icon size={26} strokeWidth={2} aria-hidden="true" />
                </div>

                {/* Division Category Pill */}
                <span className="offer-card-category-pill">{service.categoryLabel}</span>

                <h3 className="offer-card-title">{service.title}</h3>

                <p className="offer-card-desc">{service.description}</p>

                {/* Direct Division Phone & Instagram for Agency & Media */}
                {brand && (
                  <div
                    className="offer-card-contact-row"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <a
                      href={brand.tel}
                      className="offer-card-contact-btn"
                      aria-label={`Call ${brand.name} at ${brand.phone}`}
                      title={`Call ${brand.name}`}
                    >
                      <Phone size={12} aria-hidden="true" />
                      <span>{brand.phone}</span>
                    </a>
                    <a
                      href={brand.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="offer-card-contact-btn"
                      aria-label={`${brand.name} on Instagram`}
                      title={`${brand.name} Instagram`}
                    >
                      <InstagramIcon size={12} />
                      <span>{brand.instagramHandle}</span>
                    </a>
                  </div>
                )}

                <span className="offer-card-link" aria-hidden="true">
                  <span>Learn more</span>
                  <ArrowRight size={16} className="offer-card-link-arrow" aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="offer-cta-wrap" ref={ctaWrapperRef}>
          <Link
            to="/contact"
            className="offer-cta-button"
            ref={ctaBtnRef}
            onMouseMove={handleCtaMouseMove}
            onMouseLeave={handleCtaMouseLeave}
            aria-label="Get a Free Consultation with Infynix Solutions"
          >
            <span>Get a Free Consultation</span>
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
