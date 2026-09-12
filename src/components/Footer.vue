<script setup lang="ts">
import { Mail, ArrowUp } from '@lucide/vue'
import { useLanguage } from '../composables/useLanguage'
import { SOCIAL, mailtoLink, whatsappLink } from '../data/social'
import IconGithub from './icons/IconGithub.vue'
import IconLinkedin from './icons/IconLinkedin.vue'
import IconWhatsapp from './icons/IconWhatsapp.vue'

const { t } = useLanguage()
const year = new Date().getFullYear()

const links = [
  { key: 'github', icon: IconGithub, href: SOCIAL.github, label: 'contact.githubLabel' },
  { key: 'linkedin', icon: IconLinkedin, href: SOCIAL.linkedin, label: 'contact.linkedinLabel' },
  { key: 'email', icon: Mail, href: mailtoLink, label: 'contact.emailLabel' },
  { key: 'whatsapp', icon: IconWhatsapp, href: whatsappLink, label: 'contact.whatsappLabel' },
] as const
</script>

<template>
  <footer class="border-t border-border">
    <div class="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-6 sm:py-12 lg:px-8">
      <div class="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p class="font-mono text-sm font-semibold text-ink">Ahmed Salah</p>
          <p class="mt-1 text-sm text-ink-soft">{{ t('footer.role') }}</p>
        </div>

        <div class="flex items-center gap-2">
          <a
            v-for="link in links"
            :key="link.key"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-md p-2 text-ink-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-surface-alt hover:text-ink"
            :aria-label="t(link.label)"
          >
            <component :is="link.icon" :size="18" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div
        class="flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-ink-faint sm:flex-row sm:items-center"
      >
        <p>&copy; {{ year }} Ahmed Salah. {{ t('footer.rights') }}</p>
        <a
          href="#home"
          class="group inline-flex items-center gap-1.5 transition-colors hover:text-ink-soft"
        >
          {{ t('footer.backToTop') }}
          <ArrowUp
            :size="14"
            class="transition-transform duration-200 group-hover:-translate-y-1"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  </footer>
</template>
