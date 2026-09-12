<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { X, ExternalLink } from '@lucide/vue'
import { useLanguage } from '../composables/useLanguage'

const props = defineProps<{
  title: string
  file: string
}>()

const emit = defineEmits<{ close: [] }>()

const { t } = useLanguage()
const dialogRef = ref<HTMLElement | null>(null)
let previouslyFocused: HTMLElement | null = null

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('close')
}

onMounted(() => {
  previouslyFocused = document.activeElement as HTMLElement | null
  document.addEventListener('keydown', onKeydown)
  document.body.style.overflow = 'hidden'
  dialogRef.value?.focus()
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
  previouslyFocused?.focus()
})
</script>

<template>
  <div class="fixed inset-0 z-60 flex items-center justify-center bg-ink/50 p-4 sm:p-8">
    <div
      ref="dialogRef"
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-modal-title"
      tabindex="-1"
      class="dialog-panel flex h-full max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-lg border border-border bg-surface"
      @click.stop
    >
      <div class="flex items-center justify-between gap-4 border-b border-border px-5 py-4">
        <h3 id="certificate-modal-title" class="truncate font-medium text-ink">
          {{ props.title }}
        </h3>
        <div class="flex shrink-0 items-center gap-2">
          <a
            :href="props.file"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm text-ink transition-colors hover:border-ink-soft"
          >
            <ExternalLink :size="14" aria-hidden="true" />
            {{ t('certifications.openPdf') }}
          </a>
          <button
            type="button"
            class="rounded-md p-1.5 text-ink-soft transition-all duration-200 hover:rotate-90 hover:bg-surface-alt hover:text-ink"
            :aria-label="t('nav.closeMenu')"
            @click="emit('close')"
          >
            <X :size="18" aria-hidden="true" />
          </button>
        </div>
      </div>
      <iframe
        :src="props.file"
        :title="props.title"
        class="h-full w-full flex-1 bg-surface-alt"
      ></iframe>
    </div>
    <button
      type="button"
      class="absolute inset-0 -z-10 cursor-default"
      :aria-label="t('nav.closeMenu')"
      @click="emit('close')"
    ></button>
  </div>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .dialog-panel,
.modal-leave-active .dialog-panel {
  transition:
    transform 0.25s ease,
    opacity 0.25s ease;
}

.modal-enter-from .dialog-panel,
.modal-leave-to .dialog-panel {
  opacity: 0;
  transform: scale(0.95) translateY(8px);
}
</style>
