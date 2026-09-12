<script setup lang="ts">
import { computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'
import type { ProjectItem } from '../data/projects'
import ProjectMedia from './ProjectMedia.vue'
import ImageCarousel from './ImageCarousel.vue'
import IconGithub from './icons/IconGithub.vue'

const props = withDefaults(defineProps<{ item: ProjectItem; revealIndex?: number }>(), {
  revealIndex: 0,
})

const { t } = useLanguage()

const title = computed(() => t(`projects.items.${props.item.id}.title`))
const description = computed(() => t(`projects.items.${props.item.id}.description`))
const categoryKey = computed(() => (props.item.id === 'lms' ? 'lms' : 'management'))
const fallbackMessage = computed(() =>
  props.item.id === 'doctor' ? t('a11y.doctorGifMissing') : undefined,
)
</script>

<template>
  <article
    class="group flex flex-col overflow-hidden rounded-lg border border-border transition-all duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-lg"
    v-reveal="revealIndex"
  >
    <ProjectMedia
      v-if="item.media.type !== 'carousel'"
      :src="item.media.src"
      :alt="`${title} preview`"
      :aspect="item.media.aspect"
      :fallback-message="fallbackMessage"
    />
    <ImageCarousel
      v-else
      :slides="item.media.slides.map((src, i) => ({ src, alt: `${title} screenshot ${i + 1}` }))"
      :aspect="item.media.aspect"
    />

    <div class="flex flex-1 flex-col gap-3 p-6">
      <span class="font-mono text-xs uppercase tracking-wide text-ink-soft">
        {{ t(`projects.categories.${categoryKey}`) }}
      </span>
      <h3 class="text-lg font-medium text-ink">{{ title }}</h3>
      <p class="flex-1 text-sm leading-relaxed text-ink-soft">{{ description }}</p>

      <ul v-if="item.technologies.length" class="flex flex-wrap gap-2">
        <li
          v-for="tech in item.technologies"
          :key="tech"
          class="rounded-md border border-border bg-surface-alt px-2 py-0.5 text-xs text-ink-soft"
        >
          {{ tech }}
        </li>
      </ul>

      <a
        :href="item.github"
        target="_blank"
        rel="noopener noreferrer"
        class="group/btn mt-2 inline-flex w-fit items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-ink-soft hover:shadow-sm"
      >
        <IconGithub
          :size="16"
          class="transition-transform duration-300 group-hover/btn:rotate-360"
          aria-hidden="true"
        />
        {{ t('projects.viewGithub') }}
      </a>
    </div>
  </article>
</template>
