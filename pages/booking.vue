<script setup lang="ts">
import { bookingTimes, initialConsultation, services } from '~/data/services'

const route = useRoute()
const selectedService = computed(() => String(route.query.service ?? 'family-constellations'))

useHead({
  title: 'Booking | Kristina Chulka',
  meta: [
    {
      name: 'description',
      content:
        'Book an initial consultation with Kristina Chulka for family constellations, NLP coaching, or mindfulness coaching.',
    },
  ],
})
</script>

<template>
  <main>
    <section class="booking-hero">
      <div class="booking-hero__copy">
        <p class="eyebrow">Booking</p>
        <h1>Book an initial consultation</h1>
        <p>
          Choose a service direction, preferred date, and time. The appointment is confirmed personally so the format fits the request.
        </p>
      </div>
      <div class="booking-hero__panel">
        <span>{{ initialConsultation.title }}</span>
        <strong>{{ initialConsultation.price }}</strong>
        <p>{{ initialConsultation.duration }}</p>
        <p>{{ initialConsultation.note }}</p>
      </div>
    </section>

    <section class="booking-steps">
      <article>
        <span>001.</span>
        <h2>Choose</h2>
        <p>Select the service direction that feels closest to the request.</p>
      </article>
      <article>
        <span>002.</span>
        <h2>Suggest</h2>
        <p>Share a preferred date and one of the available time windows.</p>
      </article>
      <article>
        <span>003.</span>
        <h2>Confirm</h2>
        <p>Kristina will confirm the appointment personally by email or message.</p>
      </article>
    </section>

    <section class="booking-layout">
      <aside class="booking-card booking-card--image">
        <img src="/images/tild3233-3233-4563-a130-323032383062-noroot.png" alt="Kristina Chulka outside The Law Society in London" />
        <div>
          <span>Available times</span>
          <p>{{ bookingTimes.join(' / ') }}</p>
        </div>
      </aside>

      <form class="booking-form" action="mailto:Kristina.culka@gmail.com" method="post" enctype="text/plain">
        <label>
          <span>Service</span>
          <select name="service">
            <option
              v-for="service in services"
              :key="service.slug"
              :value="service.title"
              :selected="service.slug === selectedService"
            >
              {{ service.title }}
            </option>
          </select>
        </label>

        <div class="form-grid">
          <label>
            <span>Preferred date</span>
            <input type="date" name="preferred-date" required />
          </label>
          <label>
            <span>Preferred time</span>
            <select name="preferred-time" required>
              <option v-for="time in bookingTimes" :key="time">{{ time }}</option>
            </select>
          </label>
        </div>

        <div class="form-grid">
          <label>
            <span>Name</span>
            <input type="text" name="name" required />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" required />
          </label>
        </div>

        <label>
          <span>Phone or Telegram</span>
          <input type="text" name="contact" />
        </label>

        <label>
          <span>What would you like to explore?</span>
          <textarea name="request" rows="6"></textarea>
        </label>

        <button class="button" type="submit">Request booking</button>
      </form>
    </section>
  </main>
</template>
