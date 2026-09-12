<script setup lang="ts">
import { ArrowRight, ChevronDown } from '@lucide/vue'
import { useLanguage } from '../composables/useLanguage'
import CvDownloadMenu from './CvDownloadMenu.vue'

const { t } = useLanguage()
</script>

<template>
  <section
    id="home"
    class="mx-auto max-w-6xl px-5 pb-10 pt-14 sm:px-6 sm:pb-14 sm:pt-20 lg:px-8 lg:pt-24"
  >
    <div class="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
      <div class="order-2 lg:order-1" v-reveal>
        <p class="font-mono text-sm text-accent">// {{ t('hero.eyebrow') }}</p>

        <h1 class="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {{ t('hero.name') }}
        </h1>

        <p class="mt-3 text-xl font-medium text-accent-dark sm:text-2xl">
          {{ t('hero.role') }}
        </p>

        <p class="mt-5 font-mono text-sm text-ink-soft">
          {{ t('hero.tags') }}
        </p>

        <p class="mt-6 max-w-xl leading-relaxed text-ink-soft">
          {{ t('hero.paragraph') }}
        </p>

        <div class="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            class="group inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-medium text-surface transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-md active:translate-y-0"
          >
            {{ t('hero.ctaProjects') }}
            <ArrowRight
              :size="16"
              class="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
          <a
            href="#about"
            class="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-ink-soft hover:shadow-sm active:translate-y-0"
          >
            {{ t('hero.ctaAbout') }}
          </a>
          <CvDownloadMenu
            trigger-class="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium text-ink-soft transition-all duration-200 hover:-translate-y-0.5 hover:text-ink active:translate-y-0"
          />
        </div>
      </div>

      <div class="order-1 mx-auto w-full max-w-xs lg:order-2 lg:max-w-sm" v-reveal>
        <div class="relative">
          <div
            class="animate-float absolute -bottom-3 -right-3 aspect-square w-full rounded-2xl border-2 border-accent/40"
            aria-hidden="true"
          ></div>
          <img
            src="/Images/Ahmed.jpeg"
            alt="Portrait of Ahmed Salah"
            width="1080"
            height="1080"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            class="relative z-10 aspect-square w-full rounded-2xl border border-border object-cover transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>
      </div>
    </div>

    <div class="hidden justify-center pt-12 sm:flex">
      <a
        href="#about"
        class="flex flex-col items-center gap-1 text-xs text-ink-faint transition-colors hover:text-ink-soft"
      >
        {{ t('hero.scrollHint') }}
        <ChevronDown :size="16" class="animate-bounce" aria-hidden="true" />
      </a>
    </div>
  </section>
</template>
