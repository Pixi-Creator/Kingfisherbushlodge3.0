import { useEffect, useState } from 'react'
import './index.css'
import './App.css'
import Header from './Header'
import Hero from './Hero'
import Footer from './Footer'
import RoomSlideshow from './RoomSlideshow'
import BookingForm from './BookingForm'

/* ─── GA4 — replace with your real ID ─── */
const GA_ID = 'G-3JRVV8G538'

/* ─── Constants ─── */
const WA        = 'https://wa.me/27722423571?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20Kingfisher%20Bush%20Lodge'
const NB        = 'https://book.nightsbridge.com/23617'
const MAPS_LINK = 'https://maps.app.goo.gl/wiCFpL6W2uL7qiiBA'
const MAPS_EMB  = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.642050830761!2d32.8219846!3d-26.94656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee4914d2483efe7%3A0x10acb0f73c276316!2sKingfisher%20Bush%20Lodge!5e0!3m2!1sen!2sza!4v1782560568700!5m2!1sen!2sza'
/* ─── ROOMS — 5 real room types, 4 photos each ─── */
const ROOMS = [
  {
    name: 'Luxury Tented En-Suite Chalet',
    capacity: 'Sleeps 2 (extra bed available — up to 3)',
    badge: 'Most popular',
    desc: 'Fully equipped, air-conditioned chalet with kitchenette and private braai area. Sleeps 2 guests comfortably with an extra bed available on request.',
    features: ['Air conditioning', 'En-suite bathroom', 'Kitchenette', 'Self-Catering', 'Private braai area', 'Extra bed on request at additional cost'],
    images: [
      { src: '/images/rooms/chalet/1.jpg', alt: 'Luxury Tented En-Suite Chalet exterior' },
      { src: '/images/rooms/chalet/2.jpg', alt: 'Chalet bedroom' },
      { src: '/images/rooms/chalet/3.jpg', alt: 'Chalet kitchenette and living area' },
      { src: '/images/rooms/chalet/4.jpg', alt: 'Chalet en-suite bathroom' },
    ],
  },
  {
    name: 'Standard Safari Tent',
    capacity: 'Sleeps 2',
    badge: '',
    desc: 'Comfortable safari tents with access to communal kitchen. Each unit has its own private ablution facilities and private braai area — the true bush experience.',
    features: ['Private ablution', 'Communal kitchen', 'Self-Catering', 'Private braai area', 'Bush atmosphere'],
    images: [
      { src: '/images/rooms/safari/1.jpg', alt: 'Standard Safari Tent exterior' },
      { src: '/images/rooms/safari/2.jpg', alt: 'Safari Tent interior' },
      { src: '/images/rooms/safari/3.jpg', alt: 'Safari Tent bed setup' },
      { src: '/images/rooms/safari/4.jpg', alt: 'Safari Tent surroundings' },
    ],
  },
  {
    name: 'Luxury Family En-Suite Tent',
    capacity: 'Sleeps up to 5',
    badge: 'Family favourite',
    desc: 'Spacious family tent with a queen bed, bunk bed and sleeper couch. Perfect for families wanting comfort with a true safari feel. Sleeps up to 5 guests.',
    features: ['Queen bed + bunks', 'Air conditioning', 'En-suite bathroom', 'Kitchenette', 'Self-Catering', 'Private braai', 'Family sized'],
    images: [
      { src: '/images/rooms/family/1.jpg', alt: 'Luxury Family Tent exterior' },
      { src: '/images/rooms/family/2.jpg', alt: 'Family Tent living space' },
      { src: '/images/rooms/family/3.jpg', alt: 'Family Tent sleeping area' },
      { src: '/images/rooms/family/4.jpg', alt: 'Family Tent outdoor area' },
    ],
  },
  {
    name: 'Two Bedroom Family Unit',
    capacity: 'Sleeps up to 5',
    badge: '',
    desc: 'Two-bedroom family unit with kitchenette, lounge area and private braai facilities. Ideal for families or groups wanting a home-away-from-home in the bush.',
    features: ['2 bedrooms', 'Kitchenette', 'Lounge area', 'Private braai', 'Self-Catering', 'Up to 5 guests'],
    images: [
      { src: '/images/rooms/two-bedroom/1.jpg', alt: 'Two Bedroom Family Unit exterior' },
      { src: '/images/rooms/two-bedroom/2.jpg', alt: 'Family Unit bedroom' },
      { src: '/images/rooms/two-bedroom/3.jpg', alt: 'Family Unit lounge' },
      { src: '/images/rooms/two-bedroom/4.jpg', alt: 'Family Unit kitchenette' },
    ],
  },
  {
    name: 'Campsites',
    capacity: 'Up to 4 guests per site',
    badge: 'Budget friendly',
    desc: 'Spacious campsites featuring electrical points, water points and private ablution facilities. Rates include up to 4 guests per campsite. Bring your own tent or caravan.',
    features: ['Electrical points', 'Water points', 'Private ablution', 'Self-Catering', 'Up to 4 guests', 'Tent or caravan'],
    images: [
      { src: '/images/rooms/campsite/1.jpg', alt: 'Campsite at Kingfisher' },
      { src: '/images/rooms/campsite/2.jpg', alt: 'Campsite bush setting' },
      { src: '/images/rooms/campsite/3.jpg', alt: 'Campsite ablution facilities' },
      { src: '/images/rooms/campsite/4.jpg', alt: 'Campsite evening atmosphere' },
    ],
  },
]

