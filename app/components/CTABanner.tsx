import type { LucideIcon } from 'lucide-react'
import {
  Apple,
  Beef,
  ChefHat,
  Cookie,
  Egg,
  Fish,
  Flame,
  Leaf,
  Pizza,
  Sparkles,
  UtensilsCrossed,
} from 'lucide-react'

import { ScrollReveal } from './ScrollReveal'

const WHATSAPP_LINK =
  'https://wa.me/2348161671113?text=Hi%20Bukkies%20Pot%2C%20I%20want%20to%20place%20an%20order.'

type Doodle = {
  Icon: LucideIcon
  cls: string
  size: number
  rotate: number
  color: string
  opacity: number
}

const DOODLES: Doodle[] = [
  // ── Top row ──────────────────────────────────────────────
  { Icon: ChefHat,         cls: 'top-2  left-[2%]',      size: 58, rotate: -18, color: '#1a0f05', opacity: 0.55 },
  { Icon: Sparkles,        cls: 'top-1  left-[14%]',     size: 30, rotate: 10,  color: '#f5c842', opacity: 0.8  },
  { Icon: Pizza,           cls: 'top-3  left-[24%]',     size: 44, rotate: 22,  color: '#f97316', opacity: 0.6  },
  { Icon: Leaf,            cls: 'top-1  left-[36%]',     size: 34, rotate: -12, color: '#1a0f05', opacity: 0.4  },
  { Icon: Egg,             cls: 'top-1  right-[36%]',    size: 30, rotate: 18,  color: '#1a0f05', opacity: 0.45 },
  { Icon: Cookie,          cls: 'top-3  right-[24%]',    size: 42, rotate: -20, color: '#f97316', opacity: 0.55 },
  { Icon: Sparkles,        cls: 'top-1  right-[14%]',    size: 28, rotate: -10, color: '#f5c842', opacity: 0.75 },
  { Icon: Fish,            cls: 'top-2  right-[2%]',     size: 54, rotate: -22, color: '#1a0f05', opacity: 0.5  },

  // ── Upper-mid row ────────────────────────────────────────
  { Icon: Flame,           cls: 'top-[22%] left-[4%]',  size: 46, rotate: 8,   color: '#f97316', opacity: 0.65 },
  { Icon: Apple,           cls: 'top-[20%] left-[16%]', size: 36, rotate: -25, color: '#f97316', opacity: 0.5  },
  { Icon: UtensilsCrossed, cls: 'top-[18%] left-[28%]', size: 32, rotate: 30,  color: '#1a0f05', opacity: 0.4  },
  { Icon: UtensilsCrossed, cls: 'top-[18%] right-[28%]',size: 32, rotate: -30, color: '#1a0f05', opacity: 0.4  },
  { Icon: Beef,            cls: 'top-[20%] right-[16%]', size: 36, rotate: 20,  color: '#1a0f05', opacity: 0.5  },
  { Icon: Flame,           cls: 'top-[22%] right-[4%]', size: 46, rotate: -8,  color: '#f97316', opacity: 0.65 },

  // ── Mid row ──────────────────────────────────────────────
  { Icon: Beef,            cls: 'top-[44%] left-[2%]',  size: 52, rotate: -35, color: '#1a0f05', opacity: 0.45 },
  { Icon: Sparkles,        cls: 'top-[42%] left-[13%]', size: 28, rotate: 15,  color: '#f5c842', opacity: 0.7  },
  { Icon: Sparkles,        cls: 'top-[42%] right-[13%]',size: 28, rotate: -15, color: '#f5c842', opacity: 0.7  },
  { Icon: ChefHat,         cls: 'top-[44%] right-[2%]', size: 52, rotate: 35,  color: '#1a0f05', opacity: 0.45 },

  // ── Lower-mid row ────────────────────────────────────────
  { Icon: Cookie,          cls: 'top-[64%] left-[4%]',  size: 44, rotate: 14,  color: '#f97316', opacity: 0.55 },
  { Icon: Leaf,            cls: 'top-[66%] left-[17%]', size: 36, rotate: -20, color: '#1a0f05', opacity: 0.45 },
  { Icon: Egg,             cls: 'top-[64%] left-[29%]', size: 30, rotate: 25,  color: '#1a0f05', opacity: 0.4  },
  { Icon: Egg,             cls: 'top-[64%] right-[29%]',size: 30, rotate: -25, color: '#1a0f05', opacity: 0.4  },
  { Icon: Fish,            cls: 'top-[66%] right-[17%]',size: 38, rotate: 18,  color: '#1a0f05', opacity: 0.45 },
  { Icon: Pizza,           cls: 'top-[64%] right-[4%]', size: 44, rotate: -14, color: '#f97316', opacity: 0.55 },

  // ── Bottom row ───────────────────────────────────────────
  { Icon: UtensilsCrossed, cls: 'bottom-2 left-[2%]',   size: 50, rotate: 20,  color: '#1a0f05', opacity: 0.5  },
  { Icon: Flame,           cls: 'bottom-3 left-[14%]',  size: 38, rotate: -15, color: '#f97316', opacity: 0.6  },
  { Icon: Apple,           cls: 'bottom-2 left-[25%]',  size: 34, rotate: 12,  color: '#f97316', opacity: 0.55 },
  { Icon: Sparkles,        cls: 'bottom-2 left-[43%]',  size: 32, rotate: 5,   color: '#f5c842', opacity: 0.8  },
  { Icon: Beef,            cls: 'bottom-2 right-[25%]', size: 34, rotate: -12, color: '#1a0f05', opacity: 0.55 },
  { Icon: Cookie,          cls: 'bottom-3 right-[14%]', size: 38, rotate: 15,  color: '#f97316', opacity: 0.6  },
  { Icon: UtensilsCrossed, cls: 'bottom-2 right-[2%]',  size: 50, rotate: -20, color: '#1a0f05', opacity: 0.5  },
]

