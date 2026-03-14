import { useState, useEffect } from 'react';
import { eraContent } from './eraConfig.js';

const Icons = {
  dot2000: {
    email: () => (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="5" width="24" height="18" fill="#ff6600" stroke="#ff9900" strokeWidth="1"/>
        <polyline points="2,5 14,16 26,5" fill="none" stroke="#ffcc00" strokeWidth="1.5"/>
      </svg>
    ),
    store: () => (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="10" width="24" height="16" fill="#00ccff" stroke="#0099cc" strokeWidth="1"/>
        <rect x="2" y="4" width="24" height="8" fill="#0077aa" stroke="#00ccff" strokeWidth="1"/>
        <rect x="10" y="18" width="8" height="8" fill="#003366"/>
      </svg>
    ),
    globe: () => (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="11" fill="#0033aa" stroke="#00ccff" strokeWidth="1.5"/>
        <line x1="14" y1="3" x2="14" y2="25" stroke="#00ccff" strokeWidth="1"/>
        <line x1="3" y1="14" x2="25" y2="14" stroke="#00ccff" strokeWidth="1"/>
        <ellipse cx="14" cy="14" rx="6" ry="11" fill="none" stroke="#00ccff" strokeWidth="1"/>
      </svg>
    ),
    lock: () => (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="6" y="13" width="16" height="12" fill="#ffcc00" stroke="#ff9900" strokeWidth="1.5"/>
        <path d="M9 13V9a5 5 0 0110 0v4" fill="none" stroke="#ff9900" strokeWidth="2"/>
      </svg>
    ),
  },
  dot2005: {
    wiki: () => (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#wiki05)" stroke="#2566c8" strokeWidth="1"/>
        <defs><linearGradient id="wiki05" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#6aaaf0"/><stop offset="1" stopColor="#2566c8"/></linearGradient></defs>
        <rect x="7" y="10" width="18" height="2" rx="1" fill="white" fillOpacity=".9"/>
        <rect x="7" y="15" width="14" height="2" rx="1" fill="white" fillOpacity=".7"/>
        <rect x="7" y="20" width="10" height="2" rx="1" fill="white" fillOpacity=".5"/>
      </svg>
    ),
    project: () => (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#proj05)" stroke="#e67700" strokeWidth="1"/>
        <defs><linearGradient id="proj05" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#ffb347"/><stop offset="1" stopColor="#e67700"/></linearGradient></defs>
        <rect x="7" y="8" width="18" height="3" rx="1.5" fill="white" fillOpacity=".9"/>
        <rect x="7" y="14" width="12" height="3" rx="1.5" fill="white" fillOpacity=".7"/>
        <rect x="7" y="20" width="15" height="3" rx="1.5" fill="white" fillOpacity=".5"/>
      </svg>
    ),
    share: () => (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#share05)" stroke="#228b22" strokeWidth="1"/>
        <defs><linearGradient id="share05" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#66cc66"/><stop offset="1" stopColor="#228b22"/></linearGradient></defs>
        <circle cx="23" cy="9" r="3" fill="white" fillOpacity=".9"/>
        <circle cx="9" cy="16" r="3" fill="white" fillOpacity=".9"/>
        <circle cx="23" cy="23" r="3" fill="white" fillOpacity=".9"/>
        <line x1="12" y1="14" x2="20" y2="11" stroke="white" strokeWidth="1.5" strokeOpacity=".8"/>
        <line x1="12" y1="18" x2="20" y2="21" stroke="white" strokeWidth="1.5" strokeOpacity=".8"/>
      </svg>
    ),
    rss: () => (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect width="18" height="18" rx="4" fill="#ff8c00"/>
        <circle cx="4" cy="14" r="2" fill="white"/>
        <path d="M3 9a6 6 0 016 6" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M3 5a10 10 0 0110 10" stroke="white" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  dot2010: {
    dashboard: () => (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="1" y="1" width="34" height="34" rx="8" fill="white" stroke="#ddd" strokeWidth="1"/>
        <rect x="6" y="6" width="10" height="10" rx="2" fill="#3b5998"/>
        <rect x="20" y="6" width="10" height="10" rx="2" fill="#3b5998" fillOpacity=".6"/>
        <rect x="6" y="20" width="10" height="10" rx="2" fill="#3b5998" fillOpacity=".6"/>
        <rect x="20" y="20" width="10" height="10" rx="2" fill="#3b5998" fillOpacity=".3"/>
      </svg>
    ),
    sync: () => (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="1" y="1" width="34" height="34" rx="8" fill="white" stroke="#ddd" strokeWidth="1"/>
        <path d="M10 18a8 8 0 0113.5-5.8" stroke="#3b5998" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M26 18a8 8 0 01-13.5 5.8" stroke="#3b5998" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <polyline points="21,8 23.5,12.2 27,10" fill="none" stroke="#3b5998" strokeWidth="2" strokeLinecap="round"/>
        <polyline points="15,28 12.5,23.8 9,26" fill="none" stroke="#3b5998" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    chat: () => (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="1" y="1" width="34" height="34" rx="8" fill="white" stroke="#ddd" strokeWidth="1"/>
        <rect x="6" y="8" width="24" height="16" rx="4" fill="#3b5998"/>
        <path d="M12 24l-2 4 6-4" fill="#3b5998"/>
        <rect x="10" y="14" width="4" height="2" rx="1" fill="white" fillOpacity=".8"/>
        <rect x="16" y="14" width="4" height="2" rx="1" fill="white" fillOpacity=".8"/>
        <rect x="22" y="14" width="4" height="2" rx="1" fill="white" fillOpacity=".8"/>
      </svg>
    ),
    phone: () => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect width="20" height="20" rx="5" fill="#3b5998"/>
        <rect x="5" y="2" width="10" height="16" rx="2" fill="white" fillOpacity=".2" stroke="white" strokeWidth="1"/>
        <rect x="8" y="14" width="4" height="1.5" rx=".75" fill="white" fillOpacity=".8"/>
      </svg>
    ),
  },
  dot2015: {
    github: () => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10c0-5.523-4.477-10-10-10z"/>
      </svg>
    ),
    cloud: () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e91e63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/>
      </svg>
    ),
    db: () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e91e63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    chart: () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e91e63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    twitter: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ),
    facebook: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    linkedin: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    youtube: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
      </svg>
    ),
  },
  dot2025: {
    cloud: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a3e635" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/>
      </svg>
    ),
    brain: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a3e635" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 01-4.96-.44 2.5 2.5 0 01-2.96-3.08 3 3 0 01-.34-5.58 2.5 2.5 0 014.24-3.4A2.5 2.5 0 019.5 2z"/>
        <path d="M14.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 004.96-.44 2.5 2.5 0 002.96-3.08 3 3 0 00.34-5.58 2.5 2.5 0 00-4.24-3.4A2.5 2.5 0 0014.5 2z"/>
      </svg>
    ),
    terminal: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a3e635" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5"/>
        <line x1="12" y1="19" x2="20" y2="19"/>
      </svg>
    ),
    shield: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a3e635" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    xTwitter: () => (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    github: () => (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
};

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export function Navbar({ era }) {
  const c = eraContent[era];

  const navAction = (link) => {
    const map = {
      'Products': 'section-products', 'Support': 'section-products', 'Ordering': 'section-pricing',
      'About Us': 'section-features', 'Contact': 'section-footer', 'E-Commerce': 'section-products',
      'B2B Exchange': 'section-products', 'Portal': 'section-products', 'Investors': 'section-pricing',
      'Press Room': 'section-testimonials', 'Blog': 'section-features', 'Community': 'section-testimonials',
      'Pricing': 'section-pricing', 'Sign In': 'section-pricing', 'Sign Up': 'section-pricing',
      'Solutions': 'section-features', 'About': 'section-features', 'Developers': 'section-features',
      'Company': 'section-features', 'Docs': 'section-features', 'Press': 'section-testimonials',
    };
    scrollTo(map[link] || 'section-products');
  };

  if (era === 1995) {
    return (
      <nav className="site-navbar">
        <div className="nav-logo">[ NovaTech ]</div>
        <ul className="nav-links">
          {c.navLinks.map(l => <li key={l}><span className="nav-link" onClick={() => navAction(l)}>{l}</span></li>)}
        </ul>
        <span style={{ marginLeft: 'auto', fontSize: 11, color: '#ffff00', whiteSpace: 'nowrap' }}>
          <span className="blink">*</span> ONLINE
        </span>
      </nav>
    );
  }

  if (era === 2000) {
    return (
      <nav className="site-navbar">
        <div className="nav-logo">NOVA<span style={{ color: '#00ccff' }}>TECH</span><span style={{ fontSize: 9, color: '#556677', marginLeft: 4 }}>.COM</span></div>
        <ul className="nav-links">
          {c.navLinks.map(l => <li key={l}><span className="nav-link" onClick={() => navAction(l)}>{l}</span></li>)}
        </ul>
        <span style={{ marginLeft: 'auto', fontSize: 10, color: '#445566', whiteSpace: 'nowrap' }}>
          Nasdaq: <span style={{ color: '#ff9900', fontWeight: 'bold' }}>NVTK</span> +12.4%
        </span>
      </nav>
    );
  }

  if (era === 2005) {
    return (
      <nav className="site-navbar">
        <div className="nav-logo">
          NovaTech
          <span style={{ fontSize: 9, background: '#ff9900', color: 'white', padding: '1px 6px', borderRadius: 8, marginLeft: 6, verticalAlign: 'middle' }}>BETA</span>
        </div>
        <ul className="nav-links">
          {c.navLinks.map(l => <li key={l}><span className="nav-link" onClick={() => navAction(l)}>{l}</span></li>)}
        </ul>
        <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Icons.dot2005.rss />
        </span>
      </nav>
    );
  }

  if (era === 2010) {
    return (
      <nav className="site-navbar">
        <div className="nav-logo">NovaTech</div>
        <ul className="nav-links">
          {c.navLinks.map(l => <li key={l}><span className="nav-link" onClick={() => navAction(l)}>{l}</span></li>)}
        </ul>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
          <button className="social-btn fb" style={{ fontSize: 11, padding: '3px 8px', display: 'flex', alignItems: 'center', gap: 3 }}>
            <Icons.dot2010.phone /> App
          </button>
        </div>
      </nav>
    );
  }

  if (era === 2015) {
    return (
      <nav className="site-navbar">
        <div className="nav-logo">NOVATECH</div>
        <ul className="nav-links">
          {c.navLinks.map(l => <li key={l}><span className="nav-link" onClick={() => navAction(l)}>{l}</span></li>)}
        </ul>
        <div className="hamburger" style={{ display: 'flex', marginLeft: 8 }}>
          <span /><span /><span />
        </div>
      </nav>
    );
  }

  return (
    <nav className="site-navbar">
      <div className="nav-logo">Nova<span className="nav-logo-dot">.</span>Tech</div>
      <ul className="nav-links">
        {c.navLinks.map(l => <li key={l}><span className="nav-link" onClick={() => navAction(l)}>{l}</span></li>)}
      </ul>
      <button className="nav-cta" onClick={() => scrollTo('section-pricing')}>Get started →</button>
    </nav>
  );
}

