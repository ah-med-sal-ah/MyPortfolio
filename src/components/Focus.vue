<script setup lang="ts">
import { Webhook, ShieldCheck, Cloud, Sparkles } from '@lucide/vue'
import { useLanguage } from '../composables/useLanguage'
import SectionHeading from './SectionHeading.vue'

const { t } = useLanguage()

const items = [
  { id: 'api', icon: Webhook, primary: true },
  { id: 'security', icon: ShieldCheck, primary: false },
  { id: 'cloud', icon: Cloud, primary: false },
  { id: 'ai', icon: Sparkles, primary: false },
] as const
</script>

<template>
  <section
    id="focus"
    class="mx-auto max-w-6xl scroll-mt-20 border-t border-border px-5 py-16 sm:px-6 sm:py-24 lg:px-8"
  >
    <SectionHeading
      index="03"
      :eyebrow="t('focus.eyebrow')"
      :heading="t('focus.heading')"
      :subheading="t('focus.subheading')"
    />

    <div class="grid gap-5 sm:grid-cols-2">
      <div
        v-for="(item, i) in items"
        :key="item.id"
        class="group relative rounded-lg border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
        :class="item.primary ? 'border-ink/25' : 'border-border'"
        v-reveal="i"
      >
        <span
          v-if="item.primary"
          class="motion-safe:animate-pulse absolute right-5 top-5 rounded-full bg-accent-soft px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-accent-dark"
        >
          {{ t('focus.primaryBadge') }}
        </span>
        <component
          :is="item.icon"
          :size="20"
          class="text-accent transition-transform duration-300 group-hover:scale-110"
          aria-hidden="true"
        />
        <h3 class="mt-4 text-lg font-medium text-ink">
          {{ t(`focus.items.${item.id}.title`) }}
        </h3>
        <p class="mt-2 leading-relaxed text-ink-soft">
          {{ t(`focus.items.${item.id}.description`) }}
        </p>
      </div>
    </div>
  </section>
</template>