/* ─── TOP 4 FEATURED ACTIVITIES ─── */
const TOP_ACTIVITIES = [
  {
    id: 'tembe',
    icon: '🐘',
    name: 'Tembe Elephant Park Safaris',
    tagline: 'Africa\'s largest tuskers',
    desc: 'Just 30 minutes from the lodge, Tembe Elephant Park is legendary for Africa\'s largest free-roaming elephants. Choose from a half-day safari, full-day game drive, or the exclusive Lion Monitoring Experience.',
    options: ['Half-day game drive', 'Full-day game drive', 'Lion Monitoring Experience'],
    duration: 'Half day / Full day',
    highlight: true,
  },
  {
    id: 'snorkel',
    icon: '🤿',
    name: 'Kosi Aquarium Snorkelling',
    tagline: 'One of SA\'s most diverse reefs',
    desc: 'Snorkel one of the most diverse sandstone reefs in South Africa with our specialist Marine Guides. On average 60–80 species including Lionfish, 4 species of Moray eels, Rays, Stonefish, Pufferfish and Picasso Triggerfish. Rounded off with a fish ID de-briefing and coffee/tea/hot chocolate. Mask, snorkel and fins included.',
    options: ['2-hour adventure', '3-hour adventure'],
    duration: '2–3 hours',
    highlight: true,
  },
  {
    id: 'cruise',
    icon: '🛶',
    name: 'Three-Lake Boat Cruise',
    tagline: 'Visit 3 of Kosi Bay\'s lakes by boat',
    desc: 'Cruise across three of Kosi Bay\'s magnificent interconnected lakes by boat, with the option to snorkel in the lake itself. A serene and unforgettable way to experience the full scale of this UNESCO wetland.',
    options: ['Departs 9:00 AM', 'Departs 2:00 PM'],
    duration: '3 hours',
    highlight: true,
  },
  {
  id: 'turtle',
  icon: '🐢',
  name: 'Kosi Turtle Tour',
  tagline: 'November – March only',
  desc: `Experience one of nature's most ancient rituals. Between November and March, the shores of Kosi Bay become a sanctuary for nesting Loggerhead and Leatherback turtles. Our specialist guides will lead you on an evening coastal safari. Travel to Bhanga Nek via a 20-minute boat cruise (weather permitting) or by 4x4 vehicle—alternatively, you can self-drive to the Kosi Bay mouth. Once on the shore, we embark on a guided beach walk of 1 to 10km. Depending on the timing of your stay, you will witness the majestic mothers laying their eggs (Nov - mid-Jan) or the magical rush of hatchlings heading for the surf (Jan - March).`,
  options: ['Evening departure (5:00 PM)', 'Returns ~22:30'],
  duration: '6–7 hours',
  highlight: true,
  seasonal: 'Nov – Mar only',
}
]

