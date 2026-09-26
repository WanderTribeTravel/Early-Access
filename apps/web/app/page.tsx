// import React from 'react'
// import Link from 'next/link'
// import EarlyAccessFlow from '../components/EarlyAccessFlow'
// const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL
// const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL
// const youtubeUrl = process.env.NEXT_PUBLIC_YOUTUBE_URL
// const whatsappChannelUrl = process.env.NEXT_PUBLIC_WHATSAPP_CHANNEL_URL
// const whatsappBusinessUrl = process.env.NEXT_PUBLIC_WHATSAPP_BUSINESS_URL

// export const metadata = {
//   title: 'WanderTribe — Travel Together, Live Local',
//   description: "A trust-first travel community for finding your travel tribe, organizing group adventures, and experiencing India through meaningful connections.",
// }

// export default async function HomePage(): Promise<React.ReactNode> {
//   return (
//     <>
//       <style>{CSS}</style>

//       {/* NAV */}
//       <div id="top" />
//       <nav className="wt-nav">
//         <div className="logo">Wander<span>Tribe</span></div>
//         <ul>
//           <li><a href="#trips">Explore Trips</a></li>
//           <li><a href="#hosting">Find Hosts</a></li>
//           <li><a href="#features">Community</a></li>
//           <li><a href="#safety">Safety</a></li>
//         </ul>
//         <a href="#early-access" className="nav-cta">Join the Journey</a>
//       </nav>

//       {/* HERO */}
//       <section className="hero">
//         <div className="hero-content">
//           <div className="hero-badge">🌍 India&apos;s Trust-First Travel Community</div>
//           <h1 className="hero-title">
//             Travel <em>together.</em><br />
//             Live <span className="accent-line">local.</span><br />
//             Travel with <em>trust.</em>
//           </h1>
//           <p className="hero-sub">
//             Find your travel tribe, organize group adventures, and experience India through genuine connections and trust-focused travel.
//           </p>
//           <div className="hero-app-label">Get the app</div>
//           <div className="hero-actions app-download-actions">
//             <AppStoreButton platform="ios" />
//             <AppStoreButton platform="android" />
//           </div>
//           <div className="hero-socials" aria-label="Follow WanderTribe">
//             <div className="hero-social-label">FOLLOW THE JOURNEY</div>
//             <div className="hero-social-icons">
//               {instagramUrl ? <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon /></a> : <span className="hero-social-disabled" aria-label="Instagram link not configured"><InstagramIcon /></span>}
//               {facebookUrl ? <a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook"><FacebookIcon /></a> : <span className="hero-social-disabled" aria-label="Facebook link not configured"><FacebookIcon /></span>}
//               {youtubeUrl ? <a href={youtubeUrl} target="_blank" rel="noreferrer" aria-label="YouTube"><YouTubeIcon /></a> : <span className="hero-social-disabled" aria-label="YouTube link coming later"><YouTubeIcon /></span>}
//               {whatsappChannelUrl ? <a href={whatsappChannelUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp Channel"><WhatsAppIcon /></a> : <span className="hero-social-disabled" aria-label="WhatsApp channel coming later"><WhatsAppIcon /></span>}
//               {whatsappBusinessUrl ? <a href={whatsappBusinessUrl} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><WhatsAppBusinessIcon /></a> : <span className="hero-social-disabled" aria-label="WhatsApp chat coming later"><WhatsAppBusinessIcon /></span>}
//             </div>
//           </div>
//         </div>

//         <div className="hero-visual">
//           <div className="map-glow" />
//           <div className="floating-cards">

//             <div className="trip-card tc1">
//               <div className="card-header">
//                 <div className="avatar-placeholder" style={{ background: 'linear-gradient(135deg,#FF6B2C,#E8A83E)' }}>P</div>
//                 <div>
//                   <div className="card-name">Priya S.</div>
//                   <div className="card-role">Trip Organizer</div>
//                 </div>
//               </div>
//               <div className="card-dest">Spiti Valley Trek 🏔️</div>
//               <div className="card-meta">Example dates · Example group</div>
//               <div className="card-tag tag-group">GROUP TRIP</div>
//               <div className="verified-badge">Example trip</div>
//             </div>

//             <div className="trip-card tc2">
//               <div className="card-header">
//                 <div className="avatar-placeholder" style={{ background: 'linear-gradient(135deg,#3ABCB1,#0A3D3D)' }}>A</div>
//                 <div>
//                   <div className="card-name">Arjun M.</div>
//                   <div className="card-role">Local Host · Mumbai</div>
//                 </div>
//               </div>
//               <div className="card-dest">Free Stay in Bandra 🏠</div>
//               <div className="card-meta">Example availability</div>
//               <div className="card-tag tag-host">HOSTING</div>
//               <div className="verified-badge">Example stay</div>
//             </div>

//             <div className="trip-card tc3">
//               <div className="card-header">
//                 <div className="avatar-placeholder" style={{ background: 'linear-gradient(135deg,#D4526A,#7b2d8b)' }}>R</div>
//                 <div>
//                   <div className="card-name">Rhea K.</div>
//                   <div className="card-role">Solo Traveler</div>
//                 </div>
//               </div>
//               <div className="card-dest">Looking for Goa crew 🌊</div>
//               <div className="card-meta">Example dates · Example group</div>
//               <div className="card-tag tag-solo">SOLO → GROUP</div>
//             </div>

//             <div className="trip-card tc4">
//               <div className="card-meta" style={{ marginBottom: '6px' }}>Example trip</div>
//               <div style={{ fontSize: '0.7rem', color: 'rgba(253,248,240,0.6)', lineHeight: 1.5 }}>
//                 Identity checks<br />PLANNED<br />Community trust
//               </div>
//               <div className="card-tag tag-verified" style={{ marginTop: '8px' }}>TRUST FEATURES PLANNED</div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* HOW IT WORKS */}
//       <section className="how-section">
//         <div className="section-label">How it works</div>
//         <h2 className="section-title">Your journey in <em style={{ color: 'var(--saffron)' }}>4 steps</em></h2>
//         <div className="how-grid">
//           <div className="how-step">
//             <div className="step-circle sc1">
//               🪪
//               <div className="step-n">01</div>
//             </div>
//             <h3>Verify Your Identity</h3>
//             <p>Identity verification is part of WanderTribe's planned trust system, designed to help travelers build confidence over time.</p>
//           </div>
//           <div className="how-step">
//             <div className="step-circle sc2">
//               🗺️
//               <div className="step-n">02</div>
//             </div>
//             <h3>Create or Join a Trip</h3>
//             <p>Organize your own group adventure or browse and join trips created by fellow travelers.</p>
//           </div>
//           <div className="how-step">
//             <div className="step-circle sc3">
//               🏠
//               <div className="step-n">03</div>
//             </div>
//             <h3>Find or Be a Host</h3>
//             <p>Offer your home as a free stay or find a local host in your destination for an authentic cultural experience.</p>
//           </div>
//           <div className="how-step">
//             <div className="step-circle sc4">
//               🌏
//               <div className="step-n">04</div>
//             </div>
//             <h3>Explore & Give Back</h3>
//             <p>Travel, experience local life, build friendships, and when others visit your city — host them in return.</p>
//           </div>
//         </div>
//       </section>

//       {/* FEATURES */}
//       <section className="features-section" id="features">
//         <div style={{ maxWidth: '600px' }}>
//           <div className="section-label">Core Features</div>
//           <h2 className="section-title">Everything you need to <em style={{ color: 'var(--mint)' }}>travel smarter</em></h2>
//           <div className="divider" />
//         </div>
//         <div className="features-grid">
//           <div className="feature-card">
//             <div className="feature-icon fi-orange">🧭</div>
//             <h3>Group Trip Organizer</h3>
//             <p>Plan trips with built-in itinerary tools, expense splitting, voting on destinations, and in-app group chat for your travel squad.</p>
//           </div>
//           <div className="feature-card">
//             <div className="feature-icon fi-rose">👤</div>
//             <h3>Solo Traveler Network</h3>
//             <p>Connect with other solo travelers headed to the same destination. Turn solo plans into memorable group adventures instantly.</p>
//           </div>
//           <div className="feature-card">
//             <div className="feature-icon fi-teal">🏡</div>
//             <h3>Stay Exchange (CouchSurf)</h3>
//             <p>Offer your space for free when you&apos;re home. When you travel, get hosted by locals — a real cultural exchange, not just a bed.</p>
//           </div>
//           <div className="feature-card">
//             <div className="feature-icon fi-gold">🎭</div>
//             <h3>Local Culture Guides</h3>
//             <p>Hosts share their city&apos;s hidden gems, local foods, festivals, and off-the-beaten-path experiences that no travel blog knows about.</p>
//           </div>
//           <div className="feature-card">
//             <div className="feature-icon fi-mint">💬</div>
//             <h3>Community & Forums</h3>
//             <p>Ask questions, share stories, get tips from experienced travelers, and build lasting friendships with people who share your spirit.</p>
//           </div>
//           <div className="feature-card">
//             <div className="feature-icon fi-deep">🔐</div>
//             <h3>Trust & Verification</h3>
//             <p>Verification, reviews, trust signals, and host history are being designed to help travelers make more informed connections.</p>
//           </div>
//         </div>
//       </section>

//       {/* EXAMPLE TRIPS */}
//       <section className="trips-section" id="trips">
//         <div className="trips-header">
//           <div>
//             <div className="section-label">Example Trips</div>
//             <h2 className="section-title">Ways to <em style={{ color: 'var(--saffron)' }}>travel together</em></h2>
//           </div>
//           <div className="trips-header-note">Example trips shown below</div>
//         </div>
//         <div className="trips-scroll">

//           <div className="trip-tile">
//             <div className="trip-img ti-rajasthan">
//               <div className="trip-overlay" />
//               <div className="trip-img-label">Rajasthan Royale 🏰</div>
//               <div className="trip-spots">Example</div>
//             </div>
//             <div className="trip-info">
//               <div className="trip-info-row">
//                 <div className="trip-org">
//                   <div className="org-av" style={{ background: 'linear-gradient(135deg,#FF6B2C,#E8A83E)' }}>S</div>
//                   <div><div className="org-name">Example traveler</div><div className="org-badge">Sample</div></div>
//                 </div>
//                 <div className="trip-dates">Dec 20–28</div>
//               </div>
//               <div className="trip-tags">
//                 <span className="t-tag">Cultural</span>
//                 <span className="t-tag">Heritage</span>
//                 <span className="t-tag">Budget</span>
//               </div>
//               <div className="avatars-row">
//                 <div className="tiny-av" style={{ background: '#FF6B2C' }}>S</div>
//                 <div className="tiny-av" style={{ background: '#3ABCB1' }}>A</div>
//                 <div className="tiny-av" style={{ background: '#D4526A' }}>R</div>
//                 <div className="tiny-av" style={{ background: '#E8A83E' }}>M</div>
//                 <span className="av-more">Example group</span>
//               </div>
//             </div>
//           </div>

//           <div className="trip-tile">
//             <div className="trip-img ti-kerala">
//               <div className="trip-overlay" />
//               <div className="trip-img-label">Kerala Backwaters 🌿</div>
//               <div className="trip-spots">Example</div>
//             </div>
//             <div className="trip-info">
//               <div className="trip-info-row">
//                 <div className="trip-org">
//                   <div className="org-av" style={{ background: 'linear-gradient(135deg,#3ABCB1,#0A3D3D)' }}>A</div>
//                   <div><div className="org-name">Example traveler</div><div className="org-badge">Sample</div></div>
//                 </div>
//                 <div className="trip-dates">Jan 5–12</div>
//               </div>
//               <div className="trip-tags">
//                 <span className="t-tag">Nature</span>
//                 <span className="t-tag">Ayurveda</span>
//                 <span className="t-tag">Women-Only</span>
//               </div>
//               <div className="avatars-row">
//                 <div className="tiny-av" style={{ background: '#3ABCB1' }}>A</div>
//                 <div className="tiny-av" style={{ background: '#D4526A' }}>P</div>
//                 <div className="tiny-av" style={{ background: '#E8A83E' }}>L</div>
//                 <span className="av-more">Example group</span>
//               </div>
//             </div>
//           </div>

//           <div className="trip-tile">
//             <div className="trip-img ti-ladakh">
//               <div className="trip-overlay" />
//               <div className="trip-img-label">Ladakh Calling 🏔️</div>
//               <div className="trip-spots">Example</div>
//             </div>
//             <div className="trip-info">
//               <div className="trip-info-row">
//                 <div className="trip-org">
//                   <div className="org-av" style={{ background: 'linear-gradient(135deg,#2c5282,#4a90d9)' }}>V</div>
//                   <div><div className="org-name">Example traveler</div><div className="org-badge">Sample</div></div>
//                 </div>
//                 <div className="trip-dates">Jun 15–25</div>
//               </div>
//               <div className="trip-tags">
//                 <span className="t-tag">Adventure</span>
//                 <span className="t-tag">Biking</span>
//                 <span className="t-tag">High Altitude</span>
//               </div>
//               <div className="avatars-row">
//                 <div className="tiny-av" style={{ background: '#2c5282' }}>V</div>
//                 <div className="tiny-av" style={{ background: '#FF6B2C' }}>K</div>
//                 <span className="av-more">Example group</span>
//               </div>
//             </div>
//           </div>

//           <div className="trip-tile">
//             <div className="trip-img ti-varanasi">
//               <div className="trip-overlay" />
//               <div className="trip-img-label">Varanasi & Beyond 🪔</div>
//               <div className="trip-spots">Example</div>
//             </div>
//             <div className="trip-info">
//               <div className="trip-info-row">
//                 <div className="trip-org">
//                   <div className="org-av" style={{ background: 'linear-gradient(135deg,#7b2d8b,#c0392b)' }}>M</div>
//                   <div><div className="org-name">Example traveler</div><div className="org-badge">Sample</div></div>
//                 </div>
//                 <div className="trip-dates">Nov 15–21</div>
//               </div>
//               <div className="trip-tags">
//                 <span className="t-tag">Spiritual</span>
//                 <span className="t-tag">Photography</span>
//               </div>
//               <div className="avatars-row">
//                 <div className="tiny-av" style={{ background: '#D4526A' }}>M</div>
//                 <div className="tiny-av" style={{ background: '#E8A83E' }}>S</div>
//                 <div className="tiny-av" style={{ background: '#3ABCB1' }}>N</div>
//                 <span className="av-more">Example group</span>
//               </div>
//             </div>
//           </div>

//           <div className="trip-tile">
//             <div className="trip-img ti-goa">
//               <div className="trip-overlay" />
//               <div className="trip-img-label">Goa Vibes 🌊</div>
//               <div className="trip-spots">Example</div>
//             </div>
//             <div className="trip-info">
//               <div className="trip-info-row">
//                 <div className="trip-org">
//                   <div className="org-av" style={{ background: 'linear-gradient(135deg,#0077b6,#00b4d8)' }}>R</div>
//                   <div><div className="org-name">Example traveler</div><div className="org-badge">Sample</div></div>
//                 </div>
//                 <div className="trip-dates">Dec 26–Jan 2</div>
//               </div>
//               <div className="trip-tags">
//                 <span className="t-tag">Beach</span>
//                 <span className="t-tag">New Year</span>
//                 <span className="t-tag">Party</span>
//               </div>
//               <div className="avatars-row">
//                 <div className="tiny-av" style={{ background: '#0077b6' }}>R</div>
//                 <div className="tiny-av" style={{ background: '#FF6B2C' }}>T</div>
//                 <div className="tiny-av" style={{ background: '#D4526A' }}>Z</div>
//                 <span className="av-more">Example group</span>
//               </div>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* SAFETY SECTION */}
//       <section className="safety-section" id="safety">
//         <div className="safety-grid">
//           <div>
//             <div className="section-label">Trust &amp; Safety</div>
//             <h2 className="section-title">Trust-first<br /><em style={{ color: 'var(--gold)' }}>trust layer</em></h2>
//             <p className="section-sub">Designed with trust and safety in mind for travelers who want to make more informed connections.</p>
//             <div className="safety-features" style={{ marginTop: '48px' }}>
//               <div className="safety-item">
//                 <div className="si-icon">🔒</div>
//                 <div className="si-content">
//                   <h4>Identity Verification — Planned</h4>
//                   <p>Verification and identity-data handling, retention, and deletion rules will be published before launch.</p>
//                 </div>
//               </div>
//               <div className="safety-item">
//                 <div className="si-icon">⭐</div>
//                 <div className="si-content">
//                   <h4>WanderTrust Score</h4>
//                   <p>WanderTrust is designed to grow through reviews, real-world experiences, and meaningful trust signals.</p>
//                 </div>
//               </div>
//               <div className="safety-item">
//                 <div className="si-icon">🛡️</div>
//                 <div className="si-content">
//                   <h4>Safety Features — Planned</h4>
//                   <p>Future safety features may include traveler controls, emergency-contact options, and safer community interactions.</p>
//                 </div>
//               </div>
//               <div className="safety-item">
//                 <div className="si-icon">📋</div>
//                 <div className="si-content">
//                   <h4>Additional Host Checks — Planned</h4>
//                   <p>Additional host verification and two-way reviews are planned as part of the trust system.</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="trust-flow-card">
//             <div className="trust-flow-logo">How Trust Builds</div>
//             <div className="verify-steps">
//               <div className="verify-step">
//                 <div className="step-num">01</div>
//                 <div className="step-text">
//                   <h4>Create Your Profile</h4>
//                   <p>Start with your profile and the information you choose to share with the community.</p>
//                 </div>
//               </div>
//               <div className="verify-step">
//                 <div className="step-num">02</div>
//                 <div className="step-text">
//                   <h4>Build Your Trust Signals</h4>
//                   <p>Reviews, real-world experiences, hosting history, and future verification can contribute to meaningful trust signals.</p>
//                 </div>
//               </div>
//               <div className="verify-step">
//                 <div className="step-num">03</div>
//                 <div className="step-text">
//                   <h4>Travel &amp; Connect</h4>
//                   <p>Use available trust signals to make more informed connections with other travelers.</p>
//                 </div>
//               </div>
//               <div className="verify-step">
//                 <div className="step-num">04</div>
//                 <div className="step-text">
//                   <h4>Grow Your WanderTrust</h4>
//                   <p>As you travel, host, and build real experiences, your trust history can grow with the community.</p>
//                 </div>
//               </div>
//             </div>
//             <div className="trust-badges">
//               <div className="trust-badge">🔒 Trust features planned</div>
//               <div className="trust-badge">🇮🇳 Made for India</div>
//               <div className="trust-badge">♀ Safety features planned</div>
//               <div className="trust-badge">Verification planned</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* HOSTING SECTION */}
//       <section className="host-section" id="hosting">
//         <div className="host-grid">
//           <div className="host-profile-demo">
//             <div className="host-header">
//               <div className="host-big-av" style={{ background: 'linear-gradient(135deg,#3ABCB1,#0A3D3D)' }}>A</div>
//               <div className="host-details">
//                 <h3>Arjun Mehta</h3>
//                 <p>📍 Bandra West, Mumbai</p>
//                 <div className="host-v">Example trip Host</div>
//               </div>
//             </div>
//             <div className="host-stats-row">
//               <div className="hs"><div className="hs-n">18</div><div className="hs-l">Guests Hosted</div></div>
//               <div className="hs"><div className="hs-n">7</div><div className="hs-l">Trips Hosted</div></div>
//               <div className="hs"><div className="hs-n">3 yr</div><div className="hs-l">On Platform</div></div>
//             </div>
//             <div className="offering-tags">
//               <span className="o-tag">🛏️ Private Room</span>
//               <span className="o-tag">🍲 Home Cooked Meals</span>
//               <span className="o-tag">🏖️ Beach Guide</span>
//               <span className="o-tag">🚇 Local Transport Tips</span>
//             </div>
//             <div className="host-review">
//               <div className="review-stars">★★★★★</div>
//               <div className="review-text">&quot;Arjun showed us parts of Mumbai we&apos;d never find in any guide. The home-cooked dal was unforgettable. Felt like staying with family.&quot;</div>
//               <div className="review-by">— Example traveler</div>
//             </div>
//           </div>

//           <div>
//             <div className="section-label">Hosting Program · Planned</div>
//             <h2 className="section-title">Open your door,<br />open the <em style={{ color: 'var(--mint)' }}>world</em></h2>
//             <p className="section-sub" style={{ marginBottom: '40px' }}>A future hosting program designed around cultural exchange, community trust, and meaningful stays.</p>
//             <div className="host-benefits">
//               <div className="hb-item">
//                 <div className="hb-icon">🌐</div>
//                 <div className="hb-text">
//                   <h4>Hosting Exchange — Planned</h4>
//                   <p>A future hosting exchange could connect travelers through stays, reciprocity, and community trust signals.</p>
//                 </div>
//               </div>
//               <div className="hb-item">
//                 <div className="hb-icon">🤝</div>
//                 <div className="hb-text">
//                   <h4>Real Cultural Exchange</h4>
//                   <p>Show travelers local markets, hidden gems, festivals, and authentic food experiences — not tourist traps.</p>
//                 </div>
//               </div>
//               <div className="hb-item">
//                 <div className="hb-icon">🔐</div>
//                 <div className="hb-text">
//                   <h4>Trust-focused guest discovery</h4>
//                   <p>As a host, you can review traveler profiles and available trust signals before accepting a request.</p>
//                 </div>
//               </div>
//               <div className="hb-item">
//                 <div className="hb-icon">📣</div>
//                 <div className="hb-text">
//                   <h4>Build Your Host Reputation</h4>
//                   <p>Reviews and meaningful trust signals can help hosts build a reputation over time. Future host features will be introduced as the platform develops.</p>
//                 </div>
//               </div>
//             </div>
//             <a href="#early-access" className="btn-primary" style={{ marginTop: '40px', display: 'inline-block' }}>Join the Journey →</a>
//           </div>
//         </div>
//       </section>

//       {/* TARA — FUTURE INTELLIGENCE */}
//       <section className="tara-section" id="tara">
//         <div className="tara-grid">
//           <div className="tara-copy">
//             <div className="section-label">Future Intelligence</div>
//             <h2 className="section-title">
//               Meet <em style={{ color: 'var(--mint)' }}>Tara</em>
//             </h2>
//             <p className="section-sub">
//               A future intelligence layer designed to help you make sense of your
//               travel journey, discover meaningful possibilities, and make more
//               informed decisions.
//             </p>
//             <div className="tara-status">COMING LATER · CONCEPT</div>
//           </div>

//           <div className="tara-card">
//             <div className="tara-card-top">
//               <div className="tara-orb">✦</div>
//               <div>
//                 <div className="tara-name">Tara</div>
//                 <div className="tara-label">Travel intelligence</div>
//               </div>
//             </div>

//             <div className="tara-prompt">What can Tara help with?</div>

//             <div className="tara-options">
//               <div className="tara-option">🧭 Make sense of my journey</div>
//               <div className="tara-option">🤝 Discover meaningful connections</div>
//               <div className="tara-option">🗺️ Explore possibilities around my trip</div>
//               <div className="tara-option">✦ Make more informed travel decisions</div>
//             </div>

//             <div className="tara-note">
//               Future experience — not available yet
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* EARLY ACCESS */}
//       <section className="early-access-section" id="early-access">
//         <EarlyAccessFlow />
//       </section>

