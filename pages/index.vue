<script setup lang="ts">
import { services } from '~/data/services'

const activeHeroServiceSlug = ref(services[0]?.slug ?? '')
const activeHeroService = computed(() => services.find((service) => service.slug === activeHeroServiceSlug.value) ?? services[0])

const setHeroService = (slug: string) => {
  activeHeroServiceSlug.value = slug
}

const setHeroServiceByIndex = (index: number) => {
  const nextService = services[index]

  if (nextService) {
    activeHeroServiceSlug.value = nextService.slug
  }
}

const handleHeroServiceKeydown = (event: KeyboardEvent, index: number) => {
  const keys = ['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp', 'Home', 'End']

  if (!keys.includes(event.key)) {
    return
  }

  event.preventDefault()

  const lastIndex = services.length - 1
  const nextIndexMap: Record<string, number> = {
    ArrowRight: index === lastIndex ? 0 : index + 1,
    ArrowDown: index === lastIndex ? 0 : index + 1,
    ArrowLeft: index === 0 ? lastIndex : index - 1,
    ArrowUp: index === 0 ? lastIndex : index - 1,
    Home: 0,
    End: lastIndex,
  }
  const nextIndex = nextIndexMap[event.key]

  setHeroServiceByIndex(nextIndex)

  const tabList = event.currentTarget instanceof HTMLElement ? event.currentTarget.parentElement : null
  const nextTab = tabList?.children[nextIndex]

  if (nextTab instanceof HTMLElement) {
    nextTab.focus()
  }
}

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

const reasons = [
  'Private, confidential, and low-volume',
  'Useful during growth, pressure, and transitions',
  'Strong fit for leaders and entrepreneurs',
  'Connects inner clarity with decisions and scale',
  'Focused on stability, support, and responsibility',
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
  hero: '/images/generated/kristina-hero-consultation.png',
  approach: '/images/tild3233-3233-4563-a130-323032383062-noroot.png',
  method: '/images/generated/kristina-family-constellations.png',
  presence: '/images/tild6135-3161-4062-b534-616330336562-photo_59272160547676.jpg',
  audience: '/images/generated/kristina-nlp-coaching.png',
  shifts: '/images/generated/kristina-outcomes-clarity.png',
}

