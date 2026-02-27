import type { ReactNode } from 'react'
import { ScrollReveal } from './ScrollReveal'

const PRIMARY_PHONE = '08161671113'
const PRIMARY_WHATSAPP = 'https://wa.me/2348161671113'
const CONTACT_EMAIL = 'Bukkiespot_help@yahoo.com'
const MAKER_SITE = 'https://tobilobasulaimon.com'

function IconCircle({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-[#1a0f05] bg-[#f97316] text-[#1a0f05] shadow-[2px_2px_0_#1a0f05]">
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

export default function Footer() {
  return (
    <footer
      className="bg-[#f7f1e6] px-4 sm:px-6 md:px-8 pb-6"
      id="contact"
      style={{ fontFamily: "'Comfortaa', cursive" }}
    >
      <ScrollReveal className="mx-auto max-w-5xl" y={18}>
        <div className="bauhaus-card-lg bg-[#f7f1e6] px-5 sm:px-8">
          <div className="grid grid-cols-2 gap-8 py-10">
            <div>
              <h4 className="mb-3 text-base font-bold text-[#1a0f05]">Navigate</h4>
              <ul className="space-y-2 text-sm text-[#4b4037]">
                <li><a href="#" className="hover:text-[#f97316]">Home</a></li>
                <li><a href="#full-menu" className="hover:text-[#f97316]">Menu</a></li>
                <li><a href="#about" className="hover:text-[#f97316]">Why Us</a></li>
                <li><a href="#gallery" className="hover:text-[#f97316]">Gallery</a></li>
                <li><a href="#contact" className="hover:text-[#f97316]">Contact</a></li>
                <li>
                  <a href={PRIMARY_WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-[#f97316]">
                    Book Now
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

          <div className="border-t border-dashed border-[#1a0f05]/30 pt-4 pb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] text-[#4b4037]">
              (c) 2026 Bukkies Pot | All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-[11px] text-[#4b4037]">
              <span>Made by</span>
              <a
                href={MAKER_SITE}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-[#f97316]"
              >
                Tobiloba Sulaimon
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  )
}
