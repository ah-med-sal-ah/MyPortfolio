<script setup lang="ts">
import { useLanguage } from '../composables/useLanguage'
import { experienceItems } from '../data/experience'
import { formatDateRange } from '../utils/date'
import SectionHeading from './SectionHeading.vue'
import IconGithub from './icons/IconGithub.vue'

const { t, lang } = useLanguage()
</script>

<template>
  <section
    id="experience"
    class="mx-auto max-w-6xl scroll-mt-20 border-t border-border px-5 py-16 sm:px-6 sm:py-24 lg:px-8"
  >
    <SectionHeading
      index="04"
      :eyebrow="t('experience.eyebrow')"
      :heading="t('experience.heading')"
      :subheading="t('experience.subheading')"
    />

    <ol class="relative max-w-3xl border-l-2 border-border pl-8 sm:pl-10">
      <li
        v-for="(exp, i) in experienceItems"
        :key="exp.id"
        class="relative pb-10 last:pb-0"
        v-reveal="i"
      >
        <span
          class="dot-pulse absolute -left-8 top-1 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-surface bg-accent sm:-left-10"
          aria-hidden="true"
        ></span>

        <div
          class="rounded-lg border border-border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-md sm:p-6"
        >
          <div class="flex flex-wrap items-start gap-4">
            <img
              :src="exp.image"
              :alt="`${exp.org} logo`"
              loading="lazy"
              decoding="async"
              class="h-14 w-14 shrink-0 rounded-md border border-border bg-surface-alt object-contain p-1.5 transition-transform duration-300 hover:scale-105 sm:h-16 sm:w-16"
            />

            <div class="min-w-0 flex-1">
              <div class="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                <h3 class="font-medium text-ink">
                  {{ exp.org }}
                  <span
                    v-if="t(`experience.items.${exp.id}.orgFull`)"
                    class="font-normal text-ink-soft"
                  >
                    — {{ t(`experience.items.${exp.id}.orgFull`) }}
                  </span>
                </h3>
                <span
                  class="rounded-full px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wide"
                  :class="
                    exp.kind === 'internship'
                      ? 'border border-accent/25 bg-accent-soft text-accent-dark'
                      : 'bg-ink text-surface'
                  "
                >
                  {{
                    exp.kind === 'internship'
                      ? t('experience.internshipLabel')
                      : t('experience.trainerLabel')
                  }}
                </span>
              </div>
              <p class="mt-1 font-mono text-xs text-ink-soft">
                {{ formatDateRange(exp.startDate, exp.endDate, lang) }}
              </p>
            </div>
          </div>

          <p class="mt-4 leading-relaxed text-ink-soft">
            {{ t(`experience.items.${exp.id}.description`) }}
          </p>

          <a
            v-if="exp.github"
            :href="exp.github"
            target="_blank"
            rel="noopener noreferrer"
            class="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent-dark"
          >
            <IconGithub :size="15" aria-hidden="true" />
            <span class="link-underline">{{ t('projects.viewGithub') }}</span>
          </a>
        </div>
      </li>
    </ol>
  </section>
</template>
