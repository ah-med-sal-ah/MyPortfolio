<script setup lang="ts">
import { Mail, ArrowUpRight } from '@lucide/vue'
import { useLanguage } from '../composables/useLanguage'
import { SOCIAL, mailtoLink, whatsappLink } from '../data/social'
import SectionHeading from './SectionHeading.vue'
import IconLinkedin from './icons/IconLinkedin.vue'
import IconGithub from './icons/IconGithub.vue'
import IconWhatsapp from './icons/IconWhatsapp.vue'

const { t } = useLanguage()

const channels = [
  {
    key: 'email',
    icon: Mail,
    label: 'contact.emailLabel',
    action: 'contact.emailAction',
    value: SOCIAL.email,
    href: mailtoLink,
    external: false,
  },
  {
    key: 'whatsapp',
    icon: IconWhatsapp,
    label: 'contact.whatsappLabel',
    action: 'contact.whatsappAction',
    value: SOCIAL.whatsappNumber,
    href: whatsappLink,
    external: true,
  },
  {
    key: 'linkedin',
    icon: IconLinkedin,
    label: 'contact.linkedinLabel',
    action: 'contact.linkedinAction',
    value: 'salah-ahmed-72b159247',
    href: SOCIAL.linkedin,
    external: true,
  },
  {
    key: 'github',
    icon: IconGithub,
    label: 'contact.githubLabel',
    action: 'contact.githubAction',
    value: 'ah-med-sal-ah',
    href: SOCIAL.github,
    external: true,
  },
] as const
</script>

<template>
  <section
    id="contact"
    class="mx-auto max-w-6xl scroll-mt-20 border-t border-border px-5 py-16 sm:px-6 sm:py-24 lg:px-8"
  >
    <SectionHeading
      index="07"
      :eyebrow="t('contact.eyebrow')"
      :heading="t('contact.heading')"
      :subheading="t('contact.subheading')"
    />

    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <a
        v-for="(channel, i) in channels"
        :key="channel.key"
        :href="channel.href"
        :target="channel.external ? '_blank' : undefined"
        :rel="channel.external ? 'noopener noreferrer' : undefined"
        class="group flex flex-col gap-3 rounded-lg border border-border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-ink-soft hover:shadow-md"
        v-reveal="i"
      >
        <div class="flex items-center justify-between">
          <component
            :is="channel.icon"
            :size="20"
            class="text-accent transition-transform duration-300 group-hover:scale-110"
            aria-hidden="true"
          />
          <ArrowUpRight
            :size="16"
            class="text-ink-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink-soft"
            aria-hidden="true"
          />
        </div>
        <div>
          <p class="font-mono text-xs uppercase tracking-wide text-ink-soft">
            {{ t(channel.label) }}
          </p>
          <p class="mt-1 break-words text-sm font-medium text-ink">{{ channel.value }}</p>
        </div>
        <span class="text-xs text-ink-faint">{{ t(channel.action) }}</span>
      </a>
    </div>
  </section>
</template>