export function Hero({ era }) {
  const c = eraContent[era];

  if (era === 1995) {
    return (
      <div className="site-hero">
        <div style={{ fontFamily: 'Courier New', fontSize: 11, color: '#808080', marginBottom: 8 }}>
          &lt;!-- NovaTech Software Inc. — Est. 1992 — webmaster@novatech.com --&gt;
        </div>
        <div style={{ fontSize: 14, color: '#000080', fontWeight: 'bold', marginBottom: 4 }}>
          *** WELCOME TO NOVATECH SOFTWARE ***
        </div>
        <hr style={{ border: '1px solid #000080', marginBottom: 16 }} />
        <h1 className="hero-headline">{c.heroHeadline}</h1>
        <p className="hero-sub">{c.heroSub}</p>
        <div style={{ margin: '16px 0' }}>
          <button className="btn-primary" onClick={() => scrollTo('section-products')}>{c.heroCta}</button>
        </div>
        <hr style={{ border: '1px dashed #808080', margin: '16px 0' }} />
        <div className="hit-counter">VISITORS: 0 0 2 4 8 9 7</div>
        <div style={{ marginTop: 10, fontSize: 11, color: '#808080' }}>
          This page is <span className="blink" style={{ color: '#ff0000' }}>BEST VIEWED</span> in Netscape Navigator 2.0 or Microsoft Internet Explorer 3.0 at 800x600 resolution.
        </div>
      </div>
    );
  }

  if (era === 2000) {
    return (
      <div className="site-hero">
        <div className="ticker-wrap">
          <div className="ticker-inner">
            NVTK +12.4% &nbsp;|&nbsp; DOW +1.2% &nbsp;|&nbsp; NASDAQ +3.8% &nbsp;|&nbsp;
            NovaTech.com IPO — Q2 2001 &nbsp;|&nbsp; 3,000,000 USERS SERVED &nbsp;|&nbsp;
            NEW: NovaStore Builder 2.0 LAUNCHED &nbsp;|&nbsp; NVTK +12.4% &nbsp;|&nbsp; DOW +1.2%
          </div>
        </div>
        <div style={{ fontSize: 12, color: '#00ccff', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 16 }}>
          &gt;&gt; WELCOME TO THE FUTURE OF BUSINESS &lt;&lt;
        </div>
        <h1 className="hero-headline">{c.heroHeadline}</h1>
        <p className="hero-sub">{c.heroSub}</p>
        <button className="btn-primary" onClick={() => scrollTo('section-products')}>{c.heroCta}</button>
        <div style={{ marginTop: 24, fontSize: 11, color: '#334455', letterSpacing: 2 }}>
          &gt; FEATURED ON CNN.COM &nbsp; | &nbsp; FORBES BEST OF THE WEB 2000 &nbsp; | &nbsp; WEBBY AWARD WINNER &lt;
        </div>
        <div style={{ marginTop: 8, fontSize: 10, color: '#223344' }}>
          This site requires Macromedia Flash Player 4 or higher. &nbsp;
          <span style={{ color: '#00ccff', textDecoration: 'underline', cursor: 'pointer' }}>Download Flash Player →</span>
        </div>
      </div>
    );
  }

  if (era === 2005) {
    return (
      <div className="site-hero">
        <div className="hero-badge">
          <Icons.dot2005.rss /> &nbsp; New: Ajax-powered project boards — now in beta!
        </div>
        <h1 className="hero-headline">{c.heroHeadline}</h1>
        <p className="hero-sub">{c.heroSub}</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          <button className="btn-primary" onClick={() => scrollTo('section-products')}>{c.heroCta}</button>
          <button className="btn-secondary" onClick={() => scrollTo('section-features')}>Watch Screencast</button>
        </div>
        <div style={{ marginTop: 20, fontSize: 12, color: '#88aacc' }}>
          As seen on: TechCrunch &nbsp;·&nbsp; Digg &nbsp;·&nbsp; del.icio.us &nbsp;·&nbsp; Slashdot &nbsp;·&nbsp; Lifehacker
        </div>
      </div>
    );
  }

  if (era === 2010) {
    return (
      <div className="site-hero">
        <h1 className="hero-headline">{c.heroHeadline}</h1>
        <p className="hero-sub">{c.heroSub}</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn-primary" onClick={() => scrollTo('section-products')}>{c.heroCta}</button>
          <button className="btn-secondary" onClick={() => scrollTo('section-features')}>Watch Video</button>
        </div>
        <div style={{ marginTop: 24, display: 'flex', justifyContent: 'center', gap: 12, alignItems: 'center' }}>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>Available on:</span>
          <span style={{ background: 'rgba(255,255,255,0.15)', color: 'white', fontSize: 11, padding: '4px 12px', borderRadius: 4, fontWeight: 'bold' }}>App Store</span>
          <span style={{ background: 'rgba(255,255,255,0.15)', color: 'white', fontSize: 11, padding: '4px 12px', borderRadius: 4, fontWeight: 'bold' }}>Android Market</span>
        </div>
      </div>
    );
  }

  if (era === 2015) {
    return (
      <div className="site-hero">
        <h1 className="hero-headline">{c.heroHeadline.toUpperCase()}</h1>
        <p className="hero-sub">{c.heroSub}</p>
        <button className="btn-primary" onClick={() => scrollTo('section-products')}>{c.heroCta}</button>
      </div>
    );
  }

  return (
    <div className="site-hero">
      <div className="hero-tag">Introducing NovaIntelligence 3.0</div>
      <h1 className="hero-headline">
        {c.heroHeadline.split(' ').slice(0, 3).join(' ')}<br />
        <em>{c.heroHeadline.split(' ').slice(3).join(' ')}</em>
      </h1>
      <p className="hero-sub">{c.heroSub}</p>
      <div className="hero-actions">
        <button className="btn-primary" onClick={() => scrollTo('section-products')}>{c.heroCta}</button>
        <button className="btn-ghost" onClick={() => scrollTo('section-features')}>See how it works</button>
      </div>
    </div>
  );
}

