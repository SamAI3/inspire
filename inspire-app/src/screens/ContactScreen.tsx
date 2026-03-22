import { Phone, Mail, ExternalLink, Shield, Clock } from 'lucide-react'

interface Person {
  name: string
  role: string
  tel?: string
  email: string
  initials: string
  color: string
}

function ContactCard({ title, icon, persons }: { title: string; icon: React.ReactNode; persons: Person[] }) {
  return (
    <div className="card-plain">
      <div className="contact-section-title">
        {icon}
        {title}
      </div>
      {persons.map((person) => (
        <div key={person.email} className="contact-person">
          <div className="contact-avatar" style={{ background: person.color }}>
            {person.initials}
          </div>
          <div className="contact-info">
            <div className="contact-name">{person.name}</div>
            <div className="contact-role">{person.role}</div>
            <div className="contact-links">
              {person.tel && (
                <a href={`tel:${person.tel}`} className="contact-link">
                  <Phone size={13} />
                  {person.tel}
                </a>
              )}
              <a href={`mailto:${person.email}`} className="contact-link">
                <Mail size={13} />
                {person.email}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function ContactScreen() {
  return (
    <div className="screen">
      <div className="page-header">
        <h1>Contact</h1>
        <p>Wie kun je bereiken voor vragen?</p>
      </div>

      <div className="section-label">Mentorschapsteam</div>
      <ContactCard
        title="Coördinatie INSPIRE"
        icon={
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        }
        persons={[
          {
            name: 'Fleur Kapteijn',
            role: 'Arts-assistent (AIOS)',
            tel: '0610249029',
            email: 'f.kaptein@haaglandenmc.nl',
            initials: 'FK',
            color: '#E8842C',
          },
          {
            name: 'Nienke Hommes',
            role: 'Internist',
            tel: '088-9796592',
            email: 'n.hommes@haaglandenmc.nl',
            initials: 'NH',
            color: '#1B3A5C',
          },
        ]}
      />

      <div className="section-label">Opleiders</div>
      <ContactCard
        title="Opleiding AIOS Interne Geneeskunde"
        icon={
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        }
        persons={[
          {
            name: 'Mariëlle de Vreede',
            role: 'Opleider AIOS',
            tel: '088-9796339',
            email: 'm.de.vreede@haaglandenmc.nl',
            initials: 'MV',
            color: '#4A9B6E',
          },
          {
            name: 'Herman Hofstee',
            role: 'Plaatsvervangend opleider AIOS',
            tel: '088-9796591',
            email: 'h.hofstee@haaglandenmc.nl',
            initials: 'HH',
            color: '#7C3AED',
          },
        ]}
      />

      <div className="section-label">Vertrouwenspersoon</div>
      <div className="card-plain">
        <div className="contact-section-title">
          <Shield size={14} />
          Vertrouwelijk contact
        </div>
        <div className="contact-person">
          <div className="contact-avatar" style={{ background: '#DC2626' }}>SM</div>
          <div className="contact-info">
            <div className="contact-name">Sanne van Manschot</div>
            <div className="contact-role">Vertrouwenspersoon</div>
            <div className="contact-links">
              <a href="mailto:S.manschot@haaglandenmc.nl" className="contact-link">
                <Mail size={13} />
                S.manschot@haaglandenmc.nl
              </a>
            </div>
          </div>
        </div>
        <div className="notice" style={{ marginTop: 12 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path d="M12 8v4m0 4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <p>
            De vertrouwenspersoon is er voor als je ergens mee zit dat je niet met je mentor of
            opleider kunt of wil bespreken. Alles is volledig vertrouwelijk.
          </p>
        </div>
      </div>

      <div className="section-label">Inloopspreekuren</div>
      <div className="card-plain">
        <div className="contact-section-title">
          <Clock size={14} />
          Spreekuren opleiders
        </div>
        {[
          { name: 'Mariëlle de Vreede', when: 'Dinsdagochtend 9:00–11:00', for: 'AIOS', color: '#4A9B6E', initials: 'MV' },
          { name: 'Laima Siddiqi', when: 'Donderdag 15:00–17:00', for: 'ANIOS', color: '#E8842C', initials: 'LS' },
          { name: 'Nienke Hommes', when: 'Vrijdag 15:00–17:00', for: 'ANIOS', color: '#1B3A5C', initials: 'NH' },
        ].map((s) => (
          <div key={s.name} className="contact-person">
            <div className="contact-avatar" style={{ background: s.color }}>{s.initials}</div>
            <div className="contact-info">
              <div className="contact-name">{s.name}</div>
              <div className="contact-role">Inloopspreekuur voor {s.for}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 5 }}>
                <Clock size={12} color="var(--text-muted)" />
                <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 500 }}>{s.when}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="section-label">Evaluatie</div>
      <div className="card-plain">
        <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.6, marginBottom: 14 }}>
          Na afloop van het programma vragen we je een korte evaluatie-enquête in te vullen. Dit
          helpt ons het programma te verbeteren voor toekomstige deelnemers.
        </p>
        <a
          href="https://placeholder-url.nl"
          className="eval-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink size={18} />
          Evaluatie-enquête invullen
        </a>
        <p
          style={{
            fontSize: 11,
            color: 'var(--text-muted)',
            textAlign: 'center',
            marginTop: 8,
          }}
        >
          Link wordt later toegevoegd
        </p>
      </div>
    </div>
  )
}
