import { ref } from 'vue'
import { CV_FILES } from '../config/site'
import type { Lang } from '../locales/en'

export type CvFileStatus = 'idle' | 'checking' | 'unavailable'

/**
 * Drives a single "Download CV" trigger + its language picker menu.
 * Called per component instance (Navbar desktop/mobile, Hero) so opening
 * one menu never affects another.
 */
export function useCv() {
  const isOpen = ref(false)
  const statuses = ref<Record<Lang, CvFileStatus>>({ en: 'idle', fr: 'idle' })
  const hideTimers: Partial<Record<Lang, ReturnType<typeof setTimeout>>> = {}

  function open() {
    isOpen.value = true
  }

  function close() {
    isOpen.value = false
  }

  function toggle() {
    isOpen.value = !isOpen.value
  }

  /**
   * Checks the file actually resolves before navigating to it. Some static
   * hosts (and Vite's own dev/preview server) fall back to index.html with
   * a 200 for unknown paths, so `response.ok` alone isn't a reliable
   * "file exists" signal — a real PDF is never text/html.
   */
  async function download(lang: Lang) {
    if (statuses.value[lang] === 'checking') return
    statuses.value[lang] = 'checking'
    const path = CV_FILES[lang]
    try {
      const response = await fetch(path, { method: 'HEAD' })
      const contentType = response.headers.get('content-type') ?? ''
      if (response.ok && !contentType.includes('text/html')) {
        window.open(path, '_blank', 'noopener')
        statuses.value[lang] = 'idle'
        close()
        return
      }
      throw new Error('CV not found')
    } catch {
      statuses.value[lang] = 'unavailable'
      clearTimeout(hideTimers[lang])
      hideTimers[lang] = setTimeout(() => {
        statuses.value[lang] = 'idle'
      }, 5000)
    }
  }

  return { isOpen, statuses, open, close, toggle, download }
}
