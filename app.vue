<script setup lang="ts">
import { serviceBySlug } from '~/data/services'

const route = useRoute()
const mobileMenuOpen = ref(false)

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

watch(
  () => route.fullPath,
  () => {
    closeMobileMenu()
  },
)

watch(mobileMenuOpen, (isOpen) => {
  if (import.meta.client) {
    document.body.classList.toggle('nav-open', isOpen)
  }
})

onBeforeUnmount(() => {
  if (import.meta.client) {
    document.body.classList.remove('nav-open')
  }
})

const activeService = computed(() => {
  if (!route.path.startsWith('/services/')) {
    return null
  }

  const slug = route.path.split('/').filter(Boolean).at(1)
  return slug ? serviceBySlug[slug] ?? null : null
})

const isBookingRoute = computed(() => route.path === '/booking')

const closingCta = computed(() => {
  if (activeService.value) {
    return {
      eyebrow: activeService.value.eyebrow,
      title: `Ready for ${activeService.value.shortTitle}?`,
      copy: 'Book the full service directly, or choose a short consultation if you want to confirm the fit first.',
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
      copy: 'Book a specific service directly, or use the short consultation to choose between systemic work, NLP coaching, and mindfulness.',
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
      copy: 'Request a consultation. Kristina will confirm the right format personally.',
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
    copy: 'Compare the services or book a consultation to choose the right format.',
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
  <header v-if="!isBookingRoute" class="site-header">
    <NuxtLink class="site-logo" to="/">Kristina Culka</NuxtLink>
    <nav class="site-nav" aria-label="Main navigation">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/services">Services</NuxtLink>
      <NuxtLink to="/services/family-constellations">Family constellations</NuxtLink>
      <NuxtLink to="/services/nlp-coaching">NLP coaching</NuxtLink>
      <NuxtLink to="/services/mindfulness-coaching">Mindfulness</NuxtLink>
      <NuxtLink to="/booking">Booking</NuxtLink>
    </nav>
    <div class="desktop-header-actions" aria-label="Quick actions">
      <a class="header-call-link" href="tel:+447502500989">Call</a>
      <NuxtLink class="header-book-link" to="/booking">Book consultation</NuxtLink>
    </div>
    <div class="mobile-header-actions" aria-label="Mobile quick actions">
      <NuxtLink class="mobile-book-link" to="/booking">Book</NuxtLink>
      <a class="mobile-call-link" href="tel:+447502500989" aria-label="Call Kristina Culka">
        <span aria-hidden="true">☎</span>
      </a>
      <button
        class="menu-toggle"
        type="button"
        aria-controls="mobile-menu"
        :aria-expanded="mobileMenuOpen"
        aria-label="Open navigation menu"
        @click="mobileMenuOpen = true"
      >
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
  <Transition name="mobile-menu">
    <div v-if="mobileMenuOpen" id="mobile-menu" class="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation" @click.self="closeMobileMenu">
      <aside class="mobile-menu__panel">
        <div class="mobile-menu__top">
          <NuxtLink class="site-logo" to="/" @click="closeMobileMenu">Kristina Culka</NuxtLink>
          <button class="menu-close" type="button" aria-label="Close navigation menu" @click="closeMobileMenu">
            <span></span>
            <span></span>
          </button>
        </div>
        <nav class="mobile-menu__nav" aria-label="Mobile navigation links">
          <NuxtLink to="/" @click="closeMobileMenu">Home</NuxtLink>
          <NuxtLink to="/services" @click="closeMobileMenu">Services</NuxtLink>
          <NuxtLink to="/services/family-constellations" @click="closeMobileMenu">Family constellations</NuxtLink>
          <NuxtLink to="/services/nlp-coaching" @click="closeMobileMenu">NLP coaching</NuxtLink>
          <NuxtLink to="/services/mindfulness-coaching" @click="closeMobileMenu">Mindfulness coaching</NuxtLink>
          <NuxtLink to="/booking" @click="closeMobileMenu">Booking</NuxtLink>
        </nav>
        <div class="mobile-menu__actions">
          <NuxtLink class="button button--light" to="/booking" @click="closeMobileMenu">Book consultation</NuxtLink>
          <a class="mobile-menu__call" href="tel:+447502500989">Call +44 75 0250 0989</a>
        </div>
      </aside>
    </div>
  </Transition>
  <NuxtPage />
  <SiteFooter v-if="!isBookingRoute" v-bind="closingCta" />
</template>
