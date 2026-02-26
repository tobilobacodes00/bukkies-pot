const DISHES = [
  'White rice',
  'Party jollof rice',
  'Special fried rice',
  'Ofada rice',
  'Coconut rice',
  'Spaghetti',
  'Beans (ewa agoyin)',
  'Moi-moi, akara',
  'Swallows',
  'Yam porridge',
  'Yam (yamarita, crispy yam, etc.)',
]

const PROTEINS = [
  'Sweet turkey',
  'Chicken peri peri',
  'All kinds of fish',
  'Intestine meat (inu eran)',
  'Shrimps, prawn',
  'Gizzard',
  'Ponmo',
  'Beef, goat meat, ram meat, etc.',
  'Gizdodo',
  'Salad, plantain',
]

const SOUPS = [
  'Vegetable',
  'Egusi',
  'Okro',
  'Ewedu',
  'Ayamase stew',
  'Gbegiri',
  'Ofe nsala',
  'Afang',
  'Banga',
  'Edikaikong',
  'Pepper soup',
]

const OTHER_SERVICES = [
  'Event catering',
  'Corporate catering',
  'Icing / serving drinks',
  'Cooking class',
  'Grocery / foodstuff shopping',
  'Rentals, etc.',
]

type MenuColumnProps = {
  title: string
  items: string[]
  accent: string
}

function MenuColumn({ title, items, accent }: MenuColumnProps) {
  return (
    <div>
      <div
        className="inline-block px-4 py-1.5 rounded-lg mb-4 shadow-sm"
        style={{ backgroundColor: accent }}
      >
        <h3
          className="font-bold text-[#1a0f05] text-lg"
          style={{ fontFamily: "'Comfortaa', cursive" }}
        >
          {title}
        </h3>
      </div>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li
            key={item}
            className="text-[#3a2510] text-sm flex items-start gap-2"
            style={{ fontFamily: "'Comfortaa', cursive" }}
          >
            <span className="text-[#f97316] mt-0.5 flex-shrink-0 text-xs">*</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Menu() {
  return (
    <section
      className="bg-[#fffbf0] py-14 px-4 sm:px-6"
      id="full-menu"
      style={{ fontFamily: "'Comfortaa', cursive" }}
    >
      <div className="flex justify-center mb-5">
        <div className="w-12 h-12 bg-[#f97316] rounded-full flex items-center justify-center shadow-lg text-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-6 h-6"
          >
            <path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8-15.03-8-15.03 0h15.03zM1.02 17h15v2h-15z" />
          </svg>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center text-[#1a0f05] mb-2">
        Our Full Menu
      </h2>
      <p className="text-center text-[#6b5a4e] text-sm mb-10 max-w-xs mx-auto leading-relaxed">
        A rich variety of Nigerian dishes crafted with fresh ingredients and
        seasoned to perfection.
      </p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
        <MenuColumn title="Dishes" items={DISHES} accent="#f5c842" />
        <MenuColumn title="Protein / Sides" items={PROTEINS} accent="#f5c842" />
        <MenuColumn title="Soup" items={SOUPS} accent="#f5c842" />
      </div>

      <div
        className="max-w-5xl mx-auto rounded-3xl p-6 text-white text-center shadow-xl"
        style={{ backgroundColor: '#2d1a08' }}
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-[#f5c842] inline-block" />
          <h3 className="font-bold text-xl">Other Services</h3>
          <span className="w-2.5 h-2.5 rounded-full bg-[#f5c842] inline-block" />
        </div>
        <ul className="space-y-1.5">
          {OTHER_SERVICES.map((service) => (
            <li key={service} className="text-white/80 text-sm">
              <span className="text-[#f5c842] mr-1">o</span>
              {service}
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-5 border-t border-white/20 flex flex-col items-center gap-1.5 text-sm text-white/70">
          <a
            href="tel:08161671113"
            className="hover:text-white transition-colors flex items-center gap-2 text-center break-all"
          >
            Call: 08161671113 / 08119705930
          </a>
          <a
            href="https://wa.me/2348161671113"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-2 text-center break-all"
          >
            WhatsApp: +2348161671113
          </a>
          <a
            href="https://instagram.com/bukkiespot"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-2 text-center break-all"
          >
            Instagram: @bukkiespot
          </a>
        </div>
      </div>
    </section>
  )
}
