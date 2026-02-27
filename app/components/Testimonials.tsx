import { ScrollReveal } from './ScrollReveal'

const TESTIMONIAL_IMAGES = [
  {
    src: '/testimonials/WhatsApp%20Image%202026-02-23%20at%2020.44.17.jpeg',
    alt: 'Customer testimonial screenshot 1',
    quote: 'Always fresh and beautifully packaged.',
  },
  {
    src: '/testimonials/WhatsApp%20Image%202026-02-23%20at%2020.44.37.jpeg',
    alt: 'Customer testimonial screenshot 2',
    quote: 'Great taste and right-on-time delivery.',
  },
  {
    src: '/testimonials/WhatsApp%20Image%202026-02-23%20at%2020.45.09.jpeg',
    alt: 'Customer testimonial screenshot 3',
    quote: 'Perfect for events and family orders.',
  },
  {
    src: '/testimonials/WhatsApp%20Image%202026-02-23%20at%2020.45.10.jpeg',
    alt: 'Customer testimonial screenshot 4',
    quote: 'Our guests loved every dish served.',
  },
]

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="m12 2.3 2.85 5.78 6.38.92-4.62 4.5 1.09 6.35L12 16.8l-5.7 2.99 1.09-6.35-4.62-4.5 6.38-.92L12 2.3Z" />
    </svg>
  )
}

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

export default function Testimonials() {
  return (
    <section className="bg-[#fffbf0] py-14" style={{ fontFamily: "'Comfortaa', cursive" }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal y={20}>
          <div className="bauhaus-card-lg relative overflow-hidden bg-[linear-gradient(160deg,#fffaf3_0%,#fff4e6_45%,#fff9f0_100%)] p-6 sm:p-8">
            <div className="bauhaus-halftone pointer-events-none absolute inset-0 opacity-[0.1]" />

            <div className="relative z-10 flex flex-col gap-2 sm:items-center sm:text-center">
              <div className="bauhaus-chip inline-flex h-12 w-12 items-center justify-center bg-pink-400">
                <HeartIcon />
              </div>
              <h2 className="text-3xl font-bold text-[#1a0f05]">They Love Us</h2>
              <p className="max-w-xl text-sm leading-relaxed text-[#6b5a4e]">
                Real customer conversations and delivery feedback from happy clients.
              </p>
            </div>

            <div className="relative z-10 mt-8 grid gap-5 lg:grid-cols-[1.05fr_1.95fr] lg:items-stretch">
              <ScrollReveal y={22} delay={0.04}>
                <article className="rounded-3xl border-[3px] border-[#1a0f05] bg-[#1a0f05] p-5 text-white shadow-[6px_6px_0_#f5c842]">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/70">Customer Trust</p>
                  <h3 className="mt-2 text-4xl font-bold leading-none">4.9/5</h3>
                  <div className="mt-3 flex items-center gap-1 text-[#f5c842]">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/85">
                    Orders keep coming from repeat customers because the meals are consistent,
                    fresh, and properly packed.
                  </p>
                  <a
                    href="https://wa.me/2348161671113?text=Hi%20Bukkies%20Pot%2C%20I%20saw%20your%20reviews%20and%20I%20want%20to%20order."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bauhaus-btn mt-5 inline-flex bg-[#f97316] px-4 py-2 text-xs text-[#1a0f05]"
                  >
                    Order on WhatsApp
                  </a>
                </article>
              </ScrollReveal>

              <div className="overflow-x-auto pb-2 scrollbar-hide">
                <div className="flex min-w-max gap-4">
                  {TESTIMONIAL_IMAGES.map((item, index) => (
                    <ScrollReveal key={item.src} delay={0.08 + index * 0.06} y={18}>
                      <article className="w-[80vw] max-w-[310px] flex-shrink-0 rounded-2xl border-[3px] border-[#1a0f05] bg-white/95 p-3 shadow-[5px_5px_0_#1a0f05] sm:w-[320px]">
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full rounded-xl"
                          loading="lazy"
                        />
                        <p className="mt-3 text-xs font-medium text-[#4b4037]">{item.quote}</p>
                      </article>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
