const WHATSAPP_LINK =
  "https://wa.me/2348161671113?text=Hi%20Bukkies%20Pot%2C%20I%20would%20like%20to%20place%20an%20order.%20Please%20share%20today%27s%20menu."

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Bukkies Pot on WhatsApp"
      className="fixed bottom-5 left-5 z-[70] inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(37,211,102,0.4)] transition-transform hover:scale-105 focus-visible:outline-white"
      style={{ fontFamily: "'Comfortaa', cursive" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.8 11.8 0 0 0 12.13 0C5.59 0 .27 5.3.27 11.83c0 2.09.54 4.13 1.57 5.93L0 24l6.43-1.69a11.88 11.88 0 0 0 5.7 1.46h.01c6.54 0 11.86-5.3 11.86-11.83 0-3.16-1.23-6.13-3.48-8.46zM12.14 21.8h-.01a9.9 9.9 0 0 1-5.03-1.37l-.36-.21-3.81 1 1.01-3.71-.24-.38a9.84 9.84 0 0 1-1.5-5.3c0-5.45 4.45-9.88 9.92-9.88a9.8 9.8 0 0 1 7 2.91 9.8 9.8 0 0 1 2.9 6.99c0 5.45-4.45 9.89-9.88 9.89zm5.42-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.29-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.73-1.64-2.02-.17-.3-.01-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.61-.92-2.2-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.08-.8.38-.27.3-1.05 1.03-1.05 2.51 0 1.48 1.08 2.91 1.23 3.11.15.2 2.11 3.21 5.12 4.5.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.77-.72 2.02-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35z" />
      </svg>
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  )
}
