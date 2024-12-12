import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped,Typed } from "react-typed";


import shambhu  from "../../public/shambhuu.jpg";
function Home() {
  return (
    <>
    {/* screen set kar liye aur my-20 se top button par 20 kar margin diye hai */}
    <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>

{/* by default flex rhega but mobile device me flex-column  */}
      <div className='flex flex-col md:flex-row'>

      {/* medium ya us se jyada device par half half width de diye dono taraph dekhayega one side text other side img  aur medium device par 24 ka to p se margin aur small me 12*/}
      <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
      <span className='text-xl'>Welcome In My Feed</span>
<div className='flex space-x-1 text-2xl md:text-4xl'>
  <h1>Hello, I'm a </h1>
  <ReactTyped
    className='text-green-500 font-bold'
    strings={["Developer", "Programmer", "Coder"]}
    typeSpeed={40}
    backSpeed={50}
    loop={true}
  />
</div>
<br />
<p className='text-sm md:text-justify'>
  I’m Shambhu, a web developer and BCA student. I'm passionate about building user-friendly applications and exploring new technologies. I have developed several projects using React, Bootstrap, HTML, and CSS, and Javascript  which showcase my skills in creating engaging web experiences. I'm excited to share my journey in web development, and I look forward to learning and growing with each project.
</p>
<br />


        <div className='flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-center'>
        {/* social media items */}
        <div className='space-y-2'>
          <h1 className='font-bold'>Available On</h1>
          <ul className='flex space-x-5' >
            <li>         
              <a href="https://github.com/shambhu-pandey" target="_blank">
              <FaGithub className='text-2xl cursor-pointer'/>
              </a>
           </li>
           <li>
            <a href="https://www.linkedin.com/in/shambhu-pandey-b15bb3325/" target="_blank">
          <FaLinkedin className='text-2xl cursor-pointer'/>
          </a>
           </li>
          </ul>
        </div>

        {/* currently working on isme link add nhi karenge isliye div me hi le liye hai mongo , express  , react ko   */}
        {/* <divc className="space-y-2">
        <h1 className='font-bold'>Currently working on </h1>
          <div className='flex space-x-5' >
          <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
          <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
          <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
          <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
          </div>
        </divc> */}
        </div>
      </div>
      <div className='md:w-1/2 md:ml-48  md:mt-20 order-1 mt-8'>
      <img src={shambhu} alt="shambhu pic" className='rounded-full md:w-[450px] md:h-[450px]' />
      </div>

      </div>
      
    </div>
    
    <hr></hr>
    </>
  )
}

export default Home