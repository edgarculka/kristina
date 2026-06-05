<script setup lang="ts">
import { services } from '~/data/services'

const assetUrl = (path: string) => `${useRuntimeConfig().app.baseURL}${path.replace(/^\//, '')}`

const approachPillars = [
  {
    title: 'Work',
    copy:
      'No ready-made answers. The work stays close to what is real, clear, and usable.',
  },
  {
    title: 'People',
    copy:
      'Private work with adults, plus leadership projects for teenagers in London.',
  },
  {
    title: 'Ethics',
    copy:
      'Honesty, confidentiality, and respect for each person\'s responsibility.',
  },
  {
    title: 'Path',
    copy:
      'More than 13 years of systemic practice, formed through personal experience and study.',
  },
]

const methodCards = [
  {
    title: 'What is systemic work?',
    copy:
      'Hidden patterns behind relationships, money, decisions, and repeated life situations.',
  },
  {
    title: 'How it works',
    copy:
      'The session clarifies the structure of a situation, then restores a calmer inner position.',
  },
  {
    title: 'What it is not',
    copy:
      'No rescuing, pressure, or decisions made for you. The work supports clear choice.',
  },
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
      'A calmer state, clearer direction, and a deeper feeling of acceptance.',
  },
  {
    quote: 'This session changed my life far beyond words.',
    text:
      'A profound inner shift with renewed hope and a sense of release.',
  },
  {
    quote: 'It was a strange, deep, and very important inner state.',
    text:
      'A powerful session with realizations that continued to unfold afterward.',
  },
  {
    quote: 'After the session, everything came together in the best possible way.',
    text:
      'Precise understanding, relief, and a feeling that the next steps aligned.',
  },
  {
    quote: 'She constantly reminds me of my worth and brings my mind to peace.',
    text:
      'More self-worth, healthier boundaries, and a quieter mind.',
  },
  {
    quote: 'What used to seem impossible became reality.',
    text:
      'A real-world financial shift that exceeded expectations.',
  },
  {
    quote: 'I did not expect this effect.',
    text:
      'More energy, determination, and readiness to take the next step.',
  },
  {
    quote: 'It was incredible and very precise.',
    text:
      'A precise session that helped put important things in their place.',
  },
]

const featuredTestimonials = testimonials.slice(0, 4)

const sectionImages = {
  hero: '/images/kristina/hero-outdoor-portrait.jpeg',
  approach: '/images/kristina/approach-calm-consultation.jpeg',
  method: '/images/kristina/family-constellations-stage.jpeg',
  audience: '/images/kristina/nlp-confidence-lecture.jpeg',
  shifts: '/images/kristina/outcomes-outdoor-portrait.jpeg',
}

const socialImages = [
  {
    src: '/images/kristina/charity-daily-reflection-workshop.jpeg',
    alt: 'Kristina Culka leading a daily reflection workshop for a charity leadership programme',
  },
  {
    src: '/images/kristina/charity-group-selfie.jpeg',
    alt: 'Kristina Culka with young people and programme leaders at a community leadership event',
  },
  {
    src: '/images/kristina/charity-award-projects.jpeg',
    alt: 'Kristina Culka receiving recognition at a charity project event',
  },
  {
    src: '/images/kristina/charity-law-library-session.jpeg',
    alt: 'Kristina Culka presenting in a law library for a charity leadership development programme',
  },
  {
    src: '/images/kristina/charity-foundation-event-group.jpeg',
    alt: 'Sharifa Ibrahim Foundation charity event group photo with Kristina Culka',
  },
  {
    src: '/images/kristina/charity-conference-presentation.jpeg',
    alt: 'Kristina Culka speaking at a conference presentation connected with charity work',
  },
  {
    src: '/images/kristina/charity-oxford-union-podium.jpeg',
    alt: 'Kristina Culka speaking at the Oxford Union podium during a charity-related event',
  },
  {
    src: '/images/kristina/charity-certified-life-coach-stage.jpeg',
    alt: 'Kristina Culka speaking on stage as a certified life coach and systemic constellations facilitator',
  },
  {
    src: '/images/kristina/charity-microphone-training.jpeg',
    alt: 'Kristina Culka speaking with a microphone during a charity training session',
  },
  {
    src: '/images/kristina/charity-formal-delegation.jpeg',
    alt: 'Kristina Culka with a formal delegation connected to foundation and community work',
  },
  {
    src: '/images/kristina/charity-foundation-portrait.jpeg',
    alt: 'Kristina Culka with a foundation representative during charity work',
  },
  {
    src: '/images/kristina/charity-certificate-selfie.jpeg',
    alt: 'Kristina Culka with participants holding certificates after a charity programme',
  },
  {
    src: '/images/kristina/charity-partner-portrait.jpeg',
    alt: 'Kristina Culka with a community partner at a charity event',
  },
  {
    src: '/images/kristina/charity-hall-speaking.jpeg',
    alt: 'Kristina Culka speaking to an audience at a community charity event',
  },
  {
    src: '/images/kristina/charity-podium-close.jpeg',
    alt: 'Kristina Culka speaking from a podium during a charity conference',
  },
  {
    src: '/images/kristina/charity-university-islamabad.jpeg',
    alt: 'Kristina Culka at Ibadat International University Islamabad for a youth leadership programme',
  },
  {
    src: '/images/kristina/charity-uk-flag-podium.jpeg',
    alt: 'Kristina Culka speaking at a charity event with a UK flag behind the podium',
  },
]
</script>

