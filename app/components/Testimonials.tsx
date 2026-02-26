const TESTIMONIALS = [
  {
    stars: 5,
    title: 'Best Catering Ever!',
    body: "I ordered for my daughter's birthday and every single dish was amazing. All my guests kept asking who catered - Bukkies Pot delivered beyond expectations!",
    name: 'Adaeze Okonkwo',
    handle: '@adaeze_o',
    avatarBg: '#f97316',
    cardBg: '#fff',
  },
  {
    stars: 5,
    title: 'Love the Food Bowls!',
    body: 'The rice bowls are perfectly portioned, so flavourful, and always fresh. I order every week for my office lunch - they never disappoint.',
    name: 'Tunde Bakare',
    handle: '@tunde_b',
    avatarBg: '#8b5cf6',
    cardBg: '#fdf4ff',
  },
  {
    stars: 5,
    title: 'Stress-Free Event!',
    body: 'They handled the food, the trays, and the rentals for my corporate event. Everything was seamless and professional. 10/10 would recommend!',
    name: 'Chiamaka Eze',
    handle: '@chiama_e',
    avatarBg: '#ec4899',
    cardBg: '#fff',
  },
]

function HeartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="white"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path d="M12 21.35 10.55 20C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.5z" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#facc15"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="m12 17.27 6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section
      className="bg-[#fffbf0] py-14"
      style={{ fontFamily: "'Comfortaa', cursive" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex justify-center mb-5">
          <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center shadow-lg">
            <HeartIcon />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center text-[#1a0f05] mb-2">
          They Love Us
        </h2>
        <p className="text-center text-[#6b5a4e] text-sm mb-8 max-w-xs mx-auto leading-relaxed">
          Hear what our happy customers have to say about their Bukkies Pot
          experience.
        </p>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              className="rounded-3xl p-5 shadow-md flex-shrink-0 w-[82vw] max-w-[280px] sm:w-auto"
              style={{ backgroundColor: t.cardBg }}
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <StarIcon key={`${t.name}-star-${s}`} />
                ))}
              </div>

              <h3 className="font-bold text-[#1a0f05] text-sm mb-2">{t.title}</h3>
              <p className="text-[#6b5a4e] text-xs leading-relaxed mb-5">
                {t.body}
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: t.avatarBg }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bold text-[#1a0f05] text-xs">{t.name}</p>
                  <p className="text-[#6b5a4e] text-xs">{t.handle}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
