<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'
import { useLanguage } from '../composables/useLanguage'
import { techCategories } from '../data/technologies'
import SectionHeading from './SectionHeading.vue'

const { t } = useLanguage()

const flowSteps = ['frontend', 'api', 'database', 'devops'] as const
</script>

<template>
  <section
    id="skills"
    class="mx-auto max-w-6xl scroll-mt-20 border-t border-border px-5 py-16 sm:px-6 sm:py-24 lg:px-8"
  >
    <SectionHeading
      index="02"
      :eyebrow="t('skills.eyebrow')"
      :heading="t('skills.heading')"
      :subheading="t('skills.subheading')"
    />

    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(cat, i) in techCategories"
        :key="cat.id"
        class="rounded-lg border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-md"
        v-reveal="i"
      >
        <div class="flex items-center gap-2.5 text-ink">
          <component :is="cat.icon" :size="18" class="text-accent" aria-hidden="true" />
          <h3 class="font-medium">{{ t(`skills.categories.${cat.id}`) }}</h3>
        </div>
        <ul class="mt-4 flex flex-wrap gap-2">
          <li
            v-for="item in cat.items"
            :key="item"
            class="rounded-md border border-border bg-surface-alt px-2.5 py-1 text-sm text-ink-soft transition-colors duration-200 hover:border-accent/40 hover:text-ink"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>

    <div class="mt-14 rounded-lg border border-border bg-surface-alt p-6 sm:p-8" v-reveal>
      <div class="flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:gap-4">
        <template v-for="(step, i) in flowSteps" :key="step">
          <div
            class="w-full rounded-md border border-border-strong bg-surface px-4 py-3 text-center text-sm font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-sm sm:w-auto sm:flex-1"
          >
            {{ t(`skills.flow.${step}`) }}
          </div>
          <ArrowRight
            v-if="i < flowSteps.length - 1"
            :size="18"
            class="motion-safe:animate-pulse shrink-0 rotate-90 text-accent/70 sm:rotate-0"
            aria-hidden="true"
          />
        </template>
      </div>
      <p class="mt-5 text-center text-sm text-ink-soft">{{ t('skills.flow.caption') }}</p>
    </div>
  </section>
</template>
