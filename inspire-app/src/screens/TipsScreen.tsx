import { Award, GraduationCap, Target, CalendarCheck, AlertTriangle } from 'lucide-react'
import { Accordion } from '../components/Accordion'

export function TipsScreen() {
  return (
    <div className="screen">
      <div className="page-header">
        <h1>Tips</h1>
        <p>Handvatten voor een goede samenwerking</p>
      </div>

      <div style={{ height: 8 }} />

      {/* Goede mentor */}
      <Accordion
        icon={<Award size={18} color="white" />}
        iconBg="#1B3A5C"
        title="Een goede mentor is..."
        subtitle="Kenmerken van een effectieve mentor"
      >
        <ul>
          <li>Bereid om kennis, ervaring en inzichten te delen</li>
          <li>Beschikbaar en bereikbaar voor de mentee</li>
          <li>Benaderbaar en laagdrempelig in contact</li>
          <li>Eerlijk en tegelijk tactvol in feedback</li>
          <li>Oprecht nieuwsgierig naar de ontwikkeling van de mentee</li>
          <li>Toont medeleven en begrip voor uitdagingen</li>
        </ul>
      </Accordion>

      {/* Goede mentee */}
      <Accordion
        icon={<GraduationCap size={18} color="white" />}
        iconBg="#E8842C"
        title="Een goede mentee is..."
        subtitle="Jouw rol in het programma"
      >
        <ul>
          <li>Leergierig en open voor nieuwe inzichten</li>
          <li>Neemt de mentorrelatie serieus</li>
          <li>Toont initiatief: plant meetings en bereidt zich voor</li>
          <li>Komt goed voorbereid naar elk gesprek</li>
          <li>Past het geleerde actief toe in de praktijk</li>
          <li>Is eerlijk over wat er speelt, ook als het moeilijk is</li>
        </ul>
      </Accordion>

      {/* SMART */}
      <Accordion
        icon={<Target size={18} color="white" />}
        iconBg="#4A9B6E"
        title="SMART doelen stellen"
        subtitle="Zo maak je doelen concreet en haalbaar"
      >
        <p style={{ marginBottom: 14 }}>
          Goede doelen zijn SMART geformuleerd. Gebruik dit als leidraad bij het stellen van
          persoonlijke leerdoelen.
        </p>
        <div className="smart-grid">
          {[
            {
              letter: 'S',
              word: 'Specifiek',
              desc: 'Wat wil je precies bereiken? Formuleer zo concreet mogelijk.',
            },
            {
              letter: 'M',
              word: 'Meetbaar',
              desc: 'Hoe weet je wanneer je het doel hebt bereikt?',
            },
            {
              letter: 'A',
              word: 'Acceptabel',
              desc: 'Is het doel zinvol en wil je er echt voor gaan?',
            },
            {
              letter: 'R',
              word: 'Realistisch',
              desc: 'Is het haalbaar gegeven jouw situatie en mogelijkheden?',
            },
            {
              letter: 'T',
              word: 'Tijdsgebonden',
              desc: 'Wanneer wil je dit doel bereikt hebben?',
            },
          ].map((item) => (
            <div key={item.letter} className="smart-row">
              <div className="smart-letter">{item.letter}</div>
              <div className="smart-text">
                <strong>{item.word}</strong>
                <span>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </Accordion>

      {/* Afspraken */}
      <Accordion
        icon={<CalendarCheck size={18} color="white" />}
        iconBg="#7C3AED"
        title="Afspraken en spelregels"
        subtitle="Randvoorwaarden voor een goede samenwerking"
      >
        <ul>
          <li>Maximaal 35 minuten per meeting</li>
          <li>Meetings vinden plaats tijdens werktijd en bij voorkeur in persoon</li>
          <li>Leg telefoons weg tijdens de meeting — geef elkaar volledige aandacht</li>
          <li>Wees open en eerlijk tegenover elkaar</li>
          <li>
            Alles is vertrouwelijk: de mentor deelt <strong>niets</strong> met opleiders of
            supervisors
          </li>
          <li>Bewaar een professionele afstand — het is een werkrelatie</li>
          <li>Initiatief voor planning ligt bij de mentee</li>
        </ul>
        <div className="notice" style={{ marginTop: 14 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path d="M12 8v4m0 4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <p>
            De vertrouwelijkheid is absoluut: alles wat besproken wordt, blijft tussen mentor en
            mentee. De mentor bespreekt de inhoud van gesprekken nooit met opleiders.
          </p>
        </div>
      </Accordion>
      {/* Aandachtspunten */}
      <Accordion
        icon={<AlertTriangle size={18} color="white" />}
        iconBg="#DC2626"
        title="Aandachtspunten"
        subtitle="Wat te doen als het niet loopt zoals verwacht"
      >
        <ul>
          <li>
            Bespreek problemen eerst onderling met je mentor of mentee. Lukt dit niet, neem dan
            contact op met het <strong>mentorschapsteam</strong>.
          </li>
          <li>
            Bij geen klik of een verbroken vertrouwensband: een nieuw koppel is mogelijk via het
            mentorschapsteam — zonder consequenties.
          </li>
          <li>
            De mentor is <strong>geen</strong> getrainde psycholoog, life coach of carrièrecoach.
            Bij behoefte aan professionele hulp: doorverwijzen naar de vertrouwenspersoon,
            psycholoog, opleider of eigen huisarts.
          </li>
        </ul>
      </Accordion>
    </div>
  )
}
