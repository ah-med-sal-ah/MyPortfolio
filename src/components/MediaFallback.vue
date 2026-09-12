<script setup lang="ts">
import { ImageOff } from '@lucide/vue'
import { useLanguage } from '../composables/useLanguage'

withDefaults(defineProps<{ message?: string }>(), { message: undefined })

const { t } = useLanguage()
</script>

<template>
  <div
    class="flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-border-strong bg-surface-alt p-6 text-center"
    role="img"
    :aria-label="message ?? t('projects.mediaUnavailable')"
  >
    <ImageOff :size="24" class="text-ink-faint" aria-hidden="true" />
    <p class="text-sm text-ink-soft">{{ message ?? t('projects.mediaUnavailable') }}</p>
  </div>
</template>
