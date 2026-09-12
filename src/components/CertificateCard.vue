<script setup lang="ts">
import { computed } from 'vue'
import { FileText, ExternalLink } from '@lucide/vue'
import { useLanguage } from '../composables/useLanguage'
import { useFileExists } from '../composables/useFileExists'
import type { CertificationItem } from '../data/certifications'

const props = withDefaults(defineProps<{ item: CertificationItem; revealIndex?: number }>(), {
  revealIndex: 0,
})
const emit = defineEmits<{ view: [item: CertificationItem, file: string, index: number] }>()

const { t } = useLanguage()

const title = computed(() => t(`certifications.items.${props.item.id}.title`))
const description = computed(() => t(`certifications.items.${props.item.id}.description`))
const hasMultipleFiles = computed(() => props.item.files.length > 1)

// A fixed-size array of composables (one per file) so hook count stays stable
// across renders — item.files is static data, never toggled at runtime.
const fileEntries = props.item.files.map((file, index) => ({
  file,
  index,
  exists: useFileExists(file),
}))
</script>

<template>
  <div
    class="group flex flex-col gap-4 rounded-lg border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-md"
    v-reveal="revealIndex"
  >
    <div class="flex items-start gap-3">
      <div
        class="shrink-0 rounded-md bg-accent-soft p-2.5 text-accent-dark transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
      >
        <FileText :size="20" aria-hidden="true" />
      </div>
      <div class="min-w-0">
        <p v-if="item.org" class="font-mono text-xs uppercase tracking-wide text-ink-soft">
          {{ item.org }}
        </p>
        <h3 class="font-medium text-ink">{{ title }}</h3>
      </div>
    </div>

    <p class="flex-1 text-sm leading-relaxed text-ink-soft">{{ description }}</p>

    <div
      v-for="entry in fileEntries"
      :key="entry.file"
      class="flex flex-wrap items-center gap-2"
    >
      <p v-if="entry.exists.value === false" class="w-full text-xs text-ink-faint">
        {{ t('certifications.unavailable') }}
      </p>
      <button
        type="button"
        :disabled="entry.exists.value === false"
        class="inline-flex items-center gap-1.5 rounded-md bg-ink px-3.5 py-2 text-sm font-medium text-surface transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-sm disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:bg-ink"
        @click="emit('view', item, entry.file, entry.index)"
      >
        <FileText :size="14" aria-hidden="true" />
        {{ t('certifications.viewCertificate') }}{{ hasMultipleFiles ? ` ${entry.index + 1}` : '' }}
      </button>
      <a
        :href="entry.file"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 rounded-md border border-border px-3.5 py-2 text-sm font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-ink-soft hover:shadow-sm"
        :class="entry.exists.value === false ? 'pointer-events-none opacity-40' : ''"
        :aria-disabled="entry.exists.value === false"
        :tabindex="entry.exists.value === false ? -1 : undefined"
      >
        <ExternalLink :size="14" aria-hidden="true" />
        {{ t('certifications.openPdf') }}{{ hasMultipleFiles ? ` ${entry.index + 1}` : '' }}
      </a>
    </div>
  </div>
</template>