<template>
  <main>
    <section class="hero section">
      <div class="hero__content">
        <p class="hero__kicker">Private coaching and systemic work</p>
        <h1>Private coaching for clarity and change</h1>
        <p class="hero__statement">Family constellations, NLP coaching and mindfulness sessions with Kristina Culka.</p>
        <div class="hero__meta" aria-label="Practice details">
          <span>London + online</span>
          <span>1:1 or groups</span>
          <span>Three service paths</span>
        </div>
        <div class="hero__actions">
          <NuxtLink class="button" to="/booking">Book discovery session &middot; &pound;50</NuxtLink>
          <NuxtLink class="text-link" to="/services">View all services</NuxtLink>
        </div>
      </div>
      <div class="hero__image">
        <img :src="assetUrl(sectionImages.hero)" alt="Kristina Culka seated outside in London for a calm professional portrait" />
        <NuxtLink class="hero__note" to="/booking" aria-label="Book a discovery session for £50">
          <span>Discovery session</span>
          <strong>£50</strong>
          <p>30 minutes to map the request, diagnose the starting point, and choose the next step.</p>
          <em>Book discovery</em>
        </NuxtLink>
      </div>
    </section>

    <section class="service-compass section" aria-labelledby="service-compass-title">
      <div class="service-compass__intro">
        <p class="eyebrow">Service compass</p>
        <h2 id="service-compass-title">Choose the path closest to what you need today</h2>
        <p>
          If you already know the format, start there. If not, the discovery session helps map the request before choosing together.
        </p>
      </div>
      <div class="service-compass__layout">
        <article
          v-for="service in services"
          :key="service.slug"
          class="service-compass__panel"
        >
          <div class="service-compass__panel-copy">
            <span>{{ service.eyebrow }}</span>
            <h3>{{ service.title }}</h3>
            <p>{{ service.promise }}</p>
          </div>
          <div class="service-compass__details" aria-label="Service benefits">
            <span v-for="benefit in service.benefits" :key="benefit">{{ benefit }}</span>
          </div>
          <div class="service-compass__meta">
            <strong>{{ service.price }}</strong>
            <span>{{ service.duration }}</span>
          </div>
          <div class="service-compass__actions">
            <NuxtLink class="text-link" :to="`/services/${service.slug}`">Explore service</NuxtLink>
            <NuxtLink class="button button--small" :to="`/booking?service=${service.slug}`">Book this path</NuxtLink>
          </div>
        </article>
      </div>
    </section>

    <section class="section foundation" id="approach">
      <div class="section-heading">
        <p class="eyebrow">Principles</p>
        <h2>How I work</h2>
      </div>
      <div class="foundation__layout">
        <img :src="assetUrl(sectionImages.approach)" alt="Kristina Culka seated in a calm private room for reflective work" />
        <div class="foundation__items">
          <article v-for="pillar in approachPillars" :key="pillar.title" class="text-block">
            <h3>{{ pillar.title }}</h3>
            <p>{{ pillar.copy }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section method">
      <div class="method__visual">
        <img :src="assetUrl(sectionImages.method)" alt="Kristina Culka speaking about family systemic constellations on stage" />
      </div>
      <div class="method__grid">
        <article v-for="card in methodCards" :key="card.title" class="text-block text-block--large">
          <h3>{{ card.title }}</h3>
          <p>{{ card.copy }}</p>
        </article>
      </div>
      <h2>Systemic work, simply</h2>
    </section>

    <section class="section service-map" aria-labelledby="service-map-title">
      <div class="section-heading">
        <p class="eyebrow">Choose by need</p>
        <h2 id="service-map-title">Three clear service paths</h2>
      </div>
      <div class="service-map__grid">
        <article v-for="service in services" :key="service.slug" class="service-family">
          <span>{{ service.eyebrow }}</span>
          <h3>{{ service.title }}</h3>
          <p>{{ service.promise }}</p>
          <ul>
            <li v-for="benefit in service.benefits" :key="benefit">{{ benefit }}</li>
          </ul>
          <NuxtLink class="text-link" :to="`/services/${service.slug}`">Explore {{ service.shortTitle }}</NuxtLink>
        </article>
      </div>
    </section>

    <section class="section audience" id="fit">
      <div class="section-heading section-heading--split">
        <div>
          <h2>Who this work is for</h2>
        </div>
        <div class="not-fit">
          <h3>Who this work is not for</h3>
          <p>Not quick fixes. Not shifting responsibility. The work needs involvement and maturity.</p>
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
      <div class="audience__visual">
        <img :src="assetUrl(sectionImages.audience)" alt="Kristina Culka teaching confidence and clear communication in a lecture room" />
      </div>
      <div class="section-actions">
        <NuxtLink class="button" to="/booking">Book discovery</NuxtLink>
      </div>
    </section>

    <section class="section shifts">
      <div class="shifts__intro">
        <p>
          The goal is not correction. It is a calmer inner position that changes real choices.
        </p>
      </div>
      <div class="shifts__list">
        <h3>What tends to shift</h3>
        <div class="shifts__grid">
          <article v-for="shift in shifts" :key="shift">
            <p>{{ shift }}</p>
          </article>
        </div>
      </div>
      <div class="shifts__visual">
        <img :src="assetUrl(sectionImages.shifts)" alt="Kristina Culka in a calm outdoor portrait after reflective work" />
      </div>
      <h2>
        The work starts inside.<br />
        The effect shows up in life.
      </h2>
    </section>

    <section class="section testimonials" id="stories">
      <div class="section-heading">
        <h2>Client stories</h2>
      </div>
      <div class="testimonial-track">
        <article v-for="story in featuredTestimonials" :key="story.quote" class="testimonial">
          <h3>"{{ story.quote }}"</h3>
          <p>{{ story.text }}</p>
        </article>
      </div>
    </section>

    <section class="section services" id="services">
      <div class="section-heading">
        <h2>Quick service guide</h2>
        <p class="section-intro">
          Scan the format, time, and first step before choosing a page.
        </p>
      </div>
      <div class="services__list">
        <article v-for="service in services" :key="service.title" class="service">
          <div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.promise }}</p>
            <p class="service__meta">{{ service.duration }} · {{ service.price }}</p>
            <NuxtLink class="button button--small" :to="`/services/${service.slug}`">View service</NuxtLink>
          </div>
        </article>
      </div>
    </section>

    <section class="section social">
      <div class="social__copy">
        <p>
          Social and charity projects are part of the same worldview: confidence, inner support, and healthy relationships.
        </p>
        <ul class="chip-list chip-list--light">
          <li>Teen leadership</li>
          <li>London initiatives</li>
          <li>Community support</li>
        </ul>
      </div>
      <div class="social__title">
        <h2>Social projects and charity</h2>
      </div>
      <div class="social__images" aria-label="Charity and social project photo gallery">
        <img v-for="image in socialImages" :key="image.src" :src="assetUrl(image.src)" :alt="image.alt" />
      </div>
    </section>
  </main>
</template>
