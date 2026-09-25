'use client'

import { useMemo, useState } from 'react'

type Step = 1 | 2 | 3

const interests = ['Group trips', 'Solo travel', 'Hosting', 'Local experiences']

export default function EarlyAccessFlow() {
  const [step, setStep] = useState<Step>(1)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [interest, setInterest] = useState('')
  const [note, setNote] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const firstName = useMemo(() => name.trim().split(/\s+/)[0] || 'traveler', [name])

  async function next() {
    setError('')
    if (step === 1) {
      if (!name.trim() || !email.trim()) {
        setError('Tell us your name and email so we know who to welcome.')
        return
      }
      if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
        setError('Please enter a valid email address.')
        return
      }
      setStep(2)
      return
    }

    if (!city.trim() || !interest) {
      setError('Add your city and choose what sounds most like your journey.')
      return
    }

    setSubmitting(true)
    try {
      const response = await fetch('/api/early-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          city: city.trim(),
          interest,
          note: note.trim(),
        }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        setError(data.error || 'Something went wrong. Please try again.')
        setSubmitting(false)
        return
      }

      setStep(3)
    } catch {
      setError('Could not reach the server. Check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  function back() {
    setError('')
    setStep((current) => (current === 1 ? 1 : (current - 1) as Step))
  }

  return (
    <div className="early-access-flow">
      <div className="early-access-copy">
        <div className="section-label">Early Access</div>
        <h2 className="section-title">Help shape the <em style={{ color: 'var(--mint)' }}>first journey</em></h2>
        <p className="section-sub">
          WanderTribe starts with the people who believe travel is better when you know who you are travelling with.
        </p>
        <div className="early-access-points">
          <div><span>01</span> Tell us a little about yourself</div>
          <div><span>02</span> Tell us how you like to travel</div>
          <div><span>03</span> Get a first look as WanderTribe takes shape</div>
        </div>
      </div>

      <div className="early-access-panel">
        <div className="early-access-progress">
          <div className="early-access-step-copy">
            <span>EARLY ACCESS · {step === 3 ? 'DONE' : `0${step} / 02`}</span>
            {step < 3 && <strong>{step === 1 ? 'Start with you' : 'Your kind of journey'}</strong>}
          </div>
          <div className="early-access-progress-bars" aria-hidden="true">
            {[1, 2].map((item) => <span key={item} className={step >= item ? 'active' : ''} />)}
          </div>
        </div>

        {step === 1 && (
          <div className="early-access-form-step">
            <div className="early-access-step-title">Let&apos;s start with the person behind the passport.</div>
            <div className="early-access-field-grid">
              <label>
                <span>Your name</span>
                <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Tara" autoComplete="name" />
              </label>
              <label>
                <span>Email</span>
                <input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" type="email" autoComplete="email" />
              </label>
            </div>
            <div className="early-access-hint">No spam. Just meaningful updates when there&apos;s something worth sharing.</div>
          </div>
        )}

        {step === 2 && (
          <div className="early-access-form-step">
            <div className="early-access-step-title">Where are you starting from?</div>
            <label className="early-access-full-field">
              <span>City</span>
              <input value={city} onChange={(event) => setCity(event.target.value)} placeholder="Bengaluru" autoComplete="address-level2" />
            </label>
            <div className="early-access-interest-label">What brings you to WanderTribe?</div>
            <div className="early-access-interest-grid">
              {interests.map((item) => (
                <button key={item} type="button" className={interest === item ? 'selected' : ''} onClick={() => setInterest(item)}>
                  {item}
                </button>
              ))}
            </div>
            <label className="early-access-full-field">
              <span>Anything you&apos;re looking for? <small>Optional</small></span>
              <textarea value={note} onChange={(event) => setNote(event.target.value)} placeholder="A trip, a travel buddy, a local experience…" rows={3} />
            </label>
          </div>
        )}

        {step === 3 && (
          <div className="early-access-success">
            <div className="early-access-success-mark">✓</div>
            <div className="early-access-success-kicker">YOU&apos;RE PART OF THE FIRST WAVE</div>
            <h3>Welcome, {firstName}.</h3>
            <p>
              We&apos;ve got a sense of who you are and how you like to travel. WanderTribe is being built one thoughtful connection at a time — and this is where yours begins.
            </p>
            <div className="early-access-summary">
              <span>{city}</span><span>{interest}</span>
            </div>
          </div>
        )}

        {error && <div className="early-access-error" role="alert">{error}</div>}

        <div className="early-access-form-actions">
          {step > 1 && step < 3 ? <button type="button" className="early-access-back" onClick={back}>← Back</button> : <span />}
          {step < 3 ? (
            <button
              type="button"
              className="btn-primary btn-large early-access-next"
              onClick={next}
              disabled={submitting}
            >
              {step === 1 ? 'Continue →' : submitting ? 'Joining…' : 'Join the first wave →'}
            </button>
          ) : (
            <a href="#top" className="btn-primary btn-large early-access-next">Back to WanderTribe ↑</a>
          )}
        </div>
      </div>
    </div>
  )
}
