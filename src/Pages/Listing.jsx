import React from 'react'
import Footer from '../components/Footer'
import Jumbotron from '../components/Jumbotron'

import PropertySearchLayout from '../components/PropertySearchLayout'


const Listing = () => {
  return (
    <div className='Listing'>
      
      <Jumbotron title='Find The Best Properties' description=" Descover a wide range of exclusive properties tailored to your unique preferences.  "/>
      <PropertySearchLayout/>
      <Footer/>
    </div>
  )
}

export default Listing