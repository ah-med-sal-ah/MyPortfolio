<script setup lang="ts">
import { computed, ref } from 'vue'
import { useLanguage } from '../composables/useLanguage'
import { certificationItems, type CertificationItem } from '../data/certifications'
import SectionHeading from './SectionHeading.vue'
import CertificateCard from './CertificateCard.vue'
import CertificateModal from './CertificateModal.vue'

const { t } = useLanguage()

interface ActiveCertificate {
  item: CertificationItem
  file: string
  index: number
}

const activeCert = ref<ActiveCertificate | null>(null)
const activeTitle = computed(() => {
  if (!activeCert.value) return ''
  const base = t(`certifications.items.${activeCert.value.item.id}.title`)
  return activeCert.value.item.files.length > 1
    ? `${base} (${activeCert.value.index + 1})`
    : base
})

function onView(item: CertificationItem, file: string, index: number) {
  activeCert.value = { item, file, index }
}
</script>

<template>
  <section
    id="certifications"
    class="mx-auto max-w-6xl scroll-mt-20 border-t border-border px-5 py-16 sm:px-6 sm:py-24 lg:px-8"
  >
    <SectionHeading
      index="06"
      :eyebrow="t('certifications.eyebrow')"
      :heading="t('certifications.heading')"
      :subheading="t('certifications.subheading')"
    />

    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <CertificateCard
        v-for="(item, i) in certificationItems"
        :key="item.id"
        :item="item"
        :reveal-index="i"
        @view="onView"
      />
    </div>

    <Transition name="modal">
      <CertificateModal
        v-if="activeCert"
        :title="activeTitle"
        :file="activeCert.file"
        @close="activeCert = null"
      />
    </Transition>
  </section>
</template>
