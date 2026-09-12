<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { ChevronLeft, ChevronRight, Play, Pause } from '@lucide/vue'
import { useLanguage } from '../composables/useLanguage'

const props = withDefaults(
  defineProps<{
    slides: { src: string; alt: string }[]
    aspect: string
    autoplay?: boolean
    interval?: number
  }>(),
  { autoplay: true, interval: 5000 },
)

const { t } = useLanguage()

const activeIndex = ref(0)
// Autoplay keeps running regardless of manual next/prev/indicator interaction
// — the only way to stop it is the explicit pause button below. Pausing on
// hover/focus was removed: a clicked button keeps focus (or the pointer just
// rests over the carousel) with no further event to resume it, so the
// carousel would silently get stuck paused — the opposite of "automatic".
const isPlaying = ref(props.autoplay && props.slides.length > 1)

let timer: ReturnType<typeof setInterval> | undefined

function clearTimer() {
  if (timer) clearInterval(timer)
  timer = undefined
}

function startOrStopTimer() {
  clearTimer()
  if (!isPlaying.value) return
  timer = setInterval(() => goTo(activeIndex.value + 1), props.interval)
}

watch(isPlaying, startOrStopTimer)
onMounted(startOrStopTimer)
onBeforeUnmount(clearTimer)

function goTo(index: number) {
  const total = props.slides.length
  activeIndex.value = ((index % total) + total) % total
}

function next() {
  goTo(activeIndex.value + 1)
}

function prev() {
  goTo(activeIndex.value - 1)
}

function togglePlay() {
  isPlaying.value = !isPlaying.value
}

let touchStartX = 0

function onTouchStart(e: TouchEvent) {
  touchStartX = e.touches[0]?.clientX ?? 0
}

function onTouchEnd(e: TouchEvent) {
  const endX = e.changedTouches[0]?.clientX ?? 0
  const delta = endX - touchStartX
  if (Math.abs(delta) < 40) return
  if (delta > 0) prev()
  else next()
}
</script>

<template>
  <div
    class="group relative w-full overflow-hidden rounded-md border border-border bg-surface-alt outline-none"
    :style="{ aspectRatio: aspect }"
    role="region"
    aria-roledescription="carousel"
    :aria-label="t('projects.items.lms.title')"
    tabindex="0"
    @touchstart.passive="onTouchStart"
    @touchend="onTouchEnd"
    @keydown.left.prevent="prev()"
    @keydown.right.prevent="next()"
  >
    <div
      class="flex h-full w-full transition-transform duration-500 ease-out"
      :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
    >
      <div v-for="slide in slides" :key="slide.src" class="h-full w-full shrink-0">
        <img
          :src="slide.src"
          :alt="slide.alt"
          loading="lazy"
          decoding="async"
          class="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>

    <span class="sr-only" role="status" aria-live="polite">
      {{ t('carousel.slideOf', { current: activeIndex + 1, total: slides.length }) }}
    </span>

    <template v-if="slides.length > 1">
      <button
        type="button"
        class="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-border bg-surface/90 p-1.5 text-ink transition-colors hover:bg-surface"
        :aria-label="t('carousel.previous')"
        @click="prev()"
      >
        <ChevronLeft :size="18" aria-hidden="true" />
      </button>
      <button
        type="button"
        class="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-border bg-surface/90 p-1.5 text-ink transition-colors hover:bg-surface"
        :aria-label="t('carousel.next')"
        @click="next()"
      >
        <ChevronRight :size="18" aria-hidden="true" />
      </button>

      <div
        class="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-border bg-surface/90 px-2.5 py-1.5"
      >
        <div class="flex items-center gap-1.5">
          <button
            v-for="(slide, i) in slides"
            :key="slide.src"
            type="button"
            class="h-2 w-2 rounded-full transition-colors"
            :class="i === activeIndex ? 'bg-accent' : 'bg-border-strong'"
            :aria-label="t('carousel.goTo', { n: i + 1 })"
            :aria-current="i === activeIndex"
            @click="goTo(i)"
          ></button>
        </div>
        <button
          type="button"
          class="text-ink-soft transition-colors hover:text-ink"
          :aria-label="isPlaying ? t('carousel.pause') : t('carousel.play')"
          :aria-pressed="isPlaying"
          @click="togglePlay"
        >
          <Pause v-if="isPlaying" :size="14" aria-hidden="true" />
          <Play v-else :size="14" aria-hidden="true" />
        </button>
      </div>
    </template>
  </div>
</template>
