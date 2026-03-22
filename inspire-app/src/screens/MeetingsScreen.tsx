import { Users, MessageCircle, Star, CheckSquare, Clock, Calendar, UserCheck } from 'lucide-react'
import { Accordion } from '../components/Accordion'

const infoChips = (
  <div className="chip-row">
    <div className="chip">
      <Clock size={12} />
      Max 35 min
    </div>
    <div className="chip">
      <Calendar size={12} />
      Elke 6–8 weken
    </div>
    <div className="chip">
      <UserCheck size={12} />
      Initiatief bij mentee
    </div>
  </div>
)

export function MeetingsScreen() {
  return (
    <div className="screen">
      <div className="page-header">
        <h1>Meetings</h1>
        <p>Overzicht van alle mentorgesprekken</p>
      </div>

      <div className="section-label">Verplichte meetings</div>

      {/* Meeting 1 */}
      <Accordion
        icon={<Users size={18} color="white" />}
        iconBg="#1B3A5C"
        title="Meeting 1 — Kennismaking"
        subtitle="Maand 2 van de opleiding"
        defaultOpen={true}
      >
        {infoChips}
        <div className="detail-section">
          <div className="detail-label">Thema</div>
          <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--blue)', marginBottom: 12 }}>
            "Wie ben ik – wie ben jij?"
          </p>
        </div>
        <div className="detail-section">
          <div className="detail-label">Gespreksonderwerpen</div>
          <ul>
            <li>Persoonlijke kennismaking: wie ben je, wat zijn je hobby's en interesses?</li>
            <li>Professionele achtergrond: welke weg heb je afgelegd tot nu toe?</li>
            <li>Toekomstplannen: wat wil je worden, waar zie je jezelf over 5–10 jaar?</li>
            <li>Eigen inbreng: wat wil jij bespreken of meenemen in dit programma?</li>
            <li>Verwachtingen van de samenwerking met je mentor</li>
          </ul>
        </div>
        <div className="notice">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path d="M12 8v4m0 4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <p>
            Dit is de kennismakingsmeeting. Neem de tijd om elkaar goed te leren kennen — een goede
            basis maakt de volgende gesprekken waardevol.
          </p>
        </div>
      </Accordion>

      {/* Meeting 2 */}
      <Accordion
        icon={<MessageCircle size={18} color="white" />}
        iconBg="#E8842C"
        title="Meeting 2 — Eigen invulling"
        subtitle="Maand 3 van de opleiding"
      >
        {infoChips}
        <div className="detail-section">
          <div className="detail-label">Jouw keuze</div>
          <p>
            Kies zelf een onderwerp dat jou bezighoudt of waarover je meer wilt leren. Gebruik de
            tab <strong>Inspiratie</strong> voor voorbeeldonderwerpen en gespreksstructuren.
          </p>
        </div>
        <div className="detail-section">
          <div className="detail-label">Voorbereiding</div>
          <ul>
            <li>Kies een onderwerp dat je bezighoudt of wil verkennen</li>
            <li>Bedenk vooraf wat je wil bereiken in dit gesprek</li>
            <li>Formuleer eventueel al een doel (SMART — zie tab Tips)</li>
          </ul>
        </div>
      </Accordion>

      {/* Meeting 3 */}
      <Accordion
        icon={<MessageCircle size={18} color="white" />}
        iconBg="#E8842C"
        title="Meeting 3 — Eigen invulling"
        subtitle="Maand 4 van de opleiding"
      >
        {infoChips}
        <div className="detail-section">
          <div className="detail-label">Jouw keuze</div>
          <p>
            Kies opnieuw een onderwerp naar keuze. Je kunt ook doorgaan op een eerder gesprek of een
            eerder gesteld doel evalueren.
          </p>
        </div>
        <div className="detail-section">
          <div className="detail-label">Voorbereiding</div>
          <ul>
            <li>Heb je al doelen gesteld? Hoe staat het daarmee?</li>
            <li>Wat wil je dit gesprek bereiken?</li>
            <li>Zijn er recente ervaringen die je wil bespreken?</li>
          </ul>
        </div>
      </Accordion>

      {/* Meeting 4 - Evaluatie */}
      <Accordion
        icon={<CheckSquare size={18} color="white" />}
        iconBg="#4A9B6E"
        title="Meeting 4 — Evaluatie"
        subtitle="Maand 6 van de opleiding"
      >
        {infoChips}
        <div className="detail-section">
          <div className="detail-label">Evaluatievragen</div>
          <ul>
            <li>Hoe heb je het traject als geheel ervaren?</li>
            <li>Wat is de meerwaarde geweest van het mentorprogramma voor jou?</li>
            <li>Hoe was de samenwerking met je mentor?</li>
            <li>Zijn er nog openstaande doelen of thema's die aandacht verdienen?</li>
            <li>Wil je doorgaan met optionele meetings (5 en/of 6)?</li>
          </ul>
        </div>
        <div className="notice">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path d="M12 8v4m0 4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <p>
            Na deze meeting vragen we je om een korte enquête in te vullen. Zie de tab Contact voor
            de link.
          </p>
        </div>
      </Accordion>

      <div className="section-label">Optionele meetings</div>

      {/* Meeting 5 */}
      <Accordion
        icon={<Star size={18} color="#9CA3AF" />}
        iconBg="#f3f4f6"
        title="Meeting 5 — Optioneel"
        subtitle="Eigen planning"
      >
        {infoChips}
        <div className="detail-section">
          <p>
            Volledig naar eigen invulling. Kies een onderwerp uit de Inspiratietab of bespreek iets
            wat actueel is in jouw werk of ontwikkeling.
          </p>
        </div>
      </Accordion>

      {/* Meeting 6 */}
      <Accordion
        icon={<Star size={18} color="#9CA3AF" />}
        iconBg="#f3f4f6"
        title="Meeting 6 — Optioneel"
        subtitle="Eigen planning"
      >
        {infoChips}
        <div className="detail-section">
          <p>
            Volledig naar eigen invulling. Kies een onderwerp uit de Inspiratietab of bespreek iets
            wat actueel is in jouw werk of ontwikkeling.
          </p>
        </div>
      </Accordion>
    </div>
  )
}
