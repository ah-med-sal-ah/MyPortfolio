<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X } from '@lucide/vue'
import { useLanguage } from '../composables/useLanguage'
import CvDownloadMenu from './CvDownloadMenu.vue'
import type { Lang } from '../locales/en'

const { t, lang, setLang } = useLanguage()

const isOpen = ref(false)

const navLinks = [
  { key: 'home', hash: '#home' },
  { key: 'about', hash: '#about' },
  { key: 'skills', hash: '#skills' },
  { key: 'experience', hash: '#experience' },
  { key: 'projects', hash: '#projects' },
  { key: 'certifications', hash: '#certifications' },
  { key: 'contact', hash: '#contact' },
] as const

const languages: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
]

function closeMenu() {
  isOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-border bg-surface">
    <a href="#main" class="skip-link">{{ t('a11y.skipToContent') }}</a>

    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
      <a
        href="#home"
        class="font-mono text-base font-semibold tracking-tight text-ink transition-transform duration-200 hover:scale-105"
        @click="closeMenu"
      >
        Ahmed<span class="text-accent">.</span>Salah
      </a>

      <!-- Desktop nav -->
      <nav class="hidden items-center gap-7 md:flex" :aria-label="t('nav.menu')">
        <a
          v-for="link in navLinks"
          :key="link.key"
          :href="link.hash"
          class="link-underline text-sm text-ink-soft transition-colors hover:text-ink"
        >
          {{ t(`nav.${link.key}`) }}
        </a>
      </nav>

      <div class="hidden items-center gap-4 md:flex">
        <div
          class="flex items-center overflow-hidden rounded-full border border-border text-xs font-mono"
          role="group"
          :aria-label="t('nav.language')"
        >
          <button
            v-for="l in languages"
            :key="l.code"
            type="button"
            class="px-3 py-1.5 transition-all duration-200"
            :class="lang === l.code ? 'bg-ink text-surface' : 'text-ink-soft hover:text-ink'"
            :aria-pressed="lang === l.code"
            @click="setLang(l.code)"
          >
            {{ l.label }}
          </button>
        </div>

        <CvDownloadMenu
          align="right"
          trigger-class="inline-flex items-center gap-2 rounded-md border border-border px-3.5 py-2 text-sm font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-ink-soft hover:shadow-sm active:translate-y-0"
        />
      </div>

      <!-- Mobile toggle -->
      <button
        type="button"
        class="inline-flex items-center justify-center rounded-md p-2 text-ink transition-transform duration-200 active:scale-90 md:hidden"
        :aria-label="isOpen ? t('nav.closeMenu') : t('nav.menu')"
        aria-controls="mobile-menu"
        :aria-expanded="isOpen"
        @click="isOpen = !isOpen"
      >
        <Transition name="icon-swap" mode="out-in">
          <X v-if="isOpen" :size="22" aria-hidden="true" />
          <Menu v-else :size="22" aria-hidden="true" />
        </Transition>
      </button>
    </div>

    <!-- Mobile panel -->
    <Transition name="menu">
      <nav
        v-if="isOpen"
        id="mobile-menu"
        class="border-t border-border bg-surface md:hidden"
        :aria-label="t('nav.menu')"
      >
        <div class="flex flex-col gap-1 px-5 py-4 sm:px-6">
          <a
            v-for="link in navLinks"
            :key="link.key"
            :href="link.hash"
            class="rounded-md px-3 py-2.5 text-base text-ink-soft transition-all duration-200 hover:translate-x-1 hover:bg-surface-alt hover:text-ink"
            @click="closeMenu"
          >
            {{ t(`nav.${link.key}`) }}
          </a>

          <div class="mt-3 flex items-center justify-between gap-4 border-t border-border pt-4">
            <div
              class="flex items-center overflow-hidden rounded-full border border-border text-xs font-mono"
              role="group"
              :aria-label="t('nav.language')"
            >
              <button
                v-for="l in languages"
                :key="l.code"
                type="button"
                class="px-3 py-1.5"
                :class="lang === l.code ? 'bg-ink text-surface' : 'text-ink-soft'"
                :aria-pressed="lang === l.code"
                @click="setLang(l.code)"
              >
                {{ l.label }}
              </button>
            </div>

            <CvDownloadMenu
              align="right"
              trigger-class="inline-flex items-center gap-2 rounded-md border border-border px-3.5 py-2 text-sm font-medium text-ink"
            />
          </div>
        </div>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.icon-swap-enter-active,
.icon-swap-leave-active {
  transition:
    opacity 0.15s ease,
    transform 0.15s ease;
}

.icon-swap-enter-from,
.icon-swap-leave-to {
  opacity: 0;
  transform: rotate(-45deg) scale(0.8);
}
</style>
