import React from 'react'
import Hero from '../components/home/Hero'
import TechnicalOverview from '../components/home/TechnicalOverview'
import FeaturedProjects from '../components/home/FeaturedProjects'
import EngineeringApproach from '../components/home/EngineeringApproach'
const Home = () => {
  return (
    <div>
      <Hero/>
      <TechnicalOverview/>
      <FeaturedProjects/>
      <EngineeringApproach/>
    </div>
  )
}

export default Home