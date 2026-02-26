import type { ReactNode } from 'react'

const PRIMARY_PHONE = '08161671113'
const PRIMARY_WHATSAPP = 'https://wa.me/2348161671113'
const CONTACT_EMAIL = 'Bukkiespot_help@yahoo.com'

function IconCircle({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1a0f05] text-white">
      {children}
    </span>
  )
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M6.62 10.79a15.43 15.43 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24 11.36 11.36 0 0 0 3.56.57 1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.85 22 2 13.15 2 2.97a1 1 0 0 1 1-1h3.88a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.56 1 1 0 0 1-.24 1l-2.2 2.26Z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M20.52 3.48A11.8 11.8 0 0 0 12.13 0C5.59 0 .27 5.3.27 11.83c0 2.09.54 4.13 1.57 5.93L0 24l6.43-1.69a11.88 11.88 0 0 0 5.7 1.46h.01c6.54 0 11.86-5.3 11.86-11.83 0-3.16-1.23-6.13-3.48-8.46zM12.14 21.8h-.01a9.9 9.9 0 0 1-5.03-1.37l-.36-.21-3.81 1 1.01-3.71-.24-.38a9.84 9.84 0 0 1-1.5-5.3c0-5.45 4.45-9.88 9.92-9.88a9.8 9.8 0 0 1 7 2.91 9.8 9.8 0 0 1 2.9 6.99c0 5.45-4.45 9.89-9.88 9.89z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M20 4H4a2 2 0 0 0-2 2v.35l10 5.71 10-5.71V6a2 2 0 0 0-2-2Zm2 4.65-9.5 5.43a1 1 0 0 1-1 0L2 8.65V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.65Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2ZM12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5Zm0 2a3 3 0 1 1-3 3 3 3 0 0 1 3-3Zm5.38-3.5a1.12 1.12 0 1 0 1.12 1.12 1.12 1.12 0 0 0-1.12-1.12Z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M13.5 22V13h3l.5-3h-3.5V8.5c0-.9.3-1.5 1.7-1.5H17V4.2c-.3 0-1.2-.2-2.3-.2-2.3 0-3.9 1.4-3.9 4V10H8v3h2.8v9h2.7Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05A4.17 4.17 0 0 1 17.6 8c4 0 4.4 2.64 4.4 6.08V21h-4v-5.8c0-1.38-.02-3.16-1.92-3.16-1.93 0-2.22 1.5-2.22 3.06V21h-4V9Z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M18.9 2H22l-6.8 7.78L23 22h-6.1l-4.78-6.25L6.6 22H3.5l7.27-8.31L1 2h6.26l4.32 5.72L18.9 2Zm-1.08 18h1.69L6.32 3.9H4.5L17.82 20Z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer
      className="bg-[#f7f1e6] px-4 sm:px-6 md:px-8 pb-6"
      id="contact"
      style={{ fontFamily: "'Comfortaa', cursive" }}
    >
      <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
        <div>
          <h4 className="mb-3 text-base font-bold text-[#1a0f05]">Navigate</h4>
          <ul className="space-y-2 text-sm text-[#4b4037]">
            <li><a href="#" className="hover:text-[#f97316]">Home</a></li>
            <li><a href="#menu" className="hover:text-[#f97316]">Menu</a></li>
            <li><a href="#about" className="hover:text-[#f97316]">About</a></li>
            <li><a href="#contact" className="hover:text-[#f97316]">Contact</a></li>
            <li><a href={PRIMARY_WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-[#f97316]">Book Now</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-base font-bold text-[#1a0f05]">Menu</h4>
          <ul className="space-y-2 text-sm text-[#4b4037]">
            <li><a href="#full-menu" className="hover:text-[#f97316]">Breakfast</a></li>
            <li><a href="#full-menu" className="hover:text-[#f97316]">Lunch</a></li>
            <li><a href="#full-menu" className="hover:text-[#f97316]">Dinner</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-base font-bold text-[#1a0f05]">Follow Us</h4>
          <ul className="space-y-2 text-sm text-[#4b4037]">
            <li>
              <a href="#" className="inline-flex items-center gap-2 hover:text-[#f97316]">
                <IconCircle><FacebookIcon /></IconCircle>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/bukkiespot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#f97316]"
              >
                <IconCircle><InstagramIcon /></IconCircle>
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" className="inline-flex items-center gap-2 hover:text-[#f97316]">
                <IconCircle><LinkedInIcon /></IconCircle>
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="#" className="inline-flex items-center gap-2 hover:text-[#f97316]">
                <IconCircle><XIcon /></IconCircle>
                <span>Twitter</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-base font-bold text-[#1a0f05]">Contact</h4>
          <ul className="space-y-2.5 text-sm text-[#4b4037]">
            <li className="flex items-start gap-2.5">
              <IconCircle><PhoneIcon /></IconCircle>
              <a href={`tel:${PRIMARY_PHONE}`} className="hover:text-[#f97316]">{PRIMARY_PHONE}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <IconCircle><WhatsAppIcon /></IconCircle>
              <a href={PRIMARY_WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-[#f97316]">
                WhatsApp Chat
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <IconCircle><MailIcon /></IconCircle>
              <a href={`mailto:${CONTACT_EMAIL}`} className="break-all hover:text-[#f97316]">{CONTACT_EMAIL}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-5xl border-t border-dashed border-[#1a0f05]/30 pt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[11px] text-[#4b4037]">
          (c) 2026 Bukkies Pot | All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-[11px] text-[#4b4037]">
          <a href="#" className="hover:text-[#f97316]">License</a>
          <a href="#" className="hover:text-[#f97316]">Changelog</a>
          <a href="#" className="hover:text-[#f97316]">Style Guide</a>
        </div>
      </div>
    </footer>
  )
}
