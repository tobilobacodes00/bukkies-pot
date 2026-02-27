import { ScrollReveal } from './ScrollReveal'

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

const MENU_DECORATIONS = [
  {
    src: '/random-plates-of-food/7a471577-6667-40ae-b160-5ef8dca1a6fe-Photoroom.png',
    alt: 'Decorative food plate',
    className: 'absolute top-3 -left-14 w-36 sm:w-40 md:w-44 -rotate-12',
  },
  {
    src: '/random-plates-of-food/a85bddf8-14c3-46a4-9fb4-ec6cb841f998-Photoroom.png',
    alt: 'Decorative food plate',
    className: 'absolute top-4 -right-14 w-36 sm:w-40 md:w-44 rotate-12',
  },
  {
    src: '/random-plates-of-food/f35de54e-e153-4162-ac35-3c34ea18c450-Photoroom.png',
    alt: 'Decorative food plate',
    className: 'absolute top-[31%] -left-10 hidden sm:block w-28 md:w-32 rotate-6',
  },
  {
    src: '/random-plates-of-food/Gemini_Generated_Image_20c3j620c3j620c3-Photoroom.png',
    alt: 'Decorative food plate',
    className: 'absolute top-[34%] -right-10 hidden sm:block w-28 md:w-32 -rotate-6',
  },
  {
    src: '/random-plates-of-food/Gemini_Generated_Image_c300orc300orc300-Photoroom.png',
    alt: 'Decorative food plate',
    className: 'absolute bottom-16 -left-14 hidden md:block w-32 lg:w-36 rotate-6',
  },
  {
    src: '/random-plates-of-food/traditional-mexican-rice-served-with-green-peas-isolated-white-background-Photoroom.png',
    alt: 'Decorative food plate',
    className: 'absolute bottom-10 -right-14 hidden md:block w-32 lg:w-36 -rotate-6',
  },
]

type MenuColumnProps = {
  title: string
  items: string[]
  accent: string
}

function MenuColumn({ title, items, accent }: MenuColumnProps) {
  return (
    <article className="mx-auto w-full max-w-sm rounded-3xl border border-[#f3dfc2] bg-white/90 p-5 shadow-sm">
      <div className="mb-4 flex justify-center">
        <div
          className="inline-flex items-center rounded-full px-4 py-1.5 shadow-sm"
          style={{ backgroundColor: accent }}
        >
          <h3
            className="font-bold text-[#1a0f05] text-base"
            style={{ fontFamily: "'Comfortaa', cursive" }}
          >
            {title}
          </h3>
        </div>
      </div>
      <ul className="space-y-2 flex flex-col items-center">
        {items.map((item) => (
          <li
            key={item}
            className="text-[#3a2510] text-sm flex items-center justify-center gap-2 text-center max-w-[16rem]"
            style={{ fontFamily: "'Comfortaa', cursive" }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#f97316] flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function Menu() {
  return (
    <section
      className="relative overflow-hidden bg-[#fffbf0] py-16 px-4 sm:px-6"
      id="full-menu"
      style={{ fontFamily: "'Comfortaa', cursive" }}
    >
      {MENU_DECORATIONS.map((item) => (
        <img
          key={item.src}
          src={item.src}
          alt={item.alt}
          className={`${item.className} pointer-events-none select-none z-20 md:z-0 object-contain`}
          loading="lazy"
        />
      ))}

      <div className="relative z-10">
        <ScrollReveal y={18}>
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

          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1a0f05] mb-2">
            Our Full Menu
          </h2>
          <p className="text-center text-[#6b5a4e] text-sm sm:text-base mb-10 max-w-md mx-auto leading-relaxed">
            A rich variety of Nigerian dishes crafted with fresh ingredients and
            seasoned to perfection.
          </p>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-10">
          <ScrollReveal delay={0.04} y={20}>
            <MenuColumn title="Dishes" items={DISHES} accent="#f5c842" />
          </ScrollReveal>
          <ScrollReveal delay={0.12} y={20}>
            <MenuColumn title="Protein / Sides" items={PROTEINS} accent="#f5c842" />
          </ScrollReveal>
          <ScrollReveal delay={0.2} y={20}>
            <MenuColumn title="Soup" items={SOUPS} accent="#f5c842" />
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2} y={24}>
          <div
            className="max-w-5xl mx-auto rounded-3xl border border-[#f5c842]/20 p-6 sm:p-8 text-white text-center shadow-xl"
            style={{ background: 'linear-gradient(135deg, #2d1a08 0%, #1a0f05 100%)' }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f5c842] inline-block" />
              <h3 className="font-bold text-xl">Other Services</h3>
              <span className="w-2.5 h-2.5 rounded-full bg-[#f5c842] inline-block" />
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-2xl mx-auto">
              {OTHER_SERVICES.map((service) => (
                <li key={service} className="text-white/85 text-sm inline-flex justify-center items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#f5c842] inline-block" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
