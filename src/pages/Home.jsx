import React from 'react'
import Hero from '../components/Hero'
import ExcellenceSection from '../components/ExcellenceSection'
import CoreServices from '../components/CoreServices'
import ChooseSection from '../components/ChooseSection'
import TestimonialSection from '../components/TestimonialSection'


const Home = () => {
  return (
    <>
      <Hero /> 
      <ExcellenceSection /> 
      <CoreServices /> 
      <ChooseSection />
      <TestimonialSection />
    </>
  )
}

export default Home