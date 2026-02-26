const TESTIMONIAL_IMAGES = [
  {
    src: '/testimonials/WhatsApp%20Image%202026-02-23%20at%2020.44.17.jpeg',
    alt: 'Customer testimonial screenshot 1',
  },
  {
    src: '/testimonials/WhatsApp%20Image%202026-02-23%20at%2020.44.37.jpeg',
    alt: 'Customer testimonial screenshot 2',
  },
  {
    src: '/testimonials/WhatsApp%20Image%202026-02-23%20at%2020.45.09.jpeg',
    alt: 'Customer testimonial screenshot 3',
  },
  {
    src: '/testimonials/WhatsApp%20Image%202026-02-23%20at%2020.45.10.jpeg',
    alt: 'Customer testimonial screenshot 4',
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
          Real feedback from our customers.
        </p>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {TESTIMONIAL_IMAGES.map((item) => (
            <article
              key={item.src}
              className="flex-shrink-0 w-[82vw] max-w-[320px] rounded-2xl bg-white p-2 shadow-md"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto rounded-xl"
                loading="lazy"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
