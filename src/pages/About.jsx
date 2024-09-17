import React from 'react'
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
const About = () => {
  const menus=[
    {
      label:"Javascript",
      icon:<AiOutlineJavaScript/>
    },
    {
      label:"React",
      icon:<FaReact/>
    },
    {
      label:"Mongodb",
      icon:<SiMongodb/>
    },
    {
      label:"Express",
      icon:<SiExpress/>
    },
    {
      label:"Nodejs",
      icon:<FaNodeJs/>
    },
    {
      label:"CSS",
      icon:<FaCss3Alt/>
    },
    {
      label:"Firebase",
      icon:<IoLogoFirebase/>
    },
    {
      label:"Nextjs",
      icon:<RiNextjsFill/>
    },
    
  ]
  return (
    <div id='/about' className='max-w-4xl mx-auto p-4   text-white mt-[90px]    '>
        <h1 className='uppercase font-bold text-4xl'>About Me</h1>
        <div className=''>
        
          <p>Hi, I'm Aman Chaudhary,a dedicated college student with a passion for technology and innovation,currently pursuing my BTech degree at <span className='text-pink-600'>IIIT Bhagalpur </span>in Computer Science and Engineering.<br/>
           I am constantly seeking opportunities to expand my knowledge and apply what I learn to real-world projects, so feel free to reach out if you'd like to chat or work together!

</p>
        </div>
        <h1 className='uppercase  text-3xl font-bold text-center mt-3'>Skills</h1>
        <div className=" gap-4 sm:p-16  grid grid-cols-2 sm:grid-cols-4 mt-4 md:mt-0" >
        {
          menus.map((item,index)=>(
            
              <div className="flex flex-col justify-center items-center rounded-lg border shadow-lg bg-gradient-to-r from-green-700 to-slate-700 hover:scale-90 duration-150 gap-4" key={index}>
              <span className='text-4xl'>{item.icon}</span>
              <h1 className='font-bold text-3xl'>{item.label}</h1>
              </div>
            
          ))
        }
        </div>
    </div>
  )
} 

export default About