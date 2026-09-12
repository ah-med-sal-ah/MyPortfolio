export interface CertificationItem {
  id: 'flutter' | 'ai' | 'cyber' | 'wordpress' | 'hackathon'
  /** One or more certificate PDFs for this item (e.g. a course plus a follow-up badge). */
  files: string[]
  /** Issuing organization/platform, only set when explicitly known. */
  org?: string
}

export const certificationItems: CertificationItem[] = [
  {
    id: 'flutter',
    files: ['/certifications/ahmed-salah-flutter-mobile-development.pdf'],
    org: 'Orange Digital Center',
  },
  {
    id: 'ai',
    files: ['/certifications/ai.pdf', '/certifications/ai2.pdf'],
  },
  {
    id: 'cyber',
    files: ['/certifications/introduction-to-cybersecurity.pdf'],
  },
  {
    id: 'wordpress',
    files: ['/certifications/wordpress.pdf'],
    org: 'Coursera',
  },
  {
    id: 'hackathon',
    files: ['/certifications/hackathon.pdf'],
    org: 'IEEE Xtreme',
  },
]
