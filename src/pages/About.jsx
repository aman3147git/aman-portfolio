import React from "react";
import { motion } from "framer-motion";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaReact, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";

const About = () => {
  const menus = [
    { label: "Javascript", icon: <AiOutlineJavaScript /> },
    { label: "React", icon: <FaReact /> },
    { label: "Mongodb", icon: <SiMongodb /> },
    { label: "Express", icon: <SiExpress /> },
    { label: "Nodejs", icon: <FaNodeJs /> },
    { label: "CSS", icon: <FaCss3Alt /> },
    { label: "Firebase", icon: <IoLogoFirebase /> },
    { label: "Nextjs", icon: <RiNextjsFill /> },
  ];

  return (
    <motion.div
      id="/about"
      className="relative max-w-4xl mx-auto p-4 text-white mt-[20px] md:mt-[80px]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      
      <motion.div
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-700 to-orange-600 blur-3xl opacity-10 "
      ></motion.div>

      <h1 className="uppercase font-bold text-4xl text-center relative z-10">About Me</h1>
      <motion.p
        className="text-center mt-4 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-pink-600">Aman Chaudhary</span>, a dedicated college student passionate about technology and innovation. I'm currently pursuing my BTech degree at <span className="text-pink-600">IIIT Bhagalpur</span> in Computer Science and Engineering.<br />
        I am constantly seeking opportunities to expand my knowledge and apply what I learn to real-world projects, so feel free to reach out if you'd like to chat or work together!
      </motion.p>

      <h1 className="uppercase text-3xl font-bold text-center mt-6 relative z-10">My Skills</h1>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6 relative z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {menus.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col justify-center items-center rounded-lg border shadow-lg bg-gradient-to-r from-green-700 to-slate-700 p-6 hover:scale-110 duration-200 relative z-10"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-5xl text-purple-600">{item.icon}</span>
            <h1 className="font-bold text-xl mt-2">{item.label}</h1>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default About;
