'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function ComingSoonPage() {
  const [platform, setPlatform] = useState<'ios' | 'android'>('ios')

  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get('platform')
    if (value === 'android') setPlatform('android')
  }, [])

  const isAndroid = platform === 'android'

  return (
    <main className="coming-page">
      <div className="coming-page-glow" />
      <div className="coming-page-card">
        <Link href="/" className="coming-page-logo">WanderTribe</Link>
        <div className={`coming-page-icon ${isAndroid ? 'android' : 'ios'}`} aria-hidden="true">
          {isAndroid ? <GooglePlayIcon /> : <AppleIcon />}
        </div>
        <div className="coming-page-label">{isAndroid ? 'Google Play' : 'App Store'}</div>
        <h1>WanderTribe on the {isAndroid ? 'Google Play' : 'App Store'}</h1>
        <div className="coming-page-pill">COMING SOON</div>
        <p>
          {isAndroid
            ? 'The WanderTribe app is being built for travelers who want to discover people, trips and experiences through trust-first connections.'
            : 'The WanderTribe app is coming to iPhone — built for travelers who want more meaningful, trust-first connections on the road.'}
        </p>
        <a href="/#early-access" className="coming-page-primary">Join Early Access →</a>
        <Link href="/" className="coming-page-back">Back to WanderTribe</Link>
      </div>
    </main>
  )
}

function AppleIcon() {
  return <svg viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08ZM12.03 7.25C11.88 5.02 13.69 3.18 15.77 3c.29 2.58-2.33 4.5-3.74 4.25Z"/></svg>
}
function GooglePlayIcon() {
  return <svg viewBox="0 0 24 24"><path d="M3.6 2.4c-.37.39-.6 1-.6 1.77v15.66c0 .77.23 1.38.6 1.77L3.7 21.7 14.42 10.98V10.9L3.7 2.3l-.1.1Z"/><path d="m17.96 14.52-3.54-3.54v-.08l3.54-3.54 4.25 2.42c1.21.69 1.21 1.63 0 2.32l-4.25 2.42Z"/><path d="m3.6 21.6 10.72-10.72 3.64 3.64-11.9 6.76c-.97.55-1.82.59-2.46.32Z"/><path d="m3.6 2.4 10.72 10.72-3.64 3.64L3.6 9.98c-.64-.37-1.05-.88-1.05-1.5 0-.62.41-1.13 1.05-1.5Z"/></svg>
}

