import { useState, type MouseEvent } from 'react'

const NAV_ITEMS = [
  { href: '#', label: 'Home' },
  { href: '#menu', label: 'Menu' },
  { href: '#full-menu', label: 'Full Menu' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

const WHATSAPP_LINK =
  "https://wa.me/2348161671113?text=Hi%20Bukkies%20Pot%2C%20I%20would%20like%20to%20place%20an%20order."

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleNavClick =
    (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      if (!href.startsWith('#')) return

      event.preventDefault()
      setOpen(false)

      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        window.history.replaceState(
          null,
          '',
          `${window.location.pathname}${window.location.search}`,
        )
        return
      }

      const target = document.querySelector(href)
      if (target instanceof HTMLElement) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        window.history.replaceState(null, '', href)
      }
    }

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
      style={{ fontFamily: "'Comfortaa', cursive" }}
      aria-label="Primary"
    >
      <div className="max-w-6xl mx-auto">
        <div className="rounded-full border border-[#1a0f05]/10 bg-[#fffbf0]/95 shadow-[0_8px_30px_rgba(26,15,5,0.12)] backdrop-blur-md">
          <div className="relative flex items-center justify-between gap-3 px-4 sm:px-6 py-2.5">
            <a
              href="#"
              className="flex items-center gap-2 flex-shrink-0"
              aria-label="Bukkies Pot home"
              onClick={() => setOpen(false)}
            >
              <img
                src="/images/logo.png"
                alt="Bukkies Pot logo"
                className="w-16 sm:w-20 h-auto object-contain"
              />
            </a>

            <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex items-center gap-1.5 rounded-full border border-[#1a0f05]/8 bg-white/70 px-2 py-1 text-sm font-medium text-[#1a0f05]">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleNavClick(item.href)}
                  className="rounded-full px-3 py-1.5 transition-colors hover:bg-[#f97316]/10 hover:text-[#f97316]"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 rounded-full bg-[#1a0f05] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#2d1a0a]"
            >
              Order on WhatsApp
            </a>

            <button
              className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-orange-50 transition-colors"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              type="button"
            >
              <span
                className={`block w-6 h-0.5 bg-[#1a0f05] transition-transform duration-200 ${open ? 'translate-y-2 rotate-45' : ''}`}
              />
              <span
                className={`block w-6 h-0.5 bg-[#1a0f05] transition-opacity duration-200 ${open ? 'opacity-0' : ''}`}
              />
              <span
                className={`block w-6 h-0.5 bg-[#1a0f05] transition-transform duration-200 ${open ? '-translate-y-2 -rotate-45' : ''}`}
              />
            </button>
          </div>
        </div>

        {open && (
          <div
            id="mobile-menu"
            className="md:hidden mt-2 rounded-2xl border border-[#1a0f05]/10 bg-[#fffbf0]/95 px-5 py-4 shadow-lg backdrop-blur-md"
          >
            <div className="flex flex-col gap-2 text-sm font-medium text-[#1a0f05]">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleNavClick(item.href)}
                  className="rounded-xl px-3 py-2 transition-colors hover:bg-[#f97316]/10 hover:text-[#f97316]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-1 inline-flex justify-center rounded-full bg-[#1a0f05] px-4 py-2.5 text-center text-xs font-semibold text-white"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
