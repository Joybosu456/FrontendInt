import { useState } from 'react'

export function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onLogin({ email, mobile })
  }

  return (
    <main className="login-screen">
      <section className="login-story" aria-label="Interview preparation">
        <a className="login-brand" href="#login" aria-label="Prepdesk home">
          <span className="brand-icon"><span /></span>
          <span>prepdesk<span className="brand-dot">.</span></span>
        </a>
        <div className="login-story-copy">
          <div className="login-kicker"><span /> YOUR NEXT CHAPTER STARTS HERE</div>
          <h1>Preparation<br />changes the<br /><em>whole room.</em></h1>
          <p>A thoughtful space to practise the questions, sharpen your answers, and feel ready for what comes next.</p>
        </div>
        <div className="login-art" aria-hidden="true">
          <div className="login-art-disc" />
          <div className="login-art-line login-art-line--one" />
          <div className="login-art-line login-art-line--two" />
          <div className="login-art-card login-art-card--back"><span>THINK CLEARLY</span><b>01</b></div>
          <div className="login-art-card login-art-card--front"><span>SHOW UP</span><i>✳</i></div>
        </div>
        <div className="login-story-footer"><span>PREP DESK / PERSONAL STUDY SPACE</span><span>01 — 06</span></div>
      </section>

      <section className="login-panel" aria-labelledby="login-title">
        <div className="login-panel-top"><span>ALREADY HAVE A PLACE HERE?</span><span className="login-secure-note"><i /> PERSONAL WORKSPACE</span></div>
        <div className="login-form-wrap">
          <div className="login-mobile-brand">
            <span className="brand-icon"><span /></span>
            <span>prepdesk<span className="brand-dot">.</span></span>
          </div>
          <div className="login-form-intro">
            <div className="login-form-mark">↗</div>
            <p className="login-form-eyebrow">WELCOME TO YOUR WORKSPACE</p>
            <h2 id="login-title">Let's get you<br /><em>in the room.</em></h2>
            <p className="login-form-description">Enter your contact details to open your interview prep dashboard.</p>
          </div>
          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="login-email">Email address</label>
            <input
              id="login-email"
              type="text"
              inputMode="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="login-mobile">Mobile number</label>
            <input
              id="login-mobile"
              type="tel"
              autoComplete="tel"
              placeholder="Your mobile number"
              value={mobile}
              onChange={(event) => setMobile(event.target.value)}
            />
            <button type="submit" className="login-submit">Open my dashboard <span>↗</span></button>
          </form>
          <p className="login-form-footer">Your interview prep, all in one thoughtful place.</p>
        </div>
        <div className="login-panel-footer"><span>PREPDESK / INTERVIEW PRACTICE</span><span>© 2026 Joy Basu</span></div>
      </section>
    </main>
  )
}