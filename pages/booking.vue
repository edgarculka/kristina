<script setup lang="ts">
import { bookingTimes, initialConsultation, services } from '~/data/services'

const route = useRoute()
const router = useRouter()

const bookingOptions = computed(() => [
  {
    slug: initialConsultation.slug,
    title: initialConsultation.title,
    shortTitle: initialConsultation.shortTitle,
    price: initialConsultation.price,
    duration: initialConsultation.duration,
    note: initialConsultation.note,
    type: 'Consultation',
  },
  ...services.map((service) => ({
    slug: service.slug,
    title: service.title,
    shortTitle: service.shortTitle,
    price: service.price,
    duration: service.duration,
    note: service.promise,
    type: 'Full service',
  })),
])

const getBookingSlug = (service: unknown) => {
  const slug = String(service ?? initialConsultation.slug)

  return bookingOptions.value.some((option) => option.slug === slug) ? slug : initialConsultation.slug
}

const selectedBookingSlug = ref(getBookingSlug(route.query.service))

watch(
  () => route.query.service,
  (service) => {
    selectedBookingSlug.value = getBookingSlug(service)
  },
)

const selectedBooking = computed(
  () => bookingOptions.value.find((option) => option.slug === selectedBookingSlug.value) ?? bookingOptions.value[0],
)

const currentStep = ref(0)
const form = reactive({
  preferredDate: '',
  preferredTime: bookingTimes[0] ?? '',
  name: '',
  email: '',
  phone: '',
  request: '',
})

const today = new Date()
today.setHours(0, 0, 0, 0)

const calendarMonth = ref(new Date(today.getFullYear(), today.getMonth(), 1))

const wizardSteps = [
  'Service',
  'Dates',
  'Slot',
  'Guest',
  'Phone, email',
  'Notes',
  'Review',
]

const serviceWasPreselected = computed(() =>
  bookingOptions.value.some((option) => option.slug === String(route.query.service ?? '')),
)

const selectedStepLabel = computed(() => wizardSteps[currentStep.value])
const progressPercent = computed(() => `${((currentStep.value + 1) / wizardSteps.length) * 100}%`)
const nextActionLabel = computed(() => {
  if (currentStep.value === 0) {
    return 'Choose dates'
  }

  if (currentStep.value === wizardSteps.length - 2) {
    return 'Review request'
  }

  return 'Continue'
})

const selectedDateLabel = computed(() => form.preferredDate || 'Add date')
const selectedTimeLabel = computed(() => form.preferredTime || 'Add time')
const selectedGuestLabel = computed(() => form.name.trim() || 'Add name')
const requestPreview = computed(() => form.request.trim() || 'Kristina will confirm details personally after you send the request.')

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const formatDateValue = (date: Date) => {
  const year = date.getFullYear()
  const month = `${date.getMonth() + 1}`.padStart(2, '0')
  const day = `${date.getDate()}`.padStart(2, '0')

  return `${year}-${month}-${day}`
}

const calendarMonthLabel = computed(() =>
  calendarMonth.value.toLocaleDateString('en-GB', {
    month: 'long',
    year: 'numeric',
  }),
)

const calendarDays = computed(() => {
  const monthStart = calendarMonth.value
  const firstDayOffset = (monthStart.getDay() + 6) % 7
  const daysInMonth = new Date(monthStart.getFullYear(), monthStart.getMonth() + 1, 0).getDate()
  const blanks = Array.from({ length: firstDayOffset }, (_, index) => ({
    key: `blank-${index}`,
    label: '',
    value: '',
    isDisabled: true,
    isSelected: false,
    isToday: false,
  }))
  const days = Array.from({ length: daysInMonth }, (_, index) => {
    const date = new Date(monthStart.getFullYear(), monthStart.getMonth(), index + 1)
    const value = formatDateValue(date)
    const isDisabled = date < today

    return {
      key: value,
      label: `${index + 1}`,
      value,
      isDisabled,
      isSelected: form.preferredDate === value,
      isToday: value === formatDateValue(today),
    }
  })

  return [...blanks, ...days]
})

const goToPreviousMonth = () => {
  calendarMonth.value = new Date(calendarMonth.value.getFullYear(), calendarMonth.value.getMonth() - 1, 1)
}

const goToNextMonth = () => {
  calendarMonth.value = new Date(calendarMonth.value.getFullYear(), calendarMonth.value.getMonth() + 1, 1)
}

const selectDate = (date: string) => {
  form.preferredDate = date
}

const selectTime = (time: string) => {
  form.preferredTime = time
}

