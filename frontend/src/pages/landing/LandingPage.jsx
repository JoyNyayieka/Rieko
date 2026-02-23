import React from 'react'
import LandingLayout from '../../layouts/LandingLayout'
import Hero from '../../components/landingpage/Hero/Hero'
import About from '../../components/landingpage/About'
import FAQs from '../../components/landingpage/FAQs'
import ContactUI from '../../components/landingpage/ContactUI/ContactUI'
import ExpertCTA from '../../components/landingpage/ExpertCTA'


export default function LandingPage() {
  return (
    <LandingLayout>
        <Hero />
        <About/>
        <FAQs/>
        <ExpertCTA/>
        <ContactUI/>
    </LandingLayout>
  )
}
