import React from 'react'
import Jumbotron from '../components/Jumbotron'
import Footer from '../components/Footer'
// import RegisterPage from '../components/RegisterPage'
// import LoginPage from '../components/Login'
// import ThankYou from '../components/ThankYou'
// import Dashbord from '../components/Dashbord'
// import Recent from '../components/Recent'
import PropertyPurchased from '../components/PropertyPurchased'


const Blog = () => {
  return (
    <div className='blog'>
      
      <Jumbotron title='Welcome to Our Blog' description=" stay informed with the latest trend, tips and insights from the world of real estate.  "/>
      {/* <RegisterPage/> */}
      {/* <LoginPage/> */}
      {/* <ThankYou/> */}
      {/* <Dashbord/> */}
      {/* <Recent/> */}
      <PropertyPurchased/>
      <Footer/>
    </div>
  )
}

export default Blog