/* ─── OTHER ACTIVITIES ─── */
const OTHER_ACTIVITIES = [
  {
    id: 'kayak',
    icon: '🚣',
    name: 'Kosi Bay Kayaking',
    desc: 'Let our famous Thonga guide take you through meandering clear channels, passing Mangrove forests, Fish kraals and special birdlife. You will be mindblown by the serenity of the Kosi Estuary.',
    duration: '2 or 4 hours',
  },
  {
    id: 'bestofkosi',
    icon: '🌟',
    name: 'Best of Kosi Bay',
    desc: 'The ultimate Kosi experience: kayaking on the estuary, snorkelling at the Mouth, a traditional Thonga Fish Kraal tour, rounded off with a traditional fish braai and palm wine tasting. The highlight of your stay.',
    duration: '6 hours',
  },
  {
    id: 'fishkraal',
    icon: '🎣',
    name: 'Fish Kraal & Palm Wine Tour',
    desc: 'Experience the amazing culture of the peaceful Thonga people. The Fish Kraals are a 700-year-old tradition passed from generation to generation. Discover how Thonga\'s make their Palm Wine and have a taste.',
    duration: '1 hour',
  },
  {
    id: 'birding',
    icon: '🦅',
    name: 'Birding Walk',
    desc: 'Over 520 bird species in a variety of ecosystems — estuary, mangroves, swamps, coastal forests and wetlands. Special sightings include Pel\'s Fishing-Owl, Narina Trogon, African Pygmy Goose, Palm-nut Vulture and more.',
    duration: '2–3 hours',
  },
  {
    id: 'hike',
    icon: '🚶',
    name: 'Kosi Mouth Guided Hikes',
    desc: 'From short 2-hour trails to longer 6-hour hikes through the Kosi mouth area. Expert guides share their knowledge of birds, animals, trees, plants, insects, culture and history of the area.',
    duration: '2 or 6 hours',
  },
]

const HIGHLIGHTS = [
  { icon: '🐬', title: 'Kosi Bay Mouth',     desc: '"The Aquarium" — one of SA\'s clearest snorkelling sites' },
  { icon: '🌿', title: 'UNESCO Heritage',     desc: 'Within iSimangaliso Wetland Park since 1999' },
  { icon: '🎣', title: '700-Year Fish Traps', desc: 'Ancient Thonga fish kraals still in use today' },
  { icon: '🦅', title: '520+ Bird Species',  desc: 'Including the rare Pel\'s Fishing-Owl' },
]

const GALLERY = [
  { src: '/images/gallery/1.jpg', tall: true,  alt: 'Wildlife at Kosi Bay' },
  { src: '/images/gallery/2.jpg', tall: false, alt: 'Kosi estuary waters' },
  { src: '/images/gallery/3.jpg', tall: false, alt: 'Coastal forest trail' },
  { src: '/images/gallery/4.jpg', tall: false, alt: 'Sunset over the Kosi lake system' },
]

/* ─── WhatsApp icon ─── */
const WaIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

/* ─── Modal ─── */
type ModalTab = 'accommodation' | 'activity'
function Modal({ open, tab, activityName, onClose }: { open: boolean; tab: ModalTab; activityName?: string; onClose: () => void }) {
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
        <h3 className="modal-title">
          {tab === 'activity' ? `🗺 Enquire: ${activityName ?? 'Activity'}` : '🏕 Accommodation Enquiry'}
        </h3>
        <BookingForm defaultTab={tab} prefilledActivity={activityName} onClose={onClose} />
      </div>
    </div>
  )
}

