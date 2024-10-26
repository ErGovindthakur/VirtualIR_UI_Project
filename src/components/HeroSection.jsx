import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const HeroSection = () => {
  return (
    <div>
    <div className='flex items-center mt-6 flex-col lg:mt-20'>
     <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
     VirtualR Build <span className='bg-gradient-to-r from-orange-500 to-orange-900  text-transparent bg-clip-text'>for Developer</span>
     </h1>

     <p  className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>Empower your creativity and bring your VR app ideas  to life with our intuitive Development tools. Get Started today and turn your imagination into reality</p>

     <div className='flex justify-center my-10'>
          <a href='#' className='bg-gradient-to-r from-orange-500 to-orange-900 text-white py-3 px-4 rounded-md'>Start for free</a>

          <a href='#' className='py-3 px-4 rounded-md mx-3 border border-white'>
               Documentation
          </a>
     </div>
{/* Here is our video section  */}
     <div className='flex mt-100 justify-center'>
          <video autoPlay loop muted className='rounded-lg w-[45%] border border-orange-700 shadow-orange-500 mx-2 my-4'>
               <source src={video1} type='video/mp4'></source>
               your browser does not support video tag
          </video>
          <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-500 mx-2 my-4'>
               <source src={video2} type='video/mp4'></source>
               your browser does not support video tag
          </video>
     </div>
    </div>
    </div>
  )
}

export default HeroSection