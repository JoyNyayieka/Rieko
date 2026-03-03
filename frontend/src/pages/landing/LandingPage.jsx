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
      <section id="hero"><Hero /></section>
      <section id="about"><About/></section>      
      <FAQs/>
      <ExpertCTA/>
      <section id="contact"><ContactUI/></section>      
    </LandingLayout>
  )
}
