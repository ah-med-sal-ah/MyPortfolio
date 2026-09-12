import type { Directive } from 'vue'

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

let observer: IntersectionObserver | null = null

function getObserver(): IntersectionObserver | null {
  if (typeof IntersectionObserver === 'undefined') return null
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )
  }
  return observer
}

/**
 * v-reveal: subtle fade + slide-up when an element enters the viewport.
 * Pass a number (typically a v-for index) to stagger items in a grid/list —
 * e.g. `v-reveal="i"` — capped so long lists don't trail off forever.
 * Fully skipped when the user prefers reduced motion, and the element
 * degrades gracefully (stays visible) if IntersectionObserver is unavailable.
 */
export const vReveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    if (prefersReducedMotion()) return
    const obs = getObserver()
    if (!obs) return
    if (typeof binding.value === 'number') {
      const step = Math.min(binding.value, 8)
      el.style.transitionDelay = `${step * 70}ms`
    }
    el.classList.add('reveal')
    obs.observe(el)
  },
}
