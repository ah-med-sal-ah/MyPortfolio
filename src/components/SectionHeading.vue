<script setup lang="ts">
defineProps<{
  index: string
  eyebrow: string
  heading: string
  subheading?: string
}>()
</script>

<template>
  <div class="mb-10 max-w-2xl md:mb-14">
    <div class="flex items-center gap-3">
      <span class="font-mono text-sm text-accent">{{ index }}</span>
      <span class="h-px w-8 bg-border-strong" aria-hidden="true"></span>
      <span class="font-mono text-xs uppercase tracking-widest text-ink-soft">{{ eyebrow }}</span>
    </div>
    <h2 class="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
      {{ heading }}
    </h2>
    <p v-if="subheading" class="mt-3 text-ink-soft">{{ subheading }}</p>
  </div>
</template>