export default function CTABanner() {
  return (
    <section
      className="relative overflow-hidden px-4 py-14 sm:py-16 text-center"
      style={{ fontFamily: "'Comfortaa', cursive" }}
    >
      <div className="bauhaus-halftone pointer-events-none absolute inset-0 opacity-[0.08]" />

      <ScrollReveal className="mx-auto max-w-5xl" y={24}>
        <div className="bauhaus-card-lg relative px-6 py-10 sm:px-8 sm:py-12">

          {/* Food doodles — scattered around the card */}
          {DOODLES.map(({ Icon, cls, size, rotate, color, opacity }, i) => (
            <span
              key={i}
              aria-hidden="true"
              className={`pointer-events-none absolute hidden md:block ${cls}`}
              style={{ transform: `rotate(${rotate}deg)`, color, opacity }}
            >
              <Icon size={size} strokeWidth={1.5} />
            </span>
          ))}

          <div className="mb-6 flex justify-center">
            <img
              src="/images/logo.png"
              alt="Bukkies Pot logo"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </div>

          {/* Left side image — tilted bordered frame */}
          <div className="pointer-events-none absolute left-4 top-14 hidden md:block">
            <div className="-rotate-12 border-[3px] border-[#1a0f05] shadow-[4px_4px_0_#1a0f05] bg-white p-1">
              <img
                src="/images/bukkies-box-1.png"
                alt="Packed meal box by Bukkies Pot"
                className="w-28 lg:w-32 object-contain opacity-95"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right side image — tilted bordered frame */}
          <div className="pointer-events-none absolute right-4 top-14 hidden md:block">
            <div className="rotate-12 border-[3px] border-[#1a0f05] shadow-[4px_4px_0_#1a0f05] bg-white p-1">
              <img
                src="/images/bukkies-platter-1.png"
                alt="Platter from Bukkies Pot"
                className="w-28 lg:w-32 object-contain opacity-95"
                loading="lazy"
              />
            </div>
          </div>

          <h2 className="mb-3 text-3xl sm:text-4xl font-bold text-[#1a0f05] leading-tight">
            Don&apos;t Wait - Order Now!
          </h2>
          <p className="mx-auto mb-7 max-w-md text-sm text-[#4b4037] leading-relaxed">
            Fresh ingredients, mouth-watering recipes, and a passion for good food
            delivered to your door or ready for pickup.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bauhaus-btn inline-flex items-center justify-center gap-2 bg-[#f97316] px-7 py-3 text-sm text-[#1a0f05]"
            >
              Order Now →
            </a>
            <a
              href="#full-menu"
              className="bauhaus-btn inline-flex items-center justify-center gap-2 bg-white px-7 py-3 text-sm text-[#1a0f05]"
            >
              View Menu
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
