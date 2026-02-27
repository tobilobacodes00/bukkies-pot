import { ScrollReveal } from './ScrollReveal'

const WHATSAPP_LINK =
  'https://wa.me/2348161671113?text=Hi%20Bukkies%20Pot%2C%20I%20want%20to%20place%20an%20order.'

const sliderImages = [
  { src: '/hero-slider/1st.png', alt: 'Bukkies Pot meal 1' },
  { src: '/hero-slider/2nd.png', alt: 'Bukkies Pot meal 2' },
  { src: '/hero-slider/3rd.png', alt: 'Bukkies Pot meal 3' },
  { src: '/hero-slider/4th.png', alt: 'Bukkies Pot meal 4' },
  { src: '/hero-slider/5th.png', alt: 'Bukkies Pot meal 5' },
]

const edgeImages = {
  left: '/random-plates-of-food/176b53ef-e721-4005-b26a-5a264a7e0eaf-Photoroom.png',
  right: '/random-plates-of-food/3b4da1ce-2701-44aa-8c7b-ad308e4e192e-Photoroom.png',
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fffbf0] pt-12 pb-10">
      <div className="bauhaus-halftone pointer-events-none absolute inset-0 opacity-[0.14]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div
          className="absolute -left-10 top-2 flex h-auto w-30 sm:h-24 sm:w-24 lg:left-0 lg:top-0 lg:h-[330px] lg:w-[330px] -rotate-12 lg:-rotate-9 z-10 pointer-events-none"
        >
          <img
            src={edgeImages.left}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        <div
          className="absolute -right-10 top-4 flex h-auto w-30 sm:h-28 sm:w-24 lg:right-0 lg:top-0 lg:h-[338px] lg:w-[316px] rotate-12 lg:rotate-9 z-10 pointer-events-none"
        >
          <img
            src={edgeImages.right}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        <ScrollReveal className="relative z-20 text-center lg:px-52 px-2" y={20} delay={0.1}>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a0f05] leading-tight mb-4"
            style={{ fontFamily: "'Comfortaa', cursive" }}
          >
            Your Trusted Plug for Quality, Flavorful Meals.
          </h1>
          <p
            className="text-[#6b5a4e] text-sm sm:text-base leading-relaxed mb-7 max-w-md mx-auto"
            style={{ fontFamily: "'Comfortaa', cursive" }}
          >
            Well-packaged food bowls, generous trays, and professional event
            catering, served with excellence and style.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bauhaus-btn inline-flex items-center gap-2 bg-[#f97316] text-[#1a0f05] px-8 py-3 text-sm sm:text-base"
            style={{ fontFamily: "'Comfortaa', cursive" }}
          >
            Order Now →
          </a>
        </ScrollReveal>
      </div>

      <ScrollReveal className="mt-10 mx-4 sm:mx-8 max-w-5xl lg:mx-auto" y={28} delay={0.2}>
        <div className="bauhaus-card-lg overflow-hidden">
          <div className="hero-slider-track" style={{ display: 'flex', width: '500%' }}>
            {sliderImages.map((img, i) => (
              <div key={img.src} style={{ width: '20%' }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading={i === 0 ? undefined : 'lazy'}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
