const PRIMARY_PHONE = '08161671113'
const SECONDARY_PHONE = '08119705930'
const PRIMARY_WHATSAPP = 'https://wa.me/2348161671113'
const SECONDARY_WHATSAPP = 'https://wa.me/2348119705930'
const CONTACT_EMAIL = 'Bukkiespot_help@yahoo.com'

export default function Footer() {
  return (
    <footer
      className="bg-[#1a0f05] text-white px-4 sm:px-6 md:px-8 pt-12 pb-6"
      id="contact"
      style={{ fontFamily: "'Comfortaa', cursive" }}
    >
      <div className="flex flex-col md:flex-row gap-10 mb-10 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 md:flex-col md:items-start">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Bukkies Pot logo"
              className="w-16 h-auto object-contain"
              loading="lazy"
            />
            <div>
              <p className="font-bold text-lg leading-tight">Bukkies Pot</p>
              <p className="text-white/40 text-xs">Great Food, Just like Home.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 flex-1">
          <div>
            <h4 className="font-bold text-xs mb-4 text-white/60 uppercase tracking-wider">
              Navigate
            </h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs mb-4 text-white/60 uppercase tracking-wider">
              Menu
            </h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Food Bowls
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Food Trays
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Event Catering
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Rentals
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs mb-4 text-white/60 uppercase tracking-wider">
              Follow Us
            </h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li>
                <a
                  href="https://instagram.com/bukkiespot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs mb-4 text-white/60 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li>
                <a
                  href={`tel:${PRIMARY_PHONE}`}
                  className="hover:text-white transition-colors flex items-center gap-1.5 break-all"
                  aria-label={`Call ${PRIMARY_PHONE}`}
                >
                  <span>Call:</span>
                  <span>{PRIMARY_PHONE}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SECONDARY_PHONE}`}
                  className="hover:text-white transition-colors flex items-center gap-1.5 break-all"
                  aria-label={`Call ${SECONDARY_PHONE}`}
                >
                  <span>Call:</span>
                  <span>{SECONDARY_PHONE}</span>
                </a>
              </li>
              <li>
                <a
                  href={PRIMARY_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5 break-all"
                  aria-label="Chat on WhatsApp with 08161671113"
                >
                  <span>WhatsApp:</span>
                  <span>+2348161671113</span>
                </a>
              </li>
              <li>
                <a
                  href={SECONDARY_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5 break-all"
                  aria-label="Chat on WhatsApp with 08119705930"
                >
                  <span>WhatsApp:</span>
                  <span>+2348119705930</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-white transition-colors flex items-start gap-1.5 break-all"
                >
                  <span>Email:</span>
                  <span>{CONTACT_EMAIL}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 max-w-4xl mx-auto">
        <p className="text-white/30 text-xs">
          Copyright 2026 Bukkies Pot. All rights reserved.
        </p>
        <p className="text-white/30 text-xs">Made for great food experiences.</p>
      </div>
    </footer>
  )
}
