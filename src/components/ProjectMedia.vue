<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import MediaFallback from './MediaFallback.vue'

const props = defineProps<{
  src: string
  alt: string
  /** CSS aspect-ratio value, e.g. "16 / 9". */
  aspect: string
  fallbackMessage?: string
}>()

const containerRef = ref<HTMLElement | null>(null)
const shouldLoad = ref(false)
const isLoaded = ref(false)
const hasError = ref(false)

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (typeof IntersectionObserver === 'undefined') {
    shouldLoad.value = true
    return
  }
  observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        shouldLoad.value = true
        observer?.disconnect()
      }
    },
    { rootMargin: '200px 0px', threshold: 0.01 },
  )
  if (containerRef.value) observer.observe(containerRef.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div
    ref="containerRef"
    class="relative w-full overflow-hidden rounded-md border border-border bg-surface-alt"
    :style="{ aspectRatio: props.aspect }"
  >
    <div
      v-if="!isLoaded && !hasError"
      class="skeleton absolute inset-0 bg-surface-alt"
      aria-hidden="true"
    ></div>

    <img
      v-if="shouldLoad && !hasError"
      :src="props.src"
      :alt="props.alt"
      loading="lazy"
      decoding="async"
      class="absolute inset-0 h-full w-full object-contain transition-[opacity,transform] duration-500 group-hover:scale-105"
      :class="isLoaded ? 'opacity-100' : 'opacity-0'"
      @load="isLoaded = true"
      @error="hasError = true"
    />

    <div v-if="hasError" class="absolute inset-0">
      <MediaFallback :message="props.fallbackMessage" />
    </div>
  </div>
</template>
