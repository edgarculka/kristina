<script setup lang="ts">
type FooterLink = {
  label: string
  to?: string
  href?: string
}

defineProps<{
  eyebrow: string
  title: string
  copy: string
  primary: FooterLink
  secondary?: FooterLink
}>()
</script>

<template>
  <section class="site-closing" aria-labelledby="site-closing-title">
    <div class="site-closing__copy">
      <p class="eyebrow">{{ eyebrow }}</p>
      <h2 id="site-closing-title">{{ title }}</h2>
      <p>{{ copy }}</p>
    </div>
    <div class="site-closing__actions">
      <NuxtLink v-if="primary.to" class="button button--light" :to="primary.to">{{ primary.label }}</NuxtLink>
      <a v-else class="button button--light" :href="primary.href">{{ primary.label }}</a>

      <NuxtLink v-if="secondary?.to" class="text-link text-link--light" :to="secondary.to">{{ secondary.label }}</NuxtLink>
      <a v-else-if="secondary?.href" class="text-link text-link--light" :href="secondary.href">{{ secondary.label }}</a>
    </div>
  </section>

  <footer class="footer site-footer">
    <div>
      <NuxtLink class="site-footer__brand" to="/">Kristina Culka</NuxtLink>
      <p>Private family constellations, NLP coaching, and mindfulness coaching in London and online.</p>
    </div>

    <nav class="site-footer__nav" aria-label="Footer navigation">
      <NuxtLink to="/services">Services</NuxtLink>
      <NuxtLink to="/services/family-constellations">Family constellations</NuxtLink>
      <NuxtLink to="/services/nlp-coaching">NLP coaching</NuxtLink>
      <NuxtLink to="/services/mindfulness-coaching">Mindfulness coaching</NuxtLink>
      <NuxtLink to="/booking">Booking</NuxtLink>
    </nav>

    <div class="site-footer__contact">
      <a href="mailto:Kristina.culka@gmail.com">Kristina.culka@gmail.com</a>
      <a href="tel:+447502500989">+44 75 0250 0989</a>
    </div>
  </footer>
</template>
