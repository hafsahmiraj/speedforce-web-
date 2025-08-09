import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header/Navbar */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src="/logo1.png" alt="SpeedForce Digital" className="logo-img" />
          </div>
          <nav className="nav">
            <ul>
              <li><a href="#work">Our Work</a></li>
              <li><a href="#expertise">Expertise</a></li>
              <li><a href="#poc">PoC</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#faqs">FAQs</a></li>
            </ul>
          </nav>
          <button className="cta-button">+966 561 972 967</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Shaping
              <br />Future
              <br />with <span className="highlight">AI</span>
            </h1>
            <p className="hero-description">
              Transform your business concept into reality 
              with our proven 4-pillar approach: Development, 
              AI Solutions, Product Journey & Growth 
              Strategy. <strong>Start with zero investment</strong> - see your 
              prototype live before committing a single riyal.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary-modern">
                Free Prototype
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-container">
              <img src="/rightimage.png" alt="AI Technology" className="hero-image" />
              <div className="hero-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="benefits-header">
            <div className="benefits-text-lines">
              <div className="benefits-line">BENEFITS</div>
            </div>
            <h2 className="benefits-title">
              See why <span className="pink-text">choosing us</span><br />
              is the <span className="pink-text">smartest move</span>.
            </h2>
          </div>
          <div className="video-text-container">
            <div className="hero-video-card">
              <video 
                className="hero-video" 
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src="/herovideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="below-video-text">
              <span className="pink-text">Enterprise-grade security meets modern low-code efficiency</span> with full IP protection until you approve your MVP. <span className="pink-text">From idea to market launch</span> - we handle everything while you maintain complete control.
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics-section">
        <div className="container">
          <div className="statistics-grid">
            <div className="stat-card pink-card">
              <div className="stat-number pink-number">250<span className="plus-sign">+</span></div>
              <div className="stat-label">Projects Delivered</div>
              <div className="stat-description">250+ Saudi Businesses Transformed<br/>- From startups to enterprises</div>
            </div>
            <div className="stat-card pink-card">
              <div className="stat-number pink-number">70<span className="percent-sign">%</span></div>
              <div className="stat-label">Business Growth</div>
              <div className="stat-description">70% Average Revenue Growth within first year of launch</div>
            </div>
            <div className="stat-card pink-card">
              <div className="stat-number pink-number">500<span className="plus-sign">+</span></div>
              <div className="stat-label">Happy Clients</div>
              <div className="stat-description">More than 500 satisfied clients<br/>trust us to bring their ideas to life.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="our-work-section">
        <div className="container">
          <div className="our-work-header">
            <div className="our-work-text-lines">
              <div className="our-work-line">PROJECTS</div>
            </div>
            <div className="work-showcase">
              {/* Qaider Project */}
              <div className="work-item" data-aos="fade-up" data-aos-delay="100">
                <div className="work-image-container">
                  <img src="/qaider.png" alt="Qaider - Review Management" className="work-image" />
                  <div className="work-overlay">
                    <div className="work-tags">
                      <span className="work-tag">REVIEW MANAGEMENT</span>
                      <span className="work-tag">ONLINE REPUTATION</span>
                      <span className="work-tag">CUSTOMER FEEDBACK</span>
                      <span className="work-tag">DIGITAL PRESENCE</span>
                      <span className="work-tag">CROSS-PLATFORM</span>
                    </div>
                  </div>
                </div>
                <div className="work-content">
                  <h3 className="work-title">Qaider - Redefining Review Management.</h3>
                  <p className="work-description">Comprehensive review management platform that helps businesses track, respond to, and analyze customer feedback across multiple channels, building stronger digital reputation.</p>
                </div>
              </div>

              {/* Zeed Project */}
              <div className="work-item" data-aos="fade-up" data-aos-delay="200">
                <div className="work-image-container">
                  <img src="/zeed.png" alt="Zeed - Collectibles Marketplace" className="work-image" />
                  <div className="work-overlay">
                    <div className="work-tags">
                      <span className="work-tag">COLLECTIBLES MARKETPLACE</span>
                      <span className="work-tag">LUXURY AUCTIONS</span>
                      <span className="work-tag">LIVE STREAM SHOPPING</span>
                      <span className="work-tag">SECURE TRANSACTIONS</span>
                      <span className="work-tag">INTERACTIVE BIDDING</span>
                    </div>
                  </div>
                </div>
                <div className="work-content">
                  <h3 className="work-title">Zeed - Your collectible at auction and watch it shine.</h3>
                  <p className="work-description">Premium auction platform for luxury collectibles featuring live streaming, secure bidding, and interactive marketplace for collectors worldwide.</p>
                </div>
              </div>

              {/* Loyzee Project */}
              <div className="work-item" data-aos="fade-up" data-aos-delay="300">
                <div className="work-image-container">
                  <img src="/loyzee.png" alt="Loyzee - Loyalty Program" className="work-image" />
                  <div className="work-overlay">
                    <div className="work-tags">
                      <span className="work-tag">REWARDS</span>
                      <span className="work-tag">USER-FRIENDLY INTERFACE</span>
                      <span className="work-tag">SIMPLE TRACKING</span>
                      <span className="work-tag">LOYALTY POINTS</span>
                      <span className="work-tag">USER ENGAGEMENT</span>
                    </div>
                  </div>
                </div>
                <div className="work-content">
                  <h3 className="work-title">Loyzee - Take your loyalty program to the next level.</h3>
                  <p className="work-description">Next-generation loyalty platform with gamified rewards, intuitive tracking, and engaging user experience that drives customer retention.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands-section">
        <div className="container">
          <div className="brands-header">
            <h2 className="brands-title">
              We don't just work together—we <span className="pink-text">grow</span> together.
            </h2>
          </div>
          <div className="brands-container">
            <div className="brand-bubble brand-1">
              <img src="/b1.png" alt="Brand 1" className="brand-logo" />
            </div>
            <div className="brand-bubble brand-2">
              <img src="/b2.png" alt="Brand 2" className="brand-logo" />
            </div>
            <div className="brand-bubble brand-3">
              <img src="/b3.png" alt="Brand 3" className="brand-logo" />
            </div>
            <div className="brand-bubble brand-4">
              <img src="/b4.png" alt="Brand 4" className="brand-logo" />
            </div>
            <div className="brand-bubble brand-5">
              <img src="/b5.png" alt="Brand 5" className="brand-logo" />
            </div>
            <div className="brand-bubble brand-6">
              <img src="/b6.png" alt="Brand 6" className="brand-logo" />
            </div>
            <div className="brand-bubble brand-7">
              <img src="/b7.png" alt="Brand 7" className="brand-logo" />
            </div>
            <div className="brand-bubble brand-8">
              <img src="/b8.png" alt="Brand 8" className="brand-logo" />
            </div>
            <div className="brand-bubble brand-9">
              <img src="/b9.png" alt="Brand 9" className="brand-logo" />
            </div>
          </div>
        </div>
      </section>

     

     
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Speed Force Digital</h3>
              <p>Accelerating your digital journey</p>
            </div>
            <div className="footer-links">
              <div className="link-group">
                <h4>Services</h4>
                <ul>
                  <li><a href="#web-dev">Web Development</a></li>
                  <li><a href="#marketing">Digital Marketing</a></li>
                  <li><a href="#design">UI/UX Design</a></li>
                </ul>
              </div>
              <div className="link-group">
                <h4>Company</h4>
                <ul>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#careers">Careers</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Speed Force Digital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Add script for expertise card interactivity

export default LandingPage;