//       {/* CTA */}
//       <section className="cta-section">
//         <div className="section-label" style={{ textAlign: 'center' }}>Ready to begin?</div>
//         <h2 className="section-title">
//           Your next adventure<br />is one <em style={{ color: 'var(--saffron)' }}>tribe</em> away
//         </h2>
//         <p className="section-sub">
//           Be among the first to help build a trust-first travel community across India. Solo traveler, group organizer, or local host — there&apos;s a place in WanderTribe for you.
//         </p>
//         <div className="cta-buttons">
//           <a href="#early-access" className="btn-primary btn-large">Join Early Access →</a>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer>
//         <div className="footer-brand">
//           <div className="logo">Wander<span style={{ color: 'var(--saffron)' }}>Tribe</span></div>
//           <div className="footer-tagline">Trust that grows with every journey.</div>
//         </div>
//         <div className="footer-links">
//           <a href="#trips">Trips</a>
//           <a href="#safety">Trust</a>
//           <a href="#hosting">Hosts</a>
//           <a href="#tara">Tara</a>
//           <a href="#early-access">Join Early Access</a>
//         </div>
//         <div className="footer-socials">
//           <div className="footer-social-label">Follow</div>
//           <div className="footer-social-icons">
//             {instagramUrl ? <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon /></a> : <span className="footer-social-disabled" aria-label="Instagram link not configured"><InstagramIcon /></span>}
//             {facebookUrl ? <a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook"><FacebookIcon /></a> : <span className="footer-social-disabled" aria-label="Facebook link not configured"><FacebookIcon /></span>}
//             {youtubeUrl ? <a href={youtubeUrl} target="_blank" rel="noreferrer" aria-label="YouTube"><YouTubeIcon /></a> : <span className="footer-social-disabled" aria-label="YouTube link coming later"><YouTubeIcon /></span>}
//             {whatsappChannelUrl ? <a href={whatsappChannelUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp Channel"><WhatsAppIcon /></a> : <span className="footer-social-disabled" aria-label="WhatsApp channel coming later"><WhatsAppIcon /></span>}
//             {whatsappBusinessUrl ? <a href={whatsappBusinessUrl} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><WhatsAppBusinessIcon /></a> : <span className="footer-social-disabled" aria-label="WhatsApp chat coming later"><WhatsAppBusinessIcon /></span>}
//           </div>
//         </div>
//         <div className="footer-apps">
//           <div className="footer-social-label">Get the app</div>
//           <div className="footer-app-buttons">
//             <AppStoreButton platform="ios" />
//             <AppStoreButton platform="android" />
//           </div>
//         </div>
//         <div className="footer-copy">Made with ❤️ for Indian travelers</div>
//       </footer>
//     </>
//   )
// }

// function AppStoreButton({ platform }: { platform: 'ios' | 'android' }) {
//   const isAndroid = platform === 'android'
//   return (
//     <Link
//       href={`/coming-soon?platform=${platform}`}
//       className="app-store-button"
//       aria-label={isAndroid ? 'Open Google Play — Coming Soon' : 'Open App Store — Coming Soon'}
//     >
//       {isAndroid ? <GooglePlaySmallIcon /> : <AppleSmallIcon />}
//       <span><small>COMING SOON</small>{isAndroid ? 'Google Play' : 'App Store'}</span>
//     </Link>
//   )
// }

// function InstagramIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" className="icon-fill"/></svg> }
// function FacebookIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v4h4v-4h3.2l.8-4H13V9c0-.7.3-1 1-1Z"/></svg> }
// function YouTubeIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="m10 9 5 3-5 3V9Z" className="icon-cutout"/></svg> }
// function WhatsAppIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a8.5 8.5 0 0 0-7.35 12.77L3.5 20.5l4.85-1.13A8.5 8.5 0 1 0 12 3Zm0 15.4a6.9 6.9 0 0 1-3.52-.96l-.25-.15-2.88.67.68-2.8-.16-.26A6.9 6.9 0 1 1 12 18.4Zm3.82-5.1c-.2-.1-1.18-.58-1.36-.65-.18-.07-.31-.1-.44.1-.13.2-.5.65-.61.78-.11.13-.22.15-.42.05-.2-.1-.83-.31-1.58-.99-.58-.52-.98-1.16-1.09-1.36-.11-.2-.01-.31.08-.41.09-.09.2-.22.3-.33.1-.11.13-.2.2-.33.07-.13.04-.25-.02-.35-.05-.1-.44-1.06-.6-1.45-.16-.38-.32-.33-.44-.34h-.38c-.13 0-.34.05-.52.25-.18.2-.68.67-.68 1.64s.7 1.9.8 2.03c.1.13 1.38 2.1 3.35 2.94.47.2.84.32 1.13.41.47.15.9.13 1.24.08.38-.06 1.18-.48 1.35-.94.17-.46.17-.85.12-.94-.05-.08-.18-.13-.38-.23Z"/></svg> }
// /** Same WhatsApp glyph, drawn inside a rounded chat-bubble badge so it reads as a distinct "direct chat" action next to the plain WhatsApp Channel icon. */
// function WhatsAppBusinessIcon() {
//   return (
//     <svg viewBox="0 0 24 24" aria-hidden="true">
//       <rect x="2" y="2" width="20" height="20" rx="6" className="icon-cutout" />
//       <path d="M12 5.6a6.9 6.9 0 0 0-5.9 10.42L5.4 19.4l3.5-.92A6.9 6.9 0 1 0 12 5.6Zm3.16 9.62c-.16.44-.87.82-1.21.87-.31.05-.7.07-1.13-.07a10.3 10.3 0 0 1-1-.37 8.02 8.02 0 0 1-2.98-2.64c-.28-.38-.58-.83-.6-1.32-.02-.46.13-.87.4-1.14.12-.12.27-.19.42-.19h.3c.1 0 .23-.02.35.27.13.32.44 1.1.48 1.18.04.08.06.18.01.28-.05.1-.08.16-.16.25-.08.09-.17.2-.24.27-.08.08-.16.16-.07.32.1.16.44.72.94 1.16.65.58 1.19.76 1.36.85.16.08.26.07.35-.04.1-.11.42-.49.53-.66.11-.17.21-.14.36-.09.14.06.94.44 1.1.53.16.08.27.13.31.2.04.07.04.4-.12.84Z"/>
//     </svg>
//   )
// }
// function AppleSmallIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08ZM12.03 7.25C11.88 5.02 13.69 3.18 15.77 3c.29 2.58-2.33 4.5-3.74 4.25Z"/></svg> }
// function GooglePlaySmallIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.6 2.4c-.37.39-.6 1-.6 1.77v15.66c0 .77.23 1.38.6 1.77L3.7 21.7 14.42 10.98V10.9L3.7 2.3l-.1.1Z"/><path d="m17.96 14.52-3.54-3.54v-.08l3.54-3.54 4.25 2.42c1.21.69 1.21 1.63 0 2.32l-4.25 2.42Z"/><path d="m3.6 21.6 10.72-10.72 3.64 3.64-11.9 6.76c-.97.55-1.82.59-2.46.32Z"/><path d="m3.6 2.4 10.72 10.72-3.64 3.64L3.6 9.98c-.64-.37-1.05-.88-1.05-1.5 0-.62.41-1.13 1.05-1.5Z"/></svg> }

// const CSS = `
//   @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap');

//   :root {
//     --saffron:   #FF6B2C;
//     --deep-teal: #0A3D3D;
//     --warm-sand: #F5EDD8;
//     --night:     #0C1A1A;
//     --gold:      #E8A83E;
//     --rose:      #D4526A;
//     --mint:      #3ABCB1;
//     --cream:     #FDF8F0;
//     --text-dark: #1A2E2E;
//     --glass:     rgba(255,255,255,0.06);
//   }

//   *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//   html { scroll-behavior: smooth; }

//   body {
//     font-family: 'DM Sans', sans-serif;
//     background: var(--night);
//     color: var(--cream);
//     overflow-x: hidden;
//   }

//   /* ── NAV ── */
//   .wt-nav {
//     position: fixed; top: 0; left: 0; right: 0; z-index: 100;
//     display: flex; align-items: center; justify-content: space-between;
//     padding: 20px 48px;
//     background: linear-gradient(180deg, rgba(12,26,26,0.95) 0%, transparent 100%);
//     backdrop-filter: blur(12px);
//   }
//   .logo {
//     font-family: 'Playfair Display', serif;
//     font-size: 1.6rem; font-weight: 900; letter-spacing: -0.5px;
//     color: var(--cream);
//   }
//   .logo span { color: var(--saffron); }
//   .wt-nav ul { display: flex; gap: 32px; list-style: none; }
//   .wt-nav ul a { color: rgba(253,248,240,0.7); text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: color 0.2s; }
//   .wt-nav ul a:hover { color: var(--saffron); }
//   .nav-cta {
//     background: var(--saffron); color: white; border: none;
//     padding: 10px 24px; border-radius: 100px;
//     font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 0.9rem;
//     cursor: pointer; transition: transform 0.2s, box-shadow 0.2s;
//     text-decoration: none; display: inline-block;
//   }
//   .nav-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255,107,44,0.4); }

//   /* ── HERO ── */
//   .hero {
//     min-height: 100vh;
//     display: grid; grid-template-columns: 1fr 1fr;
//     align-items: center;
//     padding: 120px 48px 80px;
//     position: relative; overflow: hidden;
//   }
//   .hero::before {
//     content: '';
//     position: absolute; inset: 0;
//     z-index: 0;
//     pointer-events: none;
//     background:
//       radial-gradient(ellipse 60% 80% at 70% 50%, rgba(58,188,177,0.08) 0%, transparent 60%),
//       radial-gradient(ellipse 40% 60% at 20% 80%, rgba(255,107,44,0.06) 0%, transparent 50%);
//   }
//   .hero-content, .hero-visual { position: relative; z-index: 1; }

//   .hero-app-label {
//     color: rgba(253,248,240,0.38);
//     font-size: 0.68rem;
//     text-transform: uppercase;
//     letter-spacing: 0.12em;
//     font-family: 'Space Mono', monospace;
//     margin-bottom: 10px;
//   }

//   .hero-badge {
//     display: inline-flex; align-items: center; gap: 8px;
//     background: rgba(255,107,44,0.12); border: 1px solid rgba(255,107,44,0.3);
//     padding: 6px 16px; border-radius: 100px; margin-bottom: 24px;
//     font-size: 0.78rem; font-weight: 600; color: var(--saffron); letter-spacing: 0.08em; text-transform: uppercase;
//   }
//   .hero-badge::before { content: '●'; font-size: 0.5rem; animation: pulse 2s infinite; }
//   @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }

//   .hero-title {
//     font-family: 'Playfair Display', serif;
//     font-size: clamp(3rem, 5vw, 5.2rem);
//     line-height: 1.05; font-weight: 900; letter-spacing: -2px;
//     margin-bottom: 24px;
//   }
//   .hero-title em { color: var(--saffron); font-style: italic; }
//   .hero-title .accent-line { color: var(--mint); font-style: italic; }

//   .hero-sub {
//     font-size: 1.05rem; color: rgba(253,248,240,0.65); line-height: 1.7;
//     max-width: 480px; margin-bottom: 40px; font-weight: 300;
//   }

//   .app-store-button {
//     display: flex; align-items: center; gap: 9px; min-width: 138px;
//     padding: 8px 12px; border: 1px solid rgba(255,255,255,.09);
//     border-radius: 12px; background: rgba(255,255,255,.025);
//     color: var(--cream); text-decoration: none; transition: all .2s;
//   }
//   .app-store-button:hover { border-color: rgba(58,188,177,.35); background: rgba(58,188,177,.05); transform: translateY(-2px); }
//   .app-store-button svg { width: 20px; height: 20px; fill: currentColor; flex-shrink: 0; }
//   .app-store-button span { display: flex; flex-direction: column; font-size: .75rem; font-weight: 600; line-height: 1.1; }
//   .app-store-button small { color: rgba(253,248,240,.35); font-size: .52rem; font-weight: 500; margin-bottom: 3px; }
//   .hero-socials { margin-top: 24px; }
//   .hero-social-label { font-family: 'Space Mono', monospace; font-size: .58rem; letter-spacing: .16em; color: rgba(253,248,240,.35); margin-bottom: 11px; }
//   .hero-social-icons { display: flex; gap: 9px; }
//   .hero-social-icons a, .hero-social-disabled { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,.09); border-radius: 50%; color: rgba(253,248,240,.62); transition: all .2s; }
//   .hero-social-disabled { opacity: .65; }
//   .hero-social-icons a:hover { border-color: rgba(58,188,177,.4); color: var(--mint); transform: translateY(-2px); }
//   .hero-social-icons svg { width: 17px; height: 17px; fill: currentColor; }
//   .hero-social-icons rect, .hero-social-icons circle { fill: none; stroke: currentColor; stroke-width: 1.7; }
//   .hero-social-icons .icon-fill { fill: currentColor; stroke: none; }
//   .hero-social-icons .icon-cutout { fill: var(--night); }

//   .hero-actions { display: flex; gap: 16px; align-items: center; flex-wrap: wrap; }
//   .btn-primary {
//     background: var(--saffron);
//     color: white; border: none; padding: 16px 36px; border-radius: 100px;
//     font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 1rem;
//     cursor: pointer; transition: all 0.3s; text-decoration: none; display: inline-block;
//     box-shadow: 0 4px 24px rgba(255,107,44,0.3);
//   }
//   .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 12px 36px rgba(255,107,44,0.45); }
//   .btn-ghost {
//     background: transparent; color: var(--cream); border: 1.5px solid rgba(253,248,240,0.2);
//     padding: 15px 32px; border-radius: 100px;
//     font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 1rem;
//     cursor: pointer; transition: all 0.3s; text-decoration: none; display: inline-block;
//   }
//   .btn-ghost:hover { border-color: var(--mint); color: var(--mint); }

//   /* ── HERO VISUAL ── */
//   .hero-visual {
//     position: relative; height: 580px;
//     display: flex; align-items: center; justify-content: center;
//   }
//   .map-glow {
//     width: 420px; height: 420px; border-radius: 50%;
//     background: radial-gradient(circle, rgba(58,188,177,0.12) 0%, rgba(10,61,61,0.4) 50%, transparent 70%);
//     position: absolute;
//     border: 1px solid rgba(58,188,177,0.15);
//     animation: breathe 4s ease-in-out infinite;
//   }
//   @keyframes breathe { 0%,100%{transform:scale(1)} 50%{transform:scale(1.04)} }

//   .floating-cards {
//     position: relative; width: 340px; height: 480px;
//   }
//   .trip-card {
//     position: absolute;
//     background: rgba(255,255,255,0.04);
//     backdrop-filter: blur(20px);
//     border: 1px solid rgba(255,255,255,0.1);
//     border-radius: 20px; padding: 20px;
//     animation: float linear infinite;
//   }
//   @keyframes float {
//     0%   { transform: translateY(0px) rotate(var(--rot)); }
//     50%  { transform: translateY(-10px) rotate(var(--rot)); }
//     100% { transform: translateY(0px) rotate(var(--rot)); }
//   }
//   .tc1 { top: 0; left: 0; width: 200px; --rot: -3deg; animation-duration: 5s; }
//   .tc2 { top: 120px; right: 0; width: 180px; --rot: 2deg; animation-duration: 6s; animation-delay: -2s; }
//   .tc3 { bottom: 40px; left: 20px; width: 190px; --rot: -1deg; animation-duration: 7s; animation-delay: -1s; }
//   .tc4 { bottom: 80px; right: 10px; width: 160px; --rot: 3deg; animation-duration: 5.5s; animation-delay: -3s; }

//   .card-header { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
//   .avatar-placeholder {
//     width: 32px; height: 32px; border-radius: 50%;
//     display: flex; align-items: center; justify-content: center;
//     font-size: 0.75rem; font-weight: 700; color: white; flex-shrink: 0;
//   }
//   .card-name { font-size: 0.78rem; font-weight: 600; }
//   .card-role { font-size: 0.65rem; color: rgba(253,248,240,0.5); }
//   .card-dest {
//     font-family: 'Playfair Display', serif;
//     font-size: 1rem; font-weight: 700; margin-bottom: 6px;
//   }
//   .card-meta { font-size: 0.7rem; color: rgba(253,248,240,0.55); }
//   .card-tag {
//     display: inline-block; margin-top: 10px;
//     padding: 3px 10px; border-radius: 100px; font-size: 0.65rem; font-weight: 600; letter-spacing: 0.04em;
//   }
//   .tag-host     { background: rgba(58,188,177,0.2);  color: var(--mint); }
//   .tag-group    { background: rgba(255,107,44,0.2);  color: var(--saffron); }
//   .tag-verified { background: rgba(232,168,62,0.2);  color: var(--gold); }
//   .tag-solo     { background: rgba(212,82,106,0.15); color: var(--rose); }
//   .verified-badge {
//     display: flex; align-items: center; gap: 4px;
//     font-size: 0.65rem; color: var(--gold); margin-top: 6px; font-weight: 600;
//   }

//   /* ── SECTION COMMON ── */
//   section { padding: 100px 48px; scroll-margin-top: 88px; }
//   .section-label {
//     font-size: 0.75rem; font-weight: 700; text-transform: uppercase;
//     letter-spacing: 0.15em; color: var(--saffron); margin-bottom: 16px;
//     font-family: 'Space Mono', monospace;
//   }
//   .section-title {
//     font-family: 'Playfair Display', serif;
//     font-size: clamp(2rem, 3.5vw, 3rem);
//     font-weight: 900; line-height: 1.1; letter-spacing: -1px;
//     margin-bottom: 20px;
//   }
//   .section-sub { color: rgba(253,248,240,0.6); font-size: 1rem; line-height: 1.7; max-width: 520px; font-weight: 300; }

//   /* ── FEATURES ── */
//   .features-section { background: rgba(255,255,255,0.01); }
//   .features-grid {
//     display: grid; grid-template-columns: repeat(3, 1fr);
//     gap: 24px; margin-top: 64px;
//   }
//   .feature-card {
//     background: rgba(255,255,255,0.03);
//     border: 1px solid rgba(255,255,255,0.07);
//     border-radius: 24px; padding: 36px 32px;
//     transition: all 0.4s; position: relative; overflow: hidden;
//   }
//   .feature-card::after {
//     content: ''; position: absolute; inset: 0;
//     background: linear-gradient(135deg, transparent 60%, rgba(255,107,44,0.04) 100%);
//     transition: opacity 0.4s; opacity: 0;
//   }
//   .feature-card:hover { border-color: rgba(255,107,44,0.3); transform: translateY(-6px); }
//   .feature-card:hover::after { opacity: 1; }
//   .feature-icon {
//     width: 52px; height: 52px; border-radius: 14px;
//     display: flex; align-items: center; justify-content: center;
//     font-size: 1.5rem; margin-bottom: 24px;
//   }
//   .fi-orange { background: rgba(255,107,44,0.12); }
//   .fi-teal   { background: rgba(58,188,177,0.12); }
//   .fi-gold   { background: rgba(232,168,62,0.12); }
//   .fi-rose   { background: rgba(212,82,106,0.12); }
//   .fi-mint   { background: rgba(58,188,177,0.12); }
//   .fi-deep   { background: rgba(10,61,61,0.4); border: 1px solid rgba(58,188,177,0.2); }
//   .feature-card h3 {
//     font-family: 'Playfair Display', serif;
//     font-size: 1.25rem; font-weight: 700; margin-bottom: 12px;
//   }
//   .feature-card p { font-size: 0.88rem; color: rgba(253,248,240,0.58); line-height: 1.7; font-weight: 300; }

//   /* ── SAFETY SECTION ── */
//   .safety-section {
//     background: linear-gradient(135deg, #051515 0%, #0A2A2A 50%, #051515 100%);
//     position: relative; overflow: hidden;
//   }
//   .safety-section::before {
//     content: '';
//     position: absolute; top: -200px; right: -200px;
//     width: 600px; height: 600px; border-radius: 50%;
//     background: radial-gradient(circle, rgba(232,168,62,0.06) 0%, transparent 60%);
//   }
//   .safety-grid {
//     display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 64px; align-items: stretch;
//   }
//   .safety-grid > :first-child { display: flex; flex-direction: column; min-width: 0; }
//   .trust-flow-card {
//     background: linear-gradient(135deg, #1A3A3A 0%, #0F2828 100%);
//     border: 1px solid rgba(232,168,62,0.2);
//     border-radius: 28px; padding: 32px;
//     position: relative; overflow: hidden; box-sizing: border-box;
//     align-self: stretch; display: flex; flex-direction: column;
//     margin-top: 264px;
//   }
//   .trust-flow-card::before {
//     content: '';
//     position: absolute; top: 0; left: 0; right: 0; height: 3px;
//     background: linear-gradient(90deg, var(--gold), var(--saffron), var(--mint));
//   }
//   .trust-flow-logo {
//     font-family: 'Space Mono', monospace;
//     font-size: 0.7rem; letter-spacing: 0.2em; color: var(--gold);
//     text-transform: uppercase; margin-bottom: 24px;
//     display: flex; align-items: center; gap: 10px;
//   }
//   .trust-flow-logo::before { content: ''; width: 28px; height: 2px; background: var(--gold); }
//   .verify-steps {
//     display: grid; grid-template-rows: auto; gap: 22px;
//   }
//   .verify-step { display: flex; align-items: flex-start; gap: 16px; }
//   .step-num {
//     width: 32px; height: 32px; border-radius: 50%; flex-shrink: 0;
//     background: rgba(232,168,62,0.12); border: 1px solid rgba(232,168,62,0.3);
//     display: flex; align-items: center; justify-content: center;
//     font-family: 'Space Mono', monospace; font-size: 0.75rem; font-weight: 700; color: var(--gold);
//   }
//   .step-text h4 { font-size: 0.9rem; font-weight: 600; margin-bottom: 4px; }
//   .step-text p  { font-size: 0.8rem; color: rgba(253,248,240,0.5); line-height: 1.5; }
//   .trust-badges { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 26px; }
//   .trust-badge {
//     padding: 6px 14px; border-radius: 8px;
//     border: 1px solid rgba(255,255,255,0.08);
//     font-size: 0.72rem; font-weight: 600; letter-spacing: 0.04em;
//     color: rgba(253,248,240,0.6);
//   }
//   .safety-features { display: flex; flex-direction: column; gap: 28px; flex: 1; }
//   .safety-item {
//     display: flex; gap: 20px; align-items: flex-start;
//     padding: 24px; border-radius: 16px;
//     background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06);
//     transition: border-color 0.3s;
//   }
//   .safety-item:hover { border-color: rgba(232,168,62,0.25); }
//   .si-icon { font-size: 1.5rem; flex-shrink: 0; }
//   .si-content h4 { font-size: 0.95rem; font-weight: 600; margin-bottom: 6px; }
//   .si-content p  { font-size: 0.82rem; color: rgba(253,248,240,0.55); line-height: 1.6; }

//   /* ── HOW IT WORKS ── */
//   .how-section { position: relative; }
//   .how-grid {
//     display: grid; grid-template-columns: repeat(4, 1fr);
//     gap: 0; margin-top: 64px; position: relative;
//   }
//   .how-grid::after {
//     content: '';
//     position: absolute; top: 40px; left: 10%; right: 10%; height: 1px;
//     background: linear-gradient(90deg, transparent, rgba(255,107,44,0.3), rgba(58,188,177,0.3), transparent);
//     z-index: 0;
//   }
//   .how-step { text-align: center; padding: 0 24px; position: relative; z-index: 1; }
//   .step-circle {
//     width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 24px;
//     display: flex; align-items: center; justify-content: center;
//     font-size: 1.6rem; position: relative;
//     border: 2px solid rgba(255,255,255,0.08);
//   }
//   .sc1 { background: rgba(255,107,44,0.1);  border-color: rgba(255,107,44,0.3); }
//   .sc2 { background: rgba(58,188,177,0.1);  border-color: rgba(58,188,177,0.3); }
//   .sc3 { background: rgba(232,168,62,0.1);  border-color: rgba(232,168,62,0.3); }
//   .sc4 { background: rgba(212,82,106,0.1);  border-color: rgba(212,82,106,0.3); }
//   .step-n {
//     position: absolute; top: -6px; right: -6px;
//     width: 22px; height: 22px; border-radius: 50%;
//     background: var(--night); border: 1px solid rgba(255,255,255,0.1);
//     font-family: 'Space Mono', monospace; font-size: 0.6rem; font-weight: 700;
//     display: flex; align-items: center; justify-content: center; color: rgba(253,248,240,0.5);
//   }
//   .how-step h3 { font-family: 'Playfair Display', serif; font-size: 1.05rem; font-weight: 700; margin-bottom: 10px; }
//   .how-step p  { font-size: 0.82rem; color: rgba(253,248,240,0.55); line-height: 1.65; }

