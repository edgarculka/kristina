<script setup lang="ts">
import { serviceBySlug } from '~/data/services'

const route = useRoute()
const service = computed(() => serviceBySlug[String(route.params.slug)])

useHead(() => ({
  title: service.value ? `${service.value.title} | Kristina Chulka` : 'Service | Kristina Chulka',
  meta: [
    {
      name: 'description',
      content: service.value?.summary ?? 'Private coaching and systemic work with Kristina Chulka.',
    },
  ],
}))
</script>

<template>
  <main v-if="service">
    <section class="service-detail-hero">
      <div class="service-detail-hero__copy">
        <p class="eyebrow">{{ service.eyebrow }}</p>
        <h1>{{ service.title }}</h1>
        <p>{{ service.promise }}</p>
        <div class="page-hero__actions">
          <NuxtLink class="button button--light" :to="`/booking?service=${service.slug}`">Book this service</NuxtLink>
          <NuxtLink class="text-link text-link--light" to="/services">Back to services</NuxtLink>
        </div>
      </div>
      <div class="service-detail-hero__image">
        <img :src="service.image" :alt="service.imageAlt" />
      </div>
    </section>

    <section class="section service-snapshot">
      <div class="snapshot-card snapshot-card--price">
        <span>Session guide</span>
        <strong>{{ service.price }}</strong>
        <p>{{ service.duration }}</p>
      </div>
      <article v-for="detail in service.details" :key="detail" class="snapshot-card">
        <span>*</span>
        <p>{{ detail }}</p>
      </article>
    </section>

    <section class="section service-page service-page--editorial">
      <div class="service-page__intro">
        <p class="asterisk">*</p>
        <h2>How this work helps</h2>
        <p>{{ service.intro }}</p>
        <ul class="chip-list">
          <li v-for="item in service.idealFor" :key="item">{{ item }}</li>
        </ul>
      </div>

      <div class="service-page__grid">
        <article v-for="group in service.groups" :key="group.title" class="service__group">
          <h3>{{ group.title }}</h3>
          <ul>
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="section outcomes outcomes--visual">
      <div>
        <p class="asterisk">*</p>
        <h2>Expected direction</h2>
        <p>{{ service.closing }}</p>
      </div>
      <ul>
        <li v-for="outcome in service.outcomes" :key="outcome">{{ outcome }}</li>
      </ul>
    </section>

    <section class="service-booking-band">
      <h2>Ready to choose the right format?</h2>
      <p>Start with an initial consultation so the request, service direction, and next step are clear.</p>
      <NuxtLink class="button button--light" :to="`/booking?service=${service.slug}`">Book consultation</NuxtLink>
    </section>
  </main>

  <main v-else>
    <section class="page-hero">
      <p class="eyebrow">Service</p>
      <h1>Service not found</h1>
      <p>This service page is not available.</p>
      <NuxtLink class="button" to="/services">View services</NuxtLink>
    </section>
  </main>
</template>
