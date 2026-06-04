<script setup lang="ts">
import { services } from '~/data/services'

const approachPillars = [
  {
    title: 'Work',
    copy:
      'I do not take the position of an expert in someone else\'s life, and I do not offer ready-made answers or decisions. My role is to stay close in the places where clarity, honesty, and the capacity to face reality are needed.',
  },
  {
    title: 'People',
    copy:
      'I work with both men and women, understanding that each person has their own path toward inner clarity and stability. A separate part of my practice is leadership work with teenagers in London, where I see confidence, relationships, and quality of life change in real time.',
  },
  {
    title: 'Ethics',
    copy:
      'I do not lean on formal status or accreditation. Personal responsibility, professional ethics, and respect for people\'s destinies matter more to me. My work is built on honesty, depth, and attention to the client\'s reality.',
  },
  {
    title: 'Path',
    copy:
      'My introduction to systemic constellations happened more than 13 years ago through personal experience and questions that could not be answered superficially. This path formed not from curiosity about a method, but from the need to understand deeply how a person\'s inner processes and life are arranged.',
  },
]

const methodCards = [
  {
    title: 'What is systemic work?',
    copy:
      'Family and systemic constellations help reveal hidden connections and conflicts that shape decisions, relationships, money, and life patterns. This is not magic and not therapy. It is work with reality: with what already exists in the system, even when it is not directly conscious.',
  },
  {
    title: 'How does it work?',
    copy:
      'The work makes it possible to see the structure of a situation: sources of tension, loss of energy, and systemic distortions that limit movement forward. It is not about fixing a person, but about clarification and restoring inner order.',
  },
  {
    title: 'My approach',
    copy:
      'I work carefully, deeply, and confidentially. There is no rescuing, pressure, or attempt to decide for the client. My task is to create a space where precise solutions can appear and be applied in real life.',
  },
]

const reasons = [
  'This is a deep and confidential private practice, not a high-volume format.',
  'The work is especially relevant during growth, scaling, and transitions, when familiar solutions stop working.',
  'I work with entrepreneurs and leaders who carry a high level of responsibility.',
  'Inner shifts here are directly reflected in financial decisions, income, and strategy.',
  'The focus is the personal sphere, where clarity, inner support, and stability are formed.',
]

const audienceGroups = [
  {
    title: 'Who this work is for',
    items: ['Entrepreneurs and business owners', 'Leaders and top managers', 'People with a high level of responsibility and inner load'],
  },
  {
    title: 'When people come',
    items: ['Life and professional transitions', 'When familiar decisions stop working', 'A change of role or level of responsibility', 'Growth and scaling'],
  },
  {
    title: 'What it affects',
    items: ['Financial development and level of income', 'Quality of management decisions', 'Stability and long-term strategy'],
  },
]

const shifts = [
  'Clarity of thinking and decisions',
  'Inner stability',
  'Relationship with money and scale',
  'Capacity to take and hold responsibility',
]

const testimonials = [
  {
    quote: 'I felt peace, clarity, and belonging.',
    text:
      'This work helped me feel love toward people and toward myself. I gained inner peace, clear direction, and a deep understanding of acceptance. This state continues to support me and opens the possibility of sharing love with others.',
  },
  {
    quote: 'This session changed my life far beyond words.',
    text:
      'Kristina\'s family constellation session helped me gently heal deep ancestral wounds and release long-standing unhealthy patterns. I experienced a profound inner shift, greater clarity, and renewed hope. The healing from this work continues to support me, allowing positive change not only in my life, but also for future generations.',
  },
  {
    quote: 'It was a strange, deep, and very important inner state.',
    text:
      'After the session I was in an unusual, very deep state. The process was powerful and transforming, with a sense of inner movement and realizations that continue to unfold over time.',
  },
  {
    quote: 'After the session, everything came together in the best possible way.',
    text:
      'Working with Kristina gave me surprisingly precise understanding of my state. After the session, my test results normalized and the following processes unfolded as favorably as possible. I feel well now and gratefully note her professionalism and support.',
  },
  {
    quote: 'She constantly reminds me of my worth and brings my mind to peace.',
    text:
      'Kristina\'s guidance has helped me reconnect with my self-worth and feel emotionally supported. Through our work, I learned to set healthy boundaries, release unnecessary responsibility for others, and find inner calm. My mind feels clearer, lighter, and more at ease.',
  },
  {
    quote: 'What used to seem impossible became reality.',
    text:
      'After working with Kristina, I managed to close more than 40% of a major debt. Banks offered favorable terms, and new clients and projects arrived. Money flows aligned in the most favorable way. The result exceeded all expectations.',
  },
  {
    quote: 'I did not expect this effect.',
    text:
      'I was skeptical about this kind of help, but communicating with Kristina turned out to be easy, interesting, and inspiring. After the meeting I had more energy and determination to take a step forward. I look forward to continuing the work and recommend it to those who are in a difficult inner state.',
  },
  {
    quote: 'It was incredible and very precise.',
    text:
      'After the session I was in a strong emotional state: tears, goosebumps, and the full feeling that something very important had been touched. I was amazed by how precisely states and themes were read, including things only I knew. This work helped me understand a great deal and put things in their place.',
  },
]

