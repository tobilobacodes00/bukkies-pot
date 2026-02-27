import { useEffect, useRef, useState } from 'react'

type VideoPost = {
  src: string
  alt: string
  tag: string
  caption: string
  poster: string
}

const buildVideoSrc = (fileName: string) => encodeURI(`/video gallery/${fileName}`)

const VIDEO_POSTS: VideoPost[] = [
  {
    src: buildVideoSrc('IMG_5017.MOV'),
    alt: 'Food preparation and plating clip',
    tag: 'Kitchen Clip',
    caption: 'Fresh prep in motion',
    poster:
      '/random-plates-of-food/176b53ef-e721-4005-b26a-5a264a7e0eaf-Photoroom.png',
  },
  {
    src: buildVideoSrc('IMG_5021.MOV'),
    alt: 'Catering setup clip',
    tag: 'Catering Clip',
    caption: 'Setup before service',
    poster:
      '/random-plates-of-food/3b4da1ce-2701-44aa-8c7b-ad308e4e192e-Photoroom.png',
  },
  {
    src: buildVideoSrc('IMG_8720.MOV'),
    alt: 'Serving and presentation clip',
    tag: 'Serving Clip',
    caption: 'Service done with style',
    poster: '/random-plates-of-food/f35de54e-e153-4162-ac35-3c34ea18c450-Photoroom.png',
  },
  {
    src: buildVideoSrc('IMG_8846.MOV'),
    alt: 'Plated meal close-up clip',
    tag: 'Meal Clip',
    caption: 'Close-up flavor moments',
    poster:
      '/random-plates-of-food/a85bddf8-14c3-46a4-9fb4-ec6cb841f998-Photoroom.png',
  },
  {
    src: buildVideoSrc('IMG_9272.MOV'),
    alt: 'Event food display clip',
    tag: 'Event Clip',
    caption: 'A full table experience',
    poster:
      '/random-plates-of-food/Gemini_Generated_Image_c300orc300orc300-Photoroom.png',
  },
]

function CameraIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M9 2a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H9zm10 3H5a2 2 0 0 0-2 2v11a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2zM7 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm-1 9 3.2-4.27a1 1 0 0 1 1.6 0L13 17l2.2-2.93a1 1 0 0 1 1.6 0L20 18H6z" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function isModernMediaQueryList(media: MediaQueryList) {
  return typeof media.addEventListener === 'function'
}