//   /* ── TRIPS SHOWCASE ── */
//   .trips-section { overflow: hidden; }
//   .trips-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 48px; }
//   .trips-header-note { color: rgba(253,248,240,.38); font-size: .72rem; font-family: 'Space Mono', monospace; text-transform: uppercase; letter-spacing: .08em; }
//   .trips-scroll { display: flex; gap: 24px; overflow-x: auto; padding-bottom: 16px; scrollbar-width: none; }
//   .trips-scroll::-webkit-scrollbar { display: none; }
//   .trip-tile {
//     flex-shrink: 0; width: 280px; border-radius: 24px;
//     background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
//     overflow: hidden; transition: transform 0.3s, border-color 0.3s;
//     cursor: pointer;
//   }
//   .trip-tile:hover { transform: translateY(-8px); border-color: rgba(255,107,44,0.3); }
//   .trip-img {
//     width: 100%; height: 160px;
//     background-size: cover; background-position: center;
//     position: relative;
//   }
//   .trip-overlay {
//     position: absolute; inset: 0;
//     background: linear-gradient(0deg, rgba(12,26,26,0.8) 0%, transparent 60%);
//   }
//   .trip-img-label {
//     position: absolute; bottom: 12px; left: 16px;
//     font-family: 'Playfair Display', serif; font-size: 1.15rem; font-weight: 700;
//   }
//   .trip-spots {
//     position: absolute; top: 12px; right: 12px;
//     background: rgba(255,107,44,0.9); padding: 4px 10px; border-radius: 100px;
//     font-size: 0.65rem; font-weight: 700; letter-spacing: 0.04em;
//   }
//   .trip-info { padding: 20px; }
//   .trip-info-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
//   .trip-org { display: flex; align-items: center; gap: 8px; }
//   .org-av {
//     width: 28px; height: 28px; border-radius: 50%;
//     display: flex; align-items: center; justify-content: center;
//     font-size: 0.7rem; font-weight: 700; color: white;
//   }
//   .org-name  { font-size: 0.78rem; font-weight: 600; }
//   .org-badge { font-size: 0.6rem;  color: var(--gold); }
//   .trip-dates { font-size: 0.72rem; color: rgba(253,248,240,0.5); }
//   .trip-tags { display: flex; gap: 6px; flex-wrap: wrap; }
//   .t-tag {
//     padding: 3px 9px; border-radius: 6px; font-size: 0.62rem; font-weight: 600;
//     background: rgba(255,255,255,0.06); color: rgba(253,248,240,0.7);
//   }
//   .avatars-row { display: flex; margin-top: 14px; align-items: center; }
//   .tiny-av {
//     width: 26px; height: 26px; border-radius: 50%; border: 2px solid var(--night);
//     display: flex; align-items: center; justify-content: center;
//     font-size: 0.6rem; font-weight: 700; color: white; margin-left: -8px;
//   }
//   .tiny-av:first-child { margin-left: 0; }
//   .av-more { font-size: 0.7rem; color: rgba(253,248,240,0.5); margin-left: 8px; }

//   /* Trip image gradients */
//   .ti-rajasthan { background: linear-gradient(135deg, #8B4513 0%, #D2691E 50%, #FF8C00 100%); }
//   .ti-kerala    { background: linear-gradient(135deg, #1a5c3a 0%, #2d8a5e 50%, #4db877 100%); }
//   .ti-ladakh    { background: linear-gradient(135deg, #2c5282 0%, #4a90d9 50%, #87CEEB 100%); }
//   .ti-varanasi  { background: linear-gradient(135deg, #7b2d8b 0%, #c0392b 50%, #f39c12 100%); }
//   .ti-goa       { background: linear-gradient(135deg, #0077b6 0%, #00b4d8 50%, #90e0ef 100%); }

//   /* ── HOSTING SECTION ── */
//   .host-section { background: linear-gradient(135deg, #070F0F 0%, #0D2020 100%); }
//   .host-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
//   .host-profile-demo {
//     background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
//     border-radius: 28px; padding: 32px; position: relative;
//   }
//   .host-profile-demo::after {
//     content: 'HOST PROFILE';
//     position: absolute; top: -11px; left: 28px;
//     background: var(--deep-teal); padding: 0 12px;
//     font-size: 0.6rem; letter-spacing: 0.15em; color: var(--mint); font-weight: 700;
//     font-family: 'Space Mono', monospace;
//   }
//   .host-header { display: flex; gap: 16px; align-items: center; margin-bottom: 24px; }
//   .host-big-av {
//     width: 64px; height: 64px; border-radius: 50%;
//     display: flex; align-items: center; justify-content: center;
//     font-size: 1.4rem; font-weight: 700; color: white;
//     border: 3px solid rgba(58,188,177,0.4); flex-shrink: 0;
//   }
//   .host-details h3 { font-family: 'Playfair Display', serif; font-size: 1.3rem; font-weight: 700; }
//   .host-details p  { font-size: 0.82rem; color: rgba(253,248,240,0.55); margin-top: 4px; }
//   .host-v { display: flex; align-items: center; gap: 5px; font-size: 0.72rem; color: var(--gold); font-weight: 600; margin-top: 6px; }
//   .host-stats-row {
//     display: flex; gap: 24px; padding: 20px 0;
//     border-top: 1px solid rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.06);
//     margin-bottom: 20px;
//   }
//   .hs { text-align: center; }
//   .hs-n { font-family: 'Space Mono', monospace; font-size: 1.3rem; font-weight: 700; color: var(--mint); }
//   .hs-l { font-size: 0.68rem; color: rgba(253,248,240,0.45); text-transform: uppercase; letter-spacing: 0.05em; margin-top: 2px; }
//   .offering-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px; }
//   .o-tag {
//     padding: 6px 14px; border-radius: 10px; font-size: 0.75rem; font-weight: 500;
//     background: rgba(58,188,177,0.08); border: 1px solid rgba(58,188,177,0.2); color: var(--mint);
//   }
//   .host-review { background: rgba(255,255,255,0.02); border-radius: 14px; padding: 16px; }
//   .review-stars { color: var(--gold); font-size: 0.75rem; margin-bottom: 6px; }
//   .review-text { font-size: 0.8rem; color: rgba(253,248,240,0.6); line-height: 1.6; font-style: italic; }
//   .review-by   { font-size: 0.72rem; color: rgba(253,248,240,0.4); margin-top: 8px; }

//   .host-benefits { display: flex; flex-direction: column; gap: 20px; }
//   .hb-item { display: flex; gap: 16px; align-items: flex-start; }
//   .hb-icon {
//     width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;
//     display: flex; align-items: center; justify-content: center; font-size: 1.1rem;
//     background: rgba(58,188,177,0.08); border: 1px solid rgba(58,188,177,0.15);
//   }
//   .hb-text h4 { font-size: 0.95rem; font-weight: 600; margin-bottom: 4px; }
//   .hb-text p  { font-size: 0.82rem; color: rgba(253,248,240,0.5); line-height: 1.6; }

//   .footer-brand { display: flex; flex-direction: column; gap: 8px; }
//   .footer-tagline { color: rgba(253,248,240,0.38); font-size: 0.72rem; }
//   .footer-socials, .footer-apps { display: flex; flex-direction: column; gap: 10px; }
//   .footer-social-label { color: rgba(253,248,240,0.35); font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.12em; font-family: 'Space Mono', monospace; }
//   .footer-social-icons { display: flex; gap: 10px; }
//   .footer-social-icons a { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,0.09); border-radius: 50%; color: rgba(253,248,240,0.65); transition: all .2s; }
//   .footer-social-icons a:hover { color: var(--mint); border-color: rgba(58,188,177,.4); transform: translateY(-2px); }
//   .footer-social-disabled { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,0.05); border-radius: 50%; color: rgba(253,248,240,0.18); }
//   .footer-social-icons svg { width: 17px; height: 17px; fill: currentColor; }
//   .footer-social-icons rect, .footer-social-icons circle { fill: none; stroke: currentColor; stroke-width: 1.7; }
//   .footer-social-icons .icon-fill { fill: currentColor; stroke: none; }
//   .footer-social-icons .icon-cutout { fill: var(--night); }
//   .footer-app-buttons { display: flex; gap: 8px; flex-wrap: wrap; }

//   /* ── TARA ── */
//   .tara-section {
//     background: #071C1C;
//     position: relative;
//     overflow: hidden;
//   }

//   .tara-grid {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 80px;
//     align-items: center;
//   }

//   .tara-status {
//     display: inline-flex;
//     margin-top: 32px;
//     padding: 7px 12px;
//     border: 1px solid rgba(58,188,177,0.25);
//     border-radius: 999px;
//     color: var(--mint);
//     font-family: 'Space Mono', monospace;
//     font-size: 0.65rem;
//     letter-spacing: 0.12em;
//   }

//   .tara-card {
//     background: linear-gradient(145deg, #123333 0%, #0B2424 100%);
//     border: 1px solid rgba(58,188,177,0.18);
//     border-radius: 28px;
//     padding: 36px;
//     position: relative;
//     overflow: hidden;
//   }

//   .tara-card::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     height: 3px;
//     background: linear-gradient(90deg, var(--mint), var(--saffron));
//   }

//   .tara-card-top {
//     display: flex;
//     align-items: center;
//     gap: 14px;
//     margin-bottom: 34px;
//   }

//   .tara-orb {
//     width: 44px;
//     height: 44px;
//     border-radius: 50%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background: rgba(58,188,177,0.12);
//     border: 1px solid rgba(58,188,177,0.3);
//     color: var(--mint);
//     font-size: 1.2rem;
//   }

//   .tara-name {
//     font-family: 'Playfair Display', serif;
//     font-size: 1.2rem;
//     font-weight: 700;
//   }

//   .tara-label {
//     margin-top: 2px;
//     color: rgba(253,248,240,0.45);
//     font-size: 0.7rem;
//   }

//   .tara-prompt {
//     margin-bottom: 14px;
//     color: rgba(253,248,240,0.55);
//     font-size: 0.75rem;
//     font-family: 'Space Mono', monospace;
//     text-transform: uppercase;
//     letter-spacing: 0.08em;
//   }

//   .tara-options {
//     display: flex;
//     flex-direction: column;
//     gap: 10px;
//   }

//   .tara-option {
//     padding: 14px 16px;
//     border-radius: 12px;
//     background: rgba(255,255,255,0.03);
//     border: 1px solid rgba(255,255,255,0.06);
//     color: rgba(253,248,240,0.72);
//     font-size: 0.82rem;
//   }

//   .tara-note {
//     margin-top: 24px;
//     color: rgba(253,248,240,0.35);
//     font-size: 0.68rem;
//     text-align: right;
//   }

//   /* ── CTA ── */
//   .cta-section {
//     text-align: center; padding: 120px 48px;
//     background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,107,44,0.07) 0%, transparent 60%);
//     position: relative;
//   }
//   .cta-section .section-title { font-size: clamp(2.5rem, 4vw, 4rem); margin-bottom: 24px; }
//   .cta-section .section-sub   { margin: 0 auto 48px; text-align: center; }
//   .cta-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
//   .btn-large { padding: 18px 48px; font-size: 1.05rem; font-weight: 700; }

//   /* ── FOOTER ── */
//   footer {
//     padding: 48px; border-top: 1px solid rgba(255,255,255,0.06);
//     display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;
//     font-size: 0.82rem; color: rgba(253,248,240,0.35);
//   }
//   footer .logo { font-size: 1.2rem; opacity: 0.6; }
//   .footer-links { display: flex; gap: 24px; }
//   .footer-links a { color: rgba(253,248,240,0.35); text-decoration: none; transition: color 0.2s; }
//   .footer-links a:hover { color: var(--saffron); }

//   /* ── MISC ── */
//   .divider { width: 60px; height: 3px; background: var(--saffron); margin: 20px 0 0; border-radius: 2px; }

//   /* ── RESPONSIVE ── */

//   /* ── EARLY ACCESS ── */
//   .early-access-section {
//     background: #0B2424;
//     position: relative;
//     overflow: hidden;
//   }
//   .early-access-flow {
//     display: grid;
//     grid-template-columns: 0.9fr 1.1fr;
//     gap: 72px;
//     align-items: center;
//   }
//   .early-access-copy { max-width: 560px; }
//   .early-access-copy .section-sub { max-width: 510px; }
//   .early-access-points { margin-top: 38px; display: grid; gap: 16px; }
//   .early-access-points div {
//     display: flex;
//     align-items: center;
//     gap: 14px;
//     color: rgba(253,248,240,.68);
//     font-size: .86rem;
//   }
//   .early-access-points span {
//     width: 30px; height: 30px; border-radius: 50%;
//     display: inline-flex; align-items: center; justify-content: center;
//     border: 1px solid rgba(232,168,62,.35);
//     color: var(--gold); font: 700 .62rem 'Space Mono', monospace;
//     flex: 0 0 auto;
//   }
//   .early-access-panel {
//     padding: 34px;
//     border: 1px solid rgba(58,188,177,.2);
//     border-radius: 28px;
//     background: rgba(255,255,255,.035);
//     box-shadow: 0 24px 80px rgba(0,0,0,.14);
//   }
//   .early-access-progress { display: grid; gap: 18px; margin-bottom: 34px; }
//   .early-access-step-copy { display: flex; align-items: baseline; justify-content: space-between; gap: 20px; }
//   .early-access-step-copy span { color: var(--gold); font: 700 .62rem 'Space Mono', monospace; letter-spacing: .12em; }
//   .early-access-step-copy strong { color: rgba(253,248,240,.58); font-size: .76rem; font-weight: 600; }
//   .early-access-progress-bars { display: grid; grid-template-columns: repeat(2,1fr); gap: 8px; }
//   .early-access-progress-bars span { height: 3px; border-radius: 99px; background: rgba(253,248,240,.1); transition: background .2s ease; }
//   .early-access-progress-bars span.active { background: var(--saffron); }
//   .early-access-step-title { font: 700 1.25rem 'DM Sans', sans-serif; color: var(--warm-sand); margin-bottom: 24px; }
//   .early-access-field-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
//   .early-access-form-step label { display: grid; gap: 8px; }
//   .early-access-form-step label > span, .early-access-interest-label {
//     color: rgba(253,248,240,.66); font-size: .7rem; font-weight: 600; letter-spacing: .02em;
//   }
//   .early-access-form-step input, .early-access-form-step textarea {
//     width: 100%; box-sizing: border-box; border: 1px solid rgba(253,248,240,.12); border-radius: 13px;
//     background: rgba(4,24,24,.48); color: var(--warm-sand); padding: 14px 15px;
//     font: 400 .88rem 'DM Sans', sans-serif; outline: none; resize: vertical;
//     transition: border-color .2s ease, background .2s ease;
//   }
//   .early-access-form-step input:focus, .early-access-form-step textarea:focus { border-color: rgba(58,188,177,.58); background: rgba(4,24,24,.7); }
//   .early-access-form-step input::placeholder, .early-access-form-step textarea::placeholder { color: rgba(253,248,240,.3); }
//   .early-access-hint { margin-top: 14px; color: rgba(253,248,240,.35); font-size: .68rem; line-height: 1.5; }
//   .early-access-full-field { margin-top: 16px; }
//   .early-access-full-field small { color: rgba(253,248,240,.3); font-size: .62rem; font-weight: 400; }
//   .early-access-interest-label { margin-top: 22px; margin-bottom: 10px; }
//   .early-access-interest-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
//   .early-access-interest-grid button {
//     appearance: none; border: 1px solid rgba(253,248,240,.11); border-radius: 12px;
//     background: rgba(4,24,24,.32); color: rgba(253,248,240,.62); padding: 12px 13px;
//     text-align: left; font: 600 .74rem 'DM Sans', sans-serif; cursor: pointer;
//     transition: border-color .2s ease, background .2s ease, color .2s ease;
//   }
//   .early-access-interest-grid button:hover, .early-access-interest-grid button.selected {
//     border-color: rgba(58,188,177,.48); background: rgba(58,188,177,.08); color: var(--warm-sand);
//   }
//   .early-access-error { margin-top: 16px; color: #ffb7a0; font-size: .72rem; line-height: 1.45; }
//   .early-access-form-actions { margin-top: 28px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
//   .early-access-next { border: 0; cursor: pointer; text-decoration: none; }
//   .early-access-back { border: 0; background: none; color: rgba(253,248,240,.45); cursor: pointer; padding: 12px 0; font: 600 .76rem 'DM Sans', sans-serif; }
//   .early-access-success { text-align: center; padding: 18px 18px 6px; }
//   .early-access-success-mark {
//     width: 56px; height: 56px; margin: 0 auto 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
//     background: rgba(58,188,177,.1); border: 1px solid rgba(58,188,177,.3); color: var(--mint); font-size: 1.5rem;
//   }
//   .early-access-success-kicker { color: var(--gold); font: 700 .6rem 'Space Mono', monospace; letter-spacing: .14em; }
//   .early-access-success h3 { margin: 12px 0 10px; color: var(--warm-sand); font: 700 2rem 'Playfair Display', serif; }
//   .early-access-success p { max-width: 500px; margin: 0 auto; color: rgba(253,248,240,.6); font-size: .84rem; line-height: 1.7; }
//   .early-access-summary { margin: 22px auto 12px; display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; }
//   .early-access-summary span { padding: 8px 11px; border: 1px solid rgba(58,188,177,.18); border-radius: 999px; color: rgba(253,248,240,.65); font-size: .68rem; background: rgba(58,188,177,.05); }
//   .early-access-demo-note { display: block; color: rgba(253,248,240,.28); font-size: .62rem; line-height: 1.5; margin-top: 18px; }
//   @media (max-width: 900px) {
//     .tara-grid {
//       grid-template-columns: 1fr;
//       gap: 48px;
//     }
//     .early-access-card {
//       grid-template-columns: 1fr;
//       gap: 36px;
//       padding: 32px 24px;
//     }

//     .early-access-flow { grid-template-columns: 1fr; gap: 42px; }
//     .early-access-panel { padding: 26px 22px; }
//     .early-access-field-grid, .early-access-interest-grid { grid-template-columns: 1fr; }
//     .early-access-step-copy { align-items: flex-start; flex-direction: column; gap: 7px; }
//     .wt-nav { padding: 16px 24px; }
//     .hero-app-button { flex: 1; min-width: 0; justify-content: center; }
//     .wt-nav ul { display: none; }
//     .hero { grid-template-columns: 1fr; padding: 100px 24px 60px; }
//     .hero-visual { display: none; }
//     section { padding: 72px 24px; }
//     .features-grid { grid-template-columns: 1fr; }
//     .safety-grid, .host-grid { grid-template-columns: 1fr; gap: 40px; }
//     .trust-flow-card { height: auto; margin-top: 0; }
//     .verify-steps { display: flex; flex-direction: column; gap: 20px; }
//     .trust-flow-card { padding: 30px 24px; }
//     .how-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
//     .how-grid::after { display: none; }
//     footer { flex-direction: column; gap: 24px; text-align: center; align-items: center; }
//     .footer-brand, .footer-socials, .footer-apps { align-items: center; }
//     .footer-links { justify-content: center; flex-wrap: wrap; }
//     .footer-app-buttons { justify-content: center; }
//     .trips-header { flex-direction: column; align-items: flex-start; gap: 16px; }
//   }
// `


// import React from 'react'
// import Link from 'next/link'
// import EarlyAccessFlow from '../components/EarlyAccessFlow'
// const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL
// const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL
// const youtubeUrl = process.env.NEXT_PUBLIC_YOUTUBE_URL
// const whatsappChannelUrl = process.env.NEXT_PUBLIC_WHATSAPP_CHANNEL_URL
// const whatsappBusinessUrl = process.env.NEXT_PUBLIC_WHATSAPP_BUSINESS_URL

// export const metadata = {
//   title: 'WanderTribe — Travel Together, Live Local',
//   description: "A trust-first travel community for finding your travel tribe, organizing group adventures, and experiencing India through meaningful connections.",
// }

// export default async function HomePage(): Promise<React.ReactNode> {
//   return (
//     <>
//       <style>{CSS}</style>

//       {/* NAV */}
//       <div id="top" />
//       <nav className="wt-nav">
//         <div className="logo">Wander<span>Tribe</span></div>
//         <ul>
//           <li><a href="#trips">Explore Trips</a></li>
//           <li><a href="#live-trip">Live Trip</a></li>
//           <li><a href="#hosting">Find Hosts</a></li>
//           <li><a href="#features">Community</a></li>
//           <li><a href="#safety">Safety</a></li>
//         </ul>
//         <a href="#early-access" className="nav-cta">Join the Journey</a>
//       </nav>

//       {/* HERO */}
//       <section className="hero">
//         <div className="hero-content">
//           <div className="hero-badge">🌍 India&apos;s Trust-First Travel Community</div>
//           <h1 className="hero-title">
//             Travel <em>together.</em><br />
//             Live <span className="accent-line">local.</span><br />
//             Travel with <em>trust.</em>
//           </h1>
//           <p className="hero-sub">
//             Find your travel tribe, organize group adventures, and experience India through genuine connections and trust-focused travel.
//           </p>
//           <div className="hero-app-label">Get the app</div>
//           <div className="hero-actions app-download-actions">
//             <AppStoreButton platform="ios" />
//             <AppStoreButton platform="android" />
//           </div>
//           <div className="hero-socials" aria-label="Follow WanderTribe">
//             <div className="hero-social-label">FOLLOW THE JOURNEY</div>
//             <div className="hero-social-icons">
//               {instagramUrl ? <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon /></a> : <span className="hero-social-disabled" aria-label="Instagram link not configured"><InstagramIcon /></span>}
//               {facebookUrl ? <a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook"><FacebookIcon /></a> : <span className="hero-social-disabled" aria-label="Facebook link not configured"><FacebookIcon /></span>}
//               {youtubeUrl ? <a href={youtubeUrl} target="_blank" rel="noreferrer" aria-label="YouTube"><YouTubeIcon /></a> : <span className="hero-social-disabled" aria-label="YouTube link coming later"><YouTubeIcon /></span>}
//               {whatsappChannelUrl ? <a href={whatsappChannelUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp Channel"><WhatsAppIcon /></a> : <span className="hero-social-disabled" aria-label="WhatsApp channel coming later"><WhatsAppIcon /></span>}
//               {whatsappBusinessUrl ? <a href={whatsappBusinessUrl} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><WhatsAppBusinessIcon /></a> : <span className="hero-social-disabled" aria-label="WhatsApp chat coming later"><WhatsAppBusinessIcon /></span>}
//             </div>
//           </div>
//         </div>

//         <div className="hero-visual">
//           <div className="map-glow" />
//           <div className="floating-cards">

//             <div className="trip-card tc1">
//               <div className="card-header">
//                 <div className="avatar-placeholder" style={{ background: 'linear-gradient(135deg,#FF6B2C,#E8A83E)' }}>P</div>
//                 <div>
//                   <div className="card-name">Priya S.</div>
//                   <div className="card-role">Trip Organizer</div>
//                 </div>
//               </div>
//               <div className="card-dest">Spiti Valley Trek 🏔️</div>
//               <div className="card-meta">Example dates · Example group</div>
//               <div className="card-tag tag-group">GROUP TRIP</div>
//               <div className="verified-badge">Example trip</div>
//             </div>

//             <div className="trip-card tc2">
//               <div className="card-header">
//                 <div className="avatar-placeholder" style={{ background: 'linear-gradient(135deg,#3ABCB1,#0A3D3D)' }}>A</div>
//                 <div>
//                   <div className="card-name">Arjun M.</div>
//                   <div className="card-role">Local Host · Mumbai</div>
//                 </div>
//               </div>
//               <div className="card-dest">Free Stay in Bandra 🏠</div>
//               <div className="card-meta">Example availability</div>
//               <div className="card-tag tag-host">HOSTING</div>
//               <div className="verified-badge">Example stay</div>
//             </div>

