<script setup lang="ts">
import { services } from '~/data/services'

useHead({
  title: 'Services | Kristina Chulka',
  meta: [
    {
      name: 'description',
      content:
        'Explore family constellations, NLP coaching, and mindfulness coaching with Kristina Chulka.',
    },
  ],
})
</script>

<template>
  <main>
    <section class="services-hero">
      <div class="services-hero__copy">
        <p class="eyebrow">Services</p>
        <h1>Choose the right format</h1>
        <p>
          The practice is structured around three clear directions. Family and systemic constellations remain the main service, with NLP and mindfulness coaching available as focused supporting formats.
        </p>
        <NuxtLink class="button button--light" to="/booking">Book an initial consultation</NuxtLink>
      </div>
      <div class="services-hero__image">
        <img src="/images/tild6138-3134-4634-b339-656630343033-u6642599252_httpssmj.png" alt="London street with Union Jack flags" />
      </div>
    </section>

    <section class="service-rhythm">
      <article>
        <span>001.</span>
        <p>Start with the main request, not with a method.</p>
      </article>
      <article>
        <span>002.</span>
        <p>Choose the format that matches the depth and pace needed.</p>
      </article>
      <article>
        <span>003.</span>
        <p>Move toward clarity that can be used in real life.</p>
      </article>
    </section>

    <section class="section service-directory">
      <article v-for="service in services" :key="service.slug" class="directory-card directory-card--visual">
        <div class="directory-card__image">
          <img :src="service.image" :alt="service.imageAlt" />
        </div>
        <div class="directory-card__body">
          <span>{{ service.eyebrow }}</span>
          <h2>{{ service.title }}</h2>
          <p>{{ service.summary }}</p>
          <div class="directory-card__meta">
            <strong>{{ service.price }}</strong>
            <span>{{ service.duration }}</span>
          </div>
          <ul>
            <li v-for="detail in service.details" :key="detail">{{ detail }}</li>
          </ul>
          <NuxtLink class="button" :to="`/services/${service.slug}`">Open service</NuxtLink>
        </div>
      </article>
    </section>
  </main>
</template>
