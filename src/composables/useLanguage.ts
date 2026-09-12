import { computed, ref, watchEffect } from 'vue'
import { en, type Lang } from '../locales/en'
import { fr } from '../locales/fr'

const STORAGE_KEY = 'portfolio-lang'
const locales = { en, fr }

function readStoredLang(): Lang {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'fr' ? 'fr' : 'en'
}

// Module-level state so every component sharing this composable reads/writes
// the same reactive language — a simple singleton store, no extra library.
const lang = ref<Lang>(readStoredLang())

if (typeof document !== 'undefined') {
  watchEffect(() => {
    document.documentElement.lang = lang.value
  })
}

function setLang(next: Lang) {
  lang.value = next
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, next)
  }
}

function toggleLang() {
  setLang(lang.value === 'en' ? 'fr' : 'en')
}

/** Reads a dotted path ("nav.home") out of a nested object, returning undefined if missing. */
function getPath(obj: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in acc) {
      return (acc as Record<string, unknown>)[key]
    }
    return undefined
  }, obj)
}

/** Translate a dotted key, with optional {placeholder} interpolation. */
function translate(key: string, vars?: Record<string, string | number>): string {
  const value = getPath(locales[lang.value], key) ?? getPath(locales.en, key)
  if (typeof value !== 'string') {
    if (import.meta.env.DEV) console.warn(`[i18n] Missing translation key: "${key}"`)
    return key
  }
  if (!vars) return value
  return Object.entries(vars).reduce(
    (str, [name, val]) => str.replaceAll(`{${name}}`, String(val)),
    value,
  )
}

/** Reads a dotted key that resolves to an array (e.g. about.highlights). */
function translateList(key: string): string[] {
  const value = getPath(locales[lang.value], key) ?? getPath(locales.en, key)
  return Array.isArray(value) ? (value as string[]) : []
}

export function useLanguage() {
  return {
    lang: computed(() => lang.value),
    setLang,
    toggleLang,
    t: translate,
    tl: translateList,
  }
}