//             <div className="trip-card tc3">
//               <div className="card-header">
//                 <div className="avatar-placeholder" style={{ background: 'linear-gradient(135deg,#D4526A,#7b2d8b)' }}>R</div>
//                 <div>
//                   <div className="card-name">Rhea K.</div>
//                   <div className="card-role">Solo Traveler</div>
//                 </div>
//               </div>
//               <div className="card-dest">Looking for Goa crew 🌊</div>
//               <div className="card-meta">Example dates · Example group</div>
//               <div className="card-tag tag-solo">SOLO → GROUP</div>
//             </div>

//             <div className="trip-card tc4">
//               <div className="card-meta" style={{ marginBottom: '6px' }}>Example trip</div>
//               <div style={{ fontSize: '0.7rem', color: 'rgba(253,248,240,0.6)', lineHeight: 1.5 }}>
//                 Identity checks<br />PLANNED<br />Community trust
//               </div>
//               <div className="card-tag tag-verified" style={{ marginTop: '8px' }}>TRUST FEATURES PLANNED</div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* LIVE TRIP */}
//       <section className="live-trip-section" id="live-trip" aria-labelledby="live-trip-title">
//         <div className="live-trip-wrap">
//           <div className="live-trip-heading">
//             <div>
//               <div className="live-trip-kicker"><span className="live-trip-dot" /> LIVE TRIP · OCTOBER 22–26, 2026</div>
//               <h2 id="live-trip-title">Gokarna <em>&amp;</em> Dandeli</h2>
//               <p className="live-trip-route">Hyderabad <span>→</span> Gokarna <span>→</span> Dandeli <span>→</span> Hyderabad</p>
//               <p className="live-trip-tagline">Come as a stranger. Leave as a family.</p>
//             </div>
//             <div className="live-trip-price-card">
//               <span>INTRODUCTORY PRICE</span>
//               <strong>₹7,999</strong>
//               <small>per person · 3 sightseeing days / 2 nights in Gokarna</small>
//               <a href="https://wa.me/919949071607?text=Hi%20WanderTribe%2C%20I%27m%20interested%20in%20the%20Gokarna%20%26%20Dandeli%20trip%20(Oct%2022%E2%80%9326%2C%202026)." target="_blank" rel="noreferrer" className="live-trip-book">Book / Enquire on WhatsApp ↗</a>
//             </div>
//           </div>

//           <div className="live-trip-facts" aria-label="Trip details">
//             <div><span>📅</span><strong>Oct 22–26, 2026</strong><small>Depart Thursday evening</small></div>
//             <div><span>📍</span><strong>Hyderabad departure</strong><small>Hyderabad to Hyderabad</small></div>
//             <div><span>🚐</span><strong>AC Tempo Traveller</strong><small>Group transport</small></div>
//             <div><span>🏡</span><strong>2 nights in Gokarna</strong><small>Shared accommodation</small></div>
//           </div>

//           <div className="live-trip-itinerary">
//             <div className="live-trip-section-title"><span>THE PLAN</span><h3>Five days, one shared adventure</h3></div>
//             <div className="live-trip-days">
//               <article className="live-trip-day">
//                 <div className="live-trip-day-date"><b>DAY 0</b><span>THU · OCT 22</span></div>
//                 <div><h4>Hyderabad → Gokarna</h4><p>Meet your fellow travelers and set off from Hyderabad in the evening for the overnight journey to Gokarna.</p></div>
//               </article>
//               <article className="live-trip-day">
//                 <div className="live-trip-day-date"><b>DAY 1</b><span>FRI · OCT 23</span></div>
//                 <div><h4>Gokarna · Five-beach trek</h4><p>Arrive, freshen up and have breakfast. Trek the coastal route from Belekan → Paradise → Half Moon → Om → Kudle, with secluded beaches and sea views. Visit Jatayu Teertha for sunset if time permits. Dinner, group games and music.</p><small>🏡 Night 1 in Gokarna</small></div>
//               </article>
//               <article className="live-trip-day">
//                 <div className="live-trip-day-date"><b>DAY 2</b><span>SAT · OCT 24</span></div>
//                 <div><h4>Honnavar → Murudeshwar → Yana Caves</h4><p>After an early breakfast, drive to Honnavar for a short stop near the Sharavathi backwaters. Visit Murudeshwar Temple and the giant Shiva statue, have lunch en route, then explore Yana Caves and forest trails. Return to Gokarna for dinner and group activities.</p><small>🏡 Night 2 in Gokarna</small><p className="live-trip-note">A full sightseeing day; stops and timings depend on traffic, weather and access to Yana Caves.</p></div>
//               </article>
//               <article className="live-trip-day">
//                 <div className="live-trip-day-date"><b>DAY 3</b><span>SUN · OCT 25</span></div>
//                 <div><h4>Gokarna → Dandeli</h4><p>Visit Shri Mahabaleshwara Temple early; explore Gogarbha Cave subject to accessibility and time. After breakfast and checkout, travel to Dandeli and enjoy its natural surroundings. Optional rafting, kayaking and coracle rides may be arranged, subject to availability and river conditions. Dinner, then begin the overnight return journey.</p><small>💦 Water activities are optional and cost extra.</small></div>
//               </article>
//               <article className="live-trip-day">
//                 <div className="live-trip-day-date"><b>DAY 4</b><span>MON · OCT 26</span></div>
//                 <div><h4>Return to Hyderabad</h4><p>Target arrival in Hyderabad in the morning, depending on the final transport schedule.</p></div>
//               </article>
//             </div>
//           </div>

//           <div className="live-trip-inclusions-grid">
//             <div className="live-trip-list-card">
//               <h3>✅ Included in your trip</h3>
//               <ul>
//                 <li>AC Tempo Traveller from Hyderabad to Hyderabad</li>
//                 <li>2 nights’ shared accommodation in Gokarna</li>
//                 <li>3 breakfasts and 2 dinners</li>
//                 <li>Trip coordinator throughout the journey</li>
//                 <li>Driver allowances, tolls and parking</li>
//                 <li>Group games, activities and listed sightseeing</li>
//               </ul>
//             </div>
//             <div className="live-trip-list-card live-trip-exclusions">
//               <h3>ℹ️ Not included</h3>
//               <ul>
//                 <li>Lunches and meals not listed above</li>
//                 <li>Optional Dandeli water activities</li>
//                 <li>Entry tickets and activity charges, where applicable</li>
//                 <li>Personal expenses and shopping</li>
//                 <li>Anything not specifically listed as included</li>
//               </ul>
//             </div>
//           </div>

//           <div className="live-trip-bottom-cta">
//             <div><strong>Ready to find your tribe?</strong><span>Questions or bookings? Call / WhatsApp +91 99490 71607</span></div>
//             <a href="https://wa.me/919949071607?text=Hi%20WanderTribe%2C%20I%27d%20like%20to%20book%20or%20ask%20about%20the%20Gokarna%20%26%20Dandeli%20trip." target="_blank" rel="noreferrer">Message WanderTribe ↗</a>
//           </div>
//           <p className="live-trip-social">More about us: <a href="https://wandertribe.co" target="_blank" rel="noreferrer">wandertribe.co</a> · <a href="https://www.instagram.com/wandertribee/" target="_blank" rel="noreferrer">@wandertribee on Instagram</a></p>
//         </div>
//       </section>

//       {/* HOW IT WORKS */}
//       <section className="how-section">
//         <div className="section-label">How it works</div>
//         <h2 className="section-title">Your journey in <em style={{ color: 'var(--saffron)' }}>4 steps</em></h2>
//         <div className="how-grid">
//           <div className="how-step">
//             <div className="step-circle sc1">
//               🪪
//               <div className="step-n">01</div>
//             </div>
//             <h3>Verify Your Identity</h3>
//             <p>Identity verification is part of WanderTribe's planned trust system, designed to help travelers build confidence over time.</p>
//           </div>
//           <div className="how-step">
//             <div className="step-circle sc2">
//               🗺️
//               <div className="step-n">02</div>
//             </div>
//             <h3>Create or Join a Trip</h3>
//             <p>Organize your own group adventure or browse and join trips created by fellow travelers.</p>
//           </div>
//           <div className="how-step">
//             <div className="step-circle sc3">
//               🏠
//               <div className="step-n">03</div>
//             </div>
//             <h3>Find or Be a Host</h3>
//             <p>Offer your home as a free stay or find a local host in your destination for an authentic cultural experience.</p>
//           </div>
//           <div className="how-step">
//             <div className="step-circle sc4">
//               🌏
//               <div className="step-n">04</div>
//             </div>
//             <h3>Explore & Give Back</h3>
//             <p>Travel, experience local life, build friendships, and when others visit your city — host them in return.</p>
//           </div>
//         </div>
//       </section>

//       {/* FEATURES */}
//       <section className="features-section" id="features">
//         <div style={{ maxWidth: '600px' }}>
//           <div className="section-label">Core Features</div>
//           <h2 className="section-title">Everything you need to <em style={{ color: 'var(--mint)' }}>travel smarter</em></h2>
//           <div className="divider" />
//         </div>
//         <div className="features-grid">
//           <div className="feature-card">
//             <div className="feature-icon fi-orange">🧭</div>
//             <h3>Group Trip Organizer</h3>
//             <p>Plan trips with built-in itinerary tools, expense splitting, voting on destinations, and in-app group chat for your travel squad.</p>
//           </div>
//           <div className="feature-card">
//             <div className="feature-icon fi-rose">👤</div>
//             <h3>Solo Traveler Network</h3>
//             <p>Connect with other solo travelers headed to the same destination. Turn solo plans into memorable group adventures instantly.</p>
//           </div>
//           <div className="feature-card">
//             <div className="feature-icon fi-teal">🏡</div>
//             <h3>Stay Exchange (CouchSurf)</h3>
//             <p>Offer your space for free when you&apos;re home. When you travel, get hosted by locals — a real cultural exchange, not just a bed.</p>
//           </div>
//           <div className="feature-card">
//             <div className="feature-icon fi-gold">🎭</div>
//             <h3>Local Culture Guides</h3>
//             <p>Hosts share their city&apos;s hidden gems, local foods, festivals, and off-the-beaten-path experiences that no travel blog knows about.</p>
//           </div>
//           <div className="feature-card">
//             <div className="feature-icon fi-mint">💬</div>
//             <h3>Community & Forums</h3>
//             <p>Ask questions, share stories, get tips from experienced travelers, and build lasting friendships with people who share your spirit.</p>
//           </div>
//           <div className="feature-card">
//             <div className="feature-icon fi-deep">🔐</div>
//             <h3>Trust & Verification</h3>
//             <p>Verification, reviews, trust signals, and host history are being designed to help travelers make more informed connections.</p>
//           </div>
//         </div>
//       </section>

//       {/* EXAMPLE TRIPS */}
//       <section className="trips-section" id="trips">
//         <div className="trips-header">
//           <div>
//             <div className="section-label">Example Trips</div>
//             <h2 className="section-title">Ways to <em style={{ color: 'var(--saffron)' }}>travel together</em></h2>
//           </div>
//           <div className="trips-header-note">Example trips shown below</div>
//         </div>
//         <div className="trips-scroll">

//           <div className="trip-tile">
//             <div className="trip-img ti-rajasthan">
//               <div className="trip-overlay" />
//               <div className="trip-img-label">Rajasthan Royale 🏰</div>
//               <div className="trip-spots">Example</div>
//             </div>
//             <div className="trip-info">
//               <div className="trip-info-row">
//                 <div className="trip-org">
//                   <div className="org-av" style={{ background: 'linear-gradient(135deg,#FF6B2C,#E8A83E)' }}>S</div>
//                   <div><div className="org-name">Example traveler</div><div className="org-badge">Sample</div></div>
//                 </div>
//                 <div className="trip-dates">Dec 20–28</div>
//               </div>
//               <div className="trip-tags">
//                 <span className="t-tag">Cultural</span>
//                 <span className="t-tag">Heritage</span>
//                 <span className="t-tag">Budget</span>
//               </div>
//               <div className="avatars-row">
//                 <div className="tiny-av" style={{ background: '#FF6B2C' }}>S</div>
//                 <div className="tiny-av" style={{ background: '#3ABCB1' }}>A</div>
//                 <div className="tiny-av" style={{ background: '#D4526A' }}>R</div>
//                 <div className="tiny-av" style={{ background: '#E8A83E' }}>M</div>
//                 <span className="av-more">Example group</span>
//               </div>
//             </div>
//           </div>

//           <div className="trip-tile">
//             <div className="trip-img ti-kerala">
//               <div className="trip-overlay" />
//               <div className="trip-img-label">Kerala Backwaters 🌿</div>
//               <div className="trip-spots">Example</div>
//             </div>
//             <div className="trip-info">
//               <div className="trip-info-row">
//                 <div className="trip-org">
//                   <div className="org-av" style={{ background: 'linear-gradient(135deg,#3ABCB1,#0A3D3D)' }}>A</div>
//                   <div><div className="org-name">Example traveler</div><div className="org-badge">Sample</div></div>
//                 </div>
//                 <div className="trip-dates">Jan 5–12</div>
//               </div>
//               <div className="trip-tags">
//                 <span className="t-tag">Nature</span>
//                 <span className="t-tag">Ayurveda</span>
//                 <span className="t-tag">Women-Only</span>
//               </div>
//               <div className="avatars-row">
//                 <div className="tiny-av" style={{ background: '#3ABCB1' }}>A</div>
//                 <div className="tiny-av" style={{ background: '#D4526A' }}>P</div>
//                 <div className="tiny-av" style={{ background: '#E8A83E' }}>L</div>
//                 <span className="av-more">Example group</span>
//               </div>
//             </div>
//           </div>

//           <div className="trip-tile">
//             <div className="trip-img ti-ladakh">
//               <div className="trip-overlay" />
//               <div className="trip-img-label">Ladakh Calling 🏔️</div>
//               <div className="trip-spots">Example</div>
//             </div>
//             <div className="trip-info">
//               <div className="trip-info-row">
//                 <div className="trip-org">
//                   <div className="org-av" style={{ background: 'linear-gradient(135deg,#2c5282,#4a90d9)' }}>V</div>
//                   <div><div className="org-name">Example traveler</div><div className="org-badge">Sample</div></div>
//                 </div>
//                 <div className="trip-dates">Jun 15–25</div>
//               </div>
//               <div className="trip-tags">
//                 <span className="t-tag">Adventure</span>
//                 <span className="t-tag">Biking</span>
//                 <span className="t-tag">High Altitude</span>
//               </div>
//               <div className="avatars-row">
//                 <div className="tiny-av" style={{ background: '#2c5282' }}>V</div>
//                 <div className="tiny-av" style={{ background: '#FF6B2C' }}>K</div>
//                 <span className="av-more">Example group</span>
//               </div>
//             </div>
//           </div>

//           <div className="trip-tile">
//             <div className="trip-img ti-varanasi">
//               <div className="trip-overlay" />
//               <div className="trip-img-label">Varanasi & Beyond 🪔</div>
//               <div className="trip-spots">Example</div>
//             </div>
//             <div className="trip-info">
//               <div className="trip-info-row">
//                 <div className="trip-org">
//                   <div className="org-av" style={{ background: 'linear-gradient(135deg,#7b2d8b,#c0392b)' }}>M</div>
//                   <div><div className="org-name">Example traveler</div><div className="org-badge">Sample</div></div>
//                 </div>
//                 <div className="trip-dates">Nov 15–21</div>
//               </div>
//               <div className="trip-tags">
//                 <span className="t-tag">Spiritual</span>
//                 <span className="t-tag">Photography</span>
//               </div>
//               <div className="avatars-row">
//                 <div className="tiny-av" style={{ background: '#D4526A' }}>M</div>
//                 <div className="tiny-av" style={{ background: '#E8A83E' }}>S</div>
//                 <div className="tiny-av" style={{ background: '#3ABCB1' }}>N</div>
//                 <span className="av-more">Example group</span>
//               </div>
//             </div>
//           </div>

//           <div className="trip-tile">
//             <div className="trip-img ti-goa">
//               <div className="trip-overlay" />
//               <div className="trip-img-label">Goa Vibes 🌊</div>
//               <div className="trip-spots">Example</div>
//             </div>
//             <div className="trip-info">
//               <div className="trip-info-row">
//                 <div className="trip-org">
//                   <div className="org-av" style={{ background: 'linear-gradient(135deg,#0077b6,#00b4d8)' }}>R</div>
//                   <div><div className="org-name">Example traveler</div><div className="org-badge">Sample</div></div>
//                 </div>
//                 <div className="trip-dates">Dec 26–Jan 2</div>
//               </div>
//               <div className="trip-tags">
//                 <span className="t-tag">Beach</span>
//                 <span className="t-tag">New Year</span>
//                 <span className="t-tag">Party</span>
//               </div>
//               <div className="avatars-row">
//                 <div className="tiny-av" style={{ background: '#0077b6' }}>R</div>
//                 <div className="tiny-av" style={{ background: '#FF6B2C' }}>T</div>
//                 <div className="tiny-av" style={{ background: '#D4526A' }}>Z</div>
//                 <span className="av-more">Example group</span>
//               </div>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* SAFETY SECTION */}
//       <section className="safety-section" id="safety">
//         <div className="safety-grid">
//           <div>
//             <div className="section-label">Trust &amp; Safety</div>
//             <h2 className="section-title">Trust-first<br /><em style={{ color: 'var(--gold)' }}>trust layer</em></h2>
//             <p className="section-sub">Designed with trust and safety in mind for travelers who want to make more informed connections.</p>
//             <div className="safety-features" style={{ marginTop: '48px' }}>
//               <div className="safety-item">
//                 <div className="si-icon">🔒</div>
//                 <div className="si-content">
//                   <h4>Identity Verification — Planned</h4>
//                   <p>Verification and identity-data handling, retention, and deletion rules will be published before launch.</p>
//                 </div>
//               </div>
//               <div className="safety-item">
//                 <div className="si-icon">⭐</div>
//                 <div className="si-content">
//                   <h4>WanderTrust Score</h4>
//                   <p>WanderTrust is designed to grow through reviews, real-world experiences, and meaningful trust signals.</p>
//                 </div>
//               </div>
//               <div className="safety-item">
//                 <div className="si-icon">🛡️</div>
//                 <div className="si-content">
//                   <h4>Safety Features — Planned</h4>
//                   <p>Future safety features may include traveler controls, emergency-contact options, and safer community interactions.</p>
//                 </div>
//               </div>
//               <div className="safety-item">
//                 <div className="si-icon">📋</div>
//                 <div className="si-content">
//                   <h4>Additional Host Checks — Planned</h4>
//                   <p>Additional host verification and two-way reviews are planned as part of the trust system.</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="trust-flow-card">
//             <div className="trust-flow-logo">How Trust Builds</div>
//             <div className="verify-steps">
//               <div className="verify-step">
//                 <div className="step-num">01</div>
//                 <div className="step-text">
//                   <h4>Create Your Profile</h4>
//                   <p>Start with your profile and the information you choose to share with the community.</p>
//                 </div>
//               </div>
//               <div className="verify-step">
//                 <div className="step-num">02</div>
//                 <div className="step-text">
//                   <h4>Build Your Trust Signals</h4>
//                   <p>Reviews, real-world experiences, hosting history, and future verification can contribute to meaningful trust signals.</p>
//                 </div>
//               </div>
//               <div className="verify-step">
//                 <div className="step-num">03</div>
//                 <div className="step-text">
//                   <h4>Travel &amp; Connect</h4>
//                   <p>Use available trust signals to make more informed connections with other travelers.</p>
//                 </div>
//               </div>
//               <div className="verify-step">
//                 <div className="step-num">04</div>
//                 <div className="step-text">
//                   <h4>Grow Your WanderTrust</h4>
//                   <p>As you travel, host, and build real experiences, your trust history can grow with the community.</p>
//                 </div>
//               </div>
//             </div>
//             <div className="trust-badges">
//               <div className="trust-badge">🔒 Trust features planned</div>
//               <div className="trust-badge">🇮🇳 Made for India</div>
//               <div className="trust-badge">♀ Safety features planned</div>
//               <div className="trust-badge">Verification planned</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* HOSTING SECTION */}
//       <section className="host-section" id="hosting">
//         <div className="host-grid">
//           <div className="host-profile-demo">
//             <div className="host-header">
//               <div className="host-big-av" style={{ background: 'linear-gradient(135deg,#3ABCB1,#0A3D3D)' }}>A</div>
//               <div className="host-details">
//                 <h3>Arjun Mehta</h3>
//                 <p>📍 Bandra West, Mumbai</p>
//                 <div className="host-v">Example trip Host</div>
//               </div>
//             </div>
//             <div className="host-stats-row">
//               <div className="hs"><div className="hs-n">18</div><div className="hs-l">Guests Hosted</div></div>
//               <div className="hs"><div className="hs-n">7</div><div className="hs-l">Trips Hosted</div></div>
//               <div className="hs"><div className="hs-n">3 yr</div><div className="hs-l">On Platform</div></div>
//             </div>
//             <div className="offering-tags">
//               <span className="o-tag">🛏️ Private Room</span>
//               <span className="o-tag">🍲 Home Cooked Meals</span>
//               <span className="o-tag">🏖️ Beach Guide</span>
//               <span className="o-tag">🚇 Local Transport Tips</span>
//             </div>
//             <div className="host-review">
//               <div className="review-stars">★★★★★</div>
//               <div className="review-text">&quot;Arjun showed us parts of Mumbai we&apos;d never find in any guide. The home-cooked dal was unforgettable. Felt like staying with family.&quot;</div>
//               <div className="review-by">— Example traveler</div>
//             </div>
//           </div>

//           <div>
//             <div className="section-label">Hosting Program · Planned</div>
//             <h2 className="section-title">Open your door,<br />open the <em style={{ color: 'var(--mint)' }}>world</em></h2>
//             <p className="section-sub" style={{ marginBottom: '40px' }}>A future hosting program designed around cultural exchange, community trust, and meaningful stays.</p>
//             <div className="host-benefits">
//               <div className="hb-item">
//                 <div className="hb-icon">🌐</div>
//                 <div className="hb-text">
//                   <h4>Hosting Exchange — Planned</h4>
//                   <p>A future hosting exchange could connect travelers through stays, reciprocity, and community trust signals.</p>
//                 </div>
//               </div>
//               <div className="hb-item">
//                 <div className="hb-icon">🤝</div>
//                 <div className="hb-text">
//                   <h4>Real Cultural Exchange</h4>
//                   <p>Show travelers local markets, hidden gems, festivals, and authentic food experiences — not tourist traps.</p>
//                 </div>
//               </div>
//               <div className="hb-item">
//                 <div className="hb-icon">🔐</div>
//                 <div className="hb-text">
//                   <h4>Trust-focused guest discovery</h4>
//                   <p>As a host, you can review traveler profiles and available trust signals before accepting a request.</p>
//                 </div>
//               </div>
//               <div className="hb-item">
//                 <div className="hb-icon">📣</div>
//                 <div className="hb-text">
//                   <h4>Build Your Host Reputation</h4>
//                   <p>Reviews and meaningful trust signals can help hosts build a reputation over time. Future host features will be introduced as the platform develops.</p>
//                 </div>
//               </div>
//             </div>
//             <a href="#early-access" className="btn-primary" style={{ marginTop: '40px', display: 'inline-block' }}>Join the Journey →</a>
//           </div>
//         </div>
//       </section>

//       {/* TARA — FUTURE INTELLIGENCE */}
//       <section className="tara-section" id="tara">
//         <div className="tara-grid">
//           <div className="tara-copy">
//             <div className="section-label">Future Intelligence</div>
//             <h2 className="section-title">
//               Meet <em style={{ color: 'var(--mint)' }}>Tara</em>
//             </h2>
//             <p className="section-sub">
//               A future intelligence layer designed to help you make sense of your
//               travel journey, discover meaningful possibilities, and make more
//               informed decisions.
//             </p>
//             <div className="tara-status">COMING LATER · CONCEPT</div>
//           </div>

