import type { Lang } from '../locales/en'

/**
 * Central site configuration.
 *
 * CV_FILES maps each supported language to its CV file under public/CV/.
 * If a file is ever missing, useCv.ts checks before navigating and the
 * download menu shows a graceful "not available" message for that
 * language instead of a broken link — replacing the file at the same
 * path is all that's needed to bring it back.
 */
export const CV_FILES: Record<Lang, string> = {
  en: '/CV/ahmed-salah-cv-en.pdf',
  fr: '/CV/ahmed-salah-cv-fr.pdf',
}

export const SITE = {
  name: 'Ahmed Salah',
  title: 'Ahmed Salah | Software Developer & SOC Enthusiast',
  description:
    'Ahmed Salah is a final-year software development student focused on API development, software engineering, cybersecurity, SOC, cloud, DevOps, and AI-assisted development.',
  url: 'https://ahmedsalah.dev',
  ogImage: '/Images/Ahmed.jpeg',
} as const