export function Products({ era }) {
  const c = eraContent[era];
  const icons2000 = [Icons.dot2000.store, Icons.dot2000.email, Icons.dot2000.globe];
  const icons2005 = [Icons.dot2005.wiki, Icons.dot2005.project, Icons.dot2005.share];
  const icons2010 = [Icons.dot2010.dashboard, Icons.dot2010.sync, Icons.dot2010.chat];
  const icons2015 = [Icons.dot2015.cloud, Icons.dot2015.db, Icons.dot2015.chart];
  const icons2025 = [Icons.dot2025.cloud, Icons.dot2025.brain, Icons.dot2025.terminal];

  if (era === 1995) {
    return (
      <div id="section-products" className="section-wrap">
        <div className="section-title">:: Our Software Products ::</div>
        <div className="product-grid">
          {c.products.map(p => (
            <div key={p.name} className="product-card">
              <div style={{ fontWeight: 'bold', fontSize: 14, marginBottom: 6, color: '#000080', fontFamily: 'Impact, sans-serif' }}>{p.name}</div>
              <div style={{ fontSize: 12, lineHeight: 1.7, marginBottom: 10, borderTop: '1px solid #808080', paddingTop: 6 }}>{p.desc}</div>
              <button className="btn-secondary">{p.cta}</button>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 11, color: '#808080', marginTop: 10, borderTop: '1px dashed #808080', paddingTop: 8 }}>
          * All prices in USD. Shipping and handling not included. Allow 3-5 business days for delivery.
        </div>
      </div>
    );
  }

  if (era === 2000) {
    return (
      <div id="section-products" className="section-wrap">
        <div className="section-title">OUR PRODUCTS &amp; SERVICES</div>
        <div className="product-grid">
          {c.products.map((p, i) => { const Icon = icons2000[i]; return (
            <div key={p.name} className="product-card">
              <div style={{ marginBottom: 10 }}><Icon /></div>
              <div className="product-name" style={{ color: '#ff9900', fontFamily: 'Impact, sans-serif', letterSpacing: 1 }}>{p.name.toUpperCase()}</div>
              <div className="product-desc" style={{ color: '#aaccff', fontSize: 12, lineHeight: 1.7 }}>{p.desc}</div>
              <button className="btn-secondary">{p.cta}</button>
            </div>
          ); })}
        </div>
      </div>
    );
  }

  if (era === 2005) {
    return (
      <div id="section-products" className="section-wrap">
        <div className="section-title">Our Products</div>
        <div className="product-grid">
          {c.products.map((p, i) => { const Icon = icons2005[i]; return (
            <div key={p.name} className="product-card">
              <div style={{ marginBottom: 12 }}><Icon /></div>
              <div className="product-name" style={{ color: '#1a3a6e', fontFamily: 'Georgia, serif' }}>{p.name}</div>
              <div className="product-desc" style={{ color: '#445577' }}>{p.desc}</div>
              <button className="btn-secondary">{p.cta}</button>
            </div>
          ); })}
        </div>
      </div>
    );
  }

  if (era === 2010) {
    return (
      <div id="section-products" className="section-wrap">
        <div className="section-title">Our Products</div>
        <div className="product-grid">
          {c.products.map((p, i) => { const Icon = icons2010[i]; return (
            <div key={p.name} className="product-card">
              <div style={{ marginBottom: 12 }}><Icon /></div>
              <div className="product-name">{p.name}</div>
              <div className="product-desc" style={{ color: '#555', fontSize: 13 }}>{p.desc}</div>
              <button className="btn-secondary">{p.cta}</button>
            </div>
          ); })}
        </div>
      </div>
    );
  }

  if (era === 2015) {
    return (
      <div id="section-products" className="section-wrap alt">
        <div className="section-title">OUR PRODUCTS</div>
        <div className="section-subtitle">Everything your engineering team needs</div>
        <div className="product-grid">
          {c.products.map((p, i) => { const Icon = icons2015[i]; return (
            <div key={p.name} className="product-card">
              <div style={{ marginBottom: 14, padding: 8, background: 'rgba(233,30,99,0.05)', display: 'inline-block', borderRadius: 2 }}><Icon /></div>
              <div className="product-name" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>{p.name}</div>
              <div className="product-desc" style={{ color: '#757575' }}>{p.desc}</div>
              <button className="btn-secondary">{p.cta}</button>
            </div>
          ); })}
        </div>
      </div>
    );
  }

  return (
    <div id="section-products" style={{ padding: '96px 40px', maxWidth: 1200, margin: '0 auto', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="section-label">Products</div>
      <h2 className="section-title" style={{ marginBottom: 48 }}>Everything you need<br />to ship faster</h2>
      <div className="product-grid">
        {c.products.map((p, i) => { const Icon = icons2025[i]; return (
          <div key={p.name} className="product-card">
            <div className="product-icon"><Icon /></div>
            <div style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 10, letterSpacing: '-0.3px' }}>{p.name}</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.65, marginBottom: 24 }}>{p.desc}</div>
            <button className="btn-secondary">{p.cta}</button>
          </div>
        ); })}
      </div>
    </div>
  );
}

