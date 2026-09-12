import type { Component } from 'vue'
import { Code2, Server, Database, Container, Sparkles } from '@lucide/vue'

export interface TechCategory {
  id: 'frontend' | 'backend' | 'databases' | 'devops' | 'ai'
  icon: Component
  items: string[]
}

/**
 * Technology stack, grouped the way the stack actually connects:
 * frontend -> backend/API -> database -> devops. AI & productivity
 * tools sit alongside as tools used across all of the above.
 */
export const techCategories: TechCategory[] = [
  {
    id: 'frontend',
    icon: Code2,
    items: ['Vue', 'React', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    icon: Server,
    items: ['Laravel', 'PHP', 'Python', 'REST APIs'],
  },
  {
    id: 'databases',
    icon: Database,
    items: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    id: 'devops',
    icon: Container,
    items: ['Docker', 'Git', 'GitHub'],
  },
  {
    id: 'ai',
    icon: Sparkles,
    items: ['Claude Code', 'ChatGPT'],
  },
]
