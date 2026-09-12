<script setup lang="ts">
import { CheckCircle2 } from '@lucide/vue'
import { useLanguage } from '../composables/useLanguage'
import SectionHeading from './SectionHeading.vue'

const { t, tl } = useLanguage()
</script>

<template>
  <section id="about" class="mx-auto max-w-6xl scroll-mt-20 px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
    <SectionHeading index="01" :eyebrow="t('about.eyebrow')" :heading="t('about.heading')" />

    <div class="grid gap-10 lg:grid-cols-3 lg:gap-16">
      <div class="space-y-5 leading-relaxed text-ink-soft lg:col-span-2" v-reveal>
        <p>{{ t('about.paragraph1') }}</p>
        <p>{{ t('about.paragraph2') }}</p>
      </div>

      <div
        class="rounded-lg border border-border bg-surface-alt p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
        v-reveal
      >
        <h3 class="font-mono text-xs uppercase tracking-widest text-ink-soft">
          {{ t('about.highlightsLabel') }}
        </h3>
        <ul class="mt-4 space-y-3">
          <li
            v-for="(item, i) in tl('about.highlights')"
            :key="item"
            v-reveal="i"
            class="flex items-start gap-2.5 text-sm text-ink transition-transform duration-200 hover:translate-x-1"
          >
            <CheckCircle2 :size="16" class="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
