import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/footer.png';
import ukLImage from '../assets/UKL.svg';
import dubaiImage from '../assets/dubai.svg';
import kochiImage from '../assets/kochi.svg';

const Footer = () => {
  return (
    <footer className="premium-footer spec-footer" style={{ padding: '80px 5% 40px', background: '#050608', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Replica Locations Row */}
        <div className="footer-locations-grid">
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo" style={{ textDecoration: 'none' }}>
              <img loading="lazy" decoding="async" 
                src={logo} 
                alt="Infynix Logo" 
                style={{ height: '32px', width: 'auto', filter: 'brightness(0) invert(1)', marginBottom: '8px' }} 
              />
            </Link>
            <p className="footer-brand-desc">
              Your Trusted Partner for Digital Transformation, Empowering Growth and Digital Operations Worldwide.
            </p>
          </div>

          <div className="footer-location-card">
            <a href="https://maps.google.com/?q=1-75+Shelton+St,+London,+WC2H+9JQ" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img loading="lazy" decoding="async" src={ukLImage} alt="UK London Office" className="footer-location-svg" />
              <div className="footer-location-title">UK - LONDON ↗</div>
              <div className="footer-location-addr">
                1-75 Shelton St,<br />
                London, WC2H 9JQ
              </div>
            </a>
          </div>

          <div className="footer-location-card">
            <a href="https://maps.google.com/?q=Business+Bay,+Dubai,+UAE" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img loading="lazy" decoding="async" src={dubaiImage} alt="Dubai UAE Office" className="footer-location-svg" />
              <div className="footer-location-title">DUBAI - UAE ↗</div>
              <div className="footer-location-addr">
                Business Bay,<br />
                Dubai, UAE
              </div>
            </a>
          </div>

          <div className="footer-location-card">
            <a href="https://share.google/KX27eRrKxncrDFibN" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img loading="lazy" decoding="async" src={kochiImage} alt="Kochi India Office" className="footer-location-svg" />
              <div className="footer-location-title">INDIA - KOCHI ↗</div>
              <div className="footer-location-addr">
                3rd Floor, Oberon Mall,<br />
                Padivattom, Edappally,<br />
                Ernakulam, Kochi, Kerala 682024
              </div>
            </a>
          </div>
        </div>

        <hr className="footer-divider" style={{ margin: '40px 0' }} />

        {/* Bottom Links Row */}
        <div className="footer-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '40px' }}>
          <div className="footer-nav-grid" style={{ width: '100%' }}>
            <div className="footer-nav-col">
              <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '8px' }}>ABOUT</span>
              <Link to="/about">Company</Link>
              <Link to="/case-studies">Featured Work</Link>
              <Link to="/insights">Insights</Link>
            </div>
            <div className="footer-nav-col">
              <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '8px' }}>SERVICES</span>
              <Link to="/solutions/infynix-agency">Infynix Agency</Link>
              <Link to="/solutions/infynix-media">Infynix Media</Link>
              <Link to="/solutions/infynix-growth-solutions">Infynix Growth</Link>
            </div>
            <div className="footer-nav-col">
              <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '8px' }}>INDUSTRIES</span>
              <Link to="/industries">All Industries</Link>
              <Link to="/industries/retail">Retail & Commerce</Link>
              <Link to="/industries/healthcare">Healthcare</Link>
              <Link to="/industries/education">Education</Link>
            </div>
            <div className="footer-nav-col">
              <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '8px' }}>LONDON</span>
              <Link to="/digital-marketing-agency-in-london">Digital Marketing Agency in London</Link>
              <Link to="/software-development-company-in-london">Software Development Company in London</Link>
              <Link to="/seo-company-in-london">SEO Company in London</Link>
              <Link to="/web-design-company-in-london">Web Design Company in London</Link>
              <Link to="/mobile-app-development-in-london">Mobile App Development in London</Link>
              <Link to="/ecommerce-development-in-london">E-Commerce Development in London</Link>
              <Link to="/ui-ux-design-company-in-london">UI/UX Design Company in London</Link>
            </div>
            <div className="footer-nav-col">
              <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '8px' }}>MANCHESTER</span>
              <Link to="/digital-marketing-agency-in-manchester">Digital Marketing Agency in Manchester</Link>
              <Link to="/software-development-company-in-manchester">Software Development Company in Manchester</Link>
              <Link to="/seo-company-in-manchester">SEO Company in Manchester</Link>
              <Link to="/web-design-company-in-manchester">Web Design Company in Manchester</Link>
              <Link to="/performance-marketing-in-manchester">Performance Marketing in Manchester</Link>
            </div>
            <div className="footer-nav-col">
              <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '8px' }}>BIRMINGHAM</span>
              <Link to="/digital-marketing-in-birmingham">Digital Marketing in Birmingham</Link>
              <Link to="/software-development-in-birmingham">Software Development in Birmingham</Link>
              <Link to="/seo-company-in-birmingham">SEO Company in Birmingham</Link>
              <Link to="/web-design-company-in-birmingham">Web Design Company in Birmingham</Link>
            </div>
            <div className="footer-nav-col">
              <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '8px' }}>LEEDS</span>
              <Link to="/digital-marketing-in-leeds">Digital Marketing in Leeds</Link>
              <Link to="/software-development-in-leeds">Software Development in Leeds</Link>
              <Link to="/seo-company-in-leeds">SEO Company in Leeds</Link>
              <Link to="/web-design-company-in-leeds">Web Design Company in Leeds</Link>
            </div>
            <div className="footer-nav-col">
              <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '8px' }}>LEGAL</span>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-of-service">Terms of Use</Link>
              <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">XML Sitemap</a>
            </div>

            <div className="footer-nav-col">
              <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '8px' }}>GLOBAL PRESENCE</span>
              <a
                href="https://www.infynixsolutions.co.uk"
                target="_blank"
                rel="noopener"
                style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                🇬🇧 UK — infynixsolutions.co.uk
              </a>
              <a
                href="https://www.infynixsolutions.ae"
                target="_blank"
                rel="noopener"
                style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                🇦🇪 UAE — infynixsolutions.ae
              </a>
              <a
                href="https://www.infynix-solutions.com"
                target="_blank"
                rel="noopener"
                style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                🇮🇳 India — infynix-solutions.com
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom" style={{ borderTop: '1px solid rgba(204, 191, 191, 0.28)', marginTop: '40px', paddingTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <p style={{ fontSize: '0.8rem', color: '#ffffff' }}>© 2026 Infynix Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