const currentStepIsComplete = computed(() => {
  if (currentStep.value === 0) {
    return Boolean(selectedBookingSlug.value)
  }

  if (currentStep.value === 1) {
    return Boolean(form.preferredDate)
  }

  if (currentStep.value === 2) {
    return Boolean(form.preferredTime)
  }

  if (currentStep.value === 3) {
    return form.name.trim().length > 1
  }

  if (currentStep.value === 4) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) && form.phone.trim().length > 5
  }

  return true
})

const goToNextStep = () => {
  if (currentStepIsComplete.value && currentStep.value < wizardSteps.length - 1) {
    currentStep.value += 1
  }
}

const goToPreviousStep = () => {
  if (currentStep.value > 0) {
    currentStep.value -= 1
  }
}

const closeBooking = () => {
  if (import.meta.client && window.history.length > 1) {
    router.back()
    return
  }

  navigateTo('/services')
}

useHead({
  title: 'Booking | Kristina Culka',
  meta: [
    {
      name: 'description',
      content:
        'Book an initial consultation or a full private service with Kristina Culka.',
    },
  ],
})
</script>

<template>
  <main class="booking-wizard-page">
    <section class="booking-wizard-shell" aria-label="Booking wizard">
      <form class="booking-form" action="mailto:Kristina.culka@gmail.com" method="post" enctype="text/plain">
        <div class="booking-wizard__topbar">
          <button class="booking-wizard__close" type="button" aria-label="Close booking form" @click="closeBooking">
            Close
          </button>
          <NuxtLink class="booking-wizard__brand" to="/">Kristina Culka</NuxtLink>
          <a class="booking-wizard__help" href="mailto:Kristina.culka@gmail.com">Help</a>
        </div>

        <div class="booking-wizard__layout">
          <div class="booking-wizard__main">
            <div class="booking-wizard__header">
              <div>
                <span>Step {{ currentStep + 1 }} of {{ wizardSteps.length }}</span>
                <strong>{{ selectedStepLabel }}</strong>
              </div>
              <p>{{ Math.round(((currentStep + 1) / wizardSteps.length) * 100) }}% complete</p>
            </div>

            <div class="booking-wizard__progress" aria-hidden="true">
              <span :style="{ width: progressPercent }"></span>
            </div>

            <ol class="booking-wizard__steps" aria-label="Booking progress">
              <li
                v-for="(step, index) in wizardSteps"
                :key="step"
                :class="{ 'is-active': index === currentStep, 'is-complete': index < currentStep }"
              >
                <span>{{ index + 1 }}</span>
                {{ step }}
              </li>
            </ol>

            <input type="hidden" name="booking" :value="selectedBooking.slug" />
            <input type="hidden" name="booking-title" :value="selectedBooking.title" />
            <input type="hidden" name="booking-price" :value="selectedBooking.price" />
            <input type="hidden" name="booking-duration" :value="selectedBooking.duration" />
            <input type="hidden" name="preferred-date" :value="form.preferredDate" />
            <input type="hidden" name="preferred-time" :value="form.preferredTime" />

            <section v-show="currentStep === 0" class="booking-question" aria-live="polite">
              <p class="eyebrow">Choose your session</p>
              <h2>Start with the support that fits best.</h2>
              <p v-if="serviceWasPreselected" class="booking-question__hint">
                This was pre-selected from the service page. You can keep it or choose another option.
              </p>
              <div class="booking-service-options">
                <label
                  v-for="option in bookingOptions"
                  :key="option.slug"
                  :class="{ 'is-selected': selectedBookingSlug === option.slug }"
                >
                  <input v-model="selectedBookingSlug" type="radio" :value="option.slug" />
                  <span>{{ option.type }}</span>
                  <strong>{{ option.title }}</strong>
                  <small>{{ option.price }} / {{ option.duration }}</small>
                </label>
              </div>
            </section>

            <section v-show="currentStep === 1" class="booking-question">
              <div class="booking-inline-control">
                <span>When would you like to meet?</span>
                <small>Pick the first date that works for you. Kristina can confirm or suggest a close alternative.</small>
                <div class="booking-calendar" aria-label="Preferred date calendar">
                  <div class="booking-calendar__header">
                    <button type="button" aria-label="Previous month" @click="goToPreviousMonth">
                      ‹
                    </button>
                    <strong>{{ calendarMonthLabel }}</strong>
                    <button type="button" aria-label="Next month" @click="goToNextMonth">
                      ›
                    </button>
                  </div>
                  <div class="booking-calendar__weekdays" aria-hidden="true">
                    <span v-for="day in weekDays" :key="day">{{ day }}</span>
                  </div>
                  <div class="booking-calendar__grid">
                    <button
                      v-for="day in calendarDays"
                      :key="day.key"
                      type="button"
                      :disabled="day.isDisabled"
                      :class="{ 'is-selected': day.isSelected, 'is-today': day.isToday, 'is-empty': !day.value }"
                      :aria-pressed="day.isSelected"
                      @click="day.value && selectDate(day.value)"
                    >
                      {{ day.label }}
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section v-show="currentStep === 2" class="booking-question">
              <div class="booking-inline-control">
                <span>Choose a preferred time.</span>
                <small>Available slots are shown in London time.</small>
                <div class="booking-time-grid" role="radiogroup" aria-label="Preferred time">
                  <button
                    v-for="time in bookingTimes"
                    :key="time"
                    type="button"
                    :class="{ 'is-selected': form.preferredTime === time }"
                    :aria-pressed="form.preferredTime === time"
                    @click="selectTime(time)"
                  >
                    {{ time }}
                  </button>
                </div>
              </div>
            </section>

            <section v-show="currentStep === 3" class="booking-question">
              <label>
                <span>Who is the session for?</span>
                <small>Use the name Kristina should address in her reply.</small>
                <input v-model="form.name" type="text" name="name" autocomplete="name" placeholder="Full name" />
              </label>
            </section>

            <section v-show="currentStep === 4" class="booking-question">
              <label>
                <span>Where should Kristina reply?</span>
                <small>Your phone and email are only used to arrange this booking.</small>
                <input v-model="form.email" type="email" name="email" autocomplete="email" placeholder="you@example.com" />
              </label>
              <label>
                <span>Phone number</span>
                <small>Use the number Kristina should use if a quick confirmation is needed.</small>
                <input v-model="form.phone" type="tel" name="phone" autocomplete="tel" placeholder="+44 7000 000000" />
              </label>
            </section>

            <section v-show="currentStep === 5" class="booking-question">
              <label>
                <span>What would you like to explore?</span>
                <small>A short note is enough. You can keep it simple.</small>
                <textarea v-model="form.request" name="request" rows="6" placeholder="A few lines about what is bringing you here"></textarea>
              </label>
            </section>

            <section v-show="currentStep === 6" class="booking-question">
              <p class="eyebrow">Review request</p>
              <h2>Send this booking request?</h2>
              <div class="booking-summary" aria-live="polite">
                <span>{{ selectedBooking.type }}</span>
                <strong>{{ selectedBooking.title }}</strong>
                <p>{{ selectedBooking.price }} / {{ selectedBooking.duration }}</p>
                <p>{{ selectedDateLabel }} / {{ selectedTimeLabel }}</p>
                <p>{{ selectedGuestLabel }} / {{ form.email }}</p>
                <p>{{ form.phone }}</p>
                <p>{{ requestPreview }}</p>
              </div>
            </section>
          </div>

          <aside class="booking-reservation" aria-label="Booking summary">
            <figure class="booking-reservation__media">
              <img src="/images/generated/kristina-online-session.png" alt="Kristina Culka providing an online coaching session from a warm private practice room" />
            </figure>
            <div class="booking-reservation__copy">
              <span>{{ selectedBooking.type }}</span>
              <h2>{{ selectedBooking.shortTitle }}</h2>
              <p>{{ selectedBooking.note }}</p>
            </div>
            <dl class="booking-reservation__details">
              <div>
                <dt>Date</dt>
                <dd>{{ selectedDateLabel }}</dd>
              </div>
              <div>
                <dt>Time</dt>
                <dd>{{ selectedTimeLabel }}</dd>
              </div>
              <div>
                <dt>Guest</dt>
                <dd>{{ selectedGuestLabel }}</dd>
              </div>
              <div>
                <dt>Session</dt>
                <dd>{{ selectedBooking.duration }}</dd>
              </div>
            </dl>
            <div class="booking-reservation__price">
              <span>{{ selectedBooking.price }}</span>
              <small>{{ selectedBooking.duration }}</small>
            </div>
          </aside>
        </div>

        <div class="booking-wizard__actions">
          <button class="booking-wizard__back" type="button" :disabled="currentStep === 0" @click="goToPreviousStep">
            Back
          </button>
          <button
            v-if="currentStep < wizardSteps.length - 1"
            class="button"
            type="button"
            :disabled="!currentStepIsComplete"
            @click="goToNextStep"
          >
            {{ nextActionLabel }}
          </button>
          <button v-else class="button" type="submit">Request booking</button>
        </div>
      </form>
    </section>
  </main>
</template>
