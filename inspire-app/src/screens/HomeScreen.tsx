import { useState } from 'react'
import { Stethoscope, ChevronDown } from 'lucide-react'

const phases = [
  {
    label: 'Warm bad',
    period: 'Voor start t/m week 4',
    color: '#E8842C',
    items: [
      'Buddy contact + moeder gans',
      'Rondleiding afdeling',
      'Buddy koffie',
      'Startgesprek AIOS',
      'Proeftijdgesprek ANIOS',
    ],
  },
  {
    label: "'t Kikkerbasje",
    period: 'Maand 2–3',
    color: '#1B3A5C',
    items: [
      'Meeting 1 INSPIRE (maand 2)',
      'Meeting 2 INSPIRE (maand 3)',
      'Voortgangsgesprek AIOS',
      'Inloopspreekuur opleider (1×/maand)',
    ],
  },
  {
    label: 'Alle eendjes zwemmen',
    period: 'Maand 4–12',
    color: '#4A9B6E',
    items: [
      'Meeting 3 INSPIRE (maand 4)',
      'Meeting 4 INSPIRE (maand 6)',
      'Voortgangsgesprekken',
      'Exitgesprek (maand 11)',
    ],
  },
]

function ContextAccordion() {
  const [open, setOpen] = useState(false)
  return (
    <div className="card">
      <div className="accordion-header" onClick={() => setOpen(!open)}>
        <div className="accordion-header-left">
          <div className="accordion-icon" style={{ background: '#1B3A5C' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div className="accordion-title">Begeleiding in context</div>
            <div className="accordion-subtitle">Overzicht van alle begeleidingsmomenten</div>
          </div>
        </div>
        <ChevronDown size={18} className={`accordion-chevron ${open ? 'open' : ''}`} />
      </div>
      {open && (
        <div className="accordion-body">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {phases.map((phase) => (
              <div
                key={phase.label}
                style={{
                  borderRadius: 10,
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                }}
              >
                <div
                  style={{
                    background: phase.color,
                    padding: '8px 12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                  }}
                >
                  <span style={{ color: 'white', fontWeight: 700, fontSize: 13 }}>{phase.label}</span>
                  <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 11 }}>{phase.period}</span>
                </div>
                <div style={{ padding: '8px 12px', background: 'var(--bg)' }}>
                  {phase.items.map((item) => (
                    <div key={item} style={{ display: 'flex', gap: 7, alignItems: 'flex-start', padding: '3px 0' }}>
                      <div style={{ width: 5, height: 5, borderRadius: '50%', background: phase.color, flexShrink: 0, marginTop: 6 }} />
                      <span style={{ fontSize: 13, color: 'var(--text)', lineHeight: 1.4 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

const meetings = [
  { n: 1, title: 'Kennismaking', subtitle: 'Maand 2', color: '#1B3A5C', optional: false },
  { n: 2, title: 'Eigen invulling', subtitle: 'Maand 3', color: '#E8842C', optional: false },
  { n: 3, title: 'Eigen invulling', subtitle: 'Maand 4', color: '#E8842C', optional: false },
  { n: 4, title: 'Evaluatie', subtitle: 'Maand 6', color: '#4A9B6E', optional: false },
  { n: 5, title: 'Optioneel', subtitle: 'Eigen planning', color: '#9CA3AF', optional: true },
  { n: 6, title: 'Optioneel', subtitle: 'Eigen planning', color: '#9CA3AF', optional: true },
]

export function HomeScreen() {
  return (
    <div className="screen">
      {/* Hero */}
      <div className="hero">
        <div className="inspire-logo">
          <div className="inspire-logo-icon">
            <Stethoscope size={28} color="white" />
          </div>
          <div>
            <div className="inspire-name">INSPIRE</div>
            <div className="inspire-tagline">Mentorprogramma Interne Geneeskunde HMC</div>
          </div>
        </div>

        <div className="acronym-grid">
          {[
            ['I', 'Introduction', ' program for'],
            ['N', 'New', ' doctors'],
            ['S', 'Supporting', ' Personal development,'],
            ['P', 'Personal', ' development,'],
            ['I', 'Interpersonal', ' connection,'],
            ['R', 'Resilience', ' and'],
            ['E', 'Enhancing', ' job satisfaction'],
          ].map(([letter, word, rest], i) => (
            <div key={i} className="acronym-row">
              <span className="acronym-letter">{letter}</span>
              <span className="acronym-word">{word}</span>
              <span className="acronym-rest">{rest}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="card-plain">
        <p className="home-description">
          INSPIRE is een mentorprogramma voor arts-assistenten interne geneeskunde bij HMC. Het
          programma bestaat uit <strong>4 tot 6 één-op-één meetings</strong> tussen een mentor
          (internist) en een mentee (arts-assistent), gericht op persoonlijke en professionele
          ontwikkeling.
        </p>
      </div>

      {/* Timeline */}
      <div className="section-label">Tijdlijn meetings</div>
      <div className="card-plain" style={{ paddingTop: 8, paddingBottom: 8 }}>
        <div className="timeline-track">
          <div className="timeline-line" />
          {meetings.map((m) => (
            <div key={m.n} className="timeline-item">
              <div className="timeline-dot" style={{ background: m.color }}>
                {m.n}
              </div>
              <div className="timeline-content">
                <div className="timeline-title">
                  Meeting {m.n}: {m.title}
                  {m.optional && <span className="badge badge-optional">optioneel</span>}
                </div>
                <div className="timeline-meta">{m.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Context accordion */}
      <div className="section-label">Begeleiding in context</div>
      <ContextAccordion />

      {/* Info chips */}
      <div className="card-plain">
        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', marginBottom: 10 }}>
          Praktische info
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            'Maximaal 35 minuten per meeting',
            'Elke 6 à 8 weken een meeting',
            'Initiatief bij de mentee',
            'Tijdens werktijd, in persoon',
            'Alles is vertrouwelijk',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 6,
                  background: 'var(--green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: 1,
                }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span style={{ fontSize: 13, color: 'var(--text)', lineHeight: 1.5 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
