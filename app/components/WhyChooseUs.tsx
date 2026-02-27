import { ScrollReveal } from './ScrollReveal'

type Feature = {
  title: string
  desc: string
  cardBg: string
  borderColor: string
  iconColor: string
  ctaBg: string
  variant: 'circle' | 'tilt' | 'stack'
  imageA: string
  imageB?: string
}

const FEATURES: Feature[] = [
  {
    title: 'Fresh, Locally Sourced Ingredients.',
    desc: 'From classic favorites to modern culinary creations, every dish is made with fresh ingredients and a rich homemade touch.',
    cardBg: '#ececff',
    borderColor: '#bfc2d6',
    iconColor: '#5a4cc7',
    ctaBg: '#f97316',
    variant: 'circle',
    imageA: '/images/jollof-skillet.jpg',
  },
  {
    title: 'Authentic Recipes with a Modern Twist.',
    desc: 'Traditional flavors, updated with clean presentation and balanced seasoning that keeps guests asking for more.',
    cardBg: '#fce8d9',
    borderColor: '#d6c2b3',
    iconColor: '#8b5e3c',
    ctaBg: '#f97316',
    variant: 'tilt',
    imageA: '/images/catering-tray.jpg',
  },
  {
    title: 'Quick and Reliable Home Delivery.',
    desc: 'Fast prep, proper packaging, and dependable delivery timing so your meals arrive fresh and ready to enjoy.',
    cardBg: '#d8f3f0',
    borderColor: '#a8cbc7',
    iconColor: '#0f766e',
    ctaBg: '#f97316',
    variant: 'stack',
    imageA: '/images/catering-canapes.jpg',
    imageB: '/images/buffet-bites.jpg',
  },
]

function FeatureIcon({ color }: { color: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s-6.7-4.35-9-8.5C.95 8.86 3.03 5 6.7 5c2.1 0 3.3 1 4.3 2.2C12 6 13.2 5 15.3 5 19 5 21.05 8.86 21 12.5 18.7 16.65 12 21 12 21Z"
      />
    </svg>
  )
}

function FeatureMedia({ feature }: { feature: Feature }) {
  if (feature.variant === 'circle') {
    return (
      <div className="relative">
        <img
          src={feature.imageA}
          alt={feature.title}
          className="h-44 w-44 rounded-full object-cover shadow-lg"
          loading="lazy"
        />
        <span className="absolute -bottom-2 -right-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#7c3aed] text-white shadow-lg text-lg">
          *
        </span>
      </div>
    )
  }

  if (feature.variant === 'tilt') {
    return (
      <div className="relative">
        <img
          src={feature.imageA}
          alt={feature.title}
          className="-rotate-6 h-44 w-44 rounded-2xl object-cover shadow-lg"
          loading="lazy"
        />
        <span className="absolute -bottom-2 -right-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f97316] text-white shadow-lg text-lg">
          +
        </span>
      </div>
    )
  }

  return (
    <div className="relative h-44 w-44">
      <img
        src={feature.imageA}
        alt={feature.title}
        className="absolute left-0 top-6 h-30 w-30 rounded-2xl object-cover shadow-lg"
        loading="lazy"
      />
      <img
        src={feature.imageB}
        alt={feature.title}
        className="absolute right-0 top-0 h-34 w-34 rounded-2xl object-cover shadow-lg"
        loading="lazy"
      />
      <span className="absolute bottom-0 left-12 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#9333ea] text-white text-xs shadow-lg">
        #
      </span>
    </div>
  )
}

export default function WhyChooseUs() {
  return (
    <section
      className="bg-[#f6edf3] py-16"
      id="about"
      style={{ fontFamily: "'Comfortaa', cursive" }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <ScrollReveal y={18}>
          <h2 className="mb-2 text-center text-3xl font-bold text-[#1a0f05] sm:text-4xl">
            Why Dine with Us?
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-center text-xs sm:text-sm leading-relaxed text-[#5f5247]">
            From classic favorites to modern culinary creations, our menu is designed
            to satisfy your taste buds with fresh ingredients and extra care.
          </p>
        </ScrollReveal>

        <div className="space-y-4">
          {FEATURES.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={0.08 * index} y={22}>
              <article
                className="rounded-3xl border p-5 sm:p-7"
                style={{
                  backgroundColor: feature.cardBg,
                  borderColor: feature.borderColor,
                }}
              >
                <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
                  <div className="shrink-0">
                    <FeatureMedia feature={feature} />
                  </div>

                  <div className="w-full text-left sm:pr-2">
                    <div className="mb-2">
                      <FeatureIcon color={feature.iconColor} />
                    </div>
                    <h3
                      className="mb-2 text-2xl font-bold leading-tight text-[#1f1846]"
                      style={{ color: feature.iconColor }}
                    >
                      {feature.title}
                    </h3>
                    <p className="mb-5 text-sm leading-relaxed text-[#5f5247]">
                      {feature.desc}
                    </p>
                    <a
                      href="#full-menu"
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold text-white shadow-md transition-colors hover:brightness-95"
                      style={{ backgroundColor: feature.ctaBg }}
                    >
                      View Menu {'->'}
                    </a>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
