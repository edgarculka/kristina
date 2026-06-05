<script setup lang="ts">
import { services } from '~/data/services'

const additionalOfferings = [
  {
    title: 'Group sessions',
    summary:
      'Private group work for shared themes, small communities, and organised circles that need a calm guided format.',
    details: ['Small groups', 'Shared theme work', 'Planned directly'],
    emailHref: 'mailto:Kristina.culka@gmail.com?subject=Group%20session%20enquiry',
  },
  {
    title: 'Schools and after-school clubs',
    summary:
      'Mindfulness, confidence, and emotional support sessions for schools, after-school clubs, and children\'s groups.',
    details: ['School groups', 'After-school clubs', 'Age-aware format'],
    emailHref: 'mailto:Kristina.culka@gmail.com?subject=School%20or%20children%27s%20group%20enquiry',
  },
  {
    title: 'Corporate coaching',
    summary:
      'Coaching and reflective sessions for teams, founders, and leaders who need clearer communication and steadier decisions.',
    details: ['Teams and leaders', 'Workplace pressure', 'Corporate format'],
    emailHref: 'mailto:Kristina.culka@gmail.com?subject=Corporate%20coaching%20enquiry',
  },
]

useHead({
  title: 'Services | Kristina Culka',
  meta: [
    {
      name: 'description',
      content:
        'Explore private services, group sessions, school clubs, and corporate coaching with Kristina Culka.',
    },
  ],
})
</script>

<template>
  <main>
    <section class="services-hero">
      <div class="services-hero__copy">
        <p class="eyebrow">Private services</p>
        <h1>Services</h1>
        <p>
          Choose from three private formats, each with a clear duration, price, and dedicated service page.
        </p>
      </div>
    </section>

    <section class="section service-directory">
      <article v-for="service in services" :key="service.slug" class="directory-card directory-card--visual">
        <div class="directory-card__image">
          <img :src="service.image" :alt="service.imageAlt" />
        </div>
        <div class="directory-card__body">
          <span>{{ service.eyebrow }}</span>
          <h2>{{ service.title }}</h2>
          <p>{{ service.promise }}</p>
          <div class="directory-card__meta">
            <strong>{{ service.price }}</strong>
            <span>{{ service.duration }}</span>
          </div>
          <ul>
            <li v-for="benefit in service.benefits" :key="benefit">{{ benefit }}</li>
          </ul>
          <NuxtLink class="button" :to="`/services/${service.slug}`">View details</NuxtLink>
        </div>
      </article>
    </section>

    <section class="section services-consultation" aria-labelledby="services-consultation-title">
      <div class="services-consultation__copy">
        <p class="eyebrow">Discovery first</p>
        <h2 id="services-consultation-title">Not sure what the request needs?</h2>
        <p>
          The discovery session is a short diagnostic first meeting to map what is happening and choose the right next step.
        </p>
      </div>
      <NuxtLink class="button" to="/booking">Book discovery session</NuxtLink>
    </section>

    <section class="section extended-offerings" aria-labelledby="extended-offerings-title">
      <div class="section-heading section-heading--split">
        <div>
          <p class="eyebrow">Other formats</p>
          <h2 id="extended-offerings-title">Groups, schools, and organisations</h2>
        </div>
        <p>
          These formats are arranged directly rather than through the booking wizard. Email first, or call to discuss the group, setting, dates, and what support is needed.
        </p>
      </div>
      <div class="extended-offerings__grid">
        <article v-for="offering in additionalOfferings" :key="offering.title" class="extended-offering-card">
          <div>
            <h3>{{ offering.title }}</h3>
            <p>{{ offering.summary }}</p>
          </div>
          <ul class="chip-list">
            <li v-for="detail in offering.details" :key="detail">{{ detail }}</li>
          </ul>
          <div class="extended-offering-card__actions">
            <a class="button button--small" :href="offering.emailHref">Email details</a>
            <a class="text-link" href="tel:+447502500989">Call +44 75 0250 0989</a>
          </div>
        </article>
      </div>
    </section>

    <section class="section service-availability" aria-label="Availability">
      <figure class="service-availability__visual">
        <img src="/images/kristina/online-reflective-room.jpeg" alt="Kristina Culka seated in a calm private room for reflective coaching work" />
        <figcaption>Available in London and online.</figcaption>
      </figure>
    </section>
  </main>
</template>
