import { useState } from 'react'
import { Home, CalendarDays, Lightbulb, BookOpenCheck, Phone } from 'lucide-react'
import { HomeScreen } from './screens/HomeScreen'
import { MeetingsScreen } from './screens/MeetingsScreen'
import { InspirationScreen } from './screens/InspirationScreen'
import { TipsScreen } from './screens/TipsScreen'
import { ContactScreen } from './screens/ContactScreen'
import './index.css'

type Tab = 'home' | 'meetings' | 'inspiration' | 'tips' | 'contact'

const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: 'home', label: 'Home', icon: <Home size={22} /> },
  { id: 'meetings', label: 'Meetings', icon: <CalendarDays size={22} /> },
  { id: 'inspiration', label: 'Inspiratie', icon: <Lightbulb size={22} /> },
  { id: 'tips', label: 'Tips', icon: <BookOpenCheck size={22} /> },
  { id: 'contact', label: 'Contact', icon: <Phone size={22} /> },
]

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home')

  return (
    <>
      {activeTab === 'home' && <HomeScreen />}
      {activeTab === 'meetings' && <MeetingsScreen />}
      {activeTab === 'inspiration' && <InspirationScreen />}
      {activeTab === 'tips' && <TipsScreen />}
      {activeTab === 'contact' && <ContactScreen />}

      <nav className="tab-bar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </nav>
    </>
  )
}