//           <div className="tara-card">
//             <div className="tara-card-top">
//               <div className="tara-orb">✦</div>
//               <div>
//                 <div className="tara-name">Tara</div>
//                 <div className="tara-label">Travel intelligence</div>
//               </div>
//             </div>

//             <div className="tara-prompt">What can Tara help with?</div>

//             <div className="tara-options">
//               <div className="tara-option">🧭 Make sense of my journey</div>
//               <div className="tara-option">🤝 Discover meaningful connections</div>
//               <div className="tara-option">🗺️ Explore possibilities around my trip</div>
//               <div className="tara-option">✦ Make more informed travel decisions</div>
//             </div>

//             <div className="tara-note">
//               Future experience — not available yet
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* EARLY ACCESS */}
//       <section className="early-access-section" id="early-access">
//         <EarlyAccessFlow />
//       </section>

//       {/* CTA */}
//       <section className="cta-section">
//         <div className="section-label" style={{ textAlign: 'center' }}>Ready to begin?</div>
//         <h2 className="section-title">
//           Your next adventure<br />is one <em style={{ color: 'var(--saffron)' }}>tribe</em> away
//         </h2>
//         <p className="section-sub">
//           Be among the first to help build a trust-first travel community across India. Solo traveler, group organizer, or local host — there&apos;s a place in WanderTribe for you.
//         </p>
//         <div className="cta-buttons">
//           <a href="#early-access" className="btn-primary btn-large">Join Early Access →</a>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer>
//         <div className="footer-brand">
//           <div className="logo">Wander<span style={{ color: 'var(--saffron)' }}>Tribe</span></div>
//           <div className="footer-tagline">Trust that grows with every journey.</div>
//         </div>
//         <div className="footer-links">
//           <a href="#trips">Trips</a>
//           <a href="#safety">Trust</a>
//           <a href="#hosting">Hosts</a>
//           <a href="#tara">Tara</a>
//           <a href="#early-access">Join Early Access</a>
//         </div>
//         <div className="footer-socials">
//           <div className="footer-social-label">Follow</div>
//           <div className="footer-social-icons">
//             {instagramUrl ? <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon /></a> : <span className="footer-social-disabled" aria-label="Instagram link not configured"><InstagramIcon /></span>}
//             {facebookUrl ? <a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook"><FacebookIcon /></a> : <span className="footer-social-disabled" aria-label="Facebook link not configured"><FacebookIcon /></span>}
//             {youtubeUrl ? <a href={youtubeUrl} target="_blank" rel="noreferrer" aria-label="YouTube"><YouTubeIcon /></a> : <span className="footer-social-disabled" aria-label="YouTube link coming later"><YouTubeIcon /></span>}
//             {whatsappChannelUrl ? <a href={whatsappChannelUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp Channel"><WhatsAppIcon /></a> : <span className="footer-social-disabled" aria-label="WhatsApp channel coming later"><WhatsAppIcon /></span>}
//             {whatsappBusinessUrl ? <a href={whatsappBusinessUrl} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><WhatsAppBusinessIcon /></a> : <span className="footer-social-disabled" aria-label="WhatsApp chat coming later"><WhatsAppBusinessIcon /></span>}
//           </div>
//         </div>
//         <div className="footer-apps">
//           <div className="footer-social-label">Get the app</div>
//           <div className="footer-app-buttons">
//             <AppStoreButton platform="ios" />
//             <AppStoreButton platform="android" />
//           </div>
//         </div>
//         <div className="footer-copy">Made with ❤️ for Indian travelers</div>
//       </footer>
//     </>
//   )
// }

// function AppStoreButton({ platform }: { platform: 'ios' | 'android' }) {
//   const isAndroid = platform === 'android'
//   return (
//     <Link
//       href={`/coming-soon?platform=${platform}`}
//       className="app-store-button"
//       aria-label={isAndroid ? 'Open Google Play — Coming Soon' : 'Open App Store — Coming Soon'}
//     >
//       {isAndroid ? <GooglePlaySmallIcon /> : <AppleSmallIcon />}
//       <span><small>COMING SOON</small>{isAndroid ? 'Google Play' : 'App Store'}</span>
//     </Link>
//   )
// }

// function InstagramIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" className="icon-fill"/></svg> }
// function FacebookIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v4h4v-4h3.2l.8-4H13V9c0-.7.3-1 1-1Z"/></svg> }
// function YouTubeIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="m10 9 5 3-5 3V9Z" className="icon-cutout"/></svg> }
// function WhatsAppIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a8.5 8.5 0 0 0-7.35 12.77L3.5 20.5l4.85-1.13A8.5 8.5 0 1 0 12 3Zm0 15.4a6.9 6.9 0 0 1-3.52-.96l-.25-.15-2.88.67.68-2.8-.16-.26A6.9 6.9 0 1 1 12 18.4Zm3.82-5.1c-.2-.1-1.18-.58-1.36-.65-.18-.07-.31-.1-.44.1-.13.2-.5.65-.61.78-.11.13-.22.15-.42.05-.2-.1-.83-.31-1.58-.99-.58-.52-.98-1.16-1.09-1.36-.11-.2-.01-.31.08-.41.09-.09.2-.22.3-.33.1-.11.13-.2.2-.33.07-.13.04-.25-.02-.35-.05-.1-.44-1.06-.6-1.45-.16-.38-.32-.33-.44-.34h-.38c-.13 0-.34.05-.52.25-.18.2-.68.67-.68 1.64s.7 1.9.8 2.03c.1.13 1.38 2.1 3.35 2.94.47.2.84.32 1.13.41.47.15.9.13 1.24.08.38-.06 1.18-.48 1.35-.94.17-.46.17-.85.12-.94-.05-.08-.18-.13-.38-.23Z"/></svg> }
// /** Same WhatsApp glyph, drawn inside a rounded chat-bubble badge so it reads as a distinct "direct chat" action next to the plain WhatsApp Channel icon. */
// function WhatsAppBusinessIcon() {
//   return (
//     <svg viewBox="0 0 24 24" aria-hidden="true">
//       <rect x="2" y="2" width="20" height="20" rx="6" className="icon-cutout" />
//       <path d="M12 5.6a6.9 6.9 0 0 0-5.9 10.42L5.4 19.4l3.5-.92A6.9 6.9 0 1 0 12 5.6Zm3.16 9.62c-.16.44-.87.82-1.21.87-.31.05-.7.07-1.13-.07a10.3 10.3 0 0 1-1-.37 8.02 8.02 0 0 1-2.98-2.64c-.28-.38-.58-.83-.6-1.32-.02-.46.13-.87.4-1.14.12-.12.27-.19.42-.19h.3c.1 0 .23-.02.35.27.13.32.44 1.1.48 1.18.04.08.06.18.01.28-.05.1-.08.16-.16.25-.08.09-.17.2-.24.27-.08.08-.16.16-.07.32.1.16.44.72.94 1.16.65.58 1.19.76 1.36.85.16.08.26.07.35-.04.1-.11.42-.49.53-.66.11-.17.21-.14.36-.09.14.06.94.44 1.1.53.16.08.27.13.31.2.04.07.04.4-.12.84Z"/>
//     </svg>
//   )
// }
// function AppleSmallIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08ZM12.03 7.25C11.88 5.02 13.69 3.18 15.77 3c.29 2.58-2.33 4.5-3.74 4.25Z"/></svg> }
// function GooglePlaySmallIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.6 2.4c-.37.39-.6 1-.6 1.77v15.66c0 .77.23 1.38.6 1.77L3.7 21.7 14.42 10.98V10.9L3.7 2.3l-.1.1Z"/><path d="m17.96 14.52-3.54-3.54v-.08l3.54-3.54 4.25 2.42c1.21.69 1.21 1.63 0 2.32l-4.25 2.42Z"/><path d="m3.6 21.6 10.72-10.72 3.64 3.64-11.9 6.76c-.97.55-1.82.59-2.46.32Z"/><path d="m3.6 2.4 10.72 10.72-3.64 3.64L3.6 9.98c-.64-.37-1.05-.88-1.05-1.5 0-.62.41-1.13 1.05-1.5Z"/></svg> }

// const CSS = `
//   @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap');

//   :root {
//     --saffron:   #FF6B2C;
//     --deep-teal: #0A3D3D;
//     --warm-sand: #F5EDD8;
//     --night:     #0C1A1A;
//     --gold:      #E8A83E;
//     --rose:      #D4526A;
//     --mint:      #3ABCB1;
//     --cream:     #FDF8F0;
//     --text-dark: #1A2E2E;
//     --glass:     rgba(255,255,255,0.06);
//   }

//   *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//   html { scroll-behavior: smooth; }

//   body {
//     font-family: 'DM Sans', sans-serif;
//     background: var(--night);
//     color: var(--cream);
//     overflow-x: hidden;
//   }

//   /* ── NAV ── */
//   .wt-nav {
//     position: fixed; top: 0; left: 0; right: 0; z-index: 100;
//     display: flex; align-items: center; justify-content: space-between;
//     padding: 20px 48px;
//     background: linear-gradient(180deg, rgba(12,26,26,0.95) 0%, transparent 100%);
//     backdrop-filter: blur(12px);
//   }
//   .logo {
//     font-family: 'Playfair Display', serif;
//     font-size: 1.6rem; font-weight: 900; letter-spacing: -0.5px;
//     color: var(--cream);
//   }
//   .logo span { color: var(--saffron); }
//   .wt-nav ul { display: flex; gap: 32px; list-style: none; }
//   .wt-nav ul a { color: rgba(253,248,240,0.7); text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: color 0.2s; }
//   .wt-nav ul a:hover { color: var(--saffron); }
//   .nav-cta {
//     background: var(--saffron); color: white; border: none;
//     padding: 10px 24px; border-radius: 100px;
//     font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 0.9rem;
//     cursor: pointer; transition: transform 0.2s, box-shadow 0.2s;
//     text-decoration: none; display: inline-block;
//   }
//   .nav-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255,107,44,0.4); }

//   /* ── HERO ── */
//   .hero {
//     min-height: 100vh;
//     display: grid; grid-template-columns: 1fr 1fr;
//     align-items: center;
//     padding: 120px 48px 80px;
//     position: relative; overflow: hidden;
//   }
//   .hero::before {
//     content: '';
//     position: absolute; inset: 0;
//     z-index: 0;
//     pointer-events: none;
//     background:
//       radial-gradient(ellipse 60% 80% at 70% 50%, rgba(58,188,177,0.08) 0%, transparent 60%),
//       radial-gradient(ellipse 40% 60% at 20% 80%, rgba(255,107,44,0.06) 0%, transparent 50%);
//   }
//   .hero-content, .hero-visual { position: relative; z-index: 1; }

//   .hero-app-label {
//     color: rgba(253,248,240,0.38);
//     font-size: 0.68rem;
//     text-transform: uppercase;
//     letter-spacing: 0.12em;
//     font-family: 'Space Mono', monospace;
//     margin-bottom: 10px;
//   }

//   .hero-badge {
//     display: inline-flex; align-items: center; gap: 8px;
//     background: rgba(255,107,44,0.12); border: 1px solid rgba(255,107,44,0.3);
//     padding: 6px 16px; border-radius: 100px; margin-bottom: 24px;
//     font-size: 0.78rem; font-weight: 600; color: var(--saffron); letter-spacing: 0.08em; text-transform: uppercase;
//   }
//   .hero-badge::before { content: '●'; font-size: 0.5rem; animation: pulse 2s infinite; }
//   @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }

//   .hero-title {
//     font-family: 'Playfair Display', serif;
//     font-size: clamp(3rem, 5vw, 5.2rem);
//     line-height: 1.05; font-weight: 900; letter-spacing: -2px;
//     margin-bottom: 24px;
//   }
//   .hero-title em { color: var(--saffron); font-style: italic; }
//   .hero-title .accent-line { color: var(--mint); font-style: italic; }

//   .hero-sub {
//     font-size: 1.05rem; color: rgba(253,248,240,0.65); line-height: 1.7;
//     max-width: 480px; margin-bottom: 40px; font-weight: 300;
//   }

//   .app-store-button {
//     display: flex; align-items: center; gap: 9px; min-width: 138px;
//     padding: 8px 12px; border: 1px solid rgba(255,255,255,.09);
//     border-radius: 12px; background: rgba(255,255,255,.025);
//     color: var(--cream); text-decoration: none; transition: all .2s;
//   }
//   .app-store-button:hover { border-color: rgba(58,188,177,.35); background: rgba(58,188,177,.05); transform: translateY(-2px); }
//   .app-store-button svg { width: 20px; height: 20px; fill: currentColor; flex-shrink: 0; }
//   .app-store-button span { display: flex; flex-direction: column; font-size: .75rem; font-weight: 600; line-height: 1.1; }
//   .app-store-button small { color: rgba(253,248,240,.35); font-size: .52rem; font-weight: 500; margin-bottom: 3px; }
//   .hero-socials { margin-top: 24px; }
//   .hero-social-label { font-family: 'Space Mono', monospace; font-size: .58rem; letter-spacing: .16em; color: rgba(253,248,240,.35); margin-bottom: 11px; }
//   .hero-social-icons { display: flex; gap: 9px; }
//   .hero-social-icons a, .hero-social-disabled { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,.09); border-radius: 50%; color: rgba(253,248,240,.62); transition: all .2s; }
//   .hero-social-disabled { opacity: .65; }
//   .hero-social-icons a:hover { border-color: rgba(58,188,177,.4); color: var(--mint); transform: translateY(-2px); }
//   .hero-social-icons svg { width: 17px; height: 17px; fill: currentColor; }
//   .hero-social-icons rect, .hero-social-icons circle { fill: none; stroke: currentColor; stroke-width: 1.7; }
//   .hero-social-icons .icon-fill { fill: currentColor; stroke: none; }
//   .hero-social-icons .icon-cutout { fill: var(--night); }

//   .hero-actions { display: flex; gap: 16px; align-items: center; flex-wrap: wrap; }
//   .btn-primary {
//     background: var(--saffron);
//     color: white; border: none; padding: 16px 36px; border-radius: 100px;
//     font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 1rem;
//     cursor: pointer; transition: all 0.3s; text-decoration: none; display: inline-block;
//     box-shadow: 0 4px 24px rgba(255,107,44,0.3);
//   }
//   .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 12px 36px rgba(255,107,44,0.45); }
//   .btn-ghost {
//     background: transparent; color: var(--cream); border: 1.5px solid rgba(253,248,240,0.2);
//     padding: 15px 32px; border-radius: 100px;
//     font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 1rem;
//     cursor: pointer; transition: all 0.3s; text-decoration: none; display: inline-block;
//   }
//   .btn-ghost:hover { border-color: var(--mint); color: var(--mint); }

//   /* ── HERO VISUAL ── */
//   .hero-visual {
//     position: relative; height: 580px;
//     display: flex; align-items: center; justify-content: center;
//   }
//   .map-glow {
//     width: 420px; height: 420px; border-radius: 50%;
//     background: radial-gradient(circle, rgba(58,188,177,0.12) 0%, rgba(10,61,61,0.4) 50%, transparent 70%);
//     position: absolute;
//     border: 1px solid rgba(58,188,177,0.15);
//     animation: breathe 4s ease-in-out infinite;
//   }
//   @keyframes breathe { 0%,100%{transform:scale(1)} 50%{transform:scale(1.04)} }

//   .floating-cards {
//     position: relative; width: 340px; height: 480px;
//   }
//   .trip-card {
//     position: absolute;
//     background: rgba(255,255,255,0.04);
//     backdrop-filter: blur(20px);
//     border: 1px solid rgba(255,255,255,0.1);
//     border-radius: 20px; padding: 20px;
//     animation: float linear infinite;
//   }
//   @keyframes float {
//     0%   { transform: translateY(0px) rotate(var(--rot)); }
//     50%  { transform: translateY(-10px) rotate(var(--rot)); }
//     100% { transform: translateY(0px) rotate(var(--rot)); }
//   }
//   .tc1 { top: 0; left: 0; width: 200px; --rot: -3deg; animation-duration: 5s; }
//   .tc2 { top: 120px; right: 0; width: 180px; --rot: 2deg; animation-duration: 6s; animation-delay: -2s; }
//   .tc3 { bottom: 40px; left: 20px; width: 190px; --rot: -1deg; animation-duration: 7s; animation-delay: -1s; }
//   .tc4 { bottom: 80px; right: 10px; width: 160px; --rot: 3deg; animation-duration: 5.5s; animation-delay: -3s; }

//   .card-header { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
//   .avatar-placeholder {
//     width: 32px; height: 32px; border-radius: 50%;
//     display: flex; align-items: center; justify-content: center;
//     font-size: 0.75rem; font-weight: 700; color: white; flex-shrink: 0;
//   }
//   .card-name { font-size: 0.78rem; font-weight: 600; }
//   .card-role { font-size: 0.65rem; color: rgba(253,248,240,0.5); }
//   .card-dest {
//     font-family: 'Playfair Display', serif;
//     font-size: 1rem; font-weight: 700; margin-bottom: 6px;
//   }
//   .card-meta { font-size: 0.7rem; color: rgba(253,248,240,0.55); }
//   .card-tag {
//     display: inline-block; margin-top: 10px;
//     padding: 3px 10px; border-radius: 100px; font-size: 0.65rem; font-weight: 600; letter-spacing: 0.04em;
//   }
//   .tag-host     { background: rgba(58,188,177,0.2);  color: var(--mint); }
//   .tag-group    { background: rgba(255,107,44,0.2);  color: var(--saffron); }
//   .tag-verified { background: rgba(232,168,62,0.2);  color: var(--gold); }
//   .tag-solo     { background: rgba(212,82,106,0.15); color: var(--rose); }
//   .verified-badge {
//     display: flex; align-items: center; gap: 4px;
//     font-size: 0.65rem; color: var(--gold); margin-top: 6px; font-weight: 600;
//   }

//   /* ── SECTION COMMON ── */
//   section { padding: 100px 48px; scroll-margin-top: 88px; }
//   .section-label {
//     font-size: 0.75rem; font-weight: 700; text-transform: uppercase;
//     letter-spacing: 0.15em; color: var(--saffron); margin-bottom: 16px;
//     font-family: 'Space Mono', monospace;
//   }
//   .section-title {
//     font-family: 'Playfair Display', serif;
//     font-size: clamp(2rem, 3.5vw, 3rem);
//     font-weight: 900; line-height: 1.1; letter-spacing: -1px;
//     margin-bottom: 20px;
//   }
//   .section-sub { color: rgba(253,248,240,0.6); font-size: 1rem; line-height: 1.7; max-width: 520px; font-weight: 300; }

//   /* ── FEATURES ── */
//   .features-section { background: rgba(255,255,255,0.01); }
//   .features-grid {
//     display: grid; grid-template-columns: repeat(3, 1fr);
//     gap: 24px; margin-top: 64px;
//   }
//   .feature-card {
//     background: rgba(255,255,255,0.03);
//     border: 1px solid rgba(255,255,255,0.07);
//     border-radius: 24px; padding: 36px 32px;
//     transition: all 0.4s; position: relative; overflow: hidden;
//   }
//   .feature-card::after {
//     content: ''; position: absolute; inset: 0;
//     background: linear-gradient(135deg, transparent 60%, rgba(255,107,44,0.04) 100%);
//     transition: opacity 0.4s; opacity: 0;
//   }
//   .feature-card:hover { border-color: rgba(255,107,44,0.3); transform: translateY(-6px); }
//   .feature-card:hover::after { opacity: 1; }
//   .feature-icon {
//     width: 52px; height: 52px; border-radius: 14px;
//     display: flex; align-items: center; justify-content: center;
//     font-size: 1.5rem; margin-bottom: 24px;
//   }
//   .fi-orange { background: rgba(255,107,44,0.12); }
//   .fi-teal   { background: rgba(58,188,177,0.12); }
//   .fi-gold   { background: rgba(232,168,62,0.12); }
//   .fi-rose   { background: rgba(212,82,106,0.12); }
//   .fi-mint   { background: rgba(58,188,177,0.12); }
//   .fi-deep   { background: rgba(10,61,61,0.4); border: 1px solid rgba(58,188,177,0.2); }
//   .feature-card h3 {
//     font-family: 'Playfair Display', serif;
//     font-size: 1.25rem; font-weight: 700; margin-bottom: 12px;
//   }
//   .feature-card p { font-size: 0.88rem; color: rgba(253,248,240,0.58); line-height: 1.7; font-weight: 300; }

//   /* ── SAFETY SECTION ── */
//   .safety-section {
//     background: linear-gradient(135deg, #051515 0%, #0A2A2A 50%, #051515 100%);
//     position: relative; overflow: hidden;
//   }
//   .safety-section::before {
//     content: '';
//     position: absolute; top: -200px; right: -200px;
//     width: 600px; height: 600px; border-radius: 50%;
//     background: radial-gradient(circle, rgba(232,168,62,0.06) 0%, transparent 60%);
//   }
//   .safety-grid {
//     display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 64px; align-items: stretch;
//   }
//   .safety-grid > :first-child { display: flex; flex-direction: column; min-width: 0; }
//   .trust-flow-card {
//     background: linear-gradient(135deg, #1A3A3A 0%, #0F2828 100%);
//     border: 1px solid rgba(232,168,62,0.2);
//     border-radius: 28px; padding: 32px;
//     position: relative; overflow: hidden; box-sizing: border-box;
//     align-self: stretch; display: flex; flex-direction: column;
//     margin-top: 264px;
//   }
//   .trust-flow-card::before {
//     content: '';
//     position: absolute; top: 0; left: 0; right: 0; height: 3px;
//     background: linear-gradient(90deg, var(--gold), var(--saffron), var(--mint));
//   }
//   .trust-flow-logo {
//     font-family: 'Space Mono', monospace;
//     font-size: 0.7rem; letter-spacing: 0.2em; color: var(--gold);
//     text-transform: uppercase; margin-bottom: 24px;
//     display: flex; align-items: center; gap: 10px;
//   }
//   .trust-flow-logo::before { content: ''; width: 28px; height: 2px; background: var(--gold); }
//   .verify-steps {
//     display: grid; grid-template-rows: auto; gap: 22px;
//   }
//   .verify-step { display: flex; align-items: flex-start; gap: 16px; }
//   .step-num {
//     width: 32px; height: 32px; border-radius: 50%; flex-shrink: 0;
//     background: rgba(232,168,62,0.12); border: 1px solid rgba(232,168,62,0.3);
//     display: flex; align-items: center; justify-content: center;
//     font-family: 'Space Mono', monospace; font-size: 0.75rem; font-weight: 700; color: var(--gold);
//   }
//   .step-text h4 { font-size: 0.9rem; font-weight: 600; margin-bottom: 4px; }
//   .step-text p  { font-size: 0.8rem; color: rgba(253,248,240,0.5); line-height: 1.5; }
//   .trust-badges { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 26px; }
//   .trust-badge {
//     padding: 6px 14px; border-radius: 8px;
//     border: 1px solid rgba(255,255,255,0.08);
//     font-size: 0.72rem; font-weight: 600; letter-spacing: 0.04em;
//     color: rgba(253,248,240,0.6);
//   }
//   .safety-features { display: flex; flex-direction: column; gap: 28px; flex: 1; }
//   .safety-item {
//     display: flex; gap: 20px; align-items: flex-start;
//     padding: 24px; border-radius: 16px;
//     background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06);
//     transition: border-color 0.3s;
//   }
//   .safety-item:hover { border-color: rgba(232,168,62,0.25); }
//   .si-icon { font-size: 1.5rem; flex-shrink: 0; }
//   .si-content h4 { font-size: 0.95rem; font-weight: 600; margin-bottom: 6px; }
//   .si-content p  { font-size: 0.82rem; color: rgba(253,248,240,0.55); line-height: 1.6; }

