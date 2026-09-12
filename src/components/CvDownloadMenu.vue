<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { FileDown, ChevronDown, FileText } from '@lucide/vue'
import { useLanguage } from '../composables/useLanguage'
import { useCv } from '../composables/useCv'
import type { Lang } from '../locales/en'

withDefaults(
  defineProps<{
    triggerClass?: string
    align?: 'left' | 'right'
  }>(),
  { triggerClass: '', align: 'left' },
)

const { t } = useLanguage()
const { isOpen, statuses, toggle, close, download } = useCv()

const rootRef = ref<HTMLElement | null>(null)
const triggerRef = ref<HTMLButtonElement | null>(null)

const options: { lang: Lang; badge: string; labelKey: string }[] = [
  { lang: 'en', badge: 'EN', labelKey: 'cv.english' },
  { lang: 'fr', badge: 'FR', labelKey: 'cv.french' },
]

function onDocumentClick(e: MouseEvent) {
  if (isOpen.value && rootRef.value && !rootRef.value.contains(e.target as Node)) {
    close()
  }
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && isOpen.value) {
    close()
    triggerRef.value?.focus()
  }
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick)
  document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocumentClick)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div ref="rootRef" class="relative">
    <button
      ref="triggerRef"
      type="button"
      :class="triggerClass"
      aria-haspopup="menu"
      :aria-expanded="isOpen"
      @click="toggle"
    >
      <FileDown :size="16" aria-hidden="true" />
      {{ t('nav.cv') }}
      <ChevronDown
        :size="14"
        class="transition-transform duration-200"
        :class="isOpen ? 'rotate-180' : ''"
        aria-hidden="true"
      />
    </button>

    <Transition name="cv-menu">
      <div
        v-if="isOpen"
        role="menu"
        :aria-label="t('cv.choose')"
        class="absolute top-full z-20 mt-2 w-56 rounded-md border border-border bg-surface p-1.5 shadow-md"
        :class="align === 'right' ? 'right-0' : 'left-0'"
      >
        <p class="px-2.5 pb-1.5 pt-1 font-mono text-[11px] uppercase tracking-widest text-ink-soft">
          {{ t('cv.choose') }}
        </p>
        <div v-for="opt in options" :key="opt.lang">
          <button
            type="button"
            role="menuitem"
            class="flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-sm text-ink transition-colors hover:bg-surface-alt disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent"
            :disabled="statuses[opt.lang] === 'unavailable'"
            @click="download(opt.lang)"
          >
            <FileText :size="15" class="shrink-0 text-accent" aria-hidden="true" />
            {{ t(opt.labelKey) }}
            <span class="ml-auto font-mono text-[11px] text-ink-faint">{{ opt.badge }}</span>
          </button>
          <p
            v-if="statuses[opt.lang] === 'unavailable'"
            role="status"
            aria-live="polite"
            class="px-2.5 pb-1.5 text-xs text-ink-faint"
          >
            {{ t('cv.unavailable') }}
          </p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.cv-menu-enter-active,
.cv-menu-leave-active {
  transition:
    opacity 0.15s ease,
    transform 0.15s ease;
}

.cv-menu-enter-from,
.cv-menu-leave-to {
  opacity: 0;
  transform: translateY(-4px) scale(0.98);
}
</style>
