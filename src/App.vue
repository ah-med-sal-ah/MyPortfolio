<script setup lang="ts">
import { watchEffect } from 'vue'
import { useLanguage } from './composables/useLanguage'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Focus from './components/Focus.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Certifications from './components/Certifications.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

const { t } = useLanguage()

// Keep the document title/description in sync with the active language.
watchEffect(() => {
  document.title = t('meta.title')
  document.querySelector('meta[name="description"]')?.setAttribute('content', t('meta.description'))
})
</script>

<template>
  <Navbar />
  <main id="main">
    <Hero />
    <About />
    <Skills />
    <Focus />
    <Experience />
    <Projects />
    <Certifications />
    <Contact />
  </main>
  <Footer />
</template>