const socialImages = [
  '/images/generated/social-teen-leadership.png',
  '/images/tild6466-6339-4638-a265-353239333034-noroot.png',
  '/images/tild6466-3862-4431-b932-356264333062-Group_65.png',
  '/images/tild3566-3862-4538-b636-396363663864-photo_57848855458623.jpg',
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
          <span>Private 1:1</span>
          <span>Three service paths</span>
        </div>
        <div class="hero__actions">
          <NuxtLink class="button" to="/booking">Book initial consultation &middot; &pound;50</NuxtLink>
          <NuxtLink class="text-link" to="/services">View all services</NuxtLink>
        </div>
      </div>
      <div class="hero__image">
        <img :src="sectionImages.hero" alt="Kristina Culka providing a private coaching consultation in a calm London practice room" />
        <div class="hero__note">
          <span>Initial consultation</span>
          <strong>£50</strong>
          <p>30 minutes to clarify the request and choose the right format.</p>
        </div>
      </div>
    </section>

    <section class="service-compass section" aria-labelledby="service-compass-title">
      <div class="service-compass__intro">
        <p class="eyebrow">Service compass</p>
        <h2 id="service-compass-title">Choose the path closest to what you need today</h2>
        <p>
          If you already know the format, start there. If not, the initial consultation is a simple way to choose together.
        </p>
      </div>
      <div class="service-compass__layout">
        <div class="service-compass__tabs" role="tablist" aria-label="Service options">
          <button
            v-for="(service, index) in services"
            :id="`hero-service-tab-${service.slug}`"
            :key="service.slug"
            class="service-compass__tab"
            :class="{ 'is-active': activeHeroService?.slug === service.slug }"
            type="button"
            role="tab"
            :aria-controls="`hero-service-panel-${service.slug}`"
            :aria-selected="activeHeroService?.slug === service.slug"
            @click="setHeroService(service.slug)"
            @focus="setHeroService(service.slug)"
            @mouseenter="setHeroService(service.slug)"
            @keydown="handleHeroServiceKeydown($event, index)"
          >
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <strong>{{ service.shortTitle }}</strong>
            <small>{{ service.duration }}</small>
          </button>
        </div>
        <article
          v-if="activeHeroService"
          :id="`hero-service-panel-${activeHeroService.slug}`"
          class="service-compass__panel"
          role="tabpanel"
          :aria-labelledby="`hero-service-tab-${activeHeroService.slug}`"
        >
          <div class="service-compass__panel-copy">
            <span>{{ activeHeroService.eyebrow }}</span>
            <h3>{{ activeHeroService.title }}</h3>
            <p>{{ activeHeroService.promise }}</p>
          </div>
          <div class="service-compass__details" aria-label="Service focus">
            <span v-for="detail in activeHeroService.details" :key="detail">{{ detail }}</span>
          </div>
          <div class="service-compass__meta">
            <strong>{{ activeHeroService.price }}</strong>
            <span>{{ activeHeroService.duration }}</span>
          </div>
          <div class="service-compass__actions">
            <NuxtLink class="text-link" :to="`/services/${activeHeroService.slug}`">Explore service</NuxtLink>
            <NuxtLink class="button button--small" :to="`/booking?service=${activeHeroService.slug}`">Book this path</NuxtLink>
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
        <img :src="sectionImages.approach" alt="Kristina Culka outside The Law Society in London" />
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
      <div class="method__visual">
        <img :src="sectionImages.method" alt="A systemic constellation mapping session with wooden figures" />
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
            <li v-for="detail in service.details" :key="detail">{{ detail }}</li>
          </ul>
          <NuxtLink class="text-link" :to="`/services/${service.slug}`">Explore {{ service.shortTitle }}</NuxtLink>
        </article>
      </div>
    </section>

    <section class="presence">
      <div class="presence__image">
        <img :src="sectionImages.presence" alt="Kristina Culka in a quiet library setting" />
      </div>
      <div class="presence__content">
        <p class="asterisk">*</p>
        <h2>Presence matters more than method.</h2>
        <div class="reason-list">
          <h3>Why people choose me</h3>
          <ul>
            <li v-for="reason in reasons" :key="reason">{{ reason }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section audience" id="fit">
      <div class="section-heading section-heading--split">
        <div>
          <p class="asterisk">*</p>
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
        <img :src="sectionImages.audience" alt="A focused private coaching conversation for clarity and confidence" />
      </div>
      <div class="section-actions">
        <NuxtLink class="button" to="/booking">Book consultation</NuxtLink>
      </div>
    </section>

    <section class="section shifts">
      <div class="shifts__intro">
        <p class="asterisk">*</p>
        <p>
          The goal is not correction. It is a calmer inner position that changes real choices.
        </p>
        <span>What tends to shift:</span>
      </div>
      <div class="shifts__grid">
        <article v-for="(shift, index) in shifts" :key="shift">
          <span>{{ String(index + 1).padStart(3, '0') }}.</span>
          <p>{{ shift }}</p>
        </article>
      </div>
      <div class="shifts__visual">
        <img :src="sectionImages.shifts" alt="Kristina Culka and a client in a calm reflective moment after a session" />
      </div>
      <h2>
        The work starts inside.<br />
        The effect shows up in life.
      </h2>
    </section>

    <section class="section testimonials" id="stories">
      <div class="section-heading">
        <p class="asterisk">*</p>
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
        <article v-for="(service, index) in services" :key="service.title" class="service">
          <span>{{ String(index + 1).padStart(3, '0') }}</span>
          <div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.promise }}</p>
            <p class="service__meta">{{ service.duration }} · {{ service.price }}</p>
            <NuxtLink class="button button--small" :to="`/services/${service.slug}`">View service</NuxtLink>
          </div>
        </article>
      </div>
      <div class="section-actions">
        <NuxtLink class="button" to="/services">All services</NuxtLink>
      </div>
    </section>

    <section class="section social">
      <div class="social__copy">
        <p class="asterisk">*</p>
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
      <aside class="contact-panel">
        <p class="asterisk">*</p>
        <h2>Contacts</h2>
        <p><strong>Email:</strong> <a href="mailto:Kristina.culka@gmail.com">Kristina.culka@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+447502500989">+44 75 0250 0989</a></p>
        <NuxtLink class="button button--light" to="/booking">Book a consultation</NuxtLink>
      </aside>
    </section>
  </main>
</template>
