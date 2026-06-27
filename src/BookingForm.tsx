import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'

// ⚠️ Replace with your real Formspree form ID (see SETUP_GUIDE.md Step 3)
const FORMSPREE_ID = 'YOUR_FORM_ID'

type Tab = 'accommodation' | 'activity'

interface Props {
  defaultTab?: Tab
  prefilledActivity?: string
  onClose?: () => void
}

export default function BookingForm({ defaultTab = 'accommodation', prefilledActivity, onClose }: Props) {
  const [tab, setTab] = useState<Tab>(defaultTab)
  const [state, handleSubmit] = useForm(FORMSPREE_ID)

  if (state.succeeded) {
    return (
      <div className="form-success">
        <div className="form-success-icon">✓</div>
        <h3>Enquiry sent!</h3>
        <p>
          Thank you — we'll reply to <strong>info@kosibaysouthafrica.co.za</strong> within 24 hours.<br />
          For urgent queries call or WhatsApp us on <strong>+27 72 242 3571</strong>.
        </p>
        {onClose && (
          <button className="btn btn-primary" onClick={onClose} style={{ marginTop: '1.25rem' }}>
            Close
          </button>
        )}
      </div>
    )
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      {/* Formspree hidden config */}
      <input type="hidden" name="_subject" value={
        tab === 'activity'
          ? `New Activity Enquiry: ${prefilledActivity ?? 'Activity'} — Kingfisher Lodge`
          : 'New Accommodation Enquiry — Kingfisher Bush Lodge'
      } />
      <input type="hidden" name="enquiry_type" value={tab} />
      {prefilledActivity && <input type="hidden" name="activity" value={prefilledActivity} />}

      {/* Tab toggle — only show if no activity was prefilled */}
      {!prefilledActivity && (
        <div className="form-tabs" role="group" aria-label="Enquiry type">
          <button type="button" className={`form-tab${tab === 'accommodation' ? ' active' : ''}`} onClick={() => setTab('accommodation')}>
            🏕 Accommodation
          </button>
          <button type="button" className={`form-tab${tab === 'activity' ? ' active' : ''}`} onClick={() => setTab('activity')}>
            🗺 Activity / Tour
          </button>
        </div>
      )}

      {prefilledActivity && (
        <div className="form-activity-label">
          Enquiring about: <strong>{prefilledActivity}</strong>
        </div>
      )}

      <div className="form-grid">
        {/* Name */}
        <div className="form-group">
          <label htmlFor="bf-name">Full name *</label>
          <input id="bf-name" type="text" name="name" required placeholder="Your full name" />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="form-error" />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="bf-email">Email address *</label>
          <input id="bf-email" type="email" name="email" required placeholder="you@example.com" />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="form-error" />
        </div>

        {/* Phone */}
        <div className="form-group">
          <label htmlFor="bf-phone">WhatsApp / phone number</label>
          <input id="bf-phone" type="tel" name="phone" placeholder="+27 ..." />
        </div>

        {/* Country */}
        <div className="form-group">
          <label htmlFor="bf-country">Country</label>
          <input id="bf-country" type="text" name="country" placeholder="e.g. South Africa" />
        </div>

        {/* ── ACCOMMODATION fields ── */}
        {tab === 'accommodation' && (<>
          <div className="form-group">
            <label htmlFor="bf-checkin">Check-in date *</label>
            <input id="bf-checkin" type="date" name="checkin" required />
            <ValidationError prefix="Check-in" field="checkin" errors={state.errors} className="form-error" />
          </div>

          <div className="form-group">
            <label htmlFor="bf-checkout">Check-out date *</label>
            <input id="bf-checkout" type="date" name="checkout" required />
            <ValidationError prefix="Check-out" field="checkout" errors={state.errors} className="form-error" />
          </div>

          <div className="form-group form-full">
            <label htmlFor="bf-room">Preferred accommodation</label>
            <select id="bf-room" name="room_type">
              <option value="">— Please select —</option>
              <option>Luxury Tented En-Suite Chalet (sleeps 2–3)</option>
              <option>Standard Safari Tent (sleeps 2)</option>
              <option>Luxury Family En-Suite Tent (sleeps up to 5)</option>
              <option>Two Bedroom Family Unit (sleeps up to 5)</option>
              <option>Campsite (up to 4 guests)</option>
              <option>Not sure — please advise</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="bf-adults">Number of adults *</label>
            <select id="bf-adults" name="adults" required>
              {[1,2,3,4,5,6,7,8].map(n => <option key={n}>{n}</option>)}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="bf-children">Children (under 12)</label>
            <select id="bf-children" name="children">
              {[0,1,2,3,4,5].map(n => <option key={n}>{n}</option>)}
            </select>
          </div>
        </>)}

        {/* ── ACTIVITY fields ── */}
        {tab === 'activity' && (<>
          {!prefilledActivity && (
            <div className="form-group form-full">
              <label htmlFor="bf-activity">Activity / tour *</label>
              <select id="bf-activity" name="activity_name" required>
                <option value="">— Please select —</option>
                <optgroup label="Featured experiences">
                  <option>Tembe Elephant Park — Half-day safari</option>
                  <option>Tembe Elephant Park — Full-day safari</option>
                  <option>Tembe Elephant Park — Lion Monitoring Experience</option>
                  <option>Kosi Aquarium Snorkelling Adventure</option>
                  <option>Three-Lake Boat Cruise</option>
                  <option>Kosi Mouth Turtle Tour (Nov–Mar)</option>
                </optgroup>
                <optgroup label="More adventures">
                  <option>Kosi Bay Kayaking</option>
                  <option>Best of Kosi Bay (full day)</option>
                  <option>Fish Kraal &amp; Palm Wine Tour</option>
                  <option>Birding Walk</option>
                  <option>Kosi Mouth Guided Hike</option>
                </optgroup>
              </select>
              <ValidationError prefix="Activity" field="activity_name" errors={state.errors} className="form-error" />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="bf-act-date">Preferred date *</label>
            <input id="bf-act-date" type="date" name="activity_date" required />
            <ValidationError prefix="Date" field="activity_date" errors={state.errors} className="form-error" />
          </div>

          <div className="form-group">
            <label htmlFor="bf-group">Group size *</label>
            <select id="bf-group" name="group_size" required>
              {[1,2,3,4,5,6,7,8,'9+'].map(n => <option key={String(n)}>{n}</option>)}
            </select>
          </div>
        </>)}

        {/* Message — both tabs */}
        <div className="form-group form-full">
          <label htmlFor="bf-msg">
            {tab === 'activity' ? 'Questions or special requests' : 'Special requests or questions'}
          </label>
          <textarea
            id="bf-msg"
            name="message"
            rows={4}
            placeholder={
              tab === 'activity'
                ? 'Ask about rates, what to bring, accessibility, group discounts…'
                : 'Dietary needs, special occasion, accessibility, extra beds…'
            }
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} className="form-error" />
        </div>
      </div>

      {tab === 'accommodation' && (
        <p className="form-note">
          💡 For instant confirmation, also try{' '}
          <a href="https://book.nightsbridge.com/23617" target="_blank" rel="noopener">
            Nightsbridge
          </a>
          {' '}— our secure online booking system. Enquiries are answered within 24 hours.
        </p>
      )}
      {tab === 'activity' && (
        <p className="form-note">
          🗺 We'll reply with current rates, availability and everything you need to know within 24 hours.
        </p>
      )}

      <button type="submit" className="btn btn-primary form-submit" disabled={state.submitting}>
        {state.submitting ? 'Sending…' : 'Send Enquiry'}
      </button>

      <ValidationError errors={state.errors} className="form-error form-error--global" />
    </form>
  )
}