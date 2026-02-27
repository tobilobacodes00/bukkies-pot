import { useEffect, useRef, useState, type MouseEvent } from 'react'

type NavItem = {
  href: string
  label: string
  sectionId?: string
}

const NAV_ITEMS: NavItem[] = [
  { href: '#', label: 'Home' },
  { href: '#full-menu', label: 'Menu', sectionId: 'full-menu' },
  { href: '#about', label: 'Why Us', sectionId: 'about' },
  { href: '#gallery', label: 'Gallery', sectionId: 'gallery' },
  { href: '#contact', label: 'Contact', sectionId: 'contact' },
]

const WHATSAPP_LINK =
  "https://wa.me/2348161671113?text=Hi%20Bukkies%20Pot%2C%20I%20would%20like%20to%20place%20an%20order."

export default function Navbar() {
  const [activeHref, setActiveHref] = useState('#')
  const mobileToggleRef = useRef<HTMLInputElement | null>(null)

  const closeMenu = () => {
    if (mobileToggleRef.current) mobileToggleRef.current.checked = false
  }

  useEffect(() => {
    const hash = window.location.hash
    const found = NAV_ITEMS.find((item) => item.href === hash)
    if (found) setActiveHref(found.href)
  }, [])

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash
      const found = NAV_ITEMS.find((item) => item.href === hash)
      setActiveHref(found ? found.href : '#')
      closeMenu()
    }

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    const itemsWithSections = NAV_ITEMS.filter((item) => item.sectionId) as Array<
      Required<Pick<NavItem, 'href' | 'sectionId'>> & Pick<NavItem, 'label'>
    >

    const computeActiveHref = () => {
      if (window.scrollY < 80) return '#'

      const probeY = 150
      let currentHref = '#'

      itemsWithSections.forEach((item) => {
        const section = document.getElementById(item.sectionId)
        if (!section) return
        const rect = section.getBoundingClientRect()
        if (rect.top <= probeY) currentHref = item.href
      })

      return currentHref
    }

    let ticking = false
    const updateActiveFromScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        setActiveHref(computeActiveHref())
        ticking = false
      })
    }

    updateActiveFromScroll()
    window.addEventListener('scroll', updateActiveFromScroll, { passive: true })
    window.addEventListener('resize', updateActiveFromScroll)
    window.addEventListener('load', updateActiveFromScroll)

    return () => {
      window.removeEventListener('scroll', updateActiveFromScroll)
      window.removeEventListener('resize', updateActiveFromScroll)
      window.removeEventListener('load', updateActiveFromScroll)
    }
  }, [])

  const handleNavClick =
    (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      if (!href.startsWith('#')) return
      event.preventDefault()
      closeMenu()
      setActiveHref(href)

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

  const itemClass = (href: string) =>
    `rounded-full border-2 px-3 py-1.5 transition-colors ${
      activeHref === href
        ? 'border-[#1a0f05] bg-[#f5c842] text-[#1a0f05] shadow-[2px_2px_0_#1a0f05]'
        : 'border-transparent text-[#1a0f05] hover:border-[#1a0f05] hover:bg-[#fff3da]'
    }`

  return (
    <nav
      className="fixed inset-x-0 top-0 z-[200] px-4 pt-4"
      style={{ fontFamily: "'Comfortaa', cursive" }}
      aria-label="Primary"
    >
      <div className="max-w-6xl mx-auto">
        <div className="rounded-full border-[3px] border-[#1a0f05] bg-[#fffaf0] shadow-[6px_6px_0_#1a0f05]">
          <div className="relative flex items-center justify-between gap-3 px-4 sm:px-6 py-2.5">
            <a
              href="#"
              className="flex items-center gap-2 flex-shrink-0"
              aria-label="Bukkies Pot home"
              onClick={handleNavClick('#')}
            >
              <img
                src="/images/logo.png"
                alt="Bukkies Pot logo"
                className="w-16 sm:w-20 h-auto object-contain"
              />
            </a>

            <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex items-center gap-1.5 rounded-full border-[2px] border-[#1a0f05] bg-white px-2 py-1 text-sm font-semibold shadow-[3px_3px_0_#1a0f05]">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleNavClick(item.href)}
                  className={itemClass(item.href)}
                  aria-current={activeHref === item.href ? 'page' : undefined}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bauhaus-btn hidden lg:inline-flex items-center gap-1.5 bg-[#f97316] px-4 py-2 text-xs text-[#1a0f05]"
            >
              Order on WhatsApp
            </a>

            <div className="relative md:hidden">
              <input
                ref={mobileToggleRef}
                type="checkbox"
                id="mobile-nav-toggle"
                className="peer sr-only"
                aria-hidden="true"
              />

              <label
                htmlFor="mobile-nav-toggle"
                className="relative z-[230] inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border-2 border-[#1a0f05] bg-[#fffaf0] shadow-[2px_2px_0_#1a0f05] transition-colors hover:bg-orange-50 peer-checked:hidden"
                aria-label="Open menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-6 w-6 text-[#1a0f05]"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              </label>

              <label
                htmlFor="mobile-nav-toggle"
                className="relative z-[230] hidden h-10 w-10 cursor-pointer items-center justify-center rounded-lg border-2 border-[#1a0f05] bg-[#fffaf0] shadow-[2px_2px_0_#1a0f05] transition-colors hover:bg-orange-50 peer-checked:inline-flex"
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-6 w-6 text-[#1a0f05]"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
                </svg>
              </label>

              <label
                htmlFor="mobile-nav-toggle"
                aria-label="Close mobile menu backdrop"
                className="fixed inset-0 z-[205] hidden bg-black/25 peer-checked:block md:hidden"
              />

              <div
                id="mobile-menu"
                className="fixed left-1/2 top-[86px] z-[220] hidden w-[calc(100vw-2rem)] max-w-sm -translate-x-1/2 rounded-2xl border-[3px] border-[#1a0f05] bg-[#fffaf0] px-5 py-4 shadow-[6px_6px_0_#1a0f05] peer-checked:block md:hidden"
              >
                <div className="flex flex-col items-center gap-2 text-sm font-medium">
                  {NAV_ITEMS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={handleNavClick(item.href)}
                      className={`w-full rounded-xl border-2 px-3 py-2 text-center transition-colors ${
                        activeHref === item.href
                          ? 'border-[#1a0f05] bg-[#f5c842] text-[#1a0f05] shadow-[2px_2px_0_#1a0f05]'
                          : 'border-transparent text-[#1a0f05] hover:border-[#1a0f05] hover:bg-[#fff3da]'
                      }`}
                      aria-current={activeHref === item.href ? 'page' : undefined}
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="bauhaus-btn mt-1 inline-flex w-full justify-center bg-[#f97316] px-4 py-2.5 text-center text-xs text-[#1a0f05]"
                  >
                    Order on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