/* ─── Main App ─── */
export default function App() {
  const [modalOpen, setModalOpen]     = useState(false)
  const [modalTab,  setModalTab]      = useState<ModalTab>('accommodation')
  const [activityName, setActivityName] = useState<string | undefined>()

  const openAccom   = () => { setModalTab('accommodation'); setActivityName(undefined); setModalOpen(true) }
  const openActivity = (name: string) => { setModalTab('activity'); setActivityName(name); setModalOpen(true) }

  /* Google Analytics */
  useEffect(() => {
    if (!GA_ID || GA_ID === 'G-3JRVV8G538') return
    const s1 = document.createElement('script'); s1.async = true; s1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`; document.head.appendChild(s1)
    const s2 = document.createElement('script'); s2.text = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`; document.head.appendChild(s2)
  }, [])

  /* Scroll reveal */
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add('visible'); io.unobserve(e.target) } }),
      { threshold: 0.08 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main>

        {/* ── HERO ── */}
        <Hero onEnquire={openAccom} />

        {/* ── HIGHLIGHTS BAR ── */}
        <section className="highlights" aria-label="Why Kingfisher Bush Lodge">
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
        <section className="about section" id="about" aria-labelledby="about-h">
          <div className="container">
            <div className="about-inner">
              <div className="about-images reveal">
                <img src="/images/activities/snorkeling.jpg" alt="Kosi Bay estuary at golden hour — accommodation Kosi Bay" className="about-img-main" loading="lazy" />
                <img src="/images/restaurant/1.jpg" alt="Coastal forest surrounding Kingfisher Bush Lodge" className="about-img-inset" loading="lazy" />
              </div>
              <div className="about-text reveal">
                <span className="eyebrow">Accommodation in Kosi Bay</span>
                <h2 id="about-h">Affordable bush lodge on South Africa's wildest coast</h2>
                <div className="divider" />
                <p>Kingfisher Bush Lodge offers affordable accommodation in Kosi Bay, KwaZulu-Natal — in the heart of the iSimangaliso Wetland Park UNESCO World Heritage Site. We're a small, owner-managed lodge where the forest, the birds, and the water are the main attraction.</p>
                <p>From luxury en-suite chalets and family tents to campsites, we cater for couples, families and groups. Our guests come for the world-famous Kosi Bay Mouth snorkelling, turtle tours, Tembe Elephant Park safaris and pristine wetland wilderness — and they leave wanting to come back.</p>
                <div className="about-note">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  <span>Kingfisher Bush Lodge is set in peaceful bushveld, approximately 1.6km from Lake Nhlange and close to the beautiful Kosi Bay Mouth — not directly on the beach or lakes.</span>
                </div>
                <div className="about-btns">
                  <button className="btn btn-primary" onClick={openAccom}>Send an enquiry</button>
                  <a href={NB} className="btn btn-outline-teal" target="_blank" rel="noopener">Check availability</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ACCOMMODATION ── */}
        <section className="accommodation section" id="accommodation" aria-labelledby="accom-h">
          <div className="container">
            <div className="section-header reveal">
              <span className="eyebrow">Where you'll sleep</span>
              <h2 id="accom-h">Accommodation in Kosi Bay</h2>
              <div className="divider" />
              <p style={{ color: 'var(--text-muted)', maxWidth: '56ch', margin: 'auto' }}>
                Five accommodation types to suit every budget and group size — from luxury air-conditioned chalets to classic campsites. All with private braai facilities and surrounded by the sounds of the bush.
              </p>
            </div>
            <div className="rooms-grid">
              {ROOMS.map(r => (
                <article className="room-card reveal" key={r.name}>
                  <div className="room-slide-wrap">
                    <RoomSlideshow images={r.images} roomName={r.name} />
                    {r.badge && <span className="room-badge">{r.badge}</span>}
                  </div>
                  <div className="room-body">
                    <h3>{r.name}</h3>
                    <span className="room-capacity">👥 {r.capacity}</span>
                    <p>{r.desc}</p>
                    <div className="room-features">
                      {r.features.map(f => <span className="room-feature" key={f}>{f}</span>)}
                    </div>
                    <div className="room-btns">
                      <a href={NB} className="btn btn-primary" target="_blank" rel="noopener">Book online →</a>
                      <button className="btn btn-outline-dark" onClick={openAccom}>Enquire</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── ACTIVITIES — TOP 4 ── */}
        <section className="activities section" id="activities" aria-labelledby="act-h">
          <div className="container">
            <div className="section-header reveal">
              <span className="eyebrow">Adventures at Kosi Bay</span>
              <h2 id="act-h">Activities &amp; Tours</h2>
              <div className="divider" />
              <p style={{ color: 'var(--text-muted)', maxWidth: '56ch', margin: 'auto' }}>
                Kingfisher Bush Lodge works with trusted local guides and operators to offer unforgettable Kosi Bay experiences. Enquire for availability and pricing.
              </p>
            </div>

            {/* Featured 4 */}
            <div className="top-acts-grid">
              {TOP_ACTIVITIES.map(a => (
                <article className="top-act-card reveal" key={a.id}>
                  {a.seasonal && <span className="act-seasonal">{a.seasonal}</span>}
                  <div className="top-act-icon" aria-hidden="true">{a.icon}</div>
                  <h3>{a.name}</h3>
                  <p className="act-tagline">{a.tagline}</p>
                  <p className="act-desc">{a.desc}</p>
                  {a.options && (
                    <ul className="act-options">
                      {a.options.map(o => <li key={o}><span className="act-option-dot" />  {o}</li>)}
                    </ul>
                  )}
                  <div className="act-footer">
                    <span className="act-duration">⏱ {a.duration}</span>
                    <button className="btn btn-primary btn-sm" onClick={() => openActivity(a.name)}>
                      Enquire &amp; book
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Other activities */}
            <div className="section-header reveal" style={{ marginTop: '4rem', marginBottom: '1.5rem' }}>
              <span className="eyebrow">More to explore</span>
              <h3 style={{ fontFamily: 'var(--font-d)', fontWeight: 300, color: 'var(--teal-deep)' }}>More Kosi Bay adventures</h3>
            </div>
            <div className="other-acts-grid">
              {OTHER_ACTIVITIES.map(a => (
                <div className="other-act-card reveal" key={a.id}>
                  <span className="other-act-icon" aria-hidden="true">{a.icon}</span>
                  <div className="other-act-body">
                    <h4>{a.name}</h4>
                    <p>{a.desc}</p>
                    <div className="other-act-footer">
                      <span className="act-duration">⏱ {a.duration}</span>
                      <button className="btn btn-outline-dark btn-sm" onClick={() => openActivity(a.name)}>Enquire</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="acts-disclaimer reveal">
              All activities are arranged on behalf of guests with approved external operators. Availability, schedules and pricing may vary based on weather conditions, seasonal changes and operator availability.
            </p>
          </div>
        </section>

        {/* ── RESTAURANT ── */}
        <section className="restaurant section" id="restaurant" aria-labelledby="rest-h">
          <div className="container">
            <div className="restaurant-inner">
              <div className="restaurant-img-wrap reveal">
                <img
                  src="/images/hero/hero-3.jpg"
                  alt="Restaurant at Kingfisher Bush Lodge Kosi Bay"
                  className="restaurant-img"
                  loading="lazy"
                />
              </div>
              <div className="restaurant-text reveal">
                <span className="eyebrow">On-site dining</span>
                <h2 id="rest-h">Restaurant</h2>
                <div className="divider" />
                <p>
                  Our on-site restaurant serves hearty breakfasts, fresh lunches and satisfying dinners — all prepared with locally sourced ingredients where possible. Whether you're fuelling up before a morning snorkel or unwinding after a game drive, the restaurant is your home base.
                </p>
                <div className="restaurant-hours">
                  <span className="rest-hours-label">Opening hours</span>
                  <span className="rest-hours-time">🕗 08:00 – 19:00 daily</span>
                </div>
                <div className="restaurant-offerings">
                  <div className="rest-item">🍳 Full breakfasts from 08:00</div>
                  <div className="rest-item">🥗 Light lunches</div>
                  <div className="rest-item">🍽 Dinners until 19:00</div>
                  <div className="rest-item">☕ Coffee, tea &amp; cold drinks</div>
                </div>
                <a href={WA} className="btn btn-primary" target="_blank" rel="noopener" style={{ marginTop: '1rem' }}>
                  <WaIcon size={17} /> Ask about meal bookings
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── SPA ── */}
        <section className="spa section" id="spa" aria-labelledby="spa-h">
          <div className="container">
            <div className="section-header reveal" style={{ marginBottom: '2.5rem' }}>
              <span className="eyebrow">Relax &amp; restore</span>
              <h2 id="spa-h">Zinhozemvelo Mobile Spa</h2>
              <div className="divider" />
              <p style={{ color: 'var(--text-muted)', maxWidth: '52ch', margin: 'auto' }}>
                <em>"Relax Keep Calm — Now You Are In Good Hands"</em><br />
                Our resident mobile spa therapists visit the lodge by appointment. Unwind after a day of adventures with a range of professional treatments.
              </p>
            </div>

            <div className="spa-inner">
              <div className="spa-treatments-grid reveal">

                <div className="spa-price-card">
                  <span className="spa-card-icon">💆</span>
                  <div className="spa-card-body">
                    <h4>Swedish Full Body Massage</h4>
                    <div className="spa-prices">
                      <span className="spa-price-item"><span className="spa-duration">45 min</span><span className="spa-price">R380</span></span>
                      <span className="spa-price-item"><span className="spa-duration">60 min</span><span className="spa-price">R450</span></span>
                    </div>
                  </div>
                </div>

                <div className="spa-price-card">
                  <span className="spa-card-icon">🌿</span>
                  <div className="spa-card-body">
                    <h4>Aromatherapy</h4>
                    <div className="spa-prices">
                      <span className="spa-price-item"><span className="spa-duration">Full treatment</span><span className="spa-price">R480</span></span>
                    </div>
                  </div>
                </div>

                <div className="spa-price-card">
                  <span className="spa-card-icon">💪</span>
                  <div className="spa-card-body">
                    <h4>Deep Tissue Massage</h4>
                    <div className="spa-prices">
                      <span className="spa-price-item"><span className="spa-duration">Full treatment</span><span className="spa-price">R640</span></span>
                    </div>
                  </div>
                </div>

                <div className="spa-price-card">
                  <span className="spa-card-icon">🙆</span>
                  <div className="spa-card-body">
                    <h4>Back, Neck &amp; Shoulders</h4>
                    <div className="spa-prices">
                      <span className="spa-price-item"><span className="spa-duration">30 min</span><span className="spa-price">R300</span></span>
                      <span className="spa-price-item"><span className="spa-duration">45 min</span><span className="spa-price">R340</span></span>
                    </div>
                    <p className="spa-addon">+ R60 to add Hot Stone Therapy</p>
                  </div>
                </div>

                <div className="spa-price-card">
                  <span className="spa-card-icon">🦶</span>
                  <div className="spa-card-body">
                    <h4>Foot Massage</h4>
                    <div className="spa-prices">
                      <span className="spa-price-item"><span className="spa-duration">20 min</span><span className="spa-price">R200</span></span>
                    </div>
                  </div>
                </div>

                <div className="spa-price-card">
                  <span className="spa-card-icon">✨</span>
                  <div className="spa-card-body">
                    <h4>Foot Exfoliation &amp; Massage</h4>
                    <div className="spa-prices">
                      <span className="spa-price-item"><span className="spa-duration">45 min</span><span className="spa-price">R320</span></span>
                    </div>
                  </div>
                </div>

                <div className="spa-price-card">
                  <span className="spa-card-icon">😌</span>
                  <div className="spa-card-body">
                    <h4>Face Cleansing &amp; Steaming</h4>
                    <div className="spa-prices">
                      <span className="spa-price-item"><span className="spa-duration">Full treatment</span><span className="spa-price">R300</span></span>
                    </div>
                  </div>
                </div>

              </div>

              <div className="spa-img-col reveal">
                <img
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&q=80"
                  alt="Zinhozemvelo Mobile Spa at Kingfisher Bush Lodge Kosi Bay"
                  className="spa-img"
                  loading="lazy"
                />
                <div className="spa-booking-note">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  Available to lodge guests by appointment. Please book <strong>at least 24 hours in advance</strong> via WhatsApp or at reception.
                </div>
                <a href={WA} className="btn btn-primary" target="_blank" rel="noopener" style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}>
                  <WaIcon size={17} /> Book a spa treatment
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── GALLERY ── */}
        <section className="gallery-section" id="gallery" aria-labelledby="gallery-h">
          <h2 id="gallery-h" className="sr-only">Photo gallery — Kingfisher Bush Lodge Kosi Bay</h2>
          <div className="gallery-strip">
            {GALLERY.map((g, i) => (
              <div className={`gallery-cell${g.tall ? ' tall' : ''}`} key={i}>
                <img src={g.src} alt={g.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        {/* ── BOOKING CTA ── */}
        <section className="booking-cta section" id="book" aria-labelledby="book-h">
          <div className="container">
            <div className="section-header reveal" style={{ marginBottom: '2.5rem' }}>
              <span className="eyebrow">Book your Kosi Bay stay</span>
              <h2 id="book-h">Ready to visit?</h2>
              <div className="divider" />
              <p style={{ color: 'var(--text-muted)', maxWidth: '50ch', margin: 'auto' }}>
                Book instant online, send us an enquiry, or chat on WhatsApp.
                Direct bookings get 15% off — no platform fees.
              </p>
            </div>
            <div className="booking-options reveal">
              <div className="booking-option">
                <div className="booking-option-icon">🗓</div>
                <h4>Book Online Instantly</h4>
                <p>Instant confirmation via our secure Nightsbridge booking system. Available 24/7.</p>
                <a href={NB} className="btn btn-primary" target="_blank" rel="noopener">Check availability →</a>
              </div>
              <div className="booking-option booking-option--featured">
                <div className="booking-option-icon">✉️</div>
                <h4>Send an Enquiry</h4>
                <p>Tell us your dates, group size and preferences. We reply within 24 hours.</p>
                <button className="btn btn-primary" onClick={openAccom}>Fill in enquiry form</button>
              </div>
              <div className="booking-option">
                <div className="booking-option-icon">💬</div>
                <h4>WhatsApp Us</h4>
                <p>The quickest way to reach us. Message directly for fast personal replies.</p>
                <a href={WA} className="btn btn-wa" target="_blank" rel="noopener"><WaIcon size={18}/> Open WhatsApp</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── LOCATION ── */}
        <section className="location section" id="location" aria-labelledby="loc-h">
          <div className="container">
            <div className="section-header reveal" style={{ marginBottom: '2.5rem' }}>
              <span className="eyebrow">Getting here</span>
              <h2 id="loc-h">Find us</h2>
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
                  <span className="location-label">⭐ Google rating</span>
                  <a href={MAPS_LINK} target="_blank" rel="noopener" className="location-val location-link">4.5 / 5 · 160 reviews</a>
                </div>
                <div className="location-row">
                  <span className="location-label">🕐 Check-in / Check-out</span>
                  <span className="location-val">From 14:00 · By 10:00</span>
                </div>
                <div className="location-row">
                  <span className="location-label">🍽 Restaurant hours</span>
                  <span className="location-val">08:00 – 19:00 daily</span>
                </div>
                <a href={MAPS_LINK} target="_blank" rel="noopener" className="btn btn-primary" style={{ marginTop: '1.1rem' }}>
                  Open in Google Maps →
                </a>
              </div>
              <div className="location-map reveal">
                <iframe
                  title="Kingfisher Bush Lodge location — Kosi Bay accommodation"
                  src={MAPS_EMB}
                  width="100%" height="400"
                  style={{ border: 0, borderRadius: 'var(--radius-lg)', display: 'block' }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── DISCLAIMER ── */}
        <section className="disclaimer-section" aria-label="Important information">
          <div className="container">
            <details className="disclaimer">
              <summary className="disclaimer-summary">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                Important information &amp; policies
                <svg className="chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
              </summary>
              <div className="disclaimer-body">
                <div className="disclaimer-block">
                  <h4>📍 Location</h4>
                  <p>Please note that Kingfisher Bush Lodge is NOT situated directly on the beach or lakes. We are located in a peaceful bushveld setting approximately 1.6km from Lake Nhlange and close to the beautiful Kosi Bay Mouth.</p>
                </div>
                <div className="disclaimer-block">
                  <h4>❌ Cancellation Policy</h4>
                  <p>Cancellations made <strong>14 days or more</strong> before arrival qualify for a <strong>100% refund</strong> of the deposited amount.</p>
                  <p>Cancellations made <strong>less than 14 days</strong> before arrival will result in a <strong>100% forfeit</strong> of the deposited amount.</p>
                </div>
                <div className="disclaimer-block">
                  <h4>🗺 Activities &amp; Tours</h4>
                  <p>Kingfisher Bush Lodge works together with trusted third-party activity operators and local guides. All tours, adventures and activities are arranged on behalf of guests with approved external operators. Activity availability, schedules and pricing may vary depending on weather conditions, seasonal changes and operator availability.</p>
                </div>
                <div className="disclaimer-block">
                  <h4>📷 Photography</h4>
                  <p>Images on this website show both the lodge and the wider iSimangaliso Wetland Park area to represent the full guest experience. Not all images are taken from the lodge property itself.</p>
                </div>
                <div className="disclaimer-block">
                  <h4>💰 Rates</h4>
                  <p>All rates are subject to change. Final confirmation is provided at time of booking. The 15% direct booking discount applies only to bookings made directly via this website or WhatsApp — not via third-party booking platforms.</p>
                </div>
              </div>
            </details>
          </div>
        </section>

      </main>

      <Footer />

      {/* ── WHATSAPP FAB ── */}
      <a href={WA} className="whatsapp-fab" target="_blank" rel="noopener" aria-label="Chat with Kingfisher Bush Lodge on WhatsApp">
        <WaIcon size={28} />
      </a>

      {/* ── MODAL ── */}
      <Modal open={modalOpen} tab={modalTab} activityName={activityName} onClose={() => setModalOpen(false)} />

      <style>{`.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}`}</style>
    </>
  )
}