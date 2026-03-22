import { Scale, Compass, MessageSquare, BookOpen, AlertCircle } from 'lucide-react'
import { Accordion } from '../components/Accordion'

const topics = [
  {
    icon: <Scale size={18} color="white" />,
    iconBg: '#1B3A5C',
    title: 'Werk-privébalans',
    subtitle: 'Hoe houd je het vol?',
    content: {
      intro:
        'Bespreek samen hoe jij de balans tussen werk en privé ervaart, wat moeilijkheden zijn en hoe je hierin kunt groeien.',
      sections: [
        {
          label: 'Jouw huidige balans',
          items: [
            'Wat is jouw mening over je huidige werk-privébalans?',
            'Wat gaat er goed in het bewaken van die balans?',
            'Wat gaat er minder goed, of waar loop je tegenaan?',
          ],
        },
        {
          label: 'Doelen stellen of evalueren',
          items: [
            'Stel 1 à 2 doelen rondom werk-privébalans, of evalueer bestaande doelen',
            'Wat wil je concreet veranderen of verbeteren?',
          ],
        },
        {
          label: 'Stappen en verwachte moeilijkheden',
          items: [
            'Hoe ga je die doelen bereiken? Welke stappen zet je?',
            'Welke moeilijkheden verwacht je en hoe ga je die te lijf?',
          ],
        },
      ],
    },
  },
  {
    icon: <Compass size={18} color="white" />,
    iconBg: '#E8842C',
    title: 'Loopbaanoriëntatie',
    subtitle: 'Waar ga jij naartoe?',
    content: {
      intro:
        'Verken samen je loopbaanambities, de mogelijkheden binnen en buiten het ziekenhuis en hoe je stappen kunt zetten richting jouw doel.',
      sections: [
        {
          label: 'Jouw toekomst',
          items: [
            'Waar zie jij jezelf over 5 jaar? En over 10 jaar?',
            'Welk specialisme of differentiatie spreekt je aan, en waarom?',
            'Welke aspecten van het werk vind je belangrijk (patiëntcontact, wetenschap, onderwijs…)?',
            'Hoe ga je die doelen bereiken? Welke stappen zet je?',
          ],
        },
        {
          label: 'Loopbaan van de mentor',
          items: [
            'Hoe is de loopbaan van jouw mentor verlopen?',
            'Waren er momenten van twijfel? Wat gaf uiteindelijk de doorslag?',
            'Wat had hij/zij achteraf anders gewild?',
            'Welke tip had hij/zij zichzelf willen geven aan het begin?',
          ],
        },
        {
          label: 'Doelen stellen',
          items: [
            'Stel 1 à 2 concrete loopbaandoelen op basis van dit gesprek',
          ],
        },
      ],
    },
  },
  {
    icon: <MessageSquare size={18} color="white" />,
    iconBg: '#4A9B6E',
    title: 'Feedback ontvangen',
    subtitle: 'Leren van anderen',
    content: {
      intro:
        'Feedback ontvangen is een essentiële vaardigheid als arts. Bespreek hoe jij feedback ervaart en hoe je er meer van kunt leren.',
      sections: [
        {
          label: 'Jouw ervaringen met feedback',
          items: [
            'Heb je de afgelopen tijd feedback gekregen op je functioneren?',
            'Wat vind je ervan — kun je je erin vinden?',
            'Hoe ben je ermee omgegaan?',
            'Krijg en geef jij genoeg feedback?',
          ],
        },
        {
          label: 'Ervaringen en tips van de mentor',
          items: [
            'Wat is de nuttigste feedback die jouw mentor ooit heeft ontvangen?',
            'Welke tips heeft hij/zij voor het omgaan met moeilijke feedback?',
          ],
        },
        {
          label: 'Doelen stellen',
          items: [
            'Stel 1 à 2 doelen op basis van ontvangen feedback',
            'Hoe ga je die doelen bereiken en wat zijn mogelijke struikelblokken?',
          ],
        },
      ],
    },
  },
  {
    icon: <BookOpen size={18} color="white" />,
    iconBg: '#7C3AED',
    title: 'Ervaringen bespreken',
    subtitle: 'Wat deed het met je?',
    content: {
      intro:
        'Reflecteer op een specifieke ervaring die je heeft geraakt of bezighoudt — positief of negatief — en wat je ervan leert.',
      sections: [
        {
          label: 'Gespreksonderwerpen',
          items: [
            'Over welke ervaring wil je het hebben?',
            'Wat heeft het met je gedaan?',
            'Wil je het nog bespreken met de betrokkenen?',
            'Wat leer je hiervan voor de toekomst?',
          ],
        },
      ],
    },
  },
  {
    icon: <AlertCircle size={18} color="white" />,
    iconBg: '#DC2626',
    title: 'Omgaan met fouten en klachten',
    subtitle: 'Het hoort erbij',
    content: {
      intro:
        'Fouten maken en te maken krijgen met ontevreden patiënten is onvermijdelijk in de geneeskunde. Bespreek hoe je hiermee omgaat.',
      sections: [
        {
          label: 'Jouw ervaringen',
          items: [
            'Ben jij betrokken geweest bij een medische fout of een ontevreden patiënt of familie?',
            'Ben jij betrokken geweest bij een klacht?',
            'Schets de situatie: hoe ging je ermee om op dat moment?',
            'Wat deed het met jou?',
            'Heeft het veranderd hoe je werkt?',
            'Kon je erover praten met collega\'s of naasten?',
          ],
        },
        {
          label: 'Tips van de mentor',
          items: [
            'Welke tips heeft de mentor voor het omgaan met fouten en klachten?',
          ],
        },
      ],
    },
  },
]

export function InspirationScreen() {
  return (
    <div className="screen">
      <div className="page-header">
        <h1>Inspiratie</h1>
        <p>5 voorbeeldmeetings om uit te kiezen</p>
      </div>

      <div style={{ height: 8 }} />

      {topics.map((topic, i) => (
        <Accordion
          key={i}
          icon={topic.icon}
          iconBg={topic.iconBg}
          title={topic.title}
          subtitle={topic.subtitle}
        >
          <p style={{ marginBottom: 14, fontStyle: 'italic', color: 'var(--text-muted)', fontSize: 13 }}>
            {topic.content.intro}
          </p>
          {topic.content.sections.map((section, j) => (
            <div key={j} className="detail-section">
              <div className="detail-label">{section.label}</div>
              <ul>
                {section.items.map((item, k) => (
                  <li key={k}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </Accordion>
      ))}
    </div>
  )
}
