import React, { useEffect, useState } from "react";
import pic from "../../public/shambhuu.jpg";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import {Link} from "react-scroll";

const Navbar = () => {
  // state manage kar rhe hai menu par click hai ki nhi 
  const[menu , setMenu] = useState(false);
  const navItems = [
    {
     id:1,
     text:"Home"
    },
    {
      id:2,
      text:"About"
     },
     {
      id:3,
      text:"Portfolio"
     },
    //  {
    //   id:4,
    //   text:"Experiance"
    //  },
     {
      id:5,
      text:"Contacts"
     },
  ]
  return (
    <>
    {/* max width diye hai full screen par container reponsive ke liye margin x axis se auto padding x se 4 shadow-md par height 16 de diye navbar ka toh shadow bhi aa jaayega   , z-50 se aur bg-white se jo navbar me ja rha tha usko manage kar liye*/}
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-18  fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-18">
                  <div className=" flex space-x-2">
                    <img src={pic} className="h-12 w-12 rounded-full" alt=""/>
                    <h1 className="font-semibold text-xl cursor-pointer">Shambhu <span className="text-orange-500 text-2xl">P</span>andey
                    <p className="text-sm">Web Developer</p>
                    </h1>
                  </div>
                   <div>
                    {/* chote device par hidden kiye hai aur bde par dikha rhe hai  */}
                    {/* desktop navabr */}
                    <ul className="hidden md:flex space-x-8 ">
                         {/* <li>Home</li>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Experience</li>
                    <li>Contacts</li> */}
                     
                     {
                      navItems.map(({id , text})=>(
                       <li className=" hover:scale-105 duration-200 cursor-pointer" key={id}>
                        <Link 
                        to={text}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        activeClass="active"
                        > {text}</Link>
                        </li>
                      ))
                     }
                    </ul>
                    {/*menu desktop aur mobile ke middle me rkhenge desktop me hidden aur mobile me dikhayenge */}
                    <div onClick={()=>setMenu(!menu)} className="md:hidden"> {menu ? 
                      <IoCloseSharp size={24}/> :<IoMenu size={24}/>}
                    </div>
                   
                   </div>
        </div>
        {/* mobile navbar */}
         {/* medium  device par hidden kiye hai aur chote par dikhega  */}
         {
          menu && (
             <div className="bg-white">
        <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl"> 
                  {/* <li>Home</li>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Experience</li>
                    <li>Contacts</li> */}
                     {
                      navItems.map(({id , text})=>(
                       <li className=" hover:scale-150 duration-200 cursor-pointer" key={id}>
                        <Link 
                        to={text}
                        onClick={()=>setMenu(!menu)} 
                        smooth={true}
                        duration={500}
                        offset={-70}
                        activeClass="active"
                        > {text}</Link>
                        </li>
                      ))
                     }
                    </ul>
      </div>
          )
         }
        
      </div>
    </>
  );
};

export default Navbar;
