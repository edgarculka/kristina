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
  slug: 'consultation',
  title: 'Initial consultation',
  shortTitle: 'Consultation',
  price: '£50',
  duration: '30 minutes',
  note: 'A shorter, lower-cost first meeting to clarify the request and choose the right format.',
}

export const bookingTimes = ['10:00', '12:00', '14:00', '16:00', '18:00']

export const services: ServiceItem[] = [
  {
    slug: 'family-constellations',
    eyebrow: 'Main service',
    title: 'Family and systemic constellations',
    shortTitle: 'Family constellations',
    summary:
      'Deep systemic work for family patterns, money, relationships, and recurring situations.',
    intro:
      'The central service for seeing hidden family, money, relationship, or business dynamics clearly.',
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
          'financial ceiling',
          'repeated business scenarios',
          'inner tension despite success',
          'important decisions or transitions',
        ],
      },
      {
        title: 'Money and family-system scenarios',
        items: [
          'family money stories',
          'fear of success or growth',
          'income blocks',
          'safety versus scale',
          'right to income and stability',
        ],
      },
      {
        title: 'Personal crises and growth points',
        items: ['pause safely', 'hear yourself', 'build inner support', 'find a clear direction'],
      },
    ],
    outcomes: [
      'clearer view of the hidden structure behind the request',
      'more grounded decisions',
      'less pressure around money, family, or responsibility',
      'a calmer internal position from which to act',
    ],
    closing:
      'A constellation supports calmer decisions by making the hidden structure visible.',
    image: '/images/generated/kristina-family-constellations.png',
    imageAlt: 'Kristina Culka guiding a private systemic constellation session with wooden figures on a consultation table',
    promise: 'A quiet space to see what has been influencing the system underneath the visible problem.',
    details: ['Private 1:1 format', 'Systemic lens', 'Deep request work'],
  },
  {
    slug: 'nlp-coaching',
    eyebrow: 'Coaching',
    title: 'NLP coaching',
    shortTitle: 'NLP coaching',
    summary:
      'Practical tools for confidence, clear thinking, focus, and emotional regulation.',
    intro:
      'Focused coaching for thoughts, language, emotions, and everyday responses.',
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
          'language and perception',
          'new responses to familiar situations',
          'self-regulation tools',
        ],
      },
      {
        title: 'Confidence',
        items: ['public speaking', 'body confidence', 'being seen calmly'],
      },
      {
        title: 'Clear mind',
        items: ['focus', 'panic responses', 'mental noise'],
      },
      {
        title: 'Unblock limitations',
        items: ['limiting beliefs', 'inner permission', 'recovery after difficulty'],
      },
    ],
    outcomes: [
      'more confidence in communication and presence',
      'better focus on what matters',
      'practical tools for moments of panic or pressure',
      'movement beyond old limiting beliefs',
    ],
    closing:
      'This format is practical: confidence, regulation, and movement beyond old limits.',
    image: '/images/generated/kristina-nlp-coaching.png',
    imageAlt: 'Kristina Culka providing private NLP coaching with a notebook and coaching cards',
    promise: 'Practical tools for confidence, attention, and new inner responses in real situations.',
    details: ['Applied coaching', 'Confidence work', 'Clear-mind tools'],
  },
  {
    slug: 'mindfulness-coaching',
    eyebrow: 'Mindful living',
    title: 'Mindfulness coaching',
    shortTitle: 'Mindfulness',
    summary:
      'Mindful living through body awareness, meditation, calm focus, goals, and creative tools.',
    intro:
      'Gentle practical work for more calm, presence, body awareness, and direction.',
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
        items: ['body listening', 'calm focus', 'relationship quality'],
      },
      {
        title: 'Meditation',
        items: ['simple practice', 'attention training', 'return to presence'],
      },
      {
        title: 'Purpose and goals',
        items: ['what matters now', 'aligned goals', 'sustainable next steps'],
      },
      {
        title: 'Art therapy',
        items: ['creative expression', 'feelings and meaning', 'image and form'],
      },
    ],
    outcomes: [
      'a calmer relationship with the body and emotions',
      'more stable attention',
      'clearer goals that feel internally aligned',
      'creative ways to process meaning and feeling',
    ],
    closing:
      'This format gives softness, structure, and a calmer relationship with yourself.',
    image: '/images/generated/kristina-mindfulness-coaching.png',
    imageAlt: 'Kristina Culka guiding a private mindfulness coaching session in a calm room',
    promise: 'Gentle structure for returning to the body, calming the mind, and choosing aligned next steps.',
    details: ['Mindful living', 'Meditation', 'Creative integration'],
  },
]

export const serviceBySlug = Object.fromEntries(services.map((service) => [service.slug, service])) as Record<string, ServiceItem>
