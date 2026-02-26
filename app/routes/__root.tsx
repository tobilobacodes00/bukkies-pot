/// <reference types="../vite-env" />
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from '@tanstack/react-router'
import appCss from '../styles/app.css?url'

const SITE_URL = 'https://bukkiespot.com'
const BUSINESS_NAME = "Bukkie's Pot"
const CONTACT_EMAIL = 'Bukkiespot_help@yahoo.com'
const INSTAGRAM_URL = 'https://instagram.com/bukkiespot'

const PRIMARY_PHONE_LOCAL = '08161671113'
const SECONDARY_PHONE_LOCAL = '08119705930'
const PRIMARY_PHONE_E164 = '+2348161671113'
const SECONDARY_PHONE_E164 = '+2348119705930'

const PRIMARY_WHATSAPP_URL = 'https://wa.me/2348161671113'
const SECONDARY_WHATSAPP_URL = 'https://wa.me/2348119705930'

const LOGO_IMAGE = `${SITE_URL}/images/logo.png`
const OG_IMAGE = `${SITE_URL}/images/og-image.jpeg`

const DESCRIPTION =
  "Nigeria's trusted plug for quality, flavorful meals. Great Food, Just like Home. Food bowls, party trays, event catering, and rental services served with excellence."

const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#local-business`,
      name: BUSINESS_NAME,
      image: LOGO_IMAGE,
      url: SITE_URL,
      description: DESCRIPTION,
      slogan: 'Great Food, Just like Home',
      telephone: [PRIMARY_PHONE_E164, SECONDARY_PHONE_E164],
      email: CONTACT_EMAIL,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'NG',
      },
      areaServed: 'NG',
      servesCuisine: ['Nigerian', 'African'],
      currenciesAccepted: 'NGN',
      priceRange: 'NGN',
      sameAs: [INSTAGRAM_URL, PRIMARY_WHATSAPP_URL, SECONDARY_WHATSAPP_URL],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          telephone: PRIMARY_PHONE_E164,
          email: CONTACT_EMAIL,
          areaServed: 'NG',
          availableLanguage: ['en'],
        },
        {
          '@type': 'ContactPoint',
          contactType: 'WhatsApp',
          telephone: PRIMARY_PHONE_E164,
          url: PRIMARY_WHATSAPP_URL,
          areaServed: 'NG',
          availableLanguage: ['en'],
        },
        {
          '@type': 'ContactPoint',
          contactType: 'WhatsApp',
          telephone: SECONDARY_PHONE_E164,
          url: SECONDARY_WHATSAPP_URL,
          areaServed: 'NG',
          availableLanguage: ['en'],
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Catering Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Food Bowls' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Food Trays' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Event Catering' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rental Services' } },
        ],
      },
    },
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: BUSINESS_NAME,
      url: SITE_URL,
      logo: LOGO_IMAGE,
      sameAs: [INSTAGRAM_URL, PRIMARY_WHATSAPP_URL, SECONDARY_WHATSAPP_URL],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          telephone: PRIMARY_PHONE_E164,
          email: CONTACT_EMAIL,
        },
        {
          '@type': 'ContactPoint',
          contactType: 'WhatsApp',
          telephone: PRIMARY_PHONE_E164,
          url: PRIMARY_WHATSAPP_URL,
        },
      ],
    },
  ],
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, viewport-fit=cover',
      },

      { title: `${BUSINESS_NAME} | Quality Meals, Food Trays and Event Catering` },
      { name: 'description', content: DESCRIPTION },
      { name: 'robots', content: 'index, follow' },
      { name: 'theme-color', content: '#f97316' },
      { name: 'language', content: 'English' },

      { property: 'og:type', content: 'business.business' },
      { property: 'og:url', content: SITE_URL },
      { property: 'og:site_name', content: BUSINESS_NAME },
      { property: 'og:title', content: `${BUSINESS_NAME} | Great Food, Just like Home` },
      {
        property: 'og:description',
        content:
          'Quality food bowls, party trays, event catering and rentals. Fresh, flavorful, and delivered with excellence.',
      },
      { property: 'og:image', content: OG_IMAGE },
      { property: 'og:image:width', content: '901' },
      { property: 'og:image:height', content: '901' },
      { property: 'og:image:type', content: 'image/jpeg' },
      {
        property: 'og:image:alt',
        content:
          "Bukkie's Pot branded logo with the slogan Great Food, Just like Home.",
      },
      { property: 'og:locale', content: 'en_NG' },
      { property: 'business:contact_data:country_name', content: 'Nigeria' },
      { property: 'business:contact_data:phone_number', content: PRIMARY_PHONE_E164 },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@bukkiespot' },
      { name: 'twitter:creator', content: '@bukkiespot' },
      { name: 'twitter:title', content: `${BUSINESS_NAME} | Great Food, Just like Home` },
      {
        name: 'twitter:description',
        content: `Food bowls, party trays, event catering and rentals. Call ${PRIMARY_PHONE_LOCAL} or ${SECONDARY_PHONE_LOCAL}. WhatsApp us now.`,
      },
      { name: 'twitter:image', content: OG_IMAGE },
      {
        name: 'twitter:image:alt',
        content: `${BUSINESS_NAME} logo and branding for Nigerian catering services.`,
      },
    ],
    links: [
      { rel: 'canonical', href: SITE_URL },
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap',
      },
      { rel: 'stylesheet', href: appCss },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(STRUCTURED_DATA),
      },
    ],
  }),
  notFoundComponent: RootNotFound,
  component: RootComponent,
})

function RootNotFound() {
  return (
    <main
      id="main-content"
      className="min-h-[60vh] flex items-center justify-center px-6 py-16 text-center"
      style={{ fontFamily: "'Comfortaa', cursive" }}
    >
      <div>
        <h1 className="text-3xl font-bold text-[#1a0f05] mb-3">Page Not Found</h1>
        <p className="text-[#6b5a4e] mb-6">
          The page you requested does not exist.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-[#f97316] px-6 py-3 text-sm font-bold text-white hover:bg-orange-600 transition-colors"
        >
          Go Back Home
        </a>
      </div>
    </main>
  )
}

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body
        style={{
          fontFamily: "'Comfortaa', cursive",
          backgroundColor: '#fffbf0',
        }}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}
