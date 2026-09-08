import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import './HeroSection.css';
import HeroBackground from './HeroBackground';

const REGIONS = ['United Kingdom', 'United Arab Emirates', 'India'];

function HeroSection({ data }) {
  const eyebrow = data?.eyebrow || 'INFYNIX SOLUTIONS';
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(el.children, {
        y: 35,
        opacity: 0,
        duration: 1.1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2,
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-stage">
        <HeroBackground />
        <div className="hero-veil" aria-hidden="true" />

        <div className="hero-content" ref={contentRef}>
          <span className="hero-eyebrow">{eyebrow}</span>

          <h1 className="hero-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4.2rem)', lineHeight: 1.1 }}>
            The Growth <span className="title-highlight">Engineering</span> Company for UK Businesses
          </h1>

          <p style={{ color: '#ccc', fontSize: '1.08rem', marginTop: '0.8rem', marginBottom: '2.2rem', maxWidth: '560px', lineHeight: 1.5, fontFamily: 'var(--ix-font-body)' }}>
            Software, AI vision, and retail growth systems — built for companies scaling across the UK.
          </p>

          <div className="hero-actions">
            <Link to="/contact" className="hero-btn hero-btn-primary">
              Book a Discovery Call
            </Link>
            <Link to="/growth-engineering" className="hero-btn hero-btn-ghost">
              Explore Growth Engineering
            </Link>
          </div>

          <ul className="hero-regions" aria-label="Where we operate">
            {REGIONS.map((region) => (
              <li key={region} className="hero-region">{region}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
