const FEATURES = [
  {
    cardBg: '#EDE4F8',
    iconBg: '#9333ea',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    title: 'Fresh, Home-Cooked Quality',
    desc: 'Every bowl and tray is prepared with fresh, quality ingredients and packed with the love of a home-cooked meal, delivered right to you.',
    photoSrc: '/images/jollof-skillet.jpg',
    photoAlt: 'Freshly prepared rice bowl in a skillet',
  },
  {
    cardBg: '#FFF0E0',
    iconBg: '#f97316',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
    title: 'Professional Event Catering',
    desc: 'We provide seamless catering for any occasion, from intimate family gatherings to large corporate events, served with excellence and style.',
    photoSrc: '/images/catering-tray.jpg',
    photoAlt: 'Event tray service with assorted bites',
  },
  {
    cardBg: '#E0F4EF',
    iconBg: '#0aada8',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
        <path d="M20 6h-2.18c.07-.44.18-.86.18-1.3C18 2.57 15.43 0 12.3 0c-2.01 0-3.74 1.07-4.7 2.63L6 5H4C1.79 5 0 6.79 0 9v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-9c0-2.21-1.79-4-4-4zm-2 13H4V9h2.45l2.22-3.34A2.94 2.94 0 0 1 12.3 4C13.77 4 15 5.23 15 6.7c0 .65-.2 1.27-.54 1.8L13.5 10H18c1.1 0 2 .9 2 2v7z" />
      </svg>
    ),
    title: 'Reliable Rental Support',
    desc: 'Everything you need for a stress-free event. Our rental services ensure your occasion runs smoothly, so you can focus on the celebration.',
    photoSrc: '/images/buffet-bites.jpg',
    photoAlt: 'Catering setup that supports events and rentals',
  },
]

export default function WhyChooseUs() {
  return (
    <section
      className="bg-[#fffbf0] py-14"
      id="about"
      style={{ fontFamily: "'Comfortaa', cursive" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center text-[#1a0f05] mb-2">
          Why Dine with Us?
        </h2>
        <p className="text-center text-[#6b5a4e] text-sm mb-10 max-w-xs mx-auto leading-relaxed">
          We go beyond just serving food - we create experiences that your guests
          will talk about long after the last bite.
        </p>

        <div className="flex flex-col gap-5 max-w-xl mx-auto">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center items-start gap-4 sm:gap-5 rounded-3xl p-4 sm:p-5 relative overflow-hidden"
              style={{ backgroundColor: f.cardBg }}
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-md">
                <img
                  src={f.photoSrc}
                  alt={f.photoAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="flex-1 min-w-0 text-left">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center mb-2 shadow-sm"
                  style={{ backgroundColor: f.iconBg }}
                >
                  {f.icon}
                </div>
                <h3 className="font-bold text-[#1a0f05] text-base leading-snug mb-1.5">
                  {f.title}
                </h3>
                <p className="text-[#6b5a4e] text-xs leading-relaxed mb-3">
                  {f.desc}
                </p>
                <a
                  href="#menu"
                  className="inline-flex items-center gap-1 bg-[#f97316] text-white text-xs font-bold px-4 py-1.5 rounded-full hover:bg-orange-600 transition-colors"
                >
                  View Menu {'->'}
                </a>
              </div>

              <div
                className="absolute -bottom-3 -right-3 w-12 h-12 rounded-full opacity-20"
                style={{ backgroundColor: f.iconBg }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
