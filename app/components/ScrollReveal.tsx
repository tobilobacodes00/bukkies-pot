import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ClientOnly } from '@tanstack/react-router'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  amount?: number
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

function StaticReveal({
  children,
  className,
}: Pick<ScrollRevealProps, 'children' | 'className'>) {
  return <div className={className}>{children}</div>
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 24,
  amount = 0.2,
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <StaticReveal className={className}>{children}</StaticReveal>
  }

  return (
    <ClientOnly fallback={<StaticReveal className={className}>{children}</StaticReveal>}>
      <motion.div
        className={className}
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount }}
        transition={{ duration: 0.65, delay, ease: EASE }}
      >
        {children}
      </motion.div>
    </ClientOnly>
  )
}
