import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface AccordionProps {
  icon?: React.ReactNode
  iconBg?: string
  title: string
  subtitle?: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export function Accordion({ icon, iconBg, title, subtitle, children, defaultOpen = false }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="card">
      <div className="accordion-header" onClick={() => setOpen(!open)}>
        <div className="accordion-header-left">
          {icon && (
            <div className="accordion-icon" style={{ background: iconBg || '#f3f4f6' }}>
              {icon}
            </div>
          )}
          <div>
            <div className="accordion-title">{title}</div>
            {subtitle && <div className="accordion-subtitle">{subtitle}</div>}
          </div>
        </div>
        <ChevronDown size={18} className={`accordion-chevron ${open ? 'open' : ''}`} />
      </div>
      {open && <div className="accordion-body">{children}</div>}
    </div>
  )
}
