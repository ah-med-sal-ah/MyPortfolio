export interface ProjectMediaSingle {
  type: 'gif' | 'image'
  src: string
  /** Container aspect-ratio (CSS value) matching the real asset, avoids letterboxing/cropping. */
  aspect: string
}

export interface ProjectMediaCarousel {
  type: 'carousel'
  slides: string[]
  aspect: string
}

export interface ProjectItem {
  id: 'gym' | 'lms' | 'doctor'
  github: string
  media: ProjectMediaSingle | ProjectMediaCarousel
  /**
   * Specific technologies are intentionally left empty: none were confirmed
   * for these projects. The UI only renders this row when it is non-empty,
   * so it's ready to fill in later without touching any component.
   */
  technologies: string[]
}

export const projectItems: ProjectItem[] = [
  {
    id: 'gym',
    github: 'https://github.com/ah-med-sal-ah/GYMApp',
    media: { type: 'gif', src: '/GIF/GYMapp.gif', aspect: '2.1 / 1' },
    technologies: [],
  },
  {
    id: 'lms',
    github: 'https://github.com/ah-med-sal-ah/LMS',
    media: {
      type: 'carousel',
      slides: ['/GIF/LMS1.png', '/GIF/LMS2.png', '/GIF/LMS3.png'],
      aspect: '2.2 / 1',
    },
    technologies: [],
  },
  {
    id: 'doctor',
    github: 'https://github.com/ah-med-sal-ah/doctor-Management',
    media: { type: 'image', src: '/GIF/Doctor.png', aspect: '2.15 / 1' },
    technologies: [],
  },
]
