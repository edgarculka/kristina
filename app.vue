<script setup lang="ts">
import { serviceBySlug } from '~/data/services'

const route = useRoute()

const activeService = computed(() => {
  if (!route.path.startsWith('/services/')) {
    return null
  }

  const slug = route.path.split('/').filter(Boolean).at(1)
  return slug ? serviceBySlug[slug] ?? null : null
})

const closingCta = computed(() => {
  if (activeService.value) {
    return {
      eyebrow: activeService.value.eyebrow,
      title: `Ready for ${activeService.value.shortTitle}?`,
      copy: 'Book a first consultation so the request, service direction, and next step are clear before deeper work begins.',
      primary: {
        label: 'Book this service',
        to: `/booking?service=${activeService.value.slug}`,
      },
      secondary: {
        label: 'Compare all services',
        to: '/services',
      },
    }
  }

  if (route.path === '/services') {
    return {
      eyebrow: 'Next step',
      title: 'Ready to choose the right format?',
      copy: 'Start with an initial consultation if you want help choosing between systemic work, NLP coaching, and mindfulness coaching.',
      primary: {
        label: 'Book initial consultation',
        to: '/booking',
      },
      secondary: {
        label: 'Return home',
        to: '/',
      },
    }
  }

  if (route.path === '/booking') {
    return {
      eyebrow: 'Before you send',
      title: 'Not sure which service to choose?',
      copy: 'You can still request an initial consultation. Kristina will confirm the format personally after reviewing the request.',
      primary: {
        label: 'View services',
        to: '/services',
      },
      secondary: {
        label: 'Email a question',
        href: 'mailto:Kristina.culka@gmail.com',
      },
    }
  }

  return {
    eyebrow: 'Begin here',
    title: 'Ready to find the right support?',
    copy: 'Explore the service directions or book an initial consultation to clarify the request and choose the right format.',
    primary: {
      label: 'Book consultation',
      to: '/booking',
    },
    secondary: {
      label: 'View all services',
      to: '/services',
    },
  }
})
</script>

<template>
  <header class="site-header">
    <NuxtLink class="site-logo" to="/">Kristina Chulka</NuxtLink>
    <nav class="site-nav" aria-label="Main navigation">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/services">Services</NuxtLink>
      <NuxtLink to="/services/family-constellations">Family Constellations</NuxtLink>
      <NuxtLink to="/services/nlp-coaching">NLP</NuxtLink>
      <NuxtLink to="/services/mindfulness-coaching">Mindfulness</NuxtLink>
      <NuxtLink to="/booking">Booking</NuxtLink>
    </nav>
  </header>
  <NuxtPage />
  <SiteFooter v-bind="closingCta" />
</template>
