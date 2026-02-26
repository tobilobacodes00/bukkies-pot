const SMALL_IMAGES = [
  {
    src: '/images/bukkies-platter-1.png',
    alt: 'Assorted finger food platter',
  },
  {
    src: '/images/bukkies-box-1.png',
    alt: 'Packed meal box with snacks and drink',
  },
  {
    src: '/images/jollof-fish-plate.jpg',
    alt: 'Jollof rice served with fish and sides',
  },
  {
    src: '/images/buffet-bites.jpg',
    alt: 'Buffet bites arranged for catering',
  },
]

export default function Gallery() {
  return (
    <section
      className="bg-[#fffbf0] py-14"
      id="gallery"
      style={{ fontFamily: "'Comfortaa', cursive" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex justify-center mb-4">
          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-[#f97316] shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M9 2a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H9zm10 3H5a2 2 0 0 0-2 2v11a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2zM7 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm-1 9 3.2-4.27a1 1 0 0 1 1.6 0L13 17l2.2-2.93a1 1 0 0 1 1.6 0L20 18H6z" />
            </svg>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center text-[#1a0f05] mb-8">
          A Feast for Your Eyes
        </h2>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 gap-3"
          style={{ gridAutoRows: '140px' }}
        >
          <div className="rounded-3xl overflow-hidden shadow-md row-span-2 hidden sm:block">
            <img
              src="/images/catering-canapes.jpg"
              alt="Catering canapes arranged on serving boards"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {SMALL_IMAGES.map((img) => (
            <div key={img.src} className="rounded-2xl overflow-hidden shadow-sm">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