export default function Gallery() {
  const modalFeedRef = useRef<HTMLDivElement | null>(null)
  const modalVideoRefs = useRef<Array<HTMLVideoElement | null>>([])
  const modalCardRefs = useRef<Array<HTMLDivElement | null>>([])

  const [isMobile, setIsMobile] = useState(false)
  const [isFeedOpen, setIsFeedOpen] = useState(false)
  const [startIndex, setStartIndex] = useState(0)
  const [failedPostIndexes, setFailedPostIndexes] = useState<number[]>([])

  const markPostFailed = (index: number) => {
    setFailedPostIndexes((current) =>
      current.includes(index) ? current : [...current, index],
    )
  }

  const hasFailed = (index: number) => failedPostIndexes.includes(index)

  const openFeed = (index: number) => {
    setStartIndex(index)
    setIsFeedOpen(true)
  }

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)')
    setIsMobile(media.matches)

    if (isModernMediaQueryList(media)) {
      const onChange = (event: MediaQueryListEvent) => setIsMobile(event.matches)
      media.addEventListener('change', onChange)
      return () => media.removeEventListener('change', onChange)
    }

    const onLegacyChange = () => setIsMobile(media.matches)
    media.addListener(onLegacyChange)
    return () => media.removeListener(onLegacyChange)
  }, [])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    if (isFeedOpen) document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isFeedOpen])

  useEffect(() => {
    if (!isFeedOpen) return

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsFeedOpen(false)
    }
    window.addEventListener('keydown', onEscape)
    return () => window.removeEventListener('keydown', onEscape)
  }, [isFeedOpen])

  useEffect(() => {
    if (!isFeedOpen) return
    const root = modalFeedRef.current
    if (!root) return

    const currentVideos = modalVideoRefs.current.filter(Boolean) as HTMLVideoElement[]

    if (typeof IntersectionObserver === 'undefined') {
      currentVideos.forEach((video) => {
        const playPromise = video.play()
        if (playPromise) playPromise.catch(() => {})
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement
          if (entry.isIntersecting) {
            const playPromise = video.play()
            if (playPromise) playPromise.catch(() => {})
            return
          }
          video.pause()
        })
      },
      { root, threshold: 0.72 },
    )

    currentVideos.forEach((video) => observer.observe(video))
    return () => observer.disconnect()
  }, [isFeedOpen])

  useEffect(() => {
    if (!isFeedOpen) return
    const card = modalCardRefs.current[startIndex]
    if (!card) return
    requestAnimationFrame(() => {
      card.scrollIntoView({ behavior: 'auto', block: 'start' })
    })
  }, [isFeedOpen, startIndex])

  return (
    <section
      className="bg-[#fffbf0] py-14"
      id="gallery"
      style={{ fontFamily: "'Comfortaa', cursive" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex justify-center mb-4">
          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-[#f97316] shadow-sm">
            <CameraIcon />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center text-[#1a0f05] mb-2">
          A Feast for Your Eyes
        </h2>
        <p className="text-center text-[#6b5a4e] text-sm mb-6 max-w-sm mx-auto leading-relaxed">
          Tap any clip to open the TikTok-style viewer and swipe up.
        </p>

        <div className="mx-auto max-w-4xl">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide">
            {VIDEO_POSTS.map((post, index) => (
              <article
                key={post.src}
                className="relative h-[62vh] sm:h-[66vh] w-[78vw] sm:w-[360px] snap-start shrink-0 overflow-hidden rounded-3xl bg-black shadow-xl"
              >
                <video
                  src={post.src}
                  poster={post.poster}
                  aria-label={post.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                  loop
                  muted
                  playsInline
                  autoPlay
                  preload="metadata"
                  onError={() => markPostFailed(index)}
                >
                  <source src={post.src} type="video/quicktime" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                <a
                  href={post.src}
                  onClick={(event) => {
                    event.preventDefault()
                    openFeed(index)
                  }}
                  className="absolute inset-0 z-20 flex items-center justify-center focus-visible:outline-white"
                  aria-label={`Open viewer from ${post.caption}`}
                >
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-[#1a0f05] shadow-xl">
                    <PlayIcon />
                  </span>
                </a>

                {hasFailed(index) && (
                  <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-3 bg-black/70 px-4 text-center text-white">
                    <p className="text-xs sm:text-sm">
                      This clip format is not supported in your browser preview.
                    </p>
                    <a
                      href={post.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#1a0f05]"
                    >
                      Open Clip
                    </a>
                  </div>
                )}

                <div className="absolute bottom-4 left-4 right-4 z-10 text-white pointer-events-none">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/75">
                    {post.tag}
                  </p>
                  <h3 className="mt-1 text-base sm:text-lg font-bold">{post.caption}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {isFeedOpen && (
        <div
          className="fixed inset-0 z-[220] bg-black/90"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsFeedOpen(false)}
        >
          <div
            className={`mx-auto flex h-full items-center justify-center ${
              isMobile ? 'w-full p-0' : 'max-w-5xl p-6'
            }`}
          >
            <div
              className={`relative bg-[#0b0b0b] ${
                isMobile
                  ? 'h-full w-full'
                  : 'h-[90vh] w-full max-w-md overflow-hidden rounded-3xl border border-white/10'
              }`}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsFeedOpen(false)}
                className="absolute right-3 top-3 z-40 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/55 text-white"
                aria-label="Close viewer"
              >
                x
              </button>

              <div
                ref={modalFeedRef}
                className="h-full overflow-y-auto snap-y snap-mandatory p-2 scrollbar-hide"
              >
                {VIDEO_POSTS.map((post, index) => (
                  <article
                    key={`modal-${post.src}`}
                    ref={(element) => {
                      modalCardRefs.current[index] = element
                    }}
                    className="relative mb-2 last:mb-0 h-[88vh] snap-start overflow-hidden rounded-2xl bg-black"
                  >
                    <video
                      ref={(element) => {
                        modalVideoRefs.current[index] = element
                      }}
                      src={post.src}
                      poster={post.poster}
                      aria-label={post.alt}
                      className="absolute inset-0 h-full w-full object-cover"
                      loop
                      muted
                      playsInline
                      controls
                      preload="metadata"
                      onError={() => markPostFailed(index)}
                    >
                      <source src={post.src} type="video/quicktime" />
                    </video>

                    {hasFailed(index) && (
                      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-3 bg-black/70 px-4 text-center text-white">
                        <p className="text-xs sm:text-sm">
                          Browser preview failed for this clip format.
                        </p>
                        <a
                          href={post.src}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#1a0f05]"
                        >
                          Open Clip
                        </a>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 z-10 pointer-events-none text-white">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-white/75">
                        {post.tag}
                      </p>
                      <h3 className="mt-1 text-base sm:text-lg font-bold">{post.caption}</h3>
                      <p className="mt-1 text-xs text-white/85">Swipe up for next clip.</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
