import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import FeaturedProperty from '../components/FeaturedProperty'
import HowitworksDb from '../components/Howitworks'
import OurListings from '../components/OurListings'
import MeetOurAgents from '../components/MeetOurAgents'

import backgroundImage from '../assets/Images/Line 3.png'; 


const Home = () => {
  return (
    <div>

      <Hero/>
      <FeaturedProperty/>
     <HowitworksDb/>
      <OurListings/>
      <MeetOurAgents/>
      <Footer/>
    </div>
  )
}

export default Home