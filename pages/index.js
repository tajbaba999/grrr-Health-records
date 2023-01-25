import About from '@/components/About'
import ContactUs from '@/components/ContactUs'
import FeaturesSection from '@/components/FeaturesSection'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import React from 'react'

const index = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <About />
      <ContactUs />
      <Footer />
    </>
  )
}

export default index