import { useEffect, useState } from 'react'

const sliderImages = [
  { src: '/hero-slider/1st.png', alt: 'Bukkies Pot meal 1' },
  { src: '/hero-slider/2nd.png', alt: 'Bukkies Pot meal 2' },
  { src: '/hero-slider/3rd.png', alt: 'Bukkies Pot meal 3' },
  { src: '/hero-slider/4th.png', alt: 'Bukkies Pot meal 4' },
  { src: '/hero-slider/5th.png', alt: 'Bukkies Pot meal 5' },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-[#fffbf0] pt-12 pb-10 overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-6">
        <div
          className="hidden lg:flex absolute left-0 top-0 rounded-3xl overflow-hidden shadow-2xl"
          style={{
            width: '130px',
            height: '130px',
            transform: 'rotate(-9deg)',
            zIndex: 10,
          }}
        >
          <img
            src="/images/jollof-fish-plate.jpg"
            alt="Jollof rice and fish plate"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="hidden lg:flex absolute right-0 top-0 rounded-3xl overflow-hidden shadow-2xl"
          style={{
            width: '116px',
            height: '138px',
            transform: 'rotate(9deg)',
            zIndex: 10,
          }}
        >
          <img
            src="/images/bukkies-platter-2.png"
            alt="Assorted platter served by Bukkies Pot"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-center lg:px-52 px-2">
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
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#f97316] text-white font-bold px-8 py-3 rounded-full hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm sm:text-base"
            style={{ fontFamily: "'Comfortaa', cursive" }}
          >
            Order Now <span>{'->'}</span>
          </a>
        </div>
      </div>

      <div className="mt-10 mx-4 sm:mx-8 max-w-5xl lg:mx-auto">
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${sliderImages.length * 100}%`,
              transform: `translateX(-${current * (100 / sliderImages.length)}%)`,
            }}
          >
            {sliderImages.map((img) => (
              <div key={img.src} style={{ width: `${100 / sliderImages.length}%` }}>
                <img src={img.src} alt={img.alt} className="w-full h-auto block" />
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-3">
          {sliderImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="w-2.5 h-2.5 rounded-full transition-all"
              style={{ background: i === current ? '#f97316' : 'rgba(26,15,5,0.2)' }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