//   /* ── HOW IT WORKS ── */
//   .how-section { position: relative; }
//   .how-grid {
//     display: grid; grid-template-columns: repeat(4, 1fr);
//     gap: 0; margin-top: 64px; position: relative;
//   }
//   .how-grid::after {
//     content: '';
//     position: absolute; top: 40px; left: 10%; right: 10%; height: 1px;
//     background: linear-gradient(90deg, transparent, rgba(255,107,44,0.3), rgba(58,188,177,0.3), transparent);
//     z-index: 0;
//   }
//   .how-step { text-align: center; padding: 0 24px; position: relative; z-index: 1; }
//   .step-circle {
//     width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 24px;
//     display: flex; align-items: center; justify-content: center;
//     font-size: 1.6rem; position: relative;
//     border: 2px solid rgba(255,255,255,0.08);
//   }
//   .sc1 { background: rgba(255,107,44,0.1);  border-color: rgba(255,107,44,0.3); }
//   .sc2 { background: rgba(58,188,177,0.1);  border-color: rgba(58,188,177,0.3); }
//   .sc3 { background: rgba(232,168,62,0.1);  border-color: rgba(232,168,62,0.3); }
//   .sc4 { background: rgba(212,82,106,0.1);  border-color: rgba(212,82,106,0.3); }
//   .step-n {
//     position: absolute; top: -6px; right: -6px;
//     width: 22px; height: 22px; border-radius: 50%;
//     background: var(--night); border: 1px solid rgba(255,255,255,0.1);
//     font-family: 'Space Mono', monospace; font-size: 0.6rem; font-weight: 700;
//     display: flex; align-items: center; justify-content: center; color: rgba(253,248,240,0.5);
//   }
//   .how-step h3 { font-family: 'Playfair Display', serif; font-size: 1.05rem; font-weight: 700; margin-bottom: 10px; }
//   .how-step p  { font-size: 0.82rem; color: rgba(253,248,240,0.55); line-height: 1.65; }

//   /* ── TRIPS SHOWCASE ── */
//   .trips-section { overflow: hidden; }
//   .trips-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 48px; }
//   .trips-header-note { color: rgba(253,248,240,.38); font-size: .72rem; font-family: 'Space Mono', monospace; text-transform: uppercase; letter-spacing: .08em; }
//   .trips-scroll { display: flex; gap: 24px; overflow-x: auto; padding-bottom: 16px; scrollbar-width: none; }
//   .trips-scroll::-webkit-scrollbar { display: none; }
//   .trip-tile {
//     flex-shrink: 0; width: 280px; border-radius: 24px;
//     background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
//     overflow: hidden; transition: transform 0.3s, border-color 0.3s;
//     cursor: pointer;
//   }
//   .trip-tile:hover { transform: translateY(-8px); border-color: rgba(255,107,44,0.3); }
//   .trip-img {
//     width: 100%; height: 160px;
//     background-size: cover; background-position: center;
//     position: relative;
//   }
//   .trip-overlay {
//     position: absolute; inset: 0;
//     background: linear-gradient(0deg, rgba(12,26,26,0.8) 0%, transparent 60%);
//   }
//   .trip-img-label {
//     position: absolute; bottom: 12px; left: 16px;
//     font-family: 'Playfair Display', serif; font-size: 1.15rem; font-weight: 700;
//   }
//   .trip-spots {
//     position: absolute; top: 12px; right: 12px;
//     background: rgba(255,107,44,0.9); padding: 4px 10px; border-radius: 100px;
//     font-size: 0.65rem; font-weight: 700; letter-spacing: 0.04em;
//   }
//   .trip-info { padding: 20px; }
//   .trip-info-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
//   .trip-org { display: flex; align-items: center; gap: 8px; }
//   .org-av {
//     width: 28px; height: 28px; border-radius: 50%;
//     display: flex; align-items: center; justify-content: center;
//     font-size: 0.7rem; font-weight: 700; color: white;
//   }
//   .org-name  { font-size: 0.78rem; font-weight: 600; }
//   .org-badge { font-size: 0.6rem;  color: var(--gold); }
//   .trip-dates { font-size: 0.72rem; color: rgba(253,248,240,0.5); }
//   .trip-tags { display: flex; gap: 6px; flex-wrap: wrap; }
//   .t-tag {
//     padding: 3px 9px; border-radius: 6px; font-size: 0.62rem; font-weight: 600;
//     background: rgba(255,255,255,0.06); color: rgba(253,248,240,0.7);
//   }
//   .avatars-row { display: flex; margin-top: 14px; align-items: center; }
//   .tiny-av {
//     width: 26px; height: 26px; border-radius: 50%; border: 2px solid var(--night);
//     display: flex; align-items: center; justify-content: center;
//     font-size: 0.6rem; font-weight: 700; color: white; margin-left: -8px;
//   }
//   .tiny-av:first-child { margin-left: 0; }
//   .av-more { font-size: 0.7rem; color: rgba(253,248,240,0.5); margin-left: 8px; }

//   /* Trip image gradients */
//   .ti-rajasthan { background: linear-gradient(135deg, #8B4513 0%, #D2691E 50%, #FF8C00 100%); }
//   .ti-kerala    { background: linear-gradient(135deg, #1a5c3a 0%, #2d8a5e 50%, #4db877 100%); }
//   .ti-ladakh    { background: linear-gradient(135deg, #2c5282 0%, #4a90d9 50%, #87CEEB 100%); }
//   .ti-varanasi  { background: linear-gradient(135deg, #7b2d8b 0%, #c0392b 50%, #f39c12 100%); }
//   .ti-goa       { background: linear-gradient(135deg, #0077b6 0%, #00b4d8 50%, #90e0ef 100%); }

//   /* ── HOSTING SECTION ── */
//   .host-section { background: linear-gradient(135deg, #070F0F 0%, #0D2020 100%); }
//   .host-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
//   .host-profile-demo {
//     background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
//     border-radius: 28px; padding: 32px; position: relative;
//   }
//   .host-profile-demo::after {
//     content: 'HOST PROFILE';
//     position: absolute; top: -11px; left: 28px;
//     background: var(--deep-teal); padding: 0 12px;
//     font-size: 0.6rem; letter-spacing: 0.15em; color: var(--mint); font-weight: 700;
//     font-family: 'Space Mono', monospace;
//   }
//   .host-header { display: flex; gap: 16px; align-items: center; margin-bottom: 24px; }
//   .host-big-av {
//     width: 64px; height: 64px; border-radius: 50%;
//     display: flex; align-items: center; justify-content: center;
//     font-size: 1.4rem; font-weight: 700; color: white;
//     border: 3px solid rgba(58,188,177,0.4); flex-shrink: 0;
//   }
//   .host-details h3 { font-family: 'Playfair Display', serif; font-size: 1.3rem; font-weight: 700; }
//   .host-details p  { font-size: 0.82rem; color: rgba(253,248,240,0.55); margin-top: 4px; }
//   .host-v { display: flex; align-items: center; gap: 5px; font-size: 0.72rem; color: var(--gold); font-weight: 600; margin-top: 6px; }
//   .host-stats-row {
//     display: flex; gap: 24px; padding: 20px 0;
//     border-top: 1px solid rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.06);
//     margin-bottom: 20px;
//   }
//   .hs { text-align: center; }
//   .hs-n { font-family: 'Space Mono', monospace; font-size: 1.3rem; font-weight: 700; color: var(--mint); }
//   .hs-l { font-size: 0.68rem; color: rgba(253,248,240,0.45); text-transform: uppercase; letter-spacing: 0.05em; margin-top: 2px; }
//   .offering-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px; }
//   .o-tag {
//     padding: 6px 14px; border-radius: 10px; font-size: 0.75rem; font-weight: 500;
//     background: rgba(58,188,177,0.08); border: 1px solid rgba(58,188,177,0.2); color: var(--mint);
//   }
//   .host-review { background: rgba(255,255,255,0.02); border-radius: 14px; padding: 16px; }
//   .review-stars { color: var(--gold); font-size: 0.75rem; margin-bottom: 6px; }
//   .review-text { font-size: 0.8rem; color: rgba(253,248,240,0.6); line-height: 1.6; font-style: italic; }
//   .review-by   { font-size: 0.72rem; color: rgba(253,248,240,0.4); margin-top: 8px; }

//   .host-benefits { display: flex; flex-direction: column; gap: 20px; }
//   .hb-item { display: flex; gap: 16px; align-items: flex-start; }
//   .hb-icon {
//     width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;
//     display: flex; align-items: center; justify-content: center; font-size: 1.1rem;
//     background: rgba(58,188,177,0.08); border: 1px solid rgba(58,188,177,0.15);
//   }
//   .hb-text h4 { font-size: 0.95rem; font-weight: 600; margin-bottom: 4px; }
//   .hb-text p  { font-size: 0.82rem; color: rgba(253,248,240,0.5); line-height: 1.6; }

//   .footer-brand { display: flex; flex-direction: column; gap: 8px; }
//   .footer-tagline { color: rgba(253,248,240,0.38); font-size: 0.72rem; }
//   .footer-socials, .footer-apps { display: flex; flex-direction: column; gap: 10px; }
//   .footer-social-label { color: rgba(253,248,240,0.35); font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.12em; font-family: 'Space Mono', monospace; }
//   .footer-social-icons { display: flex; gap: 10px; }
//   .footer-social-icons a { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,0.09); border-radius: 50%; color: rgba(253,248,240,0.65); transition: all .2s; }
//   .footer-social-icons a:hover { color: var(--mint); border-color: rgba(58,188,177,.4); transform: translateY(-2px); }
//   .footer-social-disabled { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,0.05); border-radius: 50%; color: rgba(253,248,240,0.18); }
//   .footer-social-icons svg { width: 17px; height: 17px; fill: currentColor; }
//   .footer-social-icons rect, .footer-social-icons circle { fill: none; stroke: currentColor; stroke-width: 1.7; }
//   .footer-social-icons .icon-fill { fill: currentColor; stroke: none; }
//   .footer-social-icons .icon-cutout { fill: var(--night); }
//   .footer-app-buttons { display: flex; gap: 8px; flex-wrap: wrap; }

//   /* ── TARA ── */
//   .tara-section {
//     background: #071C1C;
//     position: relative;
//     overflow: hidden;
//   }

//   .tara-grid {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 80px;
//     align-items: center;
//   }

//   .tara-status {
//     display: inline-flex;
//     margin-top: 32px;
//     padding: 7px 12px;
//     border: 1px solid rgba(58,188,177,0.25);
//     border-radius: 999px;
//     color: var(--mint);
//     font-family: 'Space Mono', monospace;
//     font-size: 0.65rem;
//     letter-spacing: 0.12em;
//   }

//   .tara-card {
//     background: linear-gradient(145deg, #123333 0%, #0B2424 100%);
//     border: 1px solid rgba(58,188,177,0.18);
//     border-radius: 28px;
//     padding: 36px;
//     position: relative;
//     overflow: hidden;
//   }

//   .tara-card::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     height: 3px;
//     background: linear-gradient(90deg, var(--mint), var(--saffron));
//   }

//   .tara-card-top {
//     display: flex;
//     align-items: center;
//     gap: 14px;
//     margin-bottom: 34px;
//   }

//   .tara-orb {
//     width: 44px;
//     height: 44px;
//     border-radius: 50%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background: rgba(58,188,177,0.12);
//     border: 1px solid rgba(58,188,177,0.3);
//     color: var(--mint);
//     font-size: 1.2rem;
//   }

//   .tara-name {
//     font-family: 'Playfair Display', serif;
//     font-size: 1.2rem;
//     font-weight: 700;
//   }

//   .tara-label {
//     margin-top: 2px;
//     color: rgba(253,248,240,0.45);
//     font-size: 0.7rem;
//   }

//   .tara-prompt {
//     margin-bottom: 14px;
//     color: rgba(253,248,240,0.55);
//     font-size: 0.75rem;
//     font-family: 'Space Mono', monospace;
//     text-transform: uppercase;
//     letter-spacing: 0.08em;
//   }

//   .tara-options {
//     display: flex;
//     flex-direction: column;
//     gap: 10px;
//   }

//   .tara-option {
//     padding: 14px 16px;
//     border-radius: 12px;
//     background: rgba(255,255,255,0.03);
//     border: 1px solid rgba(255,255,255,0.06);
//     color: rgba(253,248,240,0.72);
//     font-size: 0.82rem;
//   }

//   .tara-note {
//     margin-top: 24px;
//     color: rgba(253,248,240,0.35);
//     font-size: 0.68rem;
//     text-align: right;
//   }

//   /* ── CTA ── */
//   .cta-section {
//     text-align: center; padding: 120px 48px;
//     background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,107,44,0.07) 0%, transparent 60%);
//     position: relative;
//   }
//   .cta-section .section-title { font-size: clamp(2.5rem, 4vw, 4rem); margin-bottom: 24px; }
//   .cta-section .section-sub   { margin: 0 auto 48px; text-align: center; }
//   .cta-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
//   .btn-large { padding: 18px 48px; font-size: 1.05rem; font-weight: 700; }

//   /* ── FOOTER ── */
//   footer {
//     padding: 48px; border-top: 1px solid rgba(255,255,255,0.06);
//     display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;
//     font-size: 0.82rem; color: rgba(253,248,240,0.35);
//   }
//   footer .logo { font-size: 1.2rem; opacity: 0.6; }
//   .footer-links { display: flex; gap: 24px; }
//   .footer-links a { color: rgba(253,248,240,0.35); text-decoration: none; transition: color 0.2s; }
//   .footer-links a:hover { color: var(--saffron); }

//   /* ── MISC ── */
//   .divider { width: 60px; height: 3px; background: var(--saffron); margin: 20px 0 0; border-radius: 2px; }

//   /* ── RESPONSIVE ── */

//   /* ── EARLY ACCESS ── */
//   .early-access-section {
//     background: #0B2424;
//     position: relative;
//     overflow: hidden;
//   }
//   .early-access-flow {
//     display: grid;
//     grid-template-columns: 0.9fr 1.1fr;
//     gap: 72px;
//     align-items: center;
//   }
//   .early-access-copy { max-width: 560px; }
//   .early-access-copy .section-sub { max-width: 510px; }
//   .early-access-points { margin-top: 38px; display: grid; gap: 16px; }
//   .early-access-points div {
//     display: flex;
//     align-items: center;
//     gap: 14px;
//     color: rgba(253,248,240,.68);
//     font-size: .86rem;
//   }
//   .early-access-points span {
//     width: 30px; height: 30px; border-radius: 50%;
//     display: inline-flex; align-items: center; justify-content: center;
//     border: 1px solid rgba(232,168,62,.35);
//     color: var(--gold); font: 700 .62rem 'Space Mono', monospace;
//     flex: 0 0 auto;
//   }
//   .early-access-panel {
//     padding: 34px;
//     border: 1px solid rgba(58,188,177,.2);
//     border-radius: 28px;
//     background: rgba(255,255,255,.035);
//     box-shadow: 0 24px 80px rgba(0,0,0,.14);
//   }
//   .early-access-progress { display: grid; gap: 18px; margin-bottom: 34px; }
//   .early-access-step-copy { display: flex; align-items: baseline; justify-content: space-between; gap: 20px; }
//   .early-access-step-copy span { color: var(--gold); font: 700 .62rem 'Space Mono', monospace; letter-spacing: .12em; }
//   .early-access-step-copy strong { color: rgba(253,248,240,.58); font-size: .76rem; font-weight: 600; }
//   .early-access-progress-bars { display: grid; grid-template-columns: repeat(2,1fr); gap: 8px; }
//   .early-access-progress-bars span { height: 3px; border-radius: 99px; background: rgba(253,248,240,.1); transition: background .2s ease; }
//   .early-access-progress-bars span.active { background: var(--saffron); }
//   .early-access-step-title { font: 700 1.25rem 'DM Sans', sans-serif; color: var(--warm-sand); margin-bottom: 24px; }
//   .early-access-field-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
//   .early-access-form-step label { display: grid; gap: 8px; }
//   .early-access-form-step label > span, .early-access-interest-label {
//     color: rgba(253,248,240,.66); font-size: .7rem; font-weight: 600; letter-spacing: .02em;
//   }
//   .early-access-form-step input, .early-access-form-step textarea {
//     width: 100%; box-sizing: border-box; border: 1px solid rgba(253,248,240,.12); border-radius: 13px;
//     background: rgba(4,24,24,.48); color: var(--warm-sand); padding: 14px 15px;
//     font: 400 .88rem 'DM Sans', sans-serif; outline: none; resize: vertical;
//     transition: border-color .2s ease, background .2s ease;
//   }
//   .early-access-form-step input:focus, .early-access-form-step textarea:focus { border-color: rgba(58,188,177,.58); background: rgba(4,24,24,.7); }
//   .early-access-form-step input::placeholder, .early-access-form-step textarea::placeholder { color: rgba(253,248,240,.3); }
//   .early-access-hint { margin-top: 14px; color: rgba(253,248,240,.35); font-size: .68rem; line-height: 1.5; }
//   .early-access-full-field { margin-top: 16px; }
//   .early-access-full-field small { color: rgba(253,248,240,.3); font-size: .62rem; font-weight: 400; }
//   .early-access-interest-label { margin-top: 22px; margin-bottom: 10px; }
//   .early-access-interest-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
//   .early-access-interest-grid button {
//     appearance: none; border: 1px solid rgba(253,248,240,.11); border-radius: 12px;
//     background: rgba(4,24,24,.32); color: rgba(253,248,240,.62); padding: 12px 13px;
//     text-align: left; font: 600 .74rem 'DM Sans', sans-serif; cursor: pointer;
//     transition: border-color .2s ease, background .2s ease, color .2s ease;
//   }
//   .early-access-interest-grid button:hover, .early-access-interest-grid button.selected {
//     border-color: rgba(58,188,177,.48); background: rgba(58,188,177,.08); color: var(--warm-sand);
//   }
//   .early-access-error { margin-top: 16px; color: #ffb7a0; font-size: .72rem; line-height: 1.45; }
//   .early-access-form-actions { margin-top: 28px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
//   .early-access-next { border: 0; cursor: pointer; text-decoration: none; }
//   .early-access-back { border: 0; background: none; color: rgba(253,248,240,.45); cursor: pointer; padding: 12px 0; font: 600 .76rem 'DM Sans', sans-serif; }
//   .early-access-success { text-align: center; padding: 18px 18px 6px; }
//   .early-access-success-mark {
//     width: 56px; height: 56px; margin: 0 auto 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
//     background: rgba(58,188,177,.1); border: 1px solid rgba(58,188,177,.3); color: var(--mint); font-size: 1.5rem;
//   }
//   .early-access-success-kicker { color: var(--gold); font: 700 .6rem 'Space Mono', monospace; letter-spacing: .14em; }
//   .early-access-success h3 { margin: 12px 0 10px; color: var(--warm-sand); font: 700 2rem 'Playfair Display', serif; }
//   .early-access-success p { max-width: 500px; margin: 0 auto; color: rgba(253,248,240,.6); font-size: .84rem; line-height: 1.7; }
//   .early-access-summary { margin: 22px auto 12px; display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; }
//   .early-access-summary span { padding: 8px 11px; border: 1px solid rgba(58,188,177,.18); border-radius: 999px; color: rgba(253,248,240,.65); font-size: .68rem; background: rgba(58,188,177,.05); }
//   .early-access-demo-note { display: block; color: rgba(253,248,240,.28); font-size: .62rem; line-height: 1.5; margin-top: 18px; }
//   @media (max-width: 900px) {
//     .tara-grid {
//       grid-template-columns: 1fr;
//       gap: 48px;
//     }
//     .early-access-card {
//       grid-template-columns: 1fr;
//       gap: 36px;
//       padding: 32px 24px;
//     }

//     .early-access-flow { grid-template-columns: 1fr; gap: 42px; }
//     .early-access-panel { padding: 26px 22px; }
//     .early-access-field-grid, .early-access-interest-grid { grid-template-columns: 1fr; }
//     .early-access-step-copy { align-items: flex-start; flex-direction: column; gap: 7px; }
//     .wt-nav { padding: 16px 24px; }
//     .hero-app-button { flex: 1; min-width: 0; justify-content: center; }
//     .wt-nav ul { display: none; }
//     .hero { grid-template-columns: 1fr; padding: 100px 24px 60px; }
//     .hero-visual { display: none; }
//     section { padding: 72px 24px; }
//     .features-grid { grid-template-columns: 1fr; }
//     .safety-grid, .host-grid { grid-template-columns: 1fr; gap: 40px; }
//     .trust-flow-card { height: auto; margin-top: 0; }
//     .verify-steps { display: flex; flex-direction: column; gap: 20px; }
//     .trust-flow-card { padding: 30px 24px; }
//     .how-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
//     .how-grid::after { display: none; }
//     footer { flex-direction: column; gap: 24px; text-align: center; align-items: center; }
//     .footer-brand, .footer-socials, .footer-apps { align-items: center; }
//     .footer-links { justify-content: center; flex-wrap: wrap; }
//     .footer-app-buttons { justify-content: center; }
//     .trips-header { flex-direction: column; align-items: flex-start; gap: 16px; }
//   }
//   /* ── LIVE TRIP ── */
//   .live-trip-section {
//     padding: 96px 48px 88px;
//     background: linear-gradient(180deg, #f5edd8 0%, #fbf5e8 100%);
//     color: var(--text-dark);
//   }
//   .live-trip-wrap { max-width: 1180px; margin: 0 auto; }
//   .live-trip-heading { display: flex; justify-content: space-between; align-items: flex-end; gap: 36px; }
//   .live-trip-kicker, .live-trip-section-title > span {
//     color: #b64b1d; font: 700 .66rem 'Space Mono', monospace; letter-spacing: .13em;
//   }
//   .live-trip-kicker { display: flex; align-items: center; gap: 9px; margin-bottom: 15px; }
//   .live-trip-dot { width: 8px; height: 8px; border-radius: 50%; background: #d85c30; box-shadow: 0 0 0 5px rgba(216,92,48,.12); }
//   .live-trip-heading h2 { color: var(--deep-teal); font: 900 clamp(2.7rem, 5.6vw, 5rem)/1.02 'Playfair Display', serif; letter-spacing: -.04em; }
//   .live-trip-heading h2 em { color: #d75e2c; }
//   .live-trip-route { margin-top: 16px; color: #37605d; font-size: 1rem; font-weight: 700; }
//   .live-trip-route span { color: #d75e2c; padding: 0 5px; }
//   .live-trip-tagline { margin-top: 13px; color: #48615c; font: italic 1.12rem 'Playfair Display', serif; }
//   .live-trip-price-card { flex: 0 0 310px; padding: 25px; background: var(--deep-teal); border: 1px solid rgba(10,61,61,.12); border-radius: 22px; color: var(--cream); box-shadow: 0 18px 44px rgba(10,61,61,.16); }
//   .live-trip-price-card > span { display: block; color: var(--gold); font: 700 .61rem 'Space Mono', monospace; letter-spacing: .12em; }
//   .live-trip-price-card strong { display: block; margin: 7px 0 3px; font: 900 2.65rem 'Playfair Display', serif; }
//   .live-trip-price-card small { display: block; color: rgba(253,248,240,.64); font-size: .72rem; line-height: 1.5; }
//   .live-trip-book, .live-trip-bottom-cta > a { display: inline-block; margin-top: 17px; padding: 12px 17px; border-radius: 999px; background: var(--saffron); color: white; text-decoration: none; font-size: .78rem; font-weight: 700; transition: transform .2s ease, box-shadow .2s ease; }
//   .live-trip-book:hover, .live-trip-bottom-cta > a:hover { transform: translateY(-2px); box-shadow: 0 8px 22px rgba(255,107,44,.3); }
//   .live-trip-facts { display: grid; grid-template-columns: repeat(4, 1fr); margin: 42px 0 68px; border: 1px solid rgba(10,61,61,.12); border-radius: 18px; overflow: hidden; background: rgba(255,255,255,.56); }
//   .live-trip-facts > div { min-height: 112px; padding: 19px 20px; display: grid; grid-template-columns: 30px 1fr; align-content: center; column-gap: 8px; border-right: 1px solid rgba(10,61,61,.1); }
//   .live-trip-facts > div:last-child { border-right: 0; }
//   .live-trip-facts > div > span { grid-row: span 2; font-size: 1.15rem; }
//   .live-trip-facts strong { color: var(--deep-teal); font-size: .79rem; }
//   .live-trip-facts small { margin-top: 5px; color: #62736e; font-size: .67rem; line-height: 1.4; }
//   .live-trip-section-title { margin-bottom: 24px; }
//   .live-trip-section-title h3 { margin-top: 8px; color: var(--deep-teal); font: 700 clamp(1.6rem, 3vw, 2.35rem) 'Playfair Display', serif; }
//   .live-trip-days { border-top: 1px solid rgba(10,61,61,.16); }
//   .live-trip-day { display: grid; grid-template-columns: 150px 1fr; gap: 26px; padding: 24px 0; border-bottom: 1px solid rgba(10,61,61,.16); }
//   .live-trip-day-date { display: flex; flex-direction: column; gap: 6px; }
//   .live-trip-day-date b { color: #bd4e22; font: 700 .76rem 'Space Mono', monospace; letter-spacing: .06em; }
//   .live-trip-day-date span { color: #75807a; font: 700 .61rem 'Space Mono', monospace; letter-spacing: .04em; }
//   .live-trip-day h4 { margin: 0 0 8px; color: var(--deep-teal); font-size: .97rem; }
//   .live-trip-day p { max-width: 850px; color: #53625d; font-size: .8rem; line-height: 1.75; }
//   .live-trip-day small { display: inline-block; margin-top: 9px; color: #46655e; font-size: .72rem; font-weight: 700; }
//   .live-trip-day p.live-trip-note { margin-top: 8px; color: #8b5a39; font-size: .7rem; font-style: italic; }
//   .live-trip-inclusions-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 46px; }
//   .live-trip-list-card { padding: 25px 27px; border: 1px solid rgba(10,61,61,.12); border-radius: 18px; background: rgba(255,255,255,.62); }
//   .live-trip-list-card h3 { margin-bottom: 14px; color: var(--deep-teal); font-size: .88rem; }
//   .live-trip-list-card ul { display: grid; gap: 10px; padding-left: 19px; color: #53625d; font-size: .74rem; line-height: 1.55; }
//   .live-trip-exclusions { background: rgba(10,61,61,.035); }
//   .live-trip-bottom-cta { margin-top: 30px; padding: 21px 24px; display: flex; align-items: center; justify-content: space-between; gap: 20px; border-radius: 18px; background: var(--deep-teal); color: var(--cream); }
//   .live-trip-bottom-cta > div { display: grid; gap: 6px; }
//   .live-trip-bottom-cta strong { font: 700 1.18rem 'Playfair Display', serif; }
//   .live-trip-bottom-cta span { color: rgba(253,248,240,.68); font-size: .72rem; }
//   .live-trip-bottom-cta > a { flex: 0 0 auto; margin: 0; }
//   .live-trip-social { margin-top: 17px; color: #68766f; text-align: center; font-size: .69rem; }
//   .live-trip-social a { color: #19645e; font-weight: 700; text-decoration: none; }
//   .live-trip-social a:hover { text-decoration: underline; }