export function Features({ era }) {
  const c = eraContent[era];

  if (era === 1995) {
    return (
      <div id="section-features" className="section-wrap" style={{ background: '#f0f0f0' }}>
        <div className="section-title">:: Why Choose NovaTech? ::</div>
        <ul className="features-list">
          {c.features.map(f => <li key={f.title}><b>&gt; {f.title}:</b> {f.desc}</li>)}
        </ul>
      </div>
    );
  }

  if (era === 2000) {
    const fIcons = [Icons.dot2000.lock, Icons.dot2000.globe, Icons.dot2000.globe, Icons.dot2000.lock];
    return (
      <div id="section-features" className="section-wrap">
        <div className="section-title">WHY NOVATECH.COM?</div>
        <ul className="features-list">
          {c.features.map((f, i) => { const Icon = fIcons[i]; return (
            <li key={f.title}>
              <Icon />
              <div>
                <div style={{ color: '#ff9900', fontWeight: 'bold', fontSize: 13, fontFamily: 'Impact, sans-serif', letterSpacing: 1 }}>{f.title.toUpperCase()}</div>
                <div style={{ fontSize: 12, color: '#8899bb', marginTop: 4 }}>{f.desc}</div>
              </div>
            </li>
          ); })}
        </ul>
      </div>
    );
  }

  if (era === 2005) {
    const fIcons = [Icons.dot2005.wiki, Icons.dot2005.rss, Icons.dot2005.share, Icons.dot2005.project];
    return (
      <div id="section-features" className="section-wrap" style={{ background: 'linear-gradient(180deg,#e8f4fd,#f8fbff)' }}>
        <div className="section-title">Why NovaTech?</div>
        <ul className="features-list">
          {c.features.map((f, i) => { const Icon = fIcons[i]; return (
            <li key={f.title}>
              <span style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}><Icon /></span>
              <div style={{ fontWeight: 'bold', fontSize: 14, color: '#1a3a6e', fontFamily: 'Georgia, serif' }}>{f.title}</div>
              <div style={{ fontSize: 12, color: '#556688', marginTop: 4, lineHeight: 1.6 }}>{f.desc}</div>
            </li>
          ); })}
        </ul>
      </div>
    );
  }

  if (era === 2010) {
    const fIcons = [<Icons.dot2010.phone />, <Icons.dot2010.sync />, <Icons.dot2010.chat />, <Icons.dot2010.dashboard />];
    return (
      <div id="section-features" className="section-wrap">
        <div className="section-title">Why NovaTech?</div>
        <ul className="features-list">
          {c.features.map((f, i) => (
            <li key={f.title}>
              <span style={{ display: 'flex' }}>{fIcons[i]}</span>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: 14 }}>{f.title}</div>
                <div style={{ fontSize: 13, color: '#555', marginTop: 4, lineHeight: 1.6 }}>{f.desc}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (era === 2015) {
    const fIcons = [<Icons.dot2015.github />, <Icons.dot2015.cloud />, <Icons.dot2015.chart />, <Icons.dot2015.db />];
    return (
      <div id="section-features" className="section-wrap">
        <div className="section-title">WHY NOVATECH?</div>
        <div className="section-subtitle">Built for developer velocity</div>
        <ul className="features-list">
          {c.features.map((f, i) => (
            <li key={f.title}>
              <div style={{ color: '#e91e63', fontSize: 24, marginBottom: 8 }}>{fIcons[i]}</div>
              <div style={{ fontWeight: 700, fontSize: 14, fontFamily: 'Montserrat, sans-serif' }}>{f.title}</div>
              <div style={{ fontSize: 13, color: '#757575', marginTop: 6, lineHeight: 1.6 }}>{f.desc}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const fIcons = [<Icons.dot2025.brain />, <Icons.dot2025.cloud />, <Icons.dot2025.terminal />, <Icons.dot2025.shield />];
  return (
    <div id="section-features" style={{ padding: '96px 40px', maxWidth: 1200, margin: '0 auto', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="section-label">Why NovaTech</div>
      <h2 className="section-title">The platform teams<br />actually love</h2>
      <p className="section-sub">Four pillars. Zero compromise.</p>
      <ul className="features-list">
        {c.features.map((f, i) => (
          <li key={f.title}>
            <div className="feat-icon">{fIcons[i]}</div>
            <div className="feat-title">{f.title}</div>
            <div className="feat-desc">{f.desc}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Testimonials({ era }) {
  const c = eraContent[era];

  if (era === 1995) {
    return (
      <div id="section-testimonials" className="section-wrap">
        <div className="section-title">:: What Our Customers Say ::</div>
        <div style={{ fontSize: 11, color: '#808080', marginBottom: 12 }}>
          [ Guestbook — 47 entries — <span style={{ color: '#0000ff', textDecoration: 'underline', cursor: 'pointer' }}>Sign our guestbook!</span> ]
        </div>
        {c.testimonials.map(t => (
          <div key={t.name} className="testimonial-block">
            <div style={{ fontSize: 13 }}>"{t.quote}"</div>
            <div style={{ marginTop: 8, fontSize: 12, fontStyle: 'normal', fontWeight: 'bold' }}>— {t.name}, {t.title}</div>
          </div>
        ))}
      </div>
    );
  }

  if (era === 2000) {
    return (
      <div id="section-testimonials" className="section-wrap">
        <div className="section-title">SUCCESS STORIES</div>
        {c.testimonials.map(t => (
          <div key={t.name} className="testimonial-block">
            <div style={{ fontSize: 13 }}>"{t.quote}"</div>
            <div style={{ marginTop: 8, color: '#ff9900', fontStyle: 'normal', fontWeight: 'bold', fontSize: 12, fontFamily: 'Impact, sans-serif', letterSpacing: 1 }}>
              — {t.name.toUpperCase()} | {t.title.toUpperCase()}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (era === 2005) {
    return (
      <div id="section-testimonials" className="section-wrap">
        <div className="section-title">What the Blogosphere Says</div>
        {c.testimonials.map(t => (
          <div key={t.name} className="testimonial-block">
            <div style={{ fontSize: 24, color: '#2566c8', lineHeight: 1 }}>"</div>
            <div style={{ fontSize: 14 }}>{t.quote}</div>
            <div style={{ marginTop: 10, fontStyle: 'normal' }}>
              <span style={{ fontWeight: 'bold', color: '#1a3a6e', fontFamily: 'Georgia, serif' }}>{t.name}</span>
              <span style={{ color: '#556688', fontSize: 12 }}> · {t.title}</span>
            </div>
          </div>
        ))}
        <div style={{ fontSize: 11, color: '#556688', marginTop: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
          <Icons.dot2005.rss /> Subscribe to customer stories via RSS
        </div>
      </div>
    );
  }

  if (era === 2010) {
    return (
      <div id="section-testimonials" className="section-wrap">
        <div className="section-title">What People Are Saying</div>
        {c.testimonials.map(t => (
          <div key={t.name} className="testimonial-block">
            <div style={{ fontSize: 22, color: '#3b5998', lineHeight: 1 }}>"</div>
            <div style={{ fontSize: 14, lineHeight: 1.6 }}>{t.quote}</div>
            <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 10, fontStyle: 'normal' }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg,#5b7dcc,#3b5998)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 14, fontWeight: 'bold', flexShrink: 0 }}>{t.name[0]}</div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: 13 }}>{t.name}</div>
                <div style={{ fontSize: 12, color: '#666' }}>{t.title}</div>
              </div>
              <div style={{ marginLeft: 'auto' }}>
                <button className="social-btn fb" style={{ fontSize: 10, padding: '2px 8px' }}>Like</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (era === 2015) {
    return (
      <div id="section-testimonials" className="section-wrap alt">
        <div className="section-title">WHAT PEOPLE SAY</div>
        <div className="section-subtitle">Trusted by teams at leading companies</div>
        {c.testimonials.map(t => (
          <div key={t.name} className="testimonial-block">
            <div style={{ fontSize: 14, lineHeight: 1.7 }}>{t.quote}</div>
            <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 12, fontStyle: 'normal' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#e91e63', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 15, fontWeight: 700, flexShrink: 0 }}>{t.name[0]}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, fontFamily: 'Montserrat, sans-serif' }}>{t.name}</div>
                <div style={{ fontSize: 12, color: '#9e9e9e' }}>{t.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div id="section-testimonials" style={{ padding: '96px 40px', maxWidth: 1200, margin: '0 auto', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="section-label">Social Proof</div>
      <h2 className="section-title" style={{ marginBottom: 48 }}>Loved by teams<br />everywhere</h2>
      <div className="testimonial-grid">
        {c.testimonials.map(t => (
          <div key={t.name} className="testimonial-block">
            <div style={{ fontSize: 24, color: '#a3e635', lineHeight: 1, marginBottom: 14 }}>"</div>
            <div className="testimonial-quote">{t.quote}</div>
            <div className="testimonial-author">
              <span style={{ color: 'rgba(255,255,255,0.6)' }}>{t.name}</span>
              <span style={{ color: 'rgba(255,255,255,0.25)' }}> · {t.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Pricing({ era }) {
  const c = eraContent[era];

  if (era === 1995) {
    return (
      <div id="section-pricing" className="section-wrap">
        <div className="section-title">:: Pricing &amp; Ordering ::</div>
        <table className="pricing-table">
          <thead>
            <tr><th>License Type</th><th>Price (USD)</th><th>Includes</th><th>Order</th></tr>
          </thead>
          <tbody>
            {c.plans.map(p => (
              <tr key={p.name} className={p.highlight ? 'pricing-highlight' : ''}>
                <td><b>{p.name}</b>{p.highlight ? ' ★ BEST VALUE' : ''}</td>
                <td><b>{p.price}</b></td>
                <td style={{ textAlign: 'left', fontSize: 11 }}>{p.features.join(' · ')}</td>
                <td><button className="btn-secondary">[ Order by Phone ]</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ fontSize: 11, color: '#808080', marginTop: 8 }}>
          To order: Call 1-800-NOVATECH · Fax: (617) 555-0199 · Check, VISA, and MasterCard accepted. Allow 3-5 business days.
        </div>
      </div>
    );
  }

  if (era === 2000) {
    return (
      <div id="section-pricing" className="section-wrap">
        <div className="section-title">PRICING &amp; PLANS</div>
        <table className="pricing-table">
          <thead>
            <tr><th>PLAN</th><th>PRICE</th><th>WHAT YOU GET</th><th>SIGN UP</th></tr>
          </thead>
          <tbody>
            {c.plans.map(p => (
              <tr key={p.name} className={p.highlight ? 'pricing-highlight' : ''}>
                <td style={{ fontWeight: 'bold', color: p.highlight ? '#ffcc00' : '#ccddff', fontFamily: 'Impact, sans-serif', letterSpacing: 1 }}>{p.name.toUpperCase()}</td>
                <td>
                  <span style={{ color: '#ff6600', fontWeight: 'bold', fontSize: 18 }}>{p.price}</span>
                  <span style={{ fontSize: 11, color: '#667799' }}>{p.period}</span>
                </td>
                <td style={{ textAlign: 'left', fontSize: 11, color: '#aaccff' }}>{p.features.join(' | ')}</td>
                <td><button className="btn-secondary">JOIN NOW &gt;&gt;</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ fontSize: 10, color: '#334455', marginTop: 10 }}>
          * All plans include 30-day money-back guarantee. Credit card billed monthly. Cancel anytime online.
        </div>
      </div>
    );
  }

  if (era === 2005) {
    return (
      <div id="section-pricing" className="section-wrap">
        <div className="section-title">Simple Pricing</div>
        <div className="pricing-grid">
          {c.plans.map(p => (
            <div key={p.name} className={`pricing-card${p.highlight ? ' highlight' : ''}`}>
              {p.highlight && <div style={{ fontSize: 10, background: '#ff9900', color: 'white', padding: '2px 8px', borderRadius: 10, display: 'inline-block', marginBottom: 8 }}>MOST POPULAR</div>}
              <div className="plan-name" style={{ color: p.highlight ? 'rgba(255,255,255,0.7)' : '#445577' }}>{p.name}</div>
              <div className="price-big" style={{ color: p.highlight ? '#fff' : '#1a3a6e', fontFamily: 'Georgia, serif' }}>{p.price}</div>
              <div style={{ color: p.highlight ? 'rgba(255,255,255,0.6)' : '#556688', fontSize: 13, marginBottom: 16 }}>{p.period || 'one-time'}</div>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: 20 }}>
                {p.features.map(f => <li key={f} style={{ padding: '5px 0', borderBottom: '1px solid rgba(128,160,200,0.2)', fontSize: 13, color: p.highlight ? 'rgba(255,255,255,0.85)' : '#445577' }}>✓ {f}</li>)}
              </ul>
              <button className={p.highlight ? 'btn-primary' : 'btn-secondary'}>{p.highlight ? 'Start Free Trial' : 'Sign Up Free'}</button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (era === 2010) {
    return (
      <div id="section-pricing" className="section-wrap">
        <div className="section-title">Simple, Honest Pricing</div>
        <div className="pricing-grid">
          {c.plans.map(p => (
            <div key={p.name} className={`pricing-card${p.highlight ? ' highlight' : ''}`}>
              {p.highlight && <div style={{ fontSize: 11, background: '#3b5998', color: 'white', padding: '3px 10px', borderRadius: 3, display: 'inline-block', marginBottom: 10, fontWeight: 'bold' }}>MOST POPULAR</div>}
              <div className="plan-name" style={{ color: p.highlight ? 'rgba(255,255,255,0.7)' : '#666' }}>{p.name}</div>
              <div className="price-big" style={{ color: p.highlight ? '#fff' : '#1c1e21' }}>{p.price}</div>
              <div style={{ fontSize: 13, color: p.highlight ? 'rgba(255,255,255,0.6)' : '#666', marginBottom: 16 }}>{p.period}</div>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: 20 }}>
                {p.features.map(f => <li key={f} style={{ padding: '6px 0', borderBottom: '1px solid rgba(128,128,128,0.15)', fontSize: 13, color: p.highlight ? 'rgba(255,255,255,0.85)' : '#333' }}>✓ {f}</li>)}
              </ul>
              <button style={p.highlight ? { background: 'white', color: '#3b5998', border: 'none', padding: '10px 24px', fontWeight: 'bold', borderRadius: 5, cursor: 'pointer', width: '100%' } : {}} className={p.highlight ? '' : 'btn-secondary'}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (era === 2015) {
    return (
      <div id="section-pricing" className="section-wrap">
        <div className="section-title">PRICING</div>
        <div className="section-subtitle">No setup fees. No contracts. Cancel anytime.</div>
        <div className="pricing-grid">
          {c.plans.map(p => (
            <div key={p.name} className={`pricing-card${p.highlight ? ' highlight' : ''}`}>
              {p.highlight && <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 10, color: 'rgba(255,255,255,0.7)' }}>★ RECOMMENDED</div>}
              <div className="plan-name" style={{ color: p.highlight ? 'rgba(255,255,255,0.7)' : '#9e9e9e', textTransform: 'uppercase', letterSpacing: 1 }}>{p.name}</div>
              <div className="price-big" style={{ color: p.highlight ? '#fff' : '#212121', fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}>{p.price}</div>
              <div style={{ fontSize: 13, color: p.highlight ? 'rgba(255,255,255,0.6)' : '#9e9e9e', marginBottom: 20 }}>{p.period || 'contact us'}</div>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: 24 }}>
                {p.features.map(f => <li key={f} style={{ padding: '8px 0', borderBottom: '1px solid rgba(128,128,128,0.1)', fontSize: 13, color: p.highlight ? 'rgba(255,255,255,0.85)' : '#424242' }}>✓ {f}</li>)}
              </ul>
              <button style={p.highlight ? { background: 'white', color: '#e91e63', border: 'none', padding: '12px 24px', fontWeight: 700, borderRadius: 2, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: 1, width: '100%' } : { width: '100%' }} className={p.highlight ? '' : 'btn-secondary'}>
                {p.name === 'Enterprise' ? 'CONTACT SALES' : 'GET STARTED'}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div id="section-pricing" style={{ padding: '96px 40px', maxWidth: 1200, margin: '0 auto', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="section-label">Pricing</div>
      <h2 className="section-title" style={{ marginBottom: 12 }}>Simple, honest pricing</h2>
      <p className="section-sub">No hidden fees. No contracts. Cancel anytime.</p>
      <div className="pricing-grid">
        {c.plans.map(p => (
          <div key={p.name} className={`pricing-card${p.highlight ? ' highlight' : ''}`}>
            {p.highlight && <div style={{ fontSize: 10, fontWeight: 700, color: '#a3e635', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>● Most Popular</div>}
            <div className="plan-name" style={{ color: 'rgba(255,255,255,0.35)', marginBottom: 16 }}>{p.name}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 24 }}>
              <span className="price-big" style={{ color: '#fff', fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-2px' }}>{p.price}</span>
              <span className="price-period">{p.period}</span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {p.features.map(f => <li key={f} style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', display: 'flex', gap: 8, alignItems: 'flex-start' }}><span style={{ color: '#a3e635', fontSize: 10, marginTop: 3, flexShrink: 0 }}>✓</span> {f}</li>)}
            </ul>
            <button className={p.highlight ? 'btn-primary' : 'btn-secondary'} style={{ width: '100%' }}>
              {p.name === 'Enterprise' ? 'Contact sales →' : 'Get started →'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Footer({ era }) {
  const c = eraContent[era];
  const yr = c.year;

  if (era === 1995) {
    return (
      <footer id="section-footer" className="site-footer">
        <div style={{ marginBottom: 8, color: '#ffff00' }}>[ NovaTech Software Inc. ]</div>
        <div style={{ marginBottom: 8 }}>
          <span style={{ color: '#00ffff', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => scrollTo('section-products')}>Products</span>
          {' · '}
          <span style={{ color: '#00ffff', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => scrollTo('section-features')}>Support</span>
          {' · '}
          <span style={{ color: '#00ffff', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => scrollTo('section-pricing')}>Ordering</span>
          {' · '}
          <span style={{ color: '#00ffff', textDecoration: 'underline', cursor: 'pointer' }}>About Us</span>
        </div>
        <div><span className="blink">*</span> Copyright © 1995 NovaTech Software Inc. All Rights Reserved.</div>
        <div style={{ marginTop: 6, fontSize: 10, color: '#808080' }}>
          NovaTech Software Inc. · 125 Cambridge Street, Suite 400 · Boston, MA 02114<br />
          Tel: (617) 555-0100 · Fax: (617) 555-0199 · webmaster@novatech.com
        </div>
        <div style={{ marginTop: 8, fontSize: 10, color: '#606060' }}>
          This page last updated: October 14, {yr} · Created with Notepad on Windows 95
        </div>
      </footer>
    );
  }

  if (era === 2000) {
    return (
      <footer id="section-footer" className="site-footer">
        <div style={{ color: '#ff6600', fontSize: 18, fontFamily: 'Impact, sans-serif', letterSpacing: 3, marginBottom: 10 }}>
          NOVATECH<span style={{ color: '#00ccff' }}>.COM</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 12, flexWrap: 'wrap' }}>
          {['Home', 'Products', 'About', 'Press Room', 'Careers', 'Investor Relations', 'Contact Us'].map(l => (
            <span key={l} style={{ color: '#00ccff', fontSize: 11, textDecoration: 'underline', cursor: 'pointer' }}>{l}</span>
          ))}
        </div>
        <div style={{ borderTop: '1px solid #223344', paddingTop: 10, fontSize: 11 }}>
          © {yr} NovaTech Corporation. All rights reserved. Nasdaq: <span style={{ color: '#ff9900' }}>NVTK</span>
        </div>
        <div style={{ fontSize: 10, marginTop: 6, color: '#334455' }}>
          Best viewed in Internet Explorer 5.5 or Netscape Navigator 4.7 at 1024×768.<br />
          Requires Macromedia Flash Player 4. Privacy Policy | Terms of Use | Legal Notices
        </div>
      </footer>
    );
  }

  if (era === 2005) {
    return (
      <footer id="section-footer" className="site-footer">
        <div style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 12, fontFamily: 'Georgia, serif' }}>NovaTech</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 12, flexWrap: 'wrap' }}>
          {['Products', 'Pricing', 'Blog', 'API Docs', 'About', 'Contact'].map(l => (
            <span key={l} style={{ color: '#7aaad8', fontSize: 12, cursor: 'pointer' }}
              onClick={() => l === 'Pricing' ? scrollTo('section-pricing') : l === 'Products' ? scrollTo('section-products') : null}>
              {l}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 12, alignItems: 'center' }}>
          <span style={{ fontSize: 11, color: '#7aaad8' }}>Subscribe:</span>
          <Icons.dot2005.rss />
          <span style={{ fontSize: 11, color: '#7aaad8' }}>Blog Feed</span>
          <Icons.dot2005.rss />
          <span style={{ fontSize: 11, color: '#7aaad8' }}>Product Updates</span>
        </div>
        <div style={{ fontSize: 11 }}>© {yr} NovaTech, Inc. · Privacy Policy · Terms of Service</div>
        <div style={{ marginTop: 6, fontSize: 10, color: '#6699aa' }}>
          Powered by NovaTech on Ruby on Rails · Hosted on Slicehost · Valid XHTML 1.0
        </div>
      </footer>
    );
  }

  if (era === 2010) {
    return (
      <footer id="section-footer" className="site-footer">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, maxWidth: 700, margin: '0 auto 24px', textAlign: 'left' }}>
          {[
            { title: 'Company', links: ['About', 'Blog', 'Careers', 'Press'] },
            { title: 'Products', links: ['NovaDash', 'NovaSync', 'NovaChat'] },
            { title: 'Support', links: ['Help Center', 'Community', 'Status', 'Contact'] },
          ].map(col => (
            <div key={col.title}>
              <div style={{ fontWeight: 'bold', color: '#ffffff', fontSize: 13, marginBottom: 10 }}>{col.title}</div>
              {col.links.map(l => <div key={l} style={{ fontSize: 12, padding: '3px 0', color: '#888', cursor: 'pointer' }}>{l}</div>)}
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid #444', paddingTop: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 12 }}>
            <button className="social-btn fb" style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Icons.dot2015.facebook /> Facebook</button>
            <button className="social-btn tw" style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Icons.dot2015.twitter /> Twitter</button>
            <button className="social-btn li" style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Icons.dot2015.linkedin /> LinkedIn</button>
          </div>
          <div style={{ fontSize: 11 }}>© {yr} NovaTech, Inc. · Privacy · Terms</div>
        </div>
      </footer>
    );
  }

  if (era === 2015) {
    return (
      <footer id="section-footer" className="site-footer">
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginBottom: 32, textAlign: 'left' }}>
            {[
              { title: 'NovaTech', links: ['About', 'Blog', 'Careers', 'Press'] },
              { title: 'Products', links: ['NovaCloud', 'NovaData', 'NovaMetrics'] },
              { title: 'Developers', links: ['Documentation', 'API Reference', 'Status', 'GitHub'] },
              { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'] },
            ].map(col => (
              <div key={col.title}>
                <div style={{ fontWeight: 700, color: '#fff', textTransform: 'uppercase', fontSize: 11, letterSpacing: 1.5, marginBottom: 14 }}>{col.title}</div>
                {col.links.map(l => <div key={l} style={{ fontSize: 13, padding: '5px 0', cursor: 'pointer', color: '#9e9e9e' }}>{l}</div>)}
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid #333', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <span>© {yr} NovaTech, Inc. All rights reserved.</span>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <span style={{ cursor: 'pointer', color: '#9e9e9e' }} title="Twitter"><Icons.dot2015.twitter /></span>
              <span style={{ cursor: 'pointer', color: '#9e9e9e' }} title="LinkedIn"><Icons.dot2015.linkedin /></span>
              <span style={{ cursor: 'pointer', color: '#9e9e9e' }} title="GitHub"><Icons.dot2015.github /></span>
              <span style={{ cursor: 'pointer', color: '#9e9e9e' }} title="YouTube"><Icons.dot2015.youtube /></span>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer id="section-footer" className="site-footer">
      <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, fontFamily: 'Space Grotesk, sans-serif' }}>
        Nova<span style={{ color: '#a3e635' }}>.</span>Tech · © {yr}
      </div>
      <div className="footer-links">
        {['Privacy', 'Terms', 'Security', 'Status', 'Docs', 'Blog', 'Careers'].map(l => (
          <span key={l} style={{ cursor: 'pointer' }}>{l}</span>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
        <span style={{ cursor: 'pointer', color: 'rgba(255,255,255,0.3)' }} title="X (Twitter)"><Icons.dot2025.xTwitter /></span>
        <span style={{ cursor: 'pointer', color: 'rgba(255,255,255,0.3)' }} title="GitHub"><Icons.dot2025.github /></span>
        <span style={{ cursor: 'pointer', color: 'rgba(255,255,255,0.3)' }} title="LinkedIn"><Icons.dot2015.linkedin /></span>
      </div>
    </footer>
  );
}

function Marquee1995() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-inner">
        *** WELCOME TO NOVATECH SOFTWARE *** &nbsp;&nbsp;&nbsp;
        Now Shipping: NovaBusiness 3.1 for Windows 95! &nbsp;&nbsp;&nbsp;
        FREE Demo Disk — Call 1-800-NOVATECH &nbsp;&nbsp;&nbsp;
        Under Construction: New Products Page Coming Soon! &nbsp;&nbsp;&nbsp;
        PC Magazine Editor's Choice Award 1995 &nbsp;&nbsp;&nbsp;
        *** DOWNLOAD FREE TRIAL TODAY ***
      </div>
      <style>{`
        .marquee-inner { display:inline-block; white-space:nowrap; padding-left:100%; animation:marquee-scroll 20s linear infinite; }
        @keyframes marquee-scroll { from{transform:translateX(0)} to{transform:translateX(-100%)} }
      `}</style>
    </div>
  );
}

function Ticker2000() {
  return (
    <div className="ticker2000">
      <span style={{ color: '#ff6600', fontWeight: 'bold', marginRight: 12 }}>LIVE:</span>
      <div style={{ overflow: 'hidden', flex: 1 }}>
        <div style={{ display: 'inline-block', whiteSpace: 'nowrap', animation: 'marquee-scroll 25s linear infinite', paddingLeft: '100%' }}>
          NVTK +12.4% &nbsp;■&nbsp; AMZN +5.2% &nbsp;■&nbsp; YHOO +3.8% &nbsp;■&nbsp; MSFT -0.5% &nbsp;■&nbsp; CSCO +8.1% &nbsp;■&nbsp;
          INTC +2.2% &nbsp;■&nbsp; AOL +4.6% &nbsp;■&nbsp; EBAY +15.3% &nbsp;■&nbsp; PETS.COM -94.2% &nbsp;■&nbsp;
          NVTK +12.4% &nbsp;■&nbsp; AMZN +5.2%
        </div>
      </div>
    </div>
  );
}

export function SiteContent({ era }) {
  return (
    <div className="site-wrap">
      {era === 1995 && <Marquee1995 />}
      {era === 2000 && <Ticker2000 />}
      <Navbar era={era} />
      <Hero era={era} />
      <Products era={era} />
      <Features era={era} />
      <Testimonials era={era} />
      <Pricing era={era} />
      <Footer era={era} />
    </div>
  );
}
