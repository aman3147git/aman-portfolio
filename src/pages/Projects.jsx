import React, { useState } from 'react'
import image3 from "../assets/image3.png"
const Projects = () => {
  const [open,setOpen]=useState(null);
  const menus=[
    {
      items:"A REACTjs project using firebase which showcase a platform where we can buy clothes",
      link:"",
      go:"Project1",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZLsUW0Frhko3i7GoUS5dbanBZA-Yh5Vzg4w&s"
    },
    {
      items:"A MERN project where we can chat with our friends on real time basis which is implemented using socket.io",
      link:"",
      go:"Project2",
      image:"data:image/png;base64,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"
    },
    {
      items:"A social media platform using NEXTjs where we can share our thoughts to other people",
      link:"",
      go:"Project3",
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