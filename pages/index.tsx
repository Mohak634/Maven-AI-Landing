import Navbar from '@/sections/Navbar/Navbar'
import Hero from '@/sections/Hero/Hero'
import Process123 from '@/sections/WorkflowSteps/Process123'
import Features from '@/sections/Features/Features'
import UseCases from '@/sections/UseCases/UseCases'
import Security from '@/sections/Security/Security'
import Testimonials from '@/sections/Testimonials/Testimonials'
import Pricing from '@/sections/Pricing/Pricing'
import About from '@/sections/About/About'
import Footer from '@/sections/Footer/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Process123 />
      <Features />
      <UseCases />
      <Security />
      <Testimonials />
      <Pricing />
      <About />
      <Footer />
    </>
  )
}