import { useState } from 'react'

const CATEGORIES = ['All Items', 'Food Bowls', 'Food Trays', 'Event Packs']

const DISHES = [
  {
    name: 'Signature Rice Bowl',
    price: 'N2,500',
    desc: 'Fluffy rice topped with rich stew and your choice of protein, packed fresh daily.',
    category: 'Food Bowls',
    imageSrc: '/images/jollof-skillet.jpg',
    imageAlt: 'Signature rice bowl served hot in a skillet',
  },
  {
    name: 'Party Food Tray',
    price: 'N15,000',
    desc: 'Generously filled trays of assorted meals perfect for celebrations and gatherings.',
    category: 'Food Trays',
    imageSrc: '/images/bukkies-platter-2.png',
    imageAlt: 'Party food tray with assorted small chops and grilled chicken',
  },
  {
    name: 'Event Catering Pack',
    price: 'Custom',
    desc: 'Full event catering with professional service, setup, and excellence guaranteed.',
    category: 'Event Packs',
    imageSrc: '/images/catering-tray.jpg',
    imageAlt: 'Event catering setup with assorted bites and tray service',
  },
]

export default function FeaturedDishes() {
  const [active, setActive] = useState('All Items')

  const filtered =
    active === 'All Items'
      ? DISHES
      : DISHES.filter((dish) => dish.category === active)

  return (
    <section
      className="bg-[#fffbf0] py-14"
      id="menu"
      style={{ fontFamily: "'Comfortaa', cursive" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section badge */}
        <div className="flex justify-center mb-5">
          <div className="w-12 h-12 bg-[#f97316] rounded-full flex items-center justify-center shadow-lg">
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
          Our Signature Dishes
        </h2>
        <p className="text-center text-[#6b5a4e] text-sm mb-7 max-w-xs mx-auto leading-relaxed">
          From classic favourites to special event packs, every meal is made with
          care and packed with flavour.
        </p>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                active === cat
                  ? 'bg-[#f97316] text-white shadow-md'
                  : 'border border-gray-300 text-[#1a0f05] hover:border-[#f97316] hover:text-[#f97316]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dish cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {filtered.map((dish) => (
            <div
              key={dish.name}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="h-36">
                <img
                  src={dish.imageSrc}
                  alt={dish.imageAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between mb-1 gap-2">
                  <h3 className="font-bold text-[#1a0f05] text-sm leading-tight">
                    {dish.name}
                  </h3>
                  <span className="font-bold text-[#f97316] text-sm whitespace-nowrap">
                    {dish.price}
                  </span>
                </div>
                <p className="text-[#6b5a4e] text-xs leading-relaxed mb-4">
                  {dish.desc}
                </p>
                <a
                  href="#contact"
                  className="block text-center w-full bg-[#f97316] text-white text-xs font-bold py-2.5 rounded-full hover:bg-orange-600 transition-colors"
                >
                  Add to cart +
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
