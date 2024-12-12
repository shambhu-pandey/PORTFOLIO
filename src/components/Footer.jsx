import React from 'react'
import { FaGithub } from 'react-icons/fa6'
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>

    <hr />
    <footer className='py-12'>
  <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
   <div className='flex flex-col items-center justify-center'>
    {/* <div className='flex  space-x-4'>
      <FaGithub size={24}/>
      <FaLinkedin size={24} />
    </div> */}
    <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
  <p className='text-sm'>&copy; 2024 Shambhu Pandey. All rights reserved.</p>
  <p className='text-sm'>Designed and developed with ❤️ by Shambhu Pandey</p>
  <div className='flex space-x-4 mt-4'>
  <a href="https://github.com/shambhu-pandey" className='text-sm hover:text-gray-500' target='_blank' rel='noopener noreferrer'><FaGithub size={24}/> GitHub </a>
  <a href="mailto:shambhupandey1008@gmail.com" className='text-sm hover:text-red-500'><MdEmail size ={24}/> Email</a>
</div>

</div>

   </div>
  </div>
    </footer>
    </>
  )
}

export default Footer
