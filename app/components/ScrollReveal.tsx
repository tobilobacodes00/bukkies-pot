import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  amount?: number
}

type RevealState = 'idle' | 'ready' | 'visible'

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value))

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 12,
  amount = 0.18,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [state, setState] = useState<RevealState>('idle')

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const revealNow = () => setState('visible')

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches || !('IntersectionObserver' in window)) {
      revealNow()
      return
    }

    const threshold = clamp(amount, 0.05, 0.8)
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight
    const triggerLine = viewportHeight * (1 - threshold)
    const bounds = element.getBoundingClientRect()

    // If already near/inside viewport, keep it visible to avoid flicker on load.
    if (bounds.top <= triggerLine) {
      revealNow()
      return
    }

    setState('ready')
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry?.isIntersecting) return
        revealNow()
        observer.disconnect()
      },
      { threshold },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [amount])

  const transitionMs = 520
  const distance = Math.round(clamp(y, 6, 32))
  const delayMs = Math.round(Math.max(0, delay) * 1000)

  const style = useMemo(() => {
    if (state === 'idle') {
      return { opacity: 1, transform: 'translate3d(0, 0, 0)' }
    }

    const transition = `opacity ${transitionMs}ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms, transform ${transitionMs}ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms`

    if (state === 'ready') {
      return {
        opacity: 0.01,
        transform: `translate3d(0, ${distance}px, 0)`,
        transition,
        willChange: 'opacity, transform',
      }
    }

    return {
      opacity: 1,
      transform: 'translate3d(0, 0, 0)',
      transition,
      willChange: 'opacity, transform',
    }
  }, [delayMs, distance, state])

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}
