import { useState, useEffect, useCallback } from 'react'

interface Slide { src: string; alt: string }

export default function RoomSlideshow({ images, roomName }: { images: Slide[]; roomName: string }) {
  const [cur, setCur]       = useState(0)
  const [fading, setFading] = useState(false)

  const goTo = useCallback((idx: number) => {
    setFading(true)
    setTimeout(() => { setCur(idx); setFading(false) }, 240)
  }, [])

  const prev = () => goTo((cur - 1 + images.length) % images.length)
  const next = useCallback(() => goTo((cur + 1) % images.length), [cur, images.length, goTo])

  useEffect(() => {
    const t = setInterval(next, 4500)
    return () => clearInterval(t)
  }, [next])

  return (
    <div className="slideshow" role="region" aria-label={`${roomName} photos`}>
      <div className={`slideshow-img-wrap${fading ? ' fading' : ''}`}>
        <img src={images[cur].src} alt={images[cur].alt} loading="lazy" />
      </div>

      <button className="slide-btn slide-prev" onClick={prev} aria-label="Previous photo">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button className="slide-btn slide-next" onClick={next} aria-label="Next photo">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
      </button>

      <div className="slide-dots" role="tablist">
        {images.map((_, i) => (
          <button key={i} className={`slide-dot${i === cur ? ' active' : ''}`} onClick={() => goTo(i)} role="tab" aria-label={`Photo ${i + 1}`} aria-selected={i === cur} />
        ))}
      </div>

      <span className="slide-counter">{cur + 1} / {images.length}</span>
    </div>
  )
}