import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'

// ⚠️  Replace this with your real Formspree form ID (see setup guide)
const FORMSPREE_ID = 'xlgyggkv'

type Tab = 'accommodation' | 'tembe'

export default function BookingForm({ defaultTab = 'accommodation', onClose }: { defaultTab?: Tab; onClose?: () => void }) {
  const [tab, setTab] = useState<Tab>(defaultTab)
  const [state, handleSubmit] = useForm(FORMSPREE_ID)

  if (state.succeeded) {
    return (
      <div className="form-success">
        <div className="form-success-icon">✓</div>
        <h3>Enquiry sent!</h3>
        <p>We'll reply to your email within 24 hours.<br />For urgent queries WhatsApp us on <strong>+27 72 242 3571</strong>.</p>
        {onClose && <button className="btn btn-primary" onClick={onClose} style={{ marginTop: '1.25rem' }}>Close</button>}
      </div>
    )
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      {/* Formspree config — sets email subject and recipient */}
      <input type="hidden" name="_subject" value={tab === 'tembe' ? 'New Tembe Safari Enquiry — Kingfisher Lodge' : 'New Accommodation Enquiry — Kingfisher Lodge'} />
      <input type="hidden" name="enquiry_type" value={tab} />

      {/* Tab toggle */}
      <div className="form-tabs" role="group" aria-label="Enquiry type">
        <button type="button" className={`form-tab${tab === 'accommodation' ? ' active' : ''}`} onClick={() => setTab('accommodation')}>🏕 Accommodation</button>
        <button type="button" className={`form-tab${tab === 'tembe' ? ' active' : ''}`} onClick={() => setTab('tembe')}>🦒 Tembe Safari</button>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="bf-name">Full name *</label>
          <input id="bf-name" type="text" name="name" required placeholder="Your full name" />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="form-error" />
        </div>

        <div className="form-group">
          <label htmlFor="bf-email">Email address *</label>
          <input id="bf-email" type="email" name="email" required placeholder="you@example.com" />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="form-error" />
        </div>

        <div className="form-group">
          <label htmlFor="bf-phone">WhatsApp / phone</label>
          <input id="bf-phone" type="tel" name="phone" placeholder="+27 72 ..." />
        </div>

        <div className="form-group">
          <label htmlFor="bf-country">Country</label>
          <input id="bf-country" type="text" name="country" placeholder="e.g. South Africa" />
        </div>

        {tab === 'accommodation' ? (<>
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
              <option>Bush Chalet (up to 2 guests)</option>
              <option>Family Cabin (up to 4 guests)</option>
              <option>Tented Suite (up to 2 guests)</option>
              <option>Not sure — please advise</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="bf-adults">Adults *</label>
            <select id="bf-adults" name="adults" required>
              {[1,2,3,4,5,6].map(n => <option key={n}>{n}</option>)}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="bf-children">Children (under 12)</label>
            <select id="bf-children" name="children">
              {[0,1,2,3,4].map(n => <option key={n}>{n}</option>)}
            </select>
          </div>
        </>) : (<>
          <div className="form-group">
            <label htmlFor="bf-safari-date">Preferred safari date *</label>
            <input id="bf-safari-date" type="date" name="safari_date" required />
            <ValidationError prefix="Safari date" field="safari_date" errors={state.errors} className="form-error" />
          </div>

          <div className="form-group">
            <label htmlFor="bf-group">Group size *</label>
            <select id="bf-group" name="group_size" required>
              {[1,2,3,4,5,6,7,8,'9+'].map(n => <option key={String(n)}>{n}</option>)}
            </select>
          </div>

          <div className="form-full form-group">
            <label htmlFor="bf-tour">Tour preference</label>
            <select id="bf-tour" name="tour_type">
              <option value="">— Please select —</option>
              <option>Full-day Tembe game drive</option>
              <option>Half-day Tembe game drive</option>
              <option>Sunrise game drive</option>
              <option>Night drive</option>
              <option>Not sure — please send rates</option>
            </select>
          </div>
        </>)}

        <div className="form-group form-full">
          <label htmlFor="bf-msg">{tab === 'tembe' ? 'Questions / rate query' : 'Special requests or questions'}</label>
          <textarea id="bf-msg" name="message" rows={4}
            placeholder={tab === 'tembe' ? 'Ask about rates, accessibility, what to bring…' : 'Dietary needs, special occasion, accessibility…'} />
          <ValidationError prefix="Message" field="message" errors={state.errors} className="form-error" />
        </div>
      </div>

      {tab === 'accommodation' && (
        <p className="form-note">
          💡 For instant confirmation, book directly at{' '}
          <a href="https://book.nightsbridge.com/23617" target="_blank" rel="noopener">Nightsbridge</a>.
          Enquiries are answered within 24 hours.
        </p>
      )}
      {tab === 'tembe' && (
        <p className="form-note">
          🦒 We'll reply with current Tembe rates and availability within 24 hours.
        </p>
      )}

      <button type="submit" className="btn btn-primary form-submit" disabled={state.submitting}>
        {state.submitting ? 'Sending…' : `Send ${tab === 'tembe' ? 'Safari' : 'Booking'} Enquiry`}
      </button>

      <ValidationError errors={state.errors} className="form-error form-error--global" />
    </form>
  )
}