import React from 'react'
import Link from 'next/link'
import EarlyAccessFlow from '../components/EarlyAccessFlow'
const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL
const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL
const youtubeUrl = process.env.NEXT_PUBLIC_YOUTUBE_URL
const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL

export const metadata = {
  title: 'WanderTribe — Travel Together, Live Local',
  description: "A trust-first travel community for finding your travel tribe, organizing group adventures, and experiencing India through meaningful connections.",
}

export default async function HomePage(): Promise<React.ReactNode> {
  return (
    <>
      <style>{CSS}</style>

      {/* NAV */}
      <div id="top" />
      <nav className="wt-nav">
        <div className="logo">Wander<span>Tribe</span></div>
        <ul>
          <li><a href="#trips">Explore Trips</a></li>
          <li><a href="#hosting">Find Hosts</a></li>
          <li><a href="#features">Community</a></li>
          <li><a href="#safety">Safety</a></li>
        </ul>
        <a href="#early-access" className="nav-cta">Join the Journey</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">🌍 India&apos;s Trust-First Travel Community</div>
          <h1 className="hero-title">
            Travel <em>together.</em><br />
            Live <span className="accent-line">local.</span><br />
            Travel with <em>trust.</em>
          </h1>
          <p className="hero-sub">
            Find your travel tribe, organize group adventures, and experience India through genuine connections and trust-focused travel.
          </p>
          <div className="hero-app-label">Get the app</div>
          <div className="hero-actions app-download-actions">
            <AppStoreButton platform="ios" />
            <AppStoreButton platform="android" />
          </div>
          <div className="hero-socials" aria-label="Follow WanderTribe">
            <div className="hero-social-label">FOLLOW THE JOURNEY</div>
            <div className="hero-social-icons">
              {instagramUrl ? <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon /></a> : <span className="hero-social-disabled" aria-label="Instagram link not configured"><InstagramIcon /></span>}
              {facebookUrl ? <a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook"><FacebookIcon /></a> : <span className="hero-social-disabled" aria-label="Facebook link not configured"><FacebookIcon /></span>}
              {youtubeUrl ? <a href={youtubeUrl} target="_blank" rel="noreferrer" aria-label="YouTube"><YouTubeIcon /></a> : <span className="hero-social-disabled" aria-label="YouTube link coming later"><YouTubeIcon /></span>}
              {whatsappUrl ? <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp"><WhatsAppIcon /></a> : <span className="hero-social-disabled" aria-label="WhatsApp channel coming later"><WhatsAppIcon /></span>}
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="map-glow" />
          <div className="floating-cards">

            <div className="trip-card tc1">
              <div className="card-header">
                <div className="avatar-placeholder" style={{ background: 'linear-gradient(135deg,#FF6B2C,#E8A83E)' }}>P</div>
                <div>
                  <div className="card-name">Priya S.</div>
                  <div className="card-role">Trip Organizer</div>
                </div>
              </div>
              <div className="card-dest">Spiti Valley Trek 🏔️</div>
              <div className="card-meta">Example dates · Example group</div>
              <div className="card-tag tag-group">GROUP TRIP</div>
              <div className="verified-badge">Example trip</div>
            </div>

            <div className="trip-card tc2">
              <div className="card-header">
                <div className="avatar-placeholder" style={{ background: 'linear-gradient(135deg,#3ABCB1,#0A3D3D)' }}>A</div>
                <div>
                  <div className="card-name">Arjun M.</div>
                  <div className="card-role">Local Host · Mumbai</div>
                </div>
              </div>
              <div className="card-dest">Free Stay in Bandra 🏠</div>
              <div className="card-meta">Example availability</div>
              <div className="card-tag tag-host">HOSTING</div>
              <div className="verified-badge">Example stay</div>
            </div>

            <div className="trip-card tc3">
              <div className="card-header">
                <div className="avatar-placeholder" style={{ background: 'linear-gradient(135deg,#D4526A,#7b2d8b)' }}>R</div>
                <div>
                  <div className="card-name">Rhea K.</div>
                  <div className="card-role">Solo Traveler</div>
                </div>
              </div>
              <div className="card-dest">Looking for Goa crew 🌊</div>
              <div className="card-meta">Example dates · Example group</div>
              <div className="card-tag tag-solo">SOLO → GROUP</div>
            </div>

            <div className="trip-card tc4">
              <div className="card-meta" style={{ marginBottom: '6px' }}>Example trip</div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(253,248,240,0.6)', lineHeight: 1.5 }}>
                Identity checks<br />PLANNED<br />Community trust
              </div>
              <div className="card-tag tag-verified" style={{ marginTop: '8px' }}>TRUST FEATURES PLANNED</div>
            </div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section">
        <div className="section-label">How it works</div>
        <h2 className="section-title">Your journey in <em style={{ color: 'var(--saffron)' }}>4 steps</em></h2>
        <div className="how-grid">
          <div className="how-step">
            <div className="step-circle sc1">
              🪪
              <div className="step-n">01</div>
            </div>
            <h3>Verify Your Identity</h3>
            <p>Identity verification is part of WanderTribe's planned trust system, designed to help travelers build confidence over time.</p>
          </div>
          <div className="how-step">
            <div className="step-circle sc2">
              🗺️
              <div className="step-n">02</div>
            </div>
            <h3>Create or Join a Trip</h3>
            <p>Organize your own group adventure or browse and join trips created by fellow travelers.</p>
          </div>
          <div className="how-step">
            <div className="step-circle sc3">
              🏠
              <div className="step-n">03</div>
            </div>
            <h3>Find or Be a Host</h3>
            <p>Offer your home as a free stay or find a local host in your destination for an authentic cultural experience.</p>
          </div>
          <div className="how-step">
            <div className="step-circle sc4">
              🌏
              <div className="step-n">04</div>
            </div>
            <h3>Explore & Give Back</h3>
            <p>Travel, experience local life, build friendships, and when others visit your city — host them in return.</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section" id="features">
        <div style={{ maxWidth: '600px' }}>
          <div className="section-label">Core Features</div>
          <h2 className="section-title">Everything you need to <em style={{ color: 'var(--mint)' }}>travel smarter</em></h2>
          <div className="divider" />
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon fi-orange">🧭</div>
            <h3>Group Trip Organizer</h3>
            <p>Plan trips with built-in itinerary tools, expense splitting, voting on destinations, and in-app group chat for your travel squad.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon fi-rose">👤</div>
            <h3>Solo Traveler Network</h3>
            <p>Connect with other solo travelers headed to the same destination. Turn solo plans into memorable group adventures instantly.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon fi-teal">🏡</div>
            <h3>Stay Exchange (CouchSurf)</h3>
            <p>Offer your space for free when you&apos;re home. When you travel, get hosted by locals — a real cultural exchange, not just a bed.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon fi-gold">🎭</div>
            <h3>Local Culture Guides</h3>
            <p>Hosts share their city&apos;s hidden gems, local foods, festivals, and off-the-beaten-path experiences that no travel blog knows about.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon fi-mint">💬</div>
            <h3>Community & Forums</h3>
            <p>Ask questions, share stories, get tips from experienced travelers, and build lasting friendships with people who share your spirit.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon fi-deep">🔐</div>
            <h3>Trust & Verification</h3>
            <p>Verification, reviews, trust signals, and host history are being designed to help travelers make more informed connections.</p>
          </div>
        </div>
      </section>

      {/* EXAMPLE TRIPS */}
      <section className="trips-section" id="trips">
        <div className="trips-header">
          <div>
            <div className="section-label">Example Trips</div>
            <h2 className="section-title">Ways to <em style={{ color: 'var(--saffron)' }}>travel together</em></h2>
          </div>
          <div className="trips-header-note">Example trips shown below</div>
        </div>
        <div className="trips-scroll">

          <div className="trip-tile">
            <div className="trip-img ti-rajasthan">
              <div className="trip-overlay" />
              <div className="trip-img-label">Rajasthan Royale 🏰</div>
              <div className="trip-spots">Example</div>
            </div>
            <div className="trip-info">
              <div className="trip-info-row">
                <div className="trip-org">
                  <div className="org-av" style={{ background: 'linear-gradient(135deg,#FF6B2C,#E8A83E)' }}>S</div>
                  <div><div className="org-name">Example traveler</div><div className="org-badge">Sample</div></div>
                </div>
                <div className="trip-dates">Dec 20–28</div>
              </div>
              <div className="trip-tags">
                <span className="t-tag">Cultural</span>
                <span className="t-tag">Heritage</span>
                <span className="t-tag">Budget</span>
              </div>
              <div className="avatars-row">
                <div className="tiny-av" style={{ background: '#FF6B2C' }}>S</div>
                <div className="tiny-av" style={{ background: '#3ABCB1' }}>A</div>
                <div className="tiny-av" style={{ background: '#D4526A' }}>R</div>
                <div className="tiny-av" style={{ background: '#E8A83E' }}>M</div>
                <span className="av-more">Example group</span>
              </div>
            </div>
          </div>

          <div className="trip-tile">
            <div className="trip-img ti-kerala">
              <div className="trip-overlay" />
              <div className="trip-img-label">Kerala Backwaters 🌿</div>
              <div className="trip-spots">Example</div>
            </div>
            <div className="trip-info">
              <div className="trip-info-row">
                <div className="trip-org">
                  <div className="org-av" style={{ background: 'linear-gradient(135deg,#3ABCB1,#0A3D3D)' }}>A</div>
                  <div><div className="org-name">Example traveler</div><div className="org-badge">Sample</div></div>
                </div>
                <div className="trip-dates">Jan 5–12</div>
              </div>
              <div className="trip-tags">
                <span className="t-tag">Nature</span>
                <span className="t-tag">Ayurveda</span>
                <span className="t-tag">Women-Only</span>
              </div>
              <div className="avatars-row">
                <div className="tiny-av" style={{ background: '#3ABCB1' }}>A</div>
                <div className="tiny-av" style={{ background: '#D4526A' }}>P</div>
                <div className="tiny-av" style={{ background: '#E8A83E' }}>L</div>
                <span className="av-more">Example group</span>
              </div>
            </div>
          </div>

          <div className="trip-tile">
            <div className="trip-img ti-ladakh">
              <div className="trip-overlay" />
              <div className="trip-img-label">Ladakh Calling 🏔️</div>
              <div className="trip-spots">Example</div>
            </div>
            <div className="trip-info">
              <div className="trip-info-row">
                <div className="trip-org">
                  <div className="org-av" style={{ background: 'linear-gradient(135deg,#2c5282,#4a90d9)' }}>V</div>
                  <div><div className="org-name">Example traveler</div><div className="org-badge">Sample</div></div>
                </div>
                <div className="trip-dates">Jun 15–25</div>
              </div>
              <div className="trip-tags">
                <span className="t-tag">Adventure</span>
                <span className="t-tag">Biking</span>
                <span className="t-tag">High Altitude</span>
              </div>
              <div className="avatars-row">
                <div className="tiny-av" style={{ background: '#2c5282' }}>V</div>
                <div className="tiny-av" style={{ background: '#FF6B2C' }}>K</div>
                <span className="av-more">Example group</span>
              </div>
            </div>
          </div>

          <div className="trip-tile">
            <div className="trip-img ti-varanasi">
              <div className="trip-overlay" />
              <div className="trip-img-label">Varanasi & Beyond 🪔</div>
              <div className="trip-spots">Example</div>
            </div>
            <div className="trip-info">
              <div className="trip-info-row">
                <div className="trip-org">
                  <div className="org-av" style={{ background: 'linear-gradient(135deg,#7b2d8b,#c0392b)' }}>M</div>
                  <div><div className="org-name">Example traveler</div><div className="org-badge">Sample</div></div>
                </div>
                <div className="trip-dates">Nov 15–21</div>
              </div>
              <div className="trip-tags">
                <span className="t-tag">Spiritual</span>
                <span className="t-tag">Photography</span>
              </div>
              <div className="avatars-row">
                <div className="tiny-av" style={{ background: '#D4526A' }}>M</div>
                <div className="tiny-av" style={{ background: '#E8A83E' }}>S</div>
                <div className="tiny-av" style={{ background: '#3ABCB1' }}>N</div>
                <span className="av-more">Example group</span>
              </div>
            </div>
          </div>

          <div className="trip-tile">
            <div className="trip-img ti-goa">
              <div className="trip-overlay" />
              <div className="trip-img-label">Goa Vibes 🌊</div>
              <div className="trip-spots">Example</div>
            </div>
            <div className="trip-info">
              <div className="trip-info-row">
                <div className="trip-org">
                  <div className="org-av" style={{ background: 'linear-gradient(135deg,#0077b6,#00b4d8)' }}>R</div>
                  <div><div className="org-name">Example traveler</div><div className="org-badge">Sample</div></div>
                </div>
                <div className="trip-dates">Dec 26–Jan 2</div>
              </div>
              <div className="trip-tags">
                <span className="t-tag">Beach</span>
                <span className="t-tag">New Year</span>
                <span className="t-tag">Party</span>
              </div>
              <div className="avatars-row">
                <div className="tiny-av" style={{ background: '#0077b6' }}>R</div>
                <div className="tiny-av" style={{ background: '#FF6B2C' }}>T</div>
                <div className="tiny-av" style={{ background: '#D4526A' }}>Z</div>
                <span className="av-more">Example group</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SAFETY SECTION */}
      <section className="safety-section" id="safety">
        <div className="safety-grid">
          <div>
            <div className="section-label">Trust &amp; Safety</div>
            <h2 className="section-title">Trust-first<br /><em style={{ color: 'var(--gold)' }}>trust layer</em></h2>
            <p className="section-sub">Designed with trust and safety in mind for travelers who want to make more informed connections.</p>
            <div className="safety-features" style={{ marginTop: '48px' }}>
              <div className="safety-item">
                <div className="si-icon">🔒</div>
                <div className="si-content">
                  <h4>Identity Verification — Planned</h4>
                  <p>Verification and identity-data handling, retention, and deletion rules will be published before launch.</p>
                </div>
              </div>
              <div className="safety-item">
                <div className="si-icon">⭐</div>
                <div className="si-content">
                  <h4>WanderTrust Score</h4>
                  <p>WanderTrust is designed to grow through reviews, real-world experiences, and meaningful trust signals.</p>
                </div>
              </div>
              <div className="safety-item">
                <div className="si-icon">🛡️</div>
                <div className="si-content">
                  <h4>Safety Features — Planned</h4>
                  <p>Future safety features may include traveler controls, emergency-contact options, and safer community interactions.</p>
                </div>
              </div>
              <div className="safety-item">
                <div className="si-icon">📋</div>
                <div className="si-content">
                  <h4>Additional Host Checks — Planned</h4>
                  <p>Additional host verification and two-way reviews are planned as part of the trust system.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="trust-flow-card">
            <div className="trust-flow-logo">How Trust Builds</div>
            <div className="verify-steps">
              <div className="verify-step">
                <div className="step-num">01</div>
                <div className="step-text">
                  <h4>Create Your Profile</h4>
                  <p>Start with your profile and the information you choose to share with the community.</p>
                </div>
              </div>
              <div className="verify-step">
                <div className="step-num">02</div>
                <div className="step-text">
                  <h4>Build Your Trust Signals</h4>
                  <p>Reviews, real-world experiences, hosting history, and future verification can contribute to meaningful trust signals.</p>
                </div>
              </div>
              <div className="verify-step">
                <div className="step-num">03</div>
                <div className="step-text">
                  <h4>Travel &amp; Connect</h4>
                  <p>Use available trust signals to make more informed connections with other travelers.</p>
                </div>
              </div>
              <div className="verify-step">
                <div className="step-num">04</div>
                <div className="step-text">
                  <h4>Grow Your WanderTrust</h4>
                  <p>As you travel, host, and build real experiences, your trust history can grow with the community.</p>
                </div>
              </div>
            </div>
            <div className="trust-badges">
              <div className="trust-badge">🔒 Trust features planned</div>
              <div className="trust-badge">🇮🇳 Made for India</div>
              <div className="trust-badge">♀ Safety features planned</div>
              <div className="trust-badge">Verification planned</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOSTING SECTION */}
      <section className="host-section" id="hosting">
        <div className="host-grid">
          <div className="host-profile-demo">
            <div className="host-header">
              <div className="host-big-av" style={{ background: 'linear-gradient(135deg,#3ABCB1,#0A3D3D)' }}>A</div>
              <div className="host-details">
                <h3>Arjun Mehta</h3>
                <p>📍 Bandra West, Mumbai</p>
                <div className="host-v">Example trip Host</div>
              </div>
            </div>
            <div className="host-stats-row">
              <div className="hs"><div className="hs-n">18</div><div className="hs-l">Guests Hosted</div></div>
              <div className="hs"><div className="hs-n">7</div><div className="hs-l">Trips Hosted</div></div>
              <div className="hs"><div className="hs-n">3 yr</div><div className="hs-l">On Platform</div></div>
            </div>
            <div className="offering-tags">
              <span className="o-tag">🛏️ Private Room</span>
              <span className="o-tag">🍲 Home Cooked Meals</span>
              <span className="o-tag">🏖️ Beach Guide</span>
              <span className="o-tag">🚇 Local Transport Tips</span>
            </div>
            <div className="host-review">
              <div className="review-stars">★★★★★</div>
              <div className="review-text">&quot;Arjun showed us parts of Mumbai we&apos;d never find in any guide. The home-cooked dal was unforgettable. Felt like staying with family.&quot;</div>
              <div className="review-by">— Example traveler</div>
            </div>
          </div>

          <div>
            <div className="section-label">Hosting Program · Planned</div>
            <h2 className="section-title">Open your door,<br />open the <em style={{ color: 'var(--mint)' }}>world</em></h2>
            <p className="section-sub" style={{ marginBottom: '40px' }}>A future hosting program designed around cultural exchange, community trust, and meaningful stays.</p>
            <div className="host-benefits">
              <div className="hb-item">
                <div className="hb-icon">🌐</div>
                <div className="hb-text">
                  <h4>Hosting Exchange — Planned</h4>
                  <p>A future hosting exchange could connect travelers through stays, reciprocity, and community trust signals.</p>
                </div>
              </div>
              <div className="hb-item">
                <div className="hb-icon">🤝</div>
                <div className="hb-text">
                  <h4>Real Cultural Exchange</h4>
                  <p>Show travelers local markets, hidden gems, festivals, and authentic food experiences — not tourist traps.</p>
                </div>
              </div>
              <div className="hb-item">
                <div className="hb-icon">🔐</div>
                <div className="hb-text">
                  <h4>Trust-focused guest discovery</h4>
                  <p>As a host, you can review traveler profiles and available trust signals before accepting a request.</p>
                </div>
              </div>
              <div className="hb-item">
                <div className="hb-icon">📣</div>
                <div className="hb-text">
                  <h4>Build Your Host Reputation</h4>
                  <p>Reviews and meaningful trust signals can help hosts build a reputation over time. Future host features will be introduced as the platform develops.</p>
                </div>
              </div>
            </div>
            <a href="#early-access" className="btn-primary" style={{ marginTop: '40px', display: 'inline-block' }}>Join the Journey →</a>
          </div>
        </div>
      </section>

      {/* TARA — FUTURE INTELLIGENCE */}
      <section className="tara-section" id="tara">
        <div className="tara-grid">
          <div className="tara-copy">
            <div className="section-label">Future Intelligence</div>
            <h2 className="section-title">
              Meet <em style={{ color: 'var(--mint)' }}>Tara</em>
            </h2>
            <p className="section-sub">
              A future intelligence layer designed to help you make sense of your
              travel journey, discover meaningful possibilities, and make more
              informed decisions.
            </p>
            <div className="tara-status">COMING LATER · CONCEPT</div>
          </div>

          <div className="tara-card">
            <div className="tara-card-top">
              <div className="tara-orb">✦</div>
              <div>
                <div className="tara-name">Tara</div>
                <div className="tara-label">Travel intelligence</div>
              </div>
            </div>

            <div className="tara-prompt">What can Tara help with?</div>

            <div className="tara-options">
              <div className="tara-option">🧭 Make sense of my journey</div>
              <div className="tara-option">🤝 Discover meaningful connections</div>
              <div className="tara-option">🗺️ Explore possibilities around my trip</div>
              <div className="tara-option">✦ Make more informed travel decisions</div>
            </div>

            <div className="tara-note">
              Future experience — not available yet
            </div>
          </div>
        </div>
      </section>

      {/* EARLY ACCESS */}
      <section className="early-access-section" id="early-access">
        <EarlyAccessFlow />
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="section-label" style={{ textAlign: 'center' }}>Ready to begin?</div>
        <h2 className="section-title">
          Your next adventure<br />is one <em style={{ color: 'var(--saffron)' }}>tribe</em> away
        </h2>
        <p className="section-sub">
          Be among the first to help build a trust-first travel community across India. Solo traveler, group organizer, or local host — there&apos;s a place in WanderTribe for you.
        </p>
        <div className="cta-buttons">
          <a href="#early-access" className="btn-primary btn-large">Join Early Access →</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand">
          <div className="logo">Wander<span style={{ color: 'var(--saffron)' }}>Tribe</span></div>
          <div className="footer-tagline">Trust that grows with every journey.</div>
        </div>
        <div className="footer-links">
          <a href="#trips">Trips</a>
          <a href="#safety">Trust</a>
          <a href="#hosting">Hosts</a>
          <a href="#tara">Tara</a>
          <a href="#early-access">Join Early Access</a>
        </div>
        <div className="footer-socials">
          <div className="footer-social-label">Follow</div>
          <div className="footer-social-icons">
            {instagramUrl ? <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon /></a> : <span className="footer-social-disabled" aria-label="Instagram link not configured"><InstagramIcon /></span>}
            {facebookUrl ? <a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook"><FacebookIcon /></a> : <span className="footer-social-disabled" aria-label="Facebook link not configured"><FacebookIcon /></span>}
            {youtubeUrl ? <a href={youtubeUrl} target="_blank" rel="noreferrer" aria-label="YouTube"><YouTubeIcon /></a> : <span className="footer-social-disabled" aria-label="YouTube link coming later"><YouTubeIcon /></span>}
            {whatsappUrl ? <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp"><WhatsAppIcon /></a> : <span className="footer-social-disabled" aria-label="WhatsApp channel coming later"><WhatsAppIcon /></span>}
          </div>
        </div>
        <div className="footer-apps">
          <div className="footer-social-label">Get the app</div>
          <div className="footer-app-buttons">
            <AppStoreButton platform="ios" />
            <AppStoreButton platform="android" />
          </div>
        </div>
        <div className="footer-copy">Made with ❤️ for Indian travelers</div>
      </footer>
    </>
  )
}

function AppStoreButton({ platform }: { platform: 'ios' | 'android' }) {
  const isAndroid = platform === 'android'
  return (
    <Link
      href={`/coming-soon?platform=${platform}`}
      className="app-store-button"
      aria-label={isAndroid ? 'Open Google Play — Coming Soon' : 'Open App Store — Coming Soon'}
    >
      {isAndroid ? <GooglePlaySmallIcon /> : <AppleSmallIcon />}
      <span><small>COMING SOON</small>{isAndroid ? 'Google Play' : 'App Store'}</span>
    </Link>
  )
}

function InstagramIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" className="icon-fill"/></svg> }
function FacebookIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v4h4v-4h3.2l.8-4H13V9c0-.7.3-1 1-1Z"/></svg> }
function YouTubeIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="m10 9 5 3-5 3V9Z" className="icon-cutout"/></svg> }
function WhatsAppIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a8.5 8.5 0 0 0-7.35 12.77L3.5 20.5l4.85-1.13A8.5 8.5 0 1 0 12 3Zm0 15.4a6.9 6.9 0 0 1-3.52-.96l-.25-.15-2.88.67.68-2.8-.16-.26A6.9 6.9 0 1 1 12 18.4Zm3.82-5.1c-.2-.1-1.18-.58-1.36-.65-.18-.07-.31-.1-.44.1-.13.2-.5.65-.61.78-.11.13-.22.15-.42.05-.2-.1-.83-.31-1.58-.99-.58-.52-.98-1.16-1.09-1.36-.11-.2-.01-.31.08-.41.09-.09.2-.22.3-.33.1-.11.13-.2.2-.33.07-.13.04-.25-.02-.35-.05-.1-.44-1.06-.6-1.45-.16-.38-.32-.33-.44-.34h-.38c-.13 0-.34.05-.52.25-.18.2-.68.67-.68 1.64s.7 1.9.8 2.03c.1.13 1.38 2.1 3.35 2.94.47.2.84.32 1.13.41.47.15.9.13 1.24.08.38-.06 1.18-.48 1.35-.94.17-.46.17-.85.12-.94-.05-.08-.18-.13-.38-.23Z"/></svg> }
function AppleSmallIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08ZM12.03 7.25C11.88 5.02 13.69 3.18 15.77 3c.29 2.58-2.33 4.5-3.74 4.25Z"/></svg> }
function GooglePlaySmallIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.6 2.4c-.37.39-.6 1-.6 1.77v15.66c0 .77.23 1.38.6 1.77L3.7 21.7 14.42 10.98V10.9L3.7 2.3l-.1.1Z"/><path d="m17.96 14.52-3.54-3.54v-.08l3.54-3.54 4.25 2.42c1.21.69 1.21 1.63 0 2.32l-4.25 2.42Z"/><path d="m3.6 21.6 10.72-10.72 3.64 3.64-11.9 6.76c-.97.55-1.82.59-2.46.32Z"/><path d="m3.6 2.4 10.72 10.72-3.64 3.64L3.6 9.98c-.64-.37-1.05-.88-1.05-1.5 0-.62.41-1.13 1.05-1.5Z"/></svg> }

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap');

  :root {
    --saffron:   #FF6B2C;
    --deep-teal: #0A3D3D;
    --warm-sand: #F5EDD8;
    --night:     #0C1A1A;
    --gold:      #E8A83E;
    --rose:      #D4526A;
    --mint:      #3ABCB1;
    --cream:     #FDF8F0;
    --text-dark: #1A2E2E;
    --glass:     rgba(255,255,255,0.06);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--night);
    color: var(--cream);
    overflow-x: hidden;
  }

  /* ── NAV ── */
  .wt-nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 20px 48px;
    background: linear-gradient(180deg, rgba(12,26,26,0.95) 0%, transparent 100%);
    backdrop-filter: blur(12px);
  }
  .logo {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem; font-weight: 900; letter-spacing: -0.5px;
    color: var(--cream);
  }
  .logo span { color: var(--saffron); }
  .wt-nav ul { display: flex; gap: 32px; list-style: none; }
  .wt-nav ul a { color: rgba(253,248,240,0.7); text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: color 0.2s; }
  .wt-nav ul a:hover { color: var(--saffron); }
  .nav-cta {
    background: var(--saffron); color: white; border: none;
    padding: 10px 24px; border-radius: 100px;
    font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 0.9rem;
    cursor: pointer; transition: transform 0.2s, box-shadow 0.2s;
    text-decoration: none; display: inline-block;
  }
  .nav-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255,107,44,0.4); }

  /* ── HERO ── */
  .hero {
    min-height: 100vh;
    display: grid; grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 120px 48px 80px;
    position: relative; overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute; inset: 0;
    z-index: 0;
    pointer-events: none;
    background:
      radial-gradient(ellipse 60% 80% at 70% 50%, rgba(58,188,177,0.08) 0%, transparent 60%),
      radial-gradient(ellipse 40% 60% at 20% 80%, rgba(255,107,44,0.06) 0%, transparent 50%);
  }
  .hero-content, .hero-visual { position: relative; z-index: 1; }

  .hero-app-label {
    color: rgba(253,248,240,0.38);
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-family: 'Space Mono', monospace;
    margin-bottom: 10px;
  }

  .hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(255,107,44,0.12); border: 1px solid rgba(255,107,44,0.3);
    padding: 6px 16px; border-radius: 100px; margin-bottom: 24px;
    font-size: 0.78rem; font-weight: 600; color: var(--saffron); letter-spacing: 0.08em; text-transform: uppercase;
  }
  .hero-badge::before { content: '●'; font-size: 0.5rem; animation: pulse 2s infinite; }
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }

  .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(3rem, 5vw, 5.2rem);
    line-height: 1.05; font-weight: 900; letter-spacing: -2px;
    margin-bottom: 24px;
  }
  .hero-title em { color: var(--saffron); font-style: italic; }
  .hero-title .accent-line { color: var(--mint); font-style: italic; }

  .hero-sub {
    font-size: 1.05rem; color: rgba(253,248,240,0.65); line-height: 1.7;
    max-width: 480px; margin-bottom: 40px; font-weight: 300;
  }

  .app-store-button {
    display: flex; align-items: center; gap: 9px; min-width: 138px;
    padding: 8px 12px; border: 1px solid rgba(255,255,255,.09);
    border-radius: 12px; background: rgba(255,255,255,.025);
    color: var(--cream); text-decoration: none; transition: all .2s;
  }
  .app-store-button:hover { border-color: rgba(58,188,177,.35); background: rgba(58,188,177,.05); transform: translateY(-2px); }
  .app-store-button svg { width: 20px; height: 20px; fill: currentColor; flex-shrink: 0; }
  .app-store-button span { display: flex; flex-direction: column; font-size: .75rem; font-weight: 600; line-height: 1.1; }
  .app-store-button small { color: rgba(253,248,240,.35); font-size: .52rem; font-weight: 500; margin-bottom: 3px; }
  .hero-socials { margin-top: 24px; }
  .hero-social-label { font-family: 'Space Mono', monospace; font-size: .58rem; letter-spacing: .16em; color: rgba(253,248,240,.35); margin-bottom: 11px; }
  .hero-social-icons { display: flex; gap: 9px; }
  .hero-social-icons a, .hero-social-disabled { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,.09); border-radius: 50%; color: rgba(253,248,240,.62); transition: all .2s; }
  .hero-social-disabled { opacity: .65; }
  .hero-social-icons a:hover { border-color: rgba(58,188,177,.4); color: var(--mint); transform: translateY(-2px); }
  .hero-social-icons svg { width: 17px; height: 17px; fill: currentColor; }
  .hero-social-icons rect, .hero-social-icons circle { fill: none; stroke: currentColor; stroke-width: 1.7; }
  .hero-social-icons .icon-fill { fill: currentColor; stroke: none; }
  .hero-social-icons .icon-cutout { fill: var(--night); }

  .hero-actions { display: flex; gap: 16px; align-items: center; flex-wrap: wrap; }
  .btn-primary {
    background: var(--saffron);
    color: white; border: none; padding: 16px 36px; border-radius: 100px;
    font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 1rem;
    cursor: pointer; transition: all 0.3s; text-decoration: none; display: inline-block;
    box-shadow: 0 4px 24px rgba(255,107,44,0.3);
  }
  .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 12px 36px rgba(255,107,44,0.45); }
  .btn-ghost {
    background: transparent; color: var(--cream); border: 1.5px solid rgba(253,248,240,0.2);
    padding: 15px 32px; border-radius: 100px;
    font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 1rem;
    cursor: pointer; transition: all 0.3s; text-decoration: none; display: inline-block;
  }
  .btn-ghost:hover { border-color: var(--mint); color: var(--mint); }

  /* ── HERO VISUAL ── */
  .hero-visual {
    position: relative; height: 580px;
    display: flex; align-items: center; justify-content: center;
  }
  .map-glow {
    width: 420px; height: 420px; border-radius: 50%;
    background: radial-gradient(circle, rgba(58,188,177,0.12) 0%, rgba(10,61,61,0.4) 50%, transparent 70%);
    position: absolute;
    border: 1px solid rgba(58,188,177,0.15);
    animation: breathe 4s ease-in-out infinite;
  }
  @keyframes breathe { 0%,100%{transform:scale(1)} 50%{transform:scale(1.04)} }

  .floating-cards {
    position: relative; width: 340px; height: 480px;
  }
  .trip-card {
    position: absolute;
    background: rgba(255,255,255,0.04);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 20px; padding: 20px;
    animation: float linear infinite;
  }
  @keyframes float {
    0%   { transform: translateY(0px) rotate(var(--rot)); }
    50%  { transform: translateY(-10px) rotate(var(--rot)); }
    100% { transform: translateY(0px) rotate(var(--rot)); }
  }
  .tc1 { top: 0; left: 0; width: 200px; --rot: -3deg; animation-duration: 5s; }
  .tc2 { top: 120px; right: 0; width: 180px; --rot: 2deg; animation-duration: 6s; animation-delay: -2s; }
  .tc3 { bottom: 40px; left: 20px; width: 190px; --rot: -1deg; animation-duration: 7s; animation-delay: -1s; }
  .tc4 { bottom: 80px; right: 10px; width: 160px; --rot: 3deg; animation-duration: 5.5s; animation-delay: -3s; }

  .card-header { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
  .avatar-placeholder {
    width: 32px; height: 32px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.75rem; font-weight: 700; color: white; flex-shrink: 0;
  }
  .card-name { font-size: 0.78rem; font-weight: 600; }
  .card-role { font-size: 0.65rem; color: rgba(253,248,240,0.5); }
  .card-dest {
    font-family: 'Playfair Display', serif;
    font-size: 1rem; font-weight: 700; margin-bottom: 6px;
  }
  .card-meta { font-size: 0.7rem; color: rgba(253,248,240,0.55); }
  .card-tag {
    display: inline-block; margin-top: 10px;
    padding: 3px 10px; border-radius: 100px; font-size: 0.65rem; font-weight: 600; letter-spacing: 0.04em;
  }
  .tag-host     { background: rgba(58,188,177,0.2);  color: var(--mint); }
  .tag-group    { background: rgba(255,107,44,0.2);  color: var(--saffron); }
  .tag-verified { background: rgba(232,168,62,0.2);  color: var(--gold); }
  .tag-solo     { background: rgba(212,82,106,0.15); color: var(--rose); }
  .verified-badge {
    display: flex; align-items: center; gap: 4px;
    font-size: 0.65rem; color: var(--gold); margin-top: 6px; font-weight: 600;
  }

  /* ── SECTION COMMON ── */
  section { padding: 100px 48px; scroll-margin-top: 88px; }
  .section-label {
    font-size: 0.75rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.15em; color: var(--saffron); margin-bottom: 16px;
    font-family: 'Space Mono', monospace;
  }
  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 3.5vw, 3rem);
    font-weight: 900; line-height: 1.1; letter-spacing: -1px;
    margin-bottom: 20px;
  }
  .section-sub { color: rgba(253,248,240,0.6); font-size: 1rem; line-height: 1.7; max-width: 520px; font-weight: 300; }

  /* ── FEATURES ── */
  .features-section { background: rgba(255,255,255,0.01); }
  .features-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 24px; margin-top: 64px;
  }
  .feature-card {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 24px; padding: 36px 32px;
    transition: all 0.4s; position: relative; overflow: hidden;
  }
  .feature-card::after {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(135deg, transparent 60%, rgba(255,107,44,0.04) 100%);
    transition: opacity 0.4s; opacity: 0;
  }
  .feature-card:hover { border-color: rgba(255,107,44,0.3); transform: translateY(-6px); }
  .feature-card:hover::after { opacity: 1; }
  .feature-icon {
    width: 52px; height: 52px; border-radius: 14px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.5rem; margin-bottom: 24px;
  }
  .fi-orange { background: rgba(255,107,44,0.12); }
  .fi-teal   { background: rgba(58,188,177,0.12); }
  .fi-gold   { background: rgba(232,168,62,0.12); }
  .fi-rose   { background: rgba(212,82,106,0.12); }
  .fi-mint   { background: rgba(58,188,177,0.12); }
  .fi-deep   { background: rgba(10,61,61,0.4); border: 1px solid rgba(58,188,177,0.2); }
  .feature-card h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.25rem; font-weight: 700; margin-bottom: 12px;
  }
  .feature-card p { font-size: 0.88rem; color: rgba(253,248,240,0.58); line-height: 1.7; font-weight: 300; }

  /* ── SAFETY SECTION ── */
  .safety-section {
    background: linear-gradient(135deg, #051515 0%, #0A2A2A 50%, #051515 100%);
    position: relative; overflow: hidden;
  }
  .safety-section::before {
    content: '';
    position: absolute; top: -200px; right: -200px;
    width: 600px; height: 600px; border-radius: 50%;
    background: radial-gradient(circle, rgba(232,168,62,0.06) 0%, transparent 60%);
  }
  .safety-grid {
    display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 64px; align-items: stretch;
  }
  .safety-grid > :first-child { display: flex; flex-direction: column; min-width: 0; }
  .trust-flow-card {
    background: linear-gradient(135deg, #1A3A3A 0%, #0F2828 100%);
    border: 1px solid rgba(232,168,62,0.2);
    border-radius: 28px; padding: 32px;
    position: relative; overflow: hidden; box-sizing: border-box;
    align-self: stretch; display: flex; flex-direction: column;
    margin-top: 264px;
  }
  .trust-flow-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--gold), var(--saffron), var(--mint));
  }
  .trust-flow-logo {
    font-family: 'Space Mono', monospace;
    font-size: 0.7rem; letter-spacing: 0.2em; color: var(--gold);
    text-transform: uppercase; margin-bottom: 24px;
    display: flex; align-items: center; gap: 10px;
  }
  .trust-flow-logo::before { content: ''; width: 28px; height: 2px; background: var(--gold); }
  .verify-steps {
    display: grid; grid-template-rows: auto; gap: 22px;
  }
  .verify-step { display: flex; align-items: flex-start; gap: 16px; }
  .step-num {
    width: 32px; height: 32px; border-radius: 50%; flex-shrink: 0;
    background: rgba(232,168,62,0.12); border: 1px solid rgba(232,168,62,0.3);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Space Mono', monospace; font-size: 0.75rem; font-weight: 700; color: var(--gold);
  }
  .step-text h4 { font-size: 0.9rem; font-weight: 600; margin-bottom: 4px; }
  .step-text p  { font-size: 0.8rem; color: rgba(253,248,240,0.5); line-height: 1.5; }
  .trust-badges { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 26px; }
  .trust-badge {
    padding: 6px 14px; border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.08);
    font-size: 0.72rem; font-weight: 600; letter-spacing: 0.04em;
    color: rgba(253,248,240,0.6);
  }
  .safety-features { display: flex; flex-direction: column; gap: 28px; flex: 1; }
  .safety-item {
    display: flex; gap: 20px; align-items: flex-start;
    padding: 24px; border-radius: 16px;
    background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06);
    transition: border-color 0.3s;
  }
  .safety-item:hover { border-color: rgba(232,168,62,0.25); }
  .si-icon { font-size: 1.5rem; flex-shrink: 0; }
  .si-content h4 { font-size: 0.95rem; font-weight: 600; margin-bottom: 6px; }
  .si-content p  { font-size: 0.82rem; color: rgba(253,248,240,0.55); line-height: 1.6; }

  /* ── HOW IT WORKS ── */
  .how-section { position: relative; }
  .how-grid {
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 0; margin-top: 64px; position: relative;
  }
  .how-grid::after {
    content: '';
    position: absolute; top: 40px; left: 10%; right: 10%; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,107,44,0.3), rgba(58,188,177,0.3), transparent);
    z-index: 0;
  }
  .how-step { text-align: center; padding: 0 24px; position: relative; z-index: 1; }
  .step-circle {
    width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 24px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.6rem; position: relative;
    border: 2px solid rgba(255,255,255,0.08);
  }
  .sc1 { background: rgba(255,107,44,0.1);  border-color: rgba(255,107,44,0.3); }
  .sc2 { background: rgba(58,188,177,0.1);  border-color: rgba(58,188,177,0.3); }
  .sc3 { background: rgba(232,168,62,0.1);  border-color: rgba(232,168,62,0.3); }
  .sc4 { background: rgba(212,82,106,0.1);  border-color: rgba(212,82,106,0.3); }
  .step-n {
    position: absolute; top: -6px; right: -6px;
    width: 22px; height: 22px; border-radius: 50%;
    background: var(--night); border: 1px solid rgba(255,255,255,0.1);
    font-family: 'Space Mono', monospace; font-size: 0.6rem; font-weight: 700;
    display: flex; align-items: center; justify-content: center; color: rgba(253,248,240,0.5);
  }
  .how-step h3 { font-family: 'Playfair Display', serif; font-size: 1.05rem; font-weight: 700; margin-bottom: 10px; }
  .how-step p  { font-size: 0.82rem; color: rgba(253,248,240,0.55); line-height: 1.65; }

  /* ── TRIPS SHOWCASE ── */
  .trips-section { overflow: hidden; }
  .trips-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 48px; }
  .trips-header-note { color: rgba(253,248,240,.38); font-size: .72rem; font-family: 'Space Mono', monospace; text-transform: uppercase; letter-spacing: .08em; }
  .trips-scroll { display: flex; gap: 24px; overflow-x: auto; padding-bottom: 16px; scrollbar-width: none; }
  .trips-scroll::-webkit-scrollbar { display: none; }
  .trip-tile {
    flex-shrink: 0; width: 280px; border-radius: 24px;
    background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
    overflow: hidden; transition: transform 0.3s, border-color 0.3s;
    cursor: pointer;
  }
  .trip-tile:hover { transform: translateY(-8px); border-color: rgba(255,107,44,0.3); }
  .trip-img {
    width: 100%; height: 160px;
    background-size: cover; background-position: center;
    position: relative;
  }
  .trip-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(0deg, rgba(12,26,26,0.8) 0%, transparent 60%);
  }
  .trip-img-label {
    position: absolute; bottom: 12px; left: 16px;
    font-family: 'Playfair Display', serif; font-size: 1.15rem; font-weight: 700;
  }
  .trip-spots {
    position: absolute; top: 12px; right: 12px;
    background: rgba(255,107,44,0.9); padding: 4px 10px; border-radius: 100px;
    font-size: 0.65rem; font-weight: 700; letter-spacing: 0.04em;
  }
  .trip-info { padding: 20px; }
  .trip-info-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
  .trip-org { display: flex; align-items: center; gap: 8px; }
  .org-av {
    width: 28px; height: 28px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.7rem; font-weight: 700; color: white;
  }
  .org-name  { font-size: 0.78rem; font-weight: 600; }
  .org-badge { font-size: 0.6rem;  color: var(--gold); }
  .trip-dates { font-size: 0.72rem; color: rgba(253,248,240,0.5); }
  .trip-tags { display: flex; gap: 6px; flex-wrap: wrap; }
  .t-tag {
    padding: 3px 9px; border-radius: 6px; font-size: 0.62rem; font-weight: 600;
    background: rgba(255,255,255,0.06); color: rgba(253,248,240,0.7);
  }
  .avatars-row { display: flex; margin-top: 14px; align-items: center; }
  .tiny-av {
    width: 26px; height: 26px; border-radius: 50%; border: 2px solid var(--night);
    display: flex; align-items: center; justify-content: center;
    font-size: 0.6rem; font-weight: 700; color: white; margin-left: -8px;
  }
  .tiny-av:first-child { margin-left: 0; }
  .av-more { font-size: 0.7rem; color: rgba(253,248,240,0.5); margin-left: 8px; }

  /* Trip image gradients */
  .ti-rajasthan { background: linear-gradient(135deg, #8B4513 0%, #D2691E 50%, #FF8C00 100%); }
  .ti-kerala    { background: linear-gradient(135deg, #1a5c3a 0%, #2d8a5e 50%, #4db877 100%); }
  .ti-ladakh    { background: linear-gradient(135deg, #2c5282 0%, #4a90d9 50%, #87CEEB 100%); }
  .ti-varanasi  { background: linear-gradient(135deg, #7b2d8b 0%, #c0392b 50%, #f39c12 100%); }
  .ti-goa       { background: linear-gradient(135deg, #0077b6 0%, #00b4d8 50%, #90e0ef 100%); }

  /* ── HOSTING SECTION ── */
  .host-section { background: linear-gradient(135deg, #070F0F 0%, #0D2020 100%); }
  .host-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
  .host-profile-demo {
    background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
    border-radius: 28px; padding: 32px; position: relative;
  }
  .host-profile-demo::after {
    content: 'HOST PROFILE';
    position: absolute; top: -11px; left: 28px;
    background: var(--deep-teal); padding: 0 12px;
    font-size: 0.6rem; letter-spacing: 0.15em; color: var(--mint); font-weight: 700;
    font-family: 'Space Mono', monospace;
  }
  .host-header { display: flex; gap: 16px; align-items: center; margin-bottom: 24px; }
  .host-big-av {
    width: 64px; height: 64px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.4rem; font-weight: 700; color: white;
    border: 3px solid rgba(58,188,177,0.4); flex-shrink: 0;
  }
  .host-details h3 { font-family: 'Playfair Display', serif; font-size: 1.3rem; font-weight: 700; }
  .host-details p  { font-size: 0.82rem; color: rgba(253,248,240,0.55); margin-top: 4px; }
  .host-v { display: flex; align-items: center; gap: 5px; font-size: 0.72rem; color: var(--gold); font-weight: 600; margin-top: 6px; }
  .host-stats-row {
    display: flex; gap: 24px; padding: 20px 0;
    border-top: 1px solid rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.06);
    margin-bottom: 20px;
  }
  .hs { text-align: center; }
  .hs-n { font-family: 'Space Mono', monospace; font-size: 1.3rem; font-weight: 700; color: var(--mint); }
  .hs-l { font-size: 0.68rem; color: rgba(253,248,240,0.45); text-transform: uppercase; letter-spacing: 0.05em; margin-top: 2px; }
  .offering-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px; }
  .o-tag {
    padding: 6px 14px; border-radius: 10px; font-size: 0.75rem; font-weight: 500;
    background: rgba(58,188,177,0.08); border: 1px solid rgba(58,188,177,0.2); color: var(--mint);
  }
  .host-review { background: rgba(255,255,255,0.02); border-radius: 14px; padding: 16px; }
  .review-stars { color: var(--gold); font-size: 0.75rem; margin-bottom: 6px; }
  .review-text { font-size: 0.8rem; color: rgba(253,248,240,0.6); line-height: 1.6; font-style: italic; }
  .review-by   { font-size: 0.72rem; color: rgba(253,248,240,0.4); margin-top: 8px; }

  .host-benefits { display: flex; flex-direction: column; gap: 20px; }
  .hb-item { display: flex; gap: 16px; align-items: flex-start; }
  .hb-icon {
    width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center; font-size: 1.1rem;
    background: rgba(58,188,177,0.08); border: 1px solid rgba(58,188,177,0.15);
  }
  .hb-text h4 { font-size: 0.95rem; font-weight: 600; margin-bottom: 4px; }
  .hb-text p  { font-size: 0.82rem; color: rgba(253,248,240,0.5); line-height: 1.6; }

  .footer-brand { display: flex; flex-direction: column; gap: 8px; }
  .footer-tagline { color: rgba(253,248,240,0.38); font-size: 0.72rem; }
  .footer-socials, .footer-apps { display: flex; flex-direction: column; gap: 10px; }
  .footer-social-label { color: rgba(253,248,240,0.35); font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.12em; font-family: 'Space Mono', monospace; }
  .footer-social-icons { display: flex; gap: 10px; }
  .footer-social-icons a { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,0.09); border-radius: 50%; color: rgba(253,248,240,0.65); transition: all .2s; }
  .footer-social-icons a:hover { color: var(--mint); border-color: rgba(58,188,177,.4); transform: translateY(-2px); }
  .footer-social-disabled { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,0.05); border-radius: 50%; color: rgba(253,248,240,0.18); }
  .footer-social-icons svg { width: 17px; height: 17px; fill: currentColor; }
  .footer-social-icons rect, .footer-social-icons circle { fill: none; stroke: currentColor; stroke-width: 1.7; }
  .footer-social-icons .icon-fill { fill: currentColor; stroke: none; }
  .footer-social-icons .icon-cutout { fill: var(--night); }
  .footer-app-buttons { display: flex; gap: 8px; flex-wrap: wrap; }

  /* ── TARA ── */
  .tara-section {
    background: #071C1C;
    position: relative;
    overflow: hidden;
  }

  .tara-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }

  .tara-status {
    display: inline-flex;
    margin-top: 32px;
    padding: 7px 12px;
    border: 1px solid rgba(58,188,177,0.25);
    border-radius: 999px;
    color: var(--mint);
    font-family: 'Space Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.12em;
  }

  .tara-card {
    background: linear-gradient(145deg, #123333 0%, #0B2424 100%);
    border: 1px solid rgba(58,188,177,0.18);
    border-radius: 28px;
    padding: 36px;
    position: relative;
    overflow: hidden;
  }

  .tara-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--mint), var(--saffron));
  }

  .tara-card-top {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 34px;
  }

  .tara-orb {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(58,188,177,0.12);
    border: 1px solid rgba(58,188,177,0.3);
    color: var(--mint);
    font-size: 1.2rem;
  }

  .tara-name {
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem;
    font-weight: 700;
  }

  .tara-label {
    margin-top: 2px;
    color: rgba(253,248,240,0.45);
    font-size: 0.7rem;
  }

  .tara-prompt {
    margin-bottom: 14px;
    color: rgba(253,248,240,0.55);
    font-size: 0.75rem;
    font-family: 'Space Mono', monospace;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .tara-options {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .tara-option {
    padding: 14px 16px;
    border-radius: 12px;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.06);
    color: rgba(253,248,240,0.72);
    font-size: 0.82rem;
  }

  .tara-note {
    margin-top: 24px;
    color: rgba(253,248,240,0.35);
    font-size: 0.68rem;
    text-align: right;
  }

  /* ── CTA ── */
  .cta-section {
    text-align: center; padding: 120px 48px;
    background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,107,44,0.07) 0%, transparent 60%);
    position: relative;
  }
  .cta-section .section-title { font-size: clamp(2.5rem, 4vw, 4rem); margin-bottom: 24px; }
  .cta-section .section-sub   { margin: 0 auto 48px; text-align: center; }
  .cta-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
  .btn-large { padding: 18px 48px; font-size: 1.05rem; font-weight: 700; }

  /* ── FOOTER ── */
  footer {
    padding: 48px; border-top: 1px solid rgba(255,255,255,0.06);
    display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;
    font-size: 0.82rem; color: rgba(253,248,240,0.35);
  }
  footer .logo { font-size: 1.2rem; opacity: 0.6; }
  .footer-links { display: flex; gap: 24px; }
  .footer-links a { color: rgba(253,248,240,0.35); text-decoration: none; transition: color 0.2s; }
  .footer-links a:hover { color: var(--saffron); }

  /* ── MISC ── */
  .divider { width: 60px; height: 3px; background: var(--saffron); margin: 20px 0 0; border-radius: 2px; }

  /* ── RESPONSIVE ── */

  /* ── EARLY ACCESS ── */
  .early-access-section {
    background: #0B2424;
    position: relative;
    overflow: hidden;
  }
  .early-access-flow {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 72px;
    align-items: center;
  }
  .early-access-copy { max-width: 560px; }
  .early-access-copy .section-sub { max-width: 510px; }
  .early-access-points { margin-top: 38px; display: grid; gap: 16px; }
  .early-access-points div {
    display: flex;
    align-items: center;
    gap: 14px;
    color: rgba(253,248,240,.68);
    font-size: .86rem;
  }
  .early-access-points span {
    width: 30px; height: 30px; border-radius: 50%;
    display: inline-flex; align-items: center; justify-content: center;
    border: 1px solid rgba(232,168,62,.35);
    color: var(--gold); font: 700 .62rem 'Space Mono', monospace;
    flex: 0 0 auto;
  }
  .early-access-panel {
    padding: 34px;
    border: 1px solid rgba(58,188,177,.2);
    border-radius: 28px;
    background: rgba(255,255,255,.035);
    box-shadow: 0 24px 80px rgba(0,0,0,.14);
  }
  .early-access-progress { display: grid; gap: 18px; margin-bottom: 34px; }
  .early-access-step-copy { display: flex; align-items: baseline; justify-content: space-between; gap: 20px; }
  .early-access-step-copy span { color: var(--gold); font: 700 .62rem 'Space Mono', monospace; letter-spacing: .12em; }
  .early-access-step-copy strong { color: rgba(253,248,240,.58); font-size: .76rem; font-weight: 600; }
  .early-access-progress-bars { display: grid; grid-template-columns: repeat(2,1fr); gap: 8px; }
  .early-access-progress-bars span { height: 3px; border-radius: 99px; background: rgba(253,248,240,.1); transition: background .2s ease; }
  .early-access-progress-bars span.active { background: var(--saffron); }
  .early-access-step-title { font: 700 1.25rem 'DM Sans', sans-serif; color: var(--warm-sand); margin-bottom: 24px; }
  .early-access-field-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .early-access-form-step label { display: grid; gap: 8px; }
  .early-access-form-step label > span, .early-access-interest-label {
    color: rgba(253,248,240,.66); font-size: .7rem; font-weight: 600; letter-spacing: .02em;
  }
  .early-access-form-step input, .early-access-form-step textarea {
    width: 100%; box-sizing: border-box; border: 1px solid rgba(253,248,240,.12); border-radius: 13px;
    background: rgba(4,24,24,.48); color: var(--warm-sand); padding: 14px 15px;
    font: 400 .88rem 'DM Sans', sans-serif; outline: none; resize: vertical;
    transition: border-color .2s ease, background .2s ease;
  }
  .early-access-form-step input:focus, .early-access-form-step textarea:focus { border-color: rgba(58,188,177,.58); background: rgba(4,24,24,.7); }
  .early-access-form-step input::placeholder, .early-access-form-step textarea::placeholder { color: rgba(253,248,240,.3); }
  .early-access-hint { margin-top: 14px; color: rgba(253,248,240,.35); font-size: .68rem; line-height: 1.5; }
  .early-access-full-field { margin-top: 16px; }
  .early-access-full-field small { color: rgba(253,248,240,.3); font-size: .62rem; font-weight: 400; }
  .early-access-interest-label { margin-top: 22px; margin-bottom: 10px; }
  .early-access-interest-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .early-access-interest-grid button {
    appearance: none; border: 1px solid rgba(253,248,240,.11); border-radius: 12px;
    background: rgba(4,24,24,.32); color: rgba(253,248,240,.62); padding: 12px 13px;
    text-align: left; font: 600 .74rem 'DM Sans', sans-serif; cursor: pointer;
    transition: border-color .2s ease, background .2s ease, color .2s ease;
  }
  .early-access-interest-grid button:hover, .early-access-interest-grid button.selected {
    border-color: rgba(58,188,177,.48); background: rgba(58,188,177,.08); color: var(--warm-sand);
  }
  .early-access-error { margin-top: 16px; color: #ffb7a0; font-size: .72rem; line-height: 1.45; }
  .early-access-form-actions { margin-top: 28px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
  .early-access-next { border: 0; cursor: pointer; text-decoration: none; }
  .early-access-back { border: 0; background: none; color: rgba(253,248,240,.45); cursor: pointer; padding: 12px 0; font: 600 .76rem 'DM Sans', sans-serif; }
  .early-access-success { text-align: center; padding: 18px 18px 6px; }
  .early-access-success-mark {
    width: 56px; height: 56px; margin: 0 auto 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
    background: rgba(58,188,177,.1); border: 1px solid rgba(58,188,177,.3); color: var(--mint); font-size: 1.5rem;
  }
  .early-access-success-kicker { color: var(--gold); font: 700 .6rem 'Space Mono', monospace; letter-spacing: .14em; }
  .early-access-success h3 { margin: 12px 0 10px; color: var(--warm-sand); font: 700 2rem 'Playfair Display', serif; }
  .early-access-success p { max-width: 500px; margin: 0 auto; color: rgba(253,248,240,.6); font-size: .84rem; line-height: 1.7; }
  .early-access-summary { margin: 22px auto 12px; display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; }
  .early-access-summary span { padding: 8px 11px; border: 1px solid rgba(58,188,177,.18); border-radius: 999px; color: rgba(253,248,240,.65); font-size: .68rem; background: rgba(58,188,177,.05); }
  .early-access-demo-note { display: block; color: rgba(253,248,240,.28); font-size: .62rem; line-height: 1.5; margin-top: 18px; }
  @media (max-width: 900px) {
    .tara-grid {
      grid-template-columns: 1fr;
      gap: 48px;
    }
    .early-access-card {
      grid-template-columns: 1fr;
      gap: 36px;
      padding: 32px 24px;
    }

    .early-access-flow { grid-template-columns: 1fr; gap: 42px; }
    .early-access-panel { padding: 26px 22px; }
    .early-access-field-grid, .early-access-interest-grid { grid-template-columns: 1fr; }
    .early-access-step-copy { align-items: flex-start; flex-direction: column; gap: 7px; }
    .wt-nav { padding: 16px 24px; }
    .hero-app-button { flex: 1; min-width: 0; justify-content: center; }
    .wt-nav ul { display: none; }
    .hero { grid-template-columns: 1fr; padding: 100px 24px 60px; }
    .hero-visual { display: none; }
    section { padding: 72px 24px; }
    .features-grid { grid-template-columns: 1fr; }
    .safety-grid, .host-grid { grid-template-columns: 1fr; gap: 40px; }
    .trust-flow-card { height: auto; margin-top: 0; }
    .verify-steps { display: flex; flex-direction: column; gap: 20px; }
    .trust-flow-card { padding: 30px 24px; }
    .how-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
    .how-grid::after { display: none; }
    footer { flex-direction: column; gap: 24px; text-align: center; align-items: center; }
    .footer-brand, .footer-socials, .footer-apps { align-items: center; }
    .footer-links { justify-content: center; flex-wrap: wrap; }
    .footer-app-buttons { justify-content: center; }
    .trips-header { flex-direction: column; align-items: flex-start; gap: 16px; }
  }
`