export default function CTABanner() {
  return (
    <section
      className="relative py-16 sm:py-20 px-4 sm:px-8 text-center overflow-hidden"
      style={{ backgroundColor: '#2d1a08', fontFamily: "'Comfortaa', cursive" }}
    >
      <div
        className="absolute top-1/2 hidden md:flex items-center justify-center rounded-3xl overflow-hidden shadow-2xl"
        style={{
          left: '32px',
          width: '120px',
          height: '128px',
          transform: 'translateY(-50%) rotate(-10deg)',
        }}
      >
        <img
          src="/images/bukkies-platter-1.png"
          alt="Assorted platter from Bukkies Pot"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div
        className="absolute top-1/2 hidden md:flex items-center justify-center rounded-3xl overflow-hidden shadow-2xl"
        style={{
          right: '32px',
          width: '108px',
          height: '120px',
          transform: 'translateY(-50%) rotate(10deg)',
        }}
      >
        <img
          src="/images/jollof-fish-plate.jpg"
          alt="Jollof rice and fish meal"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex justify-center mb-4">
        <div className="w-10 h-10 bg-[#f97316] rounded-full flex items-center justify-center shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-5 h-5"
          >
            <path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8-15.03-8-15.03 0h15.03zM1.02 17h15v2h-15z" />
          </svg>
        </div>
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
        Don&apos;t Wait - Order Now!
      </h2>
      <p className="text-white/75 text-sm mb-8 max-w-xs mx-auto leading-relaxed">
        Fresh ingredients, mouth-watering meals, and a passion for good food,
        ready for delivery or pick-up.
      </p>
      <a
        href="https://wa.me/2348161671113"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full max-w-xs sm:w-auto justify-center items-center gap-2 bg-[#f97316] text-white font-bold px-6 sm:px-9 py-3.5 rounded-full hover:bg-orange-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
      >
        Order on WhatsApp {'->'}
      </a>
    </section>
  )
}
