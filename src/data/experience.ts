export interface ExperienceItem {
  id: 'bna' | 'tifert' | 'trainer'
  image: string
  startDate: string // ISO date
  endDate: string // ISO date
  org: string
  kind: 'internship' | 'training'
  github?: string
}

export const experienceItems: ExperienceItem[] = [
  {
    id: 'bna',
    image: '/experience/1.png',
    startDate: '2025-01-06',
    endDate: '2025-01-31',
    org: 'BNA',
    kind: 'internship',
    github: 'https://github.com/ah-med-sal-ah/BNA-app',
  },
  {
    id: 'tifert',
    image: '/experience/2.png',
    startDate: '2026-01-06',
    endDate: '2026-01-31',
    org: 'TIFERT',
    kind: 'internship',
    github: 'https://github.com/ah-med-sal-ah/TIFERT-Task-management',
  },
  {
    id: 'trainer',
    image: '/experience/3.png',
    startDate: '2026-03-01',
    endDate: '2026-07-30',
    org: 'Trainer',
    kind: 'training',
  },
]