const socialImages = [
  '/images/tild6466-6339-4638-a265-353239333034-noroot.png',
  '/images/tild6466-3862-4431-b932-356264333062-Group_65.png',
  '/images/tild3831-3130-4963-a336-613462306338-noroot.png',
  '/images/tild3566-3862-4538-b636-396363663864-photo_57848855458623.jpg',
]
</script>

<template>
  <main>
    <section class="hero section">
      <div class="hero__content">
        <p class="hero__kicker">Private coaching and systemic work</p>
        <h1>Family constellations, NLP and mindfulness coaching</h1>
        <p class="hero__statement">Private 1:1 sessions with Kristina Chulka for clarity, confidence, calm focus and life transitions.</p>
        <div class="hero__actions">
          <NuxtLink class="button" to="/booking">Book initial consultation · £90</NuxtLink>
          <NuxtLink class="text-link" to="/services">View all services</NuxtLink>
        </div>
        <p class="hero__copy">
          Choose from family constellations, NLP coaching, or mindfulness coaching. Start with a 60-minute initial consultation to clarify what you need.
        </p>
        <div class="hero__offers" aria-label="Main offerings">
          <NuxtLink v-for="service in services" :key="service.slug" :to="`/services/${service.slug}`">
            {{ service.shortTitle }}
          </NuxtLink>
        </div>
      </div>
      <div class="hero__image">
        <img src="/images/tild6135-3161-4062-b534-616330336562-photo_59272160547676.jpg" alt="Kristina Chulka in a library" />
        <div class="hero__note">
          <span>Initial consultation</span>
          <strong>£90</strong>
          <p>60 minutes to clarify the request and choose the right format.</p>
        </div>
      </div>
    </section>

    <section class="section foundation" id="approach">
      <div class="section-heading">
        <p class="eyebrow">What I rely on when working with people</p>
        <h2>Path and Inner Bearings</h2>
      </div>
      <div class="foundation__layout">
        <img src="/images/tild3233-3233-4563-a130-323032383062-noroot.png" alt="Kristina Chulka standing outside The Law Society in London" />
        <div class="foundation__items">
          <article v-for="pillar in approachPillars" :key="pillar.title" class="text-block">
            <h3>{{ pillar.title }}</h3>
            <p>{{ pillar.copy }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section method">
      <p class="asterisk">*</p>
      <div class="method__grid">
        <article v-for="card in methodCards" :key="card.title" class="text-block text-block--large">
          <h3>{{ card.title }}</h3>
          <p>{{ card.copy }}</p>
        </article>
      </div>
      <h2>Approach and Method</h2>
    </section>

    <section class="section service-map" aria-labelledby="service-map-title">
      <div class="section-heading">
        <p class="eyebrow">Ways of working</p>
        <h2 id="service-map-title">Three Directions, One Practice</h2>
      </div>
      <div class="service-map__grid">
        <article v-for="service in services" :key="service.slug" class="service-family">
          <span>{{ service.eyebrow }}</span>
          <h3>{{ service.title }}</h3>
          <p>{{ service.summary }}</p>
          <ul>
            <li v-for="area in service.idealFor" :key="area">{{ area }}</li>
          </ul>
          <NuxtLink class="text-link" :to="`/services/${service.slug}`">Explore {{ service.shortTitle }}</NuxtLink>
        </article>
      </div>
    </section>

    <section class="presence">
      <div class="presence__image">
        <img src="/images/tild6135-3161-4062-b534-616330336562-photo_59272160547676.jpg" alt="Kristina Chulka in a library" />
      </div>
      <div class="presence__content">
        <p class="asterisk">*</p>
        <h2>Here, the method is not the main thing. The quality of presence is.</h2>
        <div class="reason-list">
          <h3>Why people choose me</h3>
          <p v-for="reason in reasons" :key="reason">{{ reason }}</p>
        </div>
      </div>
    </section>

    <section class="section audience" id="fit">
      <div class="section-heading section-heading--split">
        <div>
          <p class="asterisk">*</p>
          <h2>Who This Work Is For</h2>
        </div>
        <div class="not-fit">
          <h3>Who this work is not for</h3>
          <p>It is not for those looking for quick fixes or wanting to shift responsibility. The work is possible only with involvement and a mature client position.</p>
        </div>
      </div>
      <div class="audience__grid">
        <article v-for="group in audienceGroups" :key="group.title" class="list-panel">
          <h3>{{ group.title }}</h3>
          <ul>
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
      <NuxtLink class="button" to="/booking">Book</NuxtLink>
    </section>

    <section class="section shifts">
      <div class="shifts__intro">
        <p class="asterisk">*</p>
        <p>
          The work does not lead to correction, but to inner shifts that gradually appear in external life.
        </p>
        <span>In the process of work, what changes is:</span>
      </div>
      <div class="shifts__grid">
        <article v-for="(shift, index) in shifts" :key="shift">
          <span>{{ String(index + 1).padStart(3, '0') }}.</span>
          <p>{{ shift }}</p>
        </article>
      </div>
      <h2>
        This is not about external strategies,<br />
        but about the state of the person<br />
        standing behind them.
      </h2>
    </section>

    <section class="section testimonials" id="stories">
      <div class="section-heading">
        <p class="asterisk">*</p>
        <h2>Reviews and Living Stories</h2>
      </div>
      <div class="testimonial-track">
        <article v-for="story in testimonials" :key="story.quote" class="testimonial">
          <h3>"{{ story.quote }}"</h3>
          <p>{{ story.text }}</p>
        </article>
      </div>
    </section>

    <section class="section services" id="services">
      <div class="section-heading">
        <h2>Services</h2>
        <p class="section-intro">
          Each service now has its own page with details, pricing context, and a route into booking.
        </p>
      </div>
      <div class="services__list">
        <article v-for="(service, index) in services" :key="service.title" class="service">
          <span>{{ String(index + 1).padStart(3, '0') }}</span>
          <div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.intro }}</p>
            <p class="service__meta">{{ service.duration }} · {{ service.price }}</p>
            <NuxtLink class="button button--small" :to="`/services/${service.slug}`">View service</NuxtLink>
          </div>
        </article>
      </div>
      <NuxtLink class="button" to="/services">All services</NuxtLink>
    </section>

    <section class="section social">
      <div class="social__copy">
        <p class="asterisk">*</p>
        <p>
          Part of my life and professional path is connected with projects that do not have a commercial goal.
        </p>
        <p>
          I participate in charitable and social initiatives in London, including leadership programs for teenagers. It is important to me to work with the future: with the formation of confidence, inner support, and the ability to build healthy relationships with oneself and the world.
        </p>
        <p>
          I see this not as a separate activity, but as a natural continuation of the responsibility and worldview on which my work with people is built.
        </p>
      </div>
      <div class="social__title">
        <h2>Social Projects and Charity</h2>
      </div>
      <div class="social__images">
        <img v-for="image in socialImages" :key="image" :src="image" alt="Social and charity project photo" />
      </div>
    </section>

    <section class="contact" id="contact">
      <div class="contact__form">
        <h2>Questions?</h2>
        <p>Fill in the form and I will contact you shortly.</p>
        <form action="mailto:Kristina.culka@gmail.com" method="post" enctype="text/plain">
          <label>
            <span>Email</span>
            <input type="email" name="email" required />
          </label>
          <label>
            <span>Name</span>
            <input type="text" name="name" required />
          </label>
          <label>
            <span>Preferred contact method</span>
            <select name="contact-method">
              <option>WhatsApp</option>
              <option>Telegram</option>
              <option>Phone</option>
              <option>Email</option>
            </select>
          </label>
          <label>
            <span>Your question</span>
            <textarea name="message" rows="5"></textarea>
          </label>
          <button class="button" type="submit">Send</button>
          <NuxtLink class="text-link" to="/booking">Or book an initial consultation</NuxtLink>
        </form>
      </div>
      <footer class="footer">
        <p class="asterisk">*</p>
        <h2>Contacts</h2>
        <p><strong>Email:</strong> <a href="mailto:Kristina.culka@gmail.com">Kristina.culka@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+447502500989">+44 75 0250 0989</a></p>
        <NuxtLink class="button button--light" to="/booking">Book a Consultation</NuxtLink>
      </footer>
    </section>
  </main>
</template>
