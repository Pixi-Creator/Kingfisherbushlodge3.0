import { useEffect, useState } from 'react'
import './index.css'
import './App.css'
import Header from './Header'
import Hero from './Hero'
import Footer from './Footer'
import RoomSlideshow from './RoomSlideshow'
import BookingForm from './BookingForm'

/* ─── REPLACE THIS with your real GA4 Measurement ID ─── */
const GA_ID = 'G-3JRVV8G538'

/* ─── Contact constants ─── */
const WA         = 'https://wa.me/27722423571?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20Kingfisher%20Bush%20Lodge'
const NB         = 'https://book.nightsbridge.com/23617'
const MAPS_LINK  = 'https://maps.google.com/?cid=1201529776513704726'
const MAPS_EMBED = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7194.5!2d32.8782!3d-26.9717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10a9c8e9a8f5a516%3A0x10a9c8e9a8f5a516!2sKingfisher+Bush+Lodge!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza`

/* ─── Room data — 4 photos each ─── */
const ROOMS = [
  {
    name: 'Bush Chalet',
    capacity: 'Up to 2 guests',
    desc: 'Secluded chalets nestled in natural bush, each with a private deck where you can watch the forest come alive at dusk.',
    features: ['En-suite bathroom', 'Outdoor shower', 'Private deck', 'Fan & mosquito nets'],
    images: [
      { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80', alt: 'Bush Chalet exterior' },
      { src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80', alt: 'Bush Chalet bedroom' },
      { src: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&q=80', alt: 'Bush Chalet deck view' },
      { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80', alt: 'Bush Chalet bathroom' },
    ],
  },
  {
    name: 'Family Cabin',
    capacity: 'Up to 4 guests',
    desc: 'Spacious timber cabins designed for families, with two sleeping areas, a kitchenette, and a shaded veranda with braai.',
    features: ['Kitchenette', 'Two sleeping areas', 'Veranda', 'Braai area'],
    images: [
      { src: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=800&q=80', alt: 'Family Cabin exterior' },
      { src: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80', alt: 'Family Cabin lounge' },
      { src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80', alt: 'Family Cabin bedroom' },
      { src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80', alt: 'Family Cabin veranda' },
    ],
  },
  {
    name: 'Tented Suite',
    capacity: 'Up to 2 guests',
    desc: 'Canvas under stars — a safari tent on a raised timber platform with en-suite facilities and an open-air sleep-out option.',
    features: ['Canvas tent', 'En-suite', 'Raised platform', 'Sleep-out deck'],
    images: [
      { src: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80', alt: 'Tented Suite exterior' },
      { src: 'https://images.unsplash.com/photo-1519302959554-a75be0afc82a?w=800&q=80', alt: 'Tented Suite interior' },
      { src: 'https://images.unsplash.com/photo-1496947850313-7743325fa58c?w=800&q=80', alt: 'Tented Suite bed' },
      { src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80', alt: 'Tented Suite deck at dusk' },
    ],
  },
]

const HIGHLIGHTS = [
  { icon: '🐬', title: 'Kosi Bay Mouth',     desc: 'Known as "the aquarium" for extraordinary water clarity' },
  { icon: '🌿', title: 'UNESCO Heritage',     desc: 'Within iSimangaliso Wetland Park — a living wilderness' },
  { icon: '🎣', title: '700-Year Fish Traps', desc: 'Ancient Tsonga fish kraals still in traditional use today' },
  { icon: '🦅', title: 'Birding Paradise',    desc: 'Over 520 bird species including the rare Pel\'s Fishing Owl' },
]

const ACTIVITIES = [
  { icon: '🤿', name: 'Snorkelling',    desc: 'Explore Kosi Bay Mouth — South Africa\'s clearest natural swimming site.' },
  { icon: '🛶', name: 'Canoe Trails',   desc: 'Paddle the four interconnected lake systems at dawn or dusk.' },
  { icon: '🐢', name: 'Turtle Nesting', desc: 'Guided walks to witness loggerhead & leatherback turtles nesting (Nov–Feb).' },
  { icon: '🎣', name: 'Fly Fishing',    desc: 'World-class estuary fishing for kingfish, kob, and spotted grunter.' },
  { icon: '🚶', name: 'Bush Walks',     desc: 'Guided trails through coastal forest with expert local rangers.' },
  { icon: '🌅', name: 'Lake Sunsets',   desc: 'Sundowner cruises across the serene Kosi lake system.' },
]

const GALLERY = [
  { src: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=900&q=80', tall: true,  alt: 'Wildlife at Kosi Bay' },
  { src: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=600&q=80', tall: false, alt: 'Kosi estuary waters' },
  { src: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&q=80', tall: false, alt: 'Coastal forest trail' },
  { src: 'https://images.unsplash.com/photo-1562155955-1cb2d73488d7?w=700&q=80', tall: false, alt: 'Sunset over the lake' },
]

/* ─── Booking modal wrapper ─── */
type ModalTab = 'accommodation' | 'tembe'

function Modal({ open, tab, onClose }: { open: boolean; tab: ModalTab; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div className="modal-backdrop" onClick={e => { if (e.target === e.currentTarget) onClose() }} role="dialog" aria-modal="true">
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <h3 className="modal-title">{tab === 'tembe' ? '🦒 Tembe Safari Enquiry' : '🏕 Accommodation Enquiry'}</h3>
        <BookingForm defaultTab={tab} onClose={onClose} />
      </div>
    </div>
  )
}

/* ─── SVG icons ─── */
const WaIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

/* ─── Main App ─── */
export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalTab,  setModalTab]  = useState<ModalTab>('accommodation')

  const openModal = (tab: ModalTab) => { setModalTab(tab); setModalOpen(true) }

  /* Inject Google Analytics */
  useEffect(() => {
    if (!GA_ID || GA_ID === 'G-XXXXXXXXXX') return
    const s1 = document.createElement('script')
    s1.async = true
    s1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    document.head.appendChild(s1)
    const s2 = document.createElement('script')
    s2.text = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`
    document.head.appendChild(s2)
  }, [])

  /* Scroll reveal */
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add('visible'); io.unobserve(e.target) } }),
      { threshold: 0.10 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main>

        {/* ── HERO ── */}
        <Hero onEnquire={() => openModal('accommodation')} />

        {/* ── HIGHLIGHTS BAR ── */}
        <section className="highlights" aria-label="Why Kingfisher">
          <div className="container">
            <div className="highlights-grid">
              {HIGHLIGHTS.map(h => (
                <div className="highlight-item reveal" key={h.title}>
                  <span className="highlight-icon" aria-hidden="true">{h.icon}</span>
                  <h4>{h.title}</h4>
                  <p>{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section className="about section" id="about">
          <div className="container">
            <div className="about-inner">
              <div className="about-images reveal">
                <img src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=900&q=80" alt="Kosi Bay estuary at golden hour" className="about-img-main" loading="lazy" />
                <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&q=80" alt="Coastal forest" className="about-img-inset" loading="lazy" />
              </div>
              <div className="about-text reveal">
                <span className="eyebrow">The Lodge</span>
                <h2>A quiet corner of South Africa's wildest coast</h2>
                <div className="divider" />
                <p>Kingfisher Bush Lodge sits at the northern tip of KwaZulu-Natal, a few kilometres from the Mozambique border. We're not a resort — we're a small, owner-managed retreat where the forest, the birds, and the water are the main attraction.</p>
                <p>The surrounding iSimangaliso Wetland Park — a UNESCO World Heritage Site — encompasses four interconnected lake systems, ancient sand dunes, coral reefs, and the legendary Kosi Bay Mouth estuary that divers and snorkellers call "the aquarium."</p>
                <div className="about-btns">
                  <button className="btn btn-primary" onClick={() => openModal('accommodation')}>Send an enquiry</button>
                  <a href={NB} className="btn btn-outline-teal" target="_blank" rel="noopener">Check availability</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ACCOMMODATION ── */}
        <section className="accommodation section" id="accommodation">
          <div className="container">
            <div className="section-header reveal">
              <span className="eyebrow">Where you'll sleep</span>
              <h2>Accommodation</h2>
              <div className="divider" />
              <p style={{ color: 'var(--text-muted)', maxWidth: '52ch', margin: 'auto' }}>
                Each unit is designed around the landscape — comfortable, simple, and open to the sounds of the bush.
              </p>
            </div>
            <div className="rooms-grid">
              {ROOMS.map(r => (
                <article className="room-card reveal" key={r.name}>
                  <RoomSlideshow images={r.images} roomName={r.name} />
                  <div className="room-body">
                    <h3>{r.name}</h3>
                    <span className="room-capacity">{r.capacity}</span>
                    <p>{r.desc}</p>
                    <div className="room-features">
                      {r.features.map(f => <span className="room-feature" key={f}>{f}</span>)}
                    </div>
                    <div className="room-btns">
                      <a href={NB} className="btn btn-primary" target="_blank" rel="noopener">Book online →</a>
                      <button className="btn btn-outline-dark" onClick={() => openModal('accommodation')}>Enquire</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── ACTIVITIES ── */}
        <section className="activities section" id="activities">
          <div className="container">
            <div className="section-header reveal">
              <span className="eyebrow">Explore</span>
              <h2>Things to do</h2>
              <div className="divider" />
            </div>
            <div className="activities-grid">
              {ACTIVITIES.map(a => (
                <div className="activity-card reveal" key={a.name}>
                  <span className="activity-icon" aria-hidden="true">{a.icon}</span>
                  <h4>{a.name}</h4>
                  <p>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TEMBE SAFARIS ── */}
        <section className="tembe section" id="tembe">
          <div className="container">
            <div className="tembe-inner">
              <div className="tembe-img-wrap reveal">
                <img
                  src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=900&q=80"
                  alt="Elephant herd at Tembe Elephant Park"
                  className="tembe-img"
                  loading="lazy"
                />
                <span className="tembe-badge">Partner experience</span>
              </div>
              <div className="tembe-text reveal">
                <span className="eyebrow">Tembe Elephant Park</span>
                <h2>Safari day trips</h2>
                <div className="divider" />
                <p>
                  Just 30 minutes from the lodge, Tembe Elephant Park is legendary for
                  Africa's largest free-roaming elephants — bulls with enormous tusks that draw
                  wildlife photographers and safari enthusiasts from around the world.
                </p>
                <p>
                  We partner with Tembe to offer guided game drives — full day, half day, sunrise,
                  and night drives. All bookings go through us. Send us an enquiry and we'll reply
                  with current rates and availability.
                </p>
                <div className="tembe-pills">
                  <span>🐘 Africa's largest tuskers</span>
                  <span>🦁 Big 5 possible</span>
                  <span>📷 Expert ranger guides</span>
                  <span>🌅 Sunrise &amp; night drives</span>
                </div>
                <div className="about-btns" style={{ marginTop: '1.75rem' }}>
                  <button className="btn btn-primary" onClick={() => openModal('tembe')}>
                    🦒 Enquire &amp; view rates
                  </button>
                  <a href={WA} className="btn btn-outline-dark" target="_blank" rel="noopener">
                    WhatsApp us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── GALLERY ── */}
        <section className="gallery-section" id="gallery">
          <h2 className="sr-only">Photo gallery</h2>
          <div className="gallery-strip">
            {GALLERY.map((g, i) => (
              <div className={`gallery-cell${g.tall ? ' tall' : ''}`} key={i}>
                <img src={g.src} alt={g.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        {/* ── BOOKING CTA ── */}
        <section className="booking-cta section" id="book">
          <div className="container">
            <div className="section-header reveal" style={{ marginBottom: '3rem' }}>
              <span className="eyebrow">Ready to visit?</span>
              <h2>Book your stay</h2>
              <div className="divider" />
              <p style={{ color: 'var(--text-muted)', maxWidth: '52ch', margin: 'auto' }}>
                Book instantly online, send an enquiry, or chat on WhatsApp.
                Direct bookings save you 15% — no platform fees.
              </p>
            </div>
            <div className="booking-options reveal">
              <div className="booking-option">
                <div className="booking-option-icon">🗓</div>
                <h4>Book Online</h4>
                <p>Instant confirmation through our secure Nightsbridge booking system.</p>
                <a href={NB} className="btn btn-primary" target="_blank" rel="noopener">Check availability →</a>
              </div>
              <div className="booking-option booking-option--featured">
                <div className="booking-option-icon">✉️</div>
                <h4>Send an Enquiry</h4>
                <p>Tell us your dates, group size, and preferences. We reply within 24 hours.</p>
                <button className="btn btn-primary" onClick={() => openModal('accommodation')}>Fill in enquiry form</button>
              </div>
              <div className="booking-option">
                <div className="booking-option-icon">💬</div>
                <h4>WhatsApp Us</h4>
                <p>Prefer to chat? Message us directly for fast, personal replies.</p>
                <a href={WA} className="btn btn-wa" target="_blank" rel="noopener">
                  <WaIcon /> Open WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── LOCATION ── */}
        <section className="location section" id="location">
          <div className="container">
            <div className="section-header reveal" style={{ marginBottom: '2.5rem' }}>
              <span className="eyebrow">Find us</span>
              <h2>Getting here</h2>
              <div className="divider" />
            </div>
            <div className="location-inner">
              <div className="location-info reveal">
                <div className="location-row">
                  <span className="location-label">📍 Address</span>
                  <a href={MAPS_LINK} target="_blank" rel="noopener" className="location-val location-link">
                    RD D1846, Kwamazambane<br />Manguzi, 3973<br />KwaZulu-Natal, South Africa
                  </a>
                </div>
                <div className="location-row">
                  <span className="location-label">📞 Phone</span>
                  <a href="tel:+27722423571" className="location-val location-link">+27 72 242 3571</a>
                </div>
                <div className="location-row">
                  <span className="location-label">✉️ Email</span>
                  <a href="mailto:info@kosibaysouthafrica.co.za" className="location-val location-link">info@kosibaysouthafrica.co.za</a>
                </div>
                <div className="location-row">
                  <span className="location-label">⭐ Rating</span>
                  <a href={MAPS_LINK} target="_blank" rel="noopener" className="location-val location-link">4.5 / 5 · 160 Google reviews</a>
                </div>
                <div className="location-row">
                  <span className="location-label">🕐 Check-in / out</span>
                  <span className="location-val">From 14:00 · By 10:00</span>
                </div>
                <a href={MAPS_LINK} target="_blank" rel="noopener" className="btn btn-primary" style={{ marginTop: '1.25rem' }}>
                  Open in Google Maps →
                </a>
              </div>
              <div className="location-map reveal">
                <iframe
                  title="Kingfisher Bush Lodge map"
                  src={MAPS_EMBED}
                  width="100%" height="380"
                  style={{ border: 0, borderRadius: 'var(--radius-lg)', display: 'block' }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── DISCLAIMER (collapsible, bottom of page) ── */}
        <section className="disclaimer-section">
          <div className="container">
            <details className="disclaimer">
              <summary className="disclaimer-summary">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                Important notes about Kingfisher Bush Lodge
                <svg className="chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
              </summary>
              <div className="disclaimer-body">
                <p><strong>Location:</strong> Kingfisher Bush Lodge is nestled within natural bush and is not situated directly on a beach or lake shore. The Kosi Bay Mouth, estuary, and natural attractions are a short drive or guided walk away.</p>
                <p><strong>Photography:</strong> Images on this website show both the lodge and the wider iSimangaliso Wetland Park area to represent the full experience. Not all images are taken from the lodge property.</p>
                <p><strong>Wildlife:</strong> Animal sightings shown are representative of the area and cannot be guaranteed on any specific visit.</p>
                <p><strong>Tembe Safaris:</strong> Tembe Elephant Park day trips are operated in partnership with Tembe and are subject to park availability and seasonal conditions. Rates may vary.</p>
                <p><strong>Rates &amp; availability:</strong> All prices are subject to change. Final confirmation is provided at time of booking. The 15% direct booking discount applies to bookings made directly via this website or WhatsApp only.</p>
              </div>
            </details>
          </div>
        </section>

      </main>

      <Footer />

      {/* ── WHATSAPP FAB ── */}
      <a href={WA} className="whatsapp-fab" target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">
        <WaIcon />
      </a>

      {/* ── BOOKING MODAL ── */}
      <Modal open={modalOpen} tab={modalTab} onClose={() => setModalOpen(false)} />

      <style>{`.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}`}</style>
    </>
  )
}