//   @media (max-width: 900px) {
//     .live-trip-section { padding: 72px 24px; }
//     .live-trip-heading { align-items: flex-start; flex-direction: column; }
//     .live-trip-price-card { width: 100%; flex-basis: auto; }
//     .live-trip-facts { grid-template-columns: 1fr 1fr; }
//     .live-trip-facts > div:nth-child(2) { border-right: 0; }
//     .live-trip-facts > div:nth-child(-n+2) { border-bottom: 1px solid rgba(10,61,61,.1); }
//     .live-trip-day { grid-template-columns: 110px 1fr; gap: 16px; }
//     .live-trip-bottom-cta { align-items: flex-start; flex-direction: column; }
//   }
//   @media (max-width: 560px) {
//     .live-trip-section { padding: 60px 20px; }
//     .live-trip-route { font-size: .83rem; }
//     .live-trip-facts { margin: 30px 0 50px; }
//     .live-trip-facts > div { min-height: 105px; padding: 14px 10px; grid-template-columns: 24px 1fr; column-gap: 5px; }
//     .live-trip-facts strong { font-size: .69rem; }
//     .live-trip-facts small { font-size: .61rem; }
//     .live-trip-day { grid-template-columns: 1fr; gap: 10px; padding: 21px 0; }
//     .live-trip-day-date { flex-direction: row; align-items: center; gap: 10px; }
//     .live-trip-day p { font-size: .75rem; }
//     .live-trip-inclusions-grid { grid-template-columns: 1fr; }
//     .live-trip-list-card { padding: 22px 20px; }
//   }

// `



