// import React from 'react'
// import { TypeAnimation } from 'react-type-animation';
// import { FaInstagram } from "react-icons/fa";
// import { CiLinkedin } from "react-icons/ci";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaGithub } from "react-icons/fa";
// const Home = () => {
//   return (
//     <div id='/' className='max-w-4xl mx-auto grid grid-cols-2 p-4 items-center  text-white gap-[160px] mt-[100px] '>
//          <div className=" flex flex-col gap-3">
//             <p className='font-bold text-2xl'>Hi, I am <span className='uppercase text-orange-500'>Aman</span> </p>
//             <h1 className="text-3xl sm:text-5xl font-bold">
//             <TypeAnimation
//               sequence={[
                
//                 "Programmer",
//                 1000,

//                 "Coder",
//                 1000,
//               ]}
//               wrapper="span"
//               speed={50}
              
//               repeat={Infinity}
//             />
//             </h1>
//             <strong className=' text-3xl uppercase'>a fullStack <span className='text-red-500'>developer</span></strong>
//             <div className="flex gap-6 ">
//             <a href="https://www.instagram.com/" className='text-purple-700 hover:scale-105 duration-75'><FaInstagram size={"30px"}/></a>
//             <a href="https://www.linkedin.com/in/aman-chaudhary-15a372259/" className='text-purple-700 hover:scale-105 duration-75'><CiLinkedin size={"30px"}/></a>
//             <a href="" className='text-purple-700 hover:scale-105 duration-75'><FaXTwitter size={"30px"}/></a>
//             <a href="https://github.com/aman3147git" className='text-purple-700 hover:scale-105 duration-75'><FaGithub size={"30px"}/></a>
//             </div>
          
//          </div>
//          <div className="md:ml-[100px]">
//             <img className='animate__animated animate__zoomInDown rounded-full w-[260px] h-[140px] sm:w-[240px] sm:h-[240px] hover:brightness-50' src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="photo" />
//          </div>
//     </div>
//   )
// }

// export default Home
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div id='/' className='max-w-4xl mx-auto grid grid-cols-2 p-4 items-center text-white gap-[160px] mt-[100px]'>
      <motion.div 
        className="flex flex-col gap-3"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <p className='font-bold text-2xl'>
          Hi, I am <span className='uppercase text-orange-500'>Aman</span>
        </p>
        <h1 className="text-3xl sm:text-5xl font-bold">
          <TypeAnimation
            sequence={[
              "Programmer", 1000,
              "Coder", 1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <strong className='text-3xl uppercase'>
          a fullStack <span className='text-red-500'>developer</span>
        </strong>
        <motion.div 
          className="flex gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <a href="https://www.instagram.com/" className='text-purple-700 hover:scale-105 duration-75'>
            <FaInstagram size={"30px"} />
          </a>
          <a href="https://www.linkedin.com/in/aman-chaudhary-15a372259/" className='text-purple-700 hover:scale-105 duration-75'>
            <CiLinkedin size={"30px"} />
          </a>
          <a href="" className='text-purple-700 hover:scale-105 duration-75'>
            <FaXTwitter size={"30px"} />
          </a>
          <a href="https://github.com/aman3147git" className='text-purple-700 hover:scale-105 duration-75'>
            <FaGithub size={"30px"} />
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="md:ml-[100px]"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 150, damping: 10 }}
      >
        <img 
          className='animate__animated animate__zoomInDown rounded-full w-[260px] h-[140px] sm:w-[240px] sm:h-[240px] hover:brightness-50' 
          src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" 
          alt="photo" 
        />
      </motion.div>
    </div>
  );
}

export default Home;
