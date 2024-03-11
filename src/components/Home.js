import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div  name='home' className='bg-[#090e12] w-full h-screen '>
      
      {/* container */}

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <p className='text-pink-600'>Hi, my name is</p>
      <h1 className='text-4xl sm:text-6xl font-bold text-white'>Himanshu Saraswati</h1>
      <h2 className='text-3xl sm:text-5xl font-bold text-[#b0aeac]'>I'm a Full-Stack Web Developer</h2>
      <p className='text-[#b0aeac] py-4 max-w-[700px]'>I'm a Full-Stack developer specialiazing in building (and ocassionally designing) exceptional digital experiences. Currently, I'm focused on building responsive full-stack web applications. </p>
      <div>
        <button className=' text-white  group flex items-center border-2 px-6 py-2 hover:bg-pink-700 hover:border-pink-700 + '>View Work
         <span className=' ml-4  group-hover:rotate-90 duration-300'><HiArrowNarrowRight /></span></button>
      </div>
       </div>
    </div>
  )
}

export default Home