import React from 'react'
import Link from 'next/link'
import EarlyAccessFlow from '../components/EarlyAccessFlow'
const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL
const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL
const youtubeUrl = process.env.NEXT_PUBLIC_YOUTUBE_URL
const whatsappChannelUrl = process.env.NEXT_PUBLIC_WHATSAPP_CHANNEL_URL
const whatsappBusinessUrl = process.env.NEXT_PUBLIC_WHATSAPP_BUSINESS_URL

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
          <li><a href="#live-trip">Live Trip</a></li>
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
              {whatsappChannelUrl ? <a href={whatsappChannelUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp Channel"><WhatsAppIcon /></a> : <span className="hero-social-disabled" aria-label="WhatsApp channel coming later"><WhatsAppIcon /></span>}
              {whatsappBusinessUrl ? <a href={whatsappBusinessUrl} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><WhatsAppBusinessIcon /></a> : <span className="hero-social-disabled" aria-label="WhatsApp chat coming later"><WhatsAppBusinessIcon /></span>}
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

      {/* LIVE TRIP */}
      <section className="live-trip-section" id="live-trip" aria-labelledby="live-trip-title">
        <div className="live-trip-wrap">
          <div className="live-trip-heading">
            <div>
              <div className="live-trip-kicker"><span className="live-trip-dot" /> LIVE TRIP · OCTOBER 22–26, 2026</div>
              <h2 id="live-trip-title">Gokarna, Murudeshwar <em>&amp;</em> Dandeli</h2>
              <p className="live-trip-route">Hyderabad <span>→</span> Gokarna <span>→</span> Murudeshwar <span>→</span> Dandeli <span>→</span> Hyderabad</p>
              <p className="live-trip-tagline">Come as a stranger. Leave as a family.</p>
            </div>
            <div className="live-trip-price-card">
              <span>INTRODUCTORY PRICE</span>
              <strong>₹7,999</strong>
              <small>per person · 3 sightseeing days / 2 nights in Gokarna</small>
              <a href="https://wa.me/919949071607?text=Hi%20WanderTribe%2C%20I%27m%20interested%20in%20the%20Gokarna%2C%20Murudeshwar%20%26%20Dandeli%20trip%20(Oct%2022%E2%80%9326%2C%202026)." target="_blank" rel="noreferrer" className="live-trip-book">Book / Enquire on WhatsApp ↗</a>
            </div>
          </div>

          <div className="live-trip-facts" aria-label="Trip details">
            <div><span>📅</span><strong>Oct 22–26, 2026</strong><small>Depart Thursday evening</small></div>
            <div><span>📍</span><strong>Hyderabad departure</strong><small>Hyderabad to Hyderabad</small></div>
            <div><span>🚐</span><strong>AC Tempo Traveller</strong><small>Group transport</small></div>
            <div><span>🏡</span><strong>2 nights in Gokarna</strong><small>Shared accommodation</small></div>
          </div>

          <div className="live-trip-itinerary">
            <div className="live-trip-section-title"><span>THE PLAN</span><h3>Five days, one shared adventure</h3></div>
            <div className="live-trip-days">
              <article className="live-trip-day">
                <div className="live-trip-day-date"><b>DAY 0</b><span>THU · OCT 22</span></div>
                <div><h4>Hyderabad → Gokarna</h4><p>Meet your fellow travelers and set off from Hyderabad in the evening for the overnight journey to Gokarna.</p></div>
              </article>
              <article className="live-trip-day">
                <div className="live-trip-day-date"><b>DAY 1</b><span>FRI · OCT 23</span></div>
                <div><h4>Gokarna · Five-beach trek</h4><p>Arrive, freshen up and have breakfast. Trek the coastal route from Belekan → Paradise → Half Moon → Om → Kudle, with secluded beaches and sea views. Visit Jatayu Teertha for sunset if time permits. Dinner, group games and music.</p><small>🏡 Night 1 in Gokarna</small></div>
              </article>
              <article className="live-trip-day">
                <div className="live-trip-day-date"><b>DAY 2</b><span>SAT · OCT 24</span></div>
                <div><h4>Honnavar → Murudeshwar → Yana Caves</h4><p>After an early breakfast, drive to Honnavar for a short stop near the Sharavathi backwaters. Visit Murudeshwar Temple and the giant Shiva statue, have lunch en route, then explore Yana Caves and forest trails. Return to Gokarna for dinner and group activities.</p><small>🏡 Night 2 in Gokarna</small><p className="live-trip-note">A full sightseeing day; stops and timings depend on traffic, weather and access to Yana Caves.</p></div>
              </article>
              <article className="live-trip-day">
                <div className="live-trip-day-date"><b>DAY 3</b><span>SUN · OCT 25</span></div>
                <div><h4>Gokarna → Dandeli</h4><p>Visit Shri Mahabaleshwara Temple early; explore Gogarbha Cave subject to accessibility and time. After breakfast and checkout, travel to Dandeli and enjoy its natural surroundings. Optional rafting, kayaking and coracle rides may be arranged, subject to availability and river conditions. Dinner, then begin the overnight return journey.</p><small>💦 Water activities are optional and cost extra.</small></div>
              </article>
              <article className="live-trip-day">
                <div className="live-trip-day-date"><b>DAY 4</b><span>MON · OCT 26</span></div>
                <div><h4>Return to Hyderabad</h4><p>Target arrival in Hyderabad in the morning, depending on the final transport schedule.</p></div>
              </article>
            </div>
          </div>

          <div className="live-trip-inclusions-grid">
            <div className="live-trip-list-card">
              <h3>✅ Included in your trip</h3>
              <ul>
                <li>AC Tempo Traveller from Hyderabad to Hyderabad</li>
                <li>2 nights’ shared accommodation in Gokarna</li>
                <li>3 breakfasts and 2 dinners</li>
                <li>Trip coordinator throughout the journey</li>
                <li>Driver allowances, tolls and parking</li>
                {/* <li>Group games, activities and listed sightseeing</li> */}
              </ul>
            </div>
            <div className="live-trip-list-card live-trip-exclusions">
              <h3>ℹ️ Not included</h3>
              <ul>
                <li>Lunches and meals not listed above</li>
                <li>Optional Dandeli water activities</li>
                <li>Entry tickets and activity charges, where applicable</li>
                <li>Personal expenses and shopping</li>
                <li>Anything not specifically listed as included</li>
              </ul>
            </div>
          </div>

          <div className="live-trip-bottom-cta">
            <div><strong>Ready to find your tribe?</strong><span>Questions or bookings? Call / WhatsApp +91 99490 71607</span></div>
            <a href="https://wa.me/919949071607?text=Hi%20WanderTribe%2C%20I%27d%20like%20to%20book%20or%20ask%20about%20the%20Gokarna%2C%20Murudeshwar%20%26%20Dandeli%20trip." target="_blank" rel="noreferrer">Message WanderTribe ↗</a>
          </div>
          <p className="live-trip-social">More about us: <a href="https://wandertribe.co" target="_blank" rel="noreferrer">wandertribe.co</a> · <a href="https://www.instagram.com/wandertribee/" target="_blank" rel="noreferrer">@wandertribee on Instagram</a></p>
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
            {whatsappChannelUrl ? <a href={whatsappChannelUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp Channel"><WhatsAppIcon /></a> : <span className="footer-social-disabled" aria-label="WhatsApp channel coming later"><WhatsAppIcon /></span>}
            {whatsappBusinessUrl ? <a href={whatsappBusinessUrl} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><WhatsAppBusinessIcon /></a> : <span className="footer-social-disabled" aria-label="WhatsApp chat coming later"><WhatsAppBusinessIcon /></span>}
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
/** Same WhatsApp glyph, drawn inside a rounded chat-bubble badge so it reads as a distinct "direct chat" action next to the plain WhatsApp Channel icon. */
function WhatsAppBusinessIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="6" className="icon-cutout" />
      <path d="M12 5.6a6.9 6.9 0 0 0-5.9 10.42L5.4 19.4l3.5-.92A6.9 6.9 0 1 0 12 5.6Zm3.16 9.62c-.16.44-.87.82-1.21.87-.31.05-.7.07-1.13-.07a10.3 10.3 0 0 1-1-.37 8.02 8.02 0 0 1-2.98-2.64c-.28-.38-.58-.83-.6-1.32-.02-.46.13-.87.4-1.14.12-.12.27-.19.42-.19h.3c.1 0 .23-.02.35.27.13.32.44 1.1.48 1.18.04.08.06.18.01.28-.05.1-.08.16-.16.25-.08.09-.17.2-.24.27-.08.08-.16.16-.07.32.1.16.44.72.94 1.16.65.58 1.19.76 1.36.85.16.08.26.07.35-.04.1-.11.42-.49.53-.66.11-.17.21-.14.36-.09.14.06.94.44 1.1.53.16.08.27.13.31.2.04.07.04.4-.12.84Z"/>
    </svg>
  )
}
function AppleSmallIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08ZM12.03 7.25C11.88 5.02 13.69 3.18 15.77 3c.29 2.58-2.33 4.5-3.74 4.25Z"/></svg> }
function GooglePlaySmallIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.6 2.4c-.37.39-.6 1-.6 1.77v15.66c0 .77.23 1.38.6 1.77L3.7 21.7 14.42 10.98V10.9L3.7 2.3l-.1.1Z"/><path d="m17.96 14.52-3.54-3.54v-.08l3.54-3.54 4.25 2.42c1.21.69 1.21 1.63 0 2.32l-4.25 2.42Z"/><path d="m3.6 21.6 10.72-10.72 3.64 3.64-11.9 6.76c-.97.55-1.82.59-2.46.32Z"/><path d="m3.6 2.4 10.72 10.72-3.64 3.64L3.6 9.98c-.64-.37-1.05-.88-1.05-1.5 0-.62.41-1.13 1.05-1.5Z"/></svg> }

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap');

  :root {
    --saffron:   #FF6B2C;
    --saffron-2: #FF8F5C;
    --deep-teal: #0A3D3D;
    --warm-sand: #F5EDD8;
    --night:     #0C1A1A;
    --gold:      #E8A83E;
    --rose:      #D4526A;
    --mint:      #3ABCB1;
    --mint-2:    #6EE7DD;
    --cream:     #FDF8F0;
    --text-dark: #1A2E2E;
    --glass:     rgba(255,255,255,0.06);
    --ease-out:  cubic-bezier(.16,1,.3,1);
    --ease-spring: cubic-bezier(.34,1.56,.64,1);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--night);
    color: var(--cream);
    overflow-x: hidden;
    position: relative;
  }

  /* ── AMBIENT GRAIN + AURORA WASH (pure decorative, sits behind everything) ── */
  body::before {
    content: '';
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    opacity: 0.5; mix-blend-mode: overlay;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='90'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E");
  }
  body::after {
    content: '';
    position: fixed; inset: -10% -10%; z-index: 0; pointer-events: none;
    background:
      radial-gradient(38% 30% at 12% 8%, rgba(255,107,44,0.10), transparent 60%),
      radial-gradient(32% 26% at 88% 18%, rgba(58,188,177,0.10), transparent 60%),
      radial-gradient(30% 24% at 30% 92%, rgba(232,168,62,0.07), transparent 60%);
    animation: aurora-drift 22s ease-in-out infinite;
  }
  @keyframes aurora-drift {
    0%, 100% { transform: translate3d(0,0,0) scale(1); }
    50%      { transform: translate3d(-1.5%, 1.5%, 0) scale(1.05); }
  }
  nav, section, footer, #top { position: relative; z-index: 1; }

  /* ── SCROLLBAR + SELECTION ── */
  ::selection { background: var(--saffron); color: white; }
  ::-webkit-scrollbar { width: 11px; }
  ::-webkit-scrollbar-track { background: var(--night); }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, var(--saffron), var(--mint));
    border-radius: 99px; border: 2px solid var(--night);
  }
  ::-webkit-scrollbar-thumb:hover { background: linear-gradient(180deg, var(--saffron-2), var(--mint-2)); }
  a:focus-visible, button:focus-visible { outline: 2px solid var(--mint); outline-offset: 3px; border-radius: 4px; }

  /* ── REUSABLE MOTION PRIMITIVES ── */
  @keyframes shimmer-sweep { 0% { transform: translateX(-130%) skewX(-12deg); } 100% { transform: translateX(230%) skewX(-12deg); } }
  @keyframes gradient-flow { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
  @keyframes glow-pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(255,107,44,0.35); } 50% { box-shadow: 0 0 0 10px rgba(255,107,44,0); } }
  @keyframes glow-pulse-mint { 0%,100% { box-shadow: 0 0 0 0 rgba(58,188,177,0.4); } 50% { box-shadow: 0 0 0 9px rgba(58,188,177,0); } }
  @keyframes spin-slow { to { transform: rotate(360deg); } }
  @keyframes fade-rise { from { opacity: 0; transform: translateY(36px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }
  @keyframes rise-in { 0% { opacity: 0; transform: translateY(22px); } 100% { opacity: 1; transform: translateY(0); } }

  /* Entrance animation on first paint, for elements not covered by scroll-driven reveal */
  .hero-badge, .hero-title, .hero-sub, .hero-app-label, .hero-actions, .hero-socials { animation: rise-in 0.9s var(--ease-out) both; }
  .hero-title { animation-delay: .05s; }
  .hero-sub { animation-delay: .15s; }
  .hero-app-label { animation-delay: .22s; }
  .hero-actions { animation-delay: .28s; }
  .hero-socials { animation-delay: .34s; }

  /* Progressive scroll-reveal: enhances modern browsers, invisible no-op elsewhere */
  @supports (animation-timeline: view()) {
    .feature-card, .trip-tile, .safety-item, .how-step, .live-trip-day,
    .hb-item, .verify-step, .trust-badge, .host-profile-demo, .tara-card {
      animation: fade-rise 0.7s var(--ease-out) both;
      animation-timeline: view();
      animation-range: entry 0% cover 32%;
    }
  }

  /* ── NAV ── */
  .wt-nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 18px 48px;
    background: linear-gradient(180deg, rgba(12,26,26,0.92) 0%, rgba(12,26,26,0.55) 70%, transparent 100%);
    backdrop-filter: blur(16px) saturate(140%);
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }
  .logo {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem; font-weight: 900; letter-spacing: -0.5px;
    color: var(--cream);
    transition: letter-spacing .35s var(--ease-out);
  }
  .wt-nav:hover .logo { letter-spacing: 0px; }
  .logo span {
    background: linear-gradient(100deg, var(--saffron), var(--gold) 45%, var(--saffron));
    background-size: 220% auto;
    -webkit-background-clip: text; background-clip: text; color: transparent;
    animation: gradient-flow 5s ease infinite;
  }
  .wt-nav ul { display: flex; gap: 32px; list-style: none; }
  .wt-nav ul a { position: relative; color: rgba(253,248,240,0.7); text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: color 0.25s; padding-bottom: 4px; }
  .wt-nav ul a::after {
    content: ''; position: absolute; left: 0; bottom: 0; width: 100%; height: 1.5px; transform: scaleX(0); transform-origin: right;
    background: linear-gradient(90deg, var(--saffron), var(--mint)); transition: transform .3s var(--ease-out);
  }
  .wt-nav ul a:hover { color: var(--cream); }
  .wt-nav ul a:hover::after { transform: scaleX(1); transform-origin: left; }
  .nav-cta {
    position: relative; overflow: hidden;
    background: var(--saffron); color: white; border: none;
    padding: 10px 24px; border-radius: 100px;
    font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 0.9rem;
    cursor: pointer; transition: transform 0.25s var(--ease-spring), box-shadow 0.25s;
    text-decoration: none; display: inline-block;
  }
  .nav-cta::before {
    content: ''; position: absolute; top: 0; left: 0; width: 40%; height: 100%;
    background: linear-gradient(115deg, transparent, rgba(255,255,255,0.55), transparent);
  }
  .nav-cta:hover { transform: translateY(-2px) scale(1.03); box-shadow: 0 8px 24px rgba(255,107,44,0.4); }
  .nav-cta:hover::before { animation: shimmer-sweep 0.9s ease; }

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
    position: absolute; inset: -10%;
    z-index: 0;
    pointer-events: none;
    background:
      radial-gradient(ellipse 60% 80% at 70% 50%, rgba(58,188,177,0.10) 0%, transparent 60%),
      radial-gradient(ellipse 40% 60% at 20% 80%, rgba(255,107,44,0.08) 0%, transparent 50%),
      radial-gradient(ellipse 30% 40% at 85% 90%, rgba(232,168,62,0.07) 0%, transparent 55%);
    animation: aurora-drift 18s ease-in-out infinite;
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
    box-shadow: 0 0 0 0 rgba(255,107,44,0.25);
    animation: rise-in 0.9s var(--ease-out) both, glow-pulse 2.4s ease-in-out infinite;
    transition: border-color .3s;
  }
  .hero-badge:hover { border-color: rgba(255,107,44,0.6); }
  .hero-badge::before { content: '●'; font-size: 0.5rem; animation: pulse 2s infinite; }
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }

  .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(3rem, 5vw, 5.2rem);
    line-height: 1.05; font-weight: 900; letter-spacing: -2px;
    margin-bottom: 24px;
  }
  .hero-title em {
    font-style: italic;
    background: linear-gradient(100deg, var(--saffron) 10%, var(--gold) 45%, var(--saffron) 80%);
    background-size: 250% auto;
    -webkit-background-clip: text; background-clip: text; color: transparent;
    animation: gradient-flow 6s ease infinite;
  }
  .hero-title .accent-line {
    font-style: italic;
    background: linear-gradient(100deg, var(--mint) 10%, var(--mint-2) 50%, var(--mint) 90%);
    background-size: 250% auto;
    -webkit-background-clip: text; background-clip: text; color: transparent;
    animation: gradient-flow 6s ease infinite;
  }

  .hero-sub {
    font-size: 1.05rem; color: rgba(253,248,240,0.65); line-height: 1.7;
    max-width: 480px; margin-bottom: 40px; font-weight: 300;
  }

  .app-store-button {
    position: relative; overflow: hidden;
    display: flex; align-items: center; gap: 9px; min-width: 138px;
    padding: 8px 12px; border: 1px solid rgba(255,255,255,.09);
    border-radius: 12px; background: rgba(255,255,255,.025);
    color: var(--cream); text-decoration: none; transition: all .3s var(--ease-out);
  }
  .app-store-button::before {
    content: ''; position: absolute; top: 0; left: 0; width: 45%; height: 100%;
    background: linear-gradient(115deg, transparent, rgba(255,255,255,0.12), transparent);
    transform: translateX(-150%) skewX(-12deg);
  }
  .app-store-button:hover { border-color: rgba(58,188,177,.4); background: rgba(58,188,177,.07); transform: translateY(-3px); box-shadow: 0 10px 26px rgba(0,0,0,.28); }
  .app-store-button:hover::before { animation: shimmer-sweep 0.85s ease; }
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
    position: relative; overflow: hidden;
    background: linear-gradient(120deg, var(--saffron), var(--saffron-2), var(--saffron));
    background-size: 220% auto;
    color: white; border: none; padding: 16px 36px; border-radius: 100px;
    font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 1rem;
    cursor: pointer; transition: transform 0.35s var(--ease-spring), box-shadow 0.35s, background-position 0.6s;
    text-decoration: none; display: inline-block;
    box-shadow: 0 4px 24px rgba(255,107,44,0.3);
  }
  .btn-primary::before {
    content: ''; position: absolute; top: 0; left: 0; width: 40%; height: 100%;
    background: linear-gradient(115deg, transparent, rgba(255,255,255,0.5), transparent);
    transform: translateX(-150%) skewX(-12deg);
  }
  .btn-primary:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 14px 40px rgba(255,107,44,0.5); background-position: 100% 50%; }
  .btn-primary:hover::before { animation: shimmer-sweep 0.9s ease; }
  .btn-primary:active { transform: translateY(-1px) scale(0.99); }
  .btn-ghost {
    background: transparent; color: var(--cream); border: 1.5px solid rgba(253,248,240,0.2);
    padding: 15px 32px; border-radius: 100px;
    font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 1rem;
    cursor: pointer; transition: all 0.3s var(--ease-out); text-decoration: none; display: inline-block;
  }
  .btn-ghost:hover { border-color: var(--mint); color: var(--mint); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(58,188,177,0.18); }

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
  .map-glow::before {
    content: ''; position: absolute; inset: -34px; border-radius: 50%;
    border: 1px dashed rgba(232,168,62,0.22);
    animation: spin-slow 40s linear infinite;
  }
  .map-glow::after {
    content: ''; position: absolute; inset: 34px; border-radius: 50%;
    border: 1px dashed rgba(255,107,44,0.18);
    animation: spin-slow 26s linear infinite reverse;
  }
  @keyframes breathe { 0%,100%{transform:scale(1)} 50%{transform:scale(1.04)} }

  .floating-cards {
    position: relative; width: 340px; height: 480px;
  }
  .trip-card {
    position: absolute;
    background: rgba(255,255,255,0.045);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 20px; padding: 20px;
    box-shadow: 0 20px 44px rgba(0,0,0,0.28);
    animation: float linear infinite, rise-in 0.9s var(--ease-out) both;
    transition: border-color .35s, box-shadow .35s, transform .35s var(--ease-out);
  }
  .trip-card:hover {
    border-color: rgba(255,255,255,0.25);
    box-shadow: 0 26px 60px rgba(0,0,0,0.38), 0 0 0 1px rgba(255,255,255,0.06);
    z-index: 5;
    animation-play-state: paused, running;
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
  .section-title em { text-shadow: 0 0 28px currentColor; }

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
    transition: transform 0.45s var(--ease-out), border-color 0.4s, box-shadow 0.45s;
    position: relative; overflow: hidden;
  }
  .feature-card::before {
    content: ''; position: absolute; inset: 0; border-radius: inherit; padding: 1px;
    background: linear-gradient(135deg, var(--saffron), transparent 35%, transparent 65%, var(--mint));
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor; mask-composite: exclude;
    opacity: 0; transition: opacity 0.4s;
  }
  .feature-card::after {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(135deg, transparent 60%, rgba(255,107,44,0.05) 100%);
    transition: opacity 0.4s; opacity: 0;
  }
  .feature-card:hover { border-color: rgba(255,107,44,0.3); transform: translateY(-8px); box-shadow: 0 24px 50px rgba(0,0,0,0.32); }
  .feature-card:hover::after { opacity: 1; }
  .feature-card:hover::before { opacity: 1; }
  .feature-card:hover .feature-icon { transform: scale(1.12) rotate(-4deg); }
  .feature-icon {
    width: 52px; height: 52px; border-radius: 14px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.5rem; margin-bottom: 24px;
    transition: transform 0.4s var(--ease-spring);
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
    background: radial-gradient(circle, rgba(232,168,62,0.07) 0%, transparent 60%);
    animation: breathe 7s ease-in-out infinite;
  }
  .safety-section::after {
    content: '';
    position: absolute; bottom: -180px; left: -160px;
    width: 480px; height: 480px; border-radius: 50%;
    background: radial-gradient(circle, rgba(58,188,177,0.06) 0%, transparent 60%);
    animation: breathe 9s ease-in-out infinite reverse;
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
    background: linear-gradient(90deg, var(--gold), var(--saffron), var(--mint), var(--gold));
    background-size: 300% auto;
    animation: gradient-flow 5s linear infinite;
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
    transition: transform .3s var(--ease-spring), box-shadow .3s;
  }
  .verify-step:hover .step-num { transform: scale(1.15); box-shadow: 0 0 0 6px rgba(232,168,62,0.12); }
  .step-text h4 { font-size: 0.9rem; font-weight: 600; margin-bottom: 4px; }
  .step-text p  { font-size: 0.8rem; color: rgba(253,248,240,0.5); line-height: 1.5; }
  .trust-badges { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 26px; }
  .trust-badge {
    padding: 6px 14px; border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.08);
    font-size: 0.72rem; font-weight: 600; letter-spacing: 0.04em;
    color: rgba(253,248,240,0.6);
    transition: transform .25s var(--ease-out), border-color .25s, color .25s;
  }
  .trust-badge:hover { transform: translateY(-2px); border-color: rgba(232,168,62,0.35); color: var(--warm-sand); }
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
    background: linear-gradient(90deg, transparent, rgba(255,107,44,0.35), rgba(58,188,177,0.35), rgba(232,168,62,0.35), transparent);
    background-size: 200% auto;
    animation: gradient-flow 6s linear infinite;
    z-index: 0;
  }
  .how-step { text-align: center; padding: 0 24px; position: relative; z-index: 1; }
  .step-circle {
    width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 24px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.6rem; position: relative;
    border: 2px solid rgba(255,255,255,0.08);
    transition: transform .4s var(--ease-spring), border-color .4s;
  }
  .how-step:hover .step-circle { transform: scale(1.1) rotate(-6deg); border-color: rgba(255,255,255,0.22); }
  .how-step:hover .step-n { transform: scale(1.15); }
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
    transition: transform .3s var(--ease-spring);
  }
  .how-step h3 { font-family: 'Playfair Display', serif; font-size: 1.05rem; font-weight: 700; margin-bottom: 10px; }
  .how-step p  { font-size: 0.82rem; color: rgba(253,248,240,0.55); line-height: 1.65; }

  /* ── TRIPS SHOWCASE ── */
  .trips-section { overflow: hidden; }
  .trips-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 48px; }
  .trips-header-note { color: rgba(253,248,240,.38); font-size: .72rem; font-family: 'Space Mono', monospace; text-transform: uppercase; letter-spacing: .08em; }
  .trips-scroll { display: flex; gap: 24px; overflow-x: auto; padding-bottom: 16px; scrollbar-width: none; scroll-snap-type: x proximity; scroll-padding-left: 48px; }
  .trips-scroll::-webkit-scrollbar { display: none; }
  .trip-tile {
    flex-shrink: 0; width: 280px; border-radius: 24px;
    background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
    overflow: hidden; transition: transform 0.4s var(--ease-out), border-color 0.4s, box-shadow 0.4s;
    cursor: pointer; scroll-snap-align: start;
  }
  .trip-tile:hover { transform: translateY(-10px) scale(1.015); border-color: rgba(255,107,44,0.35); box-shadow: 0 26px 54px rgba(0,0,0,0.35); }
  .trip-tile:hover .trip-img { transform: scale(1.08); }
  .trip-tile:hover .trip-img-label { transform: translateY(-2px); }
  .trip-img {
    width: 100%; height: 160px;
    background-size: cover; background-position: center;
    position: relative; transition: transform 0.6s var(--ease-out);
  }
  .trip-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(0deg, rgba(12,26,26,0.8) 0%, transparent 60%);
  }
  .trip-img-label {
    position: absolute; bottom: 12px; left: 16px;
    font-family: 'Playfair Display', serif; font-size: 1.15rem; font-weight: 700;
    transition: transform 0.4s var(--ease-out);
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
    transition: margin-left 0.35s var(--ease-out);
  }
  .tiny-av:first-child { margin-left: 0; }
  .trip-tile:hover .tiny-av { margin-left: -4px; }
  .trip-tile:hover .tiny-av:first-child { margin-left: 0; }
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
    transition: transform 0.45s var(--ease-out), box-shadow 0.45s, border-color 0.45s;
  }
  .host-profile-demo:hover {
    transform: translateY(-6px);
    border-color: rgba(58,188,177,0.25);
    box-shadow: 0 30px 60px rgba(0,0,0,0.35);
  }
  .host-profile-demo:hover .host-big-av { transform: scale(1.06); }
  .hs { transition: transform 0.3s var(--ease-spring); }
  .hs:hover { transform: translateY(-3px); }
  .hs:hover .hs-n { text-shadow: 0 0 18px rgba(58,188,177,0.6); }
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
    transition: transform 0.4s var(--ease-spring);
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
    transition: transform 0.25s var(--ease-out), background 0.25s;
  }
  .o-tag:hover { transform: translateY(-2px); background: rgba(58,188,177,0.16); }
  .host-review { background: rgba(255,255,255,0.02); border-radius: 14px; padding: 16px; }
  .review-stars { color: var(--gold); font-size: 0.75rem; margin-bottom: 6px; }
  .review-text { font-size: 0.8rem; color: rgba(253,248,240,0.6); line-height: 1.6; font-style: italic; }
  .review-by   { font-size: 0.72rem; color: rgba(253,248,240,0.4); margin-top: 8px; }

  .host-benefits { display: flex; flex-direction: column; gap: 20px; }
  .hb-item { display: flex; gap: 16px; align-items: flex-start; }
  .hb-item:hover .hb-icon { transform: scale(1.12) rotate(-5deg); background: rgba(58,188,177,0.16); }
  .hb-icon {
    width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center; font-size: 1.1rem;
    background: rgba(58,188,177,0.08); border: 1px solid rgba(58,188,177,0.15);
    transition: transform 0.35s var(--ease-spring), background 0.35s;
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
    background: linear-gradient(90deg, var(--mint), var(--saffron), var(--mint));
    background-size: 300% auto;
    animation: gradient-flow 5s linear infinite;
  }
  .tara-card:hover { box-shadow: 0 30px 70px rgba(0,0,0,0.4); }
  .tara-card { transition: box-shadow 0.4s var(--ease-out); }

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
    position: relative;
    animation: glow-pulse-mint 2.6s ease-in-out infinite;
  }
  .tara-orb::before {
    content: ''; position: absolute; inset: -6px; border-radius: 50%;
    border: 1px dashed rgba(58,188,177,0.35);
    animation: spin-slow 12s linear infinite;
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
    transition: transform 0.25s var(--ease-out), border-color 0.25s, background 0.25s;
  }
  .tara-option:hover { transform: translateX(4px); border-color: rgba(58,188,177,0.3); background: rgba(58,188,177,0.06); }

  .tara-note {
    margin-top: 24px;
    color: rgba(253,248,240,0.35);
    font-size: 0.68rem;
    text-align: right;
  }

  /* ── CTA ── */
  .cta-section {
    text-align: center; padding: 120px 48px;
    background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,107,44,0.09) 0%, transparent 60%);
    position: relative; overflow: hidden;
  }
  .cta-section::before {
    content: '';
    position: absolute; inset: 0; z-index: -1;
    background: radial-gradient(ellipse 50% 50% at 50% 50%, rgba(58,188,177,0.08) 0%, transparent 65%);
    animation: breathe 6s ease-in-out infinite;
  }
  .cta-section .section-title { font-size: clamp(2.5rem, 4vw, 4rem); margin-bottom: 24px; }
  .cta-section .section-sub   { margin: 0 auto 48px; text-align: center; }
  .cta-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
  .btn-large { padding: 18px 48px; font-size: 1.05rem; font-weight: 700; animation: glow-pulse 2.4s ease-in-out infinite; }

  /* ── FOOTER ── */
  footer {
    padding: 48px; position: relative;
    display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;
    font-size: 0.82rem; color: rgba(253,248,240,0.35);
  }
  footer::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,107,44,0.35), rgba(58,188,177,0.35), transparent);
  }
  footer .logo { font-size: 1.2rem; opacity: 0.6; }
  .footer-links { display: flex; gap: 24px; }
  .footer-links a { position: relative; color: rgba(253,248,240,0.35); text-decoration: none; transition: color 0.25s; padding-bottom: 3px; }
  .footer-links a::after {
    content: ''; position: absolute; left: 0; bottom: 0; width: 100%; height: 1px; transform: scaleX(0); transform-origin: right;
    background: var(--saffron); transition: transform .3s var(--ease-out);
  }
  .footer-links a:hover { color: var(--saffron); }
  .footer-links a:hover::after { transform: scaleX(1); transform-origin: left; }

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
    position: relative; overflow: hidden;
    border: 1px solid rgba(58,188,177,.2);
    border-radius: 28px;
    background: rgba(255,255,255,.035);
    box-shadow: 0 24px 80px rgba(0,0,0,.14);
    transition: border-color .4s, box-shadow .4s;
  }
  .early-access-panel::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--mint), var(--gold), var(--saffron), var(--mint));
    background-size: 300% auto; animation: gradient-flow 6s linear infinite;
  }
  .early-access-panel:focus-within { border-color: rgba(58,188,177,.4); box-shadow: 0 24px 80px rgba(58,188,177,.12); }
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
    animation: success-pop .5s var(--ease-spring) both, glow-pulse-mint 2.4s ease-in-out .5s infinite;
  }
  @keyframes success-pop { 0% { transform: scale(0.4); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
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
  /* ── LIVE TRIP ── */
  .live-trip-section {
    padding: 96px 48px 88px;
    background:
      radial-gradient(60% 50% at 88% -6%, rgba(216,92,48,.09), transparent 60%),
      radial-gradient(55% 45% at 6% 106%, rgba(10,61,61,.07), transparent 60%),
      linear-gradient(180deg, #f5edd8 0%, #fbf5e8 100%);
    color: var(--text-dark);
    position: relative; overflow: hidden;
  }
  .live-trip-section::before {
    content: '';
    position: absolute; inset: 0; z-index: 0; pointer-events: none; opacity: .5;
    background-image: radial-gradient(rgba(10,61,61,.14) 1px, transparent 1px);
    background-size: 26px 26px;
    mask-image: radial-gradient(ellipse 70% 55% at 50% 20%, black 20%, transparent 75%);
  }
  .live-trip-wrap { max-width: 1180px; margin: 0 auto; position: relative; z-index: 1; }
  .live-trip-heading { display: flex; justify-content: space-between; align-items: flex-end; gap: 36px; }
  .live-trip-kicker, .live-trip-section-title > span {
    color: #b64b1d; font: 700 .66rem 'Space Mono', monospace; letter-spacing: .13em;
  }
  .live-trip-kicker { display: flex; align-items: center; gap: 9px; margin-bottom: 15px; animation: rise-in 0.8s var(--ease-out) both; }
  .live-trip-dot { width: 8px; height: 8px; border-radius: 50%; background: #d85c30; animation: live-dot-pulse 1.8s ease-out infinite; }
  @keyframes live-dot-pulse {
    0%   { box-shadow: 0 0 0 0 rgba(216,92,48,.4); }
    70%  { box-shadow: 0 0 0 9px rgba(216,92,48,0); }
    100% { box-shadow: 0 0 0 0 rgba(216,92,48,0); }
  }
  .live-trip-heading h2 { color: var(--deep-teal); font: 900 clamp(2.7rem, 5.6vw, 5rem)/1.02 'Playfair Display', serif; letter-spacing: -.04em; animation: rise-in 0.9s .08s var(--ease-out) both; }
  .live-trip-heading h2 em { color: #d75e2c; text-shadow: 0 0 30px rgba(215,94,44,.25); }
  .live-trip-route { animation: rise-in 0.9s .16s var(--ease-out) both; }
  .live-trip-tagline { animation: rise-in 0.9s .22s var(--ease-out) both; }
  .live-trip-price-card { animation: rise-in 0.9s .1s var(--ease-out) both; }
  .live-trip-route { margin-top: 16px; color: #37605d; font-size: 1rem; font-weight: 700; }
  .live-trip-route span { color: #d75e2c; padding: 0 5px; }
  .live-trip-tagline { margin-top: 13px; color: #48615c; font: italic 1.12rem 'Playfair Display', serif; }
  .live-trip-price-card {
    flex: 0 0 310px; padding: 25px; position: relative; overflow: hidden;
    background: linear-gradient(155deg, var(--deep-teal) 0%, #0F2E2E 100%);
    border: 1px solid rgba(10,61,61,.12); border-radius: 22px; color: var(--cream);
    box-shadow: 0 22px 50px rgba(10,61,61,.22);
    transition: transform .4s var(--ease-out), box-shadow .4s;
  }
  .live-trip-price-card:hover { transform: translateY(-4px); box-shadow: 0 28px 64px rgba(10,61,61,.3); }
  .live-trip-price-card::after {
    content: ''; position: absolute; top: 0; left: -60%; width: 40%; height: 100%;
    background: linear-gradient(115deg, transparent, rgba(255,255,255,0.09), transparent);
    animation: shimmer-sweep 3.2s ease-in-out infinite;
  }
  .live-trip-price-card > span { display: block; color: var(--gold); font: 700 .61rem 'Space Mono', monospace; letter-spacing: .12em; }
  .live-trip-price-card strong { display: block; margin: 7px 0 3px; font: 900 2.65rem 'Playfair Display', serif; text-shadow: 0 0 34px rgba(232,168,62,.35); }
  .live-trip-price-card small { display: block; color: rgba(253,248,240,.64); font-size: .72rem; line-height: 1.5; }
  .live-trip-book, .live-trip-bottom-cta > a { display: inline-block; margin-top: 17px; padding: 12px 17px; border-radius: 999px; background: var(--saffron); color: white; text-decoration: none; font-size: .78rem; font-weight: 700; transition: transform .2s ease, box-shadow .2s ease; }
  .live-trip-book:hover, .live-trip-bottom-cta > a:hover { transform: translateY(-2px); box-shadow: 0 8px 22px rgba(255,107,44,.3); }
  .live-trip-facts { display: grid; grid-template-columns: repeat(4, 1fr); margin: 42px 0 68px; border: 1px solid rgba(10,61,61,.12); border-radius: 18px; overflow: hidden; background: rgba(255,255,255,.56); animation: rise-in 0.9s .18s var(--ease-out) both; }
  .live-trip-facts > div { min-height: 112px; padding: 19px 20px; display: grid; grid-template-columns: 30px 1fr; align-content: center; column-gap: 8px; border-right: 1px solid rgba(10,61,61,.1); transition: background .25s; }
  .live-trip-facts > div:hover { background: rgba(216,92,48,.06); }
  .live-trip-facts > div > span { transition: transform .3s var(--ease-spring); }
  .live-trip-facts > div:hover > span { transform: scale(1.2) rotate(-4deg); }
  .live-trip-facts > div:last-child { border-right: 0; }
  .live-trip-facts > div > span { grid-row: span 2; font-size: 1.15rem; }
  .live-trip-facts strong { color: var(--deep-teal); font-size: .79rem; }
  .live-trip-facts small { margin-top: 5px; color: #62736e; font-size: .67rem; line-height: 1.4; }
  .live-trip-section-title { margin-bottom: 24px; }
  .live-trip-section-title h3 { margin-top: 8px; color: var(--deep-teal); font: 700 clamp(1.6rem, 3vw, 2.35rem) 'Playfair Display', serif; }
  .live-trip-days { border-top: 1px solid rgba(10,61,61,.16); }
  .live-trip-day {
    display: grid; grid-template-columns: 150px 1fr; gap: 26px; padding: 24px 20px;
    margin: 0 -20px; border-radius: 14px;
    border-bottom: 1px solid rgba(10,61,61,.16);
    transition: background .3s, transform .3s var(--ease-out);
  }
  .live-trip-day:hover { background: rgba(216,92,48,.05); transform: translateX(4px); }
  .live-trip-day:hover .live-trip-day-date b { color: #d75e2c; }
  .live-trip-day-date { display: flex; flex-direction: column; gap: 6px; }
  .live-trip-day-date b { color: #bd4e22; font: 700 .76rem 'Space Mono', monospace; letter-spacing: .06em; }
  .live-trip-day-date span { color: #75807a; font: 700 .61rem 'Space Mono', monospace; letter-spacing: .04em; }
  .live-trip-day h4 { margin: 0 0 8px; color: var(--deep-teal); font-size: .97rem; }
  .live-trip-day p { max-width: 850px; color: #53625d; font-size: .8rem; line-height: 1.75; }
  .live-trip-day small { display: inline-block; margin-top: 9px; color: #46655e; font-size: .72rem; font-weight: 700; }
  .live-trip-day p.live-trip-note { margin-top: 8px; color: #8b5a39; font-size: .7rem; font-style: italic; }
  .live-trip-inclusions-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 46px; }
  .live-trip-list-card { padding: 25px 27px; border: 1px solid rgba(10,61,61,.12); border-radius: 18px; background: rgba(255,255,255,.62); transition: transform .35s var(--ease-out), box-shadow .35s; }
  .live-trip-list-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(10,61,61,.1); }
  .live-trip-list-card h3 { margin-bottom: 14px; color: var(--deep-teal); font-size: .88rem; }
  .live-trip-list-card ul { display: grid; gap: 10px; padding-left: 19px; color: #53625d; font-size: .74rem; line-height: 1.55; }
  .live-trip-exclusions { background: rgba(10,61,61,.035); }
  .live-trip-bottom-cta {
    margin-top: 30px; padding: 21px 24px; display: flex; align-items: center; justify-content: space-between; gap: 20px;
    border-radius: 18px; background: linear-gradient(120deg, var(--deep-teal), #0F2E2E); color: var(--cream);
    box-shadow: 0 20px 46px rgba(10,61,61,.2);
    transition: transform .35s var(--ease-out), box-shadow .35s;
  }
  .live-trip-bottom-cta:hover { transform: translateY(-3px); box-shadow: 0 26px 56px rgba(10,61,61,.28); }
  .live-trip-bottom-cta > div { display: grid; gap: 6px; }
  .live-trip-bottom-cta strong { font: 700 1.18rem 'Playfair Display', serif; }
  .live-trip-bottom-cta span { color: rgba(253,248,240,.68); font-size: .72rem; }
  .live-trip-bottom-cta > a { flex: 0 0 auto; margin: 0; }
  .live-trip-social { margin-top: 17px; color: #68766f; text-align: center; font-size: .69rem; }
  .live-trip-social a { color: #19645e; font-weight: 700; text-decoration: none; }
  .live-trip-social a:hover { text-decoration: underline; }

  @media (max-width: 900px) {
    .live-trip-section { padding: 72px 24px; }
    .live-trip-heading { align-items: flex-start; flex-direction: column; }
    .live-trip-price-card { width: 100%; flex-basis: auto; }
    .live-trip-facts { grid-template-columns: 1fr 1fr; }
    .live-trip-facts > div:nth-child(2) { border-right: 0; }
    .live-trip-facts > div:nth-child(-n+2) { border-bottom: 1px solid rgba(10,61,61,.1); }
    .live-trip-day { grid-template-columns: 110px 1fr; gap: 16px; }
    .live-trip-bottom-cta { align-items: flex-start; flex-direction: column; }
  }
  @media (max-width: 560px) {
    .live-trip-section { padding: 60px 20px; }
    .live-trip-route { font-size: .83rem; }
    .live-trip-facts { margin: 30px 0 50px; }
    .live-trip-facts > div { min-height: 105px; padding: 14px 10px; grid-template-columns: 24px 1fr; column-gap: 5px; }
    .live-trip-facts strong { font-size: .69rem; }
    .live-trip-facts small { font-size: .61rem; }
    .live-trip-day { grid-template-columns: 1fr; gap: 10px; padding: 21px 0; }
    .live-trip-day-date { flex-direction: row; align-items: center; gap: 10px; }
    .live-trip-day p { font-size: .75rem; }
    .live-trip-inclusions-grid { grid-template-columns: 1fr; }
    .live-trip-list-card { padding: 22px 20px; }
  }

`