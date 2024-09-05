import React from 'react'
import Jumbotron from '../components/Jumbotron'
import Footer from '../components/Footer'


const Blog = () => {
  return (
    <div className='blog'>
      
      <Jumbotron title='Welcome to Our Blog' description=" stay informed with the latest trend, tips and insights from the world of real estate.  "/>
      
      <Footer/>
    </div>
  )
}

export default Blog