import { useState, useEffect } from 'react'

const NIGHTSBRIDGE = 'https://book.nightsbridge.com/23617'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="container header-inner">
          <a href="#home" className="logo" onClick={close}>
            <span className="logo-name">Kingfisher Bush Lodge</span>
            <span className="logo-tagline">Kosi Bay · KwaZulu-Natal</span>
          </a>

          <nav className="nav-links" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#accommodation">Stay</a>
            <a href="#tembe">Tembe Safari</a>
            <a href="#activities">Explore</a>
            <a href="#location">Find Us</a>
            <a href={NIGHTSBRIDGE} className="nav-book" target="_blank" rel="noopener">Book Now</a>
          </nav>

          <button
            className={`hamburger${open ? ' open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <nav className={`mobile-nav${open ? ' open' : ''}`} aria-label="Mobile navigation">
        <a href="#about"          onClick={close}>About</a>
        <a href="#accommodation"  onClick={close}>Accommodation</a>
        <a href="#tembe"          onClick={close}>Tembe Safari</a>
        <a href="#activities"     onClick={close}>Explore</a>
        <a href="#location"       onClick={close}>Find Us</a>
        <a href={NIGHTSBRIDGE} target="_blank" rel="noopener" onClick={close} className="mobile-book">Book Now</a>
      </nav>
    </>
  )
}