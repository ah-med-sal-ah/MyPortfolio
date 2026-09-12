import type { Lang } from '../locales/en'

/**
 * Formats an ISO date ("YYYY-MM-DD") as a short, locale-aware label,
 * e.g. "06 Jan 2025" (en) / "06 janv. 2025" (fr).
 */
export function formatDate(iso: string, lang: Lang): string {
  const date = new Date(`${iso}T00:00:00`)
  return new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date)
}

/** Formats a start/end ISO date pair as a single range label. */
export function formatDateRange(startIso: string, endIso: string, lang: Lang): string {
  return `${formatDate(startIso, lang)} – ${formatDate(endIso, lang)}`
}
