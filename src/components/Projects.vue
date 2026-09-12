<script setup lang="ts">
import { useLanguage } from '../composables/useLanguage'
import { projectItems } from '../data/projects'
import SectionHeading from './SectionHeading.vue'
import ProjectCard from './ProjectCard.vue'

const { t } = useLanguage()
</script>

<template>
  <section
    id="projects"
    class="mx-auto max-w-6xl scroll-mt-20 border-t border-border px-5 py-16 sm:px-6 sm:py-24 lg:px-8"
  >
    <SectionHeading
      index="05"
      :eyebrow="t('projects.eyebrow')"
      :heading="t('projects.heading')"
      :subheading="t('projects.subheading')"
    />

    <div class="grid gap-6 lg:grid-cols-2">
      <ProjectCard
        v-for="(item, i) in projectItems"
        :key="item.id"
        :item="item"
        :reveal-index="i"
      />
    </div>
  </section>
</template>
