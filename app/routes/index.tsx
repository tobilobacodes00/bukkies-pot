import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeaturedDishes from '../components/FeaturedDishes'
import Menu from '../components/Menu'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'
import CTABanner from '../components/CTABanner'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div style={{ fontFamily: "'Comfortaa', cursive" }}>
      <header>
        <Navbar />
      </header>

      <main id="main-content" className="pt-24 md:pt-28">
        <Hero />
        <Menu />
        <WhyChooseUs />
        <Testimonials />
        <Gallery />
        <CTABanner />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
