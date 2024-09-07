import React from 'react';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Jumbotron title='Have any Questions?' description="We are available, contact us." />
      <main className="flex-1 flex items-center justify-center p-6 transform md:w-[90%] mx-auto">
        <div className="w-full  p-6 bg-gray-100 rounded-lg shadow-md lg:h-[695px]">
          <h1 className="text-2xl font-bold mb-4 text-center">Get in Touch with Us</h1>
          <p className="mb-8 text-center">
            We're here to help you with all your real estate needs. Whether you have questions about buying
            or selling a property, need advice on the market, or want to schedule a viewing, our team is ready
            to assist you. Please fill out the form below or reach out to us directly through the provided
            contact information.
          </p>
          <form className='lg:space-y-10' action="" method="post">
          <div  className="flex flex-wrap gap-4 mb-4 ">
            <div className="flex-1">
              <input
                type="text"
                placeholder='Full name'
                required
                className='w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm sm:text-sm'
              />
            </div>
            <div className="flex-1">
              <input
                type="email"
                placeholder='Email address'
                required
                className='w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm sm:text-sm'
              />

            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-4 ">
            <div className="flex-1">
              <input
                type="tel"
                placeholder='Phone number'
                required
                className='w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm sm:text-sm'
              />
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder='Subject'
                required
                className='w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm sm:text-sm'
              />
            </div>
          </div>
          <textarea
            placeholder='Write your message here'
            required
            rows="6"
            className='w-full lg:h-[257px] px-3 py-3 border border-gray-300 rounded-lg shadow-sm sm:text-sm mb-4'
          />
          <button
            type="submit"
            className='w-2/5 py-3 px-4 bg-[#9FA007] text-white font-semibold rounded-full shadow-md hover:bg-[#8d8d44] ml-80 text-decoration-none '
             
          >
            Write your message here
          </button>
          </form>
         
         
          
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
