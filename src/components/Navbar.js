import React, {useState}  from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { BsFillPersonLinesFill } from "react-icons/bs";
const Navbar = () => {
   const [nav,setNav] = useState(false)
   const handleClick = () => setNav(!nav)

  
  
  return (
    <div  className='fixed w-full h-20 flex justify-between items-center px-4 bg-[#090e12] text-gray-300'>
      Himanshu Saraswati
    
      {/* Menu */}
     
   <ul className='hidden md:flex '>
    <li>Home</li>
    <li>About</li> 
    <li>Skills</li>
    <li>Works</li>
    <li>Contact</li>
 </ul>

 {/* Hamburger */}
 <div  onClick={handleClick} className='md:hidden z-10 cursor-pointer'> 
  {!nav ? <FaBars /> : <FaTimes />}
 </div>
 {/* Mobile Menu */}
 
  <ul className={ !nav ? 'hidden'  : 'absolute top-0 left-0 w-full h-screen bg-[#090e12] flex flex-col justify-center items-center' }>
    <li className='py-6 text-4xl'>Home</li>
    <li className='py-6 text-4xl'>About</li> 
    <li className='py-6 text-4xl'>Skills</li>
    <li className='py-6 text-4xl'>Works</li>
    <li className='py-6 text-4xl'>Contact</li>

  </ul>



{/* Social icons */}
<div className=' hidden lg:flex fixed flex-col top-[35%] left-0'>
<ul>
  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
   <a className='flex justify-between items-center w-full text-gray-300' 
   href="/">
Linkedin <FaLinkedin size={30} />
</a>
  </li>
  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#232624]'>
   <a className='flex justify-between items-center w-full text-gray-300' 
   href="/">
Github <FaGithub size={30} />
</a>
  </li><li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#bbc7bf]'>
   <a className='flex justify-between items-center w-full text-black' 
   href="/">
E-mail <CiMail size={30} />
</a>
  </li><li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3c4545]'>
   <a className='flex justify-between items-center w-full  text-gray-300' 
   href="/">
Resume <BsFillPersonLinesFill size={30} />
</a>
  </li>
</ul>
</div>

</div>
  )
}

export default Navbar
