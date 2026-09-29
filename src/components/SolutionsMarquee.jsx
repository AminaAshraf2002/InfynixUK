import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { solutionsData } from '../lib/contentData';
import { isDivision } from '../content/divisions';

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M5 12H19M12 5L19 12L12 19" />
  </svg>
);

const MarqueeCard = ({ title, slug, isDark = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  const bgDefault = isDark ? '#111315' : '#fafafa';
  const bgHover = isDark ? '#1a1d20' : '#f4f4f4';
  const textColor = isDark ? '#fff' : '#111';
  const borderColor = isDark ? 'rgba(255,255,255,0.08)' : 'transparent';

  return (
    <Link
      to={`/solutions/${slug}`}
      style={{
        flex: '0 0 auto',
        width: '280px',
        height: '90px',
        background: isHovered ? bgHover : bgDefault,
        border: `1px solid ${borderColor}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background 0.3s ease, border-color 0.3s ease',
        padding: '0 20px',
        textAlign: 'center',
        textDecoration: 'none',
        borderRadius: '4px',
        margin: '0 6px',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#007A5E',
            fontSize: '0.95rem',
            fontWeight: 600,
            fontFamily: 'var(--ix-font-body, "Montserrat", sans-serif)',
          }}
        >
          View Service <ArrowRight />
        </div>
      ) : (
        <span
          style={{
            fontSize: '1rem',
            fontWeight: 500,
            color: textColor,
            fontFamily: 'var(--ix-font-body, "Montserrat", sans-serif)',
          }}
        >
          {title}
        </span>
      )}
    </Link>
  );
};

const SolutionsMarquee = ({
  showHeading = false,
  eyebrow = 'OUR SERVICES',
  heading = 'What We Offer',
  subtitle = 'Explore our connected capabilities across engineering, marketing, and media.',
  background = '#ffffff',
  padding = '0 0 100px 0',
  isDark = false,
}) => {
  const services = Object.entries(solutionsData).filter(([slug]) => !isDivision(slug));

  return (
    <section
      className="solutions-marquee-section"
      style={{
        background,
        padding,
        overflow: 'hidden',
        width: '100%',
        maxWidth: '100%',
        position: 'relative',
        boxSizing: 'border-box',
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .solutions-marquee-track {
          display: flex;
          animation: marquee 60s linear infinite;
        }
        .solutions-marquee-container:hover .solutions-marquee-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .solutions-marquee-track {
            animation-play-state: paused !important;
          }
        }
      `}} />

      {showHeading && (
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto 40px auto',
            padding: '0 5%',
            textAlign: 'center',
          }}
        >
          {eyebrow && (
            <span
              className={isDark ? 'ix-eyebrow ix-eyebrow--light' : 'ix-eyebrow'}
              style={{ display: 'inline-block', marginBottom: '12px' }}
              data-aos="fade-up"
            >
              {eyebrow}
            </span>
          )}
          {heading && (
            <h2
              style={{
                fontFamily: 'var(--font-display, "Albert Sans", sans-serif)',
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: 700,
                color: isDark ? '#ffffff' : '#111827',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                margin: '0 0 12px 0',
              }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {heading}
            </h2>
          )}
          {subtitle && (
            <p
              style={{
                fontFamily: 'var(--font-body, "Montserrat", sans-serif)',
                fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
                color: isDark ? 'rgba(255,255,255,0.7)' : '#6B7280',
                maxWidth: '640px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Marquee Wrapper with overflow hidden */}
      <div
        style={{
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div
          className="solutions-marquee-container"
          style={{
            display: 'flex',
            width: 'max-content',
            whiteSpace: 'nowrap',
          }}
        >
          {/* Render track twice for seamless infinite looping */}
          {[1, 2].map((trackIndex) => (
            <div
              key={trackIndex}
              className="solutions-marquee-track"
            >
              {services.map(([slug, entry], i) => (
                <MarqueeCard
                  key={`m${trackIndex}-${i}`}
                  title={entry.title}
                  slug={slug}
                  isDark={isDark}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsMarquee;
export { MarqueeCard };
