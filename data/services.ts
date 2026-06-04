export type ServiceGroup = {
  title: string
  items: string[]
}

export type ServiceItem = {
  slug: string
  eyebrow: string
  title: string
  shortTitle: string
  summary: string
  intro: string
  price: string
  duration: string
  image: string
  imageAlt: string
  promise: string
  idealFor: string[]
  details: string[]
  groups: ServiceGroup[]
  outcomes: string[]
  closing: string
}

export const initialConsultation = {
  title: 'Initial consultation',
  price: '£90',
  duration: '60 minutes',
  note: 'A focused first meeting to clarify the request, choose the right format, and define the next step.',
}

export const bookingTimes = ['10:00', '12:00', '14:00', '16:00', '18:00']

export const services: ServiceItem[] = [
  {
    slug: 'family-constellations',
    eyebrow: 'Main service',
    title: 'Family and Systemic Constellations',
    shortTitle: 'Family Constellations',
    summary:
      'Deep systemic work for family patterns, money scenarios, business pressure, relationships, and recurring life situations that cannot be solved by logic alone.',
    intro:
      'Family constellations remain the central service of this practice. This work helps reveal hidden inner, family, and systemic dynamics that can influence relationships, financial choices, business scale, stability, and the feeling of support.',
    price: 'From £180',
    duration: '90-120 minutes',
    idealFor: [
      'Family and relationship patterns',
      'Money and ancestral scenarios',
      'Entrepreneurs at a decision point',
      'Personal crises and life transitions',
    ],
    groups: [
      {
        title: 'Individual systemic constellations for entrepreneurs',
        items: [
          'reaching a financial ceiling',
          'facing repeated scenarios in business',
          'feeling inner tension despite external success',
          'standing at the point of an important decision or transition',
        ],
      },
      {
        title: 'Money and family-system scenarios',
        items: [
          'loyalty to family stories',
          'fear of success or growth',
          'unconscious prohibitions around income',
          'inner conflicts between safety and scale',
          'restoring the feeling of the right to income and stability',
        ],
      },
      {
        title: 'Personal crises and growth points',
        items: ['pausing safely', 'hearing yourself', 'building inner support', 'finding a clear direction of movement'],
      },
    ],
    outcomes: [
      'clearer view of the hidden structure behind the request',
      'more grounded decisions',
      'less pressure around money, family, or responsibility',
      'a calmer internal position from which to act',
    ],
    closing:
      'A constellation brings clarity, aligns the inner system, and allows decisions to be made from a calm, stable state instead of pressure or fear.',
    image: '/images/tild6135-3161-4062-b534-616330336562-photo_59272160547676.jpg',
    imageAlt: 'Kristina Chulka in a library setting',
    promise: 'A quiet space to see what has been influencing the system underneath the visible problem.',
    details: ['Private 1:1 format', 'Systemic lens', 'Deep request work'],
  },
  {
    slug: 'nlp-coaching',
    eyebrow: 'Coaching',
    title: 'NLP Coaching',
    shortTitle: 'NLP Coaching',
    summary:
      'Neuro linguistic programming tools for confidence, clear thinking, focus, emotional regulation, and releasing limiting beliefs.',
    intro:
      'NLP coaching brings practical structure to the way thoughts, language, emotions, and embodied responses shape daily choices. The work is focused, applied, and oriented toward internal clarity that can be used in real situations.',
    price: 'From £120',
    duration: '75 minutes',
    idealFor: [
      'Public speaking and being seen',
      'Confidence in body and mind',
      'Clear thinking under pressure',
      'Recovering after difficult life situations',
    ],
    groups: [
      {
        title: 'Neuro linguistic programming',
        items: [
          'working with the connection between language, perception, and behaviour',
          'creating new inner responses to familiar situations',
          'building practical tools for self-regulation and choice',
        ],
      },
      {
        title: 'Confidence',
        items: ['public speaking', 'body and mind confidence', 'being seen without losing inner ground'],
      },
      {
        title: 'Clear mind',
        items: ['focus on what matters', 'easing panic attacks and panic responses', 'reducing mental noise'],
      },
      {
        title: 'Unblock limitations',
        items: ['limiting beliefs', 'inner permissions', 'recovering from difficult life situations'],
      },
    ],
    outcomes: [
      'more confidence in communication and presence',
      'better focus on what matters',
      'practical tools for moments of panic or pressure',
      'movement beyond old limiting beliefs',
    ],
    closing:
      'This format supports people who need practical tools for confidence, calm decision-making, and movement beyond old limitations.',
    image: '/images/tild3233-3233-4563-a130-323032383062-noroot.png',
    imageAlt: 'Kristina Chulka outside The Law Society in London',
    promise: 'Practical tools for confidence, attention, and new inner responses in real situations.',
    details: ['Applied coaching', 'Confidence work', 'Clear-mind tools'],
  },
  {
    slug: 'mindfulness-coaching',
    eyebrow: 'Mindful living',
    title: 'Mindfulness Coaching',
    shortTitle: 'Mindfulness',
    summary:
      'A grounded introduction to mindful living through body awareness, meditation, calm focus, relationship quality, purpose, goals, and art therapy.',
    intro:
      'Mindfulness coaching creates a steady bridge between the body, emotions, attention, relationships, and everyday choices. It is gentle, practical work for people who want to live with more calm, presence, and direction.',
    price: 'From £110',
    duration: '75 minutes',
    idealFor: [
      'Learning mindful living',
      'Listening to the body',
      'Staying calm and focused',
      'Improving relationships',
      'Purpose, goals, meditation, and art therapy',
    ],
    groups: [
      {
        title: 'Introduction to mindful living',
        items: ['listening to the body', 'staying calm and focused', 'improving relationships'],
      },
      {
        title: 'Meditation',
        items: ['simple meditation practice', 'attention training', 'returning to presence through the body'],
      },
      {
        title: 'Purpose and goals',
        items: ['clarifying what matters now', 'aligning goals with inner state', 'choosing sustainable next steps'],
      },
      {
        title: 'Art therapy',
        items: ['creative expression', 'soft access to feelings and meaning', 'integrating insight through image and form'],
      },
    ],
    outcomes: [
      'a calmer relationship with the body and emotions',
      'more stable attention',
      'clearer goals that feel internally aligned',
      'creative ways to process meaning and feeling',
    ],
    closing:
      'This format is especially useful when a person needs softness, structure, and a calmer relationship with themselves.',
    image: '/images/tild3831-3130-4963-a336-613462306338-noroot.png',
    imageAlt: 'Supportive moment during social and personal development work',
    promise: 'Gentle structure for returning to the body, calming the mind, and choosing aligned next steps.',
    details: ['Mindful living', 'Meditation', 'Creative integration'],
  },
]

export const serviceBySlug = Object.fromEntries(services.map((service) => [service.slug, service])) as Record<string, ServiceItem>
