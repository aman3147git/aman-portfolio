import React, { useState } from 'react'
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
const Projects = () => {
  const [open,setOpen]=useState(null);
  const menus=[
    {
      items:"Spotify-like music streaming platform using MERN stack, featuring authentication, playlists, and smooth UI",
      link:"https://aman-spotify.onrender.com",
      go:"view 1",
      image:image1
    },
    {
      items:"Developed a modern real estate platform with MERN stack, enabling users to seamlessly rent or sell properties",
      link:"https://marketplace-48gl.onrender.com",
      go:"view 2",
      image:image2
    },
    {
      items:"Built a dynamic social media platform with Next.js, where users can share their thoughts and engage effortlessly.",
      link:"https://life-log-sage.vercel.app",

      go:"view 3",
      image:image3
    }
  ]
  return (
    <div id='/project' className='mt-[40px] md:mt-[90px]'>
        <h1 className='font-bold text-3xl uppercase'>My Projects</h1>
        <div className="">
        <div className="flex flex-col gap-3 text-black mt-4">
          {
            menus.map((item,index)=>(
              <div className="hover:scale-110 duration-75 ">
              <div key={index} className="p-8 bg-zinc-500 rounded-lg  flex justify-between items-center text-white shadow-lg">
                <a href={item.link} className='hover:underline'>{item.items}</a>
                <button onClick={()=>setOpen(open===item.go?null:item.go)} className='p-3 bg-gradient-to-tr from-pink-700 to-slate-700 text-white font-semibold rounded-lg '>{open===item.go?"Cancel":item.go}</button>
              </div>
              {
                open===item.go &&(
                  <div className=" mt-2 rounded-lg border border-white">
                    <img className='w-full object-cover h-[300px]' src={item.image} alt="" />
                    
                  </div>
                )
              }
              </div>
              
            ))
            
          }
        </div>
        
        </div>
        
    </div>
    
  )
}

export default Projects