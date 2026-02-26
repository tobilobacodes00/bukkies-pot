const WHATSAPP_LINK =
  'https://wa.me/2348161671113?text=Hi%20Bukkies%20Pot%2C%20I%20want%20to%20place%20an%20order.'

export default function CTABanner() {
  return (
    <section
      className="relative overflow-hidden px-4 py-14 sm:py-16 text-center"
      style={{ fontFamily: "'Comfortaa', cursive" }}
    >
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#1a0f05]/10 bg-[#fffaf0] px-6 py-10 sm:px-8 sm:py-12 shadow-[0_10px_35px_rgba(26,15,5,0.08)]">
        <div className="mb-6 flex justify-center">
          <img
            src="/images/logo.png"
            alt="Bukkies Pot logo"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </div>

        <div className="pointer-events-none absolute left-4 top-14 hidden md:block">
          <img
            src="/images/bukkies-box-1.png"
            alt="Packed meal box by Bukkies Pot"
            className="-rotate-12 w-28 lg:w-32 object-contain drop-shadow-lg opacity-95"
            loading="lazy"
          />
        </div>

        <div className="pointer-events-none absolute right-4 top-14 hidden md:block">
          <img
            src="/images/bukkies-platter-1.png"
            alt="Platter from Bukkies Pot"
            className="rotate-12 w-28 lg:w-32 object-contain drop-shadow-lg opacity-95"
            loading="lazy"
          />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-[#1a0f05] leading-tight mb-3">
          Don&apos;t Wait - Order Now!
        </h2>
        <p className="mx-auto max-w-md text-sm text-[#4b4037] leading-relaxed mb-7">
          Fresh ingredients, mouth-watering recipes, and a passion for good food
          delivered to your door or ready for pickup.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f97316] px-7 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-orange-600 hover:-translate-y-0.5"
          >
            Order Now {'->'}
          </a>
          <a
            href="#full-menu"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1a0f05]/20 bg-white px-7 py-3 text-sm font-bold text-[#1a0f05] transition-colors hover:bg-[#fff4e4]"
          >
            View Menu
          </a>
        </div>
      </div>
    </section>
  )
